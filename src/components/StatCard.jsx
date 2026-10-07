import { useState } from 'react';
import { Icon, KeyIcon } from '@ds/index.js';

/** Kartu angka ringkas (KPI). onClick → kartu menjadi tombol yang membuka daftar terfilter. */
export function StatCard({ icon, color = 'gray', label, value, hint, onClick }) {
  const [hover, setHover] = useState(false);
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag type={onClick ? 'button' : undefined} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 'var(--space-12)', padding: 'var(--space-16)', borderRadius: 'var(--rounded-16)', border: 0, textAlign: 'left',
        background: hover && onClick ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', boxShadow: hover && onClick ? 'none' : 'var(--shadow-stroke)', cursor: onClick ? 'pointer' : 'default', minWidth: 0,
        transition: 'background var(--duration-fast) var(--ease-standard)',
      }}>
      {icon && <KeyIcon icon={icon} color={color} variant="lighter" size="md" />}
      <span style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', minWidth: 0 }}>
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{label}</span>
        <span style={{ font: 'var(--title-h6)', color: 'var(--text-strong-950)' }}>{value}</span>
        {hint && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-soft-400)' }}>{hint}</span>}
      </span>
      {onClick && <span style={{ color: 'var(--icon-soft-400)', display: 'flex' }}><Icon name="ArrowRightSLine" /></span>}
    </Tag>
  );
}

/** Grid responsif kartu KPI. */
export const StatGrid = ({ min = 220, children }) => (
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))`, gap: 'var(--space-12)' }}>{children}</div>
);
