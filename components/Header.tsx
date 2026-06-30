"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "벨로바레", href: "/#hero" },
  { label: "프로그램", href: "/#program" },
  { label: "공간", href: "/#studio" },
  { label: "최우린 디렉터", href: "/director" },
  { label: "강사교육", href: "/director#education" },
  { label: "문의", href: "/#trial" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-pearl/94 shadow-soft backdrop-blur-xl" : "bg-pearl/78 backdrop-blur-lg"
      }`}
    >
      <div className="container-shell flex h-[66px] items-center justify-between md:h-[76px]">
        <a href="/#hero" aria-label="VELO BARRE home" className="leading-none">
          <span className="display-title block text-[1.45rem] uppercase text-rose md:text-[1.72rem]">
            VELO BARRE
          </span>
          <span className="block text-center text-[0.62rem] font-bold text-rose-dark md:text-[0.68rem]">
            벨로바레
          </span>
        </a>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-charcoal transition hover:text-rose-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="/#trial"
          className="hidden min-h-[52px] items-center justify-center rounded-lg bg-rose px-6 text-sm font-extrabold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-rose-dark md:inline-flex"
        >
          체험예약
        </a>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white text-charcoal shadow-soft md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-pearl/98 px-4 pb-5 pt-2 shadow-soft md:hidden">
          <nav aria-label="모바일 메뉴" className="container-shell grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-extrabold text-charcoal active:bg-blush/50"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#trial"
              onClick={() => setOpen(false)}
              className="premium-button mt-2 bg-rose text-white shadow-lift"
            >
              체험예약
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
