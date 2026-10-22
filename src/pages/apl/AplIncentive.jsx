import { useEffect, useState } from 'react';
import { Badge } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { AsOf, BandBadge, IncomeDrawer, MonthSelect, MonthStatusBadge, PaymentLine } from '../../components/scope3/S3Common.jsx';
import { MONTH_STATUS, configFor, payoutDate, pipeline, rateLabel, salesRows, totalsOf } from '../../api/scope3.js';
import { userById } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { areaName } from '../../lib/constants.js';
import { formatNumber, formatPct, formatRp, formatYmd, monthLabel } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { defaultMonth, monthNote } from '../../lib/s3.js';
import { AreaSelect } from './aplCommon.jsx';
import { useAplScope } from './aplPeriod.js';

/**
 * B6 · Insentif APL (PRD Scope 3 FR-TG-003, FR-IN-006, FR-DF-004; SCR-3-06): penghasilan TL dan SA/SR di area yang dipegang,
 * dikelompokkan per tim TL. Per orang: hari valid, Cair dihitung vs target, capaian dan tier, gaji pokok, insentif, take home pay,
 * dan status pembayaran untuk bulan Final; total take home pay tim, per area, dan semua area. Klik baris = rincian hitung.
 * APL tidak punya target, insentif, atau daily fee sendiri (OQ-3-08).
 */
export function AplIncentive(props) {
  const { tableState, s3Today } = useScenario();
  return <AplIncentiveView key={`${tableState}|${s3Today}`} {...props} />;
}

