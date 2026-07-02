#!/usr/bin/env python3
"""Zet data/live/products-raw.json om naar data/catalog-live.js — hetzelfde
formaat als data/catalog.js (seed-bron van db.js), aangevuld met echte
foto's, merken en maten van fightpro.nl."""
import json, re, html

RAW = "/home/user/fightpro/data/live/products-raw.json"
RAWC = "/home/user/fightpro/data/live/categories-raw.json"
OUT = "/home/user/fightpro/data/catalog-live.js"

products_raw = json.load(open(RAW))
cats_raw = json.load(open(RAWC))
by_id = {c["id"]: c for c in cats_raw}

MERKEN_ID = next(c["id"] for c in cats_raw if c["name"] == "Merken")
brand_cats = {c["id"]: c["name"] for c in cats_raw if c["parent"] == MERKEN_ID}
BESTSELLER_ID = next(c["id"] for c in cats_raw if c["name"] == "Bestsellers!")

# Merken die in de winkel hangen maar (nog) geen categorie hebben
EXTRA_BRANDS = ["Adidas", "Lifemaxx", "Crossmaxx", "Windy"]
KNOWN_BRANDS = sorted(set(list(brand_cats.values()) + EXTRA_BRANDS), key=str.lower)

def strip_html(s):
    s = re.sub(r"<li[^>]*>", "\n• ", s or "")
    s = re.sub(r"</(p|div|br|h\d|ul|ol)[^>]*>", "\n", s)
    s = re.sub(r"<[^>]+>", "", s)
    s = html.unescape(s)
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r"\n{2,}", "\n\n", s)
    return s.strip()

def extract_specs(desc_html, max_n=6):
    items = re.findall(r"<li[^>]*>(.*?)</li>", desc_html or "", re.S)
    out = []
    for it in items:
        t = strip_html(it).strip("• ").strip()
        if t and len(t) < 90 and t not in out:
            out.append(t)
        if len(out) >= max_n:
            break
    return out

# ---------- Navigatiestructuur ----------
def slug_of(name):
    return by_id[next(c["id"] for c in cats_raw if c["name"] == name)]["slug"]

def cname(name):
    return next(c for c in cats_raw if c["name"] == name)

BLURBS = {
    "Handschoenen": "Bokshandschoenen, kickbokshandschoenen, MMA en meer — pas ze in de winkel.",
    "Bescherming": "Scheen-, hoofd- en kruisbescherming, gebitsbeschermers en bandages.",
    "Uitrusting": "Bokszakken, trap- en stootkussens, sporttassen en fitnessgear.",
    "Kleding": "Broekjes, shirts, BJJ-wear en fightwear voor dames.",
    "Kids fight": "Complete kids-lijnen: handschoenen, beschermers en kleding.",
    "Voeding": "Supplementen en sportvoeding van ESN en Bio Tech.",
    "OUTLET": "Laatste stuks met flinke korting.",
    "Diversen": "Accessoires, verzorging en al het andere voor de vechtsporter.",
}
KINDS = {
    "handschoenen": "glove", "bescherming": "shield", "uitrusting": "bag",
    "kleding": "apparel", "kids": "glove", "voeding": "apparel",
    "outlet": "bag", "diversen": "wrap",
}

categories = []
group_children = {}

def add_group(top_name, child_names, forced_slug=None, display=None):
    slug = forced_slug or slug_of(top_name)
    categories.append({
        "slug": slug, "name": display or top_name, "parent": None, "nav": "group",
        "kind": KINDS.get((display or top_name).split()[0].lower(), "glove"),
        "blurb": BLURBS.get(display or top_name, ""),
    })
    kids = []
    for n in child_names:
        c = cname(n)
        categories.append({
            "slug": c["slug"], "name": c["name"], "parent": slug,
            "kind": KINDS.get((display or top_name).split()[0].lower(), "glove"),
            "blurb": "",
        })
        kids.append(c["id"])
    group_children[slug] = kids

add_group("Handschoenen", ["Kickbokshandschoenen leer", "Kickbokshandschoenen Kunststof",
                           "MMA Gloves", "MMA gloves PU/kunststof", "Zak handschoenen", "Binnen handschoenen"])
add_group("Bescherming", ["Scheenbeschermers", "Hoofdbeschermers", "Gebitsbeschermer",
                          "Kruis bescherming", "knie-elleboog beschermers", "Bandages"])
add_group("Uitrusting", ["trap/stoot kussens", "Bokszakken", "Sport tassen",
                         "Fitness en cardio", "Sportvloeren", "Tape"], forced_slug="uitrusting", display="Uitrusting")
add_group("Kleding", ["Broekjes", "T-Shirts", "BJJ", "Women Collection fightwear"])

SINGLES = [("Kids fight", "Kids"), ("Voeding", "Voeding"), ("OUTLET", "Outlet"), ("Diversen", "Diversen")]
for top_name, display in SINGLES:
    c = cname(top_name)
    categories.append({
        "slug": c["slug"], "name": display, "parent": None, "nav": "single",
        "kind": KINDS.get(display.lower(), "glove"), "blurb": BLURBS.get(top_name, ""),
    })
    group_children[c["slug"]] = [c["id"]]

# id -> onze categorie-slug (leaf-voorkeur)
leaf_by_id = {}
for slug, ids in group_children.items():
    for i in ids:
        leaf_by_id[i] = by_id[i]["slug"] if by_id[i]["parent"] != 0 else by_id[i]["slug"]
