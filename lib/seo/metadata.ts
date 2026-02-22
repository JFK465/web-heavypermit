import { Metadata } from "next";

type SEOParams = {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  image?: string;
};

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonical = "/",
  image = "/og-image.png",
}: SEOParams): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const fullUrl = `${siteUrl}${canonical}`;
  const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title: `${title} | HeavyPermit`,
    description,
    keywords: [...keywords, "HeavyPermit", "Genehmigungs-Management", "Schwertransport"].join(", "),
    authors: [{ name: "HeavyPermit Team" }],
    openGraph: {
      title: `${title} | HeavyPermit`,
      description,
      url: fullUrl,
      siteName: "HeavyPermit",
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | HeavyPermit`,
      description,
      images: [fullImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
