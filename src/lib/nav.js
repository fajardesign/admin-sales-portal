/**
 * Menu & rute web per feature access role (PRD v3 "Feature access roles" & "Access gate").
 * Menu tampil bila sesi memiliki feature-nya; rute yang dibuka langsung tanpa feature → "Akses ditolak".
 */
const NAV = [
  { title: 'Utama', items: [
    { label: 'Beranda', value: '/beranda', icon: 'HomeSmile2Line', feature: 'DASHBOARD' },
    { label: 'Dashboard', value: '/apl', icon: 'Dashboard3Line', feature: 'SALES_PERFORMANCE' },
    { label: 'Kinerja Penjualan', value: '/apl/kinerja', icon: 'BarChartLine', feature: 'SALES_PERFORMANCE' },
    // APL (keputusan 2026-10-17): Partner + Mapping TL digabung menjadi Toko Aktif (sudut pandang toko).
    { label: 'Toko Aktif', value: '/apl/toko-aktif', icon: 'ShoppingBagLine', feature: 'PARTNER_VIEW' },
    // APL (keputusan 2026-10-20): Produktivitas digabung ke Tim (tab Anggota Tim · Absensi · Kunjungan).
    { label: 'Tim', value: '/apl/tim', icon: 'TeamLine', feature: 'TEAM_VIEW' },
    { label: 'Insentif', value: '/apl/insentif', icon: 'HandCoinLine', feature: 'INCENTIVE_ESTIMATION' },
    { label: 'Skema Insentif', value: '/skema-insentif', icon: 'CoinsLine', feature: 'INCENTIVE_SCHEME' },
    { label: 'Hasil Perhitungan', value: '/hasil-perhitungan', icon: 'FileList2Line', feature: 'INCENTIVE_SCHEME' },
    // PRD Scope 3 (3.7): Admin mencatat pembayaran; Super Admin melihat saja.
    { label: 'Pembayaran Insentif', value: '/pembayaran-insentif', icon: 'Wallet3Line', feature: 'INCENTIVE_PAYMENT' },
  ] },
  // Admin (keputusan 2026-10-16): Utama (Beranda) · Partner (Toko Aktif, Partner Pipeline) · Atur (Manajemen Akun).
  { title: 'Partner', items: [
    { label: 'Toko Aktif', value: '/toko-aktif', icon: 'ShoppingBagLine', feature: 'PARTNER_PIPELINE' },
    { label: 'Partner Pipeline', value: '/partner-pipeline', icon: 'Building2Line', feature: 'PARTNER_PIPELINE' },
  ] },
  { title: 'Atur', items: [
    { label: 'Manajemen Akun', value: '/account-management', icon: 'UserLine', feature: 'ACCOUNT_CREATION' },
  ] },
];

/** Section sidebar yang terlihat untuk sesi. */
export function navFor(session) {
  const f = session?.features ?? [];
  return NAV.map((s) => ({ ...s, items: s.items.filter((i) => f.includes(i.feature)) })).filter((s) => s.items.length);
}

/** Rute lama tanpa menu: tetap dikenal agar tautan lama dialihkan, bukan ke halaman tidak dikenal. */
const ALIASES = { '/apl/produktivitas': 'PRODUCTIVITY_PERFORMANCE_CHECK_IN' };

/** Feature yang dibutuhkan rute (null = rute tidak dikenal). */
export function featureForPath(path) {
  if (path.startsWith('/partner-pipeline/')) return 'PARTNER_PIPELINE';
  if (ALIASES[path]) return ALIASES[path];
  return NAV.flatMap((s) => s.items).find((i) => i.value === path)?.feature ?? null;
}

/** Halaman pertama sesuai role: Admin → Beranda, APL → Dashboard, Super Admin → Skema Insentif. */
export const homeFor = (session) => navFor(session)[0]?.items[0]?.value ?? '/denied';
