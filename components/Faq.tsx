"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

const faqs = [
  {
    id: 1,
    question: "Quels sont les délais moyens pour concevoir et livrer mon projet ?",
    answer:
      "Pour un site vitrine professionnel (Pack Essentiel ou Pro), le délai moyen est de 7 à 14 jours ouvrés à compter de la réception de vos éléments. Pour une application web sur-mesure ou une plateforme SaaS (type GestFiPro), il faut compter entre 3 et 6 semaines selon la complexité des modules métiers et des intégrations API.",
  },
  {
    id: 2,
    question: "Comment s'organise la maintenance et le support technique après le lancement ?",
    answer:
      "Tous les projets bénéficient d'une période de garantie et de support technique inclus après la mise en production. Avec le Pack Premium ou un contrat de maintenance personnalisé, j'assure les sauvegardes automatiques hebdomadaires, les mises à jour critiques de sécurité, le monitoring de disponibilité 24/7 et des ajustements de contenu réguliers.",
  },
  {
    id: 3,
    question: "Pourquoi choisir un développeur freelance plutôt qu'une agence classique ?",
    answer:
      "Avec moi, vous avez un seul interlocuteur technique senior, direct et réactif, du cadrage au déploiement. Aucun intermédiaire commercial, aucune surcharge de coûts de structure superflus, des délais de décision réduits par 3 et un engagement total sur la qualité de votre code.",
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
    <section id="faq" className="py-24 md:py-32 bg-[#0B0B0C] border-t border-[#1E1E22] relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Foire aux Questions</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
            Toutes les réponses pour aborder votre collaboration en toute clarté et sérénité.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? "bg-[#141417] border-emerald-500/40 shadow-[0_0_30px_-10px_rgba(17,145,52,0.15)]"
                    : "bg-[#121214] border-[#1E1E22] hover:border-gray-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group select-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-heading text-lg sm:text-xl font-bold transition-colors ${
                    isOpen ? "text-white" : "text-[#EDEDED] group-hover:text-white"
                  }`}>
                    {faq.question}
                  </span>

                  {/* Smooth Rotating Plus Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: easeCurve }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-emerald-500 text-white shadow-sm"
                        : "bg-[#0B0B0C] border border-[#1E1E22] text-emerald-400 group-hover:border-emerald-500/30"
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: easeCurve }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-gray-400 font-light leading-relaxed border-t border-[#1E1E22]/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
