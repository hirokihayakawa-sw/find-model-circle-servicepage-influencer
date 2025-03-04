"use client";

import { Button } from "../../components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-[#fff9e6] py-24 md:py-32 relative overflow-hidden">
      {/* 超特大サイズの画像を右下に配置（左寄せ） */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-[-85%] right-[5%] w-[1320px] h-[1800px] transform rotate-[-3deg] translate-x-[-50%]"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/app.png"
            alt="Find Model アプリのスクリーンショット"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 1000px"
          />
        </div>
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-[#ffde7d] text-gray-800 px-6 py-3 rounded-full mb-8 shadow-sm"
            >
              <span className="font-bold text-sm">SNSで話題をつくる</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-800"
            >
              素敵な案件<br />無料で体験！
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[#f08c4a] text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
            >
              商品の魅力を広める
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-10 whitespace-nowrap"
            >
              インフルエンサー向けアプリ
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  href="/register"
                  variant="default"
                  rounded="full"
                  size="lg"
                  className="bg-[#e94d89] text-white hover:bg-[#d43c78] shadow-md px-8 py-4 group inline-flex items-center transition-all"
                >
                  今すぐ無料ではじめる <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  href="/login"
                  variant="outline"
                  rounded="full"
                  size="lg"
                  className="border-2 border-[#e94d89] text-[#e94d89] hover:bg-pink-50 shadow-sm px-8 py-4 group inline-flex items-center transition-all"
                >
                  アカウントをお持ちの方 <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
