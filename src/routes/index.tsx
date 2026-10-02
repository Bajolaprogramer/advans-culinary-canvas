import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";

import logo from "@/assets/logo.png.asset.json";

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
import { REVIEWS, SITE } from "@/data/site";
import { useLanguage } from "@/i18n";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "ADVANS Café Restaurante | Restaurante en Puerto de la Cruz",
      },
      {
        name: "description",
        content:
          "ADVANS Café Restaurante en Puerto de la Cruz. Recetas tradicionales, carnes, pescado fresco, cocina casera y especialidades balcánicas.",
      },
      {
        property: "og:title",
        content:
          "ADVANS Café Restaurante | Restaurante en Puerto de la Cruz",
      },
      {
        property: "og:description",
        content:
          "Recetas tradicionales, carnes, pescado fresco, cocina casera y especialidades balcánicas en Puerto de la Cruz.",
      },
      {
        property: "og:type",
        content: "restaurant",
      },
      {
        property: "og:url",
        content: "https://advanstenerife.es/",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://advanstenerife.es/",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(RESTAURANT_SCHEMA),
      },
    ],
  }),
  component: Index,
});

const SIGNATURES = [
  {
    image: "/signatures/signature-1.png",
    name: "Entrecot de novillo",
    nameEs: "Entrecot de novillo",
    desc: "Prime beef entrecôte, grilled over fire, potatoes and garden salad.",
    descEs:
      "Entrecot de ternera de primera calidad, a la parrilla, con patatas y ensalada.",
    price: "€16.80",
  },
  {
    image: "/signatures/signature-4.jpg",
    name: "Fresh sea bass",
    nameEs: "Lubina fresca",
    desc: "Atlantic sea bass fillet with sautéed vegetables.",
    descEs: "Filete de lubina del Atlántico con verduras salteadas.",
    price: "€18.50",
  },
  {
    image:  "/signatures/signature-3.jpg",
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
    image: "signatures/signature-5.jpg",
    name: "Pljeskavica",
    nameEs: "Pljeskavica",
    desc: "200 g Balkan-style burger, cheese, tomato, red onion, lettuce.",
    descEs:
      "Hamburguesa al estilo balcánico de 200 g, con queso, tomate, cebolla roja y lechuga.",
    price: "€12.50",
  },
  {
    image: "signatures/signature-6.jpg",
    name: "Osobuco",
    nameEs: "Osobuco",
    desc: "Cooked in its own juices with polenta, capers and tomato.",
    descEs:
      "Cocinado en su propio jugo con polenta, alcaparras y tomate.",
    price: "€19.50",
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

const REVIEW_TICKER = [
  {
    quote:
      "Advans is definitely one of the best restaurants in Tenerife. Excellent food, especially the Serbian specialties, outstanding pancakes, generous portions and very friendly staff.",
    author: "Lazar Bajić",
  },
  {
    quote:
      "The entrecôte was cooked perfectly and came with tasty potatoes and a fresh salad. The Canarian-style dessert with crêpes, banana and ice cream was the perfect way to finish the meal.",
    author: "Nataliia Kuzkova",
  },
  {
    quote:
      "Very nice! We ate here twice, the staff is very friendly and the food is delicious with generous portions!",
    author: "Miruna Drelciuc",
  },
  {
    quote:
      "Fish soup is excellent, fresh salad also. Sarma is TOP. Pedro, Saša and the team are amazing!",
    author: "Danijela Crnkovic",
  },
  {
    quote:
      "This place is awesome. The owners are super kind and always ready to help and give advice on what to eat. The pancakes are especially interesting to try. 10/10!",
    author: "Anja Pilipovic",
  },
  {
    quote:
      "A great spot for delicious pancakes and crepes. They also offer gluten-free crepes which tasted amazing. Service was great and we were served quickly.",
    author: "Hannah Pickford",
  },
  {
    quote:
      "There was 8 of us and the staff were really helpful and friendly. The goulash was absolutely scrumptious. We all enjoyed our food and the atmosphere.",
    author: "D K Manning",
  },
  {
    quote:
      "I highly recommend this place! The tastiest Balkan food, really big pljeskavica, delicious crepes and very friendly people.",
    author: "Vera Anic",
  },
  {
    quote:
      "Genuinely the best meal of an 8-day trip to Tenerife. The depth of flavour was sublime, and the staff were incredibly friendly and welcoming.",
    author: "Freddie",
  },
  {
    quote:
      "Such a lovely surprise to stumble upon this little corner. Homemade food, flavours from home and so many dishes I'd love to try.",
    author: "Nina I.",
  },
  {
    quote:
      "Super friendly staff. The food is superb. Juicy burgers, traditional Balkan pancakes and everything was perfect. We will definitely come again!",
    author: "Sanja Mašinović",
  },
  {
    quote:
      "Good selection of savoury and sweet crepes, large portions and very friendly service.",
    author: "Nicholle SL Tan",
  },
];

const RESTAURANT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Restaurant",

  "@id": "https://advanstenerife.es/#restaurant",
  url: "https://advanstenerife.es/",

  name: "ADVANS Café Restaurante",

  description:
    "Restaurante en Puerto de la Cruz especializado en recetas tradicionales, cocina casera, carnes, pescado fresco, crepes y especialidades de inspiración balcánica y europea.",

  telephone: "+34 665 03 16 86",

  priceRange: "€10–20",

  servesCuisine: [
    "Canarian",
    "Mediterranean",
    "Balkan",
    "European",
  ],

  address: {
    "@type": "PostalAddress",
    streetAddress: "C. de Cólogan, 3",
    postalCode: "38400",
    addressLocality: "Puerto de la Cruz",
    addressRegion: "Santa Cruz de Tenerife",
    addressCountry: "ES",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.416362,
    longitude: -16.548676,
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "13:00",
      closes: "23:00",
    },
  ],

  menu: "https://advanstenerife.es/menu",
};

