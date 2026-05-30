'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { COMPANY, NAV } from '@/lib/content'
import { WAIcon } from '@/components/ui/WAIcon'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container-main">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/athamarat-logo.png"
                alt="Athamarat"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
                priority
              />
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
                      <div className="bg-white border border-stone-200 rounded-xl shadow-xl py-2 min-w-[180px]">
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
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-stone-200">
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
