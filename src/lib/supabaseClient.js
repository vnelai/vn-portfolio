import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rsaoaqyqpznysrhtllte.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzYW9hcXlxcHpueXNyaHRsbHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNjgzNTMsImV4cCI6MjA2MTc0NDM1M30._sIXMJ3_7rEIAoapbVFxbtNrb182N-_e8Vj4whTEhzg'

export const supabase = createClient(supabaseUrl, supabaseKey)

