import { DevicePhoneMobileIcon, UserIcon, UserCircleIcon, IdentificationIcon } from '@heroicons/react/24/outline';

export default function StartSection() {
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-[1.65rem] md:text-4xl font-black text-center text-gray-700 mb-24 whitespace-nowrap">
          Find Model Circleの始め方
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center max-w-[1400px] mx-auto gap-24">
          {/* Step 1 */}
          <div className="flex flex-col items-center mb-12 md:mb-0 relative group">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg z-10">
              1
            </div>
            <div className="w-40 h-40 mb-6 rounded-full border-4 border-gray-700 flex items-center justify-center bg-white relative">
              <DevicePhoneMobileIcon className="w-20 h-20 text-gray-700" />
            </div>
            <p className="text-center font-bold text-gray-700">
              アプリをダウンロード
            </p>
            {/* Arrow for desktop */}
            <div className="hidden md:flex absolute top-1/3 -right-16 transform -translate-y-1/2 items-center">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center mb-12 md:mb-0 relative group">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg z-10">
              2
            </div>
            <div className="w-40 h-40 mb-6 rounded-full border-4 border-gray-700 flex items-center justify-center bg-white relative">
              <UserIcon className="w-20 h-20 text-gray-700" />
            </div>
            <p className="text-center font-bold text-gray-700">
              アカウント登録
            </p>
            {/* Arrow for desktop */}
            <div className="hidden md:flex absolute top-1/3 -right-16 transform -translate-y-1/2 items-center">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center mb-12 md:mb-0 relative group h-full">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg z-10">
              3
            </div>
            <div className="w-40 h-40 mb-6 rounded-full border-4 border-gray-700 flex items-center justify-center bg-white relative">
              <UserCircleIcon className="w-20 h-20 text-gray-700" />
            </div>
            <p className="text-center font-bold text-gray-700">
              プロフィール設定
            </p>
            {/* Arrow for desktop */}
            <div className="hidden md:flex absolute top-1/3 -right-16 transform -translate-y-1/2 items-center">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center mb-12 md:mb-0 relative group h-full">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg z-10">
              4
            </div>
            <div className="w-40 h-40 mb-6 rounded-full border-4 border-gray-700 flex items-center justify-center bg-white relative">
              <IdentificationIcon className="w-20 h-20 text-gray-700" />
            </div>
            <p className="text-center font-bold text-gray-700">
              本人確認
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}