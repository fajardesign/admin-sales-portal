// S&P Portal — sinkronisasi Account Management (portal admin) → Supabase (tabel app_user + Supabase Auth).
// Dipanggil oleh admin-sales-portal (src/api/supabaseSync.js) dengan header `x-sp-sync-key`.
// Aksi:
//   { action: 'list' }                                  → { users: AppUser[] }
//   { action: 'upsert', users: AppUser[], passwords? }  → { users: AppUser[] }   (passwords: { [id]: string })
// Setiap app_user punya satu akun Supabase Auth (email = email app_user). Status selain ACTIVE → akun Auth diblokir (ban),
// jadi hanya akun Active yang bisa login di aplikasi mobile.
import { createClient } from 'npm:@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type, x-sp-sync-key, authorization, apikey, x-client-info',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const COLS = [
  'id', 'full_name', 'role', 'username', 'email', 'phone', 'tl_level', 'area_ids', 'supervisor_id', 'partner_id', 'status',
  'invite_sent_at', 'invite_resend_count', 'activated_at', 'disabled_at', 'disabled_by', 'disabled_reason', 'reset_sent_at',
  'created_by', 'created_at', 'log',
] as const;
const BANNED = '876000h';

type Row = Record<string, unknown> & { id: number; email: string; status: string; auth_user_id?: string | null };

function pick(u: Record<string, unknown>): Row {
  const r: Record<string, unknown> = {};
  COLS.forEach((c) => { if (c in u) r[c] = u[c]; });
  return r as Row;
}

async function ensureAuth(row: Row, prev: Row | undefined, password?: string): Promise<string> {
  const ban = row.status === 'ACTIVE' ? 'none' : BANNED;
  const meta = { app_user_id: row.id, role: row.role };
  let authId = prev?.auth_user_id ?? null;
  if (!authId) {
    const { data, error } = await admin.auth.admin.createUser({
      email: row.email, email_confirm: true, password: password ?? crypto.randomUUID() + 'Aa1!', app_metadata: meta, ban_duration: ban,
    });
    if (error) {
      // Akun Auth dengan email ini sudah ada (mis. sinkron sebelumnya terputus) → pakai ulang.
      const { data: list } = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
      const found = list?.users.find((x) => x.email?.toLowerCase() === row.email.toLowerCase());
      if (!found) throw error;
      authId = found.id;
    } else {
      return data.user.id;
    }
  }
  const patch: Record<string, unknown> = { app_metadata: meta, ban_duration: ban };
  if (!prev || prev.email !== row.email) { patch.email = row.email; patch.email_confirm = true; }
  if (password) patch.password = password;
  const { error } = await admin.auth.admin.updateUserById(authId, patch);
  if (error) throw error;
  return authId;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json({ error: 'METHOD_NOT_ALLOWED' }, 405);

  const key = req.headers.get('x-sp-sync-key') ?? '';
  const { data: ok } = await admin.rpc('sp_check_sync_key', { k: key });
  if (!key || ok !== true) return json({ error: 'UNAUTHORIZED' }, 401);

  let body: { action?: string; users?: Record<string, unknown>[]; passwords?: Record<string, string> };
  try { body = await req.json(); } catch { return json({ error: 'BAD_REQUEST' }, 400); }

  if (body.action === 'list') {
    const { data, error } = await admin.from('app_user').select('*').order('id');
    if (error) return json({ error: error.message }, 500);
    return json({ users: data });
  }

  if (body.action === 'upsert') {
    const rows = (body.users ?? []).map(pick);
    if (!rows.length) return json({ users: [] });
    const { data: existing, error: e1 } = await admin.from('app_user').select('*').in('id', rows.map((r) => r.id));
    if (e1) return json({ error: e1.message }, 500);
    const prevById = new Map((existing ?? []).map((r: Row) => [r.id, r]));

    // Simpan profil dulu (supervisor bisa menunjuk baris lain di batch yang sama), lalu buat/ubah akun Auth.
    const { error: e2 } = await admin.from('app_user').upsert(rows, { onConflict: 'id' });
    if (e2) return json({ error: e2.message, code: e2.code }, e2.code === '23505' ? 409 : 500);

    const failed: { id: number; error: string }[] = [];
    for (const row of rows) {
      try {
        const authId = await ensureAuth(row, prevById.get(row.id), body.passwords?.[String(row.id)]);
        if (prevById.get(row.id)?.auth_user_id !== authId) {
          const { error } = await admin.from('app_user').update({ auth_user_id: authId }).eq('id', row.id);
          if (error) throw error;
        }
      } catch (e) {
        failed.push({ id: row.id, error: (e as Error).message });
      }
    }
    const { data } = await admin.from('app_user').select('*').in('id', rows.map((r) => r.id));
    return json({ users: data, failed }, failed.length ? 207 : 200);
  }

  return json({ error: 'UNKNOWN_ACTION' }, 400);
});
