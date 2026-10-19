// Toko berpindah tangan: masa lalu tetap milik orang pada tanggalnya (perbaikan tertunda 2026-10-13, dikerjakan 2026-10-14).
// File terpisah karena mengubah data contoh; vitest mengisolasi modul per file.
import { describe, expect, it } from 'vitest';
import { loans, partners } from '../api/db.js';
import { changeStatus, computeIncentives, disableUser, visitWeekStores, visitWeeks } from '../api/mockApi.js';

const admin = { userId: 1, name: 'Rina Saraswati', role: 'REVIEWER' };
const lastWeek = { from: '2026-09-28', to: '2026-10-04' };
const thisWeek = { from: '2026-10-05', to: '2026-10-07' };
const salesRow = (id) => computeIncentives(null, '2026-10').find((r) => r.kind === 'SALES' && r.id === id);

describe('Riwayat pemegang toko', () => {
  it('SA dinonaktifkan: penjualan, insentif, minggu lalu, dan target minggu berjalan (dikunci Senin 00:00 WIB, Q5) tetap', async () => {
    const sold = loans.filter((l) => l.salesId === 16).map((l) => l.id);
    const incentive = salesRow(16);
    const past = visitWeeks(16, lastWeek);
    const cur = visitWeeks(16, thisWeek)[0].target;
    expect(past[0].target).toBeGreaterThan(0);

    await disableUser(16, 'Resign', admin);
    expect(loans.filter((l) => l.salesId === 16).map((l) => l.id)).toEqual(sold);
    expect(salesRow(16)).toEqual(incentive);
    expect(visitWeeks(16, lastWeek)).toEqual(past);
    expect(visitWeeks(16, thisWeek)[0].target).toBe(cur);
    expect(visitWeekStores(16, '2026-10-12')).toEqual([]); // minggu depan tanpa toko
  });

  it('TL dinonaktifkan: minggu lalu TL lama dan TL pengganti tidak berubah', async () => {
    const andi = visitWeeks(6, lastWeek);
    const bagus = visitWeeks(22, lastWeek);
    expect(andi[0].target).toBeGreaterThan(0);

    await disableUser(6, 'Resign', admin, { defaultLeaderId: '22' });
    expect(visitWeeks(6, lastWeek)).toEqual(andi);
    expect(visitWeeks(22, lastWeek)).toEqual(bagus);
  });

  it('partner Inactive: minggu lalu SA/SR yang memegang tokonya tidak berubah', async () => {
    const p = partners.find((x) => x.status === 'ACTIVE' && x.stores.some((s) => s.assigned.includes(17)));
    const past = visitWeeks(17, lastWeek);
    expect(past[0].target).toBeGreaterThan(0);

    await changeStatus(p.id, 'INACTIVE', { reason: 'Berhenti kerja sama' }, admin);
    expect(visitWeeks(17, lastWeek)).toEqual(past);
  });
});
