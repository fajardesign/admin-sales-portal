import { useEffect, useState } from 'react';
import { Alert, Badge, Button, LinkButton, StatusBadge, TabMenuHorizontal } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { activeStores } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { formatDateTime } from '../../lib/format.js';
import { STORE_STATUS, areaName } from '../../lib/constants.js';
import { navigate, withQuery } from '../../lib/router.js';
import { QrThumb, ReferralCodeField } from './ReferralCodeField.jsx';
import { CancelStoreRequestModal } from './CancelStoreRequestModal.jsx';
import { StoreDetailDrawer } from './StoreDetailDrawer.jsx';

/** Jumlah di tab: Badge DS tipe number dengan latar merah solid (keputusan 2026-10-20). */
const CountBadge = ({ n }) => (
  <Badge type="number" size="md" color="red" style={{ background: 'var(--state-error-base)', color: 'var(--text-white-0)' }}>{String(n)}</Badge>
);

/**
 * Toko Aktif (keputusan 2026-10-16/17, penyesuaian 2026-10-19/20): sudut pandang toko untuk partner Active.
 * Urutan: ringkasan → pengingat kuning → tab → pencarian → tabel. Dua tab:
 * - "Semua Toko Aktif": toko aktif; cari nama toko, partner, TL, atau SA/SR; kolom Aksi "Ubah kode & QR".
 * - "Permintaan Tambah Toko" (jumlah dalam badge merah): toko baru dari aplikasi mobile yang menunggu kode referral, dikelompokkan
 *   per partner; kolom Kode Referral "Belum diisi"; kolom Aksi "Isi kode & aktifkan" dan "Batalkan permintaan".
 * Klik baris membuka detail toko. Tab dan kata kunci disimpan di URL.
 */
export function ActiveStores(props) {
  const { tableState } = useScenario();
  return <ActiveStoresView key={tableState} {...props} />;
}

