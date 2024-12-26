"use client"

import React from "react"
import { motion } from "framer-motion"

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      onAnimationComplete={(definition: { opacity?: number }) => {
        if (definition.opacity === 0) {
          document.body.style.overflow = 'auto'
        }
      }}
    >
      <div className="relative">
        <motion.div
          className="h-20 w-20 rounded-full border-4 border-primary"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-xl font-bold">YN</span>
        </motion.div>
      </div>
    </motion.div>
  )
}