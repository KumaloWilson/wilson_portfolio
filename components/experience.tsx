"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Kays Consulting Services",
    period: "2025 - Present",
    location: "Remote",
    description:
      "Building modern, scalable web solutions for diverse clients using full-stack technologies and cloud infrastructure.",
    achievements: [
      "Developed scalable web applications serving over 10,000 users",
      "Implemented CI/CD pipelines, reducing deployment time by 60%",
      "Led web app design and integrations across multiple projects",
    ],
    technologies: ["Next.js", "Node.js", "Supabase", "MongoDB", "TypeScript"],
  },
  {
    title: "Team Lead",
    company: "Abstrak Agency",
    period: "2024 - Present",
    location: "Remote",
    description:
      "Overseeing development teams and ensuring the successful delivery of high-quality web and mobile applications.",
    achievements: [
      "Delivered 3+ client projects on time and within budget",
      "Mentored junior developers, improving team output by 40%",
      "Established and enforced coding standards across all projects",
    ],
    technologies: ["Flutter", "React", "Vue", "Laravel", "Firebase", "AWS"],
  },
  {
    title: "Mobile App Developer",
    company: "KaribuTech AI",
    period: "2023 - 2024",
    location: "Remote",
    description:
      "Built mobile-first applications and backend services, with a focus on performance, AI integration, and scalability.",
    achievements: [
      "Developed 3+ mobile apps from concept to deployment",
      "Integrated AI/ML features to enhance user engagement",
      "Created custom REST APIs and scalable backend systems",
    ],
    technologies: ["Flutter", "Firebase", "Express.js", "MongoDB"],
  },
  {
    title: "Software Developer",
    company: "Kingsman Software Services Zimbabwe",
    period: "2022 - 2023",
    location: "Zimbabwe",
    description:
      "Designed and developed internal tools and automation systems for non-profits and SMEs, focusing on efficiency and analytics.",
    achievements: [
      "Automated workflows, saving 20+ hours per week",
      "Built attendance tracking and management systems",
      "Implemented dashboards for analytics and reporting",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "JavaScript", "Chart.js"],
  },
];


export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
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
            Professional Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My career progression and key achievements in software development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 transform md:-translate-x-0.5" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-2 z-10 shadow-lg" />

                {/* Content Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4 space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200/50 dark:border-blue-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how my experience can help bring your next project to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
