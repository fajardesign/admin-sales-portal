import { useEffect, useState } from 'react';
import { Drawer, DrawerHeader, StatusBadge } from '@ds/index.js';
import { DataTable } from '../../components/DataTable.jsx';
import { ListPager } from '../../components/ListCard.jsx';
import { TbdCallout } from '../../components/TbdCallout.jsx';
import { aplLoans, CRM_STATUS } from '../../api/mockApi.js';
import { nowrap } from '../../lib/cells.jsx';
import { formatDateWIB, formatRp } from '../../lib/format.js';

const BADGE = { SUBMITTED: 'information', IN_PROCESS: 'pending', APPROVED: 'information', REJECTED: 'failed', PAID_OUT: 'completed' };

/** Daftar pinjaman untuk satu baris drill-down (PRD v3 §B2), read-only; ID & nama nasabah disamarkan. */
export function LoanListDrawer({ title, areaIds, period, scope, filters, onClose }) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const key = JSON.stringify({ areaIds, period, scope, filters });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { aplLoans(areaIds, period, scope, filters, page).then(setData); }, [key, page]);
  const columns = [
    { key: 'id', header: 'ID Aplikasi', render: (l) => ({ priority: 'leading', title: nowrap(l.maskedId) }) },
    { key: 'customer', header: 'Nasabah', render: (l) => nowrap(l.customer) },
    { key: 'store', header: 'Toko', render: (l) => ({ priority: 'regular', title: l.store, description: l.sales ?? 'Belum ditugaskan' }) },
    { key: 'amount', header: 'Nominal', align: 'right', render: (l) => ({ priority: 'regular', title: nowrap(formatRp(l.amount)) }) },
    { key: 'status', header: 'Status CRM', render: (l) => ({ misc: true, children: <StatusBadge status={BADGE[l.status]}>{CRM_STATUS[l.status]}</StatusBadge> }) },
    { key: 'reason', header: 'Alasan Ditolak', render: (l) => l.rejectionReason ?? '-' },
    { key: 'updated', header: 'Terakhir Diperbarui', render: (l) => { const f = formatDateWIB(l.updatedAt); return { priority: 'regular', title: nowrap(f.date), description: f.time }; } },
  ];
  return (
    <Drawer open width={960} onClose={onClose} header={<DrawerHeader size="lg" title={`Pinjaman · ${title}`} description={`${period.label} · data CRM, read-only`} icon="FileList2Line" onClose={onClose} />}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', padding: 'var(--space-16) var(--space-24) var(--space-24)' }}>
        <TbdCallout>Format penyamaran ID aplikasi dan nama nasabah perlu dikonfirmasi.</TbdCallout>
        <div style={{ overflowX: 'auto' }}>
          <DataTable loading={!data} rows={data?.rows ?? []} columns={columns} minWidth={900} />
          {data && data.total === 0 && <span style={{ display: 'block', padding: 'var(--space-16)', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>Belum ada pinjaman pada periode ini.</span>}
          {data && <ListPager page={page} total={data.total} noun="pinjaman" onChange={setPage} />}
        </div>
      </div>
    </Drawer>
  );
}
