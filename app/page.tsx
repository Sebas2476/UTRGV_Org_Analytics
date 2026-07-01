'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Home() {
  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        console.error('Supabase connection error:', error)
      } else {
        console.log('Supabase connected successfully:', data)
      }
    }
    testConnection()
  }, [])

  return <div>Check the browser console</div>
}