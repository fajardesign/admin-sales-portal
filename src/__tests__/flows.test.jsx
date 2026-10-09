import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, renderHook, screen, waitFor, within } from '@testing-library/react';
import { IDLE_MS, MAX_SESSION_MS, useSessionTimeout } from '../lib/useSessionTimeout.js';
import userEvent from '@testing-library/user-event';
import App from '../App.jsx';
import { DEFAULT_SCENARIO, setScenario } from '../dev/scenario.js';
import { DEMO_PASSWORD, partners, users } from '../api/db.js';
import { simulateResubmit } from '../api/mockApi.js';

const T = { timeout: 4000 };
const go = (path) => { window.location.hash = path; };

beforeEach(() => {
  setScenario(DEFAULT_SCENARIO);
  sessionStorage.clear();
  go('/login');
});
afterEach(cleanup);

/** id tanpa "@" dan bukan angka = handle demo (mis. 'rina.saraswati') → email @amarbank.co.id. */
const loginId = (id) => (id.includes('@') || /^[+\d]/.test(id) ? id : `${id}@amarbank.co.id`);
async function login(user, rawId, pw = DEMO_PASSWORD) {
  const id = loginId(rawId);
  await user.type(screen.getByPlaceholderText('nama@amarbank.co.id atau 08123456789'), id);
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
    expect(await screen.findByText('Email/nomor telepon atau password salah. Silakan coba lagi.', {}, T)).toBeTruthy();
    for (let i = 0; i < 4; i += 1) {
      await user.clear(screen.getByPlaceholderText('nama@amarbank.co.id atau 08123456789'));
      await login(user, 'bayu.prasetyo', 'salah');
    }
    expect(await screen.findByText('Akun terkunci sementara. Coba lagi dalam 15 menit.', {}, T)).toBeTruthy();
  });

  it('akun Disabled dan Pending ditolak dengan pesan masing-masing', async () => {
    const user = userEvent.setup();
    render(<App />);
    await login(user, 'rizky.ramadhan');
    expect(await screen.findByText('Akun Anda tidak aktif. Hubungi Admin.', {}, T)).toBeTruthy();
    await user.clear(screen.getByPlaceholderText('nama@amarbank.co.id atau 08123456789'));
    await login(user, 'fajar.nugroho@amarbank.co.id');
    expect(await screen.findByText('Akun belum diaktivasi. Cek email undangan Anda.', {}, T)).toBeTruthy();
  });

  it('TL masuk ke Akses ditolak lalu bisa Keluar', async () => {
    const user = await start('andi.pratama');
    expect(await screen.findByText('Akses ditolak. Akun ini tidak memiliki akses ke aplikasi ini.', {}, T)).toBeTruthy();
    expect(screen.getByText('TL, SR, dan SA masuk melalui aplikasi Android Sales Portal.')).toBeTruthy();
    await user.click(screen.getByRole('button', { name: 'Keluar' }));
    expect(await screen.findByText('Masuk ke S&P Portal', {}, T)).toBeTruthy();
  });

  it.each([
    ['rina.saraswati', 'Perlu tindakan Anda'],
    ['hasan.basri', 'Penjualan dan produktivitas di area Anda: Makassar.'],
    ['hendra.wijaya', 'Kelola komponen, tier, dan tanggal bayar insentif. Skema ini dipakai untuk semua estimasi insentif.'],
  ])('%s masuk ke beranda role-nya', async (id, desc) => {
    await start(id);
    expect(await screen.findByText(desc, {}, T)).toBeTruthy();
  });

  it('rute tanpa feature access menampilkan Akses ditolak di dalam shell', async () => {
    const user = await start('hasan.basri');
    await screen.findByText(/Penjualan dan produktivitas di area Anda/, {}, T);
    go('/account-management');
    expect(await screen.findByText('Akun Anda tidak memiliki akses ke halaman ini.', {}, T)).toBeTruthy();
    expect(screen.queryByText('Account Management')).toBeNull(); // menu disembunyikan
    await user.click(screen.getByRole('button', { name: 'Ke halaman utama' }));
    expect(await screen.findByText(/Penjualan dan produktivitas di area Anda/, {}, T)).toBeTruthy();
  });

  it('Lupa password menampilkan arahan ke Admin', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: 'Lupa password?' }));
    expect(screen.getByText('Hubungi Admin untuk mengatur ulang password Anda.')).toBeTruthy();
  });

  it('gangguan layanan menampilkan halaman error dengan Coba lagi', async () => {
    setScenario({ service: 'outage' });
    const user = await start('rina.saraswati');
    expect(await screen.findByText('Gagal memuat data. Coba lagi.', {}, T)).toBeTruthy();
    setScenario({ service: 'ok' });
    await user.click(screen.getByRole('button', { name: 'Coba lagi' }));
    expect(screen.getByRole('button', { name: 'Masuk' })).toBeTruthy();
  });

  it('kembali ke halaman semula setelah login', async () => {
    go('/account-management?status=expired');
    const user = userEvent.setup();
    render(<App />);
    await login(user, 'rina.saraswati');
    await waitFor(() => expect(window.location.hash).toBe('#/account-management?status=expired'), T);
  });
});

