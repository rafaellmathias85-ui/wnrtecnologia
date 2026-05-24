import type { Metadata } from "next";
import { ProductPageContent } from "@/components/ProductPageContent";
import { buildMetadata } from "@/lib/seo";
import { getSolution } from "@/lib/solutions";

const solution = getSolution("wnrrmmsis")!;

export const metadata: Metadata = buildMetadata({
  title: `${solution.name} | WNR Tecnologia`,
  description: solution.description,
  path: `/${solution.slug}`,
  keywords: ["WNR Tecnologia", ...solution.keywords]
});

export default function Page() {
  return <ProductPageContent solution={solution} />;
}
