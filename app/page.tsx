import type { Metadata } from "next";
import { About } from "@/components/About";
import { FinalCta } from "@/components/FinalCta";
import { FloatingSolutions } from "@/components/FloatingSolutions";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Testimonials } from "@/components/Testimonials";
import { breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "WNR Tecnologia | Automação e IA",
  description:
    "Tecnologia, automação empresarial e produtos com IA da divisão tech da Winner Tecnologia.",
  path: "/",
  keywords: ["WNR Tecnologia", "automação empresarial", "IA para empresas", "produtos digitais"]
});

export default function Home() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Início", path: "/" }])} />
      <Hero />
      <FloatingSolutions />
      <About />
      <Testimonials />
      <FinalCta />
    </main>
  );
}
