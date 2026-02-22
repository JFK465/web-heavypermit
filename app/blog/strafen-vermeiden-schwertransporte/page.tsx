import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { Calendar } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Strafen bei fehlender Genehmigung vermeiden",
  description: "Was kostet das Fahren ohne Genehmigung? Bußgelder, Stilllegung und wie Sie diese vermeiden.",
  keywords: ["Strafen Schwertransport", "Bussgeld ohne Genehmigung", "Stilllegung LKW"],
  canonical: "/blog/strafen-vermeiden-schwertransporte",
});

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Calendar className="w-4 h-4" />
            <span>5. Februar 2026</span>
            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-xs">Tipps</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Strafen bei fehlender Genehmigung vermeiden
          </h1>

          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Ein einziger Fehler kann Tausende Euro kosten. Erfahren Sie, wie Sie
              Strafen und Bußgelder bei Schwertransporten vermeiden.
            </p>

            <h2>Welche Strafen drohen?</h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <h3 className="font-bold text-red-800 mb-2">Bußgelder</h3>
              <ul>
                <li>Fahren ohne Genehmigung: 500€ - 10.000€</li>
                <li>Überschreitung der genehmigten Werte: 150€ - 3.000€</li>
                <li>Nichtmitführen der Genehmigung: 50€ - 200€</li>
                <li>Missachtung von Auflagen: 100€ - 500€</li>
              </ul>
            </div>

            <h2>Weitere Konsequenzen</h2>
            <ul>
              <li><strong>Stilllegung:</strong> Das Fahrzeug kann vor Ort stillgelegt werden</li>
              <li><strong>Punkte:</strong> Eintragung in das Fahreignungsregister (bis 3 Punkte)</li>
              <li><strong>Strafverfahren:</strong> Bei grober Fahrlässigkeit strafrechtliche Konsequenzen</li>
              <li><strong>Schadenersatz:</strong> Bei Schäden an Infrastruktur haftbar</li>
            </ul>

            <h2>So vermeiden Sie Strafen</h2>

            <h3>1. Gute Verwaltung</h3>
            <p>
              Führen Sie eine zentrale Übersicht über alle Genehmigungen mit
              Ablaufdaten und Gültigkeitsbereichen.
            </p>

            <h3>2. Rechtzeitige Verlängerung</h3>
            <p>
              Beantragen Sie Verlängerungen frühzeitig - mindestens 4 Wochen
              vor Ablauf der Genehmigung.
            </p>

            <h3>3. Automatische Kontrolle</h3>
            <p>
              Nutzen Sie Software, die Sie automatisch an bald ablaufende
              Genehmigungen erinnert.
            </p>

            <h3>4. Checklisten</h3>
            <p>
              Erstellen Sie eine Checkliste für jeden Transport, die alle
              erforderlichen Dokumente und Genehmigungen abfragt.
            </p>

            <h2>Fazit</h2>
            <p>
              Mit der richtigen Vorbereitung und Verwaltung können Sie Strafen
              vermeiden und gleichzeitig Zeit und Geld sparen.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
