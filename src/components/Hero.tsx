import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown, Globe, Code, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  const socialVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.2 + (i * 0.2),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-blue-950 dark:to-gray-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Github, Linkedin, Globe, Code, Zap].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight],
              rotate: 360
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Icon className="w-8 h-8 text-blue-500/20 dark:text-blue-400/20" />
          </motion.div>
        ))}
      </div>

      {/* Profile Image with Glow Effect */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1.5
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse" />
        <img
          src="https://avatars.githubusercontent.com/u/121590986?v=4"
          alt="Wilson Kumalo"
          className="relative w-48 h-48 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 object-cover"
        />
        <motion.div
          className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="block w-full h-full bg-green-500 rounded-full animate-ping" />
        </motion.div>
      </motion.div>

      {/* Name and Title with Gradient */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8 mb-6 max-w-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Wilson Kumalo
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
            🚀 Code Alchemist | Flutter Doctor | Tech Visionary
          </span>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transforming ideas into scalable, innovative solutions.
            I specialize in Mobile Development (Flutter), web development (React, NextJS), AI/ML, and emerging technologies, creating user-friendly mobile and web application, to create innovative applications that push the boundaries of what's possible.
          </p>
        </motion.div>
      </motion.div>

      {/* Social Links with Hover Effects */}
      <div className="flex space-x-6 mt-8">
        {[
          { icon: Github, href: "https://github.com/kumalowilson", label: "GitHub" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/wilson-kumalo-733550243/", label: "LinkedIn" },
          { icon: Mail, href: "mailto:kumalowilson900@gmail.com", label: "Email" }
        ].map(({ icon: Icon, href, label }, i) => (
          <motion.a
            key={label}
            custom={i}
            variants={socialVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
          >
            <div className="absolute inset-0 bg-blue-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-all duration-300 group-hover:-translate-y-1">
              <Icon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </div>
            <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-gray-600 dark:text-gray-400">
              {label}
            </span>
          </motion.a>
        ))}
      </div>

      {/* Resume Download Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-2xl"
        onClick={() => window.open('https://drive.google.com/file/d/1yQZZbTiq2nTIk5DAQOhAvInbE7UI_Aff/view?usp=sharing', '_blank')}
      >
        <span className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors duration-300" />
        <Download className="w-5 h-5 mr-2 animate-bounce" />
        <span className="relative font-medium">Download Resume</span>
      </motion.button>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </motion.section>
  );
};