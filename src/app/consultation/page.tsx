'use client'

import Link from 'next/link'
import { StarField } from '@/components/StarField'
import { Navbar } from '@/components/Navbar'

const ACCENT = '#0891B2'

const PACKAGES = [
  {
    name: 'Quick Clarity',
    price: '₹2,500',
    priceUSD: '$30',
    duration: '45-minute call',
    highlight: false,
    desc: 'Best for a specific question — which tool to use, how to approach one workflow, or a second opinion on your current AI setup.',
    features: [
      'Single 45-minute video call',
      'You bring the problem, I bring the answer',
      'Tool recommendation for your use case',
      'Follow-up summary notes after call',
    ],
    cta: 'Book Quick Clarity',
  },
  {
    name: 'Project Consultation',
    price: '₹8,000',
    priceUSD: '$95',
    duration: '2 × 60-minute sessions',
    highlight: true,
    desc: 'Best for a new project or workflow. We deep-dive your needs, map the right AI tools, and create a practical action plan you can implement immediately.',
    features: [
      '2 × 60-minute video sessions',
      'Full project needs analysis',
      'AI tool stack recommendation',
      'Step-by-step implementation plan',
      'Written report with all recommendations',
      '7 days email follow-up support',
    ],
    cta: 'Book Project Consultation',
  },
  {
    name: 'AI Mentoring',
    price: '₹18,000',
    priceUSD: '$215',
    duration: '4-week program',
    highlight: false,
    desc: 'For individuals or small teams who want to become genuinely capable with AI tools. Weekly sessions, real projects, hands-on learning.',
    features: [
      '4 × 60-minute weekly sessions',
      'Personalised AI learning roadmap',
      'Work on your actual projects',
      'Tool walkthroughs and live demos',
      'Between-session Slack/WhatsApp support',
      'End-of-program summary + resources',
    ],
    cta: 'Apply for Mentoring',
  },
]

const FAQS = [
  {
    q: 'Do I need to be technical to work with you?',
    a: 'Not at all. Most of my clients are non-technical — founders, marketers, consultants, creators. You bring the business problem, I handle the tool expertise.',
  },
  {
    q: 'What kind of projects do you consult on?',
    a: 'Anything AI-tool related: content automation, customer support bots, research workflows, internal tools, marketing pipelines, productivity systems. If there\'s an AI tool that can help, I can advise on it.',
  },
  {
    q: 'How is this different from just Googling which AI tool to use?',
    a: 'Google gives you generic listicles. I give you a recommendation based on your specific workflow, budget, team size, and goals — with the trade-offs explained and a plan to actually implement it.',
  },
  {
    q: 'Can I get an implementation done, not just advice?',
    a: 'Yes — if after consultation you want me to build the workflow for you, we can discuss a separate implementation engagement.',
  },
  {
    q: 'Do you offer team packages?',
    a: 'Yes. For teams of 3+, reach out via the contact page and I\'ll send a custom proposal.',
  },
]

export default function Consultation() {
  return (
    <div style={{ background: '#040d12', color: 'white', minHeight: '100vh', fontFamily: "'Manrope', sans-serif", overflowX: 'hidden' }}>
      <StarField />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 10, paddingTop: 120 }}>

        {/* ── HEADER ──────────────────────────────────────── */}
        <section style={{ padding: '80px 24px 80px', textAlign: 'center' }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 9999,
              background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)',
              marginBottom: 32,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(8,145,178,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Consultation & Mentoring
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24 }}>
              Stop Guessing. <span style={{ color: ACCENT }}>Get a Clear Answer.</span>
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
              You describe your project. I tell you exactly which AI tools to use, how to set them up, and what to avoid. No fluff — just a concrete plan you can act on the same day.
            </p>
          </div>
        </section>

        {/* ── PACKAGES ────────────────────────────────────── */}
        <section style={{ padding: '0 24px 120px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20, alignItems: 'start' }}>
              {PACKAGES.map(({ name, price, priceUSD, duration, highlight, desc, features, cta }) => (
                <div key={name} style={{
                  padding: 36,
                  background: highlight
                    ? 'linear-gradient(135deg,rgba(8,145,178,0.15),rgba(4,13,18,0.9))'
                    : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${highlight ? 'rgba(8,145,178,0.5)' : 'rgba(255,255,255,0.07)'}`,
                  borderRadius: 24,
                  position: 'relative',
                }}>
                  {highlight && (
                    <div style={{
                      position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                      background: ACCENT, color: 'white',
                      fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                      padding: '4px 16px', borderRadius: 9999,
                    }}>Most Popular</div>
                  )}
                  <div style={{ marginBottom: 8, fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{duration}</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8 }}>{name}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 20 }}>
                    <span style={{ fontSize: 36, fontWeight: 800, color: highlight ? ACCENT : 'white' }}>{price}</span>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)' }}>{priceUSD}</span>
                  </div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 28 }}>{desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                    {features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{ color: ACCENT, fontSize: 14, flexShrink: 0, marginTop: 2 }}>✓</span>
                        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" style={{
                    display: 'block', textAlign: 'center',
                    background: highlight ? ACCENT : 'rgba(255,255,255,0.06)',
                    color: 'white', borderRadius: 9999, padding: '13px 24px',
                    fontSize: 13, fontWeight: 700, textDecoration: 'none',
                    border: highlight ? 'none' : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: highlight ? `0 0 28px rgba(8,145,178,0.3)` : 'none',
                  }}>{cta} →</Link>
                </div>
              ))}
            </div>

            <p style={{ textAlign: 'center', marginTop: 32, fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>
              Not sure which package is right? <Link href="/contact" style={{ color: ACCENT, textDecoration: 'none' }}>Send me a message</Link> and I&apos;ll recommend one.
            </p>
          </div>
        </section>

        {/* ── WHAT TO EXPECT ──────────────────────────────── */}
        <section style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 56, textAlign: 'center' }}>
              What Happens <span style={{ color: ACCENT }}>in a Consultation</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 32 }}>
              {[
                { step: '01', title: 'You describe your project', desc: 'Tell me what you\'re trying to do — your workflow, your team, your budget. No preparation needed.' },
                { step: '02', title: 'I ask the right questions', desc: 'I dig into your actual use case. Not generic — specific to you and what will work for your situation.' },
                { step: '03', title: 'You get a clear recommendation', desc: 'Which tools to use, which to avoid, in which order, and why. Plus the trade-offs, honestly explained.' },
                { step: '04', title: 'You walk away with a plan', desc: 'Written summary after the call. Steps you can take immediately. No vague "explore AI" advice.' },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <div style={{ fontSize: 36, fontWeight: 800, color: 'rgba(8,145,178,0.25)', marginBottom: 16, letterSpacing: '-0.04em' }}>{step}</div>
                  <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{title}</h4>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────── */}
        <section style={{ padding: '80px 24px 120px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(24px,3vw,40px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 48, textAlign: 'center' }}>
              Common <span style={{ color: ACCENT }}>Questions</span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {FAQS.map(({ q, a }) => (
                <div key={q} style={{
                  padding: 28,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 16,
                }}>
                  <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>{q}</h4>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
