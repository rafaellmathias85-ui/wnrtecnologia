/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://wnrtecnologia.com.br",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: "public"
};
