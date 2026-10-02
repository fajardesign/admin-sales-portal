import { describe, expect, it } from 'vitest';
import { passwordPolicy, validateUserForm } from '../lib/validation.js';
import { formatDateWIB, formatPhone, normalizePhone } from '../lib/format.js';

const ok = { email: 'budi@amarbank.co.id', phone: '081234567890', firstName: 'Budi', lastName: 'Santoso' };

describe('validateUserForm', () => {
  it('lolos untuk data valid', () => expect(validateUserForm(ok)).toEqual({}));
  it('wajib diisi', () => expect(validateUserForm({ email: '', phone: '', firstName: '', lastName: '' })).toEqual({
    email: 'Informasi wajib diisi', phone: 'Informasi wajib diisi', firstName: 'Informasi wajib diisi', lastName: 'Informasi wajib diisi',
  }));
  it('nama belakang opsional bila dikonfigurasi', () => expect(validateUserForm({ ...ok, lastName: '' }, { lastNameOptional: true })).toEqual({}));
  it('format email, telepon, nama', () => {
    expect(validateUserForm({ ...ok, email: 'budi@x' }).email).toBe('Format tidak valid');
    expect(validateUserForm({ ...ok, phone: '0212345678' }).phone).toBe('Format tidak valid');
    expect(validateUserForm({ ...ok, firstName: 'Budi123' }).firstName).toBe('Format tidak valid');
    expect(validateUserForm({ ...ok, lastName: 'a'.repeat(51) }).lastName).toBe('Maksimal 50 karakter');
  });
});

describe('format', () => {
  it('normalisasi telepon 0/62', () => {
    expect(normalizePhone('0812-3456-7890')).toBe('81234567890');
    expect(normalizePhone('+62 812 3456 7890')).toBe('81234567890');
  });
  it('format telepon & tanggal WIB', () => {
    expect(formatPhone('81234567890')).toBe('+62 812-3456-7890');
    expect(formatDateWIB(new Date('2026-10-02T03:15:00Z'))).toEqual({ date: '02 Okt 2026', time: '10.15 WIB' });
  });
});

describe('passwordPolicy', () => {
  const user = 'dimas.pratama@amarbank.co.id';
  it('semua terpenuhi', () => expect(passwordPolicy('Rahasia123', user).every((c) => c.ok)).toBe(true));
  it('menolak username', () => expect(passwordPolicy('dimas.pratama', user).find((c) => c.label === 'Bukan username').ok).toBe(false));
});
