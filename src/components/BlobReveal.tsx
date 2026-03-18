'use client'

import { useEffect, useRef } from 'react'
import { createNoise2D } from 'simplex-noise'

const BLOB_RADIUS    = 185
const NOISE_STRENGTH = 0.33
const LERP_SPEED     = 0.09
const TRAIL_LIFE     = 650
const PTS            = 12

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

interface Trail { x: number; y: number; r: number; createdAt: number }

interface BlobRevealProps {
  onMouseMove?: (x: number, y: number) => void
}

function blobPath(
  cx: number, cy: number, r: number,
  noiseOff: number,
  noise: ReturnType<typeof createNoise2D>
): string {
  const pts: [number, number][] = []
  for (let i = 0; i < PTS; i++) {
    const a  = (i / PTS) * Math.PI * 2
    const n  = noise(Math.cos(a) * 2 + noiseOff, Math.sin(a) * 2 + noiseOff)
    const rr = r * (1 + n * NOISE_STRENGTH)
    pts.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)])
  }
  const segs: string[] = [`M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`]
  for (let i = 0; i < PTS; i++) {
    const p0 = pts[(i - 1 + PTS) % PTS]
    const p1 = pts[i]
    const p2 = pts[(i + 1) % PTS]
    const p3 = pts[(i + 2) % PTS]
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6
    segs.push(`C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)} ${cp2x.toFixed(1)} ${cp2y.toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`)
  }
  segs.push('Z')
  return segs.join(' ')
}

export function BlobReveal({ onMouseMove }: BlobRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const revealRef    = useRef<HTMLDivElement>(null)
  const mouseRef     = useRef({ x: -999, y: -999 })
  const blobRef      = useRef({ x: -999, y: -999 })
  const trailsRef    = useRef<Trail[]>([])
  const rafRef       = useRef<number>(0)
  const noiseRef     = useRef(createNoise2D())
  const timeRef      = useRef(0)
  const lastTrailRef = useRef({ x: 0, y: 0, time: 0 })

  useEffect(() => {
    const container = containerRef.current
    const reveal    = revealRef.current
    if (!container || !reveal) return

    const animate = () => {
      const { x: mx, y: my } = mouseRef.current
      const blob = blobRef.current

      blob.x = lerp(blob.x < -900 ? mx : blob.x, mx, LERP_SPEED)
      blob.y = lerp(blob.y < -900 ? my : blob.y, my, LERP_SPEED)
      timeRef.current += 0.008

      const now = Date.now()
      const dx  = mx - lastTrailRef.current.x
      const dy  = my - lastTrailRef.current.y
      const spd = Math.sqrt(dx * dx + dy * dy)

      if (spd > 10 && now - lastTrailRef.current.time > 60 && mx > 0) {
        trailsRef.current.push({
          x: blob.x, y: blob.y,
          r: Math.min(BLOB_RADIUS * 0.5, BLOB_RADIUS * 0.15 + spd * 1.5),
          createdAt: now,
        })
        lastTrailRef.current = { x: mx, y: my, time: now }
      }

      trailsRef.current = trailsRef.current.filter(t => now - t.createdAt < TRAIL_LIFE)

      if (blob.x > -900) {
        const paths: string[] = []
        trailsRef.current.forEach((t, i) => {
          const age = (now - t.createdAt) / TRAIL_LIFE
          paths.push(blobPath(t.x, t.y, t.r * (1 - age * 0.45), timeRef.current - i * 0.15, noiseRef.current))
        })
        paths.push(blobPath(blob.x, blob.y, BLOB_RADIUS, timeRef.current, noiseRef.current))

        const cp = `path('${paths.join(' ')}')`
        reveal.style.clipPath = cp
        reveal.style.setProperty('-webkit-clip-path', cp)
        reveal.style.opacity  = '1'
        onMouseMove?.(blob.x, blob.y)
      } else {
        reveal.style.opacity = '0'
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onTouch = (e: TouchEvent) => {
      e.preventDefault()
      const rect = container.getBoundingClientRect()
      const t = e.touches[0]
      mouseRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top }
    }
    const onLeave = () => {
      mouseRef.current = { x: -999, y: -999 }
      blobRef.current  = { x: -999, y: -999 }
    }

    container.addEventListener('mousemove', onMove)
    container.addEventListener('touchmove', onTouch, { passive: false })
    container.addEventListener('mouseleave', onLeave)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      container.removeEventListener('mousemove', onMove)
      container.removeEventListener('touchmove', onTouch)
      container.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [onMouseMove])

  const fill: React.CSSProperties = {
    position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
  }

  return (
    <div ref={containerRef} style={{ ...fill, zIndex: 1 }}>
      {/* Hero 1 — ALWAYS visible via CSS, zero JS dependency */}
      <div
        style={{
          ...fill,
          backgroundImage: 'url(/images/hero-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />
      {/* Hero 2 — clip-path revealed by blob */}
      <div
        ref={revealRef}
        style={{
          ...fill,
          backgroundImage: 'url(/images/hero-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0,
          clipPath: 'none',
          willChange: 'clip-path',
        }}
      />
    </div>
  )
}
