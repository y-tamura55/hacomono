import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

const painPoints = [
  {
    no: '01',
    title: '月謝・集金の管理に毎月何日も取られる',
    desc: '振込確認・未納フォロー・領収書発行…手作業の繰り返しでスタッフが疲弊。',
  },
  {
    no: '02',
    title: '予約の問い合わせ電話が鳴り止まない',
    desc: '空き枠確認・キャンセル対応・振替調整。本来の指導業務に集中できない。',
  },
  {
    no: '03',
    title: '入退会の手続きがアナログのまま',
    desc: '紙の書類・手書き台帳・Excelでの管理。ミスが起きやすく引き継ぎも大変。',
  },
  {
    no: '04',
    title: '紹介・口コミによる新規獲得が増えない',
    desc: 'キャンペーンをやりたいが管理が追いつかない。紙のフライヤーでは浸透しない。',
  },
]

const featureSections = [
  {
    label: '会員・予約・決済',
    title: 'バラバラな管理を、\nひとつに集約',
    desc: '入会手続き・月謝管理・予約受付・決済処理—これまで別々のツールで行っていた業務がhacomono一つで完結。スタッフの工数を大幅に削減します。',
    image: 'https://www.hacomono.co.jp/wp-content/themes/haco/img/product/img_1.png',
    imageAlt: 'hacomono会員管理画面',
    reverse: false,
  },
  {
    label: '売上・経営分析',
    title: '経営判断を、\nデータで裏付ける',
    desc: '入会数・退会数・売上推移をリアルタイムで可視化。どの施設・クラスが伸びているか、どの会員が離脱リスクにあるか、ダッシュボードで一目でわかります。',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    imageAlt: '売上分析ダッシュボード',
    reverse: true,
  },
  {
    label: '会員アプリ・集客',
    title: '会員が自分で予約・管理。\n電話対応がなくなる。',
    desc: '専用アプリで会員が自ら予約・キャンセル・出欠確認。スタッフへの問い合わせが激減します。紹介キャンペーンのデジタル管理にも対応。',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    imageAlt: '会員がスマートフォンで予約する様子',
    reverse: false,
  },
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

      {/* ヒーロー：シンプル・インパクト重視 */}
      <section className="pt-16 relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=85"
            alt="フィットネス施設" fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-[var(--navy)]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-24 w-full">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white/80 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal)] animate-pulse" />
            DAYS株式会社 × hacomono公式パートナー
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-white leading-[1.0] tracking-tight mb-8">
            その手間、<br />
            <span className="text-[var(--teal)]">全部</span><br />
            なくせます。
          </h1>

          <p className="text-white/60 text-base md:text-lg mb-10">
            スクール・フィットネス施設の業務を<br className="sm:hidden" /><span className="text-white font-bold">hacomono</span>で自動化。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="inline-flex items-center justify-center font-bold text-white bg-[var(--teal)] px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-all hover:scale-105">
              無料で相談する →
            </a>
            <a href="#pain" className="inline-flex items-center justify-center font-medium text-white/70 border border-white/20 px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors">
              詳しく見る
            </a>
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

      {/* 課題セクション：数字を大きく */}
      <section id="pain" className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--teal)] mb-3">Pain Points</p>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--navy)] leading-tight">
              こんな課題、<br />ありませんか？
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {painPoints.map((p) => (
              <div key={p.no} className="flex gap-6 items-start p-6 rounded-2xl bg-[var(--gray-bg)]">
                <span className="text-6xl md:text-7xl font-black text-[var(--teal)] leading-none flex-shrink-0 select-none">
                  {p.no}
                </span>
                <div className="pt-2">
                  <h3 className="font-bold text-[var(--navy)] text-base md:text-lg mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 解決策：交互レイアウト × 写真 */}
      <section id="features" className="bg-[var(--gray-bg)]">
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[var(--teal)] mb-3">Solution</p>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--navy)] leading-tight mb-4">
            hacomonoが、<br />全部解決します
          </h2>
        </div>

        {featureSections.map((f, i) => (
          <div
            key={f.label}
            className={`py-16 ${i % 2 === 0 ? 'bg-[var(--gray-bg)]' : 'bg-white'}`}
          >
            <div className={`max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-20 items-center ${f.reverse ? 'direction-rtl' : ''}`}>
              <div className={f.reverse ? 'md:order-2' : ''}>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--teal)] mb-3 block">{f.label}</span>
                <h3 className="text-2xl md:text-3xl font-black text-[var(--navy)] mb-5 leading-tight whitespace-pre-line">
                  {f.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">{f.desc}</p>
              </div>
              <div className={`relative ${f.reverse ? 'md:order-1' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={f.image}
                    alt={f.imageAlt}
                    width={700}
                    height={470}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="py-10 text-center bg-[var(--gray-bg)]">
          <a href="#contact" className="inline-flex items-center gap-2 font-bold text-white bg-[var(--teal)] px-8 py-4 rounded-xl hover:opacity-90 transition-all hover:scale-105">
            詳しく話を聞きたい →
          </a>
        </div>
      </section>

      {/* 対応業態：写真グリッド */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--teal)] mb-3">Business Types</p>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--navy)]">あらゆる業態に対応</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {businessTypes.map((b) => (
              <div key={b.label} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <Image src={b.photo} alt={b.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-4 text-white font-bold text-sm md:text-base">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 導入成果 */}
      <section className="py-24 bg-[var(--navy)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-[var(--teal)] mb-3">Results</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">実際に変わった数字</h2>
            <p className="mt-2 text-white/30 text-xs">※ 導入施設の実績（施設名は非公開）</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {results.map((r) => (
              <div key={r.label} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative h-40">
                  <Image src={r.photo} alt={r.label} fill className="object-cover" />
                  <div className="absolute inset-0 bg-[var(--navy)]/60" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold px-3 py-1 rounded-full bg-[var(--teal)] text-white">{r.tag}</span>
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
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            さらに、DAYS経由なら<br />
            初期費用<span className="border-b-4 border-white/50 pb-1">100,000円が割引</span>
          </h2>
          <p className="text-white/80 mb-12 max-w-lg mx-auto leading-relaxed">
            DAYS株式会社はhacomono公式パートナーです。パートナー経由のお申し込みで、通常の初期費用から100,000円の割引が適用されます。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {[
              { label: 'DAYS経由の初期費用割引', value: '¥100,000 OFF' },
              { label: 'hacomonoによる無料相談', value: '商談無料' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/15 rounded-2xl px-10 py-5">
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
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-[var(--navy)]">hacomonoへの導入相談</h2>
            <p className="text-gray-400">フォーム送信後、hacomonoの担当者よりご連絡いたします。</p>
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
