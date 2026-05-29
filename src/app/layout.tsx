import type { Metadata } from 'next'
import { DM_Sans, Sora } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingWA } from '@/components/ui/FloatingWA'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Athamarat — Ethical Agri-Inputs for East Africa',
    template: '%s | Athamarat',
  },
  description: 'Compliance-first biopesticides, IPM tools and organic inputs. Wholesale and retail across Ethiopia, Somalia, Kenya, Djibouti and Eritrea.',
  keywords: ['biopesticides', 'IPM', 'organic inputs', 'East Africa', 'Ethiopia', 'Kenya', 'Somalia', 'agriculture'],
  openGraph: {
    title: 'Athamarat — Ethical Agri-Inputs for East Africa',
    description: 'Compliance-first biopesticides, IPM tools and organic inputs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Athamarat',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  )
}
