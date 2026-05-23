import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

const painPoints = [
  {
    no: '01',
    title: '月謝・集金の管理に毎月何日も取られる',
    desc: '振込確認・未納フォロー・領収書発行…手作業の繰り返しでスタッフが疲弊していませんか？',
  },
  {
    no: '02',
    title: '予約の問い合わせ電話が鳴り止まない',
    desc: '空き枠確認・キャンセル対応・振替調整。本来の指導業務に集中できない状況が続いていませんか？',
  },
  {
    no: '03',
    title: '入退会の手続きがアナログのまま',
    desc: '紙の書類・手書き台帳・Excelでの管理。ミスが起きやすく、引き継ぎも大変ですよね。',
  },
  {
    no: '04',
    title: '紹介・口コミによる新規獲得が増えない',
    desc: 'キャンペーンをやりたいが管理が追いつかない。紙のフライヤーでは浸透しない。',
  },
]

const features = [
  { title: '会員管理', desc: '入会・更新・退会を自動化。会員情報をクラウドで一元管理。' },
  { title: '予約・スケジュール管理', desc: 'オンライン予約・キャンセル・LINE自動リマインド。スタッフの電話対応工数を大幅削減。' },
  { title: '決済・月謝管理', desc: '月謝・都度課金・物販に対応。クレカ・口座振替をシステム内で完結。' },
  { title: '売上・経営分析', desc: '入退会・売上の推移をダッシュボードでリアルタイム可視化。' },
  { title: '会員専用アプリ', desc: '会員が自ら予約・確認。スクール管理・出欠連絡もアプリ内完結。' },
  { title: '外部ツール連携', desc: 'Zoom・Googleカレンダー・各種ECなど多彩なツールとAPI連携。' },
]

