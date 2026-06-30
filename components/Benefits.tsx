import Image from "next/image";
import { Dumbbell, Flower2, Music2, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Flower2,
    title: "초보자도 가능",
    body: "처음이신 분도 부담 없이 시작할 수 있어요.",
    src: "/images/velobarre/stretching-recovery.webp",
    alt: "벨로바레에서 초보자도 부담 없이 움직일 수 있는 회복 루틴",
    position: "object-[45%_center]"
  },
  {
    icon: Sparkles,
    title: "정확한 정렬",
    body: "바른 정렬을 바탕으로 안전하고 효과적으로 움직입니다.",
    src: "/images/velobarre/instructor-care.webp",
    alt: "벨로바레 강사가 바른 정렬을 세심하게 안내하는 모습",
    position: "object-[48%_center]"
  },
  {
    icon: Dumbbell,
    title: "코어·둔근 강화",
    body: "코어와 둔근을 집중적으로 사용해 몸을 단단하게 만듭니다.",
    src: "/images/velobarre/barre-class.webp",
    alt: "벨로바레 바레 수업에서 코어와 둔근을 사용하는 모습",
    position: "object-[62%_center]"
  },
  {
    icon: Music2,
    title: "리듬감 있는 수업",
    body: "음악과 함께 몰입하며 즐겁게 움직이는 수업입니다.",
    src: "/images/velobarre/cycling-class.webp",
    alt: "벨로바레의 리듬감 있는 그룹 수업 공간",
    position: "object-[62%_center]"
  }
];

export default function Benefits() {
  return (
    <section id="benefit" className="section-pad">
      <div className="container-shell">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <p className="eyebrow">VELO BARRE</p>
          <h2 className="display-title mt-3 text-[2rem] leading-tight text-rose md:text-[2.6rem] lg:text-[3rem]">
            왜 벨로바레일까요?
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="glass-card group overflow-hidden rounded-[12px] transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative h-[196px] overflow-hidden md:h-[210px] lg:h-[190px]">
                  <Image
                    src={benefit.src}
                    alt={benefit.alt}
                    width={724}
                    height={543}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${benefit.position}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 to-transparent" />
                </div>
                <div className="p-6 md:p-7">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blush text-rose-dark">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-[1.22rem] font-extrabold leading-snug text-charcoal">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[0.96rem] leading-[1.7] text-muted-text">{benefit.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
