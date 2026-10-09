import { useEffect, useState } from 'react';
import { Select } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { IncentiveTable } from '../../components/IncentiveTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { TbdCallout } from '../../components/TbdCallout.jsx';
import { currentMonth, incentiveResults, perfMonths } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { AREAS } from '../../lib/constants.js';
import { formatNumber, formatRp, monthLabel } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';

const ROLE_OPTS = [{ value: '', label: 'Semua role' }, { value: 'TL', label: 'TL' }, { value: 'SR', label: 'SR' }, { value: 'SA', label: 'SA' }, { value: 'Partner', label: 'Partner' }, { value: 'Customer (CRP)', label: 'Customer (CRP)' }];

/** E3 · Hasil Perhitungan (read-only): insentif bulanan per penerima — pencapaian, tier, nominal, versi skema. Pembayaran di luar portal. */
export function IncentiveResults(props) {
  const { tableState } = useScenario();
  return <IncentiveResultsView key={tableState} {...props} />;
}

function IncentiveResultsView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const month = perfMonths().includes(q.m) ? q.m : currentMonth();
  const [rows, setRows] = useState([]);
  const [view, setView] = useState('loading');
  const set = (patch) => navigate(withQuery('/hasil-perhitungan', { ...q, ...patch }));
  const load = (retry) => { setView('loading'); incentiveResults(null, month, { area: q.area, role: q.role }, { retry }).then((r) => { setRows(r); setView(r.length ? 'data' : 'empty'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [month, q.area, q.role]);
  const sum = rows.reduce((a, r) => a + r.total, 0);

  return (
    <AdminShell active="/hasil-perhitungan" icon="FileList2Line" title="Hasil Perhitungan" description="Hasil perhitungan insentif bulanan per penerima. Pembayaran dilakukan di luar portal." user={user} onLogout={onLogout}>
      <div style={{ display: 'flex', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
        <div style={{ width: 200 }}><Select size="sm" value={month} placeholder="Pilih bulan" onChange={(v) => set({ m: v })} options={perfMonths().map((m) => ({ value: m, label: monthLabel(m, true) }))} /></div>
        <div style={{ width: 180 }}><Select size="sm" value={q.area ?? ''} placeholder="Semua area" onChange={(v) => set({ area: v })} options={[{ value: '', label: 'Semua area' }, ...AREAS.map((a) => ({ value: String(a.id), label: a.name }))]} /></div>
        <div style={{ width: 160 }}><Select size="sm" value={q.role ?? ''} placeholder="Semua role" onChange={(v) => set({ role: v })} options={ROLE_OPTS} /></div>
      </div>
      <TbdCallout>Sumber target paid out dan collection yang dipakai untuk pencapaian dan tier. Prototipe memakai target contoh.</TbdCallout>
      {view === 'data' && (
        <StatGrid min={240}>
          <StatCard icon="Wallet3Line" color="green" label={month === currentMonth() ? 'Total estimasi' : 'Total insentif'} value={formatRp(sum)} hint={monthLabel(month, true)} />
          <StatCard icon="TeamLine" color="blue" label="Penerima" value={formatNumber(rows.length)} />
        </StatGrid>
      )}
      <ListCard view={view} onRetry={() => load(true)} emptyMessage="Belum ada hasil perhitungan untuk filter ini.">
        {(view === 'data' || view === 'loading') && <IncentiveTable rows={rows} loading={view === 'loading'} showStatus />}
      </ListCard>
    </AdminShell>
  );
}
