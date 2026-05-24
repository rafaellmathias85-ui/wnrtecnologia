export const siteConfig = {
  name: "WNR Tecnologia",
  legalName: "WNR Tecnologia - Winner Tecnologia",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wnrtecnologia.com.br",
  description:
    "Tecnologia, automacao e IA para transformar empresas com solucoes digitais da divisao tech da Winner Tecnologia.",
  cnpj: "00.000.000/0001-00",
  email: "contato@wnrtecnologia.com.br",
  phone: "+55 11 0000-0000",
  address: "Brasil",
  parentCompany: {
    name: "Winner Tecnologia / WTICORP",
    url: "https://wticorp.com.br"
  }
};

export const navItems = [
  { label: "Solucoes", href: "/#solucoes" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Winner Group", href: "/#winner" },
  { label: "Contato", href: "/#contato" }
];
