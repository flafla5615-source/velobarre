export default function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal pb-[calc(40px+env(safe-area-inset-bottom))] pt-12 text-white md:pb-12">
      <div className="container-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="#hero" aria-label="VELOBARRE home" className="leading-none">
            <span className="display-title block text-[2rem] uppercase">
              VELOBARRE
            </span>
            <span className="block text-sm font-bold text-blush">벨로바레</span>
          </a>
          <p className="mt-5 max-w-lg leading-8 text-white/68">
            VELOBARRE는 바레와 사이클의 완벽한 조화로 당신의 몸과 마음을 아름답게
            만듭니다.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/72">
          <a href="#" className="hover:text-blush">
            이용약관
          </a>
          <a href="#" className="hover:text-blush">
            개인정보처리방침
          </a>
          <a href="#" className="hover:text-blush">
            Instagram
          </a>
          <a href="#" className="hover:text-blush">
            Kakao
          </a>
        </div>
      </div>
      <div className="container-shell mt-8 border-t border-white/10 pt-6 text-sm text-white/48">
        Copyright 2026 VELOBARRE. All rights reserved.
      </div>
    </footer>
  );
}
