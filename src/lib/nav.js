/**
 * Menu & rute web per feature access role (PRD v3 "Feature access roles" & "Access gate").
 * Menu tampil bila sesi memiliki feature-nya; rute yang dibuka langsung tanpa feature → "Akses ditolak".
 */
const NAV = [
  { title: 'Utama', items: [
    { label: 'Beranda', value: '/beranda', icon: 'HomeSmile2Line', feature: 'DASHBOARD' },
    { label: 'Partner Pipeline', value: '/partner-pipeline', icon: 'Building2Line', feature: 'PARTNER_PIPELINE' },
    { label: 'Dashboard', value: '/apl', icon: 'Dashboard3Line', feature: 'SALES_PERFORMANCE' },
    { label: 'Kinerja Penjualan', value: '/apl/kinerja', icon: 'BarChartLine', feature: 'SALES_PERFORMANCE' },
    { label: 'Produktivitas', value: '/apl/produktivitas', icon: 'TimeLine', feature: 'PRODUCTIVITY_PERFORMANCE_CHECK_IN' },
    { label: 'Partner', value: '/apl/partner', icon: 'Building2Line', feature: 'PARTNER_VIEW' },
    { label: 'Tim', value: '/apl/tim', icon: 'TeamLine', feature: 'TEAM_VIEW' },
    { label: 'Insentif', value: '/apl/insentif', icon: 'HandCoinLine', feature: 'INCENTIVE_ESTIMATION' },
    { label: 'Skema Insentif', value: '/skema-insentif', icon: 'CoinsLine', feature: 'INCENTIVE_SCHEME' },
    { label: 'Hasil Perhitungan', value: '/hasil-perhitungan', icon: 'FileList2Line', feature: 'INCENTIVE_SCHEME' },
  ] },
  { title: 'Atur', items: [
    { label: 'Account Management', value: '/account-management', icon: 'UserLine', feature: 'ACCOUNT_CREATION' },
  ] },
];

/** Section sidebar yang terlihat untuk sesi. */
export function navFor(session) {
  const f = session?.features ?? [];
  return NAV.map((s) => ({ ...s, items: s.items.filter((i) => f.includes(i.feature)) })).filter((s) => s.items.length);
}

/** Feature yang dibutuhkan rute (null = rute tidak dikenal). */
export function featureForPath(path) {
  if (path.startsWith('/partner-pipeline/')) return 'PARTNER_PIPELINE';
  return NAV.flatMap((s) => s.items).find((i) => i.value === path)?.feature ?? null;
}

/** Halaman pertama sesuai role: Admin → Beranda, APL → Dashboard, Super Admin → Skema Insentif. */
export const homeFor = (session) => navFor(session)[0]?.items[0]?.value ?? '/denied';
