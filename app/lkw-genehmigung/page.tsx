import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { CheckCircle2, FileText, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
  title: "LKW Genehmigung online beantragen - Deutschland",
  description: "LKW Genehmigung für Schwertransporte online beantragen. Alle Informationen zu Kosten, Dauer und Anforderungen.",
  keywords: ["LKW Genehmigung", "LKW Genehmigung online", "LKW Genehmigung Deutschland", "Sattelzug Genehmigung"],
  canonical: "/lkw-genehmigung",
});

export default function LKWGenehmigungPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            LKW Genehmigung -online beantragen
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Wie Sie eine LKW Genehmigung für Schwertransporte in Deutschland beantragen.
          </p>

          <div className="space-y-8">
            <section className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Wann braucht ein LKW eine Genehmigung?
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span>Gewicht über 40 Tonnen</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Breite über 3 Meter</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Länge über 20 Meter</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Höhe über 4 Meter</span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                LKW Genehmigung online beantragen
              </h2>
              <p className="text-gray-600 mb-4">
                Die Beantragung erfolgt über das ViA-Portal der Bundesanstalt für Straßenwesen:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Registrierung im ViA-Portal</li>
                <li>Antrag mit Fahrzeugdaten und Route ausfüllen</li>
                <li>Erforderliche Unterlagen hochladen</li>
                <li>Antrag einreichen und Gebühr bezahlen</li>
                <li>Genehmigung per E-Mail erhalten</li>
              </ol>
            </section>

            <section className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">
                LKW Genehmigungen verwalten
              </h2>
              <p className="text-blue-100 mb-6">
                HeavyPermit hilft Ihnen, alle Ihre LKW Genehmigungen zu verwalten und keine zu vergessen.
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
    </div>
  );
}
