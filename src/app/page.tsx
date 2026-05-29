import Link from 'next/link'
import { ArrowRight, ShieldCheck, Leaf, BarChart3, Users } from 'lucide-react'
import { COMPANY, STATS, PROBLEMS, SOLUTIONS, PRODUCTS, BUNDLES, CLIENTS } from '@/lib/content'
import { WAIcon } from '@/components/ui/WAIcon'

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter(p => p.tier === 'GOLD').slice(0, 3)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-green-950 via-green-900 to-green-800 overflow-hidden pt-16">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />

        <div className="container-main relative z-10 py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white/90 mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Compliance-first · Ethical-only · Horn of Africa
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
              Grow more.<br />
              <span className="text-orange-400">Risk less.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-xl">
              East Africa's ethical source for biopesticides, IPM tools and organic crop inputs. Wholesale and retail — documented, compliant, trusted.
            </p>

            {/* Dual CTA — retail + wholesale */}
            <div className="flex flex-col sm:flex-row gap-3 mb-16">
              <Link href="/shop" className="btn-orange text-base px-7 py-4">
                Shop Products <ArrowRight size={18} />
              </Link>
              <Link href="/wholesale" className="inline-flex items-center gap-2 px-7 py-4 border-2 border-white/30 text-white font-semibold text-base rounded-xl hover:border-white/60 hover:bg-white/10 transition-all">
                Wholesale Enquiry
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
              {STATS.map(s => (
                <div key={s.label} className="bg-white/5 px-5 py-4 backdrop-blur-sm">
                  <div className="font-display text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/60 mt-1 font-medium uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOMER TYPE SPLIT ───────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/shop" className="group relative rounded-2xl overflow-hidden border-2 border-green-100 hover:border-green-500 p-8 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="font-display text-2xl font-bold text-green-900 mb-2">I'm a Farmer</h3>
              <p className="text-gray-500 mb-6">Buy single packs, starter kits and tools for your farm. Clear safe-use guidance included.</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 group-hover:gap-3 transition-all">
                Shop retail <ArrowRight size={16} />
              </span>
              <div className="absolute top-6 right-6 px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Retail</div>
            </Link>

            <Link href="/wholesale" className="group relative rounded-2xl overflow-hidden border-2 border-orange-100 hover:border-orange-500 p-8 transition-all hover:shadow-xl">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-display text-2xl font-bold text-green-900 mb-2">I'm a Business</h3>
              <p className="text-gray-500 mb-6">Wholesale pricing, bulk orders, proforma invoices and compliance documentation for distributors and agro-dealers.</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 group-hover:gap-3 transition-all">
                Wholesale enquiry <ArrowRight size={16} />
              </span>
              <div className="absolute top-6 right-6 px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">B2B</div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SHOP BY PROBLEM ───────────────────────────────────── */}
      <section className="section bg-sand">
        <div className="container-main">
          <p className="section-label">Quick find</p>
          <h2 className="section-title">Shop by Problem</h2>
          <p className="section-sub">What's affecting your crop? Find the right biological solution fast.</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {PROBLEMS.map(p => (
              <Link key={p.id} href={`/shop/by-problem/${p.id}`}
                className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-stone hover:border-green-400 hover:shadow-md transition-all group">
                <span className="text-4xl mb-3">{p.icon}</span>
                <span className="text-sm font-semibold text-gray-800 group-hover:text-green-800">{p.label}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/shop/by-problem" className="btn-secondary">
              View all problems <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SHOP BY SOLUTION ──────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-main">
          <p className="section-label">Product types</p>
          <h2 className="section-title">Shop by Solution</h2>
          <p className="section-sub">Every product is tagged with an ethical tier and compliance status per country.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {SOLUTIONS.map(s => (
              <Link key={s.id} href={`/shop/by-solution/${s.id}`}
                className="flex gap-4 p-6 rounded-2xl border border-stone hover:border-green-400 hover:shadow-lg transition-all group bg-white">
                <span className="text-3xl shrink-0">{s.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm group-hover:text-green-800">{s.label}</h3>
                    <span className={s.tier === 'GOLD' ? 'tier-gold' : 'tier-silver'}>
                      {s.tier}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ─────────────────────────────────── */}
      <section className="section bg-green-950">
        <div className="container-main">
          <p className="section-label text-orange-400">Gold tier picks</p>
          <h2 className="section-title text-white">Top Biocontrol Products</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {featuredProducts.map(p => (
              <div key={p.ref} className="bg-white/8 border border-white/15 rounded-2xl p-6 hover:bg-white/12 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="tier-gold">GOLD</span>
                  <div className="flex gap-1">
                    {Object.entries(p.compliance).map(([country, status]) => (
                      <span key={country} className={`compliance-${status.toLowerCase()} text-[10px]`}>
                        {country.slice(0,2).toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-display font-semibold text-white text-base mb-2">{p.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2">{p.description}</p>
                <div className="text-xs text-white/40 mb-4">MOQ: {p.minOrder}</div>
                <a href={`https://wa.me/${COMPANY.whatsapp}?text=I'm interested in ${encodeURIComponent(p.name)}`}
                  target="_blank" rel="noopener noreferrer" className="btn-wa w-full justify-center text-sm">
                  <WAIcon size={16} /> Enquire
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/shop" className="btn-orange">
              Browse all products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BUNDLES ───────────────────────────────────────────── */}
      <section className="section bg-sand">
        <div className="container-main">
          <p className="section-label">Ready-made kits</p>
          <h2 className="section-title">IPM Starter Bundles</h2>
          <p className="section-sub">Everything you need to start a proper programme — curated and pre-matched.</p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {BUNDLES.map(b => (
              <div key={b.ref} className="bg-white border border-stone rounded-2xl p-7 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display font-bold text-green-900 text-lg leading-tight max-w-xs">{b.name}</h3>
                  <span className={b.tier === 'GOLD' ? 'tier-gold shrink-0 ml-3' : 'tier-silver shrink-0 ml-3'}>{b.tier}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{b.description}</p>
                <ul className="space-y-1.5 mb-6">
                  {b.includes.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/${COMPANY.whatsapp}?text=I'm interested in the ${encodeURIComponent(b.name)}`}
                  target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-sm">
                  <WAIcon size={15} /> Request this bundle
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ETHICAL ───────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Our commitment</p>
              <h2 className="section-title">Why ethical inputs?</h2>
              <p className="section-sub">The region's regulations are tightening. Residue-sensitive export markets demand clean supply chains. We're ahead of the curve.</p>
              <div className="mt-8 space-y-4">
                {[
                  ['🌍', 'Export market compliance', 'European buyers require maximum residue limits. Ethical inputs keep your produce on their shelves.'],
                  ['🐝', 'Pollinator safe', 'Biological solutions protect bees and beneficial insects — critical for long-term farm productivity.'],
                  ['📋', 'Fully documented', 'Every product ships with label, SDS and batch COA. Required for institutional and export buyers.'],
                  ['⚖️', 'Regulation-proof', 'Kenya PCPB and regional regulators are actively banning conventional actives. We only supply what\'s clean.'],
                ].map(([icon, title, desc]) => (
                  <div key={title as string} className="flex gap-4 p-4 rounded-xl border border-stone hover:border-green-200 transition-all">
                    <span className="text-2xl shrink-0">{icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{title as string}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc as string}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/why-ethical" className="btn-primary">
                  Our full approach <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Tier visual */}
            <div className="space-y-4">
              {[
                { tier: 'GOLD', label: 'Pure Biocontrol', desc: 'Biopesticides, beneficial organisms, IPM tools', color: 'border-amber-300 bg-amber-50', badge: 'tier-gold' },
                { tier: 'SILVER', label: 'Organic Inputs', desc: 'Biostimulants, certified seeds, safe tools', color: 'border-slate-300 bg-slate-50', badge: 'tier-silver' },
                { tier: 'BRONZE', label: 'Low Toxicity Only', desc: 'Documented, permitted, country-verified', color: 'border-orange-300 bg-orange-50', badge: 'compliance-restricted' },
              ].map(t => (
                <div key={t.tier} className={`p-5 rounded-2xl border-2 ${t.color}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={t.badge}>{t.tier}</span>
                    <h4 className="font-semibold text-gray-900">{t.label}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{t.desc}</p>
                </div>
              ))}
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700 flex items-center gap-2">
                <span>🚫</span> Banned/restricted actives — never listed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS ───────────────────────────────────────────── */}
      <section className="section bg-sand">
        <div className="container-main">
          <p className="section-label">Proven track record</p>
          <h2 className="section-title">Trusted since 2006</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {CLIENTS.map(c => (
              <div key={c.name} className="bg-white border border-stone rounded-2xl p-5 hover:shadow-md transition-all">
                <h4 className="font-display font-bold text-green-900 mb-1">{c.name}</h4>
                <p className="text-xs text-gray-500 mb-2">{c.detail}</p>
                <span className="inline-block px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-full">{c.years}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section className="section bg-green-800">
        <div className="container-main text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-4">Ready to order?</h2>
          <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
            Retail orders, wholesale enquiries and custom quotes — all handled via WhatsApp within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Athamarat%20products.`}
              target="_blank" rel="noopener noreferrer" className="btn-wa text-base px-8 py-4">
              <WAIcon size={20} /> Chat on WhatsApp
            </a>
            <Link href="/wholesale" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-all">
              Wholesale Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
