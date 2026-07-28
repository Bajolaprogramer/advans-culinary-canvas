export type Dish = {
  name: string;
  price: string;
  desc?: string;
  image?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle: string;
  note?: string;
  items: Dish[];
};

export const MENU: MenuSection[] = [
  {
    id: "entrantes",
    title: "Entrantes",
    subtitle: "Starters · Vorspeisen",
    items: [
      {
        name: "Ensalada verde con espinacas y nueces",
        price: "€8.50",
        desc: "Green leaf salad with passion fruit vinaigrette, fresh spinach and toasted walnuts.",
      },
      {
        name: "Paté artesanal de aceitunas negras",
        price: "€8.50",
        desc: "House-made black olive pâté with anchovies, capers, extra virgin olive oil and garlic.",
      },
      {
        name: "Queso blanco canario",
        price: "€8.50",
        desc: "Artisanal Canarian fresh cheese with tomatoes, extra virgin olive oil and fresh parsley.",
      },
      {
        name: "Tapa de jamón ibérico",
        price: "€11.50",
        desc: "Iberian cured ham, hand carved.",
      },
    ],
  },
  {
    id: "sopas",
    title: "Sopa del día",
    subtitle: "Soup of the day · Suppe des Tages",
    items: [
      {
        name: "Caldo casero con pollo y verduras",
        price: "€7.20",
        desc: "Homemade chicken broth with vegetables — colour, flavour and balanced nourishment.",
      },
      {
        name: "Crema de verduras",
        price: "€7.20",
        desc: "Smooth, aromatic vegetable cream made with fresh market ingredients.",
      },
      {
        name: "Buillabesa",
        price: "€8.50",
        desc: "Fragrant seafood soup prepared with fresh shellfish in a rich, flavourful broth.",
      },
    ],
  },
  {
    id: "platos",
    title: "Platos",
    subtitle: "Main courses · Hauptgerichte",
    note: "Traditional recipes, modern techniques, exceptional flavour.",
    items: [
      {
        name: "Keskek",
        price: "€8.50",
        desc: "UNESCO-protected home dish. Shredded chicken with pearl barley, slow cooked for hours until tender and juicy.",
      },
      {
        name: "Lubina con verduras salteadas",
        price: "€18.50",
        desc: "Sea bass fillet with sautéed vegetables.",
      },
      {
        name: "Pechuga de pollo con salsa de champiñones",
        price: "€13.80",
        desc: "Chicken breast with homemade mushroom sauce and sautéed potatoes.",
      },
      {
        name: "Aguja de cerdo ibérico",
        price: "€13.80",
        desc: "Iberian pork neck with sautéed vegetables.",
      },
      {
        name: "Sarma",
        price: "€13.80",
        desc: "Two meat rolls in sour cabbage leaves filled with rice and vegetables, slowly cooked for a rich, tender flavour.",
      },
      {
        name: "Gulasch",
        price: "€13.80",
        desc: "Tender slow-cooked meat stew with spices, served with rice.",
      },
      {
        name: "Entrecot de novillo",
        price: "€16.80",
        desc: "Prime beef entrecôte with potatoes and salad.",
      },
      {
        name: "Osobuco",
        price: "€19.50",
        desc: "Cooked in its own juices with polenta, capers and tomato.",
      },
    ],
  },
  {
    id: "burger",
    title: "Hamburguesa de la casa",
    subtitle: "House burger · Hausburger",
    items: [
      {
        name: "Pljeskavica",
        price: "€12.50",
        desc: "200 g of ground meat, cheese, tomato, red onion and lettuce.",
      },
    ],
  },
  {
    id: "crepes-salados",
    title: "Crepés salados",
    subtitle: "Savoury crêpes · Herzhafte Crêpes",
    items: [
      { name: "Jamón y queso", price: "€7.50", desc: "Ham and cheese." },
      {
        name: "Queso, champiñones y cebolla",
        price: "€8.50",
        desc: "Cheese, mushrooms and onion.",
      },
      {
        name: "Jamón, queso y champiñones",
        price: "€8.50",
        desc: "Ham, cheese and mushrooms.",
      },
      {
        name: "Completa",
        price: "€9.50",
        desc: "Ham, cheese, egg and mushrooms.",
      },
      {
        name: "Advans café",
        price: "€9.50",
        desc: "White cheese, walnuts, tomato and lettuce.",
      },
      {
        name: "Popeye",
        price: "€9.50",
        desc: "Spinach, bacon, cheese and egg.",
      },
      {
        name: "Griego",
        price: "€9.50",
        desc: "Spinach, feta, oregano and olives.",
      },
      {
        name: "Atlantic",
        price: "€10.50",
        desc: "Tuna, mayonnaise, oregano, parsley, lettuce, tomato and cheese.",
      },
      {
        name: "Pollo",
        price: "€9.50",
        desc: "Chicken, cheese, mayonnaise, parsley, lettuce and tomato.",
      },
      {
        name: "Ibérico",
        price: "€12.50",
        desc: "Iberian cured ham, fresh white cheese, vine-ripened tomato, extra virgin olive oil and oregano.",
      },
    ],
  },
  {
    id: "crepes-dulces",
    title: "Crepés dulces",
    subtitle: "Sweet crêpes · Süße Crêpes",
    items: [
      { name: "Mermelada", price: "€5.50", desc: "Jam." },
      { name: "Nutella", price: "€5.90" },
      { name: "Azúcar y limón", price: "€6.00", desc: "Sugar and lemon." },
      {
        name: "Tenerife",
        price: "€6.50",
        desc: "Nutella, banana and vanilla ice cream.",
      },
      {
        name: "Energy",
        price: "€6.50",
        desc: "Nutella, banana and walnuts.",
      },
      {
        name: "Arándanos",
        price: "€8.50",
        desc: "Blueberry jam and white cheese.",
      },
      {
        name: "Canela",
        price: "€8.50",
        desc: "Cinnamon, lemon, honey and banana.",
      },
      {
        name: "Sunshine",
        price: "€9.50",
        desc: "Raspberries, bananas and Nutella.",
      },
      {
        name: "Sweet love",
        price: "€9.50",
        desc: "White chocolate, raspberries and ice cream.",
      },
    ],
  },
];