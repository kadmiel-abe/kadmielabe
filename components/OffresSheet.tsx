"use client";

import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { ArrowUpRight, Check, ShieldCheck, Zap } from "lucide-react";

interface OffresSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const offres = [
  {
    name: "Pack Essentiel",
    price: "150 000 FCFA",
    subtitle: "Démarrage rapide & Bases solides",
    description: "Pour démarrer vite avec les bases d'une présence professionnelle irréprochable.",
    features: [
      "Site vitrine sur mesure (jusqu'à 3 pages)",
      "Carte de visite avec QR code (100 impressions incluses)",
      "Bouton WhatsApp direct & formulaire de contact",
      "Nom de domaine & hébergement sécurisé inclus (1 an)",
      "Performance optimisée & affichage mobile réactif",
    ],
    isPopular: false,
    whatsappMessage: "Bonjour Kadmiel, je souhaite commander ou échanger à propos du Pack Essentiel (150 000 FCFA).",
  },
  {
    name: "Pack Pro",
    price: "350 000 FCFA",
    subtitle: "Image cohérente & Conversion B2B",
    description: "Le pack complet plébiscité pour asseoir votre autorité et convertir vos prospects.",
    features: [
      "Identité visuelle complète : logo, palette, typographies",
      "Site web professionnel (jusqu'à 5 pages sur mesure)",
      "Carte de visite avec QR code (100 impressions incluses)",
      "Plaquette commerciale digitale & prête à l'impression",
      "Création & optimisation Fiche Google Business (SEO local)",
      "1 mois de support technique dédié après livraison",
    ],
    isPopular: true,
    whatsappMessage: "Bonjour Kadmiel, je souhaite commander ou échanger à propos du Pack Pro (350 000 FCFA).",
  },
  {
    name: "Pack Premium",
    price: "450 000 FCFA",
    subtitle: "Excellence & Sérénité sur 12 mois",
    description: "La formule Pro enrichie d'une maintenance technique et d'un accompagnement continu.",
    features: [
      "Tout le contenu intégral de la formule Pro",
      "Maintenance technique & sécurité pendant 12 mois",
      "Mises à jour logicielles & sauvegardes automatiques",
      "Modifications et ajustements mineurs inclus",
      "Rapports de visibilité & performance trimestriels",
      "Disponibilité prioritaire toute l'année",
    ],
    isPopular: false,
    whatsappMessage: "Bonjour Kadmiel, je souhaite commander ou échanger à propos du Pack Premium (450 000 FCFA).",
  },
];

export default function OffresSheet({ open, onOpenChange }: OffresSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center space-x-2 text-[11px] font-mono tracking-widest text-[#A1A1AA]/70 uppercase">
            <Zap className="w-3.5 h-3.5 text-[#3ECF80]" />
            <span>Tarifs & Accompagnement</span>
          </div>
          <SheetTitle className="mt-1">Offres Clé en Main</SheetTitle>
          <SheetDescription>
            Un seul interlocuteur, des tarifs clairs sans frais cachés, et des délais d&apos;exécution maîtrisés.
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-6 flex-1">
          {offres.map((offre) => (
            <div
              key={offre.name}
              className={`relative p-6 rounded-2xl transition-all duration-400 ${
                offre.isPopular
                  ? "bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-[#3ECF80]/40 shadow-[0_0_35px_-10px_rgba(62,207,128,0.2)]"
                  : "bg-white/[0.02] border border-white/10 hover:border-white/20"
              }`}
            >
              {offre.isPopular && (
                <div className="absolute -top-3 right-6">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full text-[10px] font-medium tracking-wider uppercase bg-[#3ECF80] text-[#050505]">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Recommandé</span>
                  </span>
                </div>
              )}

              <div className="mb-4">
                <span className="text-[11px] font-mono tracking-wider text-[#A1A1AA] uppercase">
                  {offre.subtitle}
                </span>
                <div className="flex items-baseline justify-between mt-1">
                  <h3 className="font-serif text-2xl font-normal text-[#EDEDED]">{offre.name}</h3>
                  <span className="font-mono text-base sm:text-lg font-semibold text-white tracking-tight">
                    {offre.price}
                  </span>
                </div>
                <p className="text-xs text-[#A1A1AA] mt-2 leading-relaxed">
                  {offre.description}
                </p>
              </div>

              <ul className="space-y-2.5 mb-6 border-t border-white/5 pt-4">
                {offre.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-2.5 text-xs text-[#EDEDED]/90">
                    <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${offre.isPopular ? "text-[#3ECF80]" : "text-[#A1A1AA]"}`} />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/2250706978570?text=${encodeURIComponent(offre.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  offre.isPopular
                    ? "bg-[#EDEDED] text-[#050505] hover:bg-white hover:scale-[1.01]"
                    : "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10"
                }`}
              >
                <span>Choisir cette offre</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-center text-[#A1A1AA]/50 mt-8 pt-4 border-t border-white/5">
          Besoin d&apos;une prestation spécifique ou sur-mesure ? Parlons-en directement sur WhatsApp.
        </p>
      </SheetContent>
    </Sheet>
  );
}
