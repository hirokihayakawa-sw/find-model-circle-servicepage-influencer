export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Find Model Circleでできること
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-base-pink-500">PR案件への応募</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-base-pink-500 mr-2">•</span>
              <span>人気ブランドの新商品体験</span>
            </li>
            <li className="flex items-start">
              <span className="text-base-pink-500 mr-2">•</span>
              <span>話題のカフェ・レストラン体験</span>
            </li>
            <li className="flex items-start">
              <span className="text-base-pink-500 mr-2">•</span>
              <span>最新コスメのいち早い体験</span>
            </li>
            <li className="flex items-start">
              <span className="text-base-pink-500 mr-2">•</span>
              <span>おしゃれなサービス体験</span>
            </li>
            <li className="flex items-start">
              <span className="text-base-pink-500 mr-2">•</span>
              <span>など</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
} 