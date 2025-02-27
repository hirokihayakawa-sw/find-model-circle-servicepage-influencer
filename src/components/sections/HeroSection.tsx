import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/Button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-base-pink-100 to-base-pink-300 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] bg-bottom bg-no-repeat bg-cover opacity-30"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="inline-block bg-white text-base-pink-500 px-4 py-2 rounded-full mb-4 shadow-sm">
              <span className="font-bold text-sm">SNSで話題をつくる</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              素敵なPR案件、<br />無料で体験！
              <div className="text-base-pink-500 my-2">商品の魅力を広める</div>
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
              <div className="relative w-[500px] md:w-[600px] h-[500px] md:h-[600px]">
                <Image
                  src="/top1.png"
                  alt="スマートフォンモックアップ"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 