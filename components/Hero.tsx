"use client";

import { motion, type Variants } from "framer-motion";
import { MessageSquare, ArrowDown, Zap, ShieldCheck, Globe, Star } from "lucide-react";

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: easeCurve },
  }),
};

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#0B0B0C] overflow-hidden bg-grid-subtle">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Availability Status Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121214] border border-[#1E1E22] text-xs font-medium text-gray-300 mb-8 shadow-xs"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="status-emerald-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="uppercase tracking-widest text-[11px] text-emerald-400 font-semibold">
              Disponible pour de nouveaux projets
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 text-xs">Abidjan & Remote</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#EDEDED] tracking-tight leading-[1.15] mb-6"
          >
            Des applications web sur-mesure qui{" "}
            <span className="italic font-normal bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
              propulsent
            </span>{" "}
            votre entreprise.
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="font-sans text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-light mb-10 max-w-2xl"
          >
            Je suis <strong className="font-semibold text-white">Kadmiel Abe</strong>, Développeur Web Freelance à Abidjan. J&apos;accompagne les entrepreneurs et PME ambitieuses dans la conception de plateformes SaaS, d&apos;outils métiers et de sites vitrines haut de gamme, sécurisés et orientés résultats.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
          >
            <a
              href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20discuter%20d'un%20projet%20web%20pour%20mon%20entreprise."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_-5px_rgba(17,145,52,0.5)] hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuter de mon projet</span>
            </a>
            <a
              href="#projets"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#121214] hover:bg-[#17171A] text-gray-200 hover:text-white font-medium text-sm border border-[#1E1E22] hover:border-gray-700 transition-all duration-300"
            >
              <span>Voir mes réalisations</span>
              <ArrowDown className="w-4 h-4 text-emerald-400" />
            </a>
          </motion.div>

          {/* Reassurance Metrics & Value Banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-8 border-t border-[#1E1E22]"
          >
            <div className="flex items-center justify-center sm:justify-start gap-3.5 p-4 rounded-xl bg-[#121214]/70 border border-[#1E1E22]">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <Zap className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 font-mono tracking-wider uppercase">PERFORMANCE EXTRÊME</p>
                <p className="text-sm font-semibold text-[#EDEDED]">Score Lighthouse 98+ & SEO</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3.5 p-4 rounded-xl bg-[#121214]/70 border border-[#1E1E22]">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 font-mono tracking-wider uppercase">SÉCURITÉ & ROBUSTESSE</p>
                <p className="text-sm font-semibold text-[#EDEDED]">Next.js & Supabase Cloud</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3.5 p-4 rounded-xl bg-[#121214]/70 border border-[#1E1E22]">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                <Globe className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 font-mono tracking-wider uppercase">STANDARDS INTERNATIONAUX</p>
                <p className="text-sm font-semibold text-[#EDEDED]">Afrique Francophone & Monde</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
