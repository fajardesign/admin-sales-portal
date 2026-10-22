import { lockDate, monthStatus } from '../api/scope3.js';
import { perfMonths } from '../api/mockApi.js';
import { formatRp, formatYmd } from './format.js';

/** Helper tampilan PRD Scope 3 (web). */
export const signedRp = (n) => `${n > 0 ? '+' : n < 0 ? '−' : ''}${formatRp(Math.abs(n))}`;

/** Keterangan bulan (FR-IN-001): Berjalan = estimasi; Menunggu rekonsiliasi = final pada lock; Final. */
export function monthNote(ym) {
  const st = monthStatus(ym);
  if (st === 'BERJALAN') return 'Estimasi — pengajuan dan pencairan bulan ini';
  if (st === 'REKONSILIASI') return `Menunggu rekonsiliasi — final ${formatYmd(lockDate(ym))}`;
  return `Final sejak ${formatYmd(lockDate(ym))}`;
}

/** Bulan bawaan: q bila valid, selain itu bulan terbaru (finalOnly = hanya bulan Final). */
export const defaultMonth = (q, finalOnly = false) => {
  const months = [...perfMonths()].reverse().filter((m) => !finalOnly || monthStatus(m) === 'FINAL');
  return months.includes(q) ? q : months[0] ?? null;
};
