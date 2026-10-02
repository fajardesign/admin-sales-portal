---
title: "W1 · Login Admin & Akses Ditolak"
description: Flow login portal web via Keycloak, termasuk penolakan akses untuk akun tanpa hak web (Team Leader)
type: flow
tags: [flow, login, keycloak, access-control]
product: sales-portal-web
screens: [W1 Login Admin, W1 Akses Ditolak]
code: [src/pages/Login.jsx, src/pages/AccessDenied.jsx]
updated: 2026-10-02
---

# W1 · Login Admin & Akses Ditolak

## Login (`#/login`)
- Judul **"Masuk ke Sales Portal"**, deskripsi *"Masukkan email atau nomor telepon dan password Anda."*, ikon `User6Line`.
- Field:
  - **Email atau Nomor Telepon** (wajib, ikon `MailLine`, placeholder `nama@amarbank.co.id atau 0812...`)
  - **Password** (wajib, `type=password` dengan toggle mata, ikon `Lock2Line`)
- Tombol **Masuk** (full width) **nonaktif** sampai kedua field terisi; saat proses label → **"Memproses..."**.
- Setelah login, password dikosongkan.

## Routing setelah login
| Role hasil autentikasi | Tujuan |
|---|---|
| Admin | W2a Manajemen Akun |
| Team Leader / tanpa akses web | Akses ditolak |

> Prototipe/mock: local-part email yang mengandung **"tl"** dianggap TL (mis. `tl.andi@amarbank.co.id`). Catatan demo ini hanya tampil di mode dev.

## Akses ditolak (`#/denied`)
- Medallion error (`ShieldUserLine`), judul **"Akses ditolak"**, isi *"Akses ditolak. Akun ini tidak memiliki akses ke portal web."*
- Teks kecil **"Masuk sebagai {loginId}"**.
- Tombol **Keluar** (stroke neutral, ikon `LogoutBoxRLine`) → kembali ke Login & hapus sesi.
- Tanpa footer.

## Keluar
Tombol **Keluar** di header W2 maupun di Akses ditolak → hapus sesi, kembali ke `#/login`.

## Belum didesain
Password salah, akun terkunci, lupa password.
