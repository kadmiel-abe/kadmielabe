"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "GestFiPro",
      category: "Application Web SaaS",
      description:
        "Plateforme SaaS dédiée à la gestion financière. Interface utilisateur fluide et architecture robuste pour garantir sécurité et rapidité.",
      tags: ["Next.js", "Tailwind", "Supabase"],
      link: "https://gestfipro.vercel.app/",
      image: "/capture gestfipro.png",
      alt: "Interface de la plateforme GestFiPro",
      stats: [
        { label: "Temps de chargement", value: "< 1.0s" },
        { label: "Sécurité", value: "SSL / Supabase RLS" },
      ],
    },
    {
      title: "Rhizome Conseil",
      category: "Site Corporate B2B",
      description:
        "Site corporate pour un cabinet d'accompagnement en stratégie financière. Design institutionnel et rassurant pour prospects B2B exigeants.",
      tags: ["Web Design", "UI/UX", "B2B"],
      link: "https://www.rhizomeconseil.com/",
      image: "/capture rhizomzconseil.png",
      alt: "Site web de Rhizome Conseil",
      stats: [
        { label: "Positionnement", value: "Institutionnel B2B" },
        { label: "Score Performance", value: "98/100" },
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-widest text-emerald-700 uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200"
            >
              Études de Cas
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3"
            >
              Des réalisations sur-mesure aux normes internationales
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-md text-sm sm:text-base"
          >
            Découvrez comment mes clients digitalisent leurs processus et renforcent leur crédibilité avec des produits web d'excellence.
          </motion.p>
        </div>

        {/* Projects Showcase Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50/70 border border-gray-200/80 rounded-2xl p-6 sm:p-10 hover:border-emerald-300 transition-all shadow-xs hover:shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Visual Mockup Frame with Actual Screenshot GIF */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden group">
                  {/* Browser bar header */}
                  <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-500 font-mono bg-white px-3 py-1 rounded border border-gray-200 truncate max-w-[220px] hover:text-emerald-600 transition-colors flex items-center gap-1"
                    >
                      <span>{project.link.replace("https://", "")}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </a>
                    <div className="w-4" />
                  </div>

                  {/* Screenshot Image Container */}
                  <div className="relative w-full h-[260px] sm:h-[320px] overflow-hidden bg-gray-900 group">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      unoptimized
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />

                    {/* Gradient Overlay for metadata stats */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent flex flex-col justify-between p-4 pointer-events-none">
                      <div className="flex justify-end">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded bg-black/60 backdrop-blur text-emerald-300 border border-white/10">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-200 pt-2 border-t border-white/20">
                        {project.stats.map((st) => (
                          <div key={st.label} className="flex items-center gap-1">
                            <span className="text-gray-300">{st.label}:</span>
                            <span className="font-semibold text-emerald-400">{st.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content Description */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-white text-gray-800 border border-gray-200 px-3 py-1.5 rounded-lg shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-5 py-3 rounded-xl shadow-xs hover:shadow transition-all group"
                  >
                    <span>Visiter le projet</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
