"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, X, ExternalLink, CheckCircle2, Code2, Globe, RefreshCcw, ArrowRight, MessageCircle } from "lucide-react";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, scale: 0.96, y: 10, transition: { duration: 0.2 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

// ─── Services data ─────────────────────────────────────────────────────────────
const services = [
  {
    icon: Globe,
    title: "Création de Site Vitrine",
    description:
      "Sites vitrines modernes, rapides et optimisés SEO pour mettre en valeur votre activité et convertir vos visiteurs.",
    highlights: ["Design sur mesure", "Performance Lighthouse 90+", "SEO optimisé", "Mobile-first"],
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Code2,
    title: "Application Web",
    description:
      "Développement d'applications SaaS, tableaux de bord et plateformes complexes avec Next.js, React et Node.js.",
    highlights: ["Architecture scalable", "API RESTful / GraphQL", "Authentification & Rôles", "Base de données"],
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: RefreshCcw,
    title: "Refonte & Migration",
    description:
      "Modernisation de votre site ou application existante : refonte complète, migration de stack technique, optimisation des performances.",
    highlights: ["Audit technique", "Migration douce", "Zéro downtime", "Tests & validation"],
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
];

// ─── Projects data ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: "GestFiPro",
    category: "Application SaaS",
    description:
      "Plateforme de gestion financière pour PME : facturation, suivi de trésorerie, tableaux de bord analytiques en temps réel.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    gradient: "from-emerald-500/30 via-teal-500/20 to-transparent",
    icon: "💼",
  },
  {
    title: "Site Vitrine B2B",
    category: "Site Vitrine",
    description:
      "Conception et développement d'un site vitrine haut de gamme pour une entreprise de conseil B2B. Score Lighthouse 97+.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    gradient: "from-blue-500/30 via-indigo-500/20 to-transparent",
    icon: "🌐",
  },
  {
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description:
      "Boutique en ligne full-stack avec gestion des stocks, paiement intégré et panel d'administration complet.",
    tech: ["React", "Express.js", "MongoDB", "Stripe"],
    gradient: "from-violet-500/30 via-purple-500/20 to-transparent",
    icon: "🛒",
  },
  {
    title: "Dashboard Analytics",
    category: "Application Web",
    description:
      "Tableau de bord de suivi des KPIs avec visualisations interactives, export PDF et gestion multi-utilisateurs.",
    tech: ["Next.js", "Chart.js", "Prisma", "TypeScript"],
    gradient: "from-amber-500/30 via-orange-500/20 to-transparent",
    icon: "📊",
  },
];