describe('W0 Beranda Admin', () => {
  it('kartu tindakan, widget, dan aktivitas tampil; kartu membuka daftar terfilter', async () => {
    const user = await start('rina.saraswati');
    expect(await screen.findByText('Antrean review terlama', {}, T)).toBeTruthy();
    expect(screen.getByText('Tindak lanjut PKS')).toBeTruthy();
    expect(screen.getByText('Aktivitas terbaru')).toBeTruthy();
    await user.click(screen.getByRole('button', { name: /PKS perlu dikirim/ }));
    await waitFor(() => expect(window.location.hash).toContain('status=verified'), T);
    expect(await screen.findByText('Prima Phone Store', {}, T)).toBeTruthy();
  });
});

describe('W3 Partner Pipeline', () => {
  it('daftar default Semua, bisa ganti status dan cari (termasuk Kode Referral); jumlah tab ikut pencarian', async () => {
    const user = await start('rina.saraswati');
    go('/partner-pipeline');
    expect(await screen.findByText('Sinar Jaya Ponsel', {}, T)).toBeTruthy();
    expect(window.location.hash).not.toContain('status=under_review');
    await user.click(screen.getByRole('tab', { name: /Active/ }));
    expect(await screen.findByText('Jaya Abadi Cellular', {}, T)).toBeTruthy();
    await waitFor(() => expect(screen.queryByText('Sinar Jaya Ponsel')).toBeNull());
    expect(window.location.hash).toContain('status=active');
    await user.click(screen.getByRole('tab', { name: /Semua/ }));
    await user.type(screen.getByPlaceholderText('Cari nama partner, no. registrasi, atau kode referral'), '0135');
    expect(await screen.findByText('Mega Cell Makassar', {}, T)).toBeTruthy();
    await waitFor(() => expect(screen.queryByText('Sinar Jaya Ponsel')).toBeNull());
    const search = screen.getByPlaceholderText('Cari nama partner, no. registrasi, atau kode referral');
    await user.clear(search);
    await user.type(search, 'amr6139');
    expect(await screen.findByText('Jaya Abadi Cellular', {}, T)).toBeTruthy();
    await waitFor(() => expect(screen.getByRole('tab', { name: /Semua/ }).textContent).toMatch(/1/));
  });

  it('Verifikasi Selesai nonaktif bila dokumen wajib belum Valid; Data Rekening tanpa tombol verifikasi', async () => {
    await start('rina.saraswati');
    go('/partner-pipeline/REG2026-0147');
    expect(await screen.findByText(/Verifikasi Selesai aktif setelah semua dokumen wajib/, {}, T)).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Verifikasi Selesai' }).disabled).toBe(true);
    expect(screen.getByText('Kode Referral')).toBeTruthy();
    expect(screen.queryByRole('button', { name: 'Valid' })).toBeNull();
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
    expect(screen.getByText('Revisi ke-1')).toBeTruthy();
  });

  it('Nonaktifkan menyebut dampak; Batalkan di Waiting PKS mengingatkan Privy (FR-012, FR-013)', async () => {
    const user = await start('rina.saraswati');
    go('/partner-pipeline/REG2026-0139');
    await user.click(await screen.findByRole('button', { name: 'Nonaktifkan' }, T));
    expect(await screen.findByText('3 toko akan nonaktif, 2 SA/SR dilepas, dan akun PIC dinonaktifkan.', {}, T)).toBeTruthy();
    await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Batal' }));
    go('/partner-pipeline/REG2026-0140');
    await user.click(await screen.findByRole('button', { name: 'Batalkan' }, T));
    expect(await screen.findByText('Batalkan juga dokumen PKS di Privy.', {}, T)).toBeTruthy();
  });

  it('aktivasi gagal: akun PIC tidak dapat dibuat, status tetap Waiting PKS tanpa kode (FR-010, AC-016)', async () => {
    setScenario({ ...DEFAULT_SCENARIO, picAccount: 'fail' });
    const user = await start('rina.saraswati');
    go('/partner-pipeline/REG2026-0140');
    await user.click(await screen.findByRole('button', { name: 'Konfirmasi PKS Ditandatangani & Aktifkan' }, T));
    const dlg = await screen.findByRole('dialog', {}, T);
    await user.click(within(dlg).getByText(/Saya sudah memastikan di Privy web/));
    await user.click(within(dlg).getByRole('button', { name: 'Konfirmasi PKS Ditandatangani & Aktifkan' }));
    expect(await within(dlg).findByText('Aktivasi gagal: akun PIC tidak dapat dibuat.', {}, T)).toBeTruthy();
    const p = partners.find((x) => x.id === 'REG2026-0140');
    expect(p.status).toBe('WAITING_PKS');
    expect(p.merchantCode).toBeNull();
    expect(p.stores.every((x) => x.code === null)).toBe(true);
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

describe('W3 Ubah Data Partner (US-P09)', () => {
  it('partner Active: ubah nama PIC dengan alasan, tercatat di riwayat; rekening terkunci', async () => {
    const user = await start('rina.saraswati');
    go('/partner-pipeline/REG2026-0139');
    await user.click(await screen.findByRole('button', { name: 'Ubah Data Partner' }, T));
    expect(screen.getAllByText('Data rekening tidak dapat diubah setelah partner aktif.').length).toBeGreaterThan(0);
    const name = screen.getByDisplayValue('Rudi Hartono');
    await user.clear(name);
    await user.type(name, 'Rudi Hartono Saputra');
    await user.click(screen.getByRole('button', { name: 'Simpan Perubahan' }));
    expect(await screen.findByText('Informasi wajib diisi', {}, T)).toBeTruthy();
    await user.type(screen.getByPlaceholderText(/Partner pindah alamat/), 'Permintaan partner via email');
    await user.click(screen.getByRole('button', { name: 'Simpan Perubahan' }));
    expect(await screen.findByText('Data partner berhasil diperbarui.', {}, T)).toBeTruthy();
    await user.click(screen.getByRole('tab', { name: 'Riwayat Status' }));
    expect(await screen.findByText('Nama PIC: Rudi Hartono → Rudi Hartono Saputra', {}, T)).toBeTruthy();
  });

  it('Kode Referral unik per partner (tanpa beda huruf besar/kecil)', async () => {
    const user = await start('rina.saraswati');
    go('/partner-pipeline/REG2026-0139');
    await user.click(await screen.findByRole('button', { name: 'Ubah Data Partner' }, T));
    const code = screen.getByDisplayValue('AMR6139');
    await user.clear(code);
    await user.type(code, ' amr7138 ');
    await user.type(screen.getByPlaceholderText(/Partner pindah alamat/), 'Kode referral salah input');
    await user.click(screen.getByRole('button', { name: 'Simpan Perubahan' }));
    expect(await screen.findByText('Kode referral sudah dipakai partner lain', {}, T)).toBeTruthy();
  });

  it('No. Handphone PIC unik per partner, termasuk partner yang belum Active', async () => {
    const user = await start('rina.saraswati');
    go('/partner-pipeline/REG2026-0139');
    await user.click(await screen.findByRole('button', { name: 'Ubah Data Partner' }, T));
    const other = partners.find((x) => x.id === 'REG2026-0148'); // Under Review, belum punya akun PIC
    const phone = screen.getByDisplayValue(partners.find((x) => x.id === 'REG2026-0139').pic.phone);
    await user.clear(phone);
    await user.type(phone, `0${other.pic.phone}`);
    await user.type(screen.getByPlaceholderText(/Partner pindah alamat/), 'Nomor PIC berubah');
    await user.click(screen.getByRole('button', { name: 'Simpan Perubahan' }));
    expect(await screen.findByText('Nomor telepon sudah terdaftar', {}, T)).toBeTruthy();
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
    await user.type(screen.getByPlaceholderText('Budi Santoso'), 'Bayu Baru');
    await pick(user, 'Pilih role', 'Admin (Reviewer)');
    await user.click(screen.getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Email sudah terdaftar', {}, T)).toBeTruthy();
  });

  it('nomor telepon terdaftar ditolak; username tidak ada lagi di form', async () => {
    const user = await start('rina.saraswati');
    go('/account-management');
    await screen.findByText('Yohana Sitorus', {}, T);
    await user.click(screen.getByRole('button', { name: 'Tambah Pengguna' }));
    expect(screen.queryByText('Username')).toBeNull();
    await user.type(await screen.findByPlaceholderText('nama@amarbank.co.id', {}, T), 'orang.baru@amarbank.co.id');
    await user.type(screen.getByPlaceholderText('812 3456 7890'), `0${users[1].phone}`);
    await user.type(screen.getByPlaceholderText('Budi Santoso'), 'Orang Baru');
    await pick(user, 'Pilih role', 'Admin (Reviewer)');
    await user.click(screen.getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Nomor telepon sudah terdaftar', {}, T)).toBeTruthy();
  });

  it('email/telepon yang sudah dipakai ditolak saat field ditinggalkan, sebelum Simpan (AC-AM-005)', async () => {
    const user = await start('rina.saraswati');
    go('/account-management');
    await screen.findByText('Yohana Sitorus', {}, T);
    await user.click(screen.getByRole('button', { name: 'Tambah Pengguna' }));
    await user.type(await screen.findByPlaceholderText('nama@amarbank.co.id', {}, T), 'bayu.prasetyo@amarbank.co.id');
    await user.click(screen.getByPlaceholderText('Budi Santoso'));
    expect(await screen.findByText('Email sudah terdaftar', {}, T)).toBeTruthy();
    await user.type(screen.getByPlaceholderText('812 3456 7890'), `0${users[1].phone}`);
    await user.click(screen.getByPlaceholderText('Budi Santoso'));
    expect(await screen.findByText('Nomor telepon sudah terdaftar', {}, T)).toBeTruthy();
    expect(screen.getByRole('button', { name: 'Simpan' }).disabled).toBe(true);
  });

  it('Ubah Nomor Telepon lalu login dengan nomor baru', async () => {
    let user = await start('rina.saraswati');
    go('/account-management?q=andi');
    await user.click(await screen.findByText('Andi Pratama', {}, T));
    await user.click(await screen.findByRole('button', { name: 'Ubah Nomor Telepon' }, T));
    const dialog = await screen.findByRole('dialog', {}, T);
    await user.type(within(dialog).getByPlaceholderText('812 3456 7890'), '081299998888');
    await user.type(within(dialog).getByPlaceholderText('Contoh: Nomor lama tidak aktif'), 'Nomor lama hilang');
    await user.click(within(dialog).getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Nomor telepon berhasil diubah.', {}, T)).toBeTruthy();
    cleanup();
    sessionStorage.clear();
    go('/login');
    user = await start('+62 812-9999-8888');
    expect(await screen.findByText('Akses ditolak. Akun ini tidak memiliki akses ke aplikasi ini.', {}, T)).toBeTruthy();
  });

  it('kirim ulang tautan dan nonaktifkan pengguna', async () => {
    const user = await start('rina.saraswati');
    go('/account-management?status=expired');
    await user.click(await screen.findByText('Yohana Sitorus', {}, T));
    await user.click(await screen.findByRole('button', { name: 'Kirim Ulang Aktivasi' }, T));
    await user.click(within(await screen.findByRole('dialog', {}, T)).getByRole('button', { name: 'Kirim Ulang' }));
    expect(await screen.findByText('Tautan aktivasi berhasil dikirim ulang.', {}, T)).toBeTruthy();
  });

  it('reset password akun Active lalu tautan reset dipakai', async () => {
    const user = await start('rina.saraswati');
    go('/account-management?q=bayu');
    await user.click(await screen.findByText('Bayu Prasetyo', {}, T));
    await user.click(await screen.findByRole('button', { name: 'Reset Password' }, T));
    expect(await screen.findByText('Kirim tautan reset password ke bayu.prasetyo@amarbank.co.id?', {}, T)).toBeTruthy();
    await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Kirim Tautan' }));
    expect(await screen.findByText('Tautan reset password berhasil dikirim.', {}, T)).toBeTruthy();
  });

  it('ubah email: wajib alasan, unik, dan berlaku langsung', async () => {
    const user = await start('rina.saraswati');
    go('/account-management?q=bayu');
    await user.click(await screen.findByText('Bayu Prasetyo', {}, T));
    await user.click(await screen.findByRole('button', { name: 'Ubah Email' }, T));
    const dlg = await screen.findByRole('dialog', {}, T);
    await user.type(within(dlg).getByPlaceholderText('nama@amarbank.co.id'), 'rina.saraswati@amarbank.co.id');
    await user.type(within(dlg).getByPlaceholderText('Contoh: Email kantor berubah'), 'Salah ketik');
    await user.click(within(dlg).getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Email sudah terdaftar', {}, T)).toBeTruthy();
    const input = within(dlg).getByPlaceholderText('nama@amarbank.co.id');
    await user.clear(input);
    await user.type(input, 'bayu.p@amarbank.co.id');
    await user.click(within(dlg).getByRole('button', { name: 'Simpan' }));
    expect(await screen.findByText('Email berhasil diubah.', {}, T)).toBeTruthy();
    expect((await screen.findAllByText('bayu.p@amarbank.co.id', {}, T)).length).toBeGreaterThan(0);
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
  it('Dashboard menampilkan kartu penjualan & produktivitas dan membuka Kinerja Penjualan', async () => {
    const user = await start('hasan.basri');
    expect(await screen.findByText('Tingkat kehadiran', {}, T)).toBeTruthy();
    expect(screen.getByText('Top 5 TL')).toBeTruthy();
    await user.click(screen.getByRole('button', { name: /Pinjaman diajukan/ }));
    expect(await screen.findByText('Telusuri kinerja pinjaman dari area hingga toko.', {}, T)).toBeTruthy();
  });

  it('Kinerja Penjualan: drill-down sampai toko lalu daftar pinjaman tersamar', async () => {
    const user = await start('hasan.basri');
    go('/apl/kinerja');
    await user.click(await screen.findByText('Makassar', { selector: 'span' }, T));
    await user.click(await screen.findByText('Andi Pratama', {}, T));
    await user.click(await screen.findByText('Siti Rahmawati', {}, T));
    await user.click(await screen.findByText('Jaya Abadi Cellular', {}, T));
    await user.click(await screen.findByText('Jaya Abadi Cellular Mall Panakkukang', {}, T));
    expect(await screen.findByText(/Pinjaman · Jaya Abadi Cellular Mall Panakkukang/, {}, T)).toBeTruthy();
    expect((await screen.findAllByText(/APP-••••\d{4}/, {}, T)).length).toBeGreaterThan(0);
  });

  it('Produktivitas absensi & kunjungan dengan detail per orang', async () => {
    const user = await start('hasan.basri');
    go('/apl/produktivitas');
    await user.click(await screen.findByText('Eko Saputra', {}, T));
    expect(await screen.findByText(/Absensi · Oktober 2026/, {}, T)).toBeTruthy();
    await user.click(screen.getByRole('tab', { name: 'Mingguan' }));
    expect((await screen.findAllByText(/Minggu /, {}, T)).length).toBeGreaterThan(0);
  });

  it('Partner hanya area APL, bisa dibuka ke toko', async () => {
    const user = await start('hasan.basri');
    go('/apl/partner');
    expect(await screen.findByText('Jaya Abadi Cellular', {}, T)).toBeTruthy();
    expect(screen.queryByText(/Galaxy Phone Center/)).toBeNull();
    await user.click(screen.getByRole('button', { name: 'Buka toko Jaya Abadi Cellular' }));
    expect(await screen.findByText('Jaya Abadi Cellular Sudiang', {}, T)).toBeTruthy();
  });

  it('Tim dan Insentif (TL, SA/SR, Partner)', async () => {
    const user = await start('hasan.basri');
    go('/apl/tim');
    expect(await screen.findByText('Andi Pratama', {}, T)).toBeTruthy();
    expect(screen.queryByText('Budi Santoso')).toBeNull();
    go('/apl/insentif?m=2026-09');
    expect(await screen.findByText('Leader Incentive', { exact: false }, T)).toBeTruthy();
    await user.click(screen.getByRole('tab', { name: 'Partner' }));
    expect(await screen.findByText(/Volume Incentive/, {}, T)).toBeTruthy();
  });
});

describe('Super Admin', () => {
  it('buat versi baru, ubah daily fee, terbitkan mulai bulan depan', async () => {
    const user = await start('hendra.wijaya');
    await user.click(await screen.findByText('Sales Agent (SA)', {}, T));
    await user.click(await screen.findByRole('button', { name: 'Buat Versi Baru' }, T));
    const fee = await screen.findByDisplayValue('108000', {}, T);
    await user.clear(fee);
    await user.type(fee, '115000');
    await user.click(screen.getByRole('button', { name: 'Terbitkan' }));
    const dlg = await screen.findByRole('dialog', {}, T);
    expect(within(dlg).getByText(/\[TBD: Apakah versi baru perlu persetujuan approver kedua/)).toBeTruthy();
    await user.click(within(dlg).getByRole('button', { name: 'Terbitkan' }));
    expect(await screen.findByText('Versi skema berhasil diterbitkan.', {}, T)).toBeTruthy();
    expect(await screen.findByText('Terjadwal', {}, T)).toBeTruthy();
  });

  it('batas tier harus naik', async () => {
    const user = await start('hendra.wijaya');
    await user.click(await screen.findByText('Sales Agent (SA)', {}, T));
    await user.click(await screen.findByRole('button', { name: 'Buat Versi Baru' }, T));
    const t2 = await screen.findByLabelText('Sampai tier 2', {}, T);
    await user.clear(t2);
    await user.type(t2, '40');
    await user.click(screen.getByRole('button', { name: 'Simpan Draf' }));
    expect(await screen.findByText('Harus lebih dari 55%', {}, T)).toBeTruthy();
  });

  it('Hasil Perhitungan menampilkan versi skema dan status', async () => {
    await start('hendra.wijaya');
    go('/hasil-perhitungan?m=2026-09');
    expect((await screen.findAllByText('Versi 1', {}, T)).length).toBeGreaterThan(0);
    expect((await screen.findAllByText("Dibayar", {}, T)).length).toBeGreaterThan(0);
  });
});

describe('Tidak ada layar buntu', () => {
  it.each([
    ['rina.saraswati', ['/beranda', '/partner-pipeline', '/partner-pipeline/REG2026-0133', '/account-management']],
    ['lestari.wulandari', ['/apl', '/apl/kinerja', '/apl/produktivitas', '/apl/partner', '/apl/tim', '/apl/insentif']],
    ['hendra.wijaya', ['/skema-insentif', '/hasil-perhitungan']],
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

describe('Sesi web (PRD Scope 1: idle 30 menit, maks. 12 jam)', () => {
  it('memanggil onExpire setelah 30 menit tanpa aktivitas atau 12 jam sejak login', () => {
    vi.useFakeTimers();
    try {
      let n = 0;
      const { unmount } = renderHook(() => useSessionTimeout(true, Date.now(), () => { n += 1; }));
      vi.advanceTimersByTime(IDLE_MS - 60000);
      expect(n).toBe(0);
      vi.advanceTimersByTime(90000);
      expect(n).toBeGreaterThan(0);
      unmount();
      n = 0;
      renderHook(() => useSessionTimeout(true, Date.now() - MAX_SESSION_MS, () => { n += 1; }));
      vi.advanceTimersByTime(30000);
      expect(n).toBeGreaterThan(0);
    } finally {
      vi.useRealTimers();
    }
  });
});
