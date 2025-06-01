"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Database, Brain, Globe, Zap } from "lucide-react"

const techIcons = [
  { icon: Code, delay: 0, color: "from-blue-500 to-cyan-400" },
  { icon: Smartphone, delay: 0.2, color: "from-purple-500 to-pink-400" },
  { icon: Database, delay: 0.4, color: "from-green-500 to-emerald-400" },
  { icon: Brain, delay: 0.6, color: "from-orange-500 to-red-400" },
  { icon: Globe, delay: 0.8, color: "from-indigo-500 to-purple-400" },
  { icon: Zap, delay: 1.0, color: "from-yellow-500 to-orange-400" },
]

const floatingParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 3 + 2,
}))

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Particles */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Glowing Orb Background */}
        <motion.div
          className="absolute inset-0 -m-32"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <div className="w-64 h-64 mx-auto bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-3xl" />
        </motion.div>

        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-0 -m-4"
          >
            <div className="w-24 h-24 mx-auto border-2 border-blue-500/30 rounded-full" />
          </motion.div>

          <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-2xl border border-blue-500/20 backdrop-blur-sm">
            <motion.div
              animate={{
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(147, 51, 234, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Wilson Kumalo
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-slate-300 mt-2 font-light"
            >
              Full Stack Developer
            </motion.p>
          </div>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {techIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: item.delay,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="relative group"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
                className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                  style={{ clipPath: "polygon(0 0, 20% 0, 40% 100%, 0% 100%)" }}
                />
                <item.icon className="w-8 h-8 text-white relative z-10" />
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-50 -z-10`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Loading Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-80 mx-auto"
        >
          <div className="relative">
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <motion.div
                initial={{ width: 0, x: -100 }}
                animate={{ width: "100%", x: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: [-100, 200] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </motion.div>
            </div>

            {/* Glowing dots */}
            <div className="flex justify-center mt-4 space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>

          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-slate-400 text-sm mt-6 font-light tracking-wider"
          >
            Initializing amazing portfolio...
          </motion.p>
        </motion.div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400/20 font-mono text-sm"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            >
              {["</>", "{}", "[]", "()", "&&", "||"][i]}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
