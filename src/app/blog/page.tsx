'use client'

import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { StarField } from '@/components/StarField'
import allBlogPosts from '@/lib/blog'

const ACCENT = '#0891B2'

const CATEGORY_COLORS: Record<string, string> = {
  'Comparison':  'rgba(8,145,178,0.15)',
  'How-To':      'rgba(139,92,246,0.15)',
  'Tool Review': 'rgba(34,197,94,0.15)',
  'Workflow':    'rgba(251,146,60,0.15)',
  'Opinion':     'rgba(236,72,153,0.15)',
}
const CATEGORY_TEXT: Record<string, string> = {
  'Comparison':  '#0891B2',
  'How-To':      '#a78bfa',
  'Tool Review': '#4ade80',
  'Workflow':    '#fb923c',
  'Opinion':     '#f472b6',
}

export default function BlogPage() {
  return (
    <div style={{ background: '#040d12', color: 'white', minHeight: '100vh', fontFamily: "'Manrope', sans-serif" }}>
      <StarField />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 10, paddingTop: 120 }}>

        {/* Header */}
        <section style={{ padding: '80px 24px 64px', textAlign: 'center' }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 9999,
              background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(8,145,178,0.3)',
              marginBottom: 28,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, display: 'inline-block' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(8,145,178,0.9)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                AI Tools Blog
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
              The No-Fluff Guide to <span style={{ color: ACCENT }}>AI Tools</span>
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
              Real comparisons, honest reviews, and practical workflows — from someone who uses these tools every day with real clients.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section style={{ padding: '0 24px 120px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 24 }}>
              {allBlogPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <article style={{
                    padding: 32, borderRadius: 20, height: '100%',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    transition: 'border-color 0.2s, transform 0.2s',
                    display: 'flex', flexDirection: 'column', gap: 16,
                  }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(8,145,178,0.4)'
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                      ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                    }}
                  >
                    {/* Category + date */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                        padding: '4px 12px', borderRadius: 9999,
                        background: CATEGORY_COLORS[post.category] || 'rgba(255,255,255,0.06)',
                        color: CATEGORY_TEXT[post.category] || 'rgba(255,255,255,0.5)',
                      }}>{post.category}</span>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.35, color: 'white', margin: 0 }}>
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0, flex: 1 }}>
                      {post.description}
                    </p>

                    {/* Tags + arrow */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} style={{
                            fontSize: 11, color: 'rgba(255,255,255,0.3)',
                            padding: '2px 8px', borderRadius: 9999,
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}>{tag}</span>
                        ))}
                      </div>
                      <span style={{ color: ACCENT, fontSize: 16 }}>→</span>
                    </div>

                    {/* Date */}
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 12 }}>
                      {post.date}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
