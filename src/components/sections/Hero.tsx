"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Terminal, Cpu, Code2, Zap } from "lucide-react"

const TYPING_TEXTS = [
    "Software Engineer",
    "AI Systems Builder",
    "Front End Developer",
    "Full Stack Developer",
    "Open Source Contributor",
  ]

function useTypingEffect(texts: string[], speed = 80, pause = 1800) {
    const [displayed, setDisplayed] = useState("")
    const [textIndex, setTextIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

  useEffect(() => {
        const current = texts[textIndex]
        const timeout = setTimeout(() => {
                if (!deleting) {
                          if (charIndex < current.length) {
                                      setDisplayed(current.slice(0, charIndex + 1))
                                      setCharIndex(c => c + 1)
                          } else {
                                      setTimeout(() => setDeleting(true), pause)
                          }
                } else {
                          if (charIndex > 0) {
                                      setDisplayed(current.slice(0, charIndex - 1))
                                      setCharIndex(c => c - 1)
                          } else {
                                      setDeleting(false)
                                      setTextIndex(i => (i + 1) % texts.length)
                          }
                }
        }, deleting ? speed / 2 : speed)
        return () => clearTimeout(timeout)
  }, [charIndex, deleting, textIndex, texts, speed, pause])

  return displayed
}

const STATS = [
  { label: "Projects Built", value: "50+" },
  { label: "Years Experience", value: "4+" },
  { label: "AI Systems", value: "10+" },
  { label: "Happy Clients", value: "15+" },
  ]

const TECH_BADGES = ["Next.js", "React", "TypeScript", "Python", "AI/ML", "Node.js"]

export function Hero() {
    const typedText = useTypingEffect(TYPING_TEXTS)
    const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const scrollToAbout = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
          {/* Ambient orbs */}
              <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
                      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/5 rounded-full blur-2xl" />
              </div>div>
        
              <div className="container mx-auto px-4 md:px-8 relative z-10">
                      <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
                      
                        {/* Left: Main Content */}
                                <div className="flex flex-col gap-8">
                                  {/* Status badge */}
                                            <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.5 }}
                                                            className="flex items-center gap-2 w-fit"
                                                          >
                                                          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-green-500/20">
                                                                          <span className="relative flex h-2 w-2">
                                                                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                                                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                                                          </span>span>
                                                                          <span className="text-xs text-green-400 font-medium mono">Available for work</span>span>
                                                          </div>div>
                                            </motion.div>motion.div>
                                
                                  {/* Name */}
                                            <motion.div
                                                            initial={{ opacity: 0, y: 30 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.6, delay: 0.1 }}
                                                          >
                                                          <p className="text-sm mono text-purple-400 mb-2 tracking-widest uppercase">Hello, world!</p>p>
                                                          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
                                                                          <span className="text-foreground">Jima</span>span>
                                                                          <br />
                                                                          <span className="text-gradient">Dube</span>span>
                                                          </h1>h1>
                                            </motion.div>motion.div>
                                
                                  {/* Typing effect */}
                                            <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 0.5, delay: 0.3 }}
                                                            className="flex items-center gap-3"
                                                          >
                                                          <Terminal size={18} className="text-cyan-400 shrink-0" />
                                                          <div className="flex items-center gap-1">
                                                                          <span className="text-xl font-semibold text-foreground/90">{mounted ? typedText : TYPING_TEXTS[0]}</span>span>
                                                                          <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-pulse ml-0.5" />
                                                          </div>div>
                                            </motion.div>motion.div>
                                
                                  {/* Description */}
                                            <motion.p
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.6, delay: 0.4 }}
                                                            className="text-muted-foreground text-lg leading-relaxed max-w-lg"
                                                          >
                                                          I build intelligent systems and beautiful interfaces. Specializing in
                                                          <span className="text-purple-400 font-medium"> AI-powered applications</span>span>,
                                                          <span className="text-cyan-400 font-medium"> scalable backends</span>span>, and
                                                          <span className="text-violet-400 font-medium"> stunning frontends</span>span> that make an impact.
                                            </motion.p>motion.p>
                                
                                  {/* Tech badges */}
                                            <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.6, delay: 0.5 }}
                                                            className="flex flex-wrap gap-2"
                                                          >
                                              {TECH_BADGES.map((badge, i) => (
                                                                            <span
                                                                                                key={badge}
                                                                                                className="px-3 py-1 text-xs font-medium rounded-full glass-card border border-purple-500/20 text-purple-300 mono"
                                                                                              >
                                                                              {badge}
                                                                            </span>span>
                                                                          ))}
                                            </motion.div>motion.div>
                                
                                  {/* CTA Buttons */}
                                            <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 0.6, delay: 0.6 }}
                                                            className="flex flex-wrap gap-4"
                                                          >
                                                          <a
                                                                            href="#projects"
                                                                            onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                                                                            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold hover:from-purple-500 hover:to-violet-500 transition-all duration-300 glow-primary hover:scale-105"
                                                                          >
                                                                          <Zap size={16} />
                                                                          View Projects
                                                          </a>a>
                                                          <a
                                                                            href="#contact"
                                                                            onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                                                                            className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-border text-foreground font-semibold hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300"
                                                                          >
                                                                          <Mail size={16} />
                                                                          Contact Me
                                                          </a>a>
                                            </motion.div>motion.div>
                                
                                  {/* Social links */}
                                            <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            transition={{ duration: 0.6, delay: 0.7 }}
                                                            className="flex items-center gap-4"
                                                          >
                                                          <a href="https://github.com/jima-J9M1" target="_blank" rel="noopener noreferrer"
                                                                            className="p-2 glass-card rounded-lg border border-border hover:border-purple-500/50 text-muted-foreground hover:text-purple-400 transition-all duration-300">
                                                                          <Github size={18} />
                                                          </a>a>
                                                          <a href="https://linkedin.com/in/jima-dube" target="_blank" rel="noopener noreferrer"
                                                                            className="p-2 glass-card rounded-lg border border-border hover:border-cyan-500/50 text-muted-foreground hover:text-cyan-400 transition-all duration-300">
                                                                          <Linkedin size={18} />
                                                          </a>a>
                                                          <a href="mailto:jimadube100@gmail.com"
                                                                            className="p-2 glass-card rounded-lg border border-border hover:border-violet-500/50 text-muted-foreground hover:text-violet-400 transition-all duration-300">
                                                                          <Mail size={18} />
                                                          </a>a>
                                                          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                                            </motion.div>motion.div>
                                </div>div>
                      
                        {/* Right: Terminal Card */}
                                <motion.div
                                              initial={{ opacity: 0, x: 40 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ duration: 0.8, delay: 0.3 }}
                                              className="hidden lg:block"
                                            >
                                            <div className="glass-card rounded-2xl border border-border overflow-hidden glow-primary">
                                              {/* Terminal header */}
                                                          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-white/2">
                                                                          <div className="flex gap-1.5">
                                                                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                                                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                                                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                                                          </div>div>
                                                                          <span className="text-xs text-muted-foreground mono ml-2">jima@portfolio ~ </span>span>
                                                                          <Code2 size={12} className="ml-auto text-muted-foreground" />
                                                          </div>div>
                                              {/* Terminal body */}
                                                          <div className="p-6 mono text-sm space-y-2">
                                                                          <div><span className="text-cyan-400">const</span>span> <span className="text-purple-400">developer</span>span> <span className="text-foreground">=</span>span> {"{"}</div>div>
                                                                          <div className="pl-4"><span className="text-green-400">name</span>span><span className="text-foreground">:</span>span> <span className="text-yellow-300">"Jima Dube"</span>span><span className="text-foreground">,</span>span></div>div>
                                                                          <div className="pl-4"><span className="text-green-400">role</span>span><span className="text-foreground">:</span>span> <span className="text-yellow-300">"Software Engineer"</span>span><span className="text-foreground">,</span>span></div>div>
                                                                          <div className="pl-4"><span className="text-green-400">location</span>span><span className="text-foreground">:</span>span> <span className="text-yellow-300">"Ethiopia 🇪🇹"</span>span><span className="text-foreground">,</span>span></div>div>
                                                                          <div className="pl-4"><span className="text-green-400">skills</span>span><span className="text-foreground">: [</span>span></div>div>
                                                                          <div className="pl-8"><span className="text-yellow-300">"AI/ML"</span>span><span className="text-foreground">, </span>span><span className="text-yellow-300">"Next.js"</span>span><span className="text-foreground">,</span>span></div>div>
                                                                          <div className="pl-8"><span className="text-yellow-300">"Python"</span>span><span className="text-foreground">, </span>span><span className="text-yellow-300">"TypeScript"</span>span><span className="text-foreground">,</span>span></div>div>
                                                                          <div className="pl-8"><span className="text-yellow-300">"Node.js"</span>span><span className="text-foreground">, </span>span><span className="text-yellow-300">"React"</span>span></div>div>
                                                                          <div className="pl-4"><span className="text-foreground">],</span>span></div>div>
                                                                          <div className="pl-4"><span className="text-green-400">passion</span>span><span className="text-foreground">:</span>span> <span className="text-yellow-300">"Building intelligent solutions"</span>span></div>div>
                                                                          <div>{"}"}<span className="text-foreground">;</span>span></div>div>
                                                                          <div className="pt-2 flex items-center gap-1">
                                                                                            <span className="text-purple-400">$</span>span>
                                                                                            <span className="text-cyan-400"> npm run </span>span>
                                                                                            <span className="text-foreground">build-the-future</span>span>
                                                                                            <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
                                                                          </div>div>
                                                          </div>div>
                                            </div>div>
                                
                                  {/* Stats row */}
                                            <div className="grid grid-cols-4 gap-3 mt-4">
                                              {STATS.map((stat, i) => (
                                                              <motion.div
                                                                                  key={stat.label}
                                                                                  initial={{ opacity: 0, y: 20 }}
                                                                                  animate={{ opacity: 1, y: 0 }}
                                                                                  transition={{ delay: 0.6 + i * 0.1 }}
                                                                                  className="glass-card rounded-xl p-3 border border-border text-center"
                                                                                >
                                                                                <div className="text-xl font-bold text-gradient">{stat.value}</div>div>
                                                                                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>div>
                                                              </motion.div>motion.div>
                                                            ))}
                                            </div>div>
                                </motion.div>motion.div>
                      
                      </div>div>
              </div>div>
        
          {/* Scroll indicator */}
              <motion.button
                        onClick={scrollToAbout}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                      >
                      <span className="text-xs mono tracking-widest uppercase">scroll</span>span>
                      <motion.div
                                  animate={{ y: [0, 6, 0] }}
                                  transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                <ArrowDown size={16} className="group-hover:text-purple-400 transition-colors" />
                      </motion.div>motion.div>
              </motion.button>motion.button>
        </section>section>
      )
}</section>
