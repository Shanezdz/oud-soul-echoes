import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";

export function Nav() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#univers", label: t("nav.univers") },
    { href: "#oud", label: t("nav.oud") },
    { href: "#parcours", label: t("nav.parcours") },
    { href: "#scene", label: t("nav.scene") },
    { href: "#residences", label: t("nav.residences") },
    { href: "#ecouter", label: t("nav.ecouter") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const langs: { code: Lang; label: string }[] = [
    { code: "fr", label: "FR" },
    { code: "en", label: "EN" },
    { code: "ar", label: "ع" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <div className="relative">
          <button
            onClick={() => setLangOpen((v) => !v)}
            onBlur={() => setTimeout(() => setLangOpen(false), 150)}
            className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground transition hover:border-copper hover:text-copper"
            aria-label="Language"
          >
            <Globe size={14} />
            <span>{langs.find((l) => l.code === lang)?.label}</span>
          </button>
          {langOpen && (
            <ul className="absolute left-0 top-full mt-2 min-w-[6rem] overflow-hidden rounded-md border border-border bg-background/95 backdrop-blur-xl shadow-lg">
              {langs.map((l) => (
                <li key={l.code}>
                  <button
                    onMouseDown={(e) => {
                      e.preventDefault();
                      setLang(l.code);
                      setLangOpen(false);
                    }}
                    className={`block w-full px-4 py-2 text-left text-xs uppercase tracking-[0.2em] transition ${
                      lang === l.code ? "text-copper" : "text-muted-foreground hover:text-ivory"
                    }`}
                  >
                    {l.code === "fr" ? "Français" : l.code === "en" ? "English" : "العربية"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

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
