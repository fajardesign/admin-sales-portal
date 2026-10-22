// PRD Scope 3 (3.0): aturan hitung diuji dengan contoh di PRD ("Worked examples"). File terpisah karena mengubah data contoh.
import { beforeEach, describe, expect, it } from 'vitest';
import { DEFAULT_SCENARIO, setScenario } from '../dev/scenario.js';
import { loans, s3Config } from '../api/db.js';
import {
  achievementBand, calcPartner, calcSales, configFor, correctionDeadline, countsFor, lockDate, markPaid, monthStatus, payoutDate,
  pipeline, portalStatus, salesRow, salesRows, setCorrection, tierOf,
} from '../api/scope3.js';

const admin = { userId: 1, name: 'Rina Saraswati', role: 'REVIEWER' };
const sales = () => configFor('sales', '2026-09');
const fee = () => configFor('fee', '2026-09');
const SBY = 4; const JKT = 5;

beforeEach(() => setScenario(DEFAULT_SCENARIO));

describe('Insentif sales (PRD Worked examples)', () => {
  it('SA 90 jt dari 100 jt = 90% → 0,85% → Rp 765.000', () => {
    expect(calcSales(sales(), fee(), 'SA', { actual: 90e6, validDays: 0, areaId: SBY })).toMatchObject({ achievement: 90, coefficient: 0.85, incentive: 765000 });
  });
  it('SR tepat 180 jt dari 150 jt = 120% → tier > 100–120% (0,90%) → Rp 1.620.000', () => {
    expect(calcSales(sales(), fee(), 'SR', { actual: 180e6, validDays: 0, areaId: SBY })).toMatchObject({ achievement: 120, coefficient: 0.9, incentive: 1620000 });
  });
  it('TL 1,2 M dari 1,5 M = 80% → 0,23% → Rp 2.760.000', () => {
    expect(calcSales(sales(), fee(), 'TL', { actual: 1.2e9, validDays: 0, areaId: SBY })).toMatchObject({ achievement: 80, coefficient: 0.23, incentive: 2760000 });
  });
  it('batas tier "> dari, ≤ sampai": tepat 100% masuk 85–100%, tepat 55% = 0%', () => {
    expect(tierOf(sales().tiers.SALES, 100).rate).toBe(0.85);
    expect(tierOf(sales().tiers.SALES, 100.0001).rate).toBe(0.9);
    expect(tierOf(sales().tiers.SALES, 55).rate).toBe(0);
  });
  it('"Butuh Rp x lagi": SA 90 jt butuh 10.000.001 untuk > 100%', () => {
    const r = calcSales(sales(), fee(), 'SA', { actual: 90e6, validDays: 0, areaId: SBY });
    expect(r.next).toMatchObject({ needed: 10000001 });
    expect(r.next.tier.rate).toBe(0.9);
  });
  it('status capaian: Tercapai ≥ 100, On Track 70–99,9, Berisiko < 70', () => {
    expect([achievementBand(100), achievementBand(99.9), achievementBand(70), achievementBand(69.9)]).toEqual(['TERCAPAI', 'ON_TRACK', 'ON_TRACK', 'BERISIKO']);
  });
});

describe('Gaji pokok (PRD Daily fee illustration)', () => {
  it('SA Surabaya 23 hari valid, 300% → 23 × 120.000 × 2 = 5.520.000; insentif 3.000.000; take home pay 8.520.000', () => {
    expect(calcSales(sales(), fee(), 'SA', { actual: 300e6, validDays: 23, areaId: SBY })).toMatchObject({ basicSalary: 5520000, incentive: 3000000, takeHomePay: 8520000, multiplierApplies: true });
  });
  it('SA yang sama 90% → tanpa multiplier: 2.760.000 + 765.000 = 3.525.000', () => {
    expect(calcSales(sales(), fee(), 'SA', { actual: 90e6, validDays: 23, areaId: SBY })).toMatchObject({ basicSalary: 2760000, takeHomePay: 3525000, multiplierApplies: false });
  });
  it('tepat 100% tidak memicu multiplier (harus di atas 100%)', () => {
    expect(calcSales(sales(), fee(), 'SA', { actual: 100e6, validDays: 10, areaId: SBY }).multiplierApplies).toBe(false);
  });
  it('maks. 26 hari dibayar', () => {
    expect(calcSales(sales(), fee(), 'SR', { actual: 0, validDays: 30, areaId: SBY })).toMatchObject({ paidDays: 26, capped: true, basicSalary: 26 * 120000 });
  });
  it('daily fee per area: Jakarta SA Rp 130.000 → 23 hari = 2.990.000, Surabaya tetap 2.760.000', () => {
    const f = structuredClone(fee()); f.fees[JKT].SA = 130000;
    expect(calcSales(sales(), f, 'SA', { actual: 0, validDays: 23, areaId: JKT }).basicSalary).toBe(2990000);
    expect(calcSales(sales(), f, 'SA', { actual: 0, validDays: 23, areaId: SBY }).basicSalary).toBe(2760000);
  });
  it('TL: daily fee 200.000, multiplier juga berlaku untuk TL', () => {
    expect(calcSales(sales(), fee(), 'TL', { actual: 1.6e9, validDays: 20, areaId: SBY })).toMatchObject({ dailyFee: 200000, basicSalary: 8000000, multiplierApplies: true });
  });
});

describe('Insentif partner (PRD Worked example)', () => {
  it('target 500 jt, 450 jt = 90% → 0,20% → Rp 900.000', () => {
    expect(calcPartner(configFor('partner', '2026-09'), { actual: 450e6, target: 500e6 })).toMatchObject({ achievement: 90, coefficient: 0.2, incentive: 900000 });
  });
});

