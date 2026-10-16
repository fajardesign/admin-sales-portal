import { useEffect, useState } from 'react';
import { Alert, LinkButton, Select, StatusBadge } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { activeStores } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { STORE_STATUS, areaName } from '../../lib/constants.js';
import { navigate, withQuery } from '../../lib/router.js';
import { ReferralCodeField } from './ReferralCodeField.jsx';

const STORE_BADGE = { WAITING_REFERRAL: 'pending', ACTIVE: 'completed' };
const REF_OPTIONS = [{ value: '', label: 'Semua kode referral' }, { value: 'belum', label: 'Belum diisi' }, { value: 'sudah', label: 'Sudah diisi' }];

/**
 * Toko Aktif (keputusan 2026-10-16/17): sudut pandang toko untuk partner Active. Ringkasan jumlah toko, TL, dan toko yang belum
 * ditugaskan ke SA/SR; pengingat kuning toko yang menunggu kode referral (klik → saring toko tanpa kode). Kode referral diisi
 * langsung di baris. Filter partner, nama toko, dan status kode referral disimpan di URL.
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
  const set = (patch) => navigate(withQuery('/toko-aktif', { ...q, ...patch }));
  const load = (retry) => {
    setView('loading');
    activeStores({ partner: q.partner, q: q.q, ref: q.ref }, { retry }).then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [q.partner, q.q, q.ref, v]);
  const sm = data?.summary;
  const val = (x) => (sm ? String(x) : '…');

  const columns = [
    { key: 'name', header: 'Toko', render: (r) => ({ priority: 'leading', title: r.name, description: `${r.primary ? 'Toko Utama' : 'Toko Tambahan'}${r.code ? ` · ${r.code}` : ''}` }) },
    { key: 'partner', header: 'Partner', render: (r) => ({ priority: 'regular', title: <LinkButton size="sm" onClick={() => navigate(`/partner-pipeline/${r.partnerId}`)}>{r.partnerName}</LinkButton>, description: areaName(r.areaId) }) },
    { key: 'tl', header: 'TL', render: (r) => nowrap(r.tl ?? '-') },
    { key: 'sales', header: 'SA/SR', render: (r) => (r.status === 'WAITING_REFERRAL' ? '-' : r.sales.join(', ') || 'Belum ditugaskan') },
    { key: 'status', header: 'Status', render: (r) => ({ misc: true, children: <StatusBadge status={STORE_BADGE[r.status]}>{STORE_STATUS[r.status]}</StatusBadge> }) },
    { key: 'ref', header: 'Kode Referral', render: (r) => ({ misc: true, children: <ReferralCodeField key={`${r.id}-${r.referralCode}`} partnerId={r.partnerId} partnerStatus={r.partnerStatus} store={r} user={user} onSaved={() => setV((x) => x + 1)} /> }) },
  ];

  return (
    <AdminShell active="/toko-aktif" icon="ShoppingBagLine" title="Toko Aktif" description="Toko milik partner aktif beserta TL, SA/SR, dan kode referralnya." user={user} onLogout={onLogout}>
      <StatGrid min={220}>
        <StatCard icon="ShoppingBagLine" color="blue" label="Jumlah toko" value={val(sm?.stores)} hint="Toko aktif dan toko baru" />
        <StatCard icon="TeamLine" color="purple" label="Jumlah TL" value={val(sm?.tls)} hint="TL yang memegang toko" />
        <StatCard icon="UserLine" color="orange" label="Belum ditugaskan ke SA/SR" value={val(sm?.unassigned)} hint="Toko aktif tanpa SA/SR" />
      </StatGrid>
      {sm?.waiting > 0 && (
        <Alert status="warning" size="sm" title={`${sm.waiting} toko menunggu kode referral`}
          actionLabel={q.ref === 'belum' ? 'Tampilkan semua toko' : 'Lihat toko'} onAction={() => set({ ref: q.ref === 'belum' ? '' : 'belum' })}>
          Toko baru aktif setelah kode referralnya diisi.
        </Alert>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
        <SearchField placeholder="Cari nama toko atau kode" value={q.q ?? ''} onChange={(x) => set({ q: x })} />
        <div style={{ width: 240 }}>
          <Select size="sm" value={q.partner ?? ''} placeholder="Semua partner" onChange={(x) => set({ partner: x })}
            options={[{ value: '', label: 'Semua partner' }, ...(data?.partnerOptions ?? [])]} />
        </div>
        <div style={{ width: 220 }}>
          <Select size="sm" value={q.ref ?? ''} placeholder="Semua kode referral" onChange={(x) => set({ ref: x })} options={REF_OPTIONS} />
        </div>
      </div>
      <ListCard view={view} onRetry={() => load(true)}
        emptyMessage={q.q || q.partner || q.ref ? 'Tidak ada toko yang sesuai dengan pencarian atau filter.' : 'Belum ada toko aktif.'}
        footer={view === 'data' && <span style={{ display: 'block', padding: 'var(--space-12) var(--space-4) var(--space-4)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{data.rows.length} toko</span>}>
        {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={view === 'data' ? data.rows : []} columns={columns} minWidth={1100} />}
      </ListCard>
    </AdminShell>
  );
}
