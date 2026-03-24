'use client'

/**
 * digitaljalpa — Brand Logo
 *
 * Mark: Geometric "J" with a glowing AI-node at the origin.
 * The J is built from a vertical bar + a rounded arc,
 * with a pulsing dot at the base — the "spark" of intelligence.
 *
 * Usage:
 *   <Logo />                  — full lockup (mark + wordmark), default
 *   <Logo variant="mark" />   — icon only (navbars, favicons)
 *   <Logo variant="light" />  — white wordmark (dark backgrounds)
 *   <Logo size={48} />        — custom height
 */

interface LogoProps {
  variant?: 'full' | 'mark' | 'light'
  size?: number
  className?: string
}

export function Logo({ variant = 'full', size = 40, className }: LogoProps) {
  const accent = '#0891B2'
  const white = '#FFFFFF'
  const dim = 'rgba(255,255,255,0.45)'

  // Mark: 40×40 viewBox
  const MarkSVG = ({ s }: { s: number }) => (
    <svg
      width={s}
      height={s}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer container — rounded square */}
      <rect width="40" height="40" rx="10" fill="rgba(8,145,178,0.1)" />
      <rect width="40" height="40" rx="10" stroke={accent} strokeWidth="1" fill="none" strokeOpacity="0.35" />

      {/* The J mark — vertical bar */}
      <rect x="20" y="8" width="5" height="18" rx="2.5" fill={accent} />

      {/* Horizontal top cap of J */}
      <rect x="14" y="8" width="11" height="4.5" rx="2.25" fill={accent} />

      {/* J arc — bottom curve (quarter circle) */}
      <path
        d="M 22.5 26 Q 22.5 33 15.5 33 Q 10 33 10 28"
        stroke={accent}
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* AI node — glowing dot at bottom of arc */}
      <circle cx="10" cy="28" r="4" fill="url(#nodeGlow)" />
      <circle cx="10" cy="28" r="2.5" fill={accent} filter="url(#glow)" />
      <circle cx="10" cy="28" r="1.2" fill={white} />

      {/* Tiny tick marks — suggesting data/AI */}
      <line x1="28" y1="14" x2="30" y2="14" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="28" y1="17" x2="31" y2="17" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.35" />
      <line x1="28" y1="20" x2="30" y2="20" stroke={accent} strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.2" />
    </svg>
  )

  if (variant === 'mark') {
    return <MarkSVG s={size} />
  }

  // Full lockup
  const wordmarkColor = variant === 'light' ? white : white
  const taglineColor = dim

  return (
    <div
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}
    >
      <MarkSVG s={size} />

      {/* Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 0 }}>
          <span style={{
            fontSize: size * 0.38,
            fontWeight: 400,
            color: taglineColor,
            letterSpacing: '0.01em',
            fontFamily: "'Manrope', sans-serif",
            lineHeight: 1,
          }}>
            digital
          </span>
          <span style={{
            fontSize: size * 0.42,
            fontWeight: 800,
            color: wordmarkColor,
            letterSpacing: '-0.02em',
            fontFamily: "'Manrope', sans-serif",
            lineHeight: 1,
          }}>
            jalpa
          </span>
        </div>
        <span style={{
          fontSize: size * 0.22,
          fontWeight: 600,
          color: accent,
          letterSpacing: '0.12em',
          textTransform: 'uppercase' as const,
          fontFamily: "'Manrope', sans-serif",
          lineHeight: 1,
        }}>
          AI Tools Expert
        </span>
      </div>
    </div>
  )
}
