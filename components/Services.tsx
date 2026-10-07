"use client";

import React from "react";
import { Globe, Wrench, Palette, CreditCard, MapPin } from "lucide-react";

export default function Services() {
  const pole1 = [
    {
      title: "Création de Sites Web",
      description:
        "Conception de sites vitrines professionnels (3 à 5 pages), incluant nom de domaine, hébergement et boutons de contact direct.",
      icon: Globe,
      badge: "Le plus demandé",
    },
    {
      title: "Maintenance Technique",
      description:
        "Suivi sur 12 mois comprenant les mises à jour, les sauvegardes régulières et les modifications mineures.",
      icon: Wrench,
    },
  ];

  const pole2 = [
    {
      title: "Identité Visuelle",
      description:
        "Conception de logos, définition de palettes de couleurs et choix typographiques pour une image de marque cohérente.",
      icon: Palette,
    },
    {
      title: "Supports de Communication",
      description:
        "Design de plaquettes commerciales (PDF et impression) et conception de cartes de visite avec QR codes.",
      icon: CreditCard,
    },
    {
      title: "Référencement & SEO Local",
      description:
        "Création et optimisation de fiches Google Business Profile pour attirer les clients de votre zone.",
      icon: MapPin,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#0a0a0a] text-white border-t border-white/5 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-3">
            SERVICES & EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Des offres concrètes pour développer votre entreprise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 font-light leading-relaxed">
            Des solutions digitales sur-mesure pour établir votre présence, attirer des clients et automatiser vos processus.
          </p>
        </div>

        {/* Bloc 1 : Pôle Développement & Présence Web */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">💻</span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Pôle Développement &amp; Présence Web
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pole1.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {item.badge && (
                      <span className="absolute top-6 right-6 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.badge}
                      </span>
                    )}

                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                      <Icon size={24} />
                    </div>

                    <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bloc 2 : Pôle Identité Visuelle & Visibilité */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🎨</span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Pôle Identité Visuelle &amp; Visibilité
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pole2.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group relative p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                      <Icon size={24} />
                    </div>

                    <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-3">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
