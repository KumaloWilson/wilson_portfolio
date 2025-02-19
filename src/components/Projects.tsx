import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Github, Maximize2 } from 'lucide-react';

const projects: Project[] = [
  {
    title: "AI-Powered Navigation Chatbot",
    description: "An intelligent chatbot providing navigation and public service information, from nearby clinics to police stations.",
    technologies: ["AI", "NLP", "React", "Node.js"],
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Local GenAI",
    description: "An offline app enabling users to interact with multiple LLMs on mobile devices.",
    technologies: ["Flutter", "Lamma CPP", "SQLite"],
    category: "AI",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Lucid Eye",
    description: "A blind assistant app leveraging AI to provide real-time navigation and object recognition.",
    technologies: ["Flutter", "TensorFlow Lite", "Flask", "NodeJS", "MySQL"],
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "MediGuideAI",
    description: "A telemedicine system providing AI-powered medical guidance and realtime doctor-patient interactions.",
    technologies: ["Flutter", "React", "Firebase", "TensorFlow", "Pandas", "BioMistral", "ZEGOCloud"],
    category: "Healthcare",
    image: "https://plus.unsplash.com/premium_photo-1661546220316-5a3fdd25641a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "ElrickTrans",
    description: "An AI-powered e-hailing and taxi booking app for urban and rural areas.",
    technologies: ["Flutter", "React", "NodeJs", "Mapbox", "OpenCV", "Firebase"],
    category: "Transportation",
    image: "https://plus.unsplash.com/premium_photo-1661510316006-45fb0f58f5d9?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "CUT Nexus XR Campus Navigation",
    description: "An XR-powered navigation system for CUT campus, integrating ARCore and geospatial mapping.",
    technologies: ["Flutter", "Java", "ARCore", "Mapbox", "Firebase"],
    category: "XR",
    image: "https://images.unsplash.com/photo-1579616043939-95d87a6e8512?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXVnbWVudGVkJTIwcmVhbGl0eXxlbnwwfHwwfHx8MA%3D%3D",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "SmartLearn",
    description: "An AI-powered personalized e-learning platform that adapts to students' learning styles.",
    technologies: ["React", "Node.js", "TensorFlow", "Deep Seek", "PostgreSQL"],
    category: "Education",
    image: "https://images.unsplash.com/photo-1577036056967-aec1101ab9de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    demoUrl: "#",
    githubUrl: "#"
  }
];

const categories = ["All", "AI", "Mobile", "Web"];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    project => selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${selectedCategory === category
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Actions */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-900" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                      >
                        <Github className="w-5 h-5 text-gray-900" />
                      </a>
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Maximize2 className="w-5 h-5 text-gray-900" />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end space-x-4">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Demo
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};