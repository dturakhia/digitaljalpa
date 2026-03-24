'use client'

import Image from 'next/image'
import Link from 'next/link'
import { StarField } from '@/components/StarField'
import { Navbar } from '@/components/Navbar'
import { Logo } from '@/components/Logo'

const ACCENT = '#0891B2'

const SERVICES = [
  {
    icon: '◈',
    title: 'AI Tool Implementation',
    desc: 'You bring the problem. I find the right AI tool and build it into your workflow — from ChatGPT automations to custom LLM pipelines.',
    accent: true,
  },
  {
    icon: '◉',
    title: 'AI Consultation',
    desc: "Not sure which tool is right for your project? I'll analyse your needs, compare the options, and give you a clear recommendation — no jargon.",
    accent: false,
  },
  {
    icon: '✦',
    title: 'AI Mentoring',
    desc: '1:1 sessions over weeks or months. I walk alongside you as you learn, experiment, and build confidence with AI tools that matter to your work.',
    accent: false,
  },
  {
    icon: '◆',
    title: 'Team Workshops',
    desc: 'Hands-on training for your team on the tools that will save them the most time — ChatGPT, Claude, Notion AI, Midjourney, and more.',
    accent: false,
  },
]

const STATS = [
  ['50+', 'Clients Helped'],
  ['200+', 'Hours Saved / mo'],
  ['30+', 'AI Tools Mastered'],
]

const RESULTS = [
  { name: 'Priya Mehta', role: 'Founder, StyleCraft Studio', quote: 'Jalpa helped us cut our content creation time by 80% using AI tools. Our social presence has never been stronger.' },
  { name: 'Rohan Desai', role: 'Product Manager, FinEdge', quote: "We had no idea which AI tools to use for our research pipeline. Jalpa's consultation saved us weeks of trial and error — and thousands in wasted spend." },
  { name: 'Sneha Patel', role: 'Solo Founder, Nurtura', quote: 'The mentoring sessions with Jalpa changed how I work entirely. I now run a 5-person content operation solo with AI.' },
]

