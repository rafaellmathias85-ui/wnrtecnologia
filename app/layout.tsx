import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import "./globals.css";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, organizationSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  preload: true
});

export const metadata: Metadata = buildMetadata({
  title: "WNR Tecnologia | Automacao e IA",
  description:
    "Solucoes de tecnologia, automacao empresarial e produtos com IA da divisao tech da Winner Tecnologia.",
  keywords: ["WNR Tecnologia", "automacao empresarial", "inteligencia artificial", "Winner Tecnologia"]
});

export const viewport: Viewport = {
  themeColor: "#050711",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <Analytics />
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        {children}
        <Footer />
        <VercelAnalytics />
      </body>
    </html>
  );
}
