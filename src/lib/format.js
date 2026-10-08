const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
export const MONTHS_LONG = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const pad = (n) => String(n).padStart(2, '0');
const wib = (dt) => new Date(new Date(dt).getTime() + 7 * 3600e3);

/** 81234567890 → "+62 812-3456-7890" (nomor disimpan tanpa 0/62 di depan). */
export const formatPhone = (p) => (p ? `+62 ${p.slice(0, 3)}-${p.slice(3, 7)}-${p.slice(7)}` : '-');

/** Date → { date: "02 Okt 2026", time: "10:15 WIB" } (WIB = UTC+7). */
export function formatDateWIB(dt) {
  const w = wib(dt);
  return {
    date: `${pad(w.getUTCDate())} ${MONTHS[w.getUTCMonth()]} ${w.getUTCFullYear()}`,
    time: `${pad(w.getUTCHours())}:${pad(w.getUTCMinutes())} WIB`,
  };
}

/** Jam lokal area: Date + offset UTC (7 WIB, 8 WITA) → "09:45 WITA". */
export function formatTimeLocal(dt, area) {
  if (!dt) return '-';
  const t = new Date(new Date(dt).getTime() + (area?.utcOffset ?? 7) * 3600e3);
  return `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())} ${area?.tz ?? 'WIB'}`;
}
/** Jarak km → "0,4 km". */
export const formatKm = (km) => `${(km ?? 0).toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} km`;

/** Format tampilan PRD: "DD MMM YYYY, HH:mm WIB"; kosong → "-". */
export function formatDateTime(dt) {
  if (!dt) return '-';
  const { date, time } = formatDateWIB(dt);
  return `${date}, ${time}`;
}
export const formatDate = (dt) => (dt ? formatDateWIB(dt).date : '-');

/** Rp 24.000.000 */
export const formatRp = (n) => `Rp\u00A0${Math.round(n || 0).toLocaleString('id-ID')}`; // spasi tak terputus agar "Rp" tidak terpisah dari angka
export const formatNumber = (n) => Math.round(n || 0).toLocaleString('id-ID');
/** 0.85 → "0,85%"; 66.4 → "66%" */
export const formatPct = (n, digits = 0) => `${(n || 0).toLocaleString('id-ID', { minimumFractionDigits: digits, maximumFractionDigits: digits })}%`;

/** Bulan "2026-10" → "Okt 2026" / "Oktober 2026". */
export const monthLabel = (ym, long = false) => {
  const [y, m] = ym.split('-').map(Number);
  return `${(long ? MONTHS_LONG : MONTHS)[m - 1]} ${y}`;
};

/** Sisa waktu tautan aktivasi: "2 hari 5 jam", "20 jam 15 menit", "45 menit". */
export function formatDuration(ms) {
  const m = Math.max(0, Math.floor(ms / 60000));
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (d > 0) return h % 24 > 0 ? `${d} hari ${h % 24} jam` : `${d} hari`;
  return h > 0 ? `${h} jam ${m % 60} menit` : `${m} menit`;
}

/** Normalisasi input telepon: buang non-digit, prefix 62 dan 0 di depan. */
export function normalizePhone(v) {
  let d = (v || '').replace(/\D/g, '');
  if (d.startsWith('62')) d = d.slice(2);
  if (d.startsWith('0')) d = d.slice(1);
  return d;
}

export const dash = (v) => (v === null || v === undefined || v === '' ? '-' : v);
