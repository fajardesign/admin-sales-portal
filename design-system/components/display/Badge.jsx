import React from 'react';

const C = { gray: 'faded', blue: 'information', red: 'error', green: 'success', yellow: 'away', orange: 'warning', purple: 'feature', pink: 'highlighted', teal: 'stable', sky: 'verified' };

/** Badge [1.1] — small pill. type: basic | dot | number; color: gray | blue | red | green | yellow (+ orange/purple/pink/teal/sky); size sm | md. */
export function Badge({ children, color = 'gray', type = 'basic', size = 'sm', leftIcon, rightIcon, disabled = false, uppercase = false, style }) {
  const k = C[color] || color;
  const fg = disabled ? 'var(--text-disabled-300)' : `var(--state-${k}-base)`;
  const number = type === 'number';
  const pad = number ? 2 : type === 'dot' ? (size === 'md' ? '2px 8px 2px 2px' : '0 8px 0 0') : leftIcon ? '2px 8px 2px 4px' : rightIcon ? '2px 4px 2px 8px' : '2px 8px';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 2, padding: pad, borderRadius: 999, minWidth: number ? (size === 'md' ? 20 : 16) : undefined, boxSizing: 'border-box',
      background: disabled ? 'transparent' : `var(--state-${k}-lighter)`, boxShadow: disabled ? 'var(--shadow-stroke)' : 'none', color: fg,
      font: uppercase ? 'var(--subheading-2xs)' : 'var(--label-xs)', letterSpacing: uppercase ? '0.02em' : 0, textTransform: uppercase ? 'uppercase' : 'none', whiteSpace: 'nowrap', ...style }}>
      {type === 'dot' && <span style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: 4, height: 4, borderRadius: '50%', background: disabled ? 'var(--icon-disabled-300)' : fg }} /></span>}
      {leftIcon}{children}{rightIcon}
    </span>
  );
}

const STATUS = { completed: ['success', 'SelectBoxCircleFill'], failed: ['error', 'ErrorWarningFill'], pending: ['warning', 'AlertFill'], information: ['information', 'InformationFill'], disabled: ['faded', 'ForbidFill'] };

/** Status Badge [1.1] — radius-6 status chip with leading status icon or dot. status: completed | failed | pending | information | disabled. */
export function StatusBadge({ children, status = 'completed', dot = false, icon, style }) {
  const [k] = STATUS[status] || STATUS.completed;
  const fg = status === 'disabled' ? 'var(--text-sub-600)' : `var(--state-${k}-base)`;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 8px 4px 4px', borderRadius: 6, background: `var(--state-${k}-lighter)`, color: fg, font: 'var(--label-xs)', whiteSpace: 'nowrap', ...style }}>
      <span style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: status === 'disabled' ? 'var(--state-faded-base)' : fg }}>
        {dot ? <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} /> : icon}
      </span>
      {children}
    </span>
  );
}
/* Figma family aliases (source set names) */
export const Badge11 = Badge;
export const StatusBadge11 = StatusBadge;
export default Badge;
