# FightPro — Shopify-thema

Online Store 2.0-thema in het FightPro-design: goud/zwart, Anton + Inter,
3D scroll-intro op de homepage (Three.js + GSAP, met automatische fallback),
merkenwand, statistieken en een volledige webshop-flow.

## Installeren

1. Zip de **inhoud** van deze map (zodat `layout/`, `sections/`, `snippets/`,
   `templates/`, `assets/`, `config/`, `locales/` op het hoogste niveau van de
   zip staan) — of gebruik de meegeleverde `fightpro-shopify-theme.zip`.
2. Shopify admin → **Online Store → Themes → Add theme → Upload zip file**.
3. Importeer eerst de producten via `fightpro-producten-shopify.csv`
   (**Products → Import**). Alle 294 producten, inclusief maten als varianten
   en afbeeldings-URL's (Shopify downloadt de foto's automatisch).
4. Maak collecties aan (bv. automatisch op product-tag: *Handschoenen*,
   *Bescherming*, *Kids*, …) en koppel ze in de theme-editor aan de secties
   **Collectie-tegels** en **Uitgelichte collectie**.
5. Stel bij **Navigatie** het hoofdmenu (`main-menu`) samen; het thema toont
   submenu's automatisch als uitklapmenu.

## Homepage-secties (alles bewerkbaar in de theme-editor)

| Sectie | Bestand |
|---|---|
| 3D scroll-intro | `sections/hero-intro.liquid` |
| Ticker | `sections/ticker.liquid` |
| USP-rij | `sections/usp.liquid` |
| Collectie-tegels | `sections/collection-tiles.liquid` |
| Uitgelichte collectie | `sections/featured-collection.liquid` |
| Statistieken | `sections/stats.liquid` |
| Merkenwand (25 merken) | `sections/brand-wall.liquid` |
| Over ons | `sections/about.liquid` |
| Groothandel | `sections/wholesale.liquid` |
| CTA-band | `sections/cta-banner.liquid` |
| Winkel-info | `sections/store-info.liquid` |

## 3D-intro

De intro laadt Three.js/GSAP alleen op de homepage. Zonder WebGL, bij
`prefers-reduced-motion` of gemeten lage FPS valt hij automatisch terug op
een statische hero — alle knoppen blijven werken.

## Winkelwagen

Productkaarten hebben quick-add (Shopify AJAX-cart `/cart/add.js`); de
productpagina ondersteunt maat-varianten en aantallen. De cart-pagina werkt
ook zonder JavaScript (native formulieren).
