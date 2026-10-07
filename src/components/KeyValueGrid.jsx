import { Badge } from '@ds/index.js';

/** Badge penanda field/bagian yang diubah setelah permintaan revisi. */
export const RevisedBadge = () => <Badge color="orange" size="sm">Direvisi</Badge>;

/** Grid label–nilai 2 kolom untuk detail read-only. items: [{ label, value, revised?, full?, hint? }]; nilai kosong → "-". */
export function KeyValueGrid({ items, columns = 2 }) {
  return (
    <dl style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: 'var(--space-16) var(--space-24)', margin: 0 }}>
      {items.filter(Boolean).map((it) => (
        <div key={it.label} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', gridColumn: it.full ? '1 / -1' : undefined, minWidth: 0 }}>
          <dt style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
            {it.label}{it.revised && <RevisedBadge />}
          </dt>
          <dd style={{ margin: 0, font: 'var(--label-sm)', color: 'var(--text-strong-950)', overflowWrap: 'anywhere' }}>
            {it.value === null || it.value === undefined || it.value === '' ? '-' : it.value}
          </dd>
          {it.hint && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-soft-400)' }}>{it.hint}</span>}
        </div>
      ))}
    </dl>
  );
}

/** Kartu bagian detail: judul + badge/aksi kanan + isi. */
export function SectionCard({ title, badge, actions, children, style }) {
  return (
    <section style={{ borderRadius: 'var(--rounded-16)', boxShadow: 'var(--shadow-stroke)', background: 'var(--bg-white-0)', padding: 'var(--space-24)', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', ...style }}>
      {(title || actions) && (
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
            <h3 style={{ margin: 0, font: 'var(--label-md)', color: 'var(--text-strong-950)' }}>{title}</h3>
            {badge}
          </div>
          {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', flexWrap: 'wrap' }}>{actions}</div>}
        </header>
      )}
      {children}
    </section>
  );
}
