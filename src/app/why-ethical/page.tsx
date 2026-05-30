import { COMPANY } from '@/lib/content'

export const metadata = {
  title: 'Why Ethical | Athamarat',
  description: 'Why Athamarat only stocks ethical, compliance-first agri-inputs — and what that means for farmers, institutions and the environment.',
}

const PROBLEMS_WITH_CONVENTIONAL = [
  {
    icon: '☠️',
    title: 'Banned substances still in circulation',
    body: 'Many conventional pesticides banned in Europe and North America continue to be sold openly across East Africa — often without labels, safety data sheets or registration numbers.',
  },
  {
    icon: '🧪',
    title: 'No documentation, no traceability',
    body: 'Unregistered inputs have no batch numbers, expiry dates or compliance trails. For export farmers and institutional buyers, this is a deal-breaker.',
  },
  {
    icon: '🐝',
    title: 'Harm to pollinators and soil health',
    body: 'Broad-spectrum synthetic pesticides kill beneficial insects, degrade soil microbiomes and reduce long-term farm productivity.',
  },
  {
    icon: '👩‍🌾',
    title: 'Farmer safety ignored',
    body: 'Highly toxic inputs are sold without PPE guidance, application protocols or re-entry intervals — putting farmers and their families at risk.',
  },
]

const WHAT_ETHICAL_MEANS = [
  {
    icon: '✅',
    title: 'Registered & documented',
    body: 'Every product we carry has a registration number, safety data sheet, and compliance status for each country we serve. No exceptions.',
  },
  {
    icon: '🌿',
    title: 'Biological or low-toxicity only',
    body: 'Our Gold tier is pure biocontrol — microbial biopesticides, botanical extracts and IPM tools. Our Silver tier covers organic biostimulants, certified seeds and essential farm tools.',
  },
  {
    icon: '🔬',
    title: 'Mode of action transparency',
    body: 'We explain how every product works — what it targets, how it acts, and what it doesn\'t affect. No black-box chemistry.',
  },
  {
    icon: '📦',
    title: 'Full supply chain traceability',
    body: 'We source from established manufacturers with ISO-certified facilities. Every batch is traceable from origin to your farm gate.',
  },
  {
    icon: '🤝',
    title: 'Application guidance included',
    body: 'Every order comes with a recommended application protocol. For wholesale clients we provide training and technical support.',
  },
  {
    icon: '🌍',
    title: 'Built for East African conditions',
    body: 'Products are selected for efficacy in Horn of Africa climates, pest pressures and crop systems — not just copied from European catalogues.',
  },
]

const TIERS_EXPLAINED = [
  {
    tier: 'GOLD',
    label: 'Pure Biocontrol',
    color: 'bg-amber-50 border-amber-300',
    labelColor: 'bg-amber-100 text-amber-800 border-amber-300',
    dot: 'bg-amber-400',
    description: 'Microbial biopesticides, botanical solutions and IPM monitoring tools. Zero synthetic chemistry. Safe for humans, beneficial insects and the environment.',
    examples: ['Beauveria bassiana WP', 'Azadirachtin 3% EC', 'Yellow & Blue Sticky Traps', 'VectoBac WG — Bti Larvicide'],
  },
  {
    tier: 'SILVER',
    label: 'Organic Input',
    color: 'bg-slate-50 border-slate-300',
    labelColor: 'bg-slate-100 text-slate-700 border-slate-300',
    dot: 'bg-slate-400',
    description: 'Certified organic biostimulants, high-quality seeds and essential farm equipment. Supports healthy growing systems without synthetic inputs.',
    examples: ['Kelpak Seaweed Extract', 'Humic + Fulvic Acid', 'Tomato Seeds — Rossen BV', 'PPE Application Kit'],
  },
]

const FOR_WHO = [
  {
    icon: '🏢',
    title: 'Institutions & NGOs',
    body: 'UNHCR, UNICEF and government bodies need documented, auditable supply chains. We provide everything needed for compliance reporting.',
  },
  {
    icon: '🥦',
    title: 'Export Farmers',
    body: 'EU and UK supermarket standards demand MRL compliance and pesticide-free certification. Our Gold tier inputs help you qualify.',
  },
  {
    icon: '🌱',
    title: 'Smallholder Farmers',
    body: 'Ethical inputs protect your health, your soil and your long-term productivity — not just this season\'s yield.',
  },
  {
    icon: '🏗️',
    title: 'Wholesalers & Distributors',
    body: 'Stock products you can stand behind — with full documentation to share with your customers and regulators.',
  },
]

export default function WhyEthicalPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="bg-green-900 text-white pt-28 pb-16">
        <div className="container-main max-w-3xl">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Commitment</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Why we only sell ethical agri-inputs
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            The agri-input market across East Africa is full of unregistered, toxic and mislabelled products. We built Athamarat to be a trusted alternative — where every product is documented, compliant and genuinely safe to use.
          </p>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="bg-red-50 py-20 border-b border-red-100">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-red-600 text-sm font-semibold tracking-widest uppercase mb-3">The Problem</p>
            <h2 className="text-3xl font-extrabold text-stone-800">What's wrong with the conventional market</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {PROBLEMS_WITH_CONVENTIONAL.map(p => (
              <div key={p.title} className="bg-white border border-red-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-stone-800 mb-2">{p.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What ethical means ── */}
      <section className="py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Our Standard</p>
            <h2 className="text-3xl font-extrabold text-stone-800">What "ethical" means at Athamarat</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_ETHICAL_MEANS.map(w => (
              <div key={w.title} className="bg-stone-50 border border-stone-200 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="text-3xl mb-4">{w.icon}</div>
                <h3 className="font-bold text-stone-800 mb-2">{w.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tier system ── */}
      <section className="bg-stone-50 py-20 border-t border-stone-200">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Product Classification</p>
            <h2 className="text-3xl font-extrabold text-stone-800">Our two-tier system</h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto">Every Athamarat product is classified into one of two tiers based on its mode of action, environmental profile and regulatory status.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TIERS_EXPLAINED.map(t => (
              <div key={t.tier} className={`rounded-2xl border-2 p-8 ${t.color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`w-3 h-3 rounded-full ${t.dot}`} />
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${t.labelColor}`}>
                    {t.tier} — {t.label}
                  </span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-5">{t.description}</p>
                <div>
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Examples</p>
                  <ul className="space-y-1.5">
                    {t.examples.map(e => (
                      <li key={e} className="flex items-center gap-2 text-sm text-stone-600">
                        <span className="text-green-500">✓</span> {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Who We Serve</p>
            <h2 className="text-3xl font-extrabold text-stone-800">Ethical inputs for every buyer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOR_WHO.map(f => (
              <div key={f.title} className="text-center bg-stone-50 border border-stone-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-stone-800 mb-2">{f.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-green-900 text-white py-16">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to switch to ethical inputs?</h2>
          <p className="text-white/70 mb-8">Browse our full product range or get in touch for a tailored recommendation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/shop" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Browse Products →
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20"
            >
              Talk to Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
