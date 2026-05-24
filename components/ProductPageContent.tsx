import Link from "next/link";
import { ArrowLeft, Bell, CheckCircle2 } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, softwareSchema } from "@/lib/seo";
import type { Solution } from "@/lib/solutions";

export function ProductPageContent({ solution }: { solution: Solution }) {
  const Icon = solution.icon;

  return (
    <main className="min-h-screen bg-ink pt-28">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Início", path: "/" },
            { name: solution.name, path: `/${solution.slug}` }
          ]),
          softwareSchema({
            name: solution.name,
            description: solution.longDescription,
            slug: solution.slug,
            keywords: solution.keywords
          })
        ]}
      />

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 18% 18%, ${solution.colorSoft}, transparent 34%), radial-gradient(circle at 82% 12%, rgba(35,215,255,0.12), transparent 32%)`
          }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8">
          <div>
            <Link href="/#solucoes" className="inline-flex items-center gap-2 text-sm font-bold text-cyan hover:text-white">
              <ArrowLeft size={17} aria-hidden />
              Voltar para soluções
            </Link>
            <div
              className="mt-8 flex h-16 w-16 items-center justify-center rounded-lg border"
              style={{ borderColor: solution.color, color: solution.color, background: solution.colorSoft }}
            >
              <Icon size={32} aria-hidden />
            </div>
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: solution.color }}>
              Em breve
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-normal text-white sm:text-6xl">
              {solution.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">{solution.longDescription}</p>
            <div className="mt-9 grid max-w-2xl gap-4 sm:grid-cols-3">
              {["Lista de espera", "Demonstração guiada", "Roadmap modular"].map((item) => (
                <div key={item} className="glass rounded-lg p-4">
                  <CheckCircle2 className="mb-3 text-cyan" size={20} aria-hidden />
                  <p className="text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="rounded-lg p-0">
            <div className="mb-6 flex items-center gap-3">
              <Bell className="text-cyan" size={22} aria-hidden />
              <h2 className="font-display text-2xl font-bold text-white">Entrar na lista de espera</h2>
            </div>
            <ContactForm defaultSolution={solution.slug} />
          </aside>
        </div>
      </section>
    </main>
  );
}
