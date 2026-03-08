"use client";

import {
  CheckCircle2,
  FileText,
  Bell,
  Calendar,
  Truck,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { GlowBackground } from "@/components/ui/GlowBackground";
import { GradientText } from "@/components/ui/GradientText";
import { TextReveal } from "@/components/ui/TextReveal";
import { getAccentColor } from "@/lib/accent-colors";
import { blurIn, springIn } from "@/lib/animations";
import { useCountUp } from "@/components/hooks/useCountUp";

const featureIcons = [FileText, Calendar, Bell, Truck, Shield, TrendingUp];
const featureTitles = [
  "Genehmigungs-Upload",
  "Kalender-Ansicht",
  "Automatische Erinnerungen",
  "Kennzeichen-Matching",
  "Rechtliche Sicherheit",
  "Auswertungen & Reports",
];
const featureDescriptions = [
  "Laden Sie Ihre Genehmigungen hoch - ob PDF, Bild oder Scan. OCR-Erkennung extrahiert automatisch alle relevanten Daten.",
  "Alle Genehmigungen in einem Kalender. Nie wieder eine Verlaengerung verpassen.",
  "Erinnerungen per E-Mail, wenn Genehmigungen bald ablaufen. Rechtzeitig handeln.",
  "Ordnen Sie Genehmigungen automatisch den richtigen LKWs und Auftraegen zu.",
  "Unsere Datenbank kennt alle aktuellen Vorschriften. Automatische Aktualisierung.",
  "Analysieren Sie Ihre Genehmigungen. Kostenstellen, Fuhrpark, Verfallstatistiken.",
];

// ─── ROI Stats mit animierten Countern ───
function StatCounter({
  value,
  suffix,
  label,
  icon: Icon,
  iconClass,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  iconClass: string;
}) {
  const { count, ref } = useCountUp({ end: value, duration: 1600 });
  return (
    <div
      ref={ref}
      className="flex flex-col items-center p-6 border-2 border-foreground/10"
    >
      <Icon className={`w-8 h-8 ${iconClass} mb-3`} />
      <div className="text-4xl font-black text-foreground tracking-tight mb-1">
        {Math.round(count)}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-wider font-semibold text-muted-foreground text-center">
        {label}
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ═══════════════════════════════════════════════
          1. HERO — Split-Layout (Text links, Demo rechts)
          ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <GlowBackground intensity={8} className="absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* ── Linke Seite: Text ── */}
            <div className="flex-1 lg:max-w-xl">
              {/* Badge mit blurIn */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={blurIn}
                className="inline-block bg-orange-100 text-orange-800 px-4 py-2 text-sm font-semibold mb-6 border-2 border-orange-200"
              >
                Exklusive Beta - Limitierte Plaetze verfügbar
              </motion.div>

              {/* H1 mit TextReveal */}
              <TextReveal
                as="h1"
                className="heading-hero font-black text-foreground mb-6 text-balance"
              >
                Kann ich diesen Auftrag annehmen?
              </TextReveal>

              <AnimateOnScroll variant="fadeInUp" delay={0.3}>
                <p className="text-xl text-muted-foreground mb-8">
                  HeavyPermit zeigt Ihnen per Ampel-System, ob Ihre
                  Genehmigungen gültig sind. Vermeiden Sie Bussgelder und
                  Stilllegungen.
                </p>
              </AnimateOnScroll>

              {/* CTA-Buttons bold-industrial */}
              <AnimateOnScroll variant="fadeInUp" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/tools/genehmigungs-checker"
                    className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 border-2 border-primary hover:bg-primary/90 transition-colors duration-150 text-center uppercase tracking-wider text-sm"
                  >
                    Kostenloser Genehmigungs-Checker
                  </Link>
                  <Link
                    href="/preise"
                    className="inline-block border-2 border-foreground text-foreground font-semibold px-8 py-4 hover:bg-foreground hover:text-background transition-colors duration-150 text-center uppercase tracking-wider text-sm"
                  >
                    Preise ansehen
                  </Link>
                </div>
              </AnimateOnScroll>

              {/* Trust Chips */}
              <AnimateOnScroll variant="fadeInUp" delay={0.5}>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Beta kostenlos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Dann 499EUR/Monat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>DSGVO-konform</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* ── Rechte Seite: Demo-Box ── */}
            <AnimateOnScroll
              variant="slideInRight"
              delay={0.2}
              className="flex-1 w-full lg:max-w-xl"
            >
              <div className="relative">
                <div className="bg-white border-2 border-foreground/15 p-8">
                  <div className="space-y-6">
                    {/* Dashboard Header */}
                    <div className="flex items-center justify-between pb-4 border-b-2 border-foreground/10">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          Genehmigungs-Übersicht
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Alle Genehmigungen auf einen Blick
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      </div>
                    </div>

                    {/* Traffic Light Display */}
                    <div className="flex justify-center gap-8 py-6">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-green-500 shadow-lg shadow-green-500/50 flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-2xl font-bold">
                            OK
                          </span>
                        </div>
                        <div className="text-lg font-bold text-green-700 mb-1">
                          Gültig
                        </div>
                        <div className="text-xs text-gray-500">
                          12 Genehmigungen
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50 flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-2xl font-bold">
                            !
                          </span>
                        </div>
                        <div className="text-lg font-bold text-yellow-700 mb-1">
                          Laeuft ab
                        </div>
                        <div className="text-xs text-gray-500">
                          3 Genehmigungen
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-red-500 shadow-lg shadow-red-500/50 flex items-center justify-center mx-auto mb-3 animate-pulse">
                          <span className="text-white text-2xl font-bold">
                            X
                          </span>
                        </div>
                        <div className="text-lg font-bold text-red-700 mb-1">
                          Abgelaufen
                        </div>
                        <div className="text-xs text-gray-500">
                          1 Genehmigung
                        </div>
                      </div>
                    </div>

                    {/* Recent Items */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wider">
                        Aktuelle Genehmigungen
                      </h4>
                      <div className="flex items-center gap-4 p-3 bg-green-50 border-l-4 border-green-500">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 truncate text-sm">
                            Transport GmbH - Route A7
                          </div>
                          <div className="text-xs text-gray-500">
                            Nr: 2025-AT-001
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-sm font-medium text-green-700">
                            Gültig
                          </div>
                          <div className="text-xs text-gray-500">
                            Noch 45 Tage
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-yellow-50 border-l-4 border-yellow-500">
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 truncate text-sm">
                            Spedition Mueller - Schwerlast
                          </div>
                          <div className="text-xs text-gray-500">
                            Nr: 2025-AT-002
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-sm font-medium text-yellow-700">
                            14 Tage
                          </div>
                          <div className="text-xs text-gray-500">
                            15.03.2026
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-red-50 border-l-4 border-red-500">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0 animate-pulse"></div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 truncate text-sm">
                            Logistik Huber - Dauerlaubnis
                          </div>
                          <div className="text-xs text-gray-500">
                            Nr: 2024-AT-089
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-sm font-medium text-red-700">
                            Abgelaufen!
                          </div>
                          <div className="text-xs text-gray-500">
                            Seit 5 Tagen
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. FEATURES — Bold-Industrial Cards
          ═══════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-24 bg-foreground/[0.03]">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="heading-section font-black text-foreground mb-4">
                <GradientText from="from-blue-800" to="to-blue-600">
                  Alles,
                </GradientText>{" "}
                was Sie brauchen
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Vollständiges Genehmigungs-Management für den
                Schwerlasttransport
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {featureIcons.map((Icon, i) => {
              const accent = getAccentColor(i);
              return (
                <AnimateOnScroll key={i} variant="fadeInUp" delay={i * 0.05}>
                  <div className="border-2 border-foreground/10 p-6 hover:border-primary transition-colors duration-150 group bg-background">
                    <div
                      className={`w-12 h-12 ${accent.bg} border ${accent.border} flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${accent.icon}`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 uppercase tracking-wide">
                      {featureTitles[i]}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {featureDescriptions[i]}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. PRICING — Strukturierte Card bold-industrial
          ═══════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="heading-section font-black text-foreground mb-4">
                Transparenter Preis, keine versteckten Kosten
              </h2>
              <p className="text-lg text-muted-foreground">
                Profitieren Sie von unserem einfachen Preismodell
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="scaleIn" delay={0.15}>
            <div className="max-w-xl mx-auto">
              <div className="border-2 border-blue-900">
                {/* Farbiger Header */}
                <div className="bg-blue-900 px-8 py-6 text-white">
                  <div className="text-sm font-semibold uppercase tracking-widest text-blue-300 mb-2">
                    Vollzugang
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black">499EUR</span>
                    <span className="text-xl text-blue-300">/Monat</span>
                  </div>
                  <p className="text-blue-300 mt-2 text-sm">+ 20EUR pro LKW</p>
                </div>

                {/* Feature-Liste */}
                <div className="px-8 py-6 bg-background">
                  <ul className="space-y-3 mb-8">
                    {[
                      "Unbegrenzte Genehmigungen hochladen",
                      "OCR-Erkennung aller Formate",
                      "Automatische Ablauf-Erinnerungen",
                      "Kennzeichen-Matching für Auftraege",
                      "Rechtliche Vorschriften-Datenbank",
                      "Auswertungen & Kostenstellen-Reports",
                      "DSGVO-konforme Datenspeicherung",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/preise"
                    className="block w-full text-center border-2 border-blue-900 text-blue-900 font-semibold px-8 py-3 hover:bg-blue-900 hover:text-white transition-colors duration-150 uppercase tracking-wider text-sm"
                  >
                    Alle Preise ansehen
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. ROI-SECTION — Animierte Stat-Counter
          ═══════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-24 bg-foreground/[0.03]">
        <div className="container mx-auto px-4">
          <AnimateOnScroll variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="heading-section font-black text-foreground mb-4">
                Berechnen Sie Ihren ROI
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Wie viel können Sie durch HeavyPermit sparen?
              </p>
            </div>
          </AnimateOnScroll>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-0 mb-10">
              <AnimateOnScroll variant="fadeInUp" delay={0}>
                <StatCounter
                  value={5}
                  suffix="h"
                  label="pro Woche Zeitersparnis"
                  icon={Clock}
                  iconClass="text-blue-600"
                />
              </AnimateOnScroll>
              <AnimateOnScroll variant="fadeInUp" delay={0.1}>
                <StatCounter
                  value={100}
                  suffix="%"
                  label="Compliance-Sicherheit"
                  icon={Shield}
                  iconClass="text-green-600"
                />
              </AnimateOnScroll>
              <AnimateOnScroll variant="fadeInUp" delay={0.2}>
                <StatCounter
                  value={0}
                  suffix="EUR"
                  label="Bussgelder durch Zeitersparnis"
                  icon={TrendingUp}
                  iconClass="text-orange-600"
                />
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll variant="fadeInUp" delay={0.3}>
              <div className="text-center">
                <Link
                  href="/tools/roi-rechner"
                  className="inline-block border-2 border-foreground text-foreground font-semibold px-8 py-3 hover:bg-foreground hover:text-background transition-colors duration-150 uppercase tracking-wider text-sm"
                >
                  ROI-Rechner starten
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. CTA-SECTION — Eigene starke Section
          ═══════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50" />
        <div className="relative z-10 container mx-auto px-4">
          <AnimateOnScroll variant="slideInLeft" delay={0}>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block border-2 border-primary text-primary px-4 py-1 text-xs font-bold uppercase tracking-widest mb-6">
                Jetzt starten
              </div>

              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-foreground mb-6">
                Bereit für den{" "}
                <GradientText from="from-blue-700" to="to-orange-500">
                  Start?
                </GradientText>
              </h2>

              <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                Testen Sie HeavyPermit jetzt kostenlos in der Beta-Phase. Keine
                Kreditkarte erforderlich.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={springIn}
                >
                  <Link
                    href="/tools/genehmigungs-checker"
                    className="inline-block border-2 border-primary bg-primary text-primary-foreground font-semibold px-10 py-4 hover:bg-primary/90 transition-colors duration-150 uppercase tracking-wider text-sm"
                  >
                    Kostenloser Genehmigungs-Checker
                  </Link>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                        delay: 0.1,
                      },
                    },
                  }}
                >
                  <Link
                    href="/preise"
                    className="inline-block border-2 border-foreground text-foreground font-semibold px-10 py-4 hover:bg-foreground hover:text-background transition-colors duration-150 uppercase tracking-wider text-sm"
                  >
                    Preise ansehen
                  </Link>
                </motion.div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
