"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function MoonPhase() {
  const [moonPhase, setMoonPhase] = useState<number>(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Calculate moon phase (0-1 where 0 and 1 are new moon, 0.5 is full moon)
    const calculateMoonPhase = () => {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()

      // Calculate days since Jan 1, 2000 (a known new moon)
      const lp = 2551443 // Lunar period in days (29.53 * 86400)
      const now = new Date(year, month - 1, day, 20, 35, 0).getTime() / 1000
      const newMoon = new Date(2000, 0, 6, 18, 14, 0).getTime() / 1000
      const phase = ((now - newMoon) % lp) / lp

      setMoonPhase(phase)
      setIsLoading(false)
    }

    calculateMoonPhase()
  }, [])

  // Determine which moon image to show based on phase
  const getMoonImage = () => {
    if (isLoading) return null

    // Convert phase (0-1) to degrees (0-360)
    const phaseAngle = moonPhase * 360

    // Determine which phase to show
    if (phaseAngle < 22.5) return "new-moon"
    if (phaseAngle < 67.5) return "waxing-crescent"
    if (phaseAngle < 112.5) return "first-quarter"
    if (phaseAngle < 157.5) return "waxing-gibbous"
    if (phaseAngle < 202.5) return "full-moon"
    if (phaseAngle < 247.5) return "waning-gibbous"
    if (phaseAngle < 292.5) return "last-quarter"
    if (phaseAngle < 337.5) return "waning-crescent"
    return "new-moon"
  }

  const moonImage = getMoonImage()

  const getPhaseName = () => {
    if (!moonImage) return "Loading..."

    switch (moonImage) {
      case "new-moon":
        return "New Moon"
      case "waxing-crescent":
        return "Waxing Crescent"
      case "first-quarter":
        return "First Quarter"
      case "waxing-gibbous":
        return "Waxing Gibbous"
      case "full-moon":
        return "Full Moon"
      case "waning-gibbous":
        return "Waning Gibbous"
      case "last-quarter":
        return "Last Quarter"
      case "waning-crescent":
        return "Waning Crescent"
      default:
        return "Moon Phase"
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 mb-3">
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full rounded-full overflow-hidden border-2 border-white/20"
          >
            <div className={`w-full h-full bg-gray-800 rounded-full relative ${moonImage}`}>
              {/* New Moon (completely dark) */}
              {moonImage === "new-moon" && (
                <div className="absolute inset-0 bg-gray-900 rounded-full border border-gray-600"></div>
              )}

              {/* Waxing Crescent */}
              {moonImage === "waxing-crescent" && (
                <>
                  <div className="absolute inset-0 bg-gray-900 rounded-full"></div>
                  <div
                    className="absolute inset-0 bg-gray-200 rounded-full"
                    style={{ clipPath: "polygon(50% 0%, 50% 100%, 100% 100%, 100% 0%)" }}
                  ></div>
                  <div
                    className="absolute inset-0 bg-gray-900 rounded-full"
                    style={{ clipPath: "ellipse(25% 50% at 75% 50%)" }}
                  ></div>
                </>
              )}

              {/* First Quarter */}
              {moonImage === "first-quarter" && (
                <>
                  <div className="absolute inset-0 bg-gray-900 rounded-full"></div>
                  <div
                    className="absolute inset-0 bg-gray-200 rounded-full"
                    style={{ clipPath: "polygon(50% 0%, 50% 100%, 100% 100%, 100% 0%)" }}
                  ></div>
                </>
              )}

              {/* Waxing Gibbous */}
              {moonImage === "waxing-gibbous" && (
                <>
                  <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                  <div
                    className="absolute inset-0 bg-gray-900 rounded-full"
                    style={{ clipPath: "ellipse(25% 50% at 25% 50%)" }}
                  ></div>
                </>
              )}

              {/* Full Moon */}
              {moonImage === "full-moon" && <div className="absolute inset-0 bg-gray-200 rounded-full shadow-lg"></div>}

              {/* Waning Gibbous */}
              {moonImage === "waning-gibbous" && (
                <>
                  <div className="absolute inset-0 bg-gray-200 rounded-full"></div>
                  <div
                    className="absolute inset-0 bg-gray-900 rounded-full"
                    style={{ clipPath: "ellipse(25% 50% at 75% 50%)" }}
                  ></div>
                </>
              )}

              {/* Last Quarter */}
              {moonImage === "last-quarter" && (
                <>
                  <div className="absolute inset-0 bg-gray-900 rounded-full"></div>
                  <div
                    className="absolute inset-0 bg-gray-200 rounded-full"
                    style={{ clipPath: "polygon(0% 0%, 0% 100%, 50% 100%, 50% 0%)" }}
                  ></div>
                </>
              )}

              {/* Waning Crescent */}
              {moonImage === "waning-crescent" && (
                <>
                  <div className="absolute inset-0 bg-gray-900 rounded-full"></div>
                  <div
                    className="absolute inset-0 bg-gray-200 rounded-full"
                    style={{ clipPath: "polygon(0% 0%, 0% 100%, 50% 100%, 50% 0%)" }}
                  ></div>
                  <div
                    className="absolute inset-0 bg-gray-900 rounded-full"
                    style={{ clipPath: "ellipse(25% 50% at 25% 50%)" }}
                  ></div>
                </>
              )}

              {/* Moon craters and details */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute w-2 h-2 rounded-full bg-gray-600 top-4 left-6"></div>
                <div className="absolute w-3 h-3 rounded-full bg-gray-600 top-10 left-4"></div>
                <div className="absolute w-1 h-1 rounded-full bg-gray-600 top-6 left-12"></div>
                <div className="absolute w-2 h-2 rounded-full bg-gray-600 top-12 left-10"></div>
              </div>

              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-full shadow-lg"
                style={{
                  boxShadow: "inset 0 0 20px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)",
                }}
              ></div>
            </div>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center"
      >
        <p className="text-white text-sm font-medium">{getPhaseName()}</p>
        <p className="text-gray-400 text-xs mt-1">Today's Moon Phase</p>
      </motion.div>
    </div>
  )
}
