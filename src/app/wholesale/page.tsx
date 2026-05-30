import { COMPANY, CLIENTS, PRODUCTS, BUNDLES } from '@/lib/content'
import { WAIcon } from '@/components/ui/WAIcon'

export const metadata = {
  title: 'Wholesale | Athamarat',
  description: 'Wholesale agri-inputs for institutions, NGOs, distributors and export farmers across the Horn of Africa.',
}

const WHY_WHOLESALE = [
  { icon: '📋', title: 'Full documentation package', body: 'Every wholesale order includes safety data sheets, compliance certificates, batch numbers and application guides — ready for your audit trail.' },
  { icon: '💰', title: 'Volume pricing', body: 'Significant discounts on orders above minimum wholesale thresholds. Contact us for a tailored quote based on your volumes and frequency.' },
  { icon: '🚚', title: 'Delivery across the region', body: 'We supply to Ethiopia, Somalia, Kenya, Djibouti and Eritrea. Logistics arranged to your warehouse or port of entry.' },
  { icon: '🔬', title: 'Technical support included', body: 'Wholesale clients get access to our agronomist network for product selection, application guidance and IPM programme design.' },
  { icon: '🤝', title: 'Dedicated account management', body: 'A single point of contact for reorders, documentation, delivery tracking and product queries.' },
  { icon: '⚡', title: 'Fast turnaround', body: 'Most products held in stock. Typical dispatch within 3–5 business days of confirmed order and payment.' },
]

const MIN_ORDERS = [
  { category: 'Microbial Biopesticides', retail: '500g – 1kg', wholesale: '10kg – 25kg' },
  { category: 'Botanical Solutions', retail: '1L', wholesale: '20L' },
  { category: 'IPM Traps & Monitoring', retail: '1 pack / 1 trap', wholesale: '20–50 units' },
  { category: 'Biostimulants', retail: '1L / 1kg', wholesale: '20L / 25kg' },
  { category: 'Seeds', retail: '1 packet', wholesale: 'Bulk kg' },
  { category: 'Farm Tools & PPE', retail: '1 unit / 1 kit', wholesale: '10–20 units' },
]

const PROCESS = [
  { step: '01', title: 'Send your requirements', body: 'Message us on WhatsApp or email with your product list, quantities, delivery country and any documentation needs.' },
  { step: '02', title: 'Receive a formal quote', body: 'We send a proforma invoice within 24 hours with itemised pricing, delivery cost and lead time.' },
  { step: '03', title: 'Confirm and pay', body: 'Confirm the order and arrange payment. We accept bank transfer. Payment terms available for established institutional clients.' },
  { step: '04', title: 'Dispatch & documentation', body: 'Order dispatched within 3–5 business days. Full documentation package sent digitally on dispatch.' },
]

export default function WholesalePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="bg-green-900 text-white pt-28 pb-16">
        <div className="container-main max-w-3xl">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">Bulk Orders</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            Wholesale ethical agri-inputs for the Horn of Africa
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Supplying institutions, NGOs, distributors and export farmers with documented, compliance-first biopesticides and organic inputs — at volume.
          </p>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'd like to enquire about wholesale pricing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <WAIcon size={18} /> Request a Wholesale Quote
          </a>
        </div>
      </section>

      {/* ── Trusted by ── */}
      <section className="bg-stone-50 border-b border-stone-200 py-12">
        <div className="container-main">
          <p className="text-center text-xs font-bold text-stone-400 uppercase tracking-widest mb-8">Trusted by leading institutions</p>
          <div className="flex flex-wrap justify-center gap-4">
            {CLIENTS.map(c => (
              <div key={c.name} className="bg-white border border-stone-200 rounded-xl px-5 py-3 text-center hover:shadow-sm transition-shadow">
                <p className="font-bold text-stone-800 text-sm">{c.name}</p>
                <p className="text-stone-400 text-xs mt-0.5">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why wholesale with us ── */}
      <section className="container-main py-20">
        <div className="text-center mb-12">
          <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Why Athamarat</p>
          <h2 className="text-3xl font-extrabold text-stone-800">What wholesale clients get</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WHOLESALE.map(w => (
            <div key={w.title} className="bg-stone-50 border border-stone-200 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="text-3xl mb-4">{w.icon}</div>
              <h3 className="font-bold text-stone-800 mb-2">{w.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Minimum orders ── */}
      <section className="bg-stone-50 py-20 border-t border-stone-200">
        <div className="container-main">
          <div className="text-center mb-12">
            <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">Order Quantities</p>
            <h2 className="text-3xl font-extrabold text-stone-800">Retail vs wholesale minimums</h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto text-sm">Wholesale pricing applies from the thresholds below. Mix-and-match across categories to hit your minimum order value.</p>
          </div>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-stone-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Category</th>
                  <th className="text-center px-6 py-4 font-semibold">Retail Min.</th>
                  <th className="text-center px-6 py-4 font-semibold bg-green-700">Wholesale Min.</th>
                </tr>
              </thead>
              <tbody>
                {MIN_ORDERS.map((row, i) => (
                  <tr key={row.category} className={i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}>
                    <td className="px-6 py-4 font-medium text-stone-700">{row.category}</td>
                    <td className="px-6 py-4 text-center text-stone-500">{row.retail}</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-800 bg-green-50">{row.wholesale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-stone-400 text-xs mt-4">Contact us for exact pricing — quantities above minimums receive further discounts.</p>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="container-main py-20">
        <div className="text-center mb-12">
          <p className="text-green-700 text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-3xl font-extrabold text-stone-800">The wholesale order process</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {PROCESS.map((p, i) => (
            <div key={p.step} className="relative">
              <div className="bg-green-800 text-white text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4">
                {p.step}
              </div>
              {i < PROCESS.length - 1 && (
                <div className="hidden lg:block absolute top-5 left-10 w-full h-px bg-green-200" />
              )}
              <h3 className="font-bold text-stone-800 mb-2">{p.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-green-900 text-white py-16">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-2">Ready to place a wholesale order?</h2>
            <p className="text-white/70 mb-8">Send us your requirements and we'll respond with a formal proforma invoice within 24 hours.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'd like to enquire about wholesale pricing for Athamarat products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1fb855] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <WAIcon size={18} /> WhatsApp Us
              </a>
              <a
                href={`mailto:${COMPANY.email}?subject=Wholesale Enquiry`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors border border-white/20"
              >
                📧 Email a Quote Request
              </a>
            </div>
            <p className="text-white/40 text-xs mt-6">
              {COMPANY.entity} · TIN: {COMPANY.tin} · VAT: {COMPANY.vat}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
