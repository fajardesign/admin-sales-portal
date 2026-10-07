import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { CompactButton } from '../actions/CompactButton.jsx';

/** Drawer Header [1.1] — 18px title (+ badge), optional description and icon medallion, close. size sm | lg. */
export function DrawerHeader({ title, description, icon, badge, size = 'sm', onClose, style }) {
  const lg = size === 'lg';
  return (
    <div style={{ display: 'flex', alignItems: lg ? 'flex-start' : 'center', gap: lg ? 16 : 12, padding: 20, background: 'var(--bg-white-0)', boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)', ...style }}>
      {icon && (lg
        ? <span style={{ padding: 12, borderRadius: 999, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke-xs)', color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name={icon} size={24} /></span>
        : <span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name={icon} size={24} /></span>)}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ font: 'var(--label-lg)', letterSpacing: 'var(--label-lg-ls)', color: 'var(--text-strong-950)' }}>{title}</span>{badge}</div>
        {lg && description && <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' }}>{description}</span>}
      </div>
      {onClose && <CompactButton variant="ghost" icon={<Icon name="CloseLine" />} onClick={onClose} aria-label="Close" />}
    </div>
  );
}

/** Drawer Footer [1.1] — actions row (stretch by default) with optional left slot. */
export function DrawerFooter({ left, children, stretch = true, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 20, background: 'var(--bg-white-0)', boxShadow: 'inset 0 1px 0 var(--stroke-soft-200)', ...style }}>
      {left && <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>{left}</div>}
      <div style={{ display: 'flex', gap: 16, flex: stretch && !left ? 1 : undefined, marginLeft: 'auto' }}>{React.Children.map(children, (c) => <div style={{ flex: stretch ? 1 : undefined, display: 'flex' }}>{c}</div>)}</div>
    </div>
  );
}

/** Drawer — right-side panel (400px) over a soft overlay; radius 20 with 8px inset. */
export function Drawer({ open = true, onClose, width = 400, header, footer, children, style }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'var(--overlay-scrim)', backdropFilter: 'var(--overlay-scrim-blur)', WebkitBackdropFilter: 'var(--overlay-scrim-blur)', display: 'flex', justifyContent: 'flex-end', padding: 8, animation: 'ab-fade-in var(--duration-base)' }}>
      <aside onClick={(e) => e.stopPropagation()} style={{ width, maxWidth: '100%', height: '100%', borderRadius: 20, overflow: 'hidden', background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), var(--shadow-modal)', display: 'flex', flexDirection: 'column', animation: 'ab-slide-in-right var(--duration-base) var(--ease-standard)', ...style }}>
        {header}
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
        {footer}
      </aside>
    </div>
  );
}
/* Figma family aliases (source set names) */
export const DrawerHeader11 = DrawerHeader;
export const DrawerFooter11 = DrawerFooter;
export default Drawer;
