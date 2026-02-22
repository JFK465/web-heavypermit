import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { Calendar } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Schwertransport-Genehmigung: Der komplette Guide 2026",
  description: "Alles was Sie über Schwertransport-Genehmigungen wissen müssen: Rechtliche Grundlagen, Beantragung, Kosten und Tipps.",
  keywords: ["Schwertransport Guide", "Genehmigung Schwertransport Anleitung", "Schwertransport Deutschland"],
  canonical: "/blog/schwertransport-genehmigung-guide",
});

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Calendar className="w-4 h-4" />
            <span>15. Februar 2026</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">Ratgeber</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Schwertransport-Genehmigung: Der komplette Guide
          </h1>

          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              In diesem Guide erfahren Sie alles über Schwertransport-Genehmigungen in Deutschland:
              von den rechtlichen Grundlagen über die Beantragung bis hin zu Kosten und praktischen Tipps.
            </p>

            <h2>Was ist ein Schwertransport?</h2>
            <p>
              Ein Schwertransport liegt vor, wenn Fahrzeuge oder Ladungen bestimmte Grenzwerte
              überschreiten. Die genauen Werte sind in der Straßenverkehrs-Ordnung (StVO)
              und der Straßenverkehrs-Zulassungs-Ordnung (StVZO) geregelt.
            </p>

            <h3>Grenzwerte für Schwertransporte</h3>
            <ul>
              <li><strong>Gewicht:</strong> über 40 Tonnen oder einzelne Achslasten über 10 Tonnen</li>
              <li><strong>Breite:</strong> über 3 Meter</li>
              <li><strong>Höhe:</strong> über 4 Meter</li>
              <li><strong>Länge:</strong> über 20 Meter (Sattelzüge über 16,50m)</li>
            </ul>

            <h2>Wer erteilt die Genehmigung?</h2>
            <p>
              Zuständig sind in Deutschland verschiedene Behörden, abhängig vom Transportweg:
            </p>
            <ul>
              <li><strong>Landesämter für Straßenbau:</strong> für einzelne Bundesländer</li>
              <li><strong>Bundesanstalt für Straßenwesen (BASt):</strong> für bundesweite und grenzüberschreitende Transporte</li>
              <li><strong>Autobahnpolizei:</strong> für polizeiliche Begleitung</li>
            </ul>

            <h2>Beantragung einer Schwertransport-Genehmigung</h2>
            <p>
              Die Beantragung erfolgt idealerweise über das ViA-Portal der BASt. Dort können
              Sie sowohl Einzel- als auch Dauergenehmigungen beantragen.
            </p>

            <h3>Benötigte Unterlagen</h3>
            <ul>
              <li>Fahrzeugschein/e (Zulassungsbescheinigung)</li>
              <li>Versicherungsnachweis (Deckungsbestätigung)</li>
              <li>Streckenbeschreibung oder Routenplan</li>
              <li>technische Daten des Fahrzeugs</li>
            </ul>

            <h2>Kosten einer Schwertransport-Genehmigung</h2>
            <p>
              Die Kosten setzen sich aus verschiedenen Faktoren zusammen und sind in der
              Gebührenordnung für Maßnahmen im Straßenverkehr (GebOSt) festgelegt.
            </p>

            <h2>Fazit</h2>
            <p>
              Schwertransport-Genehmigungen sind ein komplexes Thema. Mit der richtigen
              Vorbereitung und Unterstützung können Sie jedoch Zeit sparen und Fehler vermeiden.
              HeavyPermit hilft Ihnen, den Überblick über alle Ihre Genehmigungen zu behalten.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
