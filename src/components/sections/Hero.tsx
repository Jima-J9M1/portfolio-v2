"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code2, Zap } from "lucide-react"
import { FadeIn } from "../animations/FadeIn"

const TYPING_TEXTS = [
  "Software Engineer",
  "AI Systems Builder",
  "Front End Developer",
  "Full Stack Developer",
]

const TECH_BADGES = ["Next.js", "React", "TypeScript", "Python", "AI/ML", "Node.js"]

const STATS = [
  { label: "Projects", value: "50+" },
  { label: "Experience", value: "4+" },
  { label: "AI Systems", value: "10+" },
  { label: "Clients", value: "15+" },
]

function useTypingEffect() {
  const [text, setText] = useState(TYPING_TEXTS[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const indexRef = useRef(0)
  const charRef = useRef(TYPING_TEXTS[0].length)

  useEffect(() => {
    const tick = () => {
      const current = TYPING_TEXTS[indexRef.current]
      if (!isDeleting) {
        if (charRef.current < current.length) {
          charRef.current += 1
          setText(current.slice(0, charRef.current))
        } else {
          setTimeout(() => setIsDeleting(true), 1800)
          return
        }
      } else {
        if (charRef.current > 0) {
          charRef.current -= 1
          setText(current.slice(0, charRef.current))
        } else {
          indexRef.current = (indexRef.current + 1) % TYPING_TEXTS.length
          charRef.current = 0
          setIsDeleting(false)
          return
        }
      }
    }
    const id = setTimeout(tick, isDeleting ? 40 : 80)
    return () => clearTimeout(id)
  }, [text, isDeleting])

  return text
}

export function Hero() {
  const typedText = useTypingEffect()

  const scrollToAbout = () => {
    const el = document.querySelector("#about")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="down" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-purple-500/20 mb-6">
              <Terminal size={14} className="text-purple-400" />
              <span className="text-xs font-mono text-purple-300">Available for opportunities</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">Jima</span>{" "}
              <span className="text-gradient">Dube</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex items-center justify-center gap-2 mb-6 h-10">
              <Code2 size={20} className="text-purple-400" />
              <span className="text-2xl md:text-3xl font-mono text-purple-300 min-w-64 text-left">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Software Engineer from Ethiopia specializing in AI systems, full-stack development, and building intelligent applications.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5}>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {TECH_BADGES.map((badge) => (
                <span key={badge} className="px-3 py-1 text-xs font-mono rounded-full glass-card border border-purple-500/20 text-purple-300">
                  {badge}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#projects" className="px-8 py-3 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white font-semibold transition-all glow-primary">
                View Projects
              </a>
              <a href="#contact" className="px-8 py-3 rounded-xl glass-card border border-purple-500/20 hover:border-purple-500/50 text-white font-semibold transition-all">
                Contact Me
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.7}>
            <div className="grid grid-cols-4 gap-4 mb-12 max-w-lg mx-auto">
              {STATS.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.8}>
            <div className="flex items-center justify-center gap-6">
              <a href="https://github.com/jima-J9M1" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-xl hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-xl hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:jimadube100@gmail.com" className="p-3 glass-card rounded-xl hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://t.me/jimaDube" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-xl hover:text-purple-400 transition-colors">
                <Zap size={20} />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full glass-card animate-bounce hover:text-purple-400 transition-colors"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  )
}
