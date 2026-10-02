// Navigasi sidebar — struktur "Utama" / "Atur" mengikuti ui_kits/bisnis-web/Shell.jsx.
export const NAV = [
  { title: 'Utama', items: [
    { label: 'Beranda', value: 'home', icon: 'HomeSmile2Line' },
    { label: 'Leads', value: 'leads', icon: 'TeamLine', chevron: true },
    { label: 'Pengajuan', value: 'applications', icon: 'FileTextLine', chevron: true },
    { label: 'Nasabah', value: 'customers', icon: 'User3Line', chevron: true },
    { label: 'Target & Kinerja', value: 'performance', icon: 'BarChartLine', chevron: true },
  ] },
  { title: 'Atur', items: [
    { label: 'Manajemen Pengguna', value: 'users', icon: 'UserLine', chevron: true },
    { label: 'Produk', value: 'products', icon: 'BriefcaseLine', chevron: true },
    { label: 'Notifikasi', value: 'notifications', icon: 'NotificationLine', chevron: true },
  ] },
];

export const PAGE_META = {
  home: { title: 'Beranda', description: 'Ringkasan kinerja penjualan tim Anda.' },
  leads: { title: 'Leads', description: 'Kelola prospek dan tindak lanjut penjualan.' },
};
