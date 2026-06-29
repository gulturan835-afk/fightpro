# FightPro Enschede — dynamische webshop

Dynamische versie van de FightPro-website: een vechtsport-webshop met echte
categoriepagina's, productpagina's, winkelwagen en betaalpagina (afrekenen).
Gebouwd met **Node.js + Express + EJS + SQLite**.

## Functies

- **Dynamische navigatie** — alle dropdown-items en header-kopjes navigeren naar
  echte categoriepagina's (`/categorie/:slug`).
- **Categoriepagina's** — met breadcrumb, subcategorieën en merkfilter.
- **Productpagina's** (`/product/:slug`) — met maatkeuze, aantal, kenmerken en
  "in winkelwagen".
- **Winkelwagen** (`/winkelwagen`) — server-side opgeslagen in de sessie; aantal
  aanpassen en verwijderen.
- **Betaalpagina / afrekenen** (`/afrekenen`) — adresgegevens + betaalmethode
  (iDEAL, creditcard, PayPal, Bancontact, achteraf), met validatie.
- **Bestelling** — wordt opgeslagen in de database; je krijgt een bevestiging
  met bestelnummer (`/bestelling/:ref`).
- **Zoeken** (`/zoeken?q=`) — zoekt op naam, merk en omschrijving.

> ⚠️ De betaling is **gesimuleerd** (demo). De bestelling wordt echt opgeslagen,
> maar er wordt geen geld afgeschreven. Voor echte betalingen kun je later een
> provider als **Mollie** of **Stripe** inpluggen in `POST /afrekenen`.

## Starten

```bash
npm install
npm start          # of: npm run dev  (auto-herstart)
```

De site draait dan op http://localhost:3000

Bij de eerste start wordt de database (`fightpro.db`) automatisch aangemaakt en
gevuld met categorieën en producten uit `data/catalog.js`.

## Projectstructuur

```
server.js            Express-server + routes
db.js                SQLite-schema, seeding en queries
data/catalog.js      Categorieën + producten (de "bron")
lib/helpers.js       Prijsformattering + SVG-productillustraties
views/               EJS-templates (home, category, product, cart, checkout, ...)
public/css/style.css Ontwerp (donker/goud)
public/js/main.js    Front-end interactie (winkelwagen, animaties, zoeken)
public/img/          Logo
```

## Een product of categorie toevoegen

Pas `data/catalog.js` aan en verwijder `fightpro.db` (zodat de seed opnieuw
draait), of voeg het rechtstreeks in de database in.
