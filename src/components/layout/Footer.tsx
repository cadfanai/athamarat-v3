import Link from 'next/link'
import { COMPANY, NAV, CLIENTS } from '@/lib/content'
import { WAIcon } from '@/components/ui/WAIcon'

export function Footer() {
  return (
    <footer className="bg-green-900 text-white/70">
      <div className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 opacity-90">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="40" cy="64" rx="32" ry="12" fill="#38b257"/>
                  <path d="M24 50 C18 38 22 26 34 24 C32 36 28 44 24 50Z" fill="#4dc76a"/>
                  <path d="M56 50 C62 38 58 26 46 24 C48 36 52 44 56 50Z" fill="#4dc76a"/>
                  <path d="M40 52 C34 40 34 26 40 18 C46 26 46 40 40 52Z" fill="#5ee07a"/>
                  <circle cx="40" cy="14" r="6" fill="#f59620"/>
                </svg>
              </div>
              <span className="font-display text-xl font-bold">
                <span className="text-white">Atha</span><span className="text-orange-400">marat</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-6">
              {COMPANY.description}
            </p>
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25d366]/20 border border-[#25d366]/40 text-[#4ade80] text-sm font-semibold rounded-xl hover:bg-[#25d366]/30 transition-all">
              <WAIcon size={16} /> {COMPANY.phone}
            </a>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {['By Problem', 'By Solution', 'All Products', 'Bundles', 'Wholesale'].map(l => (
                <li key={l}>
                  <Link href={`/shop${l === 'By Problem' ? '/by-problem' : l === 'By Solution' ? '/by-solution' : l === 'All Products' ? '' : l === 'Bundles' ? '/bundles' : '/wholesale'}`}
                    className="text-sm hover:text-orange-400 transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/why-ethical" className="hover:text-orange-400 transition-colors">Why Ethical</Link></li>
              <li><Link href="/about"       className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact"     className="hover:text-orange-400 transition-colors">Contact</Link></li>
              <li className="pt-3 border-t border-white/10 text-xs space-y-1.5">
                <div>TIN: {COMPANY.tin}</div>
                <div>VAT: {COMPANY.vat}</div>
                <div>{COMPANY.address}</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Countries */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[['🇪🇹','Ethiopia'],['🇸🇴','Somalia'],['🇰🇪','Kenya'],['🇩🇯','Djibouti'],['🇪🇷','Eritrea']].map(([flag, name]) => (
            <span key={name} className="px-3 py-1 bg-white/8 border border-white/15 rounded-full text-xs text-white/70">
              {flag} {name}
            </span>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Athamarat · {COMPANY.entity}. All rights reserved.</p>
          <p>Est. {COMPANY.established} · Jigjiga, Somali Regional State, Ethiopia</p>
        </div>
      </div>
    </footer>
  )
}
