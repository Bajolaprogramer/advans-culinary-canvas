import { createFileRoute, Link } from "@tanstack/react-router";

import { FEATURES, SITE } from "@/data/site";
import hero from "@/assets/exterior.jpg.asset.json";
import interior2 from "@/assets/interior2.jpg.asset.json";
import interior3 from "@/assets/interior3.jpg.asset.json";
import p3 from "@/assets/p3.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Advans | Family restaurant in Puerto de la Cruz" },
      {
        name: "description",
        content:
          "Family-owned since 2014, Advans blends Canarian gastronomy, Mediterranean flavours and Balkan culinary heritage in Puerto de la Cruz, Tenerife.",
      },
      { property: "og:title", content: "About Advans Cafe Restaurante" },
      {
        property: "og:description",
        content: "A family kitchen keeping almost-forgotten recipes alive since 2014.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative flex h-[52vh] items-center justify-center overflow-hidden">
        <img
          src={hero.url}
          alt="Street view of Advans Cafe Restaurante in Puerto de la Cruz"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-veil)" }} />
        <div className="relative px-5 text-center">
          <p className="overline">Negocio familiar desde {SITE.since}</p>
          <h1 className="mt-5 text-5xl sm:text-6xl text-gold-gradient">Our story</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h2 className="text-4xl sm:text-5xl">
          Traditional recipes, modern techniques, exceptional flavours
        </h2>
        <div className="gold-rule mx-auto my-9 max-w-[140px]" />
        <p className="text-base leading-relaxed text-muted-foreground">
          At Advans we are passionate about keeping culinary traditions alive. We rescue
          almost-forgotten traditional recipes and reinvent them with respect — preserving their
          essence, authentic flavour and presentation — while always using fresh, locally sourced
          ingredients.
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Our cuisine is a unique fusion of Canarian gastronomy, Mediterranean flavours and the rich
          culinary heritage of the Balkans. Every dish reflects our passion for tradition, quality
          and fine craftsmanship. This combination of cultures and flavours is what makes Advans a
          unique dining experience in Puerto de la Cruz and across Tenerife.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 pb-24 md:grid-cols-3">
        {[interior2, p3, interior3].map((img, i) => (
          <img
            key={img.url}
            src={img.url}
            alt={`Inside Advans Cafe Restaurante ${i + 1}`}
            className="h-80 w-full object-cover"
            loading="lazy"
          />
        ))}
      </section>

      <section className="border-y border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="overline">Good to know</p>
          <h2 className="mt-5 text-4xl">What we offer</h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="card-lux px-6 py-5 text-sm tracking-wide text-muted-foreground"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h2 className="text-4xl">Come and taste the story</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/reservations"
            className="bg-gold-gradient px-8 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Reserve a table
          </Link>
          <Link
            to="/menu"
            className="border border-gold/50 px-8 py-4 text-xs uppercase tracking-[0.28em] text-gold transition-colors hover:bg-gold/10"
          >
            Browse the menu
          </Link>
        </div>
      </section>
    </>
  );
}