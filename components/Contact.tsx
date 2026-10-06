"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Send, Linkedin, Github, MapPin, Sparkles, ArrowUpRight, CheckCircle2, Globe, Clock } from "lucide-react";

const easeCurve: [number, number, number, number] = [0.16, 1, 0.3, 1];

const socialLinks = [
  {
    name: "WhatsApp Direct",
    handle: "+225 07 06 97 85 70",
    href: "https://wa.me/2250706978570?text=Bonjour%20Kadmiel,%20je%20souhaite%20discuter%20d'un%20projet%20web.",
    icon: MessageSquare,
    color: "group-hover:text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
  },
  {
    name: "E-mail Professionnel",
    handle: "kadmielabe@gmail.com",
    href: "mailto:kadmielabe@gmail.com",
    icon: Mail,
    color: "group-hover:text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
  },
  {
    name: "LinkedIn",
    handle: "Kadmiel Abe",
    href: "https://linkedin.com",
    icon: Linkedin,
    color: "group-hover:text-blue-400 border-blue-500/20 bg-blue-500/10",
  },
  {
    name: "GitHub",
    handle: "@kadmielabe",
    href: "https://github.com",
    icon: Github,
    color: "group-hover:text-purple-400 border-purple-500/20 bg-purple-500/10",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Développement Web / SaaS Sur-Mesure");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const encodedText = encodeURIComponent(
      `Bonjour Kadmiel,\n\nJe m'appelle ${name} (${email}).\nService concerné : ${service}.\n\nDescription du projet : ${message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/2250706978570?text=${encodedText}`, "_blank");
    }, 400);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#09090b] border-t border-white/10 relative scroll-mt-20 overflow-hidden">
      {/* Ambient Radial Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-t from-cyan-500/10 to-emerald-500/10 rounded-full blur-[140px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Social Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono tracking-wider uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Contact & Devis Réactif</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                Lançons votre projet <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">dès aujourd&apos;hui</span>.
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed mb-8">
                Une question, un besoin de cadrage technique ou une envie de faire passer votre entreprise au niveau supérieur ? Écrivez-moi directement. Réponse garantie sous 24h ouvrées.
              </p>

              {/* Social Channels List with Micro-animations */}
              <div className="space-y-4 mb-10">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between p-4 rounded-2xl bg-[#121215] border border-white/10 hover:border-cyan-500/40 transition-all group cursor-pointer shadow-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${item.color} transition-colors`}>
                          <Icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-[11px] text-gray-400 uppercase tracking-wider font-mono">{item.name}</p>
                          <p className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {item.handle}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Reassurance Badges */}
              <div className="p-4 rounded-2xl bg-[#121215]/60 border border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Abidjan, Côte d&apos;Ivoire (Cocody / Remote Monde)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Disponibilité immédiate pour nouveaux projets</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sleek Form with Micro-interactions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCurve }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121215] border border-white/10 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                Demander une estimation ou un rendez-vous
              </h3>
              <p className="text-xs text-gray-400 font-light mb-8">
                Remplissez ce formulaire minimaliste. Il pré-saisira votre message complet sur WhatsApp.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-heading text-xl font-bold text-white">Message Préparé !</h4>
                  <p className="text-xs text-gray-300 font-light max-w-sm mx-auto">
                    Redirection vers WhatsApp en cours... Si la fenêtre ne s&apos;ouvre pas automatiquement, cliquez ci-dessous :
                  </p>
                  <a
                    href={`https://wa.me/2250706978570?text=${encodeURIComponent(
                      `Bonjour Kadmiel,\n\nJe m'appelle ${name} (${email}).\nService concerné : ${service}.\n\nDescription du projet : ${message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider hover:bg-emerald-600 transition-colors shadow-glow-emerald cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ouvrir WhatsApp</span>
                  </a>
                </motion.div>
              ) : (
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
                        placeholder="Ex: Marc Yao / Startup X"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#09090b] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
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
                        placeholder="Ex: contact@entreprise.ci"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#09090b] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Type de service recherché
                    </label>
                    <select
                      id="contact-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#09090b] border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                    >
                      <option value="Développement Web / SaaS Sur-Mesure">Développement Web / SaaS Sur-Mesure</option>
                      <option value="Stratégie Digitale & Community Management">Stratégie Digitale & Community Management</option>
                      <option value="Refonte & Optimisation d'un site existant">Refonte & Optimisation d&apos;un site existant</option>
                      <option value="Maintenance & Évolutions Continues">Maintenance & Évolutions Continues</option>
                      <option value="Audit & Conseil Technique">Audit & Conseil Technique</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">
                      Décrivez brièvement votre projet *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Vos objectifs, vos contraintes ou vos questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#09090b] border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-glow-emerald cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer ma demande sur WhatsApp</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
