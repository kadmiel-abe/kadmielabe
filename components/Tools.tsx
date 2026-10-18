"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Sparkles, Code2, Database, Palette, Terminal, Cpu, Layout, Globe, FileCode2 } from "lucide-react";
import { EASINGS } from "@/lib/motion";

interface ToolItem {
  name: string;
  category: string;
  percentage: number;
  icon: React.ElementType;
}

const toolsList: ToolItem[] = [
  {
    name: "Next.js / React",
    category: "Framework Web Principal",
    percentage: 98,
    icon: Code2,
  },
  {
    name: "TypeScript",
    category: "Langage & Architecture",
    percentage: 92,
    icon: FileCode2,
  },
  {
    name: "Tailwind CSS",
    category: "Styling & Design System",
    percentage: 96,
    icon: Palette,
  },
  {
    name: "Supabase & Cloud",
    category: "Base de données & Auth",
    percentage: 90,
    icon: Database,
  },
  {
    name: "IA & Vibecoding",
    category: "Productivité & Agents",
    percentage: 95,
    icon: Cpu,
  },
  {
    name: "WordPress",
    category: "CMS & Solutions PME",
    percentage: 90,
    icon: Globe,
  },
  {
    name: "Figma & UI/UX",
    category: "Prototypage & Maquettes",
    percentage: 88,
    icon: Layout,
  },
  {
    name: "Canva & Visuels",
    category: "Design Graphique",
    percentage: 92,
    icon: Terminal,
  },
];

function ToolPercentageCounter({ target }: { target: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setVal(target);
      return;
    }

    let start = 0;
    const duration = 600;
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target, shouldReduceMotion]);

  return <span ref={ref}>{val}%</span>;
}

export default function Tools() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="outils"
      className="py-24 sm:py-32 bg-[#FAF9F5] dark:bg-[#0E0E10] text-gray-900 dark:text-[#EDEDED] transition-colors duration-300 relative border-t border-gray-200 dark:border-[#1E1E22]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="flex items-center -space-x-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-white" />
            </div>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Mes Outils Favoris
            </span>
          </div>

          <h2 className="section-title-center text-gray-900 dark:text-white">
            Les technologies au cœur de{" "}
            <span className="text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-2">
              mes conceptions
              <Sparkles className="w-5 h-5 text-emerald-500 shrink-0 fill-emerald-500" />
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
            Une boîte à outils moderne rigoureusement sélectionnée pour garantir performance, sécurité et rapidité de mise en production.
          </p>
        </div>

        {/* Grid of Tool Cards with Chamfered Corners and Percentage Progress Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {toolsList.map((tool, idx) => {
            const Icon = tool.icon;
            const floatClass =
              idx % 3 === 0
                ? "animate-float-1"
                : idx % 3 === 1
                ? "animate-float-2"
                : "animate-float-3";

            return (
              <motion.div
                key={tool.name}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.35, delay: idx * 0.03, ease: EASINGS.awwwards }}
                className="group relative p-6 bg-white dark:bg-[#141416] rounded-2xl border border-gray-200/90 dark:border-white/10 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 chamfer-step flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Icon on left, Percentage Pill on right */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300 shadow-sm ${floatClass}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black dark:bg-[#1F1F24] text-white shadow-sm border border-white/10">
                      <ToolPercentageCounter target={tool.percentage} />
                    </span>
                  </div>

                  {/* Tool Name & Category */}
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-500 transition-colors mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mb-6">
                    {tool.category}
                  </p>
                </div>

                {/* Bottom Emerald Progress Bar */}
                <div className="pt-2">
                  <div className="w-full h-2 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: tool.percentage / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + idx * 0.03, ease: EASINGS.awwwards }}
                      className="h-full w-full origin-left rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(17,145,52,0.5)]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
