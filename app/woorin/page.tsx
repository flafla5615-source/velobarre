import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, BookOpen, Building2, GraduationCap, Handshake, MessageCircle, Users } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "최우린 지부장 | RETURNCOMPANY",
  description:
    "우아필라테스와 벨로바레의 브랜드, 공간, 프로그램을 설계하는 리턴컴퍼니 최우린 지부장 소개 페이지입니다.",
  openGraph: {
    title: "최우린 지부장 | RETURNCOMPANY",
    description: "우아필라테스를 만든 사람, 이제 바레의 새로운 기준을 만듭니다."
  }
};

const designAreas = [
  { icon: Building2, title: "브랜드 기획" },
  { icon: Users, title: "공간 경험" },
  { icon: BookOpen, title: "수업 프로그램" },
  { icon: GraduationCap, title: "강사 교육" },
  { icon: MessageCircle, title: "고객 상담" },
  { icon: Handshake, title: "커뮤니티 운영" }
];

const philosophies = [
  {
    title: "BODY",
    body: "여성의 몸과 움직임을 이해합니다."
  },
  {
    title: "EXPERIENCE",
    body: "수업뿐 아니라 공간과 서비스 전체를 설계합니다."
  },
  {
    title: "EDUCATION",
    body: "일관된 수업 품질을 위해 프로그램과 강사교육을 준비합니다."
  }
];

const educationItems = [
  "바레 프로그램 연구",
  "강사교육 준비",
  "교육 콘텐츠 제작",
  "브랜드 협업",
  "외부강의 및 프로그램 도입 문의"
];

