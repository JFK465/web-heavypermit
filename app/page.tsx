"use client";

import { CheckCircle2, FileText, Bell, Calendar, Truck, Shield, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Exklusive Beta - Limitierte Plaetze verfuegbar
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Kann ich diesen{" "}
            <span className="text-blue-900">Auftrag annehmen?</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            HeavyPermit zeigt Ihnen per Ampel-System, ob Ihre Genehmigungen gueltig sind.
            Vermeiden Sie Bussgelder und Stilllegungen.
          </p>

          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Beta kostenlos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Dann 499EUR/Monat</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>DSGVO-konform</span>
            </div>
          </div>
        </div>

        {/* Traffic Light Demo Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-orange-100 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border-2 border-gray-200">
              <div className="space-y-6">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between pb-4 border-b-2 border-gray-200">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Genehmigungs-Uebersicht</h3>
                    <p className="text-sm text-gray-500 mt-1">Alle Genehmigungen auf einen Blick</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  </div>
                </div>

                {/* Traffic Light Display */}
                <div className="flex justify-center gap-8 py-8">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-green-500 shadow-lg shadow-green-500/50 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-3xl">OK</span>
                    </div>
                    <div className="text-2xl font-bold text-green-700 mb-1">Gueltig</div>
                    <div className="text-sm text-gray-500">12 Genehmigungen</div>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-3xl">!</span>
                    </div>
                    <div className="text-2xl font-bold text-yellow-700 mb-1">Laeuft ab</div>
                    <div className="text-sm text-gray-500">3 Genehmigungen</div>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-red-500 shadow-lg shadow-red-500/50 flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <span className="text-white text-3xl">X</span>
                    </div>
                    <div className="text-2xl font-bold text-red-700 mb-1">Abgelaufen</div>
                    <div className="text-sm text-gray-500">1 Genehmigung</div>
                  </div>
                </div>

                {/* Recent Items */}
                <div className="space-y-3 pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Aktuelle Genehmigungen</h4>

                  <div className="flex items-center gap-4 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 truncate">Transport GmbH - Route A7</div>
                      <div className="text-xs text-gray-500">Genehmigungsnr: 2025-AT-001</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-medium text-green-700">Gueltig</div>
                      <div className="text-xs text-gray-500">Noch 45 Tage</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 truncate">Spedition Mueller - Schwerlast</div>
                      <div className="text-xs text-gray-500">Genehmigungsnr: 2025-AT-002</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-medium text-yellow-700">Laeuft in 14 Tagen ab</div>
                      <div className="text-xs text-gray-500">15.03.2026</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                    <div className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0 animate-pulse"></div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 truncate">Logistik Huber - Dauerlaubnis</div>
                      <div className="text-xs text-gray-500">Genehmigungsnr: 2024-AT-089</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-medium text-red-700">Abgelaufen!</div>
                      <div className="text-xs text-gray-500">Seit 5 Tagen</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Alles, was Sie brauchen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Genehmigungs-Upload
              </h3>
              <p className="text-gray-600">
                Laden Sie Ihre Genehmigungen hoch - ob PDF, Bild oder Scan.
                OCR-Erkennung extrahiert automatisch alle relevanten Daten.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kalender-Ansicht
              </h3>
              <p className="text-gray-600">
                Alle Genehmigungen in einem Kalender. Nie wieder eine Verlaengerung verpassen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Automatische Erinnerungen
              </h3>
              <p className="text-gray-600">
                Erinnerungen per E-Mail, wenn Genehmigungen bald ablaufen. Rechtzeitig handeln.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kennzeichen-Matching
              </h3>
              <p className="text-gray-600">
                Ordnen Sie Genehmigungen automatisch den richtigen LKWs und Auftraegen zu.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Rechtliche Sicherheit
              </h3>
              <p className="text-gray-600">
                Unsere Datenbank kennt alle aktuellen Vorschriften. Automatische Aktualisierung.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Auswertungen & Reports
              </h3>
              <p className="text-gray-600">
                Analysieren Sie Ihre Genehmigungen. Kostenstellen, Fuhrpark, Verfallstatistiken.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Teaser */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Transparenter Preis, keine versteckten Kosten
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Profitieren Sie von unserem einfachen Preismodell
            </p>
            <div className="text-5xl font-bold mb-4">
              499EUR<span className="text-2xl font-normal">/Monat</span>
            </div>
            <p className="text-blue-200 mb-8">+ 20EUR pro LKW</p>
            <Link
              href="/preise"
              className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Alle Preise ansehen
            </Link>
          </div>
        </div>

        {/* ROI Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-gray-200 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Berechnen Sie Ihren ROI
            </h2>
            <p className="text-gray-600 mb-8">
              Wie viel koennen Sie durch HeavyPermit sparen?
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">5h</div>
                <div className="text-sm text-gray-600">pro Woche Zeitersparnis</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Compliance-Sicherheit</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">0EUR</div>
                <div className="text-sm text-gray-600">Bussgelder durch Zeitersparnis</div>
              </div>
            </div>
            <Link
              href="/tools/roi-rechner"
              className="inline-block bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition"
            >
              ROI-Rechner starten
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bereit fuer den Start?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Testen Sie HeavyPermit jetzt kostenlos in der Beta-Phase.
              Keine Kreditkarte erforderlich.
            </p>
            <Link
              href="/tools/genehmigungs-checker"
              className="inline-block bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-orange-700 transition text-lg mr-4"
            >
              Kostenloser Genehmigungs-Checker
            </Link>
            <Link
              href="/preise"
              className="inline-block bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 transition text-lg"
            >
              Preise ansehen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
