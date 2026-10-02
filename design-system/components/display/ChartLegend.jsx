import React from 'react';

const C = { gray: 'var(--state-faded-base)', lightgray: 'var(--icon-disabled-300)', blue: 'var(--state-information-base)', orange: 'var(--state-warning-base)', red: 'var(--state-error-base)', green: 'var(--state-success-base)', yellow: 'var(--state-away-base)', purple: 'var(--state-feature-base)', sky: 'var(--state-verified-base)', pink: 'var(--state-highlighted-base)', teal: 'var(--state-stable-base)', primary: 'var(--primary-base)' };

/** Chart Legend Dots [1.1] — 12px ringed dot. */
export function ChartLegendDot({ color = 'blue', disabled = false }) {
  return <span style={{ width: 16, height: 16, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><span style={{ width: 12, height: 12, borderRadius: '50%', background: disabled ? 'var(--bg-soft-200)' : C[color] || color, boxShadow: 'inset 0 0 0 2px var(--stroke-white-0), 0px 2px 4px 0px rgba(27,28,29,0.04)' }} /></span>;
}

/** Chart Legends [1.1] — dot + label. size sm (12px) | lg (18px). */
export function ChartLegend({ color = 'blue', children, size = 'sm', disabled = false, style }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, font: size === 'lg' ? 'var(--label-lg)' : 'var(--label-xs)', letterSpacing: size === 'lg' ? 'var(--label-lg-ls)' : 0, color: disabled ? 'var(--text-disabled-300)' : 'var(--text-sub-600)', ...style }}>
      <ChartLegendDot color={color} disabled={disabled} />{children}
    </span>
  );
}
/* Figma family aliases (source set names) */
export const ChartLegends11 = ChartLegend;
export const ChartLegendDots11 = ChartLegendDot;
export default ChartLegend;
