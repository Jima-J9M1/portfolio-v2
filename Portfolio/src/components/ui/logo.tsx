"use client"

import React from "react"
import { motion } from "framer-motion"

export function Logo() {
  return (
    <motion.div
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="relative w-8 h-8 bg-primary rounded-lg overflow-hidden"
        // initial={{ rotate: 0 }}
        // animate={{ rotate: 360 }}
        // transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-blue-500" />
        
        {/* Logo letters */}
        <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
          JD
        </div>
      </motion.div>
      <span className="font-bold text-lg">Jima Dube</span>
    </motion.div>
  )
}