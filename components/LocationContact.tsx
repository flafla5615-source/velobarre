import { MapPin, MessageCircle, Phone } from "lucide-react";

export default function LocationContact() {
  return (
    <section id="location" className="bg-white py-16 md:py-24">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow">Location</p>
          <h2 className="display-title mt-3 text-[2.4rem] leading-tight md:text-[3.25rem]">
            오시는 길
          </h2>
          <div className="mt-8 rounded-[8px] border border-line bg-ivory p-6 shadow-soft">
            <h3 className="display-title text-3xl text-charcoal">VELOBARRE</h3>
            <p className="font-bold text-rose-dark">벨로바레</p>
            <dl className="mt-6 grid gap-4 text-sm leading-7 text-muted-text">
              <div>
                <dt className="font-extrabold text-charcoal">주소</dt>
                <dd>추후 입력</dd>
              </div>
              <div>
                <dt className="font-extrabold text-charcoal">전화</dt>
                <dd>추후 입력</dd>
              </div>
              <div>
                <dt className="font-extrabold text-charcoal">운영시간</dt>
                <dd>평일 07:00 - 22:00 / 주말 09:00 - 18:00</dd>
              </div>
              <div>
                <dt className="font-extrabold text-charcoal">주차</dt>
                <dd>건물 내 주차 가능</dd>
              </div>
            </dl>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <a
                href="#"
                aria-label="지도 보기"
                className="premium-button border border-line bg-white text-charcoal hover:border-rose hover:text-rose-dark"
              >
                <MapPin size={17} /> 지도 보기
              </a>
              <a
                href="tel:"
                aria-label="전화 문의"
                className="premium-button border border-line bg-white text-charcoal hover:border-rose hover:text-rose-dark"
              >
                <Phone size={17} /> 전화 문의
              </a>
              <a
                href="#trial"
                aria-label="카카오톡 문의"
                className="premium-button bg-[#F8D84A] text-charcoal hover:bg-[#f3cc24]"
              >
                <MessageCircle size={17} /> 카카오톡
              </a>
            </div>
          </div>
        </div>

        <div className="mock-studio relative min-h-[420px] rounded-[8px] border border-line shadow-soft">
          <div className="relative z-10 flex h-full min-h-[420px] flex-col justify-between p-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-md bg-white/84 px-4 py-3 font-extrabold text-rose-dark shadow-soft">
              <MapPin size={18} />
              VELOBARRE Map
            </div>
            <div className="rounded-[8px] bg-white/78 p-5 shadow-soft">
              <p className="text-sm font-bold text-muted-text">방문 예약 및 상담</p>
              <p className="mt-2 text-xl font-extrabold text-charcoal">
                무료체험 신청 후 담당자가 가장 편한 시간으로 안내드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
