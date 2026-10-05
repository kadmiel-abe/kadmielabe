"use client";

import { motion } from "framer-motion";
import { Compass, Code, Rocket, CheckCircle2 } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Cadrage stratégique",
      description:
        "Nous analysons vos objectifs pour définir la meilleure solution technique.",
      details: [
        "Audit des besoins & contraintes métier",
        "Choix de la stack technique optimale",
        "Spécifications & maquette d'architecture",
      ],
      icon: Compass,
    },
    {
      number: "02",
      title: "Développement agile",
      description:
        "Je code votre projet en vous impliquant à chaque étape clé.",
      details: [
        "Sprints courts avec démos régulières",
        "Code propre, documenté et testé",
        "Optimisation UI/UX & réactivité mobile",
      ],
      icon: Code,
    },
    {
      number: "03",
      title: "Déploiement & Suivi",
      description:
        "Mise en ligne optimisée et maintenance pour assurer la pérennité de l'outil.",
      details: [
        "Déploiement Vercel / Cloud sécurisé",
        "Configuration SEO & analytics",
        "Support & accompagnement post-lancement",
      ],
      icon: Rocket,
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-emerald-50/20 border-y border-emerald-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200"
          >
            Méthodologie de travail
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4"
          >
            Un processus clair, transparent et orienté résultats
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            De la première prise de contact au déploiement final, chaque étape est structurée pour vous offrir sérénité et régularité.
          </motion.p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-xs relative group hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Header badge step */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading text-2xl font-black text-emerald-100 group-hover:text-emerald-200 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    Étape {index + 1} : {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
