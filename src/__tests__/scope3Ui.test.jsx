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
  it('Admin: isi koreksi, pilih baris, tandai dibayar; Dibayar tanpa aksi', async () => {
    const user = await start('rina.saraswati');
    await screen.findByText(/Menunggu review/, {}, T);
    window.location.hash = '/pembayaran-insentif';
    expect(await screen.findByText('Jumlah final', { selector: 'span' }, T)).toBeTruthy();
    const row = (await screen.findByText('Siti Rahmawati', {}, T)).closest('tr');
    await user.click(within(row).getByRole('button', { name: 'Isi koreksi' }));
    const dlg = await screen.findByRole('dialog', {}, T);
    const input = within(dlg).getByDisplayValue('0');
    await user.clear(input); await user.type(input, '150000');
    await user.type(within(dlg).getByPlaceholderText('Contoh: Koreksi Agustus 2026'), 'Koreksi Agustus 2026');
    await user.click(within(dlg).getByRole('button', { name: 'Simpan koreksi' }));
    expect(await screen.findByText('Koreksi Siti Rahmawati disimpan.', {}, T)).toBeTruthy();
    const row2 = (await screen.findByText('Siti Rahmawati', {}, T)).closest('tr');
    expect(within(row2).getByText(/^\+Rp.150\.000$/)).toBeTruthy();
    await user.click(within(within(row2).getByLabelText('Pilih Siti Rahmawati')).getByRole('checkbox'));
    await user.click(screen.getByRole('button', { name: 'Tandai dibayar (1)' }));
    const conf = await screen.findByRole('dialog', {}, T);
    expect(within(conf).getByText(/Status Dibayar tidak bisa diubah/)).toBeTruthy();
    await user.click(within(conf).getByRole('button', { name: 'Tandai dibayar' }));
    expect(await screen.findByText('1 pembayaran ditandai Dibayar.', {}, T)).toBeTruthy();
    const row3 = (await screen.findByText('Siti Rahmawati', {}, T)).closest('tr');
    expect(within(row3).queryByRole('button', { name: 'Isi koreksi' })).toBeNull();
    expect(within(row3).getByText('Dibayar')).toBeTruthy();
  });

  it('Super Admin hanya melihat; sebelum lock belum ada bulan September', async () => {
    await start('hendra.wijaya');
    window.location.hash = '/pembayaran-insentif';
    expect(await screen.findByText('Hanya Admin yang dapat mencatat pembayaran. Super Admin melihat saja.', {}, T)).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Isi koreksi' })).toBeNull();
    expect(screen.queryByText('Pilih semua yang menunggu')).toBeNull();
    setScenario({ s3Today: '2026-10-03' });
    expect(await screen.findByText(/Agustus 2026 · Final/, {}, T)).toBeTruthy();
  });
});