top_single_ids = {cname(t)["id"]: cname(t)["slug"] for t, _ in SINGLES}

KIDS_IDS = {cname("Kids fight")["id"], cname("Collecties")["id"],
            next(c["id"] for c in cats_raw if c["name"] == "Legends Kids")}
KIDS_SLUG = cname("Kids fight")["slug"]
OUTLET_ID = cname("OUTLET")["id"]
OUTLET_SLUG = cname("OUTLET")["slug"]

def primary_category(p):
    ids = [c["id"] for c in p["categories"]]
    # 1. kids-lijnen krijgen voorrang (eigen doelgroep)
    if any(i in KIDS_IDS for i in ids):
        return KIDS_SLUG
    # 2. lid van een navigatiegroep (leaf of top zoals 'trap/stoot kussens')
    for i in ids:
        if i in leaf_by_id:
            return by_id[i]["slug"]
    # 3. losse top-categorieën (Voeding, Diversen — outlet als laatste)
    for i in ids:
        if i in top_single_ids and i != OUTLET_ID:
            return top_single_ids[i]
    if any(i == OUTLET_ID for i in ids):
        return OUTLET_SLUG
    return cname("Diversen")["slug"]

def brand_of(p):
    for c in p["categories"]:
        if c["id"] in brand_cats:
            return brand_cats[c["id"]]
    for a in p.get("attributes", []):
        if a["name"].lower() == "merk" and a.get("terms"):
            return a["terms"][0]["name"]
    low = p["name"].lower()
    for b in KNOWN_BRANDS:
        if low.startswith(b.lower() + " ") or (" " + b.lower() + " ") in low:
            return b
    return "Fightpro"

SIZE_ATTS = {"maat", "handschoenmaat", "kledingmaat", "lengte"}
def sizes_of(p):
    out = []
    for a in p.get("attributes", []):
        if a["name"].lower() in SIZE_ATTS:
            out.extend(t["name"] for t in a.get("terms", []))
    return out

products = []
for p in products_raw:
    cat_ids = [c["id"] for c in p["categories"]]
    on_sale = bool(p.get("on_sale"))
    price = int(p["prices"]["price"])
    regular = int(p["prices"]["regular_price"] or price)
    is_bestseller = BESTSELLER_ID in cat_ids
    badge = "Aanbieding" if on_sale and regular > price else ("Bestseller" if is_bestseller else None)
    desc = strip_html(p.get("description") or "") or strip_html(p.get("short_description") or "")
    short = strip_html(p.get("short_description") or "")
    if not short:
        short = desc.split("\n")[0][:160]
    short = re.sub(r"\s+", " ", short)
    if len(short) > 160:
        short = short[:157].rstrip() + "…"
    imgs = [i["src"] for i in p.get("images", [])][:5]
    products.append({
        "slug": p["slug"],
        "name": html.unescape(p["name"]),
        "brand": brand_of(p),
        "palette": None,
        "category": primary_category(p),
        "price": price,
        "oldPrice": regular if (on_sale and regular > price) else None,
        "badge": badge,
        "short": short,
        "description": desc,
        "specs": extract_specs(p.get("description") or p.get("short_description")),
        "sizes": sizes_of(p),
        "stock": 12 if p.get("is_in_stock") else 0,
        "image": imgs[0] if imgs else None,
        "images": imgs,
        "bestseller": is_bestseller,
        "permalink": p.get("permalink"),
    })

# Bestsellers eerst → getFeatured() geeft ze automatisch terug
products.sort(key=lambda x: (not x["bestseller"]))

brands_count = {}
for p in products:
    brands_count[p["brand"]] = brands_count.get(p["brand"], 0) + 1
brands = sorted(set(list(brands_count.keys()) + EXTRA_BRANDS), key=str.lower)

palettes = {
    "hayabusa": {"body": "#1A1A1A", "cuff": "#B8973A"},
    "twins": {"body": "#B8102E", "cuff": "#8B0B21"},
    "joya": {"body": "#1C1C1C", "cuff": "#B8973A"},
    "fairtex": {"body": "#1A2A1A", "cuff": "#B8973A"},
    "king": {"body": "#11243A", "cuff": "#B8973A"},
    "fightpro": {"body": "#1A1200", "cuff": "#B8973A"},
    "default": {"body": "#1A1A1A", "cuff": "#B8973A"},
}

with open(OUT, "w") as f:
    f.write("// GEGENEREERD door scripts/build-catalog.py — echte catalogus van fightpro.nl\n")
    f.write("// (%d producten, %d merken). Niet met de hand bewerken.\n\n" % (len(products), len(brands)))
    f.write("const categories = " + json.dumps(categories, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("const products = " + json.dumps(products, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("const palettes = " + json.dumps(palettes, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("const brands = " + json.dumps(brands, ensure_ascii=False, indent=2) + ";\n\n")
    f.write("module.exports = { categories, products, palettes, brands };\n")

print(f"{len(products)} producten → {OUT}")
print(f"{len(categories)} categorieën, {len(brands)} merken: {', '.join(brands)}")
per_cat = {}
for p in products:
    per_cat[p["category"]] = per_cat.get(p["category"], 0) + 1
for k, v in sorted(per_cat.items(), key=lambda x: -x[1]):
    print(f"  {v:4d}  {k}")
missing_img = [p["slug"] for p in products if not p["image"]]
print("zonder foto:", len(missing_img))
