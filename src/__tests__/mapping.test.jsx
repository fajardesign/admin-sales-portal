// APL Toko Aktif = Partner (B4) + 1.7 Mapping TL digabung (keputusan 2026-10-17). File terpisah karena mengubah data contoh;
// urutan test penting.
const PERIOD = { from: '2026-10-01', to: '2026-10-07', label: 'Okt 2026' };
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';
import { DEFAULT_SCENARIO, setScenario } from '../dev/scenario.js';
import { DEMO_PASSWORD, partners } from '../api/db.js';
import { activateAccount, aplStores, assignTl, createUser, currentVisitWeek, releaseTl, storeTlHistory, tlCandidates } from '../api/mockApi.js';

const T = { timeout: 4000 };
const admin = { userId: 1, name: 'Rina Saraswati', role: 'REVIEWER' };
const hasan = { userId: 3, name: 'Hasan Basri', role: 'APL' };
const lestari = { userId: 4, name: 'Lestari Wulandari', role: 'APL' };
const store = (id) => partners.flatMap((p) => p.stores).find((s) => s.id === id);
const TAMALANREA = 'REG2026-0132-2';

beforeEach(() => { setScenario(DEFAULT_SCENARIO); sessionStorage.clear(); window.location.hash = '/login'; });
afterEach(cleanup);

describe('Toko Aktif APL (API)', () => {
  it('AC-001/003: baris per toko hanya area APL, toko tanpa TL di atas, ringkasan kartu, filter', async () => {
    const r = await aplStores(hasan, [1], PERIOD);
    expect(r.rows.every((x) => x.partner.areaId === 1)).toBe(true);
    expect(r.rows[0]).toMatchObject({ id: TAMALANREA, tlId: null });
    expect(r.rows.find((x) => x.id === 'REG2026-0132-1').partner).toMatchObject({ name: 'PT Bintang Gadget Store', storeCount: 2 });
    expect(r.summary).toMatchObject({ tlUnder: 2, noTl: 1 });
    const l = await aplStores(lestari, [2, 5], PERIOD);
    expect(l.summary.tlUnder).toBe(2);
    expect(l.summary.tlByArea.map((x) => x.count)).toEqual([1, 1]);
    expect((await aplStores(hasan, [1], PERIOD, { tl: 'none' })).rows.map((x) => x.id)).toEqual([TAMALANREA]);
    expect((await aplStores(hasan, [1], PERIOD, { partner: 'REG2026-0139' })).rows.every((x) => x.partner.id === 'REG2026-0139')).toBe(true);
    expect((await aplStores(hasan, [1], PERIOD, { q: 'sudiang' })).rows.map((x) => x.name)).toEqual(['Jaya Abadi Cellular Sudiang']);
  });

  it('AC-007: kandidat hanya TL Active di area toko; TL area lain dan toko area lain ditolak', async () => {
    expect(tlCandidates([TAMALANREA]).options.map((o) => o.value)).toEqual(['6', '22']);
    await expect(assignTl([TAMALANREA], '7', hasan)).rejects.toMatchObject({ code: 'TL_INVALID' });
    await expect(assignTl(['REG2026-0138-1'], '7', hasan)).rejects.toMatchObject({ code: 'FORBIDDEN' });
    await expect(assignTl([TAMALANREA, 'REG2026-0138-1'], '22', hasan)).rejects.toMatchObject({ code: 'MIXED_AREA' });
  });

  it('AC-004/005: tugaskan Bagus; toko yang sudah punya TL ditolak (stale)', async () => {
    const before = currentVisitWeek(22).target;
    await assignTl([TAMALANREA], '22', hasan);
    expect(store(TAMALANREA).tlId).toBe(22);
    expect(currentVisitWeek(22).target).toBe(before); // Q5: target dikunci Senin 00:00 WIB; Bagus mulai minggu depan
    expect(store(TAMALANREA).tlLog.at(-1)).toMatchObject({ to: 22, by: 'Hasan Basri (APL)', source: 'APL' });
    await expect(assignTl([TAMALANREA], '6', hasan)).rejects.toMatchObject({ code: 'STALE', field: 'PT Bintang Gadget Store Tamalanrea' });
  });

  it('AC-008/010: Lepas TL melepas SA/SR juga; riwayat mencatat pelaku dan sumber', async () => {
    const s = store('REG2026-0139-1'); // TL Andi, SA Eko
    expect(s.assigned.length).toBe(1);
    await releaseTl(s.id, hasan);
    expect(s.tlId).toBeNull();
    expect(s.assigned).toEqual([]);
    const h = storeTlHistory(s.id);
    expect(h[0]).toMatchObject({ by: 'Hasan Basri (APL)' });
    expect(h.map((e) => e.source)).toEqual(expect.arrayContaining(['dilepas APL', 'TL dilepas']));
  });

  it('AC-011: dua APL di satu area saat serah terima, keduanya bisa menugaskan', async () => {
    const { user: dewi } = await createUser({ email: 'dewi.apl@amarbank.co.id', phone: '81299990001', fullName: 'Dewi Anggraini', role: 'APL', areaIds: [1] }, admin);
    await expect(assignTl(['REG2026-0139-1'], '6', { userId: dewi.id, name: 'Dewi Anggraini', role: 'APL' })).rejects.toMatchObject({ code: 'FORBIDDEN' }); // masih Pending
    await activateAccount(dewi.id, 'Rahasia#2026');
    await assignTl(['REG2026-0139-1'], '6', { userId: dewi.id, name: 'Dewi Anggraini', role: 'APL' });
    expect(store('REG2026-0139-1').tlLog.at(-1).by).toBe('Dewi Anggraini (APL)');
  });
});

describe('Toko Aktif APL (UI)', () => {
  it('pilih toko tanpa TL, Tugaskan TL lewat bilah pilihan, toast', async () => {
    await releaseTl('REG2026-0139-1', hasan); // test API di atas sudah mengisi semua toko contoh
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByPlaceholderText('nama@amarbank.co.id atau 08123456789'), 'hasan.basri@amarbank.co.id');
    await user.type(screen.getByPlaceholderText('••••••••'), DEMO_PASSWORD);
    await user.click(screen.getByRole('button', { name: 'Masuk' }));
    await screen.findByText(/Penjualan ·/, {}, T);
    window.location.hash = '/apl/toko-aktif?tl=none';
    expect(await screen.findByText('Toko belum ada TL', {}, T)).toBeTruthy();
    const pick = await screen.findByLabelText('Pilih Jaya Abadi Cellular', {}, T);
    await user.click(within(pick).getByRole('checkbox'));
    expect(screen.getByText('1 toko dipilih')).toBeTruthy();
    const bar = screen.getByRole('region', { name: 'Toko dipilih' });
    await user.click(within(bar).getByRole('button', { name: 'Tugaskan TL' }));
    const dlg = await screen.findByRole('dialog', {}, T);
    expect(within(dlg).getByText('Hanya TL aktif di area Makassar yang bisa dipilih.')).toBeTruthy();
    await user.click(within(dlg).getByRole('button', { name: 'Pilih TL' }));
    const opts = await screen.findAllByText('Bagus Wicaksono');
    await user.click(opts[opts.length - 1]);
    await user.click(within(dlg).getByRole('button', { name: 'Tugaskan' }));
    expect(await screen.findByText('Bagus Wicaksono ditugaskan ke 1 toko. Notifikasi dikirim ke aplikasi mobile.', {}, T)).toBeTruthy();
    expect(store('REG2026-0139-1').tlId).toBe(22);
  });
});
