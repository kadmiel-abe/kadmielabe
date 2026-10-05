"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Linkedin, Github, MapPin, Copy, Check, Send, Sparkles } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "contact@kadmielabe.dev";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-emerald-50/20 border-t border-emerald-100/60 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden border border-emerald-800/40">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Heading & Content */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-300 bg-emerald-500/20 px-3.5 py-1.5 rounded-full border border-emerald-400/30 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Prêt à démarrer ?</span>
              </span>

              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Prêt à digitaliser votre activité ?
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Que ce soit pour une création de A à Z ou la refonte d'un système existant, parlons-en. Je vous réponds sous 24h.
              </p>

              {/* Location pill */}
              <div className="flex items-center gap-2 text-gray-300 text-sm mb-8">
                <MapPin className="w-4 h-4 text-emerald-400" />
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
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Envoyer un email</p>
                      <p className="text-sm font-semibold text-white">Email direct</p>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Réseau Professionnel</p>
                      <p className="text-sm font-semibold text-white">LinkedIn</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 group-hover:underline">Se connecter</span>
                </a>

                {/* GitHub */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium">Code Source & Projets</p>
                      <p className="text-sm font-semibold text-white">GitHub</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-teal-300 group-hover:underline">Voir les dépôts</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
