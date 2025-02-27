import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-b from-base-pink-100 to-base-pink-300">
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
  );
} 