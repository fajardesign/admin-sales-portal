---
title: "KC1 · Aktivasi Akun"
description: Web view Keycloak dari tautan undangan email — buat password dengan kebijakan, plus state tautan kedaluwarsa / sudah aktif / berhasil
type: flow
tags: [flow, activation, keycloak, password-policy]
product: sales-portal-web
screens: [KC1 Aktivasi Akun]
code: [src/pages/Activation.jsx, src/lib/validation.js]
updated: 2026-10-02
---

# KC1 · Aktivasi Akun (`#/activate`)

Dibuka dari tautan di email undangan (dikirim saat Admin membuat akun di W2b). Bukan bagian dari sesi admin.

## Form (tautan valid)
- Ikon `Lock2Line`, judul **"Aktivasi akun Anda"**, deskripsi *"Buat password untuk {email}"*.
- **Password Baru*** + checklist kebijakan (grid 2 kolom, ikon centang hijau / silang abu-abu, update real-time):
  - Minimal 8 karakter
  - 1 huruf besar
  - 1 huruf kecil
  - 1 angka
  - Bukan username (tidak sama dengan email atau local-part email)
- **Konfirmasi Password*** — error *"Password tidak sama"* bila sudah diketik dan tidak sama.
- Tombol **Simpan** nonaktif sampai kedua field terisi. Bila kebijakan belum terpenuhi saat Simpan → error *"Password belum memenuhi ketentuan"*.

## State hasil
| State | Medallion | Judul | Isi |
|---|---|---|---|
| Berhasil | success `ShieldCheckLine` | Aktivasi berhasil | Akun Anda sudah aktif. Silakan buka aplikasi Sales Portal untuk masuk. |
| Tautan kedaluwarsa | error `TimeLine` | Tautan tidak berlaku | Tautan sudah kedaluwarsa. Hubungi Admin. |
| Sudah aktif | information `InformationLine` | Akun sudah aktif | Akun Anda sudah aktif. Silakan masuk melalui aplikasi. |

Setelah aktivasi, status pengguna di W2a berubah menjadi **Aktif**.
