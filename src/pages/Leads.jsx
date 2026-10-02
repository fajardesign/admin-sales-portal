import { useMemo, useState } from 'react';
import {
  HorizontalFilter, ButtonGroup, TextInput, Table, StatusBadge, Pagination, Avatar,
  Drawer, DrawerHeader, DrawerFooter, Button, ContentDivider,
} from '@ds/index.js';
import { LEADS, STATUS_LABEL } from '../data/leads.js';
import { rupiah } from '../lib/format.js';

const FILTERS = [
  { label: 'Semua', value: 'all' },
  { label: 'Dalam Proses', value: 'information' },
  { label: 'Menunggu Verifikasi', value: 'pending' },
  { label: 'Disetujui', value: 'completed' },
  { label: 'Ditolak', value: 'failed' },
];

function DetailRow({ label, children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--space-16)', padding: 'var(--space-8) 0' }}>
      <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{label}</span>
      <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)', textAlign: 'right' }}>{children}</span>
    </div>
  );
}

export function Leads() {
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const rows = useMemo(() => LEADS.filter((l) =>
    (filter === 'all' || l.status === filter)
    && (l.name + l.pic + l.id).toLowerCase().includes(query.toLowerCase())), [filter, query]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
      <HorizontalFilter
        left={<ButtonGroup items={FILTERS} value={filter} onChange={setFilter} />}
        search={<TextInput size="xs" leftIcon="Search2Line" placeholder="Cari perusahaan, PIC, atau ID…"
          value={query} onChange={(e) => setQuery(e.target.value)} />} />

      <Table
        onRowClick={setSelected}
        columns={[
          { key: 'id', header: 'ID', width: 96 },
          { key: 'name', header: 'Perusahaan', sortable: true },
          { key: 'pic', header: 'PIC' },
          { key: 'product', header: 'Produk' },
          { key: 'amount', header: 'Plafon', align: 'right', sortable: true, render: (r) => rupiah(r.amount) },
          { key: 'sales', header: 'Sales', render: (r) => (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-8)' }}>
              <Avatar name={r.sales} size={24} />{r.sales}
            </span>
          ) },
          { key: 'status', header: 'Status', render: (r) => <StatusBadge status={r.status} dot>{STATUS_LABEL[r.status]}</StatusBadge> },
          { key: 'date', header: 'Tanggal' },
        ]}
        rows={rows} />

      <Pagination page={page} total={4} onChange={setPage} showSummary />

      <Drawer open={!!selected} onClose={() => setSelected(null)}
        header={<DrawerHeader title="Detail Lead" onClose={() => setSelected(null)} />}
        footer={<DrawerFooter>
          <Button variant="stroke" tone="neutral" fullWidth onClick={() => setSelected(null)}>Tutup</Button>
          <Button fullWidth>Buat Pengajuan</Button>
        </DrawerFooter>}>
        {selected && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <DetailRow label="ID Lead">{selected.id}</DetailRow>
            <DetailRow label="Perusahaan">{selected.name}</DetailRow>
            <DetailRow label="PIC">{selected.pic}</DetailRow>
            <ContentDivider />
            <DetailRow label="Produk">{selected.product}</DetailRow>
            <DetailRow label="Plafon">{rupiah(selected.amount)}</DetailRow>
            <DetailRow label="Tahap">{selected.stage}</DetailRow>
            <DetailRow label="Status"><StatusBadge status={selected.status} dot>{STATUS_LABEL[selected.status]}</StatusBadge></DetailRow>
            <ContentDivider />
            <DetailRow label="Sales">{selected.sales}</DetailRow>
            <DetailRow label="Tanggal Masuk">{selected.date}</DetailRow>
          </div>
        )}
      </Drawer>
    </div>
  );
}
