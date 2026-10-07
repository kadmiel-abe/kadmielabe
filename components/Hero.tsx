"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Hero() {
  const brandGreen = "text-emerald-400";
  const bgGreen = "bg-emerald-500";
  const hoverGreen = "hover:bg-emerald-400";

  // 1. Saisie en boucle infinie (Typing & Deleting Loop)
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
    <section className="relative min-h-[calc(100vh-80px)] mt-20 flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden px-4 py-8 sm:py-12 select-none">
      {/* Background Grid Pattern (très subtil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
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

        {/* Titre H1 avec Glissement initial + Saisie en boucle infinie & Curseur | */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 max-w-3xl min-h-[100px] sm:min-h-[140px] flex items-center justify-center flex-wrap"
        >
          <span>
            {typedText.includes("Digital.") ? (
              <>
                {typedText.replace("Digital.", "")}
                <span className={brandGreen}>Digital.</span>
              </>
            ) : (
              typedText
            )}
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-emerald-400 font-mono ml-1 inline-block"
          >
            |
          </motion.span>
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-light"
        >
          Je conçois des applications web performantes et des stratégies numériques sur-mesure pour automatiser votre gestion et propulser la croissance de votre entreprise.
        </motion.p>

        {/* Conteneur des Boutons & Curseur Interactif */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Bouton Gauche ("Discuter du projet") : Réagit de façon réaliste au clic du curseur */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: [1, 1, 0.92, 1, 1, 1, 1],
              boxShadow: [
                "0 0 15px rgba(16,185,129,0.3)",
                "0 0 15px rgba(16,185,129,0.3)",
                "0 0 35px rgba(16,185,129,0.9)",
                "0 0 15px rgba(16,185,129,0.3)",
                "0 0 15px rgba(16,185,129,0.3)",
                "0 0 15px rgba(16,185,129,0.3)",
                "0 0 15px rgba(16,185,129,0.3)",
              ],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.35, ease: "easeOut" },
              x: { duration: 0.7, delay: 0.35, ease: "easeOut" },
              scale: {
                duration: 6,
                repeat: Infinity,
                repeatDelay: 1,
                times: [0, 0.28, 0.32, 0.38, 0.7, 0.9, 1],
              },
              boxShadow: {
                duration: 6,
                repeat: Infinity,
                repeatDelay: 1,
                times: [0, 0.28, 0.32, 0.38, 0.7, 0.9, 1],
              },
            }}
            className={`w-full sm:w-auto px-8 py-3.5 ${bgGreen} text-black font-semibold rounded-md ${hoverGreen} transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95`}
          >
            <Mail size={18} />
            <span>Discuter du projet</span>
          </motion.a>

          {/* Bouton Droite ("Voir les réalisations ↓") : Réagit de façon réaliste au clic du curseur */}
          <motion.a
            href="#projets"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: [1, 1, 1, 1, 0.92, 1, 1],
              borderColor: [
                "rgba(55, 65, 81, 1)",
                "rgba(55, 65, 81, 1)",
                "rgba(55, 65, 81, 1)",
                "rgba(55, 65, 81, 1)",
                "rgba(16, 185, 129, 1)",
                "rgba(55, 65, 81, 1)",
                "rgba(55, 65, 81, 1)",
              ],
              backgroundColor: [
                "transparent",
                "transparent",
                "transparent",
                "transparent",
                "rgba(16, 185, 129, 0.2)",
                "transparent",
                "transparent",
              ],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.35, ease: "easeOut" },
              x: { duration: 0.7, delay: 0.35, ease: "easeOut" },
              scale: {
                duration: 6,
                repeat: Infinity,
                repeatDelay: 1,
                times: [0, 0.3, 0.65, 0.68, 0.72, 0.78, 1],
              },
              borderColor: {
                duration: 6,
                repeat: Infinity,
                repeatDelay: 1,
                times: [0, 0.3, 0.65, 0.68, 0.72, 0.78, 1],
              },
              backgroundColor: {
                duration: 6,
                repeat: Infinity,
                repeatDelay: 1,
                times: [0, 0.3, 0.65, 0.68, 0.72, 0.78, 1],
              },
            }}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white border border-gray-700 font-medium rounded-md hover:bg-gray-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <span>Voir les réalisations</span>
            <span className="text-sm">↓</span>
          </motion.a>

          {/* 4. Faux Curseur de Souris SVG Humain (Déplacement & Clics hyper-réalistes en boucle) */}
          <motion.div
            initial={{ opacity: 0, x: 100, y: -80, scale: 1 }}
            animate={{
              opacity: [0, 1, 1, 1, 1, 1, 0],
              x: [100, -130, -130, 130, 130, 100],
              y: [-80, 0, 0, 0, 0, -80],
              scale: [1, 1, 0.7, 1, 0.7, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
              times: [0, 0.28, 0.32, 0.68, 0.72, 0.9, 1],
            }}
            className="pointer-events-none absolute z-30 top-1/2 left-1/2 hidden sm:block filter drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]"
            aria-hidden="true"
          >
            {/* SVG Curseur de souris avec pointeur & halo émeraude */}
            <div className="relative">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-emerald-400 fill-emerald-400 stroke-black stroke-[1.5]"
              >
                <path d="M5.5 3.5L18.5 13.5H12L16 20.5L13.5 21.5L9.5 14.5L5.5 18V3.5Z" />
              </svg>
              {/* Onde de clic humaine (Click Ripple effect) sur le curseur */}
              <motion.span
                animate={{
                  scale: [0.5, 1.8, 0.5],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatDelay: 1,
                  times: [0, 0.32, 0.72],
                }}
                className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-emerald-400/40 pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
