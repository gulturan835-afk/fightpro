# CLIMA MARKT — Shopify theme

A Shopify **Online Store 2.0** theme port of the CLIMA MARKT supermarket-style
storefront. Every feature of the standalone site is preserved: 3D supermarket
packaging (Three.js), EU energy labels, barcodes, climate-facts spec tables,
the receipt-style cart drawer, the 3D product modal, services, reviews,
quotation form and GSAP animation.

## Install

**Option A — upload as a ZIP**
1. Zip the **contents** of this `shopify-theme/` folder (so `layout/`,
   `templates/`, `sections/`, `snippets/`, `assets/`, `config/`, `locales/`
   are at the root of the zip — not nested inside a `shopify-theme/` folder).
2. Shopify admin → **Online Store → Themes → Add theme → Upload zip file**.
3. **Customize** to edit content in the theme editor, or **Publish**.

**Option B — Shopify CLI (recommended for development)**
```bash
cd shopify-theme
shopify theme dev      # live preview
shopify theme push     # upload to the store
```

## How it works

The homepage (`templates/index.json`) is built from editable sections:

| Section            | File                          |
|--------------------|-------------------------------|
| Header / nav       | `sections/clima-header.liquid`|
| Hero + 3D stage    | `sections/clima-hero.liquid`  |
| Product aisle (×4) | `sections/clima-aisle.liquid` |
| Services           | `sections/clima-services.liquid` |
| Reviews            | `sections/clima-reviews.liquid` |
| Contact & quote    | `sections/clima-contact.liquid` |
| Footer             | `sections/clima-footer.liquid` |

Everything is editable in the **theme editor** (add/remove products, services,
reviews, nav links, change copy and colors) — no code needed.

### Two ways to supply products

Each **Product aisle** section works in either mode:

1. **Demo blocks (default).** The four aisles come pre-filled with product
   blocks. Edit them in the theme editor — name, brand, price, energy rating,
   kind (drives the illustration + 3D), accent color, barcode, badge,
   features, and "climate facts" (one `Label | Value` per line).

2. **Real Shopify products.** Pick a **Collection** in the section settings.
   Products are then read from that collection and mapped from metafields
   (namespace `custom`):

   | Field        | Source                                   |
   |--------------|------------------------------------------|
   | name         | `product.title`                          |
   | brand        | `product.vendor`                         |
   | price        | `product.price`                          |
   | energy label | `metafields.custom.energy_rating` (A–G)  |
   | kind         | `metafields.custom.kind` (split / portable / ventilation / fan-ceiling / fan-stand) |
   | accent color | `metafields.custom.accent_color`         |
   | badge        | `metafields.custom.badge`                |
   | features     | `metafields.custom.features` (comma list)|
   | climate facts| `metafields.custom.specs` (`Label \| Value` lines) |
   | barcode      | `variant.barcode`                        |
   | photo        | `product.featured_image`                 |

   When a collection is used, **Add to cart** also adds to Shopify's native
   cart (`/cart/add.js`) and **Checkout** goes to `/checkout`. With demo
   blocks, the cart is the front-end receipt and Checkout prints it.

## The cart

The cart drawer is a live **supermarket receipt** (qty ±, remove, subtotal,
21% BTW, total, generated order barcode). It is stored client-side and rendered
from the product JSON each card embeds, so it works on every page. When real
Shopify products are present it transparently syncs to the native cart so the
real checkout works too.

## Assets / dependencies

`assets/clima.css`, `assets/clima-scene.js` (Three.js packaging engine) and
`assets/clima-app.js` (cart, modal, barcodes, form, animation). Three.js and
GSAP load from a CDN in `layout/theme.liquid`. If those are blocked the site
degrades gracefully — all buttons keep working and flat SVG art replaces the
3D box.

## Notes

- Customer-account templates (`templates/customers/*`) are not included; add
  them only if you enable customer accounts.
- The contact form uses Shopify's native `{% form 'contact' %}` so submissions
  email the store; client-side validation runs first.
