"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Program", href: "#program" },
  { label: "Studio", href: "#studio" },
  { label: "Benefit", href: "#benefit" },
  { label: "Trial", href: "#trial" },
  { label: "Location", href: "#location" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-pearl/92 shadow-soft backdrop-blur-xl" : "bg-pearl/72 backdrop-blur-lg"
      }`}
    >
      <div className="container-shell flex h-[76px] items-center justify-between">
        <a href="#hero" aria-label="VELOBARRE home" className="leading-none">
          <span className="display-title block text-[1.72rem] uppercase text-charcoal">
            VELOBARRE
          </span>
          <span className="block text-center text-[0.68rem] font-bold text-rose-dark">벨로바레</span>
        </a>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-9 md:flex">
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
          href="#trial"
          className="premium-button hidden bg-rose text-sm text-white shadow-lift hover:bg-rose-dark md:inline-flex"
        >
          무료체험 신청
        </a>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-white text-charcoal md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-pearl/98 px-4 pb-5 pt-2 shadow-soft md:hidden">
          <nav aria-label="모바일 메뉴" className="container-shell grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-bold text-charcoal"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#trial"
              onClick={() => setOpen(false)}
              className="premium-button mt-2 bg-rose text-white shadow-lift"
            >
              무료체험 신청
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
