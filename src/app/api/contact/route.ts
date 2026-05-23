import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
  )
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'リクエストが不正です' }, { status: 400 })
  }

  const {
    company_name,
    contact_name,
    facility_name,
    business_type,
    email,
    phone,
    website_url,
    consent,
    message,
  } = body as Record<string, unknown>

  if (
    !company_name ||
    !contact_name ||
    !facility_name ||
    !business_type ||
    !email ||
    !phone ||
    !website_url ||
    consent !== true
  ) {
    return NextResponse.json(
      { error: '必須項目が入力されていません' },
      { status: 422 },
    )
  }

  const { error } = await supabase.from('leads').insert({
    company_name,
    contact_name,
    facility_name,
    business_type,
    email,
    phone,
    website_url,
    consent: true,
    message: message ?? null,
    status: 'new',
  })

  if (error) {
    console.error('[contact] supabase error', error)
    return NextResponse.json({ error: 'データの保存に失敗しました' }, { status: 500 })
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
