# Pre-Launch Audit: HeavyPermit

**Datum:** 2026-03-08
**Domain:** schwertransport-genehmigung.de
**Seiten:** 22 | **Blog-Posts:** 3 | **Struktur:** root

## Traffic-Light-Report

| # | Kategorie | Status | Details |
|---|-----------|--------|---------|
| 1 | Domain-Konfiguration | GRUEN | Alle URLs auf https://schwertransport-genehmigung.de |
| 2 | Assets | ROT | og.png, favicon.ico, apple-touch-icon + Favicon-PNGs fehlen |
| 3 | Build & Lint | GRUEN | Build + Lint fehlerfrei |
| 4 | SEO Metadata | GRUEN | 22/22 Seiten mit Metadata (Layouts fuer Client-Pages) |
| 5 | Structured Data | GELB | Organization+WebSite OK, Unterseiten ohne Schemas |
| 6 | Sitemap | GRUEN | Legal Pages entfernt, alle oeffentlichen Seiten enthalten |
| 7 | Robots.ts | GRUEN | Korrekt konfiguriert mit Produktions-Domain |
| 8 | Legal Pages | GRUEN | noindex gesetzt, nicht in Sitemap |
| 9 | Blog & Content | GRUEN | 3 Blog-Posts mit vollstaendiger Metadata |
| 10 | Navigation | GRUEN | Header: 15 Links, Footer: 17 Links |
| 11 | UWG-Compliance | GRUEN | Keine Fake-Daten, kein aggregateRating |
| 12 | Deployment | GELB | GitHub-Repo OK, DNS zeigt auf 217.160.0.156 (nicht Vercel) |
| 13 | Performance | GRUEN | Keine console.logs, kein ignoreBuildErrors |

**BLOCKIEREND (ROT): 1** | **WARNUNGEN (GELB): 2** | **OK (GRUEN): 10**

## Durchgefuehrte Fixes

1. **Domain-Konfiguration**: localhost-Fallback in 6 Dateien auf `https://schwertransport-genehmigung.de` geaendert (layout.tsx, sitemap.ts, robots.ts, metadata.ts, StructuredData.tsx, project-meta.json)
2. **Legal Pages**: `robots: { index: false, follow: true }` in Impressum, Datenschutz, AGB gesetzt
3. **Sitemap**: Legal Pages (Impressum, Datenschutz, AGB) entfernt
4. **SEO Metadata**: Layout-Dateien fuer tools/roi-rechner und tools/genehmigungs-checker erstellt
5. **Lint**: useEffect-Dependency-Warning in roi-rechner gefixt

## Offene Punkte

- **Assets (ROT)**: `/saas-assets heavypermit` ausfuehren fuer og.png, favicon.ico, apple-touch-icon etc.
- **Structured Data (GELB)**: FAQSchema, ArticleSchema auf Unterseiten ergaenzen
- **Deployment (GELB)**: DNS CNAME auf Vercel umstellen (aktuell 217.160.0.156)

## Naechste Schritte

1. `/saas-assets heavypermit` ausfuehren
2. DNS-CNAME auf cname.vercel-dns.com setzen
3. Google Search Console einrichten (siehe unten)

## Google Search Console Setup

1. Property hinzufuegen: https://schwertransport-genehmigung.de
2. Inhaberschaft verifizieren (DNS-TXT oder HTML-Tag)
3. Sitemap einreichen: https://schwertransport-genehmigung.de/sitemap.xml
4. URL-Inspektion fuer Homepage ausfuehren
5. Nach 24-48h: Indexierungsstatus pruefen
