import { Sidebar, PageHeader, Button, CompactButton, Badge, Icon, AmarBankLogo } from '@ds/index.js';
import { NAV } from '../data/nav.js';

/** Shell portal — Sidebar gelap 272px + PageHeader + area konten (pola ui_kits/bisnis-web/Shell.jsx). */
export function AppShell({ page, onNavigate, title, description, actions, children }) {
  const sections = NAV.map((s) => ({
    ...s,
    items: s.items.map((it) => (it.value === 'applications'
      ? { ...it, badge: <Badge color="red" type="number">3</Badge>, chevron: false }
      : it)),
  }));

  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-white-0)' }}>
      <Sidebar theme="dark" company="Sales Portal"
        logo={<AmarBankLogo lockup="bisnis-vertical" color="default" height={44} />}
        sections={sections} value={page} onChange={onNavigate} />
      <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <PageHeader title={title} description={description}
          style={{ padding: 'var(--space-24) var(--space-32)' }}
          actions={<>
            {actions}
            <CompactButton variant="stroke" size="lg" icon={<Icon name="Notification3Line" />} aria-label="Notifikasi"
              onClick={() => onNavigate('notifications')} />
            <Button variant="stroke" tone="neutral" leftIcon={<Icon name="LogoutBoxRLine" />}>Keluar</Button>
          </>} />
        <div style={{ flex: 1, overflow: 'auto', padding: '0 var(--space-32) var(--space-32)' }}>{children}</div>
      </main>
    </div>
  );
}
