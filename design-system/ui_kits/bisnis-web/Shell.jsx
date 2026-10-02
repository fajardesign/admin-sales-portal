const DS = window.AmarBankInternalWebDS_806d63;
const AV = '../../assets/avatars/';
const LOGO = '../../assets/logos/';

const NAV = [
  { title: 'Utama', items: [
    { label: 'Beranda', value: 'home', icon: 'HomeSmile2Line' },
    { label: 'Informasi Rekening', value: 'accounts', icon: 'BankCardLine', chevron: true },
    { label: 'Transfer', value: 'transfer', icon: 'ArrowLeftRightLine', chevron: true },
    { label: 'Menunggu Persetujuan', value: 'approval', icon: 'CheckLine', chevron: true },
    { label: 'Beli & Bayar', value: 'bills', icon: 'BillLine', chevron: true },
    { label: 'Payroll', value: 'payroll', icon: 'Wallet3Line', chevron: true },
    { label: 'Riwayat Transaksi', value: 'history', icon: 'FileTextLine', chevron: true },
    { label: 'Mutasi & e-Statement', value: 'statement', icon: 'HistoryLine', chevron: true },
  ] },
  { title: 'Atur', items: [
    { label: 'Manajemen Pengguna', value: 'users', icon: 'UserLine', chevron: true },
    { label: 'Batas Transaksi', value: 'limits', icon: 'Filter3Line', chevron: true },
    { label: 'Atur Personal', value: 'personal', icon: 'Settings2Line', chevron: true },
    { label: 'Notifikasi', value: 'notifications', icon: 'NotificationLine', chevron: true },
  ] },
];

const TXNS = [
  { id: 1, name: 'Salary Deposit', desc: 'Monthly salary from Apex', date: 'Sep 18', amount: 3500, dir: 'in', icon: 'BankLine', status: 'completed', type: 'Incoming' },
  { id: 2, name: 'Stock Dividend', desc: 'Payment from stock investment', date: 'Sep 18', amount: 846.14, dir: 'in', icon: 'LineChartLine', status: 'completed', type: 'Incoming' },
  { id: 3, name: 'Rental Income', desc: 'Rental payment from Mr. Dupont', date: 'Sep 17', amount: 100, dir: 'in', icon: 'HomeSmile2Line', status: 'completed', type: 'Incoming' },
  { id: 4, name: 'Refund from Amazon', desc: 'Refund of Order No #124235', date: 'Sep 15', amount: 36.24, dir: 'in', icon: 'ShoppingBagLine', status: 'completed', type: 'Incoming' },
  { id: 5, name: 'PT Sinar Jaya', desc: 'Pembayaran vendor INV-0921', date: 'Sep 14', amount: 1240, dir: 'out', icon: 'SendPlaneLine', status: 'pending', type: 'Pending' },
  { id: 6, name: 'Payroll September', desc: '42 penerima', date: 'Sep 12', amount: 18200, dir: 'out', icon: 'Wallet3Line', status: 'completed', type: 'Outgoing' },
  { id: 7, name: 'PLN Prabayar', desc: 'Token listrik kantor', date: 'Sep 10', amount: 54.5, dir: 'out', icon: 'FlashlightLine', status: 'failed', type: 'Outgoing' },
];

const CONTACTS = [
  { name: 'Natalia', src: AV + 'laura-perez.png' }, { name: 'James', src: AV + 'james-brown.png' },
  { name: 'Laura', src: AV + 'emma-wright.png' }, { name: 'Wei', src: AV + 'wei-chen.png' }, { name: 'Sophia', src: AV + 'sophia-williams.png' },
];

const usd = (n) => '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

/** App shell — dark Sidebar + page header with Bantuan / Keluar. */
function Shell({ page, setPage, onLogout, children, title, media, description, extraActions }) {
  const { Sidebar, PageHeader, Button, Icon, CompactButton, Badge } = DS;
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-white-0)' }}>
      <Sidebar theme="dark" company="PT Sinar Jaya" logo={<img src={LOGO + 'amar-bank-bisnis-vertical-default.svg'} style={{ height: 44 }} />}
        sections={NAV.map((s) => ({ ...s, items: s.items.map((it) => it.value === 'approval' ? { ...it, badge: <Badge color="red" type="number">2</Badge>, chevron: false } : it) }))}
        value={page} onChange={setPage} />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <PageHeader media={media} title={title} description={description} style={{ padding: '20px 32px' }}
          actions={<>
            {extraActions}
            <CompactButton variant="stroke" size="lg" icon={<Icon name="Notification3Line" />} aria-label="Notifikasi" style={{ padding: 8, borderRadius: 10 }} onClick={() => setPage('notifications')} />
            <Button variant="stroke" tone="neutral" leftIcon={<Icon name="CustomerService2Line" />}>Bantuan</Button>
            <Button variant="stroke" tone="neutral" leftIcon={<Icon name="LogoutBoxRLine" />} onClick={onLogout}>Keluar</Button>
          </>} />
        <div style={{ flex: 1, overflow: 'auto', padding: '0 32px 32px' }}>{children}</div>
      </main>
    </div>
  );
}

Object.assign(window, { Shell, NAV, TXNS, CONTACTS, usd, AV, LOGO });
