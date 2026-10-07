import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { CompactButton } from '../actions/CompactButton.jsx';
import { STATUS_META } from './Alert.jsx';

const TITLE = { font: 'var(--label-md)', letterSpacing: 'var(--label-md-ls)', color: 'var(--text-strong-950)' };
const DESC = { font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' };

/** Bottom Sheets Header [1.1] — top-rounded (20px) header, pad 16/16/16/20, bottom stroke sub-300; centred Label/Medium title + Paragraph/Small description (gap 4). Left Icon / Status types stack a 40px round medallion above the text (gap 16, centred). onClose is a local extra (Figma has no close button). */
export function BottomSheetHeader({ title, description, icon, status, onClose, style }) {
  const m = status && STATUS_META[status];
  const medallion = m
    ? <span style={{ padding: 10, borderRadius: 999, background: `var(--state-${m.k}-lighter)`, color: `var(--state-${m.k}-base)`, display: 'flex' }}><Icon name={m.icon} /></span>
    : icon ? <span style={{ padding: 10, borderRadius: 999, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke)', color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name={icon} /></span> : null;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '16px 16px 16px 20px', borderRadius: '20px 20px 0 0', background: 'var(--bg-white-0)', boxShadow: 'inset 0 -1px 0 var(--stroke-sub-300)', ...style }}>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, textAlign: 'center' }}>
        {medallion}
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={TITLE}>{title}</span>
          {description && <span style={DESC}>{description}</span>}
        </div>
      </div>
      {onClose && <CompactButton variant="ghost" icon={<Icon name="CloseLine" />} onClick={onClose} aria-label="Tutup" />}
    </div>
  );
}

/** Bottom Sheets Footer [1.1] — pad 16/20, gap 12, top stroke sub-300; optional left slot (checkbox, toggle, info text, stepper, link) + right-aligned actions; stretch makes actions fill. */
export function BottomSheetFooter({ left, children, stretch = false, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: 'var(--bg-white-0)', boxShadow: 'inset 0 1px 0 var(--stroke-sub-300)', ...style }}>
      {left && <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6, font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)' }}>{left}</div>}
      <div style={{ display: 'flex', gap: 12, flex: stretch ? 1 : undefined, marginLeft: 'auto' }}>{React.Children.map(children, (c) => <div style={{ flex: stretch ? 1 : undefined, display: 'flex' }}>{c}</div>)}</div>
    </div>
  );
}

/** Status Bottom Sheets [1.1] — vertical status card: radius 20/20/0/0, 1px stroke sub-300, no shadow. Content pad 20, gap 16, centred: 40px medallion (radius 10, pad 8, 24px icon, state lighter/base) above Label/Medium title + Paragraph/Small description (gap 4); optional footer (e.g. BottomSheetFooter). */
export function StatusBottomSheet({ status = 'success', title, children, footer, width = 440, style }) {
  const m = STATUS_META[status] || STATUS_META.success;
  return (
    <div style={{ width, maxWidth: '100%', boxSizing: 'border-box', borderRadius: '20px 20px 0 0', border: '1px solid var(--stroke-sub-300)', background: 'var(--bg-white-0)', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16, padding: 20 }}>
        <span style={{ padding: 8, borderRadius: 10, background: `var(--state-${m.k}-lighter)`, color: `var(--state-${m.k}-base)`, display: 'flex' }}><Icon name={m.icon} size={24} /></span>
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={TITLE}>{title}</span>
          {children && <span style={DESC}>{children}</span>}
        </div>
      </div>
      {footer}
    </div>
  );
}

/** Bottom Sheet — sheet anchored to the bottom edge (440px max, centered) for narrow/mobile-web layouts. */
export function BottomSheet({ open = true, onClose, header, footer, children, width = 440, style }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'var(--overlay-scrim)', backdropFilter: 'var(--overlay-scrim-blur)', WebkitBackdropFilter: 'var(--overlay-scrim-blur)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', animation: 'ab-fade-in var(--duration-base)' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width, maxWidth: '100%', borderRadius: '20px 20px 0 0', background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-modal)', overflow: 'hidden', ...style }}>
        {header}<div>{children}</div>{footer}
      </div>
    </div>
  );
}
/* Figma family aliases (source set names) */
export const BottomSheetsHeader11 = BottomSheetHeader;
export const BottomSheetsFooter11 = BottomSheetFooter;
export const StatusBottomSheets11 = StatusBottomSheet;
export default BottomSheet;
