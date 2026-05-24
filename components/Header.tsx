"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/78 backdrop-blur-xl">
      <nav
        aria-label="Navegacao principal"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="group flex items-center gap-3" aria-label="WNR Tecnologia - inicio">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan/40 bg-cyan/10 font-display text-lg font-bold text-cyan shadow-glow">
            W
          </span>
          <span className="font-display text-lg font-bold tracking-normal text-white">
            WNR <span className="text-cyan">Tecnologia</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white focus-visible rounded"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contato"
          className="hidden rounded-lg bg-cyan px-5 py-3 text-sm font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan lg:inline-flex"
        >
          Fale Conosco
        </Link>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white transition hover:border-cyan/60 hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan lg:hidden"
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-night/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contato"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-cyan px-4 py-3 text-center text-sm font-bold text-ink"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
