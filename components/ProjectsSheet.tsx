"use client";

import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

interface ProjectsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const projects = [
  {
    number: "01",
    title: "GestFiPro",
    category: "APPLICATION SAAS SUR MESURE",
    description:
      "Plateforme de gestion financière d'entreprise conçue pour offrir un suivi rigoureux, temps réel et intuitif des flux de trésorerie et de la facturation.",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Tableaux de bord financiers temps réel",
      "Facturation automatisée & devis B2B",
      "Architecture cloud sécurisée & rôles",
    ],
  },
  {
    number: "02",
    title: "Cabinet Rhizome Conseil",
    category: "STRATÉGIE & PRÉSENCE DIGITALE",
    description:
      "Conception intégrale de l'écosystème digital et du contenu web pour un cabinet de conseil de référence. Positionnement haut de gamme et génération de leads B2B.",
    tags: ["Stratégie", "Web Design", "Next.js", "SEO B2B"],
    highlights: [
      "Direction artistique sur mesure",
      "Copywriting et architecture de conversion",
      "Optimisation SEO & score Lighthouse 98+",
    ],
  },
];

export default function ProjectsSheet({ open, onOpenChange }: ProjectsSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center space-x-2 text-[11px] font-mono tracking-widest text-[#A1A1AA]/70 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#3ECF80]" />
            <span>Sélection de réalisations</span>
          </div>
          <SheetTitle className="mt-1">Travaux & Projets</SheetTitle>
          <SheetDescription>
            Une sélection d&apos;applications et d&apos;écosystèmes digitaux conçus avec une exigence intransigeante de performance et d&apos;élégance.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-8 flex-1">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-400"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-mono tracking-widest text-[#A1A1AA]/50">
                  {project.number}
                </span>
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#3ECF80] bg-[#3ECF80]/10 px-2.5 py-0.5 rounded-full border border-[#3ECF80]/20">
                  {project.category}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-normal text-[#EDEDED] group-hover:text-white mb-2 transition-colors">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="space-y-1.5 mb-5">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center space-x-2 text-xs text-[#EDEDED]/80">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3ECF80] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#A1A1AA]/80 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="pt-8 mt-6 border-t border-white/10">
          <a
            href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20j'ai%20vu%20vos%20r%C3%A9alisations%20et%20j'aimerais%20discuter%20d'un%20projet%20similaire."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#EDEDED] hover:text-white transition-all group"
          >
            <div>
              <p className="text-xs tracking-wider uppercase font-medium">Vous avez un projet en tête ?</p>
              <p className="text-[11px] text-[#A1A1AA]">Discutons de votre vision sur WhatsApp</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