function Index() {
  const { t, language } = useLanguage();

  return (


    <>



     <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(RESTAURANT_SCHEMA),
      }}
    />

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="/hero.jpg"
      alt="ADVANS Café Restaurante in Puerto de la Cruz, Tenerife"
      className="slow-zoom h-full w-full object-cover object-center"
    />

    <div className="absolute inset-0 bg-black/25" />

    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.48) 45%, rgba(0,0,0,0.72))",
      }}
    />
  </div>

  <div className="fade-up relative z-10 mx-auto max-w-3xl px-5 text-center">
    <p className="overline mt-8 block">
      Puerto de la Cruz · Tenerife
    </p>

    <h1 className="mt-5 text-5xl leading-[1.05] drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] sm:text-7xl">
      <span className="text-gold-gradient">
        {t("traditionalRecipes")}
      </span>
      <br />
      {t("modernFire")}
    </h1>

    <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
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

      {/* Review ticker */}
<section className="overflow-hidden border-y border-border/60 bg-card/30 py-14">
  <div className="mb-8 text-center">
    <p className="overline">{t("guestWords")}</p>

    <h2 className="mt-4 text-3xl sm:text-4xl">
      {t("lovedPuerto")}
    </h2>
  </div>

  <div className="relative overflow-hidden">
    <div className="review-ticker flex w-max">
      {[...REVIEW_TICKER, ...REVIEW_TICKER].map((review, index) => (
        <article
          key={`${review.author}-${index}`}
          className="mx-3 w-[320px] shrink-0 border border-gold/20 bg-background/70 p-6 sm:w-[420px]"
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className="fill-gold text-gold"
              />
            ))}
          </div>

          <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
            “{review.quote}”
          </blockquote>

          <p className="mt-5 text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground">
            {review.author} · Google Review
          </p>
        </article>
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