describe('Bulan kinerja, status bulan, dan pipeline', () => {
  it('dihitung hanya bila diajukan dan cair di bulan yang sama (WIB)', () => {
    const l = { status: 'PAID_OUT', amount: 1e7, submittedAt: new Date('2026-09-28T10:00:00+07:00'), paidOutAt: new Date('2026-09-30T10:00:00+07:00') };
    expect(countsFor(l, '2026-09')).toBe(true);
    const late = { ...l, submittedAt: new Date('2026-09-30T10:00:00+07:00'), paidOutAt: new Date('2026-10-02T10:00:00+07:00') };
    expect(countsFor(late, '2026-09')).toBe(false);
    expect(countsFor(late, '2026-10')).toBe(false);
  });
  it('4 status portal dari status LMS', () => {
    expect(['SUBMITTED', 'IN_PROCESS', 'APPROVED', 'REJECTED', 'PAID_OUT', 'X'].map((s) => portalStatus({ status: s }))).toEqual(['DIAJUKAN', 'DIAJUKAN', 'DISETUJUI', 'DITOLAK', 'CAIR', 'DIAJUKAN']);
  });
  it('hari ini 7 Okt: Oktober Berjalan, September Final (lock 5 Okt), jadwal bayar sales 10 Okt dan partner 15 Okt', () => {
    expect(monthStatus('2026-10')).toBe('BERJALAN');
    expect(lockDate('2026-09')).toBe('2026-10-05');
    expect(monthStatus('2026-09')).toBe('FINAL');
    expect([payoutDate('2026-09'), payoutDate('2026-09', 'PARTNER')]).toEqual(['2026-10-10', '2026-10-15']);
  });
  it('batas koreksi TL: akhir minggu berikutnya atau sebelum lock, mana yang lebih dulu', () => {
    expect(correctionDeadline('2026-09-01')).toBe('2026-09-13');
    expect(correctionDeadline('2026-09-29')).toBe('2026-10-04');
  });
  it('pipeline: funnel = jumlah pinjaman bulan itu; Cair beda bulan ditandai tidak dihitung', async () => {
    const p = await pipeline('2026-09', {}, {}, { retry: true });
    expect(Object.values(p.funnel).reduce((a, x) => a + x.count, 0)).toBe(p.total);
    expect(p.countedAmount).toBe(loans.filter((l) => countsFor(l, '2026-09')).reduce((a, l) => a + l.amount, 0));
    expect(p.rows.filter((r) => r.paidLater).every((r) => r.portalStatus === 'CAIR' && !r.counted)).toBe(true);
  });
});

describe('Baris sales, visibilitas, dan pembayaran', () => {
  it('TL melihat dirinya + SA/SR yang dipimpin; SA hanya dirinya', async () => {
    const tl = await salesRows('2026-09', { leaderId: 6 }, { retry: true });
    expect(tl.rows.every((r) => r.userId === 6 || r.leaderId === 6)).toBe(true);
    expect(tl.rows.some((r) => r.userId === 11)).toBe(true);
    expect((await salesRows('2026-09', { userId: 11 }, { retry: true })).rows.map((r) => r.userId)).toEqual([11]);
  });
  it('hari valid = check in dan check out; take home pay = gaji pokok + insentif', () => {
    const r = salesRow(11, '2026-09');
    expect(r.takeHomePay).toBe(r.basicSalary + r.incentive);
    expect(r.validDays).toBeGreaterThan(0);
    expect(r.validDays).toBeLessThanOrEqual(30);
  });
  it('Agustus sudah dibayar (dengan koreksi contoh); September Menunggu pembayaran', () => {
    expect(salesRow(11, '2026-08').payment).toMatchObject({ status: 'DIBAYAR', correction: 150000, paidAt: '2026-09-10' });
    expect(salesRow(11, '2026-09').payment.status).toBe('MENUNGGU');
    expect(salesRow(11, '2026-10').payment).toBeNull();
  });
  it('koreksi lalu tandai dibayar; Dibayar final; tandai ulang = STALE', async () => {
    const before = salesRow(11, '2026-09');
    const p = await setCorrection('SALES', 11, '2026-09', 50000, 'Koreksi Agustus 2026', admin);
    expect(p.amountToPay).toBe(before.takeHomePay + 50000);
    await expect(setCorrection('SALES', 11, '2026-09', -(before.takeHomePay + 1), '', admin)).rejects.toMatchObject({ code: 'NEGATIVE' });
    await markPaid('2026-09', [{ kind: 'SALES', id: 11 }], '2026-10-10', admin);
    expect(salesRow(11, '2026-09').payment).toMatchObject({ status: 'DIBAYAR', paidAmount: before.takeHomePay + 50000 });
    await expect(markPaid('2026-09', [{ kind: 'SALES', id: 11 }], '2026-10-10', admin)).rejects.toMatchObject({ code: 'STALE' });
    await expect(setCorrection('SALES', 11, '2026-09', 0, '', admin)).rejects.toMatchObject({ code: 'STALE' });
    await expect(markPaid('2026-10', [{ kind: 'SALES', id: 6 }], '2026-10-10', admin)).rejects.toMatchObject({ code: 'CONFLICT' });
  });
  it('baris Final dibekukan: perubahan konfigurasi tidak mengubah September', () => {
    const before = salesRow(6, '2026-09').takeHomePay;
    s3Config.fee[0].fees[1].TL = 999999;
    expect(salesRow(6, '2026-09').takeHomePay).toBe(before);
    s3Config.fee[0].fees[1].TL = 200000;
  });
});
