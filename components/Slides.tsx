import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Sprout, TrendingUp, AlertTriangle, 
  CheckCircle2, Map, Repeat, HeartHandshake, Globe2, 
  ArrowRight, Landmark, Building2, Stethoscope, Languages 
} from 'lucide-react';
import { SlideLayout, containerVariants, itemVariants } from './SlideLayout';

// Slide 1: Title
export const SlideTitle: React.FC = () => (
  <SlideLayout className="text-center">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-jimoty/10 p-12 rounded-full mb-8"
    >
      <HeartHandshake className="w-32 h-32 text-jimoty" />
    </motion.div>
    
    <motion.h1 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
    >
      CtoCビジネスモデル研究
    </motion.h1>
    
    <motion.h2 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-2xl md:text-3xl text-jimoty font-bold mb-12"
    >
      地域密着型掲示板「ジモティー」
    </motion.h2>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-xl text-gray-500"
    >
      Presenter: Senior React Engineer
    </motion.div>
  </SlideLayout>
);

// Slide 2: Selection Reason
export const SlideReason: React.FC = () => (
  <SlideLayout>
    <h2 className="text-4xl font-bold mb-12 text-gray-800 border-b-4 border-jimoty inline-block pb-2">
      なぜ「ジモティー」を選んだのか
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-jimoty"
      >
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <HeartHandshake className="text-jimoty w-8 h-8" />
          <span>選定理由</span>
        </h3>
        <p className="text-xl leading-relaxed text-gray-600">
          単なるモノの売買プラットフォームではなく、<br/>
          <span className="font-bold text-jimoty text-2xl">「助け合い」</span>と
          <span className="font-bold text-jimoty text-2xl">「サービス」</span>
          に特化している点に独自性を感じたため。
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Users className="text-blue-500 w-8 h-8" />
          <span>個人的な体験 (原体験)</span>
        </h3>
        
        <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-xl flex items-start gap-4">
          <div className="bg-white p-3 rounded-full shadow-sm">
            <Sprout className="text-green-600 w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">🇨🇳 中国から福岡の雑草処理を依頼</h4>
            <p className="text-gray-600 text-sm">
              海外にいながら、実家の手入れを近所の人に格安で依頼できた。
              <span className="block mt-1 text-xs text-gray-400">Map: China ➔ Fukuoka</span>
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-orange-50 p-6 rounded-xl flex items-start gap-4">
          <div className="bg-white p-3 rounded-full shadow-sm">
            <Languages className="text-orange-500 w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-1">🗣️ 会話練習のパートナー探し</h4>
            <p className="text-gray-600 text-sm">
              来日直後、近所で日本語を話せる友人をすぐに見つけることができた。
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </SlideLayout>
);

