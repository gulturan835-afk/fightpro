// Bouwt een statische versie van de FightPro-site die je lokaal kunt openen
// (dubbelklikken op index.html). Winkelwagen + afrekenen werken client-side
// via localStorage. De browse-pagina's komen rechtstreeks van de echte server,
// zodat ze er identiek uitzien.
const fs = require('fs');
const path = require('path');
const { categories, products, palettes } = require('./data/catalog');

const OUT = path.join(__dirname, 'fightpro-website');
const PORT = 4123;
process.env.PORT = PORT;

// Start de echte server in-process.
require('./server');

const kindByCat = Object.fromEntries(categories.map((c) => [c.slug, c.kind]));

// ---- Link-herschrijving: server-URLs -> losse bestanden ----
function rewrite(html) {
  return html
    .replace(/href="\/"/g, 'href="index.html"')
    .replace(/href="\/categorie\/([a-z0-9-]+)(\?[^"]*)?"/g, 'href="categorie-$1.html"')
    .replace(/href="\/product\/([a-z0-9-]+)"/g, 'href="product-$1.html"')
    .replace(/href="\/winkelwagen"/g, 'href="winkelwagen.html"')
    .replace(/href="\/afrekenen"/g, 'href="afrekenen.html"')
    .replace(/href="\/#([a-z-]+)"/g, 'href="index.html#$1"')
    .replace(/href="\/zoeken\?q=[^"]*"/g, 'href="index.html"')
    .replace(/action="\/zoeken"\s+method="get"/g, 'onsubmit="return false"')
    .replace(/\/css\/style\.css/g, 'style.css')
    .replace(/\/js\/main\.js/g, 'app-static.js')
    .replace(/\/img\/logo\.png/g, 'logo.png')
    // catalog-data nodig voor winkelwagen-weergave: laad het overal mee in
    .replace(/<script src="app-static\.js"><\/script>/,
      '<script src="catalog-data.js"></script>\n<script src="app-static.js"></script>');
}

function setTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
}

async function get(url) {
  const res = await fetch(`http://localhost:${PORT}${url}`);
  return res.text();
}

async function main() {
  await new Promise((r) => setTimeout(r, 1200)); // server-opstart afwachten
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  // Assets
  fs.copyFileSync(path.join(__dirname, 'public/css/style.css'), path.join(OUT, 'style.css'));
  fs.copyFileSync(path.join(__dirname, 'public/img/logo.png'), path.join(OUT, 'logo.png'));
  fs.writeFileSync(path.join(OUT, 'app-static.js'), APP_JS);
  fs.writeFileSync(path.join(OUT, 'catalog-data.js'), buildCatalogData());

  // Home
  const home = rewrite(await get('/'));
  fs.writeFileSync(path.join(OUT, 'index.html'), home);

  // Header/footer hergebruiken voor de client-side pagina's
  const headerChunk = home.slice(0, home.indexOf('<section class="hero"'));
  const footerChunk = home.slice(home.indexOf('<footer>'));

  // Categorie-pagina's
  for (const c of categories) {
    const html = rewrite(await get(`/categorie/${c.slug}`));
    fs.writeFileSync(path.join(OUT, `categorie-${c.slug}.html`), html);
  }
  // Product-pagina's
  for (const p of products) {
    const html = rewrite(await get(`/product/${p.slug}`));
    fs.writeFileSync(path.join(OUT, `product-${p.slug}.html`), html);
  }

  // Client-side pagina's (winkelwagen / afrekenen / bevestiging)
  const page = (title, middle) =>
    rewrite(setTitle(headerChunk, title) + '\n' + middle + '\n' + footerChunk);

  fs.writeFileSync(path.join(OUT, 'winkelwagen.html'), page('Winkelwagen | FightPro', `
<div class="shop-head"><div class="container">
  <nav class="crumb"><a href="index.html">Home</a> <span>/</span> <span class="cur">Winkelwagen</span></nav>
  <h1 class="shop-title">Winkelwagen</h1>
</div></div>
<section class="sec" style="background:var(--black);padding-top:24px;"><div class="container">
  <div id="app-cart"></div>
</div></section>`));

  fs.writeFileSync(path.join(OUT, 'afrekenen.html'), page('Afrekenen | FightPro', `
<div class="shop-head"><div class="container">
  <nav class="crumb"><a href="index.html">Home</a> <span>/</span> <a href="winkelwagen.html">Winkelwagen</a> <span>/</span> <span class="cur">Afrekenen</span></nav>
  <h1 class="shop-title">Afrekenen</h1>
</div></div>
<section class="sec" style="background:var(--black);padding-top:24px;"><div class="container">
  <div id="app-checkout"></div>
</div></section>`));

  fs.writeFileSync(path.join(OUT, 'bevestiging.html'), page('Bestelling bevestigd | FightPro', `
<section class="sec" style="background:var(--black);min-height:60vh;"><div class="container">
  <div id="app-confirm"></div>
</div></section>`));

  console.log('Statische site gebouwd in:', OUT);
  console.log('Bestanden:', fs.readdirSync(OUT).length);
  process.exit(0);
}

