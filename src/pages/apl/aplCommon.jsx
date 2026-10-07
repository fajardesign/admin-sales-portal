import { Badge, SegmentedControl, Select, TextInput } from '@ds/index.js';
import { perfMonths, todayDate } from '../../api/mockApi.js';
import { areaName } from '../../lib/constants.js';
import { monthLabel } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';

/** Filter periode (Bulan / Rentang) + Area untuk halaman APL. Nilai disimpan di URL agar ikut terbawa antar halaman. */
export function PeriodFilter({ path, query, user, period, monthOnly = false, children }) {
  const q = Object.fromEntries(query.entries());
  const set = (patch) => navigate(withQuery(path, { ...q, ...patch }));
  const months = perfMonths();
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
      {!monthOnly && <SegmentedControl value={period.mode} onChange={(v) => set({ mode: v === 'bulan' ? '' : v })} items={[{ value: 'bulan', label: 'Bulan' }, { value: 'rentang', label: 'Rentang' }]} />}
      {monthOnly || period.mode === 'bulan' ? (
        <div style={{ width: 200 }}><Select size="sm" value={period.month ?? months[months.length - 1]} placeholder="Pilih bulan" onChange={(v) => set({ m: v })} options={months.map((m) => ({ value: m, label: monthLabel(m, true) }))} /></div>
      ) : (
        <>
          <div style={{ width: 180 }}><TextInput size="sm" type="date" aria-label="Dari tanggal" value={period.from} min={`${months[0]}-01`} max={todayDate()} onChange={(e) => set({ from: e.target.value })} /></div>
          <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)', paddingBottom: 'var(--space-8)' }}>s/d</span>
          <div style={{ width: 180 }}><TextInput size="sm" type="date" aria-label="Sampai tanggal" value={period.to} min={period.from} max={todayDate()} onChange={(e) => set({ to: e.target.value })} /></div>
        </>
      )}
      <AreaSelect path={path} query={query} user={user} />
      {children}
    </div>
  );
}

/** Pilih area (hanya bila APL memegang lebih dari satu area). */
export function AreaSelect({ path, query, user }) {
  if (user.areaIds.length < 2) return null;
  const q = Object.fromEntries(query.entries());
  return (
    <div style={{ width: 200 }}>
      <Select size="sm" value={q.area ?? ''} placeholder="Semua area saya" onChange={(v) => navigate(withQuery(path, { ...q, area: v }))}
        options={[{ value: '', label: 'Semua area saya' }, ...user.areaIds.map((id) => ({ value: String(id), label: areaName(id) }))]} />
    </div>
  );
}

/** Badge perubahan vs periode sebelumnya ("+5%", "-3%"). */
export const DeltaBadge = ({ d }) => (d ? <Badge color={d.color} size="md">{`${d.text} vs periode sebelumnya`}</Badge> : <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-soft-400)' }}>Belum ada data periode sebelumnya</span>);
