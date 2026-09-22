export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  about: string;
  features: string[];
  ingredients: string;
  usage: string;
  details: string;
  sku: string;
  pv: string;
  bv: string;
  price: number | null;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Tre-en-en® – 120 capsules",
    category: "Nutrition",
    image: "/products/tre-en-en.webp",

    shortDescription:
      "Tre-en-en® nutrition product — 120 capsules.",

    about:
      "Tre-en-en® is a nutrition product in the VitaAura collection. This listing is for the 120-capsule size.",

    features: [
      "120 capsules",
      "Nutrition product",
      "VitaAura collection",
    ],

    ingredients:
      "Ingredients will be added from confirmed product information.",

    usage:
      "Usage instructions will be added from confirmed product information.",

    details:
      "SKU: 2130. 34 PV / 31,980 BV. 120 capsules.",

    sku: "2130",
    pv: "34",
    bv: "31,980",

    price: 53200,
  },

  {
    id: 2,
    name: "Garlic Allium Complex",
    category: "Nutrition",
    image: "/products/garlic allium complex.webp",

    shortDescription:
      "Garlic Allium Complex nutrition product.",

    about:
      "Garlic phytonutrients help support healthy blood pressure and cholesterol levels, healthy immune responses, and normal cell growth and renewal, especially in the gastrointestinal tract.* Garlic Allium Complex includes whole-food garlic components including alliin and alliinase.",

    features: [
      "Whole-food garlic components",
      "Alliin and alliinase",
      "Garlic and onion extracts",
      "S-allyl cysteine",
      "Garlic and onion oleoresins",
    ],

    ingredients:
      "Microcrystalline cellulose, stearic acid, ethyl cellulose, calcium carbonate, hydroxypropyl methylcellulose, isomalt, silicon dioxide, medium chain triglycerides, rosemary extract, sodium alginate, and oleic acid.",

    usage:
      "Take 2 tablets daily. To assure breath freshness, do NOT chew tablets.",

    details:
      "SKU: 3665. 14 PV / 28.82 BV.",

    sku: "3665",
    pv: "14",
    bv: "28.82",

    price: 35160,
  },

  {
    id: 3,
    name: "Vegan D – 90 tablets",
    category: "Nutrition",
    image: "/products/vegan-d.webp",

    shortDescription:
      "Vegan D — 90 tablets.",

    about:
      "Vegan D is a nutrition product in the VitaAura collection.",

    features: [
      "90 tablets",
      "Nutrition product",
      "VitaAura collection",
    ],

    ingredients:
      "Microcrystalline cellulose, stearic acid, silicon dioxide, hydroxypropyl methylcellulose, sodium croscarmellose, and magnesium stearate.",

    usage:
      "Take 1 tablet daily with meal.",

    details:
      "SKU: 3335. 10 PV / 19.67 BV. 90 tablets.",

    sku: "3335",
    pv: "10",
    bv: "19.67",

    price: 21120,
  },

  {
    id: 4,
    name: "Formula IV Plus (Single)",
    category: "Nutrition",
    image: "/products/formula iv plus.webp",

    shortDescription:
      "Formula IV Plus (Single) — 60 sachets.",

    about:
      "Broad spectrum of nutrients for optimal health and vitality, with an iron-free multivitamin and Tre-en-en®.",

    features: [
      "60 sachets",
      "Broad spectrum of vitamins and minerals",
      "Iron-free multivitamin",
      "Natural vitamin E with mixed tocopherols",
      "Tre-en-en® Grain Concentrates",
      "Phyto Enzyme Blend",
    ],

    ingredients:
      "Ingredient information will be added from confirmed product information.",

    usage:
      "Take 1 packet daily with a meal.",

    details:
      "SKU: 3105. 24 PV / 63.08 BV. 60 sachets.",

    sku: "3105",
    pv: "24",
    bv: "63.08",

    price: 83660,
  },

  {
    id: 5,
    name: "Formula IV Plus",
    category: "Nutrition",
    image: "/products/formula iv plus.webp",

    shortDescription:
      "Formula IV Plus nutritional product — 30 sachets.",

    about:
      "Formula IV Plus is a nutrition product in the VitaAura collection. This listing is for the 30-sachet size.",

    features: [
      "30 sachets",
      "Nutrition product",
      "VitaAura collection",
    ],

    ingredients:
      "Product composition will be added from confirmed official product information.",

    usage:
      "Usage instructions will be added from the current official product information.",

    details:
      "30 sachets.",

    sku: "",
    pv: "",
    bv: "",

    price: 50440,
  },

  {
    id: 6,
    name: "Pro Vitality",
    category: "Nutrition",
    image: "/products/Pro Vitality.webp",

    shortDescription:
      "Pro Vitality nutritional product from the VitaAura collection.",

    about:
      "Pro Vitality is a nutrition product in the VitaAura collection. More confirmed product information will be displayed as it becomes available.",

    features: [
      "Nutrition product",
      "VitaAura collection",
      "Product information presented clearly",
    ],

    ingredients:
      "Product composition will be added from confirmed official product information.",

    usage:
      "Usage instructions will be added from the current official product information.",

    details:
      "Product information will be expanded with confirmed details.",

    sku: "",
    pv: "",
    bv: "",

    price: 101660,
  },

  {
    id: 7,
    name: "Fibre Tablets",
    category: "Nutrition",
    image: "/products/Fibre Tablets.webp",

    shortDescription:
      "Fibre Tablets from the VitaAura collection.",

    about:
      "Fibre Tablets are a nutrition product in the VitaAura collection. More confirmed product information will be displayed as it becomes available.",

    features: [
      "Nutrition product",
      "VitaAura collection",
      "Product information presented clearly",
    ],

    ingredients:
      "Product composition will be added from confirmed official product information.",

    usage:
      "Usage instructions will be added from the current official product information.",

    details:
      "Product information will be expanded with confirmed details.",

    sku: "",
    pv: "",
    bv: "",

    price: 33070,
  },
];