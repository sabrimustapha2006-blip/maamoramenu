export type Dish = {
  fr: string;
  en: string;
  descFr?: string;
  descEn?: string;
  price: string;
  image?: string;
};

export type Section = {
  id: string;
  fr: string;
  en: string;
  noteFr?: string;
  noteEn?: string;
  image?: string;
  dishes: Dish[];
};

export const sections: Section[] = [
  {
    id: "entrees-froides",
    fr: "Entrées Froides",
    en: "Cold Starters",
    image: "salad",
    dishes: [
      {
        fr: "Salade Mamora",
        en: "Mamora Salad",
        descFr: "Avocat, crevettes, salade de laitue, poulet, tomates cerises, fromage, sauce du jour…",
        descEn: "Avocado, shrimp, lettuce salad, chicken, cherry tomatoes, cheese, sauce of the day…",
        price: "95,00",
      },
      {
        fr: "Salade Niçoise",
        en: "Niçoise Salad",
        descFr: "Haricots verts, pommes de terre, tomates, oignons, thon, anchois, salade de laitue, œuf dur, olives noires",
        descEn: "Green beans, potatoes, tomatoes, onions, tuna, anchovies, lettuce salad, hard-boiled egg, black olives",
        price: "75,00",
      },
      {
        fr: "Salade Gourmande",
        en: "Gourmande Salad",
        descFr: "Pommes de terre, betterave, carottes râpées, riz, maïs, choux vert et rouge, tomates, thon, salade de laitue, sauce vinaigrette…",
        descEn: "Potatoes, beetroot, grated carrots, rice, corn, green and red cabbage, tomatoes, tuna, lettuce salad, vinaigrette sauce…",
        price: "95,00",
      },
      {
        fr: "Salade Variée",
        en: "Varied Salad",
        descFr: "Pommes de terre, betterave, carottes râpées, riz, maïs, choux vert et rouge, tomates, thon, salade de laitue, sauce vinaigrette",
        descEn: "Potatoes, beets, grated carrots, rice, corn, green and red cabbage, tomatoes, tuna, lettuce salad, vinaigrette sauce",
        price: "80,00",
      },
      {
        fr: "Salade de Thon",
        en: "Tuna Salad",
        descFr: "Thon, tomates, oignons, salade de laitue, olives noires…",
        descEn: "Tuna, tomatoes, onions, lettuce salad, black olives…",
        price: "80,00",
      },
      {
        fr: "Salade Caprese",
        en: "Caprese Salad",
        descFr: "Tomates, mozarella et basilic…",
        descEn: "Tomatoes, mozzarella and basil…",
        price: "95,00",
      },
    ],
  },
  {
    id: "entrees-chaudes",
    fr: "Entrées Chaudes",
    en: "Hot Starters",
    dishes: [
      {
        fr: "Soupe de Poisson",
        en: "Fish Soup",
        descFr: "Croûtons à l'ail",
        descEn: "Garlic croutons",
        price: "75,00",
      },
      { fr: "Crème de Légumes", en: "Cream of Vegetables", price: "50,00" },
      { fr: "Crevettes Pil-Pil", en: "Pil-Pil Shrimp", price: "90,00" },
      { fr: "Gratin de Fruits de Mer", en: "Seafood Gratin", price: "90,00" },
    ],
  },
  {
    id: "pates",
    fr: "Pâtes",
    en: "Pasta",
    dishes: [
      { fr: "Spaghetti Napolitaine", en: "Spaghetti Napolitana", price: "85,00" },
      { fr: "Spaghetti Bolognaise", en: "Spaghetti Bolognese", price: "95,00" },
      { fr: "Tagliatelles aux Fruits de Mer", en: "Seafood Tagliatelle", price: "120,00" },
      {
        fr: "Penne au Poulet",
        en: "Chicken Penne",
        descFr: "À la crème et champignons",
        descEn: "With cream and mushrooms",
        price: "95,00",
      },
    ],
  },
  {
    id: "viande",
    fr: "Côté Viande",
    en: "Meat",
    image: "beef",
    dishes: [
      {
        fr: "Tajine Kefta",
        en: "Kefta Tagine",
        descFr: "Boulettes de bœuf haché",
        descEn: "Ground beef meatballs",
        price: "120,00",
      },
      {
        fr: "Brochettes Kefta",
        en: "Kefta Skewers",
        descFr: "Viande de bœuf hachée",
        descEn: "Ground beef",
        price: "130,00",
      },
      { fr: "Escalope de veau sauce normande", en: "Veal Escalope, Normande Sauce", price: "150,00" },
      {
        fr: "Émincé de filet de Bœuf",
        en: "Sliced Beef Fillet",
        descFr: "À la crème et au paprika",
        descEn: "With cream and paprika",
        price: "160,00",
      },
      { fr: "Tajine de filet de Bœuf", en: "Beef Fillet Tagine", price: "160,00" },
      {
        fr: "Côtes d'agneau grillées",
        en: "Grilled Lamb Chops",
        descFr: "Aux herbes",
        descEn: "With herbs",
        price: "160,00",
      },
      {
        fr: "EntreCôte grillée",
        en: "Grilled Rib Steak",
        descFr: "Beurre maître d'hôtel",
        descEn: "Maître d'hôtel butter",
        price: "140,00",
      },
      {
        fr: "Filet de Bœuf grillé",
        en: "Grilled Beef Fillet",
        descFr: "Au poivre ou sauce forestière",
        descEn: "Pepper sauce or forestière sauce",
        price: "190,00",
      },
      { fr: "Brochettes de filet de Bœuf", en: "Beef Fillet Skewers", price: "180,00" },
    ],
  },
  {
    id: "volaille",
    fr: "Côté Volaille",
    en: "Poultry",
    dishes: [
      { fr: "Suprême de Poulet Forestière", en: "Chicken Supreme Forestière", price: "120,00" },
      { fr: "Escalope de Poulet à la crème", en: "Chicken Escalope with Cream", price: "130,00" },
    ],
  },
  {
    id: "poissons",
    fr: "Côté Poissons",
    en: "Fish",
    noteFr: "Selon arrivage",
    noteEn: "Subject to daily catch",
    image: "fish",
    dishes: [
      {
        fr: "Filet de Merlan",
        en: "Whiting Fillet",
        descFr: "Au beurre blanc ou sauce tartare",
        descEn: "With beurre blanc or tartare sauce",
        price: "95,00",
      },
      {
        fr: "Calamars à la Plancha",
        en: "Squid à la Plancha",
        descFr: "Sauce pesto : parmesan, pignons de pin, ail, huile d'olive, persil",
        descEn: "Pesto sauce: parmesan, pine nuts, garlic, olive oil, parsley",
        price: "130,00",
      },
      { fr: "Brochettes de Poisson", en: "Fish Skewers", price: "130,00" },
      {
        fr: "Espadon Grillé",
        en: "Grilled Swordfish",
        descFr: "Sauce vierge",
        descEn: "Sauce vierge",
        price: "130,00",
      },
      {
        fr: "Friture de Poissons",
        en: "Fried Fish Platter",
        descFr: "Crevettes, calamars, solettes, merlans, sauce tartare……",
        descEn: "Shrimp, squid, baby soles, whiting, tartare sauce……",
        price: "160,00",
      },
      {
        fr: "Sole Grillée ou Meunière",
        en: "Grilled or Meunière Sole",
        descFr: "Sauce au beurre fondue citronnée",
        descEn: "Melted lemon butter sauce",
        price: "170,00",
      },
    ],
  },
  {
    id: "sandwichs",
    fr: "Sandwichs",
    en: "Sandwiches",
    dishes: [
      { fr: "Sandwich au poulet", en: "Chicken Sandwich", price: "65,00" },
      { fr: "Steak Sandwich", en: "Steak Sandwich", price: "85,00" },
      { fr: "Sandwich Viande de bœuf Hachée", en: "Ground Beef Sandwich", price: "80,00" },
      {
        fr: "Cheesburger",
        en: "Cheeseburger",
        descFr: "Viande de bœuf hachée, cheddar, salade de laitue, tomates, oignons, mayonnaise.",
        descEn: "Ground beef, cheddar, lettuce salad, tomatoes, onions, mayonnaise.",
        price: "85,00",
      },
      {
        fr: "Club Sandwich",
        en: "Club Sandwich",
        descFr: "Salade de laitue, filet de poulet, steak de bœuf, oignons, tomates, fromage.",
        descEn: "Lettuce salad, chicken fillet, beef steak, onions, tomatoes, cheese.",
        price: "85,00",
      },
      { fr: "Assiette de Frites", en: "Plate of Fries", price: "35,00" },
    ],
  },
  {
    id: "pizzas",
    fr: "Pizzas",
    en: "Pizza",
    image: "pizza",
    dishes: [
      {
        fr: "Pizza aux Fruits de Mer",
        en: "Seafood Pizza",
        descFr: "Crevettes, calamars, moules, mozzarella, origan….",
        descEn: "Shrimp, squid, mussels, mozzarella, oregano….",
        price: "105,00",
      },
      {
        fr: "Pizza Oriental",
        en: "Oriental Pizza",
        descFr: "Viande de bœuf hachée, poivrons, mozzarella, origan…..",
        descEn: "Chopped beef, peppers, mozzarella, oregano…..",
        price: "80,00",
      },
      {
        fr: "Pizza Végétarienne",
        en: "Vegetarian Pizza",
        descFr: "Aubergine, courgettes, poivrons, tomates cerises, oignons, mozzarella, origan",
        descEn: "Eggplant, zucchini, peppers, cherry tomatoes, onions, mozzarella, oregano",
        price: "65,00",
      },
    ],
  },
  {
    id: "sur-commande",
    fr: "Sur Commande",
    en: "On Order",
    image: "tagine",
    dishes: [
      { fr: "Tajine d'Agneau ou de Veau (2 pax)", en: "Lamb or Veal Tagine (2 pax)", price: "260,00" },
      { fr: "Tajine de Poulet aux Olives et Citrons (4 pax)", en: "Chicken Tagine with Olives and Lemons (4 pax)", price: "360,00" },
      { fr: "Tajine de Poulet Beldi aux Olives et Citrons (2 pax)", en: "Beldi Chicken Tagine with Olives and Lemons (2 pax)", price: "300,00" },
      { fr: "Couscous Marocain (2 pax)", en: "Moroccan Couscous (2 pax)", price: "260,00" },
      { fr: "Mechoui d'Agneau (2 Pax)", en: "Lamb Mechoui (2 Pax)", price: "470,00" },
      { fr: "Pastilla au Poulet et Amandes (1 pax)", en: "Chicken and Almond Pastilla (1 pax)", price: "160,00" },
      { fr: "Pastilla aux Fruits de Mer (1 pax)", en: "Seafood Pastilla (1 pax)", price: "175,00" },
      {
        fr: "Paêlla Valenciana (2 Pax)",
        en: "Paella Valenciana (2 Pax)",
        descFr: "Crevettes, calamars, poulet, poisson, moules",
        descEn: "Shrimp, squid, chicken, fish, mussels",
        price: "325,00",
      },
      {
        fr: "Paêlla Royale (2 Pax)",
        en: "Royal Paella (2 Pax)",
        descFr: "Crevettes, calamars, poulet, poisson, viande de bœuf, crevettes royales, moules",
        descEn: "Shrimp, squid, chicken, fish, beef, king prawns, mussels",
        price: "450,00",
      },
    ],
  },
  {
    id: "boissons",
    fr: "Les Boissons",
    en: "Drinks",
    dishes: [
      { fr: "1/2 Soda", en: "1/2 Soda", price: "28,00" },
      { fr: "Soda", en: "Soda", price: "38,00" },
      { fr: "Jus d'Orange", en: "Orange Juice", price: "32,00" },
      { fr: "Sidi Ali 1/1", en: "Sidi Ali 1/1", price: "30,00" },
    ],
  },
  {
    id: "desserts",
    fr: "Desserts",
    en: "Desserts",
    image: "dessert",
    dishes: [
      {
        fr: "Crème Caramel",
        en: "Crème Caramel",
        descFr: "Beau rivage",
        descEn: "Beau rivage",
        price: "40,00",
      },
      { fr: "Salade de Fruits Frais", en: "Fresh Fruit Salad", price: "45,00" },
      { fr: "Tiramisu au Café", en: "Coffee Tiramisu", price: "45,00" },
      { fr: "Pâtisserie Mamora du jour", en: "Mamora Pastry of the Day", price: "45,00" },
      { fr: "Mousse au Chocolat", en: "Chocolate Mousse", price: "45,00" },
    ],
  },
];

export const suggestionNote = {
  fr: "Suggestion du Jour — demandez à votre serveur",
  en: "Suggestion of the Day — ask your server",
};

export const garnishNote = {
  fr: "Tous nos plats sont garnis : garniture du jour",
  en: "All our dishes are served with the garnish of the day",
};
