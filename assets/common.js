/* Cinexenic : comportements communs (menu mobile, retour en haut). Aucune traduction ici :
   chaque langue est une page HTML statique distincte (racine FR, /en/, /de/),
   les textes traduits vivent directement dans le HTML de chaque page. */
(function () {
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var btn = document.getElementById('menuBtn'), nav = document.getElementById('navLinks');
  if (btn && nav) {
    var setMenu = function (open) { nav.classList.toggle('is-open', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); };
    btn.addEventListener('click', function () { setMenu(btn.getAttribute('aria-expanded') !== 'true'); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
  }

  var top = document.getElementById('scrollToTopBtn');
  if (top) {
    var queued = false;
    var update = function () { top.classList.toggle('is-visible', window.scrollY > 400); queued = false; };
    window.addEventListener('scroll', function () { if (!queued) { queued = true; requestAnimationFrame(update); } }, { passive: true });
    top.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduce.matches ? 'auto' : 'smooth' });
      var main = document.getElementById('main'); if (main) main.focus({ preventScroll: true });
    });
    update();
  }
})();