import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/* Avatar [1.1] solid palette (bg -200 / text -950), in Figma persona order; index 0 is the default (gray-200 / black). */
const SOLID = [['var(--neutral-gray-200)', 'var(--static-static-black)'], ['var(--yellow-200)', 'var(--yellow-950)'], ['var(--jewel-blue-200)', 'var(--jewel-blue-950)'], ['var(--gold-200)', 'var(--gold-950)'], ['var(--purple-200)', 'var(--purple-950)'], ['var(--red-200)', 'var(--sunset-950)']];
/* Initials text style per size (Figma): 20/24 Label/X Small, 32 Label/Small, 40 Label/Medium, 48/56 Label/Large, 64–80 Title/H5. */
const TEXT = { 20: 'label-xs', 24: 'label-xs', 32: 'label-sm', 40: 'label-md', 48: 'label-lg', 56: 'label-lg', 64: 'title-h5', 72: 'title-h5', 80: 'title-h5' };
/* Bottom/Top Status box size per avatar size (Figma instances, flush in the corner). */
const STATUS_BOX = { 20: 10, 24: 12, 32: 16, 40: 18, 48: 20, 56: 24, 64: 28, 72: 28, 80: 32 };
const STATUS_COLOR = { online: 'var(--state-success-base)', offline: 'var(--state-faded-base)', busy: 'var(--state-error-base)', away: 'var(--state-away-base)' };

/** Bottom Status [1.1] — presence dot in a `size` box (32 in Figma): 12/32 dot with a white ring to 20/32. status: online | offline | busy | away. */
export function AvatarStatus({ status = 'online', size = 12 }) {
  const dot = size * 0.375;
  return <span style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: dot, height: dot, borderRadius: '50%', background: STATUS_COLOR[status], boxShadow: `0 0 0 ${size * 0.125}px var(--bg-white-0)` }} /></span>;
}

/** Top Status [1.1] — corner badge in a `size` box (32 in Figma): 24/32 disc with a white ring, icon about half the disc. type: verified | pin | favorite | add | remove | notification. */
export function AvatarBadge({ type = 'verified', size = 20 }) {
  const map = { verified: ['var(--state-verified-base)', 'CheckFill'], pin: ['var(--state-feature-base)', 'PushpinFill'], favorite: ['var(--state-success-base)', 'StarFill'], add: ['var(--state-faded-base)', 'AddLine'], remove: ['var(--state-error-base)', 'CloseLine'], notification: ['var(--state-error-base)', null] };
  const [bg, ic] = map[type] || map.verified;
  const disc = ic ? size * 0.75 : size * 0.375;
  return (
    <span style={{ width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ width: disc, height: disc, borderRadius: '50%', background: bg, boxShadow: `0 0 0 ${size * 0.0625}px var(--bg-white-0)`, color: 'var(--icon-white-0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{ic && <Icon name={ic} size={Math.round(disc * 0.55)} />}</span>
    </span>
  );
}

/** Placeholder silhouette (Avatar [1.1] Icon=On): white head + shoulders on neutral-gray-200. */
function Silhouette({ size }) {
  return <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="16" r="7" fill="var(--static-static-white)" /><path d="M6 37c1.8-7 7.4-11 14-11s12.2 4 14 11a20 20 0 0 1-28 0z" fill="var(--static-static-white)" /></svg>;
}

/** Avatar [1.1] — image, initials or silhouette placeholder; sizes 20–80 (initials use the Figma text style per size); optional status (bottom-right) / badge (top-right).
 * color: palette index 0–5 (gray, yellow, jewel blue, gold, purple, red); default picks one from the name. */
export function Avatar({ src, name, size = 40, color, status, badge, icon = false, style }) {
  const initials = name ? name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase() : '';
  const idx = color ?? (name ? [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % SOLID.length : 0);
  const [bg, fg] = SOLID[idx % SOLID.length];
  const t = TEXT[size] || 'label-md';
  const box = STATUS_BOX[size] || Math.round(size * 0.4);
  const placeholder = !src && (icon || !name);
  return (
    <span style={{ position: 'relative', width: size, height: size, flexShrink: 0, display: 'inline-block', ...style }}>
      <span style={{ width: size, height: size, borderRadius: 999, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: src ? `url(${src}) center/cover no-repeat, var(--neutral-gray-200)` : placeholder ? 'var(--neutral-gray-200)' : bg, color: fg,
        font: `var(--${t})`, letterSpacing: `var(--${t}-ls)` }}>
        {!src && (placeholder ? <Silhouette size={size} /> : initials)}
      </span>
      {status && <span style={{ position: 'absolute', right: 0, bottom: 0, display: 'flex' }}><AvatarStatus status={status} size={box} /></span>}
      {badge && <span style={{ position: 'absolute', right: 0, top: 0, display: 'flex' }}><AvatarBadge type={badge} size={box} /></span>}
    </span>
  );
}

/* "+N" text style per size in Avatar Group [1.1]. */
const GROUP_TEXT = { 80: 'title-h5', 72: 'title-h5', 64: 'title-h5', 56: 'title-h5', 48: 'title-h6', 40: 'label-md', 32: 'label-sm', 24: 'label-xs', 20: 'subheading-2xs' };

/** Avatar Group [1.1] — overlapping stack with "+N" overflow. */
export function AvatarGroup({ avatars = [], size = 40, max = 4, style }) {
  const overlap = size >= 56 ? 16 : size >= 40 ? 12 : size >= 32 ? 6 : 4;
  const shown = avatars.slice(0, max);
  const rest = avatars.length - shown.length;
  return (
    <div style={{ display: 'flex', ...style }}>
      {shown.map((a, i) => <span key={i} style={{ marginLeft: i ? -overlap : 0, borderRadius: 999, boxShadow: '0 0 0 2px var(--stroke-white-0)', display: 'flex' }}><Avatar size={size} {...a} /></span>)}
      {rest > 0 && <span style={{ marginLeft: -overlap, width: size, height: size, borderRadius: 999, background: 'var(--bg-weak-50)', boxShadow: '0 0 0 2px var(--stroke-white-0)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: `var(--${GROUP_TEXT[size] || 'label-sm'})`, color: 'var(--text-sub-600)' }}>+{rest}</span>}
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
