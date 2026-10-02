export type Dish = {
  name: string;
  nameEs?: string;
  price: string;
  desc?: string;
  descEs?: string;
  image?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  titleEs?: string;
  subtitle: string;
  subtitleEs?: string;
  note?: string;
  noteEs?: string;
  items: Dish[];
};

export const MENU: MenuSection[] = [
  {
    id: "entrantes",
    title: "Starters",
    titleEs: "Entrantes",
    subtitle: "Starters · Vorspeisen",
    subtitleEs: "Entrantes",
    items: [
      {
        name: "Ensalada verde con espinacas y nueces",
        nameEs: "Ensalada verde con espinacas y nueces",
        price: "€8.50",
        desc: "Green leaf salad with passion fruit vinaigrette, fresh spinach and toasted walnuts.",
        descEs:
          "Ensalada de hojas verdes con vinagreta de maracuyá, espinacas frescas y nueces tostadas.",
      },
      {
        name: "Pate artesanal, de anchovias y aceitunas negras",
        nameEs: "Pate artesanal, de anchovias y aceitunas negras",
        price: "€8.50",
        desc: "House-made black olive pâté with anchovies, capers, extra virgin olive oil and garlic.",
        descEs:
          "Paté casero de aceitunas negras con anchoas, alcaparras, aceite de oliva virgen extra y ajo.",
      },
      {
        name: "Queso blanco canario",
        nameEs: "Queso blanco canario",
        price: "€8.50",
        desc: "Artisanal Canarian fresh cheese with tomatoes, extra virgin olive oil and fresh parsley.",
        descEs:
          "Queso fresco canario artesanal con tomates, aceite de oliva virgen extra y perejil fresco.",
      },
      {
        name: "Tapa de jamón ibérico",
        nameEs: "Tapa de jamón ibérico",
        price: "€11.50",
        desc: "Iberian cured ham, hand carved.",
        descEs: "Jamón ibérico cortado a mano.",
      },
    ],
  },

  {
    id: "sopas",
    title: "Soup of the day",
    titleEs: "Sopa del día",
    subtitle: "Soup of the day · Suppe des Tages",
    subtitleEs: "Sopa del día",
    items: [
      {
        name: "Caldo casero con pollo y verduras",
        nameEs: "Caldo casero con pollo y verduras",
        price: "€7.20",
        desc: "Homemade chicken broth with vegetables — colour, flavour and balanced nourishment.",
        descEs:
          "Caldo casero de pollo con verduras — color, sabor y una alimentación equilibrada.",
      },
      {
        name: "Crema de verduras",
        nameEs: "Crema de verduras",
        price: "€7.20",
        desc: "Smooth, aromatic vegetable cream made with fresh market ingredients.",
        descEs:
          "Suave y aromática crema de verduras elaborada con ingredientes frescos del mercado.",
      },
      {
        name: "Buillabesa",
        nameEs: "Buillabesa",
        price: "€8.50",
        desc: "Fragrant seafood soup prepared with fresh shellfish in a rich, flavourful broth.",
        descEs:
          "Aromática sopa de marisco preparada con mariscos frescos en un caldo rico y sabroso.",
      },
    ],
  },

  {
    id: "platos",
    title: "Main courses",
    titleEs: "Platos",
    subtitle: "Main courses",
    subtitleEs: "Platos principales",
    note: "Traditional recipes, modern techniques, exceptional taste.",
    noteEs:
      "Recetas tradicionales, técnicas modernas y sabores excepcionales.",
    items: [
      {
        name: "Keskek",
        nameEs: "Keskek",
        price: "€8.50",
        desc: "UNESCO-protected home dish. Shredded chicken with pearl barley, slow cooked for hours until tender and juicy.",
        descEs:
          "Plato tradicional protegido por la UNESCO. Pollo desmenuzado con cebada perlada, cocinado lentamente durante horas hasta quedar tierno y jugoso.",
      },
      {
        name: "Lubina con verduras salteadas",
        nameEs: "Lubina con verduras salteadas",
        price: "€18.50",
        desc: "Sea bass fillet with sautéed vegetables.",
        descEs: "Filete de lubina con verduras salteadas.",
      },
      {
        name: "Pechuga de pollo con salsa de champiñones",
        nameEs: "Pechuga de pollo con salsa de champiñones",
        price: "€13.80",
        desc: "Chicken breast with homemade mushroom sauce and sautéed potatoes.",
        descEs:
          "Pechuga de pollo con salsa casera de champiñones y patatas salteadas.",
      },
      {
        name: "Aguja de cerdo ibérico",
        nameEs: "Aguja de cerdo ibérico",
        price: "€13.80",
        desc: "Iberian pork neck with sautéed vegetables.",
        descEs: "Aguja de cerdo ibérico con verduras salteadas.",
      },
      {
        name: "Sarma",
        nameEs: "Sarma",
        price: "€13.80",
        desc: "Two meat rolls in sour cabbage leaves filled with rice and vegetables, slowly cooked for a rich, tender flavour.",
        descEs:
          "Dos rollos de carne envueltos en hojas de col fermentada, rellenos de arroz y verduras y cocinados lentamente para conseguir un sabor intenso y una textura tierna.",
      },
      {
        name: "Gulasch",
        nameEs: "Gulasch",
        price: "€13.80",
        desc: "Tender slow-cooked meat stew with spices, served with rice.",
        descEs:
          "Estofado de carne tierno, cocinado lentamente con especias y servido con arroz.",
      },
      {
        name: "Entrecot de novillo",
        nameEs: "Entrecot de novillo",
        price: "€16.80",
        desc: "Prime beef entrecôte with potatoes and salad.",
        descEs:
          "Entrecot de ternera de primera calidad con patatas y ensalada.",
      },
      {
        name: "Osobuco",
        nameEs: "Osobuco",
        price: "€19.50",
        desc: "Cooked in its own juices with polenta, capers and tomato.",
        descEs:
          "Cocinado en su propio jugo con polenta, alcaparras y tomate.",
      },
    ],
  },

  {
    id: "burger",
    title: "House burger",
    titleEs: "Pljeskavica",
    subtitle: "House burger · Hausburger",
    subtitleEs: "Pljeskavica",
    items: [
      {
        name: "Hamburguesa de la casa",
        nameEs: "Hamburguesa de la casa",
        price: "€12.50",
        desc: "200 g of ground meat, cheese, tomato, red onion and lettuce.",
        descEs:
          "200 g de carne picada, queso, tomate, cebolla roja y lechuga.",
      },
    ],
  },

  {
    id: "crepes-salados",
    title: "Savoury crêpes",
    titleEs: "Crepés salados",
    subtitle: "Savoury crêpes · Herzhafte Crêpes",
    subtitleEs: "Crepés salados",
    items: [
      {
        name: "Jamón y queso",
        nameEs: "Jamón y queso",
        price: "€7.50",
        desc: "Ham and cheese.",
        descEs: "Jamón y queso.",
      },
      {
        name: "Queso, champiñones y cebolla",
        nameEs: "Queso, champiñones y cebolla",
        price: "€8.50",
        desc: "Cheese, mushrooms and onion.",
        descEs: "Queso, champiñones y cebolla.",
      },
      {
        name: "Jamón, queso y champiñones",
        nameEs: "Jamón, queso y champiñones",
        price: "€8.50",
        desc: "Ham, cheese and mushrooms.",
        descEs: "Jamón, queso y champiñones.",
      },
      {
        name: "Completa",
        nameEs: "Completa",
        price: "€9.50",
        desc: "Ham, cheese, egg and mushrooms.",
        descEs: "Jamón, queso, huevo y champiñones.",
      },
      {
        name: "Advans café",
        nameEs: "Advans café",
        price: "€9.50",
        desc: "White cheese, walnuts, tomato and lettuce.",
        descEs: "Queso blanco, nueces, tomate y lechuga.",
      },
      {
        name: "Popeye",
        nameEs: "Popeye",
        price: "€9.50",
        desc: "Spinach, bacon, cheese and egg.",
        descEs: "Espinacas, bacon, queso y huevo.",
      },
      {
        name: "Griego",
        nameEs: "Griego",
        price: "€9.50",
        desc: "Spinach, feta, oregano and olives.",
        descEs: "Espinacas, queso feta, orégano y aceitunas.",
      },
      {
        name: "Atlantic",
        nameEs: "Atlantic",
        price: "€10.50",
        desc: "Tuna, mayonnaise, oregano, parsley, lettuce, tomato and cheese.",
        descEs:
          "Atún, mayonesa, orégano, perejil, lechuga, tomate y queso.",
      },
      {
        name: "Pollo",
        nameEs: "Pollo",
        price: "€9.50",
        desc: "Chicken, cheese, mayonnaise, parsley, lettuce and tomato.",
        descEs:
          "Pollo, queso, mayonesa, perejil, lechuga y tomate.",
      },
      {
        name: "Ibérico",
        nameEs: "Ibérico",
        price: "€12.50",
        desc: "Iberian cured ham, fresh white cheese, vine-ripened tomato, extra virgin olive oil and oregano.",
        descEs:
          "Jamón ibérico, queso blanco fresco, tomate maduro, aceite de oliva virgen extra y orégano.",
      },
    ],
  },

  {
    id: "crepes-dulces",
    title: "Sweet crêpes",
    titleEs: "Crepés dulces",
    subtitle: "Sweet crêpes · Süße Crêpes",
    subtitleEs: "Crepés dulces",
    items: [
      {
        name: "Mermelada",
        nameEs: "Mermelada",
        price: "€5.50",
        desc: "Jam.",
        descEs: "Mermelada.",
      },
      {
        name: "Nutella",
        nameEs: "Nutella",
        price: "€5.90",
      },
      {
        name: "Azúcar y limón",
        nameEs: "Azúcar y limón",
        price: "€6.00",
        desc: "Sugar and lemon.",
        descEs: "Azúcar y limón.",
      },
      {
        name: "Tenerife",
        nameEs: "Tenerife",
        price: "€6.50",
        desc: "Nutella, banana and vanilla ice cream.",
        descEs: "Nutella, plátano y helado de vainilla.",
      },
      {
        name: "Energy",
        nameEs: "Energy",
        price: "€6.50",
        desc: "Nutella, banana and walnuts.",
        descEs: "Nutella, plátano y nueces.",
      },
      {
        name: "Arándanos",
        nameEs: "Arándanos",
        price: "€8.50",
        desc: "Blueberry jam and white cheese.",
        descEs: "Mermelada de arándanos y queso blanco.",
      },
      {
        name: "Canela",
        nameEs: "Canela",
        price: "€8.50",
        desc: "Cinnamon, lemon, honey and banana.",
        descEs: "Canela, limón, miel y plátano.",
      },
      {
        name: "Sunshine",
        nameEs: "Sunshine",
        price: "€9.50",
        desc: "Raspberries, bananas and Nutella.",
        descEs: "Frambuesas, plátanos y Nutella.",
      },
      {
        name: "Sweet love",
        nameEs: "Sweet love",
        price: "€9.50",
        desc: "White chocolate, raspberries and ice cream.",
        descEs: "Chocolate blanco, frambuesas y helado.",
      },
    ],
  },
];