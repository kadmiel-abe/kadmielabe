import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kadmiel Abe — Développeur Full Stack & Créatif",
    template: "%s | Kadmiel Abe",
  },
  description:
    "Kadmiel Abe. Développeur Full Stack & Créatif basé à Abidjan. Création d'expériences web performantes, élégantes et sur mesure pour les entreprises ambitieuses.",
  keywords: [
    "Kadmiel Abe",
    "Développeur Full Stack",
    "Creative Developer",
    "Abidjan",
    "Côte d'Ivoire",
    "Next.js",
    "React",
    "Site vitrine luxe",
    "Application web sur mesure",
    "Freelance",
  ],
  authors: [{ name: "Kadmiel Abe", url: "https://kadmielabe.dev" }],
  creator: "Kadmiel Abe",
  metadataBase: new URL("https://kadmielabe.dev"),
  alternates: {
    canonical: "https://kadmielabe.dev",
  },
  openGraph: {
    title: "Kadmiel Abe — Développeur Full Stack & Créatif",
    description:
      "Création d'expériences web performantes et sur mesure pour les entreprises ambitieuses. Basé à Abidjan.",
    url: "https://kadmielabe.dev",
    siteName: "Kadmiel Abe",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadmiel Abe — Développeur Full Stack & Créatif",
    description:
      "Création d'expériences web performantes et sur mesure pour les entreprises ambitieuses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`dark ${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#050505] text-[#EDEDED] font-sans antialiased overflow-x-hidden selection:bg-[#EDEDED] selection:text-[#050505]">
        {/* Subtle film grain texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {/* Subtle radial ambient light */}
        <div className="ambient-glow" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
