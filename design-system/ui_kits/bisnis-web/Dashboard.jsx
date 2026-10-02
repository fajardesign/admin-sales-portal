function Sparkline({ points, w = 300, h = 80, color = 'var(--blue-500)' }) {
  const max = Math.max(...points), min = Math.min(...points);
  const xy = points.map((p, i) => [(i / (points.length - 1)) * w, h - 6 - ((p - min) / (max - min || 1)) * (h - 12)]);
  const d = xy.map(([x, y], i) => (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1)).join(' ');
  return <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none"><path d={d} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" vectorEffect="non-scaling-stroke" /></svg>;
}

function TxnRow({ t, onClick }) {
  const { KeyIcon, Icon } = window.AmarBankInternalWebDS_806d63;
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 8, margin: '0 -8px', borderRadius: 10, border: 'none', background: hover ? 'var(--bg-weak-50)' : 'transparent', cursor: 'pointer', textAlign: 'left' }}>
      <KeyIcon icon={t.icon} size="md" />
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-strong-950)' }}>{t.name}</span>
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.desc}</span>
      </span>
      <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
        <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{t.dir === 'out' ? '-' : ''}{usd(t.amount)}</span>
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{t.date}</span>
      </span>
      <span style={{ color: 'var(--icon-soft-400)', display: 'flex' }}><Icon name="ArrowRightSLine" size={18} /></span>
    </button>
  );
}

