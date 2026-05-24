import { ContactForm } from "@/components/ContactForm";

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-night py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(135,88,255,0.22),transparent_34%),radial-gradient(circle_at_80%_60%,rgba(35,215,255,0.16),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan">Contato</p>
          <h2 className="font-display text-3xl font-bold tracking-normal text-white sm:text-5xl">
            Pronto para automatizar seu negocio?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Fale com a WNR para avaliar oportunidades de automacao, IA, seguranca, produtos digitais ou gestao
            operacional. O primeiro passo e entender seu processo e desenhar um caminho viavel.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
