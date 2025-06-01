"use client"

import { motion } from "framer-motion"
import { Award, Users, Coffee, Clock, Target, Heart, Lightbulb, Rocket, Brain, Code, Globe } from "lucide-react"

const stats = [
  { icon: Award, number: "3+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
  { icon: Rocket, number: "15+", label: "Projects Launched", color: "from-purple-500 to-pink-500" },
  { icon: Users, number: "4+", label: "Companies Worked", color: "from-amber-500 to-yellow-500" },
  { icon: Code, number: "20+", label: "Technologies Mastered", color: "from-indigo-500 to-violet-500" },
  { icon: Brain, number: "5+", label: "AI-Powered Apps", color: "from-green-500 to-emerald-500" },
  { icon: Globe, number: "2", label: "Current Roles", color: "from-red-500 to-rose-500" },
]


const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every line of code is crafted with attention to detail and purpose.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Driven by genuine love for creating solutions that make a difference.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new technologies and creative approaches to problems.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast, scalable, and efficient applications that users love.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-950/20 dark:via-transparent dark:to-blue-950/20" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer with a mission to create innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Building the Future, One App at a Time
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate software developer based in South Africa with extensive experience in mobile and web
                app development, AI integration, and backend engineering. Currently serving as a full-stack developer at
                Kays Consulting Services and team lead at Abstrak Agency.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey in tech has been driven by a simple belief: technology should solve real problems and improve
                people's lives. Whether it's creating accessible apps for the visually impaired or building efficient
                ride-hailing platforms, I focus on user-centric solutions that make a difference.
              </p>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What drives me:</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Creating inclusive technology for everyone
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    Solving complex problems with elegant solutions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Continuous learning and innovation
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20" />
              <img
                src="/developer-coding.jpg?height=500&width=400"
                alt="Wilson working"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center group"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Core Values</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The principles that guide every project and decision I make
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
