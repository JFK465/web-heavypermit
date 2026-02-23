import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "Tools - HeavyPermit",
    template: "%s | HeavyPermit",
  },
  description: "Tools und Rechner für Speditionen. Berechnen Sie Ihren ROI und prüfen Sie Ihre Genehmigungen.",
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
