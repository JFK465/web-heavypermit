# Upgrade Report: HeavyPermit

> Audit am: 2026-02-23
> Projektverzeichnis: web-heavypermit/
> Aktuelle Seitenanzahl: 14

## Score

**4.5/20.5 Punkte (22%)** – Rot

## Gap-Tabelle

| # | Kategorie | Status | Punkte | Details |
|---|-----------|--------|--------|---------|
| 1 | Core Pages | TEILWEISE | 1/2 | /preise existiert, /funktionen und /kontakt fehlen |
| 2 | Legal Pages | TEILWEISE | 1/2 | /datenschutz und /impressum existieren, /agb fehlt |
| 3 | Software Landing Page | TEILWEISE | 1/2 | /spedition-software existiert, aber nicht als /{keyword}-software Muster mit Beta-Formular |
| 4 | Branchen-Seiten | OK | 1/1 | 4 Branchen-Seiten vorhanden (/schwertransport-genehmigung, /grossraumtransport-genehmigung, /lkw-genehmigung, /loesungen) |
| 5 | Wissen-Seiten | FEHLT | 0/1 | Keine Wissen-Sektion vorhanden |
| 6 | Blog System | TEILWEISE | 0.5/1 | Blog-Seiten vorhanden (ohne MDX-System, ohne src/lib/blog.ts) |
| 7 | Tool/Rechner | OK | 0.5/0.5 | 2 Tools vorhanden (/tools/roi-rechner, /tools/genehmigungs-checker) |
| 8 | Mega-Menu Navbar | TEILWEISE | 1/2 | Partielle Dropdowns (nur Tools + Blog), fehlt: Produkt, Loesungen, Wissen |
| 9 | Multi-Column Footer | TEILWEISE | 0.5/1 | 4-Spalten vorhanden, aber keine Newsletter-Section |
| 10 | Breadcrumbs | FEHLT | 0/1 | Keine Breadcrumbs-Komponente vorhanden |
| 11 | StructuredData | FEHLT | 0/2 | StructuredData.tsx existiert, aber keine JSON-LD in layout.tsx eingebunden |
| 12 | Sitemap | TEILWEISE | 1/2 | Grosseilte vollstaendig, aber /agb fehlt |
| 13 | Proxy | FEHLT | 0/0.5 | Keine proxy.ts oder middleware.ts vorhanden |
| 14 | SEO Metadata | TEILWEISE | 1/2 | Basis-Metadata vorhanden, aber oft ohne Canonical URLs, OG Tags nicht ueberall |
| 15 | Animations | FEHLT | 0/0.5 | Keine Framer Motion, keine animations.ts |

## Empfohlene Upgrade-Reihenfolge

Priorisiert nach Impact (Hoch-gewichtete Kategorien zuerst):

### Phase 1: Foundation (Critical)

1. **StructuredData** – JSON-LD Schemas in layout.tsx einbinden (WebSite, Organization, SoftwareApplication). Dies ist grundlegend fuer SEO und muss frueh implementiert werden.

2. **Tech-Stack Upgrade** – Das Projekt verwendet:
   - Next.js 14 (sollte 16 sein)
   - React 18 (sollte 19 sein)
   - Tailwind 3 (sollte 4 sein)
   - Keine Framer Motion
   - Keine MDX-Unterstuetzung (gray-matter, next-mdx-remote)
   - Keine shadcn/ui Komponenten

3. **Core Pages** – /funktionen und /kontakt Seiten erstellen

4. **Legal Pages** – /agb Seite erstellen

### Phase 2: Content Architecture

5. **Wissen-System** – /wissen Index und 3+ Wissen-Artikel erstellen (z.B. /wissen/schwertransport-recht, /wissen/genehmigungsarten)

6. **Blog MDX-System** – src/lib/blog.ts erstellen, Blog auf MDX umstellen, content/blog/ Ordner anlegen

7. **Breadcrumbs** – Breadcrumbs-Komponente erstellen und in alle Unterseiten einbauen

### Phase 3: SEO & Navigation

8. **SEO Metadata Fixes** – Alle Seiten auf vollstaendige Metadata pruefen (Canonical URLs, OG Tags)

9. **Mega-Menu Navbar** – Vollstaendiges Mega-Menu mit allen Sektionen (Produkt, Loesungen/Branchen, Wissen, Tools)

10. **Footer Upgrade** – Newsletter-Section hinzufuegen

11. **Sitemap Update** – /agb hinzufuegen

### Phase 4: Advanced Features

12. **Software Landing Page** – /schwertransport-genehmigung-software erstellen (keyword-optimiert mit Beta-Registrierungsformular)

13. **Proxy/Middleware** – src/proxy.ts fuer App-Subdomain-Redirect erstellen

14. **Animations** – Framer Motion hinzufuegen und Homepage-Sections animieren

## Vorhandene Staerken

- **Tool/Rechner**: Das Projekt hat bereits 2 interaktive Tools (ROI-Rechner, Genehmigungs-Checker)
- **Branchen-Seiten**: 4 branchenspezifische Seiten vorhanden
- **Blog**: Blog-System in grundlegender Form vorhanden
- **Preise**: Ausfuehrliche Preisseite mit FAQ
- **Legal**: 2 von 3 Legal-Seiten vorhanden (Datenschutz, Impressum)

## Technische Details

### Aktuelle Tech-Stack:
- Next.js 14.2.18
- React 18.3.1
- Tailwind CSS 3.4.15
- Keine shadcn/ui
- Keine Framer Motion
- Keine MDX-Unterstuetzung

### Pipeline-Standard (Ziel):
- Next.js 16.1.6
- React 19.2.3
- Tailwind CSS 4
- shadcn/ui mit new-york Style
- Framer Motion 12+
- gray-matter + next-mdx-remote

### Fehlende Kern-Dateien:
- src/lib/seo-config.ts (zentrale SEO-Konfiguration)
- src/lib/animations.ts
- src/lib/blog.ts
- src/proxy.ts
- components.json (shadcn/ui)
- content/blog/*.mdx
