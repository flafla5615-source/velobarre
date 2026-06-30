import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Dumbbell,
  GraduationCap,
  Layers3,
  MapPin,
  MessageCircle,
  Sparkles,
  UsersRound
} from "lucide-react";

export const metadata: Metadata = {
  title: "진주 극동 통합 브랜드 허브 | RETURNCOMPANY",
  description:
    "볼드짐, 벨로바레, 우아필라테스가 하나의 공간에서 만나는 진주 극동 통합 브랜드 허브 페이지입니다.",
  openGraph: {
    title: "진주 극동, 운동의 새로운 기준",
    description: "하이록스부터 바레, 필라테스까지 각 분야의 전문 브랜드가 하나의 공간에서 만납니다."
  }
};

const brands = [
  {
    id: "bold-gym",
    name: "BOLD GYM",
    category: "PERFORMANCE & HYROX",
    body: "힘과 체력, 기록을 만드는 퍼포먼스 트레이닝",
    href: "#bold-gym",
    src: "/images/velobarre/cycling-class.webp",
    alt: "볼드짐 퍼포먼스 트레이닝 이미지 교체 영역",
    tone: "from-[#111111]/78 to-[#641f17]/34",
    accent: "text-[#f0c36a]"
  },
  {
    id: "velo-barre",
    name: "VELO BARRE",
    category: "BARRE & MOVEMENT",
    body: "우아한 움직임과 단단한 힘을 만드는 바레",
    href: "/",
    src: "/images/velobarre/hero-main.webp",
    alt: "벨로바레 바레와 움직임 브랜드 이미지",
    tone: "from-[#40191B]/70 to-[#651C26]/24",
    accent: "text-[#f3d8d3]"
  },
  {
    id: "wooa-pilates",
    name: "WOOA PILATES",
    category: "PILATES & CARE",
    body: "여성의 몸과 일상을 세심하게 관리하는 필라테스",
    href: "/wooa",
    src: "/images/velobarre/studio-lounge.webp",
    alt: "우아필라테스 진주 론칭 프리미엄 필라테스 이미지",
    tone: "from-[#4a2033]/72 to-[#8b6a4e]/24",
    accent: "text-[#f0ddc4]"
  }
];

const strengths = [
  { icon: Layers3, title: "종목별 전문 브랜드" },
  { icon: UsersRound, title: "전문 강사진" },
  { icon: BadgeCheck, title: "체계적인 프로그램" },
  { icon: Sparkles, title: "감도 높은 공간" },
  { icon: MessageCircle, title: "목적별 상담과 관리" },
  { icon: Dumbbell, title: "리턴컴퍼니의 14년 운영 경험" }
];

function HubHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#171313]/88 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] w-[min(1180px,calc(100%-40px))] items-center justify-between">
        <a href="/geukdong" aria-label="진주 극동 통합 브랜드 허브" className="leading-none">
          <span className="display-title block text-[1.38rem] uppercase md:text-[1.65rem]">
            GEUKDONG HUB
          </span>
          <span className="block text-[0.68rem] font-extrabold text-white/58">RETURNCOMPANY</span>
        </a>
        <nav aria-label="극동 허브 메뉴" className="hidden items-center gap-7 md:flex">
          <a href="#brands" className="text-sm font-extrabold text-white/78 hover:text-white">
            브랜드
          </a>
          <a href="#strengths" className="text-sm font-extrabold text-white/78 hover:text-white">
            공통 강점
          </a>
          <a href="/wooa" className="text-sm font-extrabold text-white/78 hover:text-white">
            우아필라테스
          </a>
          <a href="/" className="text-sm font-extrabold text-white/78 hover:text-white">
            벨로바레
          </a>
        </nav>
        <a
          href="#opening"
          className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-4 text-sm font-extrabold text-[#171313] transition hover:-translate-y-0.5 hover:bg-[#f2e9dc] md:min-h-[48px] md:px-5"
        >
          <span className="md:hidden">오픈소식</span>
          <span className="hidden md:inline">오픈 소식 받기</span>
        </a>
      </div>
    </header>
  );
}

