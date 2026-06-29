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

## Online zetten (echte link) — zonder Node op je eigen pc

Je kunt de site gratis online zetten via **Render**, rechtstreeks vanuit GitHub.
Je krijgt dan een echte URL die je in je browser én op je telefoon kunt openen.

1. Ga naar **https://render.com** en log in met je **GitHub**-account.
2. Klik op **New +** → **Web Service**.
3. Kies de repository **fightpro** uit de lijst (geef Render toegang als dat
   gevraagd wordt).
4. Belangrijk: zet **Branch** op `claude/chat-session-r2oqx3`.
5. Render herkent automatisch dat het een Node-project is. Controleer:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
6. Klik op **Create Web Service**. Na een paar minuten staat de site online op
   een adres als `https://fightpro.onrender.com`.

> De gratis variant valt na inactiviteit even "in slaap"; de eerste keer openen
> kan daardoor ~30 seconden duren. Bestellingen worden in een tijdelijke
> database bewaard en kunnen bij een herstart worden gewist — de winkel zelf
> (categorieën/producten) werkt altijd, want die wordt automatisch opnieuw
> ingeladen.

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
