import { useEffect, useState } from 'react';
import { Icon, LinkButton } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { nowrap } from '../../lib/cells.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { aplStores } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { areaName } from '../../lib/constants.js';
import { formatDate, formatPhone } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { AreaSelect } from './aplCommon.jsx';
import { useAplScope } from './aplData.jsx';

/** A2 · Partner & Toko Aktif di area APL (PRD APL poin 1). */
export function AplStores(props) {
  const { tableState } = useScenario();
  return <AplStoresView key={tableState} {...props} />;
}

function AplStoresView({ user, onLogout, query }) {
  const { areaIds } = useAplScope(user, query);
  const [rows, setRows] = useState([]);
  const [view, setView] = useState('loading');
  const term = query.get('q') ?? '';
  const key = `${term}|${areaIds.join()}`;
  const load = (retry) => { setView('loading'); aplStores(areaIds, { q: term }, { retry }).then((r) => { setRows(r); setView(r.length ? 'data' : 'empty'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);
  const set = (patch) => navigate(withQuery('/apl/partner', { ...Object.fromEntries(query.entries()), ...patch }));

  const columns = [
    { key: 'store', header: 'Toko', render: (r) => ({ priority: 'leading', title: r.storeName, description: `${r.partnerName} · ${r.storeCode}` }) },
    { key: 'pic', header: 'PIC Toko', render: (r) => ({ priority: 'regular', title: nowrap(r.picName), description: nowrap(`${r.picEmail} · ${formatPhone(r.picPhone)}`) }) },
    { key: 'address', header: 'Alamat & Koordinat', render: (r) => ({ priority: 'passive', title: <span style={{ display: 'block', maxWidth: 320 }}>{r.address}</span>, description: (
      <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
        {r.lat}, {r.lng}
        <LinkButton size="sm" onClick={() => window.open(`https://www.google.com/maps?q=${r.lat},${r.lng}`, '_blank', 'noopener')} rightIcon={<Icon name="ExternalLinkLine" size={16} />}>Buka di Maps</LinkButton>
      </span>
    ) }) },
    { key: 'area', header: 'Area', render: (r) => areaName(r.areaId) },
    { key: 'since', header: 'Tanggal Aktif', render: (r) => nowrap(formatDate(r.activeSince)) },
    { key: 'internal', header: 'PIC Internal', render: (r) => ({ priority: 'regular', title: nowrap(r.sales.length ? r.sales.map((s) => `${s.name} (${s.role})`).join(', ') : 'Belum ditugaskan'), description: r.tl ? `TL ${r.tl.name}` : undefined }) },
  ];

  return (
    <AdminShell active="/apl/partner" icon="Building2Line" title="Partner & Toko" description="Toko aktif milik partner Active di area Anda." user={user} onLogout={onLogout}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
        <SearchField placeholder="Cari toko, partner, atau PIC" value={term} onChange={(v) => set({ q: v })} />
        <AreaSelect path="/apl/partner" query={query} user={user} />
      </div>
      <ListCard view={view} onRetry={() => load(true)} emptyMessage={term ? 'Tidak ada toko yang sesuai dengan pencarian.' : 'Belum ada toko aktif di area Anda.'}
        footer={view === 'data' && <span style={{ display: 'block', padding: 'var(--space-12) var(--space-4) var(--space-4)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{rows.length} toko aktif</span>}>
        {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={rows} columns={columns} minWidth={1240} />}
      </ListCard>
    </AdminShell>
  );
}

