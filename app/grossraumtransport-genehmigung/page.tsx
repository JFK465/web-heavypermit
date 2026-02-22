import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { CheckCircle2, FileText, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
  title: "Großraumtransport Genehmigung - Was Sie wissen müssen",
  description: "Genehmigung für Großraumtransporte: Abmessungen, Kosten und Beantragung in Deutschland. So funktioniert's.",
  keywords: ["Grossraumtransport Genehmigung", "Grossraumtransport Genehmigung Deutschland", "Sondertransporte Genehmigung", "Ausnahmetransport"],
  canonical: "/grossraumtransport-genehmigung",
});

export default function GrossraumtransportGenehmigungPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link> / <Link href="/schwertransport-genehmigung" className="hover:text-blue-600">Schwertransport</Link> / <span className="text-gray-700">Großraumtransport</span>
        </div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Großraumtransport Genehmigung
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Alles über Genehmigungen für Großraumtransporte in Deutschland.
          </p>

          <div className="space-y-8">
            {/* Abmessungen */}
            <section className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Wann brauche ich eine Großraumtransport Genehmigung?
              </h2>
              <p className="text-gray-600 mb-4">
                Ein Großraumtransport liegt vor, wenn die Ladung folgende Grenzwerte überschreitet:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="font-bold text-red-700 w-32">Breite:</span>
                  <span>über 2,55m (Kühlfahrzeuge: 2,60m)</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="font-bold text-red-700 w-32">Höhe:</span>
                  <span>über 4,00m</span>
                </li>
                <li className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <span className="font-bold text-red-700 w-32">Länge:</span>
                  <span>über 15m (Sattelzug: über 16,50m)</span>
                </li>
              </ul>
            </section>

            {/* Genehmigungsarten */}
            <section className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Arten von Großraumtransport Genehmigungen
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h3 className="font-semibold text-blue-900 mb-2">Dauergenehmigung</h3>
                  <p className="text-gray-600">Gilt für regelmäßig wiederkehrende Transporte auf derselben Route. Gültig bis zu 3 Jahren.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <h3 className="font-semibold text-green-900 mb-2">Einzelgenehmigung</h3>
                  <p className="text-gray-600">Gilt für einen einzelnen Transport mit festgelegter Route und Datum.</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-xl">
                  <h3 className="font-semibold text-yellow-900 mb-2">Erlaubnisbescheinigung</h3>
                  <p className="text-gray-600">Für grenzüberschreitende Transporte innerhalb Europas erforderlich.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">
                Genehmigungen im Überblick behalten
              </h2>
              <p className="text-blue-100 mb-6">
                Mit HeavyPermit haben Sie alle Ihre Großraumtransport Genehmigungen immer im Blick.
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
