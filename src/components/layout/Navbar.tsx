'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { COMPANY, NAV } from '@/lib/content'
import { WAIcon } from '@/components/ui/WAIcon'

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [shopOpen,  setShopOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="40" cy="64" rx="32" ry="12" fill="#1a6b2f"/>
                  <ellipse cx="40" cy="60" rx="28" ry="8" fill="#227a38"/>
                  <path d="M16 62 Q40 56 64 62" stroke="#2e9e4a" strokeWidth="1.5" fill="none" opacity="0.7"/>
                  <path d="M24 50 C18 38 22 26 34 24 C32 36 28 44 24 50Z" fill="#2e9e4a"/>
                  <path d="M56 50 C62 38 58 26 46 24 C48 36 52 44 56 50Z" fill="#2e9e4a"/>
                  <path d="M40 52 C34 40 34 26 40 18 C46 26 46 40 40 52Z" fill="#38b257"/>
                  <path d="M40 52 L40 18" stroke="#227a38" strokeWidth="1.2" fill="none"/>
                  <circle cx="40" cy="14" r="6" fill="#e07b00"/>
                  <line x1="40" y1="4" x2="40" y2="7" stroke="#f59620" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="50" y1="7" x2="48" y2="9" stroke="#f59620" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="30" y1="7" x2="32" y2="9" stroke="#f59620" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="53" y1="14" x2="50" y2="14" stroke="#f59620" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="27" y1="14" x2="30" y2="14" stroke="#f59620" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-display text-xl font-bold leading-none">
                <span className="text-green-900">Atha</span><span className="text-orange-500">marat</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map(item =>
                item.children ? (
                  <div key={item.label} className="relative group">
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-800 rounded-lg hover:bg-green-50 transition-all">
                      {item.label} <ChevronDown size={14} />
                    </button>
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="bg-white border border-stone rounded-xl shadow-xl py-2 min-w-[180px]">
                        {item.children.map(child => (
                          <Link key={child.href} href={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-green-800 hover:bg-green-50 transition-colors">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={item.label} href={item.href!}
                    className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-800 rounded-lg hover:bg-green-50 transition-all">
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-wa text-xs px-4 py-2">
                <WAIcon size={16} /> WhatsApp
              </a>
              <Link href="/wholesale" className="btn-primary text-xs px-4 py-2">
                Wholesale Enquiry
              </Link>
            </div>

            {/* Hamburger */}
            <button className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-green-50"
              onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-16 overflow-y-auto lg:hidden">
          <div className="container-main py-6 flex flex-col gap-2">
            {NAV.map(item =>
              item.children ? (
                <div key={item.label}>
                  <button onClick={() => setShopOpen(!shopOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-gray-800 rounded-xl hover:bg-green-50">
                    {item.label} <ChevronDown size={16} className={`transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {shopOpen && (
                    <div className="ml-4 flex flex-col gap-1 mt-1">
                      {item.children.map(child => (
                        <Link key={child.href} href={child.href} onClick={() => setMenuOpen(false)}
                          className="px-4 py-2.5 text-sm text-gray-600 rounded-xl hover:bg-green-50 hover:text-green-800">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} href={item.href!} onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-base font-semibold text-gray-800 rounded-xl hover:bg-green-50">
                  {item.label}
                </Link>
              )
            )}
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-stone">
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-wa justify-center">
                <WAIcon size={18} /> Chat on WhatsApp
              </a>
              <Link href="/wholesale" onClick={() => setMenuOpen(false)} className="btn-primary justify-center">
                Wholesale Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
