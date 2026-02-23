import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BookOpen, ArrowRight } from "lucide-react";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSEOMetadata({
  title: "Wissen & Ratgeber - Expertenwissen für Speditionen",
  description: "Wissenswertes rund um Schwertransport-Genehmigungen. Rechtliche Grundlagen, Tipps zur Streckenplanung und Vermeidung von Bußgeldern. Jetzt lesen!",
  keywords: ["Schwertransport Wissen", "Genehmigung Ratgeber", "Spedition Wissen", "Bußgeld vermeiden"],
  canonical: "/wissen",
});

const wissenTopics = [
  {
    title: "Genehmigungspflichten",
    description: "Wann benötigen Sie eine Genehmigung für Schwertransporte? Alle rechtlichen Grundlagen im Überblick.",
    href: "/wissen/genehmigungspflichten",
    icon: "⚖️",
  },
  {
    title: "Streckenplanung",
    description: "So planen Sie optimale Routen für Schwertransporte unter Berücksichtigung aller Vorschriften.",
    href: "/wissen/streckenplanung",
    icon: "🗺️",
  },
  {
    title: "Bußgelder vermeiden",
    description: "Häufige Verstöße und wie Sie diese mit der richtigen Verwaltung vermeiden.",
    href: "/wissen/bussgeld-vermeiden",
    icon: "🚨",
  },
  {
    title: "Dokumentation",
    description: "Welche Dokumente Sie für Schwertransporte benötigen und wie Sie diese organisieren.",
    href: "/wissen/dokumentation",
    icon: "📄",
  },
];

export default function WissenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: "Wissen", href: "/wissen" }]} />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Wissen & Ratgeber
            </h1>
            <p className="text-xl text-gray-600">
              Expertenwissen rund um Schwertransport-Genehmigungen für Speditionen und Transportunternehmen.
            </p>
          </div>

          {/* Themen-Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {wissenTopics.map((topic, index) => (
              <Link
                key={index}
                href={topic.href}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{topic.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600">
                      {topic.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 font-medium">
                      <span>Mehr lesen</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Blog-Teaser */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Aktuelle Blog-Artikel
              </h2>
            </div>
            <div className="space-y-4">
              <Link
                href="/blog/schwertransport-genehmigung-guide"
                className="block p-4 rounded-lg hover:bg-gray-50 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">
                  Schwertransport-Genehmigung: Der complete Guide
                </h3>
                <p className="text-sm text-gray-600">
                  Alles was Sie über Genehmigungen wissen müssen.
                </p>
              </Link>
              <Link
                href="/blog/genehmigungs-pflichten-spediteure"
                className="block p-4 rounded-lg hover:bg-gray-50 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">
                  Genehmigungspflichten für Speditionen
                </h3>
                <p className="text-sm text-gray-600">
                  Rechtliche Grundlagen im Überblick.
                </p>
              </Link>
              <Link
                href="/blog/strafen-vermeiden-schwertransporte"
                className="block p-4 rounded-lg hover:bg-gray-50 transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">
                  Strafen bei Schwertransporten vermeiden
                </h3>
                <p className="text-sm text-gray-600">
                  So bleiben Sie compliant und sparen Geld.
                </p>
              </Link>
            </div>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              Alle Blog-Artikel ansehen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-blue-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Genehmigungen einfach verwalten
            </h2>
            <p className="text-blue-100 mb-6">
              Testen Sie HeavyPermit jetzt kostenlos und behalten Sie den Überblick.
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
