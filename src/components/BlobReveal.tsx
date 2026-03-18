'use client'

import { useEffect, useRef, useCallback } from 'react'
import { createNoise2D } from 'simplex-noise'

// Constants outside component — not recreated on re-renders
const BLOB_RADIUS    = 170
const NOISE_STRENGTH = 0.32
const LERP_SPEED     = 0.09
const TRAIL_LIFE     = 700

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

interface Trail {
  x: number
  y: number
  r: number
  createdAt: number
}

interface BlobRevealProps {
  onMouseMove?: (x: number, y: number) => void
}

export function BlobReveal({ onMouseMove }: BlobRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const img1Ref = useRef<HTMLImageElement | null>(null)
  const img2Ref = useRef<HTMLImageElement | null>(null)
  const mouseRef = useRef({ x: -999, y: -999 })
  const blobRef = useRef({ x: -999, y: -999 })
  const trailsRef = useRef<Trail[]>([])
  const rafRef = useRef<number>(0)
  const noiseRef = useRef(createNoise2D())
  const timeRef = useRef(0)
  const lastTrailRef = useRef({ x: 0, y: 0, time: 0 })
  const imagesLoadedRef = useRef(0)

  const drawBlob = useCallback((ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number, noiseOff: number) => {
    const noise = noiseRef.current
    const pts = 14
    ctx.beginPath()
    for (let i = 0; i <= pts; i++) {
      const angle = (i / pts) * Math.PI * 2
      const n = noise(Math.cos(angle) * 2 + noiseOff, Math.sin(angle) * 2 + noiseOff)
      const r = radius * (1 + n * NOISE_STRENGTH)
      const x = cx + r * Math.cos(angle)
      const y = cy + r * Math.sin(angle)
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.closePath()
  }, [])

  const renderRef = useRef<() => void>(() => {})

  const render = useCallback(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    const img1 = img1Ref.current
    const img2 = img2Ref.current
    if (!canvas || !container || !img1 || !img2 || imagesLoadedRef.current < 2) {
      rafRef.current = requestAnimationFrame(() => renderRef.current())
      return
    }

    const W = container.offsetWidth
    const H = container.offsetHeight
    if (canvas.width !== W || canvas.height !== H) {
      canvas.width = W
      canvas.height = H
    }

    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, W, H)

    const mouse = mouseRef.current
    const blob = blobRef.current

    blob.x = lerp(blob.x < -900 ? mouse.x : blob.x, mouse.x, LERP_SPEED)
    blob.y = lerp(blob.y < -900 ? mouse.y : blob.y, mouse.y, LERP_SPEED)

    timeRef.current += 0.008

    // Add trails based on speed
    const now = Date.now()
    const dx = mouse.x - lastTrailRef.current.x
    const dy = mouse.y - lastTrailRef.current.y
    const speed = Math.sqrt(dx * dx + dy * dy)
    if (speed > 10 && now - lastTrailRef.current.time > 50 && mouse.x > 0) {
      trailsRef.current.push({
        x: blob.x,
        y: blob.y,
        r: Math.min(BLOB_RADIUS * 0.55, BLOB_RADIUS * 0.15 + speed * 2),
        createdAt: now,
      })
      lastTrailRef.current = { x: mouse.x, y: mouse.y, time: now }
    }
    trailsRef.current = trailsRef.current.filter(t => now - t.createdAt < TRAIL_LIFE)

    // Draw IMAGE ONE as base (cover fit)
    const scale1 = Math.max(W / img1.naturalWidth, H / img1.naturalHeight)
    const dw1 = img1.naturalWidth * scale1
    const dh1 = img1.naturalHeight * scale1
    ctx.drawImage(img1, (W - dw1) / 2, (H - dh1) / 2, dw1, dh1)

    // Now draw IMAGE TWO clipped to blob shapes
    if (blob.x > -900) {
      ctx.save()
      ctx.beginPath()

      // Draw all trail blobs as part of clip path
      trailsRef.current.forEach((trail, i) => {
        const age = (now - trail.createdAt) / TRAIL_LIFE
        const r = trail.r * (1 - age * 0.5)
        drawBlob(ctx, trail.x, trail.y, r, timeRef.current - i * 0.15)
      })

      // Main blob
      drawBlob(ctx, blob.x, blob.y, BLOB_RADIUS, timeRef.current)

      ctx.clip()

      // Draw IMAGE TWO inside clip
      const scale2 = Math.max(W / img2.naturalWidth, H / img2.naturalHeight)
      const dw2 = img2.naturalWidth * scale2
      const dh2 = img2.naturalHeight * scale2
      ctx.drawImage(img2, (W - dw2) / 2, (H - dh2) / 2, dw2, dh2)

      ctx.restore()

      // Draw gooey cursor dot
      ctx.save()
      ctx.globalCompositeOperation = 'source-over'
      const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, 12)
      gradient.addColorStop(0, 'rgba(255,255,255,0.9)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(blob.x, blob.y, 12, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      // Notify parent
      onMouseMove?.(blob.x, blob.y)
    }

    rafRef.current = requestAnimationFrame(() => renderRef.current())
  }, [drawBlob, onMouseMove])

  // Keep renderRef in sync so the RAF callback always calls the latest version
  useEffect(() => {
    renderRef.current = render
  }, [render])

  useEffect(() => {
    // Load both images
    const load = (src: string, ref: React.MutableRefObject<HTMLImageElement | null>) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        ref.current = img
        imagesLoadedRef.current++
      }
      img.onerror = () => { imagesLoadedRef.current++ } // fallback
    }
    load('/images/hero-1.jpg', img1Ref)
    load('/images/hero-2.jpg', img2Ref)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const rect = container.getBoundingClientRect()
      const t = e.touches[0]
      mouseRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top }
    }

    const onMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 }
      blobRef.current = { x: -999, y: -999 }
    }

    const onResize = () => {
      const canvas = canvasRef.current
      const cont = containerRef.current
      if (canvas && cont) {
        canvas.width = cont.offsetWidth
        canvas.height = cont.offsetHeight
      }
    }

    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('touchmove', onTouchMove, { passive: false })
    container.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', onResize)
    rafRef.current = requestAnimationFrame(render)

    return () => {
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('touchmove', onTouchMove)
      container.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [render])

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
