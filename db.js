// Database-laag (SQLite via better-sqlite3).
// Bij opstarten worden categorieën en producten geseed vanuit
// data/catalog-live.js (de echte fightpro.nl-catalogus, zie scripts/).
const path = require('path');
const Database = require('better-sqlite3');
const { categories, products } = require('./data/catalog-live');

const db = new Database(path.join(__dirname, 'fightpro.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS categories (
    slug   TEXT PRIMARY KEY,
    name   TEXT NOT NULL,
    parent TEXT,
    nav    TEXT,
    kind   TEXT,
    blurb  TEXT,
    pos    INTEGER
  );

  CREATE TABLE IF NOT EXISTS products (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    slug        TEXT UNIQUE NOT NULL,
    name        TEXT NOT NULL,
    brand       TEXT NOT NULL,
    palette     TEXT,
    category    TEXT NOT NULL,
    price       INTEGER NOT NULL,   -- in centen
    old_price   INTEGER,
    badge       TEXT,
    short       TEXT,
    description TEXT,
    specs       TEXT,               -- JSON array
    sizes       TEXT,               -- JSON array
    stock       INTEGER DEFAULT 0,
    image       TEXT,               -- hoofdfoto (URL)
    images      TEXT,               -- JSON array van foto-URL's
    bestseller  INTEGER DEFAULT 0,
    pos         INTEGER
  );

  CREATE TABLE IF NOT EXISTS orders (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    ref         TEXT UNIQUE NOT NULL,
    created_at  TEXT NOT NULL,
    name        TEXT,
    email       TEXT,
    phone       TEXT,
    address     TEXT,
    postcode    TEXT,
    city        TEXT,
    payment     TEXT,
    subtotal    INTEGER,
    shipping    INTEGER,
    total       INTEGER,
    status      TEXT DEFAULT 'betaald'
  );

  CREATE TABLE IF NOT EXISTS order_items (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id  INTEGER NOT NULL,
    slug      TEXT,
    name      TEXT,
    brand     TEXT,
    size      TEXT,
    price     INTEGER,
    qty       INTEGER,
    FOREIGN KEY(order_id) REFERENCES orders(id)
  );
`);

// ---- Seed (opnieuw wanneer de catalogus wijzigt; bestellingen blijven staan) ----
function seed() {
  const count = db.prepare('SELECT COUNT(*) AS n FROM products').get().n;
  if (count === products.length) return;
  db.exec('DELETE FROM products; DELETE FROM categories;');

  const insCat = db.prepare(
    'INSERT INTO categories (slug,name,parent,nav,kind,blurb,pos) VALUES (@slug,@name,@parent,@nav,@kind,@blurb,@pos)'
  );
  categories.forEach((c, i) =>
    insCat.run({ nav: null, kind: null, blurb: null, parent: null, ...c, pos: i })
  );

  const insProd = db.prepare(`
    INSERT INTO products (slug,name,brand,palette,category,price,old_price,badge,short,description,specs,sizes,stock,image,images,bestseller,pos)
    VALUES (@slug,@name,@brand,@palette,@category,@price,@old_price,@badge,@short,@description,@specs,@sizes,@stock,@image,@images,@bestseller,@pos)
  `);
  products.forEach((p, i) =>
    insProd.run({
      old_price: null, badge: null, palette: null, short: '', description: '', stock: 0, image: null,
      ...p,
      old_price: p.old_price !== undefined ? p.old_price : (p.oldPrice || null),
      specs: JSON.stringify(p.specs || []),
      sizes: JSON.stringify(p.sizes || []),
      images: JSON.stringify(p.images || []),
      bestseller: p.bestseller ? 1 : 0,
      pos: i,
    })
  );
  console.log(`Seed: ${categories.length} categorieën, ${products.length} producten.`);
}
seed();

// ---- Helpers ----
function rowToProduct(r) {
  if (!r) return null;
  return {
    ...r,
    specs: JSON.parse(r.specs || '[]'),
    sizes: JSON.parse(r.sizes || '[]'),
    images: JSON.parse(r.images || '[]'),
  };
}

const Q = {
  allCategories: db.prepare('SELECT * FROM categories ORDER BY pos'),
  categoryBySlug: db.prepare('SELECT * FROM categories WHERE slug = ?'),
  childCategories: db.prepare('SELECT * FROM categories WHERE parent = ? ORDER BY pos'),

  productsByCategory: db.prepare('SELECT * FROM products WHERE category = ? ORDER BY pos'),
  productBySlug: db.prepare('SELECT * FROM products WHERE slug = ?'),
  allProducts: db.prepare('SELECT * FROM products ORDER BY pos'),
  featured: db.prepare('SELECT * FROM products ORDER BY pos LIMIT ?'),
  relatedInCategory: db.prepare('SELECT * FROM products WHERE category = ? AND slug != ? ORDER BY pos LIMIT ?'),

  insertOrder: db.prepare(`
    INSERT INTO orders (ref,created_at,name,email,phone,address,postcode,city,payment,subtotal,shipping,total,status)
    VALUES (@ref,@created_at,@name,@email,@phone,@address,@postcode,@city,@payment,@subtotal,@shipping,@total,@status)
  `),
  insertItem: db.prepare(`
    INSERT INTO order_items (order_id,slug,name,brand,size,price,qty)
    VALUES (@order_id,@slug,@name,@brand,@size,@price,@qty)
  `),
  orderByRef: db.prepare('SELECT * FROM orders WHERE ref = ?'),
  itemsByOrder: db.prepare('SELECT * FROM order_items WHERE order_id = ?'),
};

module.exports = {
  db,
  getCategories: () => Q.allCategories.all(),
  getCategory: (slug) => Q.categoryBySlug.get(slug),
  getChildren: (slug) => Q.childCategories.all(slug),
  getProductsByCategory: (slug) => Q.productsByCategory.all(slug).map(rowToProduct),
  getProduct: (slug) => rowToProduct(Q.productBySlug.get(slug)),
  getFeatured: (n = 8) => Q.featured.all(n).map(rowToProduct),
  getRelated: (cat, slug, n = 4) => Q.relatedInCategory.all(cat, slug, n).map(rowToProduct),
  getAllProducts: () => Q.allProducts.all().map(rowToProduct),

  // Maakt een bestelling + items in één transactie.
  createOrder: db.transaction((order, items) => {
    const info = Q.insertOrder.run(order);
    const orderId = info.lastInsertRowid;
    for (const it of items) Q.insertItem.run({ ...it, order_id: orderId });
    return orderId;
  }),
  getOrderByRef: (ref) => {
    const order = Q.orderByRef.get(ref);
    if (!order) return null;
    return { ...order, items: Q.itemsByOrder.all(order.id) };
  },
};
