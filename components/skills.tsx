"use client"

import { motion } from "framer-motion"
import { Smartphone, Database, Cloud, Brain, Server, Globe } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "React/Next.js", level: 90 },
      { name: "JavaScript/TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 93 },
      { name: "State Management", level: 90 },
      { name: "Firebase", level: 88 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Java Spring Boot", level: 85 },
      { name: "Python/FastAPI", level: 82 },
      { name: "RESTful APIs", level: 92 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "Firebase/Firestore", level: 90 },
      { name: "Supabase", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "TensorFlow", level: 78 },
      { name: "PyTorch", level: 75 },
      { name: "Computer Vision", level: 80 },
      { name: "NLP", level: 72 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    color: "from-teal-500 to-blue-500",
    skills: [
      { name: "Docker", level: 82 },
      { name: "AWS/Azure", level: 78 },
      { name: "CI/CD", level: 85 },
      { name: "Git/GitHub", level: 92 },
    ],
  },
]

const techStack = [
  { name: "Flutter", icon: "🦋", category: "Mobile" },
  { name: "React", icon: "⚛️", category: "Frontend" },
  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Firebase", icon: "🔥", category: "Cloud" },
  { name: "PostgreSQL", icon: "🐘", category: "Database" },
  { name: "Python", icon: "🐍", category: "AI/ML" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "Docker", icon: "🐳", category: "DevOps" },
  { name: "Supabase", icon: "⚡", category: "Backend" },
  { name: "TensorFlow", icon: "🧠", category: "AI/ML" },
  { name: "Spring Boot", icon: "🍃", category: "Backend" },
  { name: "Tailwind", icon: "🎨", category: "Styling" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                  <div className="text-center">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{tech.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{tech.category}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly learning new frameworks, tools, and best practices
              to stay at the forefront of development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["AWS Certified", "Google Cloud", "Flutter Expert", "AI/ML Specialist"].map((cert, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/30"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
