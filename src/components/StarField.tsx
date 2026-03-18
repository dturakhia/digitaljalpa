'use client'

import { useRef } from 'react'

function makeStars(count: number): string {
  const shadows: string[] = []
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000)
    const y = Math.floor(Math.random() * 2000)
    const opacity = (Math.random() * 0.5 + 0.2).toFixed(2)
    shadows.push(`${x}px ${y}px rgba(255,255,255,${opacity})`)
  }
  return shadows.join(',')
}

export function StarField() {
  const s1 = useRef(makeStars(700))
  const s2 = useRef(makeStars(200))

  return (
    <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <style>{`
        @keyframes animStar {
          from { transform: translateY(0); }
          to   { transform: translateY(-2000px); }
        }
        .stars1 { animation: animStar 80s linear infinite; }
        .stars2 { animation: animStar 120s linear infinite; }
      `}</style>
      <div
        className="stars1"
        style={{ position: 'absolute', top: 0, left: 0, width: 1, height: 1, background: 'transparent', boxShadow: s1.current }}
      />
      <div
        className="stars2"
        style={{ position: 'absolute', top: 0, left: 0, width: 2, height: 2, background: 'transparent', boxShadow: s2.current }}
      />
      <div style={{
        position: 'absolute', top: '30%', left: '65%',
        transform: 'translate(-50%, -50%)',
        width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(8,145,178,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
    </div>
  )
}
