import { Badge, TabMenuVertical } from '@ds/index.js';

/**
 * Panel status kiri dengan jumlah per status (Partner Pipeline, Account Management).
 * groups: [{ title?, items: [{ value, label, count }] }]
 */
export function StatusRail({ groups, value, onChange, ariaLabel }) {
  return (
    <nav aria-label={ariaLabel} style={{ width: 232, flex: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', padding: 'var(--space-12)', borderRadius: 'var(--rounded-16)', boxShadow: 'var(--shadow-stroke)', background: 'var(--bg-white-0)', alignSelf: 'flex-start' }}>
      {groups.map((g, i) => (
        <TabMenuVertical key={g.title ?? i} title={g.title} value={value} onChange={onChange} style={{ width: '100%' }}
          items={g.items.map((it) => ({ value: it.value, label: it.label, badge: <Badge color={it.value === value ? 'blue' : 'gray'} type="number">{String(it.count ?? 0)}</Badge> }))} />
      ))}
    </nav>
  );
}
