import { createFileRoute } from "@tanstack/react-router";

import { MENU } from "@/data/menu";
import hero from "@/assets/a1.jpg.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Advans Cafe Restaurante Tenerife" },
      {
        name: "description",
        content:
          "Starters, soups, grilled mains, the Pljeskavica house burger and famous savoury and sweet crêpes — the full Advans menu in Puerto de la Cruz.",
      },
      { property: "og:title", content: "Menu | Advans Cafe Restaurante" },
      {
        property: "og:description",
        content: "Canarian, Mediterranean and Balkan dishes, crêpes and grill. €10–20 per person.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <section className="relative flex h-[46vh] items-center justify-center overflow-hidden">
        <img
          src={hero.url}
          alt="Dishes served at Advans Cafe Restaurante"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-veil)" }} />
        <div className="relative text-center">
          <p className="overline">Menu updated July 2026</p>
          <h1 className="mt-5 text-5xl sm:text-6xl text-gold-gradient">La Carta</h1>
        </div>
      </section>

      <nav className="border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-4">
          {MENU.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gold"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-5 py-20">
        {MENU.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-32 pb-20">
            <header className="text-center">
              <h2 className="text-4xl sm:text-5xl">{section.title}</h2>
              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
                {section.subtitle}
              </p>
              {section.note && (
                <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">{section.note}</p>
              )}
              <div className="gold-rule mx-auto mt-7 max-w-[120px]" />
            </header>

            <ul className="mt-10 space-y-8">
              {section.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-xl text-foreground">{item.name}</h3>
                    <span className="h-px flex-1 bg-border" />
                    <span className="font-display text-xl text-gold">{item.price}</span>
                  </div>
                  {item.desc && (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="text-center text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Vegetarian, vegan and gluten-free options available — please ask our team.
        </p>
      </div>
    </>
  );
}