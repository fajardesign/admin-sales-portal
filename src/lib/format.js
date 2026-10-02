const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
const pad = (n) => String(n).padStart(2, '0');

/** 81234567890 → "+62 812-3456-7890" (nomor disimpan tanpa 0/62 di depan). */
export const formatPhone = (p) => `+62 ${p.slice(0, 3)}-${p.slice(3, 7)}-${p.slice(7)}`;

/** Date → { date: "02 Okt 2026", time: "10.15 WIB" } (WIB = UTC+7). */
export function formatDateWIB(dt) {
  const w = new Date(dt.getTime() + 7 * 3600e3);
  return {
    date: `${pad(w.getUTCDate())} ${MONTHS[w.getUTCMonth()]} ${w.getUTCFullYear()}`,
    time: `${pad(w.getUTCHours())}.${pad(w.getUTCMinutes())} WIB`,
  };
}

/** Normalisasi input telepon: buang non-digit, prefix 62 dan 0 di depan. */
export function normalizePhone(v) {
  let d = (v || '').replace(/\D/g, '');
  if (d.startsWith('62')) d = d.slice(2);
  if (d.startsWith('0')) d = d.slice(1);
  return d;
}

export const fullName = (u) => u.firstName + (u.lastName ? ` ${u.lastName}` : '');
export const initials = (u) => (u.firstName[0] + (u.lastName ? u.lastName[0] : '')).toUpperCase();
