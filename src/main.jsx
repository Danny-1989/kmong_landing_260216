import React, { useState } from 'react';
import { createRoot } from 'react-dom/client'; // 추가
import { Play, ChevronRight, ... } from 'lucide-react'; // 
import React, { useState } from 'react';
import { 
  Play, 
  ChevronRight, 
  Store, 
  ShoppingBag, 
  Rocket, 
  Search, 
  MessageSquare, 
  ShieldCheck,
  Palette,
  Megaphone,
  Code,
  Video,
  Scale,
  FileText,
  Sparkles,
  Building2,
  Menu,
  ArrowRight
} from 'lucide-react';

const KMONG_COLORS = {
  primary: '#92FA72',
  secondary: '#5DD877',
  black: '#000000',
  enterprise: '#1787FF',
  biz: '#01A77E',
  ai: 'linear-gradient(90deg, #E053DD 0%, #823CE6 100%)',
  gray: {
    50: '#F9FBFA',
    100: '#F2F7F2',
    200: '#E8F8E3',
    400: '#A1A1A1',
    800: '#28462F',
    900: '#181A1B'
  }
};

const App = () => {
  const [activeTab, setActiveTab] = useState('store');

  const diagnosisData = {
    store: {
      title: "매장 운영자",
      sections: [
        { label: "가게 홍보를 어떻게 해야 할지 모르겠어요", items: ["플레이스 홍보", "체험단", "인스타 관리", "카페 바이럴"], cta: "홍보 전문가 찾기" },
        { label: "가게 이미지를 깔끔하게 만들고 싶어요", items: ["음식 사진", "메뉴판 디자인", "로고 디자인", "전단지"], cta: "디자인 전문가 찾기" },
        { label: "세금, 노무 관리가 필요해요", items: ["세무 관리", "절세 문의", "노무 자문", "법무 자문"], cta: "비즈니스 상담하기" }
      ]
    },
    seller: {
      title: "온라인 셀러",
      sections: [
        { label: "쇼핑몰 초기 세팅이 필요해요", items: ["제품 사진", "숏폼영상", "상세페이지 제작", "리뷰 관리"], cta: "세팅 전문가 찾기" },
        { label: "더 많은 고객이 필요해요", items: ["순위 최적화", "SEO", "인스타 관리", "블로그 포스팅"], cta: "마케팅 전문가 찾기" },
        { label: "확실한 매출이 필요해요", items: ["핫딜 바이럴", "인플루언서 마케팅", "라이브커머스", "SNS광고"], cta: "매출 증대 솔루션" }
      ]
    },
    founder: {
      title: "초기 창업자",
      sections: [
        { label: "브랜드 초기 구축이 필요해요", items: ["로고 제작", "상표 출원", "홈페이지 제작", "프로필 사진"], cta: "브랜딩 시작하기" },
        { label: "마케팅 세팅이 필요해요", items: ["SEO", "리뷰 관리", "언론홍보", "영상 제작"], cta: "마케팅 전문가 매칭" },
        { label: "정부지원사업을 준비하고 있어요", items: ["기획", "MVP 개발", "사업계획서 컨설팅", "PPT 디자인"], cta: "컨설팅 전문가 찾기" }
      ]
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen max-w-[480px] mx-auto shadow-xl relative pb-24">
      {/* Mobile Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 h-14 flex items-center justify-between">
        <img 
          src="kmong_프로필_블랙_투명.png" 
          alt="kmong" 
          className="h-[18px]"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/80x18?text=kmong'; }}
        />
        <div className="flex items-center gap-4">
          <button className="text-sm font-bold text-slate-800">로그인</button>
          <Menu size={24} className="text-slate-800" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-10 pb-16 px-5 bg-[#F9FBFA] text-center">
        <h1 className="text-[32px] font-black leading-[1.2] mb-4 tracking-tight">
          일 생기면, 일단 <span className="text-black">크몽</span>
        </h1>
        <p className="text-base text-slate-600 mb-8 break-keep">
          비즈니스는 키우고 번거로운 일은 덜어내세요
        </p>
        
        {/* Video Placeholder */}
        <div className="w-full mb-8 aspect-[16/10] bg-gray-200 rounded-2xl overflow-hidden relative active:scale-[0.98] transition-transform shadow-lg">
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
              <Play fill="black" size={24} className="ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white text-left">
            <h3 className="text-sm font-bold drop-shadow-md">비즈니스 성공을 위한 전문가 매칭</h3>
          </div>
        </div>

        <button className="w-full bg-[#92FA72] text-black font-bold text-lg py-4 rounded-xl shadow-[0_4px_12px_rgba(146,250,114,0.3)] active:scale-95 transition-all">
          무료로 시작하기
        </button>
      </section>

      {/* Diagnosis Section */}
      <section className="py-16 px-5 bg-white">
        <div className="mb-8">
          <span className="bg-[#E8F8E3] text-[#3F7D4B] px-3 py-1 rounded-full text-xs font-bold mb-3 inline-block">맞춤 진단</span>
          <h2 className="text-2xl font-bold mb-2">어떤 고민이 있으신가요?</h2>
          <p className="text-sm text-slate-500">고민을 클릭하면 딱 맞는 전문가를 추천해요</p>
        </div>

        {/* Tab Scroll */}
        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar pb-2">
          {[
            { id: 'store', label: '매장 운영자', icon: <Store size={18} /> },
            { id: 'seller', label: '온라인 셀러', icon: <ShoppingBag size={18} /> },
            { id: 'founder', label: '초기 창업자', icon: <Rocket size={18} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold transition-all whitespace-nowrap text-sm border ${
                activeTab === tab.id 
                  ? 'bg-black text-white border-black shadow-md' 
                  : 'bg-white text-slate-500 border-gray-200'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Cards with CTA */}
        <div className="space-y-4">
          {diagnosisData[activeTab].sections.map((section, idx) => (
            <div 
              key={idx} 
              className="group bg-[#F9FBFA] rounded-3xl p-6 border border-gray-100 active:bg-[#E8F8E3] active:border-[#92FA72] active:scale-[0.98] transition-all cursor-pointer relative shadow-sm"
              onClick={() => console.log(`${section.cta} 페이지로 이동`)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[17px] font-bold break-keep leading-tight text-slate-800 pr-8">
                  {section.label}
                </h3>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-400 group-active:text-[#3F7D4B] shadow-sm">
                  <ChevronRight size={18} />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1.5 mb-6">
                {section.items.map((item, i) => (
                  <span key={i} className="px-2.5 py-1 bg-white border border-gray-100 rounded-lg text-[11px] text-slate-500 font-medium">
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 group-active:text-[#3F7D4B]">
                {section.cta} <ArrowRight size={14} className="mt-0.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-12 bg-black text-white px-5">
        <div className="grid grid-cols-2 gap-y-10 gap-x-4">
          {[
            { label: '누적 거래', value: '600만+' },
            { label: '누적 회원', value: '400만+' },
            { label: '누적 서비스', value: '70만+' },
            { label: '고객만족도', value: '98.6%' }
          ].map((stat, i) => (
            <div key={i} className="text-center border-l border-white/10 first:border-0 even:border-l">
              <p className="text-gray-500 text-[10px] mb-1 uppercase tracking-wider">{stat.label}</p>
              <h4 className="text-2xl font-black text-[#92FA72]">{stat.value}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-5 bg-[#F9FBFA]">
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2 break-keep">비즈니스의 모든 것 다 됩니다.</h2>
          <p className="text-sm text-slate-500 leading-relaxed">디자인부터 개발, 마케팅, 세무까지 필요한 전문가를 모두 만나보세요</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <Palette size={24} />, title: '디자인', desc: '로고, 상세페이지 등' },
            { icon: <Megaphone size={24} />, title: '마케팅', desc: 'SNS 관리, 바이럴 등' },
            { icon: <Code size={24} />, title: 'IT 개발', desc: '홈페이지, 앱 등' },
            { icon: <Video size={24} />, title: '영상, 사진', desc: '촬영, 편집 등' },
            { icon: <Scale size={24} />, title: '세무 법무', desc: '세무, 노무 자문 등' },
            { icon: <FileText size={24} />, title: '번역, 문서', desc: '통번역, 문서작성 등' }
          ].map((cat, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 active:border-[#92FA72] transition-colors">
              <div className="mb-3 text-slate-400">{cat.icon}</div>
              <h4 className="font-bold text-sm mb-1">{cat.title}</h4>
              <p className="text-[11px] text-slate-400 leading-tight">{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-16 px-5 bg-white">
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">이용 가이드</p>
          <h2 className="text-2xl font-bold mb-2 tracking-tight">3단계로 간단하게</h2>
          <p className="text-sm text-slate-500">처음이어도 걱정 없이 시작하세요</p>
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-[23px] top-4 bottom-4 w-[1px] bg-gray-100 z-0"></div>
          
          {[
            {
              step: '1',
              title: '탐색',
              icon: <Search size={18} className="text-[#3F7D4B]" />,
              desc: '간편하게 검색하고, 실제 후기와 포트폴리오로 비교해요',
              checks: ['실제 후기 확인', '포토폴리오 비교']
            },
            {
              step: '2',
              title: '문의',
              icon: <MessageSquare size={18} className="text-[#3F7D4B]" />,
              desc: '결제 전 전문가와 무료로 상담하고 요구사항을 조율하세요',
              checks: ['무료 상담', '요구사항 조율']
            },
            {
              step: '3',
              title: '거래',
              icon: <ShieldCheck size={18} className="text-[#3F7D4B]" />,
              desc: '대금을 안전하게 보호하는 에스크로 결제로 거래하세요',
              checks: ['에스크로 결제', '안전 보장']
            }
          ].map((item, i) => (
            <div key={i} className="relative z-10 flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-[#92FA72] rounded-2xl flex items-center justify-center font-black text-lg shadow-sm">
                {item.step}
              </div>
              <div className="pt-1">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  {item.title} {item.icon}
                </h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed break-keep">{item.desc}</p>
                <div className="flex flex-col gap-2">
                  {item.checks.map((check, ci) => (
                    <div key={ci} className="flex items-center gap-2 text-[11px] font-bold text-slate-800 bg-[#F2F7F2] py-1.5 px-3 rounded-lg w-fit">
                      <span className="text-[#3F7D4B] text-[10px]">✔</span> {check}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Layout Updated */}
      <section className="py-16 px-5 bg-[#F2F7F2] space-y-4">
        {/* Full Width Coupon CTA */}
        <div className="bg-white rounded-[24px] p-6 border border-[#C1F2B1] shadow-sm active:scale-[0.98] transition-all">
          <div className="inline-block bg-[#FF4DDF] text-white px-2 py-0.5 rounded text-[10px] font-bold mb-3">첫구매 한정</div>
          <h3 className="text-xl font-extrabold mb-2 leading-tight tracking-tight">지금 가입하고<br />1만원 할인 쿠폰 받기</h3>
          <p className="text-xs text-slate-500 mb-6">가입 즉시 비즈니스 전 부문 사용 가능</p>
          <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-base active:bg-slate-800">
            쿠폰 받고 시작하기
          </button>
        </div>

        {/* 2-Column Grid for Enterprise and AI Search */}
        <div className="grid grid-cols-2 gap-3">
          {/* Left: Enterprise CTA */}
          <div className="bg-white rounded-[24px] p-5 border border-blue-50 active:bg-slate-50 transition-all active:scale-[0.98] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[#1787FF] font-bold text-[11px] mb-3">
                <Building2 size={16} />
                엔터프라이즈
              </div>
              <h3 className="text-[14px] font-bold mb-2 break-keep leading-snug">기업 맞춤 외주 업체 매칭</h3>
            </div>
            <div className="flex items-center font-bold text-[11px] text-slate-900 mt-4">
              더 알아보기 <ChevronRight size={14} />
            </div>
          </div>

          {/* Right: AI Search CTA */}
          <div className="bg-white rounded-[24px] p-5 border border-purple-50 active:bg-slate-50 transition-all active:scale-[0.98] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-50 rounded-full blur-xl opacity-60"></div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-[11px] mb-3" style={{ color: '#823CE6' }}>
                <Sparkles size={16} />
                AI 검색
              </div>
              <h3 className="text-[14px] font-bold mb-2 break-keep leading-snug">문장으로 전문가 추천</h3>
            </div>
            <div className="flex items-center font-bold text-[11px] text-slate-900 mt-4">
              검색하기 <ChevronRight size={14} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-5">
        <img 
          src="kmong_프로필_블랙_투명.png" 
          alt="kmong" 
          className="h-[14px] mb-6 opacity-30" 
          onError={(e) => { e.target.src = 'https://via.placeholder.com/60x14?text=kmong'; }}
        />
        <div className="grid grid-cols-2 gap-8 mb-10">
          <div className="space-y-3">
            <h5 className="font-bold text-xs">서비스</h5>
            <ul className="text-[11px] text-slate-500 space-y-2">
              <li>크몽마켓</li>
              <li>엔터프라이즈</li>
              <li>크몽비즈</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="font-bold text-xs">고객센터</h5>
            <ul className="text-[11px] text-slate-500 space-y-2">
              <li>자주 묻는 질문</li>
              <li>공지사항</li>
              <li>전문가 등록</li>
            </ul>
          </div>
        </div>
        <p className="text-[10px] text-slate-400 leading-relaxed border-t border-gray-50 pt-8">
          (주)크몽 | 대표: 박현호 | 서울 서초구 강남대로 311<br />
          사업자등록번호: 214-88-82815 | 통신판매업신고: 2018-서울서초-0551<br />
          © kmong Inc. All rights reserved.
        </p>
      </footer>

      {/* Floating Bottom Action */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[440px] z-50">
        <button className="w-full bg-black text-[#92FA72] py-4 rounded-full font-black text-base shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform">
          무료 상담 시작하기 <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default App;

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
