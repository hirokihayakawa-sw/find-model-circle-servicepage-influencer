import { MagnifyingGlassIcon, UserGroupIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export default function StepsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-black text-center mb-16 animate-fade-in text-gray-800">
          登録後は<br className="md:hidden" />かんたん3ステップ！
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center md:w-1/3 mb-12 md:mb-0 relative animate-slide-up group" style={{ animationDelay: '0.2s' }}>
            <div className="bg-pink-300 text-white px-6 py-2 rounded-full font-bold mb-6 shadow-lg transform group-hover:scale-105 transition-all duration-300 relative">
              <span className="relative z-10">STEP 1</span>
              <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-sm"></div>
            </div>
            <h3 className="font-black text-3xl mb-4 text-gray-700">応募</h3>
            <div className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:shadow-pink-50/50 transition-all duration-500 transform group-hover:-translate-y-2">
              <div className="w-20 h-20 bg-pink-300 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <MagnifyingGlassIcon className="w-12 h-12 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <p className="text-center text-base leading-relaxed max-w-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              お好きな案件を自由に応募できます。<br />応募後は広告主からの採用を待ちます。
            </p>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2">
              <ChevronRightIcon className="w-10 h-10 text-pink-100 animate-bounce" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center md:w-1/3 mb-12 md:mb-0 relative animate-slide-up group" style={{ animationDelay: '0.4s' }}>
            <div className="bg-pink-300 text-white px-6 py-2 rounded-full font-bold mb-6 shadow-lg transform group-hover:scale-105 transition-all duration-300 relative">
              <span className="relative z-10">STEP 2</span>
              <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-sm"></div>
            </div>
            <h3 className="font-black text-3xl mb-4 text-gray-700">体験</h3>
            <div className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:shadow-pink-50/50 transition-all duration-500 transform group-hover:-translate-y-2">
              <div className="w-20 h-20 bg-pink-300 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <UserGroupIcon className="w-12 h-12 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <p className="text-center text-base leading-relaxed max-w-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              採用が決まったら商品・サービスを体験！
            </p>
            {/* Arrow for desktop */}
            <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2">
              <ChevronRightIcon className="w-10 h-10 text-pink-100 animate-bounce" style={{ animationDelay: '0.1s' }} />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center md:w-1/3 animate-slide-up group" style={{ animationDelay: '0.6s' }}>
            <div className="bg-pink-300 text-white px-6 py-2 rounded-full font-bold mb-6 shadow-lg transform group-hover:scale-105 transition-all duration-300 relative">
              <span className="relative z-10">STEP 3</span>
              <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-sm"></div>
            </div>
            <h3 className="font-black text-3xl mb-4 text-gray-700">投稿</h3>
            <div className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:shadow-pink-50/50 transition-all duration-500 transform group-hover:-translate-y-2">
              <div className="w-20 h-20 bg-pink-300 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <ChatBubbleBottomCenterTextIcon className="w-12 h-12 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <p className="text-center text-base leading-relaxed max-w-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              体験した内容をSNSに投稿！その後アプリで完了報告をして案件完了になります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}