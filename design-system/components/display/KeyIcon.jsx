import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const SZ = { '2xl': [16, 32], xl: [14, 28], lg: [12, 24], md: [10, 20], sm: [6, 20] };
const C = { gray: 'faded', blue: 'information', red: 'error', green: 'success', yellow: 'away', orange: 'warning', purple: 'feature', pink: 'highlighted', teal: 'stable', sky: 'verified', primary: null };

/** Key Icons [1.1] — circular icon medallion. variant: stroke | lighter; color: gray | blue | red | green | yellow | orange | purple | pink | teal | primary; size sm–2xl. */
export function KeyIcon({ icon = 'User6Line', variant = 'stroke', color = 'gray', size = 'md', style }) {
  const [p, s] = SZ[size] || SZ.md;
  const k = C[color];
  const fg = color === 'gray' ? 'var(--icon-sub-600)' : k ? `var(--state-${k}-base)` : 'var(--primary-base)';
  const bg = variant === 'lighter' ? (k ? `var(--state-${k}-lighter)` : 'var(--primary-lighter)') : 'var(--bg-white-0)';
  return (
    <span style={{ display: 'inline-flex', padding: p, borderRadius: 999, background: bg, boxShadow: variant === 'stroke' ? 'var(--shadow-stroke-xs)' : 'none', color: fg, flexShrink: 0, ...style }}>
      {typeof icon === 'string' ? <Icon name={icon} size={s} /> : icon}
    </span>
  );
}
/* Figma family aliases (source set names) */
export const KeyIcons11 = KeyIcon;
export default KeyIcon;
