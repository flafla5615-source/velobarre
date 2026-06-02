const gallery = [
  "Barre Zone",
  "Cycling Zone",
  "Lounge",
  "Shower Room",
  "Locker Room",
  "상담 공간"
];

export default function StudioGallery() {
  return (
    <section id="studio" className="bg-white py-16 md:py-24">
      <div className="container-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Studio</p>
            <h2 className="display-title mt-3 text-[2.4rem] leading-tight md:text-[3.25rem]">
              프라이빗하고 감각적인
              <br />
              프리미엄 스튜디오
            </h2>
          </div>
          <p className="max-w-xl leading-8 text-muted-text">
            밝은 우드톤, 은은한 조명, 아치형 미러가 만드는 몰입의 공간에서 처음부터
            끝까지 관리받는 프리미엄 그룹 수업을 경험하세요.
          </p>
        </div>

        <div className="mt-10 grid auto-rows-[210px] gap-4 md:grid-cols-6">
          {gallery.map((item, index) => (
            <article
              key={item}
              className={`mock-studio group relative rounded-[8px] border border-line p-5 shadow-soft ${
                index === 0 || index === 1 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <div className="relative z-10 flex h-full flex-col justify-end">
                <p className="text-sm font-bold uppercase text-rose-dark">0{index + 1}</p>
                <h3 className="display-title mt-1 text-3xl text-charcoal">{item}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
