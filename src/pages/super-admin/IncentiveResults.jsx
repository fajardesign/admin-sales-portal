import { useEffect, useState } from 'react';
import { Badge, Button, Icon, Select, TabMenuHorizontal } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { SearchField } from '../../components/FilterBar.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { useToast } from '../../components/Toaster.jsx';
import { AsOf, BandBadge, IncomeDrawer, MonthSelect, MonthStatusBadge, PartnerIncomeDrawer, PaymentLine } from '../../components/scope3/S3Common.jsx';
import { MONTH_STATUS, PAYMENT_STATUS, partnerRows, payoutDate, rateLabel, salesRows, totalsOf } from '../../api/scope3.js';
import { userById } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { nowrap } from '../../lib/cells.jsx';
import { AREAS, areaName } from '../../lib/constants.js';
import { downloadCsv } from '../../lib/csv.js';
import { formatNumber, formatPct, formatRp, formatYmd, monthLabel } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { defaultMonth, monthNote } from '../../lib/s3.js';

const ROLE_OPTS = [{ value: '', label: 'Semua role' }, { value: 'TL', label: 'TL' }, { value: 'SR', label: 'SR' }, { value: 'SA', label: 'SA' }];
const AREA_OPTS = [{ value: '', label: 'Semua area' }, ...AREAS.map((a) => ({ value: String(a.id), label: a.name }))];
const roleText = (r) => (r.role === 'TL' ? `TL ${r.tlLevel === 'SENIOR' ? 'Senior' : 'Junior'}` : r.role);

/**
 * E3 · Hasil Perhitungan (PRD Scope 3 FR-CF-002, SCR-3-08): laporan bulanan untuk Finance, tab Sales dan Partner. Sales per
 * orang: hari valid, hari dibayar, daily fee, multiplier, gaji pokok, target, cair dihitung, capaian, tier, insentif, take home
 * pay, status bulan, dan untuk bulan Final status pembayaran, koreksi, jumlah dibayar, tanggal bayar. Ekspor Excel. Hanya Super Admin.
 */
export function IncentiveResults(props) {
  const { tableState, s3Today } = useScenario();
  return <IncentiveResultsView key={`${tableState}|${s3Today}`} {...props} />;
}

