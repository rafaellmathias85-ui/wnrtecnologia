import Link from "next/link";
import { BrainCircuit, LockKeyhole, Rocket, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

const pillars = [
  {
    icon: Rocket,
    title: "Inovacao",
    text: "Transformamos oportunidades em produtos digitais claros, escalaveis e prontos para evoluir."
  },
  {
    icon: BrainCircuit,
    title: "IA",
    text: "Aplicamos inteligencia artificial onde ela reduz friccao, melhora decisoes e amplia produtividade."
  },
  {
    icon: Workflow,
    title: "Automacao",
    text: "Conectamos sistemas e rotinas para eliminar retrabalho e acelerar processos empresariais."
  },
  {
    icon: LockKeyhole,
    title: "Seguranca",
    text: "Desenhamos solucoes com atencao a privacidade, controle de acesso e confiabilidade operacional."
  }
];

export function About() {
  return (
    <>
      <section id="sobre" className="bg-ink py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Por que a WNR?"
            title="Tecnologia aplicada com visao de negocio"
            description="Unimos engenharia, automacao, dados e suporte para criar solucoes que nascem conectadas aos desafios reais da operacao."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="glass rounded-lg p-6">
                <pillar.icon className="mb-5 text-cyan" size={30} aria-hidden />
                <h3 className="font-display text-xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="winner" className="bg-night py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan">Winner Group</p>
            <h2 className="font-display text-3xl font-bold tracking-normal text-white sm:text-4xl">
              Divisao tecnologica da Winner Tecnologia
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              A WNR Tecnologia integra a visao da Winner Tecnologia / WTICORP para entregar plataformas,
              automacoes e produtos baseados em IA com foco em eficiencia, governanca e crescimento digital.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Nossa missao e transformar processos complexos em experiencias simples. Nossa visao e ser uma
              referencia nacional em produtos digitais inteligentes. Nossos valores sao parceria, seguranca,
              transparencia, melhoria continua e compromisso com resultado.
            </p>
            <Link
              href={siteConfig.parentCompany.url}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-lg border border-cyan/40 px-5 py-3 text-sm font-bold text-cyan transition hover:bg-cyan hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
            >
              Conhecer a WTICORP
            </Link>
          </div>
          <aside className="glass rounded-lg p-7">
            <h3 className="font-display text-2xl font-bold text-white">Diferenciais</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              {["IA aplicada a processos reais", "Automacoes sob medida", "Cultura de seguranca", "Suporte proximo e evolutivo"].map(
                (item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan shadow-glow" aria-hidden />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
