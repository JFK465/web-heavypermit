import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSEOMetadata({
  title: "AGB - Allgemeine Geschäftsbedingungen",
  description: "Allgemeine Geschäftsbedingungen von HeavyPermit. Nutzungsbedingungen für das Genehmigungs-Management. Hier finden Sie alle rechtlichen Bedingungen.",
  keywords: ["HeavyPermit AGB", "Nutzungsbedingungen", "AGB Software"],
  canonical: "/agb",
});

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: "AGB", href: "/agb" }]} />

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Geltungsbereich
              </h2>
              <p className="text-gray-600">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der HeavyPermit GmbH (nachfolgend „Anbieter") und dem Kunden (nachfolgend „Nutzer") über die Nutzung der Software-as-a-Service-Lösung HeavyPermit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Vertragsgegenstand
              </h2>
              <p className="text-gray-600">
                Gegenstand des Vertrages ist die Bereitstellung der Software HeavyPermit über das Internet. HeavyPermit ist eine Anwendung zur Verwaltung von Schwertransport-Genehmigungen mit dem Ziel, die Einhaltung gesetzlicher Vorgaben zu unterstützen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Leistungsumfang
              </h2>
              <p className="text-gray-600 mb-4">
                Der Anbieter stellt dem Nutzer folgende Leistungen zur Verfügung:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Zugang zur HeavyPermit-Software über das Internet</li>
                <li>Speicherung und Verwaltung von Genehmigungsdaten</li>
                <li>Automatische Erinnerungsfunktionen</li>
                <li>Kalender- und Übersichtsfunktionen</li>
                <li>Export- und Berichtsfunktionen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Nutzungspflichten
              </h2>
              <p className="text-gray-600 mb-4">
                Der Nutzer verpflichtet sich:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Die Zugangsdaten vertraulich zu behandeln</li>
                <li>Die geltenden Gesetze einzuhalten</li>
                <li>Keine rechtswidrigen Inhalte zu speichern</li>
                <li>Die Software nicht für rechtswidrige Zwecke zu nutzen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Haftung
              </h2>
              <p className="text-gray-600">
                Die Haftung des Anbieters ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Die Software dient als Hilfsmittel zur Genehmigungsverwaltung. Eine Haftung für die Richtigkeit der Daten oder die Einhaltung gesetzlicher Vorschriften wird ausgeschlossen. Der Nutzer ist selbst verantwortlich für die Überprüfung der Genehmigungen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Datenschutz
              </h2>
              <p className="text-gray-600">
                Der Anbieter verarbeitet personenbezogene Daten gemäß der Datenschutzerklärung. Alle Daten werden auf Servern in Deutschland gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Vertragslaufzeit und Kündigung
              </h2>
              <p className="text-gray-600">
                Der Vertrag wird auf unbestimmte Zeit geschlossen. Beide Parteien können den Vertrag mit einer Frist von 30 Tagen zum Monatsende kündigen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Schlussbestimmungen
              </h2>
              <p className="text-gray-600">
                Es gilt deutsches Recht. Gerichtsstand ist der Sitz des Anbieters.
              </p>
            </section>

            <section className="pt-8 border-t">
              <p className="text-gray-500 text-sm">
                Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
