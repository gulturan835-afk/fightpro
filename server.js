const path = require('path');
const express = require('express');
const session = require('express-session');
const store = require('./db');
const { euro, productArt } = require('./lib/helpers');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'fightpro-enschede-secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }, // 1 week
}));

// ---- Navigatiestructuur (groepen + losse categorieën) ----
const categories = store.getCategories();
const catBySlug = new Map(categories.map((c) => [c.slug, c]));
const navGroups = categories
  .filter((c) => c.nav === 'group')
  .map((g) => ({ ...g, children: store.getChildren(g.slug) }));
const navSingles = categories.filter((c) => c.nav === 'single');

// Voegt de "kind" van de categorie toe aan een product (voor de SVG-illustratie).
function decorate(p) {
  if (!p) return p;
  const cat = catBySlug.get(p.category);
  return { ...p, _kind: cat ? cat.kind : 'glove', categoryName: cat ? cat.name : '' };
}

// ---- Winkelwagen-helper: sessie -> verrijkte regels + totalen ----
function cartDetails(session) {
  const raw = session.cart || [];
  const lines = [];
  let subtotal = 0;
  let count = 0;
  for (const item of raw) {
    const product = store.getProduct(item.slug);
    if (!product) continue;
    const lineTotal = product.price * item.qty;
    subtotal += lineTotal;
    count += item.qty;
    lines.push({ ...item, product: decorate(product), lineTotal });
  }
  const shipping = subtotal === 0 || subtotal >= 7500 ? 0 : 595; // gratis verzending vanaf € 75
  return { lines, subtotal, shipping, total: subtotal + shipping, count };
}

// ---- Globale view-variabelen ----
app.use((req, res, next) => {
  res.locals.euro = euro;
  res.locals.productArt = productArt;
  res.locals.navGroups = navGroups;
  res.locals.navSingles = navSingles;
  res.locals.cartCount = cartDetails(req.session).count;
  res.locals.path = req.path;
  res.locals.query = '';
  next();
});

// ================= ROUTES =================

// Home
app.get('/', (req, res) => {
  const featured = store.getFeatured(8).map(decorate);
  const shopCats = categories.filter((c) => c.parent === null);
  res.render('home', { title: 'FightPro Enschede | Vechtsport Artikelen', featured, shopCats });
});

// Categoriepagina (zowel groep als losse/leaf-categorie)
app.get('/categorie/:slug', (req, res, next) => {
  const cat = store.getCategory(req.params.slug);
  if (!cat) return next();

  const children = store.getChildren(cat.slug);
  let products;
  if (children.length) {
    // Groep: toon alle producten uit de onderliggende categorieën.
    products = children.flatMap((c) => store.getProductsByCategory(c.slug));
  } else {
    products = store.getProductsByCategory(cat.slug);
  }

  // optioneel filteren op merk
  const brand = req.query.merk;
  if (brand) products = products.filter((p) => p.brand === brand);

  const brands = [...new Set(
    (children.length
      ? children.flatMap((c) => store.getProductsByCategory(c.slug))
      : store.getProductsByCategory(cat.slug)
    ).map((p) => p.brand)
  )].sort();

  res.render('category', {
    title: `${cat.name} | FightPro Enschede`,
    category: cat,
    children,
    products: products.map(decorate),
    brands,
    activeBrand: brand || null,
  });
});

// Productpagina
app.get('/product/:slug', (req, res, next) => {
  const product = store.getProduct(req.params.slug);
  if (!product) return next();
  const cat = catBySlug.get(product.category);
  const related = store.getRelated(product.category, product.slug, 4).map(decorate);
  res.render('product', {
    title: `${product.brand} ${product.name} | FightPro`,
    product: decorate(product),
    category: cat,
    related,
  });
});

// Winkelwagen tonen
app.get('/winkelwagen', (req, res) => {
  res.render('cart', { title: 'Winkelwagen | FightPro', cart: cartDetails(req.session) });
});

