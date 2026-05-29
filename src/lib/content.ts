// ── COMPANY ──────────────────────────────────────────────────
export const COMPANY = {
  name:        'Athamarat',
  tagline:     "East Africa's ethical agri-inputs platform",
  description: 'Compliance-first biopesticides, IPM tools and organic inputs. Wholesale and retail across the Horn of Africa.',
  phone:       '+251 933 274 497',
  whatsapp:    '+251933274497',
  email:       'info@athamarat.com',
  address:     'Jigjiga, Somali Regional State, Ethiopia',
  established: '2006',
  gm:          'Mr. Ismail Mohamed Abdi',
  entity:      'Badbado Environmental Protection Cooperative',
  tin:         '0038655153',
  vat:         '15439990804',
  countries:   ['Ethiopia', 'Somalia', 'Kenya', 'Djibouti', 'Eritrea'],
}

// ── STATS ─────────────────────────────────────────────────────
export const STATS = [
  { value: '18+',    label: 'Years operating' },
  { value: '5',      label: 'Countries served' },
  { value: '6,600+', label: 'Seedlings supplied' },
  { value: '100%',   label: 'Compliance-first' },
]

// ── NAVIGATION ────────────────────────────────────────────────
export const NAV = [
  {
    label: 'Shop',
    children: [
      { label: 'By Problem',  href: '/shop/by-problem' },
      { label: 'By Solution', href: '/shop/by-solution' },
      { label: 'All Products', href: '/shop' },
      { label: 'Bundles',     href: '/shop/bundles' },
    ],
  },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'Why Ethical', href: '/why-ethical' },
  { label: 'About',     href: '/about' },
  { label: 'Contact',   href: '/contact' },
]

// ── PROBLEMS (Shop by Problem) ────────────────────────────────
export const PROBLEMS = [
  { id: 'aphids',      label: 'Aphids',         icon: '🦟', color: 'bg-red-50    border-red-200' },
  { id: 'whitefly',    label: 'Whitefly',        icon: '🤍', color: 'bg-blue-50   border-blue-200' },
  { id: 'thrips',      label: 'Thrips',          icon: '🪲', color: 'bg-amber-50  border-amber-200' },
  { id: 'mealybug',    label: 'Mealybug',        icon: '🐛', color: 'bg-pink-50   border-pink-200' },
  { id: 'spider-mite', label: 'Spider Mites',    icon: '🕷️', color: 'bg-orange-50 border-orange-200' },
  { id: 'cutworm',     label: 'Cutworms',        icon: '🐌', color: 'bg-green-50  border-green-200' },
  { id: 'mosquito',    label: 'Mosquito Larvae', icon: '🦟', color: 'bg-teal-50   border-teal-200' },
  { id: 'fungal',      label: 'Fungal Disease',  icon: '🍄', color: 'bg-purple-50 border-purple-200' },
]

// ── SOLUTIONS (Shop by Solution) ─────────────────────────────
export const SOLUTIONS = [
  {
    id:          'microbial',
    label:       'Microbial Biopesticides',
    description: 'Bt, Bacillus, Trichoderma, Beauveria, Metarhizium',
    icon:        '🧫',
    tier:        'GOLD',
  },
  {
    id:          'botanical',
    label:       'Botanical Solutions',
    description: 'Neem/azadirachtin, plant extracts',
    icon:        '🌿',
    tier:        'GOLD',
  },
  {
    id:          'ipm',
    label:       'IPM Monitoring & Traps',
    description: 'Pheromones, sticky traps, delta traps, rollers',
    icon:        '🪤',
    tier:        'GOLD',
  },
  {
    id:          'biostimulants',
    label:       'Organic Biostimulants',
    description: 'Seaweed extracts, humic & fulvic acids',
    icon:        '🌱',
    tier:        'SILVER',
  },
  {
    id:          'seeds',
    label:       'Seeds & Seedlings',
    description: 'Certified varieties for East African conditions',
    icon:        '🌾',
    tier:        'SILVER',
  },
  {
    id:          'tools',
    label:       'Farm Tools',
    description: 'Sprayers, precision equipment, PPE',
    icon:        '🛠️',
    tier:        'SILVER',
  },
]

