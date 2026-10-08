# Supabase — akun Account Management untuk login mobile

Project: `figgy` (ref `rhjanqgbvmetrjbfrzwh`). Flow lengkap: `okf_repository_design/products/sales_dashboard/flows_android/mobile_login.md`.

| Bagian | Isi |
|---|---|
| `migrations/20261007000000_sp_app_user.sql` | Tabel `app_user` (RLS: baca baris sendiri), `sp_sync_key` + `sp_check_sync_key()` |
| `migrations/20261007000100_sp_app_user_lockout.sql` | Kolom `failed_attempts`, `lock_until` (kunci 15 menit setelah 5x salah) |
| `migrations/20261008000000_sp_login_phone.sql` | Login email atau nomor telepon: `phone` wajib, format `8…`, unik; `username` = email |
| `migrations/20261007000200_sp_end_sessions.sql` | `sp_end_sessions()` — akhiri sesi saat Nonaktifkan (ACC-05) dan Reset Password (ACC-07) |
| `functions/sp-account-admin` | Sinkronisasi portal → `app_user` + Supabase Auth (`list`, `upsert`), dilindungi header `x-sp-sync-key` |
| `functions/sp-mobile-login` | Login: `{ identifier (email atau nomor telepon), password, platform? }` → `{ session, user, access }`. `platform` default `sales-app-access` (TL/SR/SA); Partner PIC memakai `partner-web-access` |

Migrasi dan kedua function sudah ter-deploy (`verify_jwt: false` karena tiap function memeriksa aksesnya sendiri).

## Mengaktifkan sinkronisasi portal

1. Buat kunci acak: `openssl rand -hex 24`.
2. Simpan hash-nya di Supabase (SQL Editor):
   ```sql
   insert into public.sp_sync_key (id, key_hash)
   values (1, encode(extensions.digest('<KUNCI>', 'sha256'), 'hex'))
   on conflict (id) do update set key_hash = excluded.key_hash;
   ```
3. Salin `.env.example` ke `.env.local`, isi `VITE_SP_SYNC_KEY=<KUNCI>`, lalu `npm run dev`.
   Saat dibuka pertama kali, data contoh diunggah. Akun Active langsung bisa login mobile dengan password `Demo1234`.

Kunci ini ikut ter-bundle di JS portal. Hanya untuk prototipe lokal. Jangan set di build GitHub Pages. Di produksi, akses admin wajib diperiksa lewat sesi login Admin.

## Contoh login dari mobile

```bash
curl -X POST https://rhjanqgbvmetrjbfrzwh.supabase.co/functions/v1/sp-mobile-login \
  -H 'apikey: <VITE_SUPABASE_PUBLISHABLE_KEY>' -H 'content-type: application/json' \
  -d '{"identifier":"andi.pratama@amarbank.co.id","password":"Demo1234"}'  # atau nomor telepon, mis. "0812…"
```

Lalu di aplikasi: `supabase.auth.setSession(res.session)`, dan `supabase.from('app_user').select('*')` mengembalikan profil sendiri.
