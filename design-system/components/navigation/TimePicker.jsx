import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const STATUS = {
  available: { label: 'Tersedia', tone: 'success' },
  busy: { label: 'Sibuk', tone: 'error' },
  meeting: { label: 'Rapat', tone: 'warning' },
  offline: { label: 'Offline', tone: 'faded' },
};

const TimeText = ({ time, period, color, align }) => (
  <span style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: align, gap: 3, font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)' }}>
    <span style={{ color }}>{time}</span>
    {period && <span style={{ color: color === 'var(--text-disabled-300)' ? color : 'var(--text-soft-400)' }}>{period}</span>}
  </span>
);

/** Time Picker Items — full-width row (h36, pad 8/12, gap 10, r8): time text-sub-600 + period text-soft-400 (label-sm), optional right column. States default / hover (bg-weak-50) / active (bg-weak-50, text-strong-950, primary check) / disabled. direction right | center places the check. */
export function TimePickerItem({ children, time, period, rightTime, rightPeriod, rightText, direction = 'right', selected = false, disabled = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const color = disabled ? 'var(--text-disabled-300)' : selected ? 'var(--text-strong-950)' : 'var(--text-sub-600)';
  const showRight = rightText ?? rightTime != null;
  const check = selected && !disabled && (
    <span style={{ width: 14, height: 14, flexShrink: 0, borderRadius: '50%', background: 'var(--primary-base)', color: 'var(--static-static-white)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="CheckLine" size={10} /></span>
  );
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', height: 36, boxSizing: 'border-box', padding: '8px 12px', borderRadius: 8, border: 'none', textAlign: 'left', cursor: disabled ? 'not-allowed' : 'pointer', background: !disabled && (selected || hover) ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', ...style }}>
      <TimeText time={time ?? children} period={period} color={color} align="flex-start" />
      {direction === 'center' && check}
      {showRight && <TimeText time={rightTime ?? time ?? children} period={rightTime != null ? rightPeriod : period} color={color} align="flex-end" />}
      {direction !== 'center' && check}
    </button>
  );
}

/** Time slot (legacy name) — now renders a Time Picker Items row; children = time text. */
export function TimeSlot(props) {
  return <TimePickerItem {...props} />;
}

/** Time Picker Select Status — status chip (h32, pad 4/10/4/6, gap 4, r8, label-sm) with 6px dot. type available | busy | meeting | offline (Tersedia / Sibuk / Rapat / Offline). Default: bg-white-0 + stroke-soft-200 + regular-shadow/x-small; hover bg-weak-50; selected state-*-lighter bg + state-*-dark text; disabled bg-weak-50. */
export function TimePickerSelectStatus({ type = 'available', children, selected = false, disabled = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const s = STATUS[type] || STATUS.available;
  const flat = selected || disabled;
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 32, boxSizing: 'border-box', padding: '4px 10px 4px 6px', borderRadius: 8, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        background: disabled ? 'var(--bg-weak-50)' : selected ? `var(--state-${s.tone}-lighter)` : hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)',
        boxShadow: flat ? 'none' : hover ? 'var(--shadow-stroke)' : 'var(--shadow-stroke-xs)',
        font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: disabled ? 'var(--text-disabled-300)' : selected ? `var(--state-${s.tone}-dark)` : 'var(--text-sub-600)', ...style }}>
      <span style={{ width: 16, height: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: disabled ? 'var(--icon-disabled-300)' : `var(--state-${s.tone}-base)` }} />
      </span>
      {children ?? s.label}
    </button>
  );
}

/** Time Picker Select Duration — duration chip (h32, pad 4/10, gap 6, r8, label-sm). Default bg-white-0 + stroke-soft-200 + regular-shadow/x-small; hover bg-weak-50; active primary-alpha-10 + primary-base text and 12px check; disabled bg-weak-50 + text-disabled-300. */
export function TimePickerSelectDuration({ children = '30 menit', active = false, disabled = false, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const flat = active || disabled;
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 32, boxSizing: 'border-box', padding: '4px 10px', borderRadius: 8, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
        background: disabled ? 'var(--bg-weak-50)' : active ? 'var(--primary-alpha-10)' : hover ? 'var(--bg-weak-50)' : 'var(--bg-white-0)',
        boxShadow: flat ? 'none' : hover ? 'var(--shadow-stroke)' : 'var(--shadow-stroke-xs)',
        font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: disabled ? 'var(--text-disabled-300)' : active ? 'var(--primary-base)' : 'var(--text-sub-600)', ...style }}>
      {active && !disabled && <Icon name="CheckLine" size={12} />}
      {children}
    </button>
  );
}

/** Time Picker — 348-wide card (r20): header (pad 14/16, time-line icon + label-md), optional duration row (pad 14/16, gap 8), scrollable list of Time Picker Items (pad 8, gap 2, max h280), optional footer (pad 14/16, gap 12, right-aligned). Sections divided by stroke-soft-200. */
export function TimePicker({ slots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00'], disabled = [], value, onChange, title = 'Pilih waktu', durations, duration, onDurationChange, direction = 'right', footer, style }) {
  const line = (side) => ({ boxShadow: `inset 0 ${side === 'top' ? 1 : -1}px 0 var(--stroke-soft-200)` });
  const slotOf = (s) => (typeof s === 'string' ? { time: s } : s);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 348, borderRadius: 20, background: 'var(--bg-white-0)', boxShadow: 'var(--shadow-stroke), var(--shadow-modal)', overflow: 'hidden', ...style }}>
      {title != null && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 16px', ...line('bottom') }}>
          <span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name="TimeLine" /></span>
          <span style={{ flex: 1, font: 'var(--label-md)', letterSpacing: 'var(--label-md-ls)', color: 'var(--text-sub-600)' }}>{title}</span>
        </div>
      )}
      {durations && durations.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '14px 16px', ...line('bottom') }}>
          {durations.map((d) => <TimePickerSelectDuration key={d} active={duration === d} onClick={() => onDurationChange && onDurationChange(d)}>{d}</TimePickerSelectDuration>)}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 8, maxHeight: 280, boxSizing: 'border-box', overflowY: 'auto' }}>
        {slots.map((s) => {
          const it = slotOf(s);
          return <TimePickerItem key={it.time} {...it} direction={direction} selected={value === it.time} disabled={disabled.includes(it.time)} onClick={() => onChange && onChange(it.time)} />;
        })}
      </div>
      {footer && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, padding: '14px 16px', ...line('top') }}>{footer}</div>}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const TimePickerItems11 = TimePickerItem;
export const TimePickerSelectStatus11 = TimePickerSelectStatus;
export const TimePickerSelectDuration11 = TimePickerSelectDuration;
export default TimePicker;
