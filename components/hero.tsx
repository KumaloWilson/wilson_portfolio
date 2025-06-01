"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Download, Mail, Github, Linkedin, Code, Smartphone, Database, Brain, Eye, Twitter } from "lucide-react"
import { useEffect, useState } from "react"

// Simplified floating elements with parallax
const floatingElements = [
  { icon: Code, x: "15%", y: "25%", delay: 0, color: "from-blue-500 to-cyan-400", size: "w-12 h-12", speed: 0.5 },
  {
    icon: Smartphone,
    x: "85%",
    y: "20%",
    delay: 1,
    color: "from-purple-500 to-pink-400",
    size: "w-10 h-10",
    speed: 0.3,
  },
  {
    icon: Database,
    x: "10%",
    y: "70%",
    delay: 2,
    color: "from-green-500 to-emerald-400",
    size: "w-10 h-10",
    speed: 0.7,
  },
  { icon: Brain, x: "90%", y: "75%", delay: 3, color: "from-orange-500 to-red-400", size: "w-12 h-12", speed: 0.4 },
]

// Typewriter roles
const roles = [
  "Full Stack Developer",
  "Flutter Expert",
  "AI Enthusiast",
  "Mobile App Creator",
  "Web Developer",
  "Tech Innovator",
]

// Background particles for depth
const backgroundParticles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  speed: Math.random() * 0.5 + 0.2,
  opacity: Math.random() * 0.3 + 0.1,
}))

