import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kadmiel Abe — Développeur Web Freelance à Abidjan | SaaS & Sites B2B",
    template: "%s | Kadmiel Abe",
  },
  description:
    "Développeur web freelance basé à Abidjan. Conception d'applications web SaaS, sites vitrines B2B et plateformes sur-mesure aux standards internationaux pour entreprises et PME.",
  keywords: [
    "Kadmiel Abe",
    "Développeur Web Freelance",
    "Abidjan",
    "Côte d'Ivoire",
    "Next.js",
    "React",
    "Application SaaS",
    "Site vitrine B2B",
    "Création site web Abidjan",
    "Afrique francophone",
  ],
  authors: [{ name: "Kadmiel Abe", url: "https://kadmielabe.dev" }],
  creator: "Kadmiel Abe",
  metadataBase: new URL("https://kadmielabe.dev"),
  alternates: {
    canonical: "https://kadmielabe.dev",
  },
  openGraph: {
    title: "Kadmiel Abe — Développeur Web Freelance à Abidjan",
    description:
      "Des applications web sur-mesure qui propulsent votre entreprise. SaaS, plateformes B2B et sites vitrines haute performance.",
    url: "https://kadmielabe.dev",
    siteName: "Kadmiel Abe Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadmiel Abe — Développeur Web Freelance à Abidjan",
    description:
      "Des applications web sur-mesure qui propulsent votre entreprise. SaaS & sites B2B haute performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.jpg", type: "image/jpeg" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`dark ${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0B0B0C] text-[#EDEDED] font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
        {children}
      </body>
    </html>
  );
}
