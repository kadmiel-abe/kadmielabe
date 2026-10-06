"use client";

import { useState } from "react";
import { MessageSquare, Mail, Send, Linkedin, Github, MapPin, Sparkles, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Pack Pro (350 000 FCFA)");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedText = encodeURIComponent(
      `Bonjour Kadmiel,\n\nJe m'appelle ${name} (${email}).\nJe suis intéressé par : ${service}.\n\nMon projet : ${message}`
    );
    window.open(`https://wa.me/2250706978570?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0B0B0C] border-t border-[#1E1E22] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info & Value Prop */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Contact & Devis</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#EDEDED] tracking-tight mb-6">
                Prêt à propulser votre entreprise ?
              </h2>
              <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed mb-8">
                Discutons de votre vision, de vos contraintes et de vos objectifs. Je réponds sous 24h ouvrées avec des conseils concrets et une estimation claire.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 mb-10">
                <a
                  href="https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20discuter%20d'un%20projet%20web."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#121214] border border-[#1E1E22] hover:border-emerald-500/40 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">WhatsApp direct (Recommandé)</p>
                      <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        +225 07 06 97 85 70
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="mailto:kadmielabe@gmail.com"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#121214] border border-[#1E1E22] hover:border-emerald-500/40 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">E-mail Professionnel</p>
                      <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        kadmielabe@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#121214]/50 border border-[#1E1E22] text-xs text-gray-400">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Basé à Abidjan, Côte d&apos;Ivoire · Disponible pour clients locaux & internationaux (Remote)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121214] border border-[#1E1E22] shadow-card-dark">
              <h3 className="font-heading text-2xl font-bold text-[#EDEDED] mb-2">
                Démarrer une discussion de projet
              </h3>
              <p className="text-xs text-gray-400 font-light mb-8">
                Remplissez ces quelques lignes pour lancer directement l&apos;échange avec vos éléments pré-saisis sur WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Votre Nom ou Entreprise *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Ex: Jean Kouassi / Cabinet Alpha"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0B0B0C] border border-[#1E1E22] text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Adresse E-mail *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="Ex: contact@entreprise.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#0B0B0C] border border-[#1E1E22] text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Formule ou type de projet souhaité
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B0B0C] border border-[#1E1E22] text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="Pack Essentiel (150 000 FCFA)">Pack Essentiel (150 000 FCFA)</option>
                    <option value="Pack Pro (350 000 FCFA) - Recommandé">Pack Pro (350 000 FCFA) - Recommandé</option>
                    <option value="Pack Premium (450 000 FCFA)">Pack Premium (450 000 FCFA)</option>
                    <option value="Application Web / SaaS Sur-Mesure">Application Web / SaaS Sur-Mesure</option>
                    <option value="Refonte ou Maintenance de site existant">Refonte ou Maintenance de site existant</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                    Décrivez brièvement votre besoin *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Parlez-moi de votre activité, de vos délais souhaités ou de vos besoins spécifiques..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#0B0B0C] border border-[#1E1E22] text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_25px_-5px_rgba(17,145,52,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma demande via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