// ── PRODUCTS ──────────────────────────────────────────────────
export const PRODUCTS = [
  // GOLD — Microbial Biopesticides
  {
    ref:         'PROD_01',
    solution:    'microbial',
    problems:    ['mosquito', 'cutworm'],
    name:        'VectoBac WG — Bti Larvicide',
    description: 'Bacillus thuringiensis israelensis. Biological mosquito larvae control for farms, canals and public health use.',
    tier:        'GOLD',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'UNKNOWN' },
    unit:        'per kg',
    minOrder:    '1kg retail / 25kg wholesale',
    imageUrl:    '',
  },
  {
    ref:         'PROD_02',
    solution:    'microbial',
    problems:    ['aphids', 'whitefly', 'thrips'],
    name:        'Beauveria bassiana WP',
    description: 'Entomopathogenic fungus. Controls a wide range of soft-bodied insects. Safe for beneficial insects and pollinators.',
    tier:        'GOLD',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'UNKNOWN' },
    unit:        'per kg',
    minOrder:    '500g retail / 10kg wholesale',
    imageUrl:    '',
  },
  {
    ref:         'PROD_03',
    solution:    'microbial',
    problems:    ['fungal'],
    name:        'Trichoderma harzianum WP',
    description: 'Biological fungicide and soil conditioner. Protects roots from fusarium, pythium and rhizoctonia. Boosts plant vigour.',
    tier:        'GOLD',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'UNKNOWN' },
    unit:        'per kg',
    minOrder:    '500g retail / 10kg wholesale',
    imageUrl:    '',
  },
  {
    ref:         'PROD_04',
    solution:    'microbial',
    problems:    ['cutworm', 'thrips'],
    name:        'Metarhizium anisopliae WP',
    description: 'Soil-dwelling entomopathogenic fungus. Highly effective against soil pests including cutworms, white grubs and termites.',
    tier:        'GOLD',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'UNKNOWN' },
    unit:        'per kg',
    minOrder:    '500g retail / 10kg wholesale',
    imageUrl:    '',
  },
  // GOLD — IPM
  {
    ref:         'PROD_05',
    solution:    'ipm',
    problems:    ['whitefly', 'aphids', 'thrips'],
    name:        'Yellow Sticky Traps — Roll',
    description: 'High-adhesion yellow sticky monitoring rolls. 100m per roll. Ideal for greenhouse vegetables and floriculture.',
    tier:        'GOLD',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'ALLOWED' },
    unit:        'per roll / per pack of 10 cards',
    minOrder:    '1 pack retail / 20 rolls wholesale',
    imageUrl:    '',
  },
  {
    ref:         'PROD_06',
    solution:    'ipm',
    problems:    ['spider-mite', 'thrips'],
    name:        'Blue Sticky Traps',
    description: 'Specifically effective for thrips and fungus gnats. Used alongside yellow traps for full IPM monitoring coverage.',
    tier:        'GOLD',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'ALLOWED' },
    unit:        'per pack of 10 cards',
    minOrder:    '1 pack retail / 20 packs wholesale',
    imageUrl:    '',
  },
  {
    ref:         'PROD_07',
    solution:    'ipm',
    problems:    ['mealybug', 'cutworm'],
    name:        'Pheromone Delta Traps',
    description: 'Lure and delta trap system for key lepidopteran pests. Includes lures for cutworm, armyworm and mealybug monitoring.',
    tier:        'GOLD',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'ALLOWED' },
    unit:        'per trap + lure set',
    minOrder:    '1 trap retail / 50 traps wholesale',
    imageUrl:    '',
  },
  // GOLD — Botanical
  {
    ref:         'PROD_08',
    solution:    'botanical',
    problems:    ['aphids', 'whitefly', 'mealybug', 'spider-mite'],
    name:        'Azadirachtin 3% EC — Neem Extract',
    description: 'Cold-pressed neem extract. Repels, disrupts moulting and reduces feeding of a wide range of insect pests. OMRI-listed equivalent.',
    tier:        'GOLD',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'UNKNOWN' },
    unit:        'per litre',
    minOrder:    '1L retail / 20L wholesale',
    imageUrl:    '',
  },
  // SILVER — Biostimulants
  {
    ref:         'PROD_09',
    solution:    'biostimulants',
    problems:    [],
    name:        'Kelpak Seaweed Extract',
    description: 'Cold-process Ecklonia maxima seaweed biostimulant. Promotes rooting, flowering and stress tolerance. Widely used in export horticulture.',
    tier:        'SILVER',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'ALLOWED' },
    unit:        'per litre',
    minOrder:    '1L retail / 20L wholesale',
    imageUrl:    '',
  },
  {
    ref:         'PROD_10',
    solution:    'biostimulants',
    problems:    [],
    name:        'Humic + Fulvic Acid — Soil Conditioner',
    description: 'Leonardite-derived humic and fulvic acids. Improves soil structure, nutrient uptake and water retention. Safe for all crops.',
    tier:        'SILVER',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'ALLOWED' },
    unit:        'per kg / per litre',
    minOrder:    '1kg retail / 25kg wholesale',
    imageUrl:    '',
  },
  // SILVER — Seeds
  {
    ref:         'PROD_11',
    solution:    'seeds',
    problems:    [],
    name:        'Tomato Seeds — Rossen BV (Netherlands)',
    description: 'Premium Dutch tomato varieties. High yield, disease tolerant. Suited to East African highland and lowland conditions.',
    tier:        'SILVER',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'ALLOWED' },
    unit:        'per packet',
    minOrder:    '1 packet retail / bulk kg wholesale',
    imageUrl:    '',
  },
  {
    ref:         'PROD_12',
    solution:    'seeds',
    problems:    [],
    name:        'Vegetable Seed Assortment',
    description: 'Carrot, onion, cucumber, cabbage, watermelon and pepper varieties selected for regional performance.',
    tier:        'SILVER',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'ALLOWED' },
    unit:        'per packet',
    minOrder:    '1 packet retail / bulk wholesale',
    imageUrl:    '',
  },
  // SILVER — Tools
  {
    ref:         'PROD_13',
    solution:    'tools',
    problems:    [],
    name:        'Agrojet 20L Knapsack Sprayer',
    description: 'Heavy-duty field sprayer with padded straps and adjustable nozzle. Essential for precise biopesticide application.',
    tier:        'SILVER',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'ALLOWED' },
    unit:        'per unit',
    minOrder:    '1 unit retail / 10 units wholesale',
    imageUrl:    '',
  },
  {
    ref:         'PROD_14',
    solution:    'tools',
    problems:    [],
    name:        'PPE Application Kit',
    description: 'Gloves, goggles, mask and apron set. Safe use compliance for all spraying operations. Required by export market standards.',
    tier:        'SILVER',
    compliance:  { kenya: 'ALLOWED', ethiopia: 'ALLOWED', somalia: 'ALLOWED' },
    unit:        'per kit',
    minOrder:    '1 kit retail / 20 kits wholesale',
    imageUrl:    '',
  },
]

