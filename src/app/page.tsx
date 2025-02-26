import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 見出し */}
      <section className="bg-gradient-to-b from-pink-100 to-pink-300 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-bottom bg-no-repeat bg-cover opacity-30"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="inline-block bg-white text-pink-500 px-4 py-2 rounded-full mb-4 shadow-sm">
                <span className="font-bold text-sm">SNSで話題をつくる</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                素敵なPR案件、<br />無料で体験！
                <div className="text-pink-500 my-2">商品の魅力を広める</div>
                インフルエンサー向けアプリ
              </h1>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button 
                  href="/register" 
                  variant="default" 
                  rounded="full" 
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800 shadow-md"
                >
                  会員登録 →
                </Button>
                <Button 
                  href="/download" 
                  variant="outline" 
                  rounded="full" 
                  size="lg"
                  className="border-black text-black hover:bg-gray-100 shadow-sm"
                >
                  資料ダウンロード →
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="/app-screenshot.png"
                  alt="Find Model Circleアプリのスクリーンショット"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  新規登録無料
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Model Circleとは？ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center">
            <span className="text-pink-500 mr-2">✨</span>
            Find Model Circleとは？
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto leading-relaxed">
            Find Model Circleは、企業とインフルエンサーさんを結ぶ架け橋になるアプリ！<br />
            あなたの「好き」の声で、素敵な商品の魅力を広めませんか？
          </p>
        </div>
      </section>

      {/* Find Model Circleでできること */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Find Model Circleでできること
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-pink-500">PR案件への応募</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>人気ブランドの新商品体験</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>話題のカフェ・レストラン体験</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>最新コスメのいち早い体験</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>おしゃれなサービス体験</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>など</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Find Model Circleの特徴 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Find Model Circleの特徴
          </h2>
          <div className="bg-gray-50 rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-pink-500">カンタン応募＆マッチング</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>アプリ内で気になる案件にすぐ応募</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>企業とのやり取りもアプリ内で完結</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-2">•</span>
                <span>選考から体験までスムーズに進行</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Find Model Circleのはじめ方 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Find Model Circleのはじめ方
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-bold mb-2">アプリをダウンロード</h3>
              <p className="text-gray-600">App StoreまたはGoogle Playから無料でダウンロード</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-bold mb-2">アカウント登録、ログイン</h3>
              <p className="text-gray-600">簡単な情報入力でアカウント作成</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-bold mb-2">プロフィール設定</h3>
              <p className="text-gray-600">あなたの得意ジャンルや興味を登録</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="font-bold mb-2">SNS連携</h3>
              <p className="text-gray-600">InstagramやTwitterなどのSNSアカウントを連携</p>
            </div>
          </div>
        </div>
      </section>

      {/* 登録後のステップ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            登録後のステップ
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl mx-auto">
            <div className="bg-pink-50 rounded-lg p-6 text-center md:w-1/3 mb-4 md:mb-0 md:mr-4">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-bold text-xl mb-2">応募</h3>
              <p>気になる案件に簡単応募</p>
            </div>
            <div className="bg-pink-50 rounded-lg p-6 text-center md:w-1/3 mb-4 md:mb-0 md:mx-4">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-bold text-xl mb-2">体験</h3>
              <p>商品やサービスを実際に体験</p>
            </div>
            <div className="bg-pink-50 rounded-lg p-6 text-center md:w-1/3 md:ml-4">
              <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-bold text-xl mb-2">投稿</h3>
              <p>あなたの感想をSNSで発信</p>
            </div>
          </div>
        </div>
      </section>

      {/* 会員登録への訴求 */}
      <section className="py-16 bg-gradient-to-b from-pink-100 to-pink-300">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            今すぐ始めよう！
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find Model Circleで素敵な商品・サービスとの出会いを体験しませんか？<br />
            無料でダウンロードして、あなたの「好き」を発信しよう！
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href="https://apps.apple.com" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/app-store-badge.png" 
                alt="App Storeからダウンロード" 
                width={180} 
                height={60} 
                className="h-auto"
              />
            </Link>
            <Link href="https://play.google.com" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/google-play-badge.png" 
                alt="Google Playで手に入れよう" 
                width={200} 
                height={60} 
                className="h-auto"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
