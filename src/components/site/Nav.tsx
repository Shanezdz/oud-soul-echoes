import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#univers", label: "Univers" },
  { href: "#oud", label: "Le Oud" },
  { href: "#parcours", label: "Parcours" },
  { href: "#scene", label: "Scène" },
  { href: "#residences", label: "Résidences" },
  
  { href: "#ecouter", label: "Écouter" },
  
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" aria-label="Accueil" className="h-6 w-6" />


        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-thread text-[0.78rem] uppercase tracking-[0.2em] text-muted-foreground transition hover:text-ivory"
            >
              {l.label}
            </a>
          ))}
        </nav>


        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ivory"
        >
          <span className="block h-px w-7 bg-current mb-1.5" />
          <span className="block h-px w-7 bg-current mb-1.5" />
          <span className="block h-px w-5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-ivory"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
