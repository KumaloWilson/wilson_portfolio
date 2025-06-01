"use client"

import { motion } from "framer-motion"
import { Eye, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

interface VisitorCounterProps {
  className?: string
  showTrend?: boolean
}

export default function VisitorCounter({ className = "", showTrend = false }: VisitorCounterProps) {
  const [visitorCount, setVisitorCount] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [previousCount, setPreviousCount] = useState<number | null>(null)

  useEffect(() => {
    const incrementVisitorCount = async () => {
      try {
        // Get current count first
        const getCurrentCount = async () => {
          const response = await fetch("/api/visitors")
          const data = await response.json()
          return data.count
        }

        // Increment count
        const incrementCount = async () => {
          const response = await fetch("/api/visitors", { method: "POST" })
          const data = await response.json()
          return data.count
        }

        const current = await getCurrentCount()
        setPreviousCount(current)

        // Small delay for better UX
        setTimeout(async () => {
          const newCount = await incrementCount()
          setVisitorCount(newCount)
          setIsLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error updating visitor count:", error)
        // Fallback to localStorage for demo
        const stored = localStorage.getItem("portfolioVisitors")
        const currentCount = stored ? Number.parseInt(stored) : 12847
        const newCount = currentCount + 1
        localStorage.setItem("portfolioVisitors", newCount.toString())
        setVisitorCount(newCount)
        setIsLoading(false)
      }
    }

    incrementVisitorCount()
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toLocaleString()
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-slate-700/50 shadow-sm ${className}`}
    >
      <Eye className="w-4 h-4 text-blue-500 mr-2" />
      <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">{showTrend ? "Total Views:" : "Visitors:"}</span>

      {isLoading ? (
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
        />
      ) : (
        <div className="flex items-center space-x-2">
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            {visitorCount ? formatNumber(visitorCount) : "0"}
          </motion.span>

          {showTrend && previousCount && visitorCount && visitorCount > previousCount && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center text-green-500"
            >
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs ml-1">+1</span>
            </motion.div>
          )}
        </div>
      )}
    </motion.div>
  )
}
