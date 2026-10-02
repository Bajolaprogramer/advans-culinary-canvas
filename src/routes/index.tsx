import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import night from "@/assets/night.jpg.asset.json";
import entrecot from "@/assets/entrecot.jpg.asset.json";
import lubina from "@/assets/lubina.jpg.asset.json";
import pollo from "@/assets/pollo.jpg.asset.json";
import carne from "@/assets/carne.jpg.asset.json";
import burger from "@/assets/burger.jpg.asset.json";
import fav from "@/assets/fav.jpg.asset.json";
import interior1 from "@/assets/interior1.jpg.asset.json";
import interior2 from "@/assets/interior2.jpg.asset.json";
import interior3 from "@/assets/interior3.jpg.asset.json";
import dia from "@/assets/dia.jpg.asset.json";
import p1 from "@/assets/p1.jpg.asset.json";
import p2 from "@/assets/p2.jpg.asset.json";
import c1 from "@/assets/c1.jpg.asset.json";
import video from "@/assets/video.mp4.asset.json";
import { REVIEWS, SITE } from "@/data/site";
import { useLanguage } from "@/i18n";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Advans Cafe Restaurante — Puerto de la Cruz, Tenerife",
      },
      {
        name: "description",
        content:
          "Canarian, Mediterranean and Balkan cuisine in Puerto de la Cruz. Grill, slow-cooked classics and famous crêpes. Reserve your table at Advans.",
      },
      {
        property: "og:title",
        content: "Advans Cafe Restaurante — Puerto de la Cruz",
      },
      {
        property: "og:description",
        content:
          "Traditional recipes, modern techniques, exceptional flavours. Family-run since 2014.",
      },
    ],
  }),
  component: Index,
});

const SIGNATURES = [
  {
    image: entrecot.url,
    name: "Entrecot de novillo",
    nameEs: "Entrecot de novillo",
    desc: "Prime beef entrecôte, grilled over fire, potatoes and garden salad.",
    descEs:
      "Entrecot de ternera de primera calidad, a la parrilla, con patatas y ensalada.",
    price: "€16.80",
  },
  {
    image: lubina.url,
    name: "Fresh sea bass",
    nameEs: "Lubina fresca",
    desc: "Atlantic sea bass fillet with sautéed vegetables.",
    descEs: "Filete de lubina del Atlántico con verduras salteadas.",
    price: "€18.50",
  },
  {
    image: pollo.url,
    name: "Chicken breast",
    nameEs: "Pechuga de pollo",
    desc: "Chicken breast, homemade mushroom sauce, sautéed potatoes.",
    descEs:
      "Pechuga de pollo, salsa casera de champiñones y patatas salteadas.",
    price: "€13.80",
  },
  {
    image: carne.url,
    name: "Local meat with sauce",
    nameEs: "Carne nacional con salsa",
    desc: "Local meat slow-finished in its own rich sauce.",
    descEs:
      "Carne nacional cocinada lentamente en su propia salsa rica y sabrosa.",
    price: "€13.80",
  },
  {
    image: burger.url,
    name: "Pljeskavica",
    nameEs: "Pljeskavica",
    desc: "200 g Balkan-style burger, cheese, tomato, red onion, lettuce.",
    descEs:
      "Hamburguesa al estilo balcánico de 200 g, con queso, tomate, cebolla roja y lechuga.",
    price: "€12.50",
  },
  {
    image: fav.url,
    name: "House crêpes",
    nameEs: "Crepés de la casa",
    desc: "Savoury and sweet crêpes — the reason guests keep coming back.",
    descEs:
      "Crepés salados y dulces — la razón por la que nuestros clientes siempre vuelven.",
    price: "from €5.50",
  },
];

const GALLERY = [
  { url: "/gallery/gallery-1.jpg" },
  { url: "/gallery/gallery-2.jpg" },
  { url: "/gallery/gallery-3.jpg" },
  { url: "/gallery/gallery-4.jpg" },
  { url: "/gallery/gallery-5.jpg" },
  { url: "/gallery/gallery-6.jpg" },
  { url: "/gallery/gallery-7.jpg" },
  { url: "/gallery/gallery-8.jpg" },
  { url: "/gallery/gallery-9.jpg" },
  { url: "/gallery/gallery-11.jpg" },
  { url: "/gallery/gallery-10.jpg" },
  { url: "/gallery/gallery-12.jpg" },
];

