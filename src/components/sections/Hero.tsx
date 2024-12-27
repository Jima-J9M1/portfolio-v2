"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowDown, ExternalLink } from "lucide-react"
import { FadeIn } from "../animations/FadeIn"
import { Button } from "../ui/button"

export function Hero() {
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="h-screen relative flex flex-col justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-primary">Jima Dube</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl dark:text-gray-400">
              Full Stack Developer specialized in building exceptional digital experiences
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button asChild size="lg">
                <a 
                  href="https://www.upwork.com/freelancers/~013014a3cea6f7ea84" // Replace with your Upwork profile URL
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Hire me on Upwork
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="text-sm text-muted-foreground">Scroll Down</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.button>

      {/* Background elements can remain the same */}
    </section>
  )
}