import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';
import { setScenario } from '../dev/scenario.js';

const T = { timeout: 3000 };
const go = (path) => { window.location.hash = path; };

beforeEach(() => {
  setScenario({ tableState: 'data', saveOutcome: 'success', activationState: 'valid', lastNameOptional: false });
  go('/login');
});
afterEach(cleanup);

async function loginAs(user, id) {
  await user.type(screen.getByPlaceholderText('nama@amarbank.co.id atau 0812...'), id);
  await user.type(screen.getByPlaceholderText('••••••••'), 'rahasia');
  await user.click(screen.getByRole('button', { name: 'Masuk' }));
}

describe('W1 Login', () => {
  it('tombol Masuk nonaktif sampai kedua field terisi', async () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Masuk' }).disabled).toBe(true);
  });

  it('admin masuk ke Manajemen Akun dan melihat tabel TL', async () => {
    const user = userEvent.setup();
    render(<App />);
    await loginAs(user, 'rina.saraswati@amarbank.co.id');
    expect((await screen.findAllByText('Manajemen Akun', {}, T)).length).toBeGreaterThan(0);
    expect(await screen.findByText('Dimas Pratama', {}, T)).toBeTruthy();
    expect(screen.getByText('+62 812-3456-7890')).toBeTruthy();
  });

  it('akun TL ditolak', async () => {
    const user = userEvent.setup();
    render(<App />);
    await loginAs(user, 'tl.budi@amarbank.co.id');
    expect(await screen.findByText('Akses ditolak', { selector: 'span' }, T)).toBeTruthy(); // bukan tombol DevToolbar
    expect(screen.getByText(/Masuk sebagai/).textContent).toBe('Masuk sebagai tl.budi@amarbank.co.id');
    await user.click(screen.getByRole('button', { name: 'Keluar' }));
    expect(await screen.findByText('Masuk ke Sales Portal')).toBeTruthy();
  });
});

describe('W2 Manajemen Akun', () => {
  async function openModal(user) {
    go('/users');
    render(<App />);
    await screen.findByText('Dimas Pratama', {}, T);
    await user.click(screen.getAllByRole('button', { name: /Tambah Pengguna/ })[0]);
    return screen.findByText('Undangan aktivasi akan dikirim ke email pengguna.');
  }
  async function fill(user, { email = 'budi.santoso@amarbank.co.id', phone = '81299998888', first = 'Budi', last = 'Santoso' } = {}) {
    await user.type(screen.getByPlaceholderText('nama@email.com'), email);
    await user.type(screen.getByPlaceholderText('812 3456 7890'), phone);
    await user.type(screen.getByPlaceholderText('Budi'), first);
    await user.type(screen.getByPlaceholderText('Santoso'), last);
  }

  it('state empty dan error', async () => {
    setScenario({ tableState: 'empty' });
    go('/users');
    const { unmount } = render(<App />);
    expect(await screen.findByText('Belum ada pengguna. Tambahkan pengguna pertama.', {}, T)).toBeTruthy();
    unmount();
    setScenario({ tableState: 'error' });
    render(<App />);
    expect(await screen.findByText('Gagal memuat data. Coba lagi.', {}, T)).toBeTruthy();
    await userEvent.setup().click(screen.getByRole('button', { name: 'Coba lagi' }));
    expect(await screen.findByText('Dimas Pratama', {}, T)).toBeTruthy();
  });

  it('validasi saat blur menampilkan pesan error', async () => {
    const user = userEvent.setup();
    await openModal(user);
    await user.type(screen.getByPlaceholderText('nama@email.com'), 'salah');
    await user.tab();
    expect(screen.getByText('Format tidak valid')).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Simpan' }).disabled).toBe(true);
  });

  it('simpan sukses: baris baru di atas + toast sukses', async () => {
    const user = userEvent.setup();
    await openModal(user);
    await fill(user);
    await user.click(screen.getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Pengguna berhasil dibuat. Undangan aktivasi telah dikirim.', {}, T)).toBeTruthy();
    expect(screen.getByText('Budi Santoso')).toBeTruthy();
    expect(screen.getByText('6')).toBeTruthy(); // badge jumlah
  });

  it('email undangan gagal → toast warning', async () => {
    setScenario({ saveOutcome: 'emailFail' });
    const user = userEvent.setup();
    await openModal(user);
    await fill(user, { email: 'ani@amarbank.co.id', phone: '81277776666', first: 'Ani', last: 'Wulan' });
    await user.click(screen.getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Pengguna dibuat, tetapi email undangan gagal dikirim. Hubungi tim teknis.', {}, T)).toBeTruthy();
  });

  it('email duplikat → error inline, modal tetap terbuka', async () => {
    setScenario({ saveOutcome: 'dupEmail' });
    const user = userEvent.setup();
    await openModal(user);
    await fill(user, { phone: '81255554444' });
    await user.click(screen.getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Email sudah terdaftar', {}, T)).toBeTruthy();
    expect(screen.getByText('Undangan aktivasi akan dikirim ke email pengguna.')).toBeTruthy();
  });

  it('Keycloak gagal → toast error', async () => {
    setScenario({ saveOutcome: 'kcFail' });
    const user = userEvent.setup();
    await openModal(user);
    await fill(user, { email: 'x@amarbank.co.id', phone: '81233332222' });
    await user.click(screen.getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Gagal membuat akun. Coba lagi.', {}, T)).toBeTruthy();
  });

  it('batal dengan form terisi → konfirmasi', async () => {
    const user = userEvent.setup();
    await openModal(user);
    await user.type(screen.getByPlaceholderText('Budi'), 'Budi');
    await user.click(screen.getByRole('button', { name: 'Batal' }));
    expect(screen.getByText('Batalkan penambahan pengguna?')).toBeTruthy();
    await user.click(screen.getByRole('button', { name: 'Lanjutkan Mengisi' }));
    expect(screen.getByPlaceholderText('Budi').value).toBe('Budi');
    await user.click(screen.getByRole('button', { name: 'Batal' }));
    await user.click(screen.getByRole('button', { name: 'Ya, Batalkan' }));
    await waitFor(() => expect(screen.queryByText('Undangan aktivasi akan dikirim ke email pengguna.')).toBeNull());
  });
});

describe('KC1 Aktivasi', () => {
  it('password valid + konfirmasi sama → berhasil', async () => {
    go('/activate');
    const user = userEvent.setup();
    render(<App />);
    await screen.findByText('Aktivasi akun Anda');
    const [pw, pw2] = screen.getAllByPlaceholderText('••••••••');
    await user.type(pw, 'Rahasia123');
    await user.type(pw2, 'Rahasia12');
    expect(screen.getByText('Password tidak sama')).toBeTruthy();
    await user.type(pw2, '3');
    await user.click(screen.getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Aktivasi berhasil', {}, T)).toBeTruthy();
  });

  it('tautan kedaluwarsa', async () => {
    setScenario({ activationState: 'expired' });
    go('/activate');
    render(<App />);
    expect(await screen.findByText('Tautan tidak berlaku')).toBeTruthy();
  });
});
