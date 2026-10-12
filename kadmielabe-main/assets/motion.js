/**
 * ==============================================================================
 * KADMIEL ABE — MOTION CONTROLLER JS (RÉVÉLATION & SCROLL PROGRESSIF)
 * ==============================================================================
 * Rôles :
 *  - Observe les sections et éléments existants au scroll (une seule fois).
 *  - Applique les transitions d'entrée de manière échelonnée (stagger).
 *  - Détecte 'prefers-reduced-motion' : désactivation immédiate si actif.
 *  - Tolérance aux pannes : Si JS désactivé ou erreur, le site reste 100% visible.
 * ==============================================================================
 */

(function () {
  "use strict";

  // 1. Vérification prefers-reduced-motion
  if (
    typeof window === "undefined" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  // 2. Configuration des seuils d'apparition
  const CONFIG = {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
    staggerDelayMs: 80,
  };

  function initMotionObserver() {
    if (!("IntersectionObserver" in window)) return;

    // Cibles détectées par sélecteurs existants (sans modifier le HTML)
    const targets = document.querySelectorAll(
      "section, #projets article, #services .grid > div, #processus .grid > div, #tarifs .grid > div, #faq .space-y-4 > div, footer"
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add("motion-visible");
          obs.unobserve(el); // Exécuté une seule fois par élément
        }
      });
    }, {
      threshold: CONFIG.threshold,
      rootMargin: CONFIG.rootMargin,
    });

    targets.forEach((el) => {
      // Évite d'interférer avec le Hero already visible
      if (el.closest("header") || el.tagName.toLowerCase() === "header") return;
      observer.observe(el);
    });
  }

  // Lancement automatique au chargement du DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMotionObserver);
  } else {
    initMotionObserver();
  }
})();
