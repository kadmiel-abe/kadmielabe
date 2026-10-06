"use client";

import { motion } from "framer-motion";
import { Search, Palette, Terminal, Rocket } from "lucide-react";

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit & Cadrage Stratégique",
    description:
      "Analyse de votre activité, de vos cibles et de la concurrence. Définition de l'architecture web et de la stratégie média idéale pour maximiser votre ROI.",
    duration: "Phase 1 - Cadrage",
  },
  {
    number: "02",
    icon: Palette,
    title: "Conception UI/UX & Maquettes 3D",
    description:
      "Prototypage haute fidélité et création de votre direction artistique. Validation du design, du copywriting et de l'expérience utilisateur.",
    duration: "Phase 2 - Design",
  },
  {
    number: "03",
    icon: Terminal,
    title: "Développement Full Stack Agile",
    description:
      "Programmation avec Next.js, React et Supabase. Code performant, sécurisé, 100% responsive et conforme aux standards internationaux.",
    duration: "Phase 3 - Production",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Tests, Déploiement & Suivi",
    description:
      "Audits SEO (Lighthouse 95+), tests de charge et déploiement Vercel Cloud. Formation et suivi continu pour garantir votre sérénité.",
    duration: "Phase 4 - Lancement",
  },
];

export default function Process() {
  return (
    <section id="processus" className="py-24 md:py-32 bg-[#09090b] border-t border-white/10 relative scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold block mb-3">
            MÉTHODOLOGIE AGILITY & RIGUEUR
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Un processus clair, sans surprise ni retard
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-light leading-relaxed">
            De la prise de besoin initiale au déploiement final, chaque étape est transparente et documentée.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: easeCurve }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative p-6 sm:p-8 rounded-3xl bg-[#121215] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-gray-500 group-hover:text-cyan-400 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-medium">
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
