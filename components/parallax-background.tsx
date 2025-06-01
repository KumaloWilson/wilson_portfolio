"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState } from "react"

interface ParticleLayer {
  particles: Array<{
    id: number
    x: number
    y: number
    size: number
    opacity: number
    speed: number
  }>
  color: string
  parallaxSpeed: number
}

export default function ParallaxBackground() {
  const { scrollY } = useScroll()
  const [layers, setLayers] = useState<ParticleLayer[]>([])
  const yTransforms = [
    useTransform(scrollY, [0, 1000], [0, -20]),
    useTransform(scrollY, [0, 1000], [0, -40]),
    useTransform(scrollY, [0, 1000], [0, -60]),
  ]

  useEffect(() => {
    // Generate particle layers
    const generateLayer = (count: number, color: string, parallaxSpeed: number): ParticleLayer => ({
      particles: Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.5 + 0.2,
      })),
      color,
      parallaxSpeed,
    })

    setLayers([
      generateLayer(15, "bg-blue-400/8", 0.2),
      generateLayer(12, "bg-purple-400/6", 0.4),
      generateLayer(10, "bg-cyan-400/4", 0.6),
    ])
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {layers.map((layer, layerIndex) => {
        const y = yTransforms[layerIndex]

        return (
          <motion.div key={layerIndex} className="absolute inset-0" style={{ y }}>
            {layer.particles.map((particle) => (
              <motion.div
                key={particle.id}
                className={`absolute rounded-full ${layer.color}`}
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                }}
                animate={{
                  y: [0, -30 - layerIndex * 10, 0],
                  x: [0, 15 - layerIndex * 5, 0],
                  opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
                }}
                transition={{
                  duration: 6 + particle.speed * 4 + layerIndex * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: particle.id * 0.1 + layerIndex * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        )
      })}
    </div>
  )
}
