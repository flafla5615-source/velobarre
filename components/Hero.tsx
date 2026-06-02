import { ArrowRight, BadgeCheck, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-[92px]">
      <div className="container-shell">
        <div className="mock-studio relative min-h-[660px] overflow-hidden rounded-[8px] border border-line shadow-soft md:min-h-[620px]">
          <div className="absolute right-8 top-8 hidden gap-4 md:flex">
            <div className="arch h-64 w-28" />
            <div className="arch h-72 w-32" />
            <div className="arch h-64 w-28" />
          </div>

          <div className="absolute bottom-12 right-[6%] hidden h-[250px] w-[430px] md:block">
            <div className="bike-wheel absolute bottom-0 left-8 h-24 w-24" />
            <div className="bike-wheel absolute bottom-0 right-12 h-24 w-24" />
            <div className="absolute bottom-[70px] left-[93px] h-1 w-56 rotate-[-8deg] rounded bg-charcoal/45" />
            <div className="person right-[155px] top-0 scale-[1.45]" />
          </div>

          <div className="absolute bottom-24 left-[50%] hidden h-[240px] w-[320px] -translate-x-1/2 md:block">
            <div className="absolute left-0 top-20 h-1 w-80 rounded bg-rose-dark/32" />
            <div className="person left-4 top-24 scale-90 opacity-60" />
            <div className="person left-24 top-20 scale-100 opacity-70" />
            <div className="person left-48 top-28 scale-90 opacity-60" />
          </div>

          <div className="relative z-10 flex min-h-[660px] flex-col justify-between px-6 py-9 md:min-h-[620px] md:px-12 md:py-14 lg:w-[56%]">
            <div>
              <p className="eyebrow mb-5">Premium Barre + Cycling Studio</p>
              <h1 className="display-title text-[3.05rem] leading-[1.08] text-charcoal sm:text-[4.2rem]">
                하루 50분,
                <br />
                가장 우아한 바디루틴
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted-text md:text-lg">
                바레의 섬세함과 사이클의 강력함을 하나로. VELOBARRE에서 당신만의
                바디라인, 자세, 체력을 완성하세요.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#trial"
                  className="premium-button bg-rose text-white shadow-lift hover:bg-rose-dark"
                >
                  무료체험 신청 <ArrowRight size={18} />
                </a>
                <a
                  href="#location"
                  className="premium-button border border-taupe/60 bg-white/86 text-charcoal hover:border-rose hover:text-rose-dark"
                >
                  1:1 상담하기 <MessageCircle size={18} />
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm font-bold text-muted-text">
              <span className="inline-flex items-center gap-2 rounded-md bg-white/80 px-4 py-3">
                <BadgeCheck size={17} className="text-rose-dark" />
                신규회원 전용 혜택
              </span>
              <span className="inline-flex rounded-md bg-white/80 px-4 py-3">
                체험 후 등록 시 특별 할인
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
