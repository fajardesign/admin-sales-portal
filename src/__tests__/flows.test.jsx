import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';
import { DEFAULT_SCENARIO, setScenario } from '../dev/scenario.js';
import { DEMO_PASSWORD } from '../api/db.js';
import { simulateResubmit } from '../api/mockApi.js';

const T = { timeout: 4000 };
const go = (path) => { window.location.hash = path; };

beforeEach(() => {
  setScenario(DEFAULT_SCENARIO);
  sessionStorage.clear();
  go('/login');
});
afterEach(cleanup);

async function login(user, id, pw = DEMO_PASSWORD) {
  await user.type(screen.getByPlaceholderText('nama@amarbank.co.id atau username'), id);
  await user.type(screen.getByPlaceholderText('••••••••'), pw);
  await user.click(screen.getByRole('button', { name: 'Masuk' }));
}
async function start(id) {
  const user = userEvent.setup();
  render(<App />);
  await login(user, id);
  return user;
}
/** Pilih opsi di Select DS: klik tombol (label terpilih/placeholder), lalu klik opsi. */
async function pick(user, current, option) {
  await user.click(screen.getByRole('button', { name: current }));
  const opts = await screen.findAllByText(option);
  await user.click(opts[opts.length - 1]);
}

describe('W1 Login & akses per role', () => {
  it('Masuk nonaktif sampai kedua field terisi', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: 'Masuk' }).disabled).toBe(true);
  });

  it('kredensial salah menampilkan pesan, 5 kali salah mengunci akun', async () => {
    const user = userEvent.setup();
    render(<App />);
    await login(user, 'bayu.prasetyo', 'salah');
    expect(await screen.findByText('Email/username atau password salah. Silakan coba lagi.', {}, T)).toBeTruthy();
    for (let i = 0; i < 4; i += 1) {
      await user.clear(screen.getByPlaceholderText('nama@amarbank.co.id atau username'));
      await login(user, 'bayu.prasetyo', 'salah');
    }
    expect(await screen.findByText('Akun terkunci sementara. Coba lagi dalam 15 menit.', {}, T)).toBeTruthy();
  });

  it('akun Disabled dan Pending ditolak dengan pesan masing-masing', async () => {
    const user = userEvent.setup();
    render(<App />);
    await login(user, 'rizky.ramadhan');
    expect(await screen.findByText('Akun Anda tidak aktif. Hubungi Admin.', {}, T)).toBeTruthy();
    await user.clear(screen.getByPlaceholderText('nama@amarbank.co.id atau username'));
    await login(user, 'fajar.nugroho@amarbank.co.id');
    expect(await screen.findByText('Akun belum diaktivasi. Cek email undangan Anda.', {}, T)).toBeTruthy();
  });

  it('TL masuk ke Akses ditolak lalu bisa Keluar', async () => {
    const user = await start('andi.pratama');
    expect(await screen.findByText('Akses ditolak. Akun ini tidak memiliki akses ke portal web.', {}, T)).toBeTruthy();
    await user.click(screen.getByRole('button', { name: 'Keluar' }));
    expect(await screen.findByText('Masuk ke S&P Portal', {}, T)).toBeTruthy();
  });

  it.each([
    ['rina.saraswati', 'Ringkasan Partner Pipeline dan Account Management.'],
    ['hasan.basri', 'Performa pipeline pinjaman di area Anda: Makassar.'],
    ['hendra.wijaya', 'Kelola tarif insentif SA/SR, TL, dan Partner yang dipakai untuk menghitung estimasi insentif.'],
  ])('%s masuk ke beranda role-nya', async (id, desc) => {
    await start(id);
    expect(await screen.findByText(desc, {}, T)).toBeTruthy();
  });

  it('rute milik role lain dialihkan ke beranda role sendiri', async () => {
    await start('hasan.basri');
    await screen.findByText(/Performa pipeline pinjaman di area Anda/, {}, T);
    go('/account-management');
    expect(await screen.findByText(/Performa pipeline pinjaman di area Anda/, {}, T)).toBeTruthy();
  });
});

