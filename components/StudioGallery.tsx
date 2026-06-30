import Image from "next/image";

const studioImages = [
  {
    src: "/images/velobarre/studio-main.webp",
    title: "쾌적한 스튜디오",
    description: "넓고 정돈된 공간에서 수업에 집중할 수 있습니다.",
    alt: "벨로바레의 넓고 정돈된 부티크 바레 스튜디오",
    className: "lg:col-span-7 lg:row-span-2",
    imageClass: "object-[58%_center]"
  },
  {
    src: "/images/velobarre/studio-lounge.webp",
    title: "감각적인 인테리어",
    description: "벨로바레의 우아한 분위기를 담은 부티크 공간입니다.",
    alt: "벨로바레의 감각적인 라운지와 인테리어",
    className: "",
    imageClass: "object-center"
  },
  {
    src: "/images/velobarre/locker-powder.webp",
    title: "프라이빗한 분위기",
    description: "소규모 수업을 통해 더욱 세심한 티칭을 제공합니다.",
    alt: "벨로바레의 프라이빗한 편의 공간",
    className: "",
    imageClass: "object-center"
  }
];

export default function StudioGallery() {
  return (
    <section id="studio" className="bg-white py-20 md:py-28">
      <div className="container-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">SPACE</p>
            <h2 className="display-title mt-3 text-[2rem] leading-tight text-rose md:text-[2.7rem] lg:text-[3.25rem]">
              공간 소개
            </h2>
          </div>
          <p className="max-w-xl text-[1rem] leading-[1.75] text-muted-text">
            밝은 우드톤, 정돈된 동선, 조용한 집중감이 함께하는 여성 전문 부티크
            스튜디오입니다.
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:auto-rows-[250px] lg:grid-cols-12">
          {studioImages.map((item, index) => (
            <article
              key={item.title}
              className={`group relative min-h-[280px] overflow-hidden rounded-[12px] shadow-soft ${
                index === 0 ? "lg:min-h-0" : "lg:col-span-5"
              } ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1672}
                height={941}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${item.imageClass}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/46 via-black/8 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-6">
                <p className="text-sm font-bold uppercase text-blush">{item.title}</p>
                <h3 className="mt-2 text-[1.15rem] font-extrabold leading-snug md:text-xl">
                  {item.description}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
