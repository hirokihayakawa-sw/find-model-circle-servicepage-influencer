import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Image 
              src="/logo.png" 
              alt="Find Model Circle" 
              width={150} 
              height={50} 
              className="h-auto mb-4"
            />
          </div>
          
          <div className="flex flex-row flex-wrap gap-2 md:gap-4 justify-center">
            <Link href="/about" className="text-gray-400 hover:text-pink-600 transition-colors">
              お知らせ
            </Link>
            <Link href="/login" className="text-gray-400 hover:text-pink-600 transition-colors">
              ログイン
            </Link>
            <Link href="/register" className="text-gray-400 hover:text-pink-600 transition-colors">
              会員登録
            </Link>
            <Link href="/for-companies" className="text-gray-400 hover:text-pink-600 transition-colors">
              企業の方へ
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Find Model Circle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
