"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Code } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Projets", href: "#portfolio" },
    { name: "Processus", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex justify-between items-center w-full px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      {/* Zone Logo & Nom (à gauche) */}
      <a href="#" className="group">
        <div className="flex items-center gap-2">
          <Code className="w-6 h-6 text-[#0F766E]" />
          <span className="text-xl font-bold text-[#0F766E]">Kadmiel Abe</span>
        </div>
      </a>

      {/* Menu de navigation (au centre) */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-800 hover:text-[#0F766E] transition-colors font-medium"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Bouton CTA (à droite) */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="https://wa.me/#"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg border-2 border-[#0F766E] text-[#0F766E] font-medium bg-transparent hover:bg-emerald-50 transition-all flex items-center gap-2"
        >
          <span>Discuter de mon projet</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Mobile Menu Trigger Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-gray-800 hover:text-[#0F766E] focus:outline-none rounded-lg"
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 md:hidden bg-white border-b border-gray-100 px-6 pt-4 pb-6 shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-800 hover:text-[#0F766E] transition-colors font-medium py-2 border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-2.5 rounded-lg border-2 border-[#0F766E] text-[#0F766E] font-medium bg-transparent hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 w-full mt-2"
              >
                <span>Discuter de mon projet</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