const businessTypes = [
  { label: 'ダンススクール', photo: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80', alt: 'ダンスレッスン' },
  { label: 'フィットネスジム', photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', alt: 'フィットネスジム' },
  { label: 'ヨガ・ピラティス', photo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', alt: 'ヨガクラス' },
  { label: 'スポーツスクール', photo: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80', alt: 'スポーツスクール' },
  { label: 'パーソナルトレーニング', photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', alt: 'パーソナルトレーニング' },
  { label: 'インドアゴルフ', photo: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&q=80', alt: 'インドアゴルフ' },
]

const results = [
  {
    before: '月50〜60人',
    after: '月100人超',
    label: '新規入会数',
    detail: '紹介経由の入会率が24%→36%に向上',
    photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
    tag: '西日本・スポーツクラブ',
  },
  {
    before: '7〜9時間/月',
    after: '1時間/月',
    label: 'キャンペーン管理工数',
    detail: '手作業での照合・集計が完全自動化',
    photo: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80',
    tag: '関東・ダンススクール',
  },
  {
    before: '受付スタッフ2名',
    after: '1名で運営',
    label: '受付業務',
    detail: '入退会・予約対応がオンラインで完結',
    photo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
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
          <a href="#contact" className="text-sm font-bold text-white bg-[var(--teal)] px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
            無料相談する
          </a>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="pt-16 relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=85"
            alt="フィットネス施設"
            fill className="object-cover" priority
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
            <p className="text-lg text-white/80 mb-4 leading-relaxed">
              月謝管理・予約対応・入退会手続き・紹介キャンペーン管理—
              スクール・フィットネス施設のあらゆる業務を<strong className="text-white">hacomonoが自動化</strong>します。
            </p>
            <p className="text-sm text-white/60 mb-10">
              DAYS経由のお申し込みで<span className="text-[var(--teal)] font-bold">初期費用100,000円割引</span>の特典あり。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center font-bold text-white bg-[var(--teal)] px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-all hover:scale-105">
                無料で相談する →
              </a>
              <a href="#pain" className="inline-flex items-center justify-center font-medium text-white border border-white/30 px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors">
                こんな課題ありませんか？
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 数字バー */}
      <section className="py-10 bg-[var(--teal)]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
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
      </section>

      {/* 課題セクション */}
      <section id="pain" className="py-24 bg-[var(--gray-bg)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-red-400 mb-3">Pain Points</p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--navy)] max-w-xl leading-tight">
              こんな課題、<br />ありませんか？
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden">
            {painPoints.map((p) => (
              <div key={p.no} className="bg-white p-8">
                <span className="text-5xl font-black text-gray-100 leading-none block mb-4">{p.no}</span>
                <h3 className="font-bold text-[var(--navy)] text-lg mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-gray-400 text-sm">
            ↓ これ、全部hacomonoで解決できます
          </p>
        </div>
      </section>

      {/* 機能：スクリーンショット + リスト */}
      <section id="features" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* 左：機能リスト */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[var(--teal)] mb-3">Solution</p>
              <h2 className="text-3xl md:text-4xl font-black text-[var(--navy)] mb-3 leading-tight">
                hacomonoが、<br />全部解決します
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                会員管理から決済・分析まで、バラバラだった業務ツールをひとつに集約。
                スタッフの工数を削減し、経営に集中できる環境をつくります。
              </p>
              <div className="space-y-5">
                {features.map((f, i) => (
                  <div key={f.title} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-[var(--teal)] text-white flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--navy)] mb-0.5">{f.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右：hacomono実際の画面 */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--teal)]/10 to-[var(--navy)]/10 rounded-3xl -z-10" />
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="https://www.hacomono.co.jp/wp-content/themes/haco/img/product/img_1.png"
                  alt="hacomono管理画面のスクリーンショット"
                  width={700}
                  height={500}
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[var(--teal)] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                実際の管理画面
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 対応業態：写真グリッド */}
      <section className="py-24 bg-[var(--gray-bg)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--teal)] mb-3">Business Types</p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--navy)]">あらゆる業態に対応</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {businessTypes.map((b) => (
              <div key={b.label} className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-default">
                <Image src={b.photo} alt={b.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-bold text-sm md:text-base">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 導入成果：Before/After */}
      <section className="py-24 bg-[var(--navy)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--teal)] mb-3">Results</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">実際に変わった数字</h2>
            <p className="mt-2 text-white/40 text-sm">※ 導入施設の実績（施設名は非公開）</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((r) => (
              <div key={r.label} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative h-40">
                  <Image src={r.photo} alt={r.label} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[var(--navy)]/60" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold px-3 py-1 rounded-full bg-[var(--teal)] text-white">
                    {r.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-white/40 mb-3 uppercase tracking-widest">{r.label}</p>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-white/30 line-through text-sm">{r.before}</span>
                    <span className="text-white/30 text-xs">→</span>
                    <span className="text-[var(--teal)] font-black text-2xl leading-none">{r.after}</span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed mt-2">{r.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAYS経由特典 */}
      <section className="py-24 bg-[var(--teal)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-4">Special Offer</p>
          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            さらに、DAYS経由なら<br />
            初期費用<span className="border-b-4 border-white/50">100,000円が割引</span>
          </h2>
          <p className="text-white/80 mb-12 max-w-lg mx-auto leading-relaxed">
            DAYS株式会社はhacomono公式パートナーです。パートナー経由のお申し込みで、通常の初期費用から100,000円の割引が適用されます。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {[
              { label: '初期費用割引', value: '¥100,000 OFF' },
              { label: '専任サポート', value: '導入〜稼働まで' },
              { label: '無料相談', value: '60分間' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/15 rounded-2xl px-8 py-5">
                <div className="text-2xl font-black mb-1">{value}</div>
                <div className="text-sm text-white/70">{label}</div>
              </div>
            ))}
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-bold text-[var(--teal)] bg-white px-12 py-4 rounded-xl text-lg hover:opacity-90 transition-all hover:scale-105 shadow-xl">
            今すぐ無料相談する →
          </a>
        </div>
      </section>

      {/* フォーム */}
      <section id="contact" className="py-24">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--teal)] mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-[var(--navy)]">無料相談・お問い合わせ</h2>
            <p className="text-gray-400">担当者より1営業日以内にご連絡いたします。</p>
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
