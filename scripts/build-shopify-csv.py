#!/usr/bin/env python3
"""Genereert dist/fightpro-producten-shopify.csv in Shopify-productimportformaat
vanuit data/live/products-raw.json (de volledige fightpro.nl-catalogus).

- Producten met maten krijgen 'Maat'-varianten (één rij per maat)
- Extra afbeeldingen krijgen eigen rijen (Image Src + Image Position)
- Body (HTML) bevat de originele HTML-beschrijving van fightpro.nl
"""
import json, csv, html, re, os, sys

sys.path.insert(0, os.path.dirname(__file__))

RAW = "/home/user/fightpro/data/live/products-raw.json"
OUT_DIR = "/home/user/fightpro/dist"
OUT = os.path.join(OUT_DIR, "fightpro-producten-shopify.csv")

# hergebruik de merk/categorie-logica door catalog-live te lezen
CATALOG = "/home/user/fightpro/data/catalog-live.js"
cat_src = open(CATALOG).read()
def js_block(name):
    m = re.search(r"const %s = (\[.*?\]);\n" % name, cat_src, re.S)
    return json.loads(m.group(1))
live_products = {p["slug"]: p for p in js_block("products")}
categories = {c["slug"]: c for c in js_block("categories")}

products_raw = json.load(open(RAW))

HEADERS = [
    "Handle", "Title", "Body (HTML)", "Vendor", "Type", "Tags", "Published",
    "Option1 Name", "Option1 Value",
    "Variant SKU", "Variant Grams", "Variant Inventory Tracker",
    "Variant Inventory Qty", "Variant Inventory Policy",
    "Variant Fulfillment Service", "Variant Price", "Variant Compare At Price",
    "Variant Requires Shipping", "Variant Taxable",
    "Image Src", "Image Position", "Image Alt Text",
    "Gift Card", "SEO Title", "SEO Description", "Status", "Collection",
]

os.makedirs(OUT_DIR, exist_ok=True)
rows = 0
n_variants = 0
with open(OUT, "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(HEADERS)
    for p in products_raw:
        slug = p["slug"]
        lp = live_products.get(slug)
        if not lp:
            continue
        title = html.unescape(p["name"])
        body = p.get("description") or p.get("short_description") or ""
        vendor = lp["brand"]
        cat = categories.get(lp["category"], {})
        ptype = cat.get("name", "")
        parent = categories.get(cat.get("parent") or "", {})
        tags = [t for t in {vendor, ptype, parent.get("name", "")} if t]
        if lp.get("bestseller"):
            tags.append("Bestseller")
        price = "%.2f" % (int(p["prices"]["price"]) / 100)
        regular = "%.2f" % (int(p["prices"]["regular_price"] or p["prices"]["price"]) / 100)
        compare = regular if (p.get("on_sale") and regular != price) else ""
        qty = 12 if p.get("is_in_stock") else 0
        images = [i["src"] for i in p.get("images", [])]
        sizes = lp.get("sizes") or []
        seo_desc = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", html.unescape(p.get("short_description") or "")))[:300].strip()
        collection = parent.get("name") or ptype

        variants = sizes if sizes else [None]
        for vi, size in enumerate(variants):
            first = vi == 0
            row = {
                "Handle": slug,
                "Title": title if first else "",
                "Body (HTML)": body if first else "",
                "Vendor": vendor if first else "",
                "Type": ptype if first else "",
                "Tags": ", ".join(tags) if first else "",
                "Published": "TRUE" if first else "",
                "Option1 Name": ("Maat" if sizes else "Title") if first else ("" if not sizes else ""),
                "Option1 Value": size if sizes else "Default Title",
                "Variant SKU": (p.get("sku") or "") + ("-" + re.sub(r"[^A-Za-z0-9]+", "", size) if sizes and p.get("sku") else ""),
                "Variant Grams": "",
                "Variant Inventory Tracker": "shopify",
                "Variant Inventory Qty": qty,
                "Variant Inventory Policy": "deny",
                "Variant Fulfillment Service": "manual",
                "Variant Price": price,
                "Variant Compare At Price": compare,
                "Variant Requires Shipping": "TRUE",
                "Variant Taxable": "TRUE",
                "Image Src": images[0] if (first and images) else "",
                "Image Position": 1 if (first and images) else "",
                "Image Alt Text": title if (first and images) else "",
                "Gift Card": "FALSE" if first else "",
                "SEO Title": title if first else "",
                "SEO Description": seo_desc if first else "",
                "Status": "active" if first else "",
                "Collection": collection if first else "",
            }
            if sizes and not first:
                row["Option1 Name"] = ""
            w.writerow([row.get(h, "") for h in HEADERS])
            rows += 1
            n_variants += 1
        # extra afbeeldingen
        for ii, src in enumerate(images[1:], start=2):
            w.writerow([slug] + [""] * 18 + [src, ii, ""] + [""] * 4)
            rows += 1

print(f"{OUT}")
print(f"producten: {len(products_raw)} | varianten: {n_variants} | csv-rijen: {rows}")
