import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Cpu, Globe, Zap, } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Record<string, { icon: any; skills: Skill[] }> = {
  "Frontend Development": {
    icon: Layout,
    skills: [
      { name: "React/Next.js", level: 75, category: "frontend" },
      { name: "Flutter", level: 95, category: "frontend" },
      { name: "TypeScript", level: 85, category: "frontend" },
      { name: "Tailwind CSS", level: 90, category: "frontend" },
    ]
  },
  "Backend Development": {
    icon: Database,
    skills: [
      { name: "NodeJs", level: 95, category: "backend" },
      { name: "Python/FastAPI", level: 85, category: "backend" },
      { name: "Python/Flask", level: 80, category: "backend" },
      { name: "Laravel", level: 75, category: "backend" },
      { name: "Springboot", level: 70, category: "backend" },
      { name: "PostgreSQL", level: 85, category: "backend" },
      { name: "MySQL", level: 95, category: "backend" },
      { name: "GraphQL", level: 60, category: "backend" },
      { name: "MongoDB", level: 80, category: "backend" }
    ]
  },
  "Mobile Development": {
    icon: Code2,
    skills: [
      { name: "Flutter", level: 95, category: "mobile" },
      { name: "React Native", level: 75, category: "mobile" },
      { name: "Android/Kotlin", level: 60, category: "mobile" }
    ]
  },
  "DevOps & Cloud": {
    icon: Globe,
    skills: [
      { name: "AWS", level: 60, category: "devops" },
      { name: "Docker", level: 80, category: "devops" },
      { name: "CI/CD", level: 90, category: "devops" },
      { name: "Firebase", level: 95, category: "devops" },
      { name: "Supabase", level: 80, category: "devops" }
    ]
  },
  "AI & Machine Learning": {
    icon: Cpu,
    skills: [
      { name: "TensorFlow", level: 60, category: "ai" },
      { name: "PyTorch", level: 50, category: "ai" },
      { name: "Computer Vision", level: 40, category: "ai" },
      { name: "NLP", level: 80, category: "ai" }
    ]
  },
  "Other Technologies": {
    icon: Zap,
    skills: [
      { name: "Git", level: 90, category: "other" },
      { name: "AR/VR", level: 60, category: "other" },
      { name: "IOT", level: 50, category: "other" },
    ]
  }
};

export const Skills: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { icon: Icon, skills }], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};