// ---- catalog-data.js (productinfo + helpers voor de browser) ----
function buildCatalogData() {
  const map = {};
  for (const p of products) {
    map[p.slug] = {
      slug: p.slug, name: p.name, brand: p.brand, palette: p.palette,
      price: p.price, old_price: p.oldPrice || null, badge: p.badge || null,
      kind: kindByCat[p.category] || 'glove',
    };
  }
  return 'window.FP=' + JSON.stringify({ products: map, palettes }) + ';\n' + CLIENT_HELPERS;
}

const CLIENT_HELPERS = `
FP.euro=function(c){return c==null?'':'€ '+(c/100).toFixed(2).replace('.',',');};
FP.art=function(p,size){
  size=size||140;var pal=FP.palettes[p.palette]||{body:'#1A1A1A',cuff:'#B8973A'};
  var kind=p.kind||'glove';var label=(p.brand||'').toUpperCase().slice(0,9);
  var head='<svg width="'+size+'" height="'+size+'" viewBox="0 0 140 140" fill="none">';
  var sh='<ellipse cx="70" cy="130" rx="50" ry="7" fill="rgba(0,0,0,.45)"/>';
  var bt='<text x="70" y="80" font-family="Arial" font-size="8" fill="rgba(184,151,58,.55)" text-anchor="middle" letter-spacing="2">'+label+'</text>';
  if(kind==='glove')return head+sh+'<rect x="38" y="96" width="64" height="28" rx="5" fill="#111"/><rect x="38" y="96" width="64" height="11" rx="4" fill="'+pal.cuff+'"/><path d="M40 57C33 41 31 25 37 14C44 2 56-1 65 2C70 4 70 11 70 11C70 11 70 4 75 2C84-1 96 2 103 14C109 25 107 41 100 57L96 97H44Z" fill="'+pal.body+'"/><ellipse cx="54" cy="18" rx="10" ry="7" fill="'+pal.cuff+'"/><ellipse cx="69" cy="11" rx="11" ry="8" fill="'+pal.cuff+'"/><ellipse cx="85" cy="11" rx="11" ry="8" fill="'+pal.cuff+'"/><ellipse cx="99" cy="18" rx="10" ry="7" fill="'+pal.cuff+'"/>'+bt+'</svg>';
  if(kind==='shield')return head+sh+'<rect x="30" y="40" width="80" height="74" rx="10" fill="#141414" stroke="rgba(184,151,58,.3)" stroke-width="1"/><path d="M47 102C47 80 56 62 70 62C84 62 93 80 93 102" fill="'+pal.body+'" opacity=".85"/><rect x="30" y="40" width="80" height="16" rx="8" fill="'+pal.cuff+'" opacity=".85"/>'+bt+'</svg>';
  if(kind==='wrap')return head+sh+'<rect x="34" y="50" width="72" height="56" rx="8" fill="#141414" stroke="rgba(184,151,58,.3)" stroke-width="1"/><rect x="34" y="50" width="72" height="16" rx="6" fill="'+pal.cuff+'" opacity=".8"/><circle cx="70" cy="86" r="14" fill="'+pal.body+'" opacity=".7"/>'+bt+'</svg>';
  if(kind==='bag')return head+sh+'<rect x="50" y="20" width="40" height="92" rx="14" fill="'+pal.body+'"/><rect x="50" y="20" width="40" height="14" rx="7" fill="'+pal.cuff+'"/><rect x="50" y="100" width="40" height="12" rx="6" fill="#111"/>'+bt+'</svg>';
  if(kind==='rope')return head+sh+'<rect x="40" y="40" width="10" height="40" rx="5" fill="'+pal.cuff+'"/><rect x="90" y="40" width="10" height="40" rx="5" fill="'+pal.cuff+'"/><path d="M45 80 C 45 130, 95 130, 95 80" stroke="'+pal.body+'" stroke-width="4" fill="none"/>'+bt+'</svg>';
  return head+sh+'<path d="M45 45 L60 35 L80 35 L95 45 L88 60 L82 56 L82 110 L58 110 L58 56 L52 60 Z" fill="'+pal.body+'"/><path d="M45 45 L60 35 L80 35 L95 45" stroke="'+pal.cuff+'" stroke-width="3" fill="none"/>'+bt+'</svg>';
};
`;

