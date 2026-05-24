# WNR Tecnologia

Site institucional da WNR Tecnologia, divisão tech da Winner Tecnologia / WTICORP, com foco em automação empresarial, soluções digitais e produtos baseados em IA.

## Stack

- Next.js 14 com App Router
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React
- Metadata API, sitemap automático e JSON-LD

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

O `postbuild` executa `next-sitemap` para gerar sitemap e robots em `public/`. O projeto também possui `app/sitemap.ts` e `app/robots.ts` para suporte nativo do App Router.

## Variaveis de ambiente

Use `.env.example` como base:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GOOGLE_ADS_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`

## Rotas

- `/`
- `/wnrinvestai`
- `/wnrfinance`
- `/wnrmkt`
- `/wnraudit`
- `/wnrmidia`
- `/wnrrmmsis`
- `/politica-de-privacidade`

## Contato

A rota `POST /api/contact` valida os dados no servidor, aplica honeypot anti-spam e deixa placeholders para reCAPTCHA v3 e envio via SMTP, SendGrid ou Resend.

## Deploy na Vercel

1. Configure as variáveis de ambiente na Vercel.
2. Rode o deploy pelo painel ou CLI.
3. Confirme o domínio `wnrtecnologia.com.br`.

## Deploy na Azure VM via GitHub Actions

O workflow `.github/workflows/deploy-azure.yml` publica automaticamente no push da branch `main`.

Configure estes secrets no repositório GitHub:

- `AZURE_HOST`: `4.228.218.45`
- `AZURE_USER`: `adminwti`
- `AZURE_SSH_PASSWORD`: senha SSH da VM
- `AZURE_SSH_PORT`: `22`

O deploy cria o app em `/var/www/wnrtecnologia`, reinicia o serviço `systemd` `wnrtecnologia` e, se o Nginx estiver instalado, configura proxy HTTP para `127.0.0.1:3006`.
