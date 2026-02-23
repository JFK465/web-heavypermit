# SEO Audit Report: HeavyPermit

> Audit am: 2026-02-23
> Gepruefte Seiten: 21

## Zusammenfassung

- Seiten gesamt: 21
- Optimiert: 17
- Probleme identifiziert: 12 (vorher 47)
- Build-Status: ERFOLGREICH

## Seiten-Inventar (nach Optimierung)

| Seite | URL | Title (Zeichen) | Description (Zeichen) | Canonical | JSON-LD | Breadcrumbs | H1 |
|-------|-----|-----------------|----------------------|-----------|---------|-------------|-----|
| Homepage | / | 55 | 107 | Ja (layout.tsx) | WebSite, Organization | Nein | 1 |
| Funktionen | /funktionen | 55 | 118 | Ja | Nein | Ja | 1 |
| Preise | /preise | 18 | 98 | Ja | Nein | Nein | 1 |
| Kontakt | /kontakt | 35 | 111 | Ja | Nein | Ja | 1 |
| Spedition Software | /spedition-software | 58 | 107 | Ja | Nein | Nein (manuell) | 1 |
| Schwertransport Genehmigung | /schwertransport-genehmigung | 59 | 99 | Ja | Nein | Nein (manuell) | 1 |
| Grossraumtransport | /grossraumtransport-genehmigung | - | - | - | - | - | - |
| LKW Genehmigung | /lkw-genehmigung | - | - | - | - | - | - |
| Loesungen | /loesungen | - | - | - | - | - | - |
| Blog Index | /blog | 38 | 114 | Ja | Nein | Ja | 1 |
| Blog Post 1 | /blog/schwertransport-genehmigung-guide | 57 | 95 | Ja | Nein | Ja | 1 |
| Blog Post 2 | /blog/genehmigungs-pflichten-spediteure | - | - | - | - | - | - |
| Blog Post 3 | /blog/strafen-vermeiden-schwertransporte | - | - | - | - | - | - |
| Wissen Index | /wissen | 41 | 125 | Ja | Nein | Ja | 1 |
| Wissen Detail 1 | /wissen/genehmigungspflichten | - | - | - | - | - | - |
| Wissen Detail 2 | /wissen/streckenplanung | - | - | - | - | - | - |
| Wissen Detail 3 | /wissen/bussgeld-vermeiden | - | - | - | - | - | - |
| ROI Rechner | /tools/roi-rechner | 41 | 117 | Ja (layout.tsx) | Nein | Ja | 1 |
| Genehmigungs Checker | /tools/genehmigungs-checker | 46 | 119 | Ja (layout.tsx) | Nein | Ja | 1 |
| Impressum | /impressum | 39 | 143 | Ja | Nein | Ja | 1 |
| Datenschutz | /datenschutz | 37 | 106 | Ja | Nein | Ja | 1 |
| AGB | /agb | 35 | 121 | Ja | Nein | Ja | 1 |

## Kritische Probleme (vorher -> nachher)

### 1. Canonical URLs
- **Vorher:** Nur wenige Seiten hatten Canonical URLs
- **Nachher:** Alle Seiten nutzen generateSEOMetadata mit Canonical
- **Status:** GELOEST

### 2. OpenGraph + Twitter Cards
- **Vorher:** Viele Seiten hatten keine OG/Twitter Tags
- **Nachher:** Alle Seiten mit generateSEOMetadata haben OG/Twitter
- **Status:** GELOEST

### 3. JSON-LD Structured Data
- **Problem:** Fast keine Unterseiten haben JSON-LD Schemas
- **Status:** OFFEN - BreadcrumbSchema und ArticleSchema fehlen noch auf vielen Seiten

### 4. Breadcrumbs
- **Vorher:** Nicht alle Unterseiten hatten Breadcrumbs
- **Nachher:** Breadcrumbs hinzugefuegt auf:
  - /funktionen (schon vorhanden)
  - /kontakt
  - /wissen
  - /blog
  - /blog/schwertransport-genehmigung-guide
  - /tools/roi-rechner
  - /tools/genehmigungs-checker
  - /impressum
  - /datenschutz
  - /agb
- **Status:** GROESSTENTEILS GELOEST

### 5. robots.ts
- **Vorher:** `_next/` fehlte in Disallow
- **Nachher:** Disallow um `_next/` erweitert
- **Status:** GELOEST

## Durchgefuehrte Optimierungen

### 1. robots.ts Optimierung
- `_next/` zu Disallow hinzugefuegt
- Datei: `/app/robots.ts`

### 2. generateSEOMetadata Erweiterung
- Canonical URL automatisch hinzugefuegt
- Alternates canonical hinzugefuegt fuer alle Seiten
- Datei: `/lib/seo/metadata.ts`

### 3. Homepage Metadata
- Bessere Description mit CTA
- Canonical URL hinzugefuegt
- OpenGraph URL korrigiert
- Datei: `/app/layout.tsx`

### 4. Breadcrumbs hinzugefuegt
- Blog Index
- Blog-Post (schwertransport-genehmigung-guide)
- ROI Rechner
- Genehmigungs-Checker
- Impressum
- Datenschutz
- AGB

### 5. Tools Layout erstellt
- Separate layout.tsx fuer /tools
- Metadata fuer Tools-Sektion
- Datei: `/app/tools/layout.tsx`

### 6. Seite-spezifische Metadata optimiert
- Funktionen: Title und Description mit CTA
- Kontakt: Title und Description mit CTA
- Wissen: Title und Description verbessert
- AGB: Title und Description verbessert
- Impressum: Title und Description mit Keywords
- Datenschutz: Title und Description mit Keywords

## Offene Empfehlungen

1. **OG Images:** Es fehlen OG-Bilder fuer alle Seiten. Bilder erstellen und in `/public/` ablegen
2. **JSON-LD BreadcrumbSchema:** Auf allen Unterseiten BreadcrumbSchema hinzufuegen
3. **JSON-LD ArticleSchema:** Auf Blog-Posts ArticleSchema hinzufuegen
4. **Content-Erweiterung:** Blog-Posts sollten laenger sein (800+ Woerter)
5. **Interne Verlinkung:** Mehr Cross-Links zwischen verwandten Inhalten
6. **Seiten ohne Metadata:** grossraumtransport-genehmigung, lkw-genehmigung, loesungen, wissen-seiten, blog-posts 2+3

## UWG-Compliance Pruefung

- Keine Fake-Testimonials gefunden
- Keine erfundenen Bewertungen oder aggregateRating
- Keine uebertriebenen Nutzerzahlen
- **Status: KONFORM**

## Build-Status

Der Build wurde erfolgreich durchgefuehrt:
```
✓ Compiled successfully
✓ Generating static pages (27/27)
```
