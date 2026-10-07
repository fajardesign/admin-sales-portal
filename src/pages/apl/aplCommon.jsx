import { SegmentedControl, Select } from '@ds/index.js';
import { areaName } from '../../lib/constants.js';
import { monthLabel } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';

/** Filter periode "Bulan" / "Periode" + Area (bila APL memegang >1 area). Disimpan di URL: mode, m, from, to, area. */
export function PeriodFilter({ path, query, user, period, monthOnly = false }) {
  const q = Object.fromEntries(query.entries());
  const set = (patch) => navigate(withQuery(path, { ...q, ...patch }));
  const monthOpts = period.months.map((x) => ({ value: x, label: monthLabel(x, true) }));
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
      {!monthOnly && <SegmentedControl value={period.mode} onChange={(v) => set({ mode: v })} items={[{ value: 'bulan', label: 'Bulan' }, { value: 'periode', label: 'Periode' }]} />}
      {(monthOnly || period.mode === 'bulan')
        ? <div style={{ width: 200 }}><Select size="sm" value={period.m} options={monthOpts} onChange={(v) => set({ m: v })} placeholder="Pilih bulan" /></div>
        : (
          <>
            <div style={{ width: 180 }}><Select size="sm" value={period.from} options={monthOpts} onChange={(v) => set({ from: v })} placeholder="Dari" /></div>
            <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)', paddingBottom: 'var(--space-8)' }}>s/d</span>
            <div style={{ width: 180 }}><Select size="sm" value={period.to} options={monthOpts.filter((o) => o.value >= period.from)} onChange={(v) => set({ to: v })} placeholder="Sampai" /></div>
          </>
        )}
      <AreaSelect path={path} query={query} user={user} />
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

