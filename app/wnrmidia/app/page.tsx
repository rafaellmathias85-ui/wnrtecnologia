import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, MonitorPlay } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "WNR Mídia App | WNR Tecnologia",
  description: "Acesso ao sistema WNR Mídia para gestão de telas digitais, campanhas e players.",
  path: "/wnrmidia/app",
  keywords: ["WNR Mídia", "mídia digital", "gestão de telas", "digital signage"]
});

export default function WnrMidiaAppPage() {
  return (
    <main className="min-h-screen bg-ink pt-28">
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(250,204,21,0.16),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(35,215,255,0.12),transparent_32%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link href="/#solucoes" className="inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-white">
            <ArrowLeft size={17} aria-hidden />
            Voltar para soluções
          </Link>

          <div className="glass mt-10 rounded-lg p-7 sm:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-amber-300 bg-amber-300/15 text-amber-300">
              <MonitorPlay size={32} aria-hidden />
            </div>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-amber-300">WNR Mídia</p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-normal text-white sm:text-6xl">
              Sistema de gestão de mídia digital
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Este endereço está reservado para o painel do WNR Mídia. A próxima etapa é publicar o sistema
              completo do projeto `C:\VS-Code_WnrMidia` neste caminho, com painel em `/wnrmidia/app` e API em
              `/wnrmidia/api`.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {["Painel administrativo", "API de displays", "Uploads e players"].map((item) => (
                <div key={item} className="rounded-lg border border-white/15 bg-white/8 p-4">
                  <p className="text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/wnrmidia"
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
