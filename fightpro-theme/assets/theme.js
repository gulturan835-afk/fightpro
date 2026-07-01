/* FightPro theme — front-end interactions
   Cart (AJAX), mobile nav, expanding search, scroll-reveal, quantity steppers. */
(function () {
  'use strict';
  var routes = window.routes || {};
  var strings = window.cartStrings || {};

  /* ---- Header shadow on scroll ---- */
  var hdr = document.getElementById('hdr');
  if (hdr) {
    var onScroll = function () { hdr.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile navigation ---- */
  var ham = document.getElementById('ham');
  var mnav = document.getElementById('mnav');
  if (ham && mnav) {
    ham.addEventListener('click', function () {
      var open = mnav.classList.toggle('open');
      ham.classList.toggle('open', open);
      ham.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mnav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        mnav.classList.remove('open'); ham.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
      }
    });
  }

  /* ---- Expanding header search ---- */
  var searchForm = document.querySelector('.hdr-search');
  if (searchForm) {
    var searchBtn = searchForm.querySelector('button');
    var searchInput = searchForm.querySelector('input');
    if (searchBtn && searchInput) {
      searchBtn.addEventListener('click', function (e) {
        if (!searchForm.classList.contains('open')) {
          e.preventDefault();
          searchForm.classList.add('open');
          searchInput.focus();
        } else if (!searchInput.value.trim()) {
          e.preventDefault();
          searchForm.classList.remove('open');
        }
      });
      document.addEventListener('click', function (e) {
        if (!searchForm.contains(e.target) && !searchInput.value.trim()) {
          searchForm.classList.remove('open');
        }
      });
    }
  }

  /* ---- Toast ---- */
  var toastEl;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toastEl.classList.remove('show'); }, 2200);
  }

  function setBadge(count) {
    var badge = document.getElementById('cartBadge');
    if (!badge) return;
    badge.textContent = count;
    badge.classList.remove('pop');
    void badge.offsetWidth;
    badge.classList.add('pop');
  }

  /* ---- AJAX add to cart (product cards) ---- */
  function addToCart(id, qty, name) {
    if (!routes.cart_add_url) return;
    fetch(routes.cart_add_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ items: [{ id: id, quantity: qty || 1 }] })
    })
      .then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
      .then(function (res) {
        if (!res.ok) throw new Error((res.d && res.d.description) || 'error');
        return fetch(routes.cart_url + '.js', { headers: { Accept: 'application/json' } });
      })
      .then(function (r) { return r.json(); })
      .then(function (cart) {
        setBadge(cart.item_count);
        toast((name ? name + ' ' : '') + (strings.added || 'toegevoegd'));
      })
      .catch(function () { toast(strings.error || 'Er ging iets mis'); });
  }

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.js-add');
    if (!btn) return;
    e.preventDefault();
    var id = btn.getAttribute('data-variant-id');
    if (!id) return;
    addToCart(id, 1, btn.getAttribute('data-name') || '');
  });

  /* ---- Quantity steppers (product + cart) ---- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.qty-btn');
    if (!btn) return;
    var box = btn.closest('.qty-box');
    var input = box && box.querySelector('.qty-input');
    if (!input) return;
    var val = parseInt(input.value, 10) || 1;
    val += btn.dataset.dir === 'down' ? -1 : 1;
    if (val < 1) val = 1;
    input.value = val;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });

  /* ---- Scroll reveal ---- */
  var reveal = document.querySelectorAll('.fi, .fl, .fr');
  if ('IntersectionObserver' in window && reveal.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('vis'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveal.forEach(function (el) { io.observe(el); });
  } else {
    reveal.forEach(function (el) { el.classList.add('vis'); });
  }
})();