// Slide 3: Business Model
export const SlideModel: React.FC = () => (
  <SlideLayout>
    <h2 className="text-4xl font-bold mb-12 text-gray-800 border-b-4 border-jimoty inline-block pb-2">
      ビジネスモデルの仕組み
    </h2>

    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white w-full p-8 rounded-3xl shadow-xl border border-gray-100 mb-8"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* User A */}
        <div className="flex flex-col items-center text-center w-1/3">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Users className="w-12 h-12 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold">掲載者 (Offer)</h3>
          <p className="text-sm text-gray-500 mt-2">
            不用品・スキル<br/>労働力を提供
          </p>
        </div>

        {/* Platform */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2"></div>
          
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-32 h-32 bg-jimoty rounded-2xl flex flex-col items-center justify-center shadow-lg text-white z-10"
          >
            <HeartHandshake className="w-12 h-12 mb-2" />
            <span className="font-bold text-lg">Jimoty</span>
          </motion.div>
          
          <div className="mt-6 text-center">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-bold border border-yellow-200">
              基本利用料 無料
            </span>
            <p className="text-xs text-gray-400 mt-2">収益源: 広告枠 & オプション機能</p>
          </div>
        </div>

        {/* User B */}
        <div className="flex flex-col items-center text-center w-1/3">
          <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <Users className="w-12 h-12 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold">閲覧者 (Request)</h3>
          <p className="text-sm text-gray-500 mt-2">
            地域でモノ・人<br/>を探している
          </p>
        </div>
      </div>
    </motion.div>

    <div className="grid grid-cols-2 gap-8 w-full">
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <h4 className="font-bold text-gray-700 mb-2">取り扱いカテゴリー</h4>
        <div className="flex justify-center gap-4 text-gray-500">
          <span className="flex items-center gap-1"><CheckCircle2 size={16}/> 家具家電</span>
          <span className="flex items-center gap-1"><CheckCircle2 size={16}/> バイト</span>
          <span className="flex items-center gap-1"><CheckCircle2 size={16}/> 里親</span>
          <span className="flex items-center gap-1"><CheckCircle2 size={16}/> 教室</span>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg text-center">
        <h4 className="font-bold text-gray-700 mb-2">特徴</h4>
        <div className="flex justify-center gap-4 text-gray-500">
          <span className="flex items-center gap-1"><Map size={16}/> 地域密着</span>
          <span className="flex items-center gap-1"><Repeat size={16}/> 直接取引</span>
        </div>
      </div>
    </div>
  </SlideLayout>
);

// Slide 4: Pros & Cons
export const SlideProsCons: React.FC = () => (
  <SlideLayout>
    <h2 className="text-4xl font-bold mb-12 text-gray-800 border-b-4 border-jimoty inline-block pb-2">
      メリットとデメリット
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full max-h-[60vh]">
      {/* Pros */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-green-50 border-2 border-green-100 rounded-3xl p-8 flex flex-col"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-green-500 rounded-2xl text-white shadow-lg">
            <TrendingUp size={32} />
          </div>
          <h3 className="text-3xl font-bold text-green-800">メリット</h3>
        </div>
        
        <ul className="space-y-6 flex-1">
          {[
            { title: "圧倒的に安い", desc: "中間マージンがないため、0円や格安が多い。" },
            { title: "即日対応・近所", desc: "配送を待たずに、今日中に受け取れる。" },
            { title: "誰でも収益化", desc: "捨てるはずだった粗大ゴミが現金化できる。" }
          ].map((item, idx) => (
            <motion.li key={idx} variants={itemVariants} className="flex items-start gap-4">
              <CheckCircle2 className="text-green-600 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Cons */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-red-50 border-2 border-red-100 rounded-3xl p-8 flex flex-col"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-red-500 rounded-2xl text-white shadow-lg">
            <AlertTriangle size={32} />
          </div>
          <h3 className="text-3xl font-bold text-red-800">デメリット</h3>
        </div>
        
        <ul className="space-y-6 flex-1">
           {[
            { title: "安全性のリスク", desc: "対面取引のため、見知らぬ人と会う必要がある。" },
            { title: "品質の保証がない", desc: "プロの業者ではないため、状態は現物確認必須。" },
            { title: "トラブルは自己責任", desc: "ドタキャンや音信不通のリスクがある。" }
          ].map((item, idx) => (
            <motion.li key={idx} variants={itemVariants} className="flex items-start gap-4">
              <AlertTriangle className="text-red-600 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-lg text-gray-800">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  </SlideLayout>
);

// Slide 5: Growth Background
export const SlideGrowth: React.FC = () => (
  <SlideLayout>
    <h2 className="text-4xl font-bold mb-12 text-gray-800 border-b-4 border-jimoty inline-block pb-2">
      なぜ今、成長しているのか？
    </h2>

    <div className="flex flex-col md:flex-row gap-12 items-center justify-center w-full">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-blue-500 flex-1 h-full min-h-[400px]"
      >
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <Building2 className="text-blue-600 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-4">地域コミュニティの希薄化</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          隣人の顔を知らないことが当たり前の現代。
          しかし、「困ったときに頼れる人」の需要は消えていない。
        </p>
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="font-bold text-blue-800 text-center">
            「現代の町内会」<br/>としての機能
          </p>
        </div>
      </motion.div>

      <div className="hidden md:block">
        <ArrowRight className="text-gray-300 w-12 h-12" />
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-yellow-500 flex-1 h-full min-h-[400px]"
      >
        <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
          <Landmark className="text-yellow-600 w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-4">コスト意識の変化</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          物価高騰や実質賃金の低下により、
          「新品」へのこだわりが薄れ、「使えるなら中古で十分」という意識が定着。
        </p>
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="font-bold text-yellow-800 text-center">
            「0円」や「格安」<br/>への圧倒的需要
          </p>
        </div>
      </motion.div>
    </div>
  </SlideLayout>
);

// Slide 6: Conclusion & Future
export const SlideConclusion: React.FC = () => (
  <SlideLayout>
    <h2 className="text-4xl font-bold mb-8 text-gray-800 border-b-4 border-jimoty inline-block pb-2">
      考察と新規ビジネス
    </h2>

    <div className="w-full space-y-8">
      {/* Conclusion */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <CheckCircle2 className="text-jimoty" />
          <span>結論</span>
        </h3>
        <p className="text-xl">
          ジモティーは単なる掲示板ではなく、行政や自治会が担えなくなった領域を埋める
          <span className="text-jimoty font-bold ml-2">「現代のインフラ」</span>である。
        </p>
      </motion.div>

      {/* New Idea */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-jimoty to-green-700 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden"
      >
        <Globe2 className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10" />
        
        <h3 className="text-3xl font-bold mb-6 border-b border-white/30 pb-4 inline-block">
          💡 新規ビジネスアイデア
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 relative z-10">
          <div className="flex-1">
            <h4 className="text-2xl font-bold mb-4">在留外国人特化型 CtoC サポート</h4>
            <p className="text-green-50 text-lg leading-relaxed">
              言語の壁がある外国人居住者と、サポートできる地域住民（日本人・先輩外国人）をマッチングするサービス。
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-1 gap-4">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
              <Building2 className="w-6 h-6" />
              <span>役所の手続き同行</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
              <Stethoscope className="w-6 h-6" />
              <span>病院の通訳・付き添い</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
              <HeartHandshake className="w-6 h-6" />
              <span>ゴミ出し・生活ルールのレクチャー</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-12 text-gray-400 text-sm font-bold"
    >
      THANK YOU FOR LISTENING
    </motion.div>
  </SlideLayout>
);
