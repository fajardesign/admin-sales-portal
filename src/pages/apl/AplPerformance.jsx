import { useEffect, useState } from 'react';
import { TabMenuHorizontal } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { nowrap } from '../../lib/cells.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { aplPerformance, currentMonth } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { TL_LEVEL, areaName } from '../../lib/constants.js';
import { formatRp } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { PeriodFilter } from './aplCommon.jsx';
import { METRICS, MONTH_CURRENT_NOTE, achievementCell, useAplScope, usePeriod } from './aplData.jsx';

const TABS = [{ value: 'tl', label: 'TL' }, { value: 'sales', label: 'SA/SR' }, { value: 'toko', label: 'Partner/Toko' }];

/** A4 · Performa TL, SA/SR, dan Partner/Toko — metrik pipeline pinjaman per periode, cari per anggota. */
export function AplPerformance(props) {
  const { tableState } = useScenario();
  return <AplPerformanceView key={tableState} {...props} />;
}

function AplPerformanceView({ user, onLogout, query }) {
  const period = usePeriod(query);
  const { areaIds } = useAplScope(user, query);
  const tab = TABS.some((t) => t.value === query.get('tab')) ? query.get('tab') : 'tl';
  const term = (query.get('q') ?? '').toLowerCase();
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const key = `${period.selected.join()}|${areaIds.join()}`;
  const load = (retry) => { setView('loading'); aplPerformance(areaIds, period.selected, { retry }).then((d) => { setData(d); setView('data'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);
  const set = (patch) => navigate(withQuery('/apl/performa', { ...Object.fromEntries(query.entries()), ...patch }));

  const source = data ? { tl: data.byTl, sales: data.bySales, toko: data.byStore }[tab] : [];
  const rows = source.filter((r) => !term || [r.name, r.partnerName, r.sales, r.leader].some((v) => v?.toLowerCase().includes(term)));
  const lead = {
    tl: (r) => ({ priority: 'leading', title: nowrap(r.name), description: `TL ${TL_LEVEL[r.tlLevel]}` }),
    sales: (r) => ({ priority: 'leading', title: nowrap(r.name), description: `${r.role} · TL ${r.leader ?? '-'}` }),
    toko: (r) => ({ priority: 'leading', title: r.name, description: `${r.partnerName} · ${r.sales ?? 'Belum ditugaskan'}` }),
  }[tab];
  const columns = [
    { key: 'name', header: tab === 'toko' ? 'Toko' : 'Nama', render: lead },
    { key: 'area', header: 'Area', render: (r) => areaName(r.areaId) },
    ...METRICS.map((m) => ({ key: m.key, header: m.label, align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(m.format(r[m.key])) }) })),
    { key: 'target', header: 'Target Nominal', align: 'right', render: (r) => nowrap(r.target ? formatRp(r.target) : '-') },
    { key: 'ach', header: 'Pencapaian', render: (r) => achievementCell(r.paidOutAmount, r.target) },
  ];

  return (
    <AdminShell active="/apl/performa" icon="BarChartLine" title="Performa" description="Performa pipeline pinjaman TL, SA/SR, dan Partner/Toko di area Anda." user={user} onLogout={onLogout}>
      <PeriodFilter path="/apl/performa" query={query} user={user} period={period} />
      {period.selected.includes(currentMonth()) && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{MONTH_CURRENT_NOTE}</span>}
      <TabMenuHorizontal value={tab} onChange={(v) => set({ tab: v, q: '' })} items={TABS} />
      <SearchField placeholder={tab === 'toko' ? 'Cari toko, partner, atau SA/SR' : 'Cari nama'} value={query.get('q') ?? ''} onChange={(v) => set({ q: v })} />
      <ListCard view={view === 'data' && rows.length === 0 ? 'empty' : view} onRetry={() => load(true)}
        emptyMessage={term ? 'Tidak ada data yang sesuai dengan pencarian.' : 'Belum ada data pinjaman pada periode ini.'}>
        {(view === 'loading' || (view === 'data' && rows.length > 0)) && (
          <DataTable loading={view === 'loading'} rows={rows} columns={columns} minWidth={1320} />
        )}
      </ListCard>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Target dan pencapaian dihitung dari nominal cair. Target SA/SR dan TL = jumlah target toko yang dipegang, tanpa hitung ganda.</span>
    </AdminShell>
  );
}
