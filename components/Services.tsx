"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";
import { EASINGS } from "@/lib/motion";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subcategories: string[];
  description: string;
  linkText: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "site-web",
    number: "01.",
    title: "Création de Sites Web B2B",
    subcategories: [
      "Sites Vitrines 3 à 5 pages",
      "Responsive Mobile-First",
      "Hébergement & Domaine 1 an",
      "Boutons Contact WhatsApp Direct",
    ],
    description:
      "Conception sur-mesure de sites vitrines professionnels et captivants pour entreprises, cabinets de conseil et PME. Une vitrine digitale haut de gamme qui valorise vos offres et convertit vos prospects en clients.",
    linkText: "En savoir plus",
  },
  {
    id: "saas",
    number: "02.",
    title: "Applications Web SaaS & Métiers",
    subcategories: [
      "Architecture Next.js & React",
      "Cloud Supabase & Authentification",
      "Dashboards Financiers & Analytiques",
      "Intégrations API & Paiements",
    ],
    description:
      "Développement de plateformes logicielles sur-mesure (type GestFiPro) adaptées à vos processus d'affaires : gestion de trésorerie, portails clients, automatisation de flux de travail et sécurité renforcée aux standards mondiaux.",
    linkText: "Découvrir la solution",
  },
  {
    id: "refonte",
    number: "03.",
    title: "Refonte & Optimisation SEO",
    subcategories: [
      "Audit de Performance & Sécurité",
      "Migration vers Next.js 15",
      "Score Lighthouse 95+",
      "Architecture SEO B2B",
    ],
    description:
      "Modernisation complète de vos plateformes existantes lentes ou dépassées. Nous transformons votre site en un outil rapide comme l'éclair, parfaitement positionné sur Google et calibré pour convertir.",
    linkText: "Demander un audit",
  },
  {
    id: "maintenance",
    number: "04.",
    title: "Maintenance & Support Dédié",
    subcategories: [
      "Sauvegardes Hebdomadaires",
      "Mises à jour critiques de sécurité",
      "Monitoring 24/7",
      "Ajustements de contenu inclus",
    ],
    description:
      "Suivi technique proactif sur 12 mois pour garantir la continuité opérationnelle, la sérénité absolue et la longévité de vos investissements digitaux.",
    linkText: "Voir les formules",
  },
  {
    id: "identite",
    number: "05.",
    title: "Identité Visuelle & Stratégie B2B",
    subcategories: [
      "Logos & Chartes Graphiques",
      "Cartes de Visite avec QR Code",
      "Plaquettes Commerciales PDF & Print",
      "Fiche Google Business Profile",
    ],
    description:
      "Création d'une image de marque forte, mémorable et cohérente sur tous les canaux pour asseoir instantanément votre autorité auprès de vos partenaires et clients.",
    linkText: "Consulter les options",
  },
];

export default function Services() {
  // All items start collapsed — user clicks to expand
  const [activeId, setActiveId] = useState<string>("");
  const shouldReduceMotion = useReducedMotion();

  const toggleAccordion = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-[#FAF9F5] dark:bg-[#0E0E10] text-gray-900 dark:text-[#EDEDED] transition-colors duration-300 relative border-t border-gray-200 dark:border-[#1E1E22]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="flex items-center -space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-white" />
              </div>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Mes Services
              </span>
            </div>

            <h2 className="section-title text-gray-900 dark:text-white">
              Comment je donne vie à vos{" "}
              <span className="text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-2">
                idées &amp; projets
                <Sparkles className="w-5 h-5 text-emerald-500 shrink-0 fill-emerald-500" />
              </span>
            </h2>
          </div>

          <Magnetic strength={0.25}>
            <a
              href="#tarifs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all self-start sm:self-auto shrink-0"
            >
              <span>Voir Toutes les Offres</span>
              <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </div>
            </a>
          </Magnetic>
        </div>

        {/* Numbered Accordion List (Cards with stepped cut corners) */}
        <div className="space-y-4 sm:space-y-5">
          {servicesList.map((service, index) => {
            const isActive = activeId === service.id;

            return (
              <motion.div
                key={service.id}
                layout
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: EASINGS.awwwards }}
                className={`overflow-hidden transition-all duration-300 chamfer-step border ${
                  isActive
                    ? "bg-[#141417] text-white border-emerald-500/40 shadow-2xl"
                    : "bg-white dark:bg-[#141416] text-gray-900 dark:text-[#EDEDED] border-gray-200/80 dark:border-white/10 hover:border-emerald-500/30 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Header row (Clickable trigger) */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full p-5 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none group"
                  aria-expanded={isActive}
                >
                  <div className="flex items-center gap-4 sm:gap-8 flex-1 min-w-0">
                    {/* Number pill */}
                    <span
                      className={`text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-full transition-colors ${
                        isActive
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                          : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/5 group-hover:text-emerald-500"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Dotted separator line */}
                    <div
                      className={`hidden sm:block flex-1 border-b border-dotted transition-colors ${
                        isActive
                          ? "border-emerald-500/30"
                          : "border-gray-300 dark:border-white/10"
                      }`}
                    />

                    {/* Service Title */}
                    <h3
                      className={`font-heading text-lg sm:text-2xl font-bold tracking-tight transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-gray-900 dark:text-gray-100 group-hover:text-emerald-500"
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Circular Action Arrow Button */}
                  <div
                    className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-emerald-500 text-black shadow-md rotate-45 scale-105"
                        : "bg-gray-100 dark:bg-[#1E1E22] text-gray-600 dark:text-gray-300 group-hover:bg-emerald-500 group-hover:text-black"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </div>
                </button>

                {/* Expanded Accordion Body */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-7 pt-2 border-t border-white/10">
                        {/* Sub-category tags in small dark pills with cascade */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {service.subcategories.map((tag, tagIdx) => (
                            <motion.span
                              key={tag}
                              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 8 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: tagIdx * 0.05, ease: "easeOut" }}
                              className="px-3.5 py-1.5 rounded-full text-xs font-heading font-medium bg-[#1F1F24] text-gray-300 border border-white/10"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-3xl mb-6">
                          {service.description}
                        </p>

                        {/* Direct action link */}
                        <a
                          href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20en%20savoir%20plus%20sur%20ce%20service."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <span>Discuter de cette prestation sur WhatsApp</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
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
