"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Check, Sparkles, Shield, ArrowUpRight, Play, Eye, Layers, Video } from "lucide-react";
import Image from "next/image";

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projects = [
  {
    id: "gestfipro",
    num: "01",
    category: "APPLICATION SAAS & GESTION FINANCIÈRE",
    title: "GestFiPro",
    description:
      "Plateforme web SaaS de gestion financière d'entreprise conçue pour offrir un suivi rigoureux, temps réel et intuitif des flux de trésorerie, de la facturation et des devis B2B.",
    bulletPoints: [
      "Tableaux de bord financiers dynamiques en temps réel",
      "Facturation automatisée, devis & rôles utilisateurs",
      "Base de données Supabase cloud sécurisée & API Fast",
      "Score de performance Lighthouse 99/100",
    ],
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Recharts"],
    url: "https://gestfipro.vercel.app/",
    urlDisplay: "gestfipro.vercel.app",
    image: "/capturegestfipro.jpg",
    imageAlt: "Interface SaaS Dashboard GestFiPro",
    type: "SaaS / Full-Stack",
    hasVideoModal: true,
  },
  {
    id: "villa-heveas",
    num: "02",
    category: "STRATÉGIE DIGITALE & IMMOBILIER DE LUXE",
    title: "Villa Heveas (Bingerville)",
    description:
      "Stratégie digitale globale, création de contenus vidéo promotionnels haut de gamme et Community Management pour un projet immobilier d'exception situé à Bingerville.",
    bulletPoints: [
      "Positionnement de marque premium & identité visuelle",
      "Production vidéo promotionnelle et visites virtuelles",
      "Stratégie d'acquisition de prospects qualifiés & leads",
      "Gestion complète de communauté sur les réseaux sociaux",
    ],
    technologies: ["Stratégie Digitale", "Contenu Vidéo", "Community Management", "UI Design"],
    url: "https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20en%20savoir%20plus%20sur%20le%20projet%20Villa%20Heveas.",
    urlDisplay: "villa-heveas-bingerville.ci",
    image: "/villa-heveas.jpg",
    imageAlt: "Présentation digitale Villa Heveas Bingerville",
    type: "Stratégie & Médias",
    hasVideoModal: true,
  },
  {
    id: "rhizome-conseil",
    num: "03",
    category: "SITE B2B CORPORATE & DIRECTION ARTISTIQUE",
    title: "Cabinet Rhizome Conseil",
    description:
      "Conception intégrale de l'écosystème digital et du contenu web pour un cabinet de conseil de référence. Positionnement haut de gamme et génération de leads B2B.",
    bulletPoints: [
      "Direction artistique sur mesure & charte graphique",
      "Copywriting orienté conversion et autorité",
      "Architecture web responsive et sécurisée",
      "Optimisation SEO local & international",
    ],
    technologies: ["Next.js", "Web Design", "SEO B2B", "Tailwind CSS"],
    url: "https://www.rhizomeconseil.com/",
    urlDisplay: "rhizomeconseil.com",
    image: "/capture rhizomzconseil.png",
    imageAlt: "Site Corporate Cabinet Rhizome Conseil",
    type: "Site Corporate B2B",
    hasVideoModal: false,
  },
];

export default function Projects() {
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  return (
    <section id="projets" className="py-24 md:py-32 bg-[#09090b] border-t border-white/10 relative scroll-mt-20 overflow-hidden">
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Projets Majeurs & Études de Cas</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Réalisations & Portfolio
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-400 font-light leading-relaxed">
              Découvrez comment l&apos;alliance de la technologie et de la stratégie vidéo transforme le business de nos clients à Abidjan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#121215] border border-white/10 text-xs font-mono text-gray-300"
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Grille Bento & Mockups Interactifs</span>
          </motion.div>
        </div>

        {/* Bento Grid / Asymmetric Card Stack */}
        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: easeCurve }}
                whileHover={{ scale: 1.01 }}
                className="group relative rounded-3xl bg-[#121215] border border-white/10 hover:border-cyan-500/40 p-6 sm:p-10 lg:p-12 transition-all duration-500 shadow-2xl backdrop-blur-md"
              >
                {/* Ambient glow behind card */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                />

                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Text Description Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isEven ? "lg:col-start-7" : ""
                    }`}
                  >
                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                        {project.num} | {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-3xl sm:text-4xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-4">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3 mb-8">
                      {project.bulletPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-gray-200">
                          <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-lg bg-[#09090b] text-cyan-300 border border-white/10 group-hover:border-cyan-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4">
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow-emerald cursor-pointer"
                      >
                        <span>Découvrir le projet</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>

                      {project.hasVideoModal && (
                        <button
                          onClick={() => setActiveVideoModal(project.id)}
                          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#09090b] hover:bg-[#15151a] border border-white/10 hover:border-cyan-500/40 text-gray-200 text-xs font-medium uppercase tracking-wider transition-all cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                          <span>Aperçu Démo</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Visual Frame Column (Mockup Container) */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#09090b] shadow-2xl group-hover:border-cyan-500/40 transition-all duration-500">
                      {/* Macintosh / Browser Top Bar */}
                      <div className="px-4 py-3 bg-[#121215] border-b border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#09090b] border border-white/10 text-[11px] font-mono text-gray-400 max-w-[220px] truncate">
                          <Shield className="w-3 h-3 text-cyan-400 shrink-0" />
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

                      {/* Mockup Frame Screen */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#09090b] group">
                        <Image
                          src={project.image}
                          alt={project.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Overlay hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                        {/* Interactive Floating Badge on Mockup */}
                        <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-[#09090b]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Vue Interactive</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Video / Showcase Modal Preview */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoModal(null)}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: easeCurve }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl bg-[#121215] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Video className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white">
                    Démonstration & Maquette 3D
                  </h4>
                </div>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="p-2 rounded-xl bg-[#09090b] text-gray-400 hover:text-white border border-white/10 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="relative aspect-video rounded-2xl bg-[#09090b] border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <Sparkles className="w-10 h-10 text-cyan-400 mx-auto mb-3 animate-pulse" />
                  <p className="text-sm font-semibold text-white mb-1">
                    Présentation Vidéo HD & Maquette Interactive
                  </p>
                  <p className="text-xs text-gray-400 max-w-md mx-auto mb-4 font-light">
                    Retrouvez la démonstration complète sur WhatsApp ou prenez rendez-vous pour une démonstration directe en direct.
                  </p>
                  <a
                    href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20une%20demonstration%20video%20directe%20de%20vos%20projets."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-glow-emerald cursor-pointer"
                  >
                    <span>Demander la démonstration vidéo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
