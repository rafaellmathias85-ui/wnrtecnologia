import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Politica de Privacidade | WNR",
  description: "Politica de privacidade da WNR Tecnologia para contatos e interessados em solucoes digitais.",
  path: "/politica-de-privacidade",
  keywords: ["privacidade", "LGPD", "WNR Tecnologia"]
});

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <article className="glass mx-auto max-w-4xl rounded-lg p-6 sm:p-10">
        <h1 className="font-display text-4xl font-bold text-white">Politica de Privacidade</h1>
        <p className="mt-6 leading-8 text-slate-300">
          Esta pagina e um placeholder institucional para a politica de privacidade da WNR Tecnologia. Os dados
          enviados em formularios serao usados para contato comercial, qualificacao de interesse e atendimento,
          observando principios da LGPD.
        </p>
        <h2 className="mt-8 font-display text-2xl font-bold text-white">Dados coletados</h2>
        <p className="mt-3 leading-8 text-slate-300">
          Podemos coletar nome, email, telefone, empresa, solucao de interesse e mensagem enviada pelo usuario.
        </p>
        <h2 className="mt-8 font-display text-2xl font-bold text-white">Contato</h2>
        <p className="mt-3 leading-8 text-slate-300">
          Para solicitar remocao ou atualizacao de dados, entre em contato por email com a equipe WNR.
        </p>
      </article>
    </main>
  );
}