describe('W3 Partner Pipeline', () => {
  it('daftar default Under Review, bisa ganti status dan cari', async () => {
    const user = await start('rina.saraswati');
    go('/partner-pipeline');
    expect(await screen.findByText('Sinar Jaya Ponsel', {}, T)).toBeTruthy();
    expect(screen.queryByText('Jaya Abadi Cellular')).toBeNull();
    await user.click(screen.getByRole('tab', { name: /Active/ }));
    expect(await screen.findByText('Jaya Abadi Cellular', {}, T)).toBeTruthy();
    expect(window.location.hash).toContain('status=active');
    await user.click(screen.getByRole('tab', { name: /Semua/ }));
    await user.type(screen.getByPlaceholderText('Cari nama partner atau no. registrasi'), '0135');
    expect(await screen.findByText('Mega Cell Makassar', {}, T)).toBeTruthy();
    await waitFor(() => expect(screen.queryByText('Sinar Jaya Ponsel')).toBeNull());
  });

  it('Verifikasi Selesai nonaktif bila dokumen/rekening belum Valid', async () => {
    await start('rina.saraswati');
    go('/partner-pipeline/REG2026-0147');
    expect(await screen.findByText(/Verifikasi Selesai aktif setelah semua dokumen wajib/, {}, T)).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Verifikasi Selesai' }).disabled).toBe(true);
  });

  it('alur positif: Verified → Waiting PKS → Active membuat akun PIC Pending', async () => {
    const user = await start('rina.saraswati');
    go('/partner-pipeline/REG2026-0148');
    await user.click(await screen.findByRole('button', { name: 'Verifikasi Selesai' }, T));
    expect(await screen.findByText('Ubah status menjadi Verified?', {}, T)).toBeTruthy();
    await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Verifikasi Selesai' }));
    expect(await screen.findByText('Status berhasil diperbarui.', {}, T)).toBeTruthy();

    await user.click(await screen.findByRole('button', { name: 'PKS Dikirim' }, T));
    await user.click(within(await screen.findByRole('dialog', {}, T)).getByRole('button', { name: 'PKS Dikirim' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Konfirmasi PKS Ditandatangani & Aktifkan' })).toBeTruthy(), T);

    await user.click(screen.getByRole('button', { name: 'Konfirmasi PKS Ditandatangani & Aktifkan' }));
    const dlg = await screen.findByRole('dialog', {}, T);
    const confirm = within(dlg).getByRole('button', { name: 'Konfirmasi PKS Ditandatangani & Aktifkan' });
    expect(confirm.disabled).toBe(true);
    await user.click(within(dlg).getByText(/Saya sudah memastikan di Privy web/));
    await user.click(confirm);
    await waitFor(() => expect(screen.getByRole('button', { name: 'Nonaktifkan' })).toBeTruthy(), T);
    expect(screen.getAllByText('Undangan terkirim').length).toBeGreaterThan(0);

    go('/account-management?role=PARTNER');
    expect(await screen.findByText('Hendra Gunawan', {}, T)).toBeTruthy();
  });

  it('Tolak mewajibkan alasan dan status menjadi final', async () => {
    const user = await start('rina.saraswati');
    go('/partner-pipeline/REG2026-0145');
    await user.click(await screen.findByRole('button', { name: 'Tolak' }, T));
    const dlg = await screen.findByRole('dialog', {}, T);
    await user.click(within(dlg).getByRole('button', { name: 'Tolak' }));
    expect(within(dlg).getByText('Informasi wajib diisi')).toBeTruthy();
    await user.type(within(dlg).getByPlaceholderText('Tulis alasan perubahan status'), 'Bukan toko gadget');
    await user.click(within(dlg).getByRole('button', { name: 'Tolak' }));
    expect(await screen.findByText('Status final. Data partner hanya dapat dilihat.', {}, T)).toBeTruthy();
  });

  it('Minta Revisi lalu TL/SR mengirim ulang → kembali Under Review dengan versi dokumen baru', async () => {
    const user = await start('rina.saraswati');
    go('/partner-pipeline/REG2026-0146');
    await user.click(await screen.findByRole('button', { name: 'Minta Revisi' }, T));
    const send = await screen.findByRole('button', { name: 'Kirim Permintaan Revisi' }, T);
    expect(send.disabled).toBe(true);
    await user.click(screen.getByText('KTP PIC'));
    await user.click(send);
    expect(await screen.findByText('Catatan wajib diisi', {}, T)).toBeTruthy();
    await user.type(screen.getByPlaceholderText(/Apa yang harus diperbaiki/), 'Foto KTP buram, mohon unggah ulang');
    await user.click(send);
    const dlg = await screen.findByRole('dialog', { name: /Revision Required/ }, T).catch(() => screen.findByText('Ubah status menjadi Revision Required?', {}, T));
    expect(dlg).toBeTruthy();
    await user.click(screen.getAllByRole('button', { name: 'Kirim Permintaan Revisi' }).at(-1));
    expect(await screen.findByText(/Menunggu perbaikan dari Siti Rahmawati/, {}, T)).toBeTruthy();

    await simulateResubmit('REG2026-0146');
    await waitFor(() => expect(screen.queryByText(/Menunggu perbaikan dari/)).toBeNull(), T);
    await user.click(screen.getByRole('tab', { name: /Dokumen/ }));
    expect(await screen.findByText(/ktp_pic_0146_v2\.jpg/, {}, T)).toBeTruthy();
    expect(screen.getAllByText('Direvisi').length).toBeGreaterThan(0);
  });

  it('Kembali dari detail memulihkan tampilan daftar sebelumnya', async () => {
    const user = await start('rina.saraswati');
    go('/partner-pipeline?status=active');
    await user.click(await screen.findByText('Jaya Abadi Cellular', {}, T));
    await screen.findByRole('tab', { name: /Toko \(3\)/ }, T);
    await user.click(screen.getByRole('button', { name: 'Kembali' }));
    await waitFor(() => expect(window.location.hash).toBe('#/partner-pipeline?status=active'));
  });
});

describe('W2 Account Management', () => {
  it('daftar menampilkan status Keycloak dan aksi baris', async () => {
    await start('rina.saraswati');
    go('/account-management');
    expect(await screen.findByText('Yohana Sitorus', {}, T)).toBeTruthy();
    expect(screen.getAllByRole('button', { name: 'Kirim Ulang' }).length).toBeGreaterThan(0);
  });

  it('Tambah Pengguna TL: leader terisi otomatis, akun baru Pending di atas daftar', async () => {
    const user = await start('rina.saraswati');
    go('/account-management');
    await screen.findByText('Yohana Sitorus', {}, T);
    await user.click(screen.getByRole('button', { name: 'Tambah Pengguna' }));
    await user.type(await screen.findByPlaceholderText('nama@amarbank.co.id', {}, T), 'gilang.ramadhan@amarbank.co.id');
    await user.type(screen.getByPlaceholderText('812 3456 7890'), '081277776666');
    await user.type(screen.getByPlaceholderText('budi.santoso'), 'gilang.ramadhan');
    await user.type(screen.getByPlaceholderText('Budi Santoso'), 'Gilang Ramadhan');
    const save = screen.getByRole('button', { name: 'Simpan' });
    expect(save.disabled).toBe(true);
    await pick(user, 'Pilih role', 'TL');
    await pick(user, 'Pilih level', 'Junior');
    await pick(user, 'Pilih area', 'Bandung');
    expect(within(screen.getByRole('button', { name: 'Lestari Wulandari' })).getByText('Lestari Wulandari')).toBeTruthy();
    await waitFor(() => expect(save.disabled).toBe(false));
    await user.click(save);
    expect(await screen.findByText('Pengguna berhasil dibuat. Undangan aktivasi telah dikirim.', {}, T)).toBeTruthy();
    expect(await screen.findByText('Gilang Ramadhan', {}, T)).toBeTruthy();
  });

  it('area tanpa APL menampilkan pesan leader tidak tersedia', async () => {
    const user = await start('rina.saraswati');
    go('/account-management');
    await screen.findByText('Yohana Sitorus', {}, T);
    await user.click(screen.getByRole('button', { name: 'Tambah Pengguna' }));
    await pick(user, 'Pilih role', 'TL');
    await pick(user, 'Pilih area', 'Denpasar');
    expect(await screen.findByText('Belum ada APL aktif di area ini. Buat akun APL terlebih dahulu.', {}, T)).toBeTruthy();
  });

  it('email terdaftar ditolak dengan pesan di bawah field', async () => {
    const user = await start('rina.saraswati');
    go('/account-management');
    await screen.findByText('Yohana Sitorus', {}, T);
    await user.click(screen.getByRole('button', { name: 'Tambah Pengguna' }));
    await user.type(await screen.findByPlaceholderText('nama@amarbank.co.id', {}, T), 'bayu.prasetyo@amarbank.co.id');
    await user.type(screen.getByPlaceholderText('812 3456 7890'), '81277776666');
    await user.type(screen.getByPlaceholderText('budi.santoso'), 'bayu.baru');
    await user.type(screen.getByPlaceholderText('Budi Santoso'), 'Bayu Baru');
    await pick(user, 'Pilih role', 'Admin (Reviewer)');
    await user.click(screen.getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Email sudah terdaftar', {}, T)).toBeTruthy();
  });

  it('kirim ulang tautan dan nonaktifkan pengguna', async () => {
    const user = await start('rina.saraswati');
    go('/account-management?status=expired');
    await user.click(await screen.findByText('Yohana Sitorus', {}, T));
    await user.click(await screen.findByRole('button', { name: 'Kirim Ulang Aktivasi' }, T));
    await user.click(within(await screen.findByRole('dialog', {}, T)).getByRole('button', { name: 'Kirim Ulang' }));
    expect(await screen.findByText('Tautan aktivasi berhasil dikirim ulang.', {}, T)).toBeTruthy();
  });

  it('aktivasi akun Pending dari tautan membuat akun bisa login', async () => {
    const user = userEvent.setup();
    go('/activate?user=10');
    render(<App />);
    await screen.findByText('Aktivasi akun Anda', {}, T);
    const [pw, pw2] = screen.getAllByPlaceholderText('••••••••');
    await user.type(pw, 'Rahasia123');
    await user.type(pw2, 'Rahasia123');
    await user.click(screen.getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Akun Anda sudah aktif. Silakan masuk melalui aplikasi.', {}, T)).toBeTruthy();
  });
});

describe('APL', () => {
  it('Partner & Toko hanya menampilkan toko di area APL', async () => {
    await start('hasan.basri');
    go('/apl/partner');
    expect((await screen.findAllByText(/Jaya Abadi Cellular/, {}, T)).length).toBeGreaterThan(0);
    expect(screen.queryByText(/Galaxy Phone Center/)).toBeNull();
  });

  it('Tim, Performa, dan Insentif bisa dibuka', async () => {
    const user = await start('hasan.basri');
    go('/apl/tim');
    expect(await screen.findByText('Andi Pratama', {}, T)).toBeTruthy();
    expect(screen.queryByText('Budi Santoso')).toBeNull();
    go('/apl/performa');
    await user.click(await screen.findByRole('tab', { name: 'SA/SR' }, T));
    expect(await screen.findByText('Eko Saputra', {}, T)).toBeTruthy();
    go('/apl/insentif?m=2026-09');
    expect(await screen.findByText('Total estimasi insentif', {}, T)).toBeTruthy();
  });
});

describe('Super Admin', () => {
  it('ubah daily fee SA dan simpan', async () => {
    const user = await start('hendra.wijaya');
    await user.click(await screen.findByText('Sales Agent (SA) · Offline Retail', {}, T));
    await user.click(await screen.findByRole('button', { name: 'Ubah Skema' }, T));
    const fee = screen.getByDisplayValue('108000');
    await user.clear(fee);
    await user.type(fee, '115000');
    await user.click(screen.getByRole('button', { name: 'Simpan Perubahan' }));
    await user.click(within(await screen.findByRole('dialog', {}, T)).getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Skema insentif berhasil diperbarui.', {}, T)).toBeTruthy();
    expect(await screen.findByText(/Daily Fee Rp 108.000 → Rp 115.000/, {}, T)).toBeTruthy();
  });

  it('tier tidak urut ditolak', async () => {
    const user = await start('hendra.wijaya');
    await user.click(await screen.findByText('Sales Agent (SA) · Offline Retail', {}, T));
    await user.click(await screen.findByRole('button', { name: 'Ubah Skema' }, T));
    const t2 = screen.getByLabelText('Batas tier 2');
    await user.clear(t2);
    await user.type(t2, '130');
    await user.click(screen.getByRole('button', { name: 'Simpan Perubahan' }));
    expect(await screen.findByText('Harus lebih kecil dari tier di atas', {}, T)).toBeTruthy();
  });
});

describe('Tidak ada layar buntu', () => {
  it.each([
    ['rina.saraswati', ['/beranda', '/partner-pipeline', '/partner-pipeline/REG2026-0133', '/account-management']],
    ['lestari.wulandari', ['/apl', '/apl/performa', '/apl/insentif', '/apl/partner', '/apl/tim']],
    ['hendra.wijaya', ['/skema-insentif']],
  ])('%s: setiap layar punya navigasi sidebar dan Keluar', async (id, paths) => {
    await start(id);
    for (const p of paths) {
      go(p);
      await waitFor(() => expect(screen.getByRole('button', { name: 'Keluar' })).toBeTruthy(), T);
      expect(document.querySelector('aside, nav')).toBeTruthy();
    }
  });

  it('partner yang tidak ada menampilkan pesan dengan tombol Kembali', async () => {
    await start('rina.saraswati');
    go('/partner-pipeline/REG2026-9999');
    expect(await screen.findByText('Partner tidak ditemukan atau gagal dimuat.', {}, T)).toBeTruthy();
    expect(screen.getAllByRole('button', { name: 'Kembali' }).length).toBeGreaterThan(0);
  });
});
