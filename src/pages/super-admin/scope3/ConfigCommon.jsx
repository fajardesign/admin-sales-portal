import { Button, Icon, LinkButton, Select, StatusBadge, TextInput } from '@ds/index.js';
import { DataTable } from '../../../components/DataTable.jsx';
import { SectionCard } from '../../../components/KeyValueGrid.jsx';
import { MONTH_STATUS, configLog, editableMonths, listVersions, monthStatus, rateLabel, tierRange } from '../../../api/scope3.js';
import { nowrap } from '../../../lib/cells.jsx';
import { CURRENT_MONTH } from '../../../api/db.js';
import { formatDateTime, monthLabel } from '../../../lib/format.js';

/** Komponen bersama tab Skema Insentif (PRD Scope 3 FR-CF-001/003/004). */
const STATE = { ACTIVE: ['completed', 'Aktif'], SCHEDULED: ['information', 'Terjadwal'], ARCHIVED: ['disabled', 'Arsip'] };
const muted = { font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' };

/** Daftar versi: nomor, berlaku mulai, status, diubah oleh. */
export function VersionList({ kind }) {
  const rows = listVersions(kind);
  return (
    <SectionCard title="Versi">
      <DataTable rows={rows} rowKey={(v) => v.version} minWidth={420} columns={[
        { key: 'v', header: 'Versi', render: (v) => ({ priority: 'leading', title: `Versi ${v.version}` }) },
        { key: 'from', header: 'Berlaku mulai', render: (v) => nowrap(monthLabel(v.effectiveFrom, true)) },
        { key: 'state', header: 'Status', render: (v) => ({ misc: true, children: <StatusBadge status={STATE[v.state][0]}>{STATE[v.state][1]}</StatusBadge> }) },
        { key: 'by', header: 'Diubah oleh', render: (v) => ({ priority: 'regular', title: v.by, description: formatDateTime(v.at) }) },
      ]} />
      <span style={muted}>Versi berlaku dari bulan efektifnya sampai versi berikutnya. Bulan Final hanya bisa dilihat.</span>
    </SectionCard>
  );
}

/** Log perubahan (aktor, waktu, lama → baru). */
export function ChangeLog({ kind }) {
  const rows = configLog(kind);
  return (
    <SectionCard title="Riwayat perubahan">
      {rows.length === 0 ? <span style={muted}>Belum ada perubahan sejak versi awal.</span> : rows.map((e, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', padding: 'var(--space-10) var(--space-12)', borderRadius: 'var(--rounded-10)', boxShadow: 'var(--shadow-stroke)' }}>
          <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>
            {e.version ? `Versi ${e.version} · ` : ''}berlaku {monthLabel(e.effectiveFrom, true)}
          </span>
          {e.lines.map((l) => <span key={l} style={{ font: 'var(--paragraph-sm)', color: 'var(--text-strong-950)' }}>{l}</span>)}
          <span style={muted}>{e.by} · {formatDateTime(e.at)}</span>
        </div>
      ))}
    </SectionCard>
  );
}

/** Pilihan bulan berlaku: bulan yang belum Final untuk skema kind (Menunggu rekonsiliasi, berjalan, mendatang). */
export function EffectiveMonth({ kind = 'sales', value, onChange }) {
  return (
    <Select label="Berlaku mulai" required value={value} onChange={onChange}
      options={editableMonths(kind).map((m) => ({ value: m, label: `${monthLabel(m, true)} · ${m > CURRENT_MONTH ? 'Mendatang' : MONTH_STATUS[monthStatus(m, kind === 'partner' ? 'PARTNER' : 'SALES')]}` }))}
      hint="Perubahan berlaku pada pengambilan data berikutnya untuk bulan ini dan sesudahnya." />
  );
}

/** Input angka bulat (rupiah, hari, persen); value number | '' ; onChange(number | ''). */
export function NumberField({ label, value, onChange, error, prefix, suffix, decimals = false, required = true, hint, width }) {
  return (
    <div style={{ width }}>
      <TextInput label={label} required={required} value={value === '' || value == null ? '' : String(value).replace('.', decimals ? ',' : '.')} prefix={prefix} suffix={suffix} hint={error ? undefined : hint} error={error}
        onChange={(e) => {
          const raw = e.target.value.replace(/\s/g, '');
          if (raw === '') { onChange(''); return; }
          const n = decimals ? Number(raw.replace(',', '.')) : Number(raw.replace(/\D/g, ''));
          if (!Number.isNaN(n)) onChange(n);
        }} />
    </div>
  );
}

/**
 * Editor tabel tier bersambung: batas bawah tiap baris = batas atas baris sebelumnya (otomatis); tier pertama "≤", terakhir tanpa
 * batas atas. Koefisien dalam persen.
 */
export function TierEditor({ tiers, onChange, error, title }) {
  const set = (i, patch) => {
    const t = tiers.map((x) => ({ ...x }));
    Object.assign(t[i], patch);
    if ('to' in patch && t[i + 1]) t[i + 1].from = patch.to;
    onChange(t);
  };
  const add = () => {
    const t = tiers.map((x) => ({ ...x }));
    const last = t[t.length - 1];
    const lo = last.from ?? 0;
    last.to = lo + 10;
    t.push({ from: lo + 10, to: null, rate: last.rate });
    onChange(t);
  };
  const remove = (i) => {
    const t = tiers.filter((_, j) => j !== i).map((x) => ({ ...x }));
    if (t[0]) t[0].from = null;
    for (let j = 1; j < t.length; j += 1) t[j].from = t[j - 1].to;
    if (t.length) t[t.length - 1].to = null;
    onChange(t);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{title}</span>
      {tiers.map((t, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-8)', flexWrap: 'wrap' }}>
          <span style={{ width: 120, font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)', paddingBottom: 'var(--space-8)' }}>{t.from == null ? 'Mulai 0%' : `> ${t.from}%`}</span>
          {t.to == null
            ? <span style={{ width: 140, font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)', paddingBottom: 'var(--space-8)' }}>tanpa batas atas</span>
            : <NumberField label={i === 0 ? 'Sampai (≤ %)' : undefined} value={t.to} decimals width={140} onChange={(v) => set(i, { to: v === '' ? '' : v })} suffix="%" required={false} />}
          <NumberField label={i === 0 ? 'Koefisien' : undefined} value={t.rate} decimals width={140} onChange={(v) => set(i, { rate: v === '' ? '' : v })} suffix="%" required={false} />
          {tiers.length > 2 && <Button size="2xs" variant="ghost" tone="error" aria-label={`Hapus tier ${tierRange(t)}`} onClick={() => remove(i)}>Hapus</Button>}
        </div>
      ))}
      <LinkButton size="sm" leftIcon={<Icon name="AddLine" size={16} />} onClick={add}>Tambah tier</LinkButton>
      {error && <span role="alert" style={{ font: 'var(--paragraph-xs)', color: 'var(--state-error-base)' }}>{error}</span>}
    </div>
  );
}

/** Tabel tier hanya baca. */
export function TierTableView({ tiers }) {
  return (
    <DataTable rows={[...tiers].reverse()} rowKey={(t) => `${t.from}-${t.to}`} minWidth={320} columns={[
      { key: 'r', header: 'Capaian', render: (t) => tierRange(t) },
      { key: 'c', header: 'Koefisien', align: 'right', render: (t) => rateLabel(t.rate) },
    ]} />
  );
}
