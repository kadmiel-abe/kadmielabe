import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kadmiel Abe — Développeur Web & Stratège Digital à Abidjan",
    template: "%s | Kadmiel Abe",
  },
  description:
    "Développeur Web Full-Stack et Stratège Digital basé à Abidjan. Conception d'applications web SaaS performantes, sites B2B sur-mesure et stratégies numériques d'impact.",
  keywords: [
    "Kadmiel Abe",
    "Développeur web Abidjan",
    "Stratège digital Abidjan",
    "Développeur Full Stack Côte d'Ivoire",
    "Création site web Abidjan",
    "Application SaaS Next.js",
    "Community Management Abidjan",
    "Supabase React Developer",
  ],
  authors: [{ name: "Kadmiel Abe", url: "https://kadmielabe.dev" }],
  creator: "Kadmiel Abe",
  metadataBase: new URL("https://kadmielabe.dev"),
  alternates: {
    canonical: "https://kadmielabe.dev",
  },
  openGraph: {
    title: "Kadmiel Abe — Développeur Web & Stratège Digital à Abidjan",
    description:
      "Je conçois des applications web performantes et des stratégies numériques qui transforment la présence en ligne des entreprises ivoiriennes et internationales.",
    url: "https://kadmielabe.dev",
    siteName: "Kadmiel Abe Portfolio",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kadmiel Abe - Développeur Web & Stratège Digital Abidjan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadmiel Abe — Développeur Web & Stratège Digital",
    description:
      "Applications web sur-mesure, SaaS & stratégies numériques d'impact pour PME et entreprises.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kadmiel Abe",
  jobTitle: "Développeur Web Full-Stack & Stratège Digital",
  url: "https://kadmielabe.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Abidjan",
    addressCountry: "CI",
  },
  sameAs: [
    "https://www.linkedin.com/in/kadmiel-abe-b975a3346/",
    "https://github.com/kadmiel-abe",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Stratégie Digitale",
    "Community Management",
    "UI/UX Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`dark ${inter.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#09090b] text-[#fafafa] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-400">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
