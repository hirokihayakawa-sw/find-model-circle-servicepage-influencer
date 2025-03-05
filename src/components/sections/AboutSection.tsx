'use client';

export default function AboutSection() {
  return (
    <section className="pt-8 pb-10 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 animate-slide-in">
          Find Model Circleとは？
        </h2>
        <div className="bg-gradient-to-br from-pink-50 to-white rounded-[40px] p-8 md:p-12">
          <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-6">
            <div className="space-y-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight bg-gradient-to-r from-[#FF1B8D] via-[#FF7B7B] to-[#FFA26B] text-transparent bg-clip-text text-center animate-slide-in animation-delay-200 px-4">
                企業とインフルエンサーを結ぶ架け橋になるアプリ
              </h2>

              <div className="max-w-4xl mx-auto">
                <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                  <p className="text-center mb-2 animate-slide-in animation-delay-300">企業とインフルエンサーをつなぐプラットフォームです。</p>
                  <p className="text-left animate-slide-in animation-delay-400 px-4">案件の応募から選考、商品体験、SNS発信、報酬管理まで、すべてのプロセスをアプリ内でスムーズに完結できます。</p>
                </div>
              </div>
            </div>

            <div className="relative w-full flex items-center justify-center">
              {/* 装飾的な背景要素 */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-200/30 to-purple-100/20 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-blue-100/30 to-cyan-100/20 rounded-full blur-xl" />
              
              <div className="flex flex-col items-center gap-4 relative z-10">
                <div className="relative flex items-center w-full max-w-xl px-4 py-8 mt-4">
                  {/* 企業アイコン */}
                  <div className="flex flex-col items-center w-1/4 animate-pop animation-delay-300">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-2 md:mb-3 shadow-lg hover:shadow-xl transition-shadow">
                      <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21H21M3 18H21M5 18V8L12 4L19 8V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 18V13H15V18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="bg-gray-800 text-white text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full shadow-md">
                      企業
                    </div>
                  </div>
                  
                  {/* 中央のスペース - 矢印用 */}
                  <div className="w-2/4 flex justify-center items-center px-2 md:px-4">
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <svg className="animate-arrow-pulse w-24 md:w-40" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 15H110" stroke="#ff0c86" strokeWidth="3"/>
                          <path d="M105 5L110 15L105 25" stroke="#ff0c86" strokeWidth="3"/>
                          <path d="M15 5L10 15L15 25" stroke="#ff0c86" strokeWidth="3"/>
                        </svg>
                        
                        {/* 装飾的な光の効果 */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-pink-400/30 rounded-full blur-md animate-pulse" />
                      </div>
                      <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-2 md:px-4 py-1 text-[10px] md:text-xs text-white mt-2 shadow-md animate-slide-in animation-delay-500">
                        直接やりとり
                      </div>
                    </div>
                  </div>
                  
                  {/* インフルエンサーアイコン */}
                  <div className="flex flex-col items-center w-1/4 animate-pop animation-delay-400">
                    <div className="w-14 h-14 md:w-24 md:h-24 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center mb-2 md:mb-3 shadow-lg hover:shadow-xl transition-shadow">
                      <svg className="w-7 h-7 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="bg-gray-800 text-white text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full whitespace-nowrap shadow-md">
                      インフルエンサー
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}