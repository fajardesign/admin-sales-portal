import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export const FIELD_SIZES = { md: { r: 10, p: '10px 10px 10px 12px', gap: 8 }, sm: { r: 8, p: '8px 8px 8px 10px', gap: 8 }, xs: { r: 8, p: '6px 6px 6px 8px', gap: 6 } };

/** Shared input-box look (Text Input [1.1]): default stroke-soft-200 + x-small shadow, hover weak-50, focus stroke-strong-950 (no ring), error stroke error-base (no shadow), disabled weak-50. */
export function fieldBoxStyle({ size = 'md', hover, focus, error, disabled }) {
  const s = FIELD_SIZES[size] || FIELD_SIZES.md;
  let bg = 'var(--bg-white-0)', sh = 'var(--shadow-stroke-xs)';
  if (disabled) { bg = 'var(--bg-weak-50)'; sh = 'none'; }
  else if (error) sh = 'inset 0 0 0 1px var(--state-error-base)';
  else if (focus) sh = 'inset 0 0 0 1px var(--stroke-strong-950)';
  else if (hover) { bg = 'var(--bg-weak-50)'; sh = 'none'; }
  return { display: 'flex', alignItems: 'center', gap: s.gap, padding: s.p, borderRadius: s.r, background: bg, boxShadow: sh, boxSizing: 'border-box', transition: 'background var(--duration-fast), box-shadow var(--duration-fast)' };
}

/** className for native inputs: placeholder text-soft-400, text-sub-600 while the box is hovered (data-hover), disabled-300 when disabled (rules in tokens/base.css). */
export const INPUT_CLASS = 'ab-field-input';

export const inputTextStyle = (disabled) => ({ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', padding: 0, font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: disabled ? 'var(--text-disabled-300)' : 'var(--text-strong-950)' });

/** Label [1.1] — Label/Small field label, gap 1: required asterisk (primary), "(Optional)" sublabel (Paragraph/Small), 20px info-custom-fill icon (icon-disabled-300). */
export function Label({ children, required = false, sublabel, info = false, disabled = false, htmlFor, style }) {
  const c = disabled ? 'var(--text-disabled-300)' : undefined;
  return (
    <label htmlFor={htmlFor} style={{ display: 'flex', alignItems: 'center', gap: 1, font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: c || 'var(--text-strong-950)', ...style }}>
      {children}
      {required && <span style={{ color: c || 'var(--primary-base)' }}>*</span>}
      {sublabel && <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: c || 'var(--text-sub-600)' }}>{sublabel}</span>}
      {info && <span style={{ display: 'flex', color: 'var(--icon-disabled-300)' }}><Icon name="InfoCustomFill" size={20} /></span>}
    </label>
  );
}

/** Hint Text [1.1] — helper / error message under a field. state: default | error | disabled. */
export function HintText({ children, state = 'default', icon = true, style }) {
  const color = state === 'error' ? 'var(--state-error-base)' : state === 'disabled' ? 'var(--text-disabled-300)' : 'var(--text-sub-600)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, font: 'var(--paragraph-xs)', color, ...style }}>
      {icon && <span style={{ color: state === 'default' ? 'var(--icon-soft-400)' : color }}><Icon name="InformationFill" size={16} /></span>}
      <span>{children}</span>
    </div>
  );
}

/** Character Counter [1.1] — "12/200" counter. */
export function CharacterCounter({ count = 0, max = 200, disabled = false, style }) {
  const over = count > max;
  return <span style={{ font: 'var(--subheading-2xs)', letterSpacing: 'var(--subheading-2xs-ls)', color: disabled ? 'var(--text-disabled-300)' : over ? 'var(--state-error-base)' : 'var(--text-soft-400)', ...style }}>{count}/{max}</span>;
}

/** Field — Label + control + HintText stack used by every input. */
export function Field({ label, required, sublabel, info, hint, error, disabled, children, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, ...style }}>
      {label && <Label required={required} sublabel={sublabel} info={info} disabled={disabled}>{label}</Label>}
      {children}
      {(hint || typeof error === 'string') && <HintText state={disabled ? 'disabled' : error ? 'error' : 'default'}>{typeof error === 'string' ? error : hint}</HintText>}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const Label11 = Label;
export const HintText11 = HintText;
export const CharacterCounter11 = CharacterCounter;
export default Field;
