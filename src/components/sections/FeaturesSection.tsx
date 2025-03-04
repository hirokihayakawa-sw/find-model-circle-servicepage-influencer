'use client';

import { GiftIcon, SparklesIcon, ShareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Find Model Circleでできること
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* PR案件への応募 */}
          <motion.div 
            className="relative p-5 rounded-[2rem] bg-gradient-to-br from-blue-50/50 to-cyan-50/50 md:col-start-1 h-[500px] md:h-[420px] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(to right, #fff, #fff), linear-gradient(to right, #3B82F6, #22D3EE)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className="flex flex-col items-start h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  <span className="text-lg font-medium">Point</span>
                  <span className="text-5xl font-bold ml-2">01</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">PR案件への応募</h3>
              <motion.div 
                className="mt-2"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  新商品を実際に体験できる機会や、話題のカフェ・レストランでの食事体験も応募できます。また、最新コスメ製品をいち早く試せるチャンスや、おしゃれなサービスを体験できる案件も！
                </p>
              </motion.div>
              <motion.div 
                className="w-full relative mt-auto pb-4"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="relative h-[200px]">
                  <Image
                    src="/images/pr.png"
                    alt="PR案件への応募"
                    fill
                    className="object-contain relative z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* カンタン応募＆マッチング */}
          <motion.div 
            className="relative p-5 rounded-[2rem] bg-gradient-to-br from-purple-50/50 to-pink-50/50 md:col-start-2 h-[500px] md:h-[420px] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(to right, #fff, #fff), linear-gradient(to right, #8B5CF6, #EC4899)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className="flex flex-col items-start h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  <span className="text-lg font-medium">Point</span>
                  <span className="text-5xl font-bold ml-2">02</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">カンタン応募＆マッチング</h3>
              <motion.div 
                className="mt-2"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  アプリ内で気になる案件に簡単にすぐ応募することができます。企業とのやり取りもすべてアプリ内で完結するため、外部ツールを使う必要はありません。選考プロセスから実際の体験までがスムーズに進行するよう設計されており、煩わしい手続きなく効率的に参加していただけます。
                </p>
              </motion.div>
              <motion.div 
                className="w-full relative mt-auto pb-4"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="relative h-[200px]">
                  <Image
                    src="/images/match.png"
                    alt="カンタン応募＆マッチング"
                    fill
                    className="object-contain relative z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* SNSでの魅力発信 */}
          <motion.div 
            className="relative p-5 rounded-[2rem] bg-gradient-to-br from-green-50/50 to-emerald-50/50 md:col-start-1 h-[500px] md:h-[420px] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(to right, #fff, #fff), linear-gradient(to right, #22C55E, #34D399)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box'
            }}
          >
            <div className="flex flex-col items-start h-full">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                  <span className="text-lg font-medium">Point</span>
                  <span className="text-5xl font-bold ml-2">03</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">SNSでの魅力発信</h3>
              <motion.div 
                className="mt-2"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  体験後はあなたの感想をSNSに投稿していただきます。あなたらしい言葉で商品やサービスの魅力を自由に発信することで、あなただけの視点からの評価が生まれます。そして、その感動や発見をフォロワーの皆さんと共有することで、新たなつながりや会話が生まれるきっかけにもなります。
                </p>
              </motion.div>
              <motion.div 
                className="w-full relative mt-auto pb-4 -ml-4"
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="relative h-[200px]">
                  <Image
                    src="/images/SNS.png"
                    alt="SNSでの魅力発信"
                    fill
                    className="object-contain relative z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </motion.div>
    
              <motion.div
                className="md:col-start-2 h-[500px] md:h-[420px] overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-full">
                  <Image
                    src="/images/link.png"
                    alt="Link"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 収益化の機会 */}
          
          <motion.div
            className="w-full relative mt-auto pb-4"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative h-[500px]">
              <Image
                src="/images/link.png"
                alt="収益化の機会"
                fill
                className="object-contain relative z-10"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}