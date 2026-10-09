import { useEffect, useState } from 'react';
import { AdminShell } from '../../components/AdminShell.jsx';
import { BarChart } from '../../components/BarChart.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SectionCard } from '../../components/KeyValueGrid.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { aplDashboard } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { bar } from '../../lib/cells.jsx';
import { areaName } from '../../lib/constants.js';
import { formatDate, formatNumber, formatPct, formatRp } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { DeltaBadge, PeriodFilter } from './aplCommon.jsx';
import { delta, shareQuery, useAplScope, usePeriod } from './aplPeriod.js';

const SALES = [
  { key: 'submitted', label: 'Pinjaman diajukan', icon: 'FileList2Line', color: 'blue', fmt: formatNumber },
  { key: 'accepted', label: 'Pinjaman diterima', icon: 'CheckLine', color: 'teal', fmt: formatNumber },
  { key: 'paidOut', label: 'Pinjaman cair', icon: 'Wallet3Line', color: 'purple', fmt: formatNumber },
  { key: 'paidOutAmount', label: 'Nominal cair', icon: 'MoneyDollarCircleLine', color: 'green', fmt: formatRp },
];
const PROD = [
  { key: 'attendanceRate', label: 'Tingkat kehadiran', hint: 'Hari check in / hari kerja Senin–Sabtu', icon: 'CalendarLine', color: 'blue' },
  { key: 'visitRate', label: 'Minggu kunjungan lengkap', hint: 'Minggu selesai dengan target 6 hari tercapai', icon: 'MapPinLine', color: 'orange', value: (p) => `${p.visitWeeksComplete}/${p.visitWeeks}` },
  { key: 'onTimeRate', label: 'Tepat waktu', hint: 'Check in ≤ 10:00 waktu lokal / hadir', icon: 'TimeLine', color: 'teal' },
];

/** B1 · APL Dashboard (PRD v3): penjualan & produktivitas area dengan perbandingan periode sebelumnya; tiap kartu membuka detail. */
export function AplDashboard(props) {
  const { tableState } = useScenario();
  return <AplDashboardView key={tableState} {...props} />;
}

function AplDashboardView({ user, onLogout, query }) {
  const period = usePeriod(query);
  const areaIds = useAplScope(user, query);
  const [d, setD] = useState(null);
  const [view, setView] = useState('loading');
  const key = `${period.from}|${period.to}|${areaIds.join()}`;
  const load = (retry) => { setView('loading'); aplDashboard(areaIds, period, { retry }).then((r) => { setD(r); setView('data'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);
  const go = (path, extra = {}) => navigate(withQuery(path, { ...shareQuery(query), ...extra }));
  const ld = view === 'loading';

  return (
    <AdminShell active="/apl" icon="Dashboard3Line" title="Dashboard" description={`Penjualan dan produktivitas di area Anda: ${user.areaIds.map(areaName).join(', ')}.`} user={user} onLogout={onLogout}>
      <PeriodFilter path="/apl" query={query} user={user} period={period} />
      {view === 'error' ? <ListCard view="error" onRetry={() => load(true)} /> : (
        <>
          <SectionCard title={`Penjualan · ${period.label}`}>
            <StatGrid min={230}>
              {SALES.map((m) => <StatCard key={m.key} icon={m.icon} color={m.color} label={m.label} value={ld ? '…' : m.fmt(d.sales.cur[m.key])}
                hint={ld ? undefined : <DeltaBadge d={delta(d.sales.cur[m.key], d.sales.prev[m.key])} />} onClick={() => go('/apl/kinerja')} />)}
            </StatGrid>
          </SectionCard>
          <SectionCard title={`Produktivitas · ${period.label}`}>
            <StatGrid min={230}>
              {PROD.map((m) => <StatCard key={m.key} icon={m.icon} color={m.color} label={m.label} value={ld ? '…' : m.value ? m.value(d.productivity.cur) : formatPct(d.productivity.cur[m.key])}
                hint={ld ? m.hint : <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>{m.hint}<DeltaBadge d={delta(d.productivity.cur[m.key], d.productivity.prev[m.key])} /></span>}
                onClick={() => go('/apl/produktivitas', { tab: m.key === 'visitRate' ? 'kunjungan' : '' })} />)}
            </StatGrid>
          </SectionCard>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 3fr) minmax(0, 2fr)', gap: 'var(--space-16)' }}>
            <SectionCard title="Tren nominal cair per minggu">
              {ld ? bar('100%', 220, 'var(--rounded-12)') : d.weeks.every((w) => !w.amount) ? <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Belum ada pencairan pada periode ini.</span> : (
                <BarChart ariaLabel="Nominal cair per minggu" legend="Nominal cair (juta rupiah) per minggu mulai Senin; batang gelap = minggu dalam periode"
                  format={(v) => `${Math.round(v / 1e6).toLocaleString('id-ID')} jt`}
                  data={d.weeks.map((w) => ({ label: formatDate(new Date(`${w.from}T05:00:00Z`)).slice(0, 6), value: w.amount, highlight: w.inPeriod }))} />
              )}
            </SectionCard>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
              <StatCard icon="Building2Line" color="blue" label="Partner aktif" value={ld ? '…' : formatNumber(d.partnerCount)} hint={ld ? undefined : `${d.storeCount} toko aktif`} onClick={() => go('/apl/partner')} />
              <StatCard icon="TeamLine" color="purple" label="Tim" value={ld ? '…' : formatNumber(d.team.TL + d.team.SR + d.team.SA)} hint={ld ? undefined : `${d.team.TL} TL · ${d.team.SR} SR · ${d.team.SA} SA`} onClick={() => go('/apl/tim')} />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 'var(--space-16)' }}>
            {[['Top 5 TL', 'top'], ['Bottom 5 TL', 'bottom']].map(([title, k]) => (
              <SectionCard key={k} title={title} actions={<span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>berdasarkan nominal cair</span>}>
                {ld ? bar('100%', 120, 'var(--rounded-12)') : d[k].length === 0 ? <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Belum ada TL aktif.</span> : (
                  <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
                    {d[k].map((t, i) => (
                      <li key={t.id}>
                        <button type="button" onClick={() => go('/apl/kinerja', { dArea: String(t.areaId), dTl: String(t.id) })}
                          style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 'var(--space-12)', padding: 'var(--space-10) 0', border: 0, borderTop: i ? '1px solid var(--stroke-soft-200)' : 0, background: 'none', cursor: 'pointer', textAlign: 'left' }}>
                          <span style={{ width: 'var(--space-24)', font: 'var(--label-sm)', color: 'var(--text-soft-400)' }}>{i + 1}</span>
                          <span style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{t.name}</span>
                            <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>TL {t.tlLevel === 'SENIOR' ? 'Senior' : 'Junior'} · {areaName(t.areaId)}</span>
                          </span>
                          <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)', whiteSpace: 'nowrap' }}>{formatRp(t.paidOutAmount)}</span>
                        </button>
                      </li>
                    ))}
                  </ol>
                )}
              </SectionCard>
            ))}
          </div>
        </>
      )}
    </AdminShell>
  );
}
