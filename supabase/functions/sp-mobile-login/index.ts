// S&P Portal — login aplikasi mobile (Android) untuk akun yang dibuat di Account Management.
// POST { identifier: email | nomor telepon, password, platform? } → 200 { session, user, access } atau 4xx { error }.
// platform: 'sales-app-access' (default, aplikasi Android TL/SR/SA) | 'partner-web-access' (Partner Dashboard, Partner PIC).
// Cek akses mengikuti roles_matrix (PRD v3): realm role → platform access → feature access roles.
// error: INVALID | LOCKED | DISABLED | NOT_ACTIVATED | FORBIDDEN_PLATFORM (platform role ≠ platform aplikasi) | BAD_REQUEST.
// Nomor telepon: 08…, 62…, +62…, 8… dianggap sama (disimpan ternormalisasi 8…). Username tidak dipakai (revisi 2026-10-08).
// Setelah login, aplikasi memakai session ini dengan supabase-js (`auth.setSession`) dan bisa membaca profilnya
// sendiri dari tabel app_user (RLS: auth_user_id = auth.uid()).
import { createClient } from 'npm:@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type, authorization, apikey, x-client-info',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

const URL_ = Deno.env.get('SUPABASE_URL')!;
const opts = { auth: { autoRefreshToken: false, persistSession: false } };
const admin = createClient(URL_, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, opts);

// Role mapping PRD v3 (okf_repository_design/products/sales_dashboard/roles_matrix.md). Kode role portal REVIEWER = realm ADMIN.
const SALES_COMMON = ['ATTENDANCE', 'VISIT_EXECUTION', 'LOAN_TRACKING', 'SALES_PERFORMANCE', 'PRODUCTIVITY_PERFORMANCE_CHECK_IN',
  'PRODUCTIVITY_PERFORMANCE_VISIT', 'INCENTIVE_ESTIMATION', 'PARTNER_VIEW'];
const ACCESS: Record<string, { realmRole: string; platform: string; features: string[] }> = {
  REVIEWER: { realmRole: 'ADMIN', platform: 'web-access', features: ['DASHBOARD', 'PARTNER_PIPELINE', 'ACCOUNT_CREATION'] },
  APL: { realmRole: 'APL', platform: 'web-access', features: ['SALES_PERFORMANCE', 'PRODUCTIVITY_PERFORMANCE_CHECK_IN', 'PRODUCTIVITY_PERFORMANCE_VISIT', 'INCENTIVE_ESTIMATION', 'PARTNER_VIEW', 'TEAM_VIEW'] },
  TL: { realmRole: 'TL', platform: 'sales-app-access', features: ['PARTNER_ACQUISITION', 'SALES_ASSIGNMENT', 'VISIT_PLAN_MANAGEMENT', ...SALES_COMMON, 'TEAM_VIEW'] },
  SR: { realmRole: 'SR', platform: 'sales-app-access', features: ['PARTNER_ACQUISITION', ...SALES_COMMON] },
  SA: { realmRole: 'SA', platform: 'sales-app-access', features: SALES_COMMON },
  PARTNER: { realmRole: 'PARTNER', platform: 'partner-web-access', features: ['PARTNER_SALES_DASHBOARD', 'PARTNER_COMMISSION', 'PARTNER_PROFILE', 'TRANSACTION_INQUIRY', 'DOCUMENT_REPOSITORY'] },
};
const PLATFORMS = ['sales-app-access', 'partner-web-access'];
/** Normalisasi nomor telepon sama dengan portal (format.js normalizePhone). */
const normalizePhone = (v: string) => {
  let d = v.replace(/\D/g, '');
  if (d.startsWith('62')) d = d.slice(2);
  if (d.startsWith('0')) d = d.slice(1);
  return d;
};
const MAX_FAILS = 5;
const LOCK_MS = 15 * 60_000;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'METHOD_NOT_ALLOWED' }, 405);

  let identifier = '';
  let password = '';
  let platform = 'sales-app-access';
  try {
    const b = await req.json();
    identifier = String(b.identifier ?? '').trim().toLowerCase();
    password = String(b.password ?? '');
    if (b.platform) platform = String(b.platform);
  } catch { /* ditangani di bawah */ }
  if (!identifier || !password || !PLATFORMS.includes(platform)) return json({ error: 'BAD_REQUEST' }, 400);

  const byEmail = identifier.includes('@');
  const value = byEmail ? identifier : normalizePhone(identifier);
  if (!value) return json({ error: 'INVALID' }, 401);
  const { data: u } = await admin.from('app_user').select('*').eq(byEmail ? 'email' : 'phone', value).maybeSingle();
  if (!u || !u.auth_user_id) return json({ error: 'INVALID' }, 401);
  if (u.lock_until && new Date(u.lock_until).getTime() > Date.now()) return json({ error: 'LOCKED', lockUntil: u.lock_until }, 423);

  // Akun non-Active diblokir (ban) di Auth sehingga password tidak bisa diverifikasi → tolak langsung sesuai status.
  if (u.status === 'DISABLED') return json({ error: 'DISABLED' }, 403);
  if (u.status === 'PENDING') return json({ error: 'NOT_ACTIVATED' }, 403);

  const anon = createClient(URL_, Deno.env.get('SUPABASE_ANON_KEY')!, opts);
  const { data, error } = await anon.auth.signInWithPassword({ email: u.email, password });

  if (error || !data.session) {
    const fails = (u.failed_attempts ?? 0) + 1;
    const lock = fails >= MAX_FAILS;
    await admin.from('app_user').update({
      failed_attempts: lock ? 0 : fails, lock_until: lock ? new Date(Date.now() + LOCK_MS).toISOString() : null,
    }).eq('id', u.id);
    return json({ error: lock ? 'LOCKED' : 'INVALID' }, lock ? 423 : 401);
  }

  if (u.failed_attempts || u.lock_until) await admin.from('app_user').update({ failed_attempts: 0, lock_until: null }).eq('id', u.id);

  const access = ACCESS[u.role];
  if (!access || access.platform !== platform) {
    await anon.auth.signOut();
    return json({ error: 'FORBIDDEN_PLATFORM', role: u.role }, 403);
  }

  const { failed_attempts: _f, lock_until: _l, log: _log, ...profile } = u;
  return json({ session: data.session, user: profile, access });
});
