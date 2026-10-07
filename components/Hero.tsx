"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Hero() {
  const brandGreen = "text-emerald-400";
  const bgGreen = "bg-emerald-500";
  const hoverGreen = "hover:bg-emerald-400";

  // Machine à écrire (Typing effect) sur le titre
  const fullTextTitle = "Développeur Web & Stratège Digital.";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullTextTitle.length) {
        setTypedText(fullTextTitle.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] mt-20 flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden px-4 py-8 sm:py-12 select-none">
      {/* Background Grid Pattern (très subtil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* 3. Photo de Profil avec lueur néon émeraude pulsante (repeat: Infinity) */}
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

        {/* 1. Titre H1 avec Glissement de haut en bas (y: -50 -> 0) + Effet Machine à écrire & Curseur | */}
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

        {/* 2. Boutons CTA avec Glissement opposé (Gauche -> Droite & Droite -> Gauche) */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Bouton Gauche : Glisse de x: -50 -> 0 */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className={`w-full sm:w-auto px-8 py-3.5 ${bgGreen} text-black font-semibold rounded-md ${hoverGreen} transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95`}
          >
            <Mail size={18} />
            <span>Discuter du projet</span>
          </motion.a>

          {/* Bouton Droite : Glisse de x: 50 -> 0 */}
          <motion.a
            href="#projets"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white border border-gray-700 font-medium rounded-md hover:bg-gray-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <span>Voir les réalisations</span>
            <span className="text-sm">↓</span>
          </motion.a>

          {/* 4. Faux Curseur de Souris SVG (Guidage interactif animé en boucle infinie) */}
          <motion.div
            initial={{ opacity: 0, x: 80, y: -90, scale: 1 }}
            animate={{
              opacity: [0, 1, 1, 1, 1, 1, 0],
              x: [80, -120, -120, 120, 120, 80],
              y: [-90, 0, 0, 0, 0, -90],
              scale: [1, 1, 0.75, 1, 0.75, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeInOut",
              times: [0, 0.25, 0.35, 0.65, 0.75, 0.95, 1],
            }}
            className="pointer-events-none absolute z-30 top-1/2 left-1/2 hidden sm:block filter drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
            aria-hidden="true"
          >
            {/* SVG Curseur de souris classique avec halo émeraude */}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
