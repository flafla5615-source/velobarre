import { Activity, Bike, ClipboardCheck, Dumbbell, Flower2, Waves } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "체크인",
    body: "컨디션 체크 및 맞춤 강도 설정"
  },
  {
    icon: Activity,
    title: "워밍업",
    body: "관절과 근육을 깨우는 동적 스트레칭"
  },
  {
    icon: Bike,
    title: "라이딩",
    body: "지구력 향상과 칼로리 소모"
  },
  {
    icon: Dumbbell,
    title: "바레",
    body: "코어, 라인, 자세를 섬세하게 교정"
  },
  {
    icon: Flower2,
    title: "스트레칭",
    body: "유연성 향상과 근육 이완"
  },
  {
    icon: Waves,
    title: "바디케어",
    body: "폼롤링과 회복 루틴"
  }
];

export default function ProgramProcess() {
  return (
    <section id="program" className="section-pad">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Program Process</p>
          <h2 className="display-title mt-3 text-[2.4rem] leading-tight md:text-[3.25rem]">
            체계적인 6-STEP 프로그램
          </h2>
          <p className="mt-4 text-muted-text">
            처음부터 끝까지, 당신의 50분을 디테일하게 설계합니다.
          </p>
        </div>

        <div className="mt-10 rounded-[8px] border border-line bg-white/74 p-4 shadow-soft md:p-7">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.title}
                  className="relative rounded-[8px] border border-line bg-pearl p-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blush text-rose-dark">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-extrabold text-rose-dark">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold text-charcoal">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-text">{step.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
