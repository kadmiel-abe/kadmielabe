"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden px-4">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center mt-16">
        {/* Top Sphere / Avatar Placeholder */}
        <div className="w-24 h-24 mb-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-600 shadow-[0_0_40px_rgba(255,255,255,0.1)]"></div>

        {/* Main Title H1 */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          Développeur Web <br className="hidden md:block" /> & Stratège Digital
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Je conçois des applications web performantes et des stratégies numériques sur-mesure pour automatiser votre gestion et propulser la croissance de votre entreprise.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            Discuter du projet
          </a>
          <a
            href="#projets"
            className="w-full sm:w-auto px-8 py-3 bg-transparent text-white border border-gray-700 font-medium rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            Voir les réalisations
            <span className="text-sm">↓</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="p-3 bg-[#111111] border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="#"
            className="p-3 bg-[#111111] border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#contact"
            className="p-3 bg-[#111111] border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
