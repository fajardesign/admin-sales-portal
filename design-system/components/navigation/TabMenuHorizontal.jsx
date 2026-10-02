import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Tab Menu Horizontal [1.1] — underline tabs (2px primary indicator) on a bottom divider. items: [{label, value, icon?, badge?}]. */
export function TabMenuHorizontal({ items = [], value, onChange, style }) {
  return (
    <div role="tablist" style={{ display: 'flex', gap: 24, boxShadow: 'inset 0 -1px 0 var(--stroke-soft-200)', ...style }}>
      {items.map((it) => { const v = it.value ?? it.label; return <HTab key={v} {...it} active={v === value} onClick={() => onChange && onChange(v)} />; })}
    </div>
  );
}
function HTab({ label, icon, badge, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button role="tab" aria-selected={active} type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 6, padding: '14px 0', border: 'none', background: 'none', cursor: 'pointer', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: active || hover ? 'var(--text-strong-950)' : 'var(--text-sub-600)', whiteSpace: 'nowrap' }}>
      {icon && <span style={{ color: active ? 'var(--primary-base)' : 'var(--icon-sub-600)', display: 'flex' }}><Icon name={icon} /></span>}{label}{badge}
      {active && <span style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 2, background: 'var(--primary-base)' }} />}
    </button>
  );
}

/** Tab Menu Vertical [1.1] — stacked 180px items; active gets bg-weak-50 and primary icon. */
export function TabMenuVertical({ items = [], value, onChange, title, style }) {
  return (
    <div role="tablist" style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 180, ...style }}>
      {title && <span style={{ font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)', padding: '4px 0' }}>{title}</span>}
      {items.map((it) => { const v = it.value ?? it.label; return <VTab key={v} {...it} active={v === value} onClick={() => onChange && onChange(v)} />; })}
    </div>
  );
}
function VTab({ label, icon, badge, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button role="tab" aria-selected={active} type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 6, padding: 8, borderRadius: 8, border: 'none', cursor: 'pointer', background: active || hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: active || hover ? 'var(--text-strong-950)' : 'var(--text-sub-600)', textAlign: 'left' }}>
      {icon && <span style={{ color: active ? 'var(--primary-base)' : 'var(--icon-sub-600)', display: 'flex' }}><Icon name={icon} /></span>}
      <span style={{ flex: 1 }}>{label}</span>{badge}
      {active && <span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name="ArrowRightSLine" size={18} /></span>}
    </button>
  );
}

/** Segmented Control [1.1] — bg-weak-50 track with a raised white active segment. */
export function SegmentedControl({ items = [], value, onChange, style }) {
  return (
    <div role="tablist" style={{ display: 'flex', gap: 4, padding: 4, borderRadius: 10, background: 'var(--bg-weak-50)', ...style }}>
      {items.map((it) => { const v = it.value ?? it.label; return <Seg key={v} {...it} active={v === value} onClick={() => onChange && onChange(v)} />; })}
    </div>
  );
}
function Seg({ label, icon, disabled, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" role="tab" aria-selected={active} disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: 4, borderRadius: 6, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer', background: active ? 'var(--bg-white-0)' : 'transparent', boxShadow: active ? 'var(--shadow-segment)' : 'none',
        font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: disabled ? 'var(--text-disabled-300)' : active ? 'var(--text-strong-950)' : hover ? 'var(--text-sub-600)' : 'var(--text-soft-400)', whiteSpace: 'nowrap', transition: 'background var(--duration-fast), box-shadow var(--duration-fast)' }}>
      {icon && <Icon name={icon} />}{label}
    </button>
  );
}
/* Figma family aliases (source set names) */
export const TabMenuHorizontal11 = TabMenuHorizontal;
export const TabMenuHorizontalItems11 = TabMenuHorizontal;
export const TabMenuVertical11 = TabMenuVertical;
export const TabMenuVerticalItems11 = TabMenuVertical;
export const SegmentedControl11 = SegmentedControl;
export const NotificationsTabMenu11 = TabMenuHorizontal;
export const CustomTabMenu11 = TabMenuVertical;
export default TabMenuHorizontal;
