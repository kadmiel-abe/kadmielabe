"use client";

import { Linkedin, Github, MessageSquare, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080809] border-t border-[#1E1E22] py-16 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1E1E22] items-start">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-heading text-xl font-bold text-white">
                Kadmiel Abe
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm mb-6">
              Développeur web freelance basé à Abidjan. Conception d&apos;applications web modernes, performantes et sécurisées pour propulser les entreprises et PME.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/kadmiel-abe-b975a3346/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn"
                className="w-9 h-9 rounded-full bg-[#121214] border border-[#1E1E22] hover:border-emerald-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/kadmiel-abe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub"
                className="w-9 h-9 rounded-full bg-[#121214] border border-[#1E1E22] hover:border-emerald-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/2250706978570"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp direct"
                className="w-9 h-9 rounded-full bg-[#121214] border border-[#1E1E22] hover:border-emerald-500/50 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="mailto:kadmiel@kadmielabe.dev"
                aria-label="Email direct"
                className="w-9 h-9 rounded-full bg-[#121214] border border-[#1E1E22] hover:border-emerald-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#projets" className="hover:text-emerald-400 transition-colors">
                  Réalisations & Projets
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Services & Solutions
                </a>
              </li>
              <li>
                <a href="#processus" className="hover:text-emerald-400 transition-colors">
                  Méthode de Travail
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-emerald-400 transition-colors">
                  Tarifs & Packs
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Foire aux Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Status */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Localisation & Disponibilité
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-3">
              Abidjan, Côte d&apos;Ivoire (Cocody / Plateau)
              <br />
              Disponible pour missions en présentiel & à distance (Afrique francophone & International).
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Nouveaux projets acceptés</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>
            © {new Date().getFullYear()} Kadmiel Abe. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px] text-gray-400">
              Construit avec Next.js 15 & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#121214] border border-[#1E1E22] hover:border-gray-700 text-gray-400 hover:text-white transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
