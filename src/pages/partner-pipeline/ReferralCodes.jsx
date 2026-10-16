import { useEffect, useState } from 'react';
import { Alert, LinkButton, StatusBadge, TabMenuHorizontal } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { PartnerStatusBadge } from '../../components/Badges.jsx';
import { referralOverview } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { STORE_STATUS, areaName } from '../../lib/constants.js';
import { navigate, withQuery } from '../../lib/router.js';
import { ReferralCodeField } from './ReferralCodeField.jsx';

const STORE_BADGE = { PENDING: 'pending', WAITING_REFERRAL: 'pending', ACTIVE: 'completed', INACTIVE: 'disabled' };

/**
 * Kode Referral (PRD Scope 1 v2 C2, keputusan 2026-10-16 untuk OQ-25): partner sebagai "payung" dengan toko-tokonya. Admin mengisi
 * Kode Referral dari AppsFlyer per toko; toko baru partner Active ("Menunggu kode referral") baru aktif setelah kodenya diisi.
 * Status (perlu/terisi/semua) dan pencarian disimpan di URL.
 */
export function ReferralCodes(props) {
  const { tableState } = useScenario();
  return <ReferralCodesView key={tableState} {...props} />;
}

function ReferralCodesView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const status = ['perlu', 'terisi', 'semua'].includes(q.status) ? q.status : 'perlu';
  const [data, setData] = useState({ rows: [], counts: { need: 0, filled: 0, all: 0, waiting: 0 } });
  const [view, setView] = useState('loading');
  const [v, setV] = useState(0);
  const set = (patch) => navigate(withQuery('/kode-referral', { ...q, ...patch }));
  const load = (retry) => {
    setView('loading');
    referralOverview({ status, q: q.q }, { retry }).then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [status, q.q, v]);

  const flat = data.rows.flatMap((p) => [{ ...p, type: 'partner', key: p.id }, ...p.stores.map((s) => ({ ...s, type: 'store', key: s.id, partner: p }))]);
  const columns = [
    { key: 'name', header: 'Partner / Toko', render: (r) => (r.type === 'partner'
      ? { priority: 'leading', title: r.name, description: `${r.id} · ${areaName(r.areaId)}` }
      : { priority: 'regular', title: <span style={{ paddingLeft: 'var(--space-24)', display: 'block' }}>{r.name}</span>, description: <span style={{ paddingLeft: 'var(--space-24)', display: 'block' }}>{r.primary ? 'Toko Utama' : 'Toko Tambahan'}{r.code ? ` · ${r.code}` : ''}</span> }) },
    { key: 'status', header: 'Status', render: (r) => ({ misc: true, children: r.type === 'partner' ? <PartnerStatusBadge status={r.status} /> : <StatusBadge status={STORE_BADGE[r.status]}>{STORE_STATUS[r.status]}</StatusBadge> }) },
    { key: 'tl', header: 'TL', render: (r) => (r.type === 'store' ? nowrap(r.tl ?? '-') : '') },
    { key: 'ref', header: 'Kode Referral', render: (r) => (r.type === 'store'
      ? { misc: true, children: <ReferralCodeField key={`${r.id}-${r.referralCode}`} partnerId={r.partner.id} partnerStatus={r.partner.status} store={r} user={user} required={r.partner.status === 'WAITING_PKS'} onSaved={() => setV((x) => x + 1)} /> }
      : { misc: true, children: <LinkButton size="sm" onClick={() => navigate(`/partner-pipeline/${r.id}`)}>Buka partner</LinkButton> }) },
  ];

  return (
    <AdminShell active="/kode-referral" icon="Hashtag" title="Kode Referral" description="Isi Kode Referral dari AppsFlyer untuk setiap toko. Diawali OF, unik per toko, wajib sebelum partner diaktifkan." user={user} onLogout={onLogout}>
      {data.counts.waiting > 0 && (
        <Alert status="warning" size="sm" title={`${data.counts.waiting} toko baru menunggu kode referral`}>Toko yang ditambahkan setelah partner Active baru aktif setelah kodenya diisi.</Alert>
      )}
      <TabMenuHorizontal value={status} onChange={(x) => set({ status: x === 'perlu' ? '' : x })} items={[
        { value: 'perlu', label: `Perlu diisi (${data.counts.need})` }, { value: 'terisi', label: `Sudah diisi (${data.counts.filled})` }, { value: 'semua', label: `Semua toko (${data.counts.all})` },
      ]} />
      <SearchField placeholder="Cari partner, toko, atau kode referral" value={q.q ?? ''} onChange={(x) => set({ q: x })} />
      <ListCard view={view} onRetry={() => load(true)} emptyMessage={q.q ? 'Tidak ada toko yang sesuai dengan pencarian.' : status === 'perlu' ? 'Semua toko sudah punya kode referral.' : 'Belum ada toko.'}>
        {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={flat} rowKey={(r) => r.key} columns={columns} minWidth={980} />}
      </ListCard>
    </AdminShell>
  );
}
