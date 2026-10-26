/**
 * Bagian halaman yang tetap terlihat saat konten shell di-scroll (tab atau baris filter). Menempel di tepi atas area konten,
 * di bawah PageHeader; latar putih menutupi baris yang lewat di bawahnya.
 */
export function StickyBar({ children }) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 5, background: 'var(--bg-white-0)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', paddingBlock: 'var(--space-8)' }}>
      {children}
    </div>
  );
}
