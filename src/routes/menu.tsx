import { createFileRoute } from "@tanstack/react-router";

import { MENU } from "@/data/menu";
import hero from "@/assets/a1.jpg.asset.json";
import { useLanguage } from "@/i18n";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      {
        title: "Menú | ADVANS Café Restaurante Puerto de la Cruz",
      },
      {
        name: "description",
        content:
          "Descubre el menú de ADVANS Café Restaurante en Puerto de la Cruz: carnes, pescado fresco, platos caseros, especialidades balcánicas y crepes.",
      },
      {
        property: "og:title",
        content: "Menú | ADVANS Café Restaurante",
      },
      {
        property: "og:description",
        content:
          "Carnes, pescado fresco, cocina casera, especialidades balcánicas y crepes en Puerto de la Cruz.",
      },
      {
        property: "og:type",
        content: "restaurant.menu",
      },
      {
        property: "og:url",
        content: "https://advanstenerife.es/menu",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://advanstenerife.es/menu",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { t, language } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[46vh] items-center justify-center overflow-hidden">
        <img
          src={hero.url}
          alt="Dishes served at Advans Cafe Restaurante"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-veil)" }}
        />

        <div className="relative text-center">
          <p className="overline">
            {t("menuUpdated")}
          </p>

          <h1 className="mt-5 text-5xl sm:text-6xl text-gold-gradient">
            La Carta
          </h1>
        </div>
      </section>

      {/* Categories */}
      <nav className="border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-4">
          {MENU.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gold"
            >
              {language === "es" && section.titleEs
                ? section.titleEs
                : section.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Menu */}
      <div className="mx-auto max-w-4xl px-5 py-20">
        {MENU.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-32 pb-20"
          >
            <header className="text-center">
              <h2 className="text-4xl sm:text-5xl">
                {language === "es" && section.titleEs
                  ? section.titleEs
                  : section.title}
              </h2>

              <p className="mt-3 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
                {language === "es" && section.subtitleEs
                  ? section.subtitleEs
                  : section.subtitle}
              </p>

              {section.note && (
                <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
                  {language === "es" && section.noteEs
                    ? section.noteEs
                    : section.note}
                </p>
              )}

              <div className="gold-rule mx-auto mt-7 max-w-[120px]" />
            </header>

            <ul className="mt-10 space-y-8">
              {section.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-xl text-foreground">
                      {language === "es" && item.nameEs
                        ? item.nameEs
                        : item.name}
                    </h3>

                    <span className="h-px flex-1 bg-border" />

                    <span className="font-display text-xl text-gold">
                      {item.price}
                    </span>
                  </div>

                  {item.desc && (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {language === "es" && item.descEs
                        ? item.descEs
                        : item.desc}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}

        
      </div>
    </>
  );
}