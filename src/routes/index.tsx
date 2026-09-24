import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import heroAsset from "@/assets/hero.jpg.asset.json";
import logoAsset from "@/assets/hm-logo.png.asset.json";
import wordmarkAsset from "@/assets/hermissa-wordmark.png.asset.json";
import about from "@/assets/about.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "HERMISSA — Pro Makeup Artist für Editorial & Fashion",
      },
      {
        name: "description",
        content:
          "Melissa — Pro Makeup Artist in der Schweiz. Beauty, Commercial & Editorial für Fashion Shows, Shootings und Campaigns. Kontakt für Bookings.",
      },
      {
        property: "og:title",
        content: "HERMISSA — Pro Makeup Artist für Editorial & Fashion",
      },
      {
        property: "og:description",
        content:
          "Beauty, Commercial & Editorial — based in Switzerland. Kontakt für Bookings.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const NAV = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Kontakt", href: "#kontakt" },
];

const WORKS = [
  { src: work1, title: "Golden Hour Beauty", tag: "Beauty" },
  { src: work2, title: "Backstage Prep", tag: "Fashion Week" },
  { src: work3, title: "Graphic Liner", tag: "Editorial" },
  { src: work4, title: "Monochrome", tag: "Editorial" },
  { src: work5, title: "Berry Couture", tag: "Beauty" },
  { src: work6, title: "The Show", tag: "Fashion Week" },
];

