'use client'
import { useState, useMemo } from 'react'
import { PRODUCTS, PROBLEMS, COMPLIANCE_COLORS, TIERS } from '@/lib/content'
import Link from 'next/link'

const SOLUTION_ICONS: Record<string, string> = {
  microbial: '🧫', botanical: '🌿', ipm: '🪤',
  biostimulants: '🌱', seeds: '🌾', tools: '🛠️',
}

export default function ByProblemPage() {
  const [activeProblem, setActiveProblem] = useState<string | null>(null)
  const [view, setView] = useState<'grid'|'list'>('grid')

  const filtered = useMemo(() =>
    activeProblem ? PRODUCTS.filter(p => p.problems.includes(activeProblem)) : PRODUCTS.filter(p => p.problems.length > 0)
  , [activeProblem])

  return (
    <main className="min-h-screen bg-stone-50">
      <section className="bg-green-900 text-white pt-28 pb-12">
        <div className="container-main">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-2">
            <Link href="/shop" className="hover:text-green-300">Shop</Link> / By Problem
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Shop by Problem</h1>
          <p className="text-white/70 max-w-xl">Select the pest or disease you're dealing with and we'll show you the right products.</p>
        </div>
      </section>

      {/* Problem selector */}
      <div className="bg-white border-b border-stone-200 sticky top-16 z-30 shadow-sm">
        <div className="container-main py-4 flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveProblem(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${!activeProblem ? 'bg-green-800 text-white border-green-800' : 'bg-white text-stone-600 border-stone-200 hover:border-green-400'}`}
            >
              All Problems
            </button>
            {PROBLEMS.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveProblem(activeProblem === p.id ? null : p.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all ${activeProblem === p.id ? 'bg-green-800 text-white border-green-800' : 'bg-white text-stone-600 border-stone-200 hover:border-green-400'}`}
              >
                {p.icon} {p.label}
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
        {activeProblem && (
          <div className="mb-6 flex items-center gap-3">
            <span className="text-2xl">{PROBLEMS.find(p=>p.id===activeProblem)?.icon}</span>
            <div>
              <h2 className="font-bold text-stone-800 text-xl">{PROBLEMS.find(p=>p.id===activeProblem)?.label}</h2>
              <p className="text-stone-500 text-sm">{filtered.length} product{filtered.length!==1?'s':''} found</p>
            </div>
          </div>
        )}
        {!activeProblem && <p className="text-stone-500 text-sm mb-6">{filtered.length} products with pest/disease targets</p>}

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-stone-400">
            <p className="text-5xl mb-4">🔍</p>
            <p className="font-medium">No products found for this problem</p>
          </div>
        ) : (
          <div className={view==='grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4' : 'flex flex-col gap-3'}>
            {filtered.map(p => {
              const tier = TIERS[p.tier as keyof typeof TIERS]
              if (view==='list') return (
                <div key={p.ref} className="bg-white border border-stone-200 rounded-2xl p-5 flex gap-5 items-start hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-2xl shrink-0">{SOLUTION_ICONS[p.solution]||'🌿'}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${tier.color}`}>{p.tier}</span>
                      <span className="text-xs text-stone-400">{p.ref}</span>
                    </div>
                    <h3 className="font-bold text-stone-800 mb-1">{p.name}</h3>
                    <p className="text-stone-500 text-sm line-clamp-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {p.problems.map(pr => { const prob=PROBLEMS.find(x=>x.id===pr); return prob ? <span key={pr} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">{prob.icon} {prob.label}</span> : null })}
                    </div>
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
                  <div className="flex flex-wrap gap-1 mt-3">
                    {p.problems.slice(0,3).map(pr => { const prob=PROBLEMS.find(x=>x.id===pr); return prob ? <span key={pr} className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">{prob.icon} {prob.label}</span> : null })}
                  </div>
                  <div className="border-t border-stone-100 mt-4 pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-stone-400">{p.unit}</p>
                      <div className="flex gap-1 mt-1">
                        {Object.entries(p.compliance).map(([country, status]) => (
                          <span key={country} className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${COMPLIANCE_COLORS[status as keyof typeof COMPLIANCE_COLORS]}`}>{country.slice(0,2).toUpperCase()}</span>
                        ))}
                      </div>
                    </div>
                    <a href={`https://wa.me/251933274497?text=Hi, I'm interested in ${encodeURIComponent(p.name)} (${p.ref})`} target="_blank" rel="noopener noreferrer" className="bg-green-700 hover:bg-green-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">Enquire →</a>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <section className="bg-green-900 text-white py-14">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-2">Not sure which product to choose?</h2>
          <p className="text-white/70 mb-6">Message us on WhatsApp — we'll recommend the right solution for your specific situation.</p>
          <a href="https://wa.me/251933274497?text=Hi, I need help choosing the right product for my pest problem." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">Get a Recommendation →</a>
        </div>
      </section>
    </main>
  )
}
