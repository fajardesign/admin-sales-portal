import React from 'react';
import { StepperDot } from '../display/ProgressBar.jsx';

/** Popover Footer [1.1] — type: stretch (two full-width buttons) | text-stepper ("1 of 3" + buttons) | stepper (dots + buttons). */
export function PopoverFooter({ type = 'stretch', step = 0, steps = 3, primary, secondary, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 20px', background: 'var(--bg-white-0)', boxShadow: 'inset 0 1px 0 var(--stroke-soft-200)', ...style }}>
      {type === 'text-stepper' && <span style={{ flex: 1, font: 'var(--paragraph-sm)', color: 'var(--text-sub-600)' }}>{step + 1} of {steps}</span>}
      {type === 'stepper' && <div style={{ flex: 1 }}><StepperDot count={steps} active={step} /></div>}
      <div style={{ display: 'flex', gap: 12, flex: type === 'stretch' ? 1 : undefined }}>
        {secondary && <div style={{ flex: type === 'stretch' ? 1 : undefined, display: 'flex' }}>{secondary}</div>}
        {primary && <div style={{ flex: type === 'stretch' ? 1 : undefined, display: 'flex' }}>{primary}</div>}
      </div>
    </div>
  );
}

/** Popover [1.1] — anchored card (radius 16) with arrow, for onboarding tips / rich info. Controlled via open or toggles on trigger click. */
export function Popover({ trigger, open: o, onOpenChange, placement = 'bottom-start', width = 320, media, title, children, footer, style }) {
  const [inner, setInner] = React.useState(false);
  const open = o ?? inner;
  const set = (x) => { setInner(x); onOpenChange && onOpenChange(x); };
  const [side, align] = placement.split('-');
  const pos = { position: 'absolute', zIndex: 40, width, ...(side === 'top' ? { bottom: 'calc(100% + 10px)' } : { top: 'calc(100% + 10px)' }), ...(align === 'end' ? { right: 0 } : { left: 0 }) };
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      <span onClick={() => set(!open)} style={{ display: 'inline-flex' }}>{trigger}</span>
      {open && (
        <div style={{ ...pos, borderRadius: 16, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), var(--shadow-modal)', overflow: 'visible', animation: 'ab-pop-in var(--duration-base) var(--ease-standard)', ...style }}>
          <span style={{ position: 'absolute', [side === 'top' ? 'bottom' : 'top']: -5, [align === 'end' ? 'right' : 'left']: 28, width: 10, height: 10, background: 'var(--bg-white-0)', transform: 'rotate(45deg)', boxShadow: side === 'top' ? '1px 1px 0 var(--stroke-soft-200)' : '-1px -1px 0 var(--stroke-soft-200)' }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16, padding: 20, borderRadius: 16, background: 'var(--bg-white-0)' }}>
            {media}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {title && <span style={{ font: 'var(--label-md)', letterSpacing: 'var(--label-md-ls)', color: 'var(--text-strong-950)' }}>{title}</span>}
              {children && <span style={{ font: 'var(--paragraph-sm)', letterSpacing: 'var(--paragraph-sm-ls)', color: 'var(--text-sub-600)' }}>{children}</span>}
            </div>
          </div>
          {footer && <div style={{ borderRadius: '0 0 16px 16px', overflow: 'hidden', position: 'relative' }}>{footer}</div>}
        </div>
      )}
    </span>
  );
}
/* Figma family aliases (source set names) */
export const Popover11 = Popover;
export const PopoverFooter11 = PopoverFooter;
export default Popover;
