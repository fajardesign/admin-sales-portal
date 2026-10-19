// Kode Referral + QR per toko (PRD Scope 1 v1.1 C2: FR-019, FR-010, FR-015; C7 Permintaan tambah toko; OQ-26).
// File terpisah karena mengubah data contoh; vitest mengisolasi modul per file.
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';
import { DEFAULT_SCENARIO, setScenario } from '../dev/scenario.js';
import { DEMO_PASSWORD, partners } from '../api/db.js';
import { adminHome, changeStatus, listPartners, setStoreReferral, uploadPks } from '../api/mockApi.js';

const T = { timeout: 4000 };
const admin = { userId: 1, name: 'Rina Saraswati', role: 'REVIEWER' };
const find = (id) => partners.find((p) => p.id === id);
const png = (name = 'qr.png', size = 2048) => ({ name, size, type: 'image/png', url: 'data:image/png;base64,AA==' });

beforeEach(() => { setScenario(DEFAULT_SCENARIO); sessionStorage.clear(); window.location.hash = '/login'; });
afterEach(cleanup);

describe('Kode Referral + QR per toko (API)', () => {
  it('AC-025: huruf besar per toko + QR, tercatat, bisa dicari; duplikat, format salah, dan tanpa QR ditolak', async () => {
    const p = find('REG2026-0147'); // Under Review
    expect(p.stores.every((s) => !s.referralCode && !s.referralQr)).toBe(true);
    await expect(setStoreReferral(p.id, p.stores[0].id, 'PARCEL01', null, '', admin)).rejects.toMatchObject({ code: 'QR_REQUIRED' });
    await setStoreReferral(p.id, p.stores[0].id, ' parcel01 ', png(), '', admin);
    expect(p.stores[0].referralCode).toBe('PARCEL01');
    expect(p.stores[0].referralQr.name).toBe('qr.png');
    expect(p.history.at(-1).reason).toContain('QR qr.png');
    expect((await listPartners({ q: 'PARCEL01' })).rows.map((r) => r.id)).toEqual([p.id]);
    await expect(setStoreReferral('REG2026-0146', 'REG2026-0146-1', 'PARCEL01', png(), '', admin)).rejects.toMatchObject({ code: 'DUPLICATE' });
    for (const bad of ['PAR-CEL', `T${'1'.repeat(20)}`]) {
      await expect(setStoreReferral('REG2026-0146', 'REG2026-0146-1', bad, png(), '', admin)).rejects.toMatchObject({ code: 'FORMAT' });
    }
    await expect(setStoreReferral('REG2026-0146', 'REG2026-0146-1', 'T1225009', { ...png(), name: 'qr.gif', type: 'image/gif' }, '', admin)).rejects.toMatchObject({ code: 'QR_TYPE' });
    await expect(setStoreReferral('REG2026-0146', 'REG2026-0146-1', 'T1225009', png('qr.png', 3 * 1024 * 1024), '', admin)).rejects.toMatchObject({ code: 'QR_SIZE' });
  });

  it('AC-029: Active + ubah kode wajib alasan dan QR baru; Rejected/Cancelled/Inactive hanya baca', async () => {
    const s = find('REG2026-0139').stores[0];
    await expect(setStoreReferral('REG2026-0139', s.id, 'OLALA001', null, 'Kode diganti', admin)).rejects.toMatchObject({ code: 'QR_NEW_REQUIRED' });
    await expect(setStoreReferral('REG2026-0139', s.id, 'OLALA001', png(), '', admin)).rejects.toMatchObject({ code: 'REASON_REQUIRED' });
    await setStoreReferral('REG2026-0139', s.id, 'OLALA001', png('qr_olala.png'), 'Kode diganti', admin);
    expect(s.referralCode).toBe('OLALA001');
    for (const id of ['REG2026-0135', 'REG2026-0134', 'REG2026-0133']) {
      await expect(setStoreReferral(id, `${id}-1`, 'BARU9', png(), '', admin)).rejects.toMatchObject({ code: 'CONFLICT' });
    }
  });

  it('AC-030: hanya Admin', async () => {
    await expect(setStoreReferral('REG2026-0147', 'REG2026-0147-1', 'TL01', png(), '', { userId: 6, name: 'Andi Pratama', role: 'TL' })).rejects.toMatchObject({ code: 'FORBIDDEN' });
  });

  it('OQ-26: kode partner Rejected boleh dipakai ulang; kode partner Inactive tidak', async () => {
    await setStoreReferral('REG2026-0146', 'REG2026-0146-1', 'OFMKS1351', png(), '', admin); // dari REG2026-0135 Rejected
    await expect(setStoreReferral('REG2026-0145', 'REG2026-0145-1', 'OFSBY1331', png(), '', admin)).rejects.toMatchObject({ code: 'DUPLICATE' }); // Inactive
  });

  it('AC-028: aktivasi ditolak bila ada toko tanpa kode atau QR; status tetap Waiting PKS', async () => {
    await expect(changeStatus('REG2026-0140', 'ACTIVE', {}, admin)).rejects.toMatchObject({ code: 'REFERRAL_MISSING' });
    expect(find('REG2026-0140').status).toBe('WAITING_PKS');
    expect(find('REG2026-0140').merchantCode).toBeNull();
  });

  it('AC-034: Permintaan tambah toko aktif setelah kode + QR, tanpa TL; Beranda menghitungnya', async () => {
    const p = find('REG2026-0139'); const s = p.stores[3];
    expect(s.status).toBe('WAITING_REFERRAL');
    expect(s.tlId).toBeNull();
    expect((await adminHome()).referral.waiting).toBe(1);
    await setStoreReferral(p.id, s.id, 'PARCEL04', png(), '', admin);
    expect(s.status).toBe('ACTIVE');
    expect(s.code).toBe('TK0139-04');
    expect(s.tlId).toBeNull(); // muncul sebagai "Belum ada TL" untuk APL (1.7)
    expect((await adminHome()).referral.waiting).toBe(0);
  });
});

