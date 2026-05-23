'use client'

import { useState } from 'react'

const BUSINESS_TYPES = [
  'ダンススクール',
  '体操・運動スクール',
  'サッカー・バスケ教室',
  'フィットネスジム（パーソナル）',
  'フィットネスジム（24時間）',
  'ヨガ・ピラティス',
  'インドアゴルフ',
  'プロスポーツチーム',
  'その他スクール・施設',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMessage('')

    const form = e.currentTarget
    const data = {
      company_name: (form.elements.namedItem('company_name') as HTMLInputElement).value,
      contact_name: (form.elements.namedItem('contact_name') as HTMLInputElement).value,
      facility_name: (form.elements.namedItem('facility_name') as HTMLInputElement).value,
      business_type: (form.elements.namedItem('business_type') as HTMLSelectElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      website_url: (form.elements.namedItem('website_url') as HTMLInputElement).value,
      consent: (form.elements.namedItem('consent') as HTMLInputElement).checked,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error ?? '送信に失敗しました')
      }
      setState('success')
      form.reset()
    } catch (err) {
      setState('error')
      setErrorMessage(err instanceof Error ? err.message : '送信に失敗しました')
    }
  }

  if (state === 'success') {
    return (
      <div className="text-center py-16 px-4">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold mb-2 text-[var(--navy)]">
          お問い合わせを受け付けました
        </h3>
        <p className="text-gray-500">
          担当者より1営業日以内にご連絡いたします。
          <br />
          しばらくお待ちください。
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="法人名" required>
          <input
            name="company_name"
            type="text"
            placeholder="株式会社〇〇"
            required
            className={inputCls}
          />
        </Field>
        <Field label="担当者名" required>
          <input
            name="contact_name"
            type="text"
            placeholder="山田 太郎"
            required
            className={inputCls}
          />
        </Field>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="施設・スクール名" required>
          <input
            name="facility_name"
            type="text"
            placeholder="〇〇ダンスアカデミー"
            required
            className={inputCls}
          />
        </Field>
        <Field label="業態" required>
          <select name="business_type" required className={inputCls}>
            <option value="">選択してください</option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="メールアドレス" required>
          <input
            name="email"
            type="email"
            placeholder="info@example.com"
            required
            className={inputCls}
          />
        </Field>
        <Field label="電話番号" required>
          <input
            name="phone"
            type="tel"
            placeholder="090-1234-5678"
            required
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="WebサイトURL（またはSNSアカウント）" required>
        <input
          name="website_url"
          type="text"
          placeholder="https://example.com または @instagram_handle"
          required
          className={inputCls}
        />
      </Field>

      <Field label="相談内容（任意）">
        <textarea
          name="message"
          rows={3}
          placeholder="ご不明な点やご要望があればご記入ください"
          className={inputCls}
        />
      </Field>

      <div className="flex items-start gap-3 p-4 bg-[#F5F7FA] rounded-xl">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 w-4 h-4 accent-[var(--teal)] flex-shrink-0"
        />
        <label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
          <span className="text-red-500 mr-1">*</span>
          hacomono株式会社からのサービスに関する連絡（営業・サポート等）を受け取ることに同意します。
        </label>
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full font-bold text-white bg-[var(--teal)] py-4 rounded-xl text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === 'loading' ? '送信中…' : '無料相談を申し込む →'}
      </button>

      <p className="text-xs text-center text-gray-400">
        送信後、1営業日以内に担当者よりご連絡します
      </p>
    </form>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputCls =
  'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--teal)] focus:border-transparent transition-all bg-white'
