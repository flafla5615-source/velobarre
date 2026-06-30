import Image from "next/image";
import { ArrowRight, BadgeCheck, CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-[78px] md:pt-[92px]">
      <div className="container-shell">
        <div className="grid overflow-hidden rounded-[12px] border border-line bg-pearl shadow-soft lg:min-h-[650px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-7 sm:px-7 md:px-12 md:py-14">
            <p className="eyebrow mb-4">Women Boutique Barre Studio</p>
            <h1 className="display-title text-[2.35rem] leading-[1.08] text-charcoal sm:text-[2.65rem] md:text-[3.35rem] lg:text-[4.35rem]">
              우아한 움직임,
              <br />
              단단한 변화
            </h1>
            <p className="mt-5 max-w-xl text-[1rem] leading-[1.75] text-muted-text md:text-lg">
              필라테스의 섬세함과 바레의 에너지를 결합한 여성 전문 부티크 스튜디오
            </p>
            <p className="mt-4 max-w-lg text-[0.98rem] leading-[1.7] text-muted-text">
              처음이신 분도 부담 없이 시작할 수 있습니다. 발레 경험이나 뛰어난 유연성이
              없어도 참여할 수 있습니다.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#trial"
                className="premium-button w-full bg-rose text-white shadow-lift hover:bg-rose-dark sm:w-auto"
              >
                첫 체험 예약 <ArrowRight size={18} />
              </a>
              <a
                href="#program"
                className="premium-button w-full border border-taupe/60 bg-white text-charcoal hover:border-rose hover:text-rose-dark sm:w-auto"
              >
                시간표 보기 <CalendarDays size={18} />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-[0.9rem] font-bold text-muted-text">
              <span className="inline-flex items-center gap-2 rounded-lg bg-blush/70 px-3.5 py-2.5">
                <BadgeCheck size={16} className="text-rose-dark" aria-hidden="true" />
                초보자 참여 가능
              </span>
              <span className="inline-flex rounded-lg bg-blush/70 px-3.5 py-2.5">
                소규모 맞춤 티칭
              </span>
            </div>
          </div>

          <div className="relative mx-4 mb-4 aspect-[16/10] overflow-hidden rounded-[24px] shadow-[0_24px_80px_rgba(92,64,58,0.16)] sm:mx-6 md:aspect-[4/3] lg:m-5 lg:aspect-auto lg:min-h-[610px]">
            <Image
              src="/images/velobarre/hero-main.webp"
              alt="벨로바레 부티크 바레 스튜디오 대표 이미지"
              width={1672}
              height={941}
              priority
              sizes="(max-width: 1024px) 100vw, 56vw"
              className="h-full w-full object-cover object-[58%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F1]/72 via-[#FAF7F1]/16 to-transparent lg:from-[#FAF7F1]/24" />
            <div className="absolute bottom-4 left-4 rounded-lg bg-white/88 px-4 py-3 shadow-soft backdrop-blur">
              <p className="display-title text-4xl leading-none text-rose">VB</p>
              <p className="mt-1 text-sm font-extrabold text-charcoal md:text-base">
                VELO BARRE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