function Index() {
  const { t, language } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={night.url}
            alt="Advans Cafe Restaurante at night beside the church tower in Puerto de la Cruz"
            className="slow-zoom h-full w-full object-cover"
          />

          <div
            className="absolute inset-0"
            style={{ backgroundImage: "var(--gradient-veil)" }}
          />
        </div>

        <div className="fade-up relative z-10 mx-auto max-w-3xl px-5 text-center">
          

          <p className="overline mt-8 block">
            Puerto de la Cruz · Tenerife
          </p>

          <h1 className="mt-5 text-5xl leading-[1.05] sm:text-7xl">
            <span className="text-gold-gradient">
              {t("traditionalRecipes")}
            </span>
            <br />
            {t("modernFire")}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t("familyKitchen")}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/reservations"
              className="bg-gold-gradient px-8 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("reserveTable")}
            </Link>

            <Link
              to="/menu"
              className="border border-gold/50 px-8 py-4 text-xs uppercase tracking-[0.28em] text-gold transition-colors hover:bg-gold/10"
            >
              {t("viewMenu")}
            </Link>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Star size={14} className="fill-gold text-gold" />
            {SITE.rating} · {SITE.reviews}{" "}
            {language === "es" ? "reseñas de Google" : "Google reviews"} ·{" "}
            {SITE.priceRange}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="overline">
              {t("since")} {SITE.since}
            </p>

            <h2 className="mt-5 text-4xl sm:text-5xl">
              {t("familyTable")}
            </h2>

            <div className="gold-rule my-8 max-w-[140px]" />

            <p className="text-base leading-relaxed text-muted-foreground">
              {t("story1")}
            </p>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {t("story2")}
            </p>

            <Link
              to="/about"
              className="mt-9 inline-block border-b border-gold/60 pb-1 text-xs uppercase tracking-[0.28em] text-gold"
            >
              {t("ourStory")}
            </Link>
          </div>

          <div className="relative">
            <img
              src={interior3.url}
              alt="Dining room of Advans Cafe Restaurante"
              className="h-[520px] w-full object-cover"
              loading="lazy"
            />

            <div className="absolute -bottom-6 -left-6 hidden card-lux px-8 py-6 sm:block">
              <p className="font-display text-4xl text-gold">
                {SITE.rating}
              </p>

              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                {SITE.reviews}{" "}
                {language === "es" ? "reseñas" : "reviews"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="border-y border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="overline">{t("fromKitchen")}</p>

            <h2 className="mt-5 text-4xl sm:text-5xl">
              {t("signaturePlates")}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SIGNATURES.map((dish) => (
              <article
                key={dish.name}
                className="group card-lux overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={dish.image}
                    alt={
                      language === "es" && dish.nameEs
                        ? dish.nameEs
                        : dish.name
                    }
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl">
                      {language === "es" && dish.nameEs
                        ? dish.nameEs
                        : dish.name}
                    </h3>

                    <span className="text-sm text-gold">
                      {dish.price}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {language === "es" && dish.descEs
                      ? dish.descEs
                      : dish.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/menu"
              className="border border-gold/50 px-8 py-4 text-xs uppercase tracking-[0.28em] text-gold transition-colors hover:bg-gold/10"
            >
              {t("fullMenu")}
            </Link>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="relative overflow-hidden">
          <video
            src={video.url}
            className="h-[60vh] w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />

          <div
            className="pointer-events-none absolute inset-0 flex items-end justify-center pb-12"
            style={{ backgroundImage: "var(--gradient-veil)" }}
          >
            
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <p className="overline">{t("guestWords")}</p>

            <h2 className="mt-5 text-4xl sm:text-5xl">
              {t("lovedPuerto")}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.quote} className="card-lux p-8">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                <blockquote className="mt-5 font-display text-xl leading-relaxed text-foreground/90">
                  “{r.quote}”
                </blockquote>

                <figcaption className="mt-6 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
                  {r.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="text-center">
          <p className="overline">{t("thePlace")}</p>

          <h2 className="mt-5 text-4xl sm:text-5xl">
            {t("moments")}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map((img, i) => (
            <img
              key={img.url}
              src={img.url}
              alt={`Advans Cafe Restaurante impression ${i + 1}`}
              className="aspect-[4/5] w-full border border-gold/35 bg-card p-1 object-cover shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition duration-500 hover:scale-[1.02] hover:border-gold/70"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <img
          src={dia.url}
          alt="Terrace of Advans Cafe Restaurante on a sunny day"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-veil)" }}
        />

        <div className="relative mx-auto max-w-2xl px-5 text-center">
          <h2 className="text-4xl sm:text-5xl">
            {t("yourTable")}
          </h2>

          <p className="mt-5 text-base text-muted-foreground">
            {SITE.addressLine}, {SITE.city} ·{" "}
            {language === "es" ? "Cerrado los lunes" : "Closed Mondays"}
          </p>

          <Link
            to="/reservations"
            className="mt-10 inline-block bg-gold-gradient px-10 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("bookOnline")}
          </Link>
        </div>
      </section>
    </>
  );
}