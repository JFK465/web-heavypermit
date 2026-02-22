import Link from 'next/link'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.heavypermit.de'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Spalte 1: Produkt */}
          <div>
            <h4 className="font-bold text-white mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
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

          {/* Spalte 2: Wissen */}
          <div>
            <h4 className="font-bold text-white mb-4">Wissen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Alle Blog-Artikel
                </Link>
              </li>
              <li>
                <Link href="/blog/schwertransport-genehmigung-guide" className="hover:text-white transition">
                  Schwertransport-Genehmigung Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/genehmigungs-pflichten-spediteure" className="hover:text-white transition">
                  Genehmigungspflichten
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Unternehmen */}
          <div>
            <h4 className="font-bold text-white mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm">
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
                <a href={`${APP_URL}/auth/login`} className="hover:text-white transition">
                  Login
                </a>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Kontakt */}
          <div>
            <h4 className="font-bold text-white mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@heavypermit.de" className="hover:text-white transition">
                  info@heavypermit.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Untere Zeile */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-white mb-1">
                HeavyPermit
              </p>
              <p className="text-sm text-gray-400">
                Genehmigungs-Management für Schwertransporte
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/impressum" className="hover:text-white transition">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-white transition">
                Datenschutz
              </Link>
            </div>
          </div>
          <p className="text-xs mt-6 text-gray-500 text-center">
              © {new Date().getFullYear()} HeavyPermit. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