function Dashboard({ go, openTxn }) {
  const { WidgetCard, Badge, Button, Icon, SegmentedControl, CompactSelect, ChartLegend, KeyIcon, Select, Avatar, LinkButton, ProgressBar } = window.AmarBankInternalWebDS_806d63;
  const [seg, setSeg] = React.useState('Incoming');
  const [contact, setContact] = React.useState('James');
  const [amt, setAmt] = React.useState('');
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const bars = [[9, 3, 1.4], [11, 3.2, 1.2], [8, 2.6, 1.6], [12, 3, 1], [10, 2.8, 1.4], [9.5, 3.4, 1.2], [11, 2.6, 1.6], [10.2, 3, 1.2], [12.5, 3.1, 1.3], [9.8, 2.9, 1.5], [11.4, 3.3, 1.1], [10.6, 2.7, 1.4]];
  const list = TXNS.filter((t) => t.type === seg).slice(0, 4);
  const stat = (icon, color, label, value, delta, up) => (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12 }}>
      <KeyIcon icon={icon} color={color} size="lg" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>{label}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, font: 'var(--label-lg)', color: 'var(--text-strong-950)' }}>{value}{delta && <Badge color={up ? 'green' : 'red'}>{delta}</Badge>}</span>
      </div>
    </div>);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr) 352px', gap: 24, alignItems: 'start' }}>
      <WidgetCard style={{ gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ font: 'var(--paragraph-md)', color: 'var(--text-sub-600)' }}>Total Balance</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, font: 'var(--title-h5)', color: 'var(--text-strong-950)' }}>$14,480.24 <Badge color="green">+5%</Badge></span>
          </div>
          <CompactSelect size="sm" options={[{ label: 'USD' }, { label: 'IDR' }]} />
        </div>
        <Sparkline points={[2, 6, 6, 3.5, 3.5, 2, 4, 4, 6, 6, 3, 4.5, 6]} />
      </WidgetCard>
      <WidgetCard style={{ gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <KeyIcon icon="ArrowLeftDownLine" />
          <div style={{ width: 160 }}><Sparkline points={[1, 6, 3, 2, 5, 2, 6, 4, 6]} h={56} /></div>
        </div>
        <span style={{ font: 'var(--paragraph-md)', color: 'var(--text-sub-600)' }}>Total Expenses</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, font: 'var(--title-h4)', letterSpacing: 'var(--title-h4-ls)', color: 'var(--text-strong-950)' }}>$6,240.28 <Badge color="red">-2%</Badge></span>
      </WidgetCard>
      <WidgetCard icon={<Icon name="ArrowLeftRightLine" size={24} />} title="Quick Transfer" action={<Button size="xs" variant="stroke" tone="neutral" leftIcon={<Icon name="Settings2Line" size={18} />} onClick={() => go('transfer')}>Advanced</Button>} style={{ gridRow: 'span 2' }}>
        <span style={{ font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>My Contacts (12)</span>
        <div style={{ display: 'flex', gap: 8, overflow: 'hidden' }}>
          {CONTACTS.slice(0, 3).map((c) => (
            <button key={c.name} type="button" onClick={() => setContact(c.name)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '4px 10px 4px 4px', borderRadius: 999, border: 'none', cursor: 'pointer', background: contact === c.name ? 'var(--primary-alpha-10)' : 'var(--bg-white-0)', boxShadow: contact === c.name ? 'inset 0 0 0 1px var(--primary-base)' : 'var(--shadow-stroke-xs)', font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>
              <Avatar size={24} src={c.src} />{c.name}
            </button>))}
        </div>
        <Select options={[{ label: 'My Physical Card', value: 'p', icon: 'BankCardLine' }, { label: 'Giro Operasional', value: 'g', icon: 'BankLine' }]} defaultValue="p" />
        <div style={{ padding: 16, borderRadius: 12, background: 'var(--bg-weak-50)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <span style={{ font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)' }}>Enter Amount</span>
          <input value={amt} onChange={(e) => setAmt(e.target.value.replace(/[^\d.]/g, ''))} placeholder="$0.00" style={{ width: '100%', textAlign: 'center', border: 'none', outline: 'none', background: 'transparent', font: 'var(--title-h4)', color: 'var(--text-strong-950)' }} />
          <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>Available: $16,058.94</span>
        </div>
        <Button fullWidth disabled={!amt} onClick={() => go('transfer', { contact, amt })}>Kirim ke {contact}</Button>
      </WidgetCard>
      <WidgetCard icon={<Icon name="BarChartLine" size={24} />} title="Budget Overview" style={{ gridColumn: 'span 2' }}
        action={<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}><ChartLegend color="blue">Income</ChartLegend><ChartLegend color="sky">Expenses</ChartLegend><ChartLegend color="purple">Scheduled</ChartLegend><CompactSelect size="xs" options={[{ label: 'Last Year' }, { label: 'This Year' }]} /></div>}>
        <div style={{ display: 'flex', gap: 16, paddingBottom: 16, boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)' }}>
          {stat('ArrowLeftDownLine', 'gray', 'Income', '$96,000.00', '+5%', true)}
          {stat('ArrowRightUpLine', 'pink', 'Expenses', '$24,000.00', '-3%', false)}
          {stat('Calendar2Line', 'yellow', 'Scheduled', '$14,000.00')}
        </div>
        <div style={{ display: 'flex', gap: 12, height: 200, alignItems: 'flex-end' }}>
          {bars.map(([a, b, c], i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <div style={{ width: '100%', maxWidth: 28, height: 170, borderRadius: 4, background: 'var(--bg-weak-50)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden', gap: 2 }}>
                <div style={{ height: a * 9, background: 'var(--blue-500)' }} /><div style={{ height: b * 9, background: 'var(--gold-700)' }} /><div style={{ height: c * 9, background: 'var(--purple-500)' }} />
              </div>
              <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{months[i]}</span>
            </div>))}
        </div>
      </WidgetCard>
      <WidgetCard icon={<Icon name="MoneyDollarCircleLine" size={24} />} title="Recent Transactions" action={<Button size="xs" variant="stroke" tone="neutral" onClick={() => go('history')}>See All</Button>} style={{ gridColumn: 3 }}>
        <SegmentedControl value={seg} onChange={setSeg} items={[{ label: 'Incoming' }, { label: 'Outgoing' }, { label: 'Pending' }]} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>{list.map((t) => <TxnRow key={t.id} t={t} onClick={() => openTxn(t)} />)}</div>
      </WidgetCard>
      <WidgetCard icon={<Icon name="DashboardLine" size={24} />} title="Credit Score" action={<Button size="xs" variant="stroke" tone="neutral">Details</Button>} style={{ gridColumn: 'span 2' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <span style={{ font: 'var(--label-lg)', letterSpacing: 'var(--label-lg-ls)', color: 'var(--text-strong-950)' }}>Your credit score is 710</span>
            <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>This score is considered to be Excellent.</span>
          </div>
          <LinkButton tone="gray" underline>Pelajari</LinkButton>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>{Array.from({ length: 40 }).map((_, i) => <span key={i} style={{ flex: 1, height: 24, borderRadius: 2, background: i < 28 ? 'var(--green-500)' : 'var(--bg-soft-200)' }} />)}</div>
      </WidgetCard>
    </div>
  );
}
Object.assign(window, { Dashboard, TxnRow, Sparkline });
