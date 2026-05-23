import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Lead = {
  id?: string
  company_name: string
  contact_name: string
  facility_name: string
  business_type: string
  email: string
  phone: string
  website_url: string
  consent: boolean
  message?: string
  status: 'new'
  created_at?: string
}
