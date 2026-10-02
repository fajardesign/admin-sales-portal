function Transfer({ preset, done }) {
  const { StepIndicatorHorizontal, WidgetCard, TextInput, Select, RadioCard, KeyIcon, Button, Avatar, TextArea, ContentDivider, Alert, Modal, StatusModal, Icon, CheckboxLabel, ContentCard } = window.AmarBankInternalWebDS_806d63;
  const [step, setStep] = React.useState(0);
  const [to, setTo] = React.useState(preset?.contact || null);
  const [q, setQ] = React.useState('');
  const [method, setMethod] = React.useState('online');
  const [amount, setAmount] = React.useState(preset?.amt || '');
  const [ok, setOk] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  const people = CONTACTS.filter((c) => c.name.toLowerCase().includes(q.toLowerCase()));
  const sel = CONTACTS.find((c) => c.name === to);
  const row = (k, v) => <div style={{ display: 'flex', justifyContent: 'space-between', font: 'var(--paragraph-sm)' }}><span style={{ color: 'var(--text-sub-600)' }}>{k}</span><span style={{ color: 'var(--text-strong-950)', fontWeight: 500 }}>{v}</span></div>;
  return (
    <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 8 }}>
      <StepIndicatorHorizontal steps={['Penerima', 'Metode & Nominal', 'Konfirmasi']} current={step} onStepClick={(i) => i < step && setStep(i)} style={{ justifyContent: 'center' }} />
      {step === 0 && (
        <WidgetCard title="Pilih Penerima" icon={<Icon name="UserLine" size={24} />}>
          <TextInput leftIcon="Search2Line" placeholder="Cari nama atau nomor rekening…" value={q} onChange={(e) => setQ(e.target.value)} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {people.map((c) => <RadioCard key={c.name} width="100%" checked={to === c.name} onChange={() => setTo(c.name)} media={<Avatar src={c.src} size={40} />} label={c.name} description={'Amar Bank • 1203 ' + (4400 + c.name.length * 37)} />)}
          </div>
          <Button fullWidth disabled={!to} onClick={() => setStep(1)}>Lanjut</Button>
        </WidgetCard>
      )}
      {step === 1 && (
        <WidgetCard title="Metode & Nominal" icon={<Icon name="ExchangeDollarLine" size={24} />}>
          <ContentCard media={<Avatar src={sel?.src} />} label={sel?.name} description="Amar Bank • Penerima" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <RadioCard width="100%" checked={method === 'online'} onChange={() => setMethod('online')} media={<KeyIcon icon="FlashlightLine" variant="lighter" color="primary" size="sm" />} label="Online" description="Real-time, 24/7" />
            <RadioCard width="100%" checked={method === 'bifast'} onChange={() => setMethod('bifast')} media={<KeyIcon icon="BankLine" variant="lighter" color="blue" size="sm" />} label="BI-FAST" description="Biaya Rp 2.500" />
          </div>
          <Select label="Rekening Sumber" defaultValue="g" options={[{ label: 'Giro Operasional • 1203 8890', value: 'g', icon: 'BankLine' }, { label: 'My Physical Card • 4421', value: 'p', icon: 'BankCardLine' }]} />
          <TextInput label="Nominal" required leftIcon="MoneyDollarCircleLine" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ''))} hint="Tersedia: $16,058.94 • Limit harian $50,000" error={Number(amount) > 16058.94 ? 'Saldo tidak mencukupi' : undefined} />
          <TextArea label="Berita" sublabel="(Optional)" placeholder="Contoh: Pembayaran INV-0921" maxLength={50} rows={2} />
          <div style={{ display: 'flex', gap: 12 }}><Button variant="stroke" tone="neutral" fullWidth onClick={() => setStep(0)}>Kembali</Button><Button fullWidth disabled={!amount || Number(amount) > 16058.94} onClick={() => setStep(2)}>Lanjut</Button></div>
        </WidgetCard>
      )}
      {step === 2 && (
        <WidgetCard title="Konfirmasi Transfer" icon={<Icon name="SendPlaneLine" size={24} />}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '8px 0' }}>
            <Avatar src={sel?.src} size={56} />
            <span style={{ font: 'var(--title-h4)', color: 'var(--text-strong-950)' }}>{usd(Number(amount))}</span>
            <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>ke {sel?.name}</span>
          </div>
          <ContentDivider />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>{row('Metode', method === 'online' ? 'Online' : 'BI-FAST')}{row('Rekening sumber', 'Giro Operasional • 1203 8890')}{row('Biaya', method === 'online' ? '$0.00' : '$0.16')}{row('Total', usd(Number(amount) + (method === 'online' ? 0 : 0.16)))}</div>
          <Alert status="information">Transfer di atas $10,000 memerlukan persetujuan approver.</Alert>
          <CheckboxLabel label="Saya telah memeriksa detail transfer" checked={agree} onChange={setAgree} />
          <div style={{ display: 'flex', gap: 12 }}><Button variant="stroke" tone="neutral" fullWidth onClick={() => setStep(1)}>Kembali</Button><Button fullWidth disabled={!agree} onClick={() => setOk(true)}>Kirim Sekarang</Button></div>
        </WidgetCard>
      )}
      <Modal open={ok} onClose={() => { setOk(false); done(); }} style={{ background: 'transparent', boxShadow: 'none' }}>
        <StatusModal status="success" alignment="vertical" title="Transfer Berhasil" style={{ boxShadow: 'none' }} actions={<><Button variant="stroke" tone="neutral" size="sm" onClick={() => { setOk(false); setStep(0); }}>Transfer Lagi</Button><Button size="sm" onClick={() => { setOk(false); done(); }}>Ke Beranda</Button></>}>
          {usd(Number(amount))} telah dikirim ke {sel?.name}.
        </StatusModal>
      </Modal>
    </div>
  );
}
window.Transfer = Transfer;