// ── BUNDLES ───────────────────────────────────────────────────
export const BUNDLES = [
  {
    ref:         'BUND_01',
    name:        'IPM Starter Kit — Greenhouse Vegetables',
    description: 'Everything to start a proper IPM programme for tomatoes, peppers and cucumbers under cover.',
    includes:    ['Yellow & blue sticky traps (x20)', 'Beauveria bassiana WP (500g)', 'Azadirachtin 3% EC (1L)', 'Application guide'],
    tier:        'GOLD',
    imageUrl:    '',
  },
  {
    ref:         'BUND_02',
    name:        'IPM Starter Kit — Mango & Citrus',
    description: 'Biological and monitoring tools for mango and citrus orchards targeting key pests.',
    includes:    ['Pheromone delta traps (x5)', 'Metarhizium WP (1kg)', 'Neem extract (1L)', 'Application guide'],
    tier:        'GOLD',
    imageUrl:    '',
  },
  {
    ref:         'BUND_03',
    name:        'Mosquito Larval Control Kit',
    description: 'Bt-based biological larvicide kit for farm ponds, irrigation canals and water bodies.',
    includes:    ['VectoBac WG (1kg)', 'Measurement equipment', 'Application protocol', 'Safety data sheet'],
    tier:        'GOLD',
    imageUrl:    '',
  },
  {
    ref:         'BUND_04',
    name:        'Organic Growth Pack',
    description: 'Biostimulant combination for improved yield and soil health without synthetic inputs.',
    includes:    ['Kelpak seaweed extract (1L)', 'Humic + fulvic acid (1kg)', 'Trichoderma WP (500g)', 'Application schedule'],
    tier:        'SILVER',
    imageUrl:    '',
  },
]

// ── CLIENTS ───────────────────────────────────────────────────
export const CLIENTS = [
  { name: 'UNHCR',              years: '2016–2021', detail: 'Gardening & fumigation services' },
  { name: 'UNICEF',             years: '2014, 2018–2022', detail: 'Fumigation & disposal services' },
  { name: 'Ethio Telecom',      years: '2020–2021', detail: '6,600+ seedlings supplied' },
  { name: 'SRS Bureau of Finance', years: 'Ongoing', detail: 'Landscaping & branded pots' },
  { name: 'SRS Health Bureau',  years: 'Ongoing', detail: '600+ trees at hospitals' },
  { name: 'OWDA',               years: '2021–2022', detail: 'Gardening & cleaning services' },
]

// ── TIER SYSTEM ───────────────────────────────────────────────
export const TIERS = {
  GOLD:   { label: 'Gold — Pure Biocontrol', color: 'bg-amber-100 text-amber-800 border-amber-300',   dot: 'bg-amber-400' },
  SILVER: { label: 'Silver — Organic Input', color: 'bg-slate-100 text-slate-700 border-slate-300',   dot: 'bg-slate-400' },
  BRONZE: { label: 'Bronze — Low Toxicity',  color: 'bg-orange-100 text-orange-800 border-orange-300', dot: 'bg-orange-400' },
}

export const COMPLIANCE_COLORS = {
  ALLOWED:  'bg-green-100 text-green-800',
  RESTRICTED: 'bg-amber-100 text-amber-800',
  BANNED:   'bg-red-100 text-red-800',
  UNKNOWN:  'bg-gray-100 text-gray-600',
}
