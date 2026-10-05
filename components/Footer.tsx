"use client";

import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              K
            </div>
            <div>
              <span className="font-heading font-bold text-gray-900 text-base">
                Kadmiel Abe
              </span>
              <p className="text-xs text-gray-500">
                Développeur Web Freelance • Abidjan, Côte d'Ivoire
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 font-medium">
            <a href="#services" className="hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="hover:text-blue-600 transition-colors">
              Projets
            </a>
            <a href="#process" className="hover:text-blue-600 transition-colors">
              Processus
            </a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-blue-600 bg-gray-50 hover:bg-gray-100 border border-gray-200 px-3.5 py-2 rounded-lg transition-all"
            aria-label="Retour en haut de page"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Kadmiel Abe. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            <span>Conçu avec Next.js & Tailwind CSS pour une performance maximale</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
