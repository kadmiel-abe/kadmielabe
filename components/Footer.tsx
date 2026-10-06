"use client";

import { Linkedin, Github, MessageSquare, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060608] border-t border-white/10 py-16 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                Kadmiel Abe
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-glow-cyan" />
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm mb-6">
              Développeur Web Full-Stack & Stratège Digital basé à Abidjan. Conception d&apos;applications web haute performance, SaaS & stratégies numériques d&apos;impact.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/kadmiel-abe-b975a3346/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn"
                className="w-10 h-10 rounded-xl bg-[#121215] border border-white/10 hover:border-cyan-400 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/kadmiel-abe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub"
                className="w-10 h-10 rounded-xl bg-[#121215] border border-white/10 hover:border-cyan-400 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/2250706978570"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp direct"
                className="w-10 h-10 rounded-xl bg-[#121215] border border-white/10 hover:border-emerald-400 flex items-center justify-center text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:kadmielabe@gmail.com"
                aria-label="Email direct"
                className="w-10 h-10 rounded-xl bg-[#121215] border border-white/10 hover:border-cyan-400 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold mb-4">
              Navigation Rapide
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#projets" className="hover:text-cyan-300 transition-colors">
                  Réalisations & Projets
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  À Propos & Vision
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition-colors">
                  Services & Expertise
                </a>
              </li>
              <li>
                <a href="#processus" className="hover:text-cyan-300 transition-colors">
                  Méthodologie
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-cyan-300 transition-colors">
                  Tarifs & Formules
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Me Contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Status */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-semibold mb-4">
              Localisation & Contact
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Abidjan, Côte d&apos;Ivoire (Cocody / Plateau)
              <br />
              Projets sur-mesure pour PME en Côte d&apos;Ivoire, Afrique francophone et International (Remote).
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-emerald-400 font-mono p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponible pour de nouveaux projets</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} Kadmiel Abe — Développeur Web & Stratège Digital Abidjan.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-gray-500">
              Next.js 15 · Framer Motion · Tailwind CSS
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-[#121215] border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
