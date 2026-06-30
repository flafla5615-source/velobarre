import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BookOpenCheck,
  Eye,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";

export const metadata: Metadata = {
  title: "우아필라테스 진주 극동 | WOOA PILATES",
  description:
    "거제에서 쌓아온 브랜드 운영 경험과 회원 관리 노하우를 바탕으로 진주 극동에서 시작하는 프리미엄 필라테스 론칭 페이지입니다.",
  openGraph: {
    title: "우아필라테스 진주 극동",
    description: "거제에서 시작된 우아한 기준, 진주 극동으로 이어집니다."
  }
};

const philosophyItems = [
  {
    icon: MessageCircle,
    title: "세심한 상담",
    body: "운동을 시작하기 전 현재 몸 상태와 생활 패턴을 충분히 듣습니다."
  },
  {
    icon: Eye,
    title: "목적 파악",
    body: "통증 관리, 체형 변화, 체력 회복 등 개인의 목적을 먼저 정리합니다."
  },
  {
    icon: BookOpenCheck,
    title: "관찰과 피드백",
    body: "수업 중 움직임을 지속적으로 관찰하고 필요한 피드백을 제공합니다."
  },
  {
    icon: UsersRound,
    title: "소규모 집중 수업",
    body: "무리한 정원보다 섬세한 티칭이 가능한 수업 환경을 지향합니다."
  },
  {
    icon: ShieldCheck,
    title: "일관된 수업 품질",
    body: "강사와 프로그램 기준을 맞춰 안정적인 수업 경험을 준비합니다."
  }
];

const programs = [
  {
    name: "PRIVATE",
    body: "개인의 몸과 목적에 맞춘 1:1 수업"
  },
  {
    name: "DUET",
    body: "두 명이 함께하는 세심한 듀엣 수업"
  },
  {
    name: "SMALL GROUP",
    body: "소수 정원 그룹 수업"
  },
  {
    name: "BODY CARE",
    body: "움직임과 생활 습관을 함께 살피는 관리"
  }
];

function WooaHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#d8c5b3]/70 bg-[#fbf8f2]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] w-[min(1180px,calc(100%-40px))] items-center justify-between">
        <a href="/wooa" aria-label="우아필라테스 홈" className="leading-none">
          <span className="display-title block text-[1.45rem] uppercase text-[#4a2033] md:text-[1.7rem]">
            WOOA PILATES
          </span>
          <span className="block text-[0.68rem] font-extrabold text-[#8b6a4e]">JINJU GEUKDONG</span>
        </a>
        <nav aria-label="우아필라테스 메뉴" className="hidden items-center gap-7 md:flex">
          <a href="#philosophy" className="text-sm font-extrabold text-[#342723] hover:text-[#4a2033]">
            철학
          </a>
          <a href="#program" className="text-sm font-extrabold text-[#342723] hover:text-[#4a2033]">
            프로그램
          </a>
          <a href="#director" className="text-sm font-extrabold text-[#342723] hover:text-[#4a2033]">
            디렉터
          </a>
          <a href="/geukdong" className="text-sm font-extrabold text-[#342723] hover:text-[#4a2033]">
            극동 허브
          </a>
        </nav>
        <a
          href="#consult"
          className="inline-flex min-h-[44px] items-center rounded-lg bg-[#4a2033] px-4 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#2d1719] md:min-h-[48px] md:px-5"
        >
          <span className="md:hidden">상담</span>
          <span className="hidden md:inline">진주점 사전상담</span>
        </a>
      </div>
    </header>
  );
}

