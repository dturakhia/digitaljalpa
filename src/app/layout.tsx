import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jalpa Turakhia — AI Tools Expert',
  description: 'AI Tools Expert helping startups and small businesses market smarter, create faster, and grow consistently.',
  keywords: ['AI tools expert', 'social media', 'digital marketing', 'AI marketing', 'startups'],
  openGraph: {
    title: 'Jalpa Turakhia — AI Tools Expert',
    description: 'Helping startups and small businesses harness the power of AI.',
    url: 'https://digitaljalpa.com',
    siteName: 'Digital Jalpa',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jalpa Turakhia — AI Tools Expert',
    description: 'Helping startups and small businesses harness the power of AI.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
