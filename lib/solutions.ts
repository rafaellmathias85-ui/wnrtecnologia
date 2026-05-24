import {
  BadgeDollarSign,
  BarChart3,
  Clapperboard,
  Megaphone,
  Radar,
  ShieldAlert
} from "lucide-react";

export type Solution = {
  name: string;
  slug: string;
  href?: string;
  description: string;
  longDescription: string;
  color: string;
  colorSoft: string;
  icon: typeof BadgeDollarSign;
  keywords: string[];
};

export const solutions: Solution[] = [
  {
    name: "WNR InvestAI",
    slug: "wnrinvestai",
    description: "IA para organização financeira pessoal e investimentos inteligentes.",
    longDescription:
      "Organize metas, carteira, rotina financeira e decisões de investimento com assistentes de IA orientados a dados.",
    color: "#42F5B3",
    colorSoft: "rgba(66, 245, 179, 0.18)",
    icon: BadgeDollarSign,
    keywords: ["investimentos", "finanças pessoais", "inteligência artificial financeira"]
  },
  {
    name: "WNR Finance",
    slug: "wnrfinance",
    description: "Gestão financeira completa para pessoas físicas e empresas.",
    longDescription:
      "Controle fluxo de caixa, contas, indicadores e rotina financeira em uma plataforma clara para PF e PJ.",
    color: "#23D7FF",
    colorSoft: "rgba(35, 215, 255, 0.18)",
    icon: BarChart3,
    keywords: ["gestão financeira", "controle financeiro", "erp financeiro"]
  },
  {
    name: "WNR MKT",
    slug: "wnrmkt",
    description: "Mídias sociais, sites e branding com automação e IA.",
    longDescription:
      "Planeje campanhas, gere conteúdos, acompanhe canais digitais e padronize sua presença de marca com IA.",
    color: "#FF4FDB",
    colorSoft: "rgba(255, 79, 219, 0.18)",
    icon: Megaphone,
    keywords: ["marketing digital", "mídias sociais", "branding com IA"]
  },
  {
    name: "WNR Audit",
    slug: "wnraudit",
    description: "Análise de vulnerabilidades para tenants e redes corporativas.",
    longDescription:
      "Mapeie riscos, priorize correção de vulnerabilidades e fortaleça ambientes Microsoft 365, cloud e redes.",
    color: "#FF7A45",
    colorSoft: "rgba(255, 122, 69, 0.18)",
    icon: ShieldAlert,
    keywords: ["vulnerabilidades", "pentest", "segurança corporativa"]
  },
  {
    name: "WNR Mídia",
    slug: "wnrmidia",
    href: "/wnrmidia/app/",
    description: "Divulgação em telões, padarias, totens e elevadores.",
    longDescription:
      "Gerencie conteúdos, programações e campanhas em telas digitais para redes locais e pontos de alta circulação.",
    color: "#FACC15",
    colorSoft: "rgba(250, 204, 21, 0.18)",
    icon: Clapperboard,
    keywords: ["mídia digital out of home", "telões", "totens"]
  },
  {
    name: "WNR RMMSis",
    slug: "wnrrmmsis",
    description: "RMM, monitoramento e gestão de chamados para empresas de TI.",
    longDescription:
      "Monitore ativos, acompanhe chamados, automatize rotinas técnicas e amplie a eficiência de operações de TI.",
    color: "#8758FF",
    colorSoft: "rgba(135, 88, 255, 0.18)",
    icon: Radar,
    keywords: ["rmm", "monitoramento de TI", "gestão de chamados"]
  }
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
