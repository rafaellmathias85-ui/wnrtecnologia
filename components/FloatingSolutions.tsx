"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { SolutionCard } from "@/components/SolutionCard";
import { solutions } from "@/lib/solutions";

export function FloatingSolutions() {
  return (
    <section id="solucoes" className="relative overflow-hidden bg-night py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(35,215,255,0.14),transparent_36%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solucoes WNR"
          title="Produtos digitais orbitando os pontos criticos do seu negocio"
          description="Um ecossistema de plataformas para finanças, marketing, seguranca, midia e operacoes de TI, com automacao e IA no centro."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.slug} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
