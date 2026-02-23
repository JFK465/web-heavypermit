import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { generateSEOMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generateSEOMetadata({
  title: "Kontakt - Jetzt unverbindlich anfragen",
  description: "Kontaktieren Sie das HeavyPermit Team. Wir beraten Sie gerne zu unserem Genehmigungs-Management für Schwertransporte. Jetzt Kontakt aufnehmen!",
  keywords: ["HeavyPermit Kontakt", "Genehmigungs-Management Kontakt", "Schwertransport Software Kontakt"],
  canonical: "/kontakt",
});

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: "Kontakt", href: "/kontakt" }]} />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Haben Sie Fragen zu HeavyPermit? Wir helfen Ihnen gerne weiter.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Kontaktformular */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nachricht senden
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Firma (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ihre Firma"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Wie können wir Ihnen helfen?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Kontaktinformationen */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Kontaktinformationen
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">E-Mail</h3>
                    <a href="mailto:info@heavypermit.de" className="text-gray-600 hover:text-blue-600">
                      info@heavypermit.de
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefon</h3>
                    <a href="tel:+49000000000" className="text-gray-600 hover:text-blue-600">
                      +49 (0) 000 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">
                      HeavyPermit<br />
                      123 Musterstraße<br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Öffnungszeiten</h3>
                    <p className="text-gray-600">
                      Mo - Fr: 9:00 - 17:00 Uhr
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Hinweis */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Schnelle Antwort?
                </h3>
                <p className="text-gray-600 text-sm">
                  Vielleicht finden Sie die Antwort auf Ihre Frage in unserem{' '}
                  <a href="/blog" className="text-blue-600 hover:underline">
                    Blog
                  </a>
                  {' '}oder auf der{' '}
                  <a href="/preise" className="text-blue-600 hover:underline">
                    Preise-Seite
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
