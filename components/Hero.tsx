"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Hero() {
  const brandGreen = "text-emerald-400";
  const bgGreen = "bg-emerald-500";
  const hoverGreen = "hover:bg-emerald-400";

  return (
    <section className="relative min-h-[calc(100vh-80px)] mt-20 flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden px-4 py-8 sm:py-12">
      {/* Background Grid Pattern (très subtil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        {/* Ta Photo de Profil */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 sm:mb-8 rounded-full border-2 border-emerald-500/30 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-4 ring-[#0a0a0a] relative shrink-0">
          <Image
            src="/photo.jpg"
            alt="Kadmiel Abe"
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Titre H1 avec accentuation de ton nom */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 max-w-3xl">
          Développeur Web <br className="hidden md:block" /> &amp; Stratège{" "}
          <span className={brandGreen}>Digital.</span>
        </h1>

        {/* Sous-titre orienté Bénéfice Client */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mb-8 sm:mb-10 leading-relaxed font-light">
          Je conçois des applications web performantes et des stratégies numériques sur-mesure pour automatiser votre gestion et propulser la croissance de votre entreprise.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#contact"
            className={`w-full sm:w-auto px-8 py-3.5 ${bgGreen} text-black font-semibold rounded-md ${hoverGreen} transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95`}
          >
            <Mail size={18} />
            <span>Discuter du projet</span>
          </a>
          <a
            href="#projets"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white border border-gray-700 font-medium rounded-md hover:bg-gray-800 hover:border-emerald-500/50 transition-colors flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <span>Voir les réalisations</span>
            <span className="text-sm">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
