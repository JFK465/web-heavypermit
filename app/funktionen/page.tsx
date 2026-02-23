import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSEOMetadata({
  title: "Funktionen - Alle Features im Überblick",
  description: "Entdecken Sie alle HeavyPermit Funktionen: Ampel-System, automatische Erinnerungen, Kalender-Ansicht, OCR-Erkennung und mehr. Jetzt kostenlos testen!",
  keywords: ["HeavyPermit Funktionen", "Genehmigungs-Management Features", "Schwertransport Software Features"],
  canonical: "/funktionen",
});

export default function FunktionenPage() {
  const features = [
    {
      title: "Ampel-System",
      description: "Auf einen Blick sehen Sie, ob Ihre Genehmigungen gültig sind (grün), bald ablaufen (gelb) oder bereits abgelaufen sind (rot).",
      icon: "🚦",
    },
    {
      title: "Automatische Erinnerungen",
      description: "Erhalten Sie E-Mail-Benachrichtigungen, wenn Genehmigungen bald ablaufen. Rechtzeitig handeln und Bußgelder vermeiden.",
      icon: "🔔",
    },
    {
      title: "Kalender-Ansicht",
      description: "Alle Genehmigungen in einem Kalender. Verpassen Sie keine Verlängerungen und behalten Sie den Überblick.",
      icon: "📅",
    },
    {
      title: "Genehmigungs-Upload",
      description: "Laden Sie Ihre Genehmigungen hoch - ob PDF, Bild oder Scan. OCR-Erkennung extrahiert automatisch alle relevanten Daten.",
      icon: "📤",
    },
    {
      title: "Kennzeichen-Matching",
      description: "Ordnen Sie Genehmigungen automatisch den richtigen LKWs und Aufträgen zu. Keine Zuordnungsfehler mehr.",
      icon: "🚛",
    },
    {
      title: "Auswertungen & Reports",
      description: "Analysieren Sie Ihre Genehmigungen nach Kostenstellen, Fuhrpark und Verfallstatistiken. Datengestützte Entscheidungen treffen.",
      icon: "📊",
    },
    {
      title: "Mehrere Benutzer",
      description: "Arbeiten Sie im Team. Verteilen Sie Rollen und Berechtigungen an Ihre Mitarbeiter.",
      icon: "👥",
    },
    {
      title: "Rechtliche Sicherheit",
      description: "Unsere Datenbank kennt alle aktuellen Vorschriften. Automatische Aktualisierung bei Gesetzesänderungen.",
      icon: "⚖️",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: "Funktionen", href: "/funktionen" }]} />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Alle Funktionen im Überblick
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            HeavyPermit bietet alles, was Sie für professionelles Genehmigungs-Management benötigen.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Überzeugt?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Testen Sie alle Funktionen jetzt kostenlos in der Beta-Phase.
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
