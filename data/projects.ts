export interface Project {
  index: number;
  id: string;
  badge: string;
  category: "saas" | "b2b" | "vitrine";
  categoryLabel: string;
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
    badge: "01 / Application SaaS Sur-Mesure",
    category: "saas",
    categoryLabel: "Application SaaS",
    title: "GestFiPro",
    description:
      "Plateforme SaaS de gestion financière et prévisionnelle conçue pour aider les salariés et indépendants à maîtriser leur budget et piloter leur trésorerie en temps réel.",
    features: [
      "Tableau de bord financier en temps réel",
      "Suivi automatisé des flux de trésorerie",
      "Architecture cloud sécurisée (Supabase RLS)",
    ],
    tags: ["Next.js", "Supabase", "TypeScript", "TailwindCSS"],
    url: "https://gestfipro.vercel.app/",
    urlDisplay: "gestfipro.vercel.app",
    image: "/capturegestfipro.jpg",
    imageAlt: "Capture de la plateforme SaaS GestFiPro",
    reverse: false,
  },
  {
    index: 1,
    id: "02",
    badge: "02 / Présence Digitale B2B",
    category: "b2b",
    categoryLabel: "Site Corporate B2B",
    title: "Cabinet Rhizome Conseil",
    description:
      "Écosystème web institutionnel conçu pour un cabinet de conseil financier. Positionnement d'autorité haut de gamme pour maximiser la crédibilité et convertir les prospects B2B.",
    features: [
      "Image de marque institutionnelle premium",
      "Parcours de conversion client optimisé",
      "Score de performance SEO 99+ (Lighthouse)",
    ],
    tags: ["Next.js", "TypeScript", "TailwindCSS", "SEO B2B"],
    url: "https://www.rhizomeconseil.com/",
    urlDisplay: "rhizomeconseil.com",
    image: "/capture rhizomzconseil.png",
    imageAlt: "Capture du site du Cabinet Rhizome Conseil",
    reverse: true,
  },
  {
    index: 2,
    id: "03",
    badge: "03 / Site Vitrine & Réservations",
    category: "vitrine",
    categoryLabel: "Site Vitrine & Réservation",
    title: "Massy's Relaxation & Spa",
    description:
      "Site vitrine élégant et immersif pour un centre de bien-être à Abidjan. Galerie de soins raffinée, interface fluide et système de réservation directe par WhatsApp.",
    features: [
      "Design immersif et expérience mobile-first",
      "Catalogue interactif des prestations et soins",
      "Prise de rendez-vous en ligne instantanée",
    ],
    tags: ["Next.js", "TailwindCSS", "Framer Motion", "UI/UX"],
    url: "https://massy-s.vercel.app/",
    urlDisplay: "massy-s.vercel.app",
    image: "/Massy.PNG",
    imageAlt: "Capture du site Massy's Relaxation & Spa",
    reverse: false,
  },
];
