import { Icon } from '@ds/index.js';

/** Timeline riwayat (status partner, log akun, perubahan skema). items: [{ key, icon?, title, meta, body? }] terbaru di atas. */
export function Timeline({ items, empty = 'Belum ada riwayat.' }) {
  if (!items.length) return <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{empty}</span>;
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
      {items.map((it, i) => (
        <li key={it.key ?? i} style={{ display: 'flex', gap: 'var(--space-12)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ width: 32, height: 32, flex: 'none', borderRadius: 'var(--rounded-full)', boxShadow: 'var(--shadow-stroke)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--icon-sub-600)', background: 'var(--bg-white-0)' }}>
              <Icon name={it.icon ?? 'HistoryLine'} size={16} />
            </span>
            {i < items.length - 1 && <span style={{ flex: 1, width: 1, background: 'var(--stroke-soft-200)', minHeight: 'var(--space-16)' }} />}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', paddingBottom: 'var(--space-16)', minWidth: 0 }}>
            <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{it.title}</span>
            <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{it.meta}</span>
            {it.body && <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)', overflowWrap: 'anywhere' }}>{it.body}</span>}
          </div>
        </li>
      ))}
    </ol>
  );
}
