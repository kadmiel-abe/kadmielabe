"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100">
          {/* Brand & Logo Image */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-auto min-w-[120px]">
              <Image
                src="/logo.png"
                alt="Kadmiel Abe Logo"
                width={140}
                height={38}
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="border-l border-gray-200 pl-3">
              <span className="font-heading font-bold text-gray-900 text-sm">
                Kadmiel Abe
              </span>
              <p className="text-xs text-gray-500">
                Développeur Web Freelance • Abidjan, Côte d'Ivoire
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 font-medium">
            <a href="#services" className="hover:text-emerald-600 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="hover:text-emerald-600 transition-colors">
              Projets
            </a>
            <a href="#process" className="hover:text-emerald-600 transition-colors">
              Processus
            </a>
            <a href="#faq" className="hover:text-emerald-600 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-emerald-700 bg-emerald-50/60 hover:bg-emerald-100/80 border border-emerald-200/60 px-3.5 py-2 rounded-xl transition-all"
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
            <span>Conçu avec Next.js & Tailwind CSS • Thème Vert & Blanc</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
