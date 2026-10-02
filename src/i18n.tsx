import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "es";

const translations = {
  en: {
    home: "Home",
    menu: "Menu",
    about: "About",
    contact: "Contact",
    reserve: "Reserve",
    reserveTable: "Reserve a table",
    viewMenu: "View the menu",
    browseMenu: "Browse the menu",

    traditionalRecipes: "Traditional recipes,",
    modernFire: "Exceptional taste",

    familyKitchen:
      "A family kitchen rescuing almost-forgotten dishes and serving them with fresh, locally sourced ingredients.",

    since: "Since",
    familyTable: "A family table in Puerto de la Cruz",

    story1:
  "Family-owned business since 2014. Traditional recipes, modern techniques, exceptional flavors. At Advans, we are passionate about keeping culinary traditions alive. We rescue almost-forgotten traditional recipes and reinvent them with respect, preserving their essence, authentic flavor, and presentation, while always using fresh, locally sourced ingredients.",

story2:
  "Our cuisine is a unique fusion of Canarian gastronomy, Mediterranean flavors, and the rich culinary heritage of the Balkans. Every dish reflects our passion for tradition, quality, and fine craftsmanship. This combination of cultures and flavors makes Advans a unique dining experience in Puerto de la Cruz and Tenerife.",

    ourStory: "Our story",

    fromKitchen: "From the kitchen",
    signaturePlates: "Signature plates",
    fullMenu: "See the full menu",

    guestWords: "Guest words",
    lovedPuerto: "Loved in Puerto de la Cruz",

    thePlace: "The place",
    moments: "Moments at Advans",

    yourTable: "Your table is waiting",
    bookOnline: "Book online",

    menuUpdated: "Menu updated July 2026",

    

    goodToKnow: "Good to know",
    whatWeOffer: "What we offer",
    comeTaste: "Come and taste the story",

    getInTouch: "Get in touch",
    oldTown: "We are on the old town square",
    openMaps: "Open in maps",
    callUs: "Call us",
    openingHours: "Opening hours",

    onlineBooking: "Online booking",
    thankYou: "Thank you",
    makeAnother: "Make another booking",

    name: "Name",
    email: "Email",
    phone: "Phone",
    phoneOptional: "Phone (optional)",
    guests: "Guests",
    date: "Date",
    time: "Time",
    specialRequests: "Special requests (optional)",
    sending: "Sending…",
    requestReservation: "Request reservation",

    serviceHours: "Service hours",
    whenToJoin: "When to join us",

    closeMondays: "Open daily, 1:00 PM to 11:00 PM",

    reservationError:
      "We couldn't send your request. Please call us instead.",

    reservationSuccess:
      "Reservation request received — we'll confirm shortly.",

    sameDay:
      "Requests are confirmed by our team. Same-day booking? Call",

    guest: "guest",
    guestsPlural: "guests",
    group: "More than 12 (group)",

    english: "English",
    spanish: "Español",
  },

  es: {
    home: "Inicio",
    menu: "Menú",
    about: "Nosotros",
    contact: "Contacto",
    reserve: "Reservar",
    reserveTable: "Reservar una mesa",
    viewMenu: "Ver el menú",
    browseMenu: "Ver el menú",

    traditionalRecipes: "Recetas tradicionales,",
    modernFire: "Sabores excepcionales",

    familyKitchen:
      "Una cocina familiar que recupera platos casi olvidados y los sirve con ingredientes frescos y de proximidad.",

    since: "Desde",
    familyTable: "Una mesa familiar en Puerto de la Cruz",

    story1:
  "Negocio familiar desde 2014. Recetas tradicionales, técnicas modernas y sabores excepcionales. En Advans nos apasiona mantener vivas las tradiciones culinarias. Recuperamos recetas tradicionales casi olvidadas y las reinventamos con respeto, conservando su esencia, sabor auténtico y presentación, mientras utilizamos siempre ingredientes frescos y de proximidad.",

story2:
  "Nuestra cocina es una fusión única de gastronomía canaria, sabores mediterráneos y la rica tradición culinaria de los Balcanes. Cada plato refleja nuestra pasión por la tradición, la calidad y la artesanía culinaria. Esta combinación de culturas y sabores convierte a Advans en una experiencia gastronómica única en Puerto de la Cruz y Tenerife.",

    ourStory: "Nuestra historia",

    fromKitchen: "De nuestra cocina",
    signaturePlates: "Platos destacados",
    fullMenu: "Ver el menú completo",

    guestWords: "Opiniones de nuestros clientes",
    lovedPuerto: "Un lugar querido en Puerto de la Cruz",

    thePlace: "El lugar",
    moments: "Momentos en Advans",

    yourTable: "Tu mesa te espera",
    bookOnline: "Reservar online",

    menuUpdated: "Menú actualizado en julio de 2026",

    

    goodToKnow: "Información",
    whatWeOffer: "Lo que ofrecemos",
    comeTaste: "Ven a descubrir nuestra historia",

    getInTouch: "Ponte en contacto",
    oldTown: "Estamos en la plaza del casco antiguo",
    openMaps: "Abrir en mapas",
    callUs: "Llámanos",
    openingHours: "Horario de apertura",

    onlineBooking: "Reserva online",
    thankYou: "Gracias",
    makeAnother: "Hacer otra reserva",

    name: "Nombre",
    email: "Correo electrónico",
    phone: "Teléfono",
    phoneOptional: "Teléfono (opcional)",
    guests: "Comensales",
    date: "Fecha",
    time: "Hora",
    specialRequests: "Peticiones especiales (opcional)",
    sending: "Enviando…",
    requestReservation: "Solicitar reserva",

    serviceHours: "Horario de servicio",
    whenToJoin: "Cuándo visitarnos",

    closeMondays: "Abierto todos los dias, 13:00 a 23:00",

    reservationError:
      "No hemos podido enviar tu solicitud. Llámanos directamente.",

    reservationSuccess:
      "Hemos recibido tu solicitud de reserva. Te confirmaremos en breve.",

    sameDay:
      "Las reservas son confirmadas por nuestro equipo. ¿Reserva para hoy? Llámanos al",

    guest: "persona",
    guestsPlural: "personas",
    group: "Más de 12 personas (grupo)",

    english: "English",
    spanish: "Español",
  },
};

type TranslationKey = keyof typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    return localStorage.getItem("advans-language") === "es"
      ? "es"
      : "en";
  });

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem("advans-language", newLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: TranslationKey) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}