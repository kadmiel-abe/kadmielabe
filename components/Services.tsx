"use client";

import { motion } from "framer-motion";
import { Globe, Code2, ShoppingBag, RefreshCw, Wrench, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Vitrines B2B Haut de Gamme",
    description:
      "Conception de vitrines digitales sur-mesure qui imposent votre autorité sur le marché et transforment vos visiteurs en prospects qualifiés.",
    roi: "+65% d'impact sur la crédibilité de votre marque",
    features: ["Design unique sans template", "Chargement < 1s (Lighthouse 95+)", "Optimisation SEO & conversion"],
  },
  {
    icon: Code2,
    title: "Applications Web & Plateformes SaaS",
    description:
      "Développement d'outils métiers, tableaux de bord interactifs et solutions logicielles scalables pour automatiser vos opérations.",
    roi: "Gain de temps direct & réduction des erreurs manuelles",
    features: ["Architecture Next.js & Supabase", "Bases de données & authentification", "API & intégrations tierces"],
  },
  {
    icon: ShoppingBag,
    title: "Boutiques E-Commerce Sécurisées",
    description:
      "Plateformes marchandes ultra-fluides, adaptées aux réalités de paiement locales et internationales (Mobile Money, Cartes bancaires).",
    roi: "Tunnel d'achat optimisé pour maximiser le panier moyen",
    features: ["Paiement sécurisé intégré", "Gestion des commandes en direct", "Expérience mobile-first fluide"],
  },
  {
    icon: RefreshCw,
    title: "Refonte & Optimisation de Performance",
    description:
      "Modernisation de sites existants lents ou obsolètes pour booster la vitesse, le responsive design et l'efficacité commerciale.",
    roi: "Reprise d'avantage concurrentiel immédiat",
    features: ["Audit technique & UX complet", "Migration vers une stack moderne", "Amélioration drastique du SEO"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Évolutions Continues",
    description:
      "Accompagnement pérenne pour garantir la sécurité, la disponibilité 24/7 et la fraîcheur technique de votre outil digital.",
    roi: "Sérénité totale & zéro interruption de service",
    features: ["Sauvegardes automatiques régulières", "Mises à jour de sécurité critiques", "Support technique réactif"],
  },
  {
    icon: ShieldCheck,
    title: "Audit & Conseil Technique",
    description:
      "Conseil stratégique pour cadrer vos besoins technologiques, choisir la bonne architecture et éviter les dépenses superflues.",
    roi: "Économies sur vos investissements technologiques",
    features: ["Cahier des charges technique", "Choix d'hébergement & coûts cloud", "Recommandations concrètes"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0B0B0C] border-t border-[#1E1E22] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-3">
            EXCELLENCE TECHNIQUE & STRATÉGIE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight">
            Des services calibrés pour le ROI de votre PME
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Pas de code inutile ni de complexité superficielle : des solutions fiables, élégantes et conçues pour générer des résultats tangibles pour votre entreprise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl bg-[#121214] border border-[#1E1E22] hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-glow-emerald"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#EDEDED] group-hover:text-white transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="p-3 rounded-lg bg-[#0B0B0C] border border-[#1E1E22] mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-medium block">
                      IMPACT BUSINESS :
                    </span>
                    <p className="text-xs text-gray-300 font-medium mt-0.5">{service.roi}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#1E1E22]">
                  <a
                    href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20en%20savoir%20plus%20sur%20votre%20service%20de%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-300"
                  >
                    <span>En discuter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
