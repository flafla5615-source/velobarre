import { Flame, Leaf, Ruler, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Ruler,
    title: "자세 교정 & 체형 밸런스",
    body: "틀어진 자세를 바로잡고 우아한 바디라인을 완성합니다."
  },
  {
    icon: Flame,
    title: "고효율 칼로리 소모",
    body: "사이클 유산소로 짧은 시간 안에 높은 운동 효과를 경험합니다."
  },
  {
    icon: ShieldCheck,
    title: "탄탄하고 균형 잡힌 근육",
    body: "바레의 섬세한 근력운동으로 길고 매끈한 라인을 만듭니다."
  },
  {
    icon: Leaf,
    title: "지속 가능한 건강 습관",
    body: "무리하지 않고 오래 지속할 수 있는 운동 루틴을 만듭니다."
  }
];

export default function KeyBenefits() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="eyebrow">VELOBARRE Key Benefits</p>
            <h2 className="display-title mt-3 text-[2.5rem] leading-tight md:text-[3.45rem]">
              눈에 보이는 변화,
              <br />
              삶의 균형까지
            </h2>
          </div>
          <p className="max-w-2xl leading-8 text-muted-text lg:justify-self-end">
            강한 운동도 아름다울 수 있습니다. 당신의 자세, 라인, 체력을 하나의 루틴으로
            완성합니다.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[8px] border border-line bg-ivory transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative h-36 bg-gradient-to-br from-blush via-white to-taupe/20">
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-md bg-white text-rose-dark shadow-soft">
                    <Icon size={26} aria-hidden="true" />
                  </div>
                  <div className="absolute bottom-0 right-0 h-24 w-28 rounded-tl-full bg-rose/20" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-text">{item.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
