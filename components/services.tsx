"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Brain, Database, Map, Cloud, Code, Zap, Shield, Palette } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications using Flutter with beautiful UI/UX and robust functionality.",
    features: [
      "Flutter Development",
      "iOS & Android",
      "State Management",
      "Push Notifications",
      "App Store Deployment",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive web applications using React, Next.js, and other cutting-edge technologies.",
    features: ["React/Next.js", "Responsive Design", "PWA Development", "SEO Optimization", "Performance Tuning"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI & ML Integration",
    description:
      "Intelligent features powered by machine learning and artificial intelligence to enhance user experiences.",
    features: ["TensorFlow/PyTorch", "Computer Vision", "NLP Processing", "Predictive Analytics", "AI Chatbots"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Backend & API Development",
    description: "Scalable backend systems and RESTful APIs using Node.js, Java Spring Boot, and cloud technologies.",
    features: ["RESTful APIs", "Database Design", "Authentication", "Real-time Features", "Microservices"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Map,
    title: "Mapping & Geolocation",
    description: "Location-based services and mapping solutions for ride-sharing, delivery, and tracking applications.",
    features: ["Google Maps API", "Real-time Tracking", "Route Optimization", "Geofencing", "Location Analytics"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud infrastructure setup, deployment automation, and DevOps practices for scalable applications.",
    features: ["AWS/Firebase", "CI/CD Pipelines", "Docker Containers", "Monitoring", "Auto Scaling"],
    color: "from-teal-500 to-cyan-500",
  },
]

const processSteps = [
  {
    icon: Code,
    title: "Discovery & Planning",
    description: "Understanding your requirements and creating a detailed project roadmap.",
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    description: "Creating wireframes, mockups, and interactive prototypes for validation.",
  },
  {
    icon: Zap,
    title: "Development & Testing",
    description: "Agile development with continuous testing and quality assurance.",
  },
  {
    icon: Shield,
    title: "Deployment & Support",
    description: "Launching your application with ongoing maintenance and support.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
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
            Services I Offer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive development solutions to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 h-full">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Development Process</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
