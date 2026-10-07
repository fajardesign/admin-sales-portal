import { useEffect, useState } from 'react';
import { Alert } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { BarChart } from '../../components/BarChart.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { nowrap } from '../../lib/cells.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SectionCard } from '../../components/KeyValueGrid.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { aplPerformance, currentMonth } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { areaName } from '../../lib/constants.js';
import { formatRp, monthLabel } from '../../lib/format.js';
import { navigate } from '../../lib/router.js';
import { PeriodFilter } from './aplCommon.jsx';
import { METRICS, MONTH_CURRENT_NOTE, achievementCell, useAplScope, usePeriod } from './aplData.jsx';

/** A1 · Ringkasan area APL: 5 metrik pipeline pinjaman, tren nominal cair 6 bulan, dan rincian per area. */
export function AplSummary(props) {
  const { tableState } = useScenario();
  return <AplSummaryView key={tableState} {...props} />;
}

function AplSummaryView({ user, onLogout, query }) {
  const period = usePeriod(query);
  const { areaIds } = useAplScope(user, query);
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const key = `${period.selected.join()}|${areaIds.join()}`;
  const load = (retry) => { setView('loading'); aplPerformance(areaIds, period.selected, { retry }).then((d) => { setData(d); setView('data'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);

  const areas = user.areaIds.map(areaName).join(', ');
  return (
    <AdminShell active="/apl" icon="Dashboard3Line" title="Ringkasan" description={`Performa pipeline pinjaman di area Anda: ${areas}.`} user={user} onLogout={onLogout}>
      <PeriodFilter path="/apl" query={query} user={user} period={period} />
      {period.selected.includes(currentMonth()) && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{MONTH_CURRENT_NOTE}</span>}
      {view === 'error' ? (
        <ListCard view="error" onRetry={() => load(true)} />
      ) : (
        <>
          <StatGrid min={200}>
            {METRICS.map((m) => (
              <StatCard key={m.key} icon={m.icon} color={m.color} label={m.label} value={view === 'data' ? m.format(data.total[m.key]) : '…'} hint={period.label} />
            ))}
          </StatGrid>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 2fr)', gap: 'var(--space-16)' }}>
            <SectionCard title="Tren nominal cair" actions={<span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>6 bulan terakhir</span>}>
              {view === 'data' && (
                <BarChart ariaLabel="Nominal cair per bulan" legend="Nominal cair (juta rupiah); batang gelap = periode terpilih"
                  format={(v) => `${Math.round(v / 1e6).toLocaleString('id-ID')} jt`}
                  data={data.trend.map((t) => ({ label: monthLabel(t.month), value: t.paidOutAmount, highlight: period.selected.includes(t.month) }))} />
              )}
            </SectionCard>
            <SectionCard title="Pintasan">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
                <StatCard icon="BarChartLine" label="Performa TL, SA/SR, dan Partner/Toko" value="Performa" onClick={() => navigate(`/apl/performa?${query.toString()}`)} />
                <StatCard icon="HandCoinLine" label="Estimasi insentif SA/SR dan Partner/Toko" value="Insentif" onClick={() => navigate(`/apl/insentif?${query.toString()}`)} />
              </div>
            </SectionCard>
          </div>
          <SectionCard title="Per area">
            {view === 'data' && data.byArea.length === 0 && <Alert status="information" size="sm" title="Belum ada data pinjaman pada periode ini." />}
            {(view === 'loading' || data?.byArea.length > 0) && (
              <DataTable loading={view === 'loading'} skeletonRows={2} minWidth={900} rows={data?.byArea ?? []}
                columns={[
                  { key: 'name', header: 'Area', render: (r) => ({ priority: 'leading', title: r.name }) },
                  ...METRICS.map((m) => ({ key: m.key, header: m.label, align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(m.format(r[m.key])) }) })),
                  { key: 'target', header: 'Target Nominal', align: 'right', render: (r) => nowrap(formatRp(byAreaTarget(data, r.id))) },
                  { key: 'ach', header: 'Pencapaian', render: (r) => achievementCell(r.paidOutAmount, byAreaTarget(data, r.id)) },
                ]} />
            )}
          </SectionCard>
        </>
      )}
    </AdminShell>
  );
}

/** Target area = jumlah target toko di area tsb. */
const byAreaTarget = (data, areaId) => data.byStore.filter((s) => s.areaId === areaId).reduce((a, s) => a + (s.target ?? 0), 0);
