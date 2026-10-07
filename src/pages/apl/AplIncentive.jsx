import { useEffect, useState } from 'react';
import { Alert, Badge, TabMenuHorizontal } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { nowrap } from '../../lib/cells.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { aplIncentives } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { areaName } from '../../lib/constants.js';
import { formatNumber, formatPct, formatRp } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { PeriodFilter } from './aplCommon.jsx';
import { achievementCell, useAplScope, usePeriod } from './aplData.jsx';

const TABS = [{ value: 'sales', label: 'SA/SR' }, { value: 'toko', label: 'Partner/Toko' }];
const rate = (v) => formatPct(v, 2);
const money = (v) => ({ priority: 'regular', title: nowrap(formatRp(v)) });

/** A5 · Estimasi insentif SA/SR dan Partner/Toko per bulan, dihitung dari skema insentif yang berlaku (Super Admin). */
export function AplIncentive(props) {
  const { tableState } = useScenario();
  return <AplIncentiveView key={tableState} {...props} />;
}

function AplIncentiveView({ user, onLogout, query }) {
  const period = usePeriod(query);
  const { areaIds } = useAplScope(user, query);
  const tab = TABS.some((t) => t.value === query.get('tab')) ? query.get('tab') : 'sales';
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const key = `${period.m}|${areaIds.join()}`;
  const load = (retry) => { setView('loading'); aplIncentives(areaIds, period.m, { retry }).then((d) => { setData(d); setView('data'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);
  const set = (patch) => navigate(withQuery('/apl/insentif', { ...Object.fromEntries(query.entries()), ...patch }));

  const rows = data ? (tab === 'sales' ? data.sales : data.stores) : [];
  const sum = (k) => rows.reduce((a, r) => a + r[k], 0);
  const salesCols = [
    { key: 'name', header: 'Nama', render: (r) => ({ priority: 'leading', title: nowrap(r.name), description: `${r.role} · ${areaName(r.areaId)} · ${r.stores} toko` }) },
    { key: 'target', header: 'Target Nominal', align: 'right', render: (r) => money(r.target) },
    { key: 'paid', header: 'Nominal Cair', align: 'right', render: (r) => money(r.paidOutAmount) },
    { key: 'ach', header: 'Pencapaian', render: (r) => achievementCell(r.paidOutAmount, r.target) },
    { key: 'po', header: 'Paid Out Incentive', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(r.paidOutIncentive)), description: `Tarif ${rate(r.rate)}` }) },
    { key: 'days', header: 'Daily Fee', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(r.dailyFee)), description: `${r.days} hari × ${formatRp(r.feePerDay)}` }) },
    { key: 'total', header: 'Total Estimasi', align: 'right', render: (r) => ({ priority: 'leading', title: nowrap(formatRp(r.total)) }) },
  ];
  const storeCols = [
    { key: 'name', header: 'Toko', render: (r) => ({ priority: 'leading', title: r.name, description: `${r.partnerName} · ${areaName(r.areaId)}` }) },
    { key: 'target', header: 'Target Nominal', align: 'right', render: (r) => money(r.target) },
    { key: 'paid', header: 'Nominal Cair', align: 'right', render: (r) => money(r.paidOutAmount) },
    { key: 'ach', header: 'Pencapaian', render: (r) => achievementCell(r.paidOutAmount, r.target) },
    { key: 'vol', header: 'Volume Incentive', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(r.volumeIncentive)), description: `Tarif ${rate(r.volRate)}` }) },
    { key: 'col', header: 'Collection (MFP)', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(r.collectionIncentive)), description: `MFP ${formatPct(r.mfp, 1)} · tarif ${rate(r.colRate)}` }) },
    { key: 'total', header: 'Total Estimasi', align: 'right', render: (r) => ({ priority: 'leading', title: nowrap(formatRp(r.total)) }) },
  ];

  return (
    <AdminShell active="/apl/insentif" icon="HandCoinLine" title="Insentif" description="Estimasi insentif SA/SR dan Partner/Toko di area Anda per bulan." user={user} onLogout={onLogout}
      headerExtra={null}>
      <PeriodFilter path="/apl/insentif" query={query} user={user} period={period} monthOnly />
      <Alert status="information" size="sm" title="Nilai di halaman ini adalah estimasi dari skema insentif yang berlaku. Nilai final dihitung sistem setiap awal bulan." />
      <TabMenuHorizontal value={tab} onChange={(v) => set({ tab: v })} items={TABS} />
      {view === 'data' && rows.length > 0 && (
        <StatGrid min={220}>
          <StatCard icon="Wallet3Line" color="green" label="Total estimasi insentif" value={formatRp(sum('total'))} hint={`${period.label} · dibayar tgl ${tab === 'sales' ? data.payday.sales : data.payday.partner} bulan berikutnya`} />
          <StatCard icon="MoneyDollarCircleLine" color="purple" label="Total nominal cair" value={formatRp(sum('paidOutAmount'))} />
          <StatCard icon={tab === 'sales' ? 'TeamLine' : 'Building2Line'} color="blue" label={tab === 'sales' ? 'SA/SR' : 'Toko'} value={formatNumber(rows.length)}
            hint={<Badge color="gray" size="sm">Estimasi</Badge>} />
        </StatGrid>
      )}
      <ListCard view={view === 'data' && rows.length === 0 ? 'empty' : view} onRetry={() => load(true)} emptyMessage="Belum ada data insentif pada bulan ini.">
        {(view === 'loading' || (view === 'data' && rows.length > 0)) && (
          <DataTable loading={view === 'loading'} rows={rows} columns={tab === 'sales' ? salesCols : storeCols} minWidth={1300} />
        )}
      </ListCard>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
        {tab === 'sales'
          ? 'SA/SR: Daily Fee × hari hadir + tarif Paid Out Incentive (sesuai tier pencapaian target) × nominal cair.'
          : 'Partner/Toko (Offline Retailer): tarif Volume Incentive (tier pencapaian target) + tarif Collection Incentive (tier MFP) × nominal cair toko.'}
      </span>
    </AdminShell>
  );
}
