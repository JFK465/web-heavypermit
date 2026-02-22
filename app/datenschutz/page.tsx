import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSEOMetadata({
  title: "Datenschutz - HeavyPermit",
  description: "Datenschutzerklärung von HeavyPermit - Ihre Daten sind bei uns sicher",
  canonical: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Allgemeine Hinweise
            </h3>
            <p className="text-gray-600 mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie diese Website
              besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
              persönlich identifiziert werden können. Ausführliche Informationen zum
              Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
              Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Datenerfassung auf dieser Website
            </h3>
            <p className="text-gray-600 mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
            </p>
            <p className="text-gray-600 mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser
              Website entnehmen.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Hosting
            </h2>
            <p className="text-gray-600 mb-4">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Vercel</strong><br />
              Vercel Inc.<br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723<br />
              USA
            </p>
            <p className="text-gray-600 mb-4">
              Weitere Informationen zum Datenschutz bei Vercel finden Sie in der
              Datenschutzerklärung von Vercel: https://vercel.com/legal/privacy-policy
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Datenschutz
            </h3>
            <p className="text-gray-600 mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
              sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
              entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>
            <p className="text-gray-600 mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
              Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
              persönlich identifiziert werden können. Die vorliegende
              Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
              sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
              geschieht.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="text-gray-600 mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
              jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail
              an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
              Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="text-gray-600 mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Ortes des mutmaßlichen Verstoßes zu. Das Beschwerderecht
              besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Cookies
            </h3>
            <p className="text-gray-600 mb-4">
              Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind
              kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.
              Sie werden entweder vorübergehend für die Dauer einer Sitzung
              (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
              Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs
              automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
              gespeichert, bis Sie diese selbst löschen oder eine automatische
              Löschung durch Ihren Webbrowser erfolgt.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">
              Kontaktformular
            </h3>
            <p className="text-gray-600 mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
              Angaben aus dem Anfrageformular inklusive der dort angegebenen
              Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne
              Ihre Einwilligung weiter.
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
