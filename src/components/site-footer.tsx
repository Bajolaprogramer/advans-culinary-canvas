import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import { HOURS, SITE } from "@/data/site";
import { useLanguage } from "@/i18n";

export function SiteFooter() {
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
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3">
        {/* About */}
        <div>
          <img
            src={logo.url}
            alt="Advans Cafe Restaurante emblem"
            className="h-20 w-20 rounded-full"
            width={80}
            height={80}
            loading="lazy"
          />

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
           {language === "es" ? SITE.taglineEs : SITE.tagline}{" "}
{language === "es"
  ? `Una cocina familiar en el corazón de Puerto de la Cruz desde ${SITE.since}.`
  : `A family kitchen in the heart of Puerto de la Cruz since ${SITE.since}.`}
          </p>

          <div className="mt-6 flex gap-5">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Find us */}
        <div>
          <h3 className="overline">
            {language === "es" ? "Dónde estamos" : "Find us"}
          </h3>

          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-gold"
              />

              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-gold"
              >
                {SITE.addressLine}
                <br />
                {SITE.city}
              </a>
            </li>

            <li className="flex gap-3">
              <Phone
                size={16}
                className="mt-0.5 shrink-0 text-gold"
              />

              <a
                href={SITE.phoneHref}
                className="hover:text-gold"
              >
                {SITE.phone}
              </a>
            </li>

            <li className="flex gap-3">
              <Clock
                size={16}
                className="mt-0.5 shrink-0 text-gold"
              />

              <span>
                {language === "es"
                  ? "Cerrado los lunes · Abierto desde las 13:00"
                  : "Closed Mondays · Open from 1:00 PM"}
              </span>
            </li>
          </ul>

          <Link
            to="/reservations"
            className="mt-7 inline-block border border-gold/60 px-6 py-3 text-xs uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            {t("reserveTable")}
          </Link>
        </div>

        {/* Opening hours */}
        <div>
          <h3 className="overline">
            {t("openingHours")}
          </h3>

          <ul className="mt-5 space-y-2.5 text-sm">
            {HOURS.map((h) => (
              <li
                key={h.day}
                className="flex justify-between gap-4 text-muted-foreground"
              >
                <span>{translatedDay(h.day)}</span>

                <span className="text-right text-foreground/80">
                  {h.hours.join(" · ")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/50 py-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
        © {new Date().getFullYear()} {SITE.name}
      </div>
    </footer>
  );
}