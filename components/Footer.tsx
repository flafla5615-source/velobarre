export default function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal pb-[calc(40px+env(safe-area-inset-bottom))] pt-12 text-white md:pb-12">
      <div className="container-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="/#hero" aria-label="VELO BARRE home" className="leading-none">
            <span className="display-title block text-[2rem] uppercase">RETURNCOMPANY</span>
            <span className="block text-sm font-bold text-blush">VELO BARRE</span>
          </a>
          <p className="mt-5 max-w-lg leading-8 text-white/68">
            14년 피트니스 운영 경험을 바탕으로 여성 부티크 피트니스 브랜드를
            확장합니다.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/72">
          <a href="/#program" className="hover:text-blush">
            프로그램
          </a>
          <a href="/director" className="hover:text-blush">
            최우린 디렉터
          </a>
          <a href="/#trial" className="hover:text-blush">
            문의
          </a>
          <span className="text-white/42">
            이용약관
          </span>
          <span className="text-white/42">
            개인정보처리방침
          </span>
        </div>
      </div>
      <div className="container-shell mt-8 border-t border-white/10 pt-6 text-sm text-white/48">
        Copyright 2026 VELO BARRE. All rights reserved.
      </div>
    </footer>
  );
}
