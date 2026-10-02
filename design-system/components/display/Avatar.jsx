import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const SOLID = [['var(--jewel-blue-200)', 'var(--jewel-blue-950)'], ['var(--yellow-200)', 'var(--yellow-950)'], ['var(--purple-200)', 'var(--purple-950)'], ['var(--green-200)', 'var(--green-950)'], ['var(--pink-200)', 'var(--pink-950)'], ['var(--orange-200)', 'var(--orange-950)']];
const FS = { 20: 10, 24: 12, 32: 14, 40: 16, 48: 18, 56: 20, 64: 22, 72: 24, 80: 24 };
const STATUS_COLOR = { online: 'var(--state-success-base)', offline: 'var(--state-faded-base)', busy: 'var(--state-error-base)', away: 'var(--state-away-base)' };

/** Bottom Status [1.1] — presence dot (online / offline / busy / away). */
export function AvatarStatus({ status = 'online', size = 12 }) {
  return <span style={{ width: size, height: size, borderRadius: '50%', background: STATUS_COLOR[status], boxShadow: '0 0 0 2px var(--bg-white-0)', display: 'block' }} />;
}

/** Top Status [1.1] — corner badge (verified / pin / favorite / add / remove / notification). */
export function AvatarBadge({ type = 'verified', size = 20 }) {
  const map = { verified: ['var(--state-verified-base)', 'CheckFill'], pin: ['var(--state-feature-base)', 'PushpinFill'], favorite: ['var(--state-success-base)', 'StarFill'], add: ['var(--state-faded-base)', 'AddLine'], remove: ['var(--state-error-base)', 'CloseLine'], notification: ['var(--state-error-base)', null] };
  const [bg, ic] = map[type] || map.verified;
  if (!ic) return <span style={{ width: size * 0.5, height: size * 0.5, borderRadius: '50%', background: bg, boxShadow: '0 0 0 2px var(--bg-white-0)', display: 'block' }} />;
  return <span style={{ width: size, height: size, borderRadius: '50%', background: bg, boxShadow: '0 0 0 2px var(--bg-white-0), 0px 2px 4px 0px rgba(27,28,29,0.04)', color: 'var(--icon-white-0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={size * 0.6} /></span>;
}

/** Avatar [1.1] — image, initials (solid bg) or icon placeholder; sizes 20–80; optional status / badge. */
export function Avatar({ src, name, size = 40, color, status, badge, icon = false, style }) {
  const initials = name ? name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase() : '';
  const idx = color ?? (name ? [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % SOLID.length : 0);
  const [bg, fg] = SOLID[idx % SOLID.length];
  const dot = Math.max(8, Math.round(size * 0.2));
  return (
    <span style={{ position: 'relative', width: size, height: size, flexShrink: 0, display: 'inline-block', ...style }}>
      <span style={{ width: size, height: size, borderRadius: 999, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: src ? `url(${src}) center/cover no-repeat, var(--bg-weak-50)` : icon || !name ? 'var(--bg-weak-50)' : bg, color: icon || !name ? 'var(--icon-soft-400)' : fg,
        fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: FS[size] || size * 0.35, lineHeight: 1 }}>
        {!src && (icon || !name ? <Icon name="User6Line" size={size * 0.5} /> : initials)}
      </span>
      {status && <span style={{ position: 'absolute', right: size >= 48 ? size * 0.04 : -1, bottom: size >= 48 ? size * 0.04 : -1 }}><AvatarStatus status={status} size={dot} /></span>}
      {badge && <span style={{ position: 'absolute', right: -2, top: -2 }}><AvatarBadge type={badge} size={Math.max(12, Math.round(size * 0.3))} /></span>}
    </span>
  );
}

/** Avatar Group [1.1] — overlapping stack with "+N" overflow. */
export function AvatarGroup({ avatars = [], size = 40, max = 4, style }) {
  const overlap = size >= 56 ? 16 : size >= 40 ? 12 : size >= 32 ? 6 : 4;
  const shown = avatars.slice(0, max);
  const rest = avatars.length - shown.length;
  return (
    <div style={{ display: 'flex', ...style }}>
      {shown.map((a, i) => <span key={i} style={{ marginLeft: i ? -overlap : 0, borderRadius: 999, boxShadow: '0 0 0 2px var(--stroke-white-0)', display: 'flex' }}><Avatar size={size} {...a} /></span>)}
      {rest > 0 && <span style={{ marginLeft: -overlap, width: size, height: size, borderRadius: 999, background: 'var(--bg-weak-50)', boxShadow: '0 0 0 2px var(--stroke-white-0)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: size >= 56 ? 'var(--title-h5)' : 'var(--label-sm)', color: 'var(--text-sub-600)' }}>+{rest}</span>}
    </div>
  );
}

/** Compact Avatar Group [1.1] — pill with up to 3 avatars and a count. variant: default | stroke. */
export function CompactAvatarGroup({ avatars = [], count, size = 32, variant = 'default', style }) {
  const pad = size === 40 ? '2px 12px 2px 2px' : size === 32 ? '2px 10px 2px 2px' : '2px 8px 2px 2px';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size === 40 ? 10 : size === 32 ? 8 : 6, padding: pad, borderRadius: 999, background: 'var(--bg-white-0)', boxShadow: variant === 'stroke' ? '0 0 0 1px var(--stroke-soft-200), var(--shadow-xs)' : 'var(--shadow-xs)', ...style }}>
      <div style={{ display: 'flex' }}>{avatars.slice(0, 3).map((a, i) => <span key={i} style={{ marginLeft: i ? -2 : 0, display: 'flex' }}><Avatar size={size} {...a} /></span>)}</div>
      <span style={{ font: size === 40 ? 'var(--paragraph-md)' : size === 32 ? 'var(--paragraph-sm)' : 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>+{count ?? Math.max(0, avatars.length - 3)}</span>
    </div>
  );
}
/* Figma family aliases (source set names) */
export const Avatar11 = Avatar;
export const AvatarGroup11 = AvatarGroup;
export const CompactAvatarGroup11 = CompactAvatarGroup;
export const BottomStatus11 = AvatarStatus;
export const TopStatus11 = AvatarBadge;
export default Avatar;
