// Nonaktifkan pengguna: leader pengganti & pelepasan toko (jawaban feedback DD poin 5 & 7).
// File terpisah karena mengubah data contoh; vitest mengisolasi modul per file.
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';
import { DEFAULT_SCENARIO, setScenario } from '../dev/scenario.js';
import { DEMO_PASSWORD, owningTl, partners, users } from '../api/db.js';
import { disableUser, replacementLeaderOptions } from '../api/mockApi.js';

const T = { timeout: 4000 };
const admin = { userId: 1, name: 'Rina Saraswati', role: 'REVIEWER' };
const byId = (id) => users.find((u) => u.id === id);

beforeEach(() => { setScenario(DEFAULT_SCENARIO); sessionStorage.clear(); window.location.hash = '/login'; });
afterEach(cleanup);

describe('Nonaktifkan pengguna (UI)', () => {
  it('modal TL: leader pengganti terisi untuk semua bawahan, menampilkan perpindahan partner, lalu Batal', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByPlaceholderText('nama@amarbank.co.id atau 08123456789'), 'rina.saraswati@amarbank.co.id');
    await user.type(screen.getByPlaceholderText('••••••••'), DEMO_PASSWORD);
    await user.click(screen.getByRole('button', { name: 'Masuk' }));
    window.location.hash = '/account-management?q=Andi';
    await user.click(await screen.findByText('Andi Pratama', {}, T));
    const btns = await screen.findAllByRole('button', { name: 'Nonaktifkan' }, T);
    await user.click(btns[btns.length - 1]);
    const dialog = await screen.findByRole('dialog', {}, T);
    await user.type(within(dialog).getByPlaceholderText('Contoh: Resign per 31 Okt 2026'), 'Resign');
    // Satu-satunya kandidat langsung terisi (pola sama dengan leader di Tambah Pengguna); bawahan tampil dengan pengganti masing-masing.
    expect(within(dialog).getByText('Leader pengganti untuk semua')).toBeTruthy();
    expect(within(dialog).getByText('Siti Rahmawati')).toBeTruthy();
    expect(within(dialog).getAllByRole('button', { name: 'Bagus Wicaksono' })).toHaveLength(4); // utama + 3 bawahan
    const confirm = within(dialog).getByRole('button', { name: 'Nonaktifkan' });
    await waitFor(() => expect(confirm.disabled).toBe(false));
    const owned = partners.filter((p) => owningTl(p) === 6).length;
    expect(within(dialog).getByText(`${owned} partner milik Andi Pratama pindah ke Bagus Wicaksono.`)).toBeTruthy();
    await user.click(within(dialog).getByRole('button', { name: 'Batal' }));
    expect(byId(6).status).toBe('ACTIVE');
  });
});

describe('Nonaktifkan pengguna (API)', () => {
  it('SA dinonaktifkan: toko yang dipegang dilepas dan tercatat oleh Sistem', async () => {
    const held = partners.flatMap((p) => p.stores.filter((s) => s.assigned.includes(16)).map((s) => ({ p, s })));
    expect(held.length).toBeGreaterThan(0);
    const u = await disableUser(16, 'Resign', admin);
    expect(u.status).toBe('DISABLED');
    held.forEach(({ p, s }) => {
      expect(s.assigned).not.toContain(16);
      expect(p.history.some((h) => h.by === 'Sistem' && h.reason === `Nurul Hidayah dilepas dari ${s.name} (akun dinonaktifkan)`)).toBe(true);
    });
  });

  it('TL dengan bawahan wajib diberi pengganti; bawahan dan partner pindah', async () => {
    expect(replacementLeaderOptions(6).map((o) => o.value)).toEqual(['22']);
    await expect(disableUser(6, 'Resign', admin)).rejects.toMatchObject({ code: 'LEADER_REQUIRED' });
    const owned = partners.filter((p) => owningTl(p) === 6);
    expect(owned.length).toBeGreaterThan(0);
    await disableUser(6, 'Resign', admin, { defaultLeaderId: '22' });
    expect(byId(11).supervisorId).toBe(22);
    expect(byId(15).supervisorId).toBe(22);
    owned.forEach((p) => expect(owningTl(p)).toBe(22));
  });

  it('APL pengganti menerima area APL lama', async () => {
    await disableUser(3, 'Mutasi', admin, { defaultLeaderId: '4' });
    expect(byId(4).areaIds).toEqual(expect.arrayContaining([1, 2, 5]));
    expect(byId(22).supervisorId).toBe(4);
  });
});
