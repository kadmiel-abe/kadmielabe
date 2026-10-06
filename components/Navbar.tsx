"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projets", href: "#projets" },
    { label: "Services", href: "#services" },
    { label: "Méthode", href: "#processus" },
    { label: "Tarifs", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0C]/85 backdrop-blur-md border-b border-[#1E1E22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Accueil - Logo Kadmiel Abe"
          >
            <div className="relative h-10 sm:h-11 flex items-center shrink-0">
              <Image
                src="/logo.jpg"
                alt="Logo Kadmiel Abe"
                width={160}
                height={44}
                priority
                className="h-10 sm:h-11 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20discuter%20d'un%20projet%20web%20pour%20mon%20entreprise."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_-5px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#121214] border border-[#1E1E22] transition-colors"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: easeCurve }}
            className="md:hidden bg-[#0B0B0C] border-b border-[#1E1E22] overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-[#121214] transition-colors border border-transparent hover:border-[#1E1E22]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20discuter%20d'un%20projet%20web%20pour%20mon%20entreprise."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-500 text-black font-semibold text-xs uppercase tracking-wider shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuter sur WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
