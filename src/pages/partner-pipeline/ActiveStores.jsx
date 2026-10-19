import { useEffect, useState } from 'react';
import { Alert, Button, LinkButton, Select, StatusBadge, TabMenuHorizontal } from '@ds/index.js';
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

const STORE_BADGE = { WAITING_REFERRAL: 'pending', ACTIVE: 'completed' };
const REF_OPTIONS = [{ value: '', label: 'Semua kode referral' }, { value: 'belum', label: 'Belum diisi' }, { value: 'sudah', label: 'Sudah diisi' }];

/**
 * Toko Aktif (keputusan 2026-10-16/17, penyesuaian 2026-10-19): sudut pandang toko untuk partner Active, dua tab.
 * - "Permintaan tambah toko": toko baru dari aplikasi mobile yang menunggu kode referral, dikelompokkan per partner; aksi
 *   "Isi kode & aktifkan" dan "Batalkan permintaan".
 * - "Semua toko": ringkasan jumlah toko, TL, toko yang belum ditugaskan ke SA/SR; cari nama toko, partner, TL, atau SA/SR;
 *   filter status kode referral. Tab, kata kunci, dan filter disimpan di URL.
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
  const tab = q.tab === 'permintaan' ? 'permintaan' : 'semua';
  const set = (patch) => navigate(withQuery('/toko-aktif', { ...q, ...patch }));
  const load = (retry) => {
    setView('loading');
    activeStores({ tab, q: q.q, ref: tab === 'semua' ? q.ref : '' }, { retry }).then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [tab, q.q, q.ref, v]);
  const reload = () => setV((x) => x + 1);
  const sm = data?.summary;
  const val = (x) => (sm ? String(x) : '…');

  const columns = [
    { key: 'name', header: 'Toko', render: (r) => ({ priority: 'leading', title: r.name, description: `${r.primary ? 'Toko Utama' : 'Toko Tambahan'}${r.code ? ` · ${r.code}` : ''}` }) },
    { key: 'partner', header: 'Partner', render: (r) => ({ priority: 'regular', title: <LinkButton size="sm" onClick={() => navigate(`/partner-pipeline/${r.partnerId}`)}>{r.partnerName}</LinkButton>, description: areaName(r.areaId) }) },
    { key: 'tl', header: 'TL', render: (r) => nowrap(r.tl ?? (r.status === 'ACTIVE' ? 'Belum ada TL' : '-')) },
    { key: 'sales', header: 'SA/SR', render: (r) => (r.status === 'WAITING_REFERRAL' ? '-' : r.sales.join(', ') || 'Belum ditugaskan') },
    { key: 'status', header: 'Status', render: (r) => ({ misc: true, children: <StatusBadge status={STORE_BADGE[r.status]}>{STORE_STATUS[r.status]}</StatusBadge> }) },
    { key: 'ref', header: 'Kode Referral', render: (r) => ({ misc: true, children: <ReferralCodeField key={`${r.id}-${r.referralCode}`} partnerId={r.partnerId} partnerStatus={r.partnerStatus} store={r} user={user} showQr={false} onSaved={reload} /> }) },
    { key: 'qr', header: 'QR', render: (r) => ({ misc: true, children: r.referralCode ? <QrThumb qr={r.referralQr} /> : <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>-</span> }) },
  ];
  const requestColumns = [
    { key: 'name', header: 'Toko', render: (r) => ({ priority: 'leading', title: r.name, description: r.primary ? 'Toko Utama' : 'Toko Tambahan' }) },
    { key: 'added', header: 'Diajukan', render: (r) => ({ priority: 'regular', title: nowrap(formatDateTime(r.addedAt)), description: r.addedBy }) },
    { key: 'status', header: 'Status', render: (r) => ({ misc: true, children: <StatusBadge status="pending">{STORE_STATUS[r.status]}</StatusBadge> }) },
    { key: 'act', header: 'Aksi', render: (r) => ({ misc: true, children: (
      <span style={{ display: 'inline-flex', gap: 'var(--space-8)', flexWrap: 'wrap', alignItems: 'center' }}>
        <ReferralCodeField key={`${r.id}-${r.referralCode}`} partnerId={r.partnerId} partnerStatus={r.partnerStatus} store={r} user={user} showQr={false} onSaved={reload} />
        {user?.role === 'REVIEWER' && <Button size="2xs" variant="stroke" tone="error" onClick={() => setCancel(r)}>Batalkan permintaan</Button>}
      </span>
    ) }) },
  ];
  const groups = view === 'data' && tab === 'permintaan'
    ? [...data.rows.reduce((m, r) => m.set(r.partnerId, [...(m.get(r.partnerId) ?? []), r]), new Map()).values()]
    : [];
  const filtered = q.q || (tab === 'semua' && q.ref);

  return (
    <AdminShell active="/toko-aktif" icon="ShoppingBagLine" title="Toko Aktif" description="Toko milik partner aktif beserta TL, SA/SR, dan kode referralnya." user={user} onLogout={onLogout}>
      <TabMenuHorizontal value={tab} onChange={(t) => set({ tab: t === 'semua' ? '' : t, ref: '' })} items={[
        { value: 'semua', label: 'Semua toko' },
        { value: 'permintaan', label: 'Permintaan tambah toko', badge: sm?.waiting ? String(sm.waiting) : undefined },
      ]} />
      {tab === 'semua' && (
        <>
          <StatGrid min={220}>
            <StatCard icon="ShoppingBagLine" color="blue" label="Jumlah toko" value={val(sm?.stores)} hint="Toko aktif dan toko baru" />
            <StatCard icon="TeamLine" color="purple" label="Jumlah TL" value={val(sm?.tls)} hint="TL yang memegang toko" />
            <StatCard icon="UserLine" color="orange" label="Belum ditugaskan ke SA/SR" value={val(sm?.unassigned)} hint="Toko aktif tanpa SA/SR" />
          </StatGrid>
          {sm?.waiting > 0 && (
            <Alert status="warning" size="sm" title={`${sm.waiting} toko menunggu kode referral`} actionLabel="Lihat permintaan" onAction={() => set({ tab: 'permintaan', ref: '', q: '' })}>
              Toko baru aktif setelah kode referral dan QR diisi.
            </Alert>
          )}
        </>
      )}
      {tab === 'permintaan' && (
        <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
          Toko yang ditambahkan dari aplikasi mobile. Isi kode referral dan QR untuk mengaktifkan, atau batalkan bila toko tidak jadi ditambahkan.
        </span>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
        <SearchField placeholder={tab === 'semua' ? 'Cari toko, partner, TL, atau SA/SR' : 'Cari toko atau partner'} value={q.q ?? ''} onChange={(x) => set({ q: x })} />
        {tab === 'semua' && (
          <div style={{ width: 220 }}>
            <Select size="sm" value={q.ref ?? ''} placeholder="Semua kode referral" onChange={(x) => set({ ref: x })} options={REF_OPTIONS} />
          </div>
        )}
      </div>
      {tab === 'semua' && (
        <ListCard view={view} onRetry={() => load(true)}
          emptyMessage={filtered ? 'Tidak ada toko yang sesuai dengan pencarian atau filter.' : 'Belum ada toko aktif.'}
          footer={view === 'data' && <span style={{ display: 'block', padding: 'var(--space-12) var(--space-4) var(--space-4)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{data.rows.length} toko</span>}>
          {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={view === 'data' ? data.rows : []} columns={columns} minWidth={1100} />}
        </ListCard>
      )}
      {tab === 'permintaan' && (view !== 'data'
        ? (
          <ListCard view={view} onRetry={() => load(true)}
            emptyMessage={filtered ? 'Tidak ada permintaan yang sesuai dengan pencarian.' : 'Tidak ada permintaan tambah toko.'}>
            {view === 'loading' && <DataTable loading rows={[]} columns={requestColumns} minWidth={900} />}
          </ListCard>
        )
        : groups.map((rows) => (
          <ListCard key={rows[0].partnerId} view="data">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-8)', flexWrap: 'wrap', padding: 'var(--space-4) var(--space-4) var(--space-8)' }}>
              <LinkButton size="sm" onClick={() => navigate(`/partner-pipeline/${rows[0].partnerId}`)}>{rows[0].partnerName}</LinkButton>
              <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{areaName(rows[0].areaId)} · {rows.length} permintaan</span>
            </div>
            <DataTable rows={rows} columns={requestColumns} minWidth={900} />
          </ListCard>
        )))}
      {cancel && <CancelStoreRequestModal store={cancel} user={user} onClose={() => setCancel(null)} onDone={() => { setCancel(null); reload(); }} />}
    </AdminShell>
  );
}
