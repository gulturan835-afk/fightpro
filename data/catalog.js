// Catalogus: categorieën + producten voor FightPro Enschede.
// Dit is de "bron" waarmee de database (db.js) wordt geseed.

// Navigatie-groepen zoals in de header. Elke groep heeft leaf-categorieën.
// parent === null betekent een losse hoofd-categorie in de balk.
const categories = [
  // --- Handschoenen ---
  { slug: 'handschoenen', name: 'Handschoenen', parent: null, nav: 'group', kind: 'glove',
    blurb: 'Bokshandschoenen, kickbokshandschoenen, MMA en meer — pas ze in de winkel.' },
  { slug: 'bokshandschoenen', name: 'Bokshandschoenen', parent: 'handschoenen', kind: 'glove',
    blurb: 'Van topmerken als Hayabusa, Twins en Joya. Voor training, sparren en wedstrijd.' },
  { slug: 'kickbokshandschoenen', name: 'Kickbokshandschoenen', parent: 'handschoenen', kind: 'glove',
    blurb: 'Speciaal voor kickboksen en Muay Thai — flexibel en stevig.' },
  { slug: 'mma-handschoenen', name: 'MMA Handschoenen', parent: 'handschoenen', kind: 'glove',
    blurb: 'Open vingers, grip en bescherming voor grappling én striking.' },
  { slug: 'zakhandschoenen', name: 'Zakhandschoenen', parent: 'handschoenen', kind: 'glove',
    blurb: 'Compact en duurzaam voor intensief bokszak- en padwerk.' },
  { slug: 'binnenhandschoenen', name: 'Binnenhandschoenen', parent: 'handschoenen', kind: 'wrap',
    blurb: 'Hygiënisch, ademend en beschermend onder je handschoen.' },

  // --- Bescherming ---
  { slug: 'bescherming', name: 'Bescherming', parent: null, nav: 'group', kind: 'shield',
    blurb: 'Scheen-, hoofd- en kruisbescherming, gebitsbeschermers en bandages.' },
  { slug: 'scheenbeschermers', name: 'Scheenbeschermers', parent: 'bescherming', kind: 'shield',
    blurb: 'Lichtgewicht bescherming met stevige vulling voor scheen en wreef.' },
  { slug: 'hoofdbeschermers', name: 'Hoofdbeschermers', parent: 'bescherming', kind: 'shield',
    blurb: 'Maximale bescherming tijdens het sparren, zonder zicht te belemmeren.' },
  { slug: 'kruisbeschermers', name: 'Kruisbeschermers', parent: 'bescherming', kind: 'shield',
    blurb: 'Stevige bescherming voor heren en dames.' },
  { slug: 'gebitsbeschermers', name: 'Gebitsbeschermers', parent: 'bescherming', kind: 'shield',
    blurb: 'Bitjes die je thuis op maat maakt voor een perfecte pasvorm.' },
  { slug: 'bandages-wraps', name: 'Bandages & Wraps', parent: 'bescherming', kind: 'wrap',
    blurb: 'Stevige polsondersteuning en bescherming van je knokkels.' },

  // --- Uitrusting ---
  { slug: 'uitrusting', name: 'Uitrusting', parent: null, nav: 'group', kind: 'bag',
    blurb: 'Bokszakken, pads, springtouwen en sporttassen.' },
  { slug: 'bokszakken', name: 'Bokszakken', parent: 'uitrusting', kind: 'bag',
    blurb: 'Voor thuis of in de gym — gevuld en ongevuld.' },
  { slug: 'trapkussens-pads', name: 'Trapkussens & Pads', parent: 'uitrusting', kind: 'bag',
    blurb: 'Stootkussens, focus mitts en Thai pads voor partnertraining.' },
  { slug: 'springtouwen', name: 'Springtouwen', parent: 'uitrusting', kind: 'rope',
    blurb: 'Verbeter je conditie, voetenwerk en coördinatie.' },
  { slug: 'sporttassen', name: 'Sporttassen', parent: 'uitrusting', kind: 'bag',
    blurb: 'Ruime tassen voor al je vechtsportuitrusting.' },

  // --- Losse hoofd-categorieën ---
  { slug: 'kleding', name: 'Kleding', parent: null, nav: 'single', kind: 'apparel',
    blurb: 'Shorts, shirts en trainingskleding voor de vechtsporter.' },
  { slug: 'yoga-fitness', name: 'Yoga & Fitness', parent: null, nav: 'single', kind: 'apparel',
    blurb: 'Matten, weerstandsbanden en supplementen voor herstel en kracht.' },
];

