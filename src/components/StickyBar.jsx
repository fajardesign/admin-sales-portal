/**
 * Bagian halaman yang tetap terlihat saat konten shell di-scroll (tab atau baris filter). Menempel di tepi atas area konten,
 * tepat di bawah PageHeader (top negatif = padding atas konten AdminShell, karena sticky menghormati padding kontainer scroll); latar putih menutupi baris yang lewat di bawahnya. flush = elemen pertama halaman (tab) menempel langsung
 * ke PageHeader tanpa jarak (menutup padding atas konten).
 */
export function StickyBar({ flush = false, children }) {
  return (
    <div style={{
      position: 'sticky', top: 'calc(var(--space-24) * -1)', zIndex: 5, background: 'var(--bg-white-0)', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)',
      paddingBlock: flush ? '0 var(--space-8)' : 'var(--space-8)', marginTop: flush ? 'calc(var(--space-24) * -1)' : undefined,
    }}>
      {children}
    </div>
  );
}
