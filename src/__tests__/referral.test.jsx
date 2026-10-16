// Kode Referral per toko (PRD Scope 1 v2 C2: FR-019, FR-010, FR-015; OQ-25/OQ-26 keputusan 2026-10-16).
// File terpisah karena mengubah data contoh; vitest mengisolasi modul per file.
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';
import { DEFAULT_SCENARIO, setScenario } from '../dev/scenario.js';
import { DEMO_PASSWORD, partners } from '../api/db.js';
import { adminHome, changeStatus, listPartners, setStoreReferral } from '../api/mockApi.js';

const T = { timeout: 4000 };
const admin = { userId: 1, name: 'Rina Saraswati', role: 'REVIEWER' };
const find = (id) => partners.find((p) => p.id === id);

beforeEach(() => { setScenario(DEFAULT_SCENARIO); sessionStorage.clear(); window.location.hash = '/login'; });
afterEach(cleanup);

describe('Kode Referral per toko (API)', () => {
  it('AC-025: disimpan huruf besar per toko, tercatat, bisa dicari; kode yang sama di toko lain ditolak; format salah ditolak', async () => {
    const p = find('REG2026-0147'); // Under Review
    expect(p.stores.every((s) => !s.referralCode)).toBe(true);
    await setStoreReferral(p.id, p.stores[0].id, ' ofsas001 ', '', admin);
    expect(p.stores[0].referralCode).toBe('OFSAS001');
    expect(p.history.at(-1).reason).toContain('Kode referral');
    expect((await listPartners({ q: 'OFSAS001' })).rows.map((r) => r.id)).toEqual([p.id]);
    await expect(setStoreReferral('REG2026-0146', 'REG2026-0146-1', 'OFSAS001', '', admin)).rejects.toMatchObject({ code: 'DUPLICATE' });
    for (const bad of ['SAS001', 'OF-SAS!', `OF${'A'.repeat(19)}`]) {
      await expect(setStoreReferral('REG2026-0146', 'REG2026-0146-1', bad, '', admin)).rejects.toMatchObject({ code: 'FORMAT' });
    }
  });

  it('AC-029: Active + kode lama wajib alasan; Rejected/Cancelled/Inactive hanya baca; Verifikasi tidak butuh kode', async () => {
    const s = find('REG2026-0139').stores[0];
    await expect(setStoreReferral('REG2026-0139', s.id, 'OFMKS9001', '', admin)).rejects.toMatchObject({ code: 'REASON_REQUIRED' });
    await setStoreReferral('REG2026-0139', s.id, 'OFMKS9001', 'Kode diganti di AppsFlyer', admin);
    expect(s.referralCode).toBe('OFMKS9001');
    for (const id of ['REG2026-0135', 'REG2026-0134', 'REG2026-0133']) {
      await expect(setStoreReferral(id, `${id}-1`, 'OFBARU9', '', admin)).rejects.toMatchObject({ code: 'CONFLICT' });
    }
    // REG2026-0148 Under Review tanpa kode, dokumen wajib belum valid semua: Verify tidak dicek terhadap kode referral.
    expect(find('REG2026-0148').stores.every((s2) => !s2.referralCode)).toBe(true);
  });

  it('AC-030: hanya Admin', async () => {
    await expect(setStoreReferral('REG2026-0147', 'REG2026-0147-1', 'OFTL01', '', { userId: 6, name: 'Andi Pratama', role: 'TL' })).rejects.toMatchObject({ code: 'FORBIDDEN' });
  });

  it('OQ-26: kode partner Rejected boleh dipakai ulang; kode partner Inactive tidak', async () => {
    await setStoreReferral('REG2026-0146', 'REG2026-0146-1', 'OFMKS1351', '', admin); // dari REG2026-0135 Rejected
    await expect(setStoreReferral('REG2026-0145', 'REG2026-0145-1', 'OFSBY1331', '', admin)).rejects.toMatchObject({ code: 'DUPLICATE' }); // Inactive
  });

  it('AC-028: aktivasi ditolak bila ada toko tanpa kode; status tetap Waiting PKS', async () => {
    await expect(changeStatus('REG2026-0140', 'ACTIVE', {}, admin)).rejects.toMatchObject({ code: 'REFERRAL_MISSING' });
    expect(find('REG2026-0140').status).toBe('WAITING_PKS');
    expect(find('REG2026-0140').merchantCode).toBeNull();
  });

  it('OQ-25: toko baru setelah Active menunggu kode, lalu aktif setelah diisi; Beranda menghitungnya', async () => {
    const p = find('REG2026-0139'); const s = p.stores[3];
    expect(s.status).toBe('WAITING_REFERRAL');
    expect(s.tlId).toBe(22);
    expect((await adminHome()).referral.waiting).toBe(1);
    await setStoreReferral(p.id, s.id, 'OFMKS1394', '', admin);
    expect(s.status).toBe('ACTIVE');
    expect(s.code).toBe('TK0139-04');
    expect((await adminHome()).referral.waiting).toBe(0);
  });
});

describe('Kode Referral (UI)', () => {
  it('menu Kode Referral: tab Perlu diisi, isi kode toko dari tabel, toast', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByPlaceholderText('nama@amarbank.co.id atau 08123456789'), 'rina.saraswati@amarbank.co.id');
    await user.type(screen.getByPlaceholderText('••••••••'), DEMO_PASSWORD);
    await user.click(screen.getByRole('button', { name: 'Masuk' }));
    await screen.findByText(/Menunggu review/, {}, T); // Beranda terbuka setelah login
    window.location.hash = '/kode-referral?q=Anugerah';
    const fill = await screen.findByRole('button', { name: 'Isi kode' }, T);
    expect(document.body.textContent).toContain('Kode referral wajib diisi'); // Waiting PKS tanpa kode (SCR-07)
    await user.click(fill);
    expect(screen.getByRole('tab', { name: /Perlu diisi/ })).toBeTruthy();
    expect(document.body.textContent).toContain('Anugerah Gadget');
    await user.type(screen.getByPlaceholderText('Masukkan kode dari AppsFlyer'), 'OFSBY1401');
    await user.click(screen.getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Kode referral disimpan.', {}, T)).toBeTruthy();
    expect(find('REG2026-0140').stores[0].referralCode).toBe('OFSBY1401');
  });
});
