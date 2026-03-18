'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BlobReveal } from '@/components/BlobReveal'
import { WaveBackground } from '@/components/WaveBackground'
import { SocialIcons } from '@/components/SocialIcons'

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((x: number, y: number) => {
    setMousePos({ x, y })
  }, [])

  // Parallax transforms — elements move OPPOSITE to cursor
  const W = typeof window !== 'undefined' ? window.innerWidth : 1440
  const H = typeof window !== 'undefined' ? window.innerHeight : 900

  // Compute parallax offset manually via state
  const px = -(mousePos.x / W - 0.5) * 18
  const py = -(mousePos.y / H - 0.5) * 12

  return (
    <main
      className="relative w-screen h-screen overflow-hidden bg-white"
      style={{ cursor: 'none' }}
    >
      {/* Wave background */}
      <WaveBackground mouseX={mousePos.x} mouseY={mousePos.y} />

      {/* Blob reveal (both images + canvas) */}
      <BlobReveal onMouseMove={handleMouseMove} />

      {/* TOP LEFT — Name */}
      <motion.div
        className="absolute top-8 left-10 z-20 select-none"
        animate={{ x: px, y: py }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
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
        animate={{ x: -px * 0.5, y: py * 0.5 }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
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
        animate={{ x: -px * 0.7, y: -py * 0.7 }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      >
        <SocialIcons />
      </motion.div>
    </main>
  )
}
