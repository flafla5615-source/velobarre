import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function DirectorTeaser() {
  return (
    <section id="director" className="section-pad">
      <div className="container-shell grid overflow-hidden rounded-[12px] border border-line bg-pearl shadow-soft lg:grid-cols-2">
        <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
          <p className="eyebrow">DIRECTOR</p>
          <h2 className="display-title mt-4 text-[2rem] leading-tight text-rose md:text-[2.7rem] lg:text-[3.25rem]">
            우아필라테스를 만든
            <br />
            최우린 지부장이 설계한 바레
          </h2>
          <p className="mt-6 max-w-xl text-[1rem] leading-[1.85] text-muted-text">
            여성의 몸과 움직임을 오래 고민해온 최우린 지부장이 우아필라테스의
            브랜드 운영 경험을 바탕으로 벨로바레의 공간과 프로그램, 수업 기준을
            설계합니다.
          </p>
          <p className="mt-7 display-title text-[1.25rem] text-rose">
            WOOA PILATES → VELO BARRE
          </p>
          <a
            href="/woorin"
            className="premium-button mt-8 w-full border border-rose bg-white text-rose hover:bg-rose hover:text-white sm:w-fit"
          >
            최우린 지부장 이야기 <ArrowRight size={18} />
          </a>
        </div>

        <div className="relative min-h-[360px] lg:min-h-[560px]">
          <Image
            src="/images/velobarre/review-member-01.webp"
            alt="최우린 지부장 사진 교체 영역"
            width={1456}
            height={1088}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full w-full object-cover object-[52%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-dark/22 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
