import { useEffect, useState } from 'react';
import { Drawer, DrawerHeader, Select, StatusBadge } from '@ds/index.js';
import { DataTable } from '../../components/DataTable.jsx';
import { ListPager } from '../../components/ListCard.jsx';
import { TbdCallout } from '../../components/TbdCallout.jsx';
import { aplLoans } from '../../api/mockApi.js';
import { PORTAL_STATUS } from '../../api/scope3.js';
import { nowrap } from '../../lib/cells.jsx';
import { formatDateWIB, formatRp } from '../../lib/format.js';

const BADGE = { DIAJUKAN: 'information', DISETUJUI: 'pending', DITOLAK: 'failed', CAIR: 'completed' };
const STATUS_OPTS = [{ value: '', label: 'Semua status' }, ...Object.entries(PORTAL_STATUS).map(([value, label]) => ({ value, label }))];
const dateCell = (d) => { if (!d) return '-'; const f = formatDateWIB(d); return { priority: 'regular', title: nowrap(f.date), description: f.time }; };

/**
 * Daftar pinjaman untuk satu baris drill-down (PRD v3 §B2; PRD Scope 3 FR-LP-005/006), read-only, dari LMS. ID dan nama nasabah
 * disamarkan; status portal 4; pinjaman yang cair di bulan berikutnya ditandai tidak dihitung untuk insentif.
 */
export function LoanListDrawer({ title, areaIds, period, scope, filters, onClose }) {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('');
  const [data, setData] = useState(null);
  const key = JSON.stringify({ areaIds, period, scope, filters, status });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { setData(null); aplLoans(areaIds, period, scope, { ...filters, status }, page).then(setData); }, [key, page]);
  const columns = [
    { key: 'id', header: 'No. Ref', render: (l) => ({ priority: 'leading', title: nowrap(l.maskedId), description: l.customer }) },
    { key: 'store', header: 'Toko', render: (l) => ({ priority: 'regular', title: l.store, description: `SA/SR: ${l.sales ?? 'Tanpa SA/SR'} · TL: ${l.tl ?? '-'}` }) },
    { key: 'amount', header: 'Nominal', align: 'right', render: (l) => ({ priority: 'regular', title: nowrap(formatRp(l.amount)) }) },
    { key: 'status', header: 'Status', render: (l) => ({ misc: true, children: (
      <span style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
        <StatusBadge status={BADGE[l.portalStatus]}>{PORTAL_STATUS[l.portalStatus]}</StatusBadge>
        {l.paidLater && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Cair di bulan berikutnya, tidak dihitung</span>}
        {l.rejectionReason && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{l.rejectionReason}</span>}
      </span>
    ) }) },
    { key: 'created', header: 'Diajukan', render: (l) => dateCell(l.submittedAt) },
    { key: 'paid', header: 'Cair', render: (l) => dateCell(l.paidOutAt) },
  ];
  return (
    <Drawer open width={960} onClose={onClose} header={<DrawerHeader size="lg" title={`Pinjaman · ${title}`} description={`Pengajuan dibuat di ${period.label} · data LMS, read-only`} icon="FileList2Line" onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <TbdCallout>Format penyamaran nomor referensi dan nama nasabah perlu dikonfirmasi.</TbdCallout>
        <div style={{ width: 200 }}><Select size="sm" value={status} placeholder="Semua status" onChange={(v) => { setStatus(v); setPage(1); }} options={STATUS_OPTS} /></div>
        <div style={{ overflowX: 'auto' }}>
          <DataTable loading={!data} rows={data?.rows ?? []} columns={columns} minWidth={900} />
          {data && data.total === 0 && <span style={{ display: 'block', padding: 'var(--space-16)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Belum ada pinjaman pada bulan dan filter ini.</span>}
          {data && <ListPager page={page} total={data.total} noun="pinjaman" onChange={setPage} />}
        </div>
      </div>
    </Drawer>
  );
}
