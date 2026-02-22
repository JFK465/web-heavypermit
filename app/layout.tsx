import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "HeavyPermit - Genehmigungs-Management für Schwertransporte",
  description: "Die Datenbank für Genehmigungen mit Ampelsystem: Kann ich diesen Auftrag annehmen? Vermeiden Sie Bußgelder und Stilllegungen.",
  keywords: "Schwertransport Genehmigung, Spedition Software, Großraumtransport, LKW Genehmigung, Genehmigungs-Management",
  authors: [{ name: "HeavyPermit Team" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'HeavyPermit - Genehmigungs-Management für Schwertransporte',
    description: 'Die Datenbank für Genehmigungen mit Ampelsystem: Kann ich diesen Auftrag annehmen?',
    url: '/',
    siteName: 'HeavyPermit',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HeavyPermit Logo',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HeavyPermit - Genehmigungs-Management',
    description: 'Die Datenbank für Genehmigungen mit Ampelsystem',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
