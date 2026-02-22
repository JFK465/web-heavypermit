'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.heavypermit.de'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">HP</span>
            </div>
            <span className="font-bold text-gray-900 hidden sm:inline">
              HeavyPermit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Tools Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setOpenDropdown('tools')}
                className="px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-1 font-medium text-gray-700"
              >
                Tools
                <ChevronDown className="w-4 h-4" />
              </button>

              {openDropdown === 'tools' && (
                <div
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-xl py-2"
                >
                  <Link
                    href="/tools/genehmigungs-checker"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <div className="font-semibold text-gray-900">Genehmigungs-Checker</div>
                    <div className="text-xs text-gray-600">Prüfen ob Genehmigung gültig</div>
                  </Link>
                  <Link
                    href="/tools/roi-rechner"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <div className="font-semibold text-gray-900">ROI-Rechner</div>
                    <div className="text-xs text-gray-600">Zeitersparnis berechnen</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setOpenDropdown('blog')}
                className="px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-1 font-medium text-gray-700"
              >
                Blog
                <ChevronDown className="w-4 h-4" />
              </button>

              {openDropdown === 'blog' && (
                <div
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-xl py-2"
                >
                  <Link
                    href="/blog"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <div className="font-semibold text-gray-900">Alle Artikel</div>
                    <div className="text-xs text-gray-600">Ratgeber & Expertenwissen</div>
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link
                    href="/blog/schwertransport-genehmigung-guide"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <div className="font-semibold text-gray-900">Schwertransport-Genehmigung Guide</div>
                    <div className="text-xs text-gray-600">Alles was Sie wissen müssen</div>
                  </Link>
                  <Link
                    href="/blog/genehmigungs-pflichten-spediteure"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    <div className="font-semibold text-gray-900">Genehmigungspflichten für Speditionen</div>
                    <div className="text-xs text-gray-600">Rechtliche Grundlagen</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Preise Link */}
            <Link
              href="/preise"
              className="px-4 py-2 rounded-lg hover:bg-gray-100 transition font-medium text-gray-700"
            >
              Preise
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`${APP_URL}/auth/login`}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition"
            >
              Login
            </a>
            <a
              href={`${APP_URL}/beta-signup`}
              className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold transition"
            >
              Kostenlos testen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-2">
              {/* Tools */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-tools')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg font-medium flex items-center justify-between"
                >
                  Tools
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-tools' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-tools' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/tools/genehmigungs-checker" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      Genehmigungs-Checker
                    </Link>
                    <Link href="/tools/roi-rechner" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      ROI-Rechner
                    </Link>
                  </div>
                )}
              </div>

              {/* Blog */}
              <Link href="/blog" className="px-4 py-2 hover:bg-gray-100 rounded-lg font-medium">
                Blog
              </Link>

              {/* Preise */}
              <Link href="/preise" className="px-4 py-2 hover:bg-gray-100 rounded-lg font-medium">
                Preise
              </Link>

              <div className="border-t border-gray-200 my-2"></div>

              <a href={`${APP_URL}/auth/login`} className="px-4 py-2 hover:bg-gray-100 rounded-lg font-medium">
                Login
              </a>
              <a href={`${APP_URL}/beta-signup`} className="mx-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold text-center block">
                Kostenlos testen
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
