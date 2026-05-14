import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { SectionTitle } from "@/components/site/SectionTitle";

import heroOud from "@/assets/hero-oud.jpg";
import portrait from "@/assets/sensabyl-portrait.jpg";
import playing from "@/assets/sensabyl-playing.jpg";
import oudHeadstock from "@/assets/oud-headstock.jpg";
import oudStrings from "@/assets/oud-strings.jpg";
import violin from "@/assets/violin.jpg";
import desert from "@/assets/desert-night.jpg";
import stage from "@/assets/stage.jpg";
import calligraphy from "@/assets/calligraphy.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sensabyl Beghdadi | Auteur, compositeur, musicien Oud et violon" },
      {
        name: "description",
        content:
          "Découvrez l'univers musical de Sensabyl Beghdadi, auteur, compositeur, interprète, musicien Oud et violon, entre maqâms, patrimoine algérien, improvisation, scène, cinéma, nature et création contemporaine.",
      },
      {
        name: "keywords",
        content:
          "Sensabyl Beghdadi, Oud, violon, compositeur algérien, musique algérienne, maqâm, musique orientale, musique andalouse, musicien Oud, auteur compositeur interprète, création sonore, musique de théâtre, musique de film, résidence artistique, Aïn Sefra",
      },
      { property: "og:title", content: "Sensabyl Beghdadi — Jouer pour les âmes" },
      {
        property: "og:description",
        content:
          "Auteur, compositeur, interprète, musicien Oud et violon. Une œuvre entre mémoire, souffle et résonance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&family=Reem+Kufi:wght@400;500;700&family=Tajawal:wght@300;400;500;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sensabyl Beghdadi",
          jobTitle: "Auteur, compositeur, interprète, musicien Oud et violon",
          nationality: "Algérienne",
          email: "sensabyldzbeghdadi@gmail.com",
          telephone: "+213791134982",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
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

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <img
        src={heroOud}
        alt="Oud éclairé par une lumière de scène ambrée"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,transparent,oklch(0.12_0.02_265)_75%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* breathing stage halo */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper/15 blur-3xl animate-breath" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <p className="eyebrow mb-8 animate-rise">Auteur · Compositeur · Interprète · Oud & Violon</p>
        <h1 className="font-display text-[clamp(3.2rem,9vw,9rem)] leading-[0.9] text-ivory animate-rise">
          Sensabyl
          <br />
          <span className="italic text-copper">Beghdadi</span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl animate-rise" style={{ animationDelay: "0.2s" }}>
            <p className="font-display text-3xl italic text-amber-warm md:text-4xl">
              « Jouer pour les âmes. »
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty">
              Chez Sensabyl Beghdadi, le Oud n'est pas seulement un instrument. Il est
              une arche de résonance, une mémoire de bois et de cordes, une voix
              ancienne qui traverse les maqâms, les paysages du Maghreb, les parfums
              andalous et les vertiges de l'improvisation.
            </p>
          </div>

          <div className="flex flex-col gap-3 animate-rise sm:flex-row" style={{ animationDelay: "0.4s" }}>
            <a
              href="#about"
              className="rounded-full bg-copper px-7 py-3.5 text-center text-[0.74rem] uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-amber-warm"
            >
              Découvrir l'artiste
            </a>
            <a
              href="#ecouter"
              className="rounded-full border border-ivory/30 px-7 py-3.5 text-center text-[0.74rem] uppercase tracking-[0.25em] text-ivory transition hover:border-copper hover:text-copper"
            >
              Écouter l'univers
            </a>
            <a
              href="#contact"
              className="rounded-full border border-transparent px-7 py-3.5 text-center text-[0.74rem] uppercase tracking-[0.25em] text-muted-foreground transition hover:text-ivory"
            >
              Programmer une rencontre →
            </a>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground">
        <span className="inline-block animate-string">Scroll</span>
      </div>
    </section>
  );
}

