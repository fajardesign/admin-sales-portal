import React from 'react';

function Dot({ n, state }) {
  if (state === 'completed') return <span style={{ width: 20, height: 20, borderRadius: 999, background: 'var(--state-success-base)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="11" height="8" viewBox="0 0 11 8" fill="none"><path d="M1 4l3 3 6-6" stroke="var(--static-static-white)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg></span>;
  const active = state === 'active';
  return <span style={{ width: 20, height: 20, borderRadius: 999, background: active ? 'var(--primary-base)' : 'var(--bg-white-0)', boxShadow: active ? 'none' : 'var(--shadow-stroke)', display: 'flex', alignItems: 'center', justifyContent: 'center', font: 'var(--label-xs)', color: active ? 'var(--static-static-white)' : 'var(--text-sub-600)', flexShrink: 0 }}>{n}</span>;
}
const stateOf = (i, current) => (i < current ? 'completed' : i === current ? 'active' : 'default');

/** Step Indicator Horizontal [1.1] — numbered steps separated by chevrons. steps: string[]; current: index. */
export function StepIndicatorHorizontal({ steps = [], current = 0, onStepClick, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', ...style }}>
      {steps.map((s, i) => { const st = stateOf(i, current); return (
        <React.Fragment key={i}>
          <button type="button" onClick={() => onStepClick && onStepClick(i)} style={{ display: 'flex', alignItems: 'center', gap: 8, border: 'none', background: 'none', padding: 0, cursor: onStepClick ? 'pointer' : 'default', font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: st === 'default' ? 'var(--text-sub-600)' : 'var(--text-strong-950)' }}>
            <Dot n={i + 1} state={st} />{s}
          </button>
          {i < steps.length - 1 && <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1l4 4-4 4" stroke="var(--icon-soft-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
        </React.Fragment>); })}
    </div>
  );
}

/** Step Indicator Vertical [1.1] — stacked 232px step rows; active row is white, others bg-weak-50. */
export function StepIndicatorVertical({ steps = [], current = 0, title, onStepClick, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 232, ...style }}>
      {title && <span style={{ font: 'var(--subheading-xs)', letterSpacing: 'var(--subheading-xs-ls)', textTransform: 'uppercase', color: 'var(--text-soft-400)', padding: '4px 0' }}>{title}</span>}
      {steps.map((s, i) => { const st = stateOf(i, current); return (
        <button key={i} type="button" onClick={() => onStepClick && onStepClick(i)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 8, borderRadius: 10, border: 'none', textAlign: 'left', cursor: onStepClick ? 'pointer' : 'default',
          background: st === 'active' ? 'var(--bg-white-0)' : 'var(--bg-weak-50)', boxShadow: st === 'active' ? 'var(--shadow-stroke-xs)' : 'none', font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: st === 'default' ? 'var(--text-sub-600)' : 'var(--text-strong-950)' }}>
          <Dot n={i + 1} state={st} /><span style={{ flex: 1 }}>{s}</span>
        </button>); })}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const StepIndicatorHorizontal11 = StepIndicatorHorizontal;
export const StepIndicatorHorizontalItems11 = StepIndicatorHorizontal;
export const StepIndicatorVertical11 = StepIndicatorVertical;
export const StepIndicatorVerticalItems11 = StepIndicatorVertical;
export default StepIndicatorHorizontal;
