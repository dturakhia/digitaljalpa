'use client'

import { useCallback } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import { BlobReveal } from '@/components/BlobReveal'
import { WaveBackground } from '@/components/WaveBackground'
import { SocialIcons } from '@/components/SocialIcons'

export default function Home() {
  // Motion values — updates bypass React re-renders entirely
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  // Spring-smoothed values for parallax
  const smoothX = useSpring(rawX, { stiffness: 60, damping: 20 })
  const smoothY = useSpring(rawY, { stiffness: 60, damping: 20 })

  // Parallax: elements drift OPPOSITE to cursor movement
  const nameX   = useTransform(smoothX, v => -(v / (typeof window !== 'undefined' ? window.innerWidth  : 1440) - 0.5) * 18)
  const nameY   = useTransform(smoothY, v => -(v / (typeof window !== 'undefined' ? window.innerHeight : 900)  - 0.5) * 12)
  const navX    = useTransform(nameX, v => v * -0.5)
  const navY    = useTransform(nameY, v => v *  0.5)
  const socialX = useTransform(nameX, v => v * -0.7)
  const socialY = useTransform(nameY, v => v * -0.7)

  // BlobReveal calls this at ~60fps — no re-render, just motion value updates
  const handleMouseMove = useCallback((x: number, y: number) => {
    rawX.set(x)
    rawY.set(y)
  }, [rawX, rawY])

  return (
    <main
      className="relative w-screen h-screen overflow-hidden bg-white"
      style={{ cursor: 'none' }}
    >
      {/* Wave background z:0 — behind everything */}
      <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex: 0 }}>
        <WaveBackground motionX={rawX} motionY={rawY} />
      </div>

      {/* Blob reveal canvas */}
      <BlobReveal onMouseMove={handleMouseMove} />

      {/* TOP LEFT — Name */}
      <motion.div
        className="absolute top-8 left-10 z-20 select-none"
        style={{ x: nameX, y: nameY }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            mixBlendMode: 'difference',
            color: 'white',
            lineHeight: 1.05,
            fontWeight: 700,
          }}
          className="text-5xl md:text-6xl xl:text-7xl"
        >
          Jalpa
          <br />
          Turakhia
        </h1>
      </motion.div>

      {/* TOP RIGHT — Portfolio link */}
      <motion.div
        className="absolute top-10 right-10 z-20"
        style={{ x: navX, y: navY }}
      >
        <Link
          href="/portfolio"
          style={{
            fontFamily: 'var(--font-inter)',
            mixBlendMode: 'difference',
            color: 'white',
            letterSpacing: '0.12em',
            fontSize: '0.8rem',
            fontWeight: 500,
            textTransform: 'uppercase' as const,
          }}
          className="hover:opacity-70 transition-opacity duration-300"
        >
          Portfolio
        </Link>
      </motion.div>

      {/* BOTTOM RIGHT — Social icons */}
      <motion.div
        className="absolute bottom-8 right-10 z-20"
        style={{ x: socialX, y: socialY }}
      >
        <SocialIcons />
      </motion.div>
    </main>
  )
}
