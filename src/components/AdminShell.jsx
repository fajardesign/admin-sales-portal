import { useState } from 'react';
import { Sidebar, SidebarItem, PageHeader, Avatar, Button, Icon, AmarBankLogo } from '@ds/index.js';
import { navigate } from '../lib/router.js';
import { navFor } from '../lib/nav.js';


const COLLAPSE_KEY = 'sp-sidebar-collapsed';
const readCollapsed = () => { try { return localStorage.getItem(COLLAPSE_KEY) === '1'; } catch { return false; } };

/**
 * Shell portal: Sidebar gelap 272px (bisa diperkecil ke 80px, hanya ikon; pilihan diingat per perangkat) + PageHeader
 * (ikon, judul, deskripsi, chip pengguna, Keluar) tetap di atas + konten pad 24/32 yang di-scroll utuh (kartu, filter, tabel);
 * bagian yang perlu tetap terlihat memakai StickyBar.
 */
export function AdminShell({ active, icon, title, description, user, onLogout, headerExtra, children }) {
  const [collapsed, setCollapsed] = useState(readCollapsed);
  const toggle = () => setCollapsed((c) => { try { localStorage.setItem(COLLAPSE_KEY, c ? '0' : '1'); } catch { /* abaikan */ } return !c; });
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-white-0)' }}>
      <Sidebar theme="dark" company="" collapsed={collapsed}
        logo={collapsed ? <AmarBankLogo lockup="mark" color="white" height={26} /> : <AmarBankLogo lockup="horizontal" color="white" height={26} />}
        sections={navFor(user)} value={active} onChange={(v) => navigate(v)}
        footer={<SidebarItem theme="dark" collapsed={collapsed} icon={collapsed ? 'ArrowRightSLine' : 'ArrowLeftSLine'} label={collapsed ? 'Perbesar navigasi' : 'Perkecil navigasi'} onClick={toggle} />} />
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
        {headerExtra}
        <div className="sp-content" style={{ flex: 1, overflow: 'auto', padding: 'var(--space-24) var(--space-32) var(--space-32)', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
          {children}
        </div>
      </main>
    </div>
  );
}

function UserChip({ user }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-10)', paddingRight: 'var(--space-4)' }}>
      <Avatar size={40} color={2} name={user.name} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}>{user.name}</span>
        <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{user.roleLabel}</span>
      </div>
    </div>
  );
}
