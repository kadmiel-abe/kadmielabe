"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Linkedin, Github, MapPin, Copy, Check, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "contact@kadmielabe.dev"; // Email temporaire / configurable

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50/80 border-t border-gray-100 relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-400/20 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Prêt à démarrer ?</span>
              </span>

              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Prêt à digitaliser votre activité ?
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Que ce soit pour une création de A à Z ou la refonte d'un système existant, parlons-en. Je vous réponds sous 24h.
              </p>

              {/* Location pill */}
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Basé à Abidjan, Côte d'Ivoire • Disponible à distance dans toute l'Afrique francophone & international</span>
              </div>

              {/* Direct Quick Channels */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp direct</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm px-5 py-3.5 rounded-xl backdrop-blur border border-white/15 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Email copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-300" />
                      <span>Copier l'email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Social Links & Email Card */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between space-y-6">
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Restons connectés
              </h3>

              <div className="space-y-4">
                {/* Email Direct link */}
                <a
                  href="mailto:#"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Envoyer un email</p>
                      <p className="text-sm font-semibold text-white">Email direct</p>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Réseau Professionnel</p>
                      <p className="text-sm font-semibold text-white">LinkedIn</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-400 group-hover:underline">Se connecter</span>
                </a>

                {/* GitHub */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Code Source & Projets</p>
                      <p className="text-sm font-semibold text-white">GitHub</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-purple-400 group-hover:underline">Voir les dépôts</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
