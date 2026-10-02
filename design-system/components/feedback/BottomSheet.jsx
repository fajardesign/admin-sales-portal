import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { CompactButton } from '../actions/CompactButton.jsx';
import { STATUS_META } from './Alert.jsx';

/** Bottom Sheets Header [1.1] — top-rounded (20px) header with Mulish title; optional icon or status medallion. */
export function BottomSheetHeader({ title, description, icon, status, onClose, style }) {
  const m = status && STATUS_META[status];
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '16px 16px 16px 20px', borderRadius: '20px 20px 0 0', background: 'var(--bg-white-0)', boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)', ...style }}>
      {m && <span style={{ padding: 10, borderRadius: 999, background: `var(--state-${m.k}-lighter)`, color: `var(--state-${m.k}-base)`, display: 'flex' }}><Icon name={m.icon} /></span>}
      {!m && icon && <span style={{ padding: 10, borderRadius: 999, boxShadow: 'var(--shadow-stroke)', color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name={icon} /></span>}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ fontFamily: 'var(--font-alt)', fontWeight: 500, fontSize: 14, lineHeight: '20px', letterSpacing: '-0.006em', color: 'var(--text-strong-950)' }}>{title}</span>
        {description && <span style={{ fontFamily: 'var(--font-alt)', fontSize: 12, lineHeight: '16px', color: 'var(--text-sub-600)' }}>{description}</span>}
      </div>
      {onClose && <CompactButton variant="ghost" icon={<Icon name="CloseLine" />} onClick={onClose} aria-label="Close" />}
    </div>
  );
}

/** Bottom Sheets Footer [1.1] — same patterns as Modal Footer. */
export function BottomSheetFooter({ left, children, stretch = false, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: 'var(--bg-white-0)', boxShadow: 'inset 0 1px 0 var(--stroke-soft-200)', ...style }}>
      {left && <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-alt)' }}>{left}</div>}
      <div style={{ display: 'flex', gap: 12, flex: stretch ? 1 : undefined, marginLeft: 'auto' }}>{React.Children.map(children, (c) => <div style={{ flex: stretch ? 1 : undefined, display: 'flex' }}>{c}</div>)}</div>
    </div>
  );
}

/** Bottom Sheet — sheet anchored to the bottom edge (440px max, centered) for narrow/mobile-web layouts. */
export function BottomSheet({ open = true, onClose, header, footer, children, width = 440, style }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'var(--overlay-overlay-soft)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', animation: 'ab-fade-in var(--duration-base)' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width, maxWidth: '100%', borderRadius: '20px 20px 0 0', background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-modal)', overflow: 'hidden', ...style }}>
        {header}<div>{children}</div>{footer}
      </div>
    </div>
  );
}
/* Figma family aliases (source set names) */
export const BottomSheetsHeader11 = BottomSheetHeader;
export const BottomSheetsFooter11 = BottomSheetFooter;
export const StatusBottomSheets11 = BottomSheetHeader;
export default BottomSheet;
