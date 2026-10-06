"use client";

import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";
import PremiumButton from "./PremiumButton";
import ProjectsSheet from "./ProjectsSheet";
import OffresSheet from "./OffresSheet";

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeCurve,
    },
  },
};

export default function HeroBlock() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isOffresOpen, setIsOffresOpen] = useState(false);

  return (
    <>
      <main className="relative z-10 w-full min-h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-8 py-8 sm:py-12 max-w-2xl mx-auto overflow-hidden">
        {/* Top: Status pill */}
        <motion.header
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex justify-center pt-2 sm:pt-4"
        >
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="status-emerald-pulse absolute inline-flex h-full w-full rounded-full bg-[#3ECF80]" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3ECF80]" />
            </span>
            <span className="text-[11px] sm:text-xs font-sans tracking-wide text-[#EDEDED]/90 font-light">
              Disponible pour de nouveaux projets
            </span>
          </div>
        </motion.header>

        {/* Center: Hero Identity & Navigation Menu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center text-center my-auto py-8 sm:py-12"
        >
          {/* Main Title (Grand Serif) */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#EDEDED] leading-none mb-3 select-none"
          >
            Kadmiel Abe<span className="text-[#3ECF80]">.</span>
          </motion.h1>

          {/* Subtitle (Geometric Sans spaced) */}
          <motion.p
            variants={itemVariants}
            className="text-[11px] sm:text-xs font-sans font-medium uppercase tracking-[0.22em] text-[#A1A1AA] mb-4 sm:mb-6"
          >
            Développeur Full Stack & Créatif
          </motion.p>

          {/* Description (Discreet, refined) */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-[#A1A1AA]/80 max-w-md mx-auto font-light leading-relaxed mb-10 sm:mb-14"
          >
            Création d&apos;expériences web performantes et sur mesure pour les entreprises ambitieuses.
          </motion.p>

          {/* Luxury Interactive Navigation Menu */}
          <motion.nav
            variants={itemVariants}
            className="w-full max-w-lg mx-auto"
            aria-label="Navigation principale"
          >
            <div className="flex flex-col">
              <PremiumButton
                number="01"
                label="Réalisations"
                sublabel="Travaux choisis"
                onClick={() => setIsProjectsOpen(true)}
              />
              <PremiumButton
                number="02"
                label="Offres & Tarifs"
                sublabel="Formules & Packs"
                onClick={() => setIsOffresOpen(true)}
              />
              <PremiumButton
                number="03"
                label="Discuter d'un projet"
                sublabel="WhatsApp direct"
                href="https://wa.me/2250706978570"
                isExternal
                isLast
              />
            </div>
          </motion.nav>
        </motion.div>

        {/* Bottom: Minimalist Footer */}
        <motion.footer
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A1A1AA]/60 font-mono tracking-wider pt-4 border-t border-white/5 space-y-2 sm:space-y-0"
        >
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/kadmiel-abe-b975a3346/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EDEDED] transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kadmiel-abe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#EDEDED] transition-colors duration-300"
            >
              GitHub
            </a>
          </div>

          <div className="text-center sm:text-right">
            <span>Abidjan, Côte d&apos;Ivoire</span>
          </div>
        </motion.footer>
      </main>

      {/* Sheets Drawers */}
      <ProjectsSheet open={isProjectsOpen} onOpenChange={setIsProjectsOpen} />
      <OffresSheet open={isOffresOpen} onOpenChange={setIsOffresOpen} />
    </>
  );
}
