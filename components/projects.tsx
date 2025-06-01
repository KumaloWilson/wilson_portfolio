"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Play, Star, Users, Download } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Easy Ride",
    description:
      "A comprehensive ride-hailing application built with Flutter, featuring real-time tracking, payment integration, and driver-passenger matching.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Flutter", "Firebase", "Maps API", "Real-time", "Payment"],
    category: "Mobile App",
    featured: true,
    stats: { users: "10k+", rating: 4.8, downloads: "25k+" },
    links: {
      demo: "#",
      github: "#",
      live: "#",
    },
    features: [
      "Real-time GPS tracking",
      "In-app payments",
      "Driver rating system",
      "Route optimization",
      "Push notifications",
    ],
  },
  {
    id: 2,
    title: "MediGuideAI",
    description:
      "AI-powered telemedicine platform that provides intelligent health recommendations and connects patients with healthcare providers.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["AI/ML", "Healthcare", "Flutter", "TensorFlow", "Supabase"],
    category: "AI Platform",
    featured: true,
    stats: { users: "5k+", rating: 4.9, downloads: "12k+" },
    links: {
      demo: "#",
      github: "#",
      live: "#",
    },
    features: [
      "AI symptom analysis",
      "Doctor consultations",
      "Health tracking",
      "Prescription management",
      "Emergency alerts",
    ],
  },
  {
    id: 3,
    title: "Lucid Eye",
    description:
      "Smart assistant application designed for visually impaired users, featuring voice navigation and AI-powered object recognition.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Accessibility", "AI", "Computer Vision", "Flutter", "Voice"],
    category: "Accessibility",
    featured: false,
    stats: { users: "3k+", rating: 4.7, downloads: "8k+" },
    links: {
      demo: "#",
      github: "#",
      live: "#",
    },
    features: ["Object recognition", "Voice navigation", "Text-to-speech", "Obstacle detection", "Emergency contacts"],
  },
  {
    id: 4,
    title: "FarmBot",
    description:
      "Gamified agricultural education platform with AI-powered crop recommendations and farming best practices.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Education", "Gamification", "AI", "Agriculture", "Flutter"],
    category: "Educational",
    featured: false,
    stats: { users: "15k+", rating: 4.6, downloads: "30k+" },
    links: {
      demo: "#",
      github: "#",
      live: "#",
    },
    features: [
      "Interactive lessons",
      "Crop recommendations",
      "Weather integration",
      "Progress tracking",
      "Community features",
    ],
  },
  {
    id: 5,
    title: "Attendance System",
    description:
      "Comprehensive student attendance tracking system built with Sequelize, featuring analytics and automated reporting.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Web App", "Sequelize", "Analytics", "Education", "Dashboard"],
    category: "Web Platform",
    featured: false,
    stats: { users: "2k+", rating: 4.5, downloads: "5k+" },
    links: {
      demo: "#",
      github: "#",
      live: "#",
    },
    features: [
      "Automated tracking",
      "Analytics dashboard",
      "Report generation",
      "Multi-school support",
      "Parent notifications",
    ],
  },
  {
    id: 6,
    title: "Smart Dashboard",
    description:
      "Real-time analytics dashboard for business intelligence with interactive charts and data visualization.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Dashboard", "Analytics", "React", "D3.js", "Real-time"],
    category: "Web App",
    featured: false,
    stats: { users: "1k+", rating: 4.4, downloads: "3k+" },
    links: {
      demo: "#",
      github: "#",
      live: "#",
    },
    features: ["Real-time data", "Interactive charts", "Custom reports", "Data export", "Multi-user access"],
  },
]

const categories = ["All Projects", "Mobile App", "AI Platform", "Web App", "Accessibility", "Educational"]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of applications that solve real-world problems
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            🌟 Featured Projects
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-4 text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Users className="w-4 h-4 mr-1" />
                            {project.stats.users}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Star className="w-4 h-4 mr-1 text-yellow-500" />
                            {project.stats.rating}
                          </div>
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Download className="w-4 h-4 mr-1" />
                            {project.stats.downloads}
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600 dark:text-gray-400">
                          {project.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.links.demo}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.links.github}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            Other Projects
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.description.length > 100
                          ? `${project.description.substring(0, 100)}...`
                          : project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-2">
                        <motion.a
                          href={project.links.demo}
                          whileHover={{ scale: 1.05 }}
                          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 rounded-lg text-sm font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View
                        </motion.a>
                        <motion.a
                          href={project.links.github}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
