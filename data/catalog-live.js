// GEGENEREERD door scripts/build-catalog.py — echte catalogus van fightpro.nl
// (294 producten, 25 merken). Niet met de hand bewerken.

const categories = [
  {
    "slug": "bokshandschoenen-boxing-gloves-box-handschuhe-mma",
    "name": "Handschoenen",
    "parent": null,
    "nav": "group",
    "kind": "glove",
    "blurb": "Bokshandschoenen, kickbokshandschoenen, MMA en meer — pas ze in de winkel."
  },
  {
    "slug": "kickboxing-gloves-leather-handschoenen-leer",
    "name": "Kickbokshandschoenen leer",
    "parent": "bokshandschoenen-boxing-gloves-box-handschuhe-mma",
    "kind": "glove",
    "blurb": ""
  },
  {
    "slug": "kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof",
    "name": "Kickbokshandschoenen Kunststof",
    "parent": "bokshandschoenen-boxing-gloves-box-handschuhe-mma",
    "kind": "glove",
    "blurb": ""
  },
  {
    "slug": "mma-gloves-leer-leder-handschoenen",
    "name": "MMA Gloves",
    "parent": "bokshandschoenen-boxing-gloves-box-handschuhe-mma",
    "kind": "glove",
    "blurb": ""
  },
  {
    "slug": "mma-gloves-pu-kunststof-handschoenen",
    "name": "MMA gloves PU/kunststof",
    "parent": "bokshandschoenen-boxing-gloves-box-handschuhe-mma",
    "kind": "glove",
    "blurb": ""
  },
  {
    "slug": "bag-gloves-boks-zak-handschoenen",
    "name": "Zak handschoenen",
    "parent": "bokshandschoenen-boxing-gloves-box-handschuhe-mma",
    "kind": "glove",
    "blurb": ""
  },
  {
    "slug": "binnen-handschoenen-bokszaktraining",
    "name": "Binnen handschoenen",
    "parent": "bokshandschoenen-boxing-gloves-box-handschuhe-mma",
    "kind": "glove",
    "blurb": ""
  },
  {
    "slug": "bescherming-mma-kickboks-scheen-kruis-hoofd",
    "name": "Bescherming",
    "parent": null,
    "nav": "group",
    "kind": "shield",
    "blurb": "Scheen-, hoofd- en kruisbescherming, gebitsbeschermers en bandages."
  },
  {
    "slug": "scheenbeschermers-shinguards-kickboks-mma",
    "name": "Scheenbeschermers",
    "parent": "bescherming-mma-kickboks-scheen-kruis-hoofd",
    "kind": "shield",
    "blurb": ""
  },
  {
    "slug": "head-protection-helm-hoofd-beschermer",
    "name": "Hoofdbeschermers",
    "parent": "bescherming-mma-kickboks-scheen-kruis-hoofd",
    "kind": "shield",
    "blurb": ""
  },
  {
    "slug": "mouthguards-bitjes-gebitsbeschermer",
    "name": "Gebitsbeschermer",
    "parent": "bescherming-mma-kickboks-scheen-kruis-hoofd",
    "kind": "shield",
    "blurb": ""
  },
  {
    "slug": "groin-kruis-bescherming-tok-toque",
    "name": "Kruis bescherming",
    "parent": "bescherming-mma-kickboks-scheen-kruis-hoofd",
    "kind": "shield",
    "blurb": ""
  },
  {
    "slug": "knie-elleboog-beschermer-knee-elbow-protection",
    "name": "knie-elleboog beschermers",
    "parent": "bescherming-mma-kickboks-scheen-kruis-hoofd",
    "kind": "shield",
    "blurb": ""
  },
  {
    "slug": "bandages-wraps-hand-protectie",
    "name": "Bandages",
    "parent": "bescherming-mma-kickboks-scheen-kruis-hoofd",
    "kind": "shield",
    "blurb": ""
  },
  {
    "slug": "uitrusting",
    "name": "Uitrusting",
    "parent": null,
    "nav": "group",
    "kind": "bag",
    "blurb": "Bokszakken, trap- en stootkussens, sporttassen en fitnessgear."
  },
  {
    "slug": "trap-stoot-pads-kussens",
    "name": "trap/stoot kussens",
    "parent": "uitrusting",
    "kind": "bag",
    "blurb": ""
  },
  {
    "slug": "boxing-bags-heavy-bag-bokszak",
    "name": "Bokszakken",
    "parent": "uitrusting",
    "kind": "bag",
    "blurb": ""
  },
  {
    "slug": "sport-tassen",
    "name": "Sport tassen",
    "parent": "uitrusting",
    "kind": "bag",
    "blurb": ""
  },
  {
    "slug": "fitness-cardio-kracht-conditie",
    "name": "Fitness en cardio",
    "parent": "uitrusting",
    "kind": "bag",
    "blurb": ""
  },
  {
    "slug": "sportvloeren-matten-dojo-tatami",
    "name": "Sportvloeren",
    "parent": "uitrusting",
    "kind": "bag",
    "blurb": ""
  },
  {
    "slug": "tape-mma-kinesiotape-sport-tape-kickboks",
    "name": "Tape",
    "parent": "uitrusting",
    "kind": "bag",
    "blurb": ""
  },
  {
    "slug": "t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen",
    "name": "Kleding",
    "parent": null,
    "nav": "group",
    "kind": "apparel",
    "blurb": "Broekjes, shirts, BJJ-wear en fightwear voor dames."
  },
  {
    "slug": "muay-thai-short-kickboks-broekjes",
    "name": "Broekjes",
    "parent": "t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen",
    "kind": "apparel",
    "blurb": ""
  },
  {
    "slug": "t-shirts",
    "name": "T-Shirts",
    "parent": "t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen",
    "kind": "apparel",
    "blurb": ""
  },
  {
    "slug": "braziliaans-jiu-jitsu-bjj-artikelen",
    "name": "BJJ",
    "parent": "t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen",
    "kind": "apparel",
    "blurb": ""
  },
  {
    "slug": "women-collection-fightwear",
    "name": "Women Collection fightwear",
    "parent": "t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen",
    "kind": "apparel",
    "blurb": ""
  },
  {
    "slug": "kids-kickboxing-wear-gear",
    "name": "Kids",
    "parent": null,
    "nav": "single",
    "kind": "glove",
    "blurb": "Complete kids-lijnen: handschoenen, beschermers en kleding."
  },
  {
    "slug": "sportvoeding-pre-workout-eiwit-supplementen",
    "name": "Voeding",
    "parent": null,
    "nav": "single",
    "kind": "apparel",
    "blurb": "Supplementen en sportvoeding van ESN en Bio Tech."
  },
  {
    "slug": "outlet-aanbiedingen-vechtsport-mma-kickboksen",
    "name": "Outlet",
    "parent": null,
    "nav": "single",
    "kind": "bag",
    "blurb": "Laatste stuks met flinke korting."
  },
  {
    "slug": "diversen",
    "name": "Diversen",
    "parent": null,
    "nav": "single",
    "kind": "wrap",
    "blurb": "Accessoires, verzorging en al het andere voor de vechtsporter."
  }
];

