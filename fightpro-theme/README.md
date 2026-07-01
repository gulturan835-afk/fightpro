# FightPro — Shopify Online Store 2.0 thema

Donker/goud thema voor **FightPro Enschede**, de vechtsportwinkel in Twente.
Gebouwd als een compleet Online Store 2.0 thema met JSON-templates, secties en
blokken die je in de Shopify-editor kunt aanpassen.

De echte productgegevens en afbeeldingen zijn **live van [fightpro.nl](https://www.fightpro.nl)
gecrawld** via de WooCommerce Store API (294 producten, 21 merken, 16 categorieën).

## Thema-structuur

```
layout/theme.liquid            Basis-HTML, fonts, header/footer
templates/*.json               index, collection, product, cart, search,
                               list-collections, page, 404
sections/                      Homepage-secties + main-* content-secties
snippets/                      product-card, product-media, product-art (SVG-fallback)
assets/theme.css               Ontwerp (donker/goud)
assets/theme.js                Winkelwagen (AJAX), mobiel menu, zoeken, animaties
config/settings_schema.json    Thema-instellingen (kleuren, merk, verzenddrempel)
locales/                       nl (standaard) + en vertalingen
data/catalog.json              Schone crawl-uitvoer (bron voor de import)
data/products_export.csv       Shopify-importbestand (producten + varianten + foto's)
```

## De echte producten importeren in Shopify

De crawl staat in **`data/products_export.csv`** in Shopify's standaard
importformaat (1.168 rijen: 294 producten, maatvarianten en extra foto's).

1. Ga in Shopify-admin naar **Producten → Importeren**.
2. Kies `data/products_export.csv` en klik **Uploaden en doorgaan**.
3. Shopify downloadt de afbeeldingen automatisch vanaf fightpro.nl naar je eigen
   CDN — je hoeft niets los te uploaden.

Wat er meekomt per product:
- Titel, merk (Vendor), omschrijving en prijs (incl. btw, in euro's)
- Maatvarianten (optie **Maat**) waar die op de site staan
- Alle productfoto's (hoofdfoto + extra's)
- Categorieën als **tags**, plus metafields `custom.short`, `custom.badge`,
  `custom.kind` en `custom.accent_color` die het thema gebruikt voor de
  productkaart-badge en de SVG-fallback.

### Collecties aanmaken

Maak in **Producten → Collecties** automatische (smart) collecties aan met als
voorwaarde *Product-tag is gelijk aan …*. Gebruik dezelfde handles als op de
homepage-tegels zodat alles linkt, bijv.:

| Collectie | Aanbevolen handle | Tag-voorwaarde |
|-----------|-------------------|----------------|
| Handschoenen | `bokshandschoenen-boxing-gloves-box-handschuhe-mma` | Tag = `Handschoenen` |
| Bescherming | `bescherming-mma-kickboks-scheen-kruis-hoofd` | Tag = `Bescherming` |
| Kids fight | `kids-kickboxing-wear-gear` | Tag = `Kids fight` |
| Bestsellers | `bestsellers-top-vechtsport-artikelen` | Tag = `Bestseller` |

De volledige lijst met categorieën en aantallen staat in `data/catalog.json`.

## Snel: alles-in-één winkel-sectie (werkt meteen, zonder import)

Wil je de complete winkel meteen zien werken zonder eerst te importeren? Gebruik
de sectie **`sections/fightpro-shop.liquid`**. Alle 294 producten (met foto's,
prijzen, maten en omschrijvingen) zitten er al in ingebakken, en de knoppen
werken volledig in de browser:

- categorie-chips, merk-filter, sorteren en live zoeken
- klik op een product → productvenster met maatkeuze en aantal
- **In winkelwagen** → winkelwagen-lade met aantal aanpassen, verwijderen en
  totaal (inclusief gratis-verzending-teller)

Twee manieren om het te plaatsen in je store:

1. **Als sectie** — Thema bewerken → *Sectie toevoegen* → **FightPro Winkel**.
2. **Als aparte pagina** — maak een pagina (bijv. “Winkel”) en kies bij
   *Thema-sjabloon* de template **winkel** (`templates/page.winkel.json`).

> De winkelwagen in deze sectie werkt in de browser (localStorage). Online
> écht afrekenen met iDEAL/creditcard loopt via Shopify-checkout en werkt zodra
> de producten in je catalogus staan — importeer daarvoor `products_export.csv`
> (zie hieronder). De productfoto's worden geladen vanaf fightpro.nl.

## Thema uploaden

Via de Shopify CLI:

```bash
cd fightpro-theme
shopify theme push        # of: shopify theme dev  om lokaal te previewen
```

Of zip de map en upload via **Online Store → Thema's → Thema toevoegen**.

## Aanpassen in de editor

- **Hero, USP-balk, categorie-raster, bestsellers, merkenbalk, CTA en winkelinfo**
  zijn losse secties op de homepage — sleep, verberg of bewerk ze vrij.
- Header- en footer-menu's koppel je aan je eigen navigatie (`main-menu`,
  `footer`) onder **Navigatie**.
- Kleuren en de gratis-verzendingsdrempel staan onder **Thema-instellingen**.
