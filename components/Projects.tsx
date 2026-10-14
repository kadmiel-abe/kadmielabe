"use client";

import React, { useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "Tous les Projets" },
    { id: "saas", label: "Applications SaaS" },
    { id: "b2b", label: "Corporate & B2B" },
    { id: "vitrine", label: "Sites Vitrines" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 bg-[#0B0B0C] text-[#EDEDED] relative overflow-hidden border-t border-[#1E1E22]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="flex items-center -space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-400">
                Mon Portfolio
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Découvrez un aperçu de{" "}
              <span className="text-emerald-400 inline-flex items-center gap-2">
                mon portfolio
                <Sparkles className="w-6 h-6 text-emerald-400 shrink-0 fill-emerald-400" />
              </span>
            </h2>
          </div>

          <a
            href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20j'ai%20vu%20vos%20projets%20et%20je%20souhaite%20discuter%20de%20mon%20besoin."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#18181B] hover:bg-[#202025] text-white border border-white/10 hover:border-emerald-500/50 font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md self-start sm:self-auto shrink-0 group"
          >
            <span>Lancer un projet similaire</span>
            <div className="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center group-hover:bg-emerald-400 transition-colors">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </div>
          </a>
        </div>

        {/* Category filter tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                filter === tab.id
                  ? "bg-emerald-500 text-black shadow-md shadow-emerald-500/20 scale-105"
                  : "bg-[#141417] text-gray-400 hover:text-white hover:bg-[#1C1C20] border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Stack of Project Cards */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              index={project.index}
              badge={project.badge}
              categoryLabel={project.categoryLabel}
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
