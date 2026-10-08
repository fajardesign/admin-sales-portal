import { normalizePhone } from './format.js';

export const MSG = {
  required: 'Informasi wajib diisi',
  invalid: 'Format tidak valid',
  max100: 'Maksimal 100 karakter',
  max255: 'Maksimal 255 karakter',
  noApl: 'Belum ada APL aktif di area ini. Buat akun APL terlebih dahulu.',
  noTl: 'Belum ada TL aktif di area ini. Buat akun TL terlebih dahulu.',
};

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^8\d{7,11}$/; // setelah normalisasi: diawali 8, total 8–12 digit
const USERNAME_RE = /^[a-z0-9._-]{4,30}$/;
const NAME_RE = /^[A-Za-zÀ-ÿ .'-]+$/;

/**
 * Validasi form Tambah Pengguna (PRD §3B). leaders = opsi leader valid untuk role+area terpilih.
 * Return { field: pesan } — kosong berarti valid.
 */
export function validateUserForm(form, { leaders = [] } = {}) {
  const e = {};
  const email = form.email.trim().toLowerCase();
  if (!email) e.email = MSG.required;
  else if (email.length > 254 || !EMAIL_RE.test(email)) e.email = MSG.invalid;

  const phone = normalizePhone(form.phone);
  if (!phone) e.phone = MSG.required;
  else if (!PHONE_RE.test(phone)) e.phone = MSG.invalid;

  const username = form.username.trim();
  if (!username) e.username = MSG.required;
  else if (!USERNAME_RE.test(username)) e.username = MSG.invalid;

  const name = form.fullName.trim();
  if (!name) e.fullName = MSG.required;
  else if (name.length > 100) e.fullName = MSG.max100;
  else if (!NAME_RE.test(name)) e.fullName = MSG.invalid;

  if (!form.role) e.role = MSG.required;
  if (form.role === 'TL' && !form.tlLevel) e.tlLevel = MSG.required;
  if (form.role && form.role !== 'REVIEWER' && form.areaIds.length === 0) e.areaIds = MSG.required;
  if (['TL', 'SR', 'SA'].includes(form.role) && form.areaIds.length > 0) {
    if (leaders.length === 0) e.leaderId = form.role === 'TL' ? MSG.noApl : MSG.noTl;
    else if (!form.leaderId) e.leaderId = MSG.required;
  }
  return e;
}

/** Alasan wajib, maks. 255 karakter (ubah status, nonaktifkan, Perlu Revisi). */
export function validateReason(v) {
  const t = (v || '').trim();
  if (!t) return MSG.required;
  if (t.length > 255) return MSG.max255;
  return undefined;
}

/** Kode Referral partner: wajib, huruf dan angka saja, maks. 20 karakter (revisi stakeholder 2026-10-08). */
export function validateReferralCode(v) {
  const t = (v || '').trim();
  if (!t) return MSG.required;
  if (t.length > 20) return 'Maksimal 20 karakter';
  if (!/^[A-Za-z0-9]+$/.test(t)) return MSG.invalid;
  return undefined;
}

/** File PKS: PDF, maks. 5 MB (opsional). */
export function validatePksFile(file) {
  if (!file) return undefined;
  if (!/\.pdf$/i.test(file.name) && file.type !== 'application/pdf') return 'Format file harus PDF.';
  if (file.size > 5 * 1024 * 1024) return 'Ukuran file maksimal 5 MB.';
  return undefined;
}

/** Kebijakan password aktivasi (PRD §3C): min 8, 1 huruf besar, 1 huruf kecil, 1 angka, tidak sama dengan username. */
export function passwordPolicy(pw, username) {
  return [
    { label: 'Minimal 8 karakter', ok: pw.length >= 8 },
    { label: '1 huruf besar', ok: /[A-Z]/.test(pw) },
    { label: '1 huruf kecil', ok: /[a-z]/.test(pw) },
    { label: '1 angka', ok: /\d/.test(pw) },
    { label: 'Tidak sama dengan username', ok: pw.length > 0 && pw.toLowerCase() !== (username || '').toLowerCase() },
  ];
}
