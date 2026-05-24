import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

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

  // メール送信（RESEND_API_KEYが設定されている場合のみ）
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY)

    // 管理者通知メール（info@days-co.jp宛）
    await resend.emails.send({
      from: 'hacomono LP <noreply@days-co.jp>',
      to: ['info@days-co.jp'],
      subject: `【hacomono LP】新規お問い合わせ：${company_name} ${contact_name}様`,
      html: `
        <h2>新規お問い合わせが届きました</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">法人名</th><td style="padding:8px;border:1px solid #ddd">${company_name}</td></tr>
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">担当者名</th><td style="padding:8px;border:1px solid #ddd">${contact_name}</td></tr>
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">施設・スクール名</th><td style="padding:8px;border:1px solid #ddd">${facility_name}</td></tr>
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">業態</th><td style="padding:8px;border:1px solid #ddd">${business_type}</td></tr>
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">メールアドレス</th><td style="padding:8px;border:1px solid #ddd"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">電話番号</th><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">WebサイトURL</th><td style="padding:8px;border:1px solid #ddd"><a href="${website_url}">${website_url}</a></td></tr>
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">相談内容</th><td style="padding:8px;border:1px solid #ddd">${message || '（なし）'}</td></tr>
        </table>
        <p style="margin-top:24px;color:#666;font-size:13px">
          SupabaseのDB確認：<a href="https://supabase.com/dashboard/project/hnzmffqedqfdbpkrljja/editor">Table Editor → leads</a>
        </p>
      `,
    }).catch((err) => console.error('[contact] admin email error', err))

    // お客様への自動返信メール
    await resend.emails.send({
      from: 'DAYS株式会社 <noreply@days-co.jp>',
      to: [email as string],
      subject: '【DAYS × hacomono】お問い合わせを受け付けました',
      html: `
        <p>${contact_name} 様</p>
        <p>
          この度はhacomono導入のご相談をお申し込みいただき、誠にありがとうございます。<br>
          お問い合わせを受け付けました。
        </p>
        <p>
          <strong>2営業日以内</strong>にDAYS株式会社よりご連絡いたします。<br>
          しばらくお待ちください。
        </p>
        <hr style="margin:24px 0;border:none;border-top:1px solid #eee">
        <h3 style="color:#0F2D4A">ご入力内容</h3>
        <table style="border-collapse:collapse;width:100%;max-width:560px">
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">法人名</th><td style="padding:8px;border:1px solid #ddd">${company_name}</td></tr>
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">施設・スクール名</th><td style="padding:8px;border:1px solid #ddd">${facility_name}</td></tr>
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">業態</th><td style="padding:8px;border:1px solid #ddd">${business_type}</td></tr>
          <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f5f5f5">相談内容</th><td style="padding:8px;border:1px solid #ddd">${message || '（なし）'}</td></tr>
        </table>
        <hr style="margin:24px 0;border:none;border-top:1px solid #eee">
        <p style="color:#666;font-size:13px">
          DAYS株式会社<br>
          <a href="https://days-co.jp">https://days-co.jp</a>
        </p>
      `,
    }).catch((err) => console.error('[contact] customer email error', err))
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
