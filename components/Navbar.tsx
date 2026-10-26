"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Moon, Sun, Sparkles } from "lucide-react";
import Magnetic from "@/components/motion/Magnetic";
import { EASINGS } from "@/lib/motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const isNavigatingRef = useRef(false);
  const navTimerRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { label: "Accueil", href: "#hero", id: "hero" },
    { label: "À propos", href: "#a-propos", id: "a-propos" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Projets", href: "#portfolio", id: "portfolio" },
    { label: "Outils", href: "#outils", id: "outils" },
    { label: "Tarifs", href: "#tarifs", id: "tarifs" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Mapping from all page sections to their corresponding navbar items
  const sectionMapping: { id: string; navId: string }[] = [
    { id: "hero", navId: "hero" },
    { id: "a-propos", navId: "a-propos" },
    { id: "services", navId: "services" },
    { id: "portfolio", navId: "portfolio" },
    { id: "outils", navId: "outils" },
    { id: "tarifs", navId: "tarifs" },
    { id: "processus", navId: "tarifs" },
    { id: "faq", navId: "tarifs" },
    { id: "contact", navId: "contact" },
  ];

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

    const determineActiveSection = () => {
      setScrolled(window.scrollY > 25);

      // If user clicked a menu anchor, preserve clicked state during smooth scroll
      if (isNavigatingRef.current) return;

      // 1. If at the top of the page
      if (window.scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      // 2. If scrolled to the bottom of the page (where Contact & Footer are located)
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPos = window.innerHeight + window.scrollY;
      if (scrollPos >= scrollHeight - 70) {
        setActiveSection("contact");
        return;
      }

      // 3. Focal reading line in viewport (38% from top, below navbar)
      const focalLine = window.innerHeight * 0.38;

      // Find the section crossing the focal reading line
      for (let i = 0; i < sectionMapping.length; i++) {
        const item = sectionMapping[i];
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= focalLine && rect.bottom > focalLine) {
          setActiveSection(item.navId);
          return;
        }
      }

      // Fallback: Pick visible section whose center is closest to focal line
      let closestNavId = "hero";
      let minDistance = Infinity;

      for (const item of sectionMapping) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue;

        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - focalLine);
        if (distance < minDistance) {
          minDistance = distance;
          closestNavId = item.navId;
        }
      }

      setActiveSection(closestNavId);
    };

    determineActiveSection();

    window.addEventListener("scroll", determineActiveSection, { passive: true });
    window.addEventListener("resize", determineActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", determineActiveSection);
      window.removeEventListener("resize", determineActiveSection);
      if (navTimerRef.current) clearTimeout(navTimerRef.current);
    };
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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);

      const targetId = href.replace(/^#/, "");

      // Instantly mark the clicked button as active
      if (targetId) {
        setActiveSection(targetId);
      } else {
        setActiveSection("hero");
      }

      // Lock scroll spy while smooth scrolling to prevent flicker or premature updates
      isNavigatingRef.current = true;
      if (navTimerRef.current) clearTimeout(navTimerRef.current);
      navTimerRef.current = setTimeout(() => {
        isNavigatingRef.current = false;
      }, 650);

      if (!targetId || targetId === "hero") {
        if (typeof window !== "undefined" && (window as any).__lenis) {
          (window as any).__lenis.scrollTo(0, { offset: 0, duration: 0.6 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        if (window.history.pushState) {
          window.history.pushState(null, "", "#hero");
        }
        return;
      }

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarOffset = 85;

        if (typeof window !== "undefined" && (window as any).__lenis) {
          (window as any).__lenis.scrollTo(targetElement, {
            offset: -navbarOffset,
            duration: 0.6,
          });
        } else {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }

        if (window.history.pushState) {
          window.history.pushState(null, "", href);
        }
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.button
            type="button"
            aria-label="Fermer le menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: EASINGS.awwwards }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none"
      >
      <nav
        aria-label="Navigation principale"
        className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 ${
          scrolled
            ? "py-2 sm:py-2 bg-white/90 dark:bg-[#0f0f11]/90 backdrop-blur-xl border border-gray-200/80 dark:border-white/10 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.5)]"
            : "py-2.5 sm:py-3 bg-white/80 dark:bg-[#121214]/80 backdrop-blur-lg border border-gray-200/60 dark:border-white/10 shadow-lg"
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
                aria-current={isActive ? "location" : undefined}
                className={`relative text-xs xl:text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 after:absolute after:left-3.5 after:right-3.5 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-emerald-500/70 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
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
              <span>Discutons</span>
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
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all flex items-center justify-between ${
                      isActive
                        ? "text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 font-semibold shadow-[0_0_15px_rgba(17,145,52,0.15)]"
                        : "text-gray-200 hover:text-emerald-400 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      )}
                      <span>{link.label}</span>
                    </div>
                    <span className={`text-xs font-mono ${isActive ? "text-emerald-400" : "text-gray-500"}`}>
                      {isActive ? "●" : "→"}
                    </span>
                  </a>
                );
              })}

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
    </>
  );
}
