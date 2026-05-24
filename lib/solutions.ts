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
    description: "IA para organizacao financeira pessoal e investimentos inteligentes.",
    longDescription:
      "Organize metas, carteira, rotina financeira e decisoes de investimento com assistentes de IA orientados a dados.",
    color: "#42F5B3",
    colorSoft: "rgba(66, 245, 179, 0.18)",
    icon: BadgeDollarSign,
    keywords: ["investimentos", "financas pessoais", "inteligencia artificial financeira"]
  },
  {
    name: "WNR Finance",
    slug: "wnrfinance",
    description: "Gestao financeira completa para pessoas fisicas e empresas.",
    longDescription:
      "Controle fluxo de caixa, contas, indicadores e rotina financeira em uma plataforma clara para PF e PJ.",
    color: "#23D7FF",
    colorSoft: "rgba(35, 215, 255, 0.18)",
    icon: BarChart3,
    keywords: ["gestao financeira", "controle financeiro", "erp financeiro"]
  },
  {
    name: "WNR MKT",
    slug: "wnrmkt",
    description: "Midias sociais, sites e branding com automacao e IA.",
    longDescription:
      "Planeje campanhas, gere conteudos, acompanhe canais digitais e padronize sua presenca de marca com IA.",
    color: "#FF4FDB",
    colorSoft: "rgba(255, 79, 219, 0.18)",
    icon: Megaphone,
    keywords: ["marketing digital", "midias sociais", "branding com IA"]
  },
  {
    name: "WNR Audit",
    slug: "wnraudit",
    description: "Analise de vulnerabilidades para tenants e redes corporativas.",
    longDescription:
      "Mapeie riscos, priorize correcao de vulnerabilidades e fortaleça ambientes Microsoft 365, cloud e redes.",
    color: "#FF7A45",
    colorSoft: "rgba(255, 122, 69, 0.18)",
    icon: ShieldAlert,
    keywords: ["vulnerabilidades", "pentest", "seguranca corporativa"]
  },
  {
    name: "WNR Midia",
    slug: "wnrmidia",
    description: "Divulgacao em teloes, padarias, totens e elevadores.",
    longDescription:
      "Gerencie conteudos, programacoes e campanhas em telas digitais para redes locais e pontos de alta circulacao.",
    color: "#FACC15",
    colorSoft: "rgba(250, 204, 21, 0.18)",
    icon: Clapperboard,
    keywords: ["midia digital out of home", "teloes", "totens"]
  },
  {
    name: "WNR RMMSis",
    slug: "wnrrmmsis",
    description: "RMM, monitoramento e gestao de chamados para empresas de TI.",
    longDescription:
      "Monitore ativos, acompanhe chamados, automatize rotinas tecnicas e amplie a eficiencia de operacoes de TI.",
    color: "#8758FF",
    colorSoft: "rgba(135, 88, 255, 0.18)",
    icon: Radar,
    keywords: ["rmm", "monitoramento de TI", "gestao de chamados"]
  }
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
