"use client";

import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  // Remplace ce code hexadécimal par celui de ton logo si besoin (ex: #00FF66)
  const brandGreen = "text-emerald-400";
  const bgGreen = "bg-emerald-500";
  const hoverGreen = "hover:bg-emerald-400";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden px-4">
      {/* Background Grid Pattern (très subtil) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center mt-16">
        {/* Ta Photo de Profil */}
        <div className="w-28 h-28 mb-8 rounded-full border-2 border-emerald-500/30 overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.15)] ring-4 ring-[#0a0a0a] relative">
          <Image
            src="/profil.jpg"
            alt="Kadmiel Abe"
            width={112}
            height={112}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Titre H1 avec accentuation de ton nom */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          Développeur Web <br className="hidden md:block" /> & Stratège{" "}
          <span className={brandGreen}>Digital.</span>
        </h1>

        {/* Sous-titre orienté Bénéfice Client */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Je conçois des applications web performantes et des stratégies numériques sur-mesure pour automatiser votre gestion et propulser la croissance de votre entreprise.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a
            href="#contact"
            className={`w-full sm:w-auto px-8 py-3 ${bgGreen} text-black font-semibold rounded-md ${hoverGreen} transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]`}
          >
            <Mail size={18} />
            Discuter du projet
          </a>
          <a
            href="#projets"
            className="w-full sm:w-auto px-8 py-3 bg-transparent text-white border border-gray-700 font-medium rounded-md hover:bg-gray-800 hover:border-emerald-500/50 transition-colors flex items-center justify-center gap-2"
          >
            Voir les réalisations
            <span className="text-sm">↓</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="p-3 bg-[#111111] border border-gray-800 rounded-full text-gray-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="p-3 bg-[#111111] border border-gray-800 rounded-full text-gray-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
