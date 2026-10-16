// Serah terima leader (PRD Scope 1 v2 C4: FR-AM-009, FR-AM-012, FR-AM-013) dan TL per toko (keputusan 2026-10-16).
// File terpisah karena mengubah data contoh; vitest mengisolasi modul per file. Urutan test penting (data berlanjut).
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';
import { DEFAULT_SCENARIO, setScenario } from '../dev/scenario.js';
import { DEMO_PASSWORD, partners, users } from '../api/db.js';
import { activateAccount, createUser, disableUser, handoverPlan, moveSubordinates } from '../api/mockApi.js';

const T = { timeout: 4000 };
const admin = { userId: 1, name: 'Rina Saraswati', role: 'REVIEWER' };
const byId = (id) => users.find((u) => u.id === id);
const storesOfTl = (id) => partners.filter((p) => !['REJECTED', 'CANCELLED', 'INACTIVE'].includes(p.status)).flatMap((p) => p.stores.filter((s) => s.tlId === id));
const heldBy = (id) => partners.flatMap((p) => p.stores.filter((s) => s.assigned.includes(id)));

beforeEach(() => { setScenario(DEFAULT_SCENARIO); sessionStorage.clear(); window.location.hash = '/login'; });
afterEach(cleanup);

describe('Nonaktifkan dan Pindahkan Bawahan (UI)', () => {
  it('modal TL: pengganti Active terisi untuk semua, toko pindah, Nonaktifkan aktif setelah Alasan; lalu Batal', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.type(screen.getByPlaceholderText('nama@amarbank.co.id atau 08123456789'), 'rina.saraswati@amarbank.co.id');
    await user.type(screen.getByPlaceholderText('••••••••'), DEMO_PASSWORD);
    await user.click(screen.getByRole('button', { name: 'Masuk' }));
    window.location.hash = '/account-management?q=Andi';
    await user.click(await screen.findByText('Andi Pratama', {}, T));
    expect(await screen.findByRole('button', { name: 'Pindahkan Bawahan' }, T)).toBeTruthy();
    const btns = screen.getAllByRole('button', { name: 'Nonaktifkan' });
    await user.click(btns[btns.length - 1]);
    const dialog = await screen.findByRole('dialog', {}, T);
    expect(within(dialog).getByText('Masih menjadi atasan 3 pengguna. Pilih atasan baru sebelum menonaktifkan.')).toBeTruthy();
    expect(within(dialog).getAllByRole('button', { name: 'Bagus Wicaksono' })).toHaveLength(4); // utama + 3 bawahan
    expect(within(dialog).getByText(`${storesOfTl(6).length} toko yang dipegang Andi Pratama pindah ke Bagus Wicaksono. SA/SR yang atasannya bukan Bagus Wicaksono dilepas dari toko tersebut.`)).toBeTruthy();
    const confirm = within(dialog).getByRole('button', { name: 'Nonaktifkan' });
    expect(confirm.disabled).toBe(true); // Alasan belum diisi
    await user.type(within(dialog).getByPlaceholderText('Contoh: Resign per 31 Okt 2026'), 'Resign');
    await waitFor(() => expect(confirm.disabled).toBe(false));
    await user.click(within(dialog).getByRole('button', { name: 'Batal' }));
    expect(byId(6).status).toBe('ACTIVE');
  });
});

