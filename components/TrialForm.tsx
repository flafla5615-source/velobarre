"use client";

import { ArrowRight, Check, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const perks = [
  "전문 강사진의 1:1 컨설팅",
  "체형 분석 & 맞춤 프로그램 안내",
  "체험 후 등록 시 특별 혜택"
];

export default function TrialForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log("VELOBARRE trial request", Object.fromEntries(formData.entries()));
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="trial" className="section-pad bg-charcoal text-white">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow text-blush">Trial Class</p>
          <h2 className="display-title mt-4 text-[2.6rem] leading-tight md:text-[3.7rem]">
            지금, 당신의 변화를
            <br />
            경험해보세요
          </h2>
          <p className="mt-6 max-w-lg leading-8 text-white/72">
            단 1회의 체험으로도 벨로바레의 차이를 느끼실 수 있습니다. 지금,
            벨로바레의 50분을 경험해보세요.
          </p>

          <div className="mt-8 grid gap-3">
            {perks.map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-3 rounded-md border border-white/12 bg-white/[0.06] px-4 py-4"
              >
                <Check size={19} className="text-blush" aria-hidden="true" />
                <span className="font-bold text-white/90">{perk}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[8px] border border-white/12 bg-white p-5 text-charcoal shadow-lift md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-extrabold" htmlFor="name">
              이름
              <input
                id="name"
                name="name"
                required
                className="min-h-12 rounded-md border border-line bg-ivory px-4 outline-none transition focus:border-rose"
                placeholder="홍길동"
              />
            </label>
            <label className="grid gap-2 text-sm font-extrabold" htmlFor="phone">
              연락처
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="min-h-12 rounded-md border border-line bg-ivory px-4 outline-none transition focus:border-rose"
                placeholder="010-0000-0000"
              />
            </label>
            <label className="grid gap-2 text-sm font-extrabold" htmlFor="date">
              방문 희망 날짜
              <input
                id="date"
                name="date"
                type="date"
                className="min-h-12 rounded-md border border-line bg-ivory px-4 outline-none transition focus:border-rose"
              />
            </label>
            <label className="grid gap-2 text-sm font-extrabold" htmlFor="program">
              관심 프로그램 선택
              <select
                id="program"
                name="program"
                className="min-h-12 rounded-md border border-line bg-ivory px-4 outline-none transition focus:border-rose"
              >
                <option>Barre + Cycling</option>
                <option>Barre Focus</option>
                <option>Cycling Focus</option>
                <option>상담 후 추천</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-extrabold md:col-span-2" htmlFor="message">
              문의사항
              <textarea
                id="message"
                name="message"
                rows={5}
                className="rounded-md border border-line bg-ivory px-4 py-3 outline-none transition focus:border-rose"
                placeholder="체험 가능 시간, 운동 목표 등을 남겨주세요."
              />
            </label>
          </div>

          {submitted && (
            <p className="mt-5 rounded-md bg-blush px-4 py-3 text-sm font-bold text-rose-dark">
              신청이 완료되었습니다. 담당자가 곧 연락드릴 예정입니다.
            </p>
          )}

          <button
            type="submit"
            aria-label="무료체험 신청하기"
            className="premium-button mt-6 w-full bg-rose text-white shadow-lift hover:bg-rose-dark"
          >
            무료체험 신청하기 <Send size={18} />
          </button>
          <a
            href="#location"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-line px-5 py-4 font-extrabold text-rose-dark transition hover:border-rose"
          >
            나에게 맞는 루틴 상담받기 <ArrowRight size={18} />
          </a>
        </form>
      </div>
    </section>
  );
}
