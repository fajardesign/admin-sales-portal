import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const RULES = [
  { label: 'At least 1 uppercase', test: (s) => /[A-Z]/.test(s) },
  { label: 'At least 1 number', test: (s) => /\d/.test(s) },
  { label: 'At least 8 characters', test: (s) => s.length >= 8 },
];

/** Password Strength [1.1] — 3 segment bar + rule checklist. Pass the password string. */
export function PasswordStrength({ password = '', rules = RULES, style }) {
  const passed = rules.filter((r) => r.test(password)).length;
  const color = passed === 0 ? null : passed === 1 ? 'var(--state-error-base)' : passed === 2 ? 'var(--state-warning-base)' : 'var(--state-success-base)';
  const word = passed === 0 ? '' : passed === 1 ? 'Weak' : passed === 2 ? 'Moderate' : 'Strong';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '6px 0', ...style }}>
      <div style={{ display: 'flex', gap: 8 }}>
        {[0, 1, 2].map((i) => <span key={i} style={{ flex: 1, height: 4, borderRadius: 1.2, background: i < passed && color ? color : 'var(--bg-soft-200)', transition: 'background var(--duration-base)' }} />)}
      </div>
      <span style={{ font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>{word ? <>{word} password. </> : null}Must contain at least;</span>
      {rules.map((r) => { const ok = r.test(password); return (
        <span key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 4, font: 'var(--paragraph-xs)', color: 'var(--text-sub-600)' }}>
          <span style={{ color: ok ? 'var(--state-success-base)' : 'var(--text-soft-400)' }}><Icon name={ok ? 'SelectBoxCircleFill' : 'CloseCircleFill'} size={16} /></span>{r.label}
        </span>); })}
    </div>
  );
}
/* Figma family aliases (source set names) */
export const PasswordStrength11 = PasswordStrength;
export default PasswordStrength;
