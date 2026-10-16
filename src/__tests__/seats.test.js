// Kursi TL dan SA/SR per toko (PRD Scope 1 v1.1 C6: FR-010 aktivasi, FR-013 Inactive, FR-021 Ubah Area).
// File terpisah karena mengubah data contoh; vitest mengisolasi modul per file.
import { describe, expect, it } from 'vitest';
import { partners, users } from '../api/db.js';
import { areaChangeImpact, changePartnerArea, changeStatus, disableUser, setStoreReferral } from '../api/mockApi.js';

const admin = { userId: 1, name: 'Rina Saraswati', role: 'REVIEWER' };
const find = (id) => partners.find((p) => p.id === id);
const png = { name: 'qr.png', size: 10, type: 'image/png', url: 'data:' };
async function activate(p, code) {
  p.documents.forEach((d) => { if (d.file) d.verification = 'VALID'; });
  if (p.status === 'UNDER_REVIEW') await changeStatus(p.id, 'VERIFIED', {}, admin);
  if (p.status === 'VERIFIED') await changeStatus(p.id, 'WAITING_PKS', { via: 'EMAIL_PIC' }, admin);
  for (const [i, s] of p.stores.entries()) await setStoreReferral(p.id, s.id, `${code}${i}`, png, '', admin);
  await changeStatus(p.id, 'ACTIVE', {}, admin);
}

describe('Kursi per toko', () => {
  it('AC-032: aktivasi mengisi kursi TL dengan TL pengaju; kursi SA/SR kosong', async () => {
    const p = find('REG2026-0142'); // Verified, diajukan TL Andi (6)
    expect(p.stores.every((s) => s.tlId == null)).toBe(true); // partner di pipeline belum punya kursi
    await activate(p, 'PRIMA');
    expect(p.stores.every((s) => s.tlId === 6 && s.assigned.length === 0)).toBe(true);
    expect(p.stores[0].tlLog.at(-1)).toMatchObject({ to: 6, by: 'Sistem', source: 'aktivasi' });
  });

  it('AC-032: SR pengaju tidak memegang toko; atasan SR Disabled → "Belum ada TL"', async () => {
    const p = find('REG2026-0146'); // diajukan SR Siti (11), atasan Andi (6)
    await disableUser(6, 'Resign', admin, { defaultLeaderId: '22' }); // Siti pindah ke Bagus
    users.find((u) => u.id === 11).supervisorId = 6; // skenario: atasan SR sudah Disabled saat aktivasi
    await activate(p, 'BERKAH');
    expect(p.stores.every((s) => s.tlId == null && s.assigned.length === 0)).toBe(true);
  });

  it('AC-019: partner Inactive melepas semua kursi TL dan SA/SR', async () => {
    const p = find('REG2026-0138'); // Bandung, toko dengan TL Budi dan SA/SR
    expect(p.stores.some((s) => s.tlId != null && s.assigned.length)).toBe(true);
    await changeStatus(p.id, 'INACTIVE', { reason: 'Berhenti kerja sama' }, admin);
    expect(p.stores.every((s) => s.tlId == null && s.assigned.length === 0)).toBe(true);
    expect(p.history.some((h) => h.by === 'Sistem' && h.reason?.includes('(partner nonaktif)'))).toBe(true);
  });

  it('AC-033: Ubah Area melepas semua kursi dengan peringatan jumlahnya; alasan wajib', async () => {
    const p = find('REG2026-0131'); // Bandung, 1 toko dengan TL dan SR
    expect(areaChangeImpact(p.id)).toEqual({ stores: 1, seats: 2 });
    await expect(changePartnerArea(p.id, 1, '', admin)).rejects.toMatchObject({ code: 'REASON_REQUIRED' });
    await expect(changePartnerArea(p.id, 2, 'x', admin)).rejects.toMatchObject({ code: 'CONFLICT' }); // area sama
    await changePartnerArea(p.id, 1, 'Partner pindah ke Makassar', admin);
    expect(p.areaId).toBe(1);
    expect(p.stores[0].tlId).toBeNull();
    expect(p.stores[0].assigned).toEqual([]);
  });
});
