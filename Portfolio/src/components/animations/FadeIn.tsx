"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type PropsWithChildren } from "react"

interface FadeInProps extends PropsWithChildren {
  children:any,
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  fullWidth?: boolean
  className?: string
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = "up", 
  fullWidth = false,
  className = "" 
}: FadeInProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const directionVariants = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...directionVariants[direction],
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        ...(isInView ? { x: 0, y: 0 } : directionVariants[direction])
      }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      style={{ width: fullWidth ? "100%" : "auto" }}
    >
      {children}
    </motion.div>
  )
} 