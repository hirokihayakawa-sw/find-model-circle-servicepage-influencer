'use client';

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

function InfoCard({ title, description, imageSrc, imageAlt }: InfoCardProps) {
  if (imageAlt === "SNSアイコン") {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex-1 max-w-[360px] flex flex-col">
        <h3 className="text-xl font-bold text-center mb-4">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 text-center">
          {description}
        </p>
        <div className="flex justify-center items-center gap-6">
          <img src="/images/sns_ico_ig.webp" alt="Instagram" className="w-10 h-10 object-contain" />
          <img src="/images/sns_ico_x.webp" alt="X" className="w-10 h-10 object-contain" />
          <img src="/images/sns_ico_tk.webp" alt="TikTok" className="w-10 h-10 object-contain" />
          <img src="/images/sns_ico_yt.webp" alt="YouTube" className="w-[100px] h-12 object-contain" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex-1 max-w-[360px] flex flex-col">
      <h3 className="text-xl font-bold text-center mb-4">
        {title}
      </h3>
      <p className="text-gray-600 mb-2 text-center">
        {description}
      </p>
      <div className="flex justify-center -mt-2">
        <img src={imageSrc} alt={imageAlt} className="w-40 object-contain" />
      </div>
    </div>
  );
}

export default function InfoCardsSection() {
  const infoCards = [
    {
      title: "複数のSNSに対応",
      description: "Instagram・X・TikTok・YouTubeに対応しています。お好きなSNSでご利用いただけます。",
      imageSrc: "/images/SNS.png",
      imageAlt: "SNSアイコン"
    },
    {
      title: "無料で体験",
      description: "案件はすべて無料で受けられます。商品やサービスを無償提供してもらえるので副業ができない方にもおすすめです。",
      imageSrc: "/images/free.png",
      imageAlt: "商品体験"
    },
    {
      title: "フォロワー制限なし",
      description: "会員登録によるフォロワーの制限はございません。Instagram・Xのアカウントをお持ちの方は誰でも会員登録可能です。",
      imageSrc: "/images/welcome.png",
      imageAlt: "報酬管理"
    }
  ];

  return (
    <section className="-mt-4 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {infoCards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}