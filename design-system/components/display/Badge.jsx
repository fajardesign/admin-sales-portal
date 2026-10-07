import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const C = { gray: 'faded', blue: 'information', red: 'error', green: 'success', yellow: 'away', orange: 'warning', purple: 'feature', pink: 'highlighted', teal: 'stable', sky: 'verified' };

/** Badge [1.1] — small pill. type: basic | dot | number; color: gray | blue | red | green | yellow (+ orange/purple/pink/teal/sky, local only);
 * size sm (16: Subheading/2X Small UPPERCASE, 12px icons) | md (20: Label/X Small, 16px icons). Icons may be passed as an icon name. `uppercase` is ignored (font follows size). */
export function Badge({ children, color = 'gray', type = 'basic', size = 'sm', leftIcon, rightIcon, disabled = false, style }) {
  const k = C[color] || color;
  const fg = disabled ? 'var(--text-disabled-300)' : `var(--state-${k}-base)`;
  const number = type === 'number';
  const sm = size !== 'md';
  const ic = (i) => (typeof i === 'string' ? <Icon name={i} size={sm ? 12 : 16} /> : i);
  const pad = number ? 2 : type === 'dot' ? (size === 'md' ? '2px 8px 2px 2px' : '0 8px 0 0') : leftIcon ? '2px 8px 2px 4px' : rightIcon ? '2px 4px 2px 8px' : '2px 8px';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: type === 'dot' ? 0 : 2, padding: pad, borderRadius: 999, minWidth: number ? (size === 'md' ? 20 : 16) : undefined, boxSizing: 'border-box',
      background: disabled ? 'transparent' : `var(--state-${k}-lighter)`, boxShadow: disabled ? 'var(--shadow-stroke)' : 'none', color: fg,
      font: sm ? 'var(--subheading-2xs)' : 'var(--label-xs)', letterSpacing: sm ? 'var(--subheading-2xs-ls)' : 'var(--label-xs-ls)', textTransform: sm ? 'uppercase' : 'none', whiteSpace: 'nowrap', ...style }}>
      {type === 'dot' && <span style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: 4, height: 4, borderRadius: '50%', background: disabled ? 'var(--icon-disabled-300)' : fg }} /></span>}
      {ic(leftIcon)}{children}{ic(rightIcon)}
    </span>
  );
}

const STATUS = { completed: ['success', 'SelectBoxCircleFill'], failed: ['error', 'ErrorWarningFill'], pending: ['warning', 'AlertFill'], information: ['information', 'InformationFill'], disabled: ['faded', 'ForbidFill'] };

/** Status Badge [1.1] — radius-6 status chip (24px, Label/X Small) with the status's default 16px icon; `icon` overrides it, `dot` (local only, not in Figma) swaps it for a 6px dot.
 * status: completed | failed | pending | information | disabled. */
export function StatusBadge({ children, status = 'completed', dot = false, icon, style }) {
  const [k, defIcon] = STATUS[status] || STATUS.completed;
  const fg = status === 'disabled' ? 'var(--text-sub-600)' : `var(--state-${k}-base)`;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 8px 4px 4px', borderRadius: 6, background: `var(--state-${k}-lighter)`, color: fg, font: 'var(--label-xs)', letterSpacing: 'var(--label-xs-ls)', whiteSpace: 'nowrap', ...style }}>
      <span style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', color: status === 'disabled' ? 'var(--state-faded-base)' : fg }}>
        {dot ? <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} /> : icon ?? <Icon name={defIcon} size={16} />}
      </span>
      {children}
    </span>
  );
}
/* Figma family aliases (source set names) */
export const Badge11 = Badge;
export const StatusBadge11 = StatusBadge;
export default Badge;
