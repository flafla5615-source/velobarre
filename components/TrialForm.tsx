"use client";

import Image from "next/image";
import { ArrowRight, Check, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const perks = [
  "처음이신 분도 부담 없이 시작",
  "운동 목적에 맞춘 수업 안내",
  "체험 후 상담을 통한 루틴 추천"
];

export default function TrialForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("VELO BARRE trial request", Object.fromEntries(formData.entries()));
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="trial" className="section-pad bg-charcoal text-white">
      <div className="container-shell">
        <div className="mb-8 grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="eyebrow text-blush">TRIAL</p>
            <h2 className="display-title mt-4 text-[2.1rem] leading-tight md:text-[2.9rem] lg:text-[3.7rem]">
              처음이라도
              <br />
              괜찮습니다
            </h2>
          </div>
          <p className="max-w-2xl text-[1rem] leading-[1.75] text-white/76 lg:justify-self-end">
            벨로바레는 누구나 자신의 속도로 우아하게 시작할 수 있는 공간입니다.
            지금, 나를 위한 첫 움직임을 시작해보세요.
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="grid gap-5">
            <div className="relative h-[220px] overflow-hidden rounded-[12px] shadow-[0_18px_46px_rgba(0,0,0,0.22)] md:h-[520px]">
              <Image
                src="/images/velobarre/trial-cta.webp"
                alt="벨로바레 첫 체험 예약을 안내하는 이미지"
                width={1672}
                height={941}
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="h-full w-full object-cover object-[52%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-bold text-blush">First Trial</p>
                <p className="mt-2 text-2xl font-extrabold leading-tight md:text-3xl">
                  우아하게 시작하는
                  <br />
                  첫 바레 수업
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {perks.map((perk) => (
                <div
                  key={perk}
                  className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.06] px-4 py-4"
                >
                  <Check size={19} className="text-blush" aria-hidden="true" />
                  <span className="font-bold text-white/90">{perk}</span>
                </div>
              ))}
            </div>
          </div>

          <form
            id="trial-form"
            onSubmit={handleSubmit}
            className="rounded-[12px] border border-white/12 bg-white p-5 text-charcoal shadow-lift md:p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-[0.95rem] font-extrabold" htmlFor="name">
                이름
                <input
                  id="name"
                  name="name"
                  required
                  className="min-h-[54px] rounded-lg border border-line bg-ivory px-4 text-base outline-none transition focus:border-rose"
                  placeholder="홍길동"
                />
              </label>
              <label className="grid gap-2 text-[0.95rem] font-extrabold" htmlFor="phone">
                연락처
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="min-h-[54px] rounded-lg border border-line bg-ivory px-4 text-base outline-none transition focus:border-rose"
                  placeholder="010-0000-0000"
                />
              </label>
              <label className="grid gap-2 text-[0.95rem] font-extrabold" htmlFor="time">
                희망 시간대
                <select
                  id="time"
                  name="time"
                  className="min-h-[54px] rounded-lg border border-line bg-ivory px-4 text-base outline-none transition focus:border-rose"
                >
                  <option>상담 후 조율</option>
                  <option>평일 오전</option>
                  <option>평일 오후</option>
                  <option>평일 저녁</option>
                  <option>주말</option>
                </select>
              </label>
              <label className="grid gap-2 text-[0.95rem] font-extrabold" htmlFor="classType">
                관심 프로그램
                <select
                  id="classType"
                  name="classType"
                  className="min-h-[54px] rounded-lg border border-line bg-ivory px-4 text-base outline-none transition focus:border-rose"
                >
                  <option>상담 후 맞춤 추천</option>
                  <option>BEGIN</option>
                  <option>SIGNATURE</option>
                  <option>SCULPT</option>
                  <option>FLOW</option>
                </select>
              </label>
              <label className="grid gap-2 text-[0.95rem] font-extrabold md:col-span-2" htmlFor="message">
                문의사항
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="rounded-lg border border-line bg-ivory px-4 py-3 text-base outline-none transition focus:border-rose"
                  placeholder="운동 목표나 문의 내용을 남겨주세요."
                />
              </label>
            </div>

            {submitted && (
              <p className="mt-5 rounded-lg bg-blush px-4 py-3 text-sm font-bold text-rose-dark">
                신청이 완료되었습니다. 담당자가 곧 연락드릴 예정입니다.
              </p>
            )}

            <button
              type="submit"
              aria-label="첫 체험 예약"
              className="premium-button mt-6 w-full bg-rose text-white shadow-lift hover:bg-rose-dark"
            >
              첫 체험 예약 <Send size={18} />
            </button>
            <a
              href="#message"
              className="mt-3 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-lg border border-line px-5 py-3 font-extrabold text-rose-dark transition hover:border-rose"
            >
              문의하기 <ArrowRight size={18} />
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
