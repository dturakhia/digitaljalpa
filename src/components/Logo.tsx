'use client'

interface LogoProps {
  height?: number
  showTagline?: boolean
}

export function Logo({ height = 48, showTagline = true }: LogoProps) {
  // Aspect ratio: 460 × 120 viewBox
  const width = height * (460 / 120)

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 460 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── MARK — rounded square ───────────────────── */}
      {/* Outer glow ring */}
      <rect x="2" y="2" width="116" height="116" rx="26" stroke="#0891B2" strokeWidth="1" strokeOpacity="0.2" />
      {/* Main box */}
      <rect x="5" y="5" width="110" height="110" rx="23" fill="#061820" />
      <rect x="5" y="5" width="110" height="110" rx="23" stroke="#0891B2" strokeWidth="1.5" strokeOpacity="0.5" />

      {/* ── J letterform — single uniform stroke ──── */}
      {/* Horizontal cap */}
      <line x1="36" y1="24" x2="80" y2="24" stroke="#0891B2" strokeWidth="10" strokeLinecap="round" />
      {/* Vertical stem + smooth bottom arc as one path */}
      <path
        d="M 70 24 L 70 75 C 70 97 36 97 36 80"
        stroke="#0891B2"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Node glow at arc tip */}
      <circle cx="36" cy="80" r="13" fill="#0891B2" fillOpacity="0.12" />
      <circle cx="36" cy="80" r="8"  fill="#0891B2" fillOpacity="0.28" />
      <circle cx="36" cy="80" r="4.5" fill="#0891B2" />
      <circle cx="36" cy="80" r="2"  fill="white" />

      {/* Tick marks — right of stem */}
      <line x1="80" y1="38" x2="88" y2="38" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.6" />
      <line x1="80" y1="50" x2="91" y2="50" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.4" />
      <line x1="80" y1="62" x2="88" y2="62" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.25" />

      {/* ── ORBIT DOT SEPARATOR ──────────────────────── */}
      {/* Orbit ring (dashed) */}
      <circle cx="148" cy="52" r="10" stroke="#0891B2" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 2" fill="none" />
      {/* Center dot */}
      <circle cx="148" cy="52" r="5" fill="#0891B2" fillOpacity="0.25" />
      <circle cx="148" cy="52" r="3" fill="#0891B2" />
      <circle cx="148" cy="52" r="1.3" fill="white" fillOpacity="0.9" />

      {/* ── WORDMARK ─────────────────────────────────── */}
      {/* "DIGITAL" — light weight */}
      <text
        x="168" y="66"
        fontFamily="system-ui,-apple-system,'Segoe UI',sans-serif"
        fontSize="38" fontWeight="300"
        fill="rgba(255,255,255,0.55)"
        letterSpacing="3"
      >DIGITAL</text>

      {/* "JALPA" — bold */}
      <text
        x="310" y="66"
        fontFamily="system-ui,-apple-system,'Segoe UI',sans-serif"
        fontSize="38" fontWeight="800"
        fill="white"
        letterSpacing="1"
      >JALPA</text>

      {/* Tagline */}
      {showTagline && (
        <text
          x="169" y="88"
          fontFamily="system-ui,-apple-system,'Segoe UI',sans-serif"
          fontSize="10" fontWeight="600"
          fill="#0891B2"
          letterSpacing="4"
        >AI TOOLS EXPERT</text>
      )}
    </svg>
  )
}

// Mark-only version (just the icon, for favicons / small contexts)
export function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2"  y="2"  width="116" height="116" rx="26" stroke="#0891B2" strokeWidth="1" strokeOpacity="0.2" />
      <rect x="5"  y="5"  width="110" height="110" rx="23" fill="#061820" />
      <rect x="5"  y="5"  width="110" height="110" rx="23" stroke="#0891B2" strokeWidth="1.5" strokeOpacity="0.5" />

      <line x1="36" y1="24" x2="80" y2="24" stroke="#0891B2" strokeWidth="10" strokeLinecap="round" />
      <path d="M 70 24 L 70 75 C 70 97 36 97 36 80" stroke="#0891B2" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <circle cx="36" cy="80" r="13"  fill="#0891B2" fillOpacity="0.12" />
      <circle cx="36" cy="80" r="8"   fill="#0891B2" fillOpacity="0.28" />
      <circle cx="36" cy="80" r="4.5" fill="#0891B2" />
      <circle cx="36" cy="80" r="2"   fill="white" />

      <line x1="80" y1="38" x2="88" y2="38" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.6" />
      <line x1="80" y1="50" x2="91" y2="50" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.4" />
      <line x1="80" y1="62" x2="88" y2="62" stroke="#0891B2" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.25" />
    </svg>
  )
}