export default function Home() {
  return (
    <div style={{ background: '#040d12', color: 'white', minHeight: '100vh', fontFamily: "'Manrope', sans-serif", overflowX: 'hidden' }}>
      <StarField />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 10 }}>

        {/* ── HERO ────────────────────────────────────────────── */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 24px 80px' }}>
          <div className="hero-row" style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>

            <div className="hero-text">
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', borderRadius: 9999,
                background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)',
                marginBottom: 32,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, boxShadow: `0 0 6px ${ACCENT}`, display: 'inline-block' }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(8,145,178,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  AI Tools Expert · India · Global Clients
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(40px,6vw,76px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 24 }}>
                <span style={{ display: 'block', background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,0.45) 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Go-To Expert</span>
                <span style={{ display: 'block', background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,0.45) 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for AI Tools that</span>
                <span style={{ display: 'block', color: ACCENT }}>Get Things Done.</span>
              </h1>

              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 460, marginBottom: 40 }}>
                I implement AI tools for businesses, consult on which tools to use for your project, and mentor teams to build confidently with AI — from idea to execution.
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="/consultation" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: ACCENT, color: 'white', borderRadius: 9999, padding: '14px 28px',
                  fontSize: 14, fontWeight: 700, textDecoration: 'none',
                  boxShadow: `0 0 28px rgba(8,145,178,0.35)`,
                }}>Book a Consultation →</Link>
                <Link href="/about" style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.75)',
                  borderRadius: 9999, padding: '14px 28px',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>About Jalpa</Link>
              </div>

              <div style={{ display: 'flex', gap: 40, marginTop: 52 }}>
                {STATS.map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>{n}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Avatar */}
            <div className="hero-photo-wrap">
              <div style={{ position: 'absolute', inset: '-2px', background: `linear-gradient(135deg,${ACCENT},transparent)`, borderRadius: 24 }} />
              <div className="hero-photo-inner">
                <Image src="/images/jalpa-avatar.jpg" alt="Jalpa Turakhia" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
              </div>
              <div className="hero-photo-badge">
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Specialization</div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>AI Tools · Implementation · Mentoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ────────────────────────────────────────── */}
        <section id="services" style={{ padding: '80px 24px 120px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}>
                How I Can <span style={{ color: ACCENT }}>Help You</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 500, margin: '0 auto' }}>
                Whether you need a tool built, a strategy, hands-on learning, or just a straight answer on which AI is right for your project.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
              {SERVICES.map(({ icon, title, desc, accent }) => (
                <div key={title}
                  style={{
                    padding: 32,
                    background: accent ? 'linear-gradient(135deg,rgba(8,145,178,0.12),rgba(4,13,18,0.8))' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${accent ? 'rgba(8,145,178,0.4)' : 'rgba(255,255,255,0.06)'}`,
                    borderRadius: 20, cursor: 'default', transition: 'transform 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)' }}
                >
                  <div style={{ fontSize: 24, color: ACCENT, marginBottom: 16 }}>{icon}</div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONSULTATION TEASER ──────────────────────────────── */}
        <section style={{ padding: '0 24px 120px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{
              background: 'linear-gradient(135deg,rgba(8,145,178,0.1),rgba(4,13,18,0.6))',
              border: '1px solid rgba(8,145,178,0.25)', borderRadius: 24,
              padding: 'clamp(40px,6vw,72px)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: 32,
            }}>
              <div style={{ maxWidth: 560 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                  🔍 Not sure where to start?
                </div>
                <h3 style={{ fontSize: 'clamp(24px,3vw,38px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.2 }}>
                  Book a Consultation — I&apos;ll Tell You Exactly Which AI Tools Fit Your Project
                </h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
                  No fluff, no generic advice. You describe your project, I analyse your workflow, and you leave with a concrete recommendation you can act on the same day.
                </p>
              </div>
              <Link href="/consultation" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
                background: ACCENT, color: 'white', borderRadius: 9999, padding: '16px 32px',
                fontSize: 14, fontWeight: 700, textDecoration: 'none', flexShrink: 0,
                boxShadow: `0 0 32px rgba(8,145,178,0.3)`,
              }}>View Consultation Packages →</Link>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────────── */}
        <section id="results" style={{ padding: '80px 24px 120px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}>
                What Clients <span style={{ color: ACCENT }}>Say</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
              {RESULTS.map(({ name, role, quote }) => (
                <div key={name} style={{
                  padding: 32,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 20,
                }}>
                  <div style={{ fontSize: 20, color: ACCENT, marginBottom: 16, letterSpacing: 2 }}>★★★★★</div>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24 }}>
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{name}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section style={{ padding: '100px 24px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20, lineHeight: 1.05 }}>
              Ready to <span style={{ color: ACCENT }}>Build?</span>
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', marginBottom: 44, lineHeight: 1.75 }}>
              Let&apos;s talk about your project and figure out the right AI tools — in a free 30-minute discovery call.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: ACCENT, color: 'white', borderRadius: 9999, padding: '16px 36px',
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
                boxShadow: `0 0 40px rgba(8,145,178,0.4)`,
              }}>Book My Free Discovery Call →</Link>
              <Link href="/consultation" style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.75)',
                borderRadius: 9999, padding: '16px 36px',
                fontSize: 15, fontWeight: 600, textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>View Packages</Link>
            </div>
            <div style={{ marginTop: 28, fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>No sales pitch. No commitment. Just clarity.</div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer style={{ background: '#020a0f', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 24px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="footer-cols">
            <div>
              <div style={{ marginBottom: 16 }}>
                <Logo size={36} />
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', maxWidth: 240, lineHeight: 1.75 }}>I implement, consult on, and teach AI tools that actually move the needle for your business.</p>
            </div>
            <div style={{ display: 'flex', gap: 48 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>Pages</div>
                {[
                  ['Services', '/#services'],
                  ['Consultation', '/consultation'],
                  ['About', '/about'],
                  ['Contact', '/contact'],
                ].map(([label, href]) => (
                  <Link key={label} href={href} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', marginBottom: 12 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'white' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.35)' }}
                  >{label}</Link>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>Follow</div>
                {([
                  ['Instagram', 'https://instagram.com/digitaljalpa'],
                  ['LinkedIn', 'https://linkedin.com/in/digitaljalpa'],
                  ['X / Twitter', 'https://x.com/digitaljalpa'],
                  ['YouTube', 'https://youtube.com/@digitaljalpa'],
                ] as [string, string][]).map(([n, u]) => (
                  <a key={n} href={u} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', marginBottom: 12 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'white' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.35)' }}
                  >{n}</a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', opacity: 0.04, pointerEvents: 'none', marginBottom: 32, overflow: 'hidden' }}>
            <span style={{ fontSize: 'clamp(60px,14vw,180px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, whiteSpace: 'nowrap' }}>JALPA</span>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>© 2026 Jalpa Turakhia. All rights reserved.</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>@digitaljalpa</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
