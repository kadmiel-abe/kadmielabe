"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Combien de temps faut-il pour créer un site web ?",
      answer:
        "Cela dépend de la complexité. Un site vitrine prend généralement 2 à 4 semaines, tandis qu'une application web sur-mesure peut nécessiter 1 à 3 mois.",
    },
    {
      question: "Proposez-vous un service de maintenance ?",
      answer:
        "Absolument. Je propose des forfaits de maintenance pour assurer la sécurité, les mises à jour et les sauvegardes de votre site.",
    },
    {
      question: "Comment se déroule le paiement ?",
      answer:
        "Nous fonctionnons généralement avec un acompte au lancement du projet, et le solde à la livraison finale, après votre validation.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200"
          >
            Questions Fréquentes
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4"
          >
            Tout ce que vous devez savoir avant de démarrer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base"
          >
            Vous avez une question spécifique ? N'hésitez pas à me contacter directement.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isOpen
                    ? "border-emerald-300 bg-emerald-50/20 shadow-xs"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-gray-900 text-base sm:text-lg flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "bg-emerald-600 text-white rotate-180" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-emerald-100/60 mt-1">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Contact Prompt */}
        <div className="mt-12 text-center p-6 bg-emerald-50/40 rounded-2xl border border-emerald-100">
          <p className="text-sm text-gray-700 mb-3 font-medium">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="https://wa.me/#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Posez-moi votre question sur WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
