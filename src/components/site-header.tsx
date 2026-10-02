import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { SITE } from "@/data/site";
import { useLanguage } from "@/i18n";

const NAV = [
  { to: "/", key: "home" },
  { to: "/menu", key: "menu" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
] as const;

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="Advans Cafe Restaurante logo"
            className="h-12 w-12 rounded-full"
            width={48}
            height={48}
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-xl tracking-[0.3em] text-gold">ADVANS</span>
            <span className="mt-1 text-[0.6rem] tracking-[0.34em] text-muted-foreground">
              RESTAURANTE
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
  <Link
    key={item.to}
    to={item.to}
    className="text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gold [&.active]:text-gold"
  >
    {t(item.key)}
  </Link>
))}
          <Link
            to="/reservations"
            className="border border-gold/60 px-5 py-2.5 text-xs uppercase tracking-[0.24em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            Reserve
          </Link>
        </nav>

        <button
  type="button"
  onClick={() => setLanguage(language === "en" ? "es" : "en")}
  aria-label={language === "en" ? "Cambiar a español" : "Switch to English"}
  title={language === "en" ? "Español" : "English"}
  className="ml-2 text-lg leading-none transition-transform hover:scale-110"
>
  {language === "en" ? "🇪🇸" : "🇬🇧"}
</button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV.map((item) => (
  <Link
    key={item.to}
    to={item.to}
    className="text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gold [&.active]:text-gold"
  >
    {t(item.key)}
  </Link>
))}
            <a
              href={SITE.phoneHref}
              className="py-3 text-sm uppercase tracking-[0.22em] text-gold"
            >
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}