/* ------------------------------ ABOUT ----------------------------- */
function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-10 md:py-44">
      <div className="mx-auto grid max-w-[1280px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={portrait}
              alt="Portrait de Sensabyl Beghdadi avec son Oud"
              loading="lazy"
              width={800}
              height={1000}
              className="h-full w-full object-cover grayscale-[20%] transition duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <div className="absolute -bottom-3 -left-3 h-24 w-24 border-l border-b border-copper" />
            <div className="absolute -top-3 -right-3 h-24 w-24 border-r border-t border-copper" />
          </div>
        </div>

        <div className="md:col-span-7 md:pt-12">
          <SectionTitle
            eyebrow="À propos"
            title="Une trajectoire entre héritage, recherche et création"
          />
          <div className="mt-8 space-y-6 text-base leading-[1.85] text-muted-foreground md:text-lg">
            <p>
              Sensabyl Beghdadi est auteur, compositeur, interprète, musicien Oud
              et violon. Son parcours s'inscrit dans une quête exigeante : faire
              émerger une musique où les traditions savantes dialoguent avec les
              écritures du présent.
            </p>
            <p>
              Nourri par les maqâms, l'improvisation, les rythmes du patrimoine
              algérien et les sonorités méditerranéennes, il développe un langage
              personnel où chaque note devient matière, mémoire et souffle. Depuis
              les profondeurs des dunes et les hauts plateaux d'Aïn Sefra, sa
              recherche emprunte aux maîtres du Oud — Munir Bachir, Riyad El
              Sambati, Chérif Muhi El Dine Haidar — et croise Bach, Mozart et
              l'héritage andalou.
            </p>
          </div>

          <blockquote className="mt-12 border-l border-copper pl-6 font-display text-2xl italic leading-snug text-ivory md:text-3xl">
            « Sa musique ne cherche pas seulement à être entendue ;
            <br className="hidden md:block" />
            elle cherche à éveiller. »
          </blockquote>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ UNIVERS --------------------------- */
