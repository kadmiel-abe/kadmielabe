"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Globe, ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: LayoutGrid,
      title: "Applications Web & SaaS",
      description:
        "Développement d'outils sur-mesure, rapides et sécurisés pour digitaliser et automatiser vos processus métier.",
      features: [
        "Tableaux de bord & Admin sur-mesure",
        "Architecture scalable (Next.js / Node / APIs)",
        "Gestion des données & authentification",
      ],
      badge: "Sur-Mesure",
    },
    {
      icon: Globe,
      title: "Sites Vitrines B2B",
      description:
        "Des plateformes modernes et optimisées pour le SEO afin d'asseoir votre crédibilité et d'attirer vos clients idéaux.",
      features: [
        "Design Néo-Minimaliste haute conversion",
        "Optimisation SEO & vitesse extrême",
        "Responsive & conforme WCAG",
      ],
      badge: "Incontournable B2B",
    },
    {
      icon: ShoppingBag,
      title: "E-commerce",
      description:
        "Des boutiques en ligne performantes et fluides, conçues spécifiquement pour maximiser vos conversions.",
      features: [
        "Expérience d'achat ultra-rapide",
        "Intégration paiements locaux & internationaux",
        "Catalogue & gestion des stocks fluides",
      ],
      badge: "High-Conversion",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-emerald-50/20 border-y border-emerald-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200"
          >
            Mes Domaines d'Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3 mb-4"
          >
            Des services conçus pour accélérer votre croissance
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Chaque projet est conçu avec une attention méticuleuse aux détails, combinant esthétique moderne et performance technique.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-6">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 pt-2 group-hover:translate-x-1 transition-transform"
                >
                  <span>Démarrer un projet</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
