"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Sparkles, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "GestFiPro",
    category: "Application Web SaaS",
    description:
      "Plateforme SaaS dédiée à la gestion financière. Interface utilisateur fluide et architecture robuste pour garantir sécurité et rapidité. Tableaux de bord temps réel, authentification Supabase RLS et intégrations multi-modules.",
    tags: ["Next.js 15", "Tailwind CSS", "Supabase", "TypeScript"],
    link: "https://gestfipro.vercel.app/",
    image: "/capturegestfipro.jpg",
    alt: "Interface de la plateforme GestFiPro",
    stats: [
      { label: "Chargement", value: "< 1.0s", icon: Zap },
      { label: "Sécurité", value: "Supabase RLS", icon: ShieldCheck },
    ],
    number: "01",
  },
  {
    title: "Rhizome Conseil",
    category: "Site Corporate B2B",
    description:
      "Site corporate pour un cabinet d'accompagnement en stratégie financière. Design institutionnel et rassurant pour prospects B2B exigeants. Architecture SEO optimisée et score Lighthouse 98/100.",
    tags: ["Web Design", "UI/UX", "B2B", "SEO"],
    link: "https://www.rhizomeconseil.com/",
    image: "/capture rhizomzconseil.png",
    alt: "Site web de Rhizome Conseil",
    stats: [
      { label: "Performance", value: "98/100", icon: Zap },
      { label: "Positionnement", value: "B2B Premium", icon: ShieldCheck },
    ],
    number: "02",
  },
  {
    title: "Massy's Relaxation & Spa",
    category: "Site Vitrine & Réservation",
    description:
      "Site vitrine élégant et immersif pour un centre de bien-être à Abidjan. Galerie de soins raffinée, interface fluide et système de réservation directe par WhatsApp.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "UI/UX"],
    link: "https://massy-s.vercel.app/",
    image: "/Massy.PNG",
    alt: "Site de Massy's Relaxation & Spa",
    stats: [
      { label: "Réservations", value: "Direct WhatsApp", icon: Zap },
      { label: "Expérience", value: "Mobile-First", icon: ShieldCheck },
    ],
    number: "03",
  },
];

export default function Portfolio() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 bg-[#0B0B0C] text-[#EDEDED] relative overflow-hidden border-t border-[#1E1E22]"
    >
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.06] blur-[140px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="flex items-center -space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-400">
                Mes Réalisations
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Des projets qui{" "}
              <span className="text-emerald-400 inline-flex items-center gap-2">
                parlent d&apos;eux-memes
                <Sparkles className="w-6 h-6 text-emerald-400 shrink-0 fill-emerald-400" />
              </span>
            </h2>
          </div>

          <a
            href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel%2C%20je%20souhaite%20discuter%20d%27un%20projet%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-heading font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all self-start sm:self-auto shrink-0"
          >
            <span>Démarrer un projet</span>
            <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </div>
          </a>
        </div>

        {/* Projects List */}
        <div className="space-y-8 sm:space-y-10">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={project.title}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl border border-[#1E1E22] hover:border-emerald-500/40 bg-[#141416] shadow-lg hover:shadow-2xl transition-all duration-500 chamfer-tl-br"
              >
                {/* Image side */}
                <div
                  className={
                    "lg:col-span-6 relative overflow-hidden " +
                    (isEven ? "lg:order-1" : "lg:order-2")
                  }
                >
                  {/* Browser-style top bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f11] border-b border-[#1E1E22]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 mx-3 px-3 py-1 rounded bg-[#1E1E22] border border-white/5 text-[11px] font-mono text-gray-500 hover:text-emerald-400 transition-colors truncate flex items-center gap-1"
                    >
                      <span>{project.link.replace("https://", "")}</span>
                      <ExternalLink className="w-3 h-3 opacity-60 shrink-0" />
                    </a>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shrink-0">
                      {project.number}
                    </span>
                  </div>

                  {/* Screenshot */}
                  <div className="relative w-full h-[260px] sm:h-[320px] overflow-hidden bg-[#0B0B0C]">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      unoptimized
                      className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141416]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Category badge on image */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-heading font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-emerald-300 border border-emerald-500/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Stats overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                      {project.stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                          <div key={stat.label} className="flex items-center gap-1.5 text-xs">
                            <Icon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="text-gray-300">{stat.label}:</span>
                            <span className="font-bold text-emerald-400">{stat.value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div
                  className={
                    "lg:col-span-6 flex flex-col justify-between p-7 sm:p-10 " +
                    (isEven ? "lg:order-2" : "lg:order-1")
                  }
                >
                  <div>
                    {/* Number + Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs text-gray-500">{project.number}.</span>
                      <span className="text-xs font-heading font-bold uppercase tracking-wider text-emerald-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-black text-white group-hover:text-emerald-400 transition-colors duration-300 mb-4 tracking-tight">
                      {project.title}
                    </h3>

                    {/* Divider */}
                    <div className="w-12 h-[2px] bg-emerald-500/60 rounded-full mb-5" />

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-7">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3.5 py-1.5 rounded-full text-xs font-heading font-medium bg-[#1F1F24] text-gray-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 p-1.5 pr-5 rounded-full bg-[#1E1E22] hover:bg-emerald-500 border border-[#2A2A30] hover:border-emerald-500 transition-all duration-300 hover:scale-105 active:scale-95 project-card-cta"
                    >
                      <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-black" />
                      </div>
                      <span className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                        Voir le projet en ligne
                      </span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 sm:mt-16 text-center"
        >
          <p className="text-sm text-gray-400 font-light mb-5">
            Votre projet mérite la même qualité d&apos;exécution.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#141416] hover:bg-emerald-500 border border-[#2A2A30] hover:border-emerald-500 text-white hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
          >
            <span>Discutons de votre projet</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
