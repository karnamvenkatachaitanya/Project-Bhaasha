-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users Table (extends Supabase Auth)
create table public.users (
  id uuid references auth.users not null primary key,
  email text,
  role text check (role in ('admin', 'trainer', 'assistant', 'intern', 'learner')) default 'learner',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Lessons Table
create table public.lessons (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  content text,
  difficulty text check (difficulty in ('beginner', 'intermediate', 'advanced')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- User Progress Table
create table public.user_progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) not null,
  lesson_id uuid references public.lessons(id) not null,
  score int,
  status text check (status in ('started', 'completed')) default 'started',
  completed_at timestamp with time zone,
  unique(user_id, lesson_id)
);

-- Row Level Security (RLS)
alter table public.users enable row level security;
alter table public.lessons enable row level security;
alter table public.user_progress enable row level security;

-- Policies (Basic examples)
create policy "Public profiles are viewable by everyone." on public.users for select using ( true );
create policy "Users can insert their own profile." on public.users for insert with check ( auth.uid() = id );
create policy "Users can update own profile." on public.users for update using ( auth.uid() = id );

create policy "Lessons are viewable by everyone." on public.lessons for select using ( true );

create policy "Users can view own progress." on public.user_progress for select using ( auth.uid() = user_id );
create policy "Users can update own progress." on public.user_progress for insert with check ( auth.uid() = user_id );
