"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

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
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight"
            >
              Travaux &amp; Projets
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mt-4 text-base text-neutral-300 font-light leading-relaxed"
            >
              Des solutions digitales créées pour générer des résultats tangibles : crédibilité, conversion et automatisation de votre activité.
            </motion.p>
          </div>
          <div className="hidden md:flex">
            <span className="text-xs font-mono text-neutral-400 tracking-wider uppercase border border-white/10 px-4 py-2 rounded-xl bg-[#111111]">
              Standards Internationaux · Production
            </span>
          </div>
        </div>

        {/* Stack de Cartes Projets Animées */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              index={project.index}
              badge={project.badge}
              title={project.title}
              description={project.description}
              features={project.features}
              tags={project.tags}
              url={project.url}
              urlDisplay={project.urlDisplay}
              image={project.image}
              imageAlt={project.imageAlt}
              reverse={project.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
