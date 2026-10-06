import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kadmiel Abe — Développeur Full Stack à Abidjan",
    template: "%s | Kadmiel Abe",
  },
  description:
    "Développeur Full Stack basé à Abidjan. Création d'applications web performantes et sur mesure avec Next.js, React et Node.js. Passionné par le code propre et l'expérience utilisateur.",
  keywords: [
    "Kadmiel Abe",
    "Développeur Full Stack",
    "Abidjan",
    "Côte d'Ivoire",
    "Next.js",
    "React",
    "Node.js",
    "Application web",
    "Site vitrine",
    "Freelance",
    "Afrique francophone",
  ],
  authors: [{ name: "Kadmiel Abe", url: "https://kadmielabe.dev" }],
  creator: "Kadmiel Abe",
  metadataBase: new URL("https://kadmielabe.dev"),
  alternates: {
    canonical: "https://kadmielabe.dev",
  },
  openGraph: {
    title: "Kadmiel Abe — Développeur Full Stack à Abidjan",
    description:
      "Applications web performantes et sur mesure avec Next.js, React et Node.js. Code propre, UX soignée, basé à Abidjan.",
    url: "https://kadmielabe.dev",
    siteName: "Kadmiel Abe",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadmiel Abe — Développeur Full Stack à Abidjan",
    description:
      "Applications web performantes et sur mesure avec Next.js, React et Node.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`dark ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f5f5f5] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
