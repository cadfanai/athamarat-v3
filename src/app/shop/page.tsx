'use client'

import { useState, useMemo } from 'react'
import { PRODUCTS, SOLUTIONS, PROBLEMS, BUNDLES, TIERS, COMPLIANCE_COLORS } from '@/lib/content'

type ViewMode = 'grid' | 'list'
type FilterMode = 'all' | 'by-solution' | 'by-problem' | 'bundles'

const SOLUTION_LABELS: Record<string, string> = {
  microbial:     'Microbial Biopesticides',
  botanical:     'Botanical Solutions',
  ipm:           'IPM Monitoring & Traps',
  biostimulants: 'Organic Biostimulants',
  seeds:         'Seeds & Seedlings',
  tools:         'Farm Tools',
}

const SOLUTION_ICONS: Record<string, string> = {
  microbial:     '🧫',
  botanical:     '🌿',
  ipm:           '🪤',
  biostimulants: '🌱',
  seeds:         '🌾',
  tools:         '🛠️',
}

export default function ShopPage() {
  const [view, setView] = useState<ViewMode>('grid')
  const [filterMode, setFilterMode] = useState<FilterMode>('all')
  const [activeSolution, setActiveSolution] = useState<string | null>(null)
  const [activeProblem, setActiveProblem]   = useState<string | null>(null)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let list = PRODUCTS
    if (filterMode === 'by-solution' && activeSolution) {
      list = list.filter(p => p.solution === activeSolution)
    }
    if (filterMode === 'by-problem' && activeProblem) {
      list = list.filter(p => p.problems.includes(activeProblem))
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      )
    }
    return list
  }, [filterMode, activeSolution, activeProblem, search])

  return (
    <main className="min-h-screen bg-stone-50">

      {/* ── Hero strip ── */}
      <section className="bg-green-900 text-white pt-28 pb-12">
        <div className="container-main">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-2">Ethical Agri-Inputs</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Our Products</h1>
          <p className="text-white/70 max-w-xl">
            Compliance-first biopesticides, IPM tools and organic inputs — documented, sourced ethically, and trusted by institutions across the Horn of Africa.
          </p>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <div className="sticky top-16 z-30 bg-white border-b border-stone-200 shadow-sm">
        <div className="container-main py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">

          {/* Mode tabs */}
          <div className="flex gap-1 bg-stone-100 rounded-xl p-1 flex-wrap">
            {([
              { id: 'all',          label: 'All Products' },
              { id: 'by-solution',  label: 'By Solution' },
              { id: 'by-problem',   label: 'By Problem' },
              { id: 'bundles',      label: 'Bundles' },
            ] as { id: FilterMode; label: string }[]).map(tab => (
              <button
                key={tab.id}
                onClick={() => { setFilterMode(tab.id); setActiveSolution(null); setActiveProblem(null) }}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  filterMode === tab.id
                    ? 'bg-green-800 text-white shadow'
                    : 'text-stone-600 hover:text-green-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search + view toggle */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products…"
              className="border border-stone-200 rounded-lg px-3 py-1.5 text-sm w-full sm:w-52 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <div className="flex gap-1 bg-stone-100 rounded-lg p-1 shrink-0">
              <button
                onClick={() => setView('grid')}
                className={`p-1.5 rounded-md transition-all ${view === 'grid' ? 'bg-white shadow text-green-800' : 'text-stone-400'}`}
                title="Grid view"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/>
                  <rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/>
                </svg>
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-1.5 rounded-md transition-all ${view === 'list' ? 'bg-white shadow text-green-800' : 'text-stone-400'}`}
                title="List view"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <rect x="1" y="2" width="14" height="2.5" rx="1"/><rect x="1" y="6.75" width="14" height="2.5" rx="1"/>
                  <rect x="1" y="11.5" width="14" height="2.5" rx="1"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Sub-filters */}
        {filterMode === 'by-solution' && (
          <div className="container-main pb-3 flex gap-2 overflow-x-auto">
            {SOLUTIONS.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveSolution(activeSolution === s.id ? null : s.id)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border transition-all ${
                  activeSolution === s.id
                    ? 'bg-green-800 text-white border-green-800'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-green-400'
                }`}
              >
                <span>{s.icon}</span> {s.label}
              </button>
            ))}
          </div>
        )}

        {filterMode === 'by-problem' && (
          <div className="container-main pb-3 flex gap-2 overflow-x-auto">
            {PROBLEMS.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveProblem(activeProblem === p.id ? null : p.id)}
                className={`shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm border transition-all ${
                  activeProblem === p.id
                    ? 'bg-green-800 text-white border-green-800'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-green-400'
                }`}
              >
                <span>{p.icon}</span> {p.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="container-main py-10">

        {/* BUNDLES view */}
        {filterMode === 'bundles' ? (
          <div>
            <p className="text-stone-500 text-sm mb-6">{BUNDLES.length} bundles available</p>
            <div className={view === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'
              : 'flex flex-col gap-4'
            }>
              {BUNDLES.map(b => (
                <BundleCard key={b.ref} bundle={b} view={view} />
              ))}
            </div>
          </div>
        ) : (

          /* BY SOLUTION grouped view */
          filterMode === 'by-solution' && !activeSolution && search === '' ? (
            <div className="space-y-12">
              {SOLUTIONS.map(sol => {
                const prods = PRODUCTS.filter(p => p.solution === sol.id)
                return (
                  <div key={sol.id}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-2xl">{sol.icon}</span>
                      <div>
                        <h2 className="text-xl font-bold text-stone-800">{sol.label}</h2>
                        <p className="text-stone-500 text-sm">{sol.description}</p>
                      </div>
                      <span className={`ml-auto text-xs font-bold px-2 py-1 rounded-full border ${TIERS[sol.tier as keyof typeof TIERS].color}`}>
                        {sol.tier}
                      </span>
                    </div>
                    <div className={view === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                      : 'flex flex-col gap-3'
                    }>
                      {prods.map(p => <ProductCard key={p.ref} product={p} view={view} />)}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (

            /* FLAT list (all / filtered) */
            <div>
              <p className="text-stone-500 text-sm mb-6">
                {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
                {activeProblem && ` for ${PROBLEMS.find(p => p.id === activeProblem)?.label}`}
                {activeSolution && ` in ${SOLUTION_LABELS[activeSolution]}`}
              </p>
              {filtered.length === 0 ? (
                <div className="text-center py-20 text-stone-400">
                  <p className="text-5xl mb-4">🌱</p>
                  <p className="font-medium">No products found</p>
                  <p className="text-sm">Try a different search or filter</p>
                </div>
              ) : (
                <div className={view === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
                  : 'flex flex-col gap-3'
                }>
                  {filtered.map(p => <ProductCard key={p.ref} product={p} view={view} />)}
                </div>
              )}
            </div>
          )
        )}
      </div>

      {/* ── CTA banner ── */}
      <section className="bg-green-900 text-white py-14">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-2">Need wholesale quantities?</h2>
          <p className="text-white/70 mb-6">All products available in bulk. Get a formal quote with compliance documentation.</p>
          <a
            href="/wholesale"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Request Wholesale Enquiry →
          </a>
        </div>
      </section>
    </main>
  )
}

/* ── Product Card ── */
function ProductCard({ product: p, view }: { product: typeof PRODUCTS[0]; view: ViewMode }) {
  const tier = TIERS[p.tier as keyof typeof TIERS]

  if (view === 'list') {
    return (
      <div className="bg-white border border-stone-200 rounded-2xl p-5 flex gap-5 items-start hover:shadow-md transition-shadow">
        <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center text-2xl shrink-0">
          {SOLUTION_ICONS[p.solution] || '🌿'}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${tier.color}`}>{p.tier}</span>
            <span className="text-xs text-stone-400">{p.ref}</span>
          </div>
          <h3 className="font-bold text-stone-800 mb-1">{p.name}</h3>
          <p className="text-stone-500 text-sm line-clamp-2">{p.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {p.problems.map(pr => {
              const prob = PROBLEMS.find(x => x.id === pr)
              return prob ? (
                <span key={pr} className="text-xs bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">
                  {prob.icon} {prob.label}
                </span>
              ) : null
            })}
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs text-stone-400 mb-1">{p.unit}</p>
          <p className="text-xs text-stone-500">Min: {p.minOrder}</p>
          <a
            href={`https://wa.me/251933274497?text=Hi, I'm interested in ${encodeURIComponent(p.name)} (${p.ref})`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block bg-green-700 hover:bg-green-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
          >
            Enquire →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-5 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-xl">
          {SOLUTION_ICONS[p.solution] || '🌿'}
        </div>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${tier.color}`}>{p.tier}</span>
      </div>
      <h3 className="font-bold text-stone-800 mb-2 leading-snug">{p.name}</h3>
      <p className="text-stone-500 text-sm line-clamp-3 flex-1">{p.description}</p>

      {p.problems.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-3">
          {p.problems.slice(0, 3).map(pr => {
            const prob = PROBLEMS.find(x => x.id === pr)
            return prob ? (
              <span key={pr} className="text-xs bg-stone-100 text-stone-500 px-2 py-0.5 rounded-full">
                {prob.icon} {prob.label}
              </span>
            ) : null
          })}
        </div>
      )}

      <div className="border-t border-stone-100 mt-4 pt-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-stone-400">{p.unit}</p>
          <div className="flex gap-1 mt-1">
            {Object.entries(p.compliance).map(([country, status]) => (
              <span key={country} className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${COMPLIANCE_COLORS[status as keyof typeof COMPLIANCE_COLORS]}`}>
                {country.slice(0,2).toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <a
          href={`https://wa.me/251933274497?text=Hi, I'm interested in ${encodeURIComponent(p.name)} (${p.ref})`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
        >
          Enquire →
        </a>
      </div>
    </div>
  )
}

/* ── Bundle Card ── */
function BundleCard({ bundle: b, view }: { bundle: typeof BUNDLES[0]; view: ViewMode }) {
  const tier = TIERS[b.tier as keyof typeof TIERS]

  if (view === 'list') {
    return (
      <div className="bg-white border border-stone-200 rounded-2xl p-6 flex gap-5 hover:shadow-md transition-shadow">
        <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center text-2xl shrink-0">📦</div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${tier.color}`}>{b.tier}</span>
            <span className="text-xs text-stone-400">{b.ref}</span>
          </div>
          <h3 className="font-bold text-stone-800 mb-1">{b.name}</h3>
          <p className="text-stone-500 text-sm mb-3">{b.description}</p>
          <ul className="text-sm text-stone-600 space-y-1">
            {b.includes.map(item => <li key={item} className="flex items-center gap-1.5"><span className="text-green-500">✓</span>{item}</li>)}
          </ul>
        </div>
        <a
          href={`https://wa.me/251933274497?text=Hi, I'm interested in the bundle: ${encodeURIComponent(b.name)} (${b.ref})`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 self-start bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
        >
          Enquire →
        </a>
      </div>
    )
  }

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl">📦</div>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${tier.color}`}>{b.tier}</span>
      </div>
      <h3 className="font-bold text-stone-800 text-lg mb-2">{b.name}</h3>
      <p className="text-stone-500 text-sm mb-4 flex-1">{b.description}</p>
      <ul className="text-sm text-stone-600 space-y-1.5 mb-5">
        {b.includes.map(item => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-green-500 mt-0.5">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={`https://wa.me/251933274497?text=Hi, I'm interested in the bundle: ${encodeURIComponent(b.name)} (${b.ref})`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full text-center bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 rounded-xl transition-colors"
      >
        Enquire on WhatsApp →
      </a>
    </div>
  )
}
