import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import {
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";
import { BetaSignupForm } from "@/components/beta/BetaSignupForm";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://schwertransport-genehmigung.de";

export const metadata: Metadata = generateSEOMetadata({
  title: "Spedition Software - Schwertransport-Genehmigungen digital verwalten",
  description:
    "Kostenlos testen: HeavyPermit ist die Spedition Software für Schwertransporte. Genehmigungen verwalten, Fristen überwachen und Bußgelder vermeiden.",
  keywords: [
    "Spedition Software",
    "Software Spedition",
    "Schwertransport Software",
    "Transportsoftware",
    "Speditionssoftware Deutschland",
    "Genehmigungs-Management Software",
  ],
  canonical: "/spedition-software",
});

export default function SpeditionSoftwarePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { position: 1, name: "Home", item: SITE_URL },
          {
            position: 2,
            name: "Spedition Software",
            item: `${SITE_URL}/spedition-software`,
          },
        ]}
      />
      <WebPageSchema
        name="Spedition Software - Schwertransport-Genehmigungen digital verwalten"
        description="Kostenlos testen: HeavyPermit ist die Spedition Software für Schwertransporte. Genehmigungen verwalten, Fristen überwachen und Bußgelder vermeiden."
        url={`${SITE_URL}/spedition-software`}
      />
      <BetaSignupForm />
    </>
  );
}
