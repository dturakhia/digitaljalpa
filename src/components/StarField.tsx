'use client'

import { useEffect, useRef } from 'react'
import { createNoise2D } from 'simplex-noise'

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const noise = createNoise2D()
    let raf = 0
    let t = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Fixed positions — noise drives only the twinkle opacity
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.1 + 0.25,
      nx: Math.random() * 8,
      ny: Math.random() * 8,
    }))

    const draw = () => {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      // Cyan glow — upper right
      const g1 = ctx.createRadialGradient(
        width * 0.75, height * 0.18, 0,
        width * 0.75, height * 0.18, width * 0.42,
      )
      g1.addColorStop(0, 'rgba(8,145,178,0.07)')
      g1.addColorStop(1, 'transparent')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, width, height)

      // Warm amber glow — lower left
      const g2 = ctx.createRadialGradient(
        width * 0.12, height * 0.78, 0,
        width * 0.12, height * 0.78, width * 0.32,
      )
      g2.addColorStop(0, 'rgba(217,119,6,0.045)')
      g2.addColorStop(1, 'transparent')
      ctx.fillStyle = g2
      ctx.fillRect(0, 0, width, height)

      // Stars with noise-driven twinkle
      const speed = 0.00025
      for (const s of stars) {
        const n = (noise(s.nx, t * speed + s.ny) + 1) * 0.5 // 0..1
        const opacity = 0.12 + n * 0.68
        ctx.beginPath()
        ctx.arc(s.x * width, s.y * height, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${opacity.toFixed(2)})`
        ctx.fill()
      }

      t++
      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
