// Sinkronisasi Account Management → Supabase (tabel app_user + Supabase Auth) agar akun bisa login di aplikasi mobile.
// Aktif hanya bila VITE_SUPABASE_URL dan VITE_SP_SYNC_KEY diset (lihat .env.example); tanpa itu portal tetap murni mock.
// Data di memori (db.js) tetap jadi sumber UI; Supabase menerima salinan setiap perubahan akun lewat Edge Function sp-account-admin.
import { DEMO_PASSWORD } from './db.js';

const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const SYNC_KEY = import.meta.env.VITE_SP_SYNC_KEY;
export const SYNC_ENABLED = Boolean(URL && SYNC_KEY) && import.meta.env.MODE !== 'test';

async function call(body) {
  const res = await fetch(`${URL}/functions/v1/sp-account-admin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-sp-sync-key': SYNC_KEY, ...(KEY ? { apikey: KEY } : {}) },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok && res.status !== 207) throw new Error(data.error ?? `HTTP ${res.status}`);
  if (data.failed?.length) console.warn('[supabase] sebagian akun Auth gagal disinkronkan', data.failed);
  return data;
}

const iso = (d) => (d ? new Date(d).toISOString() : null);
const date = (s) => (s ? new Date(s) : null);

function toRow(u) {
  return {
    id: u.id, full_name: u.fullName, role: u.role, username: u.username, email: u.email, phone: u.phone ?? null,
    tl_level: u.tlLevel ?? null, area_ids: u.areaIds ?? [], supervisor_id: u.supervisorId ?? null, partner_id: u.partnerId ?? null,
    status: u.status, invite_sent_at: iso(u.inviteSentAt), invite_resend_count: u.inviteResendCount ?? 0,
    activated_at: iso(u.activatedAt), disabled_at: iso(u.disabledAt), disabled_by: u.disabledBy ?? null,
    disabled_reason: u.disabledReason ?? null, reset_sent_at: iso(u.resetSentAt), created_by: u.createdBy ?? null,
    created_at: iso(u.createdAt), log: (u.log ?? []).map((l) => ({ at: iso(l.at), text: l.text })),
  };
}

function fromRow(r, local) {
  return {
    ...local,
    id: Number(r.id), fullName: r.full_name, role: r.role, username: r.username, email: r.email, phone: r.phone ?? '',
    tlLevel: r.tl_level, areaIds: r.area_ids ?? [], supervisorId: r.supervisor_id == null ? null : Number(r.supervisor_id),
    partnerId: r.partner_id, status: r.status, inviteSentAt: date(r.invite_sent_at), inviteResendCount: r.invite_resend_count,
    activatedAt: date(r.activated_at), disabledAt: date(r.disabled_at), disabledBy: r.disabled_by, disabledReason: r.disabled_reason,
    resetSentAt: date(r.reset_sent_at), createdBy: r.created_by, createdAt: date(r.created_at),
    log: (r.log ?? []).map((l) => ({ at: date(l.at), text: l.text })),
    password: local?.password ?? null, fails: local?.fails ?? 0, lockUntil: local?.lockUntil ?? null,
  };
}

/**
 * Saat portal dibuka: bila tabel kosong, unggah data contoh (akun Active memakai password demo agar bisa dicoba di mobile);
 * bila sudah ada, timpa data memori dengan isi Supabase supaya perubahan sebelumnya tidak hilang setelah reload.
 */
export async function hydrateUsers(users) {
  if (!SYNC_ENABLED) return false;
  try {
    const { users: rows = [] } = await call({ action: 'list' });
    if (!rows.length) {
      const passwords = Object.fromEntries(users.filter((u) => u.status === 'ACTIVE').map((u) => [u.id, DEMO_PASSWORD]));
      await call({ action: 'upsert', users: users.map(toRow), passwords });
      return false;
    }
    rows.forEach((r) => {
      const i = users.findIndex((u) => u.id === Number(r.id));
      if (i >= 0) users[i] = fromRow(r, users[i]); else users.push(fromRow(r));
    });
    return true;
  } catch (e) {
    console.warn('[supabase] gagal memuat akun', e);
    return false;
  }
}

/** Kirim perubahan satu akun (fire-and-forget). password diisi saat aktivasi / reset password. */
export function syncUser(u, password) {
  if (!SYNC_ENABLED || !u) return;
  call({ action: 'upsert', users: [toRow(u)], ...(password ? { passwords: { [u.id]: password } } : {}) })
    .catch((e) => console.warn('[supabase] gagal menyinkronkan akun', u.id, e));
}