{/* SEO content */}
<section className="border-y border-border/60 bg-card/30 py-24">
  <div className="mx-auto max-w-5xl px-5">
    <div className="text-center">
      <p className="overline">ADVANS · Puerto de la Cruz</p>

      <h2 className="mt-5 text-4xl sm:text-5xl">
        Cocina tradicional en Puerto de la Cruz
      </h2>

      <div className="gold-rule mx-auto my-8 max-w-[140px]" />
    </div>

    <div className="space-y-12 text-base leading-relaxed text-muted-foreground">
      <div>
        <h3 className="text-2xl text-foreground">
          Cocina tradicional en Puerto de la Cruz
        </h3>

        <p className="mt-4">
          ADVANS Café Restaurante es un restaurante en Puerto de la Cruz donde
          las recetas tradicionales se combinan con productos de calidad y una
          cocina elaborada con cuidado. Nuestra propuesta gastronómica nace del
          respeto por los sabores de siempre y de la pasión por ofrecer una
          experiencia cercana y auténtica.
        </p>

        <p className="mt-4">
          Descubre una cocina que combina tradición, producto fresco y recetas
          elaboradas con mimo, en un ambiente acogedor en el corazón de Puerto
          de la Cruz.
        </p>
      </div>

      <div>
        <h3 className="text-2xl text-foreground">
          Carnes y platos elaborados
        </h3>

        <p className="mt-4">
          Nuestra carta incluye diferentes opciones de carne preparadas con
          cuidado, desde carnes a la parrilla hasta platos de elaboración
          casera. Seleccionamos cada ingrediente buscando conservar el sabor,
          la textura y la esencia de cada receta.
        </p>
      </div>

      <div>
        <h3 className="text-2xl text-foreground">
          Pescado fresco
        </h3>

        <p className="mt-4">
          El pescado fresco también ocupa un lugar destacado en nuestra cocina.
          Trabajamos recetas sencillas y sabrosas que permiten disfrutar del
          producto y de los sabores mediterráneos en Puerto de la Cruz.
        </p>
      </div>

      <div>
        <h3 className="text-2xl text-foreground">
          Sabores tradicionales de los Balcanes y Europa
        </h3>

        <p className="mt-4">
          La cocina de ADVANS reúne influencias de la gastronomía canaria,
          mediterránea y balcánica. Esta combinación de culturas se refleja en
          platos tradicionales y especialidades europeas que aportan una
          personalidad propia a nuestra carta.
        </p>
      </div>

      <div>
        <h3 className="text-2xl text-foreground">
          Crepes salados y dulces
        </h3>

        <p className="mt-4">
          Los crepes son una de nuestras especialidades. Encontrarás opciones
          saladas y dulces preparadas al momento, ideales tanto para disfrutar
          de una comida como para terminar la experiencia con algo especial.
        </p>
      </div>
    </div>
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
            Open daily, 1:00 PM to 11:00 PM
          </p>

          <Link
            to="/reservations"
            className="mt-10 inline-block bg-gold-gradient px-10 py-4 text-xs uppercase tracking-[0.28em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("bookOnline")}
          </Link>
        </div>
      </section>

      {/* SEO content */}
