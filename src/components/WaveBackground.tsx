'use client'

import { useEffect, useRef } from 'react'
import type { MotionValue } from 'framer-motion'

interface WaveBackgroundProps {
  motionX: MotionValue<number>
  motionY: MotionValue<number>
}

export function WaveBackground({ motionX, motionY }: WaveBackgroundProps) {
  const svgRef  = useRef<SVGSVGElement>(null)
  const timeRef = useRef(0)
  const rafRef  = useRef<number>(0)

  useEffect(() => {
    const animate = () => {
      timeRef.current += 0.004
      const svg = svgRef.current
      if (!svg) { rafRef.current = requestAnimationFrame(animate); return }

      const W  = window.innerWidth
      const H  = window.innerHeight
      // Read directly from motion values — no re-renders, always current
      const mx = (motionX.get() / W - 0.5) * 20
      const my = (motionY.get() / H - 0.5) * 15

      svg.querySelectorAll('path').forEach((path, i) => {
        const t      = timeRef.current + i * 0.6
        const offset = mx * (i + 1) * 0.4
        const yBase  = H * (0.2 + i * 0.15)
        const amp    = 12 + i * 6 + my * (i + 1) * 0.3
        const freq   = 0.003 + i * 0.001

        let d = `M 0 ${yBase}`
        for (let x = 0; x <= W; x += 30) {
          const y =
            yBase +
            Math.sin(x * freq + t + offset * 0.05) * amp +
            Math.cos(x * freq * 0.7 + t * 0.8) * (amp * 0.5)
          d += ` L ${x} ${y}`
        }
        path.setAttribute('d', d)
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [motionX, motionY]) // stable MotionValue references — only runs once

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.06 }}
    >
      {[0, 1, 2, 3, 4].map(i => (
        <path key={i} stroke="#000" strokeWidth={1} fill="none" />
      ))}
    </svg>
  )
}