function IncentiveResultsView({ user, onLogout, query }) {
  const toast = useToast();
  const q = Object.fromEntries(query.entries());
  const tab = q.tab === 'partner' ? 'partner' : 'sales';
  const ym = defaultMonth(q.m);
  const [data, setData] = useState(null);
  const [view, setView] = useState('loading');
  const [detail, setDetail] = useState(null);
  const [exporting, setExporting] = useState(false);
  const set = (patch) => navigate(withQuery('/hasil-perhitungan', { ...q, ...patch }));
  const scope = q.area ? { areaIds: [Number(q.area)] } : {};
  const load = (retry) => {
    setView('loading');
    (tab === 'sales' ? salesRows(ym, scope, { retry }) : partnerRows(ym, scope, { retry }))
      .then((r) => { setData(r); setView(r.rows.length ? 'data' : 'empty'); }, () => setView('error'));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [tab, ym, q.area]);

  const term = (q.q ?? '').trim().toLowerCase();
  const rows = (data?.rows ?? []).filter((r) => (tab === 'partner' || !q.role || r.role === q.role)
    && (!term || [r.name, tab === 'sales' ? userById(r.leaderId)?.fullName ?? '' : ''].some((v) => v.toLowerCase().includes(term))));
  const final = data?.monthStatus === 'FINAL';
  const paidRows = rows.filter((r) => r.payment?.status === 'DIBAYAR');

  function exportFile() {
    setExporting(true);
    try {
      if (tab === 'sales') {
        downloadCsv(`hasil-perhitungan-sales-${ym}.csv`,
          ['Nama', 'Role', 'TL', 'Area', 'Hari valid', 'Hari dibayar', 'Daily fee', 'Multiplier', 'Gaji pokok', 'Target', 'Cair dihitung', 'Capaian (%)', 'Koefisien (%)', 'Insentif', 'Take home pay', 'Status bulan', 'Status pembayaran', 'Koreksi', 'Catatan', 'Jumlah dibayar', 'Tanggal bayar'],
          rows.map((r) => [r.name, roleText(r), userById(r.leaderId)?.fullName ?? '', areaName(r.areaId), r.validDays, r.paidDays, r.dailyFee, r.multiplierApplies ? 'Ya' : 'Tidak', r.basicSalary,
            r.target, r.actual, r.achievement.toFixed(1), r.coefficient, r.incentive, r.takeHomePay, MONTH_STATUS[r.monthStatus],
            r.payment ? PAYMENT_STATUS[r.payment.status] : '', r.payment?.correction ?? '', r.payment?.note ?? '', r.payment?.paidAmount ?? '', r.payment?.paidAt ?? '']));
      } else {
        downloadCsv(`hasil-perhitungan-partner-${ym}.csv`,
          ['Partner', 'Area', 'Jumlah toko', 'Target', 'Cair dihitung', 'Capaian (%)', 'Koefisien (%)', 'Insentif partner', 'Status bulan', 'Status pembayaran', 'Koreksi', 'Jumlah dibayar', 'Tanggal bayar'],
          rows.map((r) => [r.name, areaName(r.areaId), r.storeCount, r.target, r.actual, r.achievement.toFixed(1), r.coefficient, r.incentive, MONTH_STATUS[r.monthStatus],
            r.payment ? PAYMENT_STATUS[r.payment.status] : '', r.payment?.correction ?? '', r.payment?.paidAmount ?? '', r.payment?.paidAt ?? '']));
      }
      toast('success', 'Laporan diekspor.');
    } catch {
      toast('error', 'Gagal mengekspor laporan. Coba lagi.');
    } finally {
      setExporting(false);
    }
  }

  const ach = (r) => ({ misc: true, children: (
    <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
      <span style={{ display: 'inline-flex', gap: 'var(--space-6)', alignItems: 'center' }}>{formatPct(r.achievement, 1)}<BandBadge band={r.band} /></span>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Koefisien {rateLabel(r.coefficient)}</span>
    </span>
  ) });
  const pay = (amount) => (r) => ({ misc: true, children: (
    <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)', whiteSpace: 'nowrap' }}>{formatRp(amount(r))}</span>
      <PaymentLine payment={r.payment} />
    </span>
  ) });
  const salesCols = [
    { key: 'name', header: 'Nama', render: (r) => ({ priority: 'leading', title: nowrap(r.name), description: `${roleText(r)} · ${areaName(r.areaId)}${r.leaderId ? ` · TL ${userById(r.leaderId)?.fullName ?? '-'}` : ''}` }) },
    { key: 'days', header: 'Hari valid / dibayar', align: 'right', render: (r) => `${r.validDays} / ${r.paidDays}` },
    { key: 'basic', header: 'Gaji pokok', align: 'right', render: (r) => ({ misc: true, children: (
      <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-end' }}>
        {nowrap(formatRp(r.basicSalary))}
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', whiteSpace: 'nowrap' }}>{formatRp(r.dailyFee)} / hari</span>
        {r.multiplierApplies && <Badge color="green" size="sm">{`×${r.multiplier}`}</Badge>}
      </span>
    ) }) },
    { key: 'actual', header: 'Cair dihitung', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(r.actual)), description: `Target ${formatRp(r.target)}` }) },
    { key: 'ach', header: 'Capaian', render: ach },
    { key: 'inc', header: 'Insentif', align: 'right', render: (r) => nowrap(formatRp(r.incentive)) },
    { key: 'thp', header: 'Take home pay', render: pay((r) => r.takeHomePay) },
  ];
  const partnerCols = [
    { key: 'name', header: 'Partner', render: (r) => ({ priority: 'leading', title: r.name, description: `${areaName(r.areaId)} · ${r.storeCount} toko` }) },
    { key: 'actual', header: 'Cair dihitung', align: 'right', render: (r) => ({ priority: 'regular', title: nowrap(formatRp(r.actual)), description: `Target ${formatRp(r.target)}` }) },
    { key: 'ach', header: 'Capaian', render: ach },
    { key: 'inc', header: 'Insentif partner', render: pay((r) => r.incentive) },
  ];
  const sumField = tab === 'sales' ? 'takeHomePay' : 'incentive';
  const total = rows.reduce((a, r) => a + r[sumField], 0);

  return (
    <AdminShell active="/hasil-perhitungan" icon="FileList2Line" title="Hasil Perhitungan" description="Gaji pokok, insentif, dan take home pay sales serta insentif partner per bulan, untuk Finance." user={user} onLogout={onLogout}>
      <TabMenuHorizontal value={tab} onChange={(v) => set({ tab: v === 'sales' ? '' : v, role: '' })} items={[{ value: 'sales', label: 'Sales' }, { value: 'partner', label: 'Partner' }]} />
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
        <MonthSelect value={ym} onChange={(v) => set({ m: v })} />
        <div style={{ width: 180 }}><Select size="sm" value={q.area ?? ''} placeholder="Semua area" onChange={(v) => set({ area: v })} options={AREA_OPTS} /></div>
        {tab === 'sales' && <div style={{ width: 160 }}><Select size="sm" value={q.role ?? ''} placeholder="Semua role" onChange={(v) => set({ role: v })} options={ROLE_OPTS} /></div>}
        <div style={{ flex: 1 }} />
        <Button size="sm" variant="stroke" tone="neutral" leftIcon={<Icon name="DownloadLine" size={16} />} disabled={exporting || view !== 'data'} onClick={exportFile}>{exporting ? 'Mengekspor...' : 'Ekspor Excel'}</Button>
      </div>
      <SearchField placeholder={tab === 'sales' ? 'Cari nama atau TL' : 'Cari partner'} value={q.q ?? ''} onChange={(v) => set({ q: v })} />
      {data && (
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
          <MonthStatusBadge status={data.monthStatus} />
          <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{monthNote(ym)} · jadwal bayar {formatYmd(payoutDate(ym, tab === 'sales' ? 'SALES' : 'PARTNER'))}</span>
          <AsOf asOf={data.asOf} ym={ym} onRefresh={() => load(true)} />
        </span>
      )}
      {view === 'data' && (
        <StatGrid min={220}>
          <StatCard icon="Wallet3Line" color="green" label={tab === 'sales' ? 'Total take home pay' : 'Total insentif partner'} value={formatRp(total)}
            hint={tab === 'sales' ? `Gaji pokok ${formatRp(totalsOf(rows).basicSalary)} + insentif ${formatRp(totalsOf(rows).incentive)}` : monthLabel(ym, true)} />
          <StatCard icon={tab === 'sales' ? 'TeamLine' : 'Building2Line'} color="blue" label={tab === 'sales' ? 'Sales' : 'Partner'} value={formatNumber(rows.length)} />
          <StatCard icon="CheckLine" color="teal" label="Mencapai target" value={formatNumber(rows.filter((r) => r.achievement >= 100).length)} hint="Capaian ≥ 100%" />
          {final && <StatCard icon="HandCoinLine" color="purple" label="Sudah dibayar" value={formatRp(paidRows.reduce((a, r) => a + r.payment.paidAmount, 0))} hint={`${formatNumber(paidRows.length)} baris`} />}
        </StatGrid>
      )}
      <ListCard view={view} onRetry={() => load(true)} emptyMessage="Belum ada hasil perhitungan untuk filter ini.">
        {view === 'data' && rows.length === 0 && <span style={{ display: 'block', padding: 'var(--space-16)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Belum ada hasil perhitungan untuk filter ini.</span>}
        {(view === 'loading' || (view === 'data' && rows.length > 0)) && (
          <DataTable loading={view === 'loading'} rows={rows} rowKey={(r) => (tab === 'sales' ? r.userId : r.partnerId)} columns={tab === 'sales' ? salesCols : partnerCols} minWidth={tab === 'sales' ? 1080 : 820} onRowClick={setDetail} />
        )}
      </ListCard>
      {detail && (tab === 'sales' ? <IncomeDrawer row={detail} onClose={() => setDetail(null)} /> : <PartnerIncomeDrawer row={detail} onClose={() => setDetail(null)} />)}
    </AdminShell>
  );
}
