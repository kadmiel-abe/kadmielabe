"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Moon, Sun, Sparkles } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";
import { EASINGS } from "@/lib/motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Check initial dark mode from DOM or localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy
      const sections = ["hero", "a-propos", "services", "portfolio", "outils", "tarifs", "contact"];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { label: "Accueil", href: "#hero", id: "hero" },
    { label: "À propos", href: "#a-propos", id: "a-propos" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Projets", href: "#portfolio", id: "portfolio" },
    { label: "Outils", href: "#outils", id: "outils" },
    { label: "Tarifs", href: "#tarifs", id: "tarifs" },
    { label: "Contact", href: "#contact", id: "contact" },
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
        const navbarOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

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

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASINGS.awwwards }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none"
    >
      <nav
        aria-label="Navigation principale"
        className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
          scrolled
            ? "bg-[#0f0f11]/90 dark:bg-[#0f0f11]/90 bg-white/90 backdrop-blur-xl border border-white/10 dark:border-white/10 border-gray-200/80 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5)]"
            : "bg-[#121214]/80 dark:bg-[#121214]/80 bg-white/80 backdrop-blur-lg border border-white/10 dark:border-white/10 border-gray-200/60 shadow-lg"
        }`}
      >
        {/* Logo: Code mark with emerald dot + Kadmiel */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none shrink-0"
          aria-label="Kadmiel Abe - Accueil"
        >
          <div className="w-9 h-9 rounded-full bg-black border border-emerald-500/60 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:rotate-12 transition-transform duration-300 shadow-[0_0_15px_rgba(17,145,52,0.4)]">
            <span className="font-mono text-sm font-black tracking-tighter text-emerald-400">&lt;/&gt;</span>
          </div>
          <div className="flex items-baseline">
            <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-emerald-600 dark:text-white group-hover:text-white dark:group-hover:text-emerald-400 transition-colors">
              Kadmiel
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-1 inline-block animate-pulse" />
          </div>
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-xs xl:text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 ${
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right action controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-white hover:bg-white/10 dark:hover:bg-white/10 bg-black/5 dark:bg-black/20 border border-gray-200 dark:border-white/5 transition-all duration-200 cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-emerald-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-emerald-600 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Let's talk CTA Pill with Magnetic pull */}
          <Magnetic strength={0.25}>
            <a
              href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20discuter%20d'un%20projet%20web%20pour%20mon%20entreprise."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-600 text-white dark:bg-white dark:text-gray-950 hover:bg-white hover:text-emerald-600 dark:hover:bg-emerald-500 dark:hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-pill-hover hover:scale-105 active:scale-95"
            >
              <span>Let&apos;s Talk</span>
              <div className="w-4 h-4 rounded-full bg-black/10 dark:bg-black/10 flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </div>
            </a>
          </Magnetic>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="lg:hidden p-2 rounded-full text-gray-800 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-white/10 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-emerald-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto absolute top-20 left-4 right-4 max-w-md mx-auto rounded-3xl bg-[#121214]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-2xl text-sm font-medium text-gray-200 hover:text-emerald-400 hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-gray-500 font-mono">→</span>
                </a>
              ))}

              <div className="pt-3 border-t border-white/10 mt-2">
                <a
                  href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20discuter%20d'un%20projet%20web%20pour%20mon%20entreprise."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-heading font-bold text-xs uppercase tracking-wider shadow-lg transition-transform active:scale-95"
                >
                  <span>Let&apos;s Talk on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
