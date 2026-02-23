import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Bußgelder bei Schwertransporten vermeiden - HeavyPermit",
  description: "Häufige Verstöße und wie Sie diese mit der richtigen Verwaltung und Planung vermeiden können.",
};

export default function BussgeldVermeidenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { name: "Wissen", href: "/wissen" },
            { name: "Bußgelder vermeiden", href: "/wissen/bussgeld-vermeiden" },
          ]}
        />

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bußgelder bei Schwertransporten vermeiden
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Die häufigsten Verstöße und wie Sie diese mit der richtigen Verwaltung und Planung vermeiden.
          </p>

          <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Häufige Verstöße im Überblick
              </h2>
              <p className="text-gray-600 mb-4">
                Bei Schwertransporten gibt es typische Verstöße, die immer wieder vorkommen. Mit der richtigen Vorbereitung lassen sich diese vermeiden.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 font-semibold">Verstoß</th>
                      <th className="text-left py-3 font-semibold">Bußgeld</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b">
                      <td className="py-3">Fehlende Genehmigung</td>
                      <td className="py-3">bis 500 EUR</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Überschreitung Gesamtgewicht</td>
                      <td className="py-3">bis 1.000 EUR</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Überschreitung Achslast</td>
                      <td className="py-3">bis 500 EUR</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Fehlende Begleitfahrzeuge</td>
                      <td className="py-3">bis 1.000 EUR</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Nicht mitführen der Genehmigung</td>
                      <td className="py-3">10 EUR</td>
                    </tr>
                    <tr>
                      <td className="py-3">Falsche Angaben im Antrag</td>
                      <td className="py-3">bis 500 EUR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Wie Sie Verstöße vermeiden
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 mb-2">1. Genehmigungen frühzeitig beantragen</h3>
                  <p className="text-green-800">
                    Stellen Sie Genehmigungsanträge mindestens 2-4 Wochen im Voraus. So haben Sie genügend Zeit für eventuelle Nachfragen.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 mb-2">2. Genehmigungen im Blick behalten</h3>
                  <p className="text-green-800">
                    Führen Sie eine zentrale Übersicht aller Genehmigungen mit Ablaufdaten. Nutzen Sie Tools wie HeavyPermit für automatische Erinnerungen.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 mb-2">3. Dokumente immer dabei haben</h3>
                  <p className="text-green-800">
                    Führen Sie alle relevanten Dokumente immer im Fahrzeug mit: Genehmigung, Ladeschein, Fahrzeugpapiere.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 mb-2">4. Regelmäßig prüfen</h3>
                  <p className="text-green-800">
                    Kontrollieren Sie vor jedem Transport die Gültigkeit der Genehmigung und die Angaben im Genehmigungsbescheid.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Was bei einer Kontrolle zu tun ist
              </h2>
              <p className="text-gray-600 mb-4">
                Wenn Sie bei einer Kontrolle erwischt werden, beachten Sie folgende Punkte:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Bleiben Sie ruhig und professionell</li>
                <li>Halten Sie alle Dokumente bereit</li>
                <li>Machen Sie keine Aussagen ohne rechtlichen Beistand</li>
                <li>Notieren Sie sich den Namen des Beamten</li>
                <li>Fordern Sie eine schriftliche Begründung an</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Kosten durch Stilllegung
              </h2>
              <p className="text-gray-600 mb-4">
                Bei schweren Verstößen kann das Fahrzeug stillgelegt werden. Die Kosten dafür sind erheblich:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Abschleppen: 200-500 EUR</li>
                <li>Standgeld: 50-100 EUR pro Tag</li>
                <li>Umladen der Ladung: je nach Aufwand</li>
                <li>Verlust des Auftrags und Imageschaden</li>
              </ul>
            </section>

            <section className="pt-8 border-t">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Fazit
              </h2>
              <p className="text-gray-600">
                Bußgelder und Stilllegungen können vermieden werden. Mit einer guten Organisation, frühzeitiger Planung und einem zuverlässigen Genehmigungs-Management bleiben Sie compliant und sparen Zeit und Geld.
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-blue-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Nie wieder Bußgelder
            </h2>
            <p className="text-blue-100 mb-6">
              HeavyPermit erinnert Sie rechtzeitig an ablaufende Genehmigungen.
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
