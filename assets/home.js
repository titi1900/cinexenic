/* Cinexenic : page d'accueil. Démo animée (signaux IMU simulés), vidéo du hero,
   présélection de l'usage, carrousel usages avec autoscroll.
   Aucune traduction ici : les textes sont déjà dans le HTML de chaque langue
   (racine FR, /en/, /de/) ; seuls les libellés dynamiques du bouton play/pause
   sont choisis d'après <html lang>. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Vidéo : lue seulement si l'écran est assez grand, sans économie de données
     ni mouvement réduit ; en pause hors écran. */
  var video = document.querySelector('.bg-video');
  if (video) {
    var conn = navigator.connection || {};
    var calm = reduce || conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '') || window.innerWidth < 700;
    if (!calm) {
      video.muted = true; video.preload = 'auto';
      var play = function () { var p = video.play(); if (p && p.catch) p.catch(function () {}); };
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { if (es[0].isIntersecting) play(); else video.pause(); }).observe(video);
      else play();
    }
  }

  /* Présélection de l'usage dans le formulaire */
  var select = document.getElementById('usage');
  if (select) document.querySelectorAll('[data-usage]').forEach(function (a) {
    a.addEventListener('click', function () { select.value = a.getAttribute('data-usage'); });
  });

  /* ============================================================
     Carrousel usages avec autoscroll (section #usages, index)
     Pattern : contenu 100 % dans le DOM (crawlable), scroll-snap
     natif en CSS (theme.css §Carrousel). Le JS déclenche le scroll
     au clic sur les flèches, gère l'autoscroll (1 s par carte),
     les pauses (survol, focus, swipe, onglet caché) et l'état
     du bouton play/pause. Libellés localisés via <html lang>.
     ============================================================ */
  var AUTO_DELAY = 1000; // 1 s par carte
  var TOGGLE_LABELS = {
    fr: { playing: 'Arrêter le défilement automatique des usages',
          paused:  'Activer le défilement automatique des usages' },
    en: { playing: 'Stop automatic scrolling of the use cases',
          paused:  'Start automatic scrolling of the use cases' },
    de: { playing: 'Automatisches Scrollen der Anwendungen stoppen',
          paused:  'Automatisches Scrollen der Anwendungen starten' }
  };

  function initCarousels() {
    var lang = document.documentElement.lang || 'fr';
    if (lang !== 'en' && lang !== 'de') lang = 'fr';
    var labels = TOGGLE_LABELS[lang];

    document.querySelectorAll('.carousel').forEach(function (carousel) {
      var track = carousel.querySelector('.carousel-track');
      if (!track) return;
      var toggle = carousel.querySelector('.carousel-toggle');

      // Un pas = une carte + le gap (24 px, cohérent avec theme.css)
      function step() {
        var card = track.querySelector('.usage');
        return (card ? card.offsetWidth : 320) + 24;
      }

      var prev = carousel.querySelector('.carousel-btn.prev');
      var next = carousel.querySelector('.carousel-btn.next');

      function scrollBy(dir) {
        track.scrollBy({ left: dir * step(), behavior: 'smooth' });
      }

      if (prev) prev.addEventListener('click', function () { scrollBy(-1); });
      if (next) next.addEventListener('click', function () { scrollBy(1); });

      // État des flèches : désactivées visuellement en bout de piste
      function updateButtons() {
        var max = track.scrollWidth - track.clientWidth;
        if (prev) prev.disabled = track.scrollLeft <= 2;
        if (next) next.disabled = track.scrollLeft >= max - 2;
      }
      track.addEventListener('scroll', updateButtons, { passive: true });
      window.addEventListener('resize', updateButtons);
      updateButtons();

      /* ── Autoscroll ──────────────────────────────────────── */
      var playing = false;
      var timer = null;
      var hover = false;   // survol souris
      var focus = false;   // focus clavier dans le carrousel
      var touch = false;   // swipe tactile en cours
      var hidden = document.hidden;

      function atEnd() {
        return track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
      }

      function tick() {
        // Ne jamais défiler pendant une interaction utilisateur
        if (hover || focus || touch || hidden) return;
        if (atEnd()) {
          // Boucle : retour fluide au début
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollBy(1);
        }
      }

      function start() {
        if (playing) return;
        playing = true;
        if (timer) clearInterval(timer);
        timer = setInterval(tick, AUTO_DELAY);
        renderToggle();
      }

      function stop() {
        playing = false;
        if (timer) { clearInterval(timer); timer = null; }
        renderToggle();
      }

      function renderToggle() {
        if (!toggle) return;
        toggle.setAttribute('aria-pressed', playing ? 'true' : 'false');
        toggle.setAttribute('aria-label', playing ? labels.playing : labels.paused);
      }

      if (toggle) {
        toggle.addEventListener('click', function () {
          if (playing) { stop(); } else { start(); }
        });
      }

      // Pause au survol et au focus (ne jamais faire défiler du contenu
      // qu'un utilisateur est en train de lire ou de manipuler)
      carousel.addEventListener('mouseenter', function () { hover = true; });
      carousel.addEventListener('mouseleave', function () { hover = false; });
      carousel.addEventListener('focusin', function () { focus = true; });
      carousel.addEventListener('focusout', function (e) {
        if (!carousel.contains(e.relatedTarget)) focus = false;
      });

      // Pause pendant un swipe tactile (touchstart → touchend)
      track.addEventListener('touchstart', function () { touch = true; }, { passive: true });
      track.addEventListener('touchend', function () {
        setTimeout(function () { touch = false; }, 400);
      }, { passive: true });

      // Pause si l'onglet est caché (économie + bonne pratique)
      document.addEventListener('visibilitychange', function () {
        hidden = document.hidden;
      });

      // Autoscroll actif par défaut, sauf prefers-reduced-motion
      if (!reduce) start();
      renderToggle();
    });
  }

  initCarousels();

  /* Démo : chargée quand elle approche de l'écran */
  var canvas = document.getElementById('demo');
  if (canvas) {
    var run = function () { start(canvas); };
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); run(); } }, { rootMargin: '200px' });
      io.observe(canvas);
    } else run();
  }

  // Démonstration entièrement simulée : signaux bruts (gauche) et geste reconstruit (droite).
  const W = 640, H = 420, TAU = Math.PI * 2;
  const COLORS = ['#FFA800', '#8FB8FF', '#FFFFFF'];

  const signal = (t, k) => Math.sin(t * 1.7 + k) * 0.6 + Math.sin(t * 3.9 + k * 2) * 0.3 * (1 + Math.sin(t * 0.9));

  function start(canvas) {
    const labels = (canvas.dataset.labels || '').split('|');
    const g = canvas.getContext('2d');
    if (!g) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr; canvas.height = H * dpr; g.scale(dpr, dpr);

    const seg = (a, b) => { g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); };
    const dot = (p, r, color) => { g.fillStyle = color; g.beginPath(); g.arc(p[0], p[1], r, 0, TAU); g.fill(); };

    function drawTraces(t) {
      g.font = '12px system-ui, sans-serif';
      COLORS.forEach((color, k) => {
        const label = labels[k] || '';
        const y0 = 90 + k * 110;
        g.strokeStyle = 'rgba(255,255,255,.2)'; seg([20, y0], [320, y0]);
        g.strokeStyle = color; g.beginPath();
        for (let i = 0; i <= 300; i += 3) {
          const y = y0 - signal(t - (300 - i) * 0.012, k) * 38;
          i ? g.lineTo(20 + i, y) : g.moveTo(20 + i, y);
        }
        g.stroke();
        g.fillStyle = 'rgba(255,255,255,.75)'; g.fillText(label, 20, y0 - 50);
      });
    }

    function drawFigure(t) {
      const s = Math.sin(t * 1.7), cx = 500;
      const hip = [cx, 250], neck = [cx + s * 8, 150];
      const a1 = -1.57 + s * 1.4, a2 = a1 + 0.6 * Math.sin(t * 1.7 + 1);
      const elbow = [neck[0] + 70 * Math.cos(a1), neck[1] + 70 * Math.sin(a1)];
      const wrist = [elbow[0] + 60 * Math.cos(a2), elbow[1] + 60 * Math.sin(a2)];
      g.strokeStyle = '#fff';
      seg(neck, hip); seg(hip, [cx - 34, 360]); seg(hip, [cx + 34, 360]);
      seg(neck, elbow); seg(elbow, wrist); seg(neck, [cx - 50, 190]);
      g.beginPath(); g.arc(neck[0], neck[1] - 24, 18, 0, TAU); g.stroke();
      dot(elbow, 5, '#8FB8FF'); dot(hip, 5, '#8FB8FF'); dot(wrist, 8, '#FFA800');
    }

    const frame = (t) => { g.clearRect(0, 0, W, H); g.lineWidth = 2; drawTraces(t); drawFigure(t); };

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return frame(1.2);

    let raf = 0;
    const loop = (ms) => { frame(ms / 1000); raf = requestAnimationFrame(loop); };
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { if (!raf) raf = requestAnimationFrame(loop); }
      else { cancelAnimationFrame(raf); raf = 0; }
    }).observe(canvas);
  }


})();