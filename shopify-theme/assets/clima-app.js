/* =====================================================================
   CLIMA MARKT — Shopify front-end
   The catalog (cards, energy labels, services, reviews) is rendered
   server-side by Liquid. This script reads each card's embedded JSON
   and drives the interactive layer: receipt cart, 3D package modal,
   barcodes, quotation form, GSAP animation and navigation.
   ===================================================================== */
(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const euro = (n) => '€ ' + Number(n).toFixed(2).replace('.', ',');

  /* --------------------- catalog from Liquid -------------------------- */
  // Each product card embeds <script type="application/json" class="product-data">.
  const PRODUCTS = [];
  const BY_ID = {};
  $$('.product-data').forEach((el) => {
    try {
      const p = JSON.parse(el.textContent);
      PRODUCTS.push(p); BY_ID[p.id] = p;
    } catch (e) { /* ignore malformed */ }
  });
  const findProduct = (id) => BY_ID[id];
  // Real Shopify products carry a variant id → enable native cart/checkout.
  const HAS_VARIANTS = $$('.card[data-variant-id]').length > 0;

  /* --------------------- product illustration (cart/fallback) --------- */
  function illustration(kind, color) {
    const c = color || '#3aa6e0', d = '#1c2226', g = '#9fb4c2';
    switch (kind) {
      case 'split':
        return `<svg viewBox="0 0 240 150"><rect x="20" y="40" width="200" height="58" rx="14" fill="#fff" stroke="${d}" stroke-width="2"/><rect x="28" y="84" width="184" height="8" rx="4" fill="${c}"/><g stroke="${g}" stroke-width="2"><path d="M34 54h172M34 62h172M34 70h172"/></g><rect x="170" y="50" width="34" height="12" rx="3" fill="#eef5fb" stroke="${g}"/></svg>`;
      case 'portable':
        return `<svg viewBox="0 0 240 150"><rect x="86" y="14" width="68" height="124" rx="14" fill="#fff" stroke="${d}" stroke-width="2"/><rect x="96" y="24" width="48" height="34" rx="6" fill="${c}"/><g stroke="${g}" stroke-width="2"><path d="M96 74h48M96 84h48M96 94h48"/></g></svg>`;
      case 'ventilation':
        return `<svg viewBox="0 0 240 150"><rect x="70" y="15" width="100" height="120" rx="16" fill="#fff" stroke="${d}" stroke-width="2"/><g fill="none" stroke="${c}" stroke-width="4"><circle cx="120" cy="75" r="10"/><circle cx="120" cy="75" r="24"/><circle cx="120" cy="75" r="38"/></g><circle cx="120" cy="75" r="5" fill="${c}"/></svg>`;
      case 'fan-ceiling':
        return `<svg viewBox="0 0 240 150"><g transform="translate(120 75)" fill="${c}"><rect x="-9" y="-58" width="18" height="48" rx="8"/><rect x="-9" y="10" width="18" height="48" rx="8"/><rect x="10" y="-9" width="48" height="18" rx="8"/><rect x="-58" y="-9" width="48" height="18" rx="8"/></g><circle cx="120" cy="75" r="15" fill="${d}"/></svg>`;
      default:
        return `<svg viewBox="0 0 240 150"><g fill="none" stroke="${c}" stroke-width="3"><circle cx="120" cy="58" r="14"/><circle cx="120" cy="58" r="28"/><circle cx="120" cy="58" r="42"/></g><path d="M120 100v34" stroke="${d}" stroke-width="4" stroke-linecap="round"/><path d="M102 138h36" stroke="${d}" stroke-width="4" stroke-linecap="round"/></svg>`;
    }
  }

  /* --------------------- barcode (SVG) -------------------------------- */
  function barcodeSVG(value, h) {
    h = h || 38; value = String(value || '0');
    let seed = 0; for (let i = 0; i < value.length; i++) seed = (seed * 31 + value.charCodeAt(i)) >>> 0;
    const rng = () => { seed = (seed * 1103515245 + 12345) >>> 0; return (seed >>> 16) / 65535; };
    let x = 0; const bars = []; const W = 160;
    while (x < W) {
      const bw = 1 + Math.floor(rng() * 3.5);
      if (rng() > 0.34) bars.push(`<rect x="${x}" y="0" width="${bw}" height="${h}" fill="#1c2226"/>`);
      x += bw + (1 + Math.floor(rng() * 3));
    }
    return `<svg class="barcode-svg" viewBox="0 0 ${W} ${h}" preserveAspectRatio="none">${bars.join('')}</svg>`;
  }
  function paintBarcodes() {
    $$('.barcode-host').forEach((el) => {
      if (el.dataset.painted) return;
      el.innerHTML = barcodeSVG(el.dataset.barcode, parseInt(el.dataset.h || '38', 10));
      el.dataset.painted = '1';
    });
  }

  /* --------------------- energy label (for modal) --------------------- */
  const SCALE = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const ECOL = { A: '#00a651', B: '#50b848', C: '#bfd730', D: '#fff200', E: '#fdb913', F: '#f37021', G: '#ed1c24' };
  function energyLadder(rating) {
    return '<div class="energy">' + SCALE.map((g) => `<span class="bar${g === rating ? '' : ' dim'}" data-g="${g}">${g}</span>`).join('') + '</div>';
  }
  function energyBadge(rating) {
    const dark = rating === 'C' || rating === 'D';
    return `<span class="energy-badge"><span class="let" style="background:${ECOL[rating]};color:${dark ? '#1c2226' : '#fff'}">${rating}</span>ENERGY</span>`;
  }

  /* ----------------------------- CART --------------------------------- */
  const Cart = (function () {
    const KEY = 'clima_cart_v1';
    let items = load();
    const ref = 'CM-' + String(Date.now()).slice(-6);

    function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
    function save() { try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {} }

    function add(id) {
      const ex = items.find((i) => i.id === id);
      if (ex) ex.qty++; else items.push({ id, qty: 1 });
      save(); render(); pulse();
      const p = findProduct(id);
      if (p) Toast.show(p.name + ' added to receipt');
    }
    function setQty(id, q) {
      const it = items.find((i) => i.id === id); if (!it) return;
      it.qty = Math.max(0, q);
      if (it.qty === 0) items = items.filter((i) => i.id !== id);
      save(); render();
    }
    function remove(id) { items = items.filter((i) => i.id !== id); save(); render(); }
    function count() { return items.reduce((s, i) => s + i.qty, 0); }
    function totals() {
      const gross = items.reduce((s, i) => s + (findProduct(i.id) ? findProduct(i.id).price : 0) * i.qty, 0);
      const net = gross / 1.21;
      return { gross, net, vat: gross - net };
    }
    function qtyOf(id) { const it = items.find((i) => i.id === id); return it ? it.qty : 0; }

    function pulse() { const c = $('#cart-count'); if (window.gsap && c) gsap.fromTo(c, { scale: 1.6 }, { scale: 1, duration: 0.4, ease: 'back.out(3)' }); }

    function render() {
      const c = $('#cart-count'); if (c) c.textContent = count();
      const list = $('#cart-items'), empty = $('#cart-empty'); if (!list) return;
      if (!items.length) { list.innerHTML = ''; if (empty) empty.style.display = 'block'; }
      else {
        if (empty) empty.style.display = 'none';
        list.innerHTML = items.map((i) => {
          const p = findProduct(i.id); if (!p) return '';
          return `<div class="ci">
            <div class="ci-thumb">${illustration(p.kind, p.color)}</div>
            <div>
              <div class="ci-name">${p.name}</div>
              <div class="ci-meta">${p.brand} · ⚡${p.rating} · ${p.barcode}</div>
              <div class="ci-qty"><button data-dec="${p.id}">−</button><span>${i.qty}</span><button data-inc="${p.id}">+</button></div>
            </div>
            <div class="ci-right"><div class="ci-price">${euro(p.price * i.qty)}</div><button class="ci-remove" data-rm="${p.id}">remove</button></div>
          </div>`;
        }).join('');
        $$('[data-inc]', list).forEach((b) => b.onclick = () => setQty(b.dataset.inc, qtyOf(b.dataset.inc) + 1));
        $$('[data-dec]', list).forEach((b) => b.onclick = () => setQty(b.dataset.dec, qtyOf(b.dataset.dec) - 1));
        $$('[data-rm]', list).forEach((b) => b.onclick = () => remove(b.dataset.rm));
      }
      const t = totals();
      if ($('#sum-sub')) $('#sum-sub').textContent = euro(t.net);
      if ($('#sum-vat')) $('#sum-vat').textContent = euro(t.vat);
      if ($('#sum-total')) $('#sum-total').textContent = euro(t.gross);
      if ($('#sum-items')) $('#sum-items').textContent = count() + (count() === 1 ? ' item' : ' items');
      const co = $('#checkout-btn'); if (co) co.disabled = !items.length;
      const basket = $('#basket-summary');
      if (basket) basket.value = count() ? count() + ' item(s) · ' + euro(t.gross) + ' · ref ' + ref : '';
    }

    function init() {
      const meta = $('#receipt-meta');
      if (meta) meta.innerHTML = '<span>REF ' + ref + '</span><span>' + new Date().toLocaleDateString('nl-NL') + '</span>';
      const bc = $('#drawer-barcode');
      if (bc) bc.innerHTML = barcodeSVG(ref.replace(/\D/g, '') || '000000', 44) + '<div class="barcode-num">' + ref + '</div>';
      render();
    }
    return { add, count, totals, ref: () => ref, init, render };
  })();

  /* --------- optional sync to native Shopify cart -------------------- */
  function syncShopify(card) {
    const vId = card && card.getAttribute('data-variant-id');
    if (!vId) return;
    fetch('/cart/add.js', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: vId, quantity: 1 }),
    }).catch(() => {});
  }

  /* ----------------------------- DRAWER ------------------------------- */
  const openDrawer = () => { $('#drawer').classList.add('open'); $('#drawer-overlay').classList.add('open'); };
  const closeDrawer = () => { $('#drawer').classList.remove('open'); $('#drawer-overlay').classList.remove('open'); };

  /* ----------------------------- TOAST -------------------------------- */
  const Toast = (function () {
    let timer;
    return { show(msg) { const t = $('#toast'); if (!t) return; $('#toast-msg').textContent = msg; t.classList.add('show'); clearTimeout(timer); timer = setTimeout(() => t.classList.remove('show'), 2200); } };
  })();

  /* ---------------------------- 3D MODAL ------------------------------ */
  const Modal = (function () {
    let viewer = null;
    function open(id) {
      const p = findProduct(id); if (!p) return;
      $('#modal-overlay').classList.add('open');
      $('#m-brand').textContent = p.brand;
      $('#m-name').textContent = p.name;
      $('#m-energy').innerHTML = energyBadge(p.rating) + energyLadder(p.rating);
      $('#m-specs').innerHTML = '<caption>CLIMATE FACTS</caption>' + Object.keys(p.specs || {}).map((k) => `<tr><th>${k}</th><td>${p.specs[k]}</td></tr>`).join('');
      $('#m-price').textContent = euro(p.price);
      $('#m-barcode').innerHTML = barcodeSVG(p.barcode, 44) + '<div class="barcode-num">' + p.barcode + '</div>';
      $('#m-add').onclick = () => { Cart.add(p.id); const card = $('.card[data-id="' + p.id + '"]'); syncShopify(card); close(); openDrawer(); };
      const stage = $('#modal-stage');
      if (window.ClimaScene && ClimaScene.available && stage) {
        if (!viewer) viewer = ClimaScene.createViewer(stage, p, { autoSpeed: 0.006 });
        else viewer.setProduct(p);
      }
    }
    function close() { $('#modal-overlay').classList.remove('open'); }
    return { open, close };
  })();

  /* ------------------------- product buttons -------------------------- */
  function bindProductButtons() {
    $$('[data-add]').forEach((b) => b.addEventListener('click', () => {
      const id = b.getAttribute('data-add');
      Cart.add(id);
      syncShopify(b.closest('.card'));
      b.classList.add('added'); const s = b.querySelector('span'); if (s) s.textContent = 'ADDED';
      setTimeout(() => { b.classList.remove('added'); if (s) s.textContent = 'ADD'; }, 1100);
    }));
    $$('[data-view3d]').forEach((b) => b.addEventListener('click', () => Modal.open(b.getAttribute('data-view3d'))));
  }

  /* --------------------------- QUOTE FORM ----------------------------- */
  function initForm() {
    const form = $('#quote-form'); if (!form) return;
    form.addEventListener('submit', (e) => {
      let ok = true;
      [['name', /.+/], ['email', /^[^@\s]+@[^@\s]+\.[^@\s]+$/], ['postcode', /^\d{4}\s?[a-z]{2}$/i], ['interest', /.+/]].forEach(([f, re]) => {
        const input = form.querySelector('[name="contact[' + f + ']"]');
        const err = $('[data-err="' + f + '"]', form);
        let msg = '';
        if (input) {
          if (!input.value.trim()) msg = 'Required';
          else if (!re.test(input.value.trim())) msg = f === 'postcode' ? 'e.g. 7511 AB' : (f === 'email' ? 'Invalid email' : '');
        }
        if (err) err.textContent = msg;
        if (msg) ok = false;
      });
      if (!ok) { e.preventDefault(); }
      // when valid the form submits to Shopify /contact normally
    });
  }

  /* --------------------------- HERO 3D -------------------------------- */
  function initHero() {
    const stage = $('#hero-stage'); if (!stage) return;
    const featured = PRODUCTS.filter((p) => p.category === 'featured');
    const list = featured.length ? featured : PRODUCTS;
    if (!list.length) return;
    if (window.ClimaScene && ClimaScene.available) {
      const viewer = ClimaScene.createViewer(stage, list[0], { autoSpeed: 0.005 });
      let idx = 0;
      if (list.length > 1) setInterval(() => { idx = (idx + 1) % list.length; viewer.setProduct(list[idx]); }, 6500);
    } else {
      stage.innerHTML = '<div class="fallback">' + illustration(list[0].kind, list[0].color) + '<br>3D packaging needs WebGL.</div>';
    }
  }

  /* --------------------------- ANIMATIONS ----------------------------- */
  function initAnimations() {
    if (!window.gsap) { $$('.reveal').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; }); return; }
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero .eyebrow', { y: 20, opacity: 0, duration: 0.5 })
      .from('.hero h1', { y: 30, opacity: 0, duration: 0.6 }, '-=0.2')
      .from('.hero .lead', { y: 24, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.hero-actions .btn', { y: 20, opacity: 0, duration: 0.4, stagger: 0.1 }, '-=0.2')
      .from('.stage', { scale: 0.9, opacity: 0, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.6');
    if (window.ScrollTrigger) {
      $$('.reveal').forEach((el) => gsap.to(el, { y: 0, opacity: 1, duration: 0.6, scrollTrigger: { trigger: el, start: 'top 88%' } }));
    } else { $$('.reveal').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; }); }
  }

  /* ------------------------------- NAV -------------------------------- */
  function initNav() {
    $$('a[href*="#"]').forEach((a) => {
      const href = a.getAttribute('href') || '';
      const hash = href.indexOf('#') >= 0 ? href.slice(href.indexOf('#')) : '';
      if (hash.length > 1 && $(hash)) {
        a.addEventListener('click', (e) => { e.preventDefault(); $(hash).scrollIntoView({ behavior: 'smooth' }); const n = $('#main-nav'); if (n) n.classList.remove('open'); });
      }
    });
    const mt = $('#menu-toggle'); if (mt) mt.addEventListener('click', () => $('#main-nav').classList.toggle('open'));
    const cb = $('#cart-btn'); if (cb) cb.addEventListener('click', openDrawer);
    const dc = $('#drawer-close'); if (dc) dc.addEventListener('click', closeDrawer);
    const ov = $('#drawer-overlay'); if (ov) ov.addEventListener('click', closeDrawer);
    const mc = $('#modal-close'); if (mc) mc.addEventListener('click', Modal.close);
    const mo = $('#modal-overlay'); if (mo) mo.addEventListener('click', (e) => { if (e.target.id === 'modal-overlay') Modal.close(); });
    const co = $('#checkout-btn');
    if (co) co.addEventListener('click', () => {
      if (!Cart.count()) return;
      if (HAS_VARIANTS) { window.location.href = '/checkout'; }
      else { Toast.show('Opening printable receipt…'); setTimeout(() => window.print(), 400); }
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeDrawer(); Modal.close(); } });
  }

  /* ------------------------------ BOOT -------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    paintBarcodes();
    bindProductButtons();
    Cart.init();
    initForm();
    initNav();
    initHero();
    initAnimations();
  });
})();
