"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Solution } from "@/lib/solutions";
import { trackEvent } from "@/components/Analytics";

type SolutionCardProps = {
  solution: Solution;
  index: number;
};

export function SolutionCard({ solution, index }: SolutionCardProps) {
  const Icon = solution.icon;

  return (
    <motion.article
      animate={{ y: [-8, 8, -8] }}
      transition={{
        duration: 4.8 + index * 0.25,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.18
      }}
      className="h-full"
    >
      <Link
        href={`/${solution.slug}`}
        onClick={() => trackEvent("solution_card_click", { solution: solution.slug })}
        className="group glass relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-lg p-6 transition duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
        style={{
          boxShadow: `0 0 0 1px ${solution.colorSoft}, 0 22px 70px rgba(0, 0, 0, 0.28)`
        }}
      >
        <span
          className="absolute -right-16 -top-16 h-36 w-36 rounded-full blur-3xl transition duration-300 group-hover:opacity-90"
          style={{ background: solution.colorSoft }}
          aria-hidden
        />
        <span
          className="mb-7 flex h-14 w-14 items-center justify-center rounded-lg border transition duration-300 group-hover:rotate-6 group-hover:scale-110"
          style={{ borderColor: solution.color, background: solution.colorSoft, color: solution.color }}
        >
          <Icon size={27} aria-hidden />
        </span>
        <h3 className="font-display text-2xl font-bold tracking-normal text-white">{solution.name}</h3>
        <p className="mt-4 flex-1 text-base leading-7 text-slate-300">{solution.description}</p>
        <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold" style={{ color: solution.color }}>
          Ver solução
          <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
        </span>
      </Link>
    </motion.article>
  );
}
