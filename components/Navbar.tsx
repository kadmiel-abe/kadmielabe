"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);

      const targetId = href.replace(/^#/, "");
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const navbarHeight = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          if (window.history.pushState) {
            window.history.pushState(null, "", href);
          }
        }
      }, 50);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
        {/* Left: Logo </ > */}
        <a
          href="#"
          onClick={handleLogoClick}
          className="flex items-center gap-3 group focus:outline-none cursor-pointer shrink-0"
          aria-label="Accueil - Kadmiel Abe"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-2xl font-black text-emerald-400 tracking-tighter transition-transform duration-300 group-hover:scale-110">
              &lt;/&gt;
            </span>
            <span className="font-bold text-white text-base tracking-tight group-hover:text-emerald-400 transition-colors">
              Kadmiel Abe
            </span>
          </div>
        </a>

        {/* Center: Main Desktop Navigation (evenly spaced & uncrowded) */}
        <nav
          className="hidden md:flex items-center justify-center gap-8 lg:gap-10 mx-auto"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: WhatsApp Direct Button */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20discuter%20d'un%20projet%20web%20pour%20mon%20entreprise."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95"
          >
            <span>WhatsApp Direct</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Burger Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800/60 border border-gray-800 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: easeCurve }}
            className="md:hidden bg-[#0a0a0a] border-b border-gray-800 overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-800 cursor-pointer"
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
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-500 text-black font-semibold text-xs uppercase tracking-wider shadow-md hover:bg-emerald-400 transition-colors"
                >
                  <span>WhatsApp Direct ↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
