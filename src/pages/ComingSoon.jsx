import emptyState from '@ds/assets/illustrations/empty-states/finance-saved-actions.png';

/** Placeholder untuk menu yang belum dibangun. */
export function ComingSoon({ title }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-12)', padding: 'var(--space-48) 0', textAlign: 'center' }}>
      <img src={emptyState} alt="" style={{ width: 'calc(var(--space-48) * 3)' }} />
      <span style={{ font: 'var(--label-md)', color: 'var(--text-strong-950)' }}>Halaman {title} belum tersedia</span>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Menu ini sedang dalam pengembangan.</span>
    </div>
  );
}