<section className="border-y border-border/60 bg-card/20 py-24">
  <div className="mx-auto max-w-4xl px-5">

    {language === "es" ? (
      <div className="space-y-14">

        <div>
          <p className="overline">ADVANS Café Restaurante</p>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            ADVANS Café Restaurante es un restaurante en Puerto de la Cruz
            donde las recetas tradicionales se combinan con productos de
            calidad y una cocina elaborada con cuidado.
          </p>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Descubre una propuesta gastronómica que incluye carnes, pescado
            fresco, platos caseros y especialidades de inspiración balcánica
            y europea, en un ambiente acogedor en el corazón de Puerto de la Cruz.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Cocina tradicional en Puerto de la Cruz
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            En ADVANS creemos en el valor de las recetas tradicionales y en
            el sabor de una cocina preparada con mimo. Nuestra carta reúne
            platos elaborados con ingredientes seleccionados, desde sopas y
            recetas caseras hasta carnes, pescado fresco y especialidades de
            inspiración balcánica.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Carnes y platos elaborados
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Disfruta de diferentes propuestas de carne, desde nuestro
            entrecot de novillo hasta platos cocinados lentamente, como el
            goulash y el ossobuco. También encontrarás especialidades como la
            pljeskavica, una receta tradicional de los Balcanes.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Pescado fresco
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Nuestra carta incluye pescado fresco y platos elaborados con
            verduras y acompañamientos seleccionados. Una propuesta sencilla
            y cuidada para disfrutar de los sabores del mar en Puerto de la Cruz.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Sabores tradicionales de los Balcanes y Europa
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Descubre especialidades como la sarma, el goulash, la pljeskavica
            y otras recetas tradicionales inspiradas en la cocina de los
            Balcanes y Europa. Platos con historia, preparados para compartir
            nuestra pasión por la gastronomía.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Crepes salados y dulces
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Nuestra carta también ofrece una selección de crepes salados y
            dulces, preparados con diferentes combinaciones de ingredientes
            para disfrutar en cualquier momento del día.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Visítanos en Puerto de la Cruz
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Ven a disfrutar de ADVANS Café Restaurante en Puerto de la Cruz,
            Tenerife. Consulta nuestra carta, descubre nuestros platos y
            encuentra fácilmente cómo llegar.
          </p>

          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="text-foreground">📍 Dirección:</span>{" "}
              {SITE.addressLine}, {SITE.city}
            </p>

            <p>
              <span className="text-foreground">📞 Teléfono:</span>{" "}
              <a
                href={SITE.phoneHref}
                className="text-gold hover:underline"
              >
                {SITE.phone}
              </a>
            </p>

            <p>
              <span className="text-foreground">🕐 Horario:</span>{" "}
              Lunes – Viernes · 13:00 – 23:00
            </p>

            <p>
              <span className="text-foreground">📍 Cómo llegar:</span>{" "}
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gold hover:underline"
              >
                Google Maps
              </a>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="border border-gold/50 px-7 py-3 text-xs uppercase tracking-[0.24em] text-gold hover:bg-gold/10"
            >
              Ver carta
            </Link>

            <Link
              to="/reservations"
              className="bg-gold-gradient px-7 py-3 text-xs uppercase tracking-[0.24em] text-primary-foreground hover:opacity-90"
            >
              Reservar mesa
            </Link>
          </div>
        </div>

      </div>
    ) : (
      <div className="space-y-14">

        <div>
          <p className="overline">ADVANS Café Restaurante</p>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            ADVANS Café Restaurante is a restaurant in Puerto de la Cruz
            where traditional recipes meet quality ingredients and carefully
            prepared cuisine.
          </p>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Discover a gastronomic proposal including meats, fresh fish,
            homemade dishes and Balkan and European-inspired specialties,
            served in a welcoming atmosphere in the heart of Puerto de la Cruz.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Traditional cuisine in Puerto de la Cruz
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            At ADVANS we believe in the value of traditional recipes and the
            flavour of carefully prepared cuisine. Our menu brings together
            selected ingredients, from soups and homemade recipes to meats,
            fresh fish and Balkan-inspired specialties.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Meat and carefully prepared dishes
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Enjoy different meat dishes, from our beef entrecôte to slow-cooked
            specialties such as goulash and ossobuco. You can also discover
            pljeskavica, a traditional Balkan recipe.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Fresh fish
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Our menu includes fresh fish served with selected vegetables and
            carefully chosen side dishes. A simple and refined way to enjoy
            the flavours of the sea in Puerto de la Cruz.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Traditional Balkan and European flavours
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Discover specialties such as sarma, goulash, pljeskavica and other
            traditional recipes inspired by Balkan and European cuisine.
            Dishes with history, prepared to share our passion for gastronomy.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Savoury and sweet crêpes
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Our menu also features a selection of savoury and sweet crêpes,
            prepared with different combinations of ingredients to enjoy at
            any time of the day.
          </p>
        </div>

        <div>
          <h2 className="text-3xl sm:text-4xl">
            Visit us in Puerto de la Cruz
          </h2>

          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Come and enjoy ADVANS Café Restaurante in Puerto de la Cruz,
            Tenerife. Explore our menu, discover our dishes and easily find
            your way to the restaurant.
          </p>

          <div className="mt-8 space-y-3 text-sm text-muted-foreground">
            <p>
              <span className="text-foreground">📍 Address:</span>{" "}
              {SITE.addressLine}, {SITE.city}
            </p>

            <p>
              <span className="text-foreground">📞 Phone:</span>{" "}
              <a
                href={SITE.phoneHref}
                className="text-gold hover:underline"
              >
                {SITE.phone}
              </a>
            </p>

            <p>
              <span className="text-foreground">🕐 Opening hours:</span>{" "}
              Monday – Friday · 1:00 PM – 11:00 PM
            </p>

            <p>
              <span className="text-foreground">📍 Directions:</span>{" "}
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gold hover:underline"
              >
                Google Maps
              </a>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/menu"
              className="border border-gold/50 px-7 py-3 text-xs uppercase tracking-[0.24em] text-gold hover:bg-gold/10"
            >
              View menu
            </Link>

            <Link
              to="/reservations"
              className="bg-gold-gradient px-7 py-3 text-xs uppercase tracking-[0.24em] text-primary-foreground hover:opacity-90"
            >
              Book a table
            </Link>
          </div>
        </div>

      </div>
    )}

  </div>
</section>


    </>
  );
}