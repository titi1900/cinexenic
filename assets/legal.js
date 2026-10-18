/* ============================================================
   Cinexenic — assets/legal.js
   ⚠️ OBSOLÈTE avec la nouvelle architecture multilingue.

   Ancien rôle : dictionnaires de traduction (fr/en/de) appliqués
   dynamiquement via data-i18n et l'événement "cinexenic:lang".

   Nouvelle architecture : chaque langue est une page HTML statique
   distincte (mentions-legales.html / en/legal-notice.html / de/impressum.html
   et confidentialite.html / en/privacy-policy.html / de/datenschutz.html).
   Les contenus traduits vivent directement dans ces pages ; aucun
   besoin de traduction côté client.

   → Ce fichier n'a plus de raison d'être. Recommandation :
     1. supprimer la balise <script src="assets/legal.js" defer></script>
        des pages légales (les 6 versions) ;
     2. supprimer assets/legal.js du dépôt ;
     3. les pages légales ne chargent plus que assets/common.js
        (menu mobile + retour en haut).

   Ce fichier est conservé vide et inoffensif pendant la transition :
   s'il est encore référencé quelque part, il ne fait rien.
   ============================================================ */
(function () {
  'use strict';
  /* Intentionnellement vide : les traductions sont désormais dans le
     HTML statique de chaque langue. Ne rien exécuter ici. */
})();