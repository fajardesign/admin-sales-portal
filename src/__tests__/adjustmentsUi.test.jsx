// Penyesuaian pasca handover (2026-10-19), UI: batalkan permintaan, ubah lokasi toko, koreksi absensi TL di APL.
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';
import { DEFAULT_SCENARIO, setScenario } from '../dev/scenario.js';
import { DEMO_PASSWORD, partners } from '../api/db.js';

const T = { timeout: 4000 };
beforeEach(() => { setScenario(DEFAULT_SCENARIO); sessionStorage.clear(); window.location.hash = '/login'; });
afterEach(cleanup);

async function start(handle) {
  const user = userEvent.setup();
  render(<App />);
  await user.type(screen.getByPlaceholderText('nama@amarbank.co.id atau 08123456789'), `${handle}@amarbank.co.id`);
  await user.type(screen.getByPlaceholderText('••••••••'), DEMO_PASSWORD);
  await user.click(screen.getByRole('button', { name: 'Masuk' }));
  return user;
}

describe('Admin', () => {
  it('Batalkan permintaan tambah toko: alasan wajib, toast, toko hilang dari tab', async () => {
    const user = await start('rina.saraswati');
    await screen.findByText(/Menunggu review/, {}, T);
    window.location.hash = '/toko-aktif?tab=permintaan';
    const row = (await screen.findByText('Jaya Abadi Cellular Antang', {}, T)).closest('tr');
    await user.click(within(row).getByRole('button', { name: 'Batalkan permintaan' }));
    const dlg = await screen.findByRole('dialog', {}, T);
    await user.click(within(dlg).getByRole('button', { name: 'Batalkan permintaan' }));
    expect(within(dlg).getByText('Informasi wajib diisi')).toBeTruthy();
    await user.type(within(dlg).getByPlaceholderText('Contoh: Toko ditambahkan ganda'), 'Toko ditambahkan ganda');
    await user.click(within(dlg).getByRole('button', { name: 'Batalkan permintaan' }));
    expect(await screen.findByText('Permintaan tambah toko Jaya Abadi Cellular Antang dibatalkan.', {}, T)).toBeTruthy();
    expect(await screen.findByText('Tidak ada permintaan tambah toko.', {}, T)).toBeTruthy();
  });

  it('Ubah lokasi toko di tab Toko partner Active', async () => {
    const user = await start('rina.saraswati');
    await screen.findByText(/Menunggu review/, {}, T);
    window.location.hash = '/partner-pipeline/REG2026-0139';
    await user.click(await screen.findByText(/^Toko \(/, {}, T));
    await user.click((await screen.findAllByRole('button', { name: 'Ubah lokasi' }, T))[0]);
    const dlg = await screen.findByRole('dialog', {}, T);
    const lat = within(dlg).getByPlaceholderText('Contoh: -5.147665');
    await user.clear(lat); await user.type(lat, '-5.150001');
    await user.type(within(dlg).getByPlaceholderText('Contoh: Toko pindah ke ruko sebelah'), 'Toko pindah ke ruko sebelah');
    await user.click(within(dlg).getByRole('button', { name: 'Simpan lokasi' }));
    expect(await screen.findByText('Lokasi toko diperbarui. Check-in kunjungan memakai lokasi baru.', {}, T)).toBeTruthy();
    await waitFor(() => expect(partners.find((p) => p.id === 'REG2026-0139').stores[0].lat).toBe(-5.150001));
    expect(await screen.findByText(/Lokasi diubah/, {}, T)).toBeTruthy();
  });
});

describe('APL', () => {
  it('Produktivitas: target 6 check-in per minggu dan koreksi TL di detail', async () => {
    const user = await start('hasan.basri');
    await screen.findByText(/Penjualan dan produktivitas di area Anda/, {}, T);
    window.location.hash = '/apl/produktivitas?mode=rentang&from=2026-09-28&to=2026-10-04';
    expect(await screen.findByText('Minggu tercapai', {}, T)).toBeTruthy();
    await user.click(await screen.findByText('Siti Rahmawati', {}, T));
    expect(await screen.findByText('Koreksi absensi oleh TL', {}, T)).toBeTruthy();
    expect(screen.getAllByText('Dikoreksi TL').length).toBe(2);
    expect(screen.getByText(/Alasan: Ponsel rusak/)).toBeTruthy();
    expect(screen.getByText(/Absen menjadi Tepat Waktu/)).toBeTruthy();
  });
});
