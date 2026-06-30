import Image from "next/image";

const programs = [
  {
    name: "BEGIN",
    summary: "바레 입문과 기초 정렬",
    body: "바른 자세와 기본기를 천천히 익히는 입문 수업",
    src: "/images/velobarre/barre-class.webp",
    alt: "벨로바레 바레 입문 수업 이미지",
    position: "object-[58%_center]"
  },
  {
    name: "SIGNATURE",
    summary: "전신 밸런스와 코어 강화",
    body: "전신의 밸런스와 코어를 사용하는 벨로바레 대표 수업",
    src: "/images/velobarre/studio-main.webp",
    alt: "벨로바레 대표 바레 프로그램이 진행되는 스튜디오",
    position: "object-[52%_center]"
  },
  {
    name: "SCULPT",
    summary: "하체·둔근 집중",
    body: "하체와 둔근을 집중적으로 사용해 몸의 라인을 정돈하는 수업",
    src: "/images/velobarre/instructor-care.webp",
    alt: "벨로바레 하체와 둔근 라인을 정돈하는 수업 이미지",
    position: "object-[48%_center]"
  },
  {
    name: "FLOW",
    summary: "음악과 함께하는 리듬 바레",
    body: "음악과 호흡에 맞춰 움직임을 자연스럽게 연결하는 수업",
    src: "/images/velobarre/stretching-recovery.webp",
    alt: "벨로바레 음악과 호흡에 맞춰 움직이는 플로우 수업 이미지",
    position: "object-[44%_center]"
  }
];

export default function ProgramProcess() {
  return (
    <section id="program" className="section-pad bg-ivory/60">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">PROGRAM</p>
          <h2 className="display-title mt-3 text-[2rem] leading-tight text-rose md:text-[2.7rem] lg:text-[3.25rem]">
            몸의 목적에 맞춰
            <br />
            섬세하게 설계한 수업
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.75] text-muted-text">
            입문부터 라인 정돈, 리듬감 있는 움직임까지 단계별로 경험할 수 있는
            벨로바레 프로그램입니다.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <article
              key={program.name}
              className="group overflow-hidden rounded-[12px] border border-line bg-pearl shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative h-[230px] overflow-hidden md:h-[250px] lg:h-[240px]">
                <Image
                  src={program.src}
                  alt={program.alt}
                  width={724}
                  height={543}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${program.position}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/24 to-transparent" />
              </div>
              <div className="p-6 text-center md:p-7">
                <h3 className="display-title text-[1.8rem] leading-none text-rose">
                  {program.name}
                </h3>
                <p className="mt-4 text-[1rem] font-extrabold text-charcoal">
                  {program.summary}
                </p>
                <p className="mt-3 text-[0.96rem] leading-[1.7] text-muted-text">
                  {program.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
