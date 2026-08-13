-- PetViva / Supabase foundation
create table if not exists public.customers (id uuid primary key default gen_random_uuid(), email text unique not null, name text not null, cpf text, phone text, role text not null default 'cliente' check (role in ('cliente','funcionario','administrador')), created_at timestamptz default now());
create table if not exists public.categories (id bigint generated always as identity primary key, name text unique not null, active boolean default true);
create table if not exists public.products (id bigint generated always as identity primary key, category_id bigint references public.categories(id), name text not null, description text, brand text, price numeric(12,2) not null default 0, promotional_price numeric(12,2), stock integer not null default 0, min_stock integer not null default 0, sku text unique, weight numeric(10,3), rating numeric(3,2) default 0, image_url text, created_at timestamptz default now());
create table if not exists public.pets (id bigint generated always as identity primary key, customer_id uuid references public.customers(id) on delete cascade, name text not null, photo_url text, species text not null, breed text, sex text, birth_date date, weight numeric(8,2), color text, notes text, identification text, created_at timestamptz default now());
create table if not exists public.addresses (id bigint generated always as identity primary key, customer_id uuid references public.customers(id) on delete cascade, cep text, state text, city text, neighborhood text, street text, number text, complement text);
create table if not exists public.orders (id bigint generated always as identity primary key, customer_id uuid references public.customers(id), status text not null default 'aguardando_pagamento', subtotal numeric(12,2) default 0, shipping numeric(12,2) default 0, discount numeric(12,2) default 0, total numeric(12,2) default 0, address_id bigint references public.addresses(id), created_at timestamptz default now());
create table if not exists public.order_items (id bigint generated always as identity primary key, order_id bigint references public.orders(id) on delete cascade, product_id bigint references public.products(id), quantity integer not null, unit_price numeric(12,2) not null);
create table if not exists public.services (id bigint generated always as identity primary key, name text not null, description text, duration_minutes integer, price numeric(12,2), image_url text, active boolean default true);
create table if not exists public.employees (id bigint generated always as identity primary key, name text not null, cpf text, phone text, email text, position text, specialty text, active boolean default true);
create table if not exists public.appointments (id bigint generated always as identity primary key, customer_id uuid references public.customers(id), pet_id bigint references public.pets(id), service_id bigint references public.services(id), employee_id bigint references public.employees(id), starts_at timestamptz not null, status text not null default 'agendado', notes text, created_at timestamptz default now());
create table if not exists public.inventory_movements (id bigint generated always as identity primary key, product_id bigint references public.products(id) on delete cascade, type text not null check (type in ('entrada','saida','ajuste')), quantity integer not null, reason text, created_at timestamptz default now());
create table if not exists public.coupons (id bigint generated always as identity primary key, code text unique not null, discount_percent numeric(5,2), discount_value numeric(12,2), minimum_order numeric(12,2) default 0, starts_at timestamptz, ends_at timestamptz, usage_limit integer, used_count integer default 0, active boolean default true);
create table if not exists public.payments (id bigint generated always as identity primary key, order_id bigint references public.orders(id) on delete cascade, provider text, method text, status text, amount numeric(12,2), external_id text, created_at timestamptz default now());
create table if not exists public.reviews (id bigint generated always as identity primary key, customer_id uuid references public.customers(id), product_id bigint references public.products(id), rating integer check (rating between 1 and 5), comment text, created_at timestamptz default now());
create table if not exists public.settings (key text primary key, value jsonb not null default '{}');

alter table public.customers enable row level security;
alter table public.pets enable row level security;
alter table public.addresses enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.appointments enable row level security;
alter table public.reviews enable row level security;

create index if not exists appointments_starts_at_idx on public.appointments(starts_at);
create index if not exists orders_customer_idx on public.orders(customer_id);
create index if not exists pets_customer_idx on public.pets(customer_id);
