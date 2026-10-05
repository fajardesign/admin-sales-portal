/** Empty/error state tabel: ilustrasi 108px + pesan + aksi. */
export function EmptyState({ image, message, action }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-16)', padding: '56px var(--space-24)', textAlign: 'center' }}>
      <img src={image} alt="" style={{ width: 108, height: 108, objectFit: 'contain' }} />
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{message}</span>
      {action}
    </div>
  );
}
