import { currentMonth, monthRange, perfMonths, todayDate } from '../../api/mockApi.js';
import { formatDate, monthLabel } from '../../lib/format.js';

/**
 * Periode dari URL (PRD v3 §B1): default bulan ini; mode "bulan" (?m=YYYY-MM) atau "rentang" (?from=&to= tanggal).
 * Return { mode, month?, from, to, label }.
 */
export function usePeriod(query) {
  const months = perfMonths();
  if (query.get('mode') === 'rentang') {
    const min = `${months[0]}-01`;
    const today = todayDate();
    const clamp = (d, def) => (/^\d{4}-\d{2}-\d{2}$/.test(d ?? '') ? (d < min ? min : d > today ? today : d) : def);
    const from = clamp(query.get('from'), monthRange(currentMonth()).from);
    const toRaw = clamp(query.get('to'), today);
    const to = toRaw < from ? from : toRaw;
    return { mode: 'rentang', from, to, label: `${formatDate(new Date(`${from}T05:00:00Z`))} – ${formatDate(new Date(`${to}T05:00:00Z`))}` };
  }
  const m = months.includes(query.get('m')) ? query.get('m') : currentMonth();
  return { mode: 'bulan', month: m, ...monthRange(m), label: monthLabel(m, true) };
}

/** Cakupan APL: area yang dipegang; ?area= mempersempit ke satu area. */
export function useAplScope(user, query) {
  const area = query.get('area');
  return area && user.areaIds.includes(Number(area)) ? [Number(area)] : user.areaIds;
}

/** Perubahan vs periode sebelumnya: { text: "+5%", color } atau null. */
export function delta(cur, prev) {
  if (!prev) return null;
  const d = Math.round(((cur - prev) / prev) * 100);
  return { text: `${d > 0 ? '+' : ''}${d}%`, color: d > 0 ? 'green' : d < 0 ? 'red' : 'gray' };
}

/** Query filter bersama untuk tautan antar halaman APL (area & periode). */
export const shareQuery = (query) => {
  const keep = ['area', 'mode', 'm', 'from', 'to'];
  return Object.fromEntries([...query.entries()].filter(([k]) => keep.includes(k)));
};