function ActiveStoresView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const [v, setV] = useState(0);
  const [cancel, setCancel] = useState(null);
  const [detail, setDetail] = useState(null);
  const tab = q.tab === 'permintaan' ? 'permintaan' : 'semua';
  const set = (patch) => navigate(withQuery('/toko-aktif', { ...q, ...patch }));
  const load = (retry) => {
    setView('loading');
    activeStores({ tab, q: q.q }, { retry }).then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [tab, q.q, v]);
  const reload = () => setV((x) => x + 1);
  const sm = data?.summary;
  const val = (x) => (sm ? String(x) : '…');
  const isAdmin = user?.role === 'REVIEWER';
  // Tombol di dalam baris tidak ikut membuka detail toko.
  const stop = (node) => <span role="presentation" onClick={(e) => e.stopPropagation()}>{node}</span>;
  const refValue = (r) => ({ misc: true, children: <ReferralCodeField key={`${r.id}-${r.referralCode}`} partnerId={r.partnerId} partnerStatus={r.partnerStatus} store={r} user={user} variant="value" showQr={false} /> });
  const refAction = (r) => <ReferralCodeField key={`${r.id}-${r.referralCode}-a`} partnerId={r.partnerId} partnerStatus={r.partnerStatus} store={r} user={user} variant="action" onSaved={reload} />;

  const columns = [
    { key: 'name', header: 'Toko', render: (r) => ({ priority: 'leading', title: r.name, description: `${r.primary ? 'Toko Utama' : 'Toko Tambahan'}${r.code ? ` · ${r.code}` : ''}` }) },
    { key: 'partner', header: 'Partner', render: (r) => ({ priority: 'regular', title: stop(<LinkButton size="sm" onClick={() => navigate(`/partner-pipeline/${r.partnerId}`)}>{r.partnerName}</LinkButton>), description: areaName(r.areaId) }) },
    { key: 'tl', header: 'TL', render: (r) => nowrap(r.tl ?? 'Belum ada TL') },
    { key: 'sales', header: 'SA/SR', render: (r) => r.sales.join(', ') || 'Belum ditugaskan' },
    { key: 'ref', header: 'Kode Referral', render: refValue },
    { key: 'qr', header: 'QR', render: (r) => ({ misc: true, children: r.referralCode ? <QrThumb qr={r.referralQr} /> : <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>-</span> }) },
    ...(isAdmin ? [{ key: 'act', header: 'Aksi', render: (r) => ({ misc: true, children: stop(refAction(r)) }) }] : []),
  ];
  const requestColumns = [
    { key: 'name', header: 'Toko', render: (r) => ({ priority: 'leading', title: r.name, description: r.primary ? 'Toko Utama' : 'Toko Tambahan' }) },
    { key: 'added', header: 'Diajukan', render: (r) => ({ priority: 'regular', title: nowrap(formatDateTime(r.addedAt)), description: r.addedBy }) },
    { key: 'status', header: 'Status', render: (r) => ({ misc: true, children: <StatusBadge status="pending">{STORE_STATUS[r.status]}</StatusBadge> }) },
    { key: 'ref', header: 'Kode Referral', render: refValue },
    ...(isAdmin ? [{ key: 'act', header: 'Aksi', render: (r) => ({ misc: true, children: stop(
      <span style={{ display: 'inline-flex', gap: 'var(--space-8)', flexWrap: 'wrap', alignItems: 'center' }}>
        {refAction(r)}
        <Button size="2xs" variant="stroke" tone="error" onClick={() => setCancel(r)}>Batalkan permintaan</Button>
      </span>,
    ) }) }] : []),
  ];
  const groups = view === 'data' && tab === 'permintaan'
    ? [...data.rows.reduce((m, r) => m.set(r.partnerId, [...(m.get(r.partnerId) ?? []), r]), new Map()).values()]
    : [];

  return (
    <AdminShell active="/toko-aktif" icon="ShoppingBagLine" title="Toko Aktif" description="Toko milik partner aktif beserta TL, SA/SR, dan kode referralnya." user={user} onLogout={onLogout}>
      <StatGrid min={220}>
        <StatCard icon="ShoppingBagLine" color="blue" label="Jumlah toko" value={val(sm?.stores)} hint="Toko aktif milik partner aktif" />
        <StatCard icon="TeamLine" color="purple" label="Jumlah TL" value={val(sm?.tls)} hint="TL yang memegang toko" />
        <StatCard icon="UserLine" color="orange" label="Belum ditugaskan ke SA/SR" value={val(sm?.unassigned)} hint="Toko aktif tanpa SA/SR" />
      </StatGrid>
      {tab === 'semua' && sm?.waiting > 0 && (
        <Alert status="warning" size="sm" title={`${sm.waiting} toko menunggu kode referral`} actionLabel="Lihat permintaan" onAction={() => set({ tab: 'permintaan', q: '' })}>
          Toko baru aktif setelah kode referral dan QR diisi.
        </Alert>
      )}
      <TabMenuHorizontal value={tab} onChange={(t) => set({ tab: t === 'semua' ? '' : t })} items={[
        { value: 'semua', label: 'Semua Toko Aktif' },
        { value: 'permintaan', label: 'Permintaan Tambah Toko', badge: sm?.waiting ? <CountBadge n={sm.waiting} /> : undefined },
      ]} />
      {tab === 'permintaan' && (
        <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
          Toko yang ditambahkan dari aplikasi mobile. Isi kode referral dan QR untuk mengaktifkan, atau batalkan bila toko tidak jadi ditambahkan.
        </span>
      )}
      <SearchField placeholder={tab === 'semua' ? 'Cari toko, partner, TL, atau SA/SR' : 'Cari toko atau partner'} value={q.q ?? ''} onChange={(x) => set({ q: x })} />
      {tab === 'semua' && (
        <ListCard view={view} onRetry={() => load(true)}
          emptyMessage={q.q ? 'Tidak ada toko yang sesuai dengan pencarian.' : 'Belum ada toko aktif.'}
          footer={view === 'data' && <span style={{ display: 'block', padding: 'var(--space-12) var(--space-4) var(--space-4)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{data.rows.length} toko</span>}>
          {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={view === 'data' ? data.rows : []} columns={columns} minWidth={1100} onRowClick={setDetail} />}
        </ListCard>
      )}
      {tab === 'permintaan' && (view !== 'data'
        ? (
          <ListCard view={view} onRetry={() => load(true)}
            emptyMessage={q.q ? 'Tidak ada permintaan yang sesuai dengan pencarian.' : 'Tidak ada permintaan tambah toko.'}>
            {view === 'loading' && <DataTable loading rows={[]} columns={requestColumns} minWidth={900} />}
          </ListCard>
        )
        : groups.map((rows) => (
          <ListCard key={rows[0].partnerId} view="data">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-8)', flexWrap: 'wrap', padding: 'var(--space-4) var(--space-4) var(--space-8)' }}>
              <LinkButton size="sm" onClick={() => navigate(`/partner-pipeline/${rows[0].partnerId}`)}>{rows[0].partnerName}</LinkButton>
              <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{areaName(rows[0].areaId)} · {rows.length} permintaan</span>
            </div>
            <DataTable rows={rows} columns={requestColumns} minWidth={900} onRowClick={setDetail} />
          </ListCard>
        )))}
      {cancel && <CancelStoreRequestModal store={cancel} user={user} onClose={() => setCancel(null)} onDone={() => { setCancel(null); reload(); }} />}
      {detail && <StoreDetailDrawer store={detail} onClose={() => setDetail(null)} />}
    </AdminShell>
  );
}
