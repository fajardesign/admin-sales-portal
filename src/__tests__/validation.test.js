import { describe, expect, it } from 'vitest';
import { passwordPolicy, validatePksFile, validateReason, validateReferralCode, validateUserForm } from '../lib/validation.js';
import { formatDateTime, formatDateWIB, formatDuration, formatPhone, formatRp, formatTimeLocal, normalizePhone } from '../lib/format.js';
import { computeIncentives, currentVisitWeek, findByIdentifier, visitWeekStores, picPhoneTaken, referralTaken, tierFor, tierLabel, verificationGap, visitWeeks, weekStatusLabel } from '../api/mockApi.js';
import { attendance, distanceKm, partners, visits } from '../api/db.js';
import { OFFICES, TIME_ZONES } from '../lib/constants.js';

const ok = { email: 'budi@amarbank.co.id', phone: '081234567890', fullName: 'Budi Santoso', role: 'REVIEWER', tlLevel: '', areaIds: [], leaderId: '' };
const leaders = [{ value: '3', label: 'Hasan Basri' }];

describe('validateUserForm (PRD §3B)', () => {
  it('lolos untuk Admin valid', () => expect(validateUserForm(ok)).toEqual({}));
  it('wajib diisi', () => expect(validateUserForm({ ...ok, email: '', phone: '', fullName: '', role: '' })).toEqual({
    email: 'Informasi wajib diisi', phone: 'Informasi wajib diisi', fullName: 'Informasi wajib diisi', role: 'Informasi wajib diisi',
  }));
  it('format email, telepon, nama', () => {
    expect(validateUserForm({ ...ok, email: 'budi@x' }).email).toBe('Format tidak valid');
    expect(validateUserForm({ ...ok, phone: '0212345678' }).phone).toBe('Format tidak valid');
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

describe('revisi stakeholder 2026-10-08', () => {
  it('kode referral wajib, huruf/angka, maks. 20', () => {
    expect(validateReferralCode('')).toBe('Informasi wajib diisi');
    expect(validateReferralCode('AMR-01')).toBe('Format tidak valid');
    expect(validateReferralCode('A'.repeat(21))).toBe('Maksimal 20 karakter');
    expect(validateReferralCode(' AMR6148 ')).toBeUndefined();
  });
  it('sisa waktu tautan 3x24 jam ditampilkan dalam hari', () => {
    expect(formatDuration(72 * 3600e3)).toBe('3 hari');
    expect(formatDuration(53 * 3600e3 + 10 * 60000)).toBe('2 hari 5 jam');
    expect(formatDuration(20 * 3600e3 + 15 * 60000)).toBe('20 jam 15 menit');
  });
  it('Verifikasi Selesai hanya menunggu dokumen wajib (tanpa verifikasi Data Rekening)', () => {
    const p = { documents: [{ mandatory: true, verification: 'VALID' }, { mandatory: false, verification: 'UNVERIFIED' }], bank: {} };
    expect(verificationGap(p)).toEqual({ count: 0, flagged: 0 });
  });
});

describe('identitas login email atau nomor telepon', () => {
  it('nomor telepon 08/62/+62/8 dianggap sama; username tidak dipakai', () => {
    const rina = findByIdentifier('rina.saraswati@amarbank.co.id');
    expect(rina.fullName).toBe('Rina Saraswati');
    ['0' + rina.phone, '62' + rina.phone, '+62 ' + rina.phone, rina.phone].forEach((id) => expect(findByIdentifier(id)?.id).toBe(rina.id));
    expect(findByIdentifier('rina.saraswati')).toBeUndefined();
  });
});

describe('absensi & kunjungan (revisi stakeholder 2026-10-08)', () => {
  const localMin = (d, a) => { const t = new Date(new Date(d).getTime() + a.utcOffset * 3600e3); return t.getUTCHours() * 60 + t.getUTCMinutes(); };
  it('Tepat Waktu = check in ≤ 10:00 waktu lokal, Terlambat > 10:00', () => {
    attendance.filter((a) => a.clockInAt).forEach((a) => {
      const m = localMin(a.clockInAt, a);
      expect(a.status === 'ON_TIME' ? m <= 600 : m > 600).toBe(true);
    });
  });
  it('jarak check in = jarak dari titik lat/long yang tercatat (kantor OFFICES / lokasi toko), maks. 3 km', () => {
    const stores = partners.flatMap((p) => p.stores);
    attendance.filter((a) => a.place).forEach((a) => {
      const ref = a.place.kind === 'OFFICE' ? OFFICES.find((o) => o.name === a.place.name) : stores.find((x) => x.name === a.place.name);
      expect(a.distanceKm).toBeCloseTo(distanceKm(ref, a), 2);
      expect(a.distanceKm).toBeLessThanOrEqual(3);
    });
    visits.forEach((v) => expect(v.distanceKm).toBeCloseTo(distanceKm(stores.find((x) => x.id === v.storeId), v), 2));
  });
  it('kunjungan mulai 12:00 lokal perangkat, radius 3 km; tiap toko maks. sekali per minggu, boleh >1 toko per hari', () => {
    const seen = new Set();
    let multiPerDay = false;
    const perDay = new Map();
    visits.forEach((v) => {
      expect(localMin(v.checkInAt, v)).toBeGreaterThanOrEqual(720);
      expect(v.distanceKm).toBeLessThanOrEqual(3);
      const d = new Date(`${v.date}T12:00:00Z`); const mon = new Date(d - ((d.getUTCDay() + 6) % 7) * 864e5).toISOString().slice(0, 10);
      const k = `${v.userId}|${v.storeId}|${mon}`;
      expect(seen.has(k)).toBe(false);
      seen.add(k);
      const dk = `${v.userId}|${v.date}`; perDay.set(dk, (perDay.get(dk) ?? 0) + 1); if (perDay.get(dk) > 1) multiPerDay = true;
    });
    expect(multiPerDay).toBe(true);
  });
  it('target mingguan = semua toko yang ditugaskan sekali per minggu, tanpa jumlah hari tetap (review 2026-10-09)', () => {
    const stores = visitWeekStores(11, '2026-09-07');
    expect(stores.flatMap((g) => g.stores).length).toBe(3); // SR Siti: 3 toko di 2 partner
    const w = visitWeeks(11, { from: '2026-09-07', to: '2026-09-12' })[0];
    expect(w).toMatchObject({ start: '2026-09-07', target: 3, closed: true });
    expect(w.complete).toBe(w.visited >= 3);
    const cur = currentVisitWeek(11);
    expect(cur).toMatchObject({ start: '2026-10-05', target: 3, closed: false });
    expect(stores.every((g) => g.visited === g.stores.every((x) => x.visited))).toBe(true);
    expect(weekStatusLabel({ visited: 3, target: 5, complete: false })).toBe('Belum lengkap 3/5');
    expect(weekStatusLabel({ visited: 5, target: 5, complete: true })).toBe('Lengkap 5/5');
  });
  it('zona waktu WIB, WITA, WIT', () => {
    const t = new Date('2026-10-07T01:30:00Z');
    expect(formatTimeLocal(t, { tz: 'WIB', utcOffset: 7 })).toBe('08:30 WIB');
    expect(formatTimeLocal(t, { tz: 'WITA', utcOffset: 8 })).toBe('09:30 WITA');
    expect(formatTimeLocal(t, { tz: 'WIT', utcOffset: TIME_ZONES.WIT })).toBe('10:30 WIT');
  });
  it('minggu masuk periode yang memuat hari Seninnya', () => {
    const ws = visitWeeks(15, { from: '2026-09-01', to: '2026-09-30' });
    expect(ws.map((w) => w.start)).toEqual(['2026-09-07', '2026-09-14', '2026-09-21', '2026-09-28']);
  });
});

describe('Kode Referral unik per partner (review 2026-10-09)', () => {
  it('dibandingkan setelah trim tanpa beda huruf besar/kecil; partner sendiri, Rejected, dan Cancelled tidak dihitung', () => {
    expect(referralTaken(' amr7138 ', 'REG2026-0139')).toBe(true);
    expect(referralTaken('AMR7138', 'REG2026-0138')).toBe(false);
    expect(referralTaken('AMR11135')).toBe(false); // REG2026-0135 Rejected
    expect(referralTaken('AMR10134')).toBe(false); // REG2026-0134 Cancelled
    expect(referralTaken('KODEBARU1')).toBe(false);
  });
});

describe('No. Handphone PIC unik per partner (review 2026-10-09)', () => {
  const pic = (id) => partners.find((p) => p.id === id).pic.phone;
  it('partner lain yang belum Active ikut dihitung; partner sendiri, Rejected, dan Cancelled tidak', () => {
    expect(picPhoneTaken(`0${pic('REG2026-0148')}`, 'REG2026-0139')).toBe(true);
    expect(picPhoneTaken(`+62 ${pic('REG2026-0139')}`, 'REG2026-0139')).toBe(false);
    expect(picPhoneTaken(pic('REG2026-0135'))).toBe(false); // Rejected
    expect(picPhoneTaken(pic('REG2026-0134'))).toBe(false); // Cancelled
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
  const who = { email: 'dimas.pratama1@amarbank.co.id', phone: '81234567890' };
  const rule = (pw) => passwordPolicy(pw, who).find((c) => c.label === 'Tidak sama dengan email atau nomor telepon').ok;
  it('semua terpenuhi', () => expect(passwordPolicy('Rahasia123', who).every((c) => c.ok)).toBe(true));
  it('menolak email atau nomor telepon (format apa pun)', () => {
    expect(rule('Dimas.Pratama1@amarbank.co.id')).toBe(false);
    expect(rule('081234567890')).toBe(false);
    expect(rule('+62 812-3456-7890')).toBe(false);
    expect(rule('Rahasia123')).toBe(true);
  });
});

describe('tier insentif (rentang dari–sampai, PRD v3 §E2)', () => {
  const T = (rows) => ({ tiers: rows.map(([from, to, rate]) => ({ from, to, rate })) });
  const sales = T([[0, 55, 0], [55, 70, 0.55], [70, 85, 0.7], [85, 100, 0.85], [100, 120, 0.9], [120, null, 1]]);
  const mfp = T([[0, 10, 0.1], [10, 13, 0.05], [13, null, 0]]);
  it('batas bawah ikut tier (≥ dari), batas atas tidak (< sampai) (review 2026-10-09)', () => {
    expect(tierFor(sales, 120).rate).toBe(1);
    expect(tierFor(sales, 119.9).rate).toBe(0.9);
    expect(tierFor(sales, 55).rate).toBe(0.55);
    expect(tierFor(sales, 0).rate).toBe(0);
  });
  it('MFP', () => {
    expect(tierFor(mfp, 9.9).rate).toBe(0.1);
    expect(tierFor(mfp, 10).rate).toBe(0.05);
    expect(tierFor(mfp, 12).rate).toBe(0.05);
    expect(tierFor(mfp, 13).rate).toBe(0);
    expect(tierFor(mfp, 13.5).rate).toBe(0);
  });
  it('label tier', () => {
    expect(tierLabel({ from: 0, to: 55 })).toBe('0% s/d < 55%');
    expect(tierLabel({ from: 85, to: 100 })).toBe('85% s/d < 100%');
    expect(tierLabel({ from: 120, to: null })).toBe('≥ 120%');
  });
  it('skema CRP 3% ikut dihitung dari disbursement pinjaman referensi (review 2026-10-09)', () => {
    const crp = computeIncentives(null, '2026-09').filter((r) => r.kind === 'CRP');
    expect(crp.length).toBeGreaterThan(0);
    crp.forEach((r) => expect(r.total).toBeCloseTo(r.paidOutAmount * 0.03, 2));
  });
});
