// S&P Portal — login aplikasi mobile (Android) untuk akun yang dibuat di Account Management.
// POST { identifier: email | username, password } → 200 { session, user } atau 4xx { error }.
// error: INVALID | LOCKED | DISABLED | NOT_ACTIVATED | FORBIDDEN_PLATFORM (role bukan TL/SR/SA) | BAD_REQUEST.
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

const MOBILE_ROLES = ['TL', 'SR', 'SA']; // platform sales-app-access
const MAX_FAILS = 5;
const LOCK_MS = 15 * 60_000;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'METHOD_NOT_ALLOWED' }, 405);

  let identifier = '';
  let password = '';
  try {
    const b = await req.json();
    identifier = String(b.identifier ?? '').trim().toLowerCase();
    password = String(b.password ?? '');
  } catch { /* ditangani di bawah */ }
  if (!identifier || !password) return json({ error: 'BAD_REQUEST' }, 400);

  const col = identifier.includes('@') ? 'email' : 'username';
  const { data: u } = await admin.from('app_user').select('*').eq(col, identifier).maybeSingle();
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

  if (!MOBILE_ROLES.includes(u.role)) {
    await anon.auth.signOut();
    return json({ error: 'FORBIDDEN_PLATFORM', role: u.role }, 403);
  }

  const { failed_attempts: _f, lock_until: _l, log: _log, ...profile } = u;
  return json({ session: data.session, user: profile });
});
