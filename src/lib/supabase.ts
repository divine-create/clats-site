import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env?.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '';

// Verify configuration safely without module load time crashes
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/**
 * Lazy initialization pattern or direct safe initialization.
 * Supplying fallback dummy credentials to prevent crashes when first booting without keys.
 */
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);

export interface SupabaseWaitlistInsert {
  parent_name: string;
  email: string;
  phone: string;
  location: string;
  number_of_children: number;
  age_groups: string;
  founding_family?: boolean;
  founding_family_status: string;
}

export interface SupabaseInquiryInsert {
  full_name: string;
  email: string;
  phone?: string;
  role: string;
  subject: string;
  message: string;
}

/**
 * Inserts a new registrant into the Supabase waitlist table.
 */
export async function insertWaitlistRecord(record: SupabaseWaitlistInsert) {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase environment variables (VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY) are not configured.');
  }

  const { data, error } = await supabase
    .from('waitlist')
    .insert([record])
    .select();

  if (error) {
    console.error('Supabase raw insertion failure:', error);
    throw error;
  }

  return data;
}

/**
 * Inserts a new message inquiry in Supabase contact_inquiries table.
 */
export async function insertInquiryRecord(record: SupabaseInquiryInsert) {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase environment variables (VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY) are not configured.');
  }

  // Attempt insertion with phone field
  const { data, error } = await supabase
    .from('contact_inquiries')
    .insert([record])
    .select();

  if (error) {
    // If phone column hasn't been added to Supabase table schema yet, fallback safely
    if (error.code === 'PGRST204' && record.phone) {
      console.warn('Phone column missing in contact_inquiries table. Falling back to insertion without phone...');
      const { phone, ...fallbackRecord } = record;
      const { data: fallbackData, error: fallbackError } = await supabase
        .from('contact_inquiries')
        .insert([fallbackRecord])
        .select();

      if (fallbackError) {
        console.error('Supabase fallback inquiry insertion failure:', fallbackError);
        throw fallbackError;
      }
      return fallbackData;
    }

    console.error('Supabase raw inquiry insertion failure:', error);
    throw error;
  }

  return data;
}

/**
 * Helpful helper to test the database connection status
 */
export async function getWaitlistCount(): Promise<number> {
  if (!isSupabaseConfigured) return 0;
  try {
    const { count, error } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true });
    
    if (error) throw error;
    return count || 0;
  } catch (err) {
    console.warn('Could not fetch waitlist count:', err);
    return 0;
  }
}
