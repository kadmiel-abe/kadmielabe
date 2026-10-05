import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kadmiel Abe - Développeur Web Freelance à Abidjan",
    template: "%s | Kadmiel Abe",
  },
  description:
    "Développeur web freelance basé à Abidjan. Conception de sites vitrines B2B, applications web SaaS et plateformes sur-mesure aux standards internationaux pour entreprises et PME en Afrique francophone.",
  keywords: [
    "Kadmiel Abe",
    "Développeur Web Freelance",
    "Abidjan",
    "Côte d'Ivoire",
    "Développeur React Next.js",
    "Création site web B2B",
    "Application web SaaS",
    "E-commerce",
    "Afrique francophone",
  ],
  authors: [{ name: "Kadmiel Abe", url: "https://kadmielabe.dev" }],
  creator: "Kadmiel Abe",
  metadataBase: new URL("https://kadmielabe.dev"),
  alternates: {
    canonical: "https://kadmielabe.dev",
  },
  openGraph: {
    title: "Kadmiel Abe - Développeur Web Freelance à Abidjan",
    description:
      "Transformez votre vision en solutions web performantes. Sites vitrines B2B, SaaS & E-commerce sur-mesure aux standards internationaux.",
    url: "https://kadmielabe.dev",
    siteName: "Kadmiel Abe Portfolio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kadmiel Abe - Développeur Web Freelance à Abidjan",
    description:
      "Transformez votre vision en solutions web performantes. Sites vitrines B2B, SaaS & E-commerce sur-mesure aux standards internationaux.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#059669",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 antialiased">
        {children}
      </body>
    </html>
  );
}
