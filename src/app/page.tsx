'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { StarField } from '@/components/StarField'
import { Navbar } from '@/components/Navbar'

const ACCENT = 'var(--accent)'
const WARM   = 'var(--accent-warm)'
const EASE   = [0.23, 1, 0.32, 1] as const

// ── Motion helpers ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.58, ease: EASE } },
}

const stagger = (delay = 0) => ({
  hidden: {},
  show:   { transition: { staggerChildren: 0.09, delayChildren: delay } },
})

const cardStagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const cardFade = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

// ── Data ──────────────────────────────────────────────────────────
const SERVICES = [
  {
    icon: '◈',
    title: 'AI Tool Implementation',
    desc: 'You bring the problem. I find the right AI tool and build it into your workflow — from ChatGPT automations to custom LLM pipelines.',
    featured: true,
  },
  {
    icon: '◉',
    title: 'AI Consultation',
    desc: "Not sure which tool is right for your project? I'll analyse your needs and give you a clear, actionable recommendation — no jargon.",
    featured: false,
  },
  {
    icon: '✦',
    title: 'AI Mentoring',
    desc: '1:1 sessions over weeks or months. I walk alongside you as you learn and build confidence with AI tools that matter to your work.',
    featured: false,
  },
  {
    icon: '◆',
    title: 'Team Workshops',
    desc: 'Hands-on training for your team on the tools that will save the most time — ChatGPT, Claude, Notion AI, Midjourney, and more.',
    featured: false,
  },
]

const STATS: [string, string][] = [
  ['50+',  'Clients helped'],
  ['200+', 'Hours saved / mo'],
  ['30+',  'AI tools mastered'],
]

const TESTIMONIALS = [
  {
    name:  'Priya Mehta',
    role:  'Founder, StyleCraft Studio',
    quote: 'Jalpa helped us cut our content creation time by 80% using AI tools. Our social presence has never been stronger.',
  },
  {
    name:  'Rohan Desai',
    role:  'Product Manager, FinEdge',
    quote: "We had no idea which AI tools to use for our research pipeline. Jalpa's consultation saved us weeks of trial and error — and thousands in wasted spend.",
  },
  {
    name:  'Sneha Patel',
    role:  'Solo Founder, Nurtura',
    quote: 'The mentoring sessions changed how I work entirely. I now run a 5-person content operation solo with AI.',
  },
]

