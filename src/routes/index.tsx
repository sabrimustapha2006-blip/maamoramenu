import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { sections, suggestionNote, garnishNote } from "@/data/menu";
import heroImg from "@/assets/hero.jpg";
import saladImg from "@/assets/salad.jpg";
import beefImg from "@/assets/beef.jpg";
import fishImg from "@/assets/fish.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import tagineImg from "@/assets/tagine.jpg";
import dessertImg from "@/assets/dessert.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mamora — Carte du Restaurant | Restaurant Menu" },
      {
        name: "description",
        content:
          "Carte complète du restaurant Mamora : salades, poissons, viandes, tajines, paëllas et desserts. Full menu in French and English.",
      },
      { property: "og:title", content: "Mamora — Carte du Restaurant | Restaurant Menu" },
      {
        property: "og:description",
        content:
          "Salades, entrées chaudes, pâtes, viandes, poissons, pizzas, spécialités marocaines et desserts. Menu bilingue FR / EN.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

type Lang = "fr" | "en";

const images: Record<string, string> = {
  salad: saladImg,
  beef: beefImg,
  fish: fishImg,
  pizza: pizzaImg,
  tagine: tagineImg,
  dessert: dessertImg,
};

const ui = {
  fr: {
    eyebrow: "Restaurant",
    tagline: "Cuisine méditerranéenne & marocaine",
    scroll: "Découvrir la carte",
    currency: "MAD",
    priceNote: "Prix en dirhams (MAD)",
  },
  en: {
    eyebrow: "Restaurant",
    tagline: "Mediterranean & Moroccan cuisine",
    scroll: "View the menu",
    currency: "MAD",
    priceNote: "Prices in dirhams (MAD)",
  },
} as const;

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="rule-gold h-px w-16 opacity-50 sm:w-24" />
      <span className="text-primary text-xs tracking-[0.4em]">✦</span>
      <span className="rule-gold h-px w-16 opacity-50 sm:w-24" />
    </div>
  );
}

function MenuPage() {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = ui[lang];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Language switcher */}
      <div className="fixed top-4 right-4 z-50 sm:top-6 sm:right-6">
        <div className="border-border bg-background/80 flex items-center rounded-full border p-1 backdrop-blur-md">
          {(["fr", "en"] as Lang[]).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`rounded-full px-4 py-1.5 text-xs tracking-[0.18em] uppercase transition-colors ${
                lang === code
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {code === "fr" ? "FR" : "EN"}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <header className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="veil absolute inset-0" />
        <div className="relative z-10 px-6 py-24 text-center">
          <p className="text-primary text-[0.7rem] tracking-[0.5em] uppercase">{t.eyebrow}</p>
          <h1 className="font-display mt-4 text-6xl leading-none font-light tracking-tight sm:text-7xl md:text-8xl">
            Mamora
          </h1>
          <p className="text-muted-foreground mt-5 text-sm font-light tracking-[0.22em] uppercase">
            {t.tagline}
          </p>
          <div className="mt-8">
            <Ornament />
          </div>
          <a
            href="#entrees-froides"
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground mt-10 inline-block rounded-full border px-8 py-3 text-[0.7rem] tracking-[0.3em] uppercase transition-colors"
          >
            {t.scroll}
          </a>
        </div>
      </header>

      {/* Section nav */}
      <nav className="border-border bg-background/90 sticky top-0 z-40 border-b backdrop-blur-md">
        <div className="mx-auto max-w-5xl overflow-x-auto px-4">
          <ul className="flex min-w-max items-center gap-6 py-3 text-[0.68rem] tracking-[0.2em] whitespace-nowrap uppercase">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {s[lang]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        {sections.map((section, i) => (
          <section key={section.id} id={section.id} className={i === 0 ? "" : "mt-20 sm:mt-28"}>
            {section.image && (
              <figure className="shadow-frame mb-10 overflow-hidden rounded-sm">
                <img
                  src={images[section.image]}
                  alt={section[lang]}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-72"
                />
              </figure>
            )}

            <div className="text-center">
              <h2 className="font-display text-4xl font-light tracking-wide sm:text-5xl">
                {section[lang]}
              </h2>
              {section.noteFr && (
                <p className="text-muted-foreground mt-2 text-xs tracking-[0.25em] uppercase italic">
                  {lang === "fr" ? section.noteFr : section.noteEn}
                </p>
              )}
              <div className="mt-5">
                <Ornament />
              </div>
            </div>

            <ul className="mt-10 space-y-7">
              {section.dishes.map((dish) => (
                <li key={dish.fr} className="group">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-xl font-medium tracking-wide sm:text-2xl">
                      {dish[lang]}
                    </h3>
                    <span
                      className="border-border/70 mb-1 hidden flex-1 border-b border-dotted sm:block"
                      aria-hidden="true"
                    />
                    <span className="text-price ml-auto shrink-0 sm:ml-0">{dish.price}</span>
                  </div>
                  {dish.descFr && (
                    <p className="text-muted-foreground mt-1.5 max-w-xl text-sm leading-relaxed font-light">
                      {lang === "fr" ? dish.descFr : dish.descEn}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            {section.id === "poissons" && (
              <p className="border-primary/40 text-primary mt-12 border-y py-4 text-center text-xs tracking-[0.3em] uppercase">
                {suggestionNote[lang]}
              </p>
            )}
          </section>
        ))}

        <footer className="mt-24 text-center">
          <Ornament />
          <p className="font-display mt-8 text-lg italic sm:text-xl">{garnishNote[lang]}</p>
          <p className="text-muted-foreground mt-4 text-[0.68rem] tracking-[0.28em] uppercase">
            {t.priceNote}
          </p>
          <p className="font-display text-primary mt-10 text-3xl font-light">Mamora</p>
        </footer>
      </main>
    </div>
  );
}
