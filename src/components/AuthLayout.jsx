import { AmarBankLogo, Icon } from '@ds/index.js';

/** Layout halaman Keycloak-themed (W1 Login, Akses ditolak, KC1 Aktivasi): header logo, kartu tengah, footer. */
export function AuthLayout({ label, footer = <span>© 2026 Amar Bank</span>, children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-weak-50)' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-24) 44px' }}>
        <AmarBankLogo lockup="horizontal" color="color" height={30} />
        {label && <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{label}</span>}
      </header>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-24)' }}>
        {children}
      </div>
      {footer && <footer style={{ display: 'flex', justifyContent: footer.type === 'span' ? 'center' : 'space-between', padding: 'var(--space-24) 44px', font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>
        {footer}
      </footer>}
    </div>
  );
}

/** Kartu 440px radius 20 di tengah halaman auth. */
export function AuthCard({ center = false, gap = 'var(--space-24)', children }) {
  return (
    <div style={{
      width: 440, maxWidth: '100%', boxSizing: 'border-box', padding: 'var(--space-32)', borderRadius: 'var(--rounded-20)',
      background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)', display: 'flex', flexDirection: 'column', gap,
      ...(center ? { alignItems: 'center', textAlign: 'center' } : null),
    }}>
      {children}
    </div>
  );
}

/** Header kartu auth: ikon 64px dalam halo gradient + judul + deskripsi. */
export function AuthHero({ icon, title, description }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-8)', textAlign: 'center' }}>
      <div style={{ padding: 'var(--space-16)', borderRadius: 'var(--rounded-full)', background: 'linear-gradient(180deg, var(--bg-weak-50) 0%, transparent 100%)' }}>
        <div style={{ width: 64, height: 64, borderRadius: 'var(--rounded-full)', background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--icon-sub-600)' }}>
          <Icon name={icon} size={32} />
        </div>
      </div>
      <span style={{ font: 'var(--title-h5)', color: 'var(--text-strong-950)', marginTop: 'var(--space-4)' }}>{title}</span>
      <span style={{ font: 'var(--paragraph-md)', color: 'var(--text-sub-600)' }}>{description}</span>
    </div>
  );
}

/** Pesan status (akses ditolak, tautan kedaluwarsa, sukses): medallion 56px + judul + isi. */
export function StatusMessage({ status, icon, title, children }) {
  return (
    <>
      <div style={{ width: 56, height: 56, borderRadius: 'var(--rounded-full)', background: `var(--state-${status}-lighter)`, color: `var(--state-${status}-base)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={28} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <span style={{ font: 'var(--title-h6)', color: 'var(--text-strong-950)' }}>{title}</span>
        <span style={{ font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)', textWrap: 'pretty' }}>{children}</span>
      </div>
    </>
  );
}