function AplIncentiveView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const ym = defaultMonth(q.m);
  const areaIds = useAplScope(user, query);
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const [detail, setDetail] = useState(null);
  const set = (patch) => navigate(withQuery('/apl/insentif', { ...q, ...patch }));
  const load = (retry) => {
    setView('loading');
    // Total cair dihitung area = pinjaman area yang diajukan dan cair di bulan yang sama (bukan jumlah TL + SA/SR, FR-TG-004).
    Promise.all([salesRows(ym, { areaIds }, { retry }), pipeline(ym, { areaIds }, {}, { retry })])
      .then(([r, p]) => { setData({ ...r, areaActual: p.countedAmount }); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [ym, areaIds.join()]);

  const term = (q.q ?? '').trim().toLowerCase();
  const all = data?.rows ?? [];
  const tls = all.filter((r) => r.role === 'TL');
  const tlIds = new Set(tls.map((r) => r.userId));
  const leaderName = (r) => userById(r.leaderId)?.fullName ?? '';
  const match = (r) => !term || [r.name, leaderName(r)].some((v) => v.toLowerCase().includes(term));
  // Urutan: tiap TL diikuti SA/SR timnya; SA/SR yang TL-nya tidak punya baris di bulan ini di akhir.
  const teamOf = (tl) => all.filter((r) => r.leaderId === tl.userId);
  const rows = [
    ...tls.flatMap((tl) => {
      const team = teamOf(tl);
      const shown = [tl, ...team].filter(match);
      return shown.length ? [{ ...tl, team: team.length, teamTotal: totalsOf([tl, ...team]).takeHomePay, rowKey: `tl-${tl.userId}` },
        ...team.filter(match).map((r) => ({ ...r, member: true, rowKey: `m-${r.userId}` }))] : [];
    }),
    ...all.filter((r) => r.role !== 'TL' && !tlIds.has(r.leaderId) && match(r)).map((r) => ({ ...r, orphan: true, rowKey: `o-${r.userId}` })),
  ];
  const totals = totalsOf(all);
  const byArea = [...new Set(all.map((r) => r.areaId))].map((a) => ({ areaId: a, ...totalsOf(all.filter((r) => r.areaId === a)) }));
  const reached = all.filter((r) => r.achievement >= 100).length;
  const status = data?.monthStatus;
  const fee = configFor('fee', ym);

  const columns = [
    { key: 'name', header: 'Nama', render: (r) => ({
      priority: r.role === 'TL' ? 'leading' : 'regular', title: nowrap(`${r.member ? '— ' : ''}${r.name}`),
      description: r.role === 'TL' ? `TL ${r.tlLevel === 'SENIOR' ? 'Senior' : 'Junior'} · ${areaName(r.areaId)} · ${r.team} SA/SR`
        : `${r.role} · ${areaName(r.areaId)}${r.orphan ? ` · TL ${leaderName(r) || '-'}` : ''}`,
    }) },
    { key: 'days', header: 'Hari valid', align: 'right', render: (r) => ({ priority: 'regular', title: String(r.validDays), description: r.capped ? `maks. ${r.maxDays} dibayar` : undefined }) },
    { key: 'actual', header: 'Cair dihitung', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(r.actual)), description: `Target ${formatRp(r.target)}` }) },
    { key: 'ach', header: 'Capaian', render: (r) => ({ misc: true, children: (
      <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
        <span style={{ display: 'inline-flex', gap: 'var(--space-6)', alignItems: 'center' }}>{formatPct(r.achievement, 1)}<BandBadge band={r.band} /></span>
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Koefisien {rateLabel(r.coefficient)}</span>
      </span>
    ) }) },
    { key: 'basic', header: 'Gaji pokok', align: 'right', render: (r) => ({ misc: true, children: (
      <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-end' }}>
        {nowrap(formatRp(r.basicSalary))}
        {r.multiplierApplies && <Badge color="green" size="sm">{`×${r.multiplier}`}</Badge>}
      </span>
    ) }) },
    { key: 'inc', header: 'Insentif', align: 'right', render: (r) => nowrap(formatRp(r.incentive)) },
    { key: 'thp', header: 'Take home pay', render: (r) => ({ misc: true, children: (
      <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)', whiteSpace: 'nowrap' }}>{formatRp(r.takeHomePay)}</span>
        <PaymentLine payment={r.payment} />
        {r.role === 'TL' && r.team > 0 && <span style={{ font: 'var(--label-xs)', color: 'var(--text-sub-600)', whiteSpace: 'nowrap' }}>Total take home pay tim {formatRp(r.teamTotal)}</span>}
      </span>
    ) }) },
  ];

  return (
    <AdminShell active="/apl/insentif" icon="HandCoinLine" title="Insentif" description="Gaji pokok, insentif, dan take home pay TL dan SA/SR di area Anda, per tim TL." user={user} onLogout={onLogout}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
        <MonthSelect value={ym} onChange={(v) => set({ m: v })} />
        <AreaSelect path="/apl/insentif" query={query} user={user} />
      </div>
      <SearchField placeholder="Cari nama atau TL" value={q.q ?? ''} onChange={(v) => set({ q: v })} />
      {status && (
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
          <MonthStatusBadge status={status} />
          <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{monthNote(ym)} · jadwal bayar {formatYmd(payoutDate(ym))}</span>
          {data && <AsOf asOf={data.asOf} ym={ym} onRefresh={() => load(true)} />}
        </span>
      )}
      {view === 'data' && (
        <StatGrid min={220}>
          <StatCard icon="CalendarLine" color="blue" label="Status bulan" value={MONTH_STATUS[status]} hint={monthLabel(ym, true)} />
          <StatCard icon="Wallet3Line" color="purple" label="Total cair dihitung" value={formatRp(data.areaActual)} hint="Diajukan dan cair di bulan yang sama" />
          <StatCard icon="HandCoinLine" color="green" label="Total take home pay" value={formatRp(totals.takeHomePay)}
            hint={byArea.length > 1 ? byArea.map((a) => `${areaName(a.areaId)} ${formatRp(a.takeHomePay)}`).join(' · ') : `Gaji pokok ${formatRp(totals.basicSalary)} + insentif ${formatRp(totals.incentive)}`} />
          <StatCard icon="TeamLine" color="orange" label="Mencapai target" value={`${formatNumber(reached)} dari ${formatNumber(all.length)}`} hint="Capaian ≥ 100%" />
        </StatGrid>
      )}
      <ListCard view={view} onRetry={() => load(true)} emptyMessage="Belum ada data TL atau SA/SR di area Anda untuk filter ini.">
        {view === 'data' && rows.length === 0 && <span style={{ display: 'block', padding: 'var(--space-16)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Belum ada data TL atau SA/SR di area Anda untuk filter ini.</span>}
        {(view === 'loading' || (view === 'data' && rows.length > 0)) && <DataTable loading={view === 'loading'} rows={rows} rowKey={(r) => r.rowKey} columns={columns} minWidth={1080} onRowClick={setDetail} />}
      </ListCard>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
        Gaji pokok = hari valid (check in dan check out, maks. {fee.maxDays} hari) × daily fee area dan peran; dikali {String(fee.multiplier).replace('.', ',')} jika capaian di atas {fee.threshold}%. Insentif = koefisien tier × Cair dihitung (pinjaman yang diajukan dan cair di bulan yang sama). Take home pay = gaji pokok + insentif. Total tim = TL + SA/SR yang dipimpin.
      </span>
      {detail && <IncomeDrawer row={detail} onClose={() => setDetail(null)} />}
    </AdminShell>
  );
}
