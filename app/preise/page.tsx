import { Check, Truck, Building2, Star } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSEOMetadata({
  title: "Preise - HeavyPermit",
  description:
    "Transparenter Preis für HeavyPermit: 499€/Monat Basis + 20€ pro LKW. Testen Sie jetzt kostenlos in der Beta!",
  keywords: ["HeavyPermit Preise", "Schwertransport Software Kosten", "Genehmigungs-Management Preis"],
  canonical: "/preise",
});

export default function PreisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparenter Preis, keine versteckten Kosten
          </h1>
          <p className="text-xl text-gray-600">
            Wählen Sie den Plan, der zu Ihrer Flottengröße passt. Alle Preise
            verstehen sich zzgl. gesetzlicher MwSt.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  499€<span className="text-lg font-normal text-gray-600">/Monat</span>
                </div>
                <p className="text-sm text-gray-500">+ 20€ pro LKW</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Bis zu 10 LKWs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Genehmigungs-Verwaltung</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Ampel-System</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>E-Mail-Erinnerungen</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span> Basis-Support</span>
                </li>
              </ul>
              <Link
                href="/tools/genehmigungs-checker"
                className="block text-center bg-gray-100 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
              >
                Kostenlos testen
              </Link>
            </div>

            {/* Professional Plan - Recommended */}
            <div className="bg-white rounded-2xl p-8 border-4 border-blue-900 shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Empfohlen
              </div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  499€<span className="text-lg font-normal text-gray-600">/Monat</span>
                </div>
                <p className="text-sm text-gray-500">+ 20€ pro LKW</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Unbegrenzte LKWs</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Alle Starter-Features</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>OCR-Erkennung</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Kalender-Integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Priority-Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>API-Zugang</span>
                </li>
              </ul>
              <Link
                href="/tools/genehmigungs-checker"
                className="block text-center bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition"
              >
                Kostenlos testen
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  Individuell
                </div>
                <p className="text-sm text-gray-500">Kontaktieren Sie uns</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Alle Professional-Features</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Multi-Mandanten</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Individuelle Integrationen</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Dedizierter Account-Manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>24/7 Premium-Support</span>
                </li>
              </ul>
              <Link
                href="/impressum"
                className="block text-center bg-gray-100 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
              >
                Kontaktieren Sie uns
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gibt es eine kostenlose Testphase?
              </h3>
              <p className="text-gray-600">
                Ja! In der Beta-Phase können Sie HeavyPermit kostenlos testen.
                Keine Kreditkarte erforderlich. Kontaktieren Sie uns für den Zugang.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Kann ich jederzeit kündigen?
              </h3>
              <p className="text-gray-600">
                Ja, Sie können jederzeit zum Monatsende kündigen. Es gibt keine
                Mindestlaufzeit oder versteckte Kündigungsgebühren.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Was passiert, wenn ich mehr LKWs habe als im Plan vorgesehen?
              </h3>
              <p className="text-gray-600">
                Sie zahlen einfach 20€ pro zusätzlichem LKW. Der Professional-Plan
                ist unbegrenzt, Sie zahlen also nie mehr als die Grundgebühr + 20€ pro LKW.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sind die Preise inklusive Mehrwertsteuer?
              </h3>
              <p className="text-gray-600">
                Alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer
                (aktuell 19%).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
