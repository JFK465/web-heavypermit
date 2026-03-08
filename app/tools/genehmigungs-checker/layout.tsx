import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSEOMetadata({
  title: "Kostenloser Genehmigungs-Checker – Status Ihrer Genehmigung prüfen",
  description:
    "Prüfen Sie in Sekundenschnelle, ob Ihre Schwertransport-Genehmigung gültig ist. Kostenloses Tool mit Ampelsystem für Speditionen.",
  keywords: [
    "Genehmigungs-Checker",
    "Schwertransport Genehmigung prüfen",
    "Genehmigungsstatus",
  ],
  canonical: "/tools/genehmigungs-checker",
});

export default function GenehmigungsCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
