import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Genehmigungspflichten für Schwertransporte - HeavyPermit",
  description: "Wann benötigen Sie eine Genehmigung für Schwertransporte? Alle rechtlichen Grundlagen und Grenzwerte im Überblick.",
};

export default function GenehmigungspflichtenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Wissen", href: "/wissen" },
            { name: "Genehmigungspflichten", href: "/wissen/genehmigungspflichten" },
          ]}
        />

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Genehmigungspflichten für Schwertransporte
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Wann benötigen Sie eine Genehmigung für Schwertransporte? Hier erfahren Sie alles über die rechtlichen Grundlagen.
          </p>

          <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Wann besteht Genehmigungspflicht?
              </h2>
              <p className="text-gray-600 mb-4">
                In Deutschland besteht Genehmigungspflicht für Schwertransporte, wenn bestimmte Grenzwerte überschritten werden. Die genauen Werte sind im Straßenverkehrsgesetz (StVG) und der Straßenverkehrs-Ordnung (StVO) geregelt.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Gesamtgewicht über 40 Tonnen</li>
                <li>Achslast über 10 Tonnen</li>
                <li>Breite über 2,55 Meter (Kühlfahrzeuge: 2,60 Meter)</li>
                <li>Höhe über 4,00 Meter</li>
                <li>Länge über 16,50 Meter (Sattelzug: 16,50 m, Gliederzug: 18,75 m)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Zuständige Behörden
              </h2>
              <p className="text-gray-600 mb-4">
                Für die Erteilung von Schwertransport-Genehmigungen sind in Deutschland verschiedene Behörden zuständig:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Straßenverkehrsbehörden</strong> für einzelne Bundesländer</li>
                <li><strong>Bundesamt für Logistik und Mobilität (BALM)</strong> für bundesweite Transporte</li>
                <li><strong>Autobahnpolizei</strong> für escorthpflichtige Transporte</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Genehmigungsarten
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Einzelgenehmigung</h3>
                  <p className="text-gray-600">
                    Für einen einzelnen Transport mit spezifischer Route, Datum und Ladung. Gilt nur für diesen einen Transport.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Dauergenehmigung</h3>
                  <p className="text-gray-600">
                    Für regelmäßig wiederkehrende Transporte mit gleicher Route. Gilt für einen längeren Zeitraum (meist 1-3 Jahre).
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Erlaubnis nach § 70 StVO</h3>
                  <p className="text-gray-600">
                    Für Ausnahmetransporte mit besonders schweren oder großen Ladungen. Wird nur in begründeten Ausnahmefällen erteilt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Antragstellung
              </h2>
              <p className="text-gray-600 mb-4">
                Genehmigungsanträge sollten mindestens 2-4 Wochen vor dem geplanten Transport gestellt werden. Bei komplexen Routen oder grenzüberschreitenden Transporten kann die Bearbeitung länger dauern.
              </p>
              <p className="text-gray-600">
                Folgende Unterlagen werden in der Regel benötigt:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Fahrzeugzulassung und Versicherungsnachweis</li>
                <li>Ladeschein oder technische Daten des Ladeguts</li>
                <li>Streckenplan mit Alternativrouten</li>
                <li>Genehmigung der Straßenträger (bei besonderen Wegen)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bußgelder bei fehlender Genehmigung
              </h2>
              <p className="text-gray-600 mb-4">
                Wer ohne erforderliche Genehmigung fährt, riskiert erhebliche Bußgelder:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Fehlende Genehmigung: bis zu 500 Euro</li>
                <li>Überschreitung des Genehmigten Gewichts: nach Gewicht gestaffelt</li>
                <li>Fehlende Begleitfahrzeuge: bis zu 1.000 Euro</li>
                <li>Stilllegung des Fahrzeugs bei schweren Verstößen</li>
              </ul>
            </section>

            <section className="pt-8 border-t">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Fazit
              </h2>
              <p className="text-gray-600">
                Die Genehmigungspflichten für Schwertransporte sind komplex, aber mit der richtigen Vorbereitung lassen sich Bußgelder und Verzögerungen vermeiden. HeavyPermit hilft Ihnen, den Überblick über alle Genehmigungen zu behalten und Fristen nicht zu verpassen.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-blue-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Genehmigungen im Blick behalten
            </h2>
            <p className="text-blue-100 mb-6">
              Testen Sie HeavyPermit jetzt kostenlos.
            </p>
            <a
              href="https://app.heavypermit.de/beta-signup"
              className="inline-block bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Kostenlos testen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