// ── Component ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100dvh', overflowX: 'hidden' }}>
      <StarField />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 10 }}>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', padding: '120px 24px 80px' }}>
          <div className="hero-row" style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>

            {/* Left — text */}
            <motion.div
              className="hero-text"
              variants={stagger(0.12)}
              initial="hidden"
              animate="show"
            >
              {/* Badge */}
              <motion.div variants={fadeUp} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 14px', borderRadius: 'var(--r-pill)',
                background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.28)',
                marginBottom: 32,
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: ACCENT, boxShadow: '0 0 6px var(--accent)',
                  display: 'inline-block', flexShrink: 0,
                }} />
                <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(8,145,178,0.9)', letterSpacing: '0.09em', textTransform: 'uppercase' }}>
                  AI Tools Expert · India · Global Clients
                </span>
              </motion.div>

              {/* H1 — serif italic display + sans punch */}
              <motion.h1 variants={fadeUp} style={{
                fontSize: 'clamp(40px,5.8vw,74px)',
                fontWeight: 700,
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                marginBottom: 24,
              }}>
                <span style={{
                  display: 'block',
                  fontFamily: 'var(--font-playfair)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,0.55) 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Your Go-To Expert
                </span>
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(180deg,#fff 0%,rgba(255,255,255,0.5) 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  for AI Tools that
                </span>
                <span style={{ display: 'block', color: ACCENT }}>
                  Get Things Done.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} style={{
                fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.78,
                maxWidth: 460, marginBottom: 40,
              }}>
                I implement AI tools for businesses, consult on which tools to use for your project, and mentor teams to build confidently with AI — from idea to execution.
              </motion.p>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/consultation" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: ACCENT, color: 'white', borderRadius: 'var(--r-pill)',
                  padding: '13px 28px', fontSize: 14, fontWeight: 700, textDecoration: 'none',
                  boxShadow: '0 0 28px rgba(8,145,178,0.38)',
                  transition: 'opacity 0.18s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
                >
                  Book a Consultation →
                </Link>
                <Link href="/about" style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: 'var(--bg-surface)', color: 'var(--text-muted)',
                  borderRadius: 'var(--r-pill)', padding: '13px 28px',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  border: '1px solid var(--border)',
                  transition: 'color 0.18s, border-color 0.18s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.18)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)' }}
                >
                  About Jalpa
                </Link>
              </motion.div>

              {/* Stats — amber for numbers, break the cyan monotony */}
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: 40, marginTop: 52 }}>
                {STATS.map(([n, l], i) => (
                  <div key={l}>
                    <div style={{
                      fontSize: 28, fontWeight: 800,
                      color: i === 0 ? WARM : ACCENT,
                      letterSpacing: '-0.02em',
                    }}>{n}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 4, letterSpacing: '0.01em' }}>{l}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — photo */}
            <motion.div
              className="hero-photo-wrap"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
            >
              <div style={{
                position: 'absolute', inset: '-2px',
                background: `linear-gradient(135deg, var(--accent), transparent)`,
                borderRadius: 'calc(var(--r-xl) + 2px)',
              }} />
              <div className="hero-photo-inner">
                <Image
                  src="/images/jalpa-avatar.jpg"
                  alt="Jalpa Turakhia"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                />
              </div>
              <div className="hero-photo-badge">
                <div style={{ fontSize: 10, color: 'var(--text-dim)', marginBottom: 2, letterSpacing: '0.04em' }}>Specialization</div>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.01em' }}>AI Tools · Implementation · Mentoring</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES ──────────────────────────────────────────── */}
        <section id="services" style={{ padding: '80px 24px 120px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>

            {/* Section heading — left-aligned */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: EASE }}
              style={{ marginBottom: 56 }}
            >
              <div style={{
                fontSize: 11, fontWeight: 700, color: ACCENT,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16,
              }}>
                What I do
              </div>
              <h2 style={{
                fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700,
                letterSpacing: '-0.03em', lineHeight: 1.12,
              }}>
                How I Can{' '}
                <em style={{
                  fontFamily: 'var(--font-playfair)',
                  fontStyle: 'italic', fontWeight: 400, color: ACCENT,
                }}>
                  Help You
                </em>
              </h2>
              <p style={{
                fontSize: 16, color: 'var(--text-muted)',
                maxWidth: 480, marginTop: 16, lineHeight: 1.75,
              }}>
                Whether you need a tool built, a strategy, hands-on learning, or just a straight answer on which AI fits your project.
              </p>
            </motion.div>

            {/* Featured card — full width, horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: EASE }}
              style={{ marginBottom: 16 }}
            >
              <div
                style={{
                  display: 'flex', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap',
                  padding: 'clamp(32px,5vw,48px)',
                  background: 'linear-gradient(135deg, rgba(8,145,178,0.13), rgba(4,13,18,0.7))',
                  border: '1px solid rgba(8,145,178,0.38)',
                  borderRadius: 'var(--r-lg)',
                  transition: 'transform 0.22s var(--ease-out)',
                  cursor: 'default',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)' }}
              >
                <div style={{
                  fontSize: 52, color: ACCENT, lineHeight: 1,
                  flexShrink: 0, opacity: 0.9,
                }}>◈</div>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <div style={{
                    display: 'inline-block',
                    fontSize: 10, fontWeight: 700, color: ACCENT,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    marginBottom: 12,
                    padding: '3px 10px',
                    border: '1px solid rgba(8,145,178,0.3)',
                    borderRadius: 'var(--r-pill)',
                  }}>
                    Most popular
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800,
                    letterSpacing: '-0.025em', marginBottom: 12,
                  }}>
                    AI Tool Implementation
                  </h3>
                  <p style={{
                    fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.78,
                    maxWidth: 560, marginBottom: 24,
                  }}>
                    You bring the problem. I find the right AI tool and build it into your workflow — from ChatGPT automations to custom LLM pipelines. Most clients see results within two weeks.
                  </p>
                  <Link href="/consultation" style={{
                    fontSize: 13, fontWeight: 700, color: ACCENT,
                    textDecoration: 'none', letterSpacing: '0.02em',
                    transition: 'opacity 0.15s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
                  >
                    Start a project →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Three supporting cards */}
            <motion.div
              className="services-grid"
              variants={cardStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 16,
              }}
            >
              {SERVICES.filter(s => !s.featured).map(({ icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={cardFade}
                  style={{
                    padding: 28,
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-lg)',
                    cursor: 'default',
                    transition: 'transform 0.22s var(--ease-out), border-color 0.22s',
                  }}
                  whileHover={{ y: -4 }}
                >
                  <div style={{ fontSize: 22, color: ACCENT, marginBottom: 16, opacity: 0.85 }}>{icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10, letterSpacing: '-0.02em' }}>{title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75 }}>{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CONSULTATION TEASER ────────────────────────────────── */}
        <section style={{ padding: '0 24px 120px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: EASE }}
              style={{
                background: 'linear-gradient(135deg, rgba(8,145,178,0.09), rgba(4,13,18,0.5))',
                border: '1px solid rgba(8,145,178,0.22)',
                borderRadius: 'var(--r-xl)',
                padding: 'clamp(40px,6vw,68px)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', flexWrap: 'wrap', gap: 32,
              }}
            >
              <div style={{ maxWidth: 560 }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: ACCENT,
                  textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16,
                }}>
                  Not sure where to start?
                </div>
                <h3 style={{
                  fontSize: 'clamp(22px,3vw,36px)', fontWeight: 700,
                  letterSpacing: '-0.03em', marginBottom: 16, lineHeight: 1.22,
                }}>
                  Book a Consultation — I&apos;ll Tell You Exactly Which AI Tools Fit Your Project
                </h3>
                <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.78 }}>
                  No fluff, no generic advice. You describe your project, I analyse your workflow, and you leave with a concrete recommendation you can act on the same day.
                </p>
              </div>
              <Link href="/consultation" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                whiteSpace: 'nowrap', flexShrink: 0,
                background: ACCENT, color: 'white', borderRadius: 'var(--r-pill)',
                padding: '15px 30px', fontSize: 14, fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 0 30px rgba(8,145,178,0.28)',
                transition: 'opacity 0.18s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
              >
                View packages →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────── */}
        <section id="results" style={{ padding: '80px 24px 120px', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: EASE }}
              style={{ marginBottom: 56 }}
            >
              <div style={{
                fontSize: 11, fontWeight: 700, color: ACCENT,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16,
              }}>
                Client results
              </div>
              <h2 style={{
                fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700,
                letterSpacing: '-0.03em', lineHeight: 1.12,
              }}>
                What Clients{' '}
                <em style={{
                  fontFamily: 'var(--font-playfair)',
                  fontStyle: 'italic', fontWeight: 400, color: ACCENT,
                }}>
                  Say
                </em>
              </h2>
            </motion.div>

            <motion.div
              variants={cardStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}
            >
              {TESTIMONIALS.map(({ name, role, quote }) => (
                <motion.div
                  key={name}
                  variants={cardFade}
                  style={{
                    padding: '36px 32px 32px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-lg)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Decorative quote mark */}
                  <div style={{
                    position: 'absolute', top: 12, right: 20,
                    fontSize: 88, lineHeight: 1,
                    fontFamily: 'var(--font-playfair)',
                    color: 'rgba(8,145,178,0.12)',
                    pointerEvents: 'none', userSelect: 'none',
                    fontStyle: 'italic',
                  }}>
                    &ldquo;
                  </div>

                  <p style={{
                    fontSize: 15.5,
                    color: 'rgba(255,255,255,0.72)',
                    lineHeight: 1.82,
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-playfair)',
                    marginBottom: 28,
                    position: 'relative',
                  }}>
                    {quote}
                  </p>

                  <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: '0.01em' }}>{name}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 4 }}>{role}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section style={{ padding: '100px 24px', borderTop: '1px solid var(--border)' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: EASE }}
            style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}
          >
            <h2 style={{
              fontSize: 'clamp(36px,6vw,68px)',
              fontWeight: 800, letterSpacing: '-0.04em',
              marginBottom: 20, lineHeight: 1.04,
            }}>
              Ready to{' '}
              <em style={{
                fontFamily: 'var(--font-playfair)',
                fontStyle: 'italic', fontWeight: 400, color: ACCENT,
              }}>
                Build?
              </em>
            </h2>
            <p style={{
              fontSize: 17, color: 'var(--text-muted)',
              marginBottom: 44, lineHeight: 1.78,
            }}>
              Let&apos;s talk about your project and figure out the right AI tools — in a free 30-minute discovery call.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: ACCENT, color: 'white', borderRadius: 'var(--r-pill)',
                padding: '15px 34px', fontSize: 15, fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 0 40px rgba(8,145,178,0.38)',
                transition: 'opacity 0.18s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
              >
                Book my free discovery call →
              </Link>
              <Link href="/consultation" style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'var(--bg-surface)', color: 'var(--text-muted)',
                borderRadius: 'var(--r-pill)', padding: '15px 34px',
                fontSize: 15, fontWeight: 600, textDecoration: 'none',
                border: '1px solid var(--border)',
                transition: 'color 0.18s, border-color 0.18s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.18)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)' }}
              >
                View packages
              </Link>
            </div>
            <div style={{ marginTop: 28, fontSize: 12, color: 'var(--text-dim)' }}>
              No sales pitch. No commitment. Just clarity.
            </div>
          </motion.div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <footer style={{
        background: 'var(--bg-footer)',
        borderTop: '1px solid var(--border)',
        padding: '60px 24px 32px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="footer-cols">
            <div>
              <div style={{ marginBottom: 16 }}>
                <Image src="/images/logo.png" alt="Digital Jalpa" height={44} width={176} style={{ objectFit: 'contain' }} />
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-dim)', maxWidth: 240, lineHeight: 1.78 }}>
                I implement, consult on, and teach AI tools that actually move the needle for your business.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 48 }}>
              <div>
                <div style={{
                  fontSize: 10, fontWeight: 700, color: ACCENT,
                  textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20,
                }}>
                  Pages
                </div>
                {([
                  ['Services',     '/#services'],
                  ['Consultation', '/consultation'],
                  ['About',        '/about'],
                  ['Contact',      '/contact'],
                ] as [string, string][]).map(([label, href]) => (
                  <Link key={label} href={href} style={{
                    display: 'block', fontSize: 13, color: 'var(--text-dim)',
                    textDecoration: 'none', marginBottom: 12, transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-dim)' }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div>
                <div style={{
                  fontSize: 10, fontWeight: 700, color: ACCENT,
                  textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20,
                }}>
                  Follow
                </div>
                {([
                  ['Instagram', 'https://instagram.com/digitaljalpa'],
                  ['LinkedIn',  'https://linkedin.com/in/digitaljalpa'],
                  ['X / Twitter', 'https://x.com/digitaljalpa'],
                  ['YouTube',   'https://youtube.com/@digitaljalpa'],
                ] as [string, string][]).map(([n, u]) => (
                  <a key={n} href={u} target="_blank" rel="noopener noreferrer" style={{
                    display: 'block', fontSize: 13, color: 'var(--text-dim)',
                    textDecoration: 'none', marginBottom: 12, transition: 'color 0.15s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-dim)' }}
                  >
                    {n}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Watermark */}
          <div style={{
            textAlign: 'center', opacity: 0.04,
            pointerEvents: 'none', marginBottom: 32, overflow: 'hidden',
          }}>
            <span style={{
              fontSize: 'clamp(60px,14vw,180px)',
              fontWeight: 800, letterSpacing: '-0.04em',
              lineHeight: 1, whiteSpace: 'nowrap',
            }}>
              JALPA
            </span>
          </div>

          <div style={{
            borderTop: '1px solid var(--border)', paddingTop: 24,
            display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
          }}>
            <p style={{ fontSize: 11, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              © 2026 Jalpa Turakhia. All rights reserved.
            </p>
            <p style={{ fontSize: 11, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              @digitaljalpa
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
