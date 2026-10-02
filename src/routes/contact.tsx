import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Star } from "lucide-react";

import { HOURS, SITE } from "@/data/site";
import hero from "@/assets/night.jpg.asset.json";
import { useLanguage } from "@/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Hours | Advans Cafe Restaurante" },
      {
        name: "description",
        content:
          "Find Advans Cafe Restaurante at Calle Cólogan 3, Puerto de la Cruz. Opening hours, phone +34 665 03 16 86 and directions.",
      },
      {
        property: "og:title",
        content: "Contact Advans Cafe Restaurante",
      },
      {
        property: "og:description",
        content:
          "Calle Cólogan 3, Puerto de la Cruz, Tenerife. Open from 1:00 PM, closed Mondays.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t, language } = useLanguage();

  const translatedDay = (day: string) => {
    if (language === "en") return day;

    const days: Record<string, string> = {
      Monday: "Lunes",
      Tuesday: "Martes",
      Wednesday: "Miércoles",
      Thursday: "Jueves",
      Friday: "Viernes",
      Saturday: "Sábado",
      Sunday: "Domingo",
    };

    return days[day] ?? day;
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[46vh] items-center justify-center overflow-hidden">
        <img
          src={hero.url}
          alt="Advans Cafe Restaurante lit up at night"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-veil)" }}
        />

        <div className="relative px-5 text-center">
          <p className="overline">Puerto de la Cruz</p>

          <h1 className="mt-5 text-5xl text-gold-gradient sm:text-6xl">
            {t("contact")}
          </h1>
        </div>
      </section>

      {/* Contact information */}
      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-24 md:grid-cols-2">
        <div>
          <p className="overline">{t("getInTouch")}</p>

          <h2 className="mt-5 text-4xl">{t("oldTown")}</h2>

          <div className="gold-rule my-8 max-w-[120px]" />

          <ul className="space-y-6 text-sm">
            {/* Address */}
            <li className="flex gap-4">
              <MapPin
                size={18}
                className="mt-1 shrink-0 text-gold"
              />

              <div>
                <p className="text-foreground">
                  {SITE.addressLine}
                </p>

                <p className="text-muted-foreground">
                  {SITE.city}
                </p>

                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 inline-block border-b border-gold/50 pb-0.5 text-[0.65rem] uppercase tracking-[0.24em] text-gold"
                >
                  {t("openMaps")}
                </a>
              </div>
            </li>

            {/* Phone */}
            <li className="flex gap-4">
              <Phone
                size={18}
                className="mt-1 shrink-0 text-gold"
              />

              <a
                href={SITE.phoneHref}
                className="text-foreground hover:text-gold"
              >
                {SITE.phone}
              </a>
            </li>

            {/* Rating */}
            <li className="flex gap-4">
              <Star
                size={18}
                className="mt-1 shrink-0 fill-gold text-gold"
              />

              <span className="text-muted-foreground">
                {SITE.rating} {language === "es" ? "de" : "from"}{" "}
                {SITE.reviews}{" "}
                {language === "es"
                  ? "reseñas de Google"
                  : "Google reviews"}{" "}
                · {SITE.priceRange}{" "}
                {language === "es" ? "por persona" : "per person"}
              </span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/reservations"
              className="bg-gold-gradient px-8 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t("reserveTable")}
            </Link>

            <a
              href={SITE.phoneHref}
              className="border border-gold/50 px-8 py-4 text-xs uppercase tracking-[0.28em] text-gold transition-colors hover:bg-gold/10"
            >
              {t("callUs")}
            </a>
          </div>
        </div>

        {/* Opening hours */}
        <div className="card-lux p-8">
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-gold" />

            <h2 className="text-3xl">
              {t("openingHours")}
            </h2>
          </div>

          <ul className="mt-8 space-y-4 text-sm">
            {HOURS.map((h) => (
              <li
                key={h.day}
                className="flex justify-between gap-6 border-b border-border/30 pb-3 last:border-0"
              >
                <span className="text-muted-foreground">
                  {translatedDay(h.day)}
                </span>

                <span className="text-right text-foreground/90">
                  {h.hours.join(" · ")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <iframe
          title="Map showing Advans Cafe Restaurante, Calle Cólogan 3, Puerto de la Cruz"
          src="https://www.google.com/maps?q=Calle%20Cologan%203,%2038400%20Puerto%20de%20la%20Cruz,%20Tenerife&output=embed"
          className="h-[420px] w-full border border-border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}