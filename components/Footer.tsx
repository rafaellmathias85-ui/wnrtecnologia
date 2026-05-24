import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site";
import { solutions } from "@/lib/solutions";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-xl font-bold text-white">
            WNR <span className="text-cyan">Tecnologia</span>
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">{siteConfig.description}</p>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
              { icon: Github, label: "GitHub", href: "https://github.com" },
              { icon: Mail, label: "E-mail", href: `mailto:${siteConfig.email}` }
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-slate-300 transition hover:border-cyan hover:text-cyan"
              >
                <item.icon size={18} aria-hidden />
              </Link>
            ))}
          </div>
        </div>
        <FooterColumn title="Site" items={navItems} />
        <FooterColumn
          title="Soluções"
          items={solutions.map((solution) => ({ label: solution.name, href: solution.href || `/${solution.slug}` }))}
        />
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">Contato</h2>
          <address className="mt-4 not-italic text-sm leading-7 text-slate-400">
            {siteConfig.email}
            <br />
            {siteConfig.phone}
            <br />
            CNPJ {siteConfig.cnpj}
          </address>
          <Link href="/politica-de-privacidade" className="mt-4 inline-flex text-sm text-cyan hover:text-white">
            Política de privacidade
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} WNR Tecnologia. Divisão da Winner Tecnologia / WTICORP.
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: Array<{ label: string; href: string }> }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-slate-400 transition hover:text-cyan">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
