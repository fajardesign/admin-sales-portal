import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/** Time Picker items — selectable time slot chip (e.g. 09:00). */
export function TimeSlot({ children, selected = false, disabled = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ padding: '8px 12px', borderRadius: 8, border: 'none', cursor: disabled ? 'not-allowed' : 'pointer', background: selected ? 'var(--primary-alpha-10)' : hover && !disabled ? 'var(--bg-weak-50)' : 'var(--bg-white-0)', boxShadow: selected ? 'inset 0 0 0 1px var(--primary-base)' : hover ? 'none' : 'var(--shadow-stroke)',
        font: 'var(--label-sm)', letterSpacing: 'var(--label-sm-ls)', color: disabled ? 'var(--text-disabled-300)' : selected ? 'var(--primary-base)' : 'var(--text-sub-600)' }}>
      {children}
    </button>
  );
}

/** Time Picker — grid of TimeSlot with a header (duration / status selects are composed by the caller). */
export function TimePicker({ slots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00'], disabled = [], value, onChange, columns = 3, title = 'Select time', style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 288, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, font: 'var(--label-sm)', color: 'var(--text-strong-950)' }}><span style={{ color: 'var(--icon-sub-600)', display: 'flex' }}><Icon name="TimeLine" /></span>{title}</div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 8 }}>
        {slots.map((s) => <TimeSlot key={s} selected={value === s} disabled={disabled.includes(s)} onClick={() => onChange && onChange(s)}>{s}</TimeSlot>)}
      </div>
    </div>
  );
}
export default TimePicker;
