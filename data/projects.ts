export interface Project {
  index: number;
  id: string;
  badge: string;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  url: string;
  urlDisplay: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
}

export const projects: Project[] = [
  {
    index: 0,
    id: "01",
    badge: "01 / Application SaaS sur mesure",
    title: "GestFiPro",
    description:
      "Application web de gestion financière conçue pour aider les travailleurs salariés à maîtriser leur budget et anticiper leur trésorerie d'un salaire à l'autre.",
    features: [
      "Vision claire du budget en temps réel",
      "Suivi automatisé des flux financiers",
      "Architecture cloud ultra-sécurisée",
    ],
    tags: ["Next.js", "Supabase", "TypeScript", "TailwindCSS"],
    url: "https://gestfipro.vercel.app/",
    urlDisplay: "gestfipro.vercel.app",
    image: "/capturegestfipro.jpg",
    imageAlt: "Capture de l'application de gestion financière GestFiPro",
    reverse: false,
  },
  {
    index: 1,
    id: "02",
    badge: "02 / Stratégie & Présence digitale",
    title: "Cabinet Rhizome Conseil",
    description:
      "Conception intégrale de l'écosystème web pour un cabinet de conseil. Positionnement haut de gamme pour renforcer la crédibilité et générer des leads qualifiés.",
    features: [
      "Image de marque premium qui rassure vos prospects",
      "Parcours utilisateur optimisé pour la conversion",
      "Architecture technique ultra-rapide (Score SEO 99+)",
    ],
    tags: ["Next.js", "TypeScript", "TailwindCSS", "SEO B2B"],
    url: "https://www.rhizomeconseil.com/",
    urlDisplay: "rhizomeconseil.com",
    image: "/capture rhizomeconseil.png",
    imageAlt: "Capture de l'écosystème web Cabinet Rhizome Conseil",
    reverse: true,
  },
];
