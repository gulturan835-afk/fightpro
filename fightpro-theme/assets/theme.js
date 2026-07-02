/* FightPro thema — navigatie, animaties en Shopify-cart (AJAX). */
(function () {
  'use strict';

  /* ---- Scroll-in animaties ---- */
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (x) { if (x.isIntersecting) x.target.classList.add('vis'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
  document.querySelectorAll('.fi,.fl,.fr').forEach(function (el) { obs.observe(el); });

  /* ---- Header schaduw ---- */
  var hdr = document.getElementById('hdr');
  if (hdr) window.addEventListener('scroll', function () {
    hdr.classList.toggle('scrolled', scrollY > 20);
  }, { passive: true });

  /* ---- Mobiel menu ---- */
  var ham = document.getElementById('ham');
  var mnav = document.getElementById('mnav');
  if (ham && mnav) {
    ham.addEventListener('click', function () {
      var o = mnav.classList.toggle('open');
      ham.classList.toggle('open', o);
      ham.setAttribute('aria-expanded', o);
      document.body.style.overflow = o ? 'hidden' : '';
    });
    mnav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mnav.classList.remove('open'); ham.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
      });
    });
  }

  /* ---- Tellers ---- */
  function animCnt(el) {
    var tgt = +el.dataset.target;
    var start = el.dataset.start ? +el.dataset.start : 0;
    var suffix = el.dataset.suffix || '';
    var dur = 1800, t0 = performance.now();
    (function upd(now) {
      var t = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - t, 4);
      el.textContent = Math.round(start + (tgt - start) * e) + (t === 1 ? suffix : '');
      if (t < 1) requestAnimationFrame(upd);
    })(t0);
  }
  var co = new IntersectionObserver(function (entries) {
    entries.forEach(function (x) {
      if (x.isIntersecting && !x.target.dataset.done) { x.target.dataset.done = 1; animCnt(x.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(function (el) { co.observe(el); });

  /* ---- Zoekbalk ---- */
  var searchForm = document.querySelector('.hdr-search');
  if (searchForm) {
    var input = searchForm.querySelector('input');
    searchForm.querySelector('button').addEventListener('click', function (ev) {
      if (!searchForm.classList.contains('open')) {
        ev.preventDefault();
        searchForm.classList.add('open');
        input.focus();
      } else if (!input.value.trim()) {
        ev.preventDefault();
        searchForm.classList.remove('open');
      }
    });
    document.addEventListener('click', function (ev) {
      if (!searchForm.contains(ev.target) && !input.value.trim()) searchForm.classList.remove('open');
    });
  }

  /* ---- Cart-badge + toast ---- */
  function setBadge(n) {
    var b = document.getElementById('cartBadge');
    if (b) {
      b.textContent = n;
      b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
    }
  }
  function toast(msg) {
    var t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  /* ---- Toevoegen via Shopify AJAX-cart ---- */
  function addToCart(variantId, qty, name) {
    return fetch(window.routes.cart_add_url + '.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: Number(variantId), quantity: qty || 1 }),
    })
      .then(function (r) { if (!r.ok) throw new Error(); return fetch('/cart.js'); })
      .then(function (r) { return r.json(); })
      .then(function (cart) {
        setBadge(cart.item_count);
        toast('✓ ' + (name || 'Product') + ' toegevoegd');
      })
      .catch(function () { toast('Er ging iets mis'); });
  }

  /* Quick-add op productkaarten */
  document.querySelectorAll('.js-add[data-variant-id]').forEach(function (btn) {
    btn.addEventListener('click', function (ev) {
      ev.preventDefault();
      addToCart(btn.dataset.variantId, 1, btn.dataset.name);
    });
  });

  /* Productpagina: variant (maat) + aantal + toevoegen */
  var addForm = document.querySelector('.js-add-form');
  if (addForm) {
    var qtyInput = addForm.querySelector('.qty-input');
    var minus = addForm.querySelector('.js-qty-minus');
    var plus = addForm.querySelector('.js-qty-plus');
    if (minus) minus.addEventListener('click', function () {
      qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
    });
    if (plus) plus.addEventListener('click', function () {
      qtyInput.value = (parseInt(qtyInput.value, 10) || 1) + 1;
    });
    addForm.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var checked = addForm.querySelector('input[name="id"]:checked');
      var id = checked ? checked.value : addForm.querySelector('input[name="id"]').value;
      addToCart(id, parseInt(qtyInput.value, 10) || 1, addForm.dataset.name);
    });
  }

  /* Productpagina: galerij-thumbnails */
  document.querySelectorAll('.pd-thumb').forEach(function (th) {
    th.addEventListener('click', function () {
      var main = document.querySelector('.pd-media img');
      if (!main) return;
      main.src = th.dataset.src;
      document.querySelectorAll('.pd-thumb').forEach(function (x) { x.classList.remove('on'); });
      th.classList.add('on');
    });
  });
})();
