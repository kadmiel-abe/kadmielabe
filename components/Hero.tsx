"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowDown, Sparkles, Code2, TrendingUp, ShieldCheck } from "lucide-react";

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: easeCurve,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeCurve,
    },
  },
};

export default function Hero() {
  const nameWords = ["Kadmiel", "Abe."];

  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 bg-[#09090b] overflow-hidden bg-grid-subtle">
      {/* Dynamic Animated Ambient Background Glows */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-r from-emerald-500/20 via-cyan-500/15 to-blue-600/10 rounded-full blur-[140px] -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeCurve }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121215]/80 backdrop-blur-md border border-white/10 text-xs font-medium text-gray-300 mb-8 shadow-glow-emerald"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="status-emerald-pulse absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="uppercase tracking-widest text-[11px] bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-bold">
              Disponible pour de nouveaux projets
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400 text-xs font-mono">Abidjan & Remote</span>
          </motion.div>

          {/* Word-by-Word Animated Title */}
          <div className="mb-4">
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]"
            >
              {nameWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-3 sm:mr-4 bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <span className="inline-block text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Développeur Web & Stratège Digital.
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="font-sans text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-10 max-w-2xl"
          >
            Je conçois des applications web performantes et des stratégies numériques qui transforment la présence en ligne des entreprises ivoiriennes et internationales.
          </motion.p>

          {/* Animated Action Buttons */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16"
          >
            {/* Primary Button */}
            <motion.a
              href="#projets"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_-5px_rgba(17,145,52,0.6)] hover:shadow-[0_0_40px_0px_rgba(6,182,212,0.6)] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-100" />
              <span>Voir mes projets</span>
              <ArrowDown className="w-4 h-4 text-white" />
            </motion.a>

            {/* Secondary Button */}
            <motion.a
              href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20discuter%20d'un%20projet%20web%20et%20de%20strategie%20digitale."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#121215] hover:bg-[#18181d] text-gray-200 hover:text-white font-medium text-sm border border-white/10 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Discuter sur WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Interactive Reassurance Metrics Cards */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-8 border-t border-white/10"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center justify-center sm:justify-start gap-3.5 p-4 rounded-2xl bg-[#121215]/80 border border-white/5 hover:border-emerald-500/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 font-mono tracking-wider uppercase">FULL-STACK & SAAS</p>
                <p className="text-sm font-semibold text-white">Next.js, React & Supabase</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center justify-center sm:justify-start gap-3.5 p-4 rounded-2xl bg-[#121215]/80 border border-white/5 hover:border-cyan-500/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 font-mono tracking-wider uppercase">STRATÉGIE DIGITALE</p>
                <p className="text-sm font-semibold text-white">Acquisition & Contenu Vidéo</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center justify-center sm:justify-start gap-3.5 p-4 rounded-2xl bg-[#121215]/80 border border-white/5 hover:border-blue-500/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 font-mono tracking-wider uppercase">STANDARDS PREMIUM</p>
                <p className="text-sm font-semibold text-white">Abidjan & International</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
