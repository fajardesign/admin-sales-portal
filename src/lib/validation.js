import { normalizePhone } from './format.js';

export const MSG = {
  required: 'Informasi wajib diisi',
  invalid: 'Format tidak valid',
  max50: 'Maksimal 50 karakter',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^8\d{7,11}$/; // setelah normalisasi: diawali 8, total 8–12 digit
const NAME_RE = /^[A-Za-zÀ-ÿ .'-]+$/;

/** Validasi form Tambah Pengguna (W2b). Return { field: pesan } — kosong berarti valid. */
export function validateUserForm(form, { lastNameOptional = false } = {}) {
  const e = {};
  const email = form.email.trim().toLowerCase();
  if (!email) e.email = MSG.required;
  else if (email.length > 254 || !EMAIL_RE.test(email)) e.email = MSG.invalid;

  const phone = normalizePhone(form.phone);
  if (!phone) e.phone = MSG.required;
  else if (!PHONE_RE.test(phone)) e.phone = MSG.invalid;

  [['firstName', false], ['lastName', lastNameOptional]].forEach(([k, optional]) => {
    const v = form[k].trim();
    if (!v) { if (!optional) e[k] = MSG.required; }
    else if (v.length > 50) e[k] = MSG.max50;
    else if (!NAME_RE.test(v)) e[k] = MSG.invalid;
  });
  return e;
}

/** Kebijakan password aktivasi (KC1). */
export function passwordPolicy(pw, username) {
  const lower = pw.toLowerCase();
  return [
    { label: 'Minimal 8 karakter', ok: pw.length >= 8 },
    { label: '1 huruf besar', ok: /[A-Z]/.test(pw) },
    { label: '1 huruf kecil', ok: /[a-z]/.test(pw) },
    { label: '1 angka', ok: /\d/.test(pw) },
    { label: 'Bukan username', ok: pw.length > 0 && lower !== username && lower !== username.split('@')[0] },
  ];
}
