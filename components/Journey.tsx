"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";

interface JourneyItem {
  title: string;
  subtitle: string;
  period: string;
}

const educationList: JourneyItem[] = [
  {
    title: "SplashCI",
    subtitle: "Formation Avancée Développeur Web & IA",
    period: "2026",
  },
  {
    title: "Blemama",
    subtitle: "Certifications Conception Web, Next.js & Stratégie Digitale",
    period: "2025 - 2026",
  },
  {
    title: "INNOV'SCORING & DSI",
    subtitle: "Architecture Logicielle & Méthodes Agiles",
    period: "2024",
  },
  {
    title: "FIDJ",
    subtitle: "Gestion de Projets Numériques & Informatique",
    period: "2024",
  },
];

const experienceList: JourneyItem[] = [
  {
    title: "Développeur Web & SaaS Freelance",
    subtitle: "Kadmiel Abe Studio — Clients Nationaux (Abidjan) & Remote",
    period: "2024 - Présent",
  },
  {
    title: "Concepteur de la Plateforme GestFiPro",
    subtitle: "Architecture SaaS, Next.js, Supabase RLS & Pilotage Budgétaire",
    period: "2024 - 2025",
  },
  {
    title: "Consultant Digital & Intégrateur B2B",
    subtitle: "Cabinet Rhizome Conseil — Écosystème Institutionnel Haute Conversion",
    period: "2024 - 2025",
  },
  {
    title: "Créateur de Solutions Web PME",
    subtitle: "Massy's Spa, Sites Vitrines & Solutions E-commerce",
    period: "2023 - 2024",
  },
];

export default function Journey() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="parcours"
      className="py-24 sm:py-32 bg-[#FAF9F5] dark:bg-[#0E0E10] text-gray-900 dark:text-[#EDEDED] transition-colors duration-300 relative border-t border-gray-200 dark:border-[#1E1E22]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="flex items-center -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-white" />
            </div>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Formations &amp; Expérience
            </span>
          </div>

          <h2 className="section-title-center text-gray-900 dark:text-white">
            Mon parcours académique et{" "}
            <span className="text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-2">
              professionnel
              <Sparkles className="w-5 h-5 text-emerald-500 shrink-0 fill-emerald-500" />
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            Une trajectoire alliant apprentissage rigoureux des standards du web moderne et livraisons concrètes sur le terrain.
          </p>
        </div>

        {/* Two Columns Grid: Education & Work Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Column 1: Education */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-6 sm:p-10 bg-white dark:bg-[#141416] rounded-3xl border border-gray-200/90 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 chamfer-tl-br"
          >
            {/* Column Header */}
            <div className="flex items-center gap-3.5 pb-6 mb-6 border-b border-gray-200 dark:border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-black flex items-center justify-center shadow-md">
                <GraduationCap className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
                  Formations &amp; Certifications
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  Bases théoriques &amp; spécialisations
                </p>
              </div>
            </div>

            {/* List entries */}
            <div className="space-y-6">
              {educationList.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    i < educationList.length - 1 ? "pb-6 border-b border-gray-100 dark:border-white/5" : ""
                  }`}
                >
                  <div className="space-y-1">
                    <h4 className="font-heading text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-black dark:bg-[#1F1F24] text-white self-start sm:self-center shrink-0 border border-white/10">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Work Experience */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="p-6 sm:p-10 bg-white dark:bg-[#141416] rounded-3xl border border-gray-200/90 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 chamfer-tl-br"
          >
            {/* Column Header */}
            <div className="flex items-center gap-3.5 pb-6 mb-6 border-b border-gray-200 dark:border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-black flex items-center justify-center shadow-md">
                <Briefcase className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
                  Expérience Professionnelle
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  Projets concrets &amp; accompagnement client
                </p>
              </div>
            </div>

            {/* List entries */}
            <div className="space-y-6">
              {experienceList.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    i < experienceList.length - 1 ? "pb-6 border-b border-gray-100 dark:border-white/5" : ""
                  }`}
                >
                  <div className="space-y-1">
                    <h4 className="font-heading text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-light">
                      {item.subtitle}
                    </p>
                  </div>

                  <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-black dark:bg-[#1F1F24] text-white self-start sm:self-center shrink-0 border border-white/10">
                    {item.period}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
