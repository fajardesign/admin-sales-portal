import { lockDate, monthStatus } from '../api/scope3.js';
import { perfMonths } from '../api/mockApi.js';
import { formatRp, formatYmd } from './format.js';

/** Helper tampilan PRD Scope 3 (web). */
export const signedRp = (n) => `${n > 0 ? '+' : n < 0 ? '−' : ''}${formatRp(Math.abs(n))}`;

/** Keterangan bulan (FR-IN-001): Berjalan = estimasi; Menunggu rekonsiliasi = final pada cut-off skema kind; Final. */
export function monthNote(ym, kind = 'SALES') {
  const st = monthStatus(ym, kind);
  if (st === 'BERJALAN') return 'Estimasi — pengajuan dan pencairan bulan ini';
  if (st === 'REKONSILIASI') return `Menunggu rekonsiliasi — final ${formatYmd(lockDate(ym, kind))}`;
  return `Final sejak ${formatYmd(lockDate(ym, kind))}`;
}

/** Bulan bawaan: q bila valid, selain itu bulan terbaru. */
export const defaultMonth = (q) => {
  const months = [...perfMonths()].reverse();
  return months.includes(q) ? q : months[0] ?? null;
};

/**
 * Bulan bawaan Pembayaran Insentif (FR-PY-001): q bila Menunggu rekonsiliasi atau Final; selain itu bulan yang sedang
 * rekonsiliasi, atau bulan Final terbaru.
 */
export const defaultPaymentMonth = (q, kind) => {
  const months = [...perfMonths()].reverse().filter((m) => monthStatus(m, kind) !== 'BERJALAN');
  if (months.includes(q)) return q;
  return months.find((m) => monthStatus(m, kind) === 'REKONSILIASI') ?? months[0] ?? null;
};
