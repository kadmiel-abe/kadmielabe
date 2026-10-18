"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Quote,
  Layers,
  Code2,
  Terminal,
  Cpu,
  Linkedin,
  Github,
} from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const skillsTicker = [
    "Next.js 15",
    "Applications SaaS",
    "Tailwind CSS",
    "TypeScript",
    "Supabase & Cloud",
    "Architecture B2B",
    "SEO & Performance 99+",
    "APIs & Automatisation",
    "Design UI/UX",
  ];

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 overflow-hidden bg-[#FAF9F5] dark:bg-[#0B0B0C] text-gray-900 dark:text-[#EDEDED] transition-colors duration-300"
    >
      {/* Subtle organic background mesh / radial aura */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full bg-emerald-500/[0.08] dark:bg-emerald-500/[0.12] blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-40 dark:opacity-25 -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Header Row: Status badge & Rotating Seal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 relative">
          <div className="sm:w-1/4" />

          {/* Center Award Pill Badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-[#141417] border border-gray-200 dark:border-white/10 shadow-sm text-xs font-heading font-medium tracking-wide text-gray-800 dark:text-gray-200"
          >
            <div className="w-5 h-5 rounded-full bg-black border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-sm">
              <span className="font-mono text-[9px] font-black tracking-tighter">&lt;/&gt;</span>
            </div>
            <span>Développeur Web &amp; Stratège Digital Freelance</span>
          </motion.div>

          {/* Right Rotating "Hire Me" Seal Badge with Magnetic interaction */}
          <div className="sm:w-1/4 flex justify-end">
            <Magnetic strength={0.3}>
              <a
                href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20collaborer%20avec%20vous."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Engager Kadmiel Abe sur WhatsApp"
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center group cursor-pointer shrink-0 transition-transform hover:scale-105 active:scale-95"
              >
                {/* Spinning Circular Text Ring */}
                <div className="absolute inset-0 animate-rotate-seal">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <path
                      id="sealCirclePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[9.5px] font-heading font-black uppercase tracking-[0.25em] fill-gray-900 dark:fill-gray-100">
                      <textPath href="#sealCirclePath" startOffset="0%">
                        • HIRE ME • DISPONIBLE POUR PROJETS
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Center Stamp Icon: Logo on black background */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black border border-emerald-500/60 text-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(17,145,52,0.4)] group-hover:border-emerald-400 group-hover:scale-105 transition-all duration-300">
                  <span className="font-mono text-sm sm:text-base font-black tracking-tighter">&lt;/&gt;</span>
                </div>
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Big Syne Title with Masked Line/Word Reveal */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 overflow-hidden">
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-gray-900 dark:text-white"
          >
            <span className="inline-block overflow-hidden align-top">
              <motion.span
                initial={shouldReduceMotion ? { y: 0 } : { y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Je suis{" "}
              </motion.span>
            </span>
            <span className="relative inline-block text-emerald-600 dark:text-emerald-400 overflow-hidden align-top ml-2 sm:ml-3">
              <motion.span
                initial={shouldReduceMotion ? { y: 0 } : { y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.42, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center"
              >
                Kadmiel Abe
                {/* Logo icon badge near main title with black background */}
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-black border border-emerald-500/60 shadow-[0_0_12px_rgba(17,145,52,0.4)] align-middle ml-2 sm:ml-3 -translate-y-1 sm:-translate-y-2 group hover:rotate-12 transition-transform duration-300"
                >
                  <span className="font-mono text-xs sm:text-sm font-black text-emerald-400 tracking-tighter">
                    &lt;/&gt;
                  </span>
                </span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
            className="mt-4 sm:mt-5 text-sm sm:text-lg md:text-xl font-medium text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Concepteur d&apos;applications SaaS et de plateformes B2B basé à Abidjan
          </motion.p>
        </div>

        {/* 3-Column Interactive Stage: Left Social & Reviews, Center Portrait & Badges & CTA, Right Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Column: Social Links & Valued Clients Review Card */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start gap-6 order-2 lg:order-1">
            {/* Social follow block */}
            <div className="space-y-2 text-center lg:text-left">
              <p className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Suivez-moi :
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.linkedin.com/in/kadmiel-abe-b975a3346/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Kadmiel Abe"
                  className="w-10 h-10 rounded-full bg-white dark:bg-[#141416] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 shadow-sm transition-all hover:-translate-y-1"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/kadmiel-abe"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Kadmiel Abe"
                  className="w-10 h-10 rounded-full bg-white dark:bg-[#141416] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 shadow-sm transition-all hover:-translate-y-1"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/kadmielogodwin.abe.3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de Kadmiel Abe"
                  className="w-10 h-10 rounded-full bg-white dark:bg-[#141416] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 shadow-sm transition-all hover:-translate-y-1"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@kadmiel_officiel255?_r=1&_t=ZS-9APHfi4BUUk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok de Kadmiel Abe"
                  className="w-10 h-10 rounded-full bg-white dark:bg-[#141416] border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/50 shadow-sm transition-all hover:-translate-y-1"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.65 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.33-6.33V9.05a8.16 8.16 0 0 0 4.91 1.62V7.21a4.85 4.85 0 0 1-1-.52z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Social Proof Avatar stack pill */}
            <div className="p-4 rounded-2xl bg-white/90 dark:bg-[#141416]/90 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-md max-w-xs">
              <div className="flex items-center -space-x-2.5 mb-2.5">
                <Image
                  src="/Sophie L.jpg"
                  alt="Client Sophie L."
                  width={34}
                  height={34}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-[#141416] object-cover"
                />
                <Image
                  src="/amadine.jpg"
                  alt="Client Amandine K."
                  width={34}
                  height={34}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-[#141416] object-cover"
                />
                <Image
                  src="/julien.jpg"
                  alt="Client Julien R."
                  width={34}
                  height={34}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-[#141416] object-cover"
                />
                <Image
                  src="/marc.jpg"
                  alt="Client Marc A."
                  width={34}
                  height={34}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-[#141416] object-cover"
                />
              </div>
              <p className="font-heading font-extrabold text-sm text-emerald-600 dark:text-emerald-400">
                100% Recommandé (5.0 / 5)
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Avis vérifiés de clients B2B &amp; Fondateurs
              </p>
            </div>
          </div>

          {/* Center Column: Portrait with Organic Backdrop, Floating Skill Pills, and Dual CTA Pill Bar */}
          <div className="lg:col-span-6 relative flex flex-col items-center order-1 lg:order-2 overflow-visible">
            {/* Backdrop graphic oval/layered shape */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-emerald-500/10 to-transparent -z-10 blur-xl pointer-events-none"
              aria-hidden="true"
            />
            {/* Outer striped concentric graphic circle */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-emerald-500/20 dark:border-emerald-500/30 -z-10 pointer-events-none"
              aria-hidden="true"
            />

            {/* Portrait & Floating Badges Relative Anchor */}
            <div className="relative overflow-visible">
              {/* Portrait Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden p-2 bg-gradient-to-b from-emerald-500/40 via-transparent to-emerald-500/20 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-black/5 dark:bg-black/40 relative">
                  <Image
                    src="/profil.png"
                    alt="Kadmiel Abe - Développeur Web Freelance"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Skill Badges (Anchored to the circular portrait with continuous float) */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="absolute top-3 -left-2 sm:top-6 sm:-left-6 z-20 px-3 sm:px-3.5 py-1.5 rounded-full bg-white dark:bg-[#18181B] text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 text-[11px] sm:text-xs font-heading font-semibold shadow-xl backdrop-blur-md flex items-center gap-1.5 animate-float-1 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Next.js 15</span>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="absolute top-5 -right-2 sm:top-8 sm:-right-6 z-20 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-500 text-black text-[11px] sm:text-xs font-heading font-bold shadow-xl shadow-emerald-500/25 flex items-center gap-1.5 animate-float-2 whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 fill-black" />
                <span>Applications SaaS</span>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="absolute bottom-20 -right-2 sm:bottom-24 sm:-right-4 z-20 px-3 sm:px-3.5 py-1.5 rounded-full bg-white dark:bg-[#18181B] text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 text-[11px] sm:text-xs font-heading font-semibold shadow-xl backdrop-blur-md flex items-center gap-1.5 animate-float-3 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>TypeScript</span>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="absolute bottom-14 -left-2 sm:bottom-18 sm:-left-4 z-20 px-3.5 py-1.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 text-[11px] sm:text-xs font-heading font-bold shadow-xl backdrop-blur-md animate-float-1 whitespace-nowrap"
              >
                Tailwind CSS
              </motion.div>
            </div>

            {/* Overlapping Dual CTA Button Bar with Magnetic physics */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2, ease: "easeOut" }}
              className="mt-6 z-30"
            >
              <Magnetic strength={0.2}>
                <div className="p-1.5 rounded-full bg-white/90 dark:bg-[#141416]/90 border border-gray-200 dark:border-white/10 shadow-2xl backdrop-blur-xl flex items-center gap-2">
                  {/* Primary Filled Emerald Button */}
                  <a
                    href="#portfolio"
                    className="px-6 sm:px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-heading font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
                  >
                    <span>Mes Réalisations</span>
                    <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </a>

                  {/* Secondary Outline / Clean Button */}
                  <a
                    href="#contact"
                    className="px-6 sm:px-7 py-3 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 active:scale-95 border border-gray-300 dark:border-white/20"
                  >
                    <span>Me Contacter</span>
                  </a>
                </div>
              </Magnetic>
            </motion.div>
          </div>

          {/* Right Column: Quote Badge */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end order-3">
            <div className="p-6 rounded-3xl bg-white/90 dark:bg-[#141416]/90 border border-gray-200 dark:border-white/10 shadow-lg backdrop-blur-md max-w-xs relative">
              <div className="w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-500 mb-3">
                <Quote className="w-4 h-4 fill-emerald-500" />
              </div>
              <p className="font-heading text-sm text-gray-800 dark:text-gray-200 leading-snug font-semibold">
                « Des solutions web haute performance conçues pour automatiser votre gestion et propulser vos ventes. »
              </p>
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
                <span className="font-mono uppercase tracking-wider">Kadmiel Abe</span>
                <span className="text-emerald-500 font-bold">Standard Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Continuous Marquee Ticker (Signature element from reference!) */}
      <div className="mt-16 sm:mt-20 py-4 bg-[#0a0a0c] text-white border-y border-white/10 overflow-hidden select-none">
        <div className="animate-marquee-smooth flex items-center gap-8 sm:gap-12 whitespace-nowrap">
          {[...skillsTicker, ...skillsTicker, ...skillsTicker].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-12">
              <span className="font-heading text-sm sm:text-base font-extrabold tracking-wide uppercase text-gray-200 hover:text-emerald-400 transition-colors">
                {item}
              </span>
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 fill-emerald-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
