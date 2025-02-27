export default function StepsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          登録後のステップ
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center max-w-4xl mx-auto">
          <div className="bg-base-pink-50 rounded-lg p-6 text-center md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <div className="w-16 h-16 bg-base-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
            <h3 className="font-bold text-xl mb-2">応募</h3>
            <p>気になる案件に簡単応募</p>
          </div>
          <div className="bg-base-pink-50 rounded-lg p-6 text-center md:w-1/3 mb-4 md:mb-0 md:mx-4">
            <div className="w-16 h-16 bg-base-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
            <h3 className="font-bold text-xl mb-2">体験</h3>
            <p>商品やサービスを実際に体験</p>
          </div>
          <div className="bg-base-pink-50 rounded-lg p-6 text-center md:w-1/3 md:ml-4">
            <div className="w-16 h-16 bg-base-pink-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
            <h3 className="font-bold text-xl mb-2">投稿</h3>
            <p>あなたの感想をSNSで発信</p>
          </div>
        </div>
      </div>
    </section>
  );
} 