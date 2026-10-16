/* ============================================================
   Cinexenic — assets/home.js
   Spécifique à index.html :
   1. Traductions du contenu (data-i18n) pilotées par common.js
   2. Démo canvas (signaux IMU + geste reconstruit)
   ============================================================ */
(function () {
  "use strict";

  /* ============================================================
     1. TRADUCTIONS DU CONTENU DE LA PAGE D'ACCUEIL
     ============================================================ */
  var PAGE = {
    fr: {
      hero_badge: "Accompagné par EuropaTech",
      hero_title: "Mesurer le mouvement sans filmer.",
      hero_lead: "Cinexenic est un dispositif corporel portable wear-and-play qui transforme le mouvement humain en données exploitables, sans caméra ni infrastructure lourde.",
      btn_movement: "Rejoindre le mouvement",
      btn_how: "Voir comment ça marche",
      demo_caption: "Démonstration entièrement simulée : signaux bruts (gauche) et geste reconstruit (droite).",
      fact_1_title: "Un capteur, pas une caméra", fact_1_desc: "Seul le mouvement est mesuré, votre image reste strictement privée.",
      fact_2_title: "Des données brutes visibles", fact_2_desc: "Visualisez ce que le capteur enregistre avant toute analyse IA.",
      fact_3_title: "Un dispositif, plusieurs usages", fact_3_desc: "Sport, santé, ergonomie, création : une seule infrastructure Data.",
      step_kicker: "Rupture Technologique", step_title: "Du geste à la donnée, en trois temps",
      step_1_title: "Porter", step_1_desc: "Enfilez le dispositif ultra-léger. Pas de caméra à régler, pas de marqueurs vidéo, pas de studio.",
      step_2_title: "Bouger", step_2_desc: "Jouez, travaillez, entraînez-vous : les capteurs embarqués enregistrent la biomécanique en continu.",
      step_3_title: "Comprendre", step_3_desc: "Visualisez les données brutes, puis le scoring du geste sur mobile, tablette ou dashboard Cloud.",
      usages_kicker: "Multi-Secteurs", usages_title: "Un seul dispositif, des usages à fort impact",
      usages_intro: "Sélectionnez votre domaine d'intérêt pour orienter les prochaines ouvertures applicatives :",
      usage_1_title: "Padel et Tennis", usage_1_desc: "Analysez votre service, smash et placement. Comparez votre geste aux références biomécaniques des coachs.", usage_1_link: "Ce sport m'intéresse ↗",
      usage_2_title: "Santé & Suivi du Geste", usage_2_desc: "Mesurez l'amplitude et la récupération articulaire entre deux séances avec votre kinésithérapeute.", usage_2_link: "Le suivi santé m'intéresse ↗",
      usage_3_title: "Ergonomie & Prévention TMS", usage_3_desc: "Cartographiez l'usure physique et les gestes répétés des opérateurs industriels sans aucune captation vidéo.", usage_3_link: "L'ergonomie m'intéresse ↗",
      usage_4_title: "Création, Jeux & Avatars 3D", usage_4_desc: "Contrôlez un avatar numérique, jouez avec votre corps, streamez sans caméra ni balises lumineuses.", usage_4_link: "La création m'intéresse ↗",
      explore_note: "Pistes R&D additionnelles : compagnonnage d'artisanat d'art, recherche en biomécanique et robotique.",
      privacy_kicker: "Privacy by Design", privacy_title: "Mesurer sans filmer est un choix de conception",
      privacy_desc: "Un mouvement est une donnée personnelle sensible. Nous traitons le respect de la vie privée comme une fonctionnalité produit fondamentale.",
      priv_1_title: "Aucune image", priv_1_desc: "Le dispositif intègre uniquement des capteurs inertiels (IMU) : aucune caméra, aucun risque de fuite visuelle.",
      priv_2_title: "Souveraineté Data", priv_2_desc: "Nous ne collectons que les métriques indispensables à votre usage, avec un chiffrement de bout en bout.",
      priv_3_title: "Transparence Totale", priv_3_desc: "Stockage, gouvernance et droits d'exportation de vos données sont décrits clairement dès l'inscription.",
      team_kicker: "Les Visages du Projet", team_title: "Une équipe guidée par l'ingénierie et la biomécanique",
      team_desc: "Cinexenic est née de l'union entre l'électronique embarquée, la science du traitement de signal et l'écosystème d'innovation européen.",
      team_1_title: "Fondateur & CTO", team_1_role: "Ingénieur Électronique, Automatisme & Data", team_1_desc: "Passionné par la modélisation du mouvement humain et concepteur de l'architecture matérielle.",
      team_2_title: "EuropaTech", team_2_role: "Incubation & Accélération Industrialisation", team_2_desc: "Premier pôle européen de startups basé à Berlin, accompagnant Cinexenic.",
      team_3_title: "Comité Scientifique & Data", team_3_role: "Biomécanique & Algorithmes IA", team_3_desc: "Conseillers experts en sciences du sport et traitement du signal.",
      faq_kicker: "Faq", faq_title: "Questions fréquentes",
      faq_q1: "Qu'est-ce que Cinexenic ?", faq_a1: "Cinexenic est un dispositif corporel portable qui transforme le mouvement humain en données exploitables, sans caméra ni infrastructure lourde.",
      faq_q2: "Faut-il une caméra ou une salle équipée ?", faq_a2: "Non. Le dispositif se porte sur soi et mesure le mouvement directement.",
      faq_q3: "Pour quels usages ?", faq_a3: "Les premiers usages visés sont le sport, le suivi du geste, la prévention des TMS et la création numérique.",
      faq_q4: "Quand pourra-t-on l'acheter ?", faq_a4: "Les précommandes ouvriront prochainement. Inscrivez-vous à la liste d'attente.",
      faq_q5: "Mes données de mouvement sont-elles protégées ?", faq_a5: "Le dispositif ne capte aucune image. Conformité RGPD stricte.",
      signup_title: "Rejoindre le mouvement", signup_desc: "Soyez prévenu(e) de l'ouverture des précommandes et participez à la définition des premiers modules applicatifs.",
      form_email: "Adresse e-mail", form_usage: "Usage qui vous intéresse",
      opt_1: "Padel ou Tennis", opt_2: "Santé & Suivi du geste", opt_3: "Ergonomie & Prévention TMS", opt_4: "Création, Jeu & VR", opt_5: "Autre usage sur-mesure",
      form_consent: "J'accepte d'être recontacté(e) au sujet de Cinexenic.", form_submit: "Rejoindre le mouvement"
    },
    en: {
      hero_badge: "Accelerated by EuropaTech",
      hero_title: "Measure movement without filming.",
      hero_lead: "Cinexenic is a wear-and-play wearable device that turns human motion into actionable data, without cameras or complex infrastructure.",
      btn_movement: "Join the movement", btn_how: "See how it works",
      demo_caption: "Fully simulated demo: raw signals (left) and reconstructed gesture (right).",
      fact_1_title: "A sensor, not a camera", fact_1_desc: "Only movement is measured—your visual image stays completely private.",
      fact_2_title: "Visible raw data", fact_2_desc: "Examine what the sensor records prior to any AI processing.",
      fact_3_title: "One device, multiple uses", fact_3_desc: "Sports, health, ergonomics, creation: a single unified Data platform.",
      step_kicker: "Technological Shift", step_title: "From movement to insights, in three steps",
      step_1_title: "Wear", step_1_desc: "Put on the ultra-lightweight device. No camera alignment, no video markers, no dedicated studio required.",
      step_2_title: "Move", step_2_desc: "Play, work, or train: embedded sensors capture biomechanics continuously in real time.",
      step_3_title: "Understand", step_3_desc: "View raw motion metrics and AI gesture scoring on mobile, tablet, or Cloud dashboard.",
      usages_kicker: "Multi-Industry", usages_title: "One device, high-impact applications",
      usages_intro: "Select your area of interest to guide our upcoming software feature rollouts:",
      usage_1_title: "Padel & Tennis", usage_1_desc: "Analyze your serve, smash, and footwork. Benchmark your mechanics against coaching biomechanical baselines.", usage_1_link: "I'm interested in sports ↗",
      usage_2_title: "Healthcare & Rehabilitation", usage_2_desc: "Track joint range-of-motion and recovery progress between physical therapy sessions.", usage_2_link: "I'm interested in healthcare ↗",
      usage_3_title: "Ergonomics & MSD Prevention", usage_3_desc: "Map physical fatigue and repetitive motions of industrial operators without placing video cameras on the factory floor.", usage_3_link: "I'm interested in ergonomics ↗",
      usage_4_title: "Creation, Gaming & 3D Avatars", usage_4_desc: "Drive 3D digital avatars, play with full-body control, or stream without cameras or external optical beacons.", usage_4_link: "I'm interested in creation ↗",
      explore_note: "Additional R&D tracks: master craft gesture digitization, biomechanical research, and robotics.",
      privacy_kicker: "Privacy by Design", privacy_title: "Measuring without filming is an intentional choice",
      privacy_desc: "Human motion data is personal and sensitive. We treat privacy as a fundamental, core product feature.",
      priv_1_title: "Zero Cameras", priv_1_desc: "The device contains only inertial measurement units (IMUs): no cameras, zero risk of visual exposure.",
      priv_2_title: "Data Sovereignty", priv_2_desc: "We collect only essential metrics strictly required for your usage, secured with end-to-end encryption.",
      priv_3_title: "Full Transparency", priv_3_desc: "Data storage, governance, and export rights are clearly defined prior to registration.",
      team_kicker: "The People Behind the Tech", team_title: "A team driven by engineering and biomechanics",
      team_desc: "Cinexenic was built at the intersection of embedded hardware design, signal processing science, and European startup innovation.",
      team_1_title: "Founder & CTO", team_1_role: "Electronics, Automation & Data Engineer", team_1_desc: "Passionate about human motion modeling and architect of Cinexenic's hardware design.",
      team_2_title: "EuropaTech", team_2_role: "Incubation & Industrial Acceleration", team_2_desc: "Europe's leading startup incubator based in Berlin.",
      team_3_title: "Scientific & Data Advisory", team_3_role: "Biomechanics & AI Algorithms", team_3_desc: "Expert advisors in sports science and signal processing.",
      faq_kicker: "FAQ", faq_title: "Frequently Asked Questions",
      faq_q1: "What is Cinexenic?", faq_a1: "Cinexenic is a wearable body sensor device that transforms human motion into actionable data without cameras or heavy infrastructure.",
      faq_q2: "Does it require a camera or equipped studio?", faq_a2: "No. The device is worn directly on the body and measures movement natively.",
      faq_q3: "What are the target applications?", faq_a3: "Sports, movement recovery tracking, workplace ergonomics, and digital creation.",
      faq_q4: "When will pre-orders open?", faq_a4: "Sign up for the waitlist to receive priority notifications.",
      faq_q5: "Is my movement data protected?", faq_a5: "The device collects zero visual imagery. Strict GDPR compliance.",
      signup_title: "Join the movement", signup_desc: "Get notified when pre-orders open and help us prioritize the first software modules to launch.",
      form_email: "Email Address", form_usage: "Primary Area of Interest",
      opt_1: "Padel or Tennis", opt_2: "Health & Recovery Tracking", opt_3: "Ergonomics & MSD Prevention", opt_4: "Creation, Gaming & VR", opt_5: "Custom / Other Applications",
      form_consent: "I agree to be contacted regarding Cinexenic updates.", form_submit: "Join the movement"
    },
    de: {
      hero_badge: "Unterstützt von EuropaTech",
      hero_title: "Bewegung messen, ohne zu filmen.",
      hero_lead: "Cinexenic ist ein tragbares Wear-and-Play-Gerät, das menschliche Bewegungen ohne Kameras in nutzbare Daten umwandelt.",
      btn_movement: "Der Bewegung beitreten", btn_how: "Erfahren Sie, wie es funktioniert",
      demo_caption: "Vollständig simulierte Demo: Rohe Signale (links) und rekonstruierte Geste (rechts).",
      fact_1_title: "Ein Sensor, keine Kamera", fact_1_desc: "Nur die Bewegung wird gemessen – Ihr visuelles Bild bleibt absolut privat.",
      fact_2_title: "Sichtbare Rohdaten", fact_2_desc: "Sehen Sie, was der Sensor aufzeichnet, vor jeder KI-Analyse.",
      fact_3_title: "Ein Gerät, viele Anwendungen", fact_3_desc: "Sport, Gesundheit, Ergonomie, Kreation: Eine einzige einheitliche Datenplattform.",
      step_kicker: "Technologischer Wandel", step_title: "Von der Geste zur Erkenntnis in drei Schritten",
      step_1_title: "Tragen", step_1_desc: "Ziehen Sie das ultraleichte Gerät an. Keine Kameraeinstellung, keine Videomarker, kein Studio.",
      step_2_title: "Bewegen", step_2_desc: "Spielen, arbeiten oder trainieren Sie: Integrierte Sensoren erfassen die Biomechanik kontinuierlich.",
      step_3_title: "Verstehen", step_3_desc: "Visualisieren Sie Rohdaten und Gesten-Scoring auf Mobilgeräten, Tablets oder dem Cloud-Dashboard.",
      usages_kicker: "Multi-Branchen", usages_title: "Ein einziges Gerät, wirkungsvolle Anwendungen",
      usages_intro: "Wählen Sie Ihr Interessengebiet aus:",
      usage_1_title: "Padel und Tennis", usage_1_desc: "Analysieren Sie Aufschlag, Smash und Positionierung. Vergleichen Sie Ihre Geste mit Trainer-Referenzen.", usage_1_link: "Dieser Sport interessiert mich ↗",
      usage_2_title: "Gesundheit & Gesten-Tracking", usage_2_desc: "Messen Sie die Gelenkreichweite zwischen Physiotherapiesitzungen.", usage_2_link: "Gesundheit interessiert mich ↗",
      usage_3_title: "Ergonomie & BEM-Prävention", usage_3_desc: "Kartografieren Sie die körperliche Belastung von Industriearbeitern ohne Videokameras.", usage_3_link: "Ergonomie interessiert mich ↗",
      usage_4_title: "Kreation, Gaming & 3D-Avatare", usage_4_desc: "Steuern Sie digitale Avatare und spielen Sie mit Ihrem Körper ohne Kameras.", usage_4_link: "Kreation interessiert mich ↗",
      explore_note: "Zusätzliche F&E-Bereiche: Digitalisierung von Handwerkskunst, Biomechanik-Forschung und Robotik.",
      privacy_kicker: "Privacy by Design", privacy_title: "Messen ohne zu filmen ist eine Designentscheidung",
      privacy_desc: "Bewegungsdaten sind sensible persönliche Daten. Datenschutz ist für uns ein Kernmerkmal.",
      priv_1_title: "Keine Bilder", priv_1_desc: "Das Gerät enthält nur Inertialsensoren (IMU): keine Kameras, null Risiko visueller Leaks.",
      priv_2_title: "Datensouveränität", priv_2_desc: "Wir erfassen nur die für Ihre Nutzung erforderlichen Metriken mit Ende-zu-Ende-Verschlüsselung.",
      priv_3_title: "Volle Transparenz", priv_3_desc: "Speicherung, Governance und Exportrechte Ihrer Daten sind vor der Registrierung klar beschrieben.",
      team_kicker: "Die Gesichter des Projekts", team_title: "Ein Team aus Ingenieurskunst und Biomechanik",
      team_desc: "Cinexenic entstand aus der Verbindung von eingebetteter Elektronik, Signalverarbeitung und europäischer Innovation.",
      team_1_title: "Gründer & CTO", team_1_role: "Ingenieur für Elektronik, Automatisierung & Daten", team_1_desc: "Leidenschaftlich in der Modellierung menschlicher Bewegungen.",
      team_2_title: "EuropaTech", team_2_role: "Inkubation & industrielle Beschleunigung", team_2_desc: "Europas führender Startup-Hub in Berlin.",
      team_3_title: "Wissenschaftlicher Beirat", team_3_role: "Biomechanik & KI-Algorithmen", team_3_desc: "Expertenberater für Sportwissenschaften.",
      faq_kicker: "FAQ", faq_title: "Häufig gestellte Fragen",
      faq_q1: "Was ist Cinexenic?", faq_a1: "Cinexenic ist ein tragbares Körpersensorgerät, das menschliche Bewegungen ohne Kameras in nutzbare Daten umwandelt.",
      faq_q2: "Wird eine Kamera oder ein ausgestatteter Raum benötigt?", faq_a2: "Nein. Das Gerät wird am Körper getragen und misst Bewegungen direkt.",
      faq_q3: "Für welche Anwendungen?", faq_a3: "Sport, Gestenverfolgung, ergonomische Prävention und digitale Kreation.",
      faq_q4: "Wann wird es erhältlich sein?", faq_a4: "Melden Sie sich für die Warteliste an, um priorisiert benachrichtigt zu werden.",
      faq_q5: "Sind meine Bewegungsdaten geschützt?", faq_a5: "Das Gerät erfasst keinerlei visuelle Bilder. Strenge DSGVO-Konformität.",
      signup_title: "Der Bewegung beitreten", signup_desc: "Werden Sie über den Start informiert und gestalten Sie die ersten Anwendungsmodule mit.",
      form_email: "E-Mail-Adresse", form_usage: "Interessengebiet",
      opt_1: "Padel oder Tennis", opt_2: "Gesundheit & Tracking", opt_3: "Ergonomie & BEM-Prävention", opt_4: "Kreation, Gaming & VR", opt_5: "Maßgeschneiderte Nutzung",
      form_consent: "Ich stimme zu, bezüglich Cinexenic kontaktiert zu werden.", form_submit: "Der Bewegung beitreten"
    }
  };

  function applyPageLanguage(lang) {
    if (!PAGE[lang]) lang = "fr";
    var dict = PAGE[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
  }

  /* Réagir au changement de langue déclenché par common.js,
     et s'appliquer une première fois au chargement. */
  document.addEventListener("cinexenic:lang", function (e) {
    applyPageLanguage(e.detail.lang);
  });
  applyPageLanguage(
    (function () {
      try { return localStorage.getItem("cinexenic_lang") || "fr"; } catch (err) { return "fr"; }
    })()
  );

  /* ============================================================
     2. DÉMO CANVAS (signaux IMU + geste reconstruit)
     ============================================================ */
  var W = 640, H = 420, TAU = Math.PI * 2;
  var TRACES = [
    { label: "accélération x", color: "#F2B01E" },
    { label: "accélération y", color: "#8FB8FF" },
    { label: "gyroscope z", color: "#FFFFFF" }
  ];

  function signal(t, k) {
    return Math.sin(t * 1.7 + k) * 0.6 + Math.sin(t * 3.9 + k * 2) * 0.3 * (1 + Math.sin(t * 0.9));
  }

  function startDemo(canvas) {
    var g = canvas.getContext("2d");
    if (!g) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    g.scale(dpr, dpr);

    var seg = function (a, b) { g.beginPath(); g.moveTo(a[0], a[1]); g.lineTo(b[0], b[1]); g.stroke(); };
    var dot = function (p, r, color) { g.fillStyle = color; g.beginPath(); g.arc(p[0], p[1], r, 0, TAU); g.fill(); };

    function drawTraces(t) {
      g.font = "12px system-ui, sans-serif";
      TRACES.forEach(function (trace, k) {
        var y0 = 90 + k * 110;
        g.strokeStyle = "rgba(255,255,255,.2)"; seg([20, y0], [320, y0]);
        g.strokeStyle = trace.color; g.beginPath();
        for (var i = 0; i <= 300; i += 3) {
          var y = y0 - signal(t - (300 - i) * 0.012, k) * 38;
          if (i) g.lineTo(20 + i, y); else g.moveTo(20 + i, y);
        }
        g.stroke();
        g.fillStyle = "rgba(255,255,255,.75)"; g.fillText(trace.label, 20, y0 - 50);
      });
    }

    function drawFigure(t) {
      var s = Math.sin(t * 1.7), cx = 500;
      var hip = [cx, 250], neck = [cx + s * 8, 150];
      var a1 = -1.57 + s * 1.4, a2 = a1 + 0.6 * Math.sin(t * 1.7 + 1);
      var elbow = [neck[0] + 70 * Math.cos(a1), neck[1] + 70 * Math.sin(a1)];
      var wrist = [elbow[0] + 60 * Math.cos(a2), elbow[1] + 60 * Math.sin(a2)];
      g.strokeStyle = "#fff";
      seg(neck, hip); seg(hip, [cx - 34, 360]); seg(hip, [cx + 34, 360]);
      seg(neck, elbow); seg(elbow, wrist); seg(neck, [cx - 50, 190]);
      g.beginPath(); g.arc(neck[0], neck[1] - 24, 18, 0, TAU); g.stroke();
      dot(elbow, 5, "#8FB8FF"); dot(hip, 5, "#8FB8FF"); dot(wrist, 8, "#F2B01E");
    }

    var frame = function (t) { g.clearRect(0, 0, W, H); g.lineWidth = 2; drawTraces(t); drawFigure(t); };

    /* Reduced motion : une frame statique, pas d'animation */
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return frame(1.2);

    var raf = 0;
    var loop = function (ms) { frame(ms / 1000); raf = requestAnimationFrame(loop); };
    /* IntersectionObserver : l'animation ne tourne que si le canvas est visible */
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { if (!raf) raf = requestAnimationFrame(loop); }
        else { cancelAnimationFrame(raf); raf = 0; }
      }).observe(canvas);
    } else {
      raf = requestAnimationFrame(loop); /* repli navigateurs anciens */
    }
  }

  var canvas = document.getElementById("demo");
  if (canvas) startDemo(canvas);
})();