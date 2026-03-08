import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSEOMetadata({
  title: "ROI-Rechner – Wie viel sparen Sie mit HeavyPermit?",
  description:
    "Berechnen Sie Ihre Ersparnis durch automatisiertes Genehmigungs-Management. Vermeiden Sie Bußgelder und sparen Sie Arbeitszeit bei Schwertransporten.",
  keywords: [
    "ROI Rechner Spedition",
    "Schwertransport Kosten",
    "Genehmigungs-Management ROI",
  ],
  canonical: "/tools/roi-rechner",
});

export default function ROIRechnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
