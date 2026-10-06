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
    { label: "À Propos", href: "#about" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            aria-label="Accueil - Kadmiel Abe"
          >
            <div className="relative h-10 sm:h-11 flex items-center shrink-0">
              <Image
                src="/logo.jpg"
                alt="Logo Kadmiel Abe - Développeur Web Abidjan"
                width={160}
                height={44}
                priority
                className="h-10 sm:h-11 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-medium text-gray-300 hover:text-cyan-300 uppercase tracking-wider transition-colors py-1 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* WhatsApp Direct CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20discuter%20d'un%20projet%20web%20et%20de%20strategie%20digitale."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-300 shadow-glow-emerald cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-300 hover:text-white bg-[#121215] border border-white/10 transition-colors cursor-pointer"
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
            transition={{ duration: 0.25, ease: easeCurve }}
            className="md:hidden bg-[#09090b] border-b border-white/10 overflow-hidden"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-[#121215] transition-colors border border-transparent hover:border-white/10 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <a
                  href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20discuter%20d'un%20projet%20web%20et%20de%20strategie%20digitale."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-xs uppercase tracking-wider shadow-glow-emerald cursor-pointer"
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
