interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

function buildEntries(): SitemapEntry[] {
  const SITE_URL = "https://schwertransport-genehmigung.de";

  return [
    // Hauptseiten
    {
      url: SITE_URL,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/funktionen`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/preise`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/loesungen`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },

    // Branchen-Seiten
    {
      url: `${SITE_URL}/schwertransport-genehmigung`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/spedition-software`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/grossraumtransport-genehmigung`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/lkw-genehmigung`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },

    // Tools
    {
      url: `${SITE_URL}/tools/genehmigungs-checker`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/tools/roi-rechner`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },

    // Wissen
    {
      url: `${SITE_URL}/wissen`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/wissen/genehmigungspflichten`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/wissen/bussgeld-vermeiden`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/wissen/streckenplanung`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },

    // Blog
    {
      url: `${SITE_URL}/blog`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/schwertransport-genehmigung-guide`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog/strafen-vermeiden-schwertransporte`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/blog/genehmigungs-pflichten-spediteure`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.6,
    },
  ];
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
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
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
