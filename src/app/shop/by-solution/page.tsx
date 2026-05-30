'use client'
import { useState } from 'react'
import { PRODUCTS, SOLUTIONS, PROBLEMS, COMPLIANCE_COLORS, TIERS } from '@/lib/content'
import Link from 'next/link'

const SOLUTION_ICONS: Record<string, string> = {
  microbial: '🧫', botanical: '🌿', ipm: '🪤',
  biostimulants: '🌱', seeds: '🌾', tools: '🛠️',
}

export default function BySolutionPage() {
  const [activeSolution, setActiveSolution] = useState<string | null>(null)
  const [view, setView] = useState<'grid'|'list'>('grid')

  const filtered = activeSolution ? PRODUCTS.filter(p => p.solution === activeSolution) : PRODUCTS
  const activeSol = SOLUTIONS.find(s => s.id === activeSolution)

  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-green-900 text-white pt-28 pb-12">
        <div className="container-main">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-2">
            <Link href="/shop" className="hover:text-green-300">Shop</Link> / By Solution
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Shop by Solution</h1>
          <p className="text-white/70 max-w-xl">Browse by product category — from microbial biopesticides to seeds and farm tools.</p>
        </div>
      </section>

      {/* Solution cards if none selected */}
      {!activeSolution && (
        <div className="container-main py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map(s => {
              const count = PRODUCTS.filter(p => p.solution === s.id).length
              const tierColor = s.tier === 'GOLD' ? 'bg-amber-100 text-amber-800 border-amber-300' : 'bg-slate-100 text-slate-700 border-slate-300'
              return (
                <button key={s.id} onClick={() => setActiveSolution(s.id)}
                  className="bg-white border border-stone-200 rounded-2xl p-6 text-left hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-3xl group-hover:bg-green-100 transition-colors">{s.icon}</div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${tierColor}`}>{s.tier}</span>
                  </div>
                  <h3 className="font-bold text-stone-800 text-lg mb-1">{s.label}</h3>
                  <p className="text-stone-500 text-sm mb-4">{s.description}</p>
                  <p className="text-green-700 text-sm font-semibold">{count} product{count!==1?'s':''} →</p>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Filtered products */}
      {activeSolution && (
        <>
          <div className="bg-white border-b border-stone-200 sticky top-16 z-30 shadow-sm">
            <div className="container-main py-3 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setActiveSolution(null)} className="px-4 py-2 rounded-full text-sm font-medium border bg-white text-stone-600 border-stone-200 hover:border-green-400 transition-all">← All Solutions</button>
                {SOLUTIONS.map(s => (
                  <button key={s.id} onClick={() => setActiveSolution(s.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all ${activeSolution===s.id?'bg-green-800 text-white border-green-800':'bg-white text-stone-600 border-stone-200 hover:border-green-400'}`}>
                    {s.icon} {s.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-1 bg-stone-100 rounded-lg p-1 shrink-0">
                <button onClick={() => setView('grid')} className={`p-1.5 rounded-md transition-all ${view==='grid'?'bg-white shadow text-green-800':'text-stone-400'}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/><rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>
                </button>
                <button onClick={() => setView('list')} className={`p-1.5 rounded-md transition-all ${view==='list'?'bg-white shadow text-green-800':'text-stone-400'}`}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><rect x="1" y="2" width="14" height="2.5" rx="1"/><rect x="1" y="6.75" width="14" height="2.5" rx="1"/><rect x="1" y="11.5" width="14" height="2.5" rx="1"/></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="container-main py-10">
            {activeSol && (
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{activeSol.icon}</span>
                <div>
                  <h2 className="font-bold text-stone-800 text-xl">{activeSol.label}</h2>
                  <p className="text-stone-500 text-sm">{activeSol.description} · {filtered.length} product{filtered.length!==1?'s':''}</p>
                </div>
              </div>
            )}
            <div className={view==='grid'?'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4':'flex flex-col gap-3'}>
              {filtered.map(p => {
                const tier = TIERS[p.tier as keyof typeof TIERS]
                if (view==='list') return (
                  <div key={p.ref} className="bg-white border border-stone-200 rounded-2xl p-5 flex gap-5 items-start hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-2xl shrink-0">{SOLUTION_ICONS[p.solution]||'🌿'}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1"><span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${tier.color}`}>{p.tier}</span><span className="text-xs text-stone-400">{p.ref}</span></div>
                      <h3 className="font-bold text-stone-800 mb-1">{p.name}</h3>
                      <p className="text-stone-500 text-sm line-clamp-2">{p.description}</p>
                    </div>
                    <a href={`https://wa.me/251933274497?text=Hi, I'm interested in ${encodeURIComponent(p.name)} (${p.ref})`} target="_blank" rel="noopener noreferrer" className="shrink-0 bg-green-700 hover:bg-green-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">Enquire →</a>
                  </div>
                )
                return (
                  <div key={p.ref} className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-xl">{SOLUTION_ICONS[p.solution]||'🌿'}</div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${tier.color}`}>{p.tier}</span>
                    </div>
                    <h3 className="font-bold text-stone-800 mb-2 leading-snug">{p.name}</h3>
                    <p className="text-stone-500 text-sm line-clamp-3 flex-1">{p.description}</p>
                    <div className="border-t border-stone-100 mt-4 pt-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-stone-400">{p.unit}</p>
                        <div className="flex gap-1 mt-1">{Object.entries(p.compliance).map(([c,s])=><span key={c} className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${COMPLIANCE_COLORS[s as keyof typeof COMPLIANCE_COLORS]}`}>{c.slice(0,2).toUpperCase()}</span>)}</div>
                      </div>
                      <a href={`https://wa.me/251933274497?text=Hi, I'm interested in ${encodeURIComponent(p.name)} (${p.ref})`} target="_blank" rel="noopener noreferrer" className="bg-green-700 hover:bg-green-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">Enquire →</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}

      <section className="bg-green-900 text-white py-14">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-2">Need wholesale quantities?</h2>
          <p className="text-white/70 mb-6">All products available in bulk with full compliance documentation.</p>
          <a href="/wholesale" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">Wholesale Enquiry →</a>
        </div>
      </section>
    </main>
  )
}
