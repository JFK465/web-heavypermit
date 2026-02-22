import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { CheckCircle2, FileText, Shield, Truck, Calendar, Bell, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
  title: "Schwertransport Genehmigung - Alles was Sie wissen müssen",
  description: "Erfordernis, Beantragung, Kosten und Gültigkeit von Schwertransport-Genehmigungen in Deutschland. So vermeiden Sie Bußgelder.",
  keywords: ["Schwertransport Genehmigung", "Schwertransport Genehmigung Deutschland", "Großraumtransport Genehmigung", "Genehmigung Schwertransport"],
  canonical: "/schwertransport-genehmigung",
});

export default function SchwertransportGenehmigungPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link> / <span className="text-gray-700">Schwertransport Genehmigung</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Schwertransport Genehmigung in Deutschland
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Alles was Sie über Genehmigungen für Schwertransporte wissen müssen:
            Von der Beantragung bis zur Gültigkeit.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/tools/genehmigungs-checker"
              className="inline-flex items-center gap-2 bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition"
            >
              <FileText className="w-5 h-5" />
              Genehmigung prüfen
            </Link>
            <Link
              href="/tools/roi-rechner"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              <Shield className="w-5 h-5" />
              ROI berechnen
            </Link>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Was ist eine Schwertransport Genehmigung */}
          <section className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Was ist eine Schwertransport Genehmigung?
            </h2>
            <p className="text-gray-600 mb-4">
              Eine Schwertransport Genehmigung ist eine behördliche Erlaubnis, die es Ihnen ermöglicht,
              Transportfahrten mit außergewöhnlichen Abmessungen (Überbreite, Überhöhe, Überlänge)
              oder mit einem außergewöhnlichen Gewicht durchzuführen.
            </p>
            <p className="text-gray-600">
              In Deutschland sind dafür verschiedene Behörden zuständig: Die Landesämter für Straßenbau
              und Verkehr für einzelne Bundesländer oder die Bundesanstalt für Straßenwesen (BASt) für
              bundesweite Genehmigungen.
            </p>
          </section>

          {/* Wann wird eine Genehmigung benötigt */}
          <section className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Wann wird eine Genehmigung benötigt?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-800 mb-2">Genehmigungspflichtig</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Übergewicht ab 40 t (bei Achslasten über 10t)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Überbreite über 3m</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Überhöhe über 4m</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Überlänge über 20m (Sattelzug)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-2">Ohne Genehmigung möglich</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Normaltransporte bis 40t</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Standardabmessungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>innerhalb regulärer Strecken</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Beantragung */}
          <section className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Wie beantragt man eine Schwertransport Genehmigung?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Antrag stellen</h3>
                  <p className="text-gray-600">Stellen Sie den Antrag online über das ViA-Projekt der BASt oder bei Ihrem zuständigen Landesamt.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Route prüfen lassen</h3>
                  <p className="text-gray-600">Die Behörde prüft die Route auf Streckeneignung und genehmigt eventuelle Begleitfahrzeuge.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Genehmigung erhalten</h3>
                  <p className="text-gray-600">Nach Bearbeitung (i.d.R. 2-4 Wochen) erhalten Sie die Genehmigung mit Auflagen und Gültigkeitsdauer.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Kosten */}
          <section className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Kosten einer Schwertransport Genehmigung
            </h2>
            <p className="text-gray-600 mb-4">
              Die Kosten setzen sich aus verschiedenen Gebühren zusammen und richten sich nach
              Gewicht, Abmessungen und Streckenlänge:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between"><span>Grundgebühr:</span> <span className="font-medium">30€ - 100€</span></li>
                <li className="flex justify-between"><span>Je Tonne Übergewicht:</span> <span className="font-medium">1€ - 5€</span></li>
                <li className="flex justify-between"><span>Je km Strecke:</span> <span className="font-medium">0,50€ - 2€</span></li>
                <li className="flex justify-between"><span>Eilantrag (Zuschlag):</span> <span className="font-medium">+50%</span></li>
              </ul>
            </div>
          </section>

          {/* Bußgelder */}
          <section className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Bußgelder bei fehlender Genehmigung
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-red-800 font-semibold mb-2">
                Achtung: Fahren ohne gültige Genehmigung kann teuer werden!
              </p>
              <ul className="space-y-1 text-gray-700">
                <li>• Bußgeld: 500€ - 10.000€</li>
                <li>• Stilllegung des Fahrzeugs</li>
                <li>• Punkte in Flensburg</li>
                <li>• Mögliche strafrechtliche Konsequenzen</li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Nie wieder eine Genehmigung vergessen
            </h2>
            <p className="text-blue-100 mb-6">
              HeavyPermit hilft Ihnen, den Überblick über alle Genehmigungen zu behalten.
              Automatische Erinnerungen, wenn Genehmigungen ablaufen.
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
