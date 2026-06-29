// Hulpfuncties voor weergave: prijzen en SVG-productillustraties.
const { palettes } = require('../data/catalog');

// centen -> "€ 179,95"
function euro(cents) {
  if (cents == null) return '';
  return '€ ' + (cents / 100).toFixed(2).replace('.', ',');
}

const GOLD = '#B8973A';

// Genereert een SVG-illustratie afhankelijk van het soort categorie.
// kind: glove | shield | wrap | bag | rope | apparel
function productArt(product, size = 140) {
  const pal = palettes[product.palette] || { body: '#1A1A1A', cuff: GOLD };
  const kind = product._kind || 'glove';
  const label = (product.brand || '').toUpperCase().slice(0, 9);
  const vb = `0 0 140 140`;
  const head = `<svg width="${size}" height="${size}" viewBox="${vb}" fill="none" role="img" aria-label="${product.name}">`;
  const shadow = `<ellipse cx="70" cy="130" rx="50" ry="7" fill="rgba(0,0,0,.45)"/>`;
  const brandText = `<text x="70" y="80" font-family="Arial" font-size="8" fill="rgba(184,151,58,.55)" text-anchor="middle" letter-spacing="2">${label}</text>`;

  if (kind === 'glove') {
    return head + shadow + `
      <rect x="38" y="96" width="64" height="28" rx="5" fill="#111"/>
      <rect x="38" y="96" width="64" height="11" rx="4" fill="${pal.cuff}"/>
      <path d="M40 57C33 41 31 25 37 14C44 2 56-1 65 2C70 4 70 11 70 11C70 11 70 4 75 2C84-1 96 2 103 14C109 25 107 41 100 57L96 97H44Z" fill="${pal.body}"/>
      <ellipse cx="54" cy="18" rx="10" ry="7" fill="${pal.cuff}"/>
      <ellipse cx="69" cy="11" rx="11" ry="8" fill="${pal.cuff}"/>
      <ellipse cx="85" cy="11" rx="11" ry="8" fill="${pal.cuff}"/>
      <ellipse cx="99" cy="18" rx="10" ry="7" fill="${pal.cuff}"/>
      ${brandText}</svg>`;
  }
  if (kind === 'shield') {
    return head + shadow + `
      <rect x="30" y="40" width="80" height="74" rx="10" fill="#141414" stroke="rgba(184,151,58,.3)" stroke-width="1"/>
      <path d="M47 102C47 80 56 62 70 62C84 62 93 80 93 102" fill="${pal.body}" opacity=".85"/>
      <rect x="30" y="40" width="80" height="16" rx="8" fill="${pal.cuff}" opacity=".85"/>
      ${brandText}</svg>`;
  }
  if (kind === 'wrap') {
    return head + shadow + `
      <rect x="34" y="50" width="72" height="56" rx="8" fill="#141414" stroke="rgba(184,151,58,.3)" stroke-width="1"/>
      <rect x="34" y="50" width="72" height="16" rx="6" fill="${pal.cuff}" opacity=".8"/>
      <circle cx="70" cy="86" r="14" fill="${pal.body}" opacity=".7"/>
      ${brandText}</svg>`;
  }
  if (kind === 'bag') {
    return head + shadow + `
      <rect x="50" y="20" width="40" height="92" rx="14" fill="${pal.body}"/>
      <rect x="50" y="20" width="40" height="14" rx="7" fill="${pal.cuff}"/>
      <rect x="50" y="100" width="40" height="12" rx="6" fill="#111"/>
      ${brandText}</svg>`;
  }
  if (kind === 'rope') {
    return head + shadow + `
      <rect x="40" y="40" width="10" height="40" rx="5" fill="${pal.cuff}"/>
      <rect x="90" y="40" width="10" height="40" rx="5" fill="${pal.cuff}"/>
      <path d="M45 80 C 45 130, 95 130, 95 80" stroke="${pal.body}" stroke-width="4" fill="none"/>
      ${brandText}</svg>`;
  }
  // apparel / fallback
  return head + shadow + `
    <path d="M45 45 L60 35 L80 35 L95 45 L88 60 L82 56 L82 110 L58 110 L58 56 L52 60 Z" fill="${pal.body}"/>
    <path d="M45 45 L60 35 L80 35 L95 45" stroke="${pal.cuff}" stroke-width="3" fill="none"/>
    ${brandText}</svg>`;
}

module.exports = { euro, productArt };
