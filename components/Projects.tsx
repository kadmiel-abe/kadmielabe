"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Sparkles, Shield, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "01",
    tagline: "01 | APPLICATION WEB SUR-MESURE",
    title: "GestFiPro",
    description:
      "Application web de gestion financière conçue pour aider les travailleurs salariés à maîtriser leur budget et anticiper leur trésorerie d'un salaire à l'autre.",
    bulletPoints: [
      "Vision claire du budget en temps réel",
      "Suivi automatisé des flux financiers",
      "Architecture cloud ultra-sécurisée",
    ],
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    url: "https://gestfipro.vercel.app/",
    urlDisplay: "gestfipro.vercel.app",
    image: "/capturegestfipro.jpg",
    imageAlt: "Capture de l'application de gestion financière GestFiPro",
    reverse: false,
  },
  {
    id: "02",
    tagline: "02 | STRATÉGIE & PRÉSENCE DIGITALE",
    title: "Cabinet Rhizome Conseil",
    description:
      "Conception intégrale de l'écosystème web pour un cabinet de conseil. Positionnement haut de gamme pour renforcer la crédibilité et générer des leads qualifiés.",
    bulletPoints: [
      "Image de marque premium qui rassure vos prospects",
      "Parcours utilisateur optimisé pour la conversion",
      "Architecture technique ultra-rapide (Score SEO 99+)",
    ],
    technologies: ["Stratégie", "Web Design", "Next.js", "SEO B2B"],
    url: "https://www.rhizomeconseil.com/",
    urlDisplay: "rhizomeconseil.com",
    image: "/capture rhizomzconseil.png",
    imageAlt: "Capture de l'écosystème web Cabinet Rhizome Conseil",
    reverse: true,
  },
];

export default function Projects() {
  return (
    <section id="projets" className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Réalisations &amp; Études de Cas</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Travaux &amp; Projets
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mt-4 text-base text-gray-400 font-light leading-relaxed"
            >
              Des solutions digitales créées pour générer des résultats tangibles : crédibilité, conversion et automatisation de votre activité.
            </motion.p>
          </div>
          <div className="hidden md:flex">
            <span className="text-xs font-mono text-gray-400 tracking-wider uppercase border border-white/10 px-4 py-2 rounded-xl bg-[#111111]">
              Standards Internationaux · Production
            </span>
          </div>
        </div>

        {/* Project Cards Stack */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="space-y-16 lg:space-y-24"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
              className="group relative rounded-3xl bg-[#111111] border border-white/5 hover:border-emerald-500/30 p-6 sm:p-10 lg:p-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Asymmetric 2-Column Grid */}
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
                  {/* Tagline */}
                  <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold mb-3">
                    {project.tagline}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-bold text-white group-hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Benefit Bullet Points with CheckCircle2 */}
                  <ul className="space-y-3 mb-8">
                    {project.bulletPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0a0a0a] text-gray-300 border border-white/10 group-hover:border-emerald-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_-5px_rgba(17,145,52,0.4)] hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95"
                    >
                      <span>Visiter le site</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* macOS Browser Window Frame Column */}
                <div
                  className={`lg:col-span-6 ${
                    project.reverse ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl group-hover:border-emerald-500/30 transition-all duration-500">
                    {/* macOS Window Title bar */}
                    <div className="px-4 py-3 bg-[#161616] border-b border-white/10 flex items-center justify-between">
                      {/* 3 Colored macOS Window Buttons */}
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                      </div>

                      {/* URL Address Bar */}
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0a0a] border border-white/10 text-[11px] font-mono text-gray-400 max-w-[200px] sm:max-w-xs truncate">
                        <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">https://{project.urlDisplay}</span>
                      </div>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-400 transition-colors"
                        aria-label={`Visiter ${project.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Screenshot Frame */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a]">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
