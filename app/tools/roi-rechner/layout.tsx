import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { WebPageSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://schwertransport-genehmigung.de";

export const metadata: Metadata = generateSEOMetadata({
  title: "ROI-Rechner - Ersparnis durch digitales Genehmigungs-Management",
  description:
    "Berechnen Sie Ihre Ersparnis mit HeavyPermit: ROI-Rechner für Schwertransport-Genehmigungen. Vermeiden Sie Bußgelder und sparen Sie Zeit.",
  keywords: [
    "ROI Rechner Schwertransport",
    "Genehmigungs-Management Kosten",
    "Ersparnis Schwertransport",
  ],
  canonical: "/tools/roi-rechner",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WebPageSchema
        name="ROI-Rechner"
        description="Berechnen Sie Ihre Ersparnis mit HeavyPermit"
        url={`${SITE_URL}/tools/roi-rechner`}
      />
      <BreadcrumbSchema
        items={[
          { position: 1, name: "Home", item: SITE_URL },
          { position: 2, name: "Tools", item: `${SITE_URL}/tools` },
          {
            position: 3,
            name: "ROI-Rechner",
            item: `${SITE_URL}/tools/roi-rechner`,
          },
        ]}
      />
      {children}
    </>
  );
}
