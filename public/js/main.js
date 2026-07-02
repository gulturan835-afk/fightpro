// ---- Scroll-in animaties ----
const obs = new IntersectionObserver((e) => {
  e.forEach((x) => { if (x.isIntersecting) x.target.classList.add('vis'); });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
document.querySelectorAll('.fi,.fl,.fr').forEach((el) => obs.observe(el));

// ---- Header schaduw bij scrollen ----
const hdr = document.getElementById('hdr');
if (hdr) window.addEventListener('scroll', () => {
  hdr.classList.toggle('scrolled', scrollY > 20);
}, { passive: true });

// ---- Mobiel menu ----
const ham = document.getElementById('ham');
const mnav = document.getElementById('mnav');
if (ham && mnav) {
  ham.addEventListener('click', () => {
    const o = mnav.classList.toggle('open');
    ham.classList.toggle('open', o);
    ham.setAttribute('aria-expanded', o);
    document.body.style.overflow = o ? 'hidden' : '';
  });
  mnav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
    mnav.classList.remove('open'); ham.classList.remove('open');
    ham.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
  }));
}

// ---- Tellers (statistieken-band) ----
function animCnt(el) {
  const tgt = +el.dataset.target;
  const start = el.dataset.start ? +el.dataset.start : 0;
  const suffix = el.dataset.suffix || '';
  const dur = 1800, t0 = performance.now();
  (function upd(now) {
    const t = Math.min((now - t0) / dur, 1), e = 1 - Math.pow(1 - t, 4);
    el.textContent = Math.round(start + (tgt - start) * e) + (t === 1 ? suffix : '');
    if (t < 1) requestAnimationFrame(upd);
  })(t0);
}
const co = new IntersectionObserver((e) => {
  e.forEach((x) => { if (x.isIntersecting && !x.target.dataset.done) { x.target.dataset.done = 1; animCnt(x.target); } });
}, { threshold: 0.5 });
document.querySelectorAll('[data-target]').forEach((el) => co.observe(el));

// ---- Zoekbalk uitklappen ----
const searchForm = document.querySelector('.hdr-search');
if (searchForm) {
  const input = searchForm.querySelector('input');
  searchForm.querySelector('button').addEventListener('click', (ev) => {
    if (!searchForm.classList.contains('open')) {
      ev.preventDefault();
      searchForm.classList.add('open');
      input.focus();
    } else if (!input.value.trim()) {
      ev.preventDefault();
      searchForm.classList.remove('open');
    }
  });
  document.addEventListener('click', (ev) => {
    if (!searchForm.contains(ev.target) && !input.value.trim()) searchForm.classList.remove('open');
  });
}

// ---- Winkelwagen-badge bijwerken ----
function setBadge(n) {
  const b = document.getElementById('cartBadge');
  if (b) {
    b.textContent = n;
    b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
  }
}

// Mini toast
function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

async function addToCart(slug, size, qty) {
  const body = new URLSearchParams({ slug, size: size || '', qty: qty || 1 });
  const res = await fetch('/winkelwagen/toevoegen?ajax=1', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'X-Requested-With': 'fetch' },
    body,
  });
  if (!res.ok) { toast('Er ging iets mis'); return; }
  const data = await res.json();
  setBadge(data.count);
  toast('✓ ' + data.name + ' toegevoegd');
}

// Quick-add knoppen op productkaarten
document.querySelectorAll('.js-add').forEach((btn) => {
  btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    addToCart(btn.dataset.slug, '', 1);
  });
});

// Productpagina: maat + aantal + toevoegen via AJAX
const addForm = document.querySelector('.js-add-form');
if (addForm) {
  const qtyInput = addForm.querySelector('.qty-input');
  const minus = addForm.querySelector('.js-qty-minus');
  const plus = addForm.querySelector('.js-qty-plus');
  if (minus) minus.addEventListener('click', () => {
    qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
  });
  if (plus) plus.addEventListener('click', () => {
    const max = parseInt(qtyInput.max, 10) || 10;
    qtyInput.value = Math.min(max, (parseInt(qtyInput.value, 10) || 1) + 1);
  });
  addForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const slug = addForm.dataset.slug;
    const size = (addForm.querySelector('input[name="size"]:checked') || {}).value || '';
    addToCart(slug, size, qtyInput.value);
  });
}

// Productpagina: galerij-thumbnails wisselen de hoofdfoto
document.querySelectorAll('.pd-thumb').forEach((th) => {
  th.addEventListener('click', () => {
    const main = document.querySelector('.pd-media img');
    if (!main) return;
    main.src = th.dataset.src;
    document.querySelectorAll('.pd-thumb').forEach((x) => x.classList.remove('on'));
    th.classList.add('on');
  });
});
