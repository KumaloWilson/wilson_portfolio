import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Cpu, Globe, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "Flutter", "Next.js", "TypeScript", "Tailwind CSS", "Ant Design", "Material UI"]
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Node.js", "Python", "FastAPI", "Flask", "PostgreSQL", "MySQL", "MongoDB"]
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD", "Responsive Design", "Animation"]
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "Computer Vision"]
    },
    {
      icon: Globe,
      title: "Cloud & DevOps",
      skills: ["AWS", "Firebase", "Docker", "CI/CD", "Supabase"]
    },
    {
      icon: Zap,
      title: "Emerging Tech",
      skills: ["AR/VR", "IoT",]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="relative py-20 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a self-taught software developer and tech enthusiast passionate about leveraging technology to solve real-world problems. With expertise in Flutter, web, and backend development, I have built scalable, high-performance solutions tailored to diverse user needs. My work spans emerging technologies like AR/VR and AI, focusing on innovation, usability, and impact. Whether crafting intuitive user interfaces or architecting robust backend systems, I strive to deliver exceptional digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="ml-4 text-xl font-semibold text-gray-900 dark:text-white">
                      {skill.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
