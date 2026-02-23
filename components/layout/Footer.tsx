import Link from 'next/link'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.heavypermit.de'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Bleiben Sie informiert
            </h3>
            <p className="text-gray-400 mb-6">
              Erhalten Sie aktuelle Informationen zu Genehmigungen, Rechtstipps und Neuigkeiten von HeavyPermit.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
              >
                Abonnieren
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Wir respektieren Ihre Privatsphäre. Sie können sich jederzeit abmelden.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Spalte 1: Produkt */}
          <div>
            <h4 className="font-bold text-white mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/funktionen" className="hover:text-white transition">
                  Funktionen
                </Link>
              </li>
              <li>
                <Link href="/preise" className="hover:text-white transition">
                  Preise
                </Link>
              </li>
              <li>
                <Link href="/tools/genehmigungs-checker" className="hover:text-white transition">
                  Genehmigungs-Checker
                </Link>
              </li>
              <li>
                <Link href="/tools/roi-rechner" className="hover:text-white transition">
                  ROI-Rechner
                </Link>
              </li>
              <li>
                <a href={`${APP_URL}/beta-signup`} className="hover:text-white transition">
                  Kostenlos testen
                </a>
              </li>
            </ul>
          </div>

          {/* Spalte 2: Lösungen */}
          <div>
            <h4 className="font-bold text-white mb-4">Lösungen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/loesungen" className="hover:text-white transition">
                  Lösungen
                </Link>
              </li>
              <li>
                <Link href="/schwertransport-genehmigung" className="hover:text-white transition">
                  Schwertransport
                </Link>
              </li>
              <li>
                <Link href="/spedition-software" className="hover:text-white transition">
                  Speditionen
                </Link>
              </li>
              <li>
                <Link href="/grossraumtransport-genehmigung" className="hover:text-white transition">
                  Großraumtransport
                </Link>
              </li>
              <li>
                <Link href="/lkw-genehmigung" className="hover:text-white transition">
                  LKW-Genehmigung
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Wissen */}
          <div>
            <h4 className="font-bold text-white mb-4">Wissen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/wissen" className="hover:text-white transition">
                  Wissen & Ratgeber
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/blog/schwertransport-genehmigung-guide" className="hover:text-white transition">
                  Genehmigung Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/genehmigungs-pflichten-spediteure" className="hover:text-white transition">
                  Genehmigungspflichten
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Rechtliches & Kontakt */}
          <div>
            <h4 className="font-bold text-white mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/kontakt" className="hover:text-white transition">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-white transition">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-white transition">
                  AGB
                </Link>
              </li>
              <li>
                <a href={`${APP_URL}/auth/login`} className="hover:text-white transition">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              DSGVO-konform
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
              Made in Germany
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              SSL-verschlüsselt
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-white mb-1">
                HeavyPermit
              </p>
              <p className="text-sm text-gray-400">
                Genehmigungs-Management für Schwertransporte
              </p>
            </div>
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} HeavyPermit. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
