export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center">
            <span className="text-base-pink-500 mr-3">✨</span>
            Find Model Circleとは？
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Find Model Circleは、あなたらしい情報発信で<br />
            素敵な商品やサービスの魅力を広めるインフルエンサーアプリ。<br />
            <span className="text-base-pink-500 font-medium">「好き」を発信して、ステキな出会いが広がります</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-base-pink-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">💝</div>
            <h3 className="text-xl font-bold mb-4">魅力的な案件が満載</h3>
            <p className="text-gray-600">
              ファッション、コスメ、カフェ、
              ビューティーサービスなど、
              女性に人気のブランドばかり！
            </p>
          </div>

          <div className="bg-base-pink-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-4">完全無料でスタート</h3>
            <p className="text-gray-600">
              会員登録も案件応募も完全無料。
              あなたの「好き」を活かして
              素敵な体験ができます。
            </p>
          </div>

          <div className="bg-base-pink-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="text-4xl mb-4">🎀</div>
            <h3 className="text-xl font-bold mb-4">充実のサポート</h3>
            <p className="text-gray-600">
              専任のマネージャーが
              丁寧にサポート。
              安心して活動できます。
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white border border-base-pink-200 px-6 py-3 rounded-full">
            <span className="text-base-pink-500 font-medium">
              ＼ フォロワー数は問いません！ ／
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}