import { COMPANY } from '@/lib/content'
import { WAIcon } from '@/components/ui/WAIcon'

export const metadata = {
  title: 'Contact Us | Athamarat',
  description: 'Get in touch with Athamarat for product enquiries, wholesale pricing or partnership opportunities.',
}

const CONTACT_METHODS = [
  {
    icon: '📱',
    title: 'WhatsApp',
    value: COMPANY.phone,
    detail: 'Fastest response — typically within 1 hour during business hours',
    href: `https://wa.me/${COMPANY.whatsapp}`,
    cta: 'Open WhatsApp',
    primary: true,
  },
  {
    icon: '📧',
    title: 'Email',
    value: COMPANY.email,
    detail: 'For formal enquiries, wholesale quotes and documentation requests',
    href: `mailto:${COMPANY.email}`,
    cta: 'Send Email',
    primary: false,
  },
  {
    icon: '📍',
    title: 'Office',
    value: COMPANY.address,
    detail: 'Visits by appointment. Monday–Friday, 8am–5pm EAT',
    href: 'https://maps.google.com/?q=Jigjiga,+Ethiopia',
    cta: 'View on Map',
    primary: false,
  },
]

const ENQUIRY_TYPES = [
  { icon: '🛒', label: 'Product availability' },
  { icon: '📦', label: 'Wholesale pricing' },
  { icon: '📋', label: 'Compliance documentation' },
  { icon: '🚚', label: 'Delivery & logistics' },
  { icon: '🤝', label: 'Partnership or distribution' },
  { icon: '🔬', label: 'Technical product support' },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="bg-green-900 text-white pt-28 pb-16">
        <div className="container-main max-w-2xl">
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5">Contact Us</h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Whether you need a product quote, compliance documentation or just want to know more — we're quick to respond on WhatsApp.
          </p>
        </div>
      </section>

      {/* ── Contact methods ── */}
      <section className="container-main py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CONTACT_METHODS.map(c => (
            <div key={c.title} className={`rounded-2xl p-6 border-2 flex flex-col ${c.primary ? 'border-green-600 bg-green-50' : 'border-stone-200 bg-stone-50'}`}>
              <div className="text-4xl mb-4">{c.icon}</div>
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">{c.title}</p>
              <p className={`font-bold mb-2 ${c.primary ? 'text-green-800 text-lg' : 'text-stone-800'}`}>{c.value}</p>
              <p className="text-stone-500 text-sm leading-relaxed flex-1 mb-5">{c.detail}</p>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center gap-2 font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors ${
                  c.primary
                    ? 'bg-green-700 hover:bg-green-800 text-white'
                    : 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                }`}
              >
                {c.primary && <WAIcon size={16} />}
                {c.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* ── What to include in your message ── */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-stone-800 mb-3">What to include in your message</h2>
            <p className="text-stone-500 mb-6 text-sm leading-relaxed">
              To get you a fast, accurate response — especially for wholesale or institutional enquiries — include the following:
            </p>
            <ul className="space-y-3">
              {[
                'Your name and organisation (if applicable)',
                'Country and region of delivery',
                'Product name or category of interest',
                'Quantity required (retail or wholesale)',
                'Whether you need compliance documentation',
                'Preferred communication language (English / Somali / Amharic)',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 text-sm text-stone-600">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-orange-50 border border-orange-200 rounded-2xl p-5">
              <p className="font-bold text-orange-800 mb-1">⚡ Fastest way to reach us</p>
              <p className="text-orange-700 text-sm">
                Send a WhatsApp message to <strong>{COMPANY.phone}</strong> — we typically respond within 1 hour during business hours (Mon–Fri, 8am–5pm EAT).
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-stone-800 mb-3">We can help with</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {ENQUIRY_TYPES.map(e => (
                <div key={e.label} className="flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3">
                  <span className="text-xl">{e.icon}</span>
                  <span className="text-sm font-medium text-stone-700">{e.label}</span>
                </div>
              ))}
            </div>

            {/* Business details */}
            <div className="bg-green-900 text-white rounded-2xl p-6">
              <h3 className="font-bold mb-4">Business Details</h3>
              <div className="space-y-2.5 text-sm text-white/80">
                <div className="flex justify-between">
                  <span className="text-white/50">Entity</span>
                  <span className="font-medium text-right max-w-[60%]">{COMPANY.entity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">TIN</span>
                  <span className="font-medium">{COMPANY.tin}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">VAT</span>
                  <span className="font-medium">{COMPANY.vat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">GM</span>
                  <span className="font-medium">{COMPANY.gm}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Location</span>
                  <span className="font-medium">{COMPANY.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WhatsApp CTA ── */}
      <section className="bg-green-900 text-white py-16">
        <div className="container-main text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to place an order?</h2>
          <p className="text-white/70 mb-8">Message us on WhatsApp with your requirements and we'll get back to you fast.</p>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'd like to enquire about Athamarat products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1fb855] text-white font-semibold px-8 py-3 rounded-xl transition-colors text-lg"
          >
            <WAIcon size={20} /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
