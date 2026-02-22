import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { Calendar } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Genehmigungspflichten für Speditionen - Was Sie wissen müssen",
  description: "Welche Genehmigungspflichten gelten für Speditionen bei Schwertransporten? Rechtliche Übersicht und praktische Tipps.",
  keywords: ["Genehmigungspflichten Spedition", "Spedition Rechtliches", "Transportrecht Deutschland"],
  canonical: "/blog/genehmigungs-pflichten-spediteure",
});

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Calendar className="w-4 h-4" />
            <span>10. Februar 2026</span>
            <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full text-xs">Rechtliches</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Genehmigungspflichten für Speditionen
          </h1>

          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Als Spedition müssen Sie zahlreiche Genehmigungspflichten beachten.
              Dieser Artikel gibt Ihnen einen Überblick über die wichtigsten Regelungen.
            </p>

            <h2>Grundlagen der Genehmigungspflicht</h2>
            <p>
              Nach § 29 Abs. 3 StVO können von den allgemeinen Verkehrsregeln Ausnahmen
              genehmigt werden, wenn dies zur Durchführung von Transporten mit
              außergewöhnlichen Abmessungen oder Gewichten erforderlich ist.
            </p>

            <h2>Arten von Genehmigungen</h2>

            <h3>1. Einzelgenehmigung</h3>
            <p>
              Gilt für einen einzelnen Transport mit festgelegter Route, Datum und Uhrzeit.
              Die Bearbeitungszeit beträgt in der Regel 2-4 Wochen.
            </p>

            <h3>2. Dauergenehmigung</h3>
            <p>
              Gilt für regelmäßig wiederkehrende Transporte auf derselben Route.
              Die Gültigkeitsdauer kann bis zu 3 Jahre betragen.
            </p>

            <h3>3. Erlaubnisbescheinigung</h3>
            <p>
              Für grenzüberschreitende Transporte innerhalb Europas ist eine
              Erlaubnisbescheinigung erforderlich.
            </p>

            <h2>Pflichten des Transportunternehmers</h2>
            <ul>
              <li>Gültige Genehmigung vor Transportbeginn vorhanden</li>
              <li>Genehmigung während des Transports mitführen</li>
              <li>Auflagen der Genehmigung einhalten</li>
              <li>Erforderliche Begleitfahrzeuge einsetzen</li>
              <li>Route wie genehmigt fahren</li>
            </ul>

            <h2>Konsequenzen bei Verstößen</h2>
            <p>
              Das Fahren ohne gültige Genehmigung kann erhebliche Konsequenzen haben:
            </p>
            <ul>
              <li>Bußgelder von 500€ bis 10.000€</li>
              <li>Stilllegung des Fahrzeugs</li>
              <li>Punkte in Flensburg</li>
              <li>Bei wiederholten Verstößen: Entzug der Erlaubnis</li>
            </ul>

            <h2>Fazit</h2>
            <p>
              Die Einhaltung der Genehmigungspflichten ist für Speditionen essentiell.
              Mit einer guten Verwaltung und automatischen Erinnerungen können Sie
              teure Fehler vermeiden.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
