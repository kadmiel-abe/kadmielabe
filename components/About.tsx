"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";
import { EASINGS } from "@/lib/motion";

// Counter component for smooth animated counting effect
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 30;
    const totalSteps = Math.floor(duration / stepTime);
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const skillPills = [
    { label: "Next.js 15", bg: "bg-black/90 dark:bg-[#18181B] text-white", float: "animate-float-1" },
    { label: "SaaS & B2B", bg: "bg-emerald-500 text-black font-bold", float: "animate-float-2" },
    { label: "TypeScript", bg: "bg-black/90 dark:bg-[#18181B] text-white", float: "animate-float-3" },
    { label: "Tailwind CSS", bg: "bg-emerald-500 text-black font-bold", float: "animate-float-1" },
    { label: "Supabase", bg: "bg-black/90 dark:bg-[#18181B] text-white", float: "animate-float-2" },
    { label: "UI/UX Design", bg: "bg-black/90 dark:bg-[#18181B] text-white", float: "animate-float-3" },
    { label: "Vibecoding / IA", bg: "bg-emerald-500 text-black font-bold", float: "animate-float-1" },
  ];

  const stats = [
    { value: 3, suffix: "+", label: "Années d'expérience" },
    { value: 50, suffix: "+", label: "Projets livrés" },
    { value: 98, suffix: "%", label: "Clients satisfaits" },
    { value: 24, suffix: "/7", label: "Support & Suivi" },
  ];

  return (
    <section
      id="a-propos"
      className="py-24 sm:py-32 bg-[#0B0B0C] text-[#EDEDED] relative overflow-hidden border-t border-[#1E1E22]"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[140px] -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Cut-corner Chamfered Portrait Card with Mask Reveal */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0% 0% 100% 0%)", y: 30 }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, ease: EASINGS.awwwards }}
              className="relative w-full max-w-[380px] sm:max-w-[420px]"
            >
              {/* Outer Chamfered Container (Border effect with cut corners) */}
              <div className="p-1 rounded-3xl bg-gradient-to-br from-emerald-500/50 via-emerald-500/20 to-transparent chamfer-card shadow-2xl">
                <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-gradient-to-b from-emerald-600 via-emerald-700 to-[#0B0B0C] chamfer-card group">
                  {/* Subtle Geometric Background Pattern inside photo frame */}
                  <div className="absolute inset-0 bg-grid-subtle opacity-30 mix-blend-overlay pointer-events-none" />

                  {/* Cutout Portrait */}
                  <Image
                    src="/profil.png"
                    alt="Kadmiel Abe - À propos"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient shadow for text / badges overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Overlapping Skill Tag Pills Clustered across the bottom with continuous float */}
              <div className="absolute -bottom-6 left-2 right-2 flex flex-wrap justify-center gap-2 z-20">
                {skillPills.map((pill, i) => (
                  <motion.span
                    key={pill.label}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    className={`px-3 py-1.5 rounded-full text-xs font-heading shadow-lg border border-white/10 backdrop-blur-md ${pill.bg} ${pill.float}`}
                  >
                    {pill.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio Content, CTA, and Stylized Signature */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: EASINGS.awwwards }}
            className="lg:col-span-7 flex flex-col justify-center mt-6 lg:mt-0"
          >
            {/* Section label with double-circle icon */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="flex items-center -space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-heading font-semibold uppercase tracking-wider text-gray-300">
                À propos
              </span>
            </div>

            {/* Heading */}
            <h2 className="section-title text-white mb-6">
              Qui est{" "}
              <span className="text-emerald-400 inline-flex items-center gap-2">
                Kadmiel Abe ?
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 fill-emerald-400" />
              </span>
            </h2>

            {/* Description Text */}
            <div className="space-y-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-10 max-w-2xl">
              <p>
                Bonjour ! Je suis <strong className="text-white font-semibold">Kadmiel Abe</strong>, développeur web freelance et consultant en stratégie digitale basé à Abidjan (Côte d&apos;Ivoire).
              </p>
              <p>
                Ma mission est simple : transformer vos ambitions en applications web fiables, rapides et séduisantes. Qu&apos;il s&apos;agisse d&apos;un écosystème SaaS complet (comme GestFiPro) ou d&apos;un site institutionnel B2B à fort taux de conversion, je m&apos;assure que chaque pixel sert vos objectifs d&apos;affaires.
              </p>
            </div>

            {/* Action Row: CTA Pill Button + Signature */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              {/* Contact / Hire CTA Button with Magnetic */}
              <Magnetic strength={0.25}>
                <a
                  href="#contact"
                  className="group inline-flex items-center p-1.5 pr-2 rounded-full bg-[#17171A] hover:bg-[#1E1E22] border border-[#2A2A30] hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span className="px-5 py-2 font-heading font-bold text-xs uppercase tracking-wider text-white">
                    Démarrer un projet
                  </span>
                  <div className="w-9 h-9 rounded-full bg-emerald-500 text-black flex items-center justify-center group-hover:bg-emerald-400 transition-colors shadow-md">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              </Magnetic>

              {/* Signature (Stylized script) */}
              <div className="flex items-center gap-2 select-none">
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="italic text-2xl sm:text-3xl font-normal text-emerald-400 tracking-wider rotate-[-3deg]"
                >
                  Kadmiel Abe
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics Bar: 4 Animated Counters Separated by Fine Lines */}
        <div className="mt-20 sm:mt-24 pt-12 border-t border-[#1E1E22]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center px-4 ${
                  idx < stats.length - 1
                    ? "lg:border-r lg:border-[#1E1E22] relative"
                    : ""
                }`}
              >
                <div className="font-heading text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm font-heading font-medium text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>

                {/* Micro accent dot on divider for desktop */}
                {idx < stats.length - 1 && (
                  <div
                    className="hidden lg:flex items-center -space-x-1 absolute -right-2 top-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
