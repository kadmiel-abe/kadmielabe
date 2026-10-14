"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Palette, Terminal, Rocket, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit & Cadrage Stratégique",
    description:
      "Nous analysons votre activité, vos clients cibles et vos concurrents. Nous définissons ensemble l'architecture exacte et les fonctionnalités indispensables pour maximiser la rentabilité.",
    duration: "Semaine 1",
  },
  {
    number: "02",
    icon: Palette,
    title: "Conception UI/UX & Maquettes",
    description:
      "Création de maquettes interactives haute fidélité. Vous visualisez et validez l'expérience utilisateur, l'identité visuelle et la fluidité des parcours de conversion avant le code.",
    duration: "Semaine 1 - 2",
  },
  {
    number: "03",
    icon: Terminal,
    title: "Développement Agile Next.js",
    description:
      "Intégration et programmation avec Next.js, React et Supabase. Code ultra-rapide, sécurisé et responsive, respectant scrupuleusement les normes d'accessibilité mondiales.",
    duration: "Semaine 2 - 3",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Tests, Déploiement & Suivi",
    description:
      "Audit de sécurité, vérification des scores SEO (Lighthouse 95+), déploiement sur infrastructure cloud sécurisée (Vercel) et formation pour vous rendre 100% autonome.",
    duration: "Livraison & Suivi",
  },
];

export default function Process() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="processus"
      className="py-24 sm:py-32 bg-[#FAF9F5] dark:bg-[#0E0E10] text-gray-900 dark:text-[#EDEDED] transition-colors duration-300 relative border-t border-gray-200 dark:border-[#1E1E22]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="flex items-center -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-white" />
            </div>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Méthodologie Transparente
            </span>
          </div>

          <h2 className="section-title-center text-gray-900 dark:text-white">
            Un processus clair, sans{" "}
            <span className="text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-2">
              imprévus ni retards
              <Sparkles className="w-5 h-5 text-emerald-500 shrink-0 fill-emerald-500" />
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
            De la première discussion jusqu&apos;à la mise en ligne, chaque étape est documentée et validée avec vous pour une sérénité totale.
          </p>
        </div>

        {/* Steps Grid with Chamfered Step Geometry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className="group relative p-6 sm:p-8 bg-white dark:bg-[#141416] rounded-2xl border border-gray-200/90 dark:border-white/10 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 chamfer-step flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-emerald-600 dark:text-emerald-400">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-extrabold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold inline-block">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
