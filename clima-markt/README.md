# CLIMA MARKT — Air Conditioning & Ventilation Supermarket

An interactive, "premium supermarket" storefront for a climate-control company.
Every air conditioner, ventilation unit and fan is presented as a real
supermarket product: **barcode, price, EU energy label, "climate-facts" spec
table** and a **live 3D package** you can drag to rotate.

Built with vanilla HTML/CSS/JS — no build step. Just open it.

## Run it

```bash
# easiest: open the file directly
open clima-markt/index.html        # macOS
xdg-open clima-markt/index.html    # Linux

# or serve it (recommended, avoids any browser file:// quirks)
cd clima-markt
python3 -m http.server 8080
# → http://localhost:8080
```

> The page loads **Three.js** and **GSAP** from a CDN, so the machine viewing
> it needs internet access for the 3D packaging and animations. If those CDNs
> are blocked, the site **degrades gracefully**: every button, the cart and the
> quote form keep working, and flat SVG product art is shown instead of the 3D
> box. (That's why nothing is hidden when the libraries fail to load.)

## What's interactive ("all buttons connected")

- **Add to cart** on every product → updates the cart badge and the live
  receipt drawer.
- **Cart drawer** = a real supermarket receipt: quantity ±, remove, subtotal,
  21% BTW, grand total and a generated order barcode. "Checkout" opens a
  print-ready receipt (`window.print`).
- **3D PACK** button on each card → opens a modal with the rotating package
  (drag to spin) plus full specs and add-to-cart.
- **Hero stage** auto-cycles the featured packages in 3D.
- **Quotation form** with inline validation; on submit it summarises the
  current basket.
- **Smooth-scroll nav**, mobile menu, toasts, keyboard `Esc` to close.

## Sections

Featured air conditioners · Ventilation systems · Portable air conditioners ·
Ceiling & standing fans · Installation & maintenance services · Customer
reviews · Contact & quotation request · Cart/receipt checkout.

## Files

```
index.html      Markup skeleton + CDN script tags
css/styles.css  Receipt aesthetic — white / dark-gray / cool-blue palette
js/data.js      Product catalog, services, reviews (edit this to add products)
js/scene.js     Three.js engine — procedural "supermarket box" packaging
js/app.js       Catalog render, cart, 3D modal, quote form, GSAP animation
```

## Swapping in real assets

- **Real product photos:** set the `photo` field on any product in
  `js/data.js` to an image URL — the card uses it instead of the SVG art.
- **Blender → GLTF packaging:** `scene.js > buildPackage()` currently paints the
  box faces procedurally (barcode, energy label, climate-facts) as a stand-in
  for a modeled asset. To use a real model, load it with `THREE.GLTFLoader` and
  return the loaded group from `buildPackage()` — the viewer code is agnostic.

## Porting to Shopify (Liquid)

This is a standalone static site so the buttons can be verified end-to-end. To
move it into a Shopify theme later: the catalog in `js/data.js` maps onto
Shopify `product` objects, the card markup becomes a `snippet` rendered in a
`{% for product in collection.products %}` loop, and "Add to cart" calls the
`/cart/add.js` AJAX API. The CSS and 3D/animation JS drop straight into theme
assets unchanged.
