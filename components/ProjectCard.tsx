"use client";

import React, { useRef } from "react";
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
  // 1. Ref pour le spotlight souris sans re-render React
  const cardRef = useSpotlight<HTMLDivElement>();

  // 2. Accessibilité : prise en compte de prefers-reduced-motion
  const shouldReduceMotion = useReducedMotion();

  // 3. Parallaxe très légère (±20px) sur la capture
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  // Variantes pour la cascade ordonnée : badge, titre, description, 3 points, tags, bouton
  const contentContainerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  // Gestion du clic sur la carte : permet le clic global sans empêcher la sélection de texte ni casser les liens internes
  const handleCardClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) return;
    if (window.getSelection()?.toString()) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() !== "a" && target.tagName.toLowerCase() !== "button") {
        e.preventDefault();
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" }}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
      aria-label={`Projet ${title}`}
      className={`
        group relative rounded-3xl bg-[#111111] border border-white/10 p-6 sm:p-10 lg:p-12
        transition-all duration-300 overflow-hidden cursor-pointer select-text
        hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]
      `}
    >
      {/* Spotlight vert réactif qui suit la souris (--mouse-x, --mouse-y) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 197, 94, 0.12), transparent 40%)`,
        }}
      />

      {/* Grille Asymétrique à 2 Colonnes */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Colonne Contenu Textuel avec cascade stagger garantie */}
        <motion.div
          variants={contentContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
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

          {/* 2. Titre Serif avec hover subtil */}
          <motion.div variants={itemVariants} className="mb-4">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group/title text-white hover:text-emerald-400 transition-colors duration-300"
            >
              <h3 className="text-3xl sm:text-4xl font-bold font-serif group-hover/title:translate-x-1 transition-transform duration-300">
                {title}
              </h3>
            </a>
          </motion.div>

          {/* 3. Description (contraste supérieur à 4.5:1) */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-6"
          >
            {description}
          </motion.p>

          {/* 4. Points d'avantages avec coches vertes animées au scroll */}
          <motion.ul variants={itemVariants} className="space-y-3 mb-8">
            {features.map((feature, fIndex) => (
              <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-200">
                <motion.span
                  initial={{ scale: shouldReduceMotion ? 1 : 0, opacity: shouldReduceMotion ? 1 : 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 350, damping: 18, delay: 0.15 + fIndex * 0.08 }
                  }
                  className="shrink-0 mt-0.5 inline-block"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </motion.span>
                <span>{feature}</span>
              </li>
            ))}
          </motion.ul>

          {/* 5. Tags de Stack (Texte Monospace) */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0a0a0a] text-gray-300 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-300 hover:bg-emerald-500/5 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* 6. Bouton CTA Interactif avec Reflet & Flèche Déplacée */}
          <motion.div variants={itemVariants}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] active:scale-95 overflow-hidden"
            >
              {/* Reflet lumineux */}
              <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

              <span className="relative z-10">Visiter le site</span>
              <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-[2px] group-hover/btn:-translate-y-[2px]" />
            </a>
          </motion.div>
        </motion.div>

        {/* Colonne Mockup Navigateur macOS qui glisse depuis son côté */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut", delay: 0.15 }}
          className={`lg:col-span-6 ${reverse ? "lg:col-start-1" : ""}`}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl group-hover:border-emerald-500/40 transition-all duration-500">
            {/* Barre de fenêtre macOS */}
            <div className="px-4 py-3 bg-[#161616] border-b border-white/10 flex items-center justify-between z-20 relative">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a0a0a] border border-white/10 text-[11px] font-mono text-gray-400 max-w-[200px] sm:max-w-xs truncate">
                <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate">https://{urlDisplay || url.replace(/^https?:\/\//, "")}</span>
              </div>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors p-0.5 rounded"
                aria-label={`Visiter ${title}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Zone de la capture d'écran nette et fidèle, sans rognage artificiel */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a]">
              <motion.div
                style={{ y: shouldReduceMotion ? 0 : parallaxY }}
                className="w-full h-full relative"
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
