"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Wrench, Palette, Printer, MapPin } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: "web" | "design";
  icon: React.ElementType;
}

const servicesData: ServiceItem[] = [
  {
    id: "site-web",
    title: "Création de Sites Web",
    description:
      "Conception de sites vitrines professionnels (3 à 5 pages), incluant nom de domaine, hébergement 1 an et boutons de contact direct.",
    category: "web",
    icon: Globe,
  },
  {
    id: "maintenance",
    title: "Maintenance Technique",
    description:
      "Suivi sur 12 mois comprenant les mises à jour, les sauvegardes régulières et les modifications mineures pour la sécurité de votre plateforme.",
    category: "web",
    icon: Wrench,
  },
  {
    id: "identite-visuelle",
    title: "Identité Visuelle",
    description:
      "Conception de logos, définition de palettes de couleurs et choix typographiques pour une image de marque cohérente.",
    category: "design",
    icon: Palette,
  },
  {
    id: "supports-communication",
    title: "Supports de Communication",
    description:
      "Design de plaquettes commerciales (PDF et impression) et conception de cartes de visite professionnelles avec QR codes.",
    category: "design",
    icon: Printer,
  },
  {
    id: "seo-local",
    title: "Référencement & SEO Local",
    description:
      "Création et optimisation de fiches Google Business Profile couplées à un référencement naturel pour attirer vos clients.",
    category: "design",
    icon: MapPin,
  },
];

const tabs = [
  { id: "all", label: "Tous" },
  { id: "web", label: "Web" },
  { id: "design", label: "Design" },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices =
    activeTab === "all"
      ? servicesData
      : servicesData.filter((service) => service.category === activeTab);

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#0a0a0a] text-white border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Slide Up + Fade In Text Animations */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-3"
          >
            SERVICES &amp; EXPERTISE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Des offres concrètes pour développer votre entreprise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-gray-400 font-light leading-relaxed"
          >
            Des solutions digitales sur-mesure pour établir votre présence, attirer des clients et automatiser vos processus.
          </motion.p>
        </div>

        {/* Tab Filters (Text only, no icons) */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-emerald-500/20 text-white border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                    : "text-gray-400 border border-transparent hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Animated Services Grid with Stagger & Card Animations */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.7, ease: "easeOut" },
                    },
                  }}
                  className="group relative p-8 rounded-xl bg-[#111111] border border-white/5 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
