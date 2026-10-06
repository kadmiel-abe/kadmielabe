"use client";

import { motion } from "framer-motion";
import { Globe, Share2, RefreshCw, Wrench, ShieldCheck, ArrowRight, Zap, Check } from "lucide-react";

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

const services = [
  {
    icon: Globe,
    title: "Développement Web",
    subtitle: "Sites vitrines, E-commerce, Web Apps & SaaS",
    description:
      "Conception sur-mesure d'applications web ultra-performantes, boutiques e-commerce adaptées au Mobile Money et vitrines corporate d'exception.",
    roi: "Score Lighthouse 95+ & Conversion maximale",
    features: [
      "Architecture Next.js, React & Supabase",
      "Expérience utilisateur (UX/UI) ultra-fluidifiée",
      "Paiements en ligne & Mobile Money sécurisés",
      "Code propre et SEO local optimisé",
    ],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderColor: "hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
  {
    icon: Share2,
    title: "Stratégie Digitale & Community Management",
    subtitle: "Création de contenu, réseaux sociaux & image de marque",
    description:
      "Élaboration de stratégies de contenu engageantes, production vidéo captivante et gestion active de communauté pour propulser votre notoriété.",
    roi: "Positionnement d'autorité & acquisition constante",
    features: [
      "Planning éditorial & stratégie de contenu",
      "Création vidéo courte (Reels, TikTok, Shorts)",
      "Community Management & animation d'audience",
      "Campagnes d'acquisition ciblées à Abidjan",
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderColor: "hover:border-emerald-500/50",
    iconColor: "text-emerald-400",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    icon: RefreshCw,
    title: "Refonte & Optimisation de l'Existant",
    subtitle: "Performance, Modernisation UI/UX & SEO",
    description:
      "Transformation de vos plateformes existantes lentes ou obsolètes en outils rapides, sécurisés et parfaitement adaptés aux smartphones.",
    roi: "Reprise d'avantage concurrentiel immédiat",
    features: [
      "Audit technique & UX approfondi",
      "Optimisation drastique de la vitesse de chargement",
      "Modernisation du design aux standards actuels",
      "Correction des failles et maintenance préventive",
    ],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderColor: "hover:border-blue-500/50",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support Technique Continuous",
    subtitle: "Sécurité, Sauvegardes & Évolutions 24/7",
    description:
      "Suivi quotidien pour garantir la disponibilité constante, la sécurité et la fraîcheur technologique de votre infrastructure web.",
    roi: "Sérénité totale & zéro interruption d'activité",
    features: [
      "Mises à jour critiques & patchs de sécurité",
      "Sauvegardes automatiques quotidiennes",
      "Assistance technique prioritaire sur WhatsApp",
      "Ajout progressif de nouvelles fonctionnalités",
    ],
    gradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
    borderColor: "hover:border-teal-500/50",
    iconColor: "text-teal-400",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Audit Technique & Conseil Stratégique",
    subtitle: "Cadrage, Architecture & Choix Cloud",
    description:
      "Conseil personnalisé pour orienter vos choix technologiques, concevoir votre cahier des charges et optimiser vos coûts cloud.",
    roi: "Économies financières & feuille de route claire",
    features: [
      "Choix des frameworks et hébergements cloud",
      "Rédaction de spécifications techniques",
      "Analyse concurrentielle & benchmark",
      "Plan d'action immédiatement opérationnel",
    ],
    gradient: "from-purple-500/20 via-cyan-500/10 to-transparent",
    borderColor: "hover:border-purple-500/50",
    iconColor: "text-purple-400",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    icon: Zap,
    title: "Accompagnement Sur-Mesure PME & SaaS",
    subtitle: "Du concept initial au déploiement complet",
    description:
      "Partenariat stratégique et technique complet pour formaliser votre vision et concrétiser vos projets digitaux les plus ambitieux.",
    roi: "Mise sur le marché rapide & partenaire réactif",
    features: [
      "Interlocuteur unique dédié",
      "Livraison agile par jalons validés",
      "Formation de vos équipes internes",
      "Suivi post-lancement et optimisations",
    ],
    gradient: "from-cyan-500/20 via-emerald-500/10 to-transparent",
    borderColor: "hover:border-cyan-500/50",
    iconColor: "text-cyan-400",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeCurve,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#09090b] border-t border-white/10 relative scroll-mt-20 overflow-hidden">
      {/* Ambient Radial Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] -z-10"
      />

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
            SOLUTIONS HIGH-END SUR MESURE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Services & Offres Stratégiques
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-light leading-relaxed">
            Chaque service allie excellence du code et pertinence stratégique pour garantir des résultats concrets à votre entreprise.
          </p>
        </motion.div>

        {/* Services Staggered Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: easeCurve }}
                className={`group relative p-8 rounded-3xl bg-[#121215] border border-white/10 ${service.borderColor} transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-md`}
              >
                {/* Internal Card Background Gradient Glow */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-[#09090b] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                    <Icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4">{service.subtitle}</p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Impact ROI Box */}
                  <div className="p-3.5 rounded-xl bg-[#09090b]/90 border border-white/10 mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-0.5">
                      IMPACT PROJETAIS :
                    </span>
                    <p className="text-xs text-gray-200 font-medium">{service.roi}</p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action Link */}
                <div className="relative z-10 pt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20en%20savoir%20plus%20sur%20votre%20service%20:%20${encodeURIComponent(
                      service.title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1.5 duration-300 cursor-pointer"
                  >
                    <span>Discuter de ce service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
