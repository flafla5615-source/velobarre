import { CalendarCheck, MessageCircle, PhoneCall } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-white/94 px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_40px_rgba(86,63,55,0.12)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-[560px] grid-cols-3 gap-2">
        <a
          href="#trial"
          aria-label="무료체험 신청"
          className="flex min-h-14 flex-col items-center justify-center rounded-md bg-rose px-2 text-xs font-extrabold text-white"
        >
          <CalendarCheck size={18} aria-hidden="true" />
          무료체험
        </a>
        <a
          href="#location"
          aria-label="상담하기"
          className="flex min-h-14 flex-col items-center justify-center rounded-md border border-line bg-ivory px-2 text-xs font-extrabold text-charcoal"
        >
          <PhoneCall size={18} aria-hidden="true" />
          상담하기
        </a>
        <a
          href="#trial"
          aria-label="카카오톡 문의"
          className="flex min-h-14 flex-col items-center justify-center rounded-md bg-[#F8D84A] px-2 text-xs font-extrabold text-charcoal"
        >
          <MessageCircle size={18} aria-hidden="true" />
          카카오톡
        </a>
      </div>
    </div>
  );
}
