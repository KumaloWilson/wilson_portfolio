"use client"

import { motion } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Kays Consulting",
    company: "Kays Consulting Services",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Wilson transformed our vision into a functional, beautiful app that exceeded all expectations. His expertise in Flutter and backend development is outstanding. The project was delivered on time and within budget.",
    project: "Enterprise Management System",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "Abstrak Agency",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Highly recommend Wilson for any full-stack or AI-driven projects. His leadership skills and technical expertise have been invaluable to our team. He consistently delivers high-quality solutions.",
    project: "AI-Powered Analytics Platform",
  },
  {
    name: "Dr. Amara Okafor",
    role: "Medical Director",
    company: "HealthTech Solutions",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Wilson's work on our telemedicine platform was exceptional. He understood the complex requirements of healthcare technology and delivered a secure, user-friendly solution that our patients love.",
    project: "MediGuideAI Platform",
  },
  {
    name: "James Rodriguez",
    role: "Transport Manager",
    company: "Urban Mobility Co.",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The ride-hailing app Wilson developed for us has revolutionized our business. The real-time tracking, payment integration, and user experience are all top-notch. Couldn't be happier with the results.",
    project: "Easy Ride App",
  },
  {
    name: "Lisa Thompson",
    role: "Agricultural Consultant",
    company: "FarmTech Innovations",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Wilson's FarmBot application has made agricultural education engaging and accessible. The gamified approach and AI-powered recommendations have helped thousands of farmers improve their practices.",
    project: "FarmBot Educational Platform",
  },
  {
    name: "David Park",
    role: "Startup Founder",
    company: "AccessTech",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The Lucid Eye app Wilson created for visually impaired users showcases his commitment to inclusive technology. His attention to accessibility and user experience is remarkable.",
    project: "Lucid Eye Assistant",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
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
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="flex items-center justify-center mb-6">
                <Quote className="w-12 h-12 text-blue-500 opacity-50" />
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">{testimonials[currentIndex].role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                <div className="mt-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium inline-block">
                  {testimonials[currentIndex].project}
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{testimonial.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 text-xs">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {testimonial.text.length > 120 ? `${testimonial.text.substring(0, 120)}...` : testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "50+", label: "Happy Clients" },
            { number: "98%", label: "Success Rate" },
            { number: "24/7", label: "Support" },
            { number: "5★", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
