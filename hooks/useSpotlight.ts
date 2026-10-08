"use client";

import { useEffect, useRef } from "react";

/**
 * Hook personnalisé useSpotlight
 * Met à jour les variables CSS --mouse-x et --mouse-y sur le conteneur cible lors du déplacement de la souris.
 * Performance optimale : utilise requestAnimationFrame et modifie directement le DOM sans provoquer de re-render React.
 */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const containerRef = useRef<T | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Ne s'active que sur les appareils prenant en charge le survol (hover)
    const isHoverable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isHoverable) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--mouse-x", `${x}px`);
        el.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    const handleMouseLeave = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      // Position par défaut au centre quand la souris quitte la carte
      rafId = requestAnimationFrame(() => {
        el.style.setProperty("--mouse-x", "50%");
        el.style.setProperty("--mouse-y", "50%");
      });
    };

    el.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return containerRef;
}
