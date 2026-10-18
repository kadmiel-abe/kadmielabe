"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Sparkles } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Quels sont les délais moyens pour concevoir et livrer mon projet ?",
    answer:
      "Pour un site vitrine professionnel (Pack Essentiel ou Pro), le délai moyen est de 7 à 14 jours ouvrés à compter de la validation de vos éléments. Pour une application web sur-mesure ou une plateforme SaaS (type GestFiPro), il faut compter entre 3 et 6 semaines selon la complexité des modules métiers et des intégrations API.",
  },
  {
    id: 2,
    question: "Comment s'organise la maintenance et le support technique après le lancement ?",
    answer:
      "Tous les projets bénéficient d'une période de garantie et de support technique inclus après la mise en production. Avec le Pack Premium ou un contrat de maintenance personnalisé, j'assure les sauvegardes automatiques régulières, les mises à jour critiques de sécurité, le monitoring de disponibilité 24/7 et des ajustements de contenu réguliers.",
  },
  {
    id: 3,
    question: "Pourquoi choisir un développeur freelance plutôt qu'une agence classique ?",
    answer:
      "Avec moi, vous avez un interlocuteur technique direct, réactif et senior du cadrage au déploiement. Aucun intermédiaire commercial, aucune surcharge de coûts de structure superflus, des délais de décision réduits par 3 et un engagement total sur la qualité de votre code.",
  },
  {
    id: 4,
    question: "Suis-je propriétaire à 100% de mon site web et du code source ?",
    answer:
      "Absolument. Dès le règlement final de la prestation, vous devenez propriétaire exclusif de l'intégralité du code source (hébergé sur votre propre dépôt GitHub sécurisé), de vos noms de domaine, des accès d'hébergement et des contenus. Vous ne subissez aucune dépendance propriétaire ni abonnement captif.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-[#FAF9F5] dark:bg-[#0E0E10] text-gray-900 dark:text-[#EDEDED] transition-colors duration-300 relative border-t border-gray-200 dark:border-[#1E1E22]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="flex items-center -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-white" />
            </div>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Foire Aux Questions
            </span>
          </div>

          <h2 className="section-title-center text-gray-900 dark:text-white">
            Questions{" "}
            <span className="text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-2">
              fréquentes
              <Sparkles className="w-5 h-5 text-emerald-500 shrink-0 fill-emerald-500" />
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
            Toutes les réponses pour aborder notre collaboration en toute clarté et sérénité.
          </p>
        </div>

        {/* Accordion List with Staggered Entrance */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.32, delay: index * 0.03, ease: "easeOut" }}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border chamfer-step ${
                  isOpen
                    ? "bg-white dark:bg-[#141417] border-emerald-500/50 shadow-lg"
                    : "bg-white/80 dark:bg-[#141416] border-gray-200 dark:border-white/10 hover:border-emerald-500/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group select-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-heading text-base sm:text-xl font-bold transition-colors ${
                      isOpen
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-gray-900 dark:text-white group-hover:text-emerald-500"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-emerald-500 text-black rotate-45 shadow-sm scale-105"
                        : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 group-hover:bg-emerald-500 group-hover:text-black"
                    }`}
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed border-t border-gray-100 dark:border-white/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
