/** Menu sidebar per role web (PRD: Admin, APL, Super Admin). value = rute. */
export const NAV_BY_ROLE = {
  REVIEWER: [
    { title: 'Utama', items: [{ label: 'Beranda', value: '/beranda', icon: 'HomeSmile2Line' }, { label: 'Partner Pipeline', value: '/partner-pipeline', icon: 'Building2Line' }] },
    { title: 'Atur', items: [{ label: 'Account Management', value: '/account-management', icon: 'UserLine' }] },
  ],
  APL: [
    { title: 'Utama', items: [{ label: 'Ringkasan', value: '/apl', icon: 'Dashboard3Line' }, { label: 'Performa', value: '/apl/performa', icon: 'BarChartLine' }, { label: 'Insentif', value: '/apl/insentif', icon: 'HandCoinLine' }] },
    { title: 'Data', items: [{ label: 'Partner & Toko', value: '/apl/partner', icon: 'Building2Line' }, { label: 'Tim', value: '/apl/tim', icon: 'TeamLine' }] },
  ],
  SUPER_ADMIN: [
    { title: 'Atur', items: [{ label: 'Skema Insentif', value: '/skema-insentif', icon: 'CoinsLine' }] },
  ],
};
export const HOME_BY_ROLE = { REVIEWER: '/beranda', APL: '/apl', SUPER_ADMIN: '/skema-insentif' };
