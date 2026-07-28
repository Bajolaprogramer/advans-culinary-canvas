import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { HOURS, SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-3">
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
            {SITE.tagline} A family kitchen in the heart of Puerto de la Cruz since {SITE.since}.
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

        <div>
          <h3 className="overline">Find us</h3>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer noopener" className="hover:text-gold">
                {SITE.addressLine}
                <br />
                {SITE.city}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
              <a href={SITE.phoneHref} className="hover:text-gold">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>Closed Mondays · Open from 1:00 PM</span>
            </li>
          </ul>
          <Link
            to="/reservations"
            className="mt-7 inline-block border border-gold/60 px-6 py-3 text-xs uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Reserve a table
          </Link>
        </div>

        <div>
          <h3 className="overline">Opening hours</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-4 text-muted-foreground">
                <span>{h.day}</span>
                <span className="text-right text-foreground/80">{h.hours.join(" · ")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 py-6 text-center text-xs tracking-[0.18em] text-muted-foreground uppercase">
        © {new Date().getFullYear()} {SITE.name}
      </div>
    </footer>
  );
}