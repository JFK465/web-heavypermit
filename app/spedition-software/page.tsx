import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { CheckCircle2, FileText, Shield, Truck, Calendar, Bell, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
  title: "Spedition Software - Software für Speditionen und Schwertransporte",
  description: "Die richtige Software für Speditionen: Transportmanagement, Genehmigungsverwaltung und Fuhrpark-Disposition. Optimize your operations.",
  keywords: ["Spedition Software", "Software Spedition", "Transportsoftware", "Fuhrpark Software", "Speditionssoftware Deutschland"],
  canonical: "/spedition-software",
});

export default function SpeditionSoftwarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link> / <span className="text-gray-700">Spedition Software</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Software für Speditionen und Schwertransporte
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Die richtige Software für Ihre Spedition: Von der Genehmigungsverwaltung
            bis zur kompletten Transport-Disposition.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/tools/roi-rechner"
              className="inline-flex items-center gap-2 bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition"
            >
              <TrendingUp className="w-5 h-5" />
              ROI berechnen
            </Link>
            <Link
              href="/preise"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Preise ansehen
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Was kann Spedition Software */}
          <section className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Was kann moderne Spedition Software?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                <FileText className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Genehmigungsverwaltung</h3>
                  <p className="text-sm text-gray-600">Zentrale Verwaltung aller Schwertransport-Genehmigungen mit Ablaufkontrolle</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <Calendar className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Tourenplanung</h3>
                  <p className="text-sm text-gray-600">Optimierte Routenplanung unter Berücksichtigung von Genehmigungen</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-xl">
                <Truck className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Fuhrpark-Management</h3>
                  <p className="text-sm text-gray-600">Komplette Übersicht über alle Fahrzeuge, Wartung und Einsätze</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                <Bell className="w-8 h-8 text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Automatische Erinnerungen</h3>
                  <p className="text-sm text-gray-600">Erinnerungen an Verlängerungen, Wartungen und Genehmigungsabläufe</p>
                </div>
              </div>
            </div>
          </section>

          {/* Vorteile */}
          <section className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Vorteile von Spedition Software
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Zeitersparnis</h3>
                  <p className="text-gray-600">Keine manuellen Excel-Listen mehr. Alle Daten zentral und sofort verfügbar.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Vermeidung von Bußgeldern</h3>
                  <p className="text-gray-600">Automatische Kontrolle verhindert teure Fehler durch abgelaufene Genehmigungen.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Bessere Auslastung</h3>
                  <p className="text-gray-600">Optimierte Tourenplanung erhöht die Auslastung und reduziert Leerfahrten.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Rechtssicherheit</h3>
                  <p className="text-gray-600">Alle Nachweise jederzeit verfügbar für Audits und Kontrollen.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Für wen geeignet */}
          <section className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Für wen ist Spedition Software geeignet?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Speditionen</h3>
                <p className="text-sm text-gray-600">Alle Arten von Speditionen, von Fernverkehr bis Spezialtransporte</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Schwerlast-Transporte</h3>
                <p className="text-sm text-gray-600">Speziell für Unternehmen mit Genehmigungspflichtigen Transporten</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Fuhrparks</h3>
                <p className="text-sm text-gray-600">Betriebe mit eigenen LKW-Flotten für Materialtransporte</p>
              </div>
            </div>
          </section>

          {/* Kosten */}
          <section className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Kosten von Spedition Software
            </h2>
            <p className="text-gray-600 mb-6">
              Die Kosten für Spedition Software variieren je nach Funktionsumfang und Anbieter:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">ab 50€</div>
                  <p className="text-gray-600">pro Monat<br/>(Basis-Version)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">ab 200€</div>
                  <p className="text-gray-600">pro Monat<br/>(Profi-Version)</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">individuell</div>
                  <p className="text-gray-600">Enterprise<br/>(maßgeschneidert)</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-4">
              HeavyPermit bietet eine transparente Preisgestaltung: 499€/Monat + 20€/LKW.
              Keine versteckten Kosten, keine Setup-Gebühren.
            </p>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Optimieren Sie Ihre Spedition
            </h2>
            <p className="text-blue-100 mb-6">
              Testen Sie HeavyPermit jetzt kostenlos und sehen Sie, wie viel Zeit und Geld Sie sparen können.
            </p>
            <Link
              href="/tools/genehmigungs-checker"
              className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Kostenlos testen <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
