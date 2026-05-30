import { BUNDLES, TIERS, COMPANY } from '@/lib/content'
import Link from 'next/link'
import { WAIcon } from '@/components/ui/WAIcon'

export const metadata = {
  title: 'Bundles | Athamarat Shop',
  description: 'Pre-assembled IPM and organic growing bundles for farms, greenhouses and institutions.',
}

export default function BundlesPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-green-900 text-white pt-28 pb-12">
        <div className="container-main">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-2">
            <Link href="/shop" className="hover:text-green-300">Shop</Link> / Bundles
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Product Bundles</h1>
          <p className="text-white/70 max-w-xl">Pre-assembled kits for common farming challenges — everything you need in one order, with a single application guide.</p>
        </div>
      </section>

      <div className="container-main py-12">
        <p className="text-stone-500 text-sm mb-8">{BUNDLES.length} bundles available</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUNDLES.map(b => {
            const tier = TIERS[b.tier as keyof typeof TIERS]
            return (
              <div key={b.ref} className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-green-800 to-green-900 p-6 text-white">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-4xl">📦</span>
                    <div className="text-right">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full border ${tier.color}`}>{b.tier}</span>
                      <p className="text-white/40 text-xs mt-1">{b.ref}</p>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{b.name}</h2>
                  <p className="text-white/70 text-sm leading-relaxed">{b.description}</p>
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">What's included</p>
                  <ul className="space-y-2.5 mb-6">
                    {b.includes.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-stone-600">
                        <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'm interested in the bundle: ${encodeURIComponent(b.name)} (${b.ref})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition-colors"
                  >
                    <WAIcon size={16} /> Enquire on WhatsApp
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center">
          <p className="text-2xl mb-3">🛠️</p>
          <h3 className="font-bold text-stone-800 text-lg mb-2">Need a custom bundle?</h3>
          <p className="text-stone-500 text-sm mb-5 max-w-md mx-auto">We can put together a tailored kit for your specific crops, pests and farm size. Message us with your situation.</p>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'd like a custom bundle for my farm.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <WAIcon size={16} /> Request a Custom Bundle
          </a>
        </div>
      </div>

      <section className="bg-green-900 text-white py-14">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-2">Browse individual products</h2>
          <p className="text-white/70 mb-6">Need something specific? Browse our full catalogue of 14 products.</p>
          <Link href="/shop" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">View All Products →</Link>
        </div>
      </section>
    </main>
  )
}
