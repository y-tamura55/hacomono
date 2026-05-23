import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

const businessTypes = [
  {
    label: 'ダンススクール',
    photo: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80',
    alt: 'ダンスレッスンの様子',
  },
  {
    label: 'フィットネスジム',
    photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    alt: 'フィットネスジムの様子',
  },
  {
    label: 'ヨガ・ピラティス',
    photo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    alt: 'ヨガクラスの様子',
  },
  {
    label: 'スポーツスクール',
    photo: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80',
    alt: 'スポーツスクールの様子',
  },
  {
    label: 'パーソナルトレーニング',
    photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    alt: 'パーソナルトレーニングの様子',
  },
  {
    label: 'インドアゴルフ',
    photo: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80',
    alt: 'インドアゴルフの様子',
  },
]

const features = [
  { icon: '👥', title: '会員管理', desc: '入会・更新・退会を自動化。会員情報をクラウドで一元管理。' },
  { icon: '📅', title: '予約・スケジュール', desc: 'オンライン予約・キャンセル・LINE自動リマインド。' },
  { icon: '💳', title: '決済・請求', desc: '月謝・都度課金・物販。クレカ・口座振替をシステム内完結。' },
  { icon: '📊', title: '売上・分析', desc: '売上・入退会の推移をリアルタイム可視化。' },
  { icon: '📱', title: '会員アプリ', desc: '会員が自ら予約・確認。スタッフの電話対応工数を大幅削減。' },
  { icon: '🔗', title: '外部連携', desc: 'Zoom・Googleカレンダー・ECなど多彩なツールと連携。' },
]

const testimonials = [
  {
    type: 'ダンススクール',
    voice: '月謝集金と予約管理に毎月3日かかっていたのが、ほぼゼロになりました。',
    name: '関東・ダンススクール運営者',
    photo: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=400&q=80',
    alt: 'ダンススクール',
  },
  {
    type: 'フィットネスジム',
    voice: '入退会手続きがオンライン完結で、受付人件費を月20万円以上削減できました。',
    name: '首都圏・パーソナルジム経営者',
    photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
    alt: 'フィットネスジム',
  },
  {
    type: 'ヨガスタジオ',
    voice: 'LINE通知で予約リマインドが自動送信され、無断キャンセルが激減しました。',
    name: '関西・ヨガスタジオ代表',
    photo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
    alt: 'ヨガスタジオ',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-black text-xl tracking-tight text-[var(--teal)]">DAYS</span>
            <span className="text-gray-300 mx-1">×</span>
            <span className="font-black text-xl tracking-tight text-[var(--navy)]">hacomono</span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[var(--teal)] px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            無料相談する
          </a>
        </div>
      </header>

      {/* ヒーロー：背景写真 + ダイナミックレイアウト */}
      <section className="pt-16 relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=85"
            alt="フィットネス施設の活気ある様子"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--navy)]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/70 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 text-white w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
              <span className="w-2 h-2 rounded-full animate-pulse bg-[var(--teal)]" />
              DAYS株式会社 × hacomono公式パートナー
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
              スクール・<br />
              フィットネスの<br />
              <span className="text-[var(--teal)]">業務を全部、</span><br />
              hacomonoへ。
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              会員管理・予約・決済・請求をオールインワンで自動化。<br />
              DAYS経由なら<strong className="text-white"> 初期費用100,000円割引</strong>でスタート。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center font-bold text-white bg-[var(--teal)] px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-all hover:scale-105"
              >
                無料で相談する →
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center font-medium text-white border border-white/30 px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors"
              >
                機能を見る
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4 text-sm text-white/60">
              <span className="flex items-center gap-1"><span className="text-[var(--teal)]">✓</span> 初期費用100,000円割引</span>
              <span className="flex items-center gap-1"><span className="text-[var(--teal)]">✓</span> 導入サポート付き</span>
              <span className="flex items-center gap-1"><span className="text-[var(--teal)]">✓</span> 最短2週間で稼働</span>
            </div>
          </div>
        </div>
      </section>

      {/* 実績数字 */}
      <section className="py-12 bg-[var(--teal)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { num: '12,000+', label: '導入店舗数' },
              { num: '2週間', label: '最短稼働期間' },
              { num: '¥100,000', label: 'DAYS経由割引額' },
              { num: '60分', label: '無料相談' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-black mb-1">{num}</div>
                <div className="text-sm text-white/80">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 対応業態：写真グリッド */}
      <section className="py-20 bg-[var(--gray-bg)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-bold mb-2 uppercase tracking-widest text-[var(--teal)]">
              Business Types
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--navy)]">
              あらゆる業態に対応
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {businessTypes.map((b) => (
              <div key={b.label} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <Image
                  src={b.photo}
                  alt={b.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-white font-bold text-sm md:text-base">{b.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 機能 */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-bold mb-2 uppercase tracking-widest text-[var(--teal)]">
              Features
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--navy)]">
              一つのシステムで、全てが完結
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-[var(--navy)]">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 導入施設の声：写真付きカード */}
      <section className="py-20 bg-[var(--navy)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-bold mb-2 uppercase tracking-widest text-[var(--teal)]">
              Testimonials
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              導入した施設の声
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative h-40">
                  <Image
                    src={t.photo}
                    alt={t.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[var(--navy)]/50" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--teal)] text-white">
                      {t.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-white/80 leading-relaxed mb-3">
                    &ldquo;{t.voice}&rdquo;
                  </p>
                  <p className="text-xs text-white/40">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAYS経由特典 */}
      <section className="py-20 bg-[var(--teal)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
            DAYS経由で申し込むと<br />
            <span className="underline decoration-white/40 underline-offset-4">初期費用100,000円が割引</span>
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto">
            DAYS株式会社はhacomono公式パートナー。パートナー経由で通常初期費用から100,000円割引が適用されます。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            {[
              { label: '初期費用割引', value: '¥100,000 OFF' },
              { label: '専任サポート', value: '導入〜稼働まで' },
              { label: '無料相談', value: '60分間' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/20 rounded-xl px-6 py-4">
                <div className="text-xl font-black mb-1">{value}</div>
                <div className="text-sm text-white/70">{label}</div>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-[var(--teal)] bg-white px-10 py-4 rounded-xl text-lg hover:opacity-90 transition-all hover:scale-105"
          >
            今すぐ無料相談する →
          </a>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section id="contact" className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-bold mb-2 uppercase tracking-widest text-[var(--teal)]">Contact</p>
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-[var(--navy)]">
              無料相談・お問い合わせ
            </h2>
            <p className="text-gray-500">担当者より1営業日以内にご連絡いたします。</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* フッター */}
      <footer className="py-10 border-t text-center text-sm text-gray-400 bg-[var(--gray-bg)]">
        <p className="font-bold mb-1 text-[var(--navy)]">DAYS株式会社</p>
        <p>hacomono公式パートナー（紹介代理店）</p>
        <p className="mt-4">© {new Date().getFullYear()} DAYS Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}
