-- S&P Portal — data Account Management (app_user) untuk login aplikasi mobile via Supabase Auth.
-- Portal admin menulis lewat Edge Function `sp-account-admin` (service role); mobile login lewat `sp-mobile-login`
-- dan membaca profilnya sendiri lewat RLS.

create extension if not exists pgcrypto with schema extensions;

create table if not exists public.app_user (
  id                  bigint primary key,                 -- id pengguna di portal (stabil)
  auth_user_id        uuid unique references auth.users(id) on delete set null,
  full_name           text not null,
  role                text not null check (role in ('REVIEWER','APL','TL','SR','SA','PARTNER')),
  username            text not null unique,
  email               text not null unique,
  phone               text,
  tl_level            text check (tl_level in ('SENIOR','JUNIOR')),
  area_ids            int[] not null default '{}',
  supervisor_id       bigint references public.app_user(id) on delete set null deferrable initially deferred,
  partner_id          text,
  status              text not null check (status in ('PENDING','ACTIVE','DISABLED')),
  invite_sent_at      timestamptz,
  invite_resend_count int not null default 0,
  activated_at        timestamptz,
  disabled_at         timestamptz,
  disabled_by         text,
  disabled_reason     text,
  reset_sent_at       timestamptz,
  created_by          text,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now(),
  log                 jsonb not null default '[]'::jsonb
);

create index if not exists app_user_supervisor_idx on public.app_user (supervisor_id);

create or replace function public.app_user_touch() returns trigger
language plpgsql set search_path = '' as $$
begin new.updated_at := now(); return new; end $$;

drop trigger if exists app_user_touch on public.app_user;
create trigger app_user_touch before update on public.app_user
for each row execute function public.app_user_touch();

alter table public.app_user enable row level security;

-- Pengguna mobile yang sudah login hanya bisa membaca profilnya sendiri. Tidak ada akses tulis dari klien.
drop policy if exists "app_user read own" on public.app_user;
create policy "app_user read own" on public.app_user
  for select to authenticated using (auth_user_id = (select auth.uid()));

revoke all on public.app_user from anon;
revoke insert, update, delete on public.app_user from authenticated;

-- Kunci sinkronisasi portal → Edge Function (disimpan sebagai hash, hanya service role).
create table if not exists public.sp_sync_key (
  id int primary key default 1 check (id = 1),
  key_hash text not null
);
alter table public.sp_sync_key enable row level security;
revoke all on public.sp_sync_key from anon, authenticated;

create or replace function public.sp_check_sync_key(k text) returns boolean
language sql security definer set search_path = '' as $$
  select exists (select 1 from public.sp_sync_key where key_hash = encode(extensions.digest(k, 'sha256'), 'hex'));
$$;
revoke execute on function public.sp_check_sync_key(text) from public, anon, authenticated;
grant execute on function public.sp_check_sync_key(text) to service_role;
