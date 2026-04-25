import { getGitLastmod } from "@/lib/sitemap-lastmod";

// Build-time static generation: getGitLastmod nutzt git CLI, das nur
// im Build-Container verfuegbar ist, nicht in Vercel-Serverless-Runtime.
// Sitemap wird bei jedem Deploy regeneriert.
export const dynamic = "force-static";

interface SitemapSource {
  url: string;
  source: string;
  changefreq: string;
  priority: number;
}

interface SitemapEntry extends SitemapSource {
  lastmod: string;
}

const STATIC_SOURCES: SitemapSource[] = [
  { url: "https://schwertransport-genehmigung.de/funktionen", source: "app/funktionen/page.tsx", changefreq: "monthly", priority: 0.9 },
  { url: "https://schwertransport-genehmigung.de/preise", source: "app/preise/page.tsx", changefreq: "monthly", priority: 0.9 },
  { url: "https://schwertransport-genehmigung.de/loesungen", source: "app/loesungen/page.tsx", changefreq: "monthly", priority: 0.8 },
  { url: "https://schwertransport-genehmigung.de/schwertransport-genehmigung", source: "app/schwertransport-genehmigung/page.tsx", changefreq: "monthly", priority: 0.8 },
  { url: "https://schwertransport-genehmigung.de/spedition-software", source: "app/spedition-software/page.tsx", changefreq: "weekly", priority: 0.9 },
  { url: "https://schwertransport-genehmigung.de/grossraumtransport-genehmigung", source: "app/grossraumtransport-genehmigung/page.tsx", changefreq: "monthly", priority: 0.8 },
  { url: "https://schwertransport-genehmigung.de/lkw-genehmigung", source: "app/lkw-genehmigung/page.tsx", changefreq: "monthly", priority: 0.8 },
  { url: "https://schwertransport-genehmigung.de/tools/genehmigungs-checker", source: "app/tools/genehmigungs-checker/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schwertransport-genehmigung.de/tools/roi-rechner", source: "app/tools/roi-rechner/page.tsx", changefreq: "monthly", priority: 0.7 },
  { url: "https://schwertransport-genehmigung.de/wissen", source: "app/wissen/page.tsx", changefreq: "weekly", priority: 0.7 },
  { url: "https://schwertransport-genehmigung.de/wissen/genehmigungspflichten", source: "app/wissen/genehmigungspflichten/page.tsx", changefreq: "monthly", priority: 0.6 },
  { url: "https://schwertransport-genehmigung.de/wissen/bussgeld-vermeiden", source: "app/wissen/bussgeld-vermeiden/page.tsx", changefreq: "monthly", priority: 0.6 },
  { url: "https://schwertransport-genehmigung.de/wissen/streckenplanung", source: "app/wissen/streckenplanung/page.tsx", changefreq: "monthly", priority: 0.6 },
  { url: "https://schwertransport-genehmigung.de/blog", source: "app/blog/page.tsx", changefreq: "weekly", priority: 0.7 },
  { url: "https://schwertransport-genehmigung.de/blog/schwertransport-genehmigung-guide", source: "app/blog/schwertransport-genehmigung-guide/page.tsx", changefreq: "monthly", priority: 0.6 },
  { url: "https://schwertransport-genehmigung.de/blog/strafen-vermeiden-schwertransporte", source: "app/blog/strafen-vermeiden-schwertransporte/page.tsx", changefreq: "monthly", priority: 0.6 },
  { url: "https://schwertransport-genehmigung.de/blog/genehmigungs-pflichten-spediteure", source: "app/blog/genehmigungs-pflichten-spediteure/page.tsx", changefreq: "monthly", priority: 0.6 },
];

function buildEntries(): SitemapEntry[] {
  const staticEntries = STATIC_SOURCES.map((s) => ({
    ...s,
    lastmod: getGitLastmod(s.source),
  }));

  return staticEntries;
}

function toXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) => `  <url>
    <loc>${e.url}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function GET() {
  const entries = buildEntries();
  const xml = toXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
