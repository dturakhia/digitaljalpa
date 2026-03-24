'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './Logo'

const ACCENT = '#0891B2'

const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, padding: '24px 16px' }}>
      <nav style={{
        maxWidth: 1000, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(4,13,18,0.85)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)', borderRadius: 9999,
        padding: '10px 20px 10px 16px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Logo height={34} showTagline={false} />
        </Link>

        {/* Links */}
        <div className="nav-links">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href.replace('/#', '/')))
            return (
              <Link key={label} href={href} style={{
                fontSize: 13, fontWeight: 500,
                color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
                textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'white' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = isActive ? 'white' : 'rgba(255,255,255,0.5)' }}
              >{label}</Link>
            )
          })}
        </div>

        {/* CTA */}
        <Link href="/contact" style={{
          background: ACCENT, color: 'white', borderRadius: 9999, padding: '8px 20px',
          fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
          textDecoration: 'none',
        }}>Book a Call</Link>
      </nav>
    </header>
  )
}
