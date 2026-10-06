"use client";

import { motion } from "framer-motion";
import { ExternalLink, Check, Sparkles, Shield, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    tagline: "01 | APPLICATION SAAS SUR MESURE",
    title: "GestFiPro",
    description:
      "Plateforme de gestion financière d'entreprise conçue pour offrir un suivi rigoureux, temps réel et intuitif des flux de trésorerie et de la facturation.",
    bulletPoints: [
      "Tableaux de bord financiers temps réel",
      "Facturation automatisée & devis B2B",
      "Architecture cloud sécurisée & rôles",
    ],
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    url: "https://gestfipro.vercel.app/",
    urlDisplay: "gestfipro.vercel.app",
    image: "/capturegestfipro.jpg",
    imageAlt: "Capture d'écran de l'interface SaaS Dashboard GestFiPro",
    reverse: false,
  },
  {
    id: "02",
    tagline: "02 | STRATÉGIE & PRÉSENCE DIGITALE",
    title: "Cabinet Rhizome Conseil",
    description:
      "Conception intégrale de l'écosystème digital et du contenu web pour un cabinet de conseil de référence. Positionnement haut de gamme et génération de leads B2B.",
    bulletPoints: [
      "Direction artistique sur mesure",
      "Copywriting et architecture de conversion",
      "Optimisation SEO & score Lighthouse 98+",
    ],
    technologies: ["Stratégie", "Web Design", "Next.js", "SEO B2B"],
    url: "https://www.rhizomeconseil.com/",
    urlDisplay: "rhizomeconseil.com",
    image: "/capture rhizomzconseil.png",
    imageAlt: "Capture du site corporate Cabinet Rhizome Conseil",
    reverse: true,
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-24 md:py-32 bg-[#0B0B0C] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Réalisations & Études de Cas</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight">
              Travaux & Projets
            </h2>
            <p className="mt-4 text-base text-gray-400 font-light leading-relaxed">
              Chaque produit est conçu sur mesure pour répondre aux objectifs stratégiques des PME : gain de temps, automatisation et conversion maximale.
            </p>
          </div>
          <div className="hidden md:flex">
            <span className="text-xs font-mono text-gray-400 tracking-wider uppercase border border-[#1E1E22] px-4 py-2 rounded-xl bg-[#121214]">
              Standards Internationaux · Production
            </span>
          </div>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative rounded-3xl bg-[#121214] border border-[#1E1E22] hover:border-emerald-500/40 p-6 sm:p-10 lg:p-12 transition-all duration-500 shadow-card-dark hover:shadow-glow-emerald"
            >
              {/* Grid Layout: Desktop Asymmetric 2-Columns */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  project.reverse ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    project.reverse ? "lg:col-start-7" : ""
                  }`}
                >
                  {/* Category Tagline */}
                  <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold mb-3">
                    {project.tagline}
                  </span>

                  {/* Main Title */}
                  <h3 className="font-heading text-3xl sm:text-4xl font-bold text-[#EDEDED] group-hover:text-white transition-colors mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Bullet Points with Green Checkmark */}
                  <ul className="space-y-3 mb-8">
                    {project.bulletPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-gray-300">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0B0B0C] text-gray-300 border border-[#1E1E22] group-hover:border-emerald-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Button */}
                  <div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_-5px_rgba(17,145,52,0.4)] hover:scale-105 active:scale-95"
                    >
                      <span>Visiter le site</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Visual / Mockup Screen Frame Column */}
                <div
                  className={`lg:col-span-6 ${
                    project.reverse ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-[#1E1E22] bg-[#0B0B0C] shadow-2xl group-hover:border-emerald-500/30 transition-all duration-500">
                    {/* Elegant Browser Frame Header */}
                    <div className="px-4 py-3 bg-[#121214] border-b border-[#1E1E22] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0B0B0C] border border-[#1E1E22] text-[11px] font-mono text-gray-400 max-w-[200px] sm:max-w-xs truncate">
                        <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">https://{project.urlDisplay}</span>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label={`Ouvrir ${project.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Screenshot Frame */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B0B0C]">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
