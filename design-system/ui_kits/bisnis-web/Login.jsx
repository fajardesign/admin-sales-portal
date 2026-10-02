function Login({ onLogin }) {
  const { TextInput, Button, CheckboxLabel, LinkButton, InlineSelect, Icon, ContentDivider } = window.AmarBankInternalWebDS_806d63;
  const [email, setEmail] = React.useState('arthur@sinarjaya.co.id');
  const [pw, setPw] = React.useState('');
  const [err, setErr] = React.useState('');
  const submit = (e) => { e.preventDefault(); if (pw.length < 4) { setErr('Kata sandi minimal 4 karakter.'); return; } onLogin(); };
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-white-0)' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 44px' }}>
        <img src={LOGO + 'amar-bank-bisnis-horizontal-color-text.svg'} style={{ height: 32 }} />
        <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)', display: 'flex', gap: 6 }}>Belum punya akun? <LinkButton underline>Daftar</LinkButton></span>
      </header>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <form onSubmit={submit} style={{ width: 440, maxWidth: '100%', padding: 32, borderRadius: 20, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)', display: 'flex', flexDirection: 'column', gap: 24, boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center' }}>
            <div style={{ padding: 16, borderRadius: 999, background: 'linear-gradient(180deg, var(--bg-weak-50) 0%, rgba(247,247,247,0) 100%)' }}>
              <div style={{ width: 64, height: 64, borderRadius: 999, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--icon-sub-600)' }}><Icon name="User6Line" size={32} /></div>
            </div>
            <span style={{ font: 'var(--title-h5)', color: 'var(--text-strong-950)', marginTop: 4 }}>Masuk ke akun Anda</span>
            <span style={{ font: 'var(--paragraph-md)', letterSpacing: 'var(--paragraph-md-ls)', color: 'var(--text-sub-600)' }}>Masukkan detail Anda untuk masuk.</span>
          </div>
          <ContentDivider />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <TextInput label="Alamat Email" required leftIcon="MailLine" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nama@perusahaan.co.id" />
            <TextInput label="Kata Sandi" required type="password" leftIcon="Lock2Line" value={pw} onChange={(e) => { setPw(e.target.value); setErr(''); }} placeholder="••••••••••" error={err || undefined} hint={!err ? 'Gunakan kata sandi yang Anda buat saat registrasi.' : undefined} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <CheckboxLabel label="Ingat saya" style={{ width: 'auto' }} />
            <LinkButton tone="gray" underline>Lupa kata sandi?</LinkButton>
          </div>
          <Button type="submit" fullWidth>Masuk</Button>
        </form>
      </div>
      <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 44px', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        <span>© 2026 Amar Bank</span>
        <InlineSelect icon="GlobalLine" options={[{ label: 'IND' }, { label: 'ENG' }]} />
      </footer>
    </div>
  );
}
window.Login = Login;
