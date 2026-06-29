/* =====================================================================
   CLIMA MARKT — Three.js packaging engine
   Builds a "supermarket box" for each product: a 3D carton whose faces
   are painted in real time on 2D canvases (brand, energy label, barcode,
   climate-facts spec table). Drag to rotate, auto-spin on idle.

   NOTE: this is the procedural stand-in for a Blender → GLTF asset.
   To use a real model instead, load a GLTF with THREE.GLTFLoader and
   return it from buildPackage() — the viewer code below is agnostic.
   ===================================================================== */
(function (global) {
  'use strict';

  const hasTHREE = typeof THREE !== 'undefined';

  /* ----- canvas helpers ----------------------------------------------- */
  function makeCanvas(w, h) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return { c, x: c.getContext('2d') };
  }

  function roundRect(x, ctx, rx, ry, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(rx + r, ry);
    ctx.arcTo(rx + w, ry, rx + w, ry + h, r);
    ctx.arcTo(rx + w, ry + h, rx, ry + h, r);
    ctx.arcTo(rx, ry + h, rx, ry, r);
    ctx.arcTo(rx, ry, rx + w, ry, r);
    ctx.closePath();
  }

  function drawBarcode(ctx, x, y, w, h, seedStr) {
    // deterministic bars from the digit string
    let seed = 0;
    for (let i = 0; i < seedStr.length; i++) seed = (seed * 31 + seedStr.charCodeAt(i)) >>> 0;
    const rng = () => { seed = (seed * 1103515245 + 12345) >>> 0; return (seed >>> 16) / 65535; };
    ctx.fillStyle = '#ffffff'; ctx.fillRect(x, y, w, h);
    ctx.fillStyle = '#11181d';
    let cx = x + 4;
    while (cx < x + w - 4) {
      const bw = 1 + Math.floor(rng() * 4);
      if (rng() > 0.32) ctx.fillRect(cx, y, bw, h);
      cx += bw + (1 + Math.floor(rng() * 3));
    }
  }

  const ENERGY_COLORS = {
    A: '#00a651', B: '#50b848', C: '#bfd730', D: '#fff200',
    E: '#fdb913', F: '#f37021', G: '#ed1c24',
  };

  /* ----- per-kind device silhouette drawn onto packaging -------------- */
  function drawDevice(ctx, kind, cx, cy, s, color) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.lineWidth = s * 0.018;
    ctx.strokeStyle = '#1c2226';
    if (kind === 'split') {
      ctx.fillStyle = '#ffffff';
      roundRect(0, ctx, -s * 0.5, -s * 0.18, s, s * 0.34, s * 0.06);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = color;
      ctx.fillRect(-s * 0.46, -s * 0.02, s * 0.92, s * 0.06);
      ctx.fillStyle = '#9fb4c2';
      ctx.fillRect(-s * 0.4, -s * 0.12, s * 0.8, s * 0.015);
      ctx.fillRect(-s * 0.4, -s * 0.09, s * 0.8, s * 0.015);
    } else if (kind === 'portable') {
      ctx.fillStyle = '#ffffff';
      roundRect(0, ctx, -s * 0.26, -s * 0.42, s * 0.52, s * 0.84, s * 0.07);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = color;
      roundRect(0, ctx, -s * 0.2, -s * 0.36, s * 0.4, s * 0.22, s * 0.04);
      ctx.fill();
      ctx.strokeStyle = '#9fb4c2';
      for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(-s * 0.18, s * 0.04 + i * s * 0.05); ctx.lineTo(s * 0.18, s * 0.04 + i * s * 0.05); ctx.stroke(); }
    } else if (kind === 'ventilation') {
      ctx.fillStyle = '#ffffff';
      roundRect(0, ctx, -s * 0.4, -s * 0.4, s * 0.8, s * 0.8, s * 0.08);
      ctx.fill(); ctx.stroke();
      ctx.strokeStyle = color; ctx.lineWidth = s * 0.04;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath(); ctx.arc(0, 0, s * 0.08 + i * s * 0.06, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.fillStyle = color; ctx.beginPath(); ctx.arc(0, 0, s * 0.05, 0, Math.PI * 2); ctx.fill();
    } else if (kind === 'fan-ceiling') {
      ctx.fillStyle = color;
      for (let i = 0; i < 4; i++) {
        ctx.save(); ctx.rotate((i * Math.PI) / 2);
        roundRect(0, ctx, -s * 0.06, -s * 0.46, s * 0.12, s * 0.4, s * 0.04);
        ctx.fill(); ctx.restore();
      }
      ctx.fillStyle = '#1c2226'; ctx.beginPath(); ctx.arc(0, 0, s * 0.1, 0, Math.PI * 2); ctx.fill();
    } else { // fan-stand
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(0, -s * 0.18, s * 0.34, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.strokeStyle = color; ctx.lineWidth = s * 0.025;
      for (let i = 1; i <= 4; i++) { ctx.beginPath(); ctx.arc(0, -s * 0.18, i * s * 0.07, 0, Math.PI * 2); ctx.stroke(); }
      ctx.fillStyle = color; ctx.beginPath(); ctx.arc(0, -s * 0.18, s * 0.05, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#1c2226'; ctx.lineWidth = s * 0.03;
      ctx.beginPath(); ctx.moveTo(0, s * 0.16); ctx.lineTo(0, s * 0.42); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-s * 0.18, s * 0.44); ctx.lineTo(s * 0.18, s * 0.44); ctx.stroke();
    }
    ctx.restore();
  }

  /* ----- face textures ------------------------------------------------ */
  function frontTexture(p) {
    const { c, x } = makeCanvas(540, 700);
    // paper
    x.fillStyle = '#ffffff'; x.fillRect(0, 0, 540, 700);
    // subtle grid
    x.strokeStyle = 'rgba(29,127,184,0.06)'; x.lineWidth = 1;
    for (let i = 26; i < 700; i += 26) { x.beginPath(); x.moveTo(0, i); x.lineTo(540, i); x.stroke(); }
    // top blue panel
    const g = x.createLinearGradient(0, 0, 540, 130);
    g.addColorStop(0, p.color); g.addColorStop(1, '#1d7fb8');
    x.fillStyle = g; x.fillRect(0, 0, 540, 118);
    x.fillStyle = '#ffffff';
    x.font = '700 22px "Space Mono", monospace';
    x.fillText(p.brand, 28, 50);
    x.font = '700 14px "Space Mono", monospace';
    x.fillText('CLIMA MARKT · CLIMATE GOODS', 28, 78);
    if (p.badge) {
      x.fillStyle = '#11181d';
      roundRect(0, x, 540 - 28 - 150, 26, 150, 30, 8); x.fill();
      x.fillStyle = '#fff'; x.font = '700 13px "Space Mono", monospace';
      x.textAlign = 'center'; x.fillText(p.badge, 540 - 28 - 75, 46); x.textAlign = 'left';
    }
    // product name
    x.fillStyle = '#1c2226'; x.font = '800 34px Inter, sans-serif';
    wrapText(x, p.name, 28, 168, 484, 38);
    // device illustration panel
    x.fillStyle = '#eef5fb'; roundRect(0, x, 28, 210, 484, 250, 16); x.fill();
    drawDevice(x, p.kind, 270, 335, 320, p.color);
    // energy letter badge
    const ec = ENERGY_COLORS[p.rating] || '#00a651';
    roundRect(0, x, 28, 486, 120, 96, 12); x.fillStyle = ec; x.fill();
    x.fillStyle = (p.rating === 'C' || p.rating === 'D') ? '#1c2226' : '#fff';
    x.font = '800 64px Inter, sans-serif'; x.textAlign = 'center';
    x.fillText(p.rating, 88, 556);
    x.font = '700 11px "Space Mono", monospace';
    x.fillText('ENERGY', 88, 506); x.textAlign = 'left';
    // key facts mini
    x.fillStyle = '#4a555c'; x.font = '700 16px "Space Mono", monospace';
    const firstKey = Object.keys(p.specs)[0];
    x.fillText(firstKey.toUpperCase(), 168, 512);
    x.fillStyle = '#1c2226'; x.font = '800 26px Inter, sans-serif';
    x.fillText(p.specs[firstKey], 168, 544);
    x.fillStyle = '#4a555c'; x.font = '700 13px "Space Mono", monospace';
    x.fillText('NOISE ' + (p.specs['Noise level'] || '—'), 168, 572);
    // price
    x.fillStyle = '#1c2226'; x.font = '800 40px "Space Mono", monospace';
    x.textAlign = 'right'; x.fillText('€ ' + p.price.toFixed(2), 512, 556);
    x.font = '700 12px "Space Mono", monospace'; x.fillStyle = '#4a555c';
    x.fillText('incl. 21% BTW', 512, 576); x.textAlign = 'left';
    // barcode
    drawBarcode(x, 28, 612, 484, 58, p.barcode);
    x.fillStyle = '#1c2226'; x.font = '700 15px "Space Mono", monospace';
    x.textAlign = 'center';
    x.fillText(p.barcode.split('').join(' '), 270, 690); x.textAlign = 'left';
    return canvasTex(c);
  }

  function backTexture(p) {
    const { c, x } = makeCanvas(540, 700);
    x.fillStyle = '#ffffff'; x.fillRect(0, 0, 540, 700);
    x.fillStyle = '#1c2226';
    x.font = '800 30px Inter, sans-serif';
    x.fillText('CLIMATE FACTS', 28, 56);
    x.font = '700 13px "Space Mono", monospace'; x.fillStyle = '#4a555c';
    x.fillText(p.brand + ' · ' + p.name, 28, 80);
    // top rule
    x.fillStyle = '#1c2226'; x.fillRect(28, 96, 484, 5);
    let y = 132;
    x.font = '700 18px "Space Mono", monospace';
    Object.keys(p.specs).forEach((k) => {
      x.fillStyle = '#4a555c'; x.textAlign = 'left';
      x.fillText(k, 28, y);
      x.fillStyle = '#1c2226'; x.textAlign = 'right';
      x.fillText(String(p.specs[k]), 512, y);
      x.strokeStyle = '#d8e0e8'; x.lineWidth = 1; x.setLineDash([3, 4]);
      x.beginPath(); x.moveTo(28, y + 12); x.lineTo(512, y + 12); x.stroke(); x.setLineDash([]);
      y += 46;
    });
    x.textAlign = 'left';
    // features chips
    y += 6; x.fillStyle = '#1c2226'; x.font = '700 13px "Space Mono", monospace';
    x.fillText('FEATURES', 28, y); y += 22;
    let cx = 28;
    x.font = '700 14px "Space Mono", monospace';
    (p.features || []).forEach((f) => {
      const w = x.measureText(f).width + 28;
      if (cx + w > 512) { cx = 28; y += 38; }
      x.fillStyle = '#eef5fb'; roundRect(0, x, cx, y - 18, w, 28, 8); x.fill();
      x.fillStyle = '#1d7fb8'; x.fillText(f, cx + 14, y);
      cx += w + 10;
    });
    // footer
    x.fillStyle = '#1c2226'; x.fillRect(28, 648, 484, 3);
    x.fillStyle = '#4a555c'; x.font = '700 12px "Space Mono", monospace';
    x.fillText('CLIMA MARKT · Koelstraat 21 · Enschede · climamarkt.nl', 28, 676);
    return canvasTex(c);
  }

  function sideTexture(p, dark) {
    const { c, x } = makeCanvas(220, 700);
    x.fillStyle = dark ? p.color : '#11181d'; x.fillRect(0, 0, 220, 700);
    x.save(); x.translate(110, 350); x.rotate(-Math.PI / 2);
    x.fillStyle = '#ffffff'; x.font = '800 40px Inter, sans-serif'; x.textAlign = 'center';
    x.fillText(p.brand, 0, -10);
    x.font = '700 18px "Space Mono", monospace';
    x.fillText(p.name.toUpperCase(), 0, 28);
    x.restore();
    drawBarcode(x, 40, 600, 140, 44, p.barcode + '7');
    return canvasTex(c);
  }

  function capTexture(p, top) {
    const { c, x } = makeCanvas(540, 220);
    x.fillStyle = '#f3f9fe'; x.fillRect(0, 0, 540, 220);
    x.strokeStyle = p.color; x.lineWidth = 8; x.strokeRect(16, 16, 508, 188);
    x.fillStyle = '#1c2226'; x.textAlign = 'center';
    x.font = '800 30px Inter, sans-serif';
    x.fillText(top ? 'CLIMA MARKT' : p.brand, 270, 100);
    x.font = '700 16px "Space Mono", monospace'; x.fillStyle = '#4a555c';
    x.fillText(top ? 'KEEP UPRIGHT · THIS WAY UP ↑' : 'EAN ' + p.barcode, 270, 140);
    return canvasTex(c);
  }

  function wrapText(ctx, text, x0, y0, maxW, lh) {
    const words = text.split(' '); let line = ''; let y = y0;
    for (const w of words) {
      const test = line ? line + ' ' + w : w;
      if (ctx.measureText(test).width > maxW && line) { ctx.fillText(line, x0, y); line = w; y += lh; }
      else line = test;
    }
    ctx.fillText(line, x0, y);
  }

  function canvasTex(c) {
    const t = new THREE.CanvasTexture(c);
    if ('SRGBColorSpace' in THREE) t.colorSpace = THREE.SRGBColorSpace;
    else if ('sRGBEncoding' in THREE) t.encoding = THREE.sRGBEncoding;
    t.anisotropy = 4;
    return t;
  }

  /* ----- the 3D box --------------------------------------------------- */
  function buildPackage(p) {
    const W = 2.7, H = 3.5, D = 1.25;
    const geo = new THREE.BoxGeometry(W, H, D);
    // material order: +x, -x, +y, -y, +z, -z
    const mats = [
      new THREE.MeshStandardMaterial({ map: sideTexture(p, true), roughness: 0.55, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ map: sideTexture(p, false), roughness: 0.55, metalness: 0.05 }),
      new THREE.MeshStandardMaterial({ map: capTexture(p, true), roughness: 0.6, metalness: 0.04 }),
      new THREE.MeshStandardMaterial({ map: capTexture(p, false), roughness: 0.6, metalness: 0.04 }),
      new THREE.MeshStandardMaterial({ map: frontTexture(p), roughness: 0.45, metalness: 0.04 }),
      new THREE.MeshStandardMaterial({ map: backTexture(p), roughness: 0.5, metalness: 0.04 }),
    ];
    const mesh = new THREE.Mesh(geo, mats);
    const group = new THREE.Group();
    group.add(mesh);
    group.userData.dispose = () => {
      geo.dispose();
      mats.forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); });
    };
    return group;
  }

  /* ----- viewer ------------------------------------------------------- */
  function createViewer(container, product, opts) {
    opts = opts || {};
    if (!hasTHREE) {
      container.innerHTML = '<div class="fallback">3D viewer needs WebGL · enable it to see the packaging spin.</div>';
      return { setProduct() {}, destroy() {} };
    }

    const scene = new THREE.Scene();
    const w = container.clientWidth || 400;
    const h = container.clientHeight || 400;
    const camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
    camera.position.set(0, 0.2, 7.4);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (e) {
      container.innerHTML = '<div class="fallback">WebGL unavailable in this browser.</div>';
      return { setProduct() {}, destroy() {} };
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    if ('outputColorSpace' in renderer && 'SRGBColorSpace' in THREE) renderer.outputColorSpace = THREE.SRGBColorSpace;
    else if ('outputEncoding' in renderer && 'sRGBEncoding' in THREE) renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.78));
    const key = new THREE.DirectionalLight(0xffffff, 0.95); key.position.set(4, 6, 6); scene.add(key);
    const rim = new THREE.DirectionalLight(0x6ec6f0, 0.6); rim.position.set(-5, 2, -4); scene.add(rim);
    const fill = new THREE.DirectionalLight(0xffffff, 0.35); fill.position.set(0, -4, 3); scene.add(fill);

    let pkg = buildPackage(product);
    scene.add(pkg);

    // interaction
    let dragging = false, px = 0, py = 0;
    let targetRY = -0.5, targetRX = -0.08, ry = targetRY, rx = targetRX;
    let autoSpeed = opts.autoSpeed != null ? opts.autoSpeed : 0.0045;
    let spin = autoSpeed;

    const el = renderer.domElement;
    function down(e) { dragging = true; spin = 0; const t = e.touches ? e.touches[0] : e; px = t.clientX; py = t.clientY; }
    function move(e) {
      if (!dragging) return;
      const t = e.touches ? e.touches[0] : e;
      targetRY += (t.clientX - px) * 0.01;
      targetRX += (t.clientY - py) * 0.01;
      targetRX = Math.max(-0.9, Math.min(0.9, targetRX));
      px = t.clientX; py = t.clientY;
      if (e.cancelable) e.preventDefault();
    }
    function up() { dragging = false; spin = autoSpeed; }
    el.addEventListener('mousedown', down); window.addEventListener('mousemove', move); window.addEventListener('mouseup', up);
    el.addEventListener('touchstart', down, { passive: true });
    el.addEventListener('touchmove', move, { passive: false });
    el.addEventListener('touchend', up);
    el.addEventListener('mouseenter', () => { if (!dragging) spin = autoSpeed * 0.25; });
    el.addEventListener('mouseleave', () => { if (!dragging) spin = autoSpeed; });

    let raf, alive = true;
    function loop() {
      if (!alive) return;
      raf = requestAnimationFrame(loop);
      if (!dragging) targetRY += spin;
      ry += (targetRY - ry) * 0.12;
      rx += (targetRX - rx) * 0.12;
      pkg.rotation.y = ry; pkg.rotation.x = rx;
      pkg.position.y = Math.sin(Date.now() * 0.0009) * 0.06;
      renderer.render(scene, camera);
    }
    loop();

    function resize() {
      const nw = container.clientWidth, nh = container.clientHeight;
      if (!nw || !nh) return;
      camera.aspect = nw / nh; camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    }
    const ro = ('ResizeObserver' in window) ? new ResizeObserver(resize) : null;
    if (ro) ro.observe(container); else window.addEventListener('resize', resize);

    return {
      setProduct(np) {
        if (pkg) { scene.remove(pkg); if (pkg.userData.dispose) pkg.userData.dispose(); }
        pkg = buildPackage(np); scene.add(pkg);
        targetRY = -0.5; targetRX = -0.08;
      },
      resetView() { targetRY = -0.5; targetRX = -0.08; },
      destroy() {
        alive = false; cancelAnimationFrame(raf);
        if (ro) ro.disconnect(); else window.removeEventListener('resize', resize);
        window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up);
        if (pkg && pkg.userData.dispose) pkg.userData.dispose();
        renderer.dispose();
        if (el.parentNode) el.parentNode.removeChild(el);
      },
    };
  }

  global.ClimaScene = { createViewer, available: hasTHREE };
})(window);
