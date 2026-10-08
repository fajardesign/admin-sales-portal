-- Revisi stakeholder 2026-10-08: login dengan email atau nomor telepon; username Keycloak = email (internal, tidak ditampilkan).
-- Nomor telepon disimpan ternormalisasi (diawali 8, 8–12 digit) dan wajib unik.
update public.app_user set username = email where username <> email;

alter table public.app_user
  alter column phone set not null,
  add constraint app_user_phone_format check (phone ~ '^8[0-9]{7,11}$'),
  add constraint app_user_phone_key unique (phone);

-- Tautan aktivasi kini 3x24 jam: contoh "Expired" (Yohana Sitorus, id 14) dimundurkan agar tetap Expired.
update public.app_user set invite_sent_at = invite_sent_at - interval '40 hours', created_at = created_at - interval '40 hours'
where id = 14 and status = 'PENDING';
