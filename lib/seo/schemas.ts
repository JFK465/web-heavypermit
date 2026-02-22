const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export interface FAQItem {
  question: string;
  answer: string;
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "HeavyPermit",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Genehmigungs-Management für Schwertransporte mit Ampelsystem. Verwalten Sie Genehmigungen zentral und vermeiden Sie Bußgelder.",
    offers: {
      "@type": "Offer",
      price: "499",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: "HeavyPermit",
      url: SITE_URL,
    },
    url: SITE_URL,
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HeavyPermit",
    url: SITE_URL,
    description:
      "Genehmigungs-Management für Schwertransporte in Deutschland. Die Datenbank für Genehmigungen mit Ampelsystem.",
    sameAs: [],
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
