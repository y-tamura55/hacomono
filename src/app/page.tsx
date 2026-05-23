import ContactForm from '@/components/ContactForm'

const features = [
  {
    icon: '👥',
    title: '会員管理',
    desc: '入会手続き・会員情報・契約状況をクラウドで一元管理。月次更新や退会処理も自動化。',
  },
  {
    icon: '📅',
    title: '予約・スケジュール',
    desc: 'オンライン予約・キャンセル・空き枠管理。LINE連携でリマインドも自動送信。',
  },
  {
    icon: '💳',
    title: '決済・請求',
    desc: '月謝・都度課金・物販に対応。クレジットカード・口座振替をシステム内で完結。',
  },
  {
    icon: '📊',
    title: '売上・分析',
    desc: '売上・入会・退会の推移をリアルタイム可視化。経営判断をデータで裏付け。',
  },
  {
    icon: '📱',
    title: '会員アプリ',
    desc: '専用アプリで会員が自ら予約・確認。スタッフの電話対応工数を大幅削減。',
  },
  {
    icon: '🔗',
    title: '外部連携',
    desc: 'Zoom・Googleカレンダー・各種ECなど多彩なツールと連携可能。',
  },
]

const businessTypes = [
  'ダンススクール',
  '体操・運動スクール',
  'サッカー・バスケ教室',
  'フィットネスジム',
  'ヨガ・ピラティス',
  'インドアゴルフ',
  'パーソナルトレーニング',
  'プロスポーツチーム',
  'その他スクール',
]

const testimonials = [
  {
    type: 'ダンススクール',
    voice:
      '月謝の集金と予約管理に毎月3日間かかっていたのが、ほぼゼロになりました。スタッフ全員が感謝しています。',
    name: '関東・ダンススクール運営者',
  },
  {
    type: 'フィットネスジム',
    voice:
      '会員の入退会手続きがオンラインで完結するので、受付人件費を月20万円以上削減できました。',
    name: '首都圏・パーソナルジム経営者',
  },
  {
    type: 'ヨガスタジオ',
    voice:
      'LINE通知で予約リマインドが自動送信されるようになり、無断キャンセルが激減しました。',
    name: '関西・ヨガスタジオ代表',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Powered by</span>
            <span className="font-black text-xl tracking-tight text-[var(--teal)]">
              DAYS
            </span>
            <span className="text-gray-300 mx-1">×</span>
            <span className="font-black text-xl tracking-tight text-[var(--navy)]">
              hacomono
            </span>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-white bg-[var(--teal)] px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            無料相談する
          </a>
        </div>
      </header>

      {/* ヒーロー */}
      <section className="pt-16 relative overflow-hidden bg-[var(--navy)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl bg-[var(--teal)]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="w-2 h-2 rounded-full animate-pulse bg-[var(--teal)]" />
            DAYS株式会社 × hacomono公式パートナー
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6">
            スクール・フィットネスの
            <br />
            <span className="text-[var(--teal)]">業務を全部、</span>
            <br />
            hacomonoが解決します。
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            会員管理・予約・決済・請求をオールインワンで自動化。
            全国12,000店舗以上が導入するSaaSを、DAYS経由なら
            <strong className="text-white"> 初期費用100,000円割引</strong>
            でスタートできます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-bold text-white bg-[var(--teal)] px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
            >
              無料で相談する →
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 font-medium text-white border border-white/30 px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors"
            >
              機能を見る
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-white/60">
            <span>✓ 初期費用100,000円割引</span>
            <span>✓ 導入サポート付き</span>
            <span>✓ 最短2週間で稼働</span>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-white/5">
          <div className="max-w-6xl mx-auto px-4 py-5">
            <p className="text-xs text-white/50 mb-3">対応業態</p>
            <div className="flex flex-wrap gap-2">
              {businessTypes.map((type) => (
                <span
                  key={type}
                  className="text-xs text-white/70 border border-white/20 rounded-full px-3 py-1"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 実績数字 */}
      <section className="py-14 border-b bg-[var(--gray-bg)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '12,000+', label: '導入店舗数' },
              { num: '2週間', label: '最短稼働期間' },
              { num: '¥100,000', label: 'DAYS経由割引額' },
              { num: '60分', label: '無料相談時間' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-black mb-1 text-[var(--teal)]">
                  {num}
                </div>
                <div className="text-sm text-gray-500">{label}</div>
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
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-[var(--navy)]">
              一つのシステムで、
              <br className="md:hidden" />
              全てが完結
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              バラバラだった業務ツールをhacomonoに集約。
              スタッフの工数を削減し、経営に集中できる環境を作ります。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-[var(--navy)]">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 声・実績 */}
      <section className="py-20 bg-[var(--gray-bg)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-bold mb-2 uppercase tracking-widest text-[var(--teal)]">
              Testimonials
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[var(--navy)]">
              導入した施設の声
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E6F9F7] text-[var(--teal-dark)]">
                  {t.type}
                </span>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                  &ldquo;{t.voice}&rdquo;
                </p>
                <p className="mt-4 text-xs text-gray-400">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAYS経由特典 */}
      <section className="py-20 bg-[var(--navy)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-sm font-bold mb-2 uppercase tracking-widest text-[var(--teal)]">
            Special Offer
          </p>
          <h2 className="text-2xl md:text-3xl font-black mb-6">
            DAYS経由で申し込むと
            <br />
            <span className="text-[var(--teal)]">初期費用100,000円が割引</span>
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            DAYS株式会社はhacomono公式パートナーです。
            パートナー経由でお申し込みいただくと、通常の初期費用から
            100,000円の割引が適用されます。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            {[
              { label: '初期費用割引', value: '¥100,000 OFF' },
              { label: '専任サポート', value: '導入〜稼働まで' },
              { label: '無料相談', value: '60分間' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center"
              >
                <div className="text-lg font-black mb-1 text-[var(--teal)]">{value}</div>
                <div className="text-sm text-white/60">{label}</div>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-white bg-[var(--teal)] px-10 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity"
          >
            今すぐ無料相談する →
          </a>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section id="contact" className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-bold mb-2 uppercase tracking-widest text-[var(--teal)]">
              Contact
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-[var(--navy)]">
              無料相談・お問い合わせ
            </h2>
            <p className="text-gray-500">
              フォームにご入力ください。
              担当者より1営業日以内にご連絡いたします。
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* フッター */}
      <footer className="py-10 border-t text-center text-sm text-gray-400 bg-[var(--gray-bg)]">
        <p className="font-bold mb-1 text-[var(--navy)]">DAYS株式会社</p>
        <p>hacomono公式パートナー（紹介代理店）</p>
        <p className="mt-4">
          © {new Date().getFullYear()} DAYS Inc. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
