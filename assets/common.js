/* ============================================================
   Cinexenic — assets/common.js
   Shell partagé par les 3 pages : i18n (nav, footer, skip, menu),
   sélecteur de langue, menu mobile, bouton retour en haut.
   Les traductions de CONTENU sont gérées par assets/home.js
   et assets/legal.js, qui écoutent l'événement "cinexenic:lang".
   ============================================================ */
(function () {
  "use strict";

  var LANG_KEY = "cinexenic_lang";

  /* ---------- Dictionnaire du shell (nav, footer, a11y) ---------- */
  var SHELL = {
    fr: {
      skip: "Aller au contenu",
      menu_open: "Ouvrir le menu",
      nav_func: "Fonctionnement",
      nav_usages: "Usages",
      nav_privacy: "Vie privée & RGPD",
      nav_team: "Équipe",
      nav_faq: "Questions",
      nav_contact: "Contact",
      footer_legal: "Mentions légales",
      footer_privacy: "Confidentialité",
      footer_contact: "Contact"
    },
    en: {
      skip: "Skip to content",
      menu_open: "Open menu",
      nav_func: "How it works",
      nav_usages: "Applications",
      nav_privacy: "Privacy & GDPR",
      nav_team: "Team",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      footer_legal: "Legal Notice",
      footer_privacy: "Privacy Policy",
      footer_contact: "Contact"
    },
    de: {
      skip: "Zum Inhalt springen",
      menu_open: "Menü öffnen",
      nav_func: "Funktionsweise",
      nav_usages: "Anwendungen",
      nav_privacy: "Datenschutz & DSGVO",
      nav_team: "Team",
      nav_faq: "Fragen",
      nav_contact: "Kontakt",
      footer_legal: "Impressum",
      footer_privacy: "Datenschutz",
      footer_contact: "Kontakt"
    }
  };

  /* ---------- i18n shell ---------- */
  function applyShell(lang) {
    if (!SHELL[lang]) lang = "fr";
    var dict = SHELL[lang];
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* mode privé : ignorer */ }
    document.querySelectorAll('[data-i18n-shell]').forEach(function (el) {
      var key = el.getAttribute("data-i18n-shell");
      if (dict[key]) el.textContent = dict[key];
    });
    /* Notifier les scripts de page (home.js / legal.js) pour
       qu'ils appliquent leurs propres dictionnaires de contenu. */
    document.dispatchEvent(new CustomEvent("cinexenic:lang", { detail: { lang: lang } }));
  }

  /* ---------- Initialisation du shell ---------- */
  function initShell() {
    var saved = "fr";
    try { saved = localStorage.getItem(LANG_KEY) || "fr"; } catch (e) { /* nop */ }

    var select = document.getElementById("langSelect");
    if (select) {
      select.value = saved;
      select.addEventListener("change", function (e) {
        applyShell(e.target.value);
      });
    }
    applyShell(saved);

    /* Menu mobile : aria-expanded synchronisé avec l'état visuel */
    var menuBtn = document.getElementById("menuBtn");
    var navLinks = document.getElementById("navLinks");
    if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", function () {
        var open = navLinks.classList.toggle("is-open");
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
        var label = menuBtn.getAttribute("data-i18n-shell") === "menu_open"
          ? menuBtn.textContent : menuBtn.getAttribute("aria-label");
        menuBtn.setAttribute("aria-label", label);
      });
    }

    /* Bouton retour en haut : écouteur scroll passif */
    var topBtn = document.getElementById("scrollToTopBtn");
    if (topBtn) {
      window.addEventListener("scroll", function () {
        topBtn.classList.toggle("is-visible", window.scrollY > 400);
      }, { passive: true });
      topBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initShell);
  } else {
    initShell();
  }
})();