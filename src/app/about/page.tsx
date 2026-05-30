import { COMPANY, STATS, CLIENTS } from '@/lib/content'

export const metadata = {
  title: 'About Us | Athamarat',
  description: 'Learn about Athamarat — East Africa\'s ethical agri-inputs platform based in Jigjiga, Ethiopia.',
}

const TIMELINE = [
  { year: '2006', label: 'Founded', detail: 'Badbado Environmental Protection Cooperative established in Jigjiga, Somali Regional State.' },
  { year: '2014', label: 'First major client', detail: 'Supplied fumigation services to UNICEF — beginning a track record with international institutions.' },
  { year: '2016', label: 'UNHCR partnership', detail: 'Multi-year gardening and fumigation contract with UNHCR begins.' },
  { year: '2020', label: 'Ethio Telecom', detail: 'Supplied 6,600+ seedlings for Ethio Telecom\'s greening programme.' },
  { year: '2021', label: 'SRS Government', detail: 'Ongoing contracts with Somali Regional State Finance Bureau and Health Bureau.' },
  { year: '2024', label: 'Athamarat brand', detail: 'Launched as a dedicated ethical agri-inputs trading entity under the cooperative.' },
]

const TEAM = [
  {
    name: 'Mr. Ismail Mohamed Abdi',
    role: 'General Manager',
    bio: 'Leading Athamarat\'s operations across the Horn of Africa with deep expertise in agricultural inputs, compliance, and institutional supply chains.',
    icon: '👨‍💼',
  },
]

const VALUES = [
  { icon: '✅', title: 'Compliance First', body: 'Every product we stock is documented, registered, and compliant with Ethiopian and regional agricultural regulations.' },
  { icon: '🌿', title: 'Ethical Sourcing', body: 'We only carry biological and low-toxicity inputs. No banned substances, no shortcuts.' },
  { icon: '📋', title: 'Full Documentation', body: 'Every order comes with safety data sheets, compliance certificates and application guides.' },
  { icon: '🤝', title: 'Institutional Trust', body: 'UNHCR, UNICEF, Ethio Telecom and regional government bureaus have relied on us for over 18 years.' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="bg-green-900 text-white pt-28 pb-16">
        <div className="container-main max-w-3xl">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            18 years of ethical agri-inputs in the Horn of Africa
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Athamarat is the trading identity of Badbado Environmental Protection Cooperative — a Jigjiga-based organisation that has supplied institutions, farmers and government bodies with compliant, ethical agricultural inputs since 2006.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-green-800 text-white">
        <div className="container-main py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-orange-400">{s.value}</p>
              <p className="text-white/70 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Who we are ── */}
      <section className="container-main py-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Who We Are</p>
          <h2 className="text-3xl font-extrabold text-stone-800 mb-5">A cooperative rooted in the Somali Regional State</h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Badbado Environmental Protection Cooperative was founded in Jigjiga with a clear mission: provide communities and institutions in the Somali Regional State and beyond with ethical, documented environmental and agricultural services.
            </p>
            <p>
              Over 18 years, we have grown from local fumigation and gardening services into a full agri-inputs supplier — stocking biopesticides, IPM tools, seeds, biostimulants and farm equipment — while keeping our compliance-first, documentation-led approach at the core of everything.
            </p>
            <p>
              The Athamarat brand was created to give our agri-input trading arm a dedicated identity as we expand across Ethiopia, Somalia, Kenya, Djibouti and Eritrea.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
              <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Legal Entity</p>
              <p className="font-semibold text-stone-700 text-sm">{COMPANY.entity}</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
              <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Established</p>
              <p className="font-semibold text-stone-700 text-sm">{COMPANY.established}</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
              <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">TIN</p>
              <p className="font-semibold text-stone-700 text-sm">{COMPANY.tin}</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
              <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">VAT</p>
              <p className="font-semibold text-stone-700 text-sm">{COMPANY.vat}</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
          <div className="text-6xl mb-6 text-center">🌍</div>
          <h3 className="text-xl font-bold text-green-900 mb-4 text-center">Countries We Serve</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {[['🇪🇹','Ethiopia'],['🇸🇴','Somalia'],['🇰🇪','Kenya'],['🇩🇯','Djibouti'],['🇪🇷','Eritrea']].map(([flag, name]) => (
              <span key={name} className="px-4 py-2 bg-white border border-green-200 rounded-full text-sm font-medium text-green-800">
                {flag} {name}
              </span>
            ))}
          </div>
          <div className="border-t border-green-200 pt-6 text-center">
            <p className="text-xs text-green-700 uppercase tracking-wider mb-1">Headquarters</p>
            <p className="font-semibold text-green-900">{COMPANY.address}</p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-stone-50 py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">What Drives Us</p>
            <h2 className="text-3xl font-extrabold text-stone-800">Our core values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(v => (
              <div key={v.title} className="bg-white rounded-2xl p-6 border border-stone-200 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-stone-800 mb-2">{v.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="container-main py-20">
        <div className="text-center mb-12">
          <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Our Journey</p>
          <h2 className="text-3xl font-extrabold text-stone-800">18 years of milestones</h2>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-green-200" />
          <div className="space-y-8">
            {TIMELINE.map((t, i) => (
              <div key={t.year} className="flex gap-6 relative">
                <div className="w-16 h-16 rounded-full bg-green-800 text-white flex items-center justify-center font-bold text-sm shrink-0 z-10 shadow-md">
                  {t.year}
                </div>
                <div className="bg-white border border-stone-200 rounded-2xl p-5 flex-1 hover:shadow-sm transition-shadow">
                  <p className="font-bold text-stone-800 mb-1">{t.label}</p>
                  <p className="text-stone-500 text-sm leading-relaxed">{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-stone-50 py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Leadership</p>
            <h2 className="text-3xl font-extrabold text-stone-800">The team behind Athamarat</h2>
          </div>
          <div className="flex justify-center">
            {TEAM.map(m => (
              <div key={m.name} className="bg-white border border-stone-200 rounded-2xl p-8 max-w-sm text-center hover:shadow-md transition-shadow">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl mx-auto mb-4">
                  {m.icon}
                </div>
                <h3 className="font-bold text-stone-800 text-lg">{m.name}</h3>
                <p className="text-green-700 font-medium text-sm mb-3">{m.role}</p>
                <p className="text-stone-500 text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="container-main py-20">
        <div className="text-center mb-12">
          <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Track Record</p>
          <h2 className="text-3xl font-extrabold text-stone-800">Trusted by leading institutions</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CLIENTS.map(c => (
            <div key={c.name} className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-stone-800">{c.name}</h3>
                <span className="text-xs text-stone-400 bg-stone-100 px-2 py-1 rounded-full shrink-0 ml-2">{c.years}</span>
              </div>
              <p className="text-stone-500 text-sm">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-green-900 text-white py-16">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to work with us?</h2>
          <p className="text-white/70 mb-8">Get in touch for product enquiries, wholesale pricing or partnership opportunities.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Contact Us →
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
