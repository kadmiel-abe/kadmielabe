"use client";

import { motion } from "framer-motion";
import { User, Cpu, Target, Share2, Layers, Award, Terminal, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

const techStack = [
  { name: "Next.js / React", level: "Avancé", category: "Front-end" },
  { name: "Node.js & TypeScript", level: "Avancé", category: "Back-end" },
  { name: "Supabase / PostgreSQL", level: "Avancé", category: "Database" },
  { name: "Tailwind CSS & Motion", level: "Expert", category: "UI / UX" },
  { name: "Stratégie Digitale & CM", level: "Expert", category: "Growth" },
  { name: "Création de Contenu Vidéo", level: "Avancé", category: "Media" },
];

const stats = [
  { value: "+15", label: "Projets Déployés", sub: "Web & SaaS" },
  { value: "100%", label: "Satisfaction Client", sub: "Sur-mesure" },
  { value: "< 1s", label: "Temps de Chargement", sub: "Performance Max" },
  { value: "24/7", label: "Fiabilité & Support", sub: "Infrastructure" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#09090b] border-t border-white/10 relative scroll-mt-20 overflow-hidden">
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCurve }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4">
            <User className="w-3.5 h-3.5" />
            <span>À Propos de moi</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            La double expertise : <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Technique & Stratégie</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-light leading-relaxed">
            Basé à Abidjan, j&apos;accompagne les entreprises et PME ambitieuses dans la construction d&apos;outils web d&apos;exception et l&apos;activation de leur présence digitale.
          </p>
        </motion.div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Profile + Card Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#121215] shadow-glow-cyan p-3">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#09090b]">
                <Image
                  src="/profil.jpg"
                  alt="Kadmiel Abe - Développeur Web & Stratège Digital Abidjan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#121215]/90 backdrop-blur-md border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Kadmiel Abe</p>
                    <p className="text-sm font-semibold text-white">Full-Stack Dev & Growth Digital</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Fluid Text Scroll Reveal + Dual Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            {/* Bio Fluid Text */}
            <div className="space-y-4 text-gray-300 font-light text-base sm:text-lg leading-relaxed">
              <p>
                Un beau site web ne suffit pas s&apos;il n&apos;apporte pas de visiteurs qualifiés, et une stratégie de contenu est inutile si l&apos;expérience utilisateur est lente ou bancale.
              </p>
              <p>
                C&apos;est pourquoi j&apos;allie <strong className="font-semibold text-white">rigueur technique du code Full-Stack</strong> (React, Next.js, Supabase) et <strong className="font-semibold text-cyan-400">vision stratégique sur-mesure</strong> (Community Management, création vidéo & conversion).
              </p>
            </div>

            {/* Dual Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pillar 1: Technical Mastery */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-[#121215] border border-white/10 hover:border-cyan-500/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Maîtrise Technique
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  Applications SaaS & web apps ultra-rapides développées avec Node.js, React, Supabase & TypeScript.
                </p>
              </motion.div>

              {/* Pillar 2: Strategic Vision */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-[#121215] border border-white/10 hover:border-emerald-500/40 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">
                  Vision Stratégique
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                  Community Management, création de contenu vidéo engageant et stratégie de conversion B2B.
                </p>
              </motion.div>
            </div>

            {/* Tech Stack Interactive Grid */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Technologies & Compétences Clés</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-xl bg-[#09090b] border border-white/5 hover:border-cyan-500/30 transition-colors flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-white">{tech.name}</p>
                      <p className="text-[10px] text-gray-500 font-mono">{tech.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Stats Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeCurve }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#121215] border border-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent block mb-1">
                {stat.value}
              </span>
              <p className="text-sm font-bold text-white">{stat.label}</p>
              <p className="text-xs text-gray-400 font-mono mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
