import { COMPANY } from '@/lib/content'
import { WAIcon } from './WAIcon'

export function FloatingWA() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%2C%20I%20am%20interested%20in%20Athamarat%20products.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
    >
      <WAIcon size={28} />
    </a>
  )
}
