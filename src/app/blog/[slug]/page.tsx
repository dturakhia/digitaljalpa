'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { StarField } from '@/components/StarField'
import allBlogPosts from '@/lib/blog'

const ACCENT = '#0891B2'

const CATEGORY_TEXT: Record<string, string> = {
  'Comparison':  '#0891B2',
  'How-To':      '#a78bfa',
  'Tool Review': '#4ade80',
  'Workflow':    '#fb923c',
  'Opinion':     '#f472b6',
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  const post = allBlogPosts.find(p => p.slug === slug)
  if (!post) notFound()

  return (
    <div style={{ background: '#040d12', color: 'white', minHeight: '100vh', fontFamily: "'Manrope', sans-serif" }}>
      <StarField />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 10, paddingTop: 120 }}>

        {/* Hero */}
        <section style={{ padding: '64px 24px 56px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>

            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32, fontSize: 13 }}>
              <Link href="/blog" style={{ color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'white' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.35)' }}
              >Blog</Link>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>›</span>
              <span style={{ color: CATEGORY_TEXT[post.category] || ACCENT, fontWeight: 600 }}>{post.category}</span>
            </div>

            {/* Category badge */}
            <div style={{ marginBottom: 20 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: CATEGORY_TEXT[post.category] || ACCENT,
                padding: '5px 14px', borderRadius: 9999,
                border: `1px solid ${CATEGORY_TEXT[post.category] || ACCENT}`,
                opacity: 0.85,
              }}>{post.category}</span>
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800,
              letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 24,
            }}>
              {post.title}
            </h1>

            {/* Description */}
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: 32 }}>
              {post.description}
            </p>

            {/* Meta row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#0891B2,#065e73)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 800, color: 'white',
                }}>J</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>Jalpa Turakhia</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>AI Tools Expert</div>
                </div>
              </div>
              <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.08)' }} />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{post.date}</span>
              <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.08)' }} />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section style={{ padding: '64px 24px' }}>
          <div
            style={{ maxWidth: 760, margin: '0 auto' }}
            className="dj-prose"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </section>

        {/* Tags */}
        <section style={{ padding: '0 24px 48px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {post.tags.map(tag => (
              <span key={tag} style={{
                fontSize: 12, color: 'rgba(255,255,255,0.4)',
                padding: '5px 14px', borderRadius: 9999,
                border: '1px solid rgba(255,255,255,0.1)',
              }}>{tag}</span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '0 24px 100px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{
              padding: 'clamp(36px,5vw,56px)',
              background: 'linear-gradient(135deg,rgba(8,145,178,0.12),rgba(4,13,18,0.8))',
              border: '1px solid rgba(8,145,178,0.3)',
              borderRadius: 24, textAlign: 'center',
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
                Not sure which tool is right for you?
              </div>
              <h3 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.2 }}>
                Book a Consultation — I'll tell you exactly which AI tools fit your project
              </h3>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
                You describe your project. I analyse your workflow and give you a concrete recommendation you can act on the same day.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/consultation" style={{
                  background: ACCENT, color: 'white', borderRadius: 9999,
                  padding: '14px 28px', fontSize: 14, fontWeight: 700, textDecoration: 'none',
                  boxShadow: `0 0 28px rgba(8,145,178,0.3)`,
                }}>View Consultation Packages →</Link>
                <Link href="/contact" style={{
                  background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)',
                  borderRadius: 9999, padding: '14px 28px',
                  fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>Send a Message</Link>
              </div>
            </div>
          </div>
        </section>

        {/* More posts */}
        <section style={{ padding: '0 24px 80px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 64 }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700 }}>More from the blog</h3>
              <Link href="/blog" style={{ fontSize: 13, color: ACCENT, textDecoration: 'none' }}>View all →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16 }}>
              {allBlogPosts.filter(p => p.slug !== post.slug).slice(0, 2).map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: 24, borderRadius: 16,
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    transition: 'border-color 0.2s',
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(8,145,178,0.3)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)' }}
                  >
                    <div style={{ fontSize: 11, color: CATEGORY_TEXT[p.category] || ACCENT, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>{p.category}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.4, marginBottom: 8 }}>{p.title}</h4>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{p.readTime}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
