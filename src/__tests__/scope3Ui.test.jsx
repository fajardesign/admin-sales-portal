// PRD Scope 3 (3.0), UI web: Pembayaran Insentif (Admin; Super Admin hanya lihat). File terpisah karena mengubah data contoh.
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';
import { DEFAULT_SCENARIO, setScenario } from '../dev/scenario.js';
import { DEMO_PASSWORD } from '../api/db.js';

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

describe('Pembayaran Insentif', () => {
  it('Admin saat rekonsiliasi (3 Okt): langkah, Isi koreksi, Unduh draf, tanpa tombol tandai (AC-023, AC-024)', async () => {
    setScenario({ s3Today: '2026-10-03' });
    const user = await start('rina.saraswati');
    await screen.findByText(/Menunggu review/, {}, T);
    window.location.hash = '/pembayaran-insentif';
    expect(await screen.findByText('Rekonsiliasi — cut-off 05 Okt 2026 · bayar 10 Okt 2026', {}, T)).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Unduh draf' })).toBeTruthy();
    const row = (await screen.findByText('Siti Rahmawati', {}, T)).closest('tr');
    await user.click(within(row).getByRole('button', { name: 'Isi koreksi' }));
    const dlg = await screen.findByRole('dialog', {}, T);
    const input = within(dlg).getByDisplayValue('0');
    await user.clear(input); await user.type(input, '-150000');
    await user.type(within(dlg).getByPlaceholderText('Contoh: Potongan seragam hilang'), 'Potongan seragam hilang');
    await user.click(within(dlg).getByRole('button', { name: 'Simpan koreksi' }));
    expect(await screen.findByText('Koreksi Siti Rahmawati disimpan.', {}, T)).toBeTruthy();
    const row2 = (await screen.findByText('Siti Rahmawati', {}, T)).closest('tr');
    expect(within(row2).getByText(/^−Rp.150\.000$/)).toBeTruthy();
    expect(within(row2).getByText('Rekonsiliasi')).toBeTruthy();
    expect(screen.queryByText(/^Pilih semua sesuai filter/)).toBeNull();
  });

  it('Admin setelah cut-off (7 Okt): pilih, Tandai Dibayar dengan konfirmasi sebelum tanggal bayar, Tidak dibayar wajib keterangan (AC-052, AC-055)', async () => {
    const user = await start('rina.saraswati');
    await screen.findByText(/Menunggu review/, {}, T);
    window.location.hash = '/pembayaran-insentif';
    expect(await screen.findByText('Tutup buku — file final siap · bayar 10 Okt 2026', {}, T)).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Unduh take home pay final' })).toBeTruthy();
    const row = (await screen.findByText('Siti Rahmawati', {}, T)).closest('tr');
    expect(within(row).queryByRole('button', { name: 'Isi koreksi' })).toBeNull();
    await user.click(within(within(row).getByLabelText('Pilih Siti Rahmawati')).getByRole('checkbox'));
    await user.click(screen.getByRole('button', { name: 'Tandai Dibayar (1)' }));
    const conf = await screen.findByRole('dialog', {}, T);
    expect(within(conf).getByText('Status Dibayar tidak bisa diubah.')).toBeTruthy();
    expect(within(conf).getByDisplayValue('2026-10-10')).toBeTruthy();
    await user.click(within(conf).getByRole('button', { name: 'Tandai Dibayar (1)' }));
    expect(await within(conf).findByText('Tanggal bayar terjadwal 10 Okt 2026 belum lewat. Lanjutkan?', {}, T)).toBeTruthy();
    await user.click(within(conf).getByRole('button', { name: 'Lanjutkan' }));
    expect(await screen.findByText('1 pembayaran ditandai Dibayar.', {}, T)).toBeTruthy();
    const row2 = (await screen.findByText('Siti Rahmawati', {}, T)).closest('tr');
    expect(within(row2).getByText('Dibayar')).toBeTruthy();
    expect(within(row2).queryByLabelText('Pilih Siti Rahmawati')).toBeNull();

    const pickAll = await screen.findByText(/^Pilih semua sesuai filter \(\d+\)$/, {}, T);
    await user.click(pickAll);
    await user.click(screen.getByRole('button', { name: /^Tandai Tidak dibayar \(\d+\)$/ }));
    const un = await screen.findByRole('dialog', {}, T);
    const btn = within(un).getByRole('button', { name: /^Tandai Tidak dibayar/ });
    expect(btn.disabled).toBe(true);
    await user.type(within(un).getByPlaceholderText('Contoh: Rekening tidak valid'), 'Rekening tidak valid');
    await user.click(btn);
    expect(await screen.findByText(/pembayaran ditandai Tidak dibayar\.$/, {}, T)).toBeTruthy();
    expect((await screen.findAllByText('Rekening tidak valid', {}, T)).length).toBeGreaterThan(0);
  });

  it('Super Admin melihat dan mengunduh saja (AC-057)', async () => {
    await start('hendra.wijaya');
    window.location.hash = '/pembayaran-insentif';
    expect(await screen.findByText('Hanya Admin yang dapat mencatat koreksi dan pembayaran. Super Admin melihat dan mengunduh saja.', {}, T)).toBeTruthy();
    expect(await screen.findByRole('button', { name: 'Unduh take home pay final' }, T)).toBeTruthy();
    await screen.findByText('Siti Rahmawati', {}, T);
    expect(screen.queryByRole('button', { name: 'Isi koreksi' })).toBeNull();
    expect(screen.queryByText(/^Pilih semua sesuai filter/)).toBeNull();
    expect(screen.queryByLabelText('Pilih Siti Rahmawati')).toBeNull();
  });
});