export default function WoorinPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-[78px] md:pt-[92px]">
          <div className="container-shell">
            <div className="grid overflow-hidden rounded-[12px] border border-line bg-pearl shadow-soft lg:min-h-[650px] lg:grid-cols-[0.95fr_1.05fr]">
              <div className="flex flex-col justify-center px-5 py-8 sm:px-7 md:px-12 md:py-14">
                <p className="eyebrow mb-4">Branch Director, RETURNCOMPANY</p>
                <h1 className="display-title text-[2.25rem] leading-[1.12] text-rose sm:text-[2.65rem] md:text-[3.3rem] lg:text-[4.15rem]">
                  우아필라테스를 만든 사람,
                  <br />
                  이제 바레의 새로운 기준을 만듭니다.
                </h1>
                <p className="mt-6 max-w-xl text-[1rem] leading-[1.8] text-muted-text md:text-lg">
                  여성의 몸과 움직임을 이해하고 우아필라테스와 벨로바레의 브랜드,
                  공간, 프로그램을 설계하는 리턴컴퍼니 최우린 지부장
                </p>
                <p className="mt-5 font-extrabold text-charcoal">
                  최우린 | 리턴컴퍼니 지부장
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href="/#hero" className="premium-button bg-rose text-white hover:bg-rose-dark">
                    벨로바레 만나보기 <ArrowRight size={18} />
                  </a>
                  <a
                    href="#education"
                    className="premium-button border border-rose bg-white text-rose hover:bg-rose hover:text-white"
                  >
                    교육·협업 문의
                  </a>
                </div>
              </div>
              <div className="relative mx-4 mb-4 min-h-[360px] overflow-hidden rounded-[12px] sm:mx-6 lg:m-5 lg:min-h-[610px]">
                <Image
                  src="/images/velobarre/review-member-01.webp"
                  alt="최우린 지부장 사진 교체 영역"
                  width={1456}
                  height={1088}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover object-[52%_center]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-dark/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">BRAND MAKER</p>
              <h2 className="display-title mt-3 text-[2rem] leading-tight text-rose md:text-[2.7rem] lg:text-[3.25rem]">
                수업 하나가 아니라,
                <br />
                운동 경험 전체를 설계합니다
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {designAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article
                    key={area.title}
                    className="rounded-[12px] border border-line bg-white/86 p-6 shadow-soft"
                  >
                    <Icon size={28} className="text-rose" aria-hidden="true" />
                    <h3 className="mt-5 text-[1.12rem] font-extrabold text-charcoal">
                      {area.title}
                    </h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="container-shell grid gap-7 lg:grid-cols-2 lg:items-center">
            <div className="relative min-h-[360px] overflow-hidden rounded-[12px] shadow-soft">
              <Image
                src="/images/velobarre/studio-lounge.webp"
                alt="우아필라테스 이야기 이미지 교체 영역"
                width={1672}
                height={941}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:pl-8">
              <p className="eyebrow">WOOA PILATES</p>
              <h2 className="display-title mt-3 text-[2rem] leading-tight text-rose md:text-[2.7rem]">
                우아필라테스에서
                <br />
                여성의 몸을 이해했습니다
              </h2>
              <p className="mt-6 text-[1rem] leading-[1.85] text-muted-text">
                최우린 지부장은 우아필라테스 브랜드를 만들고 운영하며 여성 고객의
                몸과 생활을 세심하게 이해하고, 꾸준히 관리할 수 있는 운동 경험을
                설계해왔습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-shell grid gap-7 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="eyebrow">EXPANSION</p>
              <h2 className="display-title mt-3 text-[2rem] leading-tight text-rose md:text-[2.7rem]">
                그 경험을 바탕으로,
                <br />
                새로운 움직임을 만듭니다
              </h2>
              <p className="mt-6 text-[1rem] leading-[1.85] text-muted-text">
                우아필라테스에서 쌓은 여성 운동 브랜드 운영 경험을 바탕으로
                필라테스의 섬세함과 바레의 에너지를 결합한 전문 바레 브랜드
                벨로바레를 설계합니다.
              </p>
              <p className="mt-7 rounded-[12px] border border-line bg-blush/60 p-5 display-title text-[1.35rem] leading-relaxed text-rose md:text-[1.55rem]">
                우아필라테스에서 여성의 몸을 이해했고,
                <br />
                벨로바레에서 여성의 움직임을 확장합니다.
              </p>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[12px] shadow-soft">
              <Image
                src="/images/velobarre/studio-main.webp"
                alt="벨로바레로 확장되는 부티크 바레 공간"
                width={1672}
                height={941}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover object-[58%_center]"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="container-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">PHILOSOPHY</p>
              <h2 className="display-title mt-3 text-[2rem] leading-tight text-rose md:text-[2.7rem]">
                브랜드 철학
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {philosophies.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[12px] border border-line bg-ivory p-7 shadow-soft"
                >
                  <h3 className="display-title text-[2rem] text-rose">{item.title}</h3>
                  <p className="mt-4 text-[1rem] leading-[1.75] text-muted-text">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section-pad bg-charcoal text-white">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow text-blush">EDUCATION & COLLABORATION</p>
              <h2 className="display-title mt-4 text-[2.1rem] leading-tight md:text-[2.9rem] lg:text-[3.5rem]">
                좋은 수업을
                <br />
                한 사람의 능력에만 맡기지 않습니다
              </h2>
              <p className="mt-6 max-w-xl text-[1rem] leading-[1.8] text-white/72">
                현재 확정된 준비 범위 안에서 프로그램, 교육 콘텐츠, 브랜드 협업을
                차분하게 설계하고 있습니다.
              </p>
            </div>
            <div className="rounded-[12px] border border-white/12 bg-white/[0.06] p-5 md:p-7">
              <div className="grid gap-3">
                {educationItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/12 bg-white/[0.06] px-4 py-4 font-bold text-white/88"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <a href="/#trial" className="premium-button bg-rose text-white hover:bg-rose-dark">
                  강사교육 사전문의
                </a>
                <a
                  href="/#trial"
                  className="premium-button border border-white/22 bg-white/[0.08] text-white hover:bg-white/[0.14]"
                >
                  브랜드 협업 문의
                </a>
                <a
                  href="/#trial"
                  className="premium-button border border-white/22 bg-white text-rose hover:bg-blush"
                >
                  벨로바레 체험하기
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
