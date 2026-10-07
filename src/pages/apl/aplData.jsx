import { ProgressBar } from '@ds/index.js';
import { currentMonth, perfMonths } from '../../api/mockApi.js';
import { formatNumber, formatPct, formatRp, monthLabel } from '../../lib/format.js';

/** Label metrik pipeline pinjaman (PRD APL "Performance means"). */
export const METRICS = [
  { key: 'submitted', label: 'Aplikasi Diajukan', hint: '# submitted app', format: formatNumber, icon: 'FileList2Line', color: 'blue' },
  { key: 'accepted', label: 'Aplikasi Diterima', hint: '# accepted app', format: formatNumber, icon: 'CheckLine', color: 'teal' },
  { key: 'paidOutApps', label: 'Aplikasi Cair', hint: '# paid out apps', format: formatNumber, icon: 'Wallet3Line', color: 'purple' },
  { key: 'paidOutUnits', label: 'Unit Cair', hint: '# paid out unit', format: formatNumber, icon: 'ShoppingBagLine', color: 'orange' },
  { key: 'paidOutAmount', label: 'Nominal Cair', hint: 'sum of paid out amount', format: formatRp, icon: 'MoneyDollarCircleLine', color: 'green' },
];

/** Cakupan APL: area yang dipegang; ?area= mempersempit ke satu area. */
export function useAplScope(user, query) {
  const area = query.get('area');
  const areaIds = area && user.areaIds.includes(Number(area)) ? [Number(area)] : user.areaIds;
  return { areaIds, area: area ?? '' };
}

/** Periode dari URL: mode "bulan" (m) atau "periode" (from–to). */
export function usePeriod(query) {
  const months = perfMonths();
  const mode = query.get('mode') === 'periode' ? 'periode' : 'bulan';
  const m = months.includes(query.get('m')) ? query.get('m') : currentMonth();
  const from = months.includes(query.get('from')) ? query.get('from') : months[0];
  const toRaw = months.includes(query.get('to')) ? query.get('to') : currentMonth();
  const to = toRaw < from ? from : toRaw;
  const selected = mode === 'bulan' ? [m] : months.filter((x) => x >= from && x <= to);
  const label = mode === 'bulan' ? monthLabel(m, true) : `${monthLabel(from)} – ${monthLabel(to)}`;
  return { mode, m, from, to, selected, label, months };
}

/** Sel pencapaian target: ProgressBar + persen. */
export function achievementCell(actual, target) {
  if (!target) return '-';
  const pct = (actual / target) * 100;
  const color = pct >= 100 ? 'green' : pct >= 70 ? 'orange' : 'red';
  return { misc: true, children: (
    <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)', minWidth: 140 }}>
      <ProgressBar value={Math.min(100, pct)} color={color} style={{ flex: 1 }} />
      <span style={{ font: 'var(--label-xs)', color: 'var(--text-strong-950)', whiteSpace: 'nowrap' }}>{formatPct(pct)}</span>
    </span>
  ) };
}

export const MONTH_CURRENT_NOTE = 'Bulan berjalan: data dan target dihitung sampai hari ini.';
