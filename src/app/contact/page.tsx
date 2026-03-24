'use client'

import Link from 'next/link'
import { useState } from 'react'
import { StarField } from '@/components/StarField'
import { Navbar } from '@/components/Navbar'

const ACCENT = '#0891B2'

const CONTACT_OPTIONS = [
  { icon: '📧', label: 'Email', value: 'jalpa@digitaljalpa.com', href: 'mailto:jalpa@digitaljalpa.com' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/digitaljalpa', href: 'https://linkedin.com/in/digitaljalpa' },
  { icon: '📸', label: 'Instagram', value: '@digitaljalpa', href: 'https://instagram.com/digitaljalpa' },
]

const SERVICES_OPTIONS = [
  'AI Tool Implementation',
  'AI Consultation',
  'AI Mentoring (1:1)',
  'Team Workshop',
  'Just a quick question',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build mailto with form data
    const subject = encodeURIComponent(`[digitaljalpa] ${formData.service || 'Enquiry'} — ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:jalpa@digitaljalpa.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 12, color: 'white',
    fontSize: 14, fontFamily: "'Manrope', sans-serif",
    outline: 'none',
  }

  return (
    <div style={{ background: '#040d12', color: 'white', minHeight: '100vh', fontFamily: "'Manrope', sans-serif", overflowX: 'hidden' }}>
      <StarField />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 10, paddingTop: 120 }}>

        {/* ── HEADER ──────────────────────────────────────── */}
        <section style={{ padding: '80px 24px 80px', textAlign: 'center' }}>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 9999,
              background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)',
              marginBottom: 32,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(8,145,178,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Get in Touch
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
              Let&apos;s Talk <span style={{ color: ACCENT }}>AI.</span>
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
              Whether you have a project in mind, a question, or just want to explore — send a message and I&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* ── FORM + CONTACT INFO ─────────────────────────── */}
        <section style={{ padding: '0 24px 120px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 48 }}>

            {/* Form */}
            <div>
              {submitted ? (
                <div style={{
                  padding: 48, textAlign: 'center',
                  background: 'rgba(8,145,178,0.08)', border: '1px solid rgba(8,145,178,0.3)',
                  borderRadius: 20,
                }}>
                  <div style={{ fontSize: 48, marginBottom: 20 }}>✓</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Message sent!</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Priya Mehta"
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="priya@yourbusiness.com"
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                      What are you looking for?
                    </label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="" style={{ background: '#040d12' }}>Select a service...</option>
                      {SERVICES_OPTIONS.map(s => (
                        <option key={s} value={s} style={{ background: '#040d12' }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>
                      Tell me about your project *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe what you're working on, what problem you're trying to solve, or what you want to learn..."
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      style={{ ...inputStyle, resize: 'vertical' as const }}
                    />
                  </div>

                  <button type="submit" style={{
                    background: ACCENT, color: 'white', border: 'none', borderRadius: 9999,
                    padding: '16px 32px', fontSize: 14, fontWeight: 700, cursor: 'pointer',
                    boxShadow: `0 0 28px rgba(8,145,178,0.3)`, fontFamily: "'Manrope', sans-serif",
                  }}>
                    Send Message →
                  </button>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
                    I reply within 24 hours.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingTop: 8 }}>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 12 }}>
                  Prefer to reach out directly?
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75 }}>
                  You can also find me on these platforms. I respond to DMs.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {CONTACT_OPTIONS.map(({ icon, label, value, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '18px 24px',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: 14, textDecoration: 'none',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(8,145,178,0.4)'
                      ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(8,145,178,0.05)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.07)'
                      ;(e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.02)'
                    }}
                  >
                    <span style={{ fontSize: 22 }}>{icon}</span>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>{label}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Book a call shortcut */}
              <div style={{
                padding: 28,
                background: 'linear-gradient(135deg,rgba(8,145,178,0.1),rgba(4,13,18,0.8))',
                border: '1px solid rgba(8,145,178,0.25)',
                borderRadius: 16,
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>Want to skip the form?</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, marginBottom: 20 }}>
                  Book a free 30-minute discovery call. No prep required — just show up.
                </p>
                <a href="mailto:jalpa@digitaljalpa.com?subject=Book%20a%20Discovery%20Call" style={{
                  display: 'inline-block',
                  background: ACCENT, color: 'white', borderRadius: 9999,
                  padding: '10px 22px', fontSize: 12, fontWeight: 700, textDecoration: 'none',
                }}>Book a Free Call →</a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
