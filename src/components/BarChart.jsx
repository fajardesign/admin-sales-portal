import { useState } from 'react';
import { ChartLegend } from '@ds/index.js';

/**
 * Grafik batang vertikal sederhana (DS hanya punya ChartLegend). SVG berbasis token warna.
 * data: [{ label, value, highlight? }]; format(value) untuk label sumbu/tooltip.
 */
export function BarChart({ data, format = String, legend, height = 200, ariaLabel }) {
  const [hover, setHover] = useState(null);
  const max = Math.max(1, ...data.map((d) => d.value));
  const W = 100 / data.length;
  return (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
      <div role="img" aria-label={ariaLabel} style={{ position: 'relative', height, display: 'flex', alignItems: 'flex-end', gap: 'var(--space-12)', borderBottom: '1px solid var(--stroke-soft-200)' }}>
        {data.map((d, i) => (
          <div key={d.label} style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 'var(--space-4)', position: 'relative' }}
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
            <span style={{ font: 'var(--label-xs)', color: hover === i ? 'var(--text-strong-950)' : 'var(--text-sub-600)', whiteSpace: 'nowrap' }}>{format(d.value)}</span>
            <div style={{ width: '60%', maxWidth: 56, height: `${(d.value / max) * 80}%`, minHeight: d.value ? 2 : 0, borderRadius: 'var(--rounded-6) var(--rounded-6) 0 0', background: d.highlight ? 'var(--primary-base)' : 'var(--primary-alpha-24)', transition: 'height var(--duration-base) var(--ease-standard)' }} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 'var(--space-12)' }}>
        {data.map((d) => <span key={d.label} style={{ flex: 1, textAlign: 'center', font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', width: `${W}%` }}>{d.label}</span>)}
      </div>
      {legend && <ChartLegend color="var(--primary-base)">{legend}</ChartLegend>}
    </figure>
  );
}