// Toevoegen aan winkelwagen
app.post('/winkelwagen/toevoegen', (req, res) => {
  const { slug, size = '', qty } = req.body;
  const product = store.getProduct(slug);
  if (!product) return res.status(404).json({ ok: false, error: 'Product niet gevonden' });
  const amount = Math.max(1, parseInt(qty, 10) || 1);

  req.session.cart = req.session.cart || [];
  const existing = req.session.cart.find((i) => i.slug === slug && i.size === size);
  if (existing) existing.qty += amount;
  else req.session.cart.push({ slug, size, qty: amount });

  const { count } = cartDetails(req.session);
  // AJAX-verzoek? -> JSON terug. Anders naar winkelwagen.
  if (req.headers['x-requested-with'] === 'fetch' || req.query.ajax) {
    return res.json({ ok: true, count, name: `${product.brand} ${product.name}` });
  }
  res.redirect('/winkelwagen');
});

// Aantal bijwerken
app.post('/winkelwagen/update', (req, res) => {
  const { slug, size = '', qty } = req.body;
  const amount = parseInt(qty, 10) || 0;
  req.session.cart = (req.session.cart || [])
    .map((i) => (i.slug === slug && i.size === size ? { ...i, qty: amount } : i))
    .filter((i) => i.qty > 0);
  res.redirect('/winkelwagen');
});

// Verwijderen
app.post('/winkelwagen/verwijder', (req, res) => {
  const { slug, size = '' } = req.body;
  req.session.cart = (req.session.cart || []).filter((i) => !(i.slug === slug && i.size === size));
  res.redirect('/winkelwagen');
});

// Afrekenen / betaalpagina
app.get('/afrekenen', (req, res) => {
  const cart = cartDetails(req.session);
  if (!cart.lines.length) return res.redirect('/winkelwagen');
  res.render('checkout', { title: 'Afrekenen | FightPro', cart, errors: {}, form: {} });
});

// Bestelling plaatsen (betaling gesimuleerd)
app.post('/afrekenen', (req, res) => {
  const cart = cartDetails(req.session);
  if (!cart.lines.length) return res.redirect('/winkelwagen');

  const form = req.body;
  const errors = {};
  for (const field of ['name', 'email', 'address', 'postcode', 'city']) {
    if (!form[field] || !String(form[field]).trim()) errors[field] = 'Verplicht veld';
  }
  if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errors.email = 'Ongeldig e-mailadres';
  if (!form.payment) errors.payment = 'Kies een betaalmethode';

  if (Object.keys(errors).length) {
    return res.status(400).render('checkout', { title: 'Afrekenen | FightPro', cart, errors, form });
  }

  const ref = 'FP-' + Date.now().toString(36).toUpperCase() + '-' +
    Math.random().toString(36).slice(2, 5).toUpperCase();

  store.createOrder(
    {
      ref,
      created_at: new Date().toISOString(),
      name: form.name, email: form.email, phone: form.phone || '',
      address: form.address, postcode: form.postcode, city: form.city,
      payment: form.payment,
      subtotal: cart.subtotal, shipping: cart.shipping, total: cart.total,
      status: 'betaald',
    },
    cart.lines.map((l) => ({
      slug: l.slug, name: l.product.name, brand: l.product.brand,
      size: l.size, price: l.product.price, qty: l.qty,
    }))
  );

  req.session.cart = []; // leeg de winkelwagen
  res.redirect('/bestelling/' + ref);
});

// Bevestigingspagina
app.get('/bestelling/:ref', (req, res, next) => {
  const order = store.getOrderByRef(req.params.ref);
  if (!order) return next();
  res.render('confirmation', { title: 'Bestelling bevestigd | FightPro', order });
});

// Zoeken
app.get('/zoeken', (req, res) => {
  const q = (req.query.q || '').trim().toLowerCase();
  let results = [];
  if (q) {
    results = store.getAllProducts().filter((p) =>
      (p.name + ' ' + p.brand + ' ' + p.short).toLowerCase().includes(q)
    ).map(decorate);
  }
  res.locals.query = q;
  res.render('search', { title: `Zoeken: ${q} | FightPro`, q, results });
});

// 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Pagina niet gevonden | FightPro' });
});

app.listen(PORT, () => console.log(`FightPro draait op http://localhost:${PORT}`));
