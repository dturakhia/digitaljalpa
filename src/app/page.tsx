'use client'

import Image from 'next/image'
import { StarField } from '@/components/StarField'

const ACCENT = '#0891B2'

export default function Home() {
  return (
    <div style={{ background: '#040d12', color: 'white', minHeight: '100vh', fontFamily: "'Manrope', sans-serif", overflowX: 'hidden' }}>
      <StarField />

      {/* NAVBAR */}
      <header style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, padding: '24px 16px' }}>
        <nav className="nav-inner" style={{
          maxWidth: 1000, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(4,13,18,0.75)', backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)', borderRadius: 9999,
          padding: '12px 28px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 16, height: 16, background: ACCENT, borderRadius: 3, transform: 'rotate(45deg)' }} />
            <span style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em' }}>digitaljalpa</span>
          </div>
          <div className="nav-links">
            {(['Services', 'About', 'Results', 'Contact'] as const).map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'white' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)' }}
              >{l}</a>
            ))}
          </div>
          <a href="mailto:jalpa@digitaljalpa.com" style={{
            background: ACCENT, color: 'white', borderRadius: 9999, padding: '8px 20px',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' as const,
            textDecoration: 'none',
          }}>Book a Call</a>
        </nav>
      </header>

      <main style={{ position: 'relative', zIndex: 10 }}>

        {/* HERO */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 24px 80px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap' as const }}>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 300 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 16px', borderRadius: 9999,
                background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)',
                marginBottom: 32,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, boxShadow: `0 0 6px ${ACCENT}`, display: 'inline-block' }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(8,145,178,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase' as const }}>
                  AI Tools Expert · India · Global Clients
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(40px,6vw,76px)', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: 24 }}>
                <span style={{ display: 'block', background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,0.45) 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI Tools That</span>
                <span style={{ display: 'block', background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,0.45) 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Actually Work for</span>
                <span style={{ display: 'block', color: ACCENT }}>Your Business</span>
              </h1>

              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: 460, marginBottom: 40 }}>
                I help startups and small businesses adopt AI tools to save time, reduce costs, and grow faster — without the overwhelm.
              </p>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
                <a href="mailto:jalpa@digitaljalpa.com" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: ACCENT, color: 'white', borderRadius: 9999, padding: '14px 28px',
                  fontSize: 14, fontWeight: 700, textDecoration: 'none',
                  boxShadow: `0 0 28px rgba(8,145,178,0.35)`,
                }}>Book a Free Discovery Call →</a>
                <a href="https://linkedin.com/in/digitaljalpa" target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.75)',
                  borderRadius: 9999, padding: '14px 28px',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>View LinkedIn</a>
              </div>

              <div style={{ display: 'flex', gap: 40, marginTop: 52 }}>
                {([['50+', 'Clients Helped'], ['200+', 'Hours Saved/mo'], ['10×', 'Faster Content']] as [string, string][]).map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: ACCENT }}>{n}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="hero-photo-wrap">
              <div style={{
                position: 'absolute', inset: '-2px',
                background: `linear-gradient(135deg,${ACCENT},transparent)`,
                borderRadius: 24,
              }} />
              <div className="hero-photo-inner">
                <Image src="/images/hero-1.jpg" alt="Jalpa Turakhia" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
              </div>
              <div style={{
                position: 'absolute', bottom: -20, left: -24, zIndex: 2,
                background: 'rgba(4,13,18,0.92)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(8,145,178,0.25)', borderRadius: 12,
                padding: '10px 16px',
              }}>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Specialization</div>
                <div style={{ fontSize: 12, fontWeight: 700 }}>AI × Marketing × Growth</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" style={{ padding: '80px 24px 120px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16 }}>
                What I Do for <span style={{ color: ACCENT }}>Your Business</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 460, margin: '0 auto' }}>Four focused services. Real results. No fluff.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
              {([
                { icon: '✦', title: 'AI Content Strategy', desc: 'Build a content machine powered by AI — blogs, captions, newsletters at 10× speed without losing your brand voice.', accent: true },
                { icon: '◈', title: 'AI-Powered Social Media', desc: 'Full AI-powered social pipelines from scripting to scheduling so you show up consistently without the burnout.', accent: false },
                { icon: '◉', title: 'AI Tools Training', desc: "Hands-on workshops for your team. ChatGPT, Claude, Midjourney, Notion AI — I'll train your crew on what actually fits.", accent: false },
                { icon: '◆', title: 'AI Marketing Consulting', desc: 'Strategic advisory on integrating AI into your marketing stack. Reduce costs, increase output, stay ahead.', accent: false },
              ] as { icon: string; title: string; desc: string; accent: boolean }[]).map(({ icon, title, desc, accent }) => (
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

        {/* TESTIMONIAL */}
        <div style={{ background: ACCENT, padding: '64px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 24, letterSpacing: 4 }}>★★★★★</div>
            <blockquote style={{ fontSize: 'clamp(18px,3vw,30px)', fontWeight: 700, color: 'black', lineHeight: 1.45, marginBottom: 32, fontStyle: 'italic' }}>
              &ldquo;Jalpa helped us cut our content creation time by 80% using AI tools. Our social presence has never been stronger.&rdquo;
            </blockquote>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14 }}>
              <div style={{ width: 44, height: 44, background: 'rgba(0,0,0,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>👤</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, color: 'black', fontSize: 15 }}>Priya Mehta</div>
                <div style={{ color: 'rgba(0,0,0,0.6)', fontSize: 12 }}>Founder, StyleCraft Studio</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section id="contact" style={{ padding: '120px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 20, lineHeight: 1.05 }}>
              Ready to <span style={{ color: ACCENT }}>Build?</span>
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', marginBottom: 44, lineHeight: 1.75 }}>
              Let&apos;s figure out which AI tools will save your team the most time — in a free 30-minute call.
            </p>
            <a href="mailto:jalpa@digitaljalpa.com" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: ACCENT, color: 'white', borderRadius: 9999, padding: '16px 36px',
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
              boxShadow: `0 0 40px rgba(8,145,178,0.4)`,
            }}>Book My Free Discovery Call →</a>
            <div style={{ marginTop: 28, fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>No sales pitch. No commitment. Just 30 minutes of value.</div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={{ background: '#020a0f', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '60px 24px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="footer-cols" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 32, marginBottom: 60 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 14, height: 14, background: ACCENT, borderRadius: 3, transform: 'rotate(45deg)' }} />
                <span style={{ fontSize: 18, fontWeight: 700 }}>digitaljalpa</span>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', maxWidth: 240, lineHeight: 1.75 }}>AI Tools Expert helping startups and small businesses grow with artificial intelligence.</p>
            </div>
            <div style={{ display: 'flex', gap: 48 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 20 }}>Services</div>
                {['AI Content Strategy', 'AI Social Media', 'AI Training', 'Consulting'].map(s => (
                  <a key={s} href="#services" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', marginBottom: 12 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'white' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.35)' }}
                  >{s}</a>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: ACCENT, textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 20 }}>Follow</div>
                {([['Instagram', 'https://instagram.com/digitaljalpa'], ['X / Twitter', 'https://x.com/digitaljalpa'], ['LinkedIn', 'https://linkedin.com/in/digitaljalpa'], ['YouTube', 'https://youtube.com/@digitaljalpa']] as [string, string][]).map(([n, u]) => (
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
            <span style={{ fontSize: 'clamp(60px,14vw,180px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, whiteSpace: 'nowrap' as const }}>JALPA</span>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' as const, gap: 12 }}>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>© 2025 Jalpa Turakhia. All rights reserved.</p>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase' as const, letterSpacing: '0.08em' }}>@digitaljalpa</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