export default function Hero() {
  const { scrollY } = useScroll()

  // Different parallax speeds for depth
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]) // Slow
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]) // Medium
  const y3 = useTransform(scrollY, [0, 1000], [0, -300]) // Fast
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Typewriter effect state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  // Floating elements parallax
  const floatingElementsParallax = floatingElements.map((item) =>
    useTransform(scrollY, [0, 1000], [0, -100 * item.speed]),
  )

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayedText === "") {
        // Finished deleting, move to next role
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      } else if (isDeleting) {
        // Continue deleting
        setDisplayedText(currentRole.substring(0, displayedText.length - 1))
      } else {
        // Continue typing
        setDisplayedText(currentRole.substring(0, displayedText.length + 1))
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex])

  // Visitor counter effect
  useEffect(() => {
    const incrementVisitorCount = async () => {
      try {
        const stored = localStorage.getItem("portfolioVisitors")
        const currentCount = stored ? Number.parseInt(stored) : 20
        const newCount = currentCount + 1

        localStorage.setItem("portfolioVisitors", newCount.toString())

        setTimeout(() => {
          setVisitorCount(newCount)
          setIsLoading(false)
        }, 1500)
      } catch (error) {
        console.error("Error updating visitor count:", error)
        setVisitorCount(Number.parseInt(localStorage.getItem("portfolioVisitors") || "20"))
        setIsLoading(false)
      }
    }

    incrementVisitorCount()
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Layered Background with Parallax */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30" />

      {/* Animated Grid Background - Layer 1 (Slowest) */}
      <motion.div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ y: y1 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.8) 1px, transparent 1px)
          `,
            backgroundSize: "100px 100px",
          }}
        />
      </motion.div>

      {/* Secondary Grid - Layer 2 (Medium) */}
      <motion.div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]" style={{ y: y2 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.6) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      {/* Animated Background Particles - Multiple Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Layer 1 - Slow moving particles */}
        {backgroundParticles.slice(0, 10).map((particle) => (
          <motion.div
            key={`slow-${particle.id}`}
            className="absolute rounded-full bg-blue-400/10 dark:bg-blue-400/5"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              y: y1,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
            }}
            transition={{
              duration: 8 + particle.speed * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.id * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Layer 2 - Medium moving particles */}
        {backgroundParticles.slice(10, 20).map((particle) => (
          <motion.div
            key={`medium-${particle.id}`}
            className="absolute rounded-full bg-purple-400/8 dark:bg-purple-400/4"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 1.5}px`,
              height: `${particle.size * 1.5}px`,
              y: y2,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, -20, 0],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            }}
            transition={{
              duration: 6 + particle.speed * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.id * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Layer 3 - Fast moving particles */}
        {backgroundParticles.slice(20, 30).map((particle) => (
          <motion.div
            key={`fast-${particle.id}`}
            className="absolute rounded-full bg-cyan-400/6 dark:bg-cyan-400/3"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 0.8}px`,
              height: `${particle.size * 0.8}px`,
              y: y3,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 25, 0],
              opacity: [particle.opacity * 0.5, particle.opacity, particle.opacity * 0.5],
            }}
            transition={{
              duration: 4 + particle.speed * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: particle.id * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle Glowing Orbs with Parallax */}
      <motion.div
        className="absolute top-32 left-32 w-64 h-64 bg-gradient-to-r from-blue-400/8 to-cyan-400/8 rounded-full blur-3xl"
        style={{ y: y1 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl"
        style={{ y: y2 }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Floating Tech Icons with Individual Parallax */}
      {floatingElements.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{
            duration: 1,
            delay: item.delay,
            type: "spring",
            stiffness: 100,
          }}
          className="absolute hidden lg:block"
          style={{
            left: item.x,
            top: item.y,
            y: floatingElementsParallax[index],
          }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.5,
            }}
            className="relative group cursor-pointer"
          >
            <div
              className={`${item.size} bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg border border-white/20 dark:border-white/10 backdrop-blur-sm hover:opacity-80 transition-opacity duration-300`}
            >
              <item.icon className="w-1/2 h-1/2 text-white" />
            </div>
          </motion.div>
        </motion.div>
      ))}

      <motion.div className="container mx-auto px-6 relative z-10" style={{ opacity }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Visitor Counter */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-slate-700/50 shadow-sm">
                <Eye className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Visitors:</span>
                {isLoading ? (
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    className="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
                  />
                ) : (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                    className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  >
                    {visitorCount?.toLocaleString()}
                  </motion.span>
                )}
              </div>
            </motion.div>

            {/* Welcome Badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-full border border-blue-200/50 dark:border-blue-800/50">
                <span className="text-blue-700 dark:text-blue-300 font-medium">👋 Welcome to my portfolio</span>
              </div>
            </motion.div> */}

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white block mb-2">Hi, I'm</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Wilson
                </span>
              </h1>
            </motion.div>

            {/* Typewriter Role Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light h-8 flex items-center justify-center lg:justify-start">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
                  {displayedText}
                </span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="ml-1 text-blue-600 dark:text-blue-400 font-bold"
                >
                  |
                </motion.span>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
              >
                Crafting digital experiences that blend innovation with purpose. Specialized in creating powerful mobile
                applications, intelligent web solutions, and cutting-edge AI integrations that transform ideas into
                reality.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Let's Work Together
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open('https://drive.google.com/file/d/1yQZZbTiq2nTIk5DAQOhAvInbE7UI_Aff/view?usp=sharing', '_blank')}
                className="px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-300/50 dark:border-slate-600/50 text-gray-700 dark:text-gray-300 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2 inline" />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              {[
                  { icon: Github, href: "https://github.com/kumalowilson", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/wilson-kumalo-733550243/", label: "LinkedIn" },
                  { icon: Twitter, href: "https://twitter.com/kumalowilson", label: "Twitter" },
                  { icon: Mail, href: "mailto:kumalowilson900@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-lg hover:shadow-xl transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="relative flex justify-center"
            style={{ y: y1 }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Subtle Glow with Parallax */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/15 to-purple-500/15 rounded-full blur-2xl"
                style={{ y: y2 }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              {/* Profile Container */}
              <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-full overflow-hidden">
                  <img
                    src="https://avatars.githubusercontent.com/u/121590986?v=4"
                    alt="Wilson Kumalo - Full Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge with Parallax */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center border border-white/50 dark:border-slate-600/50"
                style={{ y: y3 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Code className="w-8 h-8 text-blue-600" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-sm font-medium mb-2">Explore More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-10 h-10 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 flex items-center justify-center shadow-lg"
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}
