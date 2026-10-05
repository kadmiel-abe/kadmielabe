"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageSquare, ShieldCheck, Zap, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white overflow-hidden">
      {/* Background Ambient Green Gradient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-100/40 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="uppercase tracking-wider font-bold">Développeur Web Freelance</span>
            <span className="text-emerald-400">•</span>
            <span className="text-gray-700 font-normal">Abidjan & Remote</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6"
          >
            Transformez votre vision en{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
              solutions web performantes.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto mb-10"
          >
            Je suis <strong className="font-semibold text-gray-900">Kadmiel Abe</strong>. J'accompagne les entreprises ambitieuses dans la création de sites vitrines, d'applications web et de plateformes sur-mesure aux standards internationaux.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="https://wa.me/#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-base"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Discuter de mon projet</span>
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold px-7 py-3.5 rounded-xl border border-gray-200 transition-all text-base"
            >
              <span>Voir mes réalisations</span>
              <ArrowDown className="w-4 h-4 text-gray-500" />
            </a>
          </motion.div>

          {/* Trust Badges Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-100 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100/50">
              <Zap className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Performance</p>
                <p className="text-sm font-semibold text-gray-900">Ultra-rapide & SEO</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100/50">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Qualité</p>
                <p className="text-sm font-semibold text-gray-900">Standards Internationaux</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-3 p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100/50">
              <Globe className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Cible B2B</p>
                <p className="text-sm font-semibold text-gray-900">Afrique & International</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
