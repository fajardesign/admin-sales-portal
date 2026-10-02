---
title: Sales Portal Web (Admin)
description: Portal web admin Amar Bank Sales Portal — fase 1 hanya untuk Admin membuat akun Team Leader dan mengirim undangan aktivasi
type: product
tags: [product, sales-portal, admin, keycloak]
source: claude.ai/design project 4951b0b7-0220-4921-9f19-e1e9d94423eb ("Sales Portal Web.dc.html")
source_copy: design-sources/sales-portal-web/
code: src/
updated: 2026-10-02
---

# Sales Portal Web (Admin)

## Ringkasan
Portal web untuk **Admin** Sales Portal Amar Bank. Pada fase ini fungsinya tunggal: **membuat akun Team Leader (TL)**
dan mengirim **undangan aktivasi** lewat email. Team Leader sendiri **tidak** memakai portal web — mereka masuk melalui
**aplikasi** Sales Portal setelah aktivasi.

## Peran & akses
| Peran | Akses portal web | Keterangan |
|---|---|---|
| Admin | Ya | Mengelola akun TL (Manajemen Akun) |
| Team Leader (TL) | **Tidak** | Login web → layar *Akses ditolak*; memakai aplikasi |

Role selain TL belum ada di fase ini (Select "Role" dikunci ke `TL (Team Leader)`, hint *"Fase ini hanya untuk Team Leader."*).

## Autentikasi
- Identity provider: **Keycloak**, realm **`sales-portal`**. Layar login & aktivasi bertema Amar Bank (Keycloak themed).
- Login memakai **email atau nomor telepon** + password.
- Akun baru dibuat di Keycloak oleh backend saat Admin menyimpan form; status awal **Belum aktif** sampai pengguna menyelesaikan aktivasi (KC1).

## Daftar layar
| ID | Layar | Rute (app) | Flow |
|---|---|---|---|
| W1 | Login Admin | `#/login` | [W1 Login](../flows/w1-login.md) |
| W1 | Akses ditolak | `#/denied` | [W1 Login](../flows/w1-login.md) |
| W2a | Manajemen Akun (daftar TL) | `#/users` | [W2 Manajemen Akun](../flows/w2-account-management.md) |
| W2b | Modal Tambah Pengguna | (modal di W2a) | [W2 Manajemen Akun](../flows/w2-account-management.md) |
| KC1 | Aktivasi Akun (web view Keycloak) | `#/activate` | [KC1 Aktivasi](../flows/kc1-activation.md) |

## Navigasi & layout
- Shell admin: Sidebar gelap dengan logo Amar Bank horizontal putih; satu section **Atur** → **Manajemen Akun**.
- Header halaman: medallion ikon `TeamLine` + judul + deskripsi; kanan: chip pengguna (inisial, nama, peran) + tombol **Keluar**.
- Halaman auth (W1, KC1): latar `bg-weak-50`, header logo berwarna + label ("Sales Portal · Admin" / "Sales Portal"), kartu 440px di tengah, footer "© 2026 Amar Bank" (login: + "Didukung Keycloak · realm sales-portal").

## Implementasi saat ini
- Kode: `src/` (Vite + React 19, komponen dari `design-system/`). API masih **mock** di `src/api/mockApi.js` — kontrak fungsi:
  `login(loginId, password)`, `listTeamLeaders()`, `createTeamLeader(form)`, `checkActivation(token)`, `activateAccount(password)`.
- Skenario prototipe (state tabel, hasil simpan, status tautan, nama belakang opsional) diatur lewat **DevToolbar** (hanya mode dev), padanan props prototipe di claude.ai/design.
- Tes: `src/__tests__/` (`npm test`) mencakup validasi dan seluruh flow di atas.

## Pertanyaan terbuka
- Apakah **Nama Belakang** wajib atau opsional? Prototipe menyediakan keduanya (`lastNameOptional`, default wajib).
- Kebijakan password final Keycloak (saat ini: min 8, 1 huruf besar, 1 huruf kecil, 1 angka, bukan username).
- Masa berlaku tautan aktivasi dan apakah Admin bisa mengirim ulang undangan (belum ada di desain).
- Login yang gagal (password salah, akun terkunci) belum didesain — prototipe selalu sukses.
