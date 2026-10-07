"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Sparkles } from "lucide-react";

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
      "Carte de visite avec QR code (100 impressions incluses)",
      "Bouton WhatsApp direct & formulaire de contact",
      "Nom de domaine & hébergement sécurisé inclus (1 an)",
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
      "Site web professionnel (jusqu'à 5 pages sur mesure)",
      "Carte de visite avec QR code (100 impressions incluses)",
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
      "Rapport trimestriel de visibilité & de performance SEO",
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
    <section id="tarifs" className="py-24 md:py-32 bg-[#0B0B0C] border-t border-[#1E1E22] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-3"
          >
            TARIFS TRANSPARENTS SANS SURPRISE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight"
          >
            Des investissements clairs pour des résultats concrets
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed"
          >
            Pas de devis opaques ni de frais dissimulés. Choisissez la formule adaptée à vos objectifs et lancez votre présence digitale dans les meilleurs délais.
          </motion.p>
        </div>

        {/* Pricing Cards Grid with Stagger & Motion */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className={`group relative p-6 sm:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#17171A] to-[#121214] border-2 border-emerald-500 shadow-glow-emerald hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]"
                  : "bg-[#121214] border border-[#1E1E22] hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-emerald-500 text-white shadow-md">
                    <Sparkles className="w-3 h-3 animate-pulse" />
                    <span>{plan.badge}</span>
                  </span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-medium block">
                    {plan.subtitle}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-[#EDEDED] group-hover:text-emerald-400 transition-all duration-300 group-hover:translate-x-1 mt-1 mb-3">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    {plan.currency && (
                      <span className="text-sm font-medium text-gray-400 font-mono">
                        {plan.currency}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400 font-mono block mt-1">
                    {plan.period}
                  </span>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mt-4">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 pt-4 border-t border-[#1E1E22]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-emerald-400" : "text-emerald-400/80"}`} />
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
                  className={`w-full py-3.5 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.highlight
                      ? "bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_-5px_rgba(17,145,52,0.5)] hover:scale-105"
                      : "bg-[#1E1E22] hover:bg-emerald-500 hover:text-black text-white border border-[#2A2A30] hover:scale-105"
                  }`}
                >
                  <span>Choisir cette offre</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
