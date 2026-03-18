import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Jalpa Turakhia',
  description: 'Portfolio of AI-powered work by Jalpa Turakhia.',
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center">
      <h1
        style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700 }}
        className="text-5xl text-black mb-4"
      >
        Coming Soon
      </h1>
      <p className="text-gray-400 mb-8 text-sm tracking-widest uppercase">Portfolio in progress</p>
      <Link
        href="/"
        className="text-xs uppercase tracking-widest text-black border-b border-black pb-0.5 hover:opacity-50 transition-opacity"
      >
        ← Back
      </Link>
    </main>
  )
}
