import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { CompactButton } from '../actions/CompactButton.jsx';
import { STATUS_META } from './Alert.jsx';

function HeaderMedia({ status, icon }) {
  if (status) { const m = STATUS_META[status]; return <span style={{ padding: 10, borderRadius: 999, background: `var(--state-${m.k}-lighter)`, color: `var(--state-${m.k}-base)`, display: 'flex' }}><Icon name={m.icon} /></span>; }
  if (icon) return <span style={{ padding: 10, borderRadius: 999, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke)', color: 'var(--icon-sub-600)', display: 'flex' }}>{typeof icon === 'string' ? <Icon name={icon} /> : icon}</span>;
  return null;
}

/** Modal Header [1.1] — title + description, optional left icon or status medallion, close button. */
export function ModalHeader({ title, description, icon, status, onClose, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '16px 16px 16px 20px', background: 'var(--bg-white-0)', boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)', ...style }}>
      <HeaderMedia status={status} icon={icon} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
        {description && <span style={{ font: (icon || status) ? 'var(--paragraph-xs)' : 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{description}</span>}
      </div>
      {onClose && <CompactButton variant="ghost" icon={<Icon name="CloseLine" />} onClick={onClose} aria-label="Close" />}
    </div>
  );
}

/** Modal Footer [1.1] — right-aligned actions, optional left slot (checkbox, info, toggle, stepper, link). stretch makes buttons equal width. */
export function ModalFooter({ left, children, stretch = false, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: 'var(--bg-white-0)', boxShadow: 'inset 0 1px 0 var(--stroke-soft-200)', ...style }}>
      {left && <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 6 }}>{left}</div>}
      <div style={{ display: 'flex', gap: 12, flex: stretch ? 1 : undefined, justifyContent: 'flex-end', marginLeft: left ? 0 : 'auto' }}>{React.Children.map(children, (c) => <div style={{ flex: stretch ? 1 : undefined, display: 'flex' }}>{c}</div>)}</div>
    </div>
  );
}

/** Modal — overlay + radius-20 dialog (440px). Compose with ModalHeader / body / ModalFooter. */
export function Modal({ open = true, onClose, width = 440, children, style }) {
  React.useEffect(() => { if (!open) return; const k = (e) => e.key === 'Escape' && onClose && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, [open, onClose]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'var(--overlay-overlay-soft)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, animation: 'ab-fade-in var(--duration-base)' }}>
      <div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} style={{ width, maxWidth: '100%', borderRadius: 20, overflow: 'hidden', background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), var(--shadow-modal)', animation: 'ab-pop-in var(--duration-base) var(--ease-standard)', ...style }}>
        {children}
      </div>
    </div>
  );
}

/** Status Modals [1.1] — confirmation dialog card with status medallion; alignment horizontal | vertical. Render inside Modal or inline. */
export function StatusModal({ status = 'success', title, children, alignment = 'horizontal', actions, style }) {
  const m = STATUS_META[status] || STATUS_META.success;
  const v = alignment === 'vertical';
  return (
    <div style={{ width: 440, maxWidth: '100%', borderRadius: 20, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), var(--shadow-modal)', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex', flexDirection: v ? 'column' : 'row', alignItems: v ? 'center' : 'flex-start', textAlign: v ? 'center' : 'left', gap: 16, padding: 20 }}>
        <span style={{ padding: 8, borderRadius: 10, background: `var(--state-${m.k}-lighter)`, color: `var(--state-${m.k}-base)`, display: 'flex' }}><Icon name={m.icon} size={24} /></span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ font: 'var(--label-md)', letterSpacing: 'var(--label-md-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
          <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' }}>{children}</span>
        </div>
      </div>
      {actions && <div style={{ display: 'flex', gap: 12, padding: '16px 20px', boxShadow: 'inset 0 1px 0 var(--stroke-soft-200)' }}>{React.Children.map(actions.props?.children ?? actions, (c) => <div style={{ flex: 1, display: 'flex' }}>{c}</div>)}</div>}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const ModalHeader11 = ModalHeader;
export const ModalFooter11 = ModalFooter;
export const StatusModals11 = StatusModal;
export default Modal;