describe('Serah terima dan TL per toko (API)', () => {
  it('SA dinonaktifkan: toko yang dipegang dilepas dan tercatat oleh Sistem', async () => {
    const held = partners.flatMap((p) => p.stores.filter((s) => s.assigned.includes(16)).map((s) => ({ p, s })));
    expect(held.length).toBeGreaterThan(0);
    await disableUser(16, 'Resign', admin);
    held.forEach(({ p, s }) => {
      expect(s.assigned).not.toContain(16);
      expect(p.history.some((h) => h.by === 'Sistem' && h.reason === `Nurul Hidayah dilepas dari ${s.name} (akun dinonaktifkan)`)).toBe(true);
    });
  });

  it('AC-AM-015: kandidat hanya TL Active yang memegang area bawahan; TL area lain ditolak', async () => {
    const plan = handoverPlan(6);
    expect(plan.mainOptions.map((o) => o.value)).toEqual(['22']);
    plan.subs.forEach((x) => expect(x.options.map((o) => o.value)).toEqual(['22']));
    await expect(disableUser(6, 'Resign', admin, { defaultLeaderId: '7' })).rejects.toMatchObject({ code: 'LEADER_REQUIRED' });
    await expect(disableUser(6, 'Resign', admin)).rejects.toMatchObject({ code: 'LEADER_REQUIRED' });
  });

  it('AC-AM-016/019: Pindahkan Siti ke Bagus — Eko tetap di Andi, Andi tetap aktif dengan tokonya, toko Siti dilepas', async () => {
    const andiStores = storesOfTl(6).map((s) => s.id);
    expect(heldBy(11).length).toBeGreaterThan(0);
    await moveSubordinates(6, { 11: '22' }, 'Penyesuaian tim', admin);
    expect(byId(11).supervisorId).toBe(22);
    expect(byId(15).supervisorId).toBe(6);
    expect(byId(6).status).toBe('ACTIVE');
    expect(storesOfTl(6).map((s) => s.id)).toEqual(andiStores);
    expect(heldBy(11)).toHaveLength(0); // toko milik Andi, bukan milik TL baru Siti (FR-AM-013)
    expect(byId(11).log.at(-1).text).toContain('Pindahkan Bawahan');
    expect(byId(22).log.at(-1).text).toContain('Menerima bawahan Siti Rahmawati');
  });

  it('AC-AM-017: Pindahkan Bawahan hanya untuk TL Active yang punya bawahan', async () => {
    await expect(moveSubordinates(15, { 1: '6' }, 'x', admin)).rejects.toMatchObject({ code: 'CONFLICT' });
    await expect(moveSubordinates(7, {}, 'x', admin)).rejects.toMatchObject({ code: 'CONFLICT' });
    await moveSubordinates(22, { 11: '6' }, 'Kembali ke tim lama', admin); // Bagus kini punya bawahan
    expect(byId(11).supervisorId).toBe(6);
  });

  it('AC-AM-011: TL dinonaktifkan — bawahan dan semua toko pindah ke pengganti utama', async () => {
    const andiStores = storesOfTl(6).map((s) => s.id);
    await disableUser(6, 'Resign', admin, { defaultLeaderId: '22' });
    expect(byId(6).status).toBe('DISABLED');
    expect(users.filter((u) => u.supervisorId === 6 && u.status !== 'DISABLED')).toHaveLength(0);
    expect(storesOfTl(22).map((s) => s.id)).toEqual(expect.arrayContaining(andiStores));
    expect(storesOfTl(6)).toHaveLength(0);
  });

  it('FR-AM-014: APL hanya bisa dinonaktifkan setelah setiap areanya dipegang APL Active lain; area tidak dipindah', async () => {
    expect(handoverPlan(3).aplAreaGaps).toEqual([1]); // FR-AM-014: area Makassar belum dipegang APL Active lain
    await expect(disableUser(3, 'Mutasi', admin)).rejects.toMatchObject({ code: 'APL_AREA' });
    const { user: nu } = await createUser({ email: 'dewi.apl@amarbank.co.id', phone: '81299990000', fullName: 'Dewi Anggraini', role: 'APL', areaIds: [1] }, admin);
    expect(handoverPlan(3).aplAreaGaps).toEqual([1]); // masih Pending
    await activateAccount(nu.id, 'Rahasia#2026');
    await disableUser(3, 'Mutasi', admin, { defaultLeaderId: String(nu.id) });
    expect(byId(22).supervisorId).toBe(nu.id);
    expect(byId(nu.id).areaIds).toEqual([1]);
  });
});
