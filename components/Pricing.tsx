"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

const plans = [
  {
    name: "Pack Essentiel",
    subtitle: "Présence Web Rapide & Professionnelle",
    price: "150 000",
    currency: "FCFA",
    period: "Paiement unique",
    description: "Idéal pour lancer une présence en ligne soignée avec un budget maîtrisé et un rendu moderne.",
    features: [
      "Site vitrine sur-mesure (jusqu'à 3 pages)",
      "Design ultra-responsive & mobile-first",
      "Bouton WhatsApp direct & formulaire de contact",
      "Nom de domaine & hébergement sécurisé inclus (1 an)",
      "Optimisation SEO local Abidjan de base",
    ],
    highlight: false,
    badge: null,
    whatsappText: "Bonjour Kadmiel, je souhaite commander ou discuter du Pack Essentiel (150 000 FCFA).",
  },
  {
    name: "Pack Pro",
    subtitle: "Écosystème Digital & Conversion B2B",
    price: "350 000",
    currency: "FCFA",
    period: "Paiement unique",
    description: "La formule phare choisie par les PME pour s'imposer sur leur marché et capter des clients réguliers.",
    features: [
      "Identité visuelle complète & charte graphique",
      "Site web sur-mesure (jusqu'à 5 pages)",
      "Création de contenu média & plaquette commerciale",
      "Fiche Google Business Profile optimisée SEO",
      "Stratégie d'acquisition & support prioritaire (1 mois)",
    ],
    highlight: true,
    badge: "Formule Recommandée",
    whatsappText: "Bonjour Kadmiel, je souhaite commander ou discuter du Pack Pro (350 000 FCFA).",
  },
  {
    name: "Pack Premium",
    subtitle: "Excellence & Suivi Annuel 365j",
    price: "450 000",
    currency: "FCFA",
    period: "Paiement unique + 1 an suivi",
    description: "La solution intégrale avec maintenance technique continue pour une sérénité totale toute l'année.",
    features: [
      "Contenu intégral du Pack Pro",
      "12 mois de maintenance technique & sécurité",
      "Sauvegardes automatiques & mises à jour",
      "Ajustements réguliers & rapport de visibilité SEO",
      "Assistance VIP prioritaire 24/7 sur WhatsApp",
    ],
    highlight: false,
    badge: null,
    whatsappText: "Bonjour Kadmiel, je souhaite commander ou discuter du Pack Premium (450 000 FCFA).",
  },
  {
    name: "SaaS & Sur-Mesure",
    subtitle: "Plateformes Web & Application Métier",
    price: "Sur Devis",
    currency: "",
    period: "À partir de 750 000 FCFA",
    description: "Pour les projets complexes : tableaux de bord financiers, gestion multi-rôles, intégration Mobile Money et Stripe.",
    features: [
      "Architecture Next.js, React & Supabase Cloud",
      "Système d'authentification & gestion des droits",
      "Intégrations API bancaires, Stripe & Mobile Money",
      "Visualisations temps réel & dashboards interactifs",
      "Accompagnement et SLA sur-mesure",
    ],
    highlight: false,
    badge: "Sur-Mesure",
    whatsappText: "Bonjour Kadmiel, j'ai un projet d'application web sur-mesure ou SaaS et je souhaite obtenir un devis.",
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="py-24 md:py-32 bg-[#09090b] border-t border-white/10 relative scroll-mt-20 overflow-hidden">
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
            OFFRES CLAIRES & SANS SURPRISE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Investissements & Tarifs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-light leading-relaxed">
            Des formules transparentes adaptées aux ambitions de votre entreprise à Abidjan et à l&apos;international.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: easeCurve }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`relative p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between backdrop-blur-md ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#15151a] to-[#121215] border-2 border-cyan-400 shadow-glow-cyan"
                  : "bg-[#121215] border border-white/10 hover:border-cyan-500/30"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-emerald-400 to-cyan-400 text-black shadow-md">
                    <Sparkles className="w-3 h-3" />
                    <span>{plan.badge}</span>
                  </span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-medium block">
                    {plan.subtitle}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white mt-1 mb-3">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    {plan.currency && (
                      <span className="text-xs font-semibold text-gray-400 font-mono">
                        {plan.currency}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 font-mono block mt-1">
                    {plan.period}
                  </span>
                  <p className="text-xs text-gray-300 font-light leading-relaxed mt-4">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 pt-4 border-t border-white/10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-200">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-cyan-400" : "text-emerald-400"}`} />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={`https://wa.me/2250706978570?text=${encodeURIComponent(plan.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                    plan.highlight
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white shadow-glow-cyan hover:scale-[1.02]"
                      : "bg-[#09090b] hover:bg-[#15151a] text-white border border-white/10 hover:border-cyan-500/40"
                  }`}
                >
                  <span>Choisir cette offre</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
