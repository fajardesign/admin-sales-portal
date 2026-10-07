-- Penguncian login mobile: 5x gagal → terkunci 15 menit (sama dengan aturan login portal).
alter table public.app_user
  add column if not exists failed_attempts int not null default 0,
  add column if not exists lock_until timestamptz;
