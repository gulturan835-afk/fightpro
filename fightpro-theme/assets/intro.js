/* FightPro — Fase 2: scroll-gestuurde 3D intro (Three.js + GSAP ScrollTrigger)
   Camera vliegt langs een CatmullRom-pad door een 'arena'-scene:
   goudstof → gloeiende ringframes → lichtportaal. DOM-hoofdstukken scrubben mee.
   Fallback: statische hero bij geen WebGL, prefers-reduced-motion of lage FPS. */
(function () {
  'use strict';

  var intro = document.getElementById('intro');
  var canvas = document.getElementById('introCanvas');
  if (!intro || !canvas) return;

  var GOLD = 0xb8973a, GOLD_L = 0xd4af5a;
  var isMobile = window.matchMedia('(max-width: 768px)').matches;
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function webglOK() {
    try {
      var c = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl')));
    } catch (e) { return false; }
  }

  /* ---------- Statische fallback ---------- */
  var fellBack = false;
  function useFallback() {
    if (fellBack) return;
    fellBack = true;
    if (window.ScrollTrigger) ScrollTrigger.getAll().forEach(function (st) { st.kill(); });
    if (renderer) { renderer.dispose(); }
    canvas.remove();
    document.getElementById('introFallback').hidden = false;
    var ch1 = document.getElementById('ch1');
    var cta = document.querySelector('#ch3 .cta-row');
    if (cta) { cta.style.marginTop = '36px'; ch1.appendChild(cta); }
    var hint = document.querySelector('.scroll-hint');
    if (hint) hint.remove();
    document.getElementById('ch2').remove();
    document.getElementById('ch3').remove();
    if (window.gsap) gsap.set('#ch1, #ch1 .ltr, #ch1 .ch-sub', { clearProps: 'all', opacity: 1, y: 0 });
  }

  if (!window.THREE || !window.gsap || !window.ScrollTrigger || !webglOK() || reducedMotion) {
    var renderer = null;
    useFallback();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Scene ---------- */
  var scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x080808, 0.05);

  var camera = new THREE.PerspectiveCamera(62, 1, 0.1, 80);
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x080808, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  function resize() {
    var w = intro.clientWidth, h = intro.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  /* Vloergrid — echo van het rasterpatroon uit de bestaande hero */
  var grid = new THREE.GridHelper(90, 60, 0x2a2416, 0x141210);
  grid.position.y = 0;
  scene.add(grid);

  /* Ronde glow-texture voor de stofdeeltjes (anders rendert Three.js vierkante punten) */
  function dotTexture() {
    var c = document.createElement('canvas');
    c.width = c.height = 64;
    var ctx = c.getContext('2d');
    var gr = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(0.4, 'rgba(255,255,255,.5)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }
  var dustMap = dotTexture();

  /* Goudstof: fijn stof + grotere 'vonken' */
  function makeDust(count, size, color, spread) {
    var geo = new THREE.BufferGeometry();
    var pos = new Float32Array(count * 3);
    for (var i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = Math.random() * 5.5;
      pos[i * 3 + 2] = 9 - Math.random() * 40;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    var mat = new THREE.PointsMaterial({
      color: color, size: size, map: dustMap, transparent: true, opacity: 0.75,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
    });
    return new THREE.Points(geo, mat);
  }
  var dustFine = makeDust(isMobile ? 1100 : 3400, 0.055, GOLD, 17);
  var dustSpark = makeDust(isMobile ? 350 : 800, 0.13, GOLD_L, 15);
  scene.add(dustFine, dustSpark);

  /* Ringframes: abstracte boksring-touwen als gouden lichtbalken */
  var frames = new THREE.Group();
  var barMat = new THREE.MeshBasicMaterial({
    color: GOLD, transparent: true, opacity: 0.85,
    blending: THREE.AdditiveBlending, depthWrite: false
  });
  function makeFrame(w, h) {
    var g = new THREE.Group();
    var t = 0.045;
    var hb = new THREE.BoxGeometry(w, t, t);
    var vb = new THREE.BoxGeometry(t, h, t);
    var top = new THREE.Mesh(hb, barMat); top.position.y = h / 2;
    var bot = new THREE.Mesh(hb, barMat); bot.position.y = -h / 2;
    var l = new THREE.Mesh(vb, barMat); l.position.x = -w / 2;
    var r = new THREE.Mesh(vb, barMat); r.position.x = w / 2;
    g.add(top, bot, l, r);
    return g;
  }
  var frameCount = isMobile ? 6 : 9;
  for (var f = 0; f < frameCount; f++) {
    var fr = makeFrame(7.2, 3.8);
    fr.position.set(0, 1.9, 5 - f * 3.6);
    fr.rotation.z = (f % 2 === 0 ? 1 : -1) * 0.035;
    frames.add(fr);
  }
  scene.add(frames);

  /* Arena-lichtkegels (nep-volumetrisch: cone met verticale gradient-texture) */
  function gradientTexture() {
    var c = document.createElement('canvas');
    c.width = 2; c.height = 128;
    var ctx = c.getContext('2d');
    var gr = ctx.createLinearGradient(0, 0, 0, 128);
    gr.addColorStop(0, 'rgba(255,255,255,.9)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, 2, 128);
    var tx = new THREE.CanvasTexture(c);
    return tx;
  }
  if (!isMobile) {
    var coneMat = new THREE.MeshBasicMaterial({
      map: gradientTexture(), color: GOLD, transparent: true, opacity: 0.13,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
    });
    [2, -6, -14].forEach(function (z, i) {
      var cone = new THREE.Mesh(new THREE.ConeGeometry(2.6, 8, 32, 1, true), coneMat);
      cone.position.set(i % 2 === 0 ? 1.4 : -1.4, 3.4, z);
      scene.add(cone);
    });
  }

  /* Lichtportaal aan het einde van het pad */
  function portalTexture() {
    var c = document.createElement('canvas');
    c.width = c.height = 256;
    var ctx = c.getContext('2d');
    var gr = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    gr.addColorStop(0, 'rgba(212,175,90,.95)');
    gr.addColorStop(0.35, 'rgba(184,151,58,.45)');
    gr.addColorStop(1, 'rgba(184,151,58,0)');
    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, 256, 256);
    return new THREE.CanvasTexture(c);
  }
  var portal = new THREE.Sprite(new THREE.SpriteMaterial({
    map: portalTexture(), transparent: true, opacity: 0.9,
    blending: THREE.AdditiveBlending, depthWrite: false
  }));
  portal.scale.set(26, 26, 1);
  portal.position.set(0, 2, -30);
  scene.add(portal);

  /* ---------- Camera-pad ---------- */
  var path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 1.7, 11),
    new THREE.Vector3(0.9, 1.3, 4),
    new THREE.Vector3(-0.9, 1.9, -3),
    new THREE.Vector3(0.6, 1.2, -11),
    new THREE.Vector3(0, 1.6, -19),
    new THREE.Vector3(0, 1.6, -26)
  ]);
  var camP = 0, targetP = 0;
  var mouse = { x: 0, y: 0 }, sway = { x: 0, y: 0 };
  window.addEventListener('pointermove', function (e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  var _pos = new THREE.Vector3(), _look = new THREE.Vector3();
  function placeCamera(p) {
    path.getPointAt(Math.min(p, 1), _pos);
    path.getPointAt(Math.min(p + 0.06, 1), _look);
    camera.position.set(_pos.x + sway.x, _pos.y + sway.y, _pos.z);
    camera.lookAt(_look);
  }
  placeCamera(0);

  /* ---------- Scroll-koppeling (één ScrollTrigger: pin + scrub) ---------- */
  var active = true;
  var tl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: intro,
      start: 'top top',
      end: '+=350%',
      scrub: 0.8,
      pin: true,
      anticipatePin: 1,
      onUpdate: function (st) { targetP = st.progress; },
      onToggle: function (st) { active = st.isActive; }
    }
  });

  /* Hoofdstuk 1 uit */
  tl.to('#ch1 .ltr', { y: -90, opacity: 0, stagger: 0.5, duration: 8 }, 2)
    .to('#ch1 .ch-sub, #ch1 .eyebrow, .scroll-hint', { opacity: 0, duration: 5 }, 2)
    .set('#ch1', { visibility: 'hidden' }, 14);

  /* Hoofdstuk 2 in & uit */
  tl.set('#ch2', { visibility: 'visible' }, 20)
    .fromTo('#ch2', { opacity: 0 }, { opacity: 1, duration: 6 }, 20)
    .fromTo('#ch2 .l1', { x: -70 }, { x: 0, duration: 14 }, 20)
    .fromTo('#ch2 .l2', { x: 70 }, { x: 0, duration: 14 }, 21)
    .fromTo('#ch2 .l3', { x: -70 }, { x: 0, duration: 14 }, 22)
    .to('#ch2', { opacity: 0, duration: 7 }, 44)
    .set('#ch2', { visibility: 'hidden' }, 51);

  /* Hoofdstuk 3 in (blijft staan tot de unpin) */
  tl.set('#ch3', { visibility: 'visible' }, 60)
    .fromTo('#ch3', { opacity: 0 }, { opacity: 1, duration: 10 }, 60)
    .fromTo('#ch3 .lockup', { y: 60 }, { y: 0, duration: 16 }, 60)
    .fromTo('#ch3 .eyebrow', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 10 }, 64)
    .fromTo('#ch3 .cta-row', { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 12 }, 68)
    .to({}, { duration: 20 }); /* rustpunt vóór de unpin */

  /* Binnenkomst-animatie (los van de scrub) */
  gsap.from('#ch1 .ltr', { y: 70, opacity: 0, stagger: 0.06, duration: 1.1, ease: 'power4.out', delay: 0.15 });
  gsap.from('#ch1 .eyebrow, #ch1 .ch-sub', { opacity: 0, y: 20, duration: 0.9, ease: 'power3.out', delay: 0.7 });

  /* ---------- Renderloop + FPS-bewaking ---------- */
  var frameTimes = [], lastT = performance.now(), fpsChecked = false, warmup = 0;
  function loop(now) {
    if (fellBack) return;
    requestAnimationFrame(loop);
    var dt = now - lastT;
    lastT = now;

    var needsRender = active || Math.abs(targetP - camP) > 0.0005;
    if (document.hidden || !needsRender) return;

    /* FPS-meting: na een korte warmup ~2s meten; te traag → statische hero */
    if (!fpsChecked) {
      if (warmup++ > 30) {
        frameTimes.push(dt);
        if (frameTimes.length >= 90) {
          fpsChecked = true;
          var avg = frameTimes.reduce(function (a, b) { return a + b; }, 0) / frameTimes.length;
          if (avg > 36) { useFallback(); return; } /* < ~28 fps */
        }
      }
    }

    camP += (targetP - camP) * 0.08;
    sway.x += (mouse.x * 0.22 - sway.x) * 0.04;
    sway.y += (-mouse.y * 0.12 - sway.y) * 0.04;
    placeCamera(camP);

    var t = now * 0.001;
    dustFine.rotation.y = t * 0.016;
    dustSpark.rotation.y = -t * 0.011;
    dustFine.position.y = Math.sin(t * 0.35) * 0.12;
    portal.material.opacity = 0.75 + Math.sin(t * 1.4) * 0.15;

    renderer.render(scene, camera);
  }
  requestAnimationFrame(loop);
})();
