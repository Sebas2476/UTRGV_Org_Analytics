# Database Schema Notes

## members table (created in Supabase)
- id (uuid, references auth.users.id, cascade on delete)
- full_name (text)
- email (text)
- joined_at (timestamptz, default now())
- is_active (bool, default true)
- left_at (timestamptz, nullable)

## RLS Policies (all scoped to `authenticated` role, self-access only)
- SELECT: users can view their own row
- INSERT: users can insert their own row
- UPDATE: users can update their own row (used for "leave org" action)