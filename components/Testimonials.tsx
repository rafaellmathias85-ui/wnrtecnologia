import { SectionHeading } from "@/components/SectionHeading";

const cases = [
  {
    quote: "Automações financeiras, marketing com IA e monitoramento técnico em um roadmap único.",
    company: "Case em estruturação"
  },
  {
    quote: "Produtos digitais desenhados para reduzir tempo operacional e aumentar visibilidade gerencial.",
    company: "Projeto piloto"
  },
  {
    quote: "Segurança, suporte e dados conectados para decisão mais rápida.",
    company: "Operação assistida"
  }
];

export function Testimonials() {
  return (
    <section className="bg-ink py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cases"
          title="Histórias em construção com impacto mensurável"
          description="Espaço reservado para depoimentos, estudos de caso e indicadores dos projetos WNR."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.company} className="glass rounded-lg p-6">
              <p className="text-lg leading-8 text-slate-200">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-6 text-sm font-bold text-cyan">{item.company}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
