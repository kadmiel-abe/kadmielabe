"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Mail } from "lucide-react";

// Sous-composant isolé pour la machine à écrire (évite de re-render tout le Hero toutes les 35ms)
function TypingTitle({ brandGreen }: { brandGreen: string }) {
  const fullText = "Développeur Web & Stratège Digital.";
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText.length < fullText.length) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 70);
    } else if (!isDeleting && typedText.length === fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500); // Maintien du texte affiché pendant 2.5s
    } else if (isDeleting && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length - 1));
      }, 35);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting]);

  return (
    <span>
      {typedText.includes("Digital.") ? (
        <>
          {typedText.replace("Digital.", "")}
          <span className="inline-flex items-center whitespace-nowrap">
            <span className={brandGreen}>Digital.</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block w-[3px] h-[0.85em] bg-emerald-400 ml-1.5 align-middle rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"
            />
          </span>
        </>
      ) : (
        <span className="inline-flex items-center whitespace-nowrap">
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block w-[3px] h-[0.85em] bg-emerald-400 ml-1.5 align-middle rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"
          />
        </span>
      )}
    </span>
  );
}

export default function Hero() {
  const brandGreen = "text-emerald-400";
  const bgGreen = "bg-emerald-500";
  const hoverGreen = "hover:bg-emerald-400";

  // Accessibilité & Détection tactile
  const shouldReduceMotion = useReducedMotion();
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    setIsTouch(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Animation interactive au curseur strictement isolée au titre
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || isTouch || !titleWrapperRef.current) return;
    const rect = titleWrapperRef.current.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] mt-20 flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden px-4 py-8 sm:py-12">
      {/* Background Grid Pattern (très subtil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center w-full">
        {/* Photo de Profil avec lueur néon émeraude pulsante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            boxShadow: [
              "0 0 15px rgba(16,185,129,0.2)",
              "0 0 45px rgba(16,185,129,0.7)",
              "0 0 15px rgba(16,185,129,0.2)",
            ],
          }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut" },
            scale: { duration: 0.6, ease: "easeOut" },
            boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="w-24 h-24 sm:w-28 sm:h-28 mb-6 sm:mb-8 rounded-full border-2 border-emerald-400/50 overflow-hidden ring-4 ring-[#0a0a0a] relative shrink-0"
        >
          <Image
            src="/photo.jpg"
            alt="Kadmiel Abe"
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>

        {/* Wrapper isolé pour l'animation liée au curseur sur le titre UNIQUEMENT */}
        <motion.div
          ref={titleWrapperRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={
            shouldReduceMotion || isTouch
              ? undefined
              : {
                  x: translateX,
                  y: translateY,
                  rotateX,
                  rotateY,
                  transformPerspective: 1000,
                }
          }
          className="relative max-w-3xl w-full mx-auto will-change-transform select-none"
        >
          {/* Calque décoratif en pointer-events: none */}
          <div
            className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-emerald-500/[0.03] blur-2xl"
            aria-hidden="true"
          />

          {/* Titre H1 avec alignement strict du curseur de saisie */}
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 max-w-3xl min-h-[100px] sm:min-h-[140px] flex items-center justify-center flex-wrap"
          >
            <TypingTitle brandGreen={brandGreen} />
          </motion.h1>
        </motion.div>

        {/* Sous-titre (élément frère indépendant, hors de l'élément animé) */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-light"
        >
          Je conçois des applications web performantes et des stratégies numériques sur-mesure pour automatiser votre gestion et propulser la croissance de votre entreprise.
        </motion.p>

        {/* Conteneur des Boutons (élément frère indépendant, cliquables avec leur hover habituel) */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Bouton Gauche ("Discuter du projet") */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className={`w-full sm:w-auto px-8 py-3.5 ${bgGreen} text-black font-semibold rounded-md ${hoverGreen} transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95 cursor-pointer`}
          >
            <Mail size={18} />
            <span>Discuter du projet</span>
          </motion.a>

          {/* Bouton Droite ("Voir les réalisations ↓") */}
          <motion.a
            href="#projets"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white border border-gray-700 font-medium rounded-md hover:bg-gray-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Voir les réalisations</span>
            <span className="text-sm">↓</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