// ─── Modal wrapper ─────────────────────────────────────────────────────────────
function Modal({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-6"
        style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#111111] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white transition-all"
          >
            <X size={16} />
          </button>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Services Modal ────────────────────────────────────────────────────────────
function ServicesModal({ onClose, onContact }: { onClose: () => void; onContact: () => void }) {
  return (
    <Modal onClose={onClose}>
      <div className="p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-1">Mes Services</h2>
          <p className="text-sm text-white/50">Ce que je peux construire pour vous</p>
        </div>
        <div className="space-y-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`relative rounded-xl border ${s.border} bg-gradient-to-br ${s.color} p-5`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-white/5 border border-white/10">
                    <Icon className={`w-5 h-5 ${s.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                    <p className="text-sm text-white/60 mb-3 leading-relaxed">{s.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 text-xs text-white/70 bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5"
                        >
                          <CheckCircle2 size={10} className="text-emerald-400" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={onContact}
          className="mt-6 w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <MessageCircle size={16} />
          Discuter d&apos;un projet
        </button>
      </div>
    </Modal>
  );
}

// ─── Projects Modal ────────────────────────────────────────────────────────────
function ProjectsModal({ onClose }: { onClose: () => void }) {
  return (
    <Modal onClose={onClose}>
      <div className="p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-1">Réalisations</h2>
          <p className="text-sm text-white/50">Projets récents et applications construites</p>
        </div>
        <div className="space-y-4">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] overflow-hidden transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${p.gradient} opacity-60`} />
              <div className="relative p-5">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl" role="img" aria-label={p.title}>{p.icon}</span>
                    <div>
                      <h3 className="font-semibold text-white leading-tight">{p.title}</h3>
                      <span className="text-xs text-white/40 font-medium uppercase tracking-wider">{p.category}</span>
                    </div>
                  </div>
                  <ExternalLink
                    size={15}
                    className="flex-shrink-0 text-white/20 group-hover:text-white/50 transition-colors mt-1"
                  />
                </div>
                <p className="text-sm text-white/60 mb-3 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-white/50 bg-white/5 border border-white/8 rounded-md px-2 py-0.5 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-white/30">
          D&apos;autres projets disponibles sur demande
        </p>
      </div>
    </Modal>
  );
}

// ─── Hero Block ────────────────────────────────────────────────────────────────
export default function HeroBlock() {
  const [openModal, setOpenModal] = useState<"services" | "projects" | null>(null);

  const closeModal = useCallback(() => setOpenModal(null), []);
  const handleContact = () => {
    closeModal();
    window.location.href = "mailto:kadmiel@kadmielabe.dev";
  };

  return (
    <>
      {/* Main page */}
      <main className="bg-grid relative min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-20 overflow-x-hidden">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(110,231,183,0.08) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-sm sm:max-w-md mx-auto gap-8">

          {/* ── Status pill ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs text-white/60">
              <span className="relative flex h-2 w-2">
                <span className="status-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Disponible pour de nouveaux projets
            </div>
          </motion.div>

          {/* ── Avatar ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
              {/* Rotating gradient ring */}
              <div
                aria-hidden="true"
                className="avatar-ring absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #6ee7b7, #3b82f6, #8b5cf6, #6ee7b7)",
                  padding: "2px",
                  borderRadius: "50%",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0a0a0a]" />
              </div>
              {/* Inner gradient circle (avatar placeholder) */}
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-emerald-900/80 via-teal-800/60 to-[#111] flex items-center justify-center border border-white/10">
                <span className="text-3xl sm:text-4xl font-bold text-emerald-300 select-none">KA</span>
              </div>
            </div>
          </motion.div>

          {/* ── Name & title ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="space-y-2"
          >
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Kadmiel Abe
            </h1>
            <p className="text-sm sm:text-base font-medium text-white/50 tracking-wide uppercase">
              Développeur Full Stack
            </p>
          </motion.div>

          {/* ── Description ── */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="text-sm sm:text-base text-white/60 leading-relaxed max-w-xs sm:max-w-sm"
          >
            Création d&apos;applications web performantes et sur mesure avec les technologies modernes{" "}
            <span className="text-emerald-400/80">(Next.js, React, Node.js)</span>.{" "}
            Passionné par le code propre et l&apos;expérience utilisateur.
          </motion.p>

          {/* ── Action buttons ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="w-full flex flex-col gap-3"
          >
            {/* Services */}
            <motion.button
              id="btn-services"
              onClick={() => setOpenModal("services")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-white font-medium text-sm transition-all duration-200 min-h-[48px]"
            >
              <div className="flex items-center gap-3">
                <Code2 size={16} className="text-emerald-400" />
                <span>Services</span>
              </div>
              <ArrowRight size={15} className="text-white/30" />
            </motion.button>

            {/* Réalisations */}
            <motion.button
              id="btn-projects"
              onClick={() => setOpenModal("projects")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-white font-medium text-sm transition-all duration-200 min-h-[48px]"
            >
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-blue-400" />
                <span>Réalisations</span>
              </div>
              <ArrowRight size={15} className="text-white/30" />
            </motion.button>

            {/* Contact CTA */}
            <motion.a
              id="btn-contact"
              href="mailto:kadmiel@kadmielabe.dev"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm transition-all duration-200 min-h-[48px] shadow-[0_0_30px_-8px_rgba(110,231,183,0.5)]"
            >
              <Mail size={16} />
              Discuter d&apos;un projet
            </motion.a>
          </motion.div>

          {/* ── Social links ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/kadmielabe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Kadmiel Abe"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/50 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/kadmielabe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Kadmiel Abe"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/50 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:kadmiel@kadmielabe.dev"
              aria-label="Envoyer un email à Kadmiel Abe"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/50 hover:text-white transition-all duration-200 hover:scale-110"
            >
              <Mail size={18} />
            </a>
          </motion.div>

          {/* ── Footer note ── */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="text-xs text-white/20"
          >
            Abidjan, Côte d&apos;Ivoire · Remote-friendly
          </motion.p>
        </div>
      </main>

      {/* ── Modals ── */}
      {openModal === "services" && (
        <ServicesModal onClose={closeModal} onContact={handleContact} />
      )}
      {openModal === "projects" && (
        <ProjectsModal onClose={closeModal} />
      )}
    </>
  );
}
