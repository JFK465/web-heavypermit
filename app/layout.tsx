import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  OrganizationSchema,
  WebSiteSchema,
} from "@/components/seo/StructuredData";

// bold-industrial Font-Kombination #2: DM Sans (Body) + Outfit (Headlines)
const fontBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const fontHeadline = Outfit({
  variable: "--font-headline",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: {
    default: "HeavyPermit - Genehmigungs-Management für Schwertransporte",
    template: "%s | HeavyPermit",
  },
  description:
    "Die Datenbank für Genehmigungen mit Ampelsystem: Kann ich diesen Auftrag annehmen? Vermeiden Sie Bußgelder und Stilllegungen. Jetzt kostenlos testen!",
  keywords: [
    "Schwertransport Genehmigung",
    "Spedition Software",
    "Großraumtransport",
    "LKW Genehmigung",
    "Genehmigungs-Management",
  ],
  authors: [{ name: "HeavyPermit Team" }],
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "HeavyPermit - Genehmigungs-Management für Schwertransporte",
    description:
      "Die Datenbank für Genehmigungen mit Ampelsystem: Kann ich diesen Auftrag annehmen? Jetzt kostenlos testen!",
    url: SITE_URL,
    siteName: "HeavyPermit",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HeavyPermit - Genehmigungs-Management für Schwertransporte",
    description:
      "Die Datenbank für Genehmigungen mit Ampelsystem: Kann ich diesen Auftrag annehmen?",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${fontBody.variable} ${fontHeadline.variable}`}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema name="HeavyPermit" url={SITE_URL} />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-[var(--font-body)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
