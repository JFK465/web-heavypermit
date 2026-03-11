import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://schwertransport-genehmigung.de";

export const metadata: Metadata = generateSEOMetadata({
  title: "Genehmigungs-Checker - Schwertransport-Genehmigung prüfen",
  description:
    "Kostenloser Genehmigungs-Checker: Prüfen Sie den Status Ihrer Schwertransport-Genehmigungen. Ampelsystem zeigt gültig, ablaufend oder abgelaufen.",
  keywords: [
    "Genehmigungs-Checker",
    "Schwertransport Genehmigung prüfen",
    "Genehmigungsstatus",
  ],
  canonical: "/tools/genehmigungs-checker",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebPageSchema
        name="Genehmigungs-Checker"
        description="Kostenloser Genehmigungs-Checker für Schwertransport-Genehmigungen"
        url={`${SITE_URL}/tools/genehmigungs-checker`}
      />
      <BreadcrumbSchema
        items={[
          { position: 1, name: "Home", item: SITE_URL },
          { position: 2, name: "Tools", item: `${SITE_URL}/tools` },
          {
            position: 3,
            name: "Genehmigungs-Checker",
            item: `${SITE_URL}/tools/genehmigungs-checker`,
          },
        ]}
      />
      {children}
    </>
  );
}