describe('Dokumen PKS berversi (FR-024)', () => {
  it('AC-031: ganti dokumen PKS saat Active wajib alasan; versi lama tersimpan', async () => {
    const p = find('REG2026-0139');
    const old = p.pks.file.name;
    await expect(uploadPks(p.id, { name: 'pks_adendum.pdf' }, admin, '')).rejects.toMatchObject({ code: 'REASON_REQUIRED' });
    await uploadPks(p.id, { name: 'pks_adendum.pdf' }, admin, 'Adendum');
    expect(p.pks.file.name).toBe('pks_adendum.pdf');
    expect(p.pks.versions[0]).toMatchObject({ name: old, reason: 'Adendum' });
    expect(p.history.at(-1).reason).toContain('Dokumen PKS diganti');
    await expect(uploadPks('REG2026-0140', { name: 'x.pdf' }, admin, '')).rejects.toMatchObject({ code: 'CONFLICT' }); // bukan Active
  });
});

describe('Toko Aktif (UI)', () => {
  it('ringkasan, pengingat kuning membuka tab Permintaan tambah toko (per partner), isi kode + QR lewat modal', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByPlaceholderText('nama@amarbank.co.id atau 08123456789'), 'rina.saraswati@amarbank.co.id');
    await user.type(screen.getByPlaceholderText('••••••••'), DEMO_PASSWORD);
    await user.click(screen.getByRole('button', { name: 'Masuk' }));
    await screen.findByText(/Menunggu review/, {}, T);
    const p = find('REG2026-0137');
    p.stores.push({ ...p.stores[1], id: 'REG2026-0137-3', name: 'Galaxy Phone Center Kemang', code: null, referralCode: null, referralQr: null, status: 'WAITING_REFERRAL', assigned: [], tlId: null });
    window.location.hash = '/toko-aktif';
    expect(await screen.findByText('Jumlah toko', {}, T)).toBeTruthy();
    expect(screen.getByText('Jumlah TL')).toBeTruthy();
    expect(screen.getByText('Belum ditugaskan ke SA/SR')).toBeTruthy();
    await user.click(await screen.findByRole('button', { name: 'Lihat permintaan' }, T));
    await waitFor(() => expect(window.location.hash).toContain('tab=permintaan'));
    expect(await screen.findByText('Galaxy Phone Center Kemang', {}, T)).toBeTruthy();
    expect(screen.getAllByText(/1 permintaan/).length).toBeGreaterThan(0);
    expect(screen.queryByText('Jumlah toko')).toBeNull();
    const row = screen.getByText('Galaxy Phone Center Kemang').closest('tr');
    await user.click(within(row).getByRole('button', { name: 'Isi kode & aktifkan' }));
    const dlg = await screen.findByRole('dialog', {}, T);
    expect(within(dlg).getByText('Isi kode referral dan aktifkan toko')).toBeTruthy();
    await user.type(within(dlg).getByPlaceholderText('Masukkan kode referral'), 't1225009');
    await user.click(within(dlg).getByRole('button', { name: 'Simpan & aktifkan' }));
    expect(within(dlg).getByText('QR wajib diunggah')).toBeTruthy();
    await user.upload(dlg.querySelector('input[type="file"]'), new File(['qr'], 'qr_t1225009.png', { type: 'image/png' }));
    await user.click(within(dlg).getByRole('button', { name: 'Simpan & aktifkan' }));
    expect(await screen.findByText('Toko aktif. Menunggu penugasan TL oleh APL.', {}, T)).toBeTruthy();
    expect(p.stores[2].status).toBe('ACTIVE');
    expect(p.stores[2].referralCode).toBe('T1225009');
  });
});