// ---- app-static.js (front-end: animaties, nav, winkelwagen via localStorage) ----
const APP_JS = String.raw`
// Scroll-in animaties
var obs=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting)x.target.classList.add('vis');});},{threshold:.1,rootMargin:'0px 0px -48px 0px'});
document.querySelectorAll('.fi,.fl,.fr').forEach(function(el){obs.observe(el);});
// Header schaduw
var hdr=document.getElementById('hdr');
if(hdr)window.addEventListener('scroll',function(){hdr.classList.toggle('scrolled',scrollY>20);},{passive:true});
// Mobiel menu
var ham=document.getElementById('ham'),mnav=document.getElementById('mnav');
if(ham&&mnav){ham.addEventListener('click',function(){var o=mnav.classList.toggle('open');ham.classList.toggle('open',o);document.body.style.overflow=o?'hidden':'';});
mnav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mnav.classList.remove('open');ham.classList.remove('open');document.body.style.overflow='';});});}
// Tellers
function animCnt(el){var tgt=+el.dataset.target,dur=1800,t0=performance.now(),s=tgt===2020?2010:0;(function upd(now){var t=Math.min((now-t0)/dur,1),e=1-Math.pow(1-t,4);el.textContent=Math.round(s+(tgt-s)*e);if(t<1)requestAnimationFrame(upd);else el.textContent=tgt===288?'288+':tgt;})(t0);}
var co=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting&&!x.target.dataset.done){x.target.dataset.done=1;animCnt(x.target);}});},{threshold:.5});
document.querySelectorAll('[data-target]').forEach(function(el){co.observe(el);});
// Zoekbalk toggle (zoeken zelf is uitgeschakeld in de offline versie)
var sf=document.querySelector('.hdr-search');
if(sf){var inp=sf.querySelector('input');sf.querySelector('button').addEventListener('click',function(ev){ev.preventDefault();sf.classList.toggle('open');if(sf.classList.contains('open'))inp.focus();});}

// ---------- WINKELWAGEN (localStorage) ----------
function getCart(){try{return JSON.parse(localStorage.getItem('fp_cart')||'[]');}catch(e){return [];}}
function setCart(c){localStorage.setItem('fp_cart',JSON.stringify(c));updateBadge();}
function cartCount(){return getCart().reduce(function(n,i){return n+i.qty;},0);}
function updateBadge(){var b=document.getElementById('cartBadge');if(b){b.textContent=cartCount();b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');}}
function lineData(){var c=getCart(),lines=[],sub=0;c.forEach(function(it){var p=window.FP&&FP.products[it.slug];if(!p)return;var lt=p.price*it.qty;sub+=lt;lines.push({it:it,p:p,lt:lt});});var ship=(sub===0||sub>=7500)?0:595;return {lines:lines,sub:sub,ship:ship,tot:sub+ship};}
function addToCart(slug,size,qty){var c=getCart();qty=Math.max(1,parseInt(qty,10)||1);var ex=c.find(function(i){return i.slug===slug&&i.size===(size||'');});if(ex)ex.qty+=qty;else c.push({slug:slug,size:size||'',qty:qty});setCart(c);toast('✓ Toegevoegd aan winkelwagen');}
function toast(msg){var t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';document.body.appendChild(t);}t.textContent=msg;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(function(){t.classList.remove('show');},2600);}
updateBadge();

// Quick-add op kaarten
document.querySelectorAll('.js-add').forEach(function(btn){btn.addEventListener('click',function(ev){ev.preventDefault();addToCart(btn.dataset.slug,'',1);});});
// Productpagina add-form
var af=document.querySelector('.js-add-form');
if(af){var qi=af.querySelector('.qty-input'),mi=af.querySelector('.js-qty-minus'),pl=af.querySelector('.js-qty-plus');
if(mi)mi.addEventListener('click',function(){qi.value=Math.max(1,(parseInt(qi.value,10)||1)-1);});
if(pl)pl.addEventListener('click',function(){var m=parseInt(qi.max,10)||10;qi.value=Math.min(m,(parseInt(qi.value,10)||1)+1);});
af.addEventListener('submit',function(ev){ev.preventDefault();var size=(af.querySelector('input[name=size]:checked')||{}).value||'';addToCart(af.dataset.slug,size,qi.value);});}

// ---------- Winkelwagen-pagina ----------
var cartEl=document.getElementById('app-cart');
function renderCart(){
  var d=lineData();
  if(!d.lines.length){cartEl.innerHTML='<div class="empty-cart"><p class="empty-msg">Je winkelwagen is leeg.</p><a href="categorie-bokshandschoenen.html" class="btn-p btn-lg">Verder winkelen →</a></div>';return;}
  var rows=d.lines.map(function(l){return '<div class="cart-line"><a href="product-'+l.p.slug+'.html" class="cart-thumb">'+FP.art(l.p,90)+'</a>'+
    '<div class="cart-mid"><div class="cart-brand">'+l.p.brand+'</div><a href="product-'+l.p.slug+'.html" class="cart-name">'+l.p.name+'</a>'+(l.it.size?'<div class="cart-size">Maat: '+l.it.size+'</div>':'')+'<div class="cart-unit">'+FP.euro(l.p.price)+' per stuk</div></div>'+
    '<div class="cart-right"><div class="qty-box sm"><button class="qty-btn" data-act="dec" data-slug="'+l.p.slug+'" data-size="'+l.it.size+'">−</button><span class="qty-val">'+l.it.qty+'</span><button class="qty-btn" data-act="inc" data-slug="'+l.p.slug+'" data-size="'+l.it.size+'">+</button></div>'+
    '<div class="cart-line-total">'+FP.euro(l.lt)+'</div><button class="cart-remove" data-act="rm" data-slug="'+l.p.slug+'" data-size="'+l.it.size+'">Verwijderen</button></div></div>';}).join('');
  cartEl.innerHTML='<div class="cart-g"><div class="cart-lines">'+rows+'</div>'+
    '<aside class="cart-summary"><h2 class="sum-title">Overzicht</h2>'+
    '<div class="sum-row"><span>Subtotaal</span><span>'+FP.euro(d.sub)+'</span></div>'+
    '<div class="sum-row"><span>Verzending</span><span>'+(d.ship===0?'Gratis':FP.euro(d.ship))+'</span></div>'+
    (d.ship>0?'<p class="sum-hint">Nog '+FP.euro(7500-d.sub)+' tot gratis verzending.</p>':'')+
    '<div class="sum-total"><span>Totaal</span><span>'+FP.euro(d.tot)+'</span></div>'+
    '<a href="afrekenen.html" class="btn-p btn-lg sum-checkout">Afrekenen →</a>'+
    '<a href="categorie-bokshandschoenen.html" class="sum-cont">← Verder winkelen</a></aside></div>';
  cartEl.querySelectorAll('[data-act]').forEach(function(b){b.addEventListener('click',function(){
    var c=getCart(),i=c.findIndex(function(x){return x.slug===b.dataset.slug&&x.size===b.dataset.size;});if(i<0)return;
    if(b.dataset.act==='inc')c[i].qty++;else if(b.dataset.act==='dec')c[i].qty--;else c[i].qty=0;
    if(c[i].qty<=0)c.splice(i,1);setCart(c);renderCart();});});
}
if(cartEl)renderCart();

// ---------- Afrekenen ----------
var coEl=document.getElementById('app-checkout');
function renderCheckout(){
  var d=lineData();
  if(!d.lines.length){location.href='winkelwagen.html';return;}
  var pays=[['ideal','iDEAL','Betaal direct via je eigen bank'],['creditcard','Creditcard','VISA / Mastercard'],['paypal','PayPal','Betaal met je PayPal-account'],['bancontact','Bancontact','Voor Belgische klanten'],['afterpay','Achteraf betalen','Binnen 14 dagen']];
  var items=d.lines.map(function(l){return '<div class="co-item"><span class="co-item-q">'+l.it.qty+'×</span><span class="co-item-n">'+l.p.brand+' '+l.p.name+(l.it.size?' <small>('+l.it.size+')</small>':'')+'</span><span class="co-item-p">'+FP.euro(l.lt)+'</span></div>';}).join('');
  coEl.innerHTML='<form class="checkout-g" id="coForm" novalidate><div class="checkout-main">'+
    '<div class="co-block"><h2 class="co-h">1 · Gegevens</h2>'+
    field('name','Naam','text')+'<div class="co-row">'+field('email','E-mail','email')+field('phone','Telefoon','tel',true)+'</div>'+
    field('address','Adres','text')+'<div class="co-row">'+field('postcode','Postcode','text')+field('city','Plaats','text')+'</div></div>'+
    '<div class="co-block"><h2 class="co-h">2 · Betaalmethode</h2><div class="pay-opts">'+
    pays.map(function(o,i){return '<label class="pay-opt"><input type="radio" name="payment" value="'+o[0]+'"'+(i===0?' checked':'')+'><span class="pay-card"><span class="pay-name">'+o[1]+'</span><span class="pay-desc">'+o[2]+'</span></span></label>';}).join('')+
    '</div><p class="co-note">🔒 Dit is een demo-betaling. Er wordt geen geld afgeschreven — je bestelling wordt wel aangemaakt en bevestigd.</p></div></div>'+
    '<aside class="checkout-side"><h2 class="sum-title">Je bestelling</h2><div class="co-items">'+items+'</div>'+
    '<div class="sum-row"><span>Subtotaal</span><span>'+FP.euro(d.sub)+'</span></div>'+
    '<div class="sum-row"><span>Verzending</span><span>'+(d.ship===0?'Gratis':FP.euro(d.ship))+'</span></div>'+
    '<div class="sum-total"><span>Totaal</span><span>'+FP.euro(d.tot)+'</span></div>'+
    '<button type="submit" class="btn-p btn-lg sum-checkout">Bestelling plaatsen →</button>'+
    '<a href="winkelwagen.html" class="sum-cont">← Terug naar winkelwagen</a></aside></form>';
  function field(name,label,type,opt){return '<div class="co-field"><label for="'+name+'">'+label+(opt?' <span class="opt">(optioneel)</span>':'')+'</label><input type="'+type+'" id="'+name+'" name="'+name+'"></div>';}
  document.getElementById('coForm').addEventListener('submit',function(ev){ev.preventDefault();
    var f=ev.target,ok=true;['name','email','address','postcode','city'].forEach(function(n){var el=f[n];if(!el.value.trim()){el.classList.add('err');ok=false;}else el.classList.remove('err');});
    if(f.email.value&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.value)){f.email.classList.add('err');ok=false;}
    if(!ok){toast('Vul a.u.b. alle velden in');return;}
    var order={ref:'FP-'+Date.now().toString(36).toUpperCase(),name:f.name.value,email:f.email.value,address:f.address.value,postcode:f.postcode.value,city:f.city.value,payment:f.payment.value,lines:d.lines.map(function(l){return {qty:l.it.qty,size:l.it.size,name:l.p.name,brand:l.p.brand,price:l.p.price,lt:l.lt};}),sub:d.sub,ship:d.ship,tot:d.tot};
    localStorage.setItem('fp_order',JSON.stringify(order));setCart([]);location.href='bevestiging.html';});
}
if(coEl)renderCheckout();

// ---------- Bevestiging ----------
var cfEl=document.getElementById('app-confirm');
if(cfEl){var o=null;try{o=JSON.parse(localStorage.getItem('fp_order'));}catch(e){}
  if(!o){cfEl.innerHTML='<div class="conf-box"><h1 class="conf-title">Geen bestelling gevonden</h1><a href="index.html" class="btn-p btn-lg">Naar home →</a></div>';}
  else{var items=o.lines.map(function(l){return '<div class="conf-item"><span class="co-item-q">'+l.qty+'×</span><span class="co-item-n">'+l.brand+' '+l.name+(l.size?' <small>('+l.size+')</small>':'')+'</span><span class="co-item-p">'+FP.euro(l.lt)+'</span></div>';}).join('');
  cfEl.innerHTML='<div class="conf-box"><div class="conf-check"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>'+
    '<div class="lbl" style="justify-content:center;">Bedankt voor je bestelling</div><h1 class="conf-title">Bestelling <span class="ac">bevestigd</span></h1>'+
    '<p class="conf-sub">We hebben je bestelling ontvangen en een bevestiging gestuurd naar <strong>'+o.email+'</strong>.</p>'+
    '<div class="conf-ref"><div><span class="conf-ref-l">Bestelnummer</span><span class="conf-ref-v">'+o.ref+'</span></div><div><span class="conf-ref-l">Betaalmethode</span><span class="conf-ref-v">'+o.payment+'</span></div><div><span class="conf-ref-l">Status</span><span class="conf-ref-v"><span class="status-pill">betaald</span></span></div></div>'+
    '<div class="conf-items">'+items+'<div class="sum-row" style="margin-top:14px;"><span>Subtotaal</span><span>'+FP.euro(o.sub)+'</span></div><div class="sum-row"><span>Verzending</span><span>'+(o.ship===0?'Gratis':FP.euro(o.ship))+'</span></div><div class="sum-total"><span>Totaal betaald</span><span>'+FP.euro(o.tot)+'</span></div></div>'+
    '<div class="conf-ship"><div class="conf-ship-t">Verzendadres</div><p>'+o.name+'<br>'+o.address+'<br>'+o.postcode+' '+o.city+'</p></div>'+
    '<a href="index.html" class="btn-p btn-lg">Terug naar home →</a></div>';}
}
`;

main().catch((e) => { console.error(e); process.exit(1); });
