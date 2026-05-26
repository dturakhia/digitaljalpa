'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Services',     href: '/#services' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'About',        href: '/about' },
  { label: 'Contact',      href: '/contact' },
]

const EASE_OUT = [0.23, 1, 0.32, 1] as const

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        padding: '14px 16px',
      }}>
        <nav className="nav-inner" style={{
          maxWidth: 1040, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(4,13,18,0.96)' : 'rgba(4,13,18,0.7)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 'var(--r-pill)',
          padding: '9px 14px 9px 18px',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.5)' : '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'background 0.35s var(--ease-out), box-shadow 0.35s var(--ease-out)',
        }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <Image
              src="/images/logo.png"
              alt="Digital Jalpa"
              height={36}
              width={144}
              style={{ objectFit: 'contain', display: 'block' }}
            />
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 20, alignItems: 'center' }} className="nav-links">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = href.startsWith('/#')
                ? pathname === '/'
                : pathname.startsWith(href)
              return (
                <Link
                  key={label}
                  href={href}
                  style={{
                    fontSize: 13,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--text)' : 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.18s',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = isActive ? 'var(--text)' : 'var(--text-muted)' }}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          {/* CTA + hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link
              href="/contact"
              className="nav-cta"
              style={{
                background: 'var(--accent)',
                color: 'white',
                borderRadius: 'var(--r-pill)',
                padding: '8px 18px',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.18s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
            >
              Book a Call
            </Link>

            <button
              onClick={() => setOpen(o => !o)}
              className="nav-hamburger"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '6px', display: 'none', flexDirection: 'column',
                gap: 5, alignItems: 'center', justifyContent: 'center',
              }}
            >
              {[
                { rotate: open ? 'rotate(45deg) translateY(7px)' : 'none' },
                { opacity: open ? 0 : 1 },
                { rotate: open ? 'rotate(-45deg) translateY(-7px)' : 'none' },
              ].map((s, i) => (
                <span key={i} style={{
                  display: 'block', width: 22, height: 2, borderRadius: 2,
                  background: open ? 'var(--accent)' : 'rgba(255,255,255,0.7)',
                  transform: s.rotate ?? 'none',
                  opacity: s.opacity ?? 1,
                  transition: 'all 0.22s var(--ease-out)',
                }} />
              ))}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: 'rgba(4,13,18,0.97)',
              backdropFilter: 'blur(28px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: 4,
            }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE_OUT, delay: i * 0.06 + 0.06 }}
              >
                <Link
                  href={href}
                  style={{
                    display: 'block',
                    fontSize: 28, fontWeight: 700,
                    color: 'var(--text)',
                    textDecoration: 'none',
                    padding: '12px 32px',
                    borderRadius: 'var(--r-sm)',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)' }}
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: EASE_OUT, delay: 0.38 }}
              style={{ marginTop: 24 }}
            >
              <Link
                href="/contact"
                style={{
                  display: 'inline-block',
                  background: 'var(--accent)', color: 'white',
                  borderRadius: 'var(--r-pill)', padding: '14px 32px',
                  fontSize: 14, fontWeight: 700,
                  textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase',
                }}
              >
                Book a Call
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
