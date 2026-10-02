import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Sidebar Items [Sidebar Default] [1.1] — 40px nav row. Active: 4px primary edge bar + Mulish 700 16px label. theme light | dark. */
export function SidebarItem({ icon = 'LayoutGridLine', label, active = false, collapsed = false, badge, chevron = false, theme = 'light', onClick }) {
  const [hover, setHover] = React.useState(false);
  const dark = theme === 'dark';
  const fg = dark ? (active || hover ? 'var(--static-static-white)' : 'var(--neutral-gray-400)') : active ? 'var(--text-strong-950)' : 'var(--text-sub-600)';
  const bg = dark ? (active ? 'rgba(255,255,255,0.08)' : hover ? 'rgba(255,255,255,0.04)' : 'transparent') : hover && !active ? 'var(--jewel-blue-50)' : 'transparent';
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} title={collapsed ? label : undefined}
      style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 8, width: '100%', padding: collapsed ? 8 : '8px 12px', borderRadius: 8, border: 'none', cursor: 'pointer', background: bg, textAlign: 'left',
        fontFamily: 'var(--font-alt)', fontWeight: active ? 700 : 500, fontSize: active ? 16 : 14, lineHeight: active ? '24px' : '20px', letterSpacing: active ? '-0.011em' : '-0.006em', color: fg, justifyContent: collapsed ? 'center' : 'flex-start' }}>
      {active && <span style={{ position: 'absolute', left: -20, top: 10, width: 4, height: 20, borderRadius: '0 4px 4px 0', background: 'var(--primary-base)' }} />}
      <span style={{ display: 'flex', color: active ? 'var(--primary-base)' : dark ? 'var(--neutral-gray-400)' : 'var(--icon-sub-600)' }}><Icon name={icon} /></span>
      {!collapsed && <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>}
      {!collapsed && badge}
      {!collapsed && chevron && <span style={{ display: 'flex', color: dark ? 'var(--neutral-gray-500)' : 'var(--icon-soft-400)' }}><Icon name="ArrowRightSLine" size={18} /></span>}
    </button>
  );
}

/** Sidebar [Navigation] [1.1] — 272px app sidebar: header (logo + company), grouped nav sections, footer slot. theme light (white, right border) | dark (gray-800). */
export function Sidebar({ logo, company = 'Company Name', sections = [], value, onChange, footer, collapsed = false, theme = 'light', style }) {
  const dark = theme === 'dark';
  return (
    <aside style={{ width: collapsed ? 80 : 272, flexShrink: 0, height: '100%', display: 'flex', flexDirection: 'column', background: dark ? 'var(--bg-surface-800)' : 'var(--bg-white-0)', boxShadow: dark ? 'none' : 'inset -1px 0 0 var(--stroke-soft-200)', boxSizing: 'border-box', transition: 'width var(--duration-base) var(--ease-standard)', ...style }}>
      <div style={{ height: 88, padding: 12, display: 'flex', alignItems: 'center', boxSizing: 'border-box' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 10, minWidth: 0 }}>
          {logo}
          {!collapsed && <span style={{ flex: 1, font: 'var(--label-sm)', color: dark ? 'var(--neutral-gray-300)' : 'var(--text-strong-950)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{company}</span>}
        </div>
      </div>
      <nav style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 20, padding: '20px 20px 16px' }}>
        {sections.map((sec, si) => (
          <div key={si} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {sec.title && !collapsed && <span style={{ padding: 4, font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--neutral-gray-400)' }}>{sec.title}</span>}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {sec.items.map((it) => { const v = it.value ?? it.label; return <SidebarItem key={v} {...it} theme={theme} collapsed={collapsed} active={v === value} onClick={() => onChange && onChange(v)} />; })}
            </div>
          </div>
        ))}
      </nav>
      {footer && <div style={{ padding: '16px 20px', boxShadow: dark ? 'inset 0 1px 0 rgba(255,255,255,0.08)' : 'inset 0 1px 0 var(--stroke-soft-200)' }}>{footer}</div>}
    </aside>
  );
}
/* Figma family aliases (source set names) */
export const SidebarNavigation11 = Sidebar;
export const SidebarNavigationDefault11 = Sidebar;
export const SidebarItemsSidebarDefault11 = SidebarItem;
export const SidebarHeaderSidebar11 = Sidebar;
export const SidebarFooterSidebar11 = Sidebar;
export default Sidebar;
