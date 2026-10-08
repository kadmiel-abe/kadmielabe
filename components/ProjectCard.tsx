"use client";

import { motion, useScroll, useTransform, useReducedMotion, Variants } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Shield } from "lucide-react";
import Image from "next/image";
import { useSpotlight } from "@/hooks/useSpotlight";

export interface ProjectCardProps {
  index: number;
  badge: string;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  url: string;
  urlDisplay?: string;
  image: string;
  imageAlt?: string;
  reverse?: boolean;
}

/**
 * Composant ProjectCard réutilisable
 * Rendu fidèle des captures d'écran (sans rognage ni déformation forcée),
 * avec animations au scroll, parallaxe fluide, spotlight interactif et accessibilité.
 */
export function ProjectCard({
  index,
  badge,
  title,
  description,
  features,
  tags,
  url,
  urlDisplay,
  image,
  imageAlt = title,
  reverse = false,
}: ProjectCardProps) {
  // 1. Ref pour l'effet Spotlight souris (mise à jour directe du DOM à 60 fps sans re-render React)
  const cardRef = useSpotlight<HTMLDivElement>();

  // 2. Détection du mode reduced-motion pour l'accessibilité WCAG
  const shouldReduceMotion = useReducedMotion();

  // 3. Parallaxe très légère (±25px max) basée sur la progression du scroll
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  // Variantes de l'animation d'entrée au scroll avec Stagger Cascade (badge -> titre -> desc -> points -> tags -> bouton)
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: "easeOut",
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  // Coches vertes avec effet rebond (spring scale 0 -> 1)
  const checkmarkVariants: Variants = {
    hidden: { scale: shouldReduceMotion ? 1 : 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { type: "spring", stiffness: 350, damping: 18 },
    },
  };

  // Mockup qui glisse depuis son côté (droite pour carte 1, gauche pour carte 2)
  const mockupVariants: Variants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : reverse ? -60 : 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.article
      ref={cardRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className={`
        group relative rounded-3xl bg-[#111111] border border-white/10 p-6 sm:p-10 lg:p-12
        transition-all duration-300 overflow-hidden project-card-hover
        hover:border-[#22c55e]/40 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)]
      `}
    >
      {/* Spotlight vert réactif suivant les CSS variables --mouse-x et --mouse-y */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 197, 94, 0.12), transparent 40%)`,
        }}
      />

      {/* Zone cliquable étendue avec style focus-visible pour la navigation au clavier */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
        aria-label={`Visiter le site web de ${title}`}
      />

      {/* Grille Asymétrique à 2 Colonnes */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-20 pointer-events-none ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Colonne Contenu Textuel */}
        <div
          className={`lg:col-span-6 flex flex-col justify-center ${
            reverse ? "lg:col-start-7" : ""
          }`}
        >
          {/* 1. Badge Monospace */}
          <motion.div variants={itemVariants} className="mb-3">
            <span className="inline-block text-xs font-mono tracking-wider text-emerald-400 uppercase font-semibold px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              {badge}
            </span>
          </motion.div>

          {/* 2. Titre Serif */}
          <motion.h3
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold font-serif text-white group-hover:text-emerald-400 transition-colors duration-300 mb-4"
          >
            {title}
          </motion.h3>

          {/* 3. Description (Contraste accessible >= 4.5:1) */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6"
          >
            {description}
          </motion.p>

          {/* 4. Points d'avantages avec Coches Vertes Animées */}
          <motion.ul variants={itemVariants} className="space-y-3 mb-8">
            {features.map((feature, fIndex) => (
              <li key={fIndex} className="flex items-start gap-3 text-sm text-neutral-200">
                <motion.span
                  variants={checkmarkVariants}
                  className="shrink-0 mt-0.5 inline-block"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </motion.span>
                <span>{feature}</span>
              </li>
            ))}
          </motion.ul>

          {/* 5. Tags de Stack (Texte Monospace) */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8 pointer-events-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0a0a0a] text-neutral-300 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-300 hover:bg-emerald-500/5 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* 6. Bouton Vert "Visiter le site ↗" */}
          <motion.div variants={itemVariants} className="pointer-events-auto">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] active:scale-95 overflow-hidden"
            >
              {/* Reflet lumineux traversant le bouton */}
              <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

              <span className="relative z-10">Visiter le site</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]" />
            </a>
          </motion.div>
        </div>

        {/* Colonne Mockup Navigateur macOS */}
        <motion.div
          variants={mockupVariants}
          className={`lg:col-span-6 ${reverse ? "lg:col-start-1" : ""}`}
        >
          <motion.div
            style={{ y: shouldReduceMotion ? 0 : parallaxY }}
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl group-hover:border-emerald-500/40 transition-all duration-500"
          >
            {/* Barre de fenêtre macOS */}
            <div className="px-4 py-3 bg-[#161616] border-b border-white/10 flex items-center justify-between z-20 relative">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0a0a] border border-white/10 text-[11px] font-mono text-neutral-400 max-w-[200px] sm:max-w-xs truncate">
                <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">https://{urlDisplay || url.replace(/^https?:\/\//, "")}</span>
              </div>

              <span className="text-neutral-400 group-hover:text-emerald-400 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </div>

            {/* Zone de la capture d'écran - Rendu net et fidèle tel quel avec zoom doux au hover */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  );
}
