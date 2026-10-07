"use client";

import { motion } from "framer-motion";
import { Search, Palette, Terminal, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Audit & Cadrage Stratégique",
    description:
      "Nous analysons votre activité, vos clients cibles et vos concurrents. Nous définissons ensemble l'architecture exacte et les fonctionnalités indispensables pour maximiser la rentabilité de l'investissement.",
    duration: "Semaine 1",
  },
  {
    number: "02",
    icon: Palette,
    title: "Conception UI/UX & Maquettes",
    description:
      "Création de maquettes interactives haute fidélité. Vous visualisez et validez l'expérience utilisateur, l'identité visuelle et la fluidité des parcours de conversion avant la moindre ligne de code.",
    duration: "Semaine 1 - 2",
  },
  {
    number: "03",
    icon: Terminal,
    title: "Développement Full Stack Agile",
    description:
      "Intégration et programmation avec Next.js, React et Supabase. Code ultra-rapide, sécurisé et responsive, respectant scrupuleusement les normes d'accessibilité et de performance du web mondial.",
    duration: "Semaine 2 - 3",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Tests, Déploiement & Suivi",
    description:
      "Audit de sécurité, vérification des scores SEO (Lighthouse 95+), déploiement sur infrastructure cloud sécurisée (Vercel) et formation pour vous rendre autonome dans l'administration de vos contenus.",
    duration: "Livraison & Suivi",
  },
];

export default function Process() {
  return (
    <section id="processus" className="py-24 md:py-32 bg-[#0B0B0C] border-t border-[#1E1E22] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-3"
          >
            MÉTHODOLOGIE TRANSPARENTE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight"
          >
            Un processus clair, sans imprévus ni retards
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed"
          >
            De la première discussion jusqu&apos;à la mise en ligne, chaque étape est documentée et validée avec vous pour une sérénité totale.
          </motion.p>
        </div>

        {/* Steps Grid with Stagger & Lateral Slide Animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="relative p-6 sm:p-8 rounded-2xl bg-[#121214] border border-[#1E1E22] hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-gray-400 group-hover:text-emerald-400 transition-all duration-300 group-hover:translate-x-1 inline-block">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#EDEDED] group-hover:text-emerald-400 transition-all duration-300 group-hover:translate-x-1 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1E1E22]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400/90 font-medium inline-block transition-transform duration-300 group-hover:translate-x-1">
                    {step.duration}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
