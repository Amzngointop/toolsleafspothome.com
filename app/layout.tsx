import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://toolsleafspothome.com'),
  title: {
    default: 'ToolsLeafSpotHome — Indoor Plant Tools & Gear Reviews',
    template: '%s | ToolsLeafSpotHome',
  },
  description: 'Expert reviews of indoor plant pots, grow lights, soils, watering tools, and fertilizers. Only the best-selling, most trusted picks for plant parents in 2026.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#F5F0E8]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
