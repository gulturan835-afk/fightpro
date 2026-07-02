# FightPro Enschede — webshop (redesign 2026)

High-end redesign van fightpro.nl: een vechtsport-webshop met de **echte
catalogus van fightpro.nl** (294 producten, 25 merken), een **3D scroll-intro**
(Three.js + GSAP ScrollTrigger) en een volledig werkende shop-flow.
Gebouwd met **Node.js + Express + EJS + SQLite**.

Het kleurenpalet (goud `#B8973A` op zwart) is bewust ongewijzigd; typografie is
**Anton** (koppen) + **Inter** (tekst), beide zelf-gehost.

## Snel starten

```bash
npm install
npm start          # → http://localhost:3000
```

## Functies

- **3D scroll-intro** op de homepage — camera vliegt door een arena-scene van
  goudstof, lichtframes en spots; valt automatisch terug op een statische hero
  (geen WebGL, reduced-motion of lage FPS).
- **Echte catalogus** — 294 producten met foto's, prijzen, beschrijvingen,
  maten en merken, live geëxporteerd van fightpro.nl (zie `scripts/`).
- **Dynamische navigatie** — dropdowns per categoriegroep (`/categorie/:slug`).
- **Categoriepagina's** — breadcrumb, subcategorie-chips en merkfilter.
- **Productpagina's** — fotogalerij met thumbnails, maatkeuze, aantal en
  kenmerken.
- **Winkelwagen** — sessie-opslag, aantal aanpassen, gratis verzending ≥ € 75.
- **Afrekenen** — adres + betaalmethode met validatie; bestelling in SQLite met
  bevestigingspagina (`/bestelling/:ref`).
- **Zoeken** (`/zoeken?q=`) en nette 404.
- **Merkenwand** — alle 25 merken, klikbaar.

## Structuur

| Map/bestand | Inhoud |
|---|---|
| `server.js` | Express-routes |
| `db.js` | SQLite-laag, seedt uit `data/catalog-live.js` |
| `data/catalog-live.js` | Gegenereerde catalogus (echte fightpro.nl-data) |
| `data/live/` | Ruwe API-export (bron voor catalogus + Shopify-CSV) |
| `scripts/export-fightpro.py` | Exporteert de catalogus van fightpro.nl |
| `scripts/build-catalog.py` | Zet de export om naar `catalog-live.js` |
| `scripts/build-shopify-csv.py` | Genereert de Shopify-import-CSV |
| `views/` | EJS-templates (home, categorie, product, cart, checkout, …) |
| `public/` | CSS (design system), JS (intro + app), fonts, vendor-libs |
| `fightpro-theme/` | **Shopify Online Store 2.0 thema** in hetzelfde design |
| `dist/` | Opleveringen: Shopify-CSV |

## Shopify

- **Thema:** upload `fightpro-shopify-theme.zip` (of zip de inhoud van
  `fightpro-theme/`) via Online Store → Themes → Add theme.
- **Producten:** importeer `dist/fightpro-producten-shopify.csv` via
  Products → Import (afbeeldingen worden automatisch gedownload van de
  bestaande URL's).

Zie `fightpro-theme/README.md` voor de volledige instructies.