const products = [
  {
    "slug": "fightpro-stootpads-rood-zwart-leren-focus-pads-voor-boksen-kickboksen-2",
    "name": "FIGHTPRO STOOTPADS ROOD/ZWART – LEREN FOCUS PADS VOOR BOKSEN & KICKBOKSEN",
    "brand": "Fightpro",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 8995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "PROFESSIONELE LEREN HANDPADS VOOR INTENSIEVE TRAINING",
    "description": "PROFESSIONELE LEREN HANDPADS VOOR INTENSIEVE TRAINING\n\nDe Fightpro stootpads rood/zwart zijn ontwikkeld voor intensieve stoot- en combinatietraining. Dankzij het hoogwaardige leer bieden deze focus pads een lange levensduur, uitstekende schokabsorptie en optimaal trainingscomfort.\n\nDe ergonomische vorm zorgt voor een stabiele en veilige handpositie, terwijl de meerlaagse padding harde stoten effectief opvangt. Ideaal voor trainers en sporters binnen boksen, kickboksen, Muay Thai en MMA.\n\nVOORDELEN VAN DE FIGHTPRO STOOTPADS\n\n• Gemaakt van hoogwaardig en duurzaam leer\n\n• Uitstekende schokabsorptie\n\n• Ergonomische pasvorm voor stevige grip\n\n• Lichtgewicht ontwerp voor snelle combinaties\n\n• Comfortabel voor trainer en sporter\n\n• Geschikt voor intensieve trainingen\n\nGESCHIKT VOOR\n\n• Boksen\n\n• Kickboksen\n\n• Muay Thai\n\n• MMA\n\n• Pads training\n\n• Combinatie- en snelheidstraining",
    "specs": [
      "Gemaakt van hoogwaardig en duurzaam leer",
      "Uitstekende schokabsorptie",
      "Ergonomische pasvorm voor stevige grip",
      "Lichtgewicht ontwerp voor snelle combinaties",
      "Comfortabel voor trainer en sporter",
      "Geschikt voor intensieve trainingen"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/05/IMG_1675.jpeg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/05/IMG_1675.jpeg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-stootpads-rood-zwart-leren-focus-pads-voor-boksen-kickboksen-2/"
  },
  {
    "slug": "fightpro-stootpads-rood-zwart-leren-focus-pads-voor-boksen-kickboksen",
    "name": "FIGHTPRO THAI KICK PADS / TRAPSTOOT PADS LEER",
    "brand": "Fightpro",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 17995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "PROFESSIONELE STOOT- EN TRAP PADS VOOR MUAY THAI EN KICKBOKSEN",
    "description": "PROFESSIONELE STOOT- EN TRAP PADS VOOR MUAY THAI EN KICKBOKSEN\n\nDe Fightpro Trittschlagpolster (Thai kick pads) zijn speciaal ontwikkeld voor intensieve trap- en stoottraining. Gemaakt van hoogwaardig, slijtvast leer bieden deze pads een duurzame en professionele trainingsoplossing voor dagelijks gebruik in gyms en vechtsportscholen.\n\nDe stevige schuimvulling absorbeert krachtige trappen en stoten optimaal en geeft tegelijkertijd realistische feedback aan de sporter. Dit maakt ze ideaal voor techniek-, kracht- en combinatietraining.\n\nDankzij het ergonomische ontwerp en de stevige handgrepen liggen de pads comfortabel en stabiel in de hand, zelfs tijdens lange en intensieve sessies.\n\nVOORDELEN VAN DE FIGHTPRO THAI KICK PADS\n\n• Gemaakt van hoogwaardig echt leer\n\n• Zeer duurzaam en slijtvast\n\n• Stevige schuimvulling voor optimale demping\n\n• Ergonomische handgrepen voor veilige grip\n\n• Geschikt voor intensieve training\n\n• Professionele gym kwaliteit\n\nGESCHIKT VOOR\n\n• Kickboksen\n\n• Muay Thai\n\n• Boksen\n\n• MMA\n\n• Pad training en combinaties\n\n• Techniek- en krachttraining",
    "specs": [
      "Gemaakt van hoogwaardig echt leer",
      "Zeer duurzaam en slijtvast",
      "Stevige schuimvulling voor optimale demping",
      "Ergonomische handgrepen voor veilige grip",
      "Geschikt voor intensieve training",
      "Professionele gym kwaliteit"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/05/IMG_1673.jpeg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/05/IMG_1673.jpeg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-stootpads-rood-zwart-leren-focus-pads-voor-boksen-kickboksen/"
  },
  {
    "slug": "fightpro-scheenbeschermers-impact",
    "name": "Fightpro scheenbeschermers IMPACT",
    "brand": "Fightpro",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 7495,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "Fightpro scheenbeschermers IMPACT. Meerdere maten!",
    "description": "Fightpro IMPACT Scheenbeschermers – Skintex\n\nDe Fightpro IMPACT scheenbeschermers zijn ontworpen voor intensieve trainingen in kickboksen, Muay Thai en andere vechtsporten. Dankzij het sterke Skintex materiaal combineren deze scheenbeschermers duurzaamheid met een comfortabele pasvorm.\n\nDe meerlaagse padding zorgt voor een goede schokabsorptie, waardoor schenen en wreef optimaal beschermd worden tijdens sparring en training. Door de ergonomische vorm sluiten de scheenbeschermers goed aan op het been en blijven ze stevig op hun plaats.\n\nDe zwarte uitvoering met wit Fightpro-logo geeft de IMPACT scheenbeschermers een krachtige en professionele uitstraling die perfect past in iedere gym.\n\nKenmerken\n\n• \nGemaakt van duurzaam Skintex\n\n• \nSterke padding voor optimale bescherming\n\n• \nComfortabele en ergonomische pasvorm\n\n• \nGeschikt voor kickboksen, Muay Thai en sparring\n\n• \nZwart design met wit Fightpro logo\n\nDe Fightpro IMPACT scheenbeschermers zijn een betrouwbare keuze voor sporters die kwaliteit, bescherming en comfort zoeken tijdens elke training.",
    "specs": [
      "Gemaakt van duurzaam Skintex",
      "Sterke padding voor optimale bescherming",
      "Comfortabele en ergonomische pasvorm",
      "Geschikt voor kickboksen, Muay Thai en sparring",
      "Zwart design met wit Fightpro logo"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/03/fightpro-Schienbeinschutz-Impact-Skintex-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/03/fightpro-Schienbeinschutz-Impact-Skintex-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/fightpro-Schienbeinschutz-Impact-Skintex.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/fightpro-Schienbeinschutz-Impact-Skintex-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/fightpro-Schienbeinschutz-Impact-Skintex-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/fightpro-Schienbeinschutz-Impact-Skintex-4.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-scheenbeschermers-impact/"
  },
  {
    "slug": "fightpro-silentbands-geruisloze-bokszakophanging",
    "name": "Fightpro SilentBands – Geruisloze bokszakophanging",
    "brand": "Fightpro",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 1495,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "Fightpro SilentBands – Geruisloze bokszakophanging",
    "description": "SilentBands – Geruisloze en sterke spanbanden voor bokszakophanging\n\nDe SilentBands spanbanden zijn speciaal ontwikkeld als alternatief voor traditionele kettingen bij het ophangen van een bokszak. Kettingen kunnen tijdens het trainen veel geluid maken. Met deze spanbanden wordt de bokszak stil, stevig en duurzaam bevestigd.\n\nDe SilentBands zijn gemaakt van sterke materialen en ontworpen om hoge belasting aan te kunnen, ook bij intensieve bokstraining of dagelijks gebruik. Door hun robuuste constructie en betrouwbaarheid worden ze inmiddels in verschillende sportscholen en trainingsruimtes gebruikt.\n\nDankzij het flexibele materiaal ontstaat er minder metaal-op-metaal geluid, wat zorgt voor een rustigere trainingsomgeving.\n\nLet op: Karabijnhaken worden niet meegeleverd en dienen apart te worden aangeschaft.\n\nKenmerken\n\n• \nOntwikkeld voor het ophangen van bokszakken\n\n• \nGeruisloos alternatief voor kettingen\n\n• \nSterke en duurzame constructie\n\n• \nGeschikt voor intensief gebruik\n\n• \nIdeaal voor boksen, kickboksen en bokszaktraining",
    "specs": [
      "Ontwikkeld voor het ophangen van bokszakken",
      "Geruisloos alternatief voor kettingen",
      "Sterke en duurzame constructie",
      "Geschikt voor intensief gebruik",
      "Ideaal voor boksen, kickboksen en bokszaktraining"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-Boxsack-Aufhangung-silent-bands.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-Boxsack-Aufhangung-silent-bands.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-Boxsack-Aufhangung-silent-bands-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-Boxsack-Aufhangung-silent-bands-2.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-silentbands-geruisloze-bokszakophanging/"
  },
  {
    "slug": "fightpro-kickbokshandschoenen-12rounds-leer",
    "name": "Fightpro kickbokshandschoenen 12Rounds leer",
    "brand": "Fightpro",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 5995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "De “Fightpro de Luxe” black-on-black bokshandschoen staat bekend om de goede polsbescherming en zit erg aangenaam.",
    "description": "12 Rounds Leren Bokshandschoenen – Echt leer voor slechts €59,95\n\nDe 12 Rounds leren bokshandschoenen staan voor discipline, doorzettingsvermogen en echt trainen in de gym. Geïnspireerd door het klassieke 12-ronden kampioenschapsidee uit het boksen, ontwikkeld voor sporters die techniek en kracht willen combineren.\n\nGemaakt van 100% echt leer bieden deze bokshandschoenen een kwaliteit die je in deze prijsklasse zelden ziet. Met een prijs van slechts €59,95 zijn ze een uitstekende keuze voor ambitieuze beginners, fanatieke sporters en ervaren vechters.\n\nDe ergonomische vorm ondersteunt een natuurlijke vuistpositie en helpt bij een gecontroleerde en krachtige stoot. Daardoor zijn de handschoenen perfect geschikt voor bokstraining, kickboksen, bokszaktraining, pads en sparren.\n\nVoordelen van de 12 Rounds bokshandschoenen\n\n✔ Gemaakt van echt leer✔ Slechts €59,95✔ Geschikt voor boksen en kickboksen✔ Goede schokabsorptie✔ Stevige klittenbandsluiting voor extra polsstabiliteit✔ Sterke prijs-kwaliteitverhouding\n\nOf je nu werkt aan klassieke bokscombinaties of intensieve kickbokstraining doet – de 12 Rounds leren bokshandschoenen zijn gemaakt voor sporters met een echte vechtersmentaliteit.\n\nTrain elke ronde alsof het de twaalfde is.",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz",
      "4 oz",
      "6 oz",
      "8 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-boxhandschuhe-12rounds-Leder.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-boxhandschuhe-12rounds-Leder.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-boxhandschuhe-12rounds-Leder-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-boxhandschuhe-12rounds-Leder-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-boxhandschuhe-12rounds-Leder-3.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-kickbokshandschoenen-12rounds-leer/"
  },
  {
    "slug": "fightpro-kickbokshandschoenen-titan-top-kwaliteit-leer-zwart-wit",
    "name": "Fightpro kickbokshandschoenen TITAN Top kwaliteit leer Zwart/Wit",
    "brand": "Fightpro",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 10995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "De “Fightpro TITAN” White-on-black bokshandschoen staat bekend om de goede polsbescherming en zit erg aangenaam.",
    "description": "TITAN Leren Bokshandschoenen – Professionele kwaliteit voor serieus trainen, ook voor boksers\n\nDe TITAN leren bokshandschoenen staan voor betrouwbare kwaliteit en een professionele uitstraling. Gemaakt van hoogwaardig echt leer, bieden deze handschoenen uitstekende duurzaamheid, stabiliteit en een comfortabele pasvorm – precies wat sporters verwachten tijdens intensieve trainingen.\n\nDe ergonomische vorm ondersteunt een natuurlijke vuistpositie, terwijl de meervoudige padding zorgt voor goede schokabsorptie. Hierdoor zijn de handschoenen perfect geschikt voor bokstraining, kickboksen, sparren en bokszaktraining.\n\nDit model wordt veel gebruikt tijdens intensieve trainingen en staat bekend om zijn sterke afwerking en lange levensduur – ronde na ronde.\n\nVoordelen\n\n• \nGemaakt van 100% echt leer\n\n• \nComfortabele en stabiele pasvorm\n\n• \nGoede ondersteuning van de pols\n\n• \nGeschikt voor boksen en kickboksen\n\n• \nDuurzame en robuuste afwerking\n\nDe TITAN bokshandschoenen zijn gemaakt voor sporters die tijdens hun training kiezen voor kwaliteit en betrouwbaarheid.",
    "specs": [
      "Gemaakt van 100% echt leer",
      "Comfortabele en stabiele pasvorm\n\n• \nGoede ondersteuning van de pols",
      "Geschikt voor boksen en kickboksen",
      "Duurzame en robuuste afwerking"
    ],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz",
      "4 oz",
      "6 oz",
      "8 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-titan-black-white.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-titan-black-white.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-kali-black-white-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-kali-black-white-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-kali-black-white-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-kali-black-white-5.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-kickbokshandschoenen-titan-top-kwaliteit-leer-zwart-wit/"
  },
  {
    "slug": "px-legacy-thai-shorts-mesh-burgundy",
    "name": "PX Legacy Thai Shorts , Mesh, Burgundy",
    "brand": "PX",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 3995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "PX Legacy Thai Shorts , Mesh, Burgundy",
    "description": "PX Legacy Thai Shorts , Mesh, Burgundy",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/12/PX-Legacy-Thai-Shorts-Mesh-burgundy2.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/12/PX-Legacy-Thai-Shorts-Mesh-burgundy2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/12/PX-Legacy-Thai-Shorts-Mesh-burgundy.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/12/PX-Legacy-Thai-Shorts-Mesh-burgundy3.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/px-legacy-thai-shorts-mesh-burgundy/"
  },
  {
    "slug": "px-legacy-thai-shorts-mesh-white",
    "name": "PX Legacy Thai Shorts , Mesh, white",
    "brand": "PX",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 3995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "PX Legacy Thai Shorts , Mesh, white",
    "description": "PX Legacy Thai Shorts , Mesh, white",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/12/PX-Legacy-Thai-Shorts-Mesh-white.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/12/PX-Legacy-Thai-Shorts-Mesh-white.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/12/PX-Legacy-Thai-Shorts-Mesh-white2.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/px-legacy-thai-shorts-mesh-white/"
  },
  {
    "slug": "fightpro-kickbokshandschoenen-kali-top-kwaliteit-leer",
    "name": "Fightpro kickbokshandschoenen KALI Top kwaliteit leer",
    "brand": "Fightpro",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 10995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "De “Fightpro KALI” black-on-black bokshandschoen staat bekend om de goede polsbescherming en zit erg aangenaam.",
    "description": "FightPro KALI Kickbokshandschoenen – Topkwaliteit Echt Leer\n\nDe FightPro KALI kickbokshandschoenen zijn ontworpen voor vechters die kracht, precisie en stijl willen combineren. Gemaakt van hoogwaardig rundleer en voorzien van een strakke anatomische pasvorm, bieden deze handschoenen optimale bescherming, duurzaamheid en comfort — of je nu traint voor kracht, techniek of competitie.\n\nDe naam “KALI” is geïnspireerd op de Hindoe-godin Kali, symbool van onoverwinnelijke kracht, transformatie en vernietiging van zwakte. Net als de godin zelf, staan deze handschoenen voor intensiteit, focus en dominantie in de ring.\n\nMet hun premium afwerking, stevige polssluiting en schokabsorberende vulling zijn de FightPro KALI-handschoenen gebouwd om elke uitdaging aan te kunnen — van zware sparringssessies tot harde padtrainingen.\n\nKenmerken:\n\n• \nGemaakt van 100% topkwaliteit rundleer\n\n• \nDubbel gestikte naden voor extra duurzaamheid\n\n• \nGeavanceerde foamvulling voor maximale schokabsorptie\n\n• \nBrede klittenbandsluiting voor optimale polssteun\n\n• \nVentilatiezones voor fris en comfortabel trainen\n\n• \nVerkrijgbaar in meerdere gewichten (10 oz – 16 oz)\n\nFightPro KALI – Unleash the Power Within.",
    "specs": [
      "Gemaakt van 100% topkwaliteit rundleer",
      "Dubbel gestikte naden voor extra duurzaamheid",
      "Geavanceerde foamvulling voor maximale schokabsorptie",
      "Brede klittenbandsluiting voor optimale polssteun",
      "Ventilatiezones voor fris en comfortabel trainen",
      "Verkrijgbaar in meerdere gewichten (10 oz – 16 oz)"
    ],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz",
      "4 oz",
      "6 oz",
      "8 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-kali.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-kali.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-KALI-Leder-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-KALI-Leder-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-KALI-Leder-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/10/FIGHTPRO-boxhandschuhe-KALI-Leder-5.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-kickbokshandschoenen-kali-top-kwaliteit-leer/"
  },
  {
    "slug": "fightpro-kickbokshandschoenen-shadow-leer",
    "name": "Fightpro kickbokshandschoenen SHADOW leer",
    "brand": "Fightpro",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 6995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "De “Fightpro de Luxe” black-on-black bokshandschoen staat bekend om de goede polsbescherming en zit erg aangenaam.",
    "description": "Fightpro kickbokshandschoenen SHADOW leer black-on-black look.\n\nVoor de beginner, maar ook voor de GEVORDERDE kickboksers. Fightpro-kickbokshandschoenen! De “Fightpro SHADOW”  bokshandschoen van hoogwaardig leer is bedoeld voor de serieuze bokser/kickbokser. De bokshandschoen is voorzien van een zeer goede terugtrekkende klittenbandsluiting die de pols erg goed beschermt.\nEcht leer en fijne pasvorm",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz",
      "4 oz",
      "6 oz",
      "8 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/04/FIGHTPRO-boxhandschuhe-shadow-Leder.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/04/FIGHTPRO-boxhandschuhe-shadow-Leder.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/04/FIGHTPRO-boxhandschuhe-shadow-Leder-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/04/FIGHTPRO-boxhandschuhe-shadow-Leder-3.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-kickbokshandschoenen-shadow-leer/"
  },
  {
    "slug": "px-legacy-thai-shorts-mesh-black",
    "name": "PX Legacy Thai Shorts , Mesh, black",
    "brand": "PX",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 3995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "PX Legacy Thai Shorts , Mesh, black",
    "description": "PX Legacy Thai Shorts , Mesh, black",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/11/PX-Legacy-Thai-Shorts-Mesh-black.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/11/PX-Legacy-Thai-Shorts-Mesh-black.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/11/PX-Legacy-Thai-Shorts-Mesh-black-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/11/PX-Legacy-Thai-Shorts-Mesh-black-2.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/px-legacy-thai-shorts-mesh-black/"
  },
  {
    "slug": "fightpro-kickboks-broekje-black-on-black",
    "name": "Fightpro kickboks-broekje black-on-black",
    "brand": "Fightpro",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 3495,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "Fightpro kickboks-broekje black-on-black",
    "description": "Fightpro kickboks-broekje black-on-black, goede kwaliteit met geborduurd FIGHTPRO logo.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/10/Kickboxhose-Muay-Thai-Shorts-Fightpro.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Kickboxhose-Muay-Thai-Shorts-Fightpro.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Kickboxhose-Muay-Thai-Shorts-Fightpro-back.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/FIGHTPRO-kickboks-broekje-geborduurd1.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/fightpro-kickboks-broekje-black-on-black/"
  },
  {
    "slug": "fightpro-scheenbeschermers-skintex-black-on-black",
    "name": "Fightpro scheenbeschermers deLuxe black-on-black",
    "brand": "Fightpro",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 7495,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "Fightpro scheenbeschermers black-on-black. Meerdere maten!",
    "description": "Voor alle kickboksers geschikt, van beginner tot gevorderd. Fightpro shinguards!\n\nDe scheenbeschermers zijn gemaakt van van hoogwaardige skintex en doen niets onder voor de leren variant.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/10/fightpro-Schienbeinschutz-deluxe.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/10/fightpro-Schienbeinschutz-deluxe.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/fightpro-Schienbeinschutz-deluxe-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/fightpro-Schienbeinschutz-deluxe-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/fightpro-Schienbeinschutz-deluxe-3.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-scheenbeschermers-skintex-black-on-black/"
  },
  {
    "slug": "fightpro-kickbokshandschoenen-de-luxe-zwart",
    "name": "Fightpro-kickbokshandschoenen-DE LUXE Zwart",
    "brand": "Fightpro",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 9995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "De “Fightpro de Luxe” black-on-black bokshandschoen staat bekend om de goede polsbescherming en zit erg aangenaam.",
    "description": "Fightpro-kickbokshandschoenen-DE LUXE Zwart, met coole black-on-black look.\n\nVoor de GEVORDERDE kickboksers. Fightpro-kickbokshandschoenen! De “Fightpro de Luxe”  bokshandschoen van hoogwaardig leer is bedoeld voor de serieuze bokser/kickbokser. Zwart en tijdloos met een rand koolstofvezeleffect.\nDe bokshandschoen is voorzien van een zeer goede terugtrekkende klittenbandsluiting die de pols erg goed beschermt.\nDe suède leren duim is erg praktisch om zweet te wissen van je gezicht.",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz",
      "4 oz",
      "6 oz",
      "8 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/11/fightpro-boxhandschuhe-de-luxe-leder.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/11/fightpro-boxhandschuhe-de-luxe-leder.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/11/fightpro-boxhandschuhe-de-luxe-leder-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/11/fightpro-boxhandschuhe-de-luxe-leder-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/11/fightpro-boxhandschuhe-de-luxe-leder-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/11/fightpro-boxhandschuhe-de-luxe-leder-5.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-kickbokshandschoenen-de-luxe-zwart/"
  },
  {
    "slug": "fightpro-kick-shield-trapkussen",
    "name": "FIGHTPRO Kick shield / Trapkussen",
    "brand": "Fightpro",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 9995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "FIGHTPRO Kick shield / Trapkussen",
    "description": "FIGHTPRO Kick shield / Trapkussen\nSportschool kwaliteit, maar ook zeer geschikt voor thuis. Niet gebruiken met schoenen aan.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/05/Trittkissen-Kickpolster-Trittpolster-75x35x15-cm.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/05/Trittkissen-Kickpolster-Trittpolster-75x35x15-cm.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/05/FIGHTPRO-kick-pad-trapkussen1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/05/Trittkissen-Kickpolster-Trittpolster-75x35x15-cm-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/05/FIGHTPRO-kick-pad-trapkussen.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-kick-shield-trapkussen/"
  },
  {
    "slug": "fightpro-focus-mitt-stoot-pads",
    "name": "FIGHTPRO Focus mitt / stoot pads",
    "brand": "Fightpro",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 4495,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "FIGHTPRO STOOT PAD ZWART",
    "description": "FIGHTPRO STOOT PAD ZWART\nAan de achterkant zit extra padding voor de pols. Geschikt voor thuis maar ook voor de sportschool. Gemaakt van hoogwaardige kunststof.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/05/Fightpro-Handpratzen-Schlagpolster-Focus-Pads-Schwarz-PU.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/05/Fightpro-Handpratzen-Schlagpolster-Focus-Pads-Schwarz-PU.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/05/Fightpro-Handpratzen-Schlagpolster-Focus-Pads-Schwarz-PU-2.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-focus-mitt-stoot-pads/"
  },
  {
    "slug": "venum-ufc-fight-week-snapback-pet-cap-black",
    "name": "VENUM UFC FIGHT WEEK SNAPBACK PET CAP BLACK",
    "brand": "Venum",
    "palette": null,
    "category": "diversen",
    "price": 2995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "VENUM UFC FIGHT WEEK SNAPBACK PET CAP BLACK",
    "description": "VENUM UFC FIGHT WEEK SNAPBACK PET CAP BLACK",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/11/VENUM-UFC-FIGHT-WEEK-SNAPBACK-PET-CAP-BLACK.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/11/VENUM-UFC-FIGHT-WEEK-SNAPBACK-PET-CAP-BLACK.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/VENUM-UFC-FIGHT-WEEK-SNAPBACK-PET-CAP-BLACK2.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/venum-fightwear-holland/venum-ufc-fight-week-snapback-pet-cap-black/"
  },
  {
    "slug": "fightpro-glove-care-odor-remover",
    "name": "Fightpro Glove Care Odor remover",
    "brand": "Fightpro",
    "palette": null,
    "category": "diversen",
    "price": 995,
    "oldPrice": null,
    "badge": "Bestseller",
    "short": "Stinkende handschoenen, schoenen, scheenbeschermers? Dat is nu verleden tijd. Goed werkend geurvernietiger voor sport materialen. Ruikt niet alleen aangenaam, m",
    "description": "Stinkende handschoenen, schoenen, scheenbeschermers? Dat is nu verleden tijd. Goed werkend geurvernietiger voor sport materialen. Ruikt niet alleen aangenaam, maar doodt ook de bacteriën.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/07/Fightpro-anti-stink-Glove-Care-Odor-remover1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/07/Fightpro-anti-stink-Glove-Care-Odor-remover1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/07/IMG_7118.jpg"
    ],
    "bestseller": true,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-glove-care-odor-remover/"
  },
  {
    "slug": "fightpro-pink-unicorn-scheenbeschermers-kids-legends",
    "name": "Fightpro Pink Unicorn scheenbeschermers kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Stoere Pink Unicorn scheen beschermers voor kids. Mooi te combineren met handschoenen, shirt broekje en tas van dezelfde lijn.",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro Pink Unicorn scheenbeschermers kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-scheenbeschermers-eenhoorn.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-scheenbeschermers-eenhoorn.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-pink-unicorn-scheenbeschermers-kids-legends/"
  },
  {
    "slug": "fightpro-ice-wolf-scheenbeschermers-kids-legends",
    "name": "Fightpro Ice Wolf scheenbeschermers kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Stoere Ice Wolf scheen beschermers voor kids. Mooi te combineren met handschoenen, shirt broekje en tas van dezelfde lijn.",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro Ice Wolf scheenbeschermers kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-scheenbeschermers-wolf.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-scheenbeschermers-wolf.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-ice-wolf-scheenbeschermers-kids-legends/"
  },
  {
    "slug": "fightpro-ice-wolf-sport-tas-kids-legends",
    "name": "Fightpro Ice Wolf sport tas kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Stoere pink unicorn sporttas voor kids. Mooi te combineren met handschoenen, shirt, broekje en scheenbeschermers van dezelfde lijn.",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro Ice Wolf tas kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-sporttas-kids-WOLF.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-sporttas-kids-WOLF.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-ice-wolf-sport-tas-kids-legends/"
  },
  {
    "slug": "fightpro-pink-unicorn-sport-tas-kids-legends",
    "name": "Fightpro pink unicorn sport tas kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Stoere pink unicorn sporttas voor kids. Mooi te combineren met handschoenen, shirt, broekje en scheenbeschermers van dezelfde lijn.",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro pink unicorn tas kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-sporttas-kids-eenhoorn.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-sporttas-kids-eenhoorn.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-pink-unicorn-sport-tas-kids-legends/"
  },
  {
    "slug": "fightpro-ice-wolf-t-shirt-kids",
    "name": "Fightpro ICE WOLF / T-shirt kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro ICE WOLF / T-shirt kids . Mooi te combineren met handschoenen, Broekje, tas en scheenbeschermers van dezelfde lijn. te verkrijgen in de maten: • 128…",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro ICE WOLF / T-shirt kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-kickboks-t-shirt-Ice-wolf.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-kickboks-t-shirt-Ice-wolf.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-ice-wolf-t-shirt-kids/"
  },
  {
    "slug": "fightpro-pink-unicorn-roze-eenhoorn-t-shirt-kids",
    "name": "Fightpro PINK UNICORN roze eenhoorn / T-shirt kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro PINK UNICORN roze eenhoorn / T-shirt voor kids. Mooi te combineren met handschoenen, Broekje, tas en scheenbeschermers van dezelfde lijn. te verkrij…",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro PINK UNICORN roze eenhoorn / T-shirt kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-kickboks-t-shirt-PINK-UNICORN.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-kickboks-t-shirt-PINK-UNICORN.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-pink-unicorn-roze-eenhoorn-t-shirt-kids/"
  },
  {
    "slug": "fightpro-ice-wolf-broekje-kids",
    "name": "Fightpro ICE WOLF  / broekje kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro ICE WOLF broekje kids ,kickboks broekje voor kids. Mooi te combineren met handschoenen, shirt , tas en scheenbeschermers van dezelfde lijn. te verkr…",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro ICE WOLF / broekje kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-kickboks-broekje-ice-wolf.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-kickboks-broekje-ice-wolf.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/fightpro-ice-wolf-broekje-kids/"
  },
  {
    "slug": "fightpro-pink-unicorn-roze-eenhoorn-broekje-kids",
    "name": "Fightpro PINK UNICORN LEGEND roze eenhoorn / broekje kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro PINK UNICORN roze eenhoorn / broekje kids ,kickboks broekje voor kids. Mooi te combineren met handschoenen, shirt , tas en scheenbeschermers van dez…",
    "description": "LEGENDS KIDS COLLECTION\n\nFightpro PINK UNICORN roze eenhoorn / broekje kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-kickboks-broekje-PINK-UNICORN.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/FIGHTPRO-kickboks-broekje-PINK-UNICORN.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/fightpro-pink-unicorn-roze-eenhoorn-broekje-kids/"
  },
  {
    "slug": "elleboog-beschermers-mma-muay-thai",
    "name": "Elleboog beschermers MMA- Muay Thai",
    "brand": "PX",
    "palette": null,
    "category": "knie-elleboog-beschermer-knee-elbow-protection",
    "price": 1895,
    "oldPrice": null,
    "badge": null,
    "short": "Elleboog beschermers MMA- Muay Thai",
    "description": "Elleboog beschermers MMA- Muay Thai",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/PX-elleboogbeschermermuay-thai-kickbox-mma.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/PX-elleboogbeschermermuay-thai-kickbox-mma.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/knie-elleboog-beschermer-knee-elbow-protection/elleboog-beschermers-mma-muay-thai/"
  },
  {
    "slug": "joya-kniebeschermers-mma-grappling",
    "name": "Joya kniebeschermers MMA-Grappling",
    "brand": "Joya",
    "palette": null,
    "category": "knie-elleboog-beschermer-knee-elbow-protection",
    "price": 1995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya kniebeschermers MMA-Grappling",
    "description": "Joya kniebeschermers MMA-Grappling",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/JOYA-kniebeschermers-MMA-Grappling.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/JOYA-kniebeschermers-MMA-Grappling.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-kniebeschermers-mma-grappling/"
  },
  {
    "slug": "px-kniebeschermers-mma-grappling",
    "name": "PX kniebeschermers MMA-Grappling",
    "brand": "PX",
    "palette": null,
    "category": "knie-elleboog-beschermer-knee-elbow-protection",
    "price": 1895,
    "oldPrice": null,
    "badge": null,
    "short": "PX kniebeschermers MMA-Grappling",
    "description": "PX kniebeschermers MMA-Grappling",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/PX-kniebeschermers-MMA-Grappling.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/PX-kniebeschermers-MMA-Grappling.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/knie-elleboog-beschermer-knee-elbow-protection/px-kniebeschermers-mma-grappling/"
  },
  {
    "slug": "fightpro-zakhandschoenen-vintage-leer-zwart",
    "name": "Fightpro Zakhandschoenen Vintage Leer Zwart",
    "brand": "Joya",
    "palette": null,
    "category": "bag-gloves-boks-zak-handschoenen",
    "price": 5995,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro Zakhandschoenen Leer Zwart",
    "description": "Fightpro zakhandschoenen van hoogwaardig leer in zwart en bruin. Ideaal voor bokszaktraining, pads en techniekwerk. Duurzaam, comfortabel en perfect voor intensief gebruik in boksen en kickboksen.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/fightpro-zakhandschoene-bag-gloves-black-leather-vintage.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/fightpro-zakhandschoene-bag-gloves-black-leather-vintage.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/fightpro-zakhandschoenen-vintage-leer-zwart/"
  },
  {
    "slug": "fightpro-zakhandschoenen-vintage-leer-bruin",
    "name": "Fightpro Zakhandschoenen Vintage Leer Bruin",
    "brand": "Joya",
    "palette": null,
    "category": "bag-gloves-boks-zak-handschoenen",
    "price": 5995,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro Zakhandschoenen Leer Bruin",
    "description": "Fightpro zakhandschoenen van hoogwaardig leer in zwart en bruin. Ideaal voor bokszaktraining, pads en techniekwerk. Duurzaam, comfortabel en perfect voor intensief gebruik in boksen en kickboksen.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/fightpro-zakhandschoene-bag-gloves-brown-leather-vintage.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/fightpro-zakhandschoene-bag-gloves-brown-leather-vintage.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/fightpro-zakhandschoenen-vintage-leer-bruin/"
  },
  {
    "slug": "joya-mma-handschoen-essential-black-on-black",
    "name": "JOYA MMA Handschoen Essential black on black",
    "brand": "Joya",
    "palette": null,
    "category": "mma-gloves-leer-leder-handschoenen",
    "price": 4495,
    "oldPrice": null,
    "badge": null,
    "short": "Mooie prijs/kwaliteit verhouding JOYA MMA Handschoen Essential black on black",
    "description": "JOYA MMA Handschoen Essential black on black",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/JOYA-MMA-ESSENTIAL-HANDSCHOEN-ZWART-ZWART.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/JOYA-MMA-ESSENTIAL-HANDSCHOEN-ZWART-ZWART.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-mma-handschoen-essential-black-on-black/"
  },
  {
    "slug": "booster-fight-gear-helm-hoofdbeschermer-hglb-2",
    "name": "Booster Fight Gear Helm hoofdbeschermer – HGLB 2",
    "brand": "Booster",
    "palette": null,
    "category": "head-protection-helm-hoofd-beschermer",
    "price": 4595,
    "oldPrice": null,
    "badge": null,
    "short": "Junior hoofdbeschermer / helm voor boksen en kickboksen. Booster Fight Gear Helm hoofdbeschermer – HGLB 2",
    "description": "Booster Fight Gear Helm hoofdbeschermer – HGLB 2",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/06/Booster-Helm-hoofdbeschermer-–HGLB2.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/06/Booster-Helm-hoofdbeschermer-–HGLB2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/06/Booster-Helm-hoofdbeschermer-–HGLB2-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/06/Booster-Helm-hoofdbeschermer-–HGLB2-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/06/Booster-Helm-hoofdbeschermer-–HGLB2-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/06/Booster-Helm-hoofdbeschermer-–HGLB2-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-fight-gear-helm-hoofdbeschermer-hglb-2/"
  },
  {
    "slug": "fightpro-pink-unicorn-bokshandschoenen-kids",
    "name": "Fightpro Pink Unicorn bokshandschoenen kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4495,
    "oldPrice": null,
    "badge": null,
    "short": "Stoere Roze Eenhoorn bokshandschoenen voor kids. Mooi te combineren met scheenbeschermers , shirt , broekje en tas van dezelfde lijn. verkrijgbaar in de mate…",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro Pink Unicorn bokshandschoenen kids van LEGENDS lijn",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/05/FIGHTPRO-bokshandschoenen-kids-unicorn-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/05/FIGHTPRO-bokshandschoenen-kids-unicorn-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/05/FIGHTPRO-bokshandschoenen-kids-unicorn-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-pink-unicorn-bokshandschoenen-kids/"
  },
  {
    "slug": "fightpro-ice-wolf-bokshandschoenen-kids",
    "name": "Fightpro Ice Wolf bokshandschoenen kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4495,
    "oldPrice": null,
    "badge": null,
    "short": "Stoere Wolf bokshandschoenen voor kids. Mooi te combineren met scheenbeschermers , shirt , broekje en tas van dezelfde lijn. verkrijgbaar in de maten: • 4 oz…",
    "description": "LEGENDS KIDS COLLECTION\n\nFightpro Ice Wolf bokshandschoenen kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/05/FIGHTPRO-bokshandschoenen-kids-WOLF-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/05/FIGHTPRO-bokshandschoenen-kids-WOLF-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/05/FIGHTPRO-bokshandschoenen-kids-WOLF-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-ice-wolf-bokshandschoenen-kids/"
  },
  {
    "slug": "fightpro-bokszak-wandbeugel-van-staal-inclusief-schroefankers",
    "name": "Fightpro Bokszak Wandbeugel van Staal Inclusief Schroefankers",
    "brand": "Fightpro",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 10995,
    "oldPrice": null,
    "badge": null,
    "short": "EXTRA STERKE WANDHOUDER VOOR BOKSZAKKEN",
    "description": "EXTRA STERKE WANDHOUDER VOOR BOKSZAKKEN\n\nDe Fightpro professionele bokszak wandbeugel is ontworpen voor maximale stabiliteit, veiligheid en duurzaamheid. Gemaakt van extra sterk zwaar staal biedt deze muurbeugel een betrouwbare oplossing voor intensieve trainingen in boksen, kickboksen, Muay Thai en MMA.\n\nDe stevige constructie zorgt ervoor dat zelfs zware bokszakken stabiel blijven hangen, ook bij krachtige stoten en trappen. Ideaal voor zowel thuisgyms als professionele sportscholen.\n\nVOORDELEN VAN DE FIGHTPRO BOKSZAK WANDBEUGEL\n\n• Extra sterk heavy-duty stalen frame\n\n• Geschikt voor zware bokszakken\n\n• Wandmontage voor maximale stabiliteit en ruimtebesparing\n\n• Inclusief schroefankers en bevestigingsmateriaal\n\n• Geschikt voor professioneel en thuisgebruik\n\n• Duurzame studio kwaliteit\n\nGESCHIKT VOOR\n\n• Boksen\n\n• Kickboksen\n\n• Muay Thai\n\n• MMA\n\n• Heavy bag training\n\n• Sportscholen en home gyms\n\nBELANGRIJKE INFORMATIE\n\nBokszak niet inbegrepen.\n\nGeschikt voor montage op stevige muren zoals beton of steen.",
    "specs": [
      "Extra sterk heavy-duty stalen frame",
      "Geschikt voor zware bokszakken",
      "Wandmontage voor maximale stabiliteit en ruimtebesparing",
      "Inclusief schroefankers en bevestigingsmateriaal",
      "Geschikt voor professioneel en thuisgebruik",
      "Duurzame studio kwaliteit"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/05/IMG_1670.jpeg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/05/IMG_1670.jpeg",
      "https://www.fightpro.nl/wp-content/uploads/2026/05/IMG_1672.jpeg",
      "https://www.fightpro.nl/wp-content/uploads/2026/05/IMG_1671.jpeg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/boxing-bags-heavy-bag-bokszak/fightpro-bokszak-wandbeugel-van-staal-inclusief-schroefankers/"
  },
  {
    "slug": "fightpro-bitje-gebitsbeschermer-elite",
    "name": "Fightpro bitje gebitsbeschermer Elite",
    "brand": "Hayabusa",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro bitje gebitsbeschermer Elite",
    "description": "Fightpro bitje gebitsbeschermer Elite",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/FIGHTPRO-mundschutz-elite-3.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/FIGHTPRO-mundschutz-elite-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/FIGHTPRO-mundschutz-elite-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/FIGHTPRO-mundschutz-elite.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/FIGHTPRO-mundschutz-elite-black.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/fightpro-bitje-gebitsbeschermer-elite/"
  },
  {
    "slug": "fightpro-bitje-gebitsbeschermer-basis",
    "name": "Fightpro bitje gebitsbeschermer Basis",
    "brand": "Hayabusa",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 495,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro bitje gebitsbeschermer Basis",
    "description": "Fightpro bitje gebitsbeschermer Basis",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/fightpro-mundschutz-mouthguard-fightpro-basic.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/fightpro-mundschutz-mouthguard-fightpro-basic.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/fightpro-mundschutz-mouthguard-fightpro-basic.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/fightpro-mundschutz-mouthguard-fightpro-black-basic.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/fightpro-mundschutz-mouthguard-fightpro-black-basic-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/fightpro-mundschutz-mouthguard-fightpro-pink-basic.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/fightpro-bitje-gebitsbeschermer-basis/"
  },
  {
    "slug": "sporttas-twins-cbbt-2",
    "name": "Sporttas Twins CBBT 2",
    "brand": "Twins",
    "palette": null,
    "category": "sport-tassen",
    "price": 13995,
    "oldPrice": null,
    "badge": null,
    "short": "Sporttas Twins CBBT 2",
    "description": "Sporttas Twins CBBT 2\n\nBuilt for serious training.\n\nDe Twins CBBT-2 sporttas is ontworpen voor vechters die geen concessies doen. Gemaakt van extreem duurzame materialen en bestand tegen intensief dagelijks gebruik.\n\nRuim opgezet met meerdere vakken, zodat je al je gear georganiseerd en veilig kunt meenemen – van handschoenen tot scheenbeschermers. Praktisch, sterk en betrouwbaar.\n\nStrakke uitstraling zoals je van Twins gewend bent. Geen overbodige details, alleen kwaliteit.\n\nVoor sporters die weten wat ze nodig hebben.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/CBBT-2-sporttas-twins-fightpro.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/CBBT-2-sporttas-twins-fightpro.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/CBBT-1-sporttas-twins.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/CBBT-1-sporttas-twins2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/CBBT-1-sporttas-twins3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/CBBT-1-sporttas-twins-black.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/twins-fightgear-kickboks-mma/sporttas-twins-cbbt-2/"
  },
  {
    "slug": "joya-fight-fast-punch-paddles-black",
    "name": "Joya Fight Fast Punch Paddles – Black",
    "brand": "Joya",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Fight Fast Punch Paddles – Black",
    "description": "Joya Fight Fast Punch Paddles – Black",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/Joya-Fight-Fast-Punch-Paddles-Black.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Joya-Fight-Fast-Punch-Paddles-Black.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-fight-fast-punch-paddles-black/"
  },
  {
    "slug": "joya-fight-gear-foam-baton-per-paar",
    "name": "Joya Fight Gear – FOAM BATON (per paar)",
    "brand": "Joya",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Fight Gear – FOAM BATON (per paar)",
    "description": "Joya Fight Gear – FOAM BATON (per paar)",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/Joya-Fight-Gear-FOAM-BATONS.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Joya-Fight-Gear-FOAM-BATONS.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-fight-gear-foam-baton-per-paar/"
  },
  {
    "slug": "twins-kickboks-scheenbeschermers-sgl7-white-2",
    "name": "Twins Kickboks scheenbeschermers SGL7 – White",
    "brand": "Twins",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 13200,
    "oldPrice": null,
    "badge": null,
    "short": "Twins Kickboks scheenbeschermers wit",
    "description": "Twins Kickboks scheenbeschermers wit\n\nVoor de fanatieke serieuze kickbokser",
    "specs": [],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/Twins-Special-SGL-7-Shin-Guards-white.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Twins-Special-SGL-7-Shin-Guards-white.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Twins-Special-SGL-7-Shin-Guards-white-.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Twins-Special-SGL-7-Shin-Guards-white-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/scheenbeschermers-shinguards-kickboks-mma/twins-kickboks-scheenbeschermers-sgl7-white-2/"
  },
  {
    "slug": "hayabusa-airstream-athletic-duffel-bag-50-liter",
    "name": "Hayabusa Airstream Athletic Duffel Bag – 50 liter",
    "brand": "Hayabusa",
    "palette": null,
    "category": "sport-tassen",
    "price": 16995,
    "oldPrice": null,
    "badge": null,
    "short": "Hayabusa Airstream Athletic Duffel Bag – 50 liter",
    "description": "Hayabusa Airstream Athletic Duffel Bag – 50 liter",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/Hayabusa-Airstream-Athletic-Duffle-Bag.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Hayabusa-Airstream-Athletic-Duffle-Bag.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Hayabusa-Airstream-Athletic-Duffle-Bag2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Hayabusa-Airstream-Athletic-Duffle-Bag3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-airstream-athletic-duffel-bag-50-liter/"
  },
  {
    "slug": "shockdoctor-bitje-gebitbeschermer-gel-max-black-blue",
    "name": "Shockdoctor bitje gebitbeschermer Gel Max Black / Blue",
    "brand": "Shockdoctor",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1995,
    "oldPrice": null,
    "badge": null,
    "short": "Shockdoctor bitje gebitbeschermer Gel Max Black / Blue",
    "description": "Shockdoctor bitje gebitbeschermer Gel Max Black / Blue\n\nDe Gel Max gebitsbeschermer biedt een superieure pasvorm en bescherming. Door het gebruik van een Gel Fit Liner vormt de Gel Max zich naar uw tanden en tandvlees en biedt een stevige pasvorm. De buitenkant van de Gel Max is versterkt met een rubber exoskelet voor ultieme schokabsorptie. Accepteer geen goedkope enkellaagse gebitsbeschermers, vertrouw op Shock Doctor en wees zelfverzekerd elke keer dat u speelt!\n\nFeatures\n\n• Exoskeletaal schokframe\n• Geïntegreerde ademhalingskanalen\n• Ontwerp met drie lagen\n• Gemakkelijker aan te brengen\n• Gel-Fit™ voering\n• Kook en bijt pasvorm",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/shockdoctor-Gel-Max-Black-blue-bitje-mouthguard.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/shockdoctor-Gel-Max-Black-blue-bitje-mouthguard.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/shockdoctor-Gel-Max-Black-blue-bitje-mouthguard4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/shockdoctor-Gel-Max-Black-blue-bitje-mouthguard2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/04/shockdoctor-Gel-Max-Black-blue-bitje-mouthguard3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/shockdoctor-bitje-gebitbeschermer-gel-max-black-blue/"
  },
  {
    "slug": "biotech-usa-magnesium-bisglycinate-90-caps",
    "name": "biotech USA Magnesium Bisglycinate 90 caps",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 1495,
    "oldPrice": null,
    "badge": null,
    "short": "biotech USA Magnesium Bisglycinate 90 caps",
    "description": "biotech USA Magnesium Bisglycinate 90 caps",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/biotech-USA-Magnesium-Bisglycinate90-caps.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/biotech-USA-Magnesium-Bisglycinate90-caps.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/biotech-usa-magnesium-bisglycinate-90-caps/"
  },
  {
    "slug": "biotech-usa-bcaa-zero-360g",
    "name": "Biotech USA BCAA ZERO 360g",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Biotech USA BCAA ZERO 360g",
    "description": "Biotech USA BCAA ZERO 360g",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/Biotech-USA-BCAA-ZERO-360g.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Biotech-USA-BCAA-ZERO-360g.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/biotech-usa-bcaa-zero-360g/"
  },
  {
    "slug": "biotech-usa-100-creatine-monohydrate-300-g",
    "name": "Biotech USA Black Blood NOX 340g",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 3695,
    "oldPrice": null,
    "badge": null,
    "short": "Biotech USA Black Blood NOX 340g",
    "description": "Biotech USA Black Blood NOX 340g",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/Biotech-USA-Black-Blood-NOX-340g.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Biotech-USA-Black-Blood-NOX-340g.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/biotech-usa-100-creatine-monohydrate-300-g/"
  },
  {
    "slug": "levrone-gold-ashwagandha-90-tabs",
    "name": "Levrone-GOLD-Ashwagandha-90-tabs",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 1295,
    "oldPrice": null,
    "badge": null,
    "short": "Levrone-GOLD-Ashwagandha-90-tabs",
    "description": "Levrone-GOLD-Ashwagandha-90-tabs",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/Levrone-GOLD-Ashwagandha-90-tabs.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Levrone-GOLD-Ashwagandha-90-tabs.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/levrone-gold-ashwagandha-90-tabs/"
  },
  {
    "slug": "biotech-usa-iso-whey-zero-908gr",
    "name": "biotech USA Iso Whey Zero 908gr",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 5495,
    "oldPrice": null,
    "badge": null,
    "short": "biotech USA Iso Whey Zero 908gr",
    "description": "biotech USA Iso Whey Zero 908gr",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/biotech-USA-Iso-Whey-Zero-908g.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/biotech-USA-Iso-Whey-Zero-908g.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/biotech-usa-iso-whey-zero-908gr/"
  },
  {
    "slug": "bad-ass-pre-workout-438gr",
    "name": "BAD ASS Pre workout 438gr",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2295,
    "oldPrice": null,
    "badge": null,
    "short": "BAD ASS Pre workout 438gr",
    "description": "BAD ASS Pre workout 438gr",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/BAD-ASS-Pre-workout-438-g.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/BAD-ASS-Pre-workout-438-g.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/bad-ass-pre-workout-438gr/"
  },
  {
    "slug": "ice-pump-pre-workout-463gr",
    "name": "ICE Pump Pre Workout 463gr",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "ICE Pump Pre Workout 463gr",
    "description": "ICE Pump Pre Workout 463gr",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/ICE-Pump-Pre-Workout-463-g.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/ICE-Pump-Pre-Workout-463-g.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/ice-pump-pre-workout-463gr/"
  },
  {
    "slug": "levrone-scatterbrain-pre-workout-270gr",
    "name": "LEVRONE Scatterbrain pre workout 270gr",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "LEVRONE Scatterbrain pre workout 270gr",
    "description": "LEVRONE Scatterbrain pre workout 270gr",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/LEVRONE-Scatterbrain-pre-workout-270gr.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/LEVRONE-Scatterbrain-pre-workout-270gr.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/levrone-scatterbrain-pre-workout-270gr/"
  },
  {
    "slug": "premium-nutrition-pn-pump-pre-workout-385gr",
    "name": "PREMIUM NUTRITION PN PUMP PRE WORKOUT 385gr",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "PREMIUM NUTRITION PN PUMP PRE WORKOUT 385gr",
    "description": "PREMIUM NUTRITION PN PUMP PRE WORKOUT 385gr",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/PREMIUM-NUTRITION-PN-PUMP-PRE-WORKOUT-385gr.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/PREMIUM-NUTRITION-PN-PUMP-PRE-WORKOUT-385gr.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/premium-nutrition-pn-pump-pre-workout-385gr/"
  },
  {
    "slug": "skull-labs-angel-dust-pre-workout-270gr",
    "name": "Skull Labs Angel Dust pre workout 270gr",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "Een van de beste Pre Workouts op de markt! Handle with care! Beta-alanine (CarnoSyn®), arginine AKG, citruline malate, taurine, hydrolysed casein (PeptoPro®)…",
    "description": "Skull Labs Angel Dust pre workout 270gr",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/Skull-Labs-Angel-Dust-pre-workout-270gr.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Skull-Labs-Angel-Dust-pre-workout-270gr.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/skull-labs-angel-dust-pre-workout-270gr/"
  },
  {
    "slug": "skull-labsskull-crusher-pre-workout-350-gr",
    "name": "Skull LabsSkull Crusher pre-workout 350 gr",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "Een van de beste Pre Workouts op de markt! Handle with care! Beta-alanine (CarnoSyn®), arginine AKG, citruline malate, taurine, hydrolysed casein (PeptoPro®)…",
    "description": "Skull LabsSkull Crusher pre-workout 350 gr",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/04/Skull-Labs-Skull-Crusher-pre-workout-350gr.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/04/Skull-Labs-Skull-Crusher-pre-workout-350gr.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/skull-labsskull-crusher-pre-workout-350-gr/"
  },
  {
    "slug": "dames-borstbeschermer-zwart-met-uitneembare-padding",
    "name": "Dames Borstbeschermer – Zwart met uitneembare padding",
    "brand": "Fightpro",
    "palette": null,
    "category": "diversen",
    "price": 4495,
    "oldPrice": null,
    "badge": null,
    "short": "Dames Borstbeschermer – Zwart met uitneembare padding",
    "description": "Dames Borstbeschermer – Zwart met uitneembare padding\n\nDe dames borstbeschermer in stijlvol zwart biedt optimale bescherming tijdens kickboksen, boksen en ander vechtsporttraining. Speciaal ontworpen voor vrouwen, beschermt hij gevoelige zones zonder je bewegingsvrijheid te beperken.\n\nDe uitneembare padding maakt individuele aanpassing mogelijk: extra bescherming bij intensieve trainingen of een lichter gewicht voor minder intensieve sessies. Het ergonomische ontwerp, het robuuste materiaal en het ademende binnenmateriaal zorgen voor maximaal comfort en stabiliteit.\n\nKenmerken\n\n• \nSpeciaal ontworpen voor vrouwen\n\n• \nUitneembare padding voor flexibele bescherming\n\n• \nErgonomische pasvorm voor maximale bewegingsvrijheid\n\n• \nElegant zwart, stijlvol en stevig\n\n• \nPerfect voor kickboksen, boksen en vechtsport\n\nTrain veilig, zelfverzekerd en comfortabel – ideaal voor elke training.",
    "specs": [
      "Speciaal ontworpen voor vrouwen",
      "Uitneembare padding voor flexibele bescherming",
      "Ergonomische pasvorm voor maximale bewegingsvrijheid",
      "Elegant zwart, stijlvol en stevig",
      "Perfect voor kickboksen, boksen en vechtsport"
    ],
    "sizes": [
      "L",
      "M",
      "S"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-Damen-Brustschutz-boxen.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-Damen-Brustschutz-boxen.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-Damen-Brustschutz-boxen-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/dames-borstbeschermer-zwart-met-uitneembare-padding/"
  },
  {
    "slug": "fightpro-bjj-elite-gi-black-350-grams",
    "name": "Fightpro BJJ Elite GI BLACK 350 grams",
    "brand": "Fightpro",
    "palette": null,
    "category": "braziliaans-jiu-jitsu-bjj-artikelen",
    "price": 9995,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro BJJ Elite GI BLACK 350 grams",
    "description": "BJJ Gi FightPro\n\nLichtgewicht. Duurzaam. Stijlvol.Onze hoogwaardige FightPro BJJ-Gi van 350g Pearl Weave katoen biedt de perfecte balans tussen comfort, bewegingsvrijheid en langdurige stabiliteit. Ideaal voor intensieve trainingen en veeleisende wedstrijden.\n\nHet elegante zwarte design, gecombineerd met nauwkeurige afwerking en opvallende borduursels, maakt deze Gi een echte eyecatcher op de mat. Elke naad, elk detail en elke snit is ontworpen voor vechters die niet alleen willen trainen, maar willen domineren.\n\nInclusief gratis witte band (White Belt) – zodat je direct kunt beginnen.\n\nGeschikt voor zowel beginners als ervaren atleten: deze Gi levert de prestaties die jij nodig hebt.\n\nMaatgids FightPro BJJ-Gi\n\nMaat\nLengte gebruiker\nGewicht gebruiker\nOpmerking\n\nA0\n150–160 cm\n45–55 kg\nVoor kleinere volwassenen en tieners\n\nA1\n160–170 cm\n55–70 kg\nMeest gekozen maat voor gemiddelde volwassenen\n\nA2\n170–180 cm\n70–85 kg\nStandaard maat voor volwassenen\n\nA3\n180–190 cm\n85–100 kg\nVoor langere of zwaardere atleten\n\nA4\n190–200 cm\n100–120 kg\nExtra lange en grote fit\n\nTip: Kies altijd een Gi die je iets ruimte geeft voor beweging, maar niet te los zit. De Pearl Weave stof kan na de eerste wasbeurt iets krimpen.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-Brazilian-Jiu-Jitsu-BJJ-GI-350-gr-Schwarz.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-Brazilian-Jiu-Jitsu-BJJ-GI-350-gr-Schwarz.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-Brazilian-Jiu-Jitsu-BJJ-GI-350-gr-Schwarz-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-Brazilian-Jiu-Jitsu-BJJ-GI-350-gr-Schwarz-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-Brazilian-Jiu-Jitsu-BJJ-GI-350-gr-Schwarz-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-Brazilian-Jiu-Jitsu-BJJ-GI-350-gr-Schwarz-5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/braziliaans-jiu-jitsu-bjj-artikelen/fightpro-bjj-elite-gi-black-350-grams/"
  },
  {
    "slug": "fightpro-binnenhandschoenen-bandages",
    "name": "Fightpro Binnenhandschoenen bandages",
    "brand": "Fightpro",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 1595,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro Binnenhandschoenen bandages",
    "description": "Fightpro Mesh Binnenhandschoenen\n\nBescherm je handen en polsen tijdens het trainen! De OYA Mesh binnenhandschoenen voorkomen blessures aan knokkels en polsen die kunnen ontstaan door verkeerd bandageren of het gebruik van minderwaardige bokshandschoenen.\n\nHet ademende mesh-materiaal zorgt ervoor dat je handen tijdens de training goed geventileerd blijven en niet bekneld raken. Dankzij de extra 100 cm bandage kunnen de polsen extra worden ondersteund, voor een stabiele en veilige training – of je nu werkt op de bokszak, pads of tijdens sparring.\n\nKenmerken\n\n• \nBescherming van knokkels en polsen\n\n• \nAdemend mesh voor optimaal draagcomfort\n\n• \nInclusief 100 cm bandage voor extra steun\n\n• \nSKT High-Density Gel voor extra demping\n\n• \nMachinewasbaar en eenvoudig schoon te houden\n\nPerfect voor boksen, kickboksen en alle vechtsporten waarbij veiligheid, comfort en bewegingsvrijheid essentieel zijn.",
    "specs": [
      "Bescherming van knokkels en polsen",
      "Ademend mesh voor optimaal draagcomfort",
      "Inclusief 100 cm bandage voor extra steun",
      "SKT High-Density Gel voor extra demping",
      "Machinewasbaar en eenvoudig schoon te houden"
    ],
    "sizes": [
      "L",
      "M",
      "S"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-innenhandschuhe-bandagen.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-innenhandschuhe-bandagen.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-innenhandschuhe-bandagen-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/FIGHTPRO-innenhandschuhe-bandagen-3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/fightpro-binnenhandschoenen-bandages/"
  },
  {
    "slug": "fightpro-bandages-250-350-450-cm",
    "name": "Fightpro Bandages 250 – 350 – 450 cm",
    "brand": "Fightpro",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "FDe beste bandages in Nederland, blijven in vorm na de wasmachine en extreem duurzaam",
    "description": "Fightpro Bandages – Duurzaam, sterk en vormvast\n\nDe Fightpro bandages zijn ontwikkeld voor sporters die hun handen en polsen optimaal willen beschermen tijdens trainingen. Ze bieden stevige ondersteuning bij boksen, kickboksen, Muay Thai en bokszaktraining.\n\nDankzij het duurzame materiaal blijven de bandages mooi in vorm, zelfs na het wassen in de wasmachine. In tegenstelling tot veel andere bandages gaan ze niet snel kreukelen of vervormen, waardoor ze makkelijk opnieuw te wikkelen zijn en lang meegaan.\n\nDe bandages zijn uitgevoerd in zwart en combineren een professionele uitstraling met hoge functionaliteit. Ideaal voor intensief gebruik in de gym.\n\nVerkrijgbaar in de lengtes 250 cm, 350 cm en 450 cm, zodat iedere sporter de juiste ondersteuning kan kiezen.\n\nKenmerken\n\n• \nSterke en duurzame bandages\n\n• \nBlijven vormvast na wassen in de wasmachine\n\n• \nGoede ondersteuning voor handen en polsen\n\n• \nGeschikt voor boksen, kickboksen en Muay Thai\n\n• \nVerkrijgbaar in 250 cm, 350 cm en 450 cm\n\n• \nProfessionele zwarte uitvoering\n\nDe Fightpro bandages zijn een betrouwbare keuze voor sporters die kwaliteit en duurzaamheid belangrijk vinden tijdens elke training.",
    "specs": [
      "Sterke en duurzame bandages",
      "Blijven vormvast na wassen in de wasmachine",
      "Goede ondersteuning voor handen en polsen",
      "Geschikt voor boksen, kickboksen en Muay Thai",
      "Verkrijgbaar in 250 cm, 350 cm en 450 cm",
      "Professionele zwarte uitvoering"
    ],
    "sizes": [
      "250cm",
      "350cm",
      "450cm"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-BoxBandagen-Elite-350-cm-Schwarz.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-BoxBandagen-Elite-350-cm-Schwarz.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-BoxBandagen-Elite-250-cm-Schwarz.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/03/Fightpro-BoxBandagen-Elite-450-cm-Schwarz.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/fightpro-bandages-250-350-450-cm/"
  },
  {
    "slug": "fightpro-t-rex-dino-bokshandschoenen-kids",
    "name": "Fightpro T-rex Dino bokshandschoenen kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4495,
    "oldPrice": null,
    "badge": null,
    "short": "Stoere T-rex Dino bokshandschoenen voor kids. Mooi te combineren met scheenbeschermers , shirt , broekje en tas van dezelfde lijn. verkrijgbaar in de maten:…",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro T-rex bokshandschoenen kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-boxhandschuhe-kinder-T-REX-Dino.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-boxhandschuhe-kinder-T-REX-Dino.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-boxhandschuhe-kinder-T-REX-Dino-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-boxhandschuhe-kinder-T-REX-Dino-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-boxhandschuhe-kinder-T-REX-Dino-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-t-rex-dino-bokshandschoenen-kids/"
  },
  {
    "slug": "fightpro-t-rex-dino-scheenbeschermers-kids",
    "name": "Fightpro T-rex Dino scheenbeschermers kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Stoere T-rex Dino scheen beschermers voor kids. Mooi te combineren met handschoenen, shirt , broekje en tas van dezelfde lijn.",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro T-rex scheenbeschermers kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-schienbeinshutz-kinder-T-REX-Dino-3.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-schienbeinshutz-kinder-T-REX-Dino-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-schienbeinshutz-kinder-T-REX-Dino.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-schienbeinshutz-kinder-T-REX-Dino-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-t-rex-dino-scheenbeschermers-kids/"
  },
  {
    "slug": "fightpro-t-rex-dino-sport-tas-kids",
    "name": "Fightpro T-rex Dino sport tas kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Stoere T-rex Dino sporttas voor kids. Mooi te combineren met handschoenen, shirt , broekje en scheenbeschermers van dezelfde lijn.",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro T-rex sport tas kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/02/Sport-Tasche-T-REX-Dino.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/02/Sport-Tasche-T-REX-Dino.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/Sport-Tasche-T-REX-Dino-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/Sport-Tasche-T-REX-Dino-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/Sport-Tasche-T-REX-Dino-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/Sport-Tasche-T-REX-Dino-5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-t-rex-dino-sport-tas-kids/"
  },
  {
    "slug": "fightpro-t-rex-dino-short-broekje-kids",
    "name": "Fightpro T-rex Dino short / broekje kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Stoer T-rex short ,kickboks broekje voor kids. Mooi te combineren met handschoenen, shirt , tas en scheenbeschermers van dezelfde lijn. te verkrijgen in de m…",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro T-rex short / kickboks broekje kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-shorts-kickbox-hose-kinder-T-REX-Dino.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-shorts-kickbox-hose-kinder-T-REX-Dino.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-shorts-kickbox-hose-kinder-T-REX-Dino-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-shorts-kickbox-hose-kinder-T-REX-Dino-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-t-shirt-Short-kinder-T-REX-Dino-5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/fightpro-t-rex-dino-short-broekje-kids/"
  },
  {
    "slug": "fightpro-t-rex-shirt-kids",
    "name": "Fightpro T-rex shirt kids LEGENDS",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Stoer T-rex shirt voor kids. Mooi te combineren met handschoenen, broekje, tas en scheenbeschermers van dezelfdev lijn. te verkrijgen in de maten: • 128 • 14…",
    "description": "LEGEND KIDS COLLECTION\n\nFightpro T-rex shirt kids",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-t-shirt-kinder-T-REX-Dino.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-t-shirt-kinder-T-REX-Dino.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-t-shirt-kinder-T-REX-Dino-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-t-shirt-kinder-T-REX-Dino-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-t-shirt-kinder-T-REX-Dino-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/02/FIGHTPRO-t-shirt-kinder-T-REX-Dino-5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-t-rex-shirt-kids/"
  },
  {
    "slug": "fightpro-sport-tape-voor-boksers-kickboksers-rood-blauw-zwart-wit-10m-x-38-cm",
    "name": "Fightpro Sport Tape voor Boksers & Kickboksers – Rood, Blauw, Zwart & Wit 10m x 3,8 cm",
    "brand": "Fightpro",
    "palette": null,
    "category": "tape-mma-kinesiotape-sport-tape-kickboks",
    "price": 350,
    "oldPrice": null,
    "badge": null,
    "short": "Sport tape voor boksers en kickboksers in rood, blauw, zwart en wit.Geïnspireerd op de rode en blauwe hoek – functioneel, sterk en met een echte fight-look.",
    "description": "Rode hoek of blauwe hoek? Jij kiest.Deze sport tape is gemaakt voor boksers en kickboksers die weten wat een hoek betekent.Niet zomaar wit en saai, maar rood en blauw – net als in de ring.Daarnaast ook verkrijgbaar in klassiek zwart en wit.\n\nDe tape biedt stevige ondersteuning voor handen, polsen en knokkels en blijft goed zitten tijdens intensieve trainingen en sparringssessies. Ideaal in combinatie met bandages of als extra fixatie onder bokshandschoenen.\n\n✔ Sterke grip✔ Makkelijk af te scheuren✔ Geschikt voor boksen & kickboksen✔ Voor training én wedstrijdvoorbereiding\n\nGeen poespas. Gewoon fight gear met karakter.\n\nBij groetere afname, speciale prijzen!",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/02/sport-tape-boxing-hand.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/02/sport-tape-boxing-hand.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-sport-tape-voor-boksers-kickboksers-rood-blauw-zwart-wit-10m-x-38-cm/"
  },
  {
    "slug": "fightpro-bokshandschoenen-base-black-gold-pu-van-4oz-t-m-16-oz",
    "name": "Fightpro bokshandschoenen NOVA black/gold PU van 4oz t/m 16 oz",
    "brand": "Fightpro",
    "palette": null,
    "category": "kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Waarom kiezen voor de Fightpro NOVA? • Verkrijgbaar van 4 oz t/m 16 oz • Slijtvaste PU-buitenkant • Stevige klittenbandsluiting voor optimale polsstabiliteit…",
    "description": "De Fightpro NOVA Black/Gold bokshandschoenen zijn ons meest verkochte PU-basismodel – ontworpen voor intensief gebruik in sportscholen, personal training en recreatieve vechters die kwaliteit zoeken voor een scherpe prijs.\n\nDe stijlvolle combinatie van diepzwart met krachtige goudaccenten geeft deze handschoenen een professionele uitstraling in iedere gym. Of je nu werkt aan je techniek op de bokszak, pads traint met een trainer of sparring doet: de NOVA levert betrouwbare bescherming en comfort.\n\nWaarom kiezen voor de Fightpro NOVA?\n\n• \nVerkrijgbaar van 4 oz t/m 16 oz\n\n• \nSlijtvaste PU-buitenkant\n\n• \nStevige klittenbandsluiting voor optimale polsstabiliteit\n\n• \nGoede schokabsorptie\n\n• \nComfortabele pasvorm\n\n• \nIdeaal voor beginners én semi-gevorderden\n\n• \nUitstekende prijs-kwaliteitverhouding\n\nDeze handschoen wordt veel ingezet door sportscholen en personal trainers vanwege de duurzaamheid en de aantrekkelijke prijs. “Goedkoop en goed” is hier geen loze belofte – het is precies waarom dit model zo populair is.\n\nPerfect voor:\n\n• \nBokszaktraining\n\n• \nPadstraining\n\n• \nGroepslessen\n\n• \nRecreatief sparren\n\nEigen logo mogelijk (vanaf 20 stuks)\n\nWil je jouw gym, personal training studio of evenement professioneel uitstralen?Bij afname vanaf 20 stuks is het mogelijk om de Fightpro NOVA te leveren met jouw eigen logo.\n\nIdeaal voor:\n\n• \nSportscholen\n\n• \nKickboksscholen\n\n• \nPT-studio’s\n\n• \nBedrijfsfitness\n\n• \nEvenementen en seminars\n\nNeem contact met ons op voor de mogelijkheden en levertijden.",
    "specs": [
      "Verkrijgbaar van 4 oz t/m 16 oz",
      "Slijtvaste PU-buitenkant",
      "Stevige klittenbandsluiting voor optimale polsstabiliteit",
      "Goede schokabsorptie",
      "Comfortabele pasvorm",
      "Ideaal voor beginners én semi-gevorderden"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/01/FIGHTPRO-KICKBOKSHANDSCHOEN-PU-nova-gold.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/01/FIGHTPRO-KICKBOKSHANDSCHOEN-PU-nova-gold.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/01/FIGHTPRO-KICKBOKSHANDSCHOEN-PU-nova-gold-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/01/FIGHTPRO-KICKBOKSHANDSCHOEN-PU-nova-gold-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/01/FIGHTPRO-KICKBOKSHANDSCHOEN-PU-nova-gold-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2026/01/FIGHTPRO-KICKBOKSHANDSCHOEN-PU-nova-gold-5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-bokshandschoenen-base-black-gold-pu-van-4oz-t-m-16-oz/"
  },
  {
    "slug": "px-legacy-2-bokshandschoenen-pu-zwart-black",
    "name": "PX LEGACY 2 Bokshandschoenen PU zwart black",
    "brand": "PX",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "PX LEGACY 2 Bokshandschoenen PU zand / stone",
    "description": "PX LEGACY 2 Bokshandschoenen PU black zwart",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/01/IMG_0184.jpeg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/01/IMG_0184.jpeg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof/px-legacy-2-bokshandschoenen-pu-zwart-black/"
  },
  {
    "slug": "px-legacy-2-bokshandschoenen-pu-zand-stone",
    "name": "PX LEGACY 2 Bokshandschoenen PU zand / stone",
    "brand": "PX",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "PX LEGACY 2 Bokshandschoenen PU zand / stone",
    "description": "PX LEGACY 2 Bokshandschoenen PU zand / stone",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2026/01/IMG_0221.jpeg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2026/01/IMG_0221.jpeg",
      "https://www.fightpro.nl/wp-content/uploads/2026/01/IMG_0223.jpeg",
      "https://www.fightpro.nl/wp-content/uploads/2026/01/IMG_0224.jpeg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof/px-legacy-2-bokshandschoenen-pu-zand-stone/"
  },
  {
    "slug": "venum-kontact-boxing-handwraps-bandage",
    "name": "Venum Kontact Boxing Handwraps bandage",
    "brand": "Venum",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "Venum Kontact Boxing Handwraps bandage",
    "description": "Venum Kontact Boxing Handwraps bandage",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/12/Venum-Kontact-bandage-Handwraps.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/12/Venum-Kontact-bandage-Handwraps.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/venum-kontact-boxing-handwraps-bandage/"
  },
  {
    "slug": "fightpro-active-dry-shirt-zwart-op-zwart-print",
    "name": "FightPro Active Dry Shirt – Zwart op Zwart Print",
    "brand": "Fightpro",
    "palette": null,
    "category": "t-shirts",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Licht, ademend en stijlvol. Het FightPro Active Dry Shirt in zwart op zwart print biedt maximaal comfort tijdens elke training. Sneldrogende performance-kwal…",
    "description": "Het FightPro Active Dry Shirt is gemaakt voor vechters die maximale bewegingsvrijheid en stijl eisen. De lichtgewicht Active Dry-stof voert zweet razendsnel af en houdt je lichaam koel tijdens intensieve bokszaktrainingen, sparringsessies of fitnessworkouts.De diepe zwarte kleur in combinatie met de zwarte FightPro-opdruk geeft het shirt een luxe, krachtige uitstraling — perfect voor in de gym én daarbuiten.Duurzaam, comfortabel en ontworpen voor dagelijks gebruik.\n\n• \nActive Dry materiaal – sneldrogend & ademend\n\n• \nSlim-fit sportmodel\n\n• \nLuxe gouden FightPro print\n\n• \nIdeaal voor kickboksen, bokszaktraining & fitness",
    "specs": [
      "Active Dry materiaal – sneldrogend & ademend",
      "Slim-fit sportmodel",
      "Luxe gouden FightPro print",
      "Ideaal voor kickboksen, bokszaktraining & fitness"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/12/FightPro-Active-Dry-Trainingsshirt-black-ON-BLACK.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/12/FightPro-Active-Dry-Trainingsshirt-black-ON-BLACK.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/12/FightPro-Active-Dry-Trainingsshirt-BLACK-ON-BLACK-back.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-active-dry-shirt-zwart-op-zwart-print/"
  },
  {
    "slug": "fightpro-active-dry-shirt-zwart-met-gouden-print",
    "name": "FightPro Active Dry Shirt – Zwart met Gouden Print",
    "brand": "Fightpro",
    "palette": null,
    "category": "t-shirts",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Licht, ademend en stijlvol. Het FightPro Active Dry Shirt in zwart met gouden print biedt maximaal comfort tijdens elke training. Sneldrogende performance-kw…",
    "description": "Het FightPro Active Dry Shirt is gemaakt voor vechters die maximale bewegingsvrijheid en stijl eisen. De lichtgewicht Active Dry-stof voert zweet razendsnel af en houdt je lichaam koel tijdens intensieve bokszaktrainingen, sparringsessies of fitnessworkouts.De diepe zwarte kleur in combinatie met de gouden FightPro-opdruk geeft het shirt een luxe, krachtige uitstraling — perfect voor in de gym én daarbuiten.Duurzaam, comfortabel en ontworpen voor dagelijks gebruik.\n\n• \nActive Dry materiaal – sneldrogend & ademend\n\n• \nSlim-fit sportmodel\n\n• \nLuxe gouden FightPro print\n\n• \nIdeaal voor kickboksen, bokszaktraining & fitness",
    "specs": [
      "Active Dry materiaal – sneldrogend & ademend",
      "Slim-fit sportmodel",
      "Luxe gouden FightPro print",
      "Ideaal voor kickboksen, bokszaktraining & fitness"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/12/FightPro-Active-Dry-Trainingsshirt-GOLD-ON-BLACK.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/12/FightPro-Active-Dry-Trainingsshirt-GOLD-ON-BLACK.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/12/FightPro-Active-Dry-Trainingsshirt-GOLD-ON-BLACK-back.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-active-dry-shirt-zwart-met-gouden-print/"
  },
  {
    "slug": "booster-fight-gear-champion-pink",
    "name": "Booster Fight Gear – CHAMPION PINK",
    "brand": "Booster",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3295,
    "oldPrice": null,
    "badge": null,
    "short": "Booster Fight Gear – CHAMPION PINK",
    "description": "Booster Fight Gear – CHAMPION PINK",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-CHAMPION-PINK.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-CHAMPION-PINK.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-CHAMPION-PINK2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-CHAMPION-PINK3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-fight-gear-champion-pink/"
  },
  {
    "slug": "booster-fight-gear-bg-youth-elite-v2-bokshandschoenen-wit-kids",
    "name": "Booster Fight Gear – BG Youth Elite V2 bokshandschoenen wit kids",
    "brand": "Booster",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4495,
    "oldPrice": null,
    "badge": null,
    "short": "Booster BGL Elite kids wit",
    "description": "Booster Fight Gear – BG Youth Elite V2 Bokshandschoenen (Kids)Professionele bescherming voor jonge vechters\n\nDe BG Youth Elite V2 is speciaal ontworpen voor kinderen die serieus willen trainen. Deze handschoenen combineren ultieme bescherming, comfort en stijl zodat jonge atleten veilig hun volle potentieel kunnen bereiken.\n\nBelangrijkste kenmerken:\n\n• \nInjected Mold Padding: uitzonderlijke schokabsorptie, beschermt jonge handen tijdens training en sparring.\n\n• \nErgonomische pasvorm voor kinderen: veilig en comfortabel, afgestemd op kinderhanden.\n\n• \nDuurzaam synthetisch leer: bestand tegen intensieve trainingen.\n\n• \nAangehechte duim & extra polsvulling: vermindert blessures en ondersteunt de vuist en pols.\n\n• \nKlittenbandsluiting rondom: eenvoudig aanpasbaar voor een persoonlijke pasvorm.\n\n• \nStrak, modern design: subtiele glanzende patronen en Booster-logo voor een professionele uitstraling.\n\n🎯 Perfect voor jonge atleten die willen trainen zoals de groten, met maximale bescherming en comfort.",
    "specs": [
      "Ergonomische pasvorm voor kinderen: veilig en comfortabel, afgestemd op kinderhanden.",
      "Duurzaam synthetisch leer: bestand tegen intensieve trainingen.",
      "Klittenbandsluiting rondom: eenvoudig aanpasbaar voor een persoonlijke pasvorm."
    ],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-Elite-V2-bokshandschoenen-wit.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-Elite-V2-bokshandschoenen-wit.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-Elite-V2-bokshandschoenen-wit2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-Elite-V2-bokshandschoenen-wit3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-Elite-V2-bokshandschoenen-wit4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-fight-gear-bg-youth-elite-v2-bokshandschoenen-wit-kids/"
  },
  {
    "slug": "booster-fight-gear-bg-youth-elite-v2-bokshandschoenen-zwart-kids",
    "name": "Booster Fight Gear – BG Youth Elite V2 bokshandschoenen zwart kids",
    "brand": "Booster",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4495,
    "oldPrice": null,
    "badge": null,
    "short": "Booster BGL Elite kids",
    "description": "Booster Fight Gear – BG Youth Elite V2 Bokshandschoenen (Kids)Professionele bescherming voor jonge vechters\n\nDe BG Youth Elite V2 is speciaal ontworpen voor kinderen die serieus willen trainen. Deze handschoenen combineren ultieme bescherming, comfort en stijl zodat jonge atleten veilig hun volle potentieel kunnen bereiken.\n\nBelangrijkste kenmerken:\n\n• \nInjected Mold Padding: uitzonderlijke schokabsorptie, beschermt jonge handen tijdens training en sparring.\n\n• \nErgonomische pasvorm voor kinderen: veilig en comfortabel, afgestemd op kinderhanden.\n\n• \nDuurzaam synthetisch leer: bestand tegen intensieve trainingen.\n\n• \nAangehechte duim & extra polsvulling: vermindert blessures en ondersteunt de vuist en pols.\n\n• \nKlittenbandsluiting rondom: eenvoudig aanpasbaar voor een persoonlijke pasvorm.\n\n• \nStrak, modern design: subtiele glanzende patronen en Booster-logo voor een professionele uitstraling.\n\nPerfect voor jonge atleten die willen trainen zoals de groten, met maximale bescherming en comfort.",
    "specs": [
      "Ergonomische pasvorm voor kinderen: veilig en comfortabel, afgestemd op kinderhanden.",
      "Duurzaam synthetisch leer: bestand tegen intensieve trainingen.",
      "Klittenbandsluiting rondom: eenvoudig aanpasbaar voor een persoonlijke pasvorm."
    ],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-Elite-V2-bokshandschoenen-zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-Elite-V2-bokshandschoenen-zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-Elite-V2-bokshandschoenen-zwart2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-Elite-V2-bokshandschoenen-zwart3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Booster-Youth-Elite-V2-bokshandschoenen-zwart4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-fight-gear-bg-youth-elite-v2-bokshandschoenen-zwart-kids/"
  },
  {
    "slug": "booster-fight-gear-sg-youth-elite-v2-1-scheenbeschermers-zwart-kids",
    "name": "Booster Fight Gear – SG Youth elite V2.1 scheenbeschermers zwart Kids",
    "brand": "Booster",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 5495,
    "oldPrice": null,
    "badge": null,
    "short": "Booster Fight Gear – SG Youth elite V2.1 scheenbeschermers zwart Kids",
    "description": "Booster Fight Gear – SG Youth elite V2.1 scheenbeschermers zwart Kids",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-scheenbeschermers-eliteV2-zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-scheenbeschermers-eliteV2-zwart.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-fight-gear-sg-youth-elite-v2-1-scheenbeschermers-zwart-kids/"
  },
  {
    "slug": "booster-fight-gear-sg-youth-elite-v2-1-scheenbeschermers-wit-kids",
    "name": "Booster Fight Gear – SG Youth elite V2.1 scheenbeschermers WIT Kids",
    "brand": "Booster",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 5495,
    "oldPrice": null,
    "badge": null,
    "short": "Booster Fight Gear – SG Youth elite V2.1 scheenbeschermers zwart Kids",
    "description": "Booster Fight Gear – SG Youth elite V2.1 scheenbeschermers zwart Kids",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-scheenbeschermers-eliteV2-wit.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-scheenbeschermers-eliteV2-wit.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-fight-gear-sg-youth-elite-v2-1-scheenbeschermers-wit-kids/"
  },
  {
    "slug": "booster-fight-gear-bangkok-series-2-scheenbeschermers-wit",
    "name": "Booster Fight Gear – Bangkok Series 2 scheenbeschermers wit",
    "brand": "Booster",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 7495,
    "oldPrice": null,
    "badge": null,
    "short": "Booster BGL V9 kickbokshandschoenen BLACK/GREY",
    "description": "Booster Fight Gear – Bangkok Series 2 SG ScheenbeschermersTraditionele Thaise stijl, moderne prestaties\n\nTrain veilig en stijlvol met de Bangkok Series scheenbeschermers van Booster Fight Gear. Geïnspireerd op Muay Thai en ontworpen voor full-contact vechtsporten zoals kickboksen, Muay Thai en MMA.\n\nBelangrijkste kenmerken:\n\n• \nMeerlaagse traagschuimvulling: optimale bescherming voor scheenbeen, enkel en voet.\n\n• \nLichtgewicht & wendbaar: maximale mobiliteit zonder in te leveren op veiligheid.\n\n• \nSecure Fit-systeem: twee klittenbandsluitingen, extra onderband en elastische voetband voor perfecte pasvorm.\n\n• \nDuurzaam synthetisch leer: bestand tegen intensieve trainingen en eenvoudig schoon te maken.\n\n• \nThais geïnspireerd design & opvallend artwork: combineert traditionele stijl met moderne prestaties.",
    "specs": [
      "Meerlaagse traagschuimvulling: optimale bescherming voor scheenbeen, enkel en voet.",
      "Lichtgewicht & wendbaar: maximale mobiliteit zonder in te leveren op veiligheid."
    ],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-scheenbeschermers-Bangkok-Series-2-wit.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-scheenbeschermers-Bangkok-Series-2-wit.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-scheenbeschermers-Bangkok-Series-2-wit-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-fight-gear-bangkok-series-2-scheenbeschermers-wit/"
  },
  {
    "slug": "booster-fight-gear-bangkok-series-5-scheenbeschermers-zwart",
    "name": "Booster Fight Gear – Bangkok Series 5 scheenbeschermers zwart",
    "brand": "Booster",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 7495,
    "oldPrice": null,
    "badge": null,
    "short": "Booster BGL V9 kickbokshandschoenen BLACK/GREY",
    "description": "Booster Fight Gear – Bangkok Series 5 SG ScheenbeschermersTraditionele Thaise stijl, moderne prestaties\n\nTrain veilig en stijlvol met de Bangkok Series scheenbeschermers van Booster Fight Gear. Geïnspireerd op Muay Thai en ontworpen voor full-contact vechtsporten zoals kickboksen, Muay Thai en MMA.\n\nBelangrijkste kenmerken:\n\n• \nMeerlaagse traagschuimvulling: optimale bescherming voor scheenbeen, enkel en voet.\n\n• \nLichtgewicht & wendbaar: maximale mobiliteit zonder in te leveren op veiligheid.\n\n• \nSecure Fit-systeem: twee klittenbandsluitingen, extra onderband en elastische voetband voor perfecte pasvorm.\n\n• \nDuurzaam synthetisch leer: bestand tegen intensieve trainingen en eenvoudig schoon te maken.\n\n• \nThais geïnspireerd design & opvallend artwork: combineert traditionele stijl met moderne prestaties.",
    "specs": [
      "Meerlaagse traagschuimvulling: optimale bescherming voor scheenbeen, enkel en voet.",
      "Lichtgewicht & wendbaar: maximale mobiliteit zonder in te leveren op veiligheid."
    ],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-scheenbeschermers-Bangkok-Series-5-zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-scheenbeschermers-Bangkok-Series-5-zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-scheenbeschermers-Bangkok-Series-5-zwart-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-fight-gear-bangkok-series-5-scheenbeschermers-zwart/"
  },
  {
    "slug": "booster-fight-gear-bangkok-series-1-bokshandschoenen-zwart",
    "name": "Booster Fight Gear – Bangkok Series 5 Bokshandschoenen zwart",
    "brand": "Booster",
    "palette": null,
    "category": "kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof",
    "price": 6495,
    "oldPrice": null,
    "badge": null,
    "short": "Booster BGL V9 kickbokshandschoenen BLACK/GREY",
    "description": "Booster Fight Gear – Bangkok Series 5 BokshandschoenenTrain hard. Presteer beter. Val op.\n\nTil je training naar een hoger niveau met de Bangkok Series bokshandschoenen van Booster Fight Gear. Ontworpen voor vechters van alle niveaus, bieden deze handschoenen perfecte pasvorm, comfort en bescherming.\n\nBelangrijkste kenmerken:\n\n• \nPrecieze pasvorm & comfort: veilig en comfortabel, verbetert je slagprestaties.\n\n• \nDuurzaam synthetisch leer: behoudt vorm en kwaliteit, zelfs bij intensief gebruik.\n\n• \nSpuitgegoten schuim: uitstekende schokabsorptie, beschermt handen tegen blessures.\n\n• \nVentilerende voering: snel drogend en geurvrij.\n\n• \n7 cm brede klittenbandsluiting: stevige polsondersteuning, geen wegglijden.\n\n• \nOpvallend design: grafische prints en Booster-logo voor een unieke look.\n\n• \nBetaalbaar & professioneel: kwaliteit zonder hoge prijs.\n\n• \nMeerdere kleuren: kies een stijl die bij jou past.",
    "specs": [
      "Precieze pasvorm & comfort: veilig en comfortabel, verbetert je slagprestaties.",
      "Duurzaam synthetisch leer: behoudt vorm en kwaliteit, zelfs bij intensief gebruik.",
      "Spuitgegoten schuim: uitstekende schokabsorptie, beschermt handen tegen blessures.",
      "Ventilerende voering: snel drogend en geurvrij.",
      "7 cm brede klittenbandsluiting: stevige polsondersteuning, geen wegglijden.",
      "Opvallend design: grafische prints en Booster-logo voor een unieke look."
    ],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-bokshandschoenen-Bangko-Series-5-zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-bokshandschoenen-Bangko-Series-5-zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-bokshandschoenen-Bangko-Series-5-zwart-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-bokshandschoenen-Bangko-Series-5-zwart-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-bokshandschoenen-Bangko-Series-5-zwart-3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-fight-gear-bangkok-series-1-bokshandschoenen-zwart/"
  },
  {
    "slug": "booster-fight-gear-bangkok-series-2-bokshandschoenen-wit",
    "name": "Booster Fight Gear – Bangkok Series 2 Bokshandschoenen wit",
    "brand": "Booster",
    "palette": null,
    "category": "kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof",
    "price": 6495,
    "oldPrice": null,
    "badge": null,
    "short": "Booster BGL V9 kickbokshandschoenen BLACK/GREY",
    "description": "Booster Fight Gear – Bangkok Series BokshandschoenenTrain hard. Presteer beter. Val op.\n\nTil je training naar een hoger niveau met de Bangkok Series bokshandschoenen van Booster Fight Gear. Ontworpen voor vechters van alle niveaus, bieden deze handschoenen perfecte pasvorm, comfort en bescherming.\n\nBelangrijkste kenmerken:\n\n• \nPrecieze pasvorm & comfort: veilig en comfortabel, verbetert je slagprestaties.\n\n• \nDuurzaam synthetisch leer: behoudt vorm en kwaliteit, zelfs bij intensief gebruik.\n\n• \nSpuitgegoten schuim: uitstekende schokabsorptie, beschermt handen tegen blessures.\n\n• \nVentilerende voering: snel drogend en geurvrij.\n\n• \n7 cm brede klittenbandsluiting: stevige polsondersteuning, geen wegglijden.\n\n• \nOpvallend design: grafische prints en Booster-logo voor een unieke look.\n\n• \nBetaalbaar & professioneel: kwaliteit zonder hoge prijs.\n\n• \nMeerdere kleuren: kies een stijl die bij jou past.",
    "specs": [
      "Precieze pasvorm & comfort: veilig en comfortabel, verbetert je slagprestaties.",
      "Duurzaam synthetisch leer: behoudt vorm en kwaliteit, zelfs bij intensief gebruik.",
      "Spuitgegoten schuim: uitstekende schokabsorptie, beschermt handen tegen blessures.",
      "Ventilerende voering: snel drogend en geurvrij.",
      "7 cm brede klittenbandsluiting: stevige polsondersteuning, geen wegglijden.",
      "Opvallend design: grafische prints en Booster-logo voor een unieke look."
    ],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-bokshandschoenen-Bangko-Series-2-wit.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-bokshandschoenen-Bangko-Series-2-wit.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-bokshandschoenen-Bangko-Series-2-wit-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-bokshandschoenen-Bangko-Series-2-wit-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/booster-bokshandschoenen-Bangko-Series-2-wit-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-fight-gear-bangkok-series-2-bokshandschoenen-wit/"
  },
  {
    "slug": "multi-pad-wandtrainer-px-expert",
    "name": "Multi-Pad Wandtrainer PX EXPERT",
    "brand": "PX",
    "palette": null,
    "category": "diversen",
    "price": 39900,
    "oldPrice": null,
    "badge": null,
    "short": "De Multi-Pad Wandtrainer PX EXPERT",
    "description": "Train volledige combinaties: stoten, lowkicks en body strikes. Met 2 stootpads, 2 lowkick-pads en een centraal bodykussen. Compact en multifunctioneel.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/expert-px-kicktrainer-wandmontage.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/expert-px-kicktrainer-wandmontage.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/px-fightwear/multi-pad-wandtrainer-px-expert/"
  },
  {
    "slug": "fightpro-sporttas-zwart-large-75x35x35-cm-black-on-black-edition",
    "name": "Fightpro sporttas zwart large 75X35X35 cm Black on Black Edition",
    "brand": "Fightpro",
    "palette": null,
    "category": "sport-tassen",
    "price": 5995,
    "oldPrice": null,
    "badge": null,
    "short": "FightPro Sporttas – Black on Black Edition",
    "description": "FightPro Sporttas – Black on Black Edition\n\nSterk. Stijlvol. Functioneel.\n\nDe nieuwe FightPro sporttas is ontworpen voor echte vechters en sporters die gaan voor kwaliteit. Gemaakt van duurzaam, extra sterk materiaal dat bestand is tegen intensief gebruik — dag in, dag uit.\n\nMet twee ruime zijvakken berg je moeiteloos je schone kleding, handdoek of accessoires op. De drie voorvakken bieden ruimte voor kleinere essentials zoals je bidon, bitje of telefoon, zodat alles overzichtelijk en binnen handbereik blijft.\n\nDe subtiele black-on-black branding geeft de tas een stoere, professionele uitstraling — perfect voor in de gym, op reis of bij wedstrijden.\n\nVerkrijgbaar in drie maten:\n\n• \nSmall: 50 × 30 × 30 cm\n\n• \nMedium: 60 × 30 × 30 cm\n\n• \nLarge: 75 × 35 × 35 cm\n\n✅ Duurzaam en sterk✅ Slim ingedeelde vakken✅ Stijlvol zwart ontwerp✅ FightPro kwaliteit\n\nFightPro – Built for battle.",
    "specs": [
      "Small: 50 × 30 × 30 cm",
      "Medium: 60 × 30 × 30 cm",
      "Large: 75 × 35 × 35 cm"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-sporttas-zwart-large-75x35x35-cm-black-on-black-edition/"
  },
  {
    "slug": "fightpro-sporttas-zwart-medium-60x30x30-cm-black-on-black-edition",
    "name": "Fightpro sporttas zwart medium 60X30X30 cm Black on Black Edition",
    "brand": "Fightpro",
    "palette": null,
    "category": "sport-tassen",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "FightPro Sporttas – Black on Black Edition",
    "description": "FightPro Sporttas – Black on Black Edition\n\nSterk. Stijlvol. Functioneel.\n\nDe nieuwe FightPro sporttas is ontworpen voor echte vechters en sporters die gaan voor kwaliteit. Gemaakt van duurzaam, extra sterk materiaal dat bestand is tegen intensief gebruik — dag in, dag uit.\n\nMet twee ruime zijvakken berg je moeiteloos je schone kleding, handdoek of accessoires op. De drie voorvakken bieden ruimte voor kleinere essentials zoals je bidon, bitje of telefoon, zodat alles overzichtelijk en binnen handbereik blijft.\n\nDe subtiele black-on-black branding geeft de tas een stoere, professionele uitstraling — perfect voor in de gym, op reis of bij wedstrijden.\n\nVerkrijgbaar in drie maten:\n\n• \nSmall: 50 × 30 × 30 cm\n\n• \nMedium: 60 × 30 × 30 cm\n\n• \nLarge: 75 × 35 × 35 cm\n\n✅ Duurzaam en sterk✅ Slim ingedeelde vakken✅ Stijlvol zwart ontwerp✅ FightPro kwaliteit\n\nFightPro – Built for battle.",
    "specs": [
      "Small: 50 × 30 × 30 cm",
      "Medium: 60 × 30 × 30 cm",
      "Large: 75 × 35 × 35 cm"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-sporttas-zwart-medium-60x30x30-cm-black-on-black-edition/"
  },
  {
    "slug": "fightpro-sporttas-zwart-small-50x30x30-cm-black-on-black-edition-kids",
    "name": "Fightpro sporttas zwart small 50X30X30 cm Black on Black Edition Kids",
    "brand": "Fightpro",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "FightPro Sporttas – Black on Black Edition",
    "description": "FightPro Sporttas – Black on Black Edition\n\nSterk. Stijlvol. Functioneel.\n\nDe nieuwe FightPro sporttas is ontworpen voor echte vechters en sporters die gaan voor kwaliteit. Gemaakt van duurzaam, extra sterk materiaal dat bestand is tegen intensief gebruik — dag in, dag uit.\n\nMet twee ruime zijvakken berg je moeiteloos je schone kleding, handdoek of accessoires op. De drie voorvakken bieden ruimte voor kleinere essentials zoals je bidon, bitje of telefoon, zodat alles overzichtelijk en binnen handbereik blijft.\n\nDe subtiele black-on-black branding geeft de tas een stoere, professionele uitstraling — perfect voor in de gym, op reis of bij wedstrijden.\n\nVerkrijgbaar in drie maten:\n\n• \nSmall: 50 × 30 × 30 cm\n\n• \nMedium: 60 × 30 × 30 cm\n\n• \nLarge: 75 × 35 × 35 cm\n\n✅ Duurzaam en sterk✅ Slim ingedeelde vakken✅ Stijlvol zwart ontwerp✅ FightPro kwaliteit\n\nFightPro – Built for battle.",
    "specs": [
      "Small: 50 × 30 × 30 cm",
      "Medium: 60 × 30 × 30 cm",
      "Large: 75 × 35 × 35 cm"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/11/Fightpro-Sport-Tasche-Schwarz-Large-75x35x35-cm-5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-sporttas-zwart-small-50x30x30-cm-black-on-black-edition-kids/"
  },
  {
    "slug": "joya-sporttas-v2-camo-goud",
    "name": "Joya Sporttas V2 Camo Goud",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Afmeting: 45x30x30 cm",
    "description": "Afmeting: 45x30x30 cm\nmeerdere vakken\nLeuke tas voor de kickboks liefhebbers.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/10/Joya-Camo-V2-Sporttas-goud.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/10/Joya-Camo-V2-Sporttas-goud.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-sporttas-v2-camo-goud/"
  },
  {
    "slug": "booster-bsg-v9-scheenbeschermers-black-grey",
    "name": "Booster BSG V9 scheenbeschermers BLACK/GREY",
    "brand": "Booster",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 11995,
    "oldPrice": null,
    "badge": null,
    "short": "Booster BSG V9 scheenbeschermers BLACK/GREY",
    "description": "Booster BSG V9 scheenbeschermers BLACK/GREY",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/Booster-BSG-V9-scheenbeschermers-white-gold.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Booster-BSG-V9-scheenbeschermers-white-gold.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Booster-BSG-V9-scheenbeschermers-white-gold2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Booster-BSG-V9-scheenbeschermers-white-gold3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-bsg-v9-scheenbeschermers-black-grey/"
  },
  {
    "slug": "booster-bgl-v9-kickbokshandschoenen-black-grey",
    "name": "Booster BGL V9 kickbokshandschoenen BLACK/GREY",
    "brand": "Booster",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 15995,
    "oldPrice": null,
    "badge": null,
    "short": "Booster BGL V9 kickbokshandschoenen BLACK/GREY",
    "description": "Booster BGL V9 kickbokshandschoenen BLACK/GREY",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/booster-bokshandschoenen-BGL-V9-black-grey.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/booster-bokshandschoenen-BGL-V9-black-grey.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/booster-bokshandschoenen-BGL-V9-black-grey2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/booster-bokshandschoenen-BGL-V9-black-grey3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/booster-bokshandschoenen-BGL-V9-black-grey4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-bgl-v9-kickbokshandschoenen-black-grey/"
  },
  {
    "slug": "booster-bgl-v9-kickbokshandschoenen-white-gold",
    "name": "Booster BGL V9 kickbokshandschoenen WHITE/GOLD",
    "brand": "Booster",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 15995,
    "oldPrice": null,
    "badge": null,
    "short": "Booster BGL V9 kickbokshandschoenen WHITE/GOLD",
    "description": "Booster BGL V9 kickbokshandschoenen WHITE/GOLD",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/booster-bokshandschoenen-BGL-V9-WHITE-GOLD.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/booster-bokshandschoenen-BGL-V9-WHITE-GOLD.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/booster-bokshandschoenen-BGL-V9-WHITE-GOLD2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-bgl-v9-kickbokshandschoenen-white-gold/"
  },
  {
    "slug": "booster-bgl-v9-kickbokshandschoenen-black-blue",
    "name": "Booster BGL V9 kickbokshandschoenen BLACK/BLUE",
    "brand": "Booster",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 15995,
    "oldPrice": null,
    "badge": null,
    "short": "Booster BGL V9 kickbokshandschoenen BLACK/BLUE",
    "description": "Booster BGL V9 kickbokshandschoenen BLACK/BLUE",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/booster-bokshandschoenen-BGL-V9-black-blue.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/booster-bokshandschoenen-BGL-V9-black-blue.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/booster-bokshandschoenen-BGL-V9-black-blue2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-bgl-v9-kickbokshandschoenen-black-blue/"
  },
  {
    "slug": "joya-strike-scheenbeschermers-blauw-leer",
    "name": "Joya Strike Scheenbeschermers -Blauw Leer",
    "brand": "Joya",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 10995,
    "oldPrice": null,
    "badge": null,
    "short": "Professionele scheenbeschermer van Joya. Handgemaakt in Thailand",
    "description": "JoyaGear Strike ScheenbeschermersHandgemaakt in Thailand voor topkwaliteit en prestaties. Lichtgewicht en comfortabel, met stevige vulling voor optimale bescherming. De kliksysteemriemen zorgen voor een veilige pasvorm tijdens elke training of wedstrijd.\n\nKenmerken:\n\n• \nProfessionele kwaliteit, geschikt voor training & competitie\n\n• \nLichtgewicht voor maximale bewegingsvrijheid\n\n• \nStevige kliksysteemriemen met JG-logo\n\n• \nHandgemaakt in Thailand",
    "specs": [
      "Professionele kwaliteit, geschikt voor training & competitie",
      "Lichtgewicht voor maximale bewegingsvrijheid",
      "Stevige kliksysteemriemen met JG-logo",
      "Handgemaakt in Thailand"
    ],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-scheenbeschermer-strike-blauw.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-scheenbeschermer-strike-blauw.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-strike-scheenbeschermers-blauw-leer/"
  },
  {
    "slug": "joya-strike-scheenbeschermers-rood-leer",
    "name": "Joya Strike Scheenbeschermers -Rood Leer",
    "brand": "Joya",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 10995,
    "oldPrice": null,
    "badge": null,
    "short": "Professionele scheenbeschermer van Joya. Handgemaakt in Thailand",
    "description": "JoyaGear Strike ScheenbeschermersHandgemaakt in Thailand voor topkwaliteit en prestaties. Lichtgewicht en comfortabel, met stevige vulling voor optimale bescherming. De kliksysteemriemen zorgen voor een veilige pasvorm tijdens elke training of wedstrijd.\n\nKenmerken:\n\n• \nProfessionele kwaliteit, geschikt voor training & competitie\n\n• \nLichtgewicht voor maximale bewegingsvrijheid\n\n• \nStevige kliksysteemriemen met JG-logo\n\n• \nHandgemaakt in Thailand",
    "specs": [
      "Professionele kwaliteit, geschikt voor training & competitie",
      "Lichtgewicht voor maximale bewegingsvrijheid",
      "Stevige kliksysteemriemen met JG-logo",
      "Handgemaakt in Thailand"
    ],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-scheenbeschermer-strike-rood.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-scheenbeschermer-strike-rood.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-scheenbeschermer-strike-rood-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-scheenbeschermer-strike-rood-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-scheenbeschermer-strike-rood-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-scheenbeschermer-strike-rood-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-strike-scheenbeschermers-rood-leer/"
  },
  {
    "slug": "danger-scheenbeschermer-evolution-wit",
    "name": "Danger scheenbeschermer Evolution Wit",
    "brand": "King",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 9250,
    "oldPrice": null,
    "badge": null,
    "short": "Professionele scheenbeschermer van Danger. Handgemaakt in Thailand",
    "description": "Danger Super Evolution Scheenbeschermers\n\n• \nGemaakt van sterk kunstleer – duurzaam en comfortabel\n\n• \nStevige klittenbandsluiting voor perfecte pasvorm\n\n• \nGeschikt voor kickboksen, thaiboksen & MMA\n\n• \nVoor beginners én ervaren vechters\n\nMaten: S (30 cm), M (32 cm), L (34 cm), XL (37 cm)",
    "specs": [
      "Gemaakt van sterk kunstleer – duurzaam en comfortabel",
      "Stevige klittenbandsluiting voor perfecte pasvorm",
      "Geschikt voor kickboksen, thaiboksen & MMA",
      "Voor beginners én ervaren vechters"
    ],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-scheenbeschermers-evolution-Wit-Zwart2.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-scheenbeschermers-evolution-Wit-Zwart2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-scheenbeschermers-evolution-Wit-Zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-scheenbeschermers-evolution-Wit-Zwart3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/king/danger-scheenbeschermer-evolution-wit/"
  },
  {
    "slug": "danger-scheenbeschermer-evolution-zwart",
    "name": "Danger scheenbeschermer Evolution Zwart",
    "brand": "King",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 9250,
    "oldPrice": null,
    "badge": null,
    "short": "Professionele scheenbeschermer van Danger. Handgemaakt in Thailand",
    "description": "Danger Super Evolution Scheenbeschermers\n\n• \nGemaakt van sterk kunstleer – duurzaam en comfortabel\n\n• \nStevige klittenbandsluiting voor perfecte pasvorm\n\n• \nGeschikt voor kickboksen, thaiboksen & MMA\n\n• \nVoor beginners én ervaren vechters\n\nMaten: S (30 cm), M (32 cm), L (34 cm), XL (37 cm)",
    "specs": [
      "Gemaakt van sterk kunstleer – duurzaam en comfortabel",
      "Stevige klittenbandsluiting voor perfecte pasvorm",
      "Geschikt voor kickboksen, thaiboksen & MMA",
      "Voor beginners én ervaren vechters"
    ],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-scheenbeschermers-evolution-Zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-scheenbeschermers-evolution-Zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-scheenbeschermers-evolution-Zwart2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-scheenbeschermers-evolution-Zwart3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/king/danger-scheenbeschermer-evolution-zwart/"
  },
  {
    "slug": "danger-kickbokshandschoenen-rocket-zwart",
    "name": "Danger (kick)bokshandschoenen Rocket Zwart",
    "brand": "Danger",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 13495,
    "oldPrice": null,
    "badge": null,
    "short": "Professionele handschoenen. Handgemaakt in Thailand",
    "description": "Top handschoenen van Danger, super kwaliteit uit Thailand\n\nDanger (kick)bokshandschoenen Rocket Zwart",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-bokshandschoenen-Rocket-Zwart1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-bokshandschoenen-Rocket-Zwart1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-bokshandschoenen-Rocket-Zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-bokshandschoenen-Rocket-Zwart2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/danger/danger-kickbokshandschoenen-rocket-zwart/"
  },
  {
    "slug": "danger-kickbokshandschoenen-rocket-wit-zwart-16-oz",
    "name": "Danger (kick)bokshandschoenen Rocket Wit/Zwart 16 oz",
    "brand": "Danger",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 13495,
    "oldPrice": null,
    "badge": null,
    "short": "Professionele handschoenen. Handgemaakt in Thailand",
    "description": "Top handschoenen van Danger, super kwaliteit uit Thailand\n\nDanger (kick)bokshandschoenen Rocket Wit/Zwart",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-bokshandschoenen-Rocket-Wit-Zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-bokshandschoenen-Rocket-Wit-Zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-bokshandschoenen-Rocket-Wit-Zwart2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Danger-bokshandschoenen-Rocket-Wit-Zwart3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/danger/danger-kickbokshandschoenen-rocket-wit-zwart-16-oz/"
  },
  {
    "slug": "joya-strike-kickbokshandschoenen-rood-leer",
    "name": "Joya Strike kickbokshandschoenen – Rood leer",
    "brand": "Joya",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 12995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Strike kickbokshandschoenen – Rood leer",
    "description": "Joya Strike kickbokshandschoenen – rood leer",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-rood.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-rood.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-rood1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-rood2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-rood3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-rood4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-strike-kickbokshandschoenen-rood-leer/"
  },
  {
    "slug": "joya-strike-kickbokshandschoenen-blauw-leer",
    "name": "Joya Strike kickbokshandschoenen – Blauw leer",
    "brand": "Joya",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 12995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Strike kickbokshandschoenen – Blauw leer",
    "description": "Joya Strike kickbokshandschoenen – Blauw leer",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-blauw.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-blauw.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-blauw2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-blauw3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-blauw4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-strike-blauw5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-strike-kickbokshandschoenen-blauw-leer/"
  },
  {
    "slug": "joyagear-x-enfusion-junior-bokshandschoenen-zwart-goud",
    "name": "Joyagear X Enfusion Junior Bokshandschoenen Zwart/Goud, Rood, Groen Blauw",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "Joyagear X Enfusion Junior Bokshandschoenen Zwart/Goud",
    "description": "Joyagear X Enfusion Junior Bokshandschoenen Zwart/Goud 4-6-8 Oz.",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/enfusion-joya-glove.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/enfusion-joya-glove.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joyagear-X-Enfusion-Junior-Bokshandschoenen-Zwart-Goud2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joyagear-X-Enfusion-Junior-Bokshandschoenen-Zwart-Goud3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joyagear-X-Enfusion-Junior-Bokshandschoenen-Zwart-Goud4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joyagear-X-Enfusion-Junior-Bokshandschoenen-Zwart-Goud-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joyagear-x-enfusion-junior-bokshandschoenen-zwart-goud/"
  },
  {
    "slug": "joya-essential-kickboks-bokshandschoenen-wit-goud",
    "name": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – WIT-Goud",
    "brand": "Joya",
    "palette": null,
    "category": "kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof",
    "price": 5495,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – ZWART",
    "description": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – WIT-Goud",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-Essential-wit.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-Essential-wit.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-Essential-wit2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/09/Joya-Bokshandschoenen-Essential-wit3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-essential-kickboks-bokshandschoenen-wit-goud/"
  },
  {
    "slug": "fightpro-scheenbeschermers-entry-zwart-pu",
    "name": "Fightpro Scheenbeschermers Entry  Zwart PU",
    "brand": "Fightpro",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro Scheenbeschermers Entry Zwart PU",
    "description": "Fightpro Scheenbeschermers Entry Zwart PU",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/05/fightpro-Schienbeinschutz-Entry-PU.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/05/fightpro-Schienbeinschutz-Entry-PU.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/05/fightpro-Schienbeinschutz-Entry-PU-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/05/fightpro-Schienbeinschutz-Entry-PU-3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-scheenbeschermers-entry-zwart-pu/"
  },
  {
    "slug": "fight-pro-headguard-hoofdbeschermer-zwart-leer",
    "name": "Fight Pro headguard  hoofdbeschermer- zwart leer",
    "brand": "Fightpro",
    "palette": null,
    "category": "head-protection-helm-hoofd-beschermer",
    "price": 9995,
    "oldPrice": null,
    "badge": null,
    "short": "Fight Pro headGuard HOOFDBESCHERMER – ZWART gemaakt van top leer / helm voor boksen en kickboksen en andere vechtsporten",
    "description": "Blijf scherp. Blijf veilig. Blijf stijlvol.De Fight Pro Black Guard is een hoogwaardige leren bokshelm voor vechters die geen concessies doen aan bescherming of uitstraling. Handgemaakt van stevig rundleer en afgewerkt in diepzwart, biedt deze hoofdbescherming maximale veiligheid tijdens sparringsessies – zonder je zicht of bewegingsvrijheid te beperken.\n\n✔ Echt leer – duurzaam en ademend✔ Verstelbare pasvorm voor perfecte aansluiting✔ Extra padding rondom slapen en kin✔ Geschikt voor boksen, kickboksen en MMA\n\nTrain als een pro. Bescherm jezelf als een kampioen.Of je nu beginner bent of ervaren vechter, deze helm is jouw betrouwbare partner in de ring.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/05/fightpro-kopfschutz-leder-schwarz.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/05/fightpro-kopfschutz-leder-schwarz.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/05/fightpro-kopfschutz-leder-schwarz-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/05/fightpro-kopfschutz-leder-schwarz-3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fight-pro-headguard-hoofdbeschermer-zwart-leer/"
  },
  {
    "slug": "kruisbeschermer-tok-fightpro-heren",
    "name": "Kruisbeschermer Tok Fightpro heren",
    "brand": "Fightpro",
    "palette": null,
    "category": "groin-kruis-bescherming-tok-toque",
    "price": 1495,
    "oldPrice": null,
    "badge": null,
    "short": "Kruisbeschermer Fightpro heren",
    "description": "Kruisbeschermer Fightpro heren",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2025/03/kruisbeschermer-tok-fightpro1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2025/03/kruisbeschermer-tok-fightpro1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2025/03/kruisbeschermer-tok-fightpro.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/kruisbeschermer-tok-fightpro-heren/"
  },
  {
    "slug": "fairtex-kpls2-superior-thai-pads",
    "name": "FAIRTEX KPLS2 “Superior” Thai Pads",
    "brand": "Fairtex",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 27500,
    "oldPrice": null,
    "badge": null,
    "short": "FAIRTEX KPLS2 “Superior” Thai Pads",
    "description": "FAIRTEX KPLS2 “Superior” Thai Pads – Gebogen Ontwerp\n\nDe FAIRTEX Superior pads zijn speciaal ontworpen voor professionals met de hoogste eisen. Deze heavy-duty pads zijn ideaal voor intensieve en langdurige trainingen.\n\nBelangrijkste eigenschappen:\n\n• Ergonomisch ontwerp: De pads passen perfect om de onderarm, wat zorgt voor optimaal comfort en een natuurlijke grip voor de trainer. Ze zijn licht en goed gebalanceerd, waardoor ze gemakkelijk te hanteren zijn.\n\n• Gebogen vorm: Het licht gebogen ontwerp biedt meer controle en veiligheid tijdens het trainen, waardoor zowel stoten als trappen nauwkeurig kunnen worden opgevangen.\n\n• Duurzame materialen: Gemaakt van 100% premium rundleer, met een vulling van meerlagig speciaal schuim voor uitstekende schokabsorptie.\n\n• Handgemaakt in Thailand: Vakmanschap van topkwaliteit, ontwikkeld door het gerenommeerde merk FAIRTEX.\n\nDeze Thai Pads zijn een perfecte keuze voor vechtsporttrainers en atleten die streven naar professionele kwaliteit en optimale prestaties.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/11/FAIRTEX-KPLS2-Superior-Thai-Pads.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/11/FAIRTEX-KPLS2-Superior-Thai-Pads.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/11/FAIRTEX-KPLS2-Superior-Thai-Pads-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/11/FAIRTEX-KPLS2-Superior-Thai-Pads-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/11/FAIRTEX-KPLS2-Superior-Thai-Pads-3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fairtex-fightwear-muay-thai/fairtex-kpls2-superior-thai-pads/"
  },
  {
    "slug": "twins-kpl-12-kicking-arm-pads",
    "name": "Twins-KPL-12 Kicking arm Pads",
    "brand": "Twins",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 27500,
    "oldPrice": null,
    "badge": null,
    "short": "Twins-KPL-12 Kicking arm Pads, voor de coach die voor kwaliteit gaat.",
    "description": "Twins-KPL-12 Kicking arm Pads\nL = 20 x 41 x 8 cm\n\nTwins-KPL-12 Kicking arm Pads\n\nDe Twins KPL-12 Kicking Pads zijn een absolute must-have voor vechtsporttrainers en atleten die gericht willen werken aan traptechnieken. Deze kicking pads staan bekend om hun uitstekende kwaliteit en duurzaamheid, zoals je mag verwachten van het gerenommeerde merk Twins.\n\nBelangrijkste kenmerken:\n\n• Hoogwaardig vakmanschap: Handgemaakt in Thailand, met gebruik van premiumkwaliteit leer voor maximale duurzaamheid.\n\n• Optimale bescherming: De dikke, schokabsorberende vulling zorgt voor ultieme bescherming van de trainer tijdens intensieve sessies.\n\n• Ergonomisch ontwerp: De pads zijn ontworpen met een licht gebogen vorm, waardoor zowel trappen als stoten met precisie kunnen worden opgevangen.\n\n• Veilige en verstelbare pasvorm: Voorzien van stevige klittenbandsluitingen en handgrepen voor een comfortabele en veilige grip.\n\n• Ideaal voor intensief gebruik: Perfect voor professionele vechtsporters en sportscholen die werken met hoge intensiteit.\n\nMet de Twins KPL-12 Kicking Pads kun je snelheid, kracht en techniek verbeteren, terwijl je als trainer verzekerd bent van comfort en bescherming. Een investering in kwaliteit die jarenlang meegaat!",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/11/Twins-KPL-12-Deluxe-Kicking-arm-Pads.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/11/Twins-KPL-12-Deluxe-Kicking-arm-Pads.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/twins-fightgear-kickboks-mma/twins-kpl-12-kicking-arm-pads/"
  },
  {
    "slug": "px-body-thighs-armour",
    "name": "PX BODY & THIGHS ARMOUR",
    "brand": "PX",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 19995,
    "oldPrice": null,
    "badge": null,
    "short": "PX BODY & THIGHS ARMOUR",
    "description": "PX BODY & THIGHS ARMOUR. Zeer geschikt voor PT en kickboks/karate coaches",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/11/PX-KICKBOX-BODY-THIGHS-ARMOUR-PROTECTION.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/11/PX-KICKBOX-BODY-THIGHS-ARMOUR-PROTECTION.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/11/PX-KICKBOX-BODY-THIGHS-ARMOUR-PROTECTION-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/px-fightwear/px-body-thighs-armour/"
  },
  {
    "slug": "venum-silent-power-cotton-shorts-black",
    "name": "Venum Silent Power Cotton Shorts black",
    "brand": "Venum",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 4595,
    "oldPrice": null,
    "badge": null,
    "short": "Venum Silent Power Cotton Shorts black, lekker voor fitness of vakantie",
    "description": "Venum Silent Power Cotton Shorts black, lekker voor fitness of vakantie\n\nDe Silent Power-collectie van Venum combineert moeiteloze stijl met subtiele Venum-details en neutrale kleuren.\nDe Silent Power-shorts in zwart zijn voorzien van open steekzakken en een achterzak met een logodetail. De tailleband met trekkoord zorgt voor een veilige en comfortabele pasvorm.\n\n• Open steekzakken en een achterzak\n\n• Geborduurd logo\n\n• Machinewas op 30°C\n\n• Niet in de droger plaatsen",
    "specs": [
      "Open steekzakken en een achterzak",
      "Geborduurd logo",
      "Machinewas op 30°C",
      "Niet in de droger plaatsen"
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/11/Venum-Silent-Power-Cotton-Shorts-black-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/11/Venum-Silent-Power-Cotton-Shorts-black-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/11/Venum-Silent-Power-Cotton-Shorts-black-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/11/Venum-Silent-Power-Cotton-Shorts-black-3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/venum-silent-power-cotton-shorts-black/"
  },
  {
    "slug": "fairtex-leg-protection-tp3-thigh-pads-black",
    "name": "Fairtex leg-protection TP3 Thigh-Pads black",
    "brand": "Fairtex",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 21995,
    "oldPrice": null,
    "badge": null,
    "short": "Fairtex leg-protection TP3 Thigh-Pads black",
    "description": "Fairtex leg-protection TP3 Thigh-Pads black\n\n• Ontworpen om de snelheid, timing en nauwkeurigheid van traptechnieken te verbeteren.\n\n• Voorzien van tailleband met clips en veter voor een strakke pasvorm en extra ondersteuning.\n\n• Inclusief vier witte doelpunten voor precisietraining.\n\n• Lichtgewicht en duurzaam.\n\n• Geschikt voor intensief gebruik.",
    "specs": [
      "Ontworpen om de snelheid, timing en nauwkeurigheid van traptechnieken te verbeteren.",
      "Inclusief vier witte doelpunten voor precisietraining.",
      "Lichtgewicht en duurzaam.",
      "Geschikt voor intensief gebruik."
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/11/Fairtex-leg-protection-TP3-Thigh-Pads-black.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/11/Fairtex-leg-protection-TP3-Thigh-Pads-black.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/11/Fairtex-leg-protection-TP3-Thigh-Pads-black-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/11/Fairtex-leg-protection-TP3-Thigh-Pads-black-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fairtex-fightwear-muay-thai/fairtex-leg-protection-tp3-thigh-pads-black/"
  },
  {
    "slug": "king-kickboks-scheenbeschermers-kpb-sg-shogun",
    "name": "KING Kickboks scheenbeschermers KPB-SG-Shogun",
    "brand": "King",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 7995,
    "oldPrice": null,
    "badge": null,
    "short": "KING Kickboks scheenbeschermers KPB-SG-Shogun",
    "description": "KING Kickboks scheenbeschermers KPB-SG-Shogun\n\nVoor de beginnende en de gevorderde kickbokser",
    "specs": [],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/10/king-scheenbeschermers-KPB-SG-Shogun.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/10/king-scheenbeschermers-KPB-SG-Shogun.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/10/king-scheenbeschermers-KPB-SG-Shogun-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/king/king-kickboks-scheenbeschermers-kpb-sg-shogun/"
  },
  {
    "slug": "king-pro-boxing-kickbokshandschoenen-kpb-bg-shogun-zwart-goud",
    "name": "King PRO-BOXING kickbokshandschoenen  KPB/BG SHOGUN zwart/goud",
    "brand": "King",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 7995,
    "oldPrice": null,
    "badge": null,
    "short": "Professionele handschoenen. Handgemaakt in Thailand",
    "description": "Top handschoenen van King-Pro, super kwaliteit!\n\nKing PRO-BOXING kickbokshandschoenen KPB/BG SHOGUN zwart/goud",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/10/king-bokshandschoen-KPB-BG-Shogun.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/10/king-bokshandschoen-KPB-BG-Shogun.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/10/king-bokshandschoen-KPB-BG-Shogun-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/10/king-bokshandschoen-KPB-BG-Shogun-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/10/king-bokshandschoen-KPB-BG-Shogun-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/10/king-bokshandschoen-KPB-BG-Shogun-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/king-pro-boxing-kickbokshandschoenen-kpb-bg-shogun-zwart-goud/"
  },
  {
    "slug": "king-pro-boxing-kickbokshandschoenen-kpb-bg-star-12-zwart-zwart",
    "name": "King PRO-BOXING kickbokshandschoenen  KPB/BG STAR 12 zwart/zwart",
    "brand": "King",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 15995,
    "oldPrice": null,
    "badge": null,
    "short": "Professionele handschoenen. Handgemaakt in Thailand",
    "description": "Top handschoenen van King-Pro, super kwaliteit!\n\nKing PRO-BOXING kickbokshandschoenen KPB/BG STAR 12 zwart/zwart",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/07/King-PRO-BOXING-kickbokshandschoenen-KPB-BG-STAR-12.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/07/King-PRO-BOXING-kickbokshandschoenen-KPB-BG-STAR-12.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/07/King-PRO-BOXING-kickbokshandschoenen-KPB-BG-STAR-12-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/07/King-PRO-BOXING-kickbokshandschoenen-KPB-BG-STAR-12-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/07/King-PRO-BOXING-kickbokshandschoenen-KPB-BG-STAR-12-3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/king-pro-boxing-kickbokshandschoenen-kpb-bg-star-12-zwart-zwart/"
  },
  {
    "slug": "safejawz-marvel-mouthguard-bitje",
    "name": "SafeJawz marvel mouthguard bitje",
    "brand": "Hayabusa",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1995,
    "oldPrice": null,
    "badge": null,
    "short": "SafeJawz-marvel-mouthguards-bitje",
    "description": "De nieuwe Marvel-collectie van Safejawz met stoere superhelden gebitsbeschermers, Iron Man, Captain America, Black Panther, Spider Man, Venom.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/06/SafeJawz-marvel-mouthguards-bitje.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/06/SafeJawz-marvel-mouthguards-bitje.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/SafeJawz-marvel-mouthguards-bitje-black-panther.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/SafeJawz-marvel-mouthguards-bitje-captain-america.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/SafeJawz-marvel-mouthguards-bitje-ironman.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/SafeJawz-marvel-mouthguards-bitje-spiderman.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/safejawz-marvel-mouthguard-bitje/"
  },
  {
    "slug": "bitje-mouthguard-wacoku-a-white-blue-adult",
    "name": "Bitje mouthguard WACOKU A+ White / Blue Adult",
    "brand": "Hayabusa",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1495,
    "oldPrice": null,
    "badge": null,
    "short": "WACOKU is al jaren bekend als een van de beste bitjes in de wereld.",
    "description": "Bitje mouthguard WACOKU A+ White / Blue Adult",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/06/Wacoku-Mouthguard-A-gel-gum-shield-view.webp",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Wacoku-Mouthguard-A-gel-gum-shield-view.webp",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/wacoku-mouthguard-bitje.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/bitje-mouthguard-wacoku-a-white-blue-adult/"
  },
  {
    "slug": "joya-ff-metal-pro-scheenbeschermers-volledig-zwart",
    "name": "JOYA FF METAL PRO SCHEENBESCHERMERS – VOLLEDIG ZWART",
    "brand": "Joya",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 6995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer voor de jeugd en volwassen.",
    "description": "JOYA FF METAL PRO SCHEENBESCHERMERS – VOLLEDIG ZWART",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/06/JOYA-FF-METAL-PRO-SCHEENBESCHERMERS-VOLLEDIG-ZWART.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/06/JOYA-FF-METAL-PRO-SCHEENBESCHERMERS-VOLLEDIG-ZWART.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/whatsapp_image_2023-01-07_at_16.28.14_1__1.jpeg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/whatsapp_image_2023-01-07_at_16.28.14_1.jpeg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/whatsapp_image_2023-01-07_at_16.28.13_1__1.jpeg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-ff-metal-pro-scheenbeschermers-volledig-zwart/"
  },
  {
    "slug": "joya-ff-metal-pro-scheenbeschermers-junior-volledig-zwart",
    "name": "JOYA FF METAL PRO SCHEENBESCHERMERS JUNIOR – VOLLEDIG ZWART",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer voor de jeugd en volwassen.",
    "description": "JOYA FF METAL PRO SCHEENBESCHERMERS JUNIOR – VOLLEDIG ZWART",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/06/JOYA-FF-METAL-PRO-SCHEENBESCHERMERS-VOLLEDIG-ZWART.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/06/JOYA-FF-METAL-PRO-SCHEENBESCHERMERS-VOLLEDIG-ZWART.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/whatsapp_image_2023-01-07_at_16.28.14_1__1.jpeg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/whatsapp_image_2023-01-07_at_16.28.14_1.jpeg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/whatsapp_image_2023-01-07_at_16.28.13_1__1.jpeg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-ff-metal-pro-scheenbeschermers-junior-volledig-zwart/"
  },
  {
    "slug": "joya-fight-fast-hoofdbeschermer-zwart-grijs",
    "name": "JOYA FIGHT FAST HOOFDBESCHERMER – ZWART/GRIJS",
    "brand": "Joya",
    "palette": null,
    "category": "head-protection-helm-hoofd-beschermer",
    "price": 6995,
    "oldPrice": null,
    "badge": null,
    "short": "hoofdbeschermer / helm voor boksen en kickboksen",
    "description": "JOYA FIGHT FAST HOOFDBESCHERMER – ZWART/GRIJS Leer",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/06/helm-joya-leer-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/06/helm-joya-leer-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/head-protection-helm-hoofd-beschermer/joya-fight-fast-hoofdbeschermer-zwart-grijs/"
  },
  {
    "slug": "joya-essential-kickboks-bokshandschoenen-zwart",
    "name": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – ZWART",
    "brand": "Joya",
    "palette": null,
    "category": "kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof",
    "price": 5495,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – ZWART",
    "description": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – ZWART",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-Bokshandschoenen-Essential-Zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-Bokshandschoenen-Essential-Zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-Bokshandschoenen-Essential-Zwart-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-essential-kickboks-bokshandschoenen-zwart/"
  },
  {
    "slug": "joya-essential-kickboks-bokshandschoenen-zwart-roze",
    "name": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – ZWART ROZE",
    "brand": "Joya",
    "palette": null,
    "category": "kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof",
    "price": 5495,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – ZWART ROZE",
    "description": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – ZWART ROZE",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-Bokshandschoenen-Essential-Zwart-Roze-2.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-Bokshandschoenen-Essential-Zwart-Roze-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-Bokshandschoenen-Essential-Zwart-Roze.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-essential-kickboks-bokshandschoenen-zwart-roze/"
  },
  {
    "slug": "joya-essential-kickboks-bokshandschoenen-zwart-goud",
    "name": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – ZWART GOUD",
    "brand": "Joya",
    "palette": null,
    "category": "kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof",
    "price": 5495,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – ZWART GOUD",
    "description": "JOYA ESSENTIAL KICKBOKS BOKSHANDSCHOENEN – ZWART GOUD",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-Bokshandschoenen-Essential-Zwart-GOUD.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-Bokshandschoenen-Essential-Zwart-GOUD.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-Bokshandschoenen-Essential-Zwart-GOUD-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-essential-kickboks-bokshandschoenen-zwart-goud/"
  },
  {
    "slug": "joya-essential-kickboks-scheenbeschermer-zwart-goud",
    "name": "JOYA ESSENTIAL KICKBOKS SCHEENBESCHERMER- ZWART GOUD",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer voor de jeugd en volwassen.",
    "description": "Joya-scheenbeschermers-Essential-Zwart goud",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-scheenbeschermers-Essential-Zwart-goud.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-scheenbeschermers-Essential-Zwart-goud.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-scheenbeschermers-Essential-Zwart-goud-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-essential-kickboks-scheenbeschermer-zwart-goud/"
  },
  {
    "slug": "joya-essential-kickboks-scheenbeschermer-zwart",
    "name": "JOYA ESSENTIAL KICKBOKS SCHEENBESCHERMER- ZWART",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer voor de jeugd en volwassen.",
    "description": "Joya-scheenbeschermers-Essential-Zwart",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-scheenbeschermers-Essential-Zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-scheenbeschermers-Essential-Zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-scheenbeschermers-Essential-Zwart-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-essential-kickboks-scheenbeschermer-zwart/"
  },
  {
    "slug": "joya-essential-kickboks-scheenbeschermer-zwart-roze",
    "name": "JOYA ESSENTIAL KICKBOKS SCHEENBESCHERMER- ZWART-ROZE",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer voor de jeugd en volwassen.",
    "description": "Joya-scheenbeschermers-Essential-Zwart-roze",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-scheenbeschermers-Essential-Zwart-roze.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-scheenbeschermers-Essential-Zwart-roze.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/Joya-scheenbeschermers-Essential-Zwart-roze-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-essential-kickboks-scheenbeschermer-zwart-roze/"
  },
  {
    "slug": "fairtex-syntek-banana-bag-zandzak-hb6-gevuld",
    "name": "Fairtex Syntek™ ” Banana Bag” zandzak  HB6 (gevuld)",
    "brand": "Fairtex",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 27500,
    "oldPrice": null,
    "badge": null,
    "short": "Fairtex Syntek™ ” Banana Bag” zandzak HB6. (niet voorradig, wel te bestellen)",
    "description": "De Fairtex Syntek™ ” Banana Bag” bokszak HB6 is een professionele bokszak en handgemaakt in Thailand. In meerdere kleuren verkrijgbaar.\nDe bokszak wordt GEVULD geleverd.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/01/Fairtex-Syntek-Banana-Bag-bokszak-HB6.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/01/Fairtex-Syntek-Banana-Bag-bokszak-HB6.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fairtex-fightwear-muay-thai/fairtex-syntek-banana-bag-zandzak-hb6-gevuld/"
  },
  {
    "slug": "fairtex-muay-thai-short-superstition-wit",
    "name": "Fairtex Muay Thai Short Superstition wit",
    "brand": "Fairtex",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 6495,
    "oldPrice": null,
    "badge": null,
    "short": "Fairtex Muay Thai Short Superstition wit",
    "description": "Fairtex Muay Thai Short Superstition wit",
    "specs": [],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/04/Fairtex-Muay-Thai-Short-Superstition.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/04/Fairtex-Muay-Thai-Short-Superstition.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/04/Fairtex-Muay-Thai-Short-Superstition-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/04/Fairtex-Muay-Thai-Short-Superstition-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/fairtex-muay-thai-short-superstition-wit/"
  },
  {
    "slug": "joya-kickboksbroek-23-zwart-kopie",
    "name": "JOYA ESSENTIAL FIGHTSHORT – ZWART-ZWART",
    "brand": "Joya",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "• 100% polyester: voor meer veerkracht en duurzaamheid. • Gaaspanelen aan de zijkanten: voor optimale ventilatie. • Traditionele Thaise tailleband voor meer…",
    "description": "De Joya ESSENTIAL Fightshort is handgemaakt van hoogwaardige materialen. De short is gesublimeerd met de ESSENTIAL print. Deze JoyaGear fightshort heeft een traditionele tailleband die hem goed rond de heupen houdt, voor totale bewegingsvrijheid. De zijsplitten zorgen voor mobiliteit, behendigheid en flexibiliteit voor je slagen in de ring. De ESSENTIAL Fightshort heeft een uniek, kleurrijk ontwerp met het Joya-logo op de voorkant. Bies aan de randen maken de short compleet’ look en garandeerd grote duurzaamheid in de tijd.",
    "specs": [],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/04/JOYA-ESSENTIAL-FIGHTSHORT-ZWART-ZWART.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/04/JOYA-ESSENTIAL-FIGHTSHORT-ZWART-ZWART.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/04/JOYA-ESSENTIAL-FIGHTSHORT-ZWART-ZWART-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/joya-kickboksbroek-23-zwart-kopie/"
  },
  {
    "slug": "px-bjj-grabn-fight-gi-black",
    "name": "PX BJJ GRAB’N FIGHT GI BLACK",
    "brand": "PX",
    "palette": null,
    "category": "braziliaans-jiu-jitsu-bjj-artikelen",
    "price": 8500,
    "oldPrice": null,
    "badge": null,
    "short": "PX BJJ GRAB’N FIGHT GI BLACK",
    "description": "PX BJJ GRAB’N FIGHT GI BLACK\n\nLicht, maar stevige BJJ-pak. De jas is gemaakt van scheurbestendig 100% katoen Pearl-Weave stof met een gewicht van 450 gr/m² en heeft versterkingen op alle bijzonder belaste plekken, zoals schouders, borst en jassplitten. De broek, gemaakt van bijzonder scheurbestendige RIPSTOP-stof, is versterkt bij de knieën. Het pak is gemaakt van 100% katoen en is voorgewassen op 40°C, dus na correct wassen op 40°C krimpt het slechts minimaal.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/04/PX-BJJ-GRAB-N-FIGHT-BLACK-GI.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/04/PX-BJJ-GRAB-N-FIGHT-BLACK-GI.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/04/PX-BJJ-GRAB-N-FIGHT-BLACK-GI-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/04/PX-BJJ-GRAB-N-FIGHT-BLACK-GI-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/04/PX-BJJ-GRAB-N-FIGHT-BLACK-GI-3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/braziliaans-jiu-jitsu-bjj-artikelen/px-bjj-grabn-fight-gi-black/"
  },
  {
    "slug": "fairtex-fmv13-maximized-focus-pads-black-red",
    "name": "Fairtex FMV13 Maximized Focus Pads black red",
    "brand": "Fairtex",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 15995,
    "oldPrice": null,
    "badge": null,
    "short": "Topkwaliteit Fairtex FMV13 Maximized Focus Pads black red",
    "description": "[et_pb_section fb_built=”1″ theme_builder_area=”post_content” _builder_version=”4.24.2″ _module_preset=”default”][/et_pb_section]",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/03/FAIRTEX-FMV13-Focus-Pads.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/03/FAIRTEX-FMV13-Focus-Pads.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/FAIRTEX-FMV13-Focus-Pads-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/FAIRTEX-FMV13-Focus-Pads-3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fairtex-fightwear-muay-thai/fairtex-fmv13-maximized-focus-pads-black-red/"
  },
  {
    "slug": "px-focus-boxing-hand-pads-leather",
    "name": "PX focus boxing hand pads leather",
    "brand": "PX",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "PX focus boxing hand pads leather",
    "description": "PX focus boxing hand pads leather\n\n• zwart\n\n• leer",
    "specs": [
      "zwart",
      "leer"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-focus-pads-leer.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-focus-pads-leer.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-focus-pads-leer-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/px-fightwear/px-focus-boxing-hand-pads-leather/"
  },
  {
    "slug": "px-focus-boxing-handpads-leer",
    "name": "PX ROUND COACHING PUNCH SHIELD leather",
    "brand": "PX",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 5995,
    "oldPrice": null,
    "badge": null,
    "short": "PX ROUND COACHING PUNCH SHIELD leather",
    "description": "PX focus boxing handpads LEER, zwart rood.\n\n• zwart\n\n• leer\n\n• 40 x 12 cm",
    "specs": [
      "zwart",
      "leer",
      "40 x 12 cm"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-ROUND-COACHING-PUNCH-SHIELD.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-ROUND-COACHING-PUNCH-SHIELD.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-ROUND-COACHING-PUNCH-SHIELD-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-ROUND-COACHING-PUNCH-SHIELD-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-ROUND-COACHING-PUNCH-SHIELD-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/px-fightwear/px-focus-boxing-handpads-leer/"
  },
  {
    "slug": "fairtex-bgv14sb-muay-thai-super-sparring-glovezwart-leer",
    "name": "FAIRTEX BGV14SB Muay Thai Super Sparring Glovezwart leer",
    "brand": "Fairtex",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 11495,
    "oldPrice": null,
    "badge": null,
    "short": "Muay Thai FAIRTEX BGV14SB Bokshandschoenen voor sparren en intensieve trainingen.",
    "description": "Muay Thai FAIRTEX BGV14SB Bokshandschoenen voor sparren en intensieve trainingen.",
    "specs": [],
    "sizes": [
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/03/FAIRTEX-kickbokshandschoenen-BGV14SB.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/03/FAIRTEX-kickbokshandschoenen-BGV14SB.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/FAIRTEX-kickbokshandschoenen-BGV14SB-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fairtex-fightwear-muay-thai/fairtex-bgv14sb-muay-thai-super-sparring-glovezwart-leer/"
  },
  {
    "slug": "smai-elite-p85-kickbokshandschoenen-leer",
    "name": "SMAI ELITE P85 KICKBOKSHANDSCHOENEN LEER",
    "brand": "Smai",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 10995,
    "oldPrice": null,
    "badge": null,
    "short": "SMAI ELITE P85 KICKBOKSHANDSCHOENEN LEER",
    "description": "SMAI ELITE P85 KICKBOKSHANDSCHOENEN LEER van top kwaliteit runder leder. Nr 1 merk in Australië.\nVoor gevorderd en starters!\n\nSmai bestaat sinds 1985!\n\n• Rundsleder",
    "specs": [
      "Rundsleder"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-ELITE-P85-BOXING-GLOVES.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-ELITE-P85-BOXING-GLOVES.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-ELITE-P85-BOXING-GLOVES-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-ELITE-P85-BOXING-GLOVES-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-ELITE-P85-BOXING-GLOVES-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-ELITE-P85-BOXING-GLOVES-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/smai-elite-p85-kickbokshandschoenen-leer/"
  },
  {
    "slug": "smai-elite-p85-thai-pads-leather",
    "name": "SMAI ELITE P85 THAI PADS LEATHER",
    "brand": "Smai",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 19995,
    "oldPrice": null,
    "badge": null,
    "short": "SMAI ELITE P85 THAI PADS LEATHER",
    "description": "SMAI ELITE P85 THAI PADS LEATHER van top kwaliteit runder leder. Nr 1 merk in Australië.\nVOOR STOTEN, TRAPPEN EN KNIETJES!\n\nBinnenhandschoen bevat mesh voor beter doorluchten. Smai bestaat sinds 1985!\n\n• Rundsleder\n\n• 35 cm (H) x 20 cm-13 cm (B)\n\n• Dikte 7 cm\n\n• Per paar",
    "specs": [
      "Rundsleder",
      "35 cm (H) x 20 cm-13 cm (B)",
      "Dikte 7 cm",
      "Per paar"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-ELITE-P85-LEATHER-THAI-PADS.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-ELITE-P85-LEATHER-THAI-PADS.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-ELITE-P85-LEATHER-THAI-PADS-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-ELITE-P85-LEATHER-THAI-PADS-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-ELITE-P85-LEATHER-THAI-PADS-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/smai-budo-fightgear/smai-elite-p85-thai-pads-leather/"
  },
  {
    "slug": "smai-focus-boxing-pads-elite-p85",
    "name": "SMAI Focus boxing Pads Elite P85 leder",
    "brand": "Smai",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 9995,
    "oldPrice": null,
    "badge": null,
    "short": "SMAI Boxing focus pads van top kwaliteit runder leder. Nr 1 merk in Australië.",
    "description": "SMAI Boxing focus pads van top kwaliteit runder leder. Nr 1 merk in Australië.\n\nBinnenhandschoen bevat mesh voor beter doorluchten. Smai bestaat sinds 1985!\n\n• Rundsleder\n\n• 23 cm (H) x 19 cm (B)\n\n• Dikte 4,5 cm\n\n• One size",
    "specs": [
      "Rundsleder",
      "23 cm (H) x 19 cm (B)",
      "Dikte 4,5 cm",
      "One size"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-Focus-boxing-Pads-Elite-P85.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-Focus-boxing-Pads-Elite-P85.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-Focus-boxing-Pads-Elite-P85-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-Focus-boxing-Pads-Elite-P85-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/SMAI-Focus-boxing-Pads-Elite-P85-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/smai-budo-fightgear/smai-focus-boxing-pads-elite-p85/"
  },
  {
    "slug": "tatami-vechtsport-vloer-puzzelmat-4-cm-dik-100x100-cm-zwart-grijs-rood-blauw",
    "name": "Tatami vechtsport vloer Puzzelmat 4 cm dik 100×100 cm – zwart/grijs/rood/blauw",
    "brand": "Fightpro",
    "palette": null,
    "category": "sportvloeren-matten-dojo-tatami",
    "price": 6995,
    "oldPrice": null,
    "badge": null,
    "short": "MEERDERE KLEUREN COMBINATIES MOGELIJK, TOP KWALITEIT PUZZLEMAT.",
    "description": "Tatami / Dojo Puzzelmat 4 cm dik. Zeer geschikt voor sporten als judo.\nKan met beide kleuren gebruikt worden.\n\n• Sportschool kwaliteit\n\n• Afwasbaar\n\n• 100×100 cm\n\n• Geschikt voor verschillende vechtsporten\n\n• Ook verkrijgbaar in 4 cm (voor bijvoorbeeld judo)\n\nLet op!\nPuzzelmatten en bokszakken worden per pallet verstuurd. Daar zitten andere prijzen aan vast. Vraag een offerte aan!\n\nVoor het gebruik, even contact opnemen met ons over correcte manier van leggen en uitpakken!",
    "specs": [
      "Sportschool kwaliteit",
      "Afwasbaar",
      "100×100 cm",
      "Geschikt voor verschillende vechtsporten",
      "Ook verkrijgbaar in 4 cm (voor bijvoorbeeld judo)"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/03/vechtsport-mat-tatami-puzzle-zwart-rood-100x100x4cm2.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/03/vechtsport-mat-tatami-puzzle-zwart-rood-100x100x4cm2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/vechtsport-mat-tatami-puzzle-zwart-rood-100x100x4cm.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/vechtsport-mat-tatami-puzzle-blauw-rood-100x100x4cm2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/vechtsport-mat-tatami-puzzle-blauw-rood-100x100x4cm.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/sportvloeren-matten-dojo-tatami/tatami-vechtsport-vloer-puzzelmat-4-cm-dik-100x100-cm-zwart-grijs-rood-blauw/"
  },
  {
    "slug": "px-kickbokshandschoenen-leer-contest",
    "name": "PX KICKBOKSHANDSCHOENEN LEER CONTEST",
    "brand": "PX",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 8495,
    "oldPrice": null,
    "badge": null,
    "short": "Zeer goede prijs kwaliteit verhouding!",
    "description": "PX KICKBOKSHANDSCHOENEN LEER CONTEST\nVoor elk niveau kickboksers, zeer goede prijs kwaliteit verhouding.\nGemaakt van rundleder.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-Contest.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-Contest.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-Contest-5.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-Contest-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-Contest-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-Contest-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/px-kickbokshandschoenen-leer-contest/"
  },
  {
    "slug": "px-kickbokshandschoenen-leer-zwart-basic-kopie",
    "name": "PX KICKBOKSHANDSCHOENEN LEER ZWART-ROOD",
    "brand": "PX",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 7995,
    "oldPrice": null,
    "badge": null,
    "short": "Zeer goede prijs kwaliteit verhouding!",
    "description": "PX KICKBOKSHANDSCHOENEN LEER ZWART – ROOD.\nLeuke zeer betaalbare Bokshandschoen voor de startende en ervaren kickboksers, zeer goede prijs kwaliteit verhouding.\nGemaakt van rundleder.\nMet mesh aan de binnenkant voor betere beluchting.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-black-red.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-black-red.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-black-red-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-black-red-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-black-red-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/PX-KICKBOKSHANDSCHOEN-LEER-black-red-5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/px-kickbokshandschoenen-leer-zwart-basic-kopie/"
  },
  {
    "slug": "tatami-vechtsport-vloer-puzzelmat-2-cm-dik-100x100-cm-zwart-grijs",
    "name": "Tatami vechtsport vloer Puzzelmat 2 cm dik 100×100 cm – zwart/grijs/rood/blauw",
    "brand": "Fightpro",
    "palette": null,
    "category": "sportvloeren-matten-dojo-tatami",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "MEERDERE KLEUREN COMBINATIES MOGELIJK, TOP KWALITEIT PUZZLEMAT.",
    "description": "Tatami / Dojo Puzzelmat 2 cm dik.\nKan als zwarte mat of als grijze mat gebruikt worden.\n\n• Sportschool kwaliteit\n\n• Afwasbaar\n\n• 100×100 cm\n\n• Geschikt voor verschillende vechtsporten\n\n• Ook verkrijgbaar in 4 cm (voor bijvoorbeeld judo)\n\nLet op!\nPuzzelmatten en bokszakken worden per pallet verstuurd. Daar zitten andere prijzen aan vast. Vraag een offerte aan!\n\nVoor het gebruik, even contact opnemen met ons over correcte manier van leggen en uitpakken!",
    "specs": [
      "Sportschool kwaliteit",
      "Afwasbaar",
      "100×100 cm",
      "Geschikt voor verschillende vechtsporten",
      "Ook verkrijgbaar in 4 cm (voor bijvoorbeeld judo)"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/03/vechtsport-mat-tatami-puzzle-zwart-grijs-100x100x2cm.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/03/vechtsport-mat-tatami-puzzle-zwart-grijs-100x100x2cm.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/vechtsport-mat-tatami-puzzle-zwart-rood-100x100x2cm.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/vechtsport-mat-tatami-puzzle-zwart-BLAUW-100x100x2cm.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/vechtsport-mat-tatami-puzzle-zwart-grijs-100x100x2cm-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/03/vechtsport-mat-tatami-puzzle-zwart-grijs-100x100x2cm-3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/sportvloeren-matten-dojo-tatami/tatami-vechtsport-vloer-puzzelmat-2-cm-dik-100x100-cm-zwart-grijs/"
  },
  {
    "slug": "joya-sporttas-evolution-bag-zwart-goud-wit",
    "name": "Joya Sporttas EVOLUTION BAG – ZWART-GOUD-WIT",
    "brand": "Joya",
    "palette": null,
    "category": "sport-tassen",
    "price": 5995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Sporttas EVOLUTION BAG – ZWART-GOUD-WIT",
    "description": "Joya Sporttas EVOLUTION BAG – ZWART-GOUD-WIT\n\nJoya Sporttas verschillende kleuren met meerdere vakken\n\n• Hoofdvak met rits\n\n• Zijvak met rits\n\n• Schouder dragen\n\n• Waterdichte rits\n\n• Ontwerp met zijdeprint\n\n• Hittegeperst ontwerp\n\n• borduurwerk\n\n• Monogram voering",
    "specs": [
      "Hoofdvak met rits",
      "Zijvak met rits",
      "Schouder dragen",
      "Waterdichte rits",
      "Ontwerp met zijdeprint",
      "Hittegeperst ontwerp"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/02/JOYA-sporttas-EVOLUTION-BAG2.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/02/JOYA-sporttas-EVOLUTION-BAG2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/02/JOYA-sporttas-EVOLUTION-BAG.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/02/JOYA-sporttas-EVOLUTION-BAG3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-sporttas-evolution-bag-zwart-goud-wit/"
  },
  {
    "slug": "thaise-namman-muay-creme-100-gr",
    "name": "THAISE NAMMAN MUAY CREME 100 GR",
    "brand": "Namman Muay",
    "palette": null,
    "category": "diversen",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "THAISE NAMMAN MUAY CREME, voor blessures, spieren opwarmen en nog veel meer.",
    "description": "THAISE NAMMAN MUAY CREME, voor blessures, spieren opwarmen en nog veel meer.\n100 GR",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2024/01/Namman_Muay_thai-creme.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2024/01/Namman_Muay_thai-creme.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/namman/thaise-namman-muay-creme-100-gr/"
  },
  {
    "slug": "esn-shaker-black-transparent",
    "name": "ESN SHAKER, BLACK TRANSPARENT",
    "brand": "ESN",
    "palette": null,
    "category": "diversen",
    "price": 490,
    "oldPrice": null,
    "badge": null,
    "short": "ESN SHAKER, BLACK TRANSPARENT, • Inhoud 600 ml • Stevig materiaal, vrij van BPA & DEHP • Met maatverdeling voor eenvoudig doseren",
    "description": "ESN SHAKER, BLACK TRANSPARENT",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/12/ESN-SHAKER-600ml.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/12/ESN-SHAKER-600ml.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/esn-elite-sports-nutrition/esn-shaker-black-transparent/"
  },
  {
    "slug": "super-pro-combat-gear-legend-kickbokshandschoenen-leer",
    "name": "SUPER PRO COMBAT GEAR LEGEND KICKBOKSHANDSCHOENEN LEER",
    "brand": "Super Pro",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 9995,
    "oldPrice": null,
    "badge": null,
    "short": "SUPER PRO COMBAT GEAR LEGEND KICKBOKSHANDSCHOENEN LEER. Voor de serieuze vechtsporter.",
    "description": "SUPER PRO COMBAT GEAR LEGEND KICKBOKSHANDSCHOENEN LEER. Voor de serieuze vechtsporter.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/11/SUPER-PRO-COMBAT-GEAR-LEGEND-KICKBOKSHANDSCHOENEN-black-2.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/11/SUPER-PRO-COMBAT-GEAR-LEGEND-KICKBOKSHANDSCHOENEN-black-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/11/SUPER-PRO-COMBAT-GEAR-LEGEND-KICKBOKSHANDSCHOENEN-black-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/11/SUPER-PRO-COMBAT-GEAR-LEGEND-KICKBOKSHANDSCHOENEN-black-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/11/SUPER-PRO-COMBAT-GEAR-LEGEND-KICKBOKSHANDSCHOENEN-black-5.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/11/SUPER-PRO-COMBAT-GEAR-LEGEND-KICKBOKSHANDSCHOENEN-black-6.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/super-pro-combat-gear-legend-kickbokshandschoenen-leer/"
  },
  {
    "slug": "super-pro-gym-sporttas-zwart-wit-small",
    "name": "Super Pro Gym Sporttas – Zwart/Wit Small",
    "brand": "Super Pro",
    "palette": null,
    "category": "sport-tassen",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "5 vakken",
    "description": "5 vakken\nEen extra vak voor natte spullen\nAfmeting: 46 x 30 x 29 cm (small)",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/SUPER-PRO-COMBAT-GEAR-GYM-SPORTTAS.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/SUPER-PRO-COMBAT-GEAR-GYM-SPORTTAS.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/SUPER-PRO-COMBAT-GEAR-GYM-SPORTTAS-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/11/SUPER-PRO-COMBAT-GEAR-GYM-SPORTTAS-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/super-pro/super-pro-gym-sporttas-zwart-wit-small/"
  },
  {
    "slug": "hayabusa-bokszak-heavy-bag",
    "name": "Hayabusa bokszak Heavy Bag gevuld 150 cm",
    "brand": "Hayabusa",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 29900,
    "oldPrice": null,
    "badge": null,
    "short": "Hayabusa bokszak Heavy Bag 180 cm",
    "description": "Hayabusa bokszak Heavy Bag.\nGevuld, professionele bokszak.\n180 cm\nEventueel vast te zetten aan de grond met bijbehorende “Heavy Bag Anker”.\n\nVoor thuis gebruik en professioneel sportschool gebruik.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-bokszak-Heavy-Bag-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-bokszak-Heavy-Bag-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-bokszak-Heavy-Bag-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-bokszak-Heavy-Bag-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-bokszak-Heavy-Bag-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-bokszak-Heavy-Bag-5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-bokszak-heavy-bag/"
  },
  {
    "slug": "hayabusa-perfect-stretch-hand-wraps-bandage-purple-lotus",
    "name": "Hayabusa Perfect Stretch Hand Wraps / bandage purple lotus, blue/geo, red/tribal",
    "brand": "Hayabusa",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 1995,
    "oldPrice": null,
    "badge": null,
    "short": "Hayabusa Perfect Stretch Handwraps Purple Lotus bandage",
    "description": "Hayabusa Perfect Stretch Hand Wraps / bandage\n\nHayabusa Bandage van zeer goede kwaliteit.\nvoor de serieuze en professionele sporter.\nkleur: Purple Lotus.\nLengte 450 cm",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-Perfect-Stretch-Handwraps.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-Perfect-Stretch-Handwraps.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-Perfect-Stretch-Handwraps-Purple-Lotus-bandage-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-Perfect-Stretch-Handwraps-Purple-Lotus-bandage-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-Perfect-Stretch-Handwraps-Purple-Lotus-bandage-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-Perfect-Stretch-Handwraps-blu-geo-bandage-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/hayabusa-perfect-stretch-hand-wraps-bandage-purple-lotus/"
  },
  {
    "slug": "hayabusa-t3-neon-boxing-gloves-yellow",
    "name": "Hayabusa T3 Neon Boxing Gloves yellow",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17900,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld. Hayabusa T3 Neon Boxing Gloves yellow",
    "description": "Hayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter. Neon yellow.\n\n“Next level” pols support en knokkel bescherming.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-yellow.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-yellow.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-yellow-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-yellow-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-yellow-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-yellow-4-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-neon-boxing-gloves-yellow/"
  },
  {
    "slug": "hayabusa-t3-neon-boxing-gloves-orange",
    "name": "Hayabusa T3 Neon Boxing Gloves orange",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17900,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld. Hayabusa T3 Neon Boxing Gloves orange",
    "description": "Hayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter. Neon orange.\n\n“Next level” pols support en knokkel bescherming.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-orange-5.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-orange-5.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-orange-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-orange-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-orange-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-orange-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-neon-boxing-gloves-orange/"
  },
  {
    "slug": "hayabusa-t3-neon-boxing-gloves-blue",
    "name": "Hayabusa T3 Neon Boxing Gloves blue",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17995,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld. Hayabusa T3 Neon Boxing Gloves",
    "description": "Hayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter. Neon blauw.\n\n“Next level” pols support en knokkel bescherming.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-blue.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-blue.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-blue-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-blue-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-blue-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-T3-Neon-Boxing-Gloves-blue-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-neon-boxing-gloves-blue/"
  },
  {
    "slug": "hayabusa-falcon-muay-thai-shorts-blue",
    "name": "Hayabusa Falcon Muay Thai Shorts – BLUE",
    "brand": "Hayabusa",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 6995,
    "oldPrice": null,
    "badge": null,
    "short": "Een mooi sportbroekje van het merk Hayabusa. Traditionele muay thai shorts in het blauw",
    "description": "Een mooi sportbroekje van het merk Hayabusa. Traditionele muay thai shorts in het blauw",
    "specs": [],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-Falcon-Muay-Thai-Shorts-blue.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-Falcon-Muay-Thai-Shorts-blue.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/hayabusa-falcon-muay-thai-shorts-blue/"
  },
  {
    "slug": "hayabusa-falcon-muay-thai-shorts-red",
    "name": "Hayabusa Falcon Muay Thai Shorts – RED",
    "brand": "Hayabusa",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 6995,
    "oldPrice": null,
    "badge": null,
    "short": "Een mooi sportbroekje van het merk Hayabusa. Traditionele muay thai shorts",
    "description": "Een mooi sportbroekje van het merk Hayabusa. Traditionele muay thai shorts",
    "specs": [],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-Falcon-Muay-Thai-Shorts-red.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/10/Hayabusa-Falcon-Muay-Thai-Shorts-red.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/hayabusa-falcon-muay-thai-shorts-red/"
  },
  {
    "slug": "bjj-tatami-nova-absolute-black-gi",
    "name": "BJJ TATAMI Nova Absolute Black Gi",
    "brand": "Tatami Fightwear",
    "palette": null,
    "category": "braziliaans-jiu-jitsu-bjj-artikelen",
    "price": 8500,
    "oldPrice": null,
    "badge": null,
    "short": "Maten voor GI’s ofwel BJJ pakken BJJ TATAMI Nova Absolute Black Gi",
    "description": "BJJ TATAMI Nova Absolute Black Gi",
    "specs": [],
    "sizes": [
      "A2 / 180",
      "A3 / 190",
      "M4 / 155"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/09/tatami-BJJ-Nova-Absolute-Black-Gi.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/09/tatami-BJJ-Nova-Absolute-Black-Gi.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/09/tatami-BJJ-Nova-Absolute-Black-Gi-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/09/tatami-BJJ-Nova-Absolute-Black-Gi-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/09/tatami-BJJ-Nova-Absolute-Black-Gi-4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/09/bjj-gi-maten-size.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/braziliaans-jiu-jitsu-bjj-artikelen/bjj-tatami-nova-absolute-black-gi/"
  },
  {
    "slug": "gepersonaliseerde-bokszak-custom-gevuld-en-met-ketting-180-cm-met-eigen-logo",
    "name": "GEPERSONALISEERDE  BOKSZAK ‘CUSTOM’ gevuld en met ketting 180 cm (MET EIGEN LOGO)",
    "brand": "Fightpro",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 0,
    "oldPrice": null,
    "badge": null,
    "short": "Bokszak kopen in Enschede? Prijs op aanvraag. Neem contact met ons op voor een offerte. Fightpro bokszak 180 cm, top kwaliteit en ook voor professioneel gebr…",
    "description": "Bokszak kopen? mogelijk om te laten personaliseren met eigen logo, tekst of plaatje.\nBij afname van 5 bokszakken of meer, gelden ANDERE PRIJZEN! (SPORTSCHOLEN/INSTELLINGEN/PERSONAL TRAINERS HEBBEN ANDERE PRIJZEN.)\n\nBOKSZAK ‘CUSTOM” is gevuld en met ketting 180 cm. Kwalitatieve bokszak voor de beginner maar ook voor sportscholen zeer geschikt.\n\nOok te bestellen in de maten:\n80cm\n100 cm\n120 cm\n150 cm\n180 cm\n\nPrijs op aanvraag. Neem contact met ons op voor een offerte.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/07/Boxsack-gefullt-langlebig-180cm-mit-Kette.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/07/Boxsack-gefullt-langlebig-180cm-mit-Kette.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/gepersonaliseerde-bokszak-custom-gevuld-en-met-ketting-180-cm-met-eigen-logo/"
  },
  {
    "slug": "shockdoctor-tok-kruisbeschermer-core-supporter-with-bioflex-cup",
    "name": "Shockdoctor tok Kruisbeschermer Core Supporter With BioFlex Cup",
    "brand": "Shockdoctor",
    "palette": null,
    "category": "groin-kruis-bescherming-tok-toque",
    "price": 1995,
    "oldPrice": null,
    "badge": null,
    "short": "Shockdoctor tok Kruisbeschermer Core Supporter With BioFlex Cup",
    "description": "Shockdoctor tok Kruisbeschermer Core Supporter With BioFlex Cup.\n\nMeerdere maten verkrijgbaar. Topkwaliteit met een mooi design.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/06/shockdoctor-Core-Supporter-With-BioFlex-Cup-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/06/shockdoctor-Core-Supporter-With-BioFlex-Cup-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/groin-kruis-bescherming-tok-toque/shockdoctor-tok-kruisbeschermer-core-supporter-with-bioflex-cup/"
  },
  {
    "slug": "biotech-one-a-day-multivitamine-100-tabletten",
    "name": "Biotech One a Day multivitamine 100 tabletten",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 1695,
    "oldPrice": null,
    "badge": null,
    "short": "Biotech One a Day multivitamine 100 tabletten.",
    "description": "Biotech One a Day multivitamine 100 tabletten. Met de one-a-day van het topmerk Biotech, heb je verder weinig nodig. Alle vitaminen die je nodig hebt, zitten in deze tabletten.\n\n• 12 soorten vitamine\n\n• 10 soorten mineralen\n\n• Glutenvrij\n\n• Lactosevrij\n\n• Per dag 1 tablet,  genoeg voor 100 dagen.\n\n• Vegan\n\nVoor een gezond en actief leven.",
    "specs": [
      "12 soorten vitamine",
      "10 soorten mineralen",
      "Glutenvrij",
      "Lactosevrij",
      "Per dag 1 tablet,  genoeg voor 100 dagen.",
      "Vegan"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/04/Biotech-One-a-Day-multivitamine.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/04/Biotech-One-a-Day-multivitamine.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/biotech-one-a-day-multivitamine-100-tabletten/"
  },
  {
    "slug": "hot-blood-hardcore-pre-workout-scitec-nutrition",
    "name": "Hot Blood Hardcore Pre-Workout – Scitec Nutrition",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Hot Blood Hardcore Pre-Workout – Scitec Nutrition",
    "description": "Hot Blood Hardcore Pre-Workout – Scitec Nutrition. Zeer goede en sterke pre-workout van Scitec/Biotech",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/04/Hot-Blood-Hardcore-Pre-Workout-Scitec-Nutrition.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/04/Hot-Blood-Hardcore-Pre-Workout-Scitec-Nutrition.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/hot-blood-hardcore-pre-workout-scitec-nutrition/"
  },
  {
    "slug": "hayabusa-pts3-thai-arm-pads",
    "name": "Hayabusa PTS3 Thai arm Pads",
    "brand": "Hayabusa",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 16995,
    "oldPrice": null,
    "badge": null,
    "short": "Hayabusa PTS3 voorgevormde Thai arm Pads.",
    "description": "Hayabusa PTS3 voorgevormde Thai arm Pads.\n\nZeer goede kwaliteit, ook voor professioneel gebruik.\n\n5 laags schuim met sterke afwerking.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/04/Thai-arm-pads-Hayabusa-PTS3.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/04/Thai-arm-pads-Hayabusa-PTS3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/04/Thai-arm-pads-Hayabusa-PTS3-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/04/Thai-arm-pads-Hayabusa-PTS3-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/04/Thai-arm-pads-Hayabusa-PTS3-3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-pts3-thai-arm-pads/"
  },
  {
    "slug": "scitec-nutrition-tribu-2000-90-tablets",
    "name": "Scitec Nutrition Tribu 2000 90 tablets",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "Scitec Nutrition Tribu 2000 90 tablets",
    "description": "Scitec Nutrition Tribu 2000 90 tablets",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2023/03/Scitec-Nutrition-Tribu-2000-90-tablets.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2023/03/Scitec-Nutrition-Tribu-2000-90-tablets.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/scitec-nutrition-tribu-2000-90-tablets/"
  },
  {
    "slug": "exercise-wheel-booster-abs-core-training",
    "name": "EXERCISE WHEEL BOOSTER abs – core training",
    "brand": "Booster",
    "palette": null,
    "category": "fitness-cardio-kracht-conditie",
    "price": 1650,
    "oldPrice": null,
    "badge": null,
    "short": "EXERCISE WHEEL BOOSTER abs – core training.",
    "description": "EXERCISE WHEEL BOOSTER abs – core training.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/11/excercise-wheel-abs-booster.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/11/excercise-wheel-abs-booster.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/exercise-wheel-booster-abs-core-training/"
  },
  {
    "slug": "thermo-drine-60-capsules-vetverbrander-weight-loss",
    "name": "Thermo Drine 60 capsules, vetverbrander Weight Loss",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 1995,
    "oldPrice": null,
    "badge": null,
    "short": "Stacker Weight Loss, vetverbrander Stacker 4 -100 capsules",
    "description": "Thermo Drine 60 capsules, vetverbrander Weight Loss",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/10/Thermo-Drine-60-capsules-vetverbrander.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/10/Thermo-Drine-60-capsules-vetverbrander.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/thermo-drine-60-capsules-vetverbrander-weight-loss/"
  },
  {
    "slug": "stacker-weight-loss-vetverbrander-stacker-4-100-capsules",
    "name": "Stacker Weight Loss, vetverbrander Stacker 4 -100 capsules",
    "brand": "Fightpro",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Stacker Weight Loss, vetverbrander Stacker 4 -100 capsules",
    "description": "Stacker Weight Loss, vetverbrander Stacker 4 -100 capsules\n\n \n\nEen van de beste vetverbranders op de markt.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/10/Stacker-Weight-Loss-Stacker-4-100-capsules.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/10/Stacker-Weight-Loss-Stacker-4-100-capsules.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/sportvoeding-pre-workout-eiwit-supplementen/stacker-weight-loss-vetverbrander-stacker-4-100-capsules/"
  },
  {
    "slug": "dt-4-professionele-boxing-timer-klok-booster",
    "name": "DT-4 Professionele boxing timer-klok Booster",
    "brand": "Booster",
    "palette": null,
    "category": "diversen",
    "price": 19995,
    "oldPrice": null,
    "badge": null,
    "short": "DT-4 Professionele boxing timer-klok Booster",
    "description": "DT-4 Professionele boxing timer-klok Booster\n\n• Ronde tijd: Bereik tussen 1-9 minuten (per minuut)\n\n• Aantal rondes:  1-99\n\n• Interval Beep\n\n• Rust tijd: Bereik tussen 10-90 seconden\n\n• Geluid: 4 levels voor volume",
    "specs": [
      "Ronde tijd: Bereik tussen 1-9 minuten (per minuut)",
      "Aantal rondes:  1-99",
      "Interval Beep",
      "Rust tijd: Bereik tussen 10-90 seconden",
      "Geluid: 4 levels voor volume"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/DT-4-boxing-timer-klok-booster-2.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/DT-4-boxing-timer-klok-booster-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/DT-4-boxing-timer-klok-booster.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/DT-4-boxing-timer-klok-booster-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/dt-4-professionele-boxing-timer-klok-booster/"
  },
  {
    "slug": "twins-bplk-leder-buik-en-been-pantser-belly-leg-protector",
    "name": "TWINS BPLK leder buik en been pantser belly – leg  protector",
    "brand": "Twins",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 25200,
    "oldPrice": null,
    "badge": null,
    "short": "TWINS BPLK leder buik en been pantser belly – leg protector",
    "description": "TWINS BPLK leder buik en been pantser belly – leg protector",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/TWINS-BPLK-BPMUAY-THAI-BELLY-leg-PAD-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/TWINS-BPLK-BPMUAY-THAI-BELLY-leg-PAD-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/TWINS-BPLK-BPMUAY-THAI-BELLY-leg-PAD-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/twins-fightgear-kickboks-mma/twins-bplk-leder-buik-en-been-pantser-belly-leg-protector/"
  },
  {
    "slug": "kpb-bp-king-pro-boxing-leder-buik-pantser-belly-protector",
    "name": "KPB/BP KING PRO BOXING leder buik pantser belly protector",
    "brand": "King",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 13400,
    "oldPrice": null,
    "badge": null,
    "short": "KPB/BP KING PRO BOXING leder buik pantser belly protector",
    "description": "KPB/BP KING PRO BOXING leder buik pantser belly protector",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/king-KPB-BPMUAY-THAI-BELLY-PAD.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/king-KPB-BPMUAY-THAI-BELLY-PAD.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/king-KPB-BPMUAY-THAI-BELLY-PAD-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/king/kpb-bp-king-pro-boxing-leder-buik-pantser-belly-protector/"
  },
  {
    "slug": "queen-scheenbeschermers-sgq-amazone-camo",
    "name": "QUEEN SCHEENBESCHERMERS SGQ AMAZONE CAMO",
    "brand": "Queen",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 4995,
    "oldPrice": 6495,
    "badge": "Aanbieding",
    "short": "QUEEN SCHEENBESCHERMERS SGQ AMAZONE CAMO",
    "description": "Queen vrolijke dames SCHEENBESCHERMERS van goede kwaliteit skintex.",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/QUEEN-SCHEENBESCHERMER-CAMO-AMAZONE.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/QUEEN-SCHEENBESCHERMER-CAMO-AMAZONE.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/queen-lady-kickboksen-mma/queen-scheenbeschermers-sgq-amazone-camo/"
  },
  {
    "slug": "smai-full-belly-protector-borst-pantser",
    "name": "SMAI FULL BELLY PROTECTOR /BORST PANTSER",
    "brand": "Smai",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 17995,
    "oldPrice": null,
    "badge": null,
    "short": "SMAI FULL BELLY PROTECTOR /BORST PANTSER 55 mm dik 60 cm hoog Rundleder",
    "description": "SMAI FULL BELLY PROTECTOR /BORST PANTSER. Nr 1 merk in Australië.\n\n• Rundsleder\n\n• One size",
    "specs": [
      "Rundsleder",
      "One size"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-full-body-BELLY-PAD.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-full-body-BELLY-PAD.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-full-body-BELLY-PAD-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-full-body-BELLY-PAD-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-full-body-BELLY-PAD-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-full-body-BELLY-PAD-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/smai-budo-fightgear/smai-full-belly-protector-borst-pantser/"
  },
  {
    "slug": "smai-elite85-muay-thai-belly-protector-borst-pantser",
    "name": "SMAI ELITE85 MUAY THAI BELLY PROTECTOR /BORST PANTSER",
    "brand": "Smai",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 12995,
    "oldPrice": null,
    "badge": null,
    "short": "SMAI ELITE85 MUAY THAI BELLY PROTECTOR /BORST PANTSER",
    "description": "SMAI ELITE85 MUAY THAI BELLY PROTECTOR /BORST PANTSER. Nr 1 merk in Australië.\n\n• Rundsleder\n\n• One size",
    "specs": [
      "Rundsleder",
      "One size"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-ELITE85-MUAY-THAI-BELLY-PAD.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-ELITE85-MUAY-THAI-BELLY-PAD.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-ELITE85-MUAY-THAI-BELLY-PAD-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-ELITE85-MUAY-THAI-BELLY-PAD-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-ELITE85-MUAY-THAI-BELLY-PAD-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/SMAI-ELITE85-MUAY-THAI-BELLY-PAD-4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/smai-budo-fightgear/smai-elite85-muay-thai-belly-protector-borst-pantser/"
  },
  {
    "slug": "joya-voet-en-enkelbeschermers",
    "name": "JOYA VOET en ENKELBESCHERMERS",
    "brand": "Joya",
    "palette": null,
    "category": "diversen",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA VOET en ENKELBESCHERMERS",
    "description": "JOYA VOET en ENKELBESCHERMERS\n\nMeerdere kleuren en maten.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-ENKELBESCHERMERS-voet-sok.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-ENKELBESCHERMERS-voet-sok.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-voet-en-enkelbeschermers/"
  },
  {
    "slug": "joya-spiegelhanger-bokshandschoenen-vlaggen-landen",
    "name": "JOYA spiegelhanger bokshandschoenen vlaggen landen",
    "brand": "Joya",
    "palette": null,
    "category": "diversen",
    "price": 595,
    "oldPrice": null,
    "badge": null,
    "short": "Verkrijgbaar: • Holland • Morocco • Turkey • Suriname",
    "description": "JOYA spiegelhanger bokshandschoenen vlaggen landen\n\n• Holland\n\n• Morocco\n\n• Turkey\n\n• Suriname",
    "specs": [
      "Holland",
      "Morocco",
      "Turkey",
      "Suriname"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-spiegelhanger-bokshandschoen.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-spiegelhanger-bokshandschoen.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-spiegelhanger-bokshandschoen1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-spiegelhanger-bokshandschoenen-vlaggen-landen/"
  },
  {
    "slug": "100-pure-whey-1000gr-door-biotech-usa",
    "name": "100% Pure Whey (1000gr) door BioTech USA",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "100% Pure Whey voor eiwit shakes. VERKRIJGBAAR IN VANILLE EN AARDBEI",
    "description": "100% Pure Whey (1000 gr) door BioTech USA. Een van de best producten op de markt. Daarnaast erg lekker van smaak.\n\n• met toegevoegde functionele aminozuren\n\n• palmolievrij en conserveermiddelen vrij\n\n• 1 dosis bevat (28 g): 21 g eiwitten waarvan 6 g BCAA’s",
    "specs": [
      "met toegevoegde functionele aminozuren",
      "palmolievrij en conserveermiddelen vrij",
      "1 dosis bevat (28 g): 21 g eiwitten waarvan 6 g BCAA’s"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/BioTech-Pure-Whey-vanilla-1000g.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/BioTech-Pure-Whey-vanilla-1000g.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/100-pure-whey-1000gr-door-biotech-usa/"
  },
  {
    "slug": "joya-elasto-deluxe-bandages-450cm-zwart-goud",
    "name": "Joya Elasto Deluxe Bandages 450cm zwart/goud",
    "brand": "Joya",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 1295,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met de boksbandages van Joya. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is:…",
    "description": "Joya Elasto Deluxe Bandages 450cm zwart/goud",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYAGEAR-ELASTO-BANDAGES-ZWART-goud.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYAGEAR-ELASTO-BANDAGES-ZWART-goud.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYAGEAR-ELASTO-BANDAGES-ZWART-ZILVER-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/joya-elasto-deluxe-bandages-450cm-zwart-goud/"
  },
  {
    "slug": "joya-elasto-deluxe-bandages-450cm-zwart-zilver",
    "name": "Joya Elasto Deluxe Bandages 450cm zwart/zilver",
    "brand": "Joya",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 1295,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met de boksbandages van Joya. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is:…",
    "description": "Joya Elasto Deluxe Bandages 450cm zwart/zilver",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYAGEAR-ELASTO-BANDAGES-ZWART-ZILVER.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYAGEAR-ELASTO-BANDAGES-ZWART-ZILVER.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYAGEAR-ELASTO-BANDAGES-ZWART-ZILVER-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/joya-elasto-deluxe-bandages-450cm-zwart-zilver/"
  },
  {
    "slug": "joya-dragon-kickboks-scheenbeschermers-roze",
    "name": "Joya Dragon Kickboks Scheenbeschermers roze",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer voor de jeugd.",
    "description": "Dragon scheendekkers van Joya. Voor de jeugdige vechters",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-DRAGON-SCHEENBESCHERMERS-ROZE.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-DRAGON-SCHEENBESCHERMERS-ROZE.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-dragon-kickboks-scheenbeschermers-roze/"
  },
  {
    "slug": "joya-dragon-kickboks-scheenbeschermers-goud",
    "name": "Joya Dragon Kickboks Scheenbeschermers goud",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer voor de jeugd.",
    "description": "Dragon scheendekkers van Joya. Voor de jeugdige vechters",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-DRAGON-SCHEENBESCHERMERS-GOUD-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-DRAGON-SCHEENBESCHERMERS-GOUD-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-DRAGON-SCHEENBESCHERMERS-GOUD-1-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-DRAGON-SCHEENBESCHERMERS-GOUD-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-dragon-kickboks-scheenbeschermers-goud/"
  },
  {
    "slug": "king-kickboks-scheenbeschermers-kpb-sgl-7",
    "name": "KING Kickboks scheenbeschermers KPB/SGL 7",
    "brand": "King",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 11995,
    "oldPrice": null,
    "badge": null,
    "short": "KING Kickboks scheenbeschermers KPB/SGL 7",
    "description": "KING Kickboks scheenbeschermers KPB/SGL 7\n\nVoor de fanatieke serieuze kickbokser",
    "specs": [],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/KING-PRO-BOXING-shinguard-KPB-SGL-7-S.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/KING-PRO-BOXING-shinguard-KPB-SGL-7-S.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/KING-PRO-BOXING-shinguard-KPB-SGL-7-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/KING-PRO-BOXING-shinguard-KPB-SGL-7-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/king/king-kickboks-scheenbeschermers-kpb-sgl-7/"
  },
  {
    "slug": "booster-bandage-handwraps-roze-460-cm",
    "name": "Booster bandage handwraps Roze 460 cm",
    "brand": "Booster",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met boksbandages. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is: 280 cm voor…",
    "description": "Booster bandage handwraps roze 460 cm",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/BPC-booster-bandage-460cm-roze.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/BPC-booster-bandage-460cm-roze.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/BPC-booster-bandage-460cm-roze-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/booster-bandage-handwraps-roze-460-cm/"
  },
  {
    "slug": "booster-bandage-handwraps-blauw-460-cm",
    "name": "Booster bandage handwraps Blauw 460 cm",
    "brand": "Booster",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met boksbandages. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is: 280 cm voor…",
    "description": "Booster bandage handwraps Blauw 460 cm",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/BPC-booster-bandage-460cm-blue.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/BPC-booster-bandage-460cm-blue.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/BPC-booster-bandage-460cm-blue-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/booster-bandage-handwraps-blauw-460-cm/"
  },
  {
    "slug": "booster-bandage-handwraps-thai-460-cm",
    "name": "Booster bandage handwraps THAI 460 cm",
    "brand": "Booster",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 1395,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met boksbandages. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is: 280 cm voor…",
    "description": "Booster bandage handwraps THAI 460 cm",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/BPC-booster-bandage-460cm-thai.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/BPC-booster-bandage-460cm-thai.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/07/BPC-booster-bandage-460cm-thai-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/booster-bandage-handwraps-thai-460-cm/"
  },
  {
    "slug": "jeugd-king-bandage-handwraps-zwart-2-5-meter",
    "name": "JEUGD King bandage handwraps zwart 2.5 meter",
    "brand": "King",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 795,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met boksbandages. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is: 280 cm voor…",
    "description": "King bandage handwraps zwart voor de jeugd, 2.5 meter",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/KING-bandage-250-cm-jeugd.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/KING-bandage-250-cm-jeugd.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/jeugd-king-bandage-handwraps-zwart-2-5-meter/"
  },
  {
    "slug": "king-bandage-handwraps-zwart-4-6-meter",
    "name": "King bandage handwraps zwart 4.6 meter",
    "brand": "King",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 1295,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met boksbandages. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is: 280 cm voor…",
    "description": "King bandage handwraps zwart 4.6 meter",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/KING-bandage-460-cm.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/KING-bandage-460-cm.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/king-bandage-handwraps-zwart-4-6-meter/"
  },
  {
    "slug": "jeugd-joya-velcro-bandage-handwraps-zwart-280-cm",
    "name": "JEUGD Joya Velcro bandage handwraps zwart 280 cm",
    "brand": "Joya",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met de boksbandages van Joya. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is:…",
    "description": "Joya Velcro bandage handwraps zwart",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-velcro-zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-velcro-zwart.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/jeugd-joya-velcro-bandage-handwraps-zwart-280-cm/"
  },
  {
    "slug": "jeugd-joya-velcro-bandage-handwraps-roze",
    "name": "JEUGD Joya Velcro bandage handwraps roze 280 CM",
    "brand": "Joya",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met de boksbandages van Joya. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is:…",
    "description": "Joya Velcro bandage handwraps roze",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-velcro-roze.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-velcro-roze.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/jeugd-joya-velcro-bandage-handwraps-roze/"
  },
  {
    "slug": "joya-kickboksbroek-dragon-roze",
    "name": "JOYA KICKBOKSBROEK – DRAGON – ROZE",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Stoer Dragon broekje, geschikt voor de jeugdige kickbokser.",
    "description": "Stoer Dragon broekje, geschikt voor de jeugdige kickbokser.",
    "specs": [],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-KICKBOKSBROEK-DRAGON-roze.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-KICKBOKSBROEK-DRAGON-roze.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/joya-kickboksbroek-dragon-roze/"
  },
  {
    "slug": "joya-kickboksbroek-dragon-goud",
    "name": "JOYA KICKBOKSBROEK – DRAGON – GOUD",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Stoer Dragon broekje, geschikt voor de jeugdige kickbokser.",
    "description": "Stoer Dragon broekje, geschikt voor de jeugdige kickbokser.",
    "specs": [],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-KICKBOKSBROEK-DRAGON-GOUD.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-KICKBOKSBROEK-DRAGON-GOUD.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/joya-kickboksbroek-dragon-goud/"
  },
  {
    "slug": "joya-t-shirt-roze-draak",
    "name": "JOYA T-SHIRT ROZE DRAAK Dragon",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "Stoer dragon/draak Joya shirt voor kids. Mooi te combineren met handschoenen, broekje en scheenbeschermers van dezelfde lijn.",
    "description": "JOYA T-SHIRT ROZE DRAAK",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-T-SHIRT-roze-DRAAK.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-T-SHIRT-roze-DRAAK.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-t-shirt-roze-draak/"
  },
  {
    "slug": "joya-t-shirt-gouden-draak",
    "name": "JOYA T-SHIRT GOUDEN DRAAK Dragon",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "Stoer dragon/draak Joya shirt voor kids. Mooi te combineren met handschoenen, broekje en scheenbeschermers van dezelfde lijn.",
    "description": "JOYA T-SHIRT GOUDEN DRAAK",
    "specs": [],
    "sizes": [
      "140",
      "152",
      "164"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-T-SHIRT-GOUDEN-DRAAK.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/07/JOYA-T-SHIRT-GOUDEN-DRAAK.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-t-shirt-gouden-draak/"
  },
  {
    "slug": "fightpro-jeugd-100-cm-bokszak-de-luxe-gevuld-en-met-ketting",
    "name": "FIGHTPRO 100 CM BOKSZAK ‘De Luxe’ GEVULD en met ketting",
    "brand": "Fightpro",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 7995,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro bokszak 100cm. Voor thuis, maar ook voor sportscholen.",
    "description": "FIGHTPRO 100 CM BOKSZAK ‘De Luxe’ GEVULD en met ketting. Zeer kwalitatieve bokszak voor de serieuze jeugd en volwassen boksers. Zware versie.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/05/FIGHTPRO-bokszak-kids.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/05/FIGHTPRO-bokszak-kids.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-jeugd-100-cm-bokszak-de-luxe-gevuld-en-met-ketting/"
  },
  {
    "slug": "joya-mesh-gel-binnenhandschoenen",
    "name": "JOYA MESH GEL BINNENHANDSCHOENEN",
    "brand": "Joya",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 1495,
    "oldPrice": null,
    "badge": null,
    "short": "Joya beschermende binnen-handschoenen van ademend materiaal.",
    "description": "Joya beschermende binnen-handschoenen van ademend materiaal.\n\nZeer geschikt om je handen te beschermen. Er zit gel (SKT high-density) om de knokkels om je te beschermen bij stoten op harde ondergrond, zoals een voorhoofd of een harde bokszak. Daarnaast zit er 1 meter bandage aan de handschoen om de pols stabieler te maken. Ideaal voor de snelle hand bescherming.\n\nIn verschillende maten verkrijgbaar.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/04/JOYA-gel-MESH-BINNENHANDSCHOENEN.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/04/JOYA-gel-MESH-BINNENHANDSCHOENEN.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/04/JOYA-gel-MESH-BINNENHANDSCHOENEN2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/joya-mesh-gel-binnenhandschoenen/"
  },
  {
    "slug": "booster-zakhandschoen-zwart-leer",
    "name": "Booster zakhandschoen zwart leer",
    "brand": "Booster",
    "palette": null,
    "category": "bag-gloves-boks-zak-handschoenen",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Speciaal voor op de bokszak",
    "description": "Booster zakhandschoen zwart leer",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/03/Booster-zakhandschoen.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/03/Booster-zakhandschoen.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-zakhandschoen-zwart-leer/"
  },
  {
    "slug": "twins-zakhandschoenen-zwart-leer",
    "name": "TWINS ZAKHANDSCHOENEN zwart leer",
    "brand": "Twins",
    "palette": null,
    "category": "bag-gloves-boks-zak-handschoenen",
    "price": 9995,
    "oldPrice": null,
    "badge": null,
    "short": "Speciaal voor op de bokszak",
    "description": "TWINS ZAKHANDSCHOENEN, top kwaliteit",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/03/TWINS-ZAKHANDSCHOENEN.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/03/TWINS-ZAKHANDSCHOENEN.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/03/TWINS-ZAKHANDSCHOENEN2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/twins-fightgear-kickboks-mma/twins-zakhandschoenen-zwart-leer/"
  },
  {
    "slug": "bitje-mouthguard-wacoku-zwart-oranje",
    "name": "Bitje mouthguard WACOKU A+ zwart oranje",
    "brand": "Hayabusa",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1495,
    "oldPrice": null,
    "badge": null,
    "short": "WACOKU is al jaren bekend als een van de beste bitjes in de wereld.",
    "description": "Bitje mouthguard WACOKU A+ zwart oranje",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/03/WACOCU-A-bitje-zwart-oranje.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/03/WACOCU-A-bitje-zwart-oranje.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2024/06/wacoku-mouthguard-bitje.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/bitje-mouthguard-wacoku-zwart-oranje/"
  },
  {
    "slug": "joya-instap-scheenbeschermers-katoen-elastisch",
    "name": "Joya instap Scheenbeschermers – Katoen elastisch",
    "brand": "Joya",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 1495,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer voor de beginner. Voordeel van deze scheendekkers is dat ze gewassen kunnen worden als ze vaak gedragen zijn.",
    "description": "Basis instap scheendekkers van Joya. Zeer geschikt voor zaktraining.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/03/JOYA-SCHEENBESCHERMER-INSTAP.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/03/JOYA-SCHEENBESCHERMER-INSTAP.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/03/JOYA-SCHEENBESCHERMER-INSTAP2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-instap-scheenbeschermers-katoen-elastisch/"
  },
  {
    "slug": "boksen-hygiene-binnenhandschoenen-katoen",
    "name": "Boksen Hygiene binnenhandschoenen katoen",
    "brand": "Fightpro",
    "palette": null,
    "category": "binnen-handschoenen-bokszaktraining",
    "price": 250,
    "oldPrice": null,
    "badge": null,
    "short": "Boksen Hygiene binnenhandschoenen katoen.",
    "description": "Boksen Hygiene binnenhandschoenen katoen.\n\nIdeaal voor een langere levensduur van jouw bokshandschoen, doordat ze zweet opnemen. Wassen na elke training. Worden per paar geleverd.\n\nZe zijn zowel links als rechtsdraagbaar. Gemaakt van ademend katoen.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/03/Boksen-Hygiene-Binnenhandschoenen-Katoen.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/03/Boksen-Hygiene-Binnenhandschoenen-Katoen.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/binnen-handschoenen-bokszaktraining/boksen-hygiene-binnenhandschoenen-katoen/"
  },
  {
    "slug": "hayabusa-t3-boxing-gloves-bokshandschoenen-navy-yellow",
    "name": "Hayabusa T3 Boxing Gloves bokshandschoenen Navy / Yellow",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17900,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "Hayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-navy-yellow.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-navy-yellow.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-navy-yellow2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-navy-yellow3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-navy-yellow4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-navy-yellow5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-boxing-gloves-bokshandschoenen-navy-yellow/"
  },
  {
    "slug": "hayabusa-t3-boxing-gloves-bokshandschoenen-charcoal-black",
    "name": "Hayabusa T3 Boxing Gloves bokshandschoenen charcoal black",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17900,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "Hayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-black.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-black.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-black1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-black2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-black3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-black4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-boxing-gloves-bokshandschoenen-charcoal-black/"
  },
  {
    "slug": "hayabusa-t3-boxing-gloves-bokshandschoenen-white-gold",
    "name": "Hayabusa T3 Boxing Gloves bokshandschoenen White / gold",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17900,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "Hayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-bokshandschoenen-white-gold.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-bokshandschoenen-white-gold.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-bokshandschoenen-white-gold1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-bokshandschoenen-white-gold2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-bokshandschoenen-white-gold3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-bokshandschoenen-white-gold4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-boxing-gloves-bokshandschoenen-white-gold/"
  },
  {
    "slug": "hayabusa-t3-boxing-gloves-kickbokshandschoenen-charcoal-lime",
    "name": "Hayabusa T3 Boxing Gloves kickbokshandschoenen Charcoal / Lime",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17900,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "Hayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-lime.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-lime.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-lime2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-lime3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-lime4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Hayabusa-T3-Boxing-Gloves-charcoal-lime5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-boxing-gloves-kickbokshandschoenen-charcoal-lime/"
  },
  {
    "slug": "victory-sports-plafondbeugel-bokszak-zwart",
    "name": "Victory Sports Plafondbeugel bokszak Zwart",
    "brand": "Fightpro",
    "palette": null,
    "category": "diversen",
    "price": 1495,
    "oldPrice": null,
    "badge": null,
    "short": "Victory Sports Plafondbeugel bokszak Zwart",
    "description": "Victory Sports Plafondbeugel bokszak Zwart",
    "specs": [],
    "sizes": [],
    "stock": 0,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/02/VictorySports-Plafondbeugel-bokszak-Zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/02/VictorySports-Plafondbeugel-bokszak-Zwart.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/diversen/victory-sports-plafondbeugel-bokszak-zwart/"
  },
  {
    "slug": "twins-kickbokshandschoenen-special-fantasy-3-grass",
    "name": "Twins kickbokshandschoenen, Thaise vlag",
    "brand": "Twins",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17495,
    "oldPrice": null,
    "badge": null,
    "short": "Twins kickbokshandschoenen SPECIAL FANTASY 3 GRASS",
    "description": "Twins kickbokshandschoenen, Thaise vlag\n\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/02/Twins-kickbokshandschoenen-thaise-vlag.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Twins-kickbokshandschoenen-thaise-vlag.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/twins-kickbokshandschoenen-special-fantasy-3-grass/"
  },
  {
    "slug": "joya-fight-fast-dura-pad-pu-zilver",
    "name": "JOYA FIGHT FAST – DURA PAD PU – ZILVER",
    "brand": "Joya",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 8995,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA FIGHT FAST – DURA PAD PU – ZILVER",
    "description": "JOYA FIGHT FAST – DURA PAD PU – ZILVER\nPer paar geleverd. Aan de achterkant zit extra padding voor de pols. Daardoor ook zeer geschikt voor knietjes en trappen.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/02/JOYA-FIGHT-FAST-DURA-PAD-PU-ZILVER.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/02/JOYA-FIGHT-FAST-DURA-PAD-PU-ZILVER.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/JOYA-FIGHT-FAST-DURA-PAD-PU-ZILVER2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-fight-fast-dura-pad-pu-zilver/"
  },
  {
    "slug": "fairtex-bpv1-leder-buik-pantser-belly-protector-2",
    "name": "Fairtex BPV1 leder buik pantser belly protector",
    "brand": "Fairtex",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 11995,
    "oldPrice": null,
    "badge": null,
    "short": "Fairtex BPV2 leder buik pantser belly protector",
    "description": "Fairtex BPV1 leder buik pantser belly protector\n\n• Rundsleder\n\n• One size",
    "specs": [
      "Rundsleder",
      "One size"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/02/FAIRTEX-BPV1-belly-protector.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/02/FAIRTEX-BPV1-belly-protector.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/FAIRTEX-BPV1-belly-protector2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fairtex-fightwear-muay-thai/fairtex-bpv1-leder-buik-pantser-belly-protector-2/"
  },
  {
    "slug": "fairtex-bpv1-leder-buik-pantser-belly-protector",
    "name": "Fairtex BPV2 leder buik pantser belly protector",
    "brand": "Fairtex",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 13995,
    "oldPrice": null,
    "badge": null,
    "short": "Fairtex BPV2 leder buik pantser belly protector",
    "description": "Fairtex BPV2 leder buik pantser belly protector\n\n• Halve kilo lichter dan het traditionele BPV1 model\n\n• Rundsleder\n\n• 1,3 kg\n\n• One size",
    "specs": [
      "Halve kilo lichter dan het traditionele BPV1 model",
      "Rundsleder",
      "1,3 kg",
      "One size"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/02/FAIRTEX-BPV2-belly-protector.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/02/FAIRTEX-BPV2-belly-protector.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/FAIRTEX-BPV2-belly-protector2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fairtex-fightwear-muay-thai/fairtex-bpv1-leder-buik-pantser-belly-protector/"
  },
  {
    "slug": "fairtex-sporttas-gymbag-bag2",
    "name": "Fairtex sporttas Gymbag BAG2",
    "brand": "Fairtex",
    "palette": null,
    "category": "sport-tassen",
    "price": 10995,
    "oldPrice": null,
    "badge": null,
    "short": "Fairtex sporttas Gymbag BAG2 meerdere kleuren",
    "description": "Fairtex sporttas Gymbag BAG2\n\n• 72x36x34cm. LxHxB.\n\n• Zeer professionele uitvoering\n\n• Foto met materialen erin ter decoratie.\n\n• Gewicht lege tas 1,9 kg\n\nGroen, Zwart en Khaki",
    "specs": [
      "72x36x34cm. LxHxB.",
      "Zeer professionele uitvoering",
      "Foto met materialen erin ter decoratie.",
      "Gewicht lege tas 1,9 kg"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2022/02/Fairtex-sporttas-Gymbag-BAG2-2-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Fairtex-sporttas-Gymbag-BAG2-2-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Fairtex-sporttas-Gymbag-BAG2-2-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2022/02/Fairtex-sporttas-Gymbag-BAG2_a.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fairtex-fightwear-muay-thai/fairtex-sporttas-gymbag-bag2/"
  },
  {
    "slug": "professionele-wedstrijd-boksring-kickboksring-kopen",
    "name": "Professionele wedstrijd boksring / kickboksring kopen De prijs op aanvraag!",
    "brand": "Fightpro",
    "palette": null,
    "category": "diversen",
    "price": 0,
    "oldPrice": null,
    "badge": null,
    "short": "Professionele wedstrijd boksring / kickboksring De prijs op aanvraag!",
    "description": "Professionele wedstrijd boksring / kickboksring\n\nDe prijs op aanvraag!\n\nMaten zelf te bepalen. De boksring kan kaal worden afgenomen, maar ook compleet met touwen/hoek-kussens etc.\nKan een vloer boksring zijn of op een verhoging/podium.\nLevertijd is een aantal weken.\n\nNeen contact met ons op voor een offerte",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/12/IMG_2975-scaled.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/12/IMG_2975-scaled.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/12/bfd46240-1de3-41d8-8d4e-8f8fbdbc0b17.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/12/872e182e-e4cd-430e-b872-95eda949e041.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/12/0100894b-2509-4716-9bfb-2dece4a67b26.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/12/6b5457b1-27e5-4b91-8dbf-5a0358949b18.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/professionele-wedstrijd-boksring-kickboksring-kopen/"
  },
  {
    "slug": "waardebon-fightpro-enschede",
    "name": "Waardebon fightpro enschede",
    "brand": "Fightpro",
    "palette": null,
    "category": "diversen",
    "price": 5000,
    "oldPrice": null,
    "badge": null,
    "short": "Waardebon vechtsport artikelen",
    "description": "Origineel cadeau onder de kerstboom? Welke maat bokshandschoenen? Wat voor kleur scheenbeschermers? Geef gewoon een FIGHTPRO waardebon cadeau! Dan maak je nooit fouten, en kunnen ze zelf iets uitzoeken in onze vechtsport winkel!\n\n💪🎄🎁\n\nBedrag zelf te bepalen (vanaf €25). Ook via tikkie betaling mogelijk.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/12/waardebon-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/12/waardebon-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/waardebon-fightpro-enschede/"
  },
  {
    "slug": "bokszak-big-bag-ofwel-thaise-pole-bag-gevuld-en-met-ketting-210x60-cm",
    "name": "FIGHTPRO BOKSZAK ‘BIG-BAG’ GEVULD en met ketting 210×60 cm",
    "brand": "Fightpro",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 55000,
    "oldPrice": null,
    "badge": null,
    "short": "Fightpro “BIG BAG” bokszak 210×60 cm. Prijs is exclusief verzending!",
    "description": "FIGHTPRO BOKSZAK ‘BIG-BAG’ ofwel Thaise Pole bag GEVULD en met ketting 210×60 cm. Prijs is exclusief verzending!\nKwalitatieve bokszak, zeer geschikt voor sportscholen. hangt aan een ketting maar staat ook op de grond.\nDeze super kickboks-zak wordt aan huis/sportschool geleverd, prijs is inclusief verzending en FULL-COLOR opdruk!\nNeem contact op voor uitleg.\n\nhttps://www.fightpro.nl/wp-content/uploads/2021/12/WhatsApp-Video-2026-04-27-at-09.18.36.mp4",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/12/E918EBC5-6179-4415-8108-D11A978AD67C.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/12/E918EBC5-6179-4415-8108-D11A978AD67C.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/12/6F7ADA34-311E-443E-8335-72058D7F42D5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/bokszak-big-bag-ofwel-thaise-pole-bag-gevuld-en-met-ketting-210x60-cm/"
  },
  {
    "slug": "coldspray-icespray-300-ml",
    "name": "Coldspray  / icespray 300 ml",
    "brand": "PX",
    "palette": null,
    "category": "diversen",
    "price": 695,
    "oldPrice": null,
    "badge": null,
    "short": "Coldspray / icespray 300 ml tegen zwellingen en blessures",
    "description": "Coldspray  / icespray 300 ml tegen zwellingen en blessures",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/11/Coldspray-icespray-300-ml.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Coldspray-icespray-300-ml.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/px-fightwear/coldspray-icespray-300-ml/"
  },
  {
    "slug": "hayabusa-ryoko-mesh-gear-bag-sporttas-zwart-large",
    "name": "Hayabusa Ryoko Mesh Gear Bag – Sporttas – zwart – large",
    "brand": "Hayabusa",
    "palette": null,
    "category": "sport-tassen",
    "price": 13900,
    "oldPrice": null,
    "badge": null,
    "short": "Hayabusa Ryoko Mesh Gear Bag – Sporttas – zwart – large",
    "description": "Hayabusa Ryoko Mesh Gear Bag – Sporttas – zwart – large",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa-Ryoko-Mesh-Gear-Bag-Sporttas-zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa-Ryoko-Mesh-Gear-Bag-Sporttas-zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa-Ryoko-Mesh-Gear-Bag-Sporttas-zwart2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa-Ryoko-Mesh-Gear-Bag-Sporttas-zwart3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa-Ryoko-Mesh-Gear-Bag-Sporttas-zwart4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-ryoko-mesh-gear-bag-sporttas-zwart-large/"
  },
  {
    "slug": "bitje-mouthguard-hayabusa-combat-zwart",
    "name": "Bitje mouthguard Hayabusa Combat zwart",
    "brand": "Hayabusa",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1795,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "Bitje mouthguard Hayabusa Combat zwart black",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/11/Bitje-mouthguard-Hayabusa-Combat-zwart-black.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Bitje-mouthguard-Hayabusa-Combat-zwart-black.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Bitje-mouthguard-Hayabusa-Combat-zwart-black2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Bitje-mouthguard-Hayabusa-Combat-zwart-black3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/bitje-mouthguard-hayabusa-combat-zwart/"
  },
  {
    "slug": "bitje-mouthguard-hayabusa-combat-wit",
    "name": "Bitje mouthguard Hayabusa Combat wit",
    "brand": "Hayabusa",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1795,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "Bitje mouthguard Hayabusa Combat wit/white",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/11/Bitje-mouthguard-Hayabusa-Combat-wit-white.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Bitje-mouthguard-Hayabusa-Combat-wit-white.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Bitje-mouthguard-Hayabusa-Combat-wit-white2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Bitje-mouthguard-Hayabusa-Combat-wit-white3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/bitje-mouthguard-hayabusa-combat-wit/"
  },
  {
    "slug": "hayabusa-t3-kickboks-scheenbeschermers-zwart",
    "name": "HAYABUSA T3 KICKBOKS SCHEENBESCHERMERS ZWART",
    "brand": "Hayabusa",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 16900,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "[et_pb_section fb_built=”1″ theme_builder_area=”post_content” _builder_version=”4.24.2″ _module_preset=”default”][/et_pb_section]",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa_T3_scheenbeschermers_zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa_T3_scheenbeschermers_zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa_T3_scheenbeschermers_zwart2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa_T3_scheenbeschermers_zwart3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa_T3_scheenbeschermers_zwart4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-kickboks-scheenbeschermers-zwart/"
  },
  {
    "slug": "hayabusa-t3-lx-boxing-gloves-crimson",
    "name": "Hayabusa T3 LX Boxing Gloves – Crimson",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 22995,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "De beste serie van hayabusa! De T3 LX\nHayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter.\n\nHayabusa T3 LX Boxing Gloves – Crimson",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa_T3_LX_bokshandschoenen_crimson.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa_T3_LX_bokshandschoenen_crimson.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa_T3_LX_bokshandschoenen_crimson2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-lx-boxing-gloves-crimson/"
  },
  {
    "slug": "hayabusa-t3-lx-boxing-gloves-slate",
    "name": "Hayabusa T3 LX Boxing Gloves – Slate",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 22995,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "De beste serie van hayabusa! De T3 LX\nHayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter.\n\nHayabusa T3 LX Boxing Gloves – Slate",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa_T3_LX_bokshandschoenen_Slate.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/11/Hayabusa_T3_LX_bokshandschoenen_Slate.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-lx-boxing-gloves-slate/"
  },
  {
    "slug": "joya-sleutelhanger-vlaggen-landen",
    "name": "JOYA SLEUTELHANGER vlaggen landen",
    "brand": "Joya",
    "palette": null,
    "category": "diversen",
    "price": 250,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA SLEUTELHANGER vlaggen landen",
    "description": "JOYA SLEUTELHANGER vlaggen landen",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/11/joya_sleutelhanger_landen.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/11/joya_sleutelhanger_landen.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-sleutelhanger-vlaggen-landen/"
  },
  {
    "slug": "thaise-namman-muay-boxing-olie-120-ml",
    "name": "THAISE NAMMAN MUAY BOXING OLIE 120 ml",
    "brand": "Namman Muay",
    "palette": null,
    "category": "diversen",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "THAISE NAMMAN MUAY BOXING OLIE, voor blessures, spieren opwarmen en nog veel meer.",
    "description": "THAISE NAMMAN MUAY BOXING OLIE, voor blessures, spieren opwarmen en nog veel meer.\n120 ml.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/11/thaise_Namman_Muay_Olie.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/11/thaise_Namman_Muay_Olie.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/namman/thaise-namman-muay-boxing-olie-120-ml/"
  },
  {
    "slug": "springtouw-standaard-kunststof",
    "name": "PX Springtouw standaard kunststof",
    "brand": "PX",
    "palette": null,
    "category": "diversen",
    "price": 750,
    "oldPrice": null,
    "badge": null,
    "short": "Springtouw standaard kunststof 280 cm",
    "description": "Springtouw standaard kunststof 280 cm",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/10/springtouw_standaard_kunststof_280_cm.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/10/springtouw_standaard_kunststof_280_cm.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/px-fightwear/springtouw-standaard-kunststof/"
  },
  {
    "slug": "fa-nutrition-xtreme-napalm-energizer-270g",
    "name": "Pre-workout FA Nutrition Xtreme Napalm Energizer (270g)",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "Een van de beste Pre Workouts op de markt! Handle with care! Beta-alanine (CarnoSyn®), arginine AKG, citruline malate, taurine, hydrolysed casein (PeptoPro®)…",
    "description": "FA Nutrition Xtreme Napalm Energizer (270g)\n\n– 60 Porties á 4,5g\n– makkelijk met water mengen\n– 200 mg Cafeïne per protie (4,5g)",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/10/Pre-workout-FA-Nutrition-Xtreme-Napalm-Energizer-270g.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/10/Pre-workout-FA-Nutrition-Xtreme-Napalm-Energizer-270g.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/fa-nutrition-xtreme-napalm-energizer-270g/"
  },
  {
    "slug": "hyper-mass-2270-gram-door-biotech-usa",
    "name": "HYPER MASS 2270 gram door BioTech USA THT Korting",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 2500,
    "oldPrice": 4795,
    "badge": "Aanbieding",
    "short": "HYPER MASS 2270G",
    "description": "Koolhydraat- en eiwitdrankpoeder, met creatine, vol met voedingsvezels, zonder toegevoegde suikers.\n\n1 DOSIS Hyper Mass (65 G) BEVAT:\n\n• 254 kcal\n\n• eiwit: 20 g\n\n• koolhydraten: 38 g (suikers: 4,9 g)\n\n• vezels: 5,4 g\n\n• vet: 1,4 g\n\n• gemicroniseerd creatine-monohydraat: 3,25 g (creatine: 2,9 g)",
    "specs": [
      "254 kcal",
      "eiwit: 20 g",
      "koolhydraten: 38 g (suikers: 4,9 g)",
      "vezels: 5,4 g",
      "vet: 1,4 g",
      "gemicroniseerd creatine-monohydraat: 3,25 g (creatine: 2,9 g)"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/10/bio_tech_HYPER_-MASS_2270G.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/10/bio_tech_HYPER_-MASS_2270G.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/hyper-mass-2270-gram-door-biotech-usa/"
  },
  {
    "slug": "fairtex-heavy-hitters-gloves",
    "name": "FAIRTEX BGV5 Muay Thai Super Sparring Glove",
    "brand": "Fairtex",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 12995,
    "oldPrice": null,
    "badge": null,
    "short": "Muay Thai FAIRTEX BGV5 Bokshandschoenen voor sparren en intensieve trainingen.",
    "description": "Muay Thai FAIRTEX BGV5  Bokshandschoenen voor sparren en intensieve trainingen.",
    "specs": [],
    "sizes": [
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/10/fairtex-sparring-gloves-bokshandschoenen-BGV5-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/10/fairtex-sparring-gloves-bokshandschoenen-BGV5-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/10/fairtex-sparring-gloves-bokshandschoenen-BGV5-3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/10/fairtex-sparring-gloves-bokshandschoenen-BGV5-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fairtex-fightwear-muay-thai/fairtex-heavy-hitters-gloves/"
  },
  {
    "slug": "fairtex-thai-shorts-black",
    "name": "FAIRTEX THAI SHORTS Black",
    "brand": "Fairtex",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 6495,
    "oldPrice": null,
    "badge": null,
    "short": "Muay Thai FAIRTEX THAI SHORTS Black",
    "description": "Muay Thai FAIRTEX THAI SHORTS Black",
    "specs": [],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/10/FAIRTEX_THAI_SHORTS_black_BS0639.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/10/FAIRTEX_THAI_SHORTS_black_BS0639.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/fairtex-thai-shorts-black/"
  },
  {
    "slug": "joya-work-out-bokshandschoen-leer-luxe-versie",
    "name": "JOYA ‘WORK OUT’ BOKSHANDSCHOEN Leer luxe versie",
    "brand": "Joya",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 6495,
    "oldPrice": null,
    "badge": null,
    "short": "Gave kickbokshandschoen van Joya Fight Gear",
    "description": "De goedkope leren en toch goede handschoenen van Joya, Goede kwaliteit leer voor een top prijs!",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/09/Joya_kickbokshandschoenen_Work_Out_luxe.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/09/Joya_kickbokshandschoenen_Work_Out_luxe.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-work-out-bokshandschoen-leer-luxe-versie/"
  },
  {
    "slug": "joya-focus-mitt-stoot-pads",
    "name": "JOYA Focus mitt / stoot pads",
    "brand": "Joya",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 4495,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA STOOT PAD ZWART",
    "description": "JOYA STOOT PAD ZWART\nAan de achterkant zit extra padding voor de pols.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/09/Joya_Focus_Mitt.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/09/Joya_Focus_Mitt.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-focus-mitt-stoot-pads/"
  },
  {
    "slug": "joya-kickbokshandschoenen-pu-top-ten-black",
    "name": "Joya-kickbokshandschoenen-PU-Top-Ten Black",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Voor alle startende kickboksers. Joya ‘Top tien’ kickbokshandschoen! De bokshandschoen van hoogwaardig synthetisch leer (PU) is geschikt voor alle leeftijden.",
    "description": "Voor alle startende kickboksers. Joya ‘Top tien’ kickbokshandschoen! De bokshandschoen van hoogwaardig synthetisch leer (PU) is geschikt voor alle leeftijden.",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz",
      "4 oz",
      "6 oz",
      "8 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/09/Joya_bokshandschoenen_top-ten_black1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/09/Joya_bokshandschoenen_top-ten_black1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/09/Joya_bokshandschoenen_top-ten_black2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/09/Joya_bokshandschoenen_top-ten_black3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-kickbokshandschoenen-pu-top-ten-black/"
  },
  {
    "slug": "joya-junior-hoofdbeschermer-combat-open",
    "name": "Joya Junior Hoofdbeschermer Boks helm ‘COMBAT’ open",
    "brand": "Joya",
    "palette": null,
    "category": "head-protection-helm-hoofd-beschermer",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Helm voor boksen en kickboksen",
    "description": "Boks Helm voor boksen of kickboksen. Open, zonder jukbeen bescherming.\n\nMeerdere kleuren en maten.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/09/joya_hoofdbeschermer_open.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/09/joya_hoofdbeschermer_open.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/head-protection-helm-hoofd-beschermer/joya-junior-hoofdbeschermer-combat-open/"
  },
  {
    "slug": "joya-junior-hoofdbeschermer",
    "name": "Joya Junior Hoofdbeschermer / boks helm",
    "brand": "Joya",
    "palette": null,
    "category": "head-protection-helm-hoofd-beschermer",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "Junior hoofdbeschermer / helm voor boksen en kickboksen",
    "description": "Junior helmpjes voor de jeugd. Boks helm\n\nMeerdere maten.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/08/joya-hoofdbeschermer-pu-helm.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/08/joya-hoofdbeschermer-pu-helm.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2021/08/joya-hoofdbeschermer-pu-helm-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/head-protection-helm-hoofd-beschermer/joya-junior-hoofdbeschermer/"
  },
  {
    "slug": "joya-work-out-bokshandschoen-leer",
    "name": "JOYA ‘WORK OUT’ BOKSHANDSCHOEN Leer",
    "brand": "Joya",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 5495,
    "oldPrice": null,
    "badge": null,
    "short": "Gave kickbokshandschoen van Joya Fight Gear",
    "description": "De goedkope leren en toch goede handschoenen van Joya, Goede kwaliteit leer voor een top prijs!",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 0,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/07/workou_glove_leather_joya.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/07/workou_glove_leather_joya.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-work-out-bokshandschoen-leer/"
  },
  {
    "slug": "basic-scheenbeschermers-katoen",
    "name": "Basic Scheenbeschermers – Katoen",
    "brand": "Fightpro",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 2000,
    "oldPrice": 3995,
    "badge": "Aanbieding",
    "short": "Basic Scheenbeschermer voor de beginner. Voordeel van deze scheendekkers is dat ze gewassen kunnen worden als ze vaak gedragen zijn.",
    "description": "Basis katoenen scheendekkers in meerdere kleuren verkrijgbaar. Zeer geschikt voor de startende vechters. Kan in de wasmachine (Op lage temperaturen)",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2021/05/katoen_scheenbeschermer_topstar.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2021/05/katoen_scheenbeschermer_topstar.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/scheenbeschermers-shinguards-kickboks-mma/basic-scheenbeschermers-katoen/"
  },
  {
    "slug": "fightpro-bokszak-de-luxe-gevuld-en-met-ketting-180-cm",
    "name": "FIGHTPRO BOKSZAK ‘De Luxe’ GEVULD en met ketting 180 cm",
    "brand": "Fightpro",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 13995,
    "oldPrice": null,
    "badge": null,
    "short": "Bokszak kopen in Enschede? Fightpro bokszak 180 cm, top kwaliteit en ook voor professioneel gebruik.",
    "description": "Bokszak kopen? Meerdere op voorraad, ok mogelijk om te laten personaliseren met eigen logo.\n\nFIGHTPRO BOKSZAK ‘De Luxe’ GEVULD en met ketting 180 cm. Kwalitatieve bokszak voor de beginner maar ook voor sportscholen zeer geschikt.\n\nOok te bestellen in de maten:\n80cm\n100 cm\n120 cm\n150 cm\n180 cm Altijd meerdere voorradig!",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/12/FIGHTPRO-bokszak-deluxe-180cm.2jpg.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/12/FIGHTPRO-bokszak-deluxe-180cm.2jpg.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/12/FIGHTPRO-bokszak-deluxe-180cm.2jpg.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/12/FIGHTPRO-bokszak-deluxe-180cm-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/12/FIGHTPRO-bokszak-deluxe-180cm-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/12/FIGHTPRO-bokszak-deluxe-180cm.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/fightpro-enschede/fightpro-bokszak-de-luxe-gevuld-en-met-ketting-180-cm/"
  },
  {
    "slug": "100-pure-whey-2270g-door-biotech-usa",
    "name": "100% Pure Whey (2270g) door BioTech USA",
    "brand": "Bio Tech",
    "palette": null,
    "category": "sportvoeding-pre-workout-eiwit-supplementen",
    "price": 7995,
    "oldPrice": null,
    "badge": null,
    "short": "100% Pure Whey voor eiwit shakes. Verschillende smaken.",
    "description": "100% Pure Whey (2270g) door BioTech USA. Een van de best producten op de markt. Daarnaast erg lekker van smaak.\n\n• met toegevoegde functionele aminozuren\n\n• palmolievrij en conserveermiddelen vrij\n\n• 1 dosis bevat (28 g): 21 g eiwitten waarvan 6 g BCAA’s",
    "specs": [
      "met toegevoegde functionele aminozuren",
      "palmolievrij en conserveermiddelen vrij",
      "1 dosis bevat (28 g): 21 g eiwitten waarvan 6 g BCAA’s"
    ],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/10/bio_tech_whey.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/10/bio_tech_whey.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/bio-tech/100-pure-whey-2270g-door-biotech-usa/"
  },
  {
    "slug": "makura-tephra-max-navy-white-red-gebitsbeschermer-bitje",
    "name": "Makura TEPHRA MAX – NAVY/WHITE/RED Gebitsbeschermer – bitje",
    "brand": "Makura",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 2495,
    "oldPrice": null,
    "badge": null,
    "short": "Makura TEPHRA MAX – NAVY/ORANGE/BLUE Gebitsbeschermer – bitje",
    "description": "Makura TEPHRA MAX – NAVY/ORANGE/BLUE Gebitsbeschermer – bitje",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/10/tephramax_frontside_blue-white-red-2.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/10/tephramax_frontside_blue-white-red-2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/10/Tephra_6017514128_05.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/10/Tephra_6017514128_04.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/10/Tephra_6017514128_03.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/10/Tephra_6017514128_02.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/makura-tephra-max-navy-white-red-gebitsbeschermer-bitje/"
  },
  {
    "slug": "joya-wand-makiwara-boks-uppercut-unit",
    "name": "JOYA wand-MAKIWARA BOKS + UPPERCUT UNIT",
    "brand": "Joya",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 19995,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA wand-MAKIWARA BOKS + UPPERCUT UNIT",
    "description": "JOYA wand-MAKIWARA BOKS + UPPERCUT UNIT. Ideaal om aan de muur te bevestigen. Geschikt voor stoten en knietjes.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/10/wall_makiwara.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/10/wall_makiwara.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-wand-makiwara-boks-uppercut-unit/"
  },
  {
    "slug": "joya-dura-trap-en-stoot-pad-leer-zwart",
    "name": "JOYA DURA TRAP EN STOOT PAD (LEER) ZWART",
    "brand": "Joya",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 13995,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA DURA TRAP EN STOOT PAD (LEER) ZWART",
    "description": "JOYA DURA TRAP EN STOOT PAD (LEER) ZWART\nAan de achterkant zit extra padding voor de pols. Daardoor ook zeer geschikt voor knietjes en trappen.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/10/074002-blk.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/10/074002-blk.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-dura-trap-en-stoot-pad-leer-zwart/"
  },
  {
    "slug": "matchu-trap-stootkussen-pads",
    "name": "MATCHU TRAP- EN STOOTKUSSEN",
    "brand": "Matchu",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 5995,
    "oldPrice": null,
    "badge": null,
    "short": "MATCHU TRAP- EN STOOTKUSSEN, makkelijk voor alle niveaus. Lekker licht.",
    "description": "MATCHU TRAP- EN STOOTKUSSEN, makkelijk voor alle niveaus. Lekker licht.\n34 x 18 cm. Worden per paar verkocht",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/10/Trap-en-stootkussen-01.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/10/Trap-en-stootkussen-01.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/10/Tranp-en-stootkussen-04.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/10/Trap-en-stootkussen-02.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/10/Trap-en-stootkussen-03.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/matchu/matchu-trap-stootkussen-pads/"
  },
  {
    "slug": "joya-dura-pad-trap-fight-fast-leer-groen",
    "name": "JOYA DURA PAD TRAP “FIGHT FAST” (LEER) Faded black",
    "brand": "Joya",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 14995,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA DURA PAD TRAP “FIGHT FAST” (LEER) Faded black.",
    "description": "JOYA DURA PAD TRAP “FIGHT FAST” (LEER) Faded black.\nDe trapkussens zijn 38 cm lang en 7 cm dik. Aan de achterkant zit extra padding voor de pols. Daardoor ook zeer geschikt voor knietjes en trappen.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/10/Joya-Handpads_Leer_Thai_Dura_Fight_Fast_Zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/10/Joya-Handpads_Leer_Thai_Dura_Fight_Fast_Zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/10/Joya-Handpads_Leer_Thai_Dura_Fight_Fast_Zwart2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-dura-pad-trap-fight-fast-leer-groen/"
  },
  {
    "slug": "joya-bokszak-ketting-met-wartel",
    "name": "JOYA BOKSZAK KETTING MET WARTEL",
    "brand": "Joya",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 1595,
    "oldPrice": null,
    "badge": null,
    "short": "JOYA BOKSZAK KETTING MET WARTEL",
    "description": "JOYA BOKSZAK KETTING MET WARTEL. Door de lagers kan de zak makkelijker draaien en zal daardoor langer meegaan.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/10/chain_1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/10/chain_1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/boxing-bags-heavy-bag-bokszak/joya-bokszak-ketting-met-wartel/"
  },
  {
    "slug": "joya-mma-handschoen-zwart-metallic",
    "name": "Joya MMA handschoen – Zwart Metallic",
    "brand": "Joya",
    "palette": null,
    "category": "mma-gloves-leer-leder-handschoenen",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Mooie prijs/kwaliteit verhouding",
    "description": "Joya MMA handschoen – Zwart Metallic",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/10/joya_nieuwe_collectie_zwart_mma_handschoen_9_copy.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/10/joya_nieuwe_collectie_zwart_mma_handschoen_9_copy.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/10/joya_nieuwe_collectie_zwart_mma_handschoen_7_copy.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/10/joya_nieuwe_collectie_zwart_mma_handschoen_6_copy.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/10/joya_nieuwe_collectie_zwart_mma_handschoen_5_copy.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-mma-handschoen-zwart-metallic/"
  },
  {
    "slug": "booster-tbt-chaos-shorts-grey-black",
    "name": "Booster TBT Chaos shorts – GREY/BLACK",
    "brand": "Booster",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "Een stoer Muay Thai van het merk Booster",
    "description": "Een stoer Muay Thai van het merk Booster",
    "specs": [],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/09/5b2ceb55-d90f-4159-a714-ff7efa5cf581.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/09/5b2ceb55-d90f-4159-a714-ff7efa5cf581.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/09/34de19da-b89f-4830-bfec-85510d61e6da.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-tbt-chaos-shorts-grey-black/"
  },
  {
    "slug": "hayabusa-falcon-muay-thai-shorts-white",
    "name": "Hayabusa Falcon Muay Thai Shorts – WHITE",
    "brand": "Hayabusa",
    "palette": null,
    "category": "muay-thai-short-kickboks-broekjes",
    "price": 6995,
    "oldPrice": null,
    "badge": null,
    "short": "Een mooi sportbroekje van het merk Hayabusa. Traditionele muay thai shorts",
    "description": "Een mooi sportbroekje van het merk Hayabusa. Traditionele muay thai shorts",
    "specs": [],
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/09/hayabusa-fmts-white-front.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/09/hayabusa-fmts-white-front.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/09/hayabusa-fmts-white-back.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/t-shirts-hoodies-trainingspakken-kleding-fighters-mma-kickboksen/muay-thai-short-kickboks-broekjes/hayabusa-falcon-muay-thai-shorts-white/"
  },
  {
    "slug": "makura-toka-pro-gebitsbeschermer-bitje-black-granite",
    "name": "Makura Toka Pro Gebitsbeschermer – bitje black granite",
    "brand": "Makura",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1295,
    "oldPrice": null,
    "badge": null,
    "short": "Makura Toka Pro Gebitsbeschermer – bitje black granite",
    "description": "Makura Toka Pro Gebitsbeschermer – bitje black granite",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/09/Makura-Toka-Pro-Gebitsbeschermer-Black-Senior2.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/09/Makura-Toka-Pro-Gebitsbeschermer-Black-Senior2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/09/Makura-Toka-Pro-Gebitsbeschermer-Black-Senior.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/makura-toka-pro-gebitsbeschermer-bitje-black-granite/"
  },
  {
    "slug": "makura-ignis-pro-gel-gebitsbeschermer-polar-white-cool-blue",
    "name": "Makura Ignis Pro Gel Gebitsbeschermer polar White – cool blue",
    "brand": "Makura",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1795,
    "oldPrice": null,
    "badge": null,
    "short": "Makura Ignis Pro Gel Gebitsbeschermer polar White – cool blue",
    "description": "Makura Ignis Pro Gel Gebitsbeschermer polar White – cool blue",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/09/Makura-bitje-Ignes-Pro-Polar-White-Cooled-Blue.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/09/Makura-bitje-Ignes-Pro-Polar-White-Cooled-Blue.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/09/Makura-bitje-Ignes-Pro-Polar-White-Cooled-Blue2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/makura-ignis-pro-gel-gebitsbeschermer-polar-white-cool-blue/"
  },
  {
    "slug": "makura-ignis-pro-gel-gebitsbeschermer-black-granite-molten-orange-senior",
    "name": "Makura Ignis Pro Gel Gebitsbeschermer black granite – molten orange Senior",
    "brand": "Makura",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1795,
    "oldPrice": null,
    "badge": null,
    "short": "Makura Ignis Pro Gel Gebitsbeschermer black granite – molten orange Senior",
    "description": "Makura Ignis Pro Gel Gebitsbeschermer black granite – molten orange Senior",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–IGNES-PRO–BLACK-GRANITE-MOLTEN-ORANGE.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–IGNES-PRO–BLACK-GRANITE-MOLTEN-ORANGE.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–IGNES-PRO–BLACK-GRANITE-MOLTEN-ORANGE2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/makura-ignis-pro-gel-gebitsbeschermer-black-granite-molten-orange-senior/"
  },
  {
    "slug": "makura-ignis-pro-gel-gebitsbeschermer-polar-white-electric-pink",
    "name": "Makura Ignis Pro Gel Gebitsbeschermer polar White – electric Pink",
    "brand": "Makura",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1795,
    "oldPrice": null,
    "badge": null,
    "short": "Makura Ignis Pro Gel Gebitsbeschermer polar White – electric Pink",
    "description": "Makura Ignis Pro Gel Gebitsbeschermer polar White – electric Pink",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/09/Makura-Ignis-Pro-Gel-Gebitsbeschermer-polar-white-electric-pink2.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/09/Makura-Ignis-Pro-Gel-Gebitsbeschermer-polar-white-electric-pink2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/09/Makura-Ignis-Pro-Gel-Gebitsbeschermer-polar-white-electric-pink.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/makura-ignis-pro-gel-gebitsbeschermer-polar-white-electric-pink/"
  },
  {
    "slug": "makura-toka-pro-gebitsbeschermer-bitje-polar-white",
    "name": "Makura Toka Pro Gebitsbeschermer – bitje Polar white",
    "brand": "Makura",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1295,
    "oldPrice": null,
    "badge": null,
    "short": "Makura Toka Pro Gebitsbeschermer – bitje Polar white",
    "description": "Makura Toka Pro Gebitsbeschermer – bitje Polar white",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-polar-white.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-polar-white.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-polar-white2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/makura-toka-pro-gebitsbeschermer-bitje-polar-white/"
  },
  {
    "slug": "makura-toka-pro-gebitsbeschermer-bitje-electric-pink",
    "name": "Makura Toka Pro Gebitsbeschermer –  bitje Electric pink",
    "brand": "Makura",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1295,
    "oldPrice": null,
    "badge": null,
    "short": "Makura Toka Pro Gebitsbeschermer – bitje Electric pink",
    "description": "Makura Toka Pro Gebitsbeschermer – bitje Electric pink",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-ELECTRIC-PINK.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-ELECTRIC-PINK.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-ELECTRIC-PINK2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/makura-toka-pro-gebitsbeschermer-bitje-electric-pink/"
  },
  {
    "slug": "makura-toka-pro-gebitsbeschermer-bitje-cooled-blue",
    "name": "Makura Toka Pro Gebitsbeschermer –  bitje  Cooled blue",
    "brand": "Makura",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1295,
    "oldPrice": null,
    "badge": null,
    "short": "Makura Toka Pro Gebitsbeschermer – bitje Cooled blue",
    "description": "Makura Toka Pro Gebitsbeschermer – bitje Cooled blue",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-cooled-blue.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-cooled-blue.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-cooled-blue2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/makura-toka-pro-gebitsbeschermer-bitje-cooled-blue/"
  },
  {
    "slug": "makura-toka-pro-gebitsbeschermer-bitje-laser-red",
    "name": "Makura Toka Pro Gebitsbeschermer –  bitje  Laser red",
    "brand": "Makura",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1295,
    "oldPrice": null,
    "badge": null,
    "short": "Makura Toka Pro Gebitsbeschermer – bitje Laser red",
    "description": "Makura Toka Pro Gebitsbeschermer – bitje Laser red",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-laser-red.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-laser-red.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/09/MAKURA-BITJE–TOKA-PRO-laser-red2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/makura-toka-pro-gebitsbeschermer-bitje-laser-red/"
  },
  {
    "slug": "hayabusa-t3-striking-scheenbeschermers-white-black",
    "name": "Hayabusa T3 striking scheenbeschermers – White/gold",
    "brand": "Hayabusa",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 16900,
    "oldPrice": null,
    "badge": null,
    "short": "Scheenbeschermers van het merk hayabusa.",
    "description": "Scheenbeschermers van het merk hayabusa.\ngeschikt voor de fanatieke, professionele sporter.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/Hayabusa-Scheenbeschermers-T3-White-gold.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Hayabusa-Scheenbeschermers-T3-White-gold.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Hayabusa-Scheenbeschermers-T3-White-gold2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Hayabusa-Scheenbeschermers-T3-White-gold3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Hayabusa-Scheenbeschermers-T3-White-gold4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-striking-scheenbeschermers-white-black/"
  },
  {
    "slug": "hayabusa-t3-boxing-gloves-white-grey",
    "name": "Hayabusa T3 Boxing Gloves – White / Grey",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17900,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "Hayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/HayabusaT3_BoxingGloves_WhiteGray_Group.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/HayabusaT3_BoxingGloves_WhiteGray_Group.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/dfb55e47-8419-4472-b756-8da2b8d501fb_HayabusaT3_BoxingGloves_WhiteGray_LeatherDetail_.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/HayabusaT3_BoxingGloves_WhiteGray_Group2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/HayabusaT3_BoxingGloves_WhiteGray_Group3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/HayabusaT3_BoxingGloves_WhiteGray_Group4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-boxing-gloves-white-grey/"
  },
  {
    "slug": "hayabusa-t3-boxing-gloves-kickbokshandschoenen-black-gold",
    "name": "Hayabusa T3 Boxing Gloves kickbokshandschoenen Black Gold",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17900,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "Hayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/Hayabusa-T3-Boxing-Gloves-Black-Gold.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Hayabusa-T3-Boxing-Gloves-Black-Gold.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Hayabusa-T3-Boxing-Gloves-Black-Gold2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Hayabusa-T3-Boxing-Gloves-Black-Gold3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/product_1000x1000_4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/product_1000x1000_5.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-boxing-gloves-kickbokshandschoenen-black-gold/"
  },
  {
    "slug": "joya-zakhandschoenen-velcro-standard-zwart",
    "name": "Joya Zakhandschoenen “Velcro Standard”  Zwart",
    "brand": "Joya",
    "palette": null,
    "category": "bag-gloves-boks-zak-handschoenen",
    "price": 3395,
    "oldPrice": null,
    "badge": null,
    "short": "Ook goed voor pads training.",
    "description": "Joya Zakhandschoenen van leer voor bokszaktrainingen op ieder niveau.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Zakhandschoenen-Velcro-Standard-Zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Zakhandschoenen-Velcro-Standard-Zwart.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-zakhandschoenen-velcro-standard-zwart/"
  },
  {
    "slug": "joya-zakhandschoenen-title-zwart",
    "name": "Joya Zakhandschoenen “Title” zwart leer",
    "brand": "Joya",
    "palette": null,
    "category": "bag-gloves-boks-zak-handschoenen",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Makkelijk door de open duim. Ook goed voor pads training.",
    "description": "Joya Zakhandschoenen van leer voor bokszaktrainingen op ieder niveau.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Zakhandschoenen-Title-Zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Zakhandschoenen-Title-Zwart.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-zakhandschoenen-title-zwart/"
  },
  {
    "slug": "joya-mma-handschoen-grip-zwart",
    "name": "JOYA MMA Handschoen GRIP – Zwart",
    "brand": "Joya",
    "palette": null,
    "category": "mma-gloves-leer-leder-handschoenen",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Mooie prijs/kwaliteit verhouding",
    "description": "Joya mma handschoenen, PU in zwart en wit. Open palm, open duim.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/JOYA-MMA-Handschoen-GRIP-Zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/JOYA-MMA-Handschoen-GRIP-Zwart.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-mma-handschoen-grip-zwart/"
  },
  {
    "slug": "joya-dames-kruisbeschermer-de-luxe",
    "name": "Joya Dames Kruisbeschermer De Luxe",
    "brand": "Joya",
    "palette": null,
    "category": "groin-kruis-bescherming-tok-toque",
    "price": 1495,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Dames Kruisbeschermer De Luxe",
    "description": "Comfortabele dames kruisbeschemer.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Dames-Kruisbeschermer-De-Luxe.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Dames-Kruisbeschermer-De-Luxe.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Dames-Kruisbeschermer-De-Luxe2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-dames-kruisbeschermer-de-luxe/"
  },
  {
    "slug": "joya-kickboks-scheenbeschermers-skintex-zwart",
    "name": "Joya Kickboks Scheenbeschermers Skintex zwart",
    "brand": "Joya",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 7100,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer voor elk niveau.",
    "description": "Goede scheendekkers van Joya. zeer geschikt voor alle niveaus.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Skintex-Scheenbeschermer-Zwart-new.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Skintex-Scheenbeschermer-Zwart-new.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Skintex-Scheenbeschermer-Zwart-new1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Skintex-Scheenbeschermer-Zwart-new2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Skintex-Scheenbeschermer-Zwart-new3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-kickboks-scheenbeschermers-skintex-zwart/"
  },
  {
    "slug": "joya-kickboks-scheenbeschermers-katoen-velcro",
    "name": "Joya Kickboks Scheenbeschermers – Katoen Velcro",
    "brand": "Joya",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer voor de beginner. Voordeel van deze scheendekkers is dat ze gewassen kunnen worden als ze vaak gedragen zijn.",
    "description": "Basis scheendekkers van Joya. zeer geschikt voor de startende vechters",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXS"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/JOYA-basis-SCHEENBESCHERMER-KATOEN.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/JOYA-basis-SCHEENBESCHERMER-KATOEN.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-kickboks-scheenbeschermers-katoen-velcro/"
  },
  {
    "slug": "joya-scheenbeschermer-leer-fight-fast-mat-zwart",
    "name": "Joya Scheenbeschermer Leer Fight Fast – Mat zwart",
    "brand": "Joya",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 8495,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer van de Fight-Fast lijn voor de ervaren sporter",
    "description": "Luxe scheendekkers van joya, stoer design. Voorgevormd en gemaakt van hoogwaardig EVA -schuim en Skintex. Een goede keus voor de serieuze ervaren vechtsporter.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S"
    ],
    "stock": 0,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Kickboks-Scheenbeschermers-Fight-Fast-Mat-Zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Kickboks-Scheenbeschermers-Fight-Fast-Mat-Zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Kickboks-Scheenbeschermers-Fight-Fast-Mat-Zwart2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Kickboks-Scheenbeschermers-Fight-Fast-Mat-Zwart3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-scheenbeschermer-leer-fight-fast-mat-zwart/"
  },
  {
    "slug": "joya-scheenbeschermer-leer-black-falcon-zwart",
    "name": "Joya Scheenbeschermer Leer “Black Falcon” – Zwart",
    "brand": "Joya",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 9495,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Scheenbeschermer van de FALCON lijn voor de ervaren sporter",
    "description": "Luxe scheendekkers van joya, stoer design. Een van de bestsellers! Voorgevormd en gemaakt van hoogwaardig EVA -schuim en Skintex. Een goede keus voor de serieuze ervaren vechtsporter.",
    "specs": [],
    "sizes": [
      "L",
      "M",
      "S"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Scheenbeschermer-Leer-Black-Falcon-Zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Scheenbeschermer-Leer-Black-Falcon-Zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/Joya-Scheenbeschermer-Leer-Black-Falcon-Zwart2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-scheenbeschermer-leer-black-falcon-zwart/"
  },
  {
    "slug": "twins-kickboks-scheenbeschermers-sgl7-black",
    "name": "Twins Kickboks scheenbeschermers SGL7 – BLACK",
    "brand": "Twins",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 13200,
    "oldPrice": null,
    "badge": null,
    "short": "Twins Kickboks scheenbeschermers zwart",
    "description": "Twins Kickboks scheenbeschermers zwart\n\nVoor de fanatieke serieuze kickbokser",
    "specs": [],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/sgl_7_1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/sgl_7_1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/sgl_7_2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/scheenbeschermers-shinguards-kickboks-mma/twins-kickboks-scheenbeschermers-sgl7-black/"
  },
  {
    "slug": "twins-kickbokshandschoenen-bgvl-8-black-on-black-core",
    "name": "Twins kickbokshandschoenen BGVL 8 – black on black CORE",
    "brand": "Twins",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17495,
    "oldPrice": null,
    "badge": null,
    "short": "TWINS handschoenen.",
    "description": "TWINS handschoenen.\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/booster-308.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/booster-308.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/booster-309.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/twins-kickbokshandschoenen-bgvl-8-black-on-black-core/"
  },
  {
    "slug": "twins-kickbokshandschoenen-bgvl-3-air-black-white-2",
    "name": "Twins kickbokshandschoenen BGVL 3 – AIR BLACK/WHITE",
    "brand": "Twins",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17495,
    "oldPrice": null,
    "badge": null,
    "short": "TWINS handschoenen.",
    "description": "TWINS handschoenen.\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl-3_air_wh-bk_2_.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl-3_air_wh-bk_2_.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl-3_air_wh-bk_3_.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/twins-kickbokshandschoenen-bgvl-3-air-black-white-2/"
  },
  {
    "slug": "twins-kickbokshandschoenen-bgvl-3-air-black-white",
    "name": "Twins kickbokshandschoenen BGVL 3 – BLACK/YELLOW",
    "brand": "Twins",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17495,
    "oldPrice": null,
    "badge": null,
    "short": "TWINS handschoenen.",
    "description": "TWINS handschoenen.\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl-3t_bk-yel_2__1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl-3t_bk-yel_2__1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl-3t_bk-yel_3__1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/twins-kickbokshandschoenen-bgvl-3-air-black-white/"
  },
  {
    "slug": "twins-kickbokshandschoenen-bgvl-3-black-wine-red",
    "name": "Twins kickbokshandschoenen BGVL 3 – BLACK/WINE RED",
    "brand": "Twins",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17495,
    "oldPrice": null,
    "badge": null,
    "short": "TWINS handschoenen.",
    "description": "TWINS handschoenen.\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl_3-t_bk-wine_red_2_.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl_3-t_bk-wine_red_2_.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl_3-t_bk-wine_red_3_.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/twins-kickbokshandschoenen-bgvl-3-black-wine-red/"
  },
  {
    "slug": "twins-kickbokshandschoenen-bgvl-3-retro-blue-black",
    "name": "Twins kickbokshandschoenen BGVL 3 – RETRO BLUE/BLACK",
    "brand": "Twins",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17495,
    "oldPrice": null,
    "badge": null,
    "short": "TWINS handschoenen.",
    "description": "TWINS handschoenen.\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl_3-t_bk-blue_2_.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl_3-t_bk-blue_2_.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/08/bgvl_3-t_bk-blue_3_.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/twins-kickbokshandschoenen-bgvl-3-retro-blue-black/"
  },
  {
    "slug": "joya-elasto-bandage-handwraps-350-450-cm",
    "name": "Joya elasto bandage handwraps 350-450-cm",
    "brand": "Joya",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met de boksbandages van Joya. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is:…",
    "description": "Joya elasto bandage handwraps. 350 en 450 cm",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-elasto-zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-elasto-zwart.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/joya-elasto-bandage-handwraps-350-450-cm/"
  },
  {
    "slug": "joya-velcro-bandage-handwraps-roze",
    "name": "Joya Velcro bandage handwraps roze",
    "brand": "Joya",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met de boksbandages van Joya. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is:…",
    "description": "Joya Velcro bandage handwraps roze",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-velcro-roze.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-velcro-roze.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/joya-velcro-bandage-handwraps-roze/"
  },
  {
    "slug": "joya-velcro-bandage-handwraps-blauw",
    "name": "Joya Velcro bandage handwraps blauw",
    "brand": "Joya",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met de boksbandages van Joya. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is:…",
    "description": "Joya Velcro bandage handwraps blauw",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-velcro-blauw.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-velcro-blauw.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/joya-velcro-bandage-handwraps-blauw/"
  },
  {
    "slug": "joya-velcro-bandage-handwraps-zwart",
    "name": "Joya Velcro bandage handwraps zwart",
    "brand": "Joya",
    "palette": null,
    "category": "bandages-wraps-hand-protectie",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "Verstevig je polsen met de boksbandages van Joya. We hebben handwraps in verschillende lengtes, maar ook met meerdere designs en kleuren. Algemeen advies is:…",
    "description": "Joya Velcro bandage handwraps zwart",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-velcro-zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/08/joya-bandages-velcro-zwart.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/bandages-wraps-hand-protectie/joya-velcro-bandage-handwraps-zwart/"
  },
  {
    "slug": "joya-round-shield-leder-zwart-wit-zwart-goud-zwart-metallic-zwart",
    "name": "Joya Round Shield Leder – Zwart/Wit – Zwart/Goud Zwart/Metallic Zwart",
    "brand": "Joya",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 8995,
    "oldPrice": null,
    "badge": null,
    "short": "Must have voor coaches! Makkelijk voor de trainers met schouder probleempjes. je kunt er op stoten, trappen en knieën.",
    "description": "Must have voor coaches! Makkelijk voor de trainers met schouder probleempjes. je kunt er op stoten, trappen en knieën.\nHet schild heeft een diameter van 35 centimeter en is 10 cm dik.\nVerkrijgbaar in zwart-goud, zwart-wit en zwart-metallic zwart",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/JOYA-ROND-STOOTKUSSEN-SYNTHETISCH-LEER.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/JOYA-ROND-STOOTKUSSEN-SYNTHETISCH-LEER.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-round-shield-leder-zwart-wit-zwart-goud-zwart-metallic-zwart/"
  },
  {
    "slug": "topstar-bitje-gebitsbeschermer",
    "name": "Basis Bitje – gebitsbeschermer Junior",
    "brand": "Joya",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 495,
    "oldPrice": null,
    "badge": null,
    "short": "Bitje – gebitsbeschermer transparant met doosje",
    "description": "Bitje – gebitsbeschermer transparant met doosje",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/basis-bitje-junior-joya.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/basis-bitje-junior-joya.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/basis-bitje-junior-joya1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/topstar-bitje-gebitsbeschermer/"
  },
  {
    "slug": "kinesiology-tape-van-just-tape-it",
    "name": "kinesiology tape van Just Tape It",
    "brand": "Matchu",
    "palette": null,
    "category": "outlet-aanbiedingen-vechtsport-mma-kickboksen",
    "price": 895,
    "oldPrice": 1295,
    "badge": "Aanbieding",
    "short": "8 cm’",
    "description": "kinesiology tape van Just Tape It!\nInstructie video’s: https://www.justtapeit.nl/kinesiotape-aanbrengen\nDe kinesiology tape wordt gefabriceerd met elastische katoen dat voorzien is van een hypoallergene, ventilerende acryl lijmlaag en het product is latexvrij.\n\nKenmerken van kinesiologie tape:\n\n✓ latexvrij\n✓ waterproof\n✓ TÜV kwaliteitskeurmerk\n✓ kinesiologie tape (rekbaarheid 130%- 140%)\n✓ professioneel gebruikt door fysiotherapeuten\n✓ ideaal te combineren met andere kleuren\n✓ houdbaarheid 5 jaar",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/kinesiology-tape-Just-Tape-It4.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/kinesiology-tape-Just-Tape-It4.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/kinesiology-tape-Just-Tape-It.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/kinesiology-tape-Just-Tape-It2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/kinesiology-tape-Just-Tape-It3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/matchu/kinesiology-tape-van-just-tape-it/"
  },
  {
    "slug": "matchu-mandala-yogamat",
    "name": "Matchu mandala yogamat",
    "brand": "Matchu",
    "palette": null,
    "category": "diversen",
    "price": 1495,
    "oldPrice": null,
    "badge": null,
    "short": "Matchu mandala yogamat. Mooi design yoga mat met anti-slip.",
    "description": "Matchu mandala yogamat. Mooi design yoga mat met anti-slip.\nDoordat de mat van PVC gemaakt is, voelt hij zeer stevig aan en is het matje makkelijk met een vochtige doek te reinigen. (schoenen zorgen voor extra slijtage, daarom wordt aangeraden om met blote voeten te gebruiken )\nAfmetingen: 172 x 61 x 0,6 cm",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/matchu-yoga-mat.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/matchu-yoga-mat.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/matchu-yoga-mat2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/matchu-yoga-mat3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/matchu/matchu-mandala-yogamat/"
  },
  {
    "slug": "booster-standing-boxing-bag-180cm-staande-bokszak",
    "name": "Booster STANDING BOXING BAG -180CM Staande bokszak",
    "brand": "Booster",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 39500,
    "oldPrice": null,
    "badge": null,
    "short": "Booster STANDING BOXING BAG -180CM Staande bokszak",
    "description": "Booster STANDING BOXING BAG -180CM Staande bokszak",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/booster-staande-bokszak-180cm.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/booster-staande-bokszak-180cm.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/booster-staande-bokszak-180cm2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/booster-fightgear-kickboks-mma/booster-standing-boxing-bag-180cm-staande-bokszak/"
  },
  {
    "slug": "ufc-opro-gold-jr-black-metal-gold-mondbeschermer-bitje",
    "name": "UFC OPRO GOLD JR BLACK METAL/GOLD mondbeschermer bitje",
    "brand": "UFC",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 2500,
    "oldPrice": null,
    "badge": null,
    "short": "UFC OPRO GOLD JR BLACK METAL/GOLD mondbeschermer bitje",
    "description": "UFC OPRO GOLD JR BLACK METAL/GOLD mondbeschermer bitje",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/UFC-OPRO-GOLD-JR-BLACK-METAL-GOLD-mondbeschermer-bitje.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/UFC-OPRO-GOLD-JR-BLACK-METAL-GOLD-mondbeschermer-bitje.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/UFC-OPRO-GOLD-JR-BLACK-METAL-GOLD-mondbeschermer-bitje2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/ufc-opro-gold-jr-black-metal-gold-mondbeschermer-bitje/"
  },
  {
    "slug": "ufc-opro-silver-jr-black-red-mondbeschermer-bitje",
    "name": "UFC OPRO SILVER JR BLACK/RED mondbeschermer bitje",
    "brand": "UFC",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 1700,
    "oldPrice": null,
    "badge": null,
    "short": "UFC OPRO SILVER JR BLACK/RED mondbeschermer bitje",
    "description": "UFC OPRO SILVER JR BLACK/RED mondbeschermer bitje",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/ufc-OPRO-SILVER-JR-BLACK-RED.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/ufc-OPRO-SILVER-JR-BLACK-RED.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/ufc-OPRO-SILVER-JR-BLACK-RED2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/ufc-OPRO-SILVER-JR-BLACK-RED3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/ufc-opro-silver-jr-black-red-mondbeschermer-bitje/"
  },
  {
    "slug": "opro-bronze-jr-mondbeschermer-bitje-zwart",
    "name": "UFC OPRO-BRONZE-JR mondbeschermer bitje-  zwart",
    "brand": "UFC",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 995,
    "oldPrice": null,
    "badge": null,
    "short": "OPRO-BRONZE-JR mondbeschermer bitje- black",
    "description": "OPRO-BRONZE-JR mondbeschermer bitje- black",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/OPRO-BRONZE-JR-BLACK.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/OPRO-BRONZE-JR-BLACK.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/OPRO-BRONZE-JR-BLACK2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/opro-bronze-jr-mondbeschermer-bitje-zwart/"
  },
  {
    "slug": "ufc-opro-platinum-gebitsbeschermer-mondbeschermer-bitje-red-metal-black",
    "name": "UFC OPRO PLATINUM mondbeschermer bitje- red metal black",
    "brand": "UFC",
    "palette": null,
    "category": "mouthguards-bitjes-gebitsbeschermer",
    "price": 3000,
    "oldPrice": null,
    "badge": null,
    "short": "UFC OPRO PLATINUM mondbeschermer bitje- red metal black",
    "description": "UFC OPRO PLATINUM mondbeschermer bitje- red metal black",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/OPRO-PLATINUM-RED-METAL-BLACK.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/OPRO-PLATINUM-RED-METAL-BLACK.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/OPRO-PLATINUM-RED-METAL-BLACK2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/OPRO-PLATINUM-RED-METAL-BLACK3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/OPRO-PLATINUM-RED-METAL-BLACK4.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bescherming-mma-kickboks-scheen-kruis-hoofd/mouthguards-bitjes-gebitsbeschermer/ufc-opro-platinum-gebitsbeschermer-mondbeschermer-bitje-red-metal-black/"
  },
  {
    "slug": "joya-kickbokshandschoenen-top-one-pu-voor-kids",
    "name": "Joya Camo V2 Kickbokshandschoenen PU – Blauw",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 4400,
    "oldPrice": null,
    "badge": null,
    "short": "Joya kickbokshandschoenen Top One PU Camo blauw, de ideale handschoen voor de jeugd! Kunstleer.",
    "description": "Joya kickbokshandschoenen Top One PU Camo blauw, de ideale handschoen voor de jeugd! Kunstleer.",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "6 oz",
      "8 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Camo-V2-Kickbokshandschoenen-PU-Blauw.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Camo-V2-Kickbokshandschoenen-PU-Blauw.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Camo-V2-Kickbokshandschoenen-PU-Blauw-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-kickbokshandschoenen-top-one-pu-voor-kids/"
  },
  {
    "slug": "queen-kickbokshandschoenen-qbg-splatter-multi-color",
    "name": "QUEEN SCHEENBESCHERMERS SGQ SPLATTER – ZWART/VERF PRINT",
    "brand": "Queen",
    "palette": null,
    "category": "scheenbeschermers-shinguards-kickboks-mma",
    "price": 4995,
    "oldPrice": 6495,
    "badge": "Aanbieding",
    "short": "Queen vrolijke dames SCHEENBESCHERMERS van goede kwaliteit skintex.",
    "description": "Queen vrolijke dames SCHEENBESCHERMERS van goede kwaliteit skintex.",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/QUEEN-SCHEENBESCHERMERS-SGQ-SPLATTER.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/QUEEN-SCHEENBESCHERMERS-SGQ-SPLATTER.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/queen-lady-kickboksen-mma/queen-kickbokshandschoenen-qbg-splatter-multi-color/"
  },
  {
    "slug": "queen-kickbokshandschoenen-qbg-amazone-camo-rood-bruin",
    "name": "Queen kickbokshandschoenen QBG Amazone camo rood bruin",
    "brand": "Queen",
    "palette": null,
    "category": "kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof",
    "price": 5495,
    "oldPrice": null,
    "badge": null,
    "short": "Queen dames kickbokshandschoenen van goede kwaliteit skintex.",
    "description": "Queen dames kickbokshandschoenen van goede kwaliteit skintex.",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/queen-bokshandschoen-bgq_amazone.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/queen-bokshandschoen-bgq_amazone.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-synthetic-leather-pu-kickbokshandschoenen-kunststof/queen-kickbokshandschoenen-qbg-amazone-camo-rood-bruin/"
  },
  {
    "slug": "joya-kids-sporttas-v2-camo-groen",
    "name": "Joya Kids Sporttas V2 Camo Groen",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Afmeting: 45x30x30 cm",
    "description": "Afmeting: 45x30x30 cm\nmeerdere vakken\nLeuke tas voor de kickboks liefhebbers.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Camo-V2-Sporttas-groen.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Camo-V2-Sporttas-groen.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-kids-sporttas-v2-camo-groen/"
  },
  {
    "slug": "joya-kids-dames-sporttas-camo-blauw",
    "name": "Joya Kids Sporttas V2 Camo Blauw",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Afmeting: 45x30x30 cm",
    "description": "Afmeting: 45x30x30 cm\nmeerdere vakken\nLeuke tas voor de kickboks liefhebbers.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Camo-V2-Sporttas-Blauw.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Camo-V2-Sporttas-Blauw.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-kids-dames-sporttas-camo-blauw/"
  },
  {
    "slug": "joya-kids-dames-sporttas-camo-roze",
    "name": "Joya Sporttas V2 Camo Roze",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Afmeting: 45x30x30 cm",
    "description": "Afmeting: 45x30x30 cm\nmeerdere vakken\nLeuke tas voor de vrouwelijke vechters.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Camo-V2-Sporttas-roze.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Camo-V2-Sporttas-roze.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-kids-dames-sporttas-camo-roze/"
  },
  {
    "slug": "super-pro-gym-sporttas-zwart-wit",
    "name": "Super Pro Gym Sporttas – Zwart/Wit Large",
    "brand": "Super Pro",
    "palette": null,
    "category": "sport-tassen",
    "price": 4995,
    "oldPrice": null,
    "badge": null,
    "short": "5 vakken",
    "description": "5 vakken\nEen extra vak voor natte spullen\nAfmeting: 67x36x36 cm (large).",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/SUPER-PRO-COMBAT-GEAR-GYM-SPORTTAS.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/SUPER-PRO-COMBAT-GEAR-GYM-SPORTTAS.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/SUPER-PRO-COMBAT-GEAR-GYM-SPORTTAS-1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2023/11/SUPER-PRO-COMBAT-GEAR-GYM-SPORTTAS-2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/super-pro/super-pro-gym-sporttas-zwart-wit/"
  },
  {
    "slug": "joya-sporttas-basis-zwart-wit",
    "name": "Joya Sporttas “basis” – Zwart Wit",
    "brand": "Joya",
    "palette": null,
    "category": "sport-tassen",
    "price": 3995,
    "oldPrice": null,
    "badge": null,
    "short": "Joya Sporttas basis Zwart-wit met meerdere vakken 60x30x30",
    "description": "Joya Sporttas basis Zwart-wit met meerdere vakken 60x30x30",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/JOYA-SPORTTAS-STANDAARD.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/JOYA-SPORTTAS-STANDAARD.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/JOYA-SPORTTAS-STANDAARD2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-sporttas-basis-zwart-wit/"
  },
  {
    "slug": "joya-roze-draak-kickbokshandschoen-pu-2",
    "name": "Joya “Roze Draak”  Pink Dragon – Kickbokshandschoen PU",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Gave kickbokshandschoen van Joya Fight Gear",
    "description": "Voor de stoere dames-kids, Joya ‘Top One’ Dragon kickbokshandschoen! De bokshandschoen voor kids is verkrijgbaar in 6, 8 en 10 oz. Gemaakt van hoogwaardig synthetisch leer (PU). De meerlagige vulling, bevestigde duim en klittenbandsluiting zorgen voor optimale bescherming voor je hand en pols. Geschikt voor jonge fanatieke kickboksers. Beschikbaar in meerdere kleuren!",
    "specs": [],
    "sizes": [
      "10 oz",
      "6 oz",
      "8 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya_roze_Draak_KickbokshandschoenPU.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya_roze_Draak_KickbokshandschoenPU.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya_roze_Draak_KickbokshandschoenPU2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya_roze_Draak_KickbokshandschoenPU.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-roze-draak-kickbokshandschoen-pu-2/"
  },
  {
    "slug": "joya-gouden-draak-kickbokshandschoen-pu",
    "name": "Joya “Gouden Draak” Gold Dragon – Kickbokshandschoen PU",
    "brand": "Joya",
    "palette": null,
    "category": "kids-kickboxing-wear-gear",
    "price": 3495,
    "oldPrice": null,
    "badge": null,
    "short": "Gave kickbokshandschoen van Joya Fight Gear",
    "description": "Voor de stoere kids, Joya ‘Top One’ Dragon kickbokshandschoen! De bokshandschoen voor kids is verkrijgbaar in 6, 8 en 10 oz. Gemaakt van hoogwaardig synthetisch leer (PU). De meerlagige vulling, bevestigde duim en klittenbandsluiting zorgen voor optimale bescherming voor je hand en pols. Geschikt voor jonge fanatieke kickboksers. Beschikbaar in meerdere kleuren!",
    "specs": [],
    "sizes": [
      "10 oz",
      "6 oz",
      "8 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya_Gouden_Draak_KickbokshandschoenPU.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya_Gouden_Draak_KickbokshandschoenPU.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya_Gouden_Draak_KickbokshandschoenPU2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya_Gouden_Draak_KickbokshandschoenPU3.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-gouden-draak-kickbokshandschoen-pu/"
  },
  {
    "slug": "twins-kickbokshandschoenen-bgvl-3-black",
    "name": "Twins kickbokshandschoenen BGVL 3 – Black",
    "brand": "Twins",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17495,
    "oldPrice": null,
    "badge": null,
    "short": "TWINS handschoenen.",
    "description": "TWINS handschoenen.\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/bgvl_3_black_1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/bgvl_3_black_1.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/bgvl_3_black_2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/twins-kickbokshandschoenen-bgvl-3-black/"
  },
  {
    "slug": "twins-kickbokshandschoenen-bgvl-3-wine-red",
    "name": "Twins kickbokshandschoenen BGVL 3 – Wine Red",
    "brand": "Twins",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17495,
    "oldPrice": null,
    "badge": null,
    "short": "TWINS handschoenen.",
    "description": "TWINS handschoenen.\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/Twins_kickbokshandschoenen_BGVL3-Wine-Red.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Twins_kickbokshandschoenen_BGVL3-Wine-Red.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Twins_kickbokshandschoenen_BGVL3-Wine-Red2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/bokshandschoenen-boxing-gloves-box-handschuhe-mma/kickboxing-gloves-leather-handschoenen-leer/twins-kickbokshandschoenen-bgvl-3-wine-red/"
  },
  {
    "slug": "hayabusa-t3-boxing-gloves-charcoal-black-14-oz",
    "name": "Hayabusa T3 Boxing Gloves – Black",
    "brand": "Hayabusa",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 17900,
    "oldPrice": null,
    "badge": null,
    "short": "Al jaren bekend als een van de beste handschoen merken in de wereld.",
    "description": "Hayabusa handschoenen van zeer goede kwaliteit. Prijswinnaar van Men’s Health in 2019 voor beste Gloves in the world!\nvoor de serieuze en professionele sporter.",
    "specs": [],
    "sizes": [
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/hayabusa_t3_black.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/hayabusa_t3_black.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/hayabusa-fightwear-nederland-deutschland/hayabusa-t3-boxing-gloves-charcoal-black-14-oz/"
  },
  {
    "slug": "joya-fight-fast-faded-black-kickbokshandschoenen-leer",
    "name": "Joya “Fight Fast” Faded Black kickbokshandschoenen Leer",
    "brand": "Joya",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 9495,
    "oldPrice": null,
    "badge": null,
    "short": "Meest verkcohte kickbokshandschoen van Joya Fight Gear",
    "description": "Goede handschoenen van Joya voor de serieuze sporter, goede kwaliteit voor een mooie prijs!",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Kickbokshandschoenen-Fight-Fast-leer-zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Kickbokshandschoenen-Fight-Fast-leer-zwart.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/07/Joya-Kickbokshandschoenen-Fight-Fast-leer-zwart2.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-fight-fast-faded-black-kickbokshandschoenen-leer/"
  },
  {
    "slug": "joya-thai-kickbokshandschoenen-leer",
    "name": "Joya Thai kickbokshandschoenen zwart Leer",
    "brand": "Joya",
    "palette": null,
    "category": "kickboxing-gloves-leather-handschoenen-leer",
    "price": 9100,
    "oldPrice": null,
    "badge": null,
    "short": "Gave kickbokshandschoen van Joya Fight Gear",
    "description": "De populairste handschoenen van Joya, Goede kwaliteit leer voor een top prijs!",
    "specs": [],
    "sizes": [
      "10 oz",
      "12 oz",
      "14 oz",
      "16 oz"
    ],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/04/Joya-Thai-Kickbokshandschoen-Zwart-leer-new.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/04/Joya-Thai-Kickbokshandschoen-Zwart-leer-new.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/04/Joya-Thai-Kickbokshandschoen-Zwart-leer2.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/04/Joya-Thai-Kickbokshandschoen-Zwart-leer3.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/04/Joya-Thai-Kickbokshandschoen-Zwart-leer14.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-thai-kickbokshandschoenen-leer/"
  },
  {
    "slug": "joya-bokszak-180-cm",
    "name": "JOYA BOKSZAK ‘Fight Fast’ GEVULD en met ketting 180 cm",
    "brand": "Joya",
    "palette": null,
    "category": "boxing-bags-heavy-bag-bokszak",
    "price": 16500,
    "oldPrice": null,
    "badge": null,
    "short": "Joya bokszak 180 cm",
    "description": "JOYA BOKSZAK ‘Fight Fast’ GEVULD en met ketting 180 cm",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/04/IMG_1669.jpeg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/04/IMG_1669.jpeg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/joya-gear-vechtsport-artikelen/joya-bokszak-180-cm/"
  },
  {
    "slug": "boks-pads-2-stuks",
    "name": "Matchu Boks pads – 2 stuks",
    "brand": "Matchu",
    "palette": null,
    "category": "trap-stoot-pads-kussens",
    "price": 2995,
    "oldPrice": null,
    "badge": null,
    "short": "‘Met de pads van Matchu Sports word je sneller dan ooit! Voor je het weet gooi je bliksemsnelle combinaties op de pads. Of je nou een personal trainer bent d…",
    "description": "Matchu Boks pads – 2 stuks",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/03/Boks-pads-01.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/03/Boks-pads-01.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/03/Boks-pads-02.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/03/Boks-pads-03.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/03/Boks-pads-04.jpg",
      "https://www.fightpro.nl/wp-content/uploads/2020/03/Boks-pads-05.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/matchu/boks-pads-2-stuks/"
  },
  {
    "slug": "battle-rope-9m-x-38mm",
    "name": "Matchu Battle rope 9m x 38mm",
    "brand": "Matchu",
    "palette": null,
    "category": "fitness-cardio-kracht-conditie",
    "price": 5495,
    "oldPrice": 9995,
    "badge": "Aanbieding",
    "short": "Spieren tot de max laten verzuren? Koop een battle rope. Veel gebruikt in de mma wereld!",
    "description": "Battle ropes, bekend geworden vanuit de topsport zoals MMA en Americvan Football in de U.S.A. Veel gebruikt met zwaai en slinger bewegingen om je spier-conditie te optimaliseren.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/03/matchu_battle-rope-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/03/matchu_battle-rope-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/matchu/battle-rope-9m-x-38mm/"
  },
  {
    "slug": "massage-foam-roller-blauw-matchu",
    "name": "Matchu Foam Roller blauw",
    "brand": "Matchu",
    "palette": null,
    "category": "fitness-cardio-kracht-conditie",
    "price": 1995,
    "oldPrice": 2995,
    "badge": "Aanbieding",
    "short": "De triggerpoint foam roller wordt door de fanatieke sporter gebruikt om de spieren los te maken en vervelende spierknopen weg te masseren. De foam roller is…",
    "description": "Matchu Foam Roller blauw",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/03/Matchu-Sports-foam-roller-blauw-1.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/03/Matchu-Sports-foam-roller-blauw-1.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/matchu/massage-foam-roller-blauw-matchu/"
  },
  {
    "slug": "foam-roller-zwart",
    "name": "Matchu Foam Roller zwart",
    "brand": "Matchu",
    "palette": null,
    "category": "fitness-cardio-kracht-conditie",
    "price": 1695,
    "oldPrice": 2995,
    "badge": "Aanbieding",
    "short": "‘De triggerpoint foam roller wordt door de fanatieke sporter gebruikt om de spieren los te maken en vervelende spierknopen weg te masseren. De Matchu Sports?…",
    "description": "Foam Rollers zijn sport massage tools die gebruikt worden om triggerpoints of spierknopen te verwijderen en behoren tot het self myofascial release (SMR) concept. De Foam Roller biedt de mogelijkheid om met eigen gewicht extra druk uit te oefenen op pijnlijke verhardingen waardoor diep bindweefsel los komt",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/03/foam_roller_zwart.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/03/foam_roller_zwart.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/matchu/foam-roller-zwart/"
  },
  {
    "slug": "fitnessmat",
    "name": "Matchu Fitnessmat",
    "brand": "Matchu",
    "palette": null,
    "category": "fitness-cardio-kracht-conditie",
    "price": 1495,
    "oldPrice": 2995,
    "badge": "Aanbieding",
    "short": "De fitnessmat van Matchu Sports is de ideale fitnessmat om al je fitness oefeningen uit te voeren. De fitnessmat is van zeer goede kwaliteit!",
    "description": "De fitnessmat van Matchu Sports. Deze kunt u gebruiken als yogamat, maar ook thuis voor oefeningen. De fitnessmat is 0,9 cm waardoor het goed dempt. Hij is gemaakt van natural based rubber (NBR), waardoor ie toch heel licht is.\nMet een bijgeleverd draagkoord is de fitnessmat makkelijk mee te nemen naar uw sportschool. De mat heeft een atislip onderkant, waardoor het niet zoveel verschuift.",
    "specs": [],
    "sizes": [],
    "stock": 12,
    "image": "https://www.fightpro.nl/wp-content/uploads/2020/03/matchu_fitnessmat-opgerold-grijs.jpg",
    "images": [
      "https://www.fightpro.nl/wp-content/uploads/2020/03/matchu_fitnessmat-opgerold-grijs.jpg"
    ],
    "bestseller": false,
    "permalink": "https://www.fightpro.nl/shop/onze-merken-bij-fightpro/matchu/fitnessmat/"
  }
];

const palettes = {
  "hayabusa": {
    "body": "#1A1A1A",
    "cuff": "#B8973A"
  },
  "twins": {
    "body": "#B8102E",
    "cuff": "#8B0B21"
  },
  "joya": {
    "body": "#1C1C1C",
    "cuff": "#B8973A"
  },
  "fairtex": {
    "body": "#1A2A1A",
    "cuff": "#B8973A"
  },
  "king": {
    "body": "#11243A",
    "cuff": "#B8973A"
  },
  "fightpro": {
    "body": "#1A1200",
    "cuff": "#B8973A"
  },
  "default": {
    "body": "#1A1A1A",
    "cuff": "#B8973A"
  }
};

const brands = [
  "Adidas",
  "Bio Tech",
  "Booster",
  "Crossmaxx",
  "Danger",
  "ESN",
  "Fairtex",
  "Fightpro",
  "Hayabusa",
  "Joya",
  "King",
  "Lifemaxx",
  "Makura",
  "Matchu",
  "Namman Muay",
  "PX",
  "Queen",
  "Shockdoctor",
  "Smai",
  "Super Pro",
  "Tatami Fightwear",
  "Twins",
  "UFC",
  "Venum",
  "Windy"
];

module.exports = { categories, products, palettes, brands };
