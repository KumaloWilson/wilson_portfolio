import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Abstract Agency",
    period: "2024 - Present",
    description: "Designed and developed cutting-edge mobile and web software solutions for clients across various industries.",
    achievements: [
      "Collaborated with clients to understand their requirements and deliver tailored solutions."
    ],
    technologies: ["Flutter", "React", "Next", "Node.js", "Flask", "Laravel"]
  },

  {
    title: "Mobile App Developer",
    company: "KaribuTech AI",
    period: "2023 - 2024",
    description: "Developed and maintained cross-platform mobile applications using Flutter.",
    achievements: [
      "Collaborated with designers, backend developers, and product managers to deliver user-focused solutions."
    ],
    technologies: ["Flutter", "Firebase", "REST APIs"]
  },

  {
    title: "Software Developer",
    company: "Kingsman Software Services Zimbabwe",
    period: "2022 - 2023",
    description: "Built and maintained scalable and secure RESTful APIs and microservices, with a focus on performance and maintainability.",
    achievements: [
      "Designed and developed full-stack web and mobile applications using various technologies."
    ],
    technologies: ["Flutter", "React", "NextJs", "Springboot", "Node.js", "PostgreSQL", "MySQL", "Supabase", "Firebase"]
  }
];


export const Experience: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900" />

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-24 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900" />

              {/* Content */}
              <div className={`relative ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                }`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  </div>

                  <div className="flex items-center mb-4 text-gray-600 dark:text-gray-300">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};