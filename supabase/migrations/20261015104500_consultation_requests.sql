create table public.consultation_requests (
  id uuid primary key,
  created_at timestamptz not null default now(),
  status text not null default 'new' check (status in ('new', 'contacted', 'completed', 'withdrawn')),
  name text not null check (char_length(name) between 1 and 50),
  phone text not null check (phone ~ '^01[016789][0-9]{7,8}$'),
  age text not null check (age in ('20대', '30대', '40대', '50대', '60대 이상')),
  consultation_slots jsonb not null check (jsonb_typeof(consultation_slots) = 'array' and jsonb_array_length(consultation_slots) between 1 and 3),
  job text not null,
  job_other text not null default '' check (char_length(job_other) <= 100),
  experience text not null,
  previous_result text not null,
  income_goal text not null,
  daily_hours text not null,
  weekly_participation text not null,
  nine_month_commitment text not null,
  motivation text not null check (char_length(motivation) between 1 and 5000),
  consent_at timestamptz not null default now(),
  consent_version text not null check (consent_version = '2026-10-15'),
  request_fingerprint text not null check (request_fingerprint ~ '^[0-9a-f]{64}$'),
  client_hash text not null check (client_hash ~ '^[0-9a-f]{64}$')
);

comment on table public.consultation_requests is '월급반 상담 신청. 방문자 조회 불가. 운영자는 Supabase 대시보드에서 확인하고 status를 관리합니다.';
comment on column public.consultation_requests.status is 'new: 신규, contacted: 연락 완료, completed: 상담 완료, withdrawn: 동의 철회';
comment on column public.consultation_requests.client_hash is '중복/과다 접수 제한용 일별 HMAC. 원본 IP는 저장하지 않습니다.';
alter table public.consultation_requests enable row level security;
revoke all on public.consultation_requests from anon, authenticated;
grant select, insert, update, delete on public.consultation_requests to service_role;
create index consultation_requests_created_idx on public.consultation_requests (created_at desc);
create index consultation_requests_phone_idx on public.consultation_requests (phone, created_at desc);
create index consultation_requests_client_idx on public.consultation_requests (client_hash, created_at desc);

create function public.submit_consultation(
  p_id uuid, p_payload jsonb, p_client_hash text, p_fingerprint text
) returns jsonb
language plpgsql security invoker set search_path = '' as $$
declare
  existing_fingerprint text;
begin
  -- Serialize retries and rate checks, including simultaneous requests.
  perform pg_advisory_xact_lock(hashtextextended('consultation-id:' || p_id::text, 0));
  select request_fingerprint into existing_fingerprint
    from public.consultation_requests where id = p_id;
  if found then
    if existing_fingerprint <> p_fingerprint then
      raise exception 'REQUEST_CONFLICT' using errcode = 'P0001';
    end if;
    return jsonb_build_object('id', p_id, 'ok', true);
  end if;
  perform pg_advisory_xact_lock(hashtextextended('consultation-client:' || p_client_hash, 0));
  perform pg_advisory_xact_lock(hashtextextended('consultation-phone:' || (p_payload->>'phone'), 0));
  if (select count(*) from public.consultation_requests
      where client_hash = p_client_hash and created_at > now() - interval '10 minutes') >= 10
    or (select count(*) from public.consultation_requests
      where phone = p_payload->>'phone' and created_at > now() - interval '24 hours') >= 3 then
    raise exception 'RATE_LIMITED' using errcode = 'P0001';
  end if;
  insert into public.consultation_requests (
    id, name, phone, age, consultation_slots, job, job_other, experience,
    previous_result, income_goal, daily_hours, weekly_participation,
    nine_month_commitment, motivation, consent_version, request_fingerprint, client_hash
  ) values (
    p_id, p_payload->>'name', p_payload->>'phone', p_payload->>'age',
    p_payload->'slots', p_payload->>'job', p_payload->>'job_etc', p_payload->>'exp',
    p_payload->>'result', p_payload->>'goal', p_payload->>'hours', p_payload->>'commit',
    p_payload->>'duration', p_payload->>'essay', '2026-10-15', p_fingerprint, p_client_hash
  );
  return jsonb_build_object('id', p_id, 'ok', true);
end;
$$;
revoke all on function public.submit_consultation(uuid, jsonb, text, text) from public, anon, authenticated;
grant execute on function public.submit_consultation(uuid, jsonb, text, text) to service_role;
