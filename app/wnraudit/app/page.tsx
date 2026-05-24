import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldAlert } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "WNR Audit App | WNR Tecnologia",
  description: "Acesso ao sistema WNR Audit para análise de vulnerabilidades em tenants e redes corporativas.",
  path: "/wnraudit/app",
  keywords: ["WNR Audit", "vulnerabilidades", "segurança corporativa", "pentest", "monitoramento"]
});

export default function WnrAuditAppPage() {
  return (
    <main className="min-h-screen bg-ink pt-28">
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,122,69,0.18),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(135,88,255,0.14),transparent_32%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link href="/#solucoes" className="inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-white">
            <ArrowLeft size={17} aria-hidden />
            Voltar para soluções
          </Link>

          <div className="glass mt-10 rounded-lg p-7 sm:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-orange-400 bg-orange-400/15 text-orange-300">
              <ShieldAlert size={32} aria-hidden />
            </div>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-orange-300">WNR Audit</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-normal text-white sm:text-6xl">
              Sistema de análise de vulnerabilidades
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Este endereço está reservado para o painel do WNR Audit. A próxima etapa é publicar o sistema
              completo neste caminho, mantendo o acesso principal em `/wnraudit/app`.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {["Tenants corporativos", "Redes empresariais", "Relatórios de risco"].map((item) => (
                <div key={item} className="rounded-lg border border-white/15 bg-white/8 p-4">
                  <p className="text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/wnraudit"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-cyan px-6 py-4 font-bold text-ink shadow-glow transition hover:bg-white"
            >
              Ver página do produto
              <ExternalLink size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
