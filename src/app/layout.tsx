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
  title: 'Jalpa Turakhia — AI Tools Expert | Consultation & Mentoring',
  description: 'AI Tools Expert who implements AI for businesses, consults on which tools to use, and mentors teams and individuals. India-based, global clients.',
  keywords: ['AI tools expert', 'AI consultation', 'AI mentoring', 'AI implementation', 'ChatGPT consultant', 'AI tools India'],
  openGraph: {
    title: 'Jalpa Turakhia — AI Tools Expert',
    description: 'I implement AI tools for businesses, consult on which tools to use, and mentor teams. India-based, global clients.',
    url: 'https://digitaljalpa.com',
    siteName: 'Digital Jalpa',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jalpa Turakhia — AI Tools Expert',
    description: 'I implement AI tools for businesses, consult on which tools to use, and mentor teams.',
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