function Univers() {
  const cards = [
    {
      n: "01",
      title: "Le Oud comme matrice",
      text:
        "Instrument ancien, porteur d'une mémoire plurimillénaire, le Oud devient entre ses mains un espace de méditation, de transmission et d'expérimentation.",
    },
    {
      n: "02",
      title: "Le violon comme ligne de lumière",
      text:
        "Le violon prolonge la voix du Oud, ouvre des trajectoires mélodiques et inscrit la musique dans une dramaturgie sensible.",
    },
    {
      n: "03",
      title: "Improvisation & maqâms",
      text:
        "Son travail explore les intervalles, les modes, les tensions subtiles et les respirations de l'improvisation, entre architecture musicale et liberté du geste.",
    },
    {
      n: "04",
      title: "Scène, nature & création contemporaine",
      text:
        "Sa recherche sonore fait dialoguer la scène, les paysages, les matières naturelles et les récits humains.",
    },
  ];
  return (
    <section
      id="univers"
      className="relative border-t border-border px-6 py-32 md:px-10 md:py-44"
      style={{ backgroundImage: "var(--gradient-stage)" }}
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionTitle
          eyebrow="Univers musical"
          title="Des maqâms aux paysages intérieurs"
        >
          Quatre axes de recherche traversent l'œuvre : l'instrument, la voix
          mélodique, le mode et le paysage.
        </SectionTitle>

        <div className="mt-20 grid gap-px bg-border md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.n}
              className="group relative bg-background p-10 transition duration-700 hover:bg-card md:p-14"
            >
              <span className="font-display text-sm tracking-[0.3em] text-copper">
                {c.n}
              </span>
              <h3 className="mt-4 font-display text-3xl leading-tight text-ivory md:text-4xl">
                {c.title}
              </h3>
              <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
                {c.text}
              </p>
              <div className="mt-10 h-px w-12 bg-copper transition-all duration-700 group-hover:w-32" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- OUD ----------------------------- */
function OudSection() {
  const parts = [
    { id: "manche", label: "Le manche (El Zend)", x: "32%", y: "18%",
      text: "Bois d'acajou algérien, sans frettes et court, pour jouer les micro-intervalles des maqâmate." },
    { id: "chevilles", label: "Les chevilles (El Assafirs)", x: "20%", y: "8%",
      text: "Onze cordes fixées par des chevilles d'ébène indien, comme celles d'un violon." },
    { id: "table", label: "La table d'harmonie", x: "62%", y: "55%",
      text: "Cèdre rouge algérien résineux, vernie traditionnellement, ornée d'os bovin sculpté par l'artiste." },
    { id: "chevalet", label: "Le chevalet", x: "70%", y: "70%",
      text: "Acajou avec renfort au point de jeu, pour amplifier la résonance." },
    { id: "caisse", label: "La caisse de résonance", x: "55%", y: "82%",
      text: "Olivier sauvage algérien et citronnier égyptien, forme piriforme, parois de 1,5 à 2 mm." },
    { id: "cordes", label: "Les cordes", x: "45%", y: "45%",
      text: "Onze cordes nues et filées, vibration aérienne, palette expressive ouverte au souffle." },
  ];
  const [active, setActive] = useState(parts[0].id);
  const current = parts.find((p) => p.id === active)!;

  return (
    <section
      id="oud"
      className="relative overflow-hidden border-t border-border px-6 py-32 md:px-10 md:py-44"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionTitle
          eyebrow="L'instrument"
          title="Le Oud de Sensabyl, une architecture de résonance"
        >
          Créé et façonné par le maître luthier égyptien Jorgie Jamil, puis restauré
          et amélioré par El Usted Mahmoud Khalfaoui de Touggourt, ce Oud possède
          une identité sonore singulière — alléger l'instrument, amplifier sa
          vibration, ouvrir une palette expressive adaptée aux nuances de l'artiste.
        </SectionTitle>

        <div className="mt-20 grid gap-12 md:grid-cols-12">
          <div className="relative md:col-span-7">
            <div className="relative overflow-hidden">
              <img
                src={oudHeadstock}
                alt="Détail du Oud — manche, chevilles et cordes"
                loading="lazy"
                width={1200}
                height={1500}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/60" />

              {parts.map((p) => (
                <button
                  key={p.id}
                  onMouseEnter={() => setActive(p.id)}
                  onClick={() => setActive(p.id)}
                  style={{ left: p.x, top: p.y }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 transition ${
                    active === p.id ? "scale-110" : ""
                  }`}
                  aria-label={p.label}
                >
                  <span
                    className={`relative block h-3 w-3 rounded-full ${
                      active === p.id ? "bg-amber-warm" : "bg-copper"
                    }`}
                  >
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
                  <button
                    onMouseEnter={() => setActive(p.id)}
                    onClick={() => setActive(p.id)}
                    className={`flex w-full items-center justify-between border-b border-border py-4 text-left text-sm uppercase tracking-[0.18em] transition ${
                      active === p.id ? "text-copper" : "text-muted-foreground hover:text-ivory"
                    }`}
                  >
                    <span>{p.label}</span>
                    <span className="font-display text-xs">↗</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 min-h-[120px] border-l border-copper pl-6">
              <p className="font-display text-xl italic text-ivory">{current.label}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                {current.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PARCOURS -------------------------- */
function Parcours() {
  const items = [
    { y: "1995–2010", t: "Association culturelle Anghem — Aïn Sefra",
      d: "Fondation et direction de l'association, création du groupe Diapason, formation, écriture et composition." },
    { y: "2007", t: "Gestion de cycle de projet — appui de l'Union Européenne",
      d: "Formation orchestrée par la direction du projet ONG II, Oran." },
    { y: "2015–2017", t: "Récitals & créations à Alger et Tlemcen",
      d: "Récitals au Palais de la culture, au LIAD, au Centre Cervantès, aux Ateliers Sauvages, conférences soufies." },
    { y: "2018", t: "« Boussadia Sound » — Tunisie & Algérie",
      d: "Performances au Festival international de Gafsa, à la Cité de la culture de Tunis, à Sidi Bel Abbès, et tournée nationale ONDA/ONCI." },
    { y: "2019", t: "« Arlequin, serviteur des deux maîtres »",
      d: "Composition et interprétation, mise en scène de Ziani Cherif Ayad." },
    { y: "2021", t: "Co-création à distance avec la compagnie Complicity",
      d: "Sélection pour le Algeria British Consul ; pièce « Posticha » d'Ahmed Rezzak ; œuvre personnelle « Rue 22 »." },
    { y: "2022", t: "Arrangement de l'épopée « Ala Fa Achahdou »",
      d: "Écriture musicale d'envergure pour récit chanté." },
    { y: "2023", t: "« Prix de la liberté » — composition originale",
      d: "Auteur compositeur pour une pièce de théâtre avec Ziani Cherif Ayad." },
    { y: "2024", t: "Inauguration du Centre national des archives du théâtre algérien",
      d: "Performance et jury — Festival national du Théâtre, section musique." },
    { y: "2025", t: "« La Clé » — musique live pour le théâtre",
      d: "Composition et interprétation continue avec Ziani Cherif Ayad." },
    { y: "2026", t: "Atelier de chants et comédie musicale",
      d: "Théâtre régional de Naâma — performances solo." },
  ];

  const affiliations = [
    "Conseil National des Arts et des Lettres (CNAL) — n° 3888",
    "Office National des Droits d'Auteurs (ONDA) — n° 4094",
    "Office National des Droits Voisins (ONDA) — n° 063",
    "Union Nationale des Artistes (UNAC) — membre actif",
    "Comité exécutif de l'union des artistes et intermittents du spectacle",
  ];

  return (
    <section
      id="parcours"
      className="relative border-t border-border px-6 py-32 md:px-10 md:py-44"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionTitle
          eyebrow="Parcours artistique"
          title="Un parcours entre scène, transmission et création"
        />

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-4 md:sticky md:top-32 md:self-start">
            <p className="eyebrow mb-4">Affiliations</p>
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              {affiliations.map((a) => (
                <li key={a} className="border-l border-copper/60 pl-4">{a}</li>
              ))}
            </ul>
          </aside>

          <ol className="relative md:col-span-8 md:border-l md:border-border md:pl-12">
            {items.map((it, i) => (
              <li key={i} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[3.35rem] top-2 hidden h-2 w-2 rounded-full bg-copper md:block">
                  <span className="absolute inset-0 animate-ping rounded-full bg-copper/40" />
                </span>
                <p className="font-display text-sm tracking-[0.3em] text-copper">{it.y}</p>
                <h3 className="mt-2 font-display text-2xl text-ivory md:text-3xl">{it.t}</h3>
                <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                  {it.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- SCENE ---------------------------- */
function Scene() {
  const blocks = [
    {
      tag: "Cinéma",
      img: stage,
      title: "Compositions pour l'image",
      text: "Bandes originales pour quatre films du projet algéro-québécois « El Djazair Mon Amour » ; collaborations avec Samuel Matteau, Elias Jamil, Raouf Benia, Karim Moussaoui, Damien Ounouri.",
    },
    {
      tag: "Théâtre",
      img: violin,
      title: "Dramaturgie sonore",
      text: "« Arlequin, serviteur des deux maîtres » (Ziani Cherif Ayad), « Posticha » (Ahmed Rezzak), « Shadaya El Nissa », « Boussadia Sound », « La Clé », et l'épopée « Ala Fa Achahdou ».",
    },
    {
      tag: "Récitals & performances",
      img: oudStrings,
      title: "Concerts et accompagnements",
      text: "Récital « États d'âmes » au musée Dar El Amia ; ouvertures de festivals théâtraux ; accompagnements poétiques ; soirées Chaâbi avec Kheireddine Mekachiche.",
    },
  ];
  return (
    <section
      id="scene"
      className="relative border-t border-border bg-card/40 px-6 py-32 md:px-10 md:py-44"
    >
      <div className="mx-auto max-w-[1280px]">
        <SectionTitle
          eyebrow="Scène · Théâtre · Cinéma"
          title="Musique pour l'image, la scène et la parole"
        >
          Sa musique devient dramaturgie, respiration, contrepoint émotionnel et
          espace de révélation.
        </SectionTitle>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {blocks.map((b) => (
            <article key={b.tag} className="group relative overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  width={800}
                  height={1066}
                  className="h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <p className="eyebrow mb-3">{b.tag}</p>
                  <h3 className="font-display text-3xl text-ivory">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {b.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- RESIDENCES ------------------------- */
function Residences() {
  const pillars = [
    { t: "Écouter la nature", d: "Tendre l'oreille aux pierres, aux feuilles, au vent et aux voix animales comme partenaires sonores." },
    { t: "Composer avec les éléments", d: "Intégrer matériaux trouvés, textures organiques et géographies sonores aux maqâms." },
    { t: "Transformer le paysage en instrument", d: "Faire du lieu lui-même une caisse de résonance, une dramaturgie environnementale." },
  ];
  return (
    <section id="residences" className="relative overflow-hidden border-t border-border">
      <img
        src={desert}
        alt="Dunes au crépuscule"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-32 md:px-10 md:py-44">
        <SectionTitle
          eyebrow="Résidences & recherches sonores"
          title="Art, récits et nature"
        >
          Dans ses recherches récentes, Sensabyl Beghdadi interroge les liens
          entre musique, environnement naturel et création sonore. Le paysage
          devient un partenaire musical.
        </SectionTitle>

        <div className="mt-20 grid gap-px bg-border md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.t} className="bg-background/80 p-10 backdrop-blur-sm">
              <p className="font-display text-sm tracking-[0.3em] text-copper">
                0{i + 1}
              </p>
              <h3 className="mt-4 font-display text-2xl text-ivory md:text-3xl">{p.t}</h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ------------------------------ ECOUTER --------------------------- */
function Ecouter() {
  const tracks = [
    { t: "Taksim sur maqâm Bayati", d: "Oud solo · improvisation", dur: "6:42" },
    { t: "El Janoube El Wahrâni — variation", d: "Hommage à Ahmed Wahbi", dur: "5:18" },
    { t: "Boussadia Sound — extrait", d: "Composition pour la scène", dur: "4:05" },
    { t: "Rue 22", d: "Œuvre personnelle", dur: "7:11" },
    { t: "Ala Fa Achahdou — épopée", d: "Arrangement musical, 2022", dur: "8:34" },
    { t: "La Clé — musique live", d: "Théâtre · Ziani Cherif Ayad, 2025", dur: "5:50" },
  ];
  return (
    <section
      id="ecouter"
      className="relative border-t border-border bg-card/40 px-6 py-32 md:px-10 md:py-44"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionTitle eyebrow="Écouter" title="Une géographie intime du son">
          « Écouter Sensabyl Beghdadi, c'est entrer dans une géographie intime où
          chaque corde semble porter la mémoire d'un lieu, d'un visage, d'une
          prière ou d'un exil. »
        </SectionTitle>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {tracks.map((tr, i) => (
            <FauxPlayer key={tr.t} index={i + 1} {...tr} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Extraits disponibles sur demande — press kit complet sur invitation
        </p>
      </div>
    </section>
  );
}

function FauxPlayer({ index, t, d, dur }: { index: number; t: string; d: string; dur: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6">
      <button
        onClick={() => setPlaying((v) => !v)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-copper text-copper transition hover:bg-copper hover:text-primary-foreground"
        aria-label={playing ? "Pause" : "Lecture"}
      >
        {playing ? (
          <span className="flex gap-1">
            <span className="h-3 w-1 bg-current" />
            <span className="h-3 w-1 bg-current" />
          </span>
        ) : (
          <span className="ml-0.5 border-y-[6px] border-l-[9px] border-y-transparent border-l-current" />
        )}
      </button>
      <div>
        <p className="font-display text-xs tracking-[0.3em] text-copper">
          {String(index).padStart(2, "0")}
        </p>
        <p className="mt-1 font-display text-xl text-ivory md:text-2xl">{t}</p>
        <p className="text-sm text-muted-foreground">{d}</p>
        {playing && (
          <div className="mt-3 flex h-6 items-end gap-0.5">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="w-0.5 bg-copper/70 animate-string"
                style={{
                  height: `${20 + Math.sin(i * 0.7) * 50 + 30}%`,
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
      <span className="font-display text-sm tracking-widest text-muted-foreground">
        {dur}
      </span>
    </div>
  );
}


/* ------------------------------ CONTACT --------------------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border px-6 py-32 md:px-10 md:py-44"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-copper/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-[1280px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionTitle
            eyebrow="Contact"
            title="Programmer, inviter, collaborer"
          >
            Pour toute demande de programmation, résidence, concert, conférence,
            masterclass, composition originale, collaboration scénique ou
            cinématographique.
          </SectionTitle>

          <div className="mt-12 space-y-5 text-sm">
            <div>
              <p className="eyebrow">Téléphone</p>
              <a
                href="tel:+213791134982"
                className="link-thread mt-1 block font-display text-2xl text-ivory"
              >
                +213 791 134 982
              </a>
            </div>
            <div>
              <p className="eyebrow">Email</p>
              <a
                href="mailto:sensabyldzbeghdadi@gmail.com"
                className="link-thread mt-1 block font-display text-2xl text-ivory break-all"
              >
                sensabyldzbeghdadi@gmail.com
              </a>
            </div>
            <div>
              <p className="eyebrow">Base</p>
              <p className="mt-1 font-display text-xl text-muted-foreground">
                Aïn Sefra · Alger · Algérie
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="md:col-span-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nom" name="nom" />
            <Field label="Structure" name="structure" />
            <Field label="Email" name="email" type="email" />
            <Field label="Téléphone" name="tel" />
            <Field label="Objet" name="objet" wide />
            <div className="sm:col-span-2">
              <label className="eyebrow">Type de demande</label>
              <select
                name="type"
                className="mt-3 w-full border-b border-border bg-transparent py-3 text-ivory outline-none transition focus:border-copper"
              >
                {["concert","résidence","masterclass","presse","collaboration","cinéma","théâtre","autre"].map((o)=>(
                  <option key={o} value={o} className="bg-background">{o}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="eyebrow">Message</label>
              <textarea
                name="message"
                rows={5}
                className="mt-3 w-full border-b border-border bg-transparent py-3 text-ivory outline-none transition focus:border-copper"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-copper px-9 py-4 text-[0.74rem] uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-amber-warm"
          >
            {sent ? "Demande transmise ✓" : "Envoyer la demande →"}
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
      <input
        id={name}
        name={name}
        type={type}
        className="mt-3 w-full border-b border-border bg-transparent py-3 text-ivory outline-none transition focus:border-copper"
      />
    </div>
  );
}

/* ------------------------------ FOOTER ---------------------------- */
function Footer() {
  return (
    <footer className="relative border-t border-border px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-2xl text-ivory">Sensabyl Beghdadi</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Auteur · Compositeur · Interprète · Musicien Oud & Violon
          </p>
          <p className="mt-8 max-w-md font-display text-lg italic text-amber-warm">
            « Une œuvre entre mémoire, souffle et résonance. »
          </p>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">Navigation</p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {[
              ["#top", "Accueil"], ["#about", "À propos"],
              ["#univers", "Univers"], ["#parcours", "Parcours"],
              ["#ecouter", "Écouter"],
              ["#contact", "Contact"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="link-thread hover:text-ivory">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow mb-4">Contact</p>
          <p className="text-sm text-muted-foreground">+213 791 134 982</p>
          <p className="text-sm text-muted-foreground break-all">sensabyldzbeghdadi@gmail.com</p>
        </div>
      </div>

      <div className="divider-thread mt-12" />
      <p className="mt-6 text-center text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} Sensabyl Beghdadi — Tous droits réservés
      </p>
    </footer>
  );
}
