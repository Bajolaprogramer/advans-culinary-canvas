import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { supabase } from "@/integrations/supabase/client";
import { HOURS, RESERVATION_TIMES, SITE } from "@/data/site";
import hero from "@/assets/interior2.jpg.asset.json";
import { useLanguage } from "@/i18n";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      {
        title: "Reservar mesa | ADVANS Café Restaurante Puerto de la Cruz",
      },
      {
        name: "description",
        content:
          "Reserva tu mesa online en ADVANS Café Restaurante, en C. de Cólogan, 3, Puerto de la Cruz. Consulta disponibilidad y envía tu solicitud de reserva.",
      },
      {
        property: "og:title",
        content: "Reservar mesa | ADVANS Café Restaurante",
      },
      {
        property: "og:description",
        content:
          "Reserva online en ADVANS Café Restaurante en Puerto de la Cruz, Tenerife.",
      },
      {
        property: "og:type",
        content: "restaurant",
      },
      {
        property: "og:url",
        content: "https://advanstenerife.es/reservations",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://advanstenerife.es/reservations",
      },
    ],
  }),
  component: ReservationsPage,
});

const today = () => new Date().toISOString().slice(0, 10);

function ReservationsPage() {
  const { t, language } = useLanguage();

  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    party_size: "2",
    reservation_date: today(),
    reservation_time: "20:00",
    notes: "",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);

    const { error } = await supabase.from("reservations").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      party_size: Number(form.party_size),
      reservation_date: form.reservation_date,
      reservation_time: form.reservation_time,
      notes: form.notes.trim() || null,
    });

    setSubmitting(false);

    if (error) {
      toast.error(t("reservationError"));
      return;
    }

    setDone(true);
    toast.success(t("reservationSuccess"));
  }

  const field =
    "w-full border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold";

  const label =
    "block text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground";

  const translatedDay = (day: string) => day;

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[44vh] items-center justify-center overflow-hidden">
        <img
          src={hero.url}
          alt="Table set for dinner at Advans Cafe Restaurante"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ backgroundImage: "var(--gradient-veil)" }}
        />

        <div className="relative px-5 text-center">
          <p className="overline">{t("onlineBooking")}</p>

          <h1 className="mt-5 text-5xl text-gold-gradient sm:text-6xl">
            {t("reserveTable")}
          </h1>
        </div>
      </section>

      {/* Reservation section */}
      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-24 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="card-lux p-8 sm:p-10">
          {done ? (
            <div className="py-16 text-center">
              <h2 className="text-4xl text-gold-gradient">
                {t("thankYou")}
              </h2>

              <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                {language === "es"
                  ? `Hemos recibido tu solicitud para ${form.party_size} ${
                      Number(form.party_size) === 1 ? "persona" : "personas"
                    } el ${form.reservation_date} a las ${
                      form.reservation_time
                    }. Te confirmaremos por correo electrónico o teléfono en breve. Para reservas del mismo día, llama al ${SITE.phone}.`
                  : `Your request for ${form.party_size} ${
                      Number(form.party_size) === 1 ? "guest" : "guests"
                    } on ${form.reservation_date} at ${
                      form.reservation_time
                    } has been received. We will confirm by email or phone shortly. For same-day bookings please call ${SITE.phone}.`}
              </p>

              <button
                type="button"
                onClick={() => setDone(false)}
                className="mt-10 border border-gold/50 px-8 py-4 text-xs uppercase tracking-[0.28em] text-gold transition-colors hover:bg-gold/10"
              >
                {t("makeAnother")}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className={label} htmlFor="name">
                    {t("name")}
                  </label>

                  <input
                    id="name"
                    required
                    maxLength={120}
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={`${field} mt-3`}
                    placeholder={
                      language === "es"
                        ? "Tu nombre completo"
                        : "Your full name"
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={label} htmlFor="email">
                    {t("email")}
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={200}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={`${field} mt-3`}
                    placeholder="you@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className={label} htmlFor="phone">
                    {t("phoneOptional")}
                  </label>

                  <input
                    id="phone"
                    maxLength={40}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={`${field} mt-3`}
                    placeholder="+34 ..."
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className={label} htmlFor="party">
                    {t("guests")}
                  </label>

                  <select
                    id="party"
                    value={form.party_size}
                    onChange={(e) =>
                      update("party_size", e.target.value)
                    }
                    className={`${field} mt-3`}
                  >
                    {Array.from({ length: 12 }).map((_, i) => (
                      <option key={i + 1} value={String(i + 1)}>
                        {i + 1}{" "}
                        {i === 0
                          ? t("guest")
                          : t("guestsPlural")}
                      </option>
                    ))}

                    <option value="15">{t("group")}</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className={label} htmlFor="date">
                    {t("date")}
                  </label>

                  <input
                    id="date"
                    type="date"
                    required
                    min={today()}
                    value={form.reservation_date}
                    onChange={(e) =>
                      update("reservation_date", e.target.value)
                    }
                    className={`${field} mt-3`}
                  />
                </div>

                {/* Time */}
                <div>
                  <label className={label} htmlFor="time">
                    {t("time")}
                  </label>

                  <select
                    id="time"
                    value={form.reservation_time}
                    onChange={(e) =>
                      update("reservation_time", e.target.value)
                    }
                    className={`${field} mt-3`}
                  >
                    {RESERVATION_TIMES.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special requests */}
              <div>
                <label className={label} htmlFor="notes">
                  {t("specialRequests")}
                </label>

                <textarea
                  id="notes"
                  rows={4}
                  maxLength={1000}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className={`${field} mt-3 resize-none`}
                  placeholder={
                    language === "es"
                      ? "Alergias, celebraciones, mesa en la terraza…"
                      : "Allergies, celebrations, terrace seating…"
                  }
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gold-gradient py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {submitting
                  ? t("sending")
                  : t("requestReservation")}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                {t("sameDay")} {SITE.phone}.
              </p>
            </form>
          )}
        </div>

        {/* Service hours */}
        <aside>
          <p className="overline">{t("serviceHours")}</p>

          <h2 className="mt-5 text-3xl">
            {t("whenToJoin")}
          </h2>

          <ul className="mt-8 space-y-4 text-sm">
            {HOURS.map((h) => (
              <li
                key={h.day}
                className="flex justify-between gap-6 border-b border-border/50 pb-3 last:border-0"
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

          <div className="gold-rule my-10" />

          <p className="text-sm leading-relaxed text-muted-foreground">
            {SITE.addressLine}, {SITE.city}
          </p>

          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-4 inline-block border-b border-gold/50 pb-0.5 text-[0.65rem] uppercase tracking-[0.24em] text-gold"
          >
            {language === "es" ? "Cómo llegar" : "Get directions"}
          </a>
        </aside>
      </section>
    </>
  );
}