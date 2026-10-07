import { useEffect, useState } from 'react';
import { Breadcrumbs, Button, Icon, Select } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { aplSalesRows, subordinateOptions } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { CHANNEL } from '../../lib/constants.js';
import { formatNumber, formatPct, formatRp } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { PeriodFilter } from './aplCommon.jsx';
import { useAplScope, usePeriod } from './aplPeriod.js';
import { LoanListDrawer } from './LoanListDrawer.jsx';

const LEVEL_LABEL = { area: 'Area', tl: 'TL', sales: 'SA/SR', partner: 'Partner', store: 'Toko' };
const PATH_KEYS = { area: 'dArea', tl: 'dTl', sales: 'dSales', partner: 'dPartner' };

/**
 * B2 · Kinerja Penjualan (PRD v3): drill-down Area → TL → SA/SR → Partner → Toko. Klik baris = turun satu level;
 * "Pinjaman" membuka daftar pinjaman baris tersebut (di level Toko, klik baris langsung membuka pinjaman).
 */
export function AplSales(props) {
  const { tableState } = useScenario();
  return <AplSalesView key={tableState} {...props} />;
}

function AplSalesView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const period = usePeriod(query);
  const areaIds = useAplScope(user, query);
  const path = { area: q.dArea, tl: q.dTl, sales: q.dSales, partner: q.dPartner };
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const [loans, setLoans] = useState(null);
  const set = (patch) => navigate(withQuery('/apl/kinerja', { ...q, ...patch }));
  const key = JSON.stringify({ period, areaIds, path, c: q.channel, s: q.q });
  const load = (retry) => { setView('loading'); aplSalesRows(areaIds, period, path, { channel: q.channel, q: q.q }, { retry }).then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);

  const level = data?.level ?? 'area';
  const drill = (r) => {
    if (r.level === 'store') { setLoans({ title: r.name, scope: { ...path, store: r.key } }); return; }
    set({ [PATH_KEYS[r.level]]: r.key, q: '' });
  };
  const toCrumb = (lvl) => {
    const order = ['area', 'tl', 'sales', 'partner'];
    const keep = order.slice(0, order.indexOf(lvl) + 1);
    set(Object.fromEntries(order.map((k) => [PATH_KEYS[k], keep.includes(k) ? path[k] : ''])));
  };
  const pickSub = (v) => {
    if (!v) { set({ dTl: '', dSales: '', dPartner: '', sub: '' }); return; }
    // Tempatkan drill-down di bawah orang yang dipilih.
    const o = subordinateOptions(areaIds).find((x) => x.value === v);
    set(o.role === 'TL' ? { sub: v, dArea: String(o.areaId), dTl: v, dSales: '', dPartner: '' } : { sub: v, dArea: String(o.areaId), dTl: String(o.tlId), dSales: v, dPartner: '' });
  };

  const columns = [
    { key: 'name', header: LEVEL_LABEL[level], render: (r) => ({ priority: 'leading', title: r.name, description: r.sub }) },
    { key: 'submitted', header: 'Diajukan', align: 'right', render: (r) => formatNumber(r.submitted) },
    { key: 'accepted', header: 'Diterima', align: 'right', render: (r) => formatNumber(r.accepted) },
    { key: 'paidOut', header: 'Cair', align: 'right', render: (r) => formatNumber(r.paidOut) },
    { key: 'units', header: 'Unit Cair', align: 'right', render: (r) => formatNumber(r.paidOutUnits) },
    { key: 'amount', header: 'Nominal Cair', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(r.paidOutAmount)) }) },
    { key: 'rate', header: 'Acceptance Rate', align: 'right', render: (r) => formatPct(r.acceptanceRate) },
    { key: 'act', header: 'Aksi', render: (r) => ({ misc: true, children: (
      <span role="presentation" onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
        <Button size="2xs" variant="ghost" tone="primary" onClick={() => setLoans({ title: r.name, scope: { ...path, [r.level]: r.key } })}>Pinjaman</Button>
      </span>
    ) }) },
  ];
  const crumbs = [{ label: 'Semua area', icon: 'BarChartLine', onClick: () => set({ dArea: '', dTl: '', dSales: '', dPartner: '', sub: '' }) },
    ...(data?.crumbs ?? []).map((c, i, all) => ({ label: c.name, onClick: i < all.length - 1 ? () => toCrumb(c.level) : undefined }))];

  return (
    <AdminShell active="/apl/kinerja" icon="BarChartLine" title="Kinerja Penjualan" description="Telusuri kinerja pinjaman dari area hingga toko." user={user} onLogout={onLogout}>
      <PeriodFilter path="/apl/kinerja" query={query} user={user} period={period}>
        <div style={{ width: 160 }}>
          <Select size="sm" value={q.channel ?? ''} placeholder="Semua channel" onChange={(v) => set({ channel: v })}
            options={[{ value: '', label: 'Semua channel' }, ...Object.entries(CHANNEL).map(([value, label]) => ({ value, label }))]} />
        </div>
        <div style={{ width: 240 }}>
          <Select size="sm" value={q.sub ?? ''} placeholder="Semua bawahan" onChange={pickSub}
            options={[{ value: '', label: 'Semua bawahan' }, ...subordinateOptions(areaIds)]} />
        </div>
      </PeriodFilter>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
        <Breadcrumbs items={crumbs} />
        <SearchField placeholder={`Cari ${LEVEL_LABEL[level].toLowerCase()}`} value={q.q ?? ''} onChange={(v) => set({ q: v })} width={280} />
      </div>
      {data && view === 'data' && (
        <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
          Total: {formatNumber(data.total.submitted)} diajukan · {formatNumber(data.total.accepted)} diterima · {formatNumber(data.total.paidOut)} cair · {formatRp(data.total.paidOutAmount)} · acceptance rate {formatPct(data.total.acceptanceRate)}
        </span>
      )}
      <ListCard view={view} onRetry={() => load(true)} emptyMessage="Belum ada pinjaman pada periode dan filter ini.">
        {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={data?.rows ?? []} rowKey={(r) => r.key} columns={columns} minWidth={1100} onRowClick={drill} />}
      </ListCard>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
        <Icon name="InformationLine" size={16} />Klik baris untuk turun ke level berikutnya; di level Toko klik baris untuk membuka daftar pinjaman.
      </span>
      {loans && <LoanListDrawer title={loans.title} areaIds={areaIds} period={period} scope={loans.scope} filters={{ channel: q.channel }} onClose={() => setLoans(null)} />}
    </AdminShell>
  );
}
