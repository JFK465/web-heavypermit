'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.heavypermit.de'

interface NavDropdown {
  label: string;
  items: { name: string; href: string; description?: string }[];
}

function DropdownMenu({ dropdown }: { dropdown: NavDropdown }) {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [])

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
        {dropdown.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div className="absolute left-0 right-0 h-2" />
          <div className="absolute left-0 top-full pt-2 w-64 z-50">
            <div className="bg-white rounded-lg shadow-lg border p-2 animate-in fade-in slide-in-from-top-1 duration-150">
              {dropdown.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2.5 rounded-md text-sm hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-900">{item.name}</span>
                  {item.description && (
                    <span className="block text-xs text-gray-500 mt-0.5">{item.description}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  const navDropdowns: NavDropdown[] = [
    {
      label: 'Produkt',
      items: [
        { name: 'Funktionen', href: '/funktionen', description: 'Alle Features im Überblick' },
        { name: 'Preise', href: '/preise', description: 'Transparent und fair' },
        { name: 'Genehmigungs-Checker', href: '/tools/genehmigungs-checker', description: 'Kostenlos testen' },
        { name: 'ROI-Rechner', href: '/tools/roi-rechner', description: 'Ersparnis berechnen' },
      ],
    },
    {
      label: 'Lösungen',
      items: [
        { name: 'Lösungen', href: '/loesungen', description: 'Branchenspezifisch' },
        { name: 'Schwertransport-Genehmigung', href: '/schwertransport-genehmigung', description: 'Für Schwertransporte' },
        { name: 'Spedition-Software', href: '/spedition-software', description: 'Für Speditionen' },
        { name: 'Großraumtransport', href: '/grossraumtransport-genehmigung', description: 'Für Großraumtransporte' },
        { name: 'LKW-Genehmigung', href: '/lkw-genehmigung', description: 'Für LKW-Transporte' },
      ],
    },
    {
      label: 'Wissen',
      items: [
        { name: 'Wissen', href: '/wissen', description: 'Ratgeber & Expertenwissen' },
        { name: 'Blog', href: '/blog', description: 'Aktuelle Artikel' },
      ],
    },
  ]

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
            {navDropdowns.map((dropdown) => (
              <DropdownMenu key={dropdown.label} dropdown={dropdown} />
            ))}

            {/* Preise Link - kein Dropdown */}
            <Link
              href="/preise"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
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
              Anmelden
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
              {/* Produkt Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-produkt')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg font-medium flex items-center justify-between"
                >
                  Produkt
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-produkt' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-produkt' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/funktionen" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      Funktionen
                    </Link>
                    <Link href="/preise" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      Preise
                    </Link>
                    <Link href="/tools/genehmigungs-checker" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      Genehmigungs-Checker
                    </Link>
                    <Link href="/tools/roi-rechner" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      ROI-Rechner
                    </Link>
                  </div>
                )}
              </div>

              {/* Lösungen Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-loesungen')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg font-medium flex items-center justify-between"
                >
                  Lösungen
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-loesungen' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-loesungen' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/loesungen" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      Lösungen
                    </Link>
                    <Link href="/schwertransport-genehmigung" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      Schwertransport
                    </Link>
                    <Link href="/spedition-software" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      Spedition
                    </Link>
                    <Link href="/grossraumtransport-genehmigung" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      Großraumtransport
                    </Link>
                    <Link href="/lkw-genehmigung" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      LKW-Genehmigung
                    </Link>
                  </div>
                )}
              </div>

              {/* Wissen Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-wissen')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg font-medium flex items-center justify-between"
                >
                  Wissen
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-wissen' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'mobile-wissen' && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/wissen" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      Wissen
                    </Link>
                    <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-lg">
                      Blog
                    </Link>
                  </div>
                )}
              </div>

              {/* Preise */}
              <Link href="/preise" className="px-4 py-2 hover:bg-gray-100 rounded-lg font-medium">
                Preise
              </Link>

              <div className="border-t border-gray-200 my-2"></div>

              <a href={`${APP_URL}/auth/login`} className="px-4 py-2 hover:bg-gray-100 rounded-lg font-medium">
                Anmelden
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
