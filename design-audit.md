# Design-Audit: HeavyPermit

> Datum: 2026-03-04
> Maturity-Tier: D (11/60)

---

## Score-Uebersicht

| Kategorie | Score | Status | Upgrade-Potenzial |
|-----------|-------|--------|-------------------|
| Hero | 1 | Einfacher zentrierter Text, kein Badge-Styling, kein Framer Motion, kein GlowBG. bg-gradient-to-b from-blue-50 ist der einzige visuelle Akzent. | TextReveal auf H1, GlowBackground, animierter Badge mit blurIn, Parallax-Wrapper |
| Animationen | 0 | framer-motion ist installiert (v12), aber die gesamte Seite ist als "use client" ohne eine einzige motion.div oder whileInView-Verwendung umgesetzt. animations.ts enthaelt fadeInUp/staggerContainer/scaleIn – wird aber nirgendwo importiert. | AnimateOnScroll auf allen Sections einbauen, blurIn fuer Badge, springIn fuer CTAs |
| Cards | 2 | Feature-Cards: bg-white rounded-xl shadow-md – kein Hover-State, kein translate, kein border-shift. ROI-Cards: bg-gray-50 rounded-lg ohne jede Interaktion. Card-Komponente (card.tsx) ist reines shadcn-Default. | SpotlightCard wrapping, hover:-translate-y-1, farbige Icon-Shadows |
| Farben | 2 | Farbsystem ist gut vorbereitet: trust-blue, safety-orange, go-green, attention-yellow, stop-red als Custom-Colors in tailwind.config.ts. Aber in page.tsx werden diese Farben NICHT genutzt – stattdessen Tailwind-Rohfarben (blue-900, orange-600, green-500, yellow-500). CSS-Tokens werden kaum eingesetzt. Kein animierter Gradient. | accent-colors.ts erstellen, Rohfarben durch Tailwind-Custom-Colors ersetzen, GradientText hinzufuegen |
| Typografie | 1 | Nur Inter – kein Display-Font. globals.css enthaelt kein --font-headline und kein font-family-Assignment fuer Headlines. layout.tsx hat keinen Google-Font-Import. Keine Fluid Typography (clamp). Heading-Groessen als harte Breakpoints (text-5xl md:text-6xl). | DM Sans + Outfit (Kombination #2, bold-industrial) oder IBM Plex Sans (#5). Fluid Typography mit clamp(). |
| Hintergruende | 1 | Nur ein einfaches bg-gradient-to-b from-blue-50 to-white auf der root div. Alle anderen Sections sind bg-white oder bg-gradient-to-br from-blue-900 to-blue-800 (Pricing). Kein GlowBackground, keine Orbs, keine Mesh-Gradienten, kein NoiseOverlay. | GlowBackground-Komponente in Hero + 1-2 Sections, optionaler NoiseOverlay |
| Hover-Interaktion | 1 | Buttons: nur Farbaenderung via hover:bg-*. Feature-Cards: kein Hover-Effekt vorhanden. Links im Header: transition-colors ohne visuellen Depth-Effekt. Kein translate, kein scale, kein Spotlight-Tracking. | Scale + Shadow fuer Cards, farbige Hover-Shadows, SpotlightCard-Mouse-Tracking |
| Scroll-Effekte | 0 | Keine einzige Animation beim Scrollen. whileInView wird nicht genutzt, AnimateOnScroll existiert nicht. Die Seite ist vollstaendig statisch wirkend trotz framer-motion Dependency. | AnimateOnScroll auf allen Sections, gestaffelte Delays fuer Card-Listen |
| Branding | 2 | Favicon-Set ist halbwegs vorbereitet: layout.tsx referenziert favicon-16x16.png, favicon-32x32.png, favicon.ico, apple-touch-icon.png – aber public/ enthaelt nur favicon.svg. Kein Logo-SVG (logo.svg, logo-icon.svg). Header zeigt "HP" als Text-Platzhalter in einem blauen Box. Kein OG-Image. Kein Custom Scrollbar, kein Selection-Color. | Logo generieren (truck-Icon aus lucide-static), Favicon-Set via sharp, OG-Image, Custom Scrollbar |
| Layout | 2 | Rein standard: Feature-Grid mit md:grid-cols-3, ROI-Grid mit md:grid-cols-3. Keine Layout-Varianten (A/B/C), kein BentoGrid, kein Alternating Showcase. Pricing ist ein einzelner Banner ohne Card-Struktur. | BentoGrid fuer Features (bold-industrial Preset passt gut), Alternating Showcase fuer eine Detail-Section |
| Page Transitions | 0 | Kein template.tsx, kein AnimatePresence, kein layoutId. Reines Next.js-Default ohne jede Seitenuebergang-Animation. | template.tsx mit fade-in (einfach, 30min) |
| Textur/Tiefe | 1 | Die Demo-Box im Hero hat einen dezenten Depth-Trick (absolutes div mit rotate-1 als Schatten), der ist kreativ. Ansonsten komplett flat: keine Glassmorphism-Cards, keine SVG-Grain-Textur, keine 3D-Perspective. | Glassmorphism-Effekte auf Header bei Scroll (backdrop-blur), Soft Shadows mit Farbtonung |

**Gesamt: 11/60 — Tier D (Basic)**

---

## Empfohlener Preset: bold-industrial

**Begruendung:**
HeavyPermit bedient Speditionen, Transportunternehmen und Logistikunternehmen — eine Zielgruppe die Klarheit, Autoritat und Verlasslichkeit erwartet. Der bold-industrial Preset passt am besten weil:
- **Industrie-Tonalitat:** Kantige Formen, starke Typografie, keine verspielten Elemente
- **Vertrauenssignal:** Klare visuelle Hierarchie statt dekorativem Overload
- **Differenzierung:** Die meisten SaaS-Produkte nutzen modern-elevated — bold-industrial faellt auf
- **Farbpasform:** trust-blue + safety-orange sind bereits perfekte bold-industrial Farben

Empfohlene Font-Kombination: **#2 (DM Sans + Outfit)** — Modern, technisch, lesbar in Datenmasken.

Alternativ (wenn weniger radikal): **modern-elevated** als konservativere Option die SpotlightCard, TextReveal und blurIn ermoeglicht.

---

## Quick-Wins (in 30min)

1. **AnimateOnScroll-Komponente erstellen** (`components/ui/AnimateOnScroll.tsx`) und auf alle 5 Sections in page.tsx anwenden — groesster visueller Effekt pro Zeitaufwand
2. **GradientText auf Hero-H1** — "Auftrag annehmen" mit from-blue-700 to-orange-500 gradient einfaerben (passt zu trust-blue + safety-orange)
3. **Feature-Card Hover-State** — `hover:-translate-y-1 hover:shadow-xl transition-all duration-200` auf alle 6 Feature-Cards
4. **Custom Scrollbar + Selection-Color in globals.css** — `--hue: 220` (Dunkelblau), Scrollbar primary/30, Selection primary/20
5. **GlowBackground-Komponente** (`components/ui/GlowBackground.tsx`) in Hero-Section einbauen (intensity=5, subtil fuer light-Modus)
6. **Fluid Typography** — `.heading-hero { font-size: clamp(2.5rem, 6vw, 4rem) }` und `.heading-section { font-size: clamp(1.75rem, 4vw, 2.5rem) }` in globals.css, hartcodierte text-5xl md:text-6xl Klassen ersetzen
7. **springIn fuer CTA-Buttons** in animations.ts ergaenzen und auf die zwei Haupt-CTA-Links anwenden
8. **blurIn-Animation** fuer den Beta-Badge ("Exklusive Beta") ersetzen statt inline-block ohne Animation
9. **Farben-Bereinigung** — Tailwind-Rohfarben (blue-900, orange-600) durch Custom-Color-Klassen (trust-blue, safety-orange) ersetzen, damit das Farbsystem konsistent ist
10. **template.tsx erstellen** (`app/template.tsx`) mit einfachem `motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}`
11. **Logo-Platzhalter ersetzen** — public/logo.svg mit einem Truck-Icon (lucide-static) in trust-blue generieren, Header-Placeholder-Box entfernen

---

## Section-Upgrades (in 1-2h)

1. **Hero-Redesign** — Textblock + Dashboard-Demo in ein Split-Layout (Variante B: Text links, Demo rechts) umbauen. TextReveal fuer H1 einsetzen, GlowBackground mit intensity=8 hinter der Demo-Box, animierter Badge via blurIn. Mehr vertikaler Raum: py-24 lg:py-32.

2. **FeaturesGrid auf bold-industrial umbauen** — Kein Grid-3-cols mehr. Border-2 border-foreground/10 Cards, kein Shadow, hover:border-primary transition-colors. Alternierend Label-Farben aus accent-colors.ts (trust-blue, go-green, safety-orange, attention-yellow). AnimateOnScroll mit gestaffelten delays (0.05s pro Item).

3. **Pricing-Section upgraden** — Vom einfachen Banner zu einer strukturierten Card: border-2 border-blue-900, farbiger Header-Bereich, Bullet-Liste fuer enthaltene Features. AnimateOnScroll scaleIn Einblendung.

4. **ROI-Section visuell staerken** — Die drei Kennzahlen als grosse Stat-Counter mit useCountUp-Hook implementieren. Hintergrundfarbton: bg-foreground/[0.03] (bold-industrial Section-BG). Zahlen animiert von 0 hochzaehlen wenn in Viewport.

5. **CTASection-Redesign** — Eigene Section statt inline-Textblock. Bold: text-5xl font-black uppercase tracking-tight. Zwei CTA-Buttons: Primary border-2 border-primary + Secondary ghost. AnimateOnScroll slideUp.

---

## Dateien die geaendert werden

### Neue Dateien (erstellen)
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/components/ui/AnimateOnScroll.tsx`
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/components/ui/GlowBackground.tsx`
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/components/ui/GradientText.tsx`
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/lib/accent-colors.ts`
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/app/template.tsx`

### Zu aendernde Dateien
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/app/globals.css` — Fluid Typography clamp(), Custom Scrollbar, Selection-Color, --hue Token
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/lib/animations.ts` — blurIn, springIn, slideUp, slideInLeft, slideInRight ergaenzen
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/app/layout.tsx` — Font-Import DM Sans + Outfit (Kombination #2), --font-body/--font-headline Variablen
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/app/page.tsx` — AnimateOnScroll auf allen Sections, GradientText auf Hero-H1, blurIn fuer Badge, springIn fuer CTAs, GlowBackground im Hero, hover:-translate-y-1 auf Feature-Cards, Farb-Klassen auf Custom-Colors umstellen
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/components/layout/Header.tsx` — Logo-Platzhalter durch logo.svg ersetzen
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/components/layout/Footer.tsx` — logo-dark.svg im Footer (optionale Verbesserung)

### Assets zu generieren (public/)
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/public/logo.svg` — Truck-Icon in #1e3a8a (trust-blue)
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/public/logo-icon.svg` — Truck-Icon 32x32
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/public/logo-dark.svg` — Truck-Icon in #FFFFFF
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/public/favicon-16x16.png`
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/public/favicon-32x32.png`
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/public/apple-touch-icon.png`
- `/Users/jonaskruger/JFKCompliance/web-heavypermit/public/og.png` — OG-Image 1200x630

---

## Analyse-Details

### Was gut ist (nicht anfassen)
- **Ampelsystem-Konzept:** Die traffic-light CSS-Klassen und die Demo im Hero sind originell und branchenspezifisch — beibehalten, nur visuell upgraden
- **Farbsystem-Fundament:** tailwind.config.ts mit trust-blue, safety-orange, go-green etc. ist eine starke Basis, die nur konsequenter genutzt werden muss
- **Dropdown-Navbar:** Die Header-Logik mit DropdownMenu-Komponente und Hover-Timeouts ist solide implementiert
- **Strukturierter Footer:** 4-Spalten-Footer mit Newsletter-Form ist vollstaendig und korrekt aufgebaut
- **Seiten-Struktur:** Branchenspezifische Unterseiten (schwertransport-genehmigung, spedition-software etc.) zeigen einen reifes SEO-Fundament

### Groe groesste Schwachpunkte
1. **Keine Animationen obwohl framer-motion installiert** — das ist der groesste Low-Hanging-Fruit: animations.ts ist fertig, wird aber in keiner Datei importiert
2. **Logo ist nur Text-Platzhalter** — "HP" in einem blue-900 Box wirkt unprofessionell
3. **Rohfarben statt Design-System** — text-blue-900, bg-orange-600 etc. ignorieren das vorhandene Custom-Color-System
4. **Keine Typografie-Hierarchie** — Inter everywhere, keine Display-Font fuer Headlines
5. **page.tsx ist monolithisch** — die gesamte Homepage in einer einzigen 297-Zeilen-Datei mit "use client" ohne Sections-Aufspaltung
