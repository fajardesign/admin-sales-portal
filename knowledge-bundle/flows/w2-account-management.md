---
title: "W2 · Manajemen Akun (Team Leader)"
description: Daftar akun Team Leader (W2a) dan modal Tambah Pengguna (W2b) — validasi, hasil simpan, toast, dan konfirmasi batal
type: flow
tags: [flow, account-management, team-leader, form, validation]
product: sales-portal-web
screens: [W2a Manajemen Akun, W2b Tambah Pengguna]
code: [src/pages/account-management/]
updated: 2026-10-02
---

# W2 · Manajemen Akun

## W2a · Daftar Team Leader (`#/users`)
- Header: **"Manajemen Akun"** — *"Buat akun Team Leader dan kirim undangan aktivasi."*
- Judul seksi **"Team Leader"** + Badge abu-abu jumlah baris (hanya saat ada data). Tombol **Tambah Pengguna** (ikon `UserAddLine`) di kanan saat data/loading.
- Tabel (kartu radius 16, min-width 860, scroll horizontal):

| Kolom | Isi |
|---|---|
| Nama | Avatar inisial (32px, abu-abu) + nama lengkap |
| Email | lowercase |
| Telepon | format `+62 812-3456-7890` |
| Status | StatusBadge dot: **Aktif** (`completed`) / **Belum aktif** (`pending`) |
| Dibuat | tanggal `02 Okt 2026` + jam `10.15 WIB` (UTC+7); **urut terbaru di atas** (ikon sort desc) |

### State tabel
| State | Tampilan |
|---|---|
| loading | 5 baris skeleton (pulse 1.4s) |
| data | baris pengguna |
| empty | ilustrasi `empty-users.png` + *"Belum ada pengguna. Tambahkan pengguna pertama."* + tombol Tambah Pengguna |
| error | ilustrasi `empty-error.png` + *"Gagal memuat data. Coba lagi."* + tombol **Coba lagi** (ikon `RefreshLine`) → loading → data |

Baris yang baru dibuat **disorot** `primary-alpha-10` selama **3 detik** dan muncul paling atas.

## W2b · Modal Tambah Pengguna
Modal 480px — judul **"Tambah Pengguna"**, deskripsi *"Undangan aktivasi akan dikirim ke email pengguna."*, ikon `UserAddLine`.

| Field | Aturan | Catatan |
|---|---|---|
| Email* | wajib; format `x@y.zz`; ≤254 karakter; disimpan lowercase + trim | ikon `MailLine`, placeholder `nama@email.com` |
| Telepon* | wajib; setelah normalisasi harus `^8\d{7,11}$` | prefix tetap **+62**; input hanya digit (maks 14); `0`/`62` di depan dibuang |
| Nama Depan* | wajib; ≤50; huruf (termasuk aksen), spasi, `.` `'` `-` | placeholder `Budi` |
| Nama Belakang* | sama dengan Nama Depan; **bisa dikonfigurasi opsional** → sublabel "(Opsional)" | placeholder `Santoso` |
| Role* | Select **nonaktif**, nilai `TL (Team Leader)` | hint *"Fase ini hanya untuk Team Leader."* |

Pesan validasi: **"Informasi wajib diisi"**, **"Format tidak valid"**, **"Maksimal 50 karakter"**.
- Error ditampilkan setelah field **di-blur** (touched), atau semua field saat klik Simpan.
- **Simpan** nonaktif bila ada error validasi, error server, atau sedang menyimpan (label "Menyimpan..."; semua field disabled).

### Hasil simpan
| Hasil | Perilaku |
|---|---|
| Sukses | modal tutup, baris baru disorot, toast **success**: *"Pengguna berhasil dibuat. Undangan aktivasi telah dikirim."* |
| Akun dibuat, email undangan gagal | modal tutup, baris baru, toast **warning**: *"Pengguna dibuat, tetapi email undangan gagal dikirim. Hubungi tim teknis."* |
| Keycloak gagal | modal tetap terbuka, toast **error**: *"Gagal membuat akun. Coba lagi."* |
| Email duplikat | error inline di Email: *"Email sudah terdaftar"* |
| Telepon duplikat | error inline di Telepon: *"Nomor telepon sudah terdaftar"* |

Error server hilang saat field terkait diubah. Toast muncul di kanan atas, hilang otomatis setelah **5 detik** (bisa ditutup).

### Batal
- Batal / tombol X / klik overlay / Esc saat menyimpan → diabaikan.
- Form kosong → modal langsung tutup.
- Form sudah diisi → StatusModal **warning** *"Batalkan penambahan pengguna?"* — *"Data yang sudah diisi akan hilang."*
  - **Lanjutkan Mengisi** → kembali ke form (data tetap)
  - **Ya, Batalkan** (tone error) → reset form & tutup modal
