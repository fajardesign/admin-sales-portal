import { useEffect, useState } from 'react';
import { Badge } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { DataTable } from '../../components/DataTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { nowrap } from '../../lib/cells.jsx';
import { listSchemes } from '../../api/mockApi.js';
import { RECIPIENT_LABEL } from '../../api/db.js';
import { useScenario } from '../../dev/scenario.js';
import { preset } from '../../dev/presets.js';
import { monthLabel } from '../../lib/format.js';
import { componentSummary } from './schemeText.js';
import { SchemeDrawer } from './SchemeDrawer.jsx';

/** E1 · Skema Insentif (Super Admin): komponen per penerima dengan versi aktif; klik untuk detail, riwayat versi, dan versi baru. */
export function IncentiveSchemes(props) {
  const { tableState } = useScenario();
  return <IncentiveSchemesView key={tableState} {...props} />;
}

function IncentiveSchemesView({ user, onLogout }) {
  const [rows, setRows] = useState([]);
  const [view, setView] = useState('loading');
  const [openId, setOpenId] = useState(preset?.scheme?.open ?? null);
  const load = (retry) => { listSchemes({ retry }).then((r) => { setRows(r); setView(r.length ? 'data' : 'empty'); }, () => setView('error')); };
  useEffect(() => { load(false); }, []);

  const columns = [
    { key: 'name', header: 'Penerima', render: (s) => ({ priority: 'leading', title: s.name, description: RECIPIENT_LABEL[s.recipient] }) },
    { key: 'components', header: 'Komponen & aturan', render: (s) => ({ priority: 'passive', title: <span style={{ display: 'flex', flexDirection: 'column' }}>{s.active.components.map((c) => <span key={c.key}>{componentSummary(c)}</span>)}</span> }) },
    { key: 'freq', header: 'Frekuensi', render: () => 'Bulanan' },
    { key: 'payday', header: 'Tanggal Bayar', render: (s) => nowrap(`Tgl ${s.active.payday}`) },
    { key: 'effective', header: 'Versi Aktif', render: (s) => ({ priority: 'regular', title: nowrap(`Versi ${s.active.version}`), description: `Berlaku ${monthLabel(s.active.effectiveFrom, true)}` }) },
    { key: 'next', header: 'Perubahan', render: (s) => {
      const sch = s.versions.find((v) => v.status === 'SCHEDULED');
      if (!sch && !s.draft) return '-';
      return { misc: true, children: <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
        {sch && <Badge color="blue" size="md">{`Versi ${sch.version} terjadwal ${monthLabel(sch.effectiveFrom)}`}</Badge>}
        {s.draft && <Badge color="orange" size="md">Draf</Badge>}
      </span> };
    } },
  ];
  return (
    <AdminShell active="/skema-insentif" icon="CoinsLine" title="Skema Insentif" description="Kelola komponen, tier, dan tanggal bayar insentif. Skema ini dipakai untuk semua estimasi insentif." user={user} onLogout={onLogout}>
      <ListCard view={view} onRetry={() => { setView('loading'); load(true); }} emptyMessage="Belum ada skema insentif.">
        {(view === 'data' || view === 'loading') && <DataTable loading={view === 'loading'} rows={rows} columns={columns} minWidth={1100} onRowClick={(s) => setOpenId(s.id)} />}
      </ListCard>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Perubahan dibuat sebagai versi baru dan berlaku mulai bulan depan atau setelahnya; versi sebelumnya tetap berlaku sampai saat itu.</span>
      {openId && <SchemeDrawer id={openId} user={user} startEditing={preset?.scheme?.editing} onClose={() => setOpenId(null)} onChanged={() => load(true)} />}
    </AdminShell>
  );
}
