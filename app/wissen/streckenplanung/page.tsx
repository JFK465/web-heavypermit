import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Streckenplanung für Schwertransporte - HeavyPermit",
  description: "So planen Sie optimale Routen für Schwertransporte unter Berücksichtigung aller Vorschriften und Genehmigungen.",
};

export default function StreckenplanungPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Wissen", href: "/wissen" },
            { name: "Streckenplanung", href: "/wissen/streckenplanung" },
          ]}
        />

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Streckenplanung für Schwertransporte
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Wie Sie optimale Routen für Schwertransporte planen und alle Vorschriften berücksichtigen.
          </p>

          <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Grundlagen der Streckenplanung
              </h2>
              <p className="text-gray-600 mb-4">
                Die Planung von Routen für Schwertransporte erfordert deutlich mehr Aufwand als bei normalen LKW-Transports. Neben den üblichen Faktoren wie Entfernung und Verkehr müssen zahlreiche weitere Aspekte berücksichtigt werden.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Brückenhöhen und Tragfähigkeiten</li>
                <li>Engstellen und schmale Straßen</li>
                <li>Steigungen und Gefälle</li>
                <li>Baustellen und Sperrungen</li>
                <li>Tempolimits für schwere Fahrzeuge</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Genehmigungspflichtige Strecken
              </h2>
              <p className="text-gray-600 mb-4">
                Nicht alle Straßen sind für Schwertransporte freigegeben. Bestimmte Streckenabschnitte erfordern besondere Genehmigungen oder sind komplett gesperrt.
              </p>
              <p className="text-gray-600">
                Informieren Sie sich vorab bei den zuständigen Straßenverkehrsbehörden über:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Autobahnen mit Sperrungen für Schwertransporte</li>
                <li>Bundesstraßen mit Gewichtsbeschränkungen</li>
                <li>Ortsdurchfahrten mit Durchfahrtsverboten</li>
                <li>Brücken mit Tragfähigkeitsbeschränkungen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Planungstools und Hilfsmittel
              </h2>
              <p className="text-gray-600 mb-4">
                Moderne Software-Lösungen unterstützen bei der Routenplanung. HeavyPermit bietet Ihnen eine Übersicht über alle relevanten Strecken und warnt Sie vor problematischen Abschnitten.
              </p>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Tipp:</h3>
                <p className="text-blue-800">
                  Planen Sie immer eine Alternativroute ein. So sind Sie vor Verzögerungen durch unvorhergesehene Ereignisse wie Unfälle oder Straßensperrungen geschützt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Zeitliche Planung
              </h2>
              <p className="text-gray-600 mb-4">
                Bei der Streckenplanung spielt auch der Zeitfaktor eine wichtige Rolle:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Verkehrsarme Zeiten:</strong> Meiden Sie Stoßzeiten und Hauptverkehrszeiten</li>
                <li><strong>Feiertage:</strong> An Feiertagen gelten oft Sonderregelungen</li>
                <li><strong>Escort-Zeiten:</strong> Begleitfahrzeuge sind nicht rund um die Uhr verfügbar</li>
                <li><strong>Behördenzeiten:</strong> Genehmigungen gelten oft nur zu bestimmten Zeiten</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Dokumentation
              </h2>
              <p className="text-gray-600 mb-4">
                Führen Sie alle relevanten Dokumente immer mit:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Genehmigungsbescheid</li>
                <li>Ladeschein</li>
                <li>Fahrzeugpapiere</li>
                <li>Versicherungsnachweise</li>
                <li>Kontaktdaten der zuständigen Behörden</li>
              </ul>
            </section>

            <section className="pt-8 border-t">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Fazit
              </h2>
              <p className="text-gray-600">
                Eine sorgfältige Streckenplanung ist der Schlüssel zu erfolgreichen Schwertransporten. Mit der richtigen Vorbereitung und einem guten Genehmigungs-Management vermeiden Sie Verzögerungen und Bußgelder.
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
