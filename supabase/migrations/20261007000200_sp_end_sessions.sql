-- Akhiri semua sesi Auth milik satu pengguna (ACC-05 Nonaktifkan, ACC-07 Reset Password: "sesi aktif berakhir").
create or replace function public.sp_end_sessions(uid uuid) returns void
language sql security definer set search_path = '' as $$
  delete from auth.sessions where user_id = uid;
$$;
revoke execute on function public.sp_end_sessions(uuid) from public, anon, authenticated;
grant execute on function public.sp_end_sessions(uuid) to service_role;
