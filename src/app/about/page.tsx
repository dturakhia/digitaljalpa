'use client'

import Image from 'next/image'
import Link from 'next/link'
import { StarField } from '@/components/StarField'
import { Navbar } from '@/components/Navbar'

const ACCENT = '#0891B2'

const TOOLS = [
  'ChatGPT', 'Claude', 'Gemini', 'Midjourney', 'DALL·E', 'Runway', 'ElevenLabs',
  'Notion AI', 'Perplexity', 'Make.com', 'Zapier AI', 'n8n', 'LangChain',
  'Cursor', 'GitHub Copilot', 'Kling AI', 'HeyGen', 'Synthesia',
]

const TIMELINE = [
  { year: '2020', event: 'Started as a digital marketing consultant helping small businesses get online.' },
  { year: '2022', event: 'Discovered AI tools and became obsessed — spent a year learning everything available.' },
  { year: '2023', event: 'Shifted focus entirely to AI tools. Started implementing them for clients full-time.' },
  { year: '2024', event: '50+ clients helped. Built AI workflows saving a combined 200+ hours per month.' },
  { year: '2025', event: 'Launched mentoring and consultation programs to teach AI tools at scale.' },
  { year: '2026', event: 'Going global. Helping businesses and individuals worldwide work smarter with AI.' },
]

export default function About() {
  return (
    <div style={{ background: '#040d12', color: 'white', minHeight: '100vh', fontFamily: "'Manrope', sans-serif", overflowX: 'hidden' }}>
      <StarField />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 10, paddingTop: 120 }}>

        {/* ── HERO ───────────────────────────────────────── */}
        <section style={{ padding: '80px 24px 80px' }}>
          <div className="hero-row" style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
            <div className="hero-text">
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', borderRadius: 9999,
                background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)',
                marginBottom: 32,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, display: 'inline-block' }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(8,145,178,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  The Person Behind digitaljalpa
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 24 }}>
                Hi, I&apos;m Jalpa. <br />
                <span style={{ color: ACCENT }}>I live and breathe AI tools.</span>
              </h1>

              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 520, marginBottom: 24 }}>
                I&apos;m an AI Tools Expert based in India, working with clients globally. I help businesses and individuals stop wondering about AI and start using it — by implementing the right tools, consulting on the right approach, and mentoring people through the learning curve.
              </p>

              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: 520, marginBottom: 40 }}>
                I&apos;m not a developer. I&apos;m not a theorist. I&apos;m someone who has spent years getting their hands dirty with every major AI tool available — so you don&apos;t have to spend months figuring it out yourself.
              </p>

              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: ACCENT, color: 'white', borderRadius: 9999, padding: '14px 28px',
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
                boxShadow: `0 0 28px rgba(8,145,178,0.3)`,
              }}>Let&apos;s Talk →</Link>
            </div>

            {/* Avatar */}
            <div className="hero-photo-wrap">
              <div style={{ position: 'absolute', inset: '-2px', background: `linear-gradient(135deg,${ACCENT},transparent)`, borderRadius: 24 }} />
              <div className="hero-photo-inner">
                <Image src="/images/jalpa-avatar.jpg" alt="Jalpa Turakhia" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
              </div>
              <div className="hero-photo-badge">
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Based In</div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>India · Global Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT I BELIEVE ──────────────────────────────── */}
        <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 32, lineHeight: 1.2 }}>
              My Belief: <span style={{ color: ACCENT }}>AI Tools Are for Everyone.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.9, marginBottom: 24 }}>
              The biggest myth about AI is that you need to be technical to use it well. You don&apos;t. You need clarity on your goals, the right tool for the job, and someone who can show you how they fit together.
            </p>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.9 }}>
              That&apos;s what I do. Whether you&apos;re a solo founder trying to do more with less, a team that keeps hearing about AI but doesn&apos;t know where to start, or a business owner who just wants someone to handle it — I&apos;ve got you.
            </p>
          </div>
        </section>

        {/* ── JOURNEY ─────────────────────────────────────── */}
        <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 56, textAlign: 'center' }}>
              The <span style={{ color: ACCENT }}>Journey</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {TIMELINE.map(({ year, event }, i) => (
                <div key={year} style={{ display: 'flex', gap: 32, paddingBottom: i < TIMELINE.length - 1 ? 40 : 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(8,145,178,0.15)', border: '1px solid rgba(8,145,178,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: ACCENT }}>
                      {year}
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div style={{ width: 1, flex: 1, background: 'rgba(8,145,178,0.2)', marginTop: 8 }} />
                    )}
                  </div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, paddingTop: 12 }}>{event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS ───────────────────────────────────────── */}
        <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16, textAlign: 'center' }}>
              Tools I Work With <span style={{ color: ACCENT }}>Every Day</span>
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginBottom: 48 }}>
              Not a feature comparison. Hands-on experience with all of these.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              {TOOLS.map(tool => (
                <span key={tool} style={{
                  padding: '8px 20px', borderRadius: 9999,
                  background: 'rgba(8,145,178,0.07)', border: '1px solid rgba(8,145,178,0.2)',
                  fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.7)',
                }}>{tool}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section style={{ padding: '100px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 560, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 20, lineHeight: 1.15 }}>
              Want to work <span style={{ color: ACCENT }}>together?</span>
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', marginBottom: 40, lineHeight: 1.75 }}>
              Whether you need a tool built, a consultation, or ongoing mentoring — start with a free 30-minute call.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                background: ACCENT, color: 'white', borderRadius: 9999, padding: '14px 32px',
                fontSize: 14, fontWeight: 700, textDecoration: 'none',
                boxShadow: `0 0 32px rgba(8,145,178,0.3)`,
              }}>Book a Free Call →</Link>
              <Link href="/consultation" style={{
                background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.7)',
                borderRadius: 9999, padding: '14px 32px',
                fontSize: 14, fontWeight: 600, textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>View Packages</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
