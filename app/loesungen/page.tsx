import { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { Truck, Building2, Package, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
  title: "Lösungen - HeavyPermit für verschiedene Branchen",
  description: "HeavyPermit Lösungen für Speditionen, Bauunternehmen, Maschinenbau und weitere Branchen mit Schwertransport-Bedarf.",
  keywords: ["Loesungen Schwertransport", "Branchenloesungen Spedition", "Genehmigungsmanagement Branchen"],
  canonical: "/loesungen",
});

export default function LoesungenPage() {
  const branchen = [
    {
      icon: Truck,
      name: "Speditionen",
      beschreibung: "Spezialisierte Speditionen für Schwer- und Großraumtransporte",
      features: [
        "Zentrale Genehmigungsverwaltung",
        "Fuhrpark-Übersicht",
        "Automatische Erinnerungen",
        "Team-Zugriff",
      ],
      link: "/tools/genehmigungs-checker",
    },
    {
      icon: Building2,
      name: "Bauunternehmen",
      beschreibung: "Bauunternehmen mit eigenen Transporten von Baumaschinen",
      features: [
        "Baumaschinen-Transporte",
        "Baustellen-Management",
        "Kostenstellen-Zuordnung",
        "Dokumenten-Ablage",
      ],
      link: "/tools/genehmigungs-checker",
    },
    {
      icon: Package,
      name: "Maschinenbau",
      beschreibung: "Unternehmen aus dem Maschinen- und Anlagenbau",
      features: [
        "Produkt-Transporte",
        "Kundenspezifische Genehmigungen",
        "Historie und Archiv",
        "Export-Funktionen",
      ],
      link: "/tools/genehmigungs-checker",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lösungen für Ihre Branche
          </h1>
          <p className="text-xl text-gray-600">
            HeavyPermit passt sich an Ihre Anforderungen an - egal ob Spedition,
            Bauunternehmen oder Maschinenbau.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {branchen.map((branche) => (
              <div key={branche.name} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <branche.icon className="w-8 h-8 text-blue-900" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {branche.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  {branche.beschreibung}
                </p>
                <ul className="space-y-2 mb-6">
                  {branche.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={branche.link}
                  className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:gap-3 transition"
                >
                  Mehr erfahren <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Passende Lösung gefunden?
            </h2>
            <p className="text-blue-100 mb-6">
              Testen Sie HeavyPermit jetzt kostenlos in der Beta-Phase.
            </p>
            <Link
              href="/tools/genehmigungs-checker"
              className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              Kostenlos starten <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
