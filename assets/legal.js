/* ============================================================
   Cinexenic — assets/legal.js
   Spécifique à mentions-legales.html ET confidentialite.html :
   dictionnaires de contenu des deux pages, distingués par
   la présence des clés (chaque page n'utilise que les siennes).
   Piloté par l'événement "cinexenic:lang" émis par common.js.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Clés communes aux deux pages ---------- */
  var COMMON = {
    fr: { contact_label: "Contact :" },
    en: { contact_label: "Contact:" },
    de: { contact_label: "Kontakt:" }
  };

  /* ============================================================
     PAGE 1 — mentions-legales.html
     ============================================================ */
  var LEGAL = {
    fr: {
      badge_legal: "Cadre Juridique",
      legal_title: "Mentions légales",
      legal_subtitle: "Informations réglementaires relatives à l'éditeur et l'exploitation du site Cinexenic.",
      sec1_title: "1. Édition du site",
      sec1_text: "Le site internet Cinexenic est édité dans le cadre du projet incubé au sein d'EuropaTech (Berlin, Allemagne).",
      sec2_title: "2. Hébergement",
      sec2_text: "Le site est hébergé par :",
      sec3_title: "3. Propriété intellectuelle",
      sec3_text: "L'ensemble des éléments constituant le site Cinexenic (textes, graphismes, logos, icônes, code source, architecture) est la propriété exclusive de la marque, sauf mention contraire explicite. Toute reproduction, représentation ou modification est strictement interdite sans autorisation préalable.",
      sec4_title: "4. Protection des données personnelles (RGPD)",
      sec4_text: "Conformément au Règlement Général sur la Protection des Données (RGPD), les informations collectées via la liste d'attente se limitent à une adresse e-mail et un choix d'usage. Aucun traçage visuel ou biométrique intrusif n'est réalisé. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant directement. Le détail complet figure dans notre politique de confidentialité.",
      sec4_link: "Consulter la politique de confidentialité"
    },
    en: {
      badge_legal: "Legal Framework",
      legal_title: "Legal Notice",
      legal_subtitle: "Regulatory information regarding the publisher and operation of the Cinexenic website.",
      sec1_title: "1. Site Publishing",
      sec1_text: "The Cinexenic website is published as part of the startup project incubated at EuropaTech (Berlin, Germany).",
      sec2_title: "2. Hosting",
      sec2_text: "The website is hosted by:",
      sec3_title: "3. Intellectual Property",
      sec3_text: "All elements comprising the Cinexenic website (texts, graphics, logos, icons, source code, architecture) are the exclusive property of the brand unless explicitly stated otherwise. Any reproduction or adaptation is strictly prohibited without prior authorization.",
      sec4_title: "4. Personal Data Protection (GDPR)",
      sec4_text: "In accordance with the General Data Protection Regulation (GDPR), information collected via the waitlist is limited to an email address and usage preference. No intrusive visual or biometric tracking is performed. You have the right to access, correct, and delete your data by contacting us directly. Full details are available in our privacy policy.",
      sec4_link: "Read the privacy policy"
    },
    de: {
      badge_legal: "Rechtlicher Rahmen",
      legal_title: "Impressum",
      legal_subtitle: "Regulatorische Informationen zum Herausgeber und Betrieb der Cinexenic-Website.",
      sec1_title: "1. Website-Herausgeber",
      sec1_text: "Die Website Cinexenic wird im Rahmen des bei EuropaTech (Berlin, Deutschland) inkubierten Projekts herausgegeben.",
      sec2_title: "2. Hosting",
      sec2_text: "Die Website wird gehostet von:",
      sec3_title: "3. Geistiges Eigentum",
      sec3_text: "Alle Elemente der Cinexenic-Website (Texte, Grafiken, Logos, Icons, Quellcode, Architektur) sind Eigentum der Marke, sofern nicht ausdrücklich anders angegeben. Jede Vervielfältigung oder Bearbeitung ohne vorherige Genehmigung ist strengstens untersagt.",
      sec4_title: "4. Schutz personenbezogener Daten (DSGVO)",
      sec4_text: "Gemäß der Datenschutz-Grundverordnung (DSGVO) beschränken sich die über die Warteliste erhobenen Daten auf E-Mail-Adresse und Nutzungsauswahl. Es findet kein aufdringliches visuelles oder biometrisches Tracking statt. Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer Daten. Alle Einzelheiten finden Sie in unserer Datenschutzerklärung.",
      sec4_link: "Datenschutzerklärung lesen"
    }
  };

  /* ============================================================
     PAGE 2 — confidentialite.html
     ============================================================ */
  var PRIVACY = {
    fr: {
      badge_priv: "Vos données, notre priorité",
      priv_title: "Politique de confidentialité",
      priv_subtitle: "Comment Cinexenic collecte, utilise et protège vos données — en toute transparence, conformément au RGPD.",
      psec1_title: "1. Responsable du traitement",
      psec1_text: "Le site et la liste d'attente Cinexenic sont édités dans le cadre du projet incubé au sein d'EuropaTech (Berlin, Allemagne). Contact pour toute question relative aux données personnelles :",
      psec2_title: "2. Données collectées",
      psec2_text: "Via le formulaire de la liste d'attente, nous collectons uniquement : votre adresse e-mail et l'usage qui vous intéresse (sport, santé, ergonomie, création). Aucune donnée biométrique, aucun contenu vidéo et aucun traceur publicitaire ne sont collectés sur ce site.",
      psec2b_text: "Une préférence de langue est enregistrée localement dans votre navigateur (localStorage) pour afficher le site dans la langue choisie. Cette information ne quitte jamais votre appareil.",
      psec3_title: "3. Finalités et base légale",
      psec3_text: "Les données servent exclusivement à vous informer de l'ouverture des précommandes et des premiers modules applicatifs Cinexenic. Le traitement repose sur votre consentement, recueilli par la case à cocher du formulaire. Vous pouvez le retirer à tout moment.",
      psec4_title: "4. Durée de conservation",
      psec4_text: "Vos données sont conservées pendant la durée de la liste d'attente, puis 3 ans au maximum après le dernier contact, sauf demande de suppression de votre part ou retrait du consentement.",
      psec5_title: "5. Destinataires et sous-traitants",
      psec5_text: "Seuls les membres du projet Cinexenic accèdent à ces données. Le site est hébergé par GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). Les éventuels services d'envoi d'e-mails utilisés pour vous contacter opèrent sur la base de contrats de sous-traitance conformes à l'article 28 du RGPD.",
      psec6_title: "6. Transferts hors Union européenne",
      psec6_text: "L'hébergement aux États-Unis par GitHub est encadré par les clauses contractuelles types approuvées par la Commission européenne. Aucune autre transmission hors UE n'est réalisée.",
      psec7_title: "7. Vos droits",
      psec7_text: "Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données, ainsi que du droit de retirer votre consentement. Pour les exercer, écrivez-nous ; une réponse vous sera apportée sous un mois.",
      psec7b_text: "Vous pouvez également introduire une réclamation auprès de l'autorité de contrôle compétente de votre pays de résidence.",
      psec8_title: "8. Sécurité et évolutions",
      psec8_text: "Les échanges avec le site sont chiffrés (HTTPS). En cas de modification de la présente politique, la date de mise à jour sera révisée et, si nécessaire, une annonce sera publiée sur la page d'accueil."
    },
    en: {
      badge_priv: "Your data, our priority",
      priv_title: "Privacy Policy",
      priv_subtitle: "How Cinexenic collects, uses, and protects your data — with full transparency, in accordance with the GDPR.",
      psec1_title: "1. Data Controller",
      psec1_text: "The Cinexenic website and waitlist are published as part of the project incubated at EuropaTech (Berlin, Germany). Contact for any question regarding personal data:",
      psec2_title: "2. Data Collected",
      psec2_text: "Via the waitlist form, we collect only: your email address and your area of interest (sports, health, ergonomics, creation). No biometric data, no video content, and no advertising trackers are collected on this website.",
      psec2b_text: "A language preference is stored locally in your browser (localStorage) to display the website in your chosen language. This information never leaves your device.",
      psec3_title: "3. Purposes and Legal Basis",
      psec3_text: "Your data is used exclusively to inform you about the opening of pre-orders and the first Cinexenic software modules. Processing is based on your consent, given via the form checkbox. You may withdraw it at any time.",
      psec4_title: "4. Retention Period",
      psec4_text: "Your data is kept for the duration of the waitlist, then for a maximum of 3 years after the last contact, unless you request deletion or withdraw your consent.",
      psec5_title: "5. Recipients and Processors",
      psec5_text: "Only Cinexenic project members have access to this data. The website is hosted by GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA). Any email delivery services used to contact you operate under data processing agreements compliant with Article 28 of the GDPR.",
      psec6_title: "6. Transfers Outside the European Union",
      psec6_text: "Hosting in the United States by GitHub is governed by the Standard Contractual Clauses approved by the European Commission. No other transfer outside the EU takes place.",
      psec7_title: "7. Your Rights",
      psec7_text: "Under the GDPR, you have the rights of access, rectification, erasure, restriction, objection, and portability of your data, as well as the right to withdraw your consent. To exercise them, write to us; a response will be provided within one month.",
      psec7b_text: "You may also lodge a complaint with the competent supervisory authority of your country of residence.",
      psec8_title: "8. Security and Updates",
      psec8_text: "Communication with the website is encrypted (HTTPS). If this policy is modified, the update date will be revised and, where necessary, an announcement will be published on the home page."
    },
    de: {
      badge_priv: "Ihre Daten, unsere Priorität",
      priv_title: "Datenschutzerklärung",
      priv_subtitle: "Wie Cinexenic Ihre Daten erfasst, verwendet und schützt – transparent und gemäß der DSGVO.",
      psec1_title: "1. Verantwortlicher",
      psec1_text: "Die Cinexenic-Website und die Warteliste werden im Rahmen des bei EuropaTech (Berlin, Deutschland) inkubierten Projekts betrieben. Kontakt für Fragen zu personenbezogenen Daten:",
      psec2_title: "2. Erhobene Daten",
      psec2_text: "Über das Wartelistenformular erfassen wir ausschließlich: Ihre E-Mail-Adresse und Ihr Interessengebiet (Sport, Gesundheit, Ergonomie, Kreation). Es werden keine biometrischen Daten, keine Videoinhalte und keine Werbe-Tracker auf dieser Website erhoben.",
      psec2b_text: "Eine Spracheinstellung wird lokal in Ihrem Browser (localStorage) gespeichert, um die Website in der gewählten Sprache anzuzeigen. Diese Information verlässt niemals Ihr Gerät.",
      psec3_title: "3. Zwecke und Rechtsgrundlage",
      psec3_text: "Die Daten dienen ausschließlich dazu, Sie über die Eröffnung der Vorbestellungen und die ersten Cinexenic-Anwendungsmodule zu informieren. Die Verarbeitung beruht auf Ihrer Einwilligung, die über das Kontrollkästchen im Formular erteilt wird. Sie können diese jederzeit widerrufen.",
      psec4_title: "4. Speicherdauer",
      psec4_text: "Ihre Daten werden für die Dauer der Warteliste und danach maximal 3 Jahre nach dem letzten Kontakt gespeichert, sofern Sie keine Löschung verlangen oder Ihre Einwilligung widerrufen.",
      psec5_title: "5. Empfänger und Auftragsverarbeiter",
      psec5_text: "Nur Mitglieder des Cinexenic-Projekts haben Zugriff auf diese Daten. Die Website wird von GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) gehostet. Etwaige E-Mail-Versanddienste, über die wir Sie kontaktieren, arbeiten auf Grundlage von Auftragsverarbeitungsverträgen gemäß Art. 28 DSGVO.",
      psec6_title: "6. Übermittlungen außerhalb der EU",
      psec6_text: "Das Hosting in den USA durch GitHub ist durch die von der EU-Kommission gebilligten Standardvertragskategorien geregelt. Weitere Übermittlungen außerhalb der EU finden nicht statt.",
      psec7_title: "7. Ihre Rechte",
      psec7_text: "Gemäß DSGVO haben Sie die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit sowie das Recht, Ihre Einwilligung zu widerrufen. Schreiben Sie uns, um sie auszuüben; Sie erhalten innerhalb eines Monats Antwort.",
      psec7b_text: "Sie können außerdem bei der zuständigen Aufsichtsbehörde Ihres Wohnsitzlandes Beschwerde einlegen.",
      psec8_title: "8. Sicherheit und Aktualisierungen",
      psec8_text: "Die Kommunikation mit der Website ist verschlüsselt (HTTPS). Bei Änderungen dieser Richtlinie wird das Aktualisierungsdatum angepasst und gegebenenfalls eine Ankündigung auf der Startseite veröffentlicht."
    }
  };

  /* ---------- Fusion clés communes + page présentes ---------- */
  function dictFor(lang) {
    var base = {};
    ["COMMON", "LEGAL", "PRIVACY"].forEach(function (name) {
      var src = { COMMON: COMMON, LEGAL: LEGAL, PRIVACY: PRIVACY }[name][lang];
      if (src) Object.keys(src).forEach(function (k) { base[k] = src[k]; });
    });
    return base;
  }

  function applyPageLanguage(lang) {
    if (lang !== "en" && lang !== "de") lang = "fr";
    var dict = dictFor(lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
  }

  /* Changement de langue depuis le sélecteur (common.js) + état initial */
  document.addEventListener("cinexenic:lang", function (e) {
    applyPageLanguage(e.detail.lang);
  });
  applyPageLanguage(
    (function () {
      try { return localStorage.getItem("cinexenic_lang") || "fr"; } catch (err) { return "fr"; }
    })()
  );
})();