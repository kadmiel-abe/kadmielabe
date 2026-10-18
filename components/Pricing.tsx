"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";
import { EASINGS } from "@/lib/motion";

const plans = [
  {
    name: "Pack Essentiel",
    subtitle: "Démarrage rapide & Bases solides",
    price: "150 000",
    currency: "FCFA",
    period: "Paiement unique",
    description: "Pour démarrer vite avec une présence professionnelle irréprochable et un budget maîtrisé.",
    features: [
      "Site vitrine sur-mesure (jusqu'à 3 pages)",
      "Carte de visite avec QR code (100 impressions)",
      "Bouton WhatsApp direct & formulaire de contact",
      "Nom de domaine & hébergement sécurisé (1 an)",
      "Performance optimisée & affichage mobile fluide",
    ],
    highlight: false,
    badge: null,
    whatsappText: "Bonjour Kadmiel, je souhaite commander ou discuter du Pack Essentiel (150 000 FCFA).",
  },
  {
    name: "Pack Pro",
    subtitle: "Image complète & Conversion B2B",
    price: "350 000",
    currency: "FCFA",
    period: "Paiement unique",
    description: "La formule la plus plébiscitée par les PME pour asseoir leur crédibilité et transformer leurs prospects en clients.",
    features: [
      "Identité visuelle complète : logo, couleurs, typographies",
      "Site web professionnel (jusqu'à 5 pages sur-mesure)",
      "Carte de visite avec QR code (100 impressions)",
      "Plaquette commerciale digitale & prête à l'impression",
      "Création & optimisation Fiche Google Business Profile",
      "1 mois de support technique dédié après livraison",
    ],
    highlight: true,
    badge: "Le plus choisi",
    whatsappText: "Bonjour Kadmiel, je souhaite commander ou discuter du Pack Pro (350 000 FCFA).",
  },
  {
    name: "Pack Premium",
    subtitle: "Excellence & Suivi sur 12 mois",
    price: "450 000",
    currency: "FCFA",
    period: "Paiement unique + 1 an suivi",
    description: "La solution Pro enrichie d'une maintenance technique rigoureuse pour une tranquillité d'esprit absolue.",
    features: [
      "Tout le contenu intégral du Pack Pro",
      "12 mois de maintenance technique & sécurité",
      "Mises à jour logicielles & sauvegardes automatiques",
      "Modifications et ajustements mineurs inclus",
      "Rapport trimestriel de visibilité & SEO",
      "Disponibilité prioritaire toute l'année",
    ],
    highlight: false,
    badge: null,
    whatsappText: "Bonjour Kadmiel, je souhaite commander ou discuter du Pack Premium (450 000 FCFA).",
  },
  {
    name: "Application SaaS / Sur-Mesure",
    subtitle: "Outils métiers & Projets d'envergure",
    price: "Sur Devis",
    currency: "",
    period: "À partir de 750 000 FCFA",
    description: "Pour les plateformes logicielles, dashboards financiers, intégrations de paiements complexes ou architectures personnalisées.",
    features: [
      "Architecture cloud Next.js, React & Supabase",
      "Gestion multi-rôles & droits d'accès avancés",
      "Connexions API bancaires / Mobile Money / Stripe",
      "Tableaux de bord interactifs & graphiques temps réel",
      "Contrat de maintenance SLA sur-mesure",
    ],
    highlight: false,
    badge: "Sur-Mesure",
    whatsappText: "Bonjour Kadmiel, j'ai un projet d'application web sur-mesure ou SaaS et je souhaite obtenir un devis.",
  },
];

export default function Pricing() {
  return (
    <section
      id="tarifs"
      className="py-24 sm:py-32 bg-[#0B0B0C] text-[#EDEDED] relative overflow-hidden border-t border-[#1E1E22]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="flex items-center -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-400">
              Tarifs &amp; Packs
            </span>
          </div>

          <h2 className="section-title-center text-white">
            Des investissements clairs pour des{" "}
            <span className="text-emerald-400 inline-flex items-center gap-2">
              résultats concrets
              <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 fill-emerald-400" />
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
            Pas de devis opaques ni de frais dissimulés. Choisissez la formule adaptée à vos objectifs et lancez votre présence digitale sereinement.
          </p>
        </div>

        {/* Pricing Cards Grid — 2 cols on tablet, 2 cols on desktop for readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.38, delay: index * 0.04, ease: EASINGS.awwwards }}
              className={`group relative rounded-3xl transition-all duration-300 flex flex-col overflow-visible ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#1C1C20] to-[#141417] border-2 border-emerald-500 shadow-glow-emerald hover:shadow-[0_0_35px_rgba(17,145,52,0.35)]"
                  : "bg-[#141416] border border-[#1E1E22] hover:border-emerald-500/40 hover:shadow-xl"
              }`}
            >
              {/* Badge — positioned outside clip area */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-heading font-bold tracking-wider uppercase bg-emerald-500 text-black shadow-md whitespace-nowrap">
                    <Sparkles className="w-3 h-3 fill-black" />
                    <span>{plan.badge}</span>
                  </span>
                </div>
              )}

              {/* Card inner content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-medium block mb-1">
                    {plan.subtitle}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-white group-hover:text-emerald-400 transition-colors">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-3">
                    <span className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    {plan.currency && (
                      <span className="text-sm font-medium text-gray-400 font-mono">
                        {plan.currency}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 font-mono block mt-1">
                    {plan.period}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mt-4">
                    {plan.description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8 pt-4 border-t border-[#1E1E22] flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button with Magnetic */}
                <div className="mt-auto">
                  <Magnetic strength={0.2} className="w-full">
                    <a
                      href={`https://wa.me/2250706978570?text=${encodeURIComponent(plan.whatsappText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-full font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                        plan.highlight
                          ? "bg-emerald-500 hover:bg-emerald-400 text-black shadow-md hover:scale-105 active:scale-95"
                          : "bg-[#1E1E22] hover:bg-emerald-500 hover:text-black text-white border border-[#2A2A30] hover:scale-105 active:scale-95"
                      }`}
                    >
                      <span>Commander cette offre</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
