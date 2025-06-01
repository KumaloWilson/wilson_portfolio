"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface TypewriterProps {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export default function Typewriter({
  words,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimeout)
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentWord) {
        // Finished typing current word
        setIsPaused(true)
      } else if (isDeleting && displayedText === "") {
        // Finished deleting, move to next word
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      } else if (isDeleting) {
        // Continue deleting
        setDisplayedText(currentWord.substring(0, displayedText.length - 1))
      } else {
        // Continue typing
        setDisplayedText(currentWord.substring(0, displayedText.length + 1))
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
        {displayedText}
      </span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
        className="ml-1 text-blue-600 dark:text-blue-400 font-bold"
      >
        |
      </motion.span>
    </div>
  )
}