function Nav() {
  return (
    <header className="nav-blur fixed inset-x-0 top-0 z-50 border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="HERMISSA HM Monogramm"
            width={34}
            height={34}
            className="h-[34px] w-[34px] object-contain"
          />
          <img
            src={wordmarkAsset.url}
            alt="HERMISSA"
            width={1402}
            height={232}
            className="h-3 w-auto sm:h-3.5"
          />
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.7rem] tracking-[0.3em] uppercase text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="border border-border px-5 py-2 text-[0.65rem] tracking-[0.3em] uppercase text-foreground transition-colors hover:border-primary hover:text-primary md:hidden"
        >
          Booking
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen">
      <img
        src={heroAsset.url}
        alt="Melissa — Pro Makeup Artist HERMISSA"
        className="absolute inset-0 h-full w-full object-cover object-[62%_25%] opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-2xl pt-24">
          <h1 className="font-display text-6xl leading-[1.08] text-foreground sm:text-7xl lg:text-8xl">
            Beauty,
            <br />
            Editorial
            <span className="text-primary"> &amp;</span>
            <br />
            Fashion
          </h1>
          <p className="mt-8 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            Melissa — Pro Makeup Artist für Fashion Shows, Shootings und
            Campaigns. Based in Switzerland.
          </p>
          <div className="mt-12">
            <a
              href="#portfolio"
              className="bg-primary px-8 py-3.5 text-[0.7rem] tracking-[0.3em] uppercase text-primary-foreground transition-opacity hover:opacity-85"
            >
              Portfolio ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  overline,
  title,
}: {
  overline: string;
  title: string;
}) {
  return (
    <div className="mb-16 text-center lg:mb-24">
      <p className="overline mb-4">{overline}</p>
      <h2 className="font-display text-4xl text-foreground sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function WorkCard({
  work,
  tall,
}: {
  work: (typeof WORKS)[number];
  tall?: boolean;
}) {
  return (
    <figure className="group relative overflow-hidden">
      <img
        src={work.src}
        alt={work.title}
        loading="lazy"
        width={912}
        height={1200}
        className={`img-editorial group-hover:img-editorial-hover w-full object-cover ${
          tall ? "aspect-[3/4]" : "aspect-[3/4]"
        }`}
      />
      <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/85 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="overline mb-1.5">{work.tag}</span>
        <span className="font-display text-2xl text-foreground">
          {work.title}
        </span>
      </figcaption>
    </figure>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 py-24 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading overline="Ausgewählte Arbeiten" title="Portfolio" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {WORKS.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Mehr Eindrücke auf{" "}
          <a
            href="https://instagram.com/hermissamakeup"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Instagram @hermissamakeup
          </a>
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="ueber-mich" className="scroll-mt-20 py-24 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <img
          src={about}
          alt="Melissa — Pro Makeup Artist HERMISSA"
          loading="lazy"
          width={912}
          height={1200}
          className="aspect-[3/4] w-full object-cover"
        />
        <div>
          <p className="overline mb-4">Über mich</p>
          <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Melissa —<br />
            <span className="text-primary">Pro Makeup Artist</span>
          </h2>
          <p className="mt-8 text-base font-light leading-relaxed text-muted-foreground">
            Based in Switzerland arbeite ich zwischen Beauty, Commercial und
            Editorial — von backstage an Fashion Shows über Kampagnen-Shootings
            bis zu Cover-Looks. Meine Arbeit lebt von präziser Haut-Optik,
            Leuchtkraft und Looks, die unter Scheinwerfern und durch die Linse
            bestehen.
          </p>
          <p className="mt-5 text-base font-light leading-relaxed text-muted-foreground">
            Ob Runway mit engem Zeitfenster, Set mit wechselnden Lichtsituationen
            oder ein Editorial mit klarer Vision — ich bringe Ruhe, Tempo und
            einen sicheren Blick fürs Gesamtbild mit.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const anlass = String(data.get("anlass") ?? "");
    const nachricht = String(data.get("nachricht") ?? "");
    const subject = `Booking-Anfrage: ${anlass} — ${name}`;
    const body = `Hallo Melissa\n\n${nachricht}\n\nAnlass: ${anlass}\nName: ${name}\nE-Mail: ${email}`;
    window.location.href = `mailto:bookings@hermissa.ch?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputClass =
    "w-full border border-input bg-transparent px-4 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-ring";

  return (
    <section id="kontakt" className="scroll-mt-20 py-24 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-20 lg:px-10">
        <div>
          <p className="overline mb-4">Kontakt</p>
          <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
            Lass uns
            <br />
            zusammen<span className="text-primary">arbeiten</span>
          </h2>
          <p className="text-base font-light leading-relaxed text-muted-foreground">
            Du planst eine Show, ein Shooting oder eine Kampagne? Schreib mir
            kurz zu deinem Anlass — ich melde mich in der Regel innerhalb von 24
            Stunden.
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            <a
              href="https://instagram.com/hermissamakeup"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              Instagram — @hermissamakeup
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="overline mb-2 block text-[0.6rem]"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Dein Name"
                className={inputClass}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="overline mb-2 block text-[0.6rem]"
              >
                E-Mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="name@beispiel.ch"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="anlass" className="overline mb-2 block text-[0.6rem]">
              Anlass
            </label>
            <select id="anlass" name="anlass" className={inputClass} defaultValue="Fashion Show">
              <option className="bg-background">Fashion Show</option>
              <option className="bg-background">Editorial / Shooting</option>
              <option className="bg-background">Commercial / Kampagne</option>
              <option className="bg-background">Sonstiges</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="nachricht"
              className="overline mb-2 block text-[0.6rem]"
            >
              Nachricht
            </label>
            <textarea
              id="nachricht"
              name="nachricht"
              required
              rows={6}
              placeholder="Erzähl mir kurz von deinem Projekt, Datum & Ort …"
              className={`${inputClass} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary py-4 text-[0.7rem] tracking-[0.35em] uppercase text-primary-foreground transition-opacity hover:opacity-85"
          >
            Anfrage senden
          </button>
          {sent && (
            <p className="text-center text-sm text-muted-foreground">
              Dein E-Mail-Programm wurde mit der Anfrage geöffnet — vielen Dank!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:px-10">
        <img
          src={logoAsset.url}
          alt="HERMISSA HM Monogramm"
          width={44}
          height={44}
          loading="lazy"
          className="h-11 w-11 object-contain"
        />
        <img
          src={wordmarkAsset.url}
          alt="HERMISSA"
          width={1402}
          height={232}
          loading="lazy"
          className="h-4 w-auto"
        />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} HERMISSA — All rights reserved
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
