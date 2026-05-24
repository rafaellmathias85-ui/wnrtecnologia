import Link from "next/link";
import { ArrowRight, Bot, ShieldCheck, Sparkles } from "lucide-react";
import { HeroCanvas } from "@/components/HeroCanvas";

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-hero-radial pt-32 sm:pt-36">
      <div className="absolute inset-0 grid-mask" aria-hidden />
      <div className="absolute inset-0 noise" aria-hidden />
      <HeroCanvas />

      <div className="relative mx-auto flex min-h-[calc(92vh-8rem)] max-w-7xl items-center px-4 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-lg border border-cyan/30 bg-cyan/10 px-3 py-2 text-sm font-semibold text-cyan">
            <Sparkles size={16} aria-hidden />
            Divisão tech da Winner Tecnologia
          </div>

          <h1 className="max-w-5xl font-display text-5xl font-bold leading-tight tracking-normal text-white sm:text-6xl lg:text-7xl">
            Tecnologia, Automação e IA para transformar seu negócio
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            A WNR Tecnologia cria plataformas, automatizações e produtos com inteligência artificial para
            acelerar operações, reduzir tarefas repetitivas e abrir novos caminhos digitais para empresas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#solucoes"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-cyan px-6 py-4 text-base font-bold text-ink shadow-glow transition hover:-translate-y-1 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
            >
              Conheça nossas soluções
              <ArrowRight className="transition group-hover:translate-x-1" size={19} aria-hidden />
            </Link>
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/8 px-6 py-4 text-base font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-violet hover:bg-violet/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
            >
              Solicitar demonstração
            </Link>
          </div>

          <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              { icon: Bot, label: "Produtos com IA" },
              { icon: ShieldCheck, label: "Segurança por design" },
              { icon: Sparkles, label: "Automação sob medida" }
            ].map((item) => (
              <div key={item.label} className="glass flex items-center gap-3 rounded-lg px-4 py-3">
                <item.icon className="text-cyan" size={20} aria-hidden />
                <span className="text-sm font-semibold text-slate-100">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
