import { useState, useRef } from "react";
import { Nav } from "@/components/site/Nav";
import { useI18n } from "@/lib/i18n";

import heroOud from "@/assets/hero-oud.jpg";
import portrait from "@/assets/sensabyl-portrait.jpg";
import oudHeadstock from "@/assets/oud-headstock.jpg";
import oudStrings from "@/assets/oud-strings.jpg";
import violin from "@/assets/violin.jpg";
import desert from "@/assets/desert-night.jpg";
import stage from "@/assets/stage.jpg";

export default function Home() {
  return (
    <div id="top" className="relative overflow-hidden bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Univers />
      <OudSection />
      <Parcours />
      <Scene />
      <Residences />
      <Ecouter />
      <Contact />
      <Footer />
    </div>
  );
}

function SectionTitle({ eyebrow, title, children, align = "left" }: { eyebrow?: string; title: string; children?: React.ReactNode; align?: "left" | "center" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-5 text-xl">{eyebrow}</p>}
      <h2 className="font-display text-4xl leading-[1.05] text-ivory text-balance md:text-6xl">{title}</h2>
      {children && <div className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">{children}</div>}
    </div>
  );
}

function Hero() {
  const { t, lang } = useI18n();
  const isAr = lang === "ar";
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <img src={heroOud} alt="Oud" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,transparent,oklch(0.12_0.02_265)_75%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper/15 blur-3xl animate-breath" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <p className="eyebrow mb-8 animate-rise">{t("hero.eyebrow")}</p>
        <h1 className="font-display text-[clamp(3.2rem,9vw,9rem)] leading-[0.9] text-ivory animate-rise">
          {isAr ? (
            <>سنسابيل<br /><span className="text-copper">بغدادي</span></>
          ) : (
            <>Sensabyl<br /><span className="italic text-copper">Beghdadi</span></>
          )}
        </h1>
        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl animate-rise" style={{ animationDelay: "0.2s" }}>
            <p className="font-display text-3xl italic text-amber-warm md:text-4xl">{t("hero.tagline")}</p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">{t("hero.intro")}</p>
          </div>
          <div className="flex flex-col gap-3 animate-rise sm:flex-row" style={{ animationDelay: "0.4s" }}>
            <a href="#about" className="rounded-full bg-copper px-7 py-3.5 text-center text-[0.74rem] uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-amber-warm">{t("hero.cta1")}</a>
            <a href="#ecouter" className="rounded-full border border-ivory/30 px-7 py-3.5 text-center text-[0.74rem] uppercase tracking-[0.25em] text-ivory transition hover:border-copper hover:text-copper">{t("hero.cta2")}</a>
            <a href="#contact" className="rounded-full px-7 py-3.5 text-center text-[0.74rem] uppercase tracking-[0.25em] text-muted-foreground transition hover:text-ivory">{t("hero.cta3")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={portrait} alt="Sensabyl Beghdadi" loading="lazy" width={800} height={1000} className="h-full w-full object-cover grayscale-[20%] transition duration-700 hover:grayscale-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <div className="absolute -bottom-3 -left-3 h-24 w-24 border-l border-b border-copper" />
            <div className="absolute -top-3 -right-3 h-24 w-24 border-r border-t border-copper" />
          </div>
        </div>
        <div className="md:col-span-7 md:pt-12">
          <SectionTitle eyebrow={t("about.eyebrow")} title={t("about.title")} />
          <div className="mt-8 space-y-6 text-base leading-[1.85] text-muted-foreground md:text-lg">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>
          <blockquote className="mt-12 border-l border-copper pl-6 font-display text-2xl italic leading-snug text-ivory md:text-3xl">{t("about.quote")}</blockquote>
        </div>
      </div>
    </section>
  );
}

function Univers() {
  const { t } = useI18n();
  return (
    <section id="univers" className="relative border-t border-border px-6 py-32 md:px-10 md:py-44" style={{ backgroundImage: "var(--gradient-stage)" }}>
      <div className="mx-auto max-w-[1280px]">
        <SectionTitle eyebrow={t("univers.eyebrow")} title={t("univers.title")} />
        <div className="mt-16 grid max-w-3xl gap-8 text-[1.05rem] leading-relaxed text-muted-foreground md:mt-20">
          <p>{t("univers.p1")}</p>
          <p>{t("univers.p2")}</p>
        </div>
      </div>
    </section>
  );
}

function OudSection() {
  const { t } = useI18n();
  const parts = [
    { id: "manche", x: "32%", y: "18%" },
    { id: "chevilles", x: "20%", y: "8%" },
    { id: "table", x: "62%", y: "55%" },
    { id: "chevalet", x: "70%", y: "70%" },
    { id: "caisse", x: "55%", y: "82%" },
    { id: "cordes", x: "45%", y: "45%" },
  ];
  const [active, setActive] = useState(parts[0].id);
  const cur = parts.find((p) => p.id === active)!;
  return (
    <section id="oud" className="relative overflow-hidden border-t border-border px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1280px]">
        <SectionTitle eyebrow={t("oud.eyebrow")} title={t("oud.title")}>{t("oud.intro")}</SectionTitle>
        <div className="mt-20 grid gap-12 md:grid-cols-12">
          <div className="relative md:col-span-7">
            <div className="relative overflow-hidden">
              <img src={oudHeadstock} alt="Oud" loading="lazy" width={1200} height={1500} className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/60" />
              {parts.map((p) => (
                <button key={p.id} onMouseEnter={() => setActive(p.id)} onClick={() => setActive(p.id)} style={{ left: p.x, top: p.y }} className={`absolute -translate-x-1/2 -translate-y-1/2 transition ${active === p.id ? "scale-110" : ""}`} aria-label={t(`oud.${p.id}.l`)}>
                  <span className={`relative block h-3 w-3 rounded-full ${active === p.id ? "bg-amber-warm" : "bg-copper"}`}>
                    <span className="absolute inset-0 animate-ping rounded-full bg-copper/60" />
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 md:pl-6">
            <ul className="space-y-1">
              {parts.map((p) => (
                <li key={p.id}>
                  <button onMouseEnter={() => setActive(p.id)} onClick={() => setActive(p.id)} className={`flex w-full items-center justify-between border-b border-border py-4 text-left text-sm uppercase tracking-[0.18em] transition ${active === p.id ? "text-copper" : "text-muted-foreground hover:text-ivory"}`}>
                    <span>{t(`oud.${p.id}.l`)}</span>
                    <span className="font-display text-xs">↗</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 min-h-[120px] border-l border-copper pl-6">
              <p className="font-display text-xl italic text-ivory">{t(`oud.${cur.id}.l`)}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{t(`oud.${cur.id}.t`)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Parcours() {
  const { t } = useI18n();
  const years = ["1995–2010","2007","2015–2017","2018","2019","2021","2022","2023","2024","2025","2026"];
  return (
    <section id="parcours" className="relative border-t border-border px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1280px]">
        <SectionTitle eyebrow={t("parcours.eyebrow")} title={t("parcours.title")} />
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <p className="eyebrow mb-4">{t("parcours.affiliations")}</p>
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              {[1,2,3,4,5].map((i) => (
                <li key={i} className="border-l border-copper/60 pl-4">{t(`parcours.aff.${i}`)}</li>
              ))}
            </ul>
          </aside>
          <ol className="relative md:col-span-8 md:border-l md:border-border md:pl-12">
            {years.map((y, i) => (
              <li key={i} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[3.35rem] top-2 hidden h-2 w-2 rounded-full bg-copper md:block">
                  <span className="absolute inset-0 animate-ping rounded-full bg-copper/40" />
                </span>
                <p className="font-display text-sm tracking-[0.3em] text-copper">{y}</p>
                <h3 className="mt-2 font-display text-2xl text-ivory md:text-3xl">{t(`p.${i+1}.t`)}</h3>
                <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">{t(`p.${i+1}.d`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Scene() {
  const { t } = useI18n();
  const blocks = [
    { tag: t("scene.cinema.tag"), img: stage, title: t("scene.cinema.t"), text: t("scene.cinema.d") },
    { tag: t("scene.theatre.tag"), img: violin, title: t("scene.theatre.t"), text: t("scene.theatre.d") },
    { tag: t("scene.recital.tag"), img: oudStrings, title: t("scene.recital.t"), text: t("scene.recital.d") },
  ];
  return (
    <section id="scene" className="relative border-t border-border bg-card/40 px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1280px]">
        <SectionTitle eyebrow={t("scene.eyebrow")} title={t("scene.title")}>{t("scene.intro")}</SectionTitle>
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {blocks.map((b) => (
            <article key={b.tag} className="group relative overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={b.img} alt={b.title} loading="lazy" width={800} height={1066} className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <p className="eyebrow mb-3">{b.tag}</p>
                  <h3 className="font-display text-3xl text-ivory">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Residences() {
  const { t } = useI18n();
  return (
    <section id="residences" className="relative overflow-hidden border-t border-border">
      <img src={desert} alt="" loading="lazy" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      <div className="relative mx-auto max-w-[1280px] px-6 py-32 md:px-10 md:py-44">
        <SectionTitle eyebrow={t("res.eyebrow")} title={t("res.title")}>{t("res.intro")}</SectionTitle>
        <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-background/80 p-10 backdrop-blur-sm">
              <p className="font-display text-sm tracking-[0.3em] text-copper">0{i}</p>
              <h3 className="mt-4 font-display text-2xl text-ivory md:text-3xl">{t(`res.${i}.t`)}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{t(`res.${i}.d`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecouter() {
  const { t } = useI18n();
  // Aucune source audio locale embarquée. Pour activer la lecture, définir VITE_AUDIO_URL
  // (une URL distante CDN/S3/Cloud). Sinon le bouton play est purement décoratif.
  const fallback = import.meta.env.VITE_AUDIO_URL as string | undefined;
  const audios: (string | undefined)[] = [fallback, fallback, fallback, fallback, fallback, fallback];
  const tracks = [1,2,3,4,5,6].map((i) => ({ t: t(`ec.${i}.t`), d: t(`ec.${i}.d`), dur: ["6:42","5:18","4:05","7:11","8:34","5:50"][i-1], src: audios[i-1] }));
  return (
    <section id="ecouter" className="relative border-t border-border bg-card/40 px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1100px]">
        <SectionTitle eyebrow={t("ec.eyebrow")} title={t("ec.title")}>{t("ec.intro")}</SectionTitle>
        <div className="mt-16 divide-y divide-border border-y border-border">
          {tracks.map((tr, i) => <FauxPlayer key={i} index={i+1} {...tr} />)}
        </div>
        
      </div>
    </section>
  );
}

function FauxPlayer({ index, t: title, d, dur, src }: { index: number; t: string; d: string; dur: string; src?: string }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const toggle = () => {
    if (!src) { setPlaying((v) => !v); return; }
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { a.play(); setPlaying(true); } else { a.pause(); setPlaying(false); }
  };
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6">
      <button onClick={toggle} className="flex h-12 w-12 items-center justify-center rounded-full border border-copper text-copper transition hover:bg-copper hover:text-primary-foreground" aria-label={playing ? "Pause" : "Play"}>
        {playing ? <span className="flex gap-1"><span className="h-3 w-1 bg-current" /><span className="h-3 w-1 bg-current" /></span> : <span className="ml-0.5 border-y-[6px] border-l-[9px] border-y-transparent border-l-current" />}
      </button>
      <div>
        <p className="font-display text-xs tracking-[0.3em] text-copper">{String(index).padStart(2, "0")}</p>
        <p className="mt-1 font-display text-xl text-ivory md:text-2xl">{title}</p>
        <p className="text-sm text-muted-foreground">{d}</p>
        {src && (
          <audio ref={audioRef} src={src} preload="none" onEnded={() => setPlaying(false)} onPause={() => setPlaying(false)} onPlay={() => setPlaying(true)} className="sr-only" />
        )}
        {playing && (
          <div className="mt-3 flex h-6 items-end gap-0.5">
            {Array.from({ length: 40 }).map((_, i) => (
              <span key={i} className="w-0.5 bg-copper/70 animate-string" style={{ height: `${20 + Math.sin(i * 0.7) * 50 + 30}%`, animationDelay: `${i * 0.05}s` }} />
            ))}
          </div>
        )}
      </div>
      <span className="font-display text-sm tracking-widest text-muted-foreground">{dur}</span>
    </div>
  );
}

function Contact() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const types = ["concert","residence","master","press","collab","cinema","theatre","other"];
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border px-6 py-32 md:px-10 md:py-44">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-copper/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1280px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionTitle eyebrow={t("ct.eyebrow")} title={t("ct.title")}>{t("ct.intro")}</SectionTitle>
          <div className="mt-12 space-y-5 text-sm">
            <div>
              <p className="eyebrow">{t("ct.phone")}</p>
              <a href="tel:+213791134982" dir="ltr" className="link-thread mt-1 inline-block whitespace-nowrap text-ivory text-lg sm:text-xl md:text-2xl tracking-wide tabular-nums" style={{ unicodeBidi: "isolate", fontFamily: "var(--font-body)", fontVariantNumeric: "tabular-nums" }}>+213 791 134 982</a>
            </div>
            <div>
              <p className="eyebrow">{t("ct.email")}</p>
              <a href="mailto:sensabyldzbeghdadi@gmail.com" className="link-thread mt-1 block font-display text-2xl text-ivory break-all">sensabyldzbeghdadi@gmail.com</a>
            </div>
            <div>
              <p className="eyebrow">{t("ct.base")}</p>
              <p className="mt-1 font-display text-xl text-muted-foreground">{t("ct.base.v")}</p>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="md:col-span-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label={t("ct.f.nom")} name="nom" />
            <Field label={t("ct.f.struct")} name="structure" />
            <Field label={t("ct.f.email")} name="email" type="email" />
            <Field label={t("ct.f.tel")} name="tel" />
            <Field label={t("ct.f.objet")} name="objet" wide />
            <div className="sm:col-span-2">
              <label className="eyebrow">{t("ct.f.type")}</label>
              <select name="type" className="mt-3 w-full border-b border-border bg-transparent py-3 text-ivory outline-none transition focus:border-copper">
                {types.map((o) => <option key={o} value={o} className="bg-background">{t(`ct.t.${o}`)}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="eyebrow">{t("ct.f.message")}</label>
              <textarea name="message" rows={5} className="mt-3 w-full border-b border-border bg-transparent py-3 text-ivory outline-none transition focus:border-copper" />
            </div>
          </div>
          <button type="submit" className="mt-10 inline-flex items-center gap-3 rounded-full bg-copper px-9 py-4 text-[0.74rem] uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-amber-warm">
            {sent ? t("ct.f.sent") : t("ct.f.send")}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", wide }: { label: string; name: string; type?: string; wide?: boolean }) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <label className="eyebrow" htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} className="mt-3 w-full border-b border-border bg-transparent py-3 text-ivory outline-none transition focus:border-copper" />
    </div>
  );
}

function Footer() {
  const { t } = useI18n();
  const navLinks: [string, string][] = [
    ["#top", t("nav.home")], ["#about", t("nav.about")],
    ["#univers", t("nav.univers")], ["#parcours", t("nav.parcours")],
    ["#ecouter", t("nav.ecouter")], ["#contact", t("nav.contact")],
  ];
  return (
    <footer className="relative border-t border-border px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl text-ivory">Sensabyl Beghdadi</p>
          <p className="mt-2 text-sm text-muted-foreground">{t("ft.role")}</p>
          <p className="mt-8 max-w-md font-display text-lg italic text-amber-warm">{t("ft.quote")}</p>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">{t("ft.nav")}</p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {navLinks.map(([h, l]) => <li key={h}><a href={h} className="link-thread hover:text-ivory">{l}</a></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4">{t("ft.contact")}</p>
          <p dir="ltr" className="whitespace-nowrap text-sm text-muted-foreground tracking-wide tabular-nums" style={{ unicodeBidi: "isolate", fontFamily: "var(--font-body)", fontVariantNumeric: "tabular-nums" }}>+213 791 134 982</p>
          <p className="text-sm text-muted-foreground break-all">sensabyldzbeghdadi@gmail.com</p>
        </div>
      </div>
      <div className="divider-thread mt-12" />
      <p className="mt-6 text-center text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">© {new Date().getFullYear()} Sensabyl Beghdadi — {t("ft.rights")}</p>
    </footer>
  );
}
