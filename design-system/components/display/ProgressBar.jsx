import React from 'react';

const COL = { primary: 'var(--primary-base)', blue: 'var(--primary-base)', red: 'var(--state-error-base)', orange: 'var(--state-warning-base)', green: 'var(--state-success-base)' };

/** Progress Bar [1.1] — 6px rounded track. color: primary | red | orange | green. */
export function ProgressBar({ value = 0, color = 'primary', style }) {
  return (
    <div style={{ height: 6, borderRadius: 999, background: 'var(--bg-soft-200)', overflow: 'hidden', ...style }}>
      <div style={{ width: `${Math.min(100, Math.max(0, value))}%`, height: '100%', borderRadius: 999, background: COL[color] || color, transition: 'width var(--duration-base) var(--ease-standard)' }} />
    </div>
  );
}

/** Progress Bar Label [1.1] — title + percentage (on top) or bar with value on the right. */
export function ProgressBarLabel({ title, value = 0, color, position = 'top', hint, style }) {
  if (position === 'right') return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, ...style }}>
      <ProgressBar value={value} color={color} style={{ flex: 1 }} />
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{Math.round(value)}%</span>
    </div>);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 6 }}>
        <span style={{ font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: 'var(--text-strong-950)' }}>{title}</span>
        <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' }}>{Math.round(value)}%</span>
      </div>
      <ProgressBar value={value} color={color} />
      {hint && <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{hint}</span>}
    </div>
  );
}

/** Circular Progress Bar [1.1] — ring progress; sizes 48–80 with centered %. */
export function CircularProgress({ value = 0, size = 80, color = 'primary', label, style }) {
  const sw = size >= 64 ? 6 : 4;
  const r = (size - sw) / 2;
  const c = 2 * Math.PI * r;
  return (
    <span style={{ position: 'relative', width: size, height: size, display: 'inline-block', ...style }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--bg-soft-200)" strokeWidth={sw} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={COL[color] || color} strokeWidth={sw} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - value / 100)} style={{ transition: 'stroke-dashoffset var(--duration-base)' }} />
      </svg>
      {size > 48 && <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', font: size >= 64 ? 'var(--label-sm)' : 'var(--label-xs)', color: 'var(--text-strong-950)' }}>{label ?? `${Math.round(value)}%`}</span>}
    </span>
  );
}

/** Stepper Dot [1.1] — carousel / onboarding dots. size sm (8px) | xs (4px). */
export function StepperDot({ count = 3, active = 0, size = 'sm', onChange, style }) {
  const d = size === 'xs' ? 4 : 8;
  return (
    <div style={{ display: 'inline-flex', gap: size === 'xs' ? 6 : 10, ...style }}>
      {Array.from({ length: count }).map((_, i) => <span key={i} onClick={() => onChange && onChange(i)} style={{ width: d, height: d, borderRadius: 96, background: i === active ? 'var(--primary-base)' : 'var(--bg-soft-200)', cursor: onChange ? 'pointer' : 'default', transition: 'background var(--duration-fast)' }} />)}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const ProgressBar11 = ProgressBar;
export const ProgressBarLabel11 = ProgressBarLabel;
export const ProgressBarLine11 = ProgressBar;
export const CircularProgressBar11 = CircularProgress;
export const StepperDot11 = StepperDot;
export default ProgressBar;
