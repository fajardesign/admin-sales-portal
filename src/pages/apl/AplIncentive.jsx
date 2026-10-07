import { useEffect, useState } from 'react';
import { Badge, TabMenuHorizontal } from '@ds/index.js';
import { AdminShell } from '../../components/AdminShell.jsx';
import { IncentiveTable } from '../../components/IncentiveTable.jsx';
import { ListCard } from '../../components/ListCard.jsx';
import { StatCard, StatGrid } from '../../components/StatCard.jsx';
import { TbdCallout } from '../../components/TbdCallout.jsx';
import { incentiveResults } from '../../api/mockApi.js';
import { useScenario } from '../../dev/scenario.js';
import { formatNumber, formatRp } from '../../lib/format.js';
import { navigate, withQuery } from '../../lib/router.js';
import { PeriodFilter } from './aplCommon.jsx';
import { useAplScope, usePeriod } from './aplPeriod.js';

const TABS = [{ value: 'TL', label: 'TL' }, { value: 'SALES', label: 'SA/SR' }, { value: 'PARTNER', label: 'Partner' }];

/** B6 · Insentif (PRD v3): estimasi insentif TL, SA/SR, dan partner per bulan dari skema Super Admin; read-only. */
export function AplIncentive(props) {
  const { tableState } = useScenario();
  return <AplIncentiveView key={tableState} {...props} />;
}

function AplIncentiveView({ user, onLogout, query }) {
  const q = Object.fromEntries(query.entries());
  const period = usePeriod(query);
  const month = period.month ?? period.from.slice(0, 7);
  const areaIds = useAplScope(user, query);
  const tab = TABS.some((t) => t.value === q.tab) ? q.tab : 'TL';
  const [rows, setRows] = useState([]);
  const [view, setView] = useState('loading');
  const set = (patch) => navigate(withQuery('/apl/insentif', { ...q, ...patch }));
  const key = `${month}|${areaIds.join()}|${tab}`;
  const load = (retry) => { setView('loading'); incentiveResults(areaIds, month, { kind: tab }, { retry }).then((r) => { setRows(r); setView(r.length ? 'data' : 'empty'); }, () => setView('error')); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load(false); }, [key]);
  const total = rows.reduce((a, r) => a + r.total, 0);

  return (
    <AdminShell active="/apl/insentif" icon="HandCoinLine" title="Insentif" description="Estimasi insentif TL, SA/SR, dan partner di area Anda. Skema berasal dari Super Admin." user={user} onLogout={onLogout}>
      <PeriodFilter path="/apl/insentif" query={query} user={user} period={{ ...period, month }} monthOnly />
      <TbdCallout>Sumber target paid out dan collection untuk pencapaian dan tier. Prototipe memakai target contoh.</TbdCallout>
      <TabMenuHorizontal value={tab} onChange={(v) => set({ tab: v })} items={TABS} />
      {view === 'data' && (
        <StatGrid min={240}>
          <StatCard icon="Wallet3Line" color="green" label="Total estimasi" value={formatRp(total)} hint={<Badge color="orange" size="sm">Estimasi</Badge>} />
          <StatCard icon={tab === 'PARTNER' ? 'Building2Line' : 'TeamLine'} color="blue" label={TABS.find((t) => t.value === tab).label} value={formatNumber(rows.length)} />
        </StatGrid>
      )}
      <ListCard view={view} onRetry={() => load(true)} emptyMessage="Belum ada estimasi insentif pada bulan ini.">
        {(view === 'data' || view === 'loading') && <IncentiveTable rows={rows} loading={view === 'loading'} />}
      </ListCard>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
        {{ TL: 'TL: Daily Fee × hari hadir + tarif Leader Incentive (tier pencapaian target tim) × nominal cair tim.', SALES: 'SA/SR: Daily Fee × hari hadir + tarif Paid Out Incentive (tier pencapaian target) × nominal cair.', PARTNER: 'Partner (Offline Retailer): tarif Volume Incentive (tier pencapaian target) + tarif Collection Incentive (tier MFP) × nominal cair.' }[tab]}
      </span>
    </AdminShell>
  );
}
