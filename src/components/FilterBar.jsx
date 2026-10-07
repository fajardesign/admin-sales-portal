import { useState } from 'react';
import { Button, Icon, Tag, TextInput } from '@ds/index.js';

/** Kolom cari di atas tabel. Blur ditangkap wrapper (gotcha TextInput DS). */
export function SearchField({ value, onChange, placeholder, width = 320 }) {
  return (
    <div style={{ width, maxWidth: '100%' }}>
      <TextInput size="sm" leftIcon="Search2Line" placeholder={placeholder} value={value} aria-label={placeholder}
        onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

/**
 * Panel filter yang dibuka dengan tombol "Filter (n)". fields(draft, setDraft) merender kontrol;
 * Terapkan menulis ke URL, Reset mengosongkan. Filter aktif tampil sebagai chip yang bisa dihapus.
 */
export function FilterPanel({ initial, fields, onApply, open, onOpenChange }) {
  const [draft, setDraft] = useState(initial);
  if (!open) return null;
  return (
    <div style={{ padding: 'var(--space-16)', borderRadius: 'var(--rounded-16)', boxShadow: 'var(--shadow-stroke)', background: 'var(--bg-white-0)', display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-12)' }}>
        {fields(draft, (patch) => setDraft((d) => ({ ...d, ...patch })))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-8)' }}>
        <Button variant="stroke" tone="neutral" size="sm" onClick={() => { const empty = Object.fromEntries(Object.keys(draft).map((k) => [k, ''])); setDraft(empty); onApply(empty); }}>Reset</Button>
        <Button size="sm" onClick={() => { onApply(draft); onOpenChange(false); }}>Terapkan</Button>
      </div>
    </div>
  );
}

export const FilterButton = ({ count, open, onClick }) => (
  <Button variant="stroke" tone="neutral" size="sm" leftIcon={<Icon name="Filter3Line" />} onClick={onClick} aria-expanded={open}>
    {count ? `Filter (${count})` : 'Filter'}
  </Button>
);

/** Chip filter aktif: [{ key, label }] */
export function FilterChips({ chips, onRemove }) {
  if (!chips.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-8)' }}>
      {chips.map((c) => <Tag key={c.key} dismissible onDismiss={() => onRemove(c.key)}>{c.label}</Tag>)}
    </div>
  );
}
