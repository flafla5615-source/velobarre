"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "운동을 처음 해도 가능한가요?",
    answer: "네. 초보자도 따라올 수 있도록 강도 조절이 가능합니다."
  },
  {
    question: "바레와 사이클을 모두 하나요?",
    answer: "프로그램에 따라 바레, 사이클, 스트레칭이 조합됩니다."
  },
  {
    question: "체험 수업은 어떻게 신청하나요?",
    answer: "무료체험 신청 버튼을 통해 간단히 신청할 수 있습니다."
  },
  {
    question: "준비물이 필요한가요?",
    answer: "편한 운동복과 개인 물병만 준비하시면 됩니다."
  },
  {
    question: "주차가 가능한가요?",
    answer: "매장별 안내에 따라 주차 지원이 가능합니다."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="display-title mt-3 text-[2.4rem] leading-tight md:text-[3.25rem]">
            자주 묻는 질문
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[8px] border border-line bg-white shadow-soft">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="border-b border-line last:border-b-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-extrabold text-charcoal md:px-7"
                >
                  <span>Q. {faq.question}</span>
                  <ChevronDown
                    size={21}
                    className={`shrink-0 text-rose-dark transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 text-muted-text md:px-7">
                    <p>A. {faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
