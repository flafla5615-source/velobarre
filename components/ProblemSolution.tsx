import { CheckCircle2 } from "lucide-react";

const problems = [
  "헬스장은 혼자 하기 어렵다",
  "필라테스는 운동량이 아쉽다",
  "PT는 비용 부담이 크다",
  "그룹수업은 관리받는 느낌이 부족하다",
  "자세와 체형 변화가 눈에 잘 보이지 않는다"
];

export default function ProblemSolution() {
  return (
    <section className="bg-charcoal py-16 text-white md:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow text-blush">Why VELOBARRE</p>
          <h2 className="display-title mt-4 text-[2.4rem] leading-tight md:text-[3.4rem]">
            운동을 시작해도
            <br />
            오래가지 못했던 이유
          </h2>
          <p className="mt-6 max-w-lg leading-8 text-white/72">
            벨로바레는 바레, 사이클링, 맞춤 관리를 하나의 50분 루틴으로 연결합니다.
            짧지만 깊게, 우아하지만 확실하게 변화하는 운동 경험을 제공합니다.
          </p>
        </div>

        <div className="rounded-[8px] border border-white/12 bg-white/[0.06] p-5 shadow-soft md:p-7">
          <h3 className="text-xl font-extrabold">벨로바레는 다르게 설계했습니다</h3>
          <div className="mt-6 grid gap-3">
            {problems.map((problem) => (
              <div
                key={problem}
                className="flex items-center gap-3 rounded-md border border-white/12 bg-white/[0.07] px-4 py-4"
              >
                <CheckCircle2 size={20} className="shrink-0 text-blush" aria-hidden="true" />
                <span className="font-bold text-white/90">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
