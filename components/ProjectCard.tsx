"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Magnetic from "@/components/motion/Magnetic";
import { EASINGS } from "@/lib/motion";

export interface ProjectCardProps {
  index: number;
  badge: string;
  categoryLabel?: string;
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
  categoryLabel = "Projet Web",
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
  const shouldReduceMotion = useReducedMotion();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, x: isEven ? -40 : 40, y: 20 }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: EASINGS.awwwards }}
      className="group relative rounded-3xl p-1 bg-gradient-to-br from-emerald-500/30 via-white/5 to-transparent chamfer-tl-br transition-all duration-500 hover:from-emerald-500/60 hover:shadow-[0_20px_50px_-15px_rgba(17,145,52,0.25)]"
    >
      <div className="w-full h-full bg-[#121214] rounded-3xl p-6 sm:p-10 lg:p-12 chamfer-tl-br overflow-hidden">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
            reverse ? "lg:grid-flow-dense" : ""
          }`}
        >
          {/* Screenshot / Mockup Column */}
          <div
            className={`lg:col-span-6 ${
              reverse ? "lg:col-start-7" : "lg:col-start-1"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0B0B0C] shadow-2xl group-hover:border-emerald-500/40 transition-all duration-500">
              {/* Mockup browser top bar */}
              <div className="px-4 py-2.5 bg-[#18181B] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-gray-400 truncate max-w-[200px]">
                  {urlDisplay || url.replace(/^https?:\/\//, "")}
                </span>
                <div className="w-6" />
              </div>

              {/* Visual Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Details / Text Column */}
          <div
            className={`lg:col-span-6 flex flex-col justify-center ${
              reverse ? "lg:col-start-1" : "lg:col-start-7"
            }`}
          >
            {/* Category Tags in emerald pills */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-heading font-bold bg-emerald-500 text-black shadow-sm">
                {categoryLabel}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono text-gray-400 bg-white/5 border border-white/10">
                {badge}
              </span>
            </div>

            {/* Title with hover accent */}
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-4 tracking-tight">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-6">
              {description}
            </p>

            {/* Feature Bullets */}
            <ul className="space-y-2.5 mb-7">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-[#1A1A1E] text-gray-300 border border-white/10 group-hover:border-emerald-500/30 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Arrow Button with Magnetic */}
            <div>
              <Magnetic strength={0.25}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                >
                  <span>Visiter le projet</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
