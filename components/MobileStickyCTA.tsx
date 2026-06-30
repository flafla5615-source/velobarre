import { CalendarCheck, MessageCircle, ScrollText } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-white/95 px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 shadow-[0_-12px_40px_rgba(86,63,55,0.12)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-[560px] grid-cols-3 gap-2">
        <a
          href="/#trial"
          aria-label="체험예약"
          className="flex min-h-[58px] flex-col items-center justify-center rounded-lg bg-rose px-2 text-xs font-extrabold leading-tight text-white active:bg-rose-dark"
        >
          <CalendarCheck size={18} aria-hidden="true" />
          체험예약
        </a>
        <a
          href="/#program"
          aria-label="시간표 보기"
          className="flex min-h-[58px] flex-col items-center justify-center rounded-lg border border-line bg-ivory px-2 text-xs font-extrabold leading-tight text-charcoal active:bg-blush/70"
        >
          <ScrollText size={18} aria-hidden="true" />
          프로그램
        </a>
        <a
          href="/#trial"
          aria-label="문의하기"
          className="flex min-h-[58px] flex-col items-center justify-center rounded-lg border border-line bg-white px-2 text-xs font-extrabold leading-tight text-charcoal active:bg-blush/70"
        >
          <MessageCircle size={18} aria-hidden="true" />
          문의하기
        </a>
      </div>
    </div>
  );
}
