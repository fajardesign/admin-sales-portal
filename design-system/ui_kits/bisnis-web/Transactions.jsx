const STATUS_LABEL = { completed: 'Berhasil', pending: 'Menunggu', failed: 'Gagal' };
const STATUS_ICON = { completed: 'SelectBoxCircleFill', pending: 'AlertFill', failed: 'ErrorWarningFill' };

function TxnDrawer({ t, onClose }) {
  const { Drawer, DrawerHeader, DrawerFooter, Button, StatusBadge, Icon, KeyIcon, ContentDivider, ActivityFeedItem } = window.AmarBankInternalWebDS_806d63;
  if (!t) return null;
  const row = (k, v) => <div style={{ display: 'flex', justifyContent: 'space-between', font: 'var(--paragraph-sm)', padding: '6px 0' }}><span style={{ color: 'var(--text-sub-600)' }}>{k}</span><span style={{ color: 'var(--text-strong-950)', fontWeight: 500 }}>{v}</span></div>;
  return (
    <Drawer open onClose={onClose} header={<DrawerHeader title="Detail Transaksi" onClose={onClose} />} footer={<DrawerFooter><Button variant="stroke" tone="neutral" leftIcon={<Icon name="Download2Line" />}>Unduh</Button><Button leftIcon={<Icon name="ShareLine" />}>Bagikan</Button></DrawerFooter>}>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <KeyIcon icon={t.icon} size="xl" />
          <span style={{ font: 'var(--title-h5)', color: 'var(--text-strong-950)' }}>{t.dir === 'out' ? '-' : '+'}{usd(t.amount)}</span>
          <StatusBadge status={t.status} icon={<Icon name={STATUS_ICON[t.status]} size={16} />}>{STATUS_LABEL[t.status]}</StatusBadge>
        </div>
        <ContentDivider type="solid-text" style={{ margin: '0 -20px' }}>Rincian</ContentDivider>
        <div>{row('Transaksi', t.name)}{row('Keterangan', t.desc)}{row('Tanggal', t.date + ', 2026')}{row('No. Referensi', 'TRX' + (880000 + t.id * 731))}</div>
        <ContentDivider type="solid-text" style={{ margin: '0 -20px' }}>Aktivitas</ContentDivider>
        <div><ActivityFeedItem icon="AddLine" title="Dibuat oleh" target="Arthur Taylor" time="09:12" /><ActivityFeedItem icon="CheckLine" title="Disetujui oleh" target="Laura Perez" time="09:30" last={t.status !== 'completed'} />{t.status === 'completed' && <ActivityFeedItem icon="SendPlaneLine" title="Diproses bank" time="09:31" last />}</div>
      </div>
    </Drawer>
  );
}

function Transactions({ openTxn }) {
  const { Table, StatusBadge, Icon, KeyIcon, ButtonGroup, TextInput, Button, Pagination, CompactButton, Tooltip } = window.AmarBankInternalWebDS_806d63;
  const [f, setF] = React.useState('Semua');
  const [q, setQ] = React.useState('');
  const [page, setPage] = React.useState(1);
  const rows = TXNS.filter((t) => (f === 'Semua' || (f === 'Masuk' ? t.dir === 'in' : t.dir === 'out')) && t.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <ButtonGroup value={f} onChange={setF} items={[{ label: 'Semua', value: 'Semua' }, { label: 'Masuk', value: 'Masuk' }, { label: 'Keluar', value: 'Keluar' }]} />
        <span style={{ flex: 1 }} />
        <TextInput size="sm" leftIcon="Search2Line" placeholder="Cari transaksi…" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: 260 }} />
        <Button size="sm" variant="stroke" tone="neutral" leftIcon={<Icon name="Filter3Line" />}>Filter</Button>
        <Button size="sm" variant="stroke" tone="neutral" leftIcon={<Icon name="Download2Line" />}>Ekspor</Button>
      </div>
      <Table onRowClick={openTxn} rows={rows} columns={[
        { key: 'name', header: 'Transaksi', sortable: true, render: (t) => <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><KeyIcon icon={t.icon} size="sm" /><div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ font: 'var(--label-sm)' }}>{t.name}</span><span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{t.desc}</span></div></div> },
        { key: 'date', header: 'Tanggal', sortable: true },
        { key: 'status', header: 'Status', render: (t) => <StatusBadge status={t.status} icon={<Icon name={STATUS_ICON[t.status]} size={16} />}>{STATUS_LABEL[t.status]}</StatusBadge> },
        { key: 'amount', header: 'Nominal', align: 'right', sortable: true, render: (t) => <span style={{ font: 'var(--label-sm)', color: t.dir === 'in' ? 'var(--state-success-base)' : 'var(--text-strong-950)' }}>{t.dir === 'out' ? '-' : '+'}{usd(t.amount)}</span> },
        { key: 'act', header: '', width: 48, render: () => <Tooltip content="Lihat detail"><CompactButton variant="ghost" icon={<Icon name="More2Line" />} /></Tooltip> },
      ]} />
      <Pagination page={page} total={8} onChange={setPage} />
    </div>
  );
}

function Notifications() {
  const { TabMenuVertical, SwitchCard, SectionHeader, NotificationItem, Button, SwitchLabel, ContentDivider } = window.AmarBankInternalWebDS_806d63;
  const [tab, setTab] = React.useState('pref');
  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
      <TabMenuVertical title="Pengaturan" value={tab} onChange={setTab} items={[{ label: 'Preferensi', value: 'pref', icon: 'Settings2Line' }, { label: 'Kotak Masuk', value: 'inbox', icon: 'Notification3Line' }]} />
      <div style={{ flex: 1, maxWidth: 640, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {tab === 'pref' ? <>
          <SectionHeader title="Preferensi Notifikasi" description="Pilih kapan dan bagaimana Anda menerima pemberitahuan." style={{ paddingTop: 0 }} />
          <SwitchCard width="100%" label="Transaksi masuk" description="Kabari saya setiap ada dana masuk." defaultChecked />
          <SwitchCard width="100%" label="Menunggu persetujuan" description="Pengingat untuk transaksi yang butuh approval." defaultChecked />
          <SwitchCard width="100%" label="Ringkasan mingguan" description="Email ringkasan arus kas setiap Senin." />
          <ContentDivider type="text-line">Kanal</ContentDivider>
          <div style={{ display: 'flex', gap: 32 }}><SwitchLabel label="Email" defaultChecked /><SwitchLabel label="SMS" /><SwitchLabel label="Push" defaultChecked /></div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}><Button variant="stroke" tone="neutral" size="sm">Batal</Button><Button size="sm">Simpan</Button></div>
        </> : <>
          <SectionHeader title="Kotak Masuk" style={{ paddingTop: 0 }} />
          <NotificationItem avatar={{ src: AV + 'emma-wright.png' }} title="Emma Wright menyetujui Payroll September" time="2 menit lalu" unread />
          <NotificationItem avatar={{ src: AV + 'wei-chen.png' }} title="Wei Chen meminta persetujuan transfer $1,240.00" time="1 jam lalu" unread actions={<><Button size="xs" variant="stroke" tone="neutral">Tolak</Button><Button size="xs">Setujui</Button></>} />
          <NotificationItem avatar={{ src: AV + 'laura-perez.png' }} title="Laura Perez mengunggah e-Statement" time="Kemarin" file={{ name: 'mutasi-agustus.pdf', size: '220 KB' }} />
        </>}
      </div>
    </div>
  );
}
Object.assign(window, { Transactions, TxnDrawer, Notifications });
