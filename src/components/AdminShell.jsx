import { Sidebar, PageHeader, Button, Icon, AmarBankLogo } from '@ds/index.js';

const NAV = [{ title: 'Atur', items: [{ label: 'Manajemen Akun', value: 'users', icon: 'UserLine' }] }];

/** Shell portal admin: Sidebar gelap 272px + PageHeader (ikon, judul, deskripsi, chip pengguna, Keluar). */
export function AdminShell({ active, icon, title, description, user, onLogout, children }) {
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-white-0)' }}>
      <Sidebar theme="dark" company="" logo={<AmarBankLogo lockup="horizontal" color="white" height={26} />} sections={NAV} value={active} />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <PageHeader
          media={(
            <div style={{ width: 48, height: 48, flex: 'none', borderRadius: 'var(--rounded-full)', boxShadow: 'var(--shadow-stroke)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--icon-sub-600)' }}>
              <Icon name={icon} size={24} />
            </div>
          )}
          title={title}
          description={description}
          actions={(
            <>
              <UserChip user={user} />
              <Button variant="stroke" tone="neutral" leftIcon={<Icon name="LogoutBoxRLine" />} onClick={onLogout}>Keluar</Button>
            </>
          )}
        />
        <div style={{ flex: 1, overflow: 'auto', padding: 'var(--space-24) var(--space-32) var(--space-32)', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}

function UserChip({ user }) {
  const ini = user.name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-10)', paddingRight: 'var(--space-4)' }}>
      <div style={{ width: 36, height: 36, borderRadius: 'var(--rounded-full)', background: 'var(--primary-alpha-10)', color: 'var(--primary-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: 'var(--label-sm)' }}>{ini}</div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{user.name}</span>
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{user.roleLabel}</span>
      </div>
    </div>
  );
}
