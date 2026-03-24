'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Logo } from './Logo'

const ACCENT = '#0891B2'

const NAV_LINKS = [
  { label: 'Services',     href: '/#services' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'About',        href: '/about' },
  { label: 'Contact',      href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        padding: '16px',
        fontFamily: "'Manrope', sans-serif",
      }}>
        <nav style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(4,13,18,0.95)' : 'rgba(4,13,18,0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)', borderRadius: 9999,
          padding: '10px 16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          transition: 'background 0.3s',
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <Logo height={32} showTagline={false} />
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }} className="nav-links">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href.replace('/#', '/'))
              return (
                <Link key={label} href={href} style={{
                  fontSize: 13, fontWeight: 500,
                  color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
                  textDecoration: 'none', transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'white' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = isActive ? 'white' : 'rgba(255,255,255,0.5)' }}
                >{label}</Link>
              )
            })}
          </div>

          {/* Right side: CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link href="/contact" className="nav-cta" style={{
              background: ACCENT, color: 'white', borderRadius: 9999, padding: '8px 18px',
              fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
              textDecoration: 'none', whiteSpace: 'nowrap',
            }}>Book a Call</Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen(o => !o)}
              className="nav-hamburger"
              aria-label="Toggle menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '6px', display: 'none', flexDirection: 'column',
                gap: 5, alignItems: 'center', justifyContent: 'center',
              }}
            >
              <span style={{
                display: 'block', width: 22, height: 2, borderRadius: 2,
                background: open ? ACCENT : 'rgba(255,255,255,0.7)',
                transform: open ? 'rotate(45deg) translateY(7px)' : 'none',
                transition: 'all 0.25s',
              }} />
              <span style={{
                display: 'block', width: 22, height: 2, borderRadius: 2,
                background: open ? ACCENT : 'rgba(255,255,255,0.7)',
                opacity: open ? 0 : 1,
                transition: 'all 0.25s',
              }} />
              <span style={{
                display: 'block', width: 22, height: 2, borderRadius: 2,
                background: open ? ACCENT : 'rgba(255,255,255,0.7)',
                transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none',
                transition: 'all 0.25s',
              }} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className="nav-drawer"
        style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          zIndex: 40,
          background: 'rgba(4,13,18,0.97)',
          backdropFilter: 'blur(24px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 8,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transition: 'opacity 0.25s',
          fontFamily: "'Manrope', sans-serif",
        }}
      >
        {NAV_LINKS.map(({ label, href }, i) => (
          <Link key={label} href={href} style={{
            fontSize: 28, fontWeight: 700, color: 'white', textDecoration: 'none',
            padding: '12px 32px', borderRadius: 12,
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(12px)',
            transition: `opacity 0.3s ${i * 0.05 + 0.05}s, transform 0.3s ${i * 0.05 + 0.05}s`,
            letterSpacing: '-0.02em',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'white' }}
          >{label}</Link>
        ))}

        <div style={{ marginTop: 24 }}>
          <Link href="/contact" style={{
            background: ACCENT, color: 'white', borderRadius: 9999,
            padding: '14px 32px', fontSize: 14, fontWeight: 700,
            textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase',
            opacity: open ? 1 : 0,
            transition: 'opacity 0.3s 0.3s',
          }}>Book a Call</Link>
        </div>
      </div>
    </>
  )
}
