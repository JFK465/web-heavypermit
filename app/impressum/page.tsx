import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = generateSEOMetadata({
  title: "Impressum - Kontakt und rechtliche Informationen",
  description: "Impressum von HeavyPermit. Hier finden Sie alle rechtlichen Informationen, Kontaktdaten und Firmendetails. Genehmigungs-Management für Schwertransporte.",
  keywords: ["HeavyPermit Impressum", "Firma Kontakt", "rechtliche Informationen"],
  canonical: "/impressum",
});

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: "Impressum", href: "/impressum" }]} />

        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Angaben gemäß § 5 TMG
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Verantwortlich
            </h2>
            <p className="text-gray-600 mb-4">
              HeavyPermit<br />
              Inhaber: Jonas Kruger<br />
              [Straße und Hausnummer]<br />
              [PLZ Ort]<br />
              Deutschland
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kontakt
            </h2>
            <p className="text-gray-600 mb-4">
              E-Mail: info@heavypermit.de
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Registereintrag
            </h2>
            <p className="text-gray-600 mb-4">
              [Handelsregistereintrag]<br />
              [Registergericht]<br />
              [Registernummer]
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Umsatzsteuer-ID
            </h2>
            <p className="text-gray-600 mb-4">
              [Umsatzsteuer-ID gemäß §27a Umsatzsteuergesetz]
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Haftung für Inhalte
            </h2>
            <p className="text-gray-600 mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
              §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
              überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
            <p className="text-gray-600 mb-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
              von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Haftung für Links
            </h2>
            <p className="text-gray-600 mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="text-gray-600 mb-4">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
              ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Urheberrecht
            </h2>
            <p className="text-gray-600 mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
              Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
              sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-gray-600 mb-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
              Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
              eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Inhalte umgehend entfernen.
            </p>

            <p className="text-gray-500 mt-12">
              Stand: [Datum]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
