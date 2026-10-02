import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { LinkButton } from '../actions/LinkButton.jsx';

export const STATUS_META = {
  error: { k: 'error', icon: 'ErrorWarningFill' }, warning: { k: 'warning', icon: 'AlertFill' }, success: { k: 'success', icon: 'SelectBoxCircleFill' },
  information: { k: 'information', icon: 'InformationFill' }, feature: { k: 'faded', icon: 'MagicFill' },
};

/** Alert & Notification & Toast [1.1] — status: error | warning | success | information | feature. size sm (inline bar) | lg (title + description + actions). */
export function Alert({ status = 'information', size = 'sm', title, children, actionLabel, onAction, secondaryLabel, onSecondary, dismissible = true, onDismiss, style }) {
  const m = STATUS_META[status] || STATUS_META.information;
  const ic = status === 'feature' ? 'var(--neutral-slate-800)' : `var(--state-${m.k}-base)`;
  const close = dismissible && <button type="button" aria-label="Close" onClick={onDismiss} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name="CloseLine" /></button>;
  if (size === 'sm') return (
    <div role="status" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 12, borderRadius: 8, background: `var(--state-${m.k}-lighter)`, ...style }}>
      <span style={{ color: ic, display: 'flex' }}><Icon name={m.icon} /></span>
      <span style={{ flex: 1, font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-strong-950)' }}>{title && <b style={{ fontWeight: 500 }}>{title} </b>}{children}</span>
      {actionLabel && <LinkButton tone="black" underline onClick={onAction}>{actionLabel}</LinkButton>}
      {close}
    </div>
  );
  return (
    <div role="status" style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '14px 14px 16px 14px', borderRadius: 12, background: `var(--state-${m.k}-lighter)`, ...style }}>
      <span style={{ color: ic, display: 'flex' }}><Icon name={m.icon} /></span>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
          {children && <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' }}>{children}</span>}
        </div>
        {(actionLabel || secondaryLabel) && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {actionLabel && <LinkButton tone="black" underline onClick={onAction}>{actionLabel}</LinkButton>}
          {secondaryLabel && <><span style={{ color: 'var(--text-soft-400)' }}>∙</span><LinkButton tone="black" underline onClick={onSecondary}>{secondaryLabel}</LinkButton></>}
        </div>}
      </div>
      {close}
    </div>
  );
}

/** Toast — Alert lg on a white elevated surface, for transient feedback (bottom-right stack). */
export function Toast({ style, ...rest }) {
  return <Alert size="lg" {...rest} style={{ width: 390, maxWidth: '100%', boxShadow: 'var(--shadow-modal)', animation: 'ab-pop-in var(--duration-base) var(--ease-standard)', ...style }} />;
}
/* Figma family aliases (source set names) */
export const AlertNotificationToast11 = Alert;
export default Alert;
