# Pre-Launch Audit: HeavyPermit

**Datum:** 2026-03-11
**Domain:** schwertransport-genehmigung.de
**Seiten:** 22 | **Blog-Posts:** 3 | **Struktur:** root (kein src/)

## Traffic-Light-Report

| # | Kategorie | Status | Details |
|---|-----------|--------|---------|
| 1 | Domain-Konfiguration | GRUEN | Alle URLs konsistent auf https://schwertransport-genehmigung.de |
| 2 | Assets | GRUEN | Alle 11 Assets vorhanden (og.png, Logo-Set, Favicon-Set) |
| 3 | Build & Lint | GRUEN | Build + Lint fehlerfrei |
| 4 | SEO Metadata | GRUEN | 22/22 Seiten mit Metadata (Layouts fuer Client-Pages) |
| 5 | Structured Data | GRUEN | Organization+WebSite+BreadcrumbSchema+WebPageSchema+ArticleSchema auf allen Seiten |
| 6 | Sitemap | GRUEN | 19 oeffentliche Seiten, Legal Pages ausgeschlossen |
| 7 | Robots.ts | GRUEN | allow:/, disallow /api/ + /_next/, Sitemap-URL korrekt |
| 8 | Legal Pages | GRUEN | Impressum, Datenschutz, AGB: noindex gesetzt, nicht in Sitemap |
| 9 | Blog & Content | GRUEN | 3 Blog-Posts mit ArticleSchema |
| 10 | Navigation | GRUEN | Header: 13+ Links (Mega-Menu), Footer: 19 Links (4-Spalten) |
| 11 | UWG-Compliance | GRUEN | Keine Fake-Daten, kein aggregateRating |
| 12 | Deployment | GRUEN | GitHub-Repo + PROJEKT-UEBERSICHT + Vercel (HTTP 200) |
| 13 | Performance | GRUEN | og.png 291KB, keine console.logs, kein ignoreBuildErrors |

**BLOCKIEREND (ROT): 0** | **WARNUNGEN (GELB): 0** | **OK (GRUEN): 13**

**GO-LIVE STATUS: BEREIT**

## Durchgefuehrte Fixes (2026-03-11)

1. **Sitemap**: `app/sitemap.ts` erstellt mit 19 oeffentlichen Seiten (ohne Legal Pages)
2. **Robots**: `app/robots.ts` erstellt mit allow:/, disallow /api/ + /_next/, Sitemap-URL
3. **Broken Links**: `/loesungen` statt `/lösungen` in Header (2x), Footer (1x), Canonical (1x)
4. **SEO Metadata**: Layout-Dateien fuer tools/genehmigungs-checker und tools/roi-rechner erstellt
5. **Structured Data**: BreadcrumbSchema + WebPageSchema auf 12 Seiten, ArticleSchema auf 3 Blog-Posts
6. **Performance**: og.png von 1.7MB auf 291KB komprimiert
7. **publisher.logo**: StructuredData.tsx korrigiert: logo.png → logo.svg

## Google Search Console Setup

1. Property hinzufuegen: https://schwertransport-genehmigung.de
   → https://search.google.com/search-console
2. Inhaberschaft verifizieren (DNS-TXT oder HTML-Tag)
3. Sitemap einreichen: https://schwertransport-genehmigung.de/sitemap.xml
4. URL-Inspektion fuer Homepage ausfuehren
5. Nach 24-48h: Indexierungsstatus pruefen
