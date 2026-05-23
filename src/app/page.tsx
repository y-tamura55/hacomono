import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

const painPoints = [
  {
    icon: '😓',
    title: '月謝・集金の管理に毎月何日も取られる',
    desc: '振込確認・未納フォロー・領収書発行…手作業の繰り返しでスタッフが疲弊していませんか？',
  },
  {
    icon: '📞',
    title: '予約の問い合わせ電話が鳴り止まない',
    desc: '空き枠確認・キャンセル対応・振替調整。本来の指導業務に集中できない状況が続いていませんか？',
  },
  {
    icon: '📋',
    title: '入退会の手続きがアナログのまま',
    desc: '紙の書類・手書き台帳・Excelでの管理。ミスが起きやすく、引き継ぎも大変ですよね。',
  },
  {
    icon: '📉',
    title: '紹介・口コミによる新規獲得が増えない',
    desc: 'キャンペーンをやりたいが管理が追いつかない。紙のフライヤーでは浸透しない。',
  },
]

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

const results = [
  {
    before: '月50〜60人',
    after: '月100人超',
    label: '新規入会数',
    detail: '紹介経由の入会率が24%→36%に向上',
    photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    alt: 'フィットネスジム',
    tag: '西日本・スポーツクラブ',
  },
  {
    before: '7〜9時間/月',
    after: '1時間/月',
    label: 'キャンペーン管理工数',
    detail: '手作業での照合・集計が不要に',
    photo: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80',
    alt: 'ダンススクール',
    tag: '関東・ダンススクール',
  },
  {
    before: '受付スタッフ2名',
    after: 'スタッフ1名で運営',
    label: '受付業務',
    detail: '入退会・予約対応がオンラインで完結',
    photo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    alt: 'ヨガスタジオ',
    tag: '関西・ヨガスタジオ',
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

      {/* ヒーロー */}
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
              その業務の手間、<br />
              <span className="text-[var(--teal)]">全部なくせます。</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-4 leading-relaxed">
              月謝管理・予約対応・入退会手続き・紹介キャンペーン管理—
              スクール・フィットネス施設のあらゆる業務を<strong className="text-white">hacomonoが自動化</strong>します。
            </p>
            <p className="text-base text-white/60 mb-10">
              DAYS経由のお申し込みで<span className="text-[var(--teal)] font-bold">初期費用100,000円割引</span>の特典あり。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center font-bold text-white bg-[var(--teal)] px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-all hover:scale-105"
              >
                無料で相談する →
              </a>
              <a
                href="#pain"
                className="inline-flex items-center justify-center font-medium text-white border border-white/30 px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors"
              >
                こんな課題ありませんか？
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 実績数字バー */}
      <section className="py-10 bg-[var(--teal)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { num: '12,000+', label: '導入店舗数' },
              { num: '最短2週間', label: '稼働までの期間' },
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

      {/* こんな課題ありませんか？ */}
      <section id="pain" className="py-20 bg-[var(--gray-bg)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-bold mb-2 uppercase tracking-widest text-red-400">
              Pain Points
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--navy)]">
              こんな課題、ありませんか？
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {painPoints.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 border-l-4 border-red-300 shadow-sm">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-base md:text-lg text-[var(--navy)] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm mb-2">↓ これ、全部hacomonoで解決できます</p>
            <a href="#features" className="text-[var(--teal)] font-bold text-sm hover:underline">
              解決策を見る →
            </a>
          </div>
        </div>
      </section>

      {/* 対応業態：写真グリッド */}
      <section className="py-20">
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

      {/* 機能：hacomonoで全部解決 */}
      <section id="features" className="py-20 bg-[var(--gray-bg)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-bold mb-2 uppercase tracking-widest text-[var(--teal)]">
              Solution
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--navy)]">
              hacomonoが、全部解決します
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              バラバラだったツールをhacomonoに集約。スタッフの工数を削減し、
              経営に集中できる環境をつくります。
            </p>
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

      {/* 導入成果：Before/After */}
      <section className="py-20 bg-[var(--navy)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-bold mb-2 uppercase tracking-widest text-[var(--teal)]">
              Results
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              実際に変わった数字
            </h2>
            <p className="mt-3 text-white/60 text-sm">※ 導入施設の実績（施設名は非公開）</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((r) => (
              <div key={r.label} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative h-36">
                  <Image src={r.photo} alt={r.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[var(--navy)]/60" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--teal)] text-white">
                      {r.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-white/50 mb-2">{r.label}</p>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-white/40 line-through text-sm">{r.before}</span>
                    <span className="text-white/40">→</span>
                    <span className="text-[var(--teal)] font-black text-xl">{r.after}</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAYS経由特典 */}
      <section className="py-20 bg-[var(--teal)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-sm font-bold mb-3 uppercase tracking-widest text-white/70">
            Special Offer
          </p>
          <h2 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
            さらに、DAYS経由なら<br />
            <span className="underline decoration-white/40 underline-offset-4">初期費用100,000円が割引</span>
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            DAYS株式会社はhacomono公式パートナーです。
            パートナー経由のお申し込みで、通常の初期費用から100,000円の割引が適用されます。
            まずは無料で相談してみてください。
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
