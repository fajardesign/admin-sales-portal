import { WidgetCard, KeyIcon, Badge, StatusBadge, ProgressBarLabel, Avatar, LinkButton, Table, Icon } from '@ds/index.js';
import { LEADS, STATUS_LABEL, TEAM } from '../data/leads.js';
import { rupiah, rupiahShort } from '../lib/format.js';

const KPIS = [
  { label: 'Total Leads Bulan Ini', value: '128', delta: '+12%', up: true, icon: 'TeamLine', color: 'blue' },
  { label: 'Pengajuan Disetujui', value: '37', delta: '+5%', up: true, icon: 'CheckLine', color: 'green' },
  { label: 'Nilai Pencairan', value: rupiahShort(8400000000), delta: '-3%', up: false, icon: 'HandCoinLine', color: 'purple' },
  { label: 'Konversi', value: '28,9%', delta: '+1,4%', up: true, icon: 'LineChartLine', color: 'orange' },
];

function Kpi({ label, value, delta, up, icon, color }) {
  return (
    <WidgetCard style={{ gap: 'var(--space-12)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
        <KeyIcon icon={icon} variant="lighter" color={color} />
        <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-sub-600)' }}>{label}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-8)' }}>
        <span style={{ font: 'var(--title-h5)', color: 'var(--text-strong-950)' }}>{value}</span>
        <Badge color={up ? 'green' : 'red'} size="sm">{delta}</Badge>
      </div>
    </WidgetCard>
  );
}

export function Dashboard({ onNavigate }) {
  const recent = LEADS.slice(0, 5);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 'var(--space-24)' }}>
        {KPIS.map((k) => <Kpi key={k.label} {...k} />)}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 352px', gap: 'var(--space-24)', alignItems: 'start' }}>
        <WidgetCard icon={<Icon name="FileList2Line" />} title="Leads Terbaru"
          action={<LinkButton tone="primary" rightIcon={<Icon name="ArrowRightSLine" size={16} />} onClick={() => onNavigate('leads')}>Lihat Semua</LinkButton>}>
          <Table
            columns={[
              { key: 'name', header: 'Perusahaan', render: (r) => (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{r.name}</span>
                  <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{r.product}</span>
                </div>
              ) },
              { key: 'amount', header: 'Plafon', align: 'right', render: (r) => rupiah(r.amount) },
              { key: 'status', header: 'Status', render: (r) => <StatusBadge status={r.status} dot>{STATUS_LABEL[r.status]}</StatusBadge> },
            ]}
            rows={recent} />
        </WidgetCard>

        <WidgetCard icon={<Icon name="BarChartLine" />} title="Pencapaian Target Tim">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            {TEAM.map((m) => (
              <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)' }}>
                <Avatar name={m.name} size={32} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <ProgressBarLabel title={m.name} value={m.achieved} />
                </div>
              </div>
            ))}
          </div>
        </WidgetCard>
      </div>
    </div>
  );
}
