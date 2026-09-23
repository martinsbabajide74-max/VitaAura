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
  visible: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Tre-en-en® – 120 capsules",
    category: "Nutrition",
    image: "/products/Tre-en-en.webp",
    shortDescription: "Tre-en-en® nutrition product — 120 capsules.",
    about:
      "Tre-en-en® is a nutrition product in the VitaAura collection. This listing is for the 120-capsule size.",
    features: ["120 capsules", "Nutrition product", "VitaAura collection"],
    ingredients:
      "Ingredients will be added from confirmed product information.",
    usage:
      "Usage instructions will be added from confirmed product information.",
    details: "SKU: 2130. 34 PV / 31,980 BV. 120 capsules.",
    sku: "2130",
    pv: "34",
    bv: "31,980",
    price: 53200,
    visible: true,
  },

  {
    id: 2,
    name: "Garlic Allium Complex",
    category: "Nutrition",
    image: "/products/garlic allium complex.webp",
    shortDescription: "Garlic Allium Complex nutrition product.",
    about:
      "Garlic Allium Complex includes whole-food garlic components including alliin and alliinase.",
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
    details: "SKU: 3665. 12 PV / 18,830 BV.",
    sku: "3665",
    pv: "12",
    bv: "18,830",
    price: 35160,
    visible: true,
  },

  {
    id: 3,
    name: "Vegan D – 90 tablets",
    category: "Nutrition",
    image: "/products/vegan-d.webp",
    shortDescription: "Vegan D — 90 tablets.",
    about: "Vegan D is a nutrition product in the VitaAura collection.",
    features: ["90 tablets", "Nutrition product", "VitaAura collection"],
    ingredients:
      "Microcrystalline cellulose, stearic acid, silicon dioxide, hydroxypropyl methylcellulose, sodium croscarmellose, and magnesium stearate.",
    usage: "Take 1 tablet daily with meal.",
    details: "SKU: 3335. 9 PV / 11,190 BV. 90 tablets.",
    sku: "3335",
    pv: "9",
    bv: "11,190",
    price: 21120,
    visible: true,
  },

  {
    id: 4,
    name: "Formula IV Plus (Single)",
    category: "Nutrition",
    image: "/products/Formula IV Plus.webp",
    shortDescription: "Formula IV Plus (Single) — 60 sachets.",
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
    usage: "Take 1 packet daily with a meal.",
    details: "SKU: 3105. 26 PV / 43,660 BV. 60 sachets.",
    sku: "3105",
    pv: "26",
    bv: "43,660",
    price: 83660,
    visible: true,
  },

  {
    id: 5,
    name: "Formula IV Plus",
    category: "Nutrition",
    image: "/products/Formula IV Plus.webp",
    shortDescription: "Formula IV Plus nutritional product — 30 sachets.",
    about:
      "Formula IV Plus is a nutrition product in the VitaAura collection. This listing is for the 30-sachet size.",
    features: ["30 sachets", "Nutrition product", "VitaAura collection"],
    ingredients:
      "Product composition will be added from confirmed official product information.",
    usage:
      "Usage instructions will be added from the current official product information.",
    details: "30 sachets. 14 PV / 26,320 BV.",
    sku: "",
    pv: "14",
    bv: "26,320",
    price: 50440,
    visible: true,
  },

  {
    id: 6,
    name: "Pro Vitality",
    category: "Nutrition",
    image: "/products/Pro Vitality.webp",
    shortDescription:
      "Pro Vitality nutritional product from the VitaAura collection.",
    about:
      "Pro Vitality is a daily nutrition product combining multiple nutrition components in convenient packets.",
    features: [
      "30 daily packets",
      "Tre-en-en®",
      "Carotenoid Complex™",
      "Omega-3 Plus",
      "Essential Vitamin & Mineral Complex",
    ],
    ingredients: "Contains soy, wheat and fish.",
    usage: "Take 1–2 packets daily with a meal.",
    details: "SKU: 3145. 36 PV / 56,050 BV. 30 servings.",
    sku: "3145",
    pv: "36",
    bv: "56,050",
    price: 101660,
    visible: true,
  },

  {
    id: 7,
    name: "Fibre Tablets",
    category: "Nutrition",
    image: "/products/Fibre Tablets.webp",
    shortDescription: "Fibre Tablets from the VitaAura collection.",
    about: "Fibre Tablets are a nutrition product in the VitaAura collection.",
    features: [
      "Nutrition product",
      "Fibre tablets",
      "VitaAura collection",
    ],
    ingredients:
      "Product composition will be added from confirmed official product information.",
    usage:
      "Usage instructions will be added from confirmed official product information.",
    details: "10 PV / 17,370 BV.",
    sku: "",
    pv: "10",
    bv: "17,370",
    price: 33070,
    visible: true,
  },

  {
    id: 8,
    name: "Aloe Vera Plus",
    category: "Nutrition",
    image: "",
    shortDescription: "Aloe Vera Plus — 33.8 fl oz.",
    about:
      "A lightly carbonated aloe vera nutrition drink with naturally occurring tea-derived caffeine.",
    features: [
      "33.8 fl oz",
      "20 servings",
      "1.7 fl oz / 50 mL serving",
      "Lightly carbonated",
    ],
    ingredients:
      "Carbonated water, aloe vera concentrate (black tea leaf extract, aloe vera inner leaf, natural flavors including lemon, Chinese ginseng and chamomile), fructose, citric acid and sodium benzoate.",
    usage:
      "Drink one 50 mL (1.7 fl oz) serving per day, or two if desired.",
    details: "SKU: 3006. 12 PV / 12,550 BV. 33.8 fl oz.",
    sku: "3006",
    pv: "12",
    bv: "12,550",
    price: 24340,
    visible: true,
  },

  {
    id: 9,
    name: "BETAGARD®",
    category: "Nutrition",
    image: "/products/BETAGARD®.jpg",
    shortDescription: "BETAGARD® — 90 tablets.",
    about:
      "BETAGARD® is a nutrition product containing beta-carotene, vitamins, minerals and plant-based components.",
    features: [
      "90 tablets",
      "Beta-carotene",
      "Vitamins and minerals",
      "Lemon pectin",
      "Mixed non-alpha-tocopherol",
    ],
    ingredients:
      "Microcrystalline cellulose, dicalcium phosphate, stearic acid, sodium croscarmellose, hydroxypropyl methylcellulose, natural mint extract, silicon dioxide, magnesium stearate and triacetin.",
    usage: "Take 3 tablets daily.",
    details: "SKU: 3530. 16 PV / 38,300 BV. 90 tablets.",
    sku: "3530",
    pv: "16",
    bv: "38,300",
    price: 72970,
    visible: true,
  },

  {
    id: 10,
    name: "All-C",
    category: "Nutrition",
    image: "/products/All-C.jpg",
    shortDescription: "All-C — 250 chewable tablets.",
    about:
      "All-C is a chewable vitamin C product combining vitamin C with citrus bioflavonoids and whole-food-derived ingredients.",
    features: [
      "250 chewable tablets",
      "206 mg vitamin C per tablet",
      "Rutin",
      "Hesperidin",
      "Lemon bioflavonoids",
      "Neo-Plex Concentrate",
    ],
    ingredients:
      "Sucrose, dextrose, fructose, magnesium stearate, silicon dioxide, beet juice powder and natural flavors.",
    usage: "Take 1 chewable tablet daily.",
    details: "SKU: 3332. 10 PV / 20,190 BV. 250 tablets.",
    sku: "3332",
    pv: "10",
    bv: "20,190",
    price: 37500,
    visible: true,
  },

  {
    id: 11,
    name: "Chelated Cal-Mag – 400 IU Vitamin D",
    category: "Nutrition",
    image: "",
    shortDescription: "Chelated Cal-Mag — 400 IU Vitamin D.",
    about:
      "Chelated Cal-Mag combines calcium and magnesium with vitamin D3.",
    features: [
      "150 capsules",
      "300 mg calcium per serving",
      "150 mg magnesium per serving",
      "400 IU vitamin D3",
      "Calcium glycinate",
      "Magnesium glycinate",
    ],
    ingredients:
      "Gelatin, microcrystalline cellulose, silicon dioxide, magnesium stearate and carmine.",
    usage: "Take 3 capsules daily with meals.",
    details: "SKU: 3402. PV, BV and price to be confirmed.",
    sku: "3402",
    pv: "",
    bv: "",
    price: null,
    visible: false,
  },

  {
    id: 12,
    name: "Chelated Cal-Mag – 1000 IU Vitamin D",
    category: "Nutrition",
    image: "",
    shortDescription: "Chelated Cal-Mag — 1000 IU Vitamin D.",
    about:
      "Chelated Cal-Mag combines calcium and magnesium with vitamin D3.",
    features: [
      "150 tablets",
      "300 mg calcium per serving",
      "150 mg magnesium per serving",
      "1000 IU vitamin D3",
      "Calcium glycinate",
      "Magnesium glycinate",
    ],
    ingredients:
      "Powdered cellulose, microcrystalline cellulose, silicon dioxide, magnesium stearate, food glaze, magnesium silicate, croscarmellose sodium and carmine.",
    usage: "Take 3 tablets daily with meals.",
    details: "SKU: 3404. PV, BV and price to be confirmed.",
    sku: "3404",
    pv: "",
    bv: "",
    price: null,
    visible: false,
  },

  {
    id: 13,
    name: "Flavonoid Complex",
    category: "Nutrition",
    image: "/products/Flavonoid Complex.jpg",
    shortDescription: "Flavonoid Complex — 60 tablets.",
    about:
      "Flavonoid Complex combines vitamin C with a blend of whole-food-derived plant extracts.",
    features: [
      "60 tablets",
      "Vitamin C",
      "Flavonoid Complex Blend",
      "Cranberry",
      "Kale",
      "Blueberry",
      "Elderberry",
      "Green tea",
    ],
    ingredients:
      "Microcrystalline cellulose, sodium croscarmellose, stearic acid, silicon dioxide, hydroxypropyl methylcellulose, triacetin, carmine and sodium copper chlorophyllin.",
    usage: "Take 1–2 tablets daily.",
    details: "SKU: 3302. 19 PV / 23,170 BV. 60 tablets.",
    sku: "3302",
    pv: "19",
    bv: "23,170",
    price: 43170,
    visible: true,
  },

  {
    id: 14,
    name: "LDC – 1 Liter",
    category: "Household",
    image: "/products/LDC – 1 Liter.jpg",
    shortDescription: "LDC concentrated household cleaner — 1 Liter.",
    about:
      "LDC is a concentrated, biodegradable, phosphate-free household cleaner suitable for a variety of cleaning applications.",
    features: [
      "1 Liter",
      "Concentrated",
      "Biodegradable",
      "Phosphate-free",
      "Water-soluble",
      "Multiple household uses",
    ],
    ingredients: "Product composition to be confirmed.",
    usage: "Dilute according to the intended cleaning application.",
    details: "SKU: 4210. PV, BV and price to be confirmed.",
    sku: "4210",
    pv: "",
    bv: "",
    price: null,
    visible: false,
  },

  {
    id: 15,
    name: "Lipotropic Adjunct™",
    category: "Nutrition",
    image: "/products/Lipotropic Adjunct™.jpg",
    shortDescription: "Lipotropic Adjunct™ — 180 tablets.",
    about:
      "Lipotropic Adjunct™ is a nutrition product containing B vitamins, choline, inositol, betaine and citrus bioflavonoids.",
    features: [
      "180 tablets",
      "Vitamin B6",
      "Folate",
      "Vitamin B12",
      "Choline",
      "Inositol",
      "Betaine",
      "Citrus bioflavonoids",
    ],
    ingredients:
      "Calcium carbonate, glucose, microcrystalline cellulose, stearic acid, silicon dioxide, magnesium stearate, hydroxypropyl methylcellulose, titanium dioxide, glycerin, sodium starch glycolate, vanillin and carmine.",
    usage: "Take 2–4 tablets daily.",
    details: "SKU: 3510. 9 PV / 16,710 BV. 180 tablets.",
    sku: "3510",
    pv: "9",
    bv: "16,710",
    price: 31150,
    visible: true,
  },

  {
    id: 16,
    name: "Vita-Gard",
    category: "Nutrition",
    image: "/products/Vita-Gard.jpg",
    shortDescription: "Vita-Gard — 120 chewable tablets.",
    about:
      "Vita-Gard is a fruit-flavored chewable vitamin and mineral nutrition product with carotenoid and flavonoid blends.",
    features: [
      "120 tablets",
      "Fruit flavor",
      "Chewable",
      "Vitamins and minerals",
      "Carotenoid Complex Blend",
      "Flavonoid Complex Blend",
    ],
    ingredients:
      "Glucose, fructose, stearic acid, natural flavors, citric acid, silicon dioxide, powdered cellulose, grape juice concentrate and apple powder.",
    usage: "Take 2 tablets daily with food.",
    details: "SKU: 3125. 19 PV / 36,450 BV. 120 tablets.",
    sku: "3125",
    pv: "19",
    bv: "36,450",
    price: 69590,
    visible: true,
  },

  {
    id: 17,
    name: "Chelated Zinc",
    category: "Nutrition",
    image: "/products/Chelated Zinc.jpg",
    shortDescription: "Chelated Zinc — 150 tablets.",
    about:
      "Chelated Zinc provides zinc in glycinate and methionine chelate forms.",
    features: [
      "150 tablets",
      "30 mg zinc per serving",
      "Zinc glycinate",
      "Zinc methionine",
      "Amino-acid chelated zinc",
    ],
    ingredients:
      "Dicalcium phosphate, sodium croscarmellose, stearic acid, hydroxypropyl methylcellulose, natural color, magnesium stearate and glycerin.",
    usage: "Take 2 tablets daily with meals.",
    details: "SKU: 3425. 11 PV / 18,000 BV. 150 tablets.",
    sku: "3425",
    pv: "11",
    bv: "18,000",
    price: 34000,
    visible: true,
  },

  {
    id: 18,
    name: "Vita-Squares®",
    category: "Nutrition",
    image: "/products/Vita-Squares®.jpg",
    shortDescription: "Vita-Squares® — 180 chewable tablets.",
    about:
      "Vita-Squares® is a fruit-flavored chewable multivitamin and mineral nutrition product.",
    features: [
      "180 chewable tablets",
      "Fruit flavor",
      "Vitamins and minerals",
      "Tre-en-en® Grain Concentrate Blend",
      "Contains soy and wheat",
    ],
    ingredients:
      "Glucose, fructose, grape juice concentrate, citric acid, silicon dioxide, stearic acid, orange juice powder, natural flavor and apple powder.",
    usage: "Take 3 tablets daily with food.",
    details: "SKU: 3122. 13 PV / 25,540 BV. 180 tablets.",
    sku: "3122",
    pv: "13",
    bv: "25,540",
    price: 48420,
    visible: true,
  },

  {
    id: 19,
    name: "Carotenoid Complex",
    category: "Nutrition",
    image: "/products/Carotenoid Complex.jpg",
    shortDescription: "Carotenoid Complex whole-food phytonutrient formula.",
    about:
      "Carotenoid Complex combines carotenoid, flavonoid and cruciferous nutrition components.",
    features: [
      "Carotenoid Complex",
      "Flavonoid Complex",
      "Cruciferous Plus",
      "Whole-food-derived phytonutrients",
    ],
    ingredients:
      "Contains components from carotenoid, flavonoid and cruciferous whole-food sources.",
    usage: "Take 1–3 capsules daily.",
    details: "PV, BV and price to be confirmed.",
    sku: "",
    pv: "",
    bv: "",
    price: null,
    visible: false,
  },

  {
    id: 20,
    name: "All Natural Fiber Food & Drink Mix",
    category: "Nutrition",
    image: "/products/All Natural Fiber Food & Drink Mix.jpg",
    shortDescription:
      "All Natural Fiber Food & Drink Mix — 22.2 oz.",
    about:
      "A whole-food-based fiber food and drink mix providing soluble and insoluble dietary fiber.",
    features: [
      "22.2 oz / 630 g",
      "30 servings",
      "6 g fiber per serving",
      "Soluble and insoluble fiber",
      "Gluten-free",
      "Lacto-vegetarian",
      "No added sucrose",
    ],
    ingredients:
      "Contains fiber from 11 whole-food sources. Contains milk, soy and tree nuts including almond and hazelnut.",
    usage:
      "Mix 1 scoop in 8 fl oz of milk, water or juice. Can also be added to recipes.",
    details: "SKU: 3707. 16 PV / 44,300 BV. 22.2 oz.",
    sku: "3707",
    pv: "16",
    bv: "44,300",
    price: 85100,
    visible: true,
  },

  {
    id: 21,
    name: "CoQ10 Mitochondrial Energy Complex",
    category: "Nutrition",
    image: "/products/CoQ10 Mitochondrial Energy Complex.jpg",
    shortDescription:
      "CoQ10 Mitochondrial Energy Complex — 60 softgels.",
    about:
      "A nutrition formula featuring CoQ10 together with plant-based phytonutrient and lipid ingredients.",
    features: [
      "60 softgels",
      "100 mg CoQ10 per serving",
      "NeoLife Phyto-lipid & Sterol Blend",
      "NeoLife Proprietary Polyphenol Blend",
      "L-cysteine",
      "Coconut MCT oil",
    ],
    ingredients:
      "Gelatin, glycerin, glycine, water, calcium carbonate, beeswax and riboflavin. Contains coconut.",
    usage: "Take 2 softgels daily with food.",
    details:
      "SKU: 3523. 34 PV / 36,500 BV. 60 softgels.",
    sku: "3523",
    pv: "34",
    bv: "36,500",
    price: 68750,
    visible: true,
  },

  {
    id: 22,
    name: "Omega-3 Plus",
    category: "Nutrition",
    image: "/products/Omega-3 Plus.jpg",
    shortDescription: "Omega-3 Plus — 90 softgels.",
    about:
      "Omega-3 Plus provides omega-3 fatty acids from 100% wild-caught fish oil.",
    features: [
      "90 softgels",
      "1,070 mg omega-3 per serving",
      "EPA",
      "DHA",
      "DPA",
      "100% wild-caught fish oil",
      "Friend of the Sea® certified",
    ],
    ingredients:
      "Wild-caught fish oil from anchovy, mackerel, salmon, sardine and tuna.",
    usage: "Take 3 softgels daily with meals.",
    details: "25 PV / 30,440 BV. 90 softgels.",
    sku: "",
    pv: "25",
    bv: "30,440",
    price: 56580,
    visible: true,
  },

  {
    id: 23,
    name: "NeoLifeTea",
    category: "Nutrition",
    image: "/products/NeoLifeTea.jpg",
    shortDescription: "NeoLifeTea — 15 sticks.",
    about:
      "NeoLifeTea is a tea-based nutrition drink featuring green, black and white tea extracts with botanical ingredients.",
    features: [
      "15 sticks",
      "30 servings",
      "85 mg caffeine per serving",
      "Green, black and white tea extracts",
      "Ginseng",
      "Rhodiola rosea",
      "Naturally flavored and sweetened",
      "Kosher",
    ],
    ingredients:
      "Green, black and white tea extracts, ginseng, Codonopsis pilosula, Rhodiola rosea, fructose, natural lemon flavor, maltodextrin, honey and soy lecithin. Contains soy.",
    usage: "Mix 1/2 stick in 8 fl oz of hot or cold water.",
    details: "SKU: 3860. 18 PV / 38,230 BV. 15 sticks.",
    sku: "3860",
    pv: "18",
    bv: "38,230",
    price: 79040,
    visible: true,
  },

  {
    id: 24,
    name: "Magnesium Complex",
    category: "Nutrition",
    image: "/products/Magnesium Complex.jpg",
    shortDescription: "Magnesium Complex — 60 tablets.",
    about:
      "Magnesium Complex combines several forms of magnesium with a whole-food phytonutrient blend.",
    features: [
      "60 tablets",
      "300 mg magnesium per serving",
      "Magnesium glycinate",
      "Magnesium hydroxide",
      "Tri-magnesium citrate",
      "Vegetarian and vegan formula",
      "GMO-free",
    ],
    ingredients:
      "Microcrystalline cellulose, water, silicon dioxide, stearic acid, hydroxypropyl methylcellulose and glycerin.",
    usage: "Take 1–2 tablets daily.",
    details: "SKU: 3405. 9 PV / 12,590 BV. 60 tablets.",
    sku: "3405",
    pv: "9",
    bv: "12,590",
    price: 23780,
    visible: true,
  },

  {
    id: 25,
    name: "PhytoDefense®",
    category: "Nutrition",
    image: "/products/PhytoDefense®.jpg",
    shortDescription: "PhytoDefense® — 30 packets.",
    about:
      "PhytoDefense® combines whole-food-derived carotenoid, flavonoid and cruciferous phytonutrient components in convenient daily packets.",
    features: [
      "30 packets",
      "Carotenoid Complex",
      "Flavonoid Complex",
      "Cruciferous Plus",
      "Whole-food-derived phytonutrients",
      "GMO-free",
      "Gluten-free",
      "GMP certified",
    ],
    ingredients:
      "Each packet contains Carotenoid Complex capsules, Flavonoid Complex tablets and Cruciferous Plus tablets. Contains soy.",
    usage: "Take 1 packet daily with a meal.",
    details:
      "SKU: 761506. 62 PV / 84,070 BV. 30 packets.",
    sku: "761506",
    pv: "62",
    bv: "84,070",
    price: 157030,
    visible: true,
  },

  {
    id: 26,
    name: "Vitamin E Plus – 200 softgels",
    category: "Nutrition",
    image: "/products/Vitamin E Plus – 200 capsule.jpg",
    shortDescription: "Vitamin E Plus — 200 softgels.",
    about:
      "Vitamin E Plus is a vitamin E nutrition product featuring tocopherols and wheat germ oil.",
    features: [
      "200 softgels",
      "Vitamin E",
      "Wheat germ oil",
      "Mixed non-alpha-tocopherols",
      "Water-miscible formulation",
    ],
    ingredients:
      "Gelatin, sorbitan monooleate, glycerin, soy lecithin, water, rice bran oil and apple pectin. Contains soy and wheat.",
    usage: "Take 1 or 2 softgels daily.",
    details:
      "SKU: 3341. 11 PV / 20,670 BV. 200 softgels.",
    sku: "3341",
    pv: "11",
    bv: "20,670",
    price: 38950,
    visible: true,
  },

  {
    id: 27,
    name: "Full Motion®",
    category: "Nutrition",
    image: "/products/Full Motion®.jpg",
    shortDescription: "Full Motion® — 90 tablets.",
    about:
      "Full Motion® is a nutrition formula featuring glucosamine, minerals and a botanical blend.",
    features: [
      "90 tablets",
      "1,500 mg glucosamine hydrochloride per serving",
      "Zinc",
      "Silica",
      "Boron",
      "Boswellia",
      "Bromelain",
      "White willow",
    ],
    ingredients:
      "Stearic acid, microcrystalline cellulose, sodium croscarmellose, silicon dioxide, hydroxypropyl methylcellulose, triacetin and natural color. Contains shellfish.",
    usage:
      "Take 3 tablets daily with 8 fl oz water, preferably just before mealtime.",
    details: "SKU: 3505. 16 PV / 31,480 BV. 90 tablets.",
    sku: "3505",
    pv: "16",
    bv: "31,480",
    price: 58500,
    visible: true,
  },

  {
    id: 28,
    name: "FiberFull",
    category: "Nutrition",
    image: "",
    shortDescription: "FiberFull — 120 tablets.",
    about:
      "FiberFull is a whole-food-based dietary fiber product containing both soluble and insoluble fiber sources.",
    features: [
      "120 tablets",
      "2 g dietary fiber per serving",
      "Soluble and insoluble fiber",
      "Whole-food-based",
      "GMO-free",
      "Dairy-free",
      "Vegan",
    ],
    ingredients:
      "Rice fiber, oat fiber, barley flour, stearic acid, gum acacia, soy fiber, apple pectin, tricalcium phosphate, orange fiber and silicon dioxide.",
    usage:
      "Take 4 tablets daily with 12–16 ounces of water before a meal.",
    details: "SKU: 3710. PV, BV and price to be confirmed.",
    sku: "3710",
    pv: "",
    bv: "",
    price: null,
    visible: false,
  },
];