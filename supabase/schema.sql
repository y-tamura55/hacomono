-- hacomono LP leads table
create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  company_name   text not null,
  contact_name   text not null,
  facility_name  text not null,
  business_type  text not null,
  email          text not null,
  phone          text not null,
  website_url    text not null,
  consent        boolean not null default false,
  message        text,
  status         text not null default 'new',
  created_at     timestamptz not null default now()
);

-- Row Level Security
alter table leads enable row level security;

-- サービスロールキーからのinsertのみ許可（LPのAPIルートが使用）
create policy "service role insert" on leads
  for insert
  to service_role
  with check (true);

-- 管理者（authenticated）は全件閲覧可能
create policy "authenticated select" on leads
  for select
  to authenticated
  using (true);
