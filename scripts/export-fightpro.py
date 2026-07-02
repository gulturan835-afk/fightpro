#!/usr/bin/env python3
"""Exporteert de volledige fightpro.nl catalogus via de WooCommerce Store API.
Schrijft: data/live/products-raw.json (volledige API-respons, bron voor de
Shopify-CSV) en data/live/categories-raw.json."""
import json, subprocess, sys

BASE = "https://www.fightpro.nl/wp-json/wc/store/v1"
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0"

def fetch(url):
    r = subprocess.run(["curl", "-sS", "-A", UA, url, "--max-time", "60"],
                       capture_output=True, text=True, check=True)
    return json.loads(r.stdout)

products = []
page = 1
while True:
    batch = fetch(f"{BASE}/products?per_page=100&page={page}")
    if not batch:
        break
    products.extend(batch)
    print(f"pagina {page}: +{len(batch)} (totaal {len(products)})", flush=True)
    if len(batch) < 100:
        break
    page += 1

cats = fetch(f"{BASE}/products/categories?per_page=100")

with open("/home/user/fightpro/data/live/products-raw.json", "w") as f:
    json.dump(products, f, ensure_ascii=False)
with open("/home/user/fightpro/data/live/categories-raw.json", "w") as f:
    json.dump(cats, f, ensure_ascii=False)

# korte controle
no_img = [p["name"] for p in products if not p.get("images")]
no_brand = [p["name"] for p in products if not p.get("brands")]
print(f"\n{len(products)} producten, {len(cats)} categorieën")
print(f"zonder afbeelding: {len(no_img)}")
print(f"zonder brands-veld: {len(no_brand)}")
brands = {}
for p in products:
    for b in p.get("brands", []):
        brands[b["name"]] = brands.get(b["name"], 0) + 1
print(f"merken via brands-veld: {len(brands)}")
for k, v in sorted(brands.items(), key=lambda x: -x[1]):
    print(f"  {v:4d}  {k}")
