import { tierLabel } from '../../api/mockApi.js';
import { formatPct, formatRp } from '../../lib/format.js';

/** Ringkasan satu komponen skema dalam satu baris. */
export function componentSummary(c) {
  if (c.type === 'fixed') return `${c.label}: ${formatRp(c.amount)} ${c.basis}`;
  if (c.type === 'percent') return `${c.label}: ${formatPct(c.rate, 2)} ${c.basis}`;
  const max = Math.max(...c.tiers.map((t) => t.rate));
  return `${c.label}: ${c.tiers.length} tier, maks. ${formatPct(max, 2)}`;
}
export { tierLabel };
export const VERSION_STATUS = { ACTIVE: { label: 'Aktif', color: 'green' }, SCHEDULED: { label: 'Terjadwal', color: 'blue' }, ARCHIVED: { label: 'Arsip', color: 'gray' } };