// Helper: kort id -> brand kleur voor de SVG-illustratie
const palettes = {
  hayabusa: { body: '#1A1A1A', cuff: '#B8973A' },
  twins:    { body: '#B8102E', cuff: '#8B0B21' },
  joya:     { body: '#1C1C1C', cuff: '#B8973A' },
  fairtex:  { body: '#1A2A1A', cuff: '#B8973A' },
  king:     { body: '#11243A', cuff: '#B8973A' },
  fightpro: { body: '#1A1200', cuff: '#B8973A' },
  matchu:   { body: '#222', cuff: '#B8973A' },
};

const products = [
  // ===== Bokshandschoenen =====
  { slug: 'hayabusa-t3-bokshandschoenen', name: 'T3 Bokshandschoenen', brand: 'Hayabusa', palette: 'hayabusa',
    category: 'bokshandschoenen', price: 17995, oldPrice: null, badge: 'Bestseller',
    short: 'Winnaar Men’s Health 2019 beste handschoen ter wereld.',
    description: 'De Hayabusa T3 staat bekend als een van de beste bokshandschoenen ter wereld. Het Dual-X sluitsysteem geeft maximale polsondersteuning en een veilige, strakke pasvorm. De gelaagde schuimvulling absorbeert de impact uitstekend, terwijl het premium leer jarenlang meegaat.',
    specs: ['Dual-X sluitsysteem', 'Gelaagde schuimvulling', 'Premium leer', 'Geschikt voor sparren & training'],
    sizes: ['10oz', '12oz', '14oz', '16oz'], stock: 12 },
  { slug: 'twins-bgv1-bokshandschoenen', name: 'BGV-1 Bokshandschoenen', brand: 'Twins Special', palette: 'twins',
    category: 'bokshandschoenen', price: 9100, oldPrice: null, badge: 'Handgemaakt',
    short: 'Al jaren een van de beste merken, handgemaakt in Thailand.',
    description: 'De legendarische Twins Special BGV-1 wordt met de hand gemaakt in Thailand. De perfecte balans tussen bescherming en gevoel maakt deze handschoen ideaal voor zowel training als sparren. Echt leer en een uitstekende pasvorm.',
    specs: ['Handgemaakt in Thailand', '100% echt leer', 'Klittenbandsluiting', 'Veelzijdig inzetbaar'],
    sizes: ['8oz', '10oz', '12oz', '14oz', '16oz'], stock: 20 },
  { slug: 'joya-work-out-bokshandschoen-leer', name: 'Work Out Bokshandschoen Leer', brand: 'Joya', palette: 'joya',
    category: 'bokshandschoenen', price: 4495, oldPrice: 5995, badge: 'Aanbieding',
    short: 'Goede kwaliteit leer voor een uitstekende prijs.',
    description: 'De Joya Work Out is de ideale instapper van echt leer. Perfect voor bokszaktraining, pads en techniekwerk. Een onverslaanbare prijs-kwaliteitverhouding voor wie net begint of een betrouwbare trainingshandschoen zoekt.',
    specs: ['Echt leer', 'Ideaal voor zak & pads', 'Klittenbandsluiting', 'Topper voor beginners'],
    sizes: ['10oz', '12oz', '14oz'], stock: 30 },
  { slug: 'fightpro-pro-sparring-bokshandschoenen', name: 'Pro Sparring Bokshandschoenen', brand: 'FightPro', palette: 'fightpro',
    category: 'bokshandschoenen', price: 6995, oldPrice: null, badge: 'Eigen merk',
    short: 'Eigen merk: premium gevoel voor een eerlijke prijs.',
    description: 'Onze eigen FightPro Pro Sparring handschoen combineert een ruime schuimvulling met een soepele pasvorm. Speciaal ontwikkeld voor veilig sparren, met extra demping rond de knokkels.',
    specs: ['Extra dikke vulling', 'Veilig sparren', 'PU-leer', 'Brede polsband'],
    sizes: ['12oz', '14oz', '16oz'], stock: 25 },

  // ===== Kickbokshandschoenen =====
  { slug: 'fairtex-bgv1-muay-thai-handschoenen', name: 'BGV1 Muay Thai Handschoenen', brand: 'Fairtex', palette: 'fairtex',
    category: 'kickbokshandschoenen', price: 10995, oldPrice: null, badge: 'Iconisch',
    short: 'Iconisch Muay Thai merk, handgemaakt van premium leer.',
    description: 'De Fairtex BGV1 is wereldwijd de standaard voor Muay Thai. Handgemaakt van premium leer voor ultieme bescherming en een lange levensduur. De ronde pasvorm is ideaal voor clinchen en stoten.',
    specs: ['Handgemaakt', 'Premium leer', 'Ideaal voor Muay Thai', 'Ronde pasvorm voor clinch'],
    sizes: ['10oz', '12oz', '14oz', '16oz'], stock: 14 },
  { slug: 'twins-kickboks-handschoenen', name: 'Kickboks Handschoenen', brand: 'Twins Special', palette: 'twins',
    category: 'kickbokshandschoenen', price: 8950, oldPrice: null, badge: null,
    short: 'Flexibele Twins handschoen voor kickboksen.',
    description: 'Een soepele variant van de befaamde Twins-handschoen, met extra flexibiliteit rond de vingers — ideaal voor kickboksers die ook willen vangen en pareren.',
    specs: ['Flexibele pasvorm', 'Echt leer', 'Handgemaakt', 'Goede ventilatie'],
    sizes: ['10oz', '12oz', '14oz'], stock: 16 },
  { slug: 'king-pro-revo-kickbokshandschoen', name: 'Revo Kickbokshandschoen', brand: 'King Pro Boxing', palette: 'king',
    category: 'kickbokshandschoenen', price: 7995, oldPrice: 8995, badge: 'Aanbieding',
    short: 'Strak design met uitstekende demping.',
    description: 'De King Pro Revo biedt een modern design met microvezel-buitenlaag en een meervoudige schuimlaag. Licht, sterk en kleurvast.',
    specs: ['Microvezel buitenlaag', 'Meerlaagse vulling', 'Lichtgewicht', 'Kleurvast'],
    sizes: ['10oz', '12oz', '14oz', '16oz'], stock: 18 },

  // ===== MMA Handschoenen =====
  { slug: 'hayabusa-t3-mma-handschoenen', name: 'T3 MMA Handschoenen', brand: 'Hayabusa', palette: 'hayabusa',
    category: 'mma-handschoenen', price: 8995, oldPrice: null, badge: 'Bestseller',
    short: 'Open vinger MMA-handschoen met topbescherming.',
    description: 'De Hayabusa T3 MMA-handschoen geeft je vrijheid om te grijpen, terwijl de gelaagde vulling je knokkels beschermt. Ideaal voor sparren en bagwork in MMA.',
    specs: ['Open vingers', 'Gelaagde knokkelbescherming', 'Premium leer', 'Veilige polssluiting'],
    sizes: ['S', 'M', 'L', 'XL'], stock: 10 },
  { slug: 'fairtex-mma-sparring-handschoenen', name: 'MMA Sparring Handschoenen', brand: 'Fairtex', palette: 'fairtex',
    category: 'mma-handschoenen', price: 7495, oldPrice: null, badge: null,
    short: 'Ruime vulling voor veilig MMA-sparren.',
    description: 'Speciaal ontworpen voor sparren met extra demping, zodat je hard kunt trainen zonder je partner te blesseren.',
    specs: ['Extra demping', 'Open palm voor grip', 'Echt leer', 'Klittenband polssluiting'],
    sizes: ['S', 'M', 'L', 'XL'], stock: 13 },

  // ===== Zakhandschoenen =====
  { slug: 'fightpro-zakhandschoenen-vintage-leer', name: 'Zakhandschoenen Vintage Leer', brand: 'FightPro', palette: 'fightpro',
    category: 'zakhandschoenen', price: 2995, oldPrice: null, badge: 'Eigen merk',
    short: 'Hoogwaardig leer in zwart en bruin.',
    description: 'Onze FightPro zakhandschoenen van hoogwaardig vintage leer zijn ideaal voor bokszaktraining en techniekwerk. Duurzaam gebouwd voor intensief gebruik, met een tijdloze uitstraling.',
    specs: ['Vintage leer', 'Zwart of bruin', 'Verstevigde knokkels', 'Duurzaam'],
    sizes: ['S/M', 'L/XL'], stock: 28 },
  { slug: 'joya-zakhandschoen-mesh', name: 'Zakhandschoen Mesh', brand: 'Joya', palette: 'joya',
    category: 'zakhandschoenen', price: 2295, oldPrice: null, badge: null,
    short: 'Ademende zakhandschoen met mesh bovenzijde.',
    description: 'Lichtgewicht zakhandschoen met mesh voor optimale ventilatie tijdens lange trainingen.',
    specs: ['Mesh bovenzijde', 'Goede ventilatie', 'PU-leer', 'Klittenband'],
    sizes: ['S/M', 'L/XL'], stock: 22 },

  // ===== Binnenhandschoenen =====
  { slug: 'fightpro-binnenhandschoenen-bandages', name: 'Binnenhandschoenen Bandages', brand: 'FightPro', palette: 'fightpro',
    category: 'binnenhandschoenen', price: 1495, oldPrice: null, badge: null,
    short: 'Ademend mesh met 100 cm extra bandage.',
    description: 'Ademend mesh voor goede ventilatie, met een extra 100 cm bandage voor stevige polsondersteuning. Geschikt voor boksen, kickboksen en MMA.',
    specs: ['Ademend mesh', '100 cm bandage', 'Polsondersteuning', 'Wasbaar'],
    sizes: ['S/M', 'L/XL'], stock: 40 },
  { slug: 'king-pro-hygiene-binnenhandschoenen-katoen', name: 'Hygiene Binnenhandschoenen Katoen', brand: 'King Pro Boxing', palette: 'king',
    category: 'binnenhandschoenen', price: 995, oldPrice: null, badge: null,
    short: 'Verlengt de levensduur van je handschoen.',
    description: 'Ademend katoenen binnenhandschoentje dat zweet opvangt en de levensduur van je handschoen verlengt. Per paar geleverd, links en rechts draagbaar.',
    specs: ['100% katoen', 'Per paar', 'Wasbaar', 'Links/rechts draagbaar'],
    sizes: ['One size'], stock: 50 },

  // ===== Scheenbeschermers =====
  { slug: 'joya-strike-scheenbeschermers', name: 'Strike Scheenbeschermers', brand: 'Joya', palette: 'joya',
    category: 'scheenbeschermers', price: 9495, oldPrice: null, badge: 'Bestseller',
    short: 'Handgemaakt in Thailand, lichtgewicht en stevig.',
    description: 'Handgemaakt in Thailand met een lichtgewicht maar stevige vulling. De kliksysteemriemen zorgen voor een veilige pasvorm die niet verschuift tijdens het trainen.',
    specs: ['Handgemaakt', 'Kliksysteemriemen', 'Lichtgewicht', 'Scheen + wreef bescherming'],
    sizes: ['S', 'M', 'L', 'XL'], stock: 15 },
  { slug: 'fairtex-sp5-scheenbeschermers', name: 'SP5 Scheenbeschermers', brand: 'Fairtex', palette: 'fairtex',
    category: 'scheenbeschermers', price: 11995, oldPrice: null, badge: null,
    short: 'Premium Muay Thai scheenbeschermers.',
    description: 'De Fairtex SP5 zijn de keuze van professionele Muay Thai vechters. Premium leer, anatomische pasvorm en uitstekende demping.',
    specs: ['Premium leer', 'Anatomische pasvorm', 'Dubbele klittenband', 'Pro kwaliteit'],
    sizes: ['S', 'M', 'L', 'XL'], stock: 9 },

  // ===== Hoofdbeschermers =====
  { slug: 'twins-hgl3-hoofdbeschermer', name: 'HGL-3 Hoofdbeschermer', brand: 'Twins Special', palette: 'twins',
    category: 'hoofdbeschermers', price: 8500, oldPrice: null, badge: null,
    short: 'Klassieke Twins hoofdbescherming met goed zicht.',
    description: 'De Twins HGL-3 biedt uitstekende bescherming van wangen en voorhoofd, met een open ontwerp dat je zicht vrijhoudt. Handgemaakt van echt leer.',
    specs: ['Echt leer', 'Goed zichtveld', 'Verstelbaar', 'Handgemaakt'],
    sizes: ['S', 'M', 'L'], stock: 11 },

  // ===== Kruisbeschermers =====
  { slug: 'fightpro-kruisbeschermer-heren', name: 'Kruisbeschermer Heren', brand: 'FightPro', palette: 'fightpro',
    category: 'kruisbeschermers', price: 3495, oldPrice: null, badge: null,
    short: 'Stevige bescherming met elastische band.',
    description: 'Comfortabele en stevige kruisbeschermer met brede elastische band voor een goede pasvorm. Onmisbaar bij contacttraining.',
    specs: ['Stevige cup', 'Brede elastische band', 'Ademend', 'Heren'],
    sizes: ['M', 'L', 'XL'], stock: 17 },

  // ===== Gebitsbeschermers =====
  { slug: 'fightpro-gebitsbeschermer-pro', name: 'Gebitsbeschermer Pro', brand: 'FightPro', palette: 'fightpro',
    category: 'gebitsbeschermers', price: 1295, oldPrice: null, badge: null,
    short: 'Boil & bite bitje voor een perfecte pasvorm.',
    description: 'Maak dit bitje thuis op maat met de boil & bite methode. Inclusief bewaardoosje. Geschikt voor alle contactsporten.',
    specs: ['Boil & bite', 'Inclusief doosje', 'Diverse kleuren', 'Geur- en smaakvrij'],
    sizes: ['Senior', 'Junior'], stock: 60 },

  // ===== Bandages & Wraps =====
  { slug: 'fightpro-bandages-450cm', name: 'Bandages 450 cm (paar)', brand: 'FightPro', palette: 'fightpro',
    category: 'bandages-wraps', price: 899, oldPrice: null, badge: null,
    short: 'Elastische bandages met duimlus en klittenband.',
    description: 'Elastische 450 cm bandages met duimlus en klittenbandsluiting voor stevige polsondersteuning. Per paar geleverd, verkrijgbaar in meerdere kleuren.',
    specs: ['450 cm lengte', 'Duimlus', 'Klittenband', 'Per paar'],
    sizes: ['One size'], stock: 80 },
  { slug: 'hayabusa-perfect-stretch-handwraps', name: 'Perfect Stretch Handwraps', brand: 'Hayabusa', palette: 'hayabusa',
    category: 'bandages-wraps', price: 1295, oldPrice: null, badge: null,
    short: 'Premium semi-elastische handwraps.',
    description: 'De Hayabusa Perfect Stretch bandages bieden de ideale combinatie van flexibiliteit en ondersteuning. 4,5 meter per stuk.',
    specs: ['Semi-elastisch', '4,5 m', 'Brede klittenband', 'Premium kwaliteit'],
    sizes: ['One size'], stock: 35 },

  // ===== Bokszakken =====
  { slug: 'fightpro-bokszak-120cm-gevuld', name: 'Bokszak 120 cm Gevuld', brand: 'FightPro', palette: 'fightpro',
    category: 'bokszakken', price: 8995, oldPrice: 10995, badge: 'Aanbieding',
    short: 'Direct klaar voor gebruik — gevuld geleverd.',
    description: 'Stevige 120 cm bokszak van robuust kunstleer, gevuld geleverd met ophangketting en wartel. Ideaal voor thuis of in de gym.',
    specs: ['120 cm', 'Gevuld geleverd', 'Inclusief ketting', 'Robuust kunstleer'],
    sizes: ['120 cm'], stock: 8 },

  // ===== Trapkussens & Pads =====
  { slug: 'fairtex-thai-pads-curved', name: 'Curved Thai Pads (paar)', brand: 'Fairtex', palette: 'fairtex',
    category: 'trapkussens-pads', price: 13995, oldPrice: null, badge: null,
    short: 'Gebogen Thai pads voor partnertraining.',
    description: 'Professionele gebogen Thai pads van Fairtex, per paar. Absorberen krachtige trappen en stoten en zijn comfortabel om vast te houden.',
    specs: ['Per paar', 'Gebogen vorm', 'Echt leer', 'Dubbele riemen'],
    sizes: ['Standaard'], stock: 6 },
  { slug: 'fightpro-focus-mitts', name: 'Focus Mitts (paar)', brand: 'FightPro', palette: 'fightpro',
    category: 'trapkussens-pads', price: 3495, oldPrice: null, badge: null,
    short: 'Pareerhandschoenen voor snelheid en precisie.',
    description: 'Lichte focus mitts voor het trainen van snelheid, timing en precisie. Comfortabele pasvorm met ventilatie.',
    specs: ['Per paar', 'Lichtgewicht', 'Ventilatie', 'PU-leer'],
    sizes: ['One size'], stock: 20 },

  // ===== Springtouwen =====
  { slug: 'fightpro-speed-rope', name: 'Speed Rope', brand: 'FightPro', palette: 'fightpro',
    category: 'springtouwen', price: 1295, oldPrice: null, badge: null,
    short: 'Verstelbaar speed rope met kogellagers.',
    description: 'Snel verstelbaar springtouw met kogellagers voor een soepele draai. Verbeter je conditie, voetenwerk en coördinatie.',
    specs: ['Kogellagers', 'Verstelbaar', 'Antislip grepen', 'Staalkabel'],
    sizes: ['One size'], stock: 45 },

  // ===== Sporttassen =====
  { slug: 'fightpro-sporttas-duffel', name: 'Sporttas Duffel', brand: 'FightPro', palette: 'fightpro',
    category: 'sporttassen', price: 3995, oldPrice: null, badge: null,
    short: 'Ruime tas met geventileerd schoenenvak.',
    description: 'Ruime duffel met apart geventileerd schoenen-/handschoenenvak. Stevige hengsels en verstelbare schouderband.',
    specs: ['Ventilatievak', 'Verstelbare band', 'Waterafstotend', '50 liter'],
    sizes: ['One size'], stock: 24 },

  // ===== Kleding =====
  { slug: 'fairtex-muay-thai-shorts', name: 'Muay Thai Shorts', brand: 'Fairtex', palette: 'fairtex',
    category: 'kleding', price: 3495, oldPrice: null, badge: null,
    short: 'Authentieke wijde Muay Thai shorts.',
    description: 'Authentieke Fairtex Muay Thai shorts van satijn, met wijde pijpen voor maximale bewegingsvrijheid bij het trappen.',
    specs: ['Satijn', 'Wijde pijpen', 'Elastische band', 'Diverse kleuren'],
    sizes: ['S', 'M', 'L', 'XL'], stock: 30 },
  { slug: 'fightpro-trainingsshirt-dry', name: 'Trainingsshirt Dry', brand: 'FightPro', palette: 'fightpro',
    category: 'kleding', price: 1995, oldPrice: null, badge: 'Eigen merk',
    short: 'Ademend dry-fit trainingsshirt.',
    description: 'Licht en ademend dry-fit shirt dat zweet snel afvoert. Met FightPro logo, ideaal voor training.',
    specs: ['Dry-fit', 'Ademend', 'FightPro logo', 'Slim fit'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'], stock: 40 },

  // ===== Yoga & Fitness =====
  { slug: 'fightpro-yogamat-pro', name: 'Yogamat Pro', brand: 'FightPro', palette: 'fightpro',
    category: 'yoga-fitness', price: 2495, oldPrice: null, badge: null,
    short: 'Antislip yogamat van 6 mm.',
    description: 'Comfortabele en antislip yogamat van 6 mm dik, inclusief draagriem. Voor yoga, stretching en herstel.',
    specs: ['6 mm dik', 'Antislip', 'Inclusief draagriem', 'Fasevrij materiaal'],
    sizes: ['183 x 61 cm'], stock: 26 },
  { slug: 'matchu-weerstandsbanden-set', name: 'Weerstandsbanden Set', brand: 'Matchu Sports', palette: 'matchu',
    category: 'yoga-fitness', price: 1795, oldPrice: 2295, badge: 'Aanbieding',
    short: 'Set van 5 weerstandsbanden met opbergzak.',
    description: 'Complete set van 5 weerstandsbanden in verschillende sterktes, met opbergzak. Voor kracht, mobiliteit en revalidatie.',
    specs: ['5 sterktes', 'Opbergzak', 'Natuurrubber', 'Oefengids'],
    sizes: ['One size'], stock: 33 },
];

module.exports = { categories, products, palettes };
