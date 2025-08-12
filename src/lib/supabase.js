/*
 * Research Portfolio Template - Supabase Configuration
 * © 2025 Surya GS Chitti
 * 
 * Supabase integration for dynamic content management.
 * To enable: Add your Supabase credentials to .env.local
 * 
 * Template design by Surya GS Chitti
 * GitHub: https://github.com/codechitti216/TheDailyPush
 */

import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// Add these to your .env.local file:
// VITE_SUPABASE_URL=your_supabase_url
// VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Initialize Supabase client (optional - only if you want database integration)
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseAnonKey;
}; 