import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.warn('Supabase environment variables are missing.');
}

export const supabase = createClient(
  url || 'https://tiiavyrxereitetmxoku.supabase.co',
  key || 'sb_publishable_FXvsyOMH3m-KMb--CXHvng_40fGsiK2'
);