export default function WooaPage() {
  return (
    <>
      <WooaHeader />
      <main className="bg-[#fbf8f2] text-[#342723]">
        <section className="relative overflow-hidden pt-[86px]">
          <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-7 py-8 lg:min-h-[700px] lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:py-10">
            <div className="flex flex-col justify-center rounded-[12px] border border-[#d8c5b3] bg-[#fffdf8] p-6 shadow-[0_18px_46px_rgba(74,32,51,0.08)] md:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b6a4e]">
                WOOA PILATES JINJU
              </p>
              <h1 className="display-title mt-5 text-[2.35rem] leading-[1.12] text-[#4a2033] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.35rem]">
                거제에서 시작된
                <br />
                우아한 기준,
                <br />
                진주 극동으로 이어집니다.
              </h1>
              <p className="mt-6 max-w-xl text-[1rem] leading-[1.85] text-[#66564a] md:text-lg">
                거제에서 쌓아온 브랜드 운영 경험과 회원 관리 노하우를 바탕으로 진주
                극동에서 더 깊고 섬세한 필라테스를 시작합니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#consult"
                  className="premium-button bg-[#4a2033] text-white hover:bg-[#2d1719]"
                >
                  진주점 사전상담 <ArrowRight size={18} />
                </a>
                <a
                  href="#story"
                  className="premium-button border border-[#9b7657] bg-white text-[#4a2033] hover:border-[#4a2033]"
                >
                  우아필라테스 이야기
                </a>
              </div>
            </div>
            <div className="relative min-h-[420px] overflow-hidden rounded-[12px] shadow-[0_24px_70px_rgba(74,32,51,0.13)] lg:min-h-full">
              <Image
                src="/images/velobarre/studio-lounge.webp"
                alt="우아필라테스 진주 극동 프리미엄 필라테스 공간 이미지"
                width={1672}
                height={941}
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241415]/36 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[12px] border border-white/22 bg-white/82 p-5 backdrop-blur">
                <p className="display-title text-[2rem] leading-none text-[#4a2033]">WOOA</p>
                <p className="mt-2 text-sm font-extrabold text-[#342723]">
                  깊이 있는 상담과 섬세한 움직임 관리
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="philosophy" className="py-20 md:py-28">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b6a4e]">PHILOSOPHY</p>
              <h2 className="display-title mt-4 text-[2.1rem] leading-tight text-[#4a2033] md:text-[3rem]">
                운동을 가르치기 전에,
                <br />
                회원의 몸과 일상을 먼저 이해합니다.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {philosophyItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[12px] border border-[#d8c5b3] bg-[#fffdf8] p-6 shadow-[0_14px_34px_rgba(74,32,51,0.07)]"
                  >
                    <Icon size={28} className="text-[#8b6a4e]" aria-hidden="true" />
                    <h3 className="mt-5 text-[1.08rem] font-extrabold text-[#342723]">{item.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-[1.72] text-[#66564a]">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="story" className="bg-[#2d1719] py-20 text-white md:py-28">
          <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative min-h-[360px] overflow-hidden rounded-[12px]">
              <Image
                src="/images/velobarre/studio-main.webp"
                alt="거제에서 진주로 이어지는 우아필라테스 운영 경험 이미지"
                width={1672}
                height={941}
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="h-full w-full object-cover object-[58%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/42 to-transparent" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d2b58e]">GEOJE TO JINJU</p>
              <h2 className="display-title mt-4 text-[2.1rem] leading-tight md:text-[3rem]">
                한 지역에서 쌓은 경험을,
                <br />
                새로운 지역에서도 같은 기준으로 이어갑니다.
              </h2>
              <p className="mt-6 text-[1rem] leading-[1.9] text-white/76">
                거제에서 실제로 브랜드를 운영하며 쌓아온 상담, 수업, 강사 관리,
                회원 관리 경험을 바탕으로 진주 극동에서도 차분하고 일관된 필라테스
                경험을 준비합니다.
              </p>
            </div>
          </div>
        </section>

        <section id="program" className="py-20 md:py-28">
          <div className="mx-auto w-[min(1180px,calc(100%-40px))]">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b6a4e]">PROGRAM</p>
              <h2 className="display-title mt-4 text-[2.1rem] leading-tight text-[#4a2033] md:text-[3rem]">
                목적과 몸 상태에 맞춘 수업
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {programs.map((program) => (
                <article
                  key={program.name}
                  className="rounded-[12px] border border-[#d8c5b3] bg-[#fffdf8] p-7 shadow-[0_14px_34px_rgba(74,32,51,0.07)]"
                >
                  <h3 className="display-title text-[1.75rem] text-[#4a2033]">{program.name}</h3>
                  <p className="mt-5 text-[1rem] font-bold leading-[1.72] text-[#66564a]">{program.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="director" className="bg-[#fffdf8] py-20 md:py-28">
          <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] overflow-hidden rounded-[12px] border border-[#d8c5b3] shadow-[0_18px_46px_rgba(74,32,51,0.08)] lg:grid-cols-2">
            <div className="flex flex-col justify-center p-6 md:p-10 lg:p-14">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8b6a4e]">DIRECTOR</p>
              <h2 className="display-title mt-4 text-[2.1rem] leading-tight text-[#4a2033] md:text-[3rem]">
                우아필라테스를 만든 사람
              </h2>
              <p className="mt-6 text-[1rem] leading-[1.85] text-[#66564a]">
                최우린 디렉터는 여성 회원의 몸과 생활을 이해하는 것에서
                우아필라테스의 브랜드와 수업 경험을 설계했습니다.
              </p>
              <a
                href="/director"
                className="premium-button mt-8 w-full bg-[#4a2033] text-white hover:bg-[#2d1719] sm:w-fit"
              >
                최우린 디렉터 이야기 <ArrowRight size={18} />
              </a>
            </div>
            <div className="relative min-h-[360px]">
              <Image
                src="/images/velobarre/review-member-01.webp"
                alt="최우린 디렉터 사진 교체 영역"
                width={1456}
                height={1088}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover object-[52%_center]"
              />
            </div>
          </div>
        </section>

        <section id="consult" className="py-20 md:py-28">
          <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-6 rounded-[12px] border border-[#d8c5b3] bg-[#4a2033] p-6 text-white shadow-[0_18px_46px_rgba(74,32,51,0.18)] md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d2b58e]">OPENING CTA</p>
              <h2 className="display-title mt-4 text-[2.15rem] leading-tight md:text-[3rem]">
                진주 우아필라테스의 시작을 함께하세요.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[430px]">
              <a href="/#trial" className="premium-button bg-white text-[#4a2033] hover:bg-[#f3eadf]">
                사전상담 신청
              </a>
              <a
                href="/#trial"
                className="premium-button border border-white/28 bg-white/[0.08] text-white hover:bg-white/[0.14]"
              >
                오픈 소식 받기
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
