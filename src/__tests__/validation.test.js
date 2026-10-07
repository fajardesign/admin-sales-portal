import { describe, expect, it } from 'vitest';
import { passwordPolicy, validatePksFile, validateReason, validateUserForm } from '../lib/validation.js';
import { formatDateTime, formatDateWIB, formatPhone, formatRp, normalizePhone } from '../lib/format.js';
import { tierRate } from '../api/mockApi.js';

const ok = { email: 'budi@amarbank.co.id', phone: '081234567890', username: 'budi.santoso', fullName: 'Budi Santoso', role: 'REVIEWER', tlLevel: '', areaIds: [], leaderId: '' };
const leaders = [{ value: '3', label: 'Hasan Basri' }];

describe('validateUserForm (PRD §3B)', () => {
  it('lolos untuk Admin valid', () => expect(validateUserForm(ok)).toEqual({}));
  it('wajib diisi', () => expect(validateUserForm({ ...ok, email: '', phone: '', username: '', fullName: '', role: '' })).toEqual({
    email: 'Informasi wajib diisi', phone: 'Informasi wajib diisi', username: 'Informasi wajib diisi', fullName: 'Informasi wajib diisi', role: 'Informasi wajib diisi',
  }));
  it('format email, telepon, username, nama', () => {
    expect(validateUserForm({ ...ok, email: 'budi@x' }).email).toBe('Format tidak valid');
    expect(validateUserForm({ ...ok, phone: '0212345678' }).phone).toBe('Format tidak valid');
    expect(validateUserForm({ ...ok, username: 'Bu' }).username).toBe('Format tidak valid');
    expect(validateUserForm({ ...ok, fullName: 'Budi123' }).fullName).toBe('Format tidak valid');
    expect(validateUserForm({ ...ok, fullName: 'a'.repeat(101) }).fullName).toBe('Maksimal 100 karakter');
  });
  it('TL butuh level, area, dan leader', () => {
    const tl = { ...ok, role: 'TL' };
    expect(validateUserForm(tl)).toMatchObject({ tlLevel: 'Informasi wajib diisi', areaIds: 'Informasi wajib diisi' });
    expect(validateUserForm({ ...tl, tlLevel: 'JUNIOR', areaIds: [6] }, { leaders: [] }).leaderId).toBe('Belum ada APL aktif di area ini. Buat akun APL terlebih dahulu.');
    expect(validateUserForm({ ...tl, tlLevel: 'JUNIOR', areaIds: [1], leaderId: '3' }, { leaders })).toEqual({});
  });
  it('SA tanpa TL di area', () => expect(validateUserForm({ ...ok, role: 'SA', areaIds: [6] }, { leaders: [] }).leaderId).toBe('Belum ada TL aktif di area ini. Buat akun TL terlebih dahulu.'));
});

describe('alasan & file PKS', () => {
  it('alasan wajib, maks. 255', () => {
    expect(validateReason('  ')).toBe('Informasi wajib diisi');
    expect(validateReason('a'.repeat(256))).toBe('Maksimal 255 karakter');
    expect(validateReason('Resign')).toBeUndefined();
  });
  it('PKS hanya PDF maks. 5 MB', () => {
    expect(validatePksFile({ name: 'pks.png', type: 'image/png', size: 10 })).toBe('Format file harus PDF.');
    expect(validatePksFile({ name: 'pks.pdf', type: 'application/pdf', size: 6 * 1024 * 1024 })).toBe('Ukuran file maksimal 5 MB.');
    expect(validatePksFile(null)).toBeUndefined();
  });
});

describe('format', () => {
  it('normalisasi telepon 0/62', () => {
    expect(normalizePhone('0812-3456-7890')).toBe('81234567890');
    expect(normalizePhone('+62 812 3456 7890')).toBe('81234567890');
  });
  it('format telepon, tanggal WIB, rupiah', () => {
    expect(formatPhone('81234567890')).toBe('+62 812-3456-7890');
    expect(formatDateWIB(new Date('2026-10-02T03:15:00Z'))).toEqual({ date: '02 Okt 2026', time: '10:15 WIB' });
    expect(formatDateTime(new Date('2026-10-02T03:15:00Z'))).toBe('02 Okt 2026, 10:15 WIB');
    expect(formatDateTime(null)).toBe('-');
    expect(formatRp(24000000)).toBe('Rp\u00A024.000.000');
  });
});

describe('passwordPolicy', () => {
  it('semua terpenuhi', () => expect(passwordPolicy('Rahasia123', 'dimas.pratama').every((c) => c.ok)).toBe(true));
  it('menolak username', () => expect(passwordPolicy('Dimas.Pratama1', 'dimas.pratama1').find((c) => c.label === 'Tidak sama dengan username').ok).toBe(false));
});

describe('tier insentif (FSD hlm. 61–62)', () => {
  const sales = { type: 'tierAbove', tiers: [{ above: 120, rate: 1 }, { above: 100, rate: 0.9 }, { above: 85, rate: 0.85 }, { above: 70, rate: 0.7 }, { above: 55, rate: 0.55 }] };
  const mfp = { type: 'tierBelow', tiers: [{ below: 10, rate: 0.1 }, { below: 13, rate: 0.05 }] };
  it('pencapaian > batas', () => {
    expect(tierRate(sales, 121)).toBe(1);
    expect(tierRate(sales, 120)).toBe(0.9);
    expect(tierRate(sales, 55)).toBe(0);
  });
  it('MFP < batas', () => {
    expect(tierRate(mfp, 9.9)).toBe(0.1);
    expect(tierRate(mfp, 12)).toBe(0.05);
    expect(tierRate(mfp, 13)).toBe(0);
  });
});
