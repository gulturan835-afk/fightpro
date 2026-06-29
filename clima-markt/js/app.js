/* =====================================================================
   CLIMA MARKT — application layer
   Renders the catalog, drives the cart (a live supermarket receipt),
   the 3D package modal, the quotation form and all GSAP animation.
   ===================================================================== */
(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const euro = (n) => '€ ' + n.toFixed(2).replace('.', ',');

  /* ----------------------------- icons -------------------------------- */
  const I = {
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.4 12.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L21 7H6"/></svg>',
    snow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v20M4.2 6l15.6 12M19.8 6 4.2 18"/><path d="M12 6l-2-2m2 2 2-2m-2 14-2 2m2-2 2 2"/></svg>',
    wind: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 8h11a3 3 0 1 0-3-3M3 16h15a3 3 0 1 1-3 3M3 12h8"/></svg>',
    plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v6"/></svg>',
    fan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="2"/><path d="M12 10c0-4 1-7 0-8-3 1-4 5-4 7 0 1 2 1 4 1ZM14 12c4 0 7 1 8 0-1-3-5-4-7-4-1 0-1 2-1 4ZM10 14c-4 0-7-1-8 0 1 3 5 4 7 4 1 0 1-2 1-4Z"/></svg>',
    tools: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M14 7a3 3 0 0 1 4 4l-8 8-4 1 1-4 8-8a3 3 0 0 1 0 0Z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 7a4 4 0 0 1-5 5L7 21l-4-4 9-9a4 4 0 0 1 5-5l-3 3 2 2 3-3Z"/></svg>',
    clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="6" y="4" width="12" height="18" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h4"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/></svg>',
    cube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 7h12l-1 14H7L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
  };

  /* --------------------- product illustrations (SVG) ------------------ */
  function illustration(kind, color) {
    const c = color, d = '#1c2226', g = '#9fb4c2';
    switch (kind) {
      case 'split':
        return `<svg viewBox="0 0 240 150" class="card-illu">
          <rect x="20" y="40" width="200" height="58" rx="14" fill="#fff" stroke="${d}" stroke-width="2"/>
          <rect x="28" y="84" width="184" height="8" rx="4" fill="${c}"/>
          <g stroke="${g}" stroke-width="2"><path d="M34 54h172M34 62h172M34 70h172"/></g>
          <rect x="170" y="50" width="34" height="12" rx="3" fill="#eef5fb" stroke="${g}"/>
          <g stroke="${c}" stroke-width="2.5" stroke-linecap="round" opacity=".7">
            <path d="M70 112c8-6 8-10 0-16M120 112c8-6 8-10 0-16M170 112c8-6 8-10 0-16"/></g>
        </svg>`;
      case 'portable':
        return `<svg viewBox="0 0 240 150" class="card-illu">
          <rect x="86" y="14" width="68" height="124" rx="14" fill="#fff" stroke="${d}" stroke-width="2"/>
          <rect x="96" y="24" width="48" height="34" rx="6" fill="${c}"/>
          <g stroke="${g}" stroke-width="2"><path d="M96 74h48M96 84h48M96 94h48M96 104h48"/></g>
          <path d="M154 40c30 0 34 18 34 40" fill="none" stroke="${g}" stroke-width="6" stroke-linecap="round" opacity=".7"/>
        </svg>`;
      case 'ventilation':
        return `<svg viewBox="0 0 240 150" class="card-illu">
          <rect x="70" y="15" width="100" height="120" rx="16" fill="#fff" stroke="${d}" stroke-width="2"/>
          <g fill="none" stroke="${c}" stroke-width="4">
            <circle cx="120" cy="75" r="10"/><circle cx="120" cy="75" r="24"/><circle cx="120" cy="75" r="38"/></g>
          <circle cx="120" cy="75" r="5" fill="${c}"/>
        </svg>`;
      case 'fan-ceiling':
        return `<svg viewBox="0 0 240 150" class="card-illu">
          <g transform="translate(120 75)">
            <g fill="${c}">
              <rect x="-9" y="-58" width="18" height="48" rx="8"/>
              <rect x="-9" y="10" width="18" height="48" rx="8"/>
              <rect x="10" y="-9" width="48" height="18" rx="8"/>
              <rect x="-58" y="-9" width="48" height="18" rx="8"/></g>
            <circle r="15" fill="${d}"/><circle r="6" fill="#fff"/></g>
        </svg>`;
      default: /* fan-stand */
        return `<svg viewBox="0 0 240 150" class="card-illu">
          <g fill="none" stroke="${c}" stroke-width="3"><circle cx="120" cy="58" r="14"/><circle cx="120" cy="58" r="28"/><circle cx="120" cy="58" r="42"/></g>
          <circle cx="120" cy="58" r="7" fill="${c}"/>
          <path d="M120 100v34" stroke="${d}" stroke-width="4" stroke-linecap="round"/>
          <path d="M102 138h36" stroke="${d}" stroke-width="4" stroke-linecap="round"/>
        </svg>`;
    }
  }

  /* ------------------------ barcode (SVG) ----------------------------- */
  function barcodeSVG(value, h = 38) {
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

  /* --------------------- EU energy label (HTML) ----------------------- */
  const SCALE = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const ECOL = { A: '#00a651', B: '#50b848', C: '#bfd730', D: '#fff200', E: '#fdb913', F: '#f37021', G: '#ed1c24' };
  function energyLadder(rating) {
    return '<div class="energy">' + SCALE.map((g) =>
      `<span class="bar${g === rating ? '' : ' dim'}" data-g="${g}">${g}</span>`).join('') + '</div>';
  }
  function energyBadge(rating) {
    const dark = rating === 'C' || rating === 'D';
    return `<span class="energy-badge"><span class="let" style="background:${ECOL[rating]};color:${dark ? '#1c2226' : '#fff'}">${rating}</span>ENERGY</span>`;
  }

  /* ------------------------- product card ----------------------------- */
  function specRows(p, limit) {
    const keys = Object.keys(p.specs).slice(0, limit || 4);
    return keys.map((k) => `<tr><th>${k}</th><td>${p.specs[k]}</td></tr>`).join('');
  }

  function productCard(p) {
    const media = p.photo
      ? `<img src="${p.photo}" alt="${p.name}" class="card-illu">`
      : illustration(p.kind, p.color);
    return `
    <article class="card reveal" data-id="${p.id}">
      <div class="card-media">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <button class="view3d" data-view3d="${p.id}">${I.cube}<span>3D PACK</span></button>
        ${media}
      </div>
      <div class="card-body">
        <div class="card-brand">${p.brand}</div>
        <h3 class="card-name">${p.name}</h3>
        <div class="card-feats">${(p.features || []).map((f) => `<span class="chip">${f}</span>`).join('')}</div>
        <table class="spec-table"><caption>CLIMATE FACTS</caption>${specRows(p)}</table>
        <div class="tag-row">
          ${energyLadder(p.rating)}
          <div style="text-align:center">${barcodeSVG(p.barcode)}<div class="barcode-num">${p.barcode}</div></div>
        </div>
        <div class="card-foot">
          <div class="price"><span class="cur">€</span><span class="amt">${p.price.toFixed(2).replace('.', ',')}</span><span class="vat">incl. 21% BTW</span></div>
          <button class="add-btn" data-add="${p.id}">${I.cart}<span>ADD</span></button>
        </div>
      </div>
    </article>`;
  }

  /* ---------------------------- render -------------------------------- */
  function renderCatalog() {
    CATEGORIES.forEach((cat) => {
      const host = $(`[data-cat="${cat.id}"]`);
      if (!host) return;
      host.innerHTML = PRODUCTS.filter((p) => p.category === cat.id).map(productCard).join('');
    });

    const svc = $('#svc-grid');
    if (svc) svc.innerHTML = SERVICES.map((s) => `
      <div class="svc-card reveal">
        <div class="svc-icon">${I[s.icon] || I.tools}</div>
        <h3>${s.name}</h3>
        <p>${s.desc}</p>
        <ul class="svc-points">${s.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>
        <div class="svc-price">${s.from === 0 ? 'FREE' : 'from ' + euro(s.from)} <span>${s.from === 0 ? '· no obligation' : '· incl. BTW'}</span></div>
      </div>`).join('');

    const rev = $('#review-grid');
    if (rev) rev.innerHTML = REVIEWS.map((r) => `
      <div class="review reveal">
        <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
        <p>"${r.text}"</p>
        <div class="who"><b>${r.name} · ${r.place}</b><span>${r.product} · ${r.date}</span></div>
      </div>`).join('');

    bindProductButtons();
  }

  function findProduct(id) { return PRODUCTS.find((p) => p.id === id); }

  function bindProductButtons() {
    $$('[data-add]').forEach((b) => b.addEventListener('click', () => {
      Cart.add(b.getAttribute('data-add'));
      b.classList.add('added'); b.querySelector('span').textContent = 'ADDED';
      setTimeout(() => { b.classList.remove('added'); b.querySelector('span').textContent = 'ADD'; }, 1100);
    }));
    $$('[data-view3d]').forEach((b) => b.addEventListener('click', () => Modal.open(b.getAttribute('data-view3d'))));
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
      Toast.show(`${p.name} added to receipt`);
    }
    function setQty(id, q) {
      const it = items.find((i) => i.id === id);
      if (!it) return;
      it.qty = Math.max(0, q);
      if (it.qty === 0) items = items.filter((i) => i.id !== id);
      save(); render();
    }
    function remove(id) { items = items.filter((i) => i.id !== id); save(); render(); }
    function count() { return items.reduce((s, i) => s + i.qty, 0); }
    function totals() {
      const gross = items.reduce((s, i) => s + (findProduct(i.id)?.price || 0) * i.qty, 0);
      const net = gross / (1 + STORE.vatRate);
      return { gross, net, vat: gross - net };
    }

    function pulse() {
      const c = $('#cart-count');
      if (window.gsap) gsap.fromTo(c, { scale: 1.6 }, { scale: 1, duration: 0.4, ease: 'back.out(3)' });
    }

    function render() {
      const c = $('#cart-count'); if (c) c.textContent = count();
      const list = $('#cart-items'), empty = $('#cart-empty');
      if (!list) return;
      if (!items.length) {
        list.innerHTML = '';
        empty.style.display = 'block';
      } else {
        empty.style.display = 'none';
        list.innerHTML = items.map((i) => {
          const p = findProduct(i.id); if (!p) return '';
          return `<div class="ci">
            <div class="ci-thumb">${illustration(p.kind, p.color).replace('class="card-illu"', '')}</div>
            <div>
              <div class="ci-name">${p.name}</div>
              <div class="ci-meta">${p.brand} · ⚡${p.rating} · ${p.barcode}</div>
              <div class="ci-qty">
                <button data-dec="${p.id}">−</button><span>${i.qty}</span><button data-inc="${p.id}">+</button>
              </div>
            </div>
            <div class="ci-right">
              <div class="ci-price">${euro(p.price * i.qty)}</div>
              <button class="ci-remove" data-rm="${p.id}">remove</button>
            </div>
          </div>`;
        }).join('');
        $$('[data-inc]', list).forEach((b) => b.onclick = () => setQty(b.dataset.inc, qtyOf(b.dataset.inc) + 1));
        $$('[data-dec]', list).forEach((b) => b.onclick = () => setQty(b.dataset.dec, qtyOf(b.dataset.dec) - 1));
        $$('[data-rm]', list).forEach((b) => b.onclick = () => remove(b.dataset.rm));
      }
      const t = totals();
      $('#sum-sub').textContent = euro(t.net);
      $('#sum-vat').textContent = euro(t.vat);
      $('#sum-total').textContent = euro(t.gross);
      $('#sum-items').textContent = count() + (count() === 1 ? ' item' : ' items');
      const co = $('#checkout-btn'); if (co) co.disabled = !items.length;
    }
    function qtyOf(id) { const it = items.find((i) => i.id === id); return it ? it.qty : 0; }

    function init() {
      const meta = $('#receipt-meta');
      if (meta) meta.innerHTML = `<span>REF ${ref}</span><span>${new Date().toLocaleDateString('nl-NL')}</span>`;
      const bc = $('#drawer-barcode');
      if (bc) bc.innerHTML = barcodeSVG(ref.replace(/\D/g, '') || '000000', 44) + `<div class="barcode-num">${ref}</div>`;
      render();
    }

    return { add, setQty, remove, count, totals, items: () => items, ref: () => ref, init, render };
  })();

  /* ----------------------------- DRAWER ------------------------------- */
  function openDrawer() { $('#drawer').classList.add('open'); $('#drawer-overlay').classList.add('open'); }
  function closeDrawer() { $('#drawer').classList.remove('open'); $('#drawer-overlay').classList.remove('open'); }

  /* ----------------------------- TOAST -------------------------------- */
  const Toast = (function () {
    let timer;
    function show(msg) {
      const t = $('#toast'); if (!t) return;
      $('#toast-msg').textContent = msg;
      t.classList.add('show');
      clearTimeout(timer); timer = setTimeout(() => t.classList.remove('show'), 2200);
    }
    return { show };
  })();

  /* ---------------------------- 3D MODAL ------------------------------ */
  const Modal = (function () {
    let viewer = null;
    function open(id) {
      const p = findProduct(id); if (!p) return;
      const ov = $('#modal-overlay'); ov.classList.add('open');
      $('#m-brand').textContent = p.brand;
      $('#m-name').textContent = p.name;
      $('#m-energy').innerHTML = energyBadge(p.rating) + energyLadder(p.rating);
      $('#m-specs').innerHTML = `<caption>CLIMATE FACTS</caption>` + Object.keys(p.specs).map((k) => `<tr><th>${k}</th><td>${p.specs[k]}</td></tr>`).join('');
      $('#m-price').textContent = euro(p.price);
      $('#m-barcode').innerHTML = barcodeSVG(p.barcode, 44) + `<div class="barcode-num">${p.barcode}</div>`;
      $('#m-add').onclick = () => { Cart.add(p.id); close(); openDrawer(); };
      const stage = $('#modal-stage');
      if (window.ClimaScene && ClimaScene.available) {
        if (!viewer) viewer = ClimaScene.createViewer(stage, p, { autoSpeed: 0.006 });
        else viewer.setProduct(p);
      }
    }
    function close() { $('#modal-overlay').classList.remove('open'); }
    return { open, close };
  })();

  /* --------------------------- QUOTE FORM ----------------------------- */
  function initForm() {
    const form = $('#quote-form'); if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      const fields = ['name', 'email', 'postcode', 'interest'];
      fields.forEach((f) => {
        const input = form.elements[f];
        const err = $(`[data-err="${f}"]`, form);
        let msg = '';
        if (!input.value.trim()) msg = 'Required';
        else if (f === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value)) msg = 'Invalid email';
        else if (f === 'postcode' && !/^\d{4}\s?[a-z]{2}$/i.test(input.value)) msg = 'e.g. 7511 AB';
        if (err) err.textContent = msg;
        if (msg) ok = false;
      });
      if (!ok) return;
      const t = Cart.totals();
      const cartLine = Cart.count() ? `${Cart.count()} item(s) · ${euro(t.gross)} on receipt ${Cart.ref()}` : 'no products on receipt yet';
      Toast.show('Quotation request sent ✓');
      $('#quote-result').innerHTML =
        `<div class="form-note" style="color:var(--green);font-weight:700">✓ Thanks ${form.elements.name.value.split(' ')[0]} — we'll email a tailored quote to ${form.elements.email.value} within one working day.</div>
         <div class="form-note">Attached basket: ${cartLine}.</div>`;
      form.reset();
    });
  }

  /* --------------------------- HERO 3D + GSAP ------------------------- */
  function initHero() {
    const stage = $('#hero-stage');
    if (!stage) return;
    const featured = PRODUCTS.filter((p) => p.category === 'featured');
    if (window.ClimaScene && ClimaScene.available) {
      const viewer = ClimaScene.createViewer(stage, featured[0], { autoSpeed: 0.005 });
      let idx = 0;
      setInterval(() => { idx = (idx + 1) % featured.length; viewer.setProduct(featured[idx]); }, 6500);
    } else {
      stage.innerHTML = '<div class="fallback">' + illustration(featured[0].kind, featured[0].color) + '<br>3D packaging needs WebGL.</div>';
    }
  }

  function initAnimations() {
    if (!window.gsap) {
      // No animation library available — make sure nothing stays hidden.
      $$('.reveal').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; });
      return;
    }
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    gsap.from('.site-header', { y: -70, opacity: 0, duration: 0.7, ease: 'power3.out' });
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.hero .eyebrow', { y: 20, opacity: 0, duration: 0.5 })
      .from('.hero h1', { y: 30, opacity: 0, duration: 0.6 }, '-=0.2')
      .from('.hero .lead', { y: 24, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.hero-actions .btn', { y: 20, opacity: 0, duration: 0.4, stagger: 0.1 }, '-=0.2')
      .from('.hero-badge', { y: 16, opacity: 0, duration: 0.4, stagger: 0.08 }, '-=0.2')
      .from('.stage', { scale: 0.9, opacity: 0, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.7');

    if (window.ScrollTrigger) {
      $$('.reveal').forEach((el) => {
        gsap.to(el, {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });
      $$('.section-head').forEach((el) => {
        gsap.from(el, { y: 24, opacity: 0, duration: 0.6, scrollTrigger: { trigger: el, start: 'top 90%' } });
      });
    } else {
      $$('.reveal').forEach((el) => { el.style.opacity = 1; el.style.transform = 'none'; });
    }
  }

  /* ------------------------------- NAV -------------------------------- */
  function initNav() {
    $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = $(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); $('#main-nav').classList.remove('open'); }
    }));
    $('#menu-toggle')?.addEventListener('click', () => $('#main-nav').classList.toggle('open'));
    $('#cart-btn').addEventListener('click', openDrawer);
    $('#drawer-close').addEventListener('click', closeDrawer);
    $('#drawer-overlay').addEventListener('click', closeDrawer);
    $('#modal-close').addEventListener('click', Modal.close);
    $('#modal-overlay').addEventListener('click', (e) => { if (e.target.id === 'modal-overlay') Modal.close(); });
    $('#checkout-btn').addEventListener('click', () => {
      if (!Cart.count()) return;
      Toast.show('Opening printable receipt…');
      setTimeout(() => window.print(), 400);
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeDrawer(); Modal.close(); } });
  }

  /* ------------------------------ BOOT -------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    Cart.init();
    initForm();
    initNav();
    initHero();
    initAnimations();
  });
})();