export default function GeukdongPage() {
  return (
    <>
      <HubHeader />
      <main className="bg-[#171313] text-white">
        <section className="relative overflow-hidden pt-[86px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(101,28,38,0.46),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(139,106,78,0.38),transparent_32%)]" />
          <div className="relative mx-auto grid w-[min(1180px,calc(100%-40px))] gap-7 py-8 lg:min-h-[720px] lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:py-10">
            <div className="flex flex-col justify-center rounded-[12px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur md:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d7bd8d]">
                JINJU GEUKDONG FITNESS DESTINATION
              </p>
              <h1 className="display-title mt-5 text-[2.35rem] leading-[1.1] sm:text-[2.8rem] md:text-[3.55rem] lg:text-[4.45rem]">
                진주 극동,
                <br />
                운동의 새로운 기준이 시작됩니다.
              </h1>
              <p className="mt-6 max-w-xl text-[1rem] leading-[1.85] text-white/74 md:text-lg">
                하이록스부터 바레, 필라테스까지 각 분야의 전문 브랜드가 하나의
                공간에서 만납니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#brands" className="premium-button bg-white text-[#171313] hover:bg-[#f2e9dc]">
                  브랜드 둘러보기 <ArrowRight size={18} />
                </a>
                <a
                  href="#opening"
                  className="premium-button border border-white/22 bg-white/[0.06] text-white hover:bg-white/[0.12]"
                >
                  오픈 소식 받기
                </a>
              </div>
            </div>
            <div className="grid gap-4">
              {brands.map((brand) => (
                <a
                  id={brand.id}
                  key={brand.name}
                  href={brand.href}
                  className="group relative min-h-[190px] overflow-hidden rounded-[12px] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
                >
                  <Image
                    src={brand.src}
                    alt={brand.alt}
                    width={1672}
                    height={941}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${brand.tone}`} />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className={`text-xs font-black uppercase tracking-[0.16em] ${brand.accent}`}>
                      {brand.category}
                    </p>
                    <h2 className="display-title mt-2 text-[2rem] leading-none">{brand.name}</h2>
                    <p className="mt-3 max-w-md text-[0.98rem] font-bold leading-[1.6] text-white/82">
                      {brand.body}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="brands" className="bg-[#f8f2e8] py-20 text-[#262322] md:py-28">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b6a4e]">THREE BRANDS</p>
              <h2 className="display-title mt-4 text-[2.1rem] leading-tight text-[#40191B] md:text-[3rem]">
                진주에서 일부러 찾아오고 싶은
                <br />
                새로운 운동 목적지
              </h2>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {brands.map((brand) => (
                <article
                  key={brand.name}
                  className="overflow-hidden rounded-[12px] border border-[#dfcfbd] bg-white shadow-[0_16px_42px_rgba(64,25,27,0.08)]"
                >
                  <div className="relative h-[260px]">
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={1672}
                      height={941}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="h-full w-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${brand.tone}`} />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8b6a4e]">
                      {brand.category}
                    </p>
                    <h3 className="display-title mt-3 text-[2rem] text-[#40191B]">{brand.name}</h3>
                    <p className="mt-3 min-h-[56px] text-[1rem] font-bold leading-[1.7] text-[#5D5550]">
                      {brand.body}
                    </p>
                    <a
                      href={brand.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#651C26] hover:text-[#40191B]"
                    >
                      브랜드 보기 <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="strengths" className="py-20 md:py-28">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d7bd8d]">ONE PLACE</p>
                <h2 className="display-title mt-4 text-[2.15rem] leading-tight md:text-[3.2rem]">
                  한 공간,
                  <br />
                  세 가지 전문성
                </h2>
                <p className="mt-5 text-[1rem] leading-[1.82] text-white/68">
                  하나의 이름으로 섞지 않고, 각 종목이 가진 전문성을 분명히 살리는
                  통합 운동 허브를 준비합니다.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {strengths.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="rounded-[12px] border border-white/10 bg-white/[0.06] p-6"
                    >
                      <Icon size={28} className="text-[#d7bd8d]" aria-hidden="true" />
                      <h3 className="mt-5 text-[1.08rem] font-extrabold text-white">{item.title}</h3>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#211718] py-20 md:py-28">
          <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-7 overflow-hidden rounded-[12px] border border-white/10 bg-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.24)] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[360px]">
              <Image
                src="/images/velobarre/review-member-01.webp"
                alt="최우린 지부장 사진 교체 영역"
                width={1456}
                height={1088}
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="h-full w-full object-cover object-[52%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171313]/42 via-transparent to-transparent" />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d7bd8d]">
                BRANCH DIRECTOR
              </p>
              <h2 className="display-title mt-4 text-[2.1rem] leading-tight md:text-[3rem]">
                브랜드를 만들고,
                <br />
                수업의 기준까지 설계합니다
              </h2>
              <p className="mt-6 text-[1rem] leading-[1.85] text-white/74">
                우아필라테스를 만들고 운영해온 최우린 지부장은 여성의 몸과 움직임에
                대한 경험을 바탕으로 벨로바레의 공간과 프로그램, 강사교육의 기준을
                설계합니다.
              </p>
              <a
                href="/woorin"
                className="premium-button mt-8 w-full bg-white text-[#171313] hover:bg-[#f2e9dc] sm:w-fit"
              >
                최우린 지부장 이야기 <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="opening" className="bg-[#f8f2e8] py-20 text-[#262322] md:py-28">
          <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-7 rounded-[12px] border border-[#dfcfbd] bg-white p-6 shadow-[0_18px_46px_rgba(64,25,27,0.1)] md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b6a4e]">GEUKDONG OPENING</p>
              <h2 className="display-title mt-4 text-[2.15rem] leading-tight text-[#40191B] md:text-[3rem]">
                운동하러 오는 곳을 넘어,
                <br />
                다시 찾고 싶은 목적지를 만듭니다.
              </h2>
              <p className="mt-5 flex items-center gap-2 text-[0.98rem] font-bold text-[#5D5550]">
                <MapPin size={18} aria-hidden="true" />
                진주 극동 통합 브랜드 허브
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[560px]">
              <a href="/#trial" className="premium-button bg-[#651C26] text-white hover:bg-[#40191B]">
                오픈 소식 받기
              </a>
              <a
                href="/#trial"
                className="premium-button border border-[#651C26] bg-white text-[#651C26] hover:bg-[#f3e8df]"
              >
                회원 상담
              </a>
              <button
                type="button"
                disabled
                aria-label="강사 지원 페이지 준비 중"
                className="premium-button cursor-not-allowed border border-[#dfcfbd] bg-[#f8f2e8] text-[#8b8178]"
              >
                <GraduationCap size={18} />
                강사 지원
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
