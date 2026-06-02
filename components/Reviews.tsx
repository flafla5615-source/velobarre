const reviews = [
  {
    quote:
      "바레와 사이클 조합이 처음엔 생소했는데, 지금은 제 루틴의 중심이 되었어요. 자세도 좋아지고 체력도 많이 늘었어요.",
    name: "김지현",
    meta: "30대 · 회사원"
  },
  {
    quote:
      "선생님들의 섬세한 큐잉과 맞춤 관리 덕분에 운동이 더 즐겁고 효과가 확실해요. 무엇보다 분위기가 정말 좋아요.",
    name: "이수연",
    meta: "20대 · 디자이너"
  },
  {
    quote:
      "출산 후 체형 회복 때문에 고민이 많았는데, 벨로바레 루틴으로 건강하게 감량했어요. 자신감까지 되찾았습니다.",
    name: "박소영",
    meta: "40대 · 주부"
  }
];

export default function Reviews() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Real Review</p>
          <h2 className="display-title mt-3 text-[2.4rem] leading-tight md:text-[3.25rem]">
            벨로바레 회원님들의 진짜 후기
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="glass-card rounded-[8px] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <p className="text-lg font-black text-rose">★★★★★</p>
              <p className="mt-6 min-h-[140px] text-[1.02rem] leading-8 text-charcoal">
                {review.quote}
              </p>
              <div className="mt-7 border-t border-line pt-5">
                <p className="font-extrabold text-charcoal">{review.name}</p>
                <p className="mt-1 text-sm text-muted-text">{review.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
