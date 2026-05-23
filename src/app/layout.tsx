import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
})

export const metadata: Metadata = {
  title: 'hacomono導入支援 | DAYS株式会社',
  description:
    'スクール・フィットネス施設の会員管理・予約・決済をオールインワンで解決。DAYS株式会社がhacomono公式パートナーとして導入をサポートします。初期費用100,000円割引の特典あり。',
  robots: 'noindex, nofollow',
  openGraph: {
    title: 'hacomono導入支援 | DAYS株式会社',
    description:
      'スクール・フィットネス施設の業務効率化をhacomonoで実現。初期費用100,000円割引特典。',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
