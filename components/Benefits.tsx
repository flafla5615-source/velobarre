import { Bike, Heart, Sparkles, UsersRound } from "lucide-react";

const benefits = [
  {
    icon: Bike,
    title: "Barre + Cycling",
    body: "유산소와 근력운동을 동시에. 바레의 섬세함과 사이클의 강력함을 결합한 루틴."
  },
  {
    icon: Sparkles,
    title: "PT급 맞춤 관리",
    body: "체형, 목표, 체력에 맞춘 개인별 큐레이션 프로그램."
  },
  {
    icon: UsersRound,
    title: "몰입형 그룹 수업",
    body: "음악, 조명, 동작 흐름이 결합된 집중도 높은 수업."
  },
  {
    icon: Heart,
    title: "전 연령 맞춤 루틴",
    body: "초보자부터 50대 이상까지 안전하게 지속 가능한 운동."
  }
];

export default function Benefits() {
  return (
    <section id="benefit" className="section-pad">
      <div className="container-shell">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="glass-card group rounded-[8px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-md bg-blush text-rose-dark">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h2 className="text-lg font-extrabold text-charcoal">{benefit.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-text">{benefit.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
