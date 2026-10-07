import { formatPct, formatRp } from '../../lib/format.js';

/** Ringkasan satu komponen skema dalam satu baris. */
export function componentSummary(c) {
  if (c.type === 'fixed') return `${c.label}: ${formatRp(c.amount)} ${c.basis}`;
  if (c.type === 'percent') return `${c.label}: ${formatPct(c.rate, 2)} ${c.basis}`;
  const top = c.type === 'tierAbove' ? [...c.tiers].sort((a, b) => b.above - a.above)[0] : [...c.tiers].sort((a, b) => a.below - b.below)[0];
  return `${c.label}: ${c.tiers.length} tier, maks. ${formatPct(top.rate, 2)}`;
}

/** Label baris tier: "> 120%" / "< 10%"; baris sisa "≤ 55%" / "≥ 13%" = 0%. */
export const tierLabel = (c, t) => (c.type === 'tierAbove' ? `Pencapaian > ${t.above}%` : `MFP < ${t.below}%`);
export const restLabel = (c) => {
  if (c.type === 'tierAbove') return `Pencapaian ≤ ${Math.min(...c.tiers.map((t) => t.above))}%`;
  return `MFP ≥ ${Math.max(...c.tiers.map((t) => t.below))}%`;
};
