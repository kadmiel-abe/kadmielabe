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
      "Pour un site vitrine professionnel (Pack Essentiel ou Pro), le délai moyen est de 7 à 14 jours ouvrés. Pour une application web sur-mesure ou une plateforme SaaS (type GestFiPro), il faut compter entre 3 et 6 semaines selon la complexité des modules métiers et des intégrations API.",
  },
  {
    id: 2,
    question: "Quelle est la différence entre le développement web et la stratégie digitale ?",
    answer:
      "Le développement web garantit que votre application ou site est rapide, fluide, sécurisé et beau. La stratégie digitale (Community Management, création de contenu vidéo, référencement) assure que vos cibles découvrent votre plateforme, restent engagées et se transforment en clients fidèles. Je combine ces deux piliers.",
  },
  {
    id: 3,
    question: "Comment s'organise la maintenance et le support technique après le lancement ?",
    answer:
      "Tous les projets bénéficient d'un support technique dédié post-livraison. Avec le Pack Premium ou un suivi sur-mesure, j'assure les sauvegardes automatiques, les mises à jour critiques de sécurité, le monitoring 24/7 et des ajustements réguliers.",
  },
  {
    id: 4,
    question: "Pourquoi choisir un développeur freelance & stratège plutôt qu'une agence ?",
    answer:
      "Vous profitez d'un seul interlocuteur senior, direct et réactif. Pas de frais de structure superflus, des délais de décision divisés par 3 et un engagement total sur la qualité de vos livrables.",
  },
  {
    id: 5,
    question: "Suis-je propriétaire à 100% de mon site et de mon code source ?",
    answer:
      "Absolument. Dès la livraison, vous êtes propriétaire exclusif du code source (hébergé sur votre dépôt GitHub), de vos noms de domaine, des accès cloud et des médias.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#09090b] border-t border-white/10 relative scroll-mt-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Foire aux Questions</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Questions Fréquentes
          </h2>
          <p className="mt-4 text-base text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
            Retrouvez les réponses aux questions clés pour aborder notre collaboration en toute clarté.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: easeCurve }}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border backdrop-blur-md ${
                  isOpen
                    ? "bg-[#121215] border-cyan-400 shadow-glow-cyan"
                    : "bg-[#121215]/80 border-white/10 hover:border-cyan-500/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group select-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-heading text-lg sm:text-xl font-bold transition-colors ${
                    isOpen ? "text-cyan-300" : "text-white group-hover:text-cyan-300"
                  }`}>
                    {faq.question}
                  </span>

                  {/* Rotating Plus Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: easeCurve }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-cyan-400 text-black shadow-sm"
                        : "bg-[#09090b] border border-white/10 text-cyan-400 group-hover:border-cyan-500/40"
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
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-gray-300 font-light leading-relaxed border-t border-white/10">
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
