import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function for visitor tracking
export const trackVisitor = async () => {
  try {
    const response = await fetch("/api/visitors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      throw new Error("Failed to track visitor")
    }

    const data = await response.json()
    return data.count
  } catch (error) {
    console.error("Error tracking visitor:", error)
    return null
  }
}

// Format numbers for display
export const formatVisitorCount = (count: number): string => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M"
  } else if (count >= 1000) {
    return (count / 1000).toFixed(1) + "K"
  }
  return count.toLocaleString()
}

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
