import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://absjqcoalulzgilgjfuz.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFic2pxY29hbHVsemdpbGdqZnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc2MTI1NTMsImV4cCI6MjA4MzE4ODU1M30.irCq788vdUJY1IyCiFJEJmPqqVh4kbdSzSsCs-6XBmc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})
