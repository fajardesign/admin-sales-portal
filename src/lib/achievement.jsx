import { ProgressBar } from '@ds/index.js';
import { formatPct } from './format.js';

/** Sel pencapaian target: ProgressBar + persen (≥100 hijau, ≥70 oranye, sisanya merah). */
export function achievementCell(actual, target) {
  if (!target) return '-';
  const pct = (actual / target) * 100;
  const color = pct >= 100 ? 'green' : pct >= 70 ? 'orange' : 'red';
  return { misc: true, children: (
    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', minWidth: 140 }}>
      <ProgressBar value={Math.min(100, pct)} color={color} style={{ flex: 1 }} />
      <span style={{ font: 'var(--label-xs)', color: 'var(--text-strong-950)', whiteSpace: 'nowrap' }}>{formatPct(pct)}</span>
    </span>
  ) };
}
