"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code2, Zap } from "lucide-react"

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
              {/* ambient orbs */}
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" style={{ animationDelay: "1.5s" }} />
                </div>div>
          
                <div className="container mx-auto px-4 md:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
                        
                            {/* Left */}
                                  <div className="flex flex-col gap-8">
                                      {/* Status */}
                                              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                                                            <div className="flex items-center gap-2 w-fit px-4 py-2 rounded-full glass-card border border-green-500/20">
                                                                            <span className="relative flex h-2 w-2">
                                                                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                                                                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                                                            </span>span>
                                                                            <span className="text-xs text-green-400 font-medium mono">Available for work</span>span>
                                                            </div>div>
                                              </motion.div>motion.div>
                                  
                                      {/* Name */}
                                              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                                                            <p className="text-sm mono text-purple-400 mb-2 tracking-widest uppercase">Hello, world!</p>p>
                                                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight">
                                                                            <span className="text-foreground">Jima</span>span>
                                                                            <br />
                                                                            <span className="text-gradient">Dube</span>span>
                                                            </h1>h1>
                                              </motion.div>motion.div>
                                  
                                      {/* Typing */}
                                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex items-center gap-3">
                                                            <Terminal size={18} className="text-cyan-400 shrink-0" />
                                                            <div className="flex items-center gap-1">
                                                                            <span className="text-xl font-semibold text-foreground/90">{typedText}</span>span>
                                                                            <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-pulse ml-0.5" />
                                                            </div>div>
                                              </motion.div>motion.div>
                                  
                                      {/* Description */}
                                              <motion.p
                                                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                                                                className="text-muted-foreground text-lg leading-relaxed max-w-lg"
                                                              >
                                                            I build intelligent systems and beautiful interfaces. Specializing in
                                                  {" "}<span className="text-purple-400 font-medium">AI-powered applications</span>span>,
                                                  {" "}<span className="text-cyan-400 font-medium">scalable backends</span>span>, and
                                                  {" "}<span className="text-violet-400 font-medium">stunning frontends</span>span>.
                                              </motion.p>motion.p>
                                  
                                      {/* Badges */}
                                              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap gap-2">
                                                  {TECH_BADGES.map((badge) => (
                              <span key={badge} className="px-3 py-1 text-xs font-medium rounded-full glass-card border border-purple-500/20 text-purple-300 mono">
                                  {badge}
                              </span>span>
                            ))}
                                              </motion.div>motion.div>
                                  
                                      {/* CTAs */}
                                              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-wrap gap-4">
                                                            <a
                                                                                href="#projects"
                                                                                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }) }}
                                                                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold hover:from-purple-500 hover:to-violet-500 transition-all duration-300 glow-primary hover:scale-105"
                                                                              >
                                                                            <Zap size={16} />
                                                                            View Projects
                                                            </a>a>
                                                            <a
                                                                                href="#contact"
                                                                                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }) }}
                                                                                className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-border text-foreground font-semibold hover:border-purple-500/50 transition-all duration-300"
                                                                              >
                                                                            <Mail size={16} />
                                                                            Contact Me
                                                            </a>a>
                                              </motion.div>motion.div>
                                  
                                      {/* Socials */}
                                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} className="flex items-center gap-4">
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
                                              </motion.div>motion.div>
                                  </div>div>
                        
                            {/* Right - Terminal card */}
                                  <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block">
                                              <div className="glass-card rounded-2xl border border-border overflow-hidden glow-primary">
                                                            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                                                                            <div className="flex gap-1.5">
                                                                                              <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                                                                              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                                                                              <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                                                            </div>div>
                                                                            <span className="text-xs text-muted-foreground mono ml-2">jima@portfolio ~ </span>span>
                                                                            <Code2 size={12} className="ml-auto text-muted-foreground" />
                                                            </div>div>
                                                            <div className="p-6 mono text-sm space-y-1.5">
                                                                            <div><span className="text-cyan-400">const</span>span> <span className="text-purple-400">dev</span>span> <span className="text-foreground">= {"{"}</span>span></div>div>
                                                                            <div className="pl-4"><span className="text-green-400">name</span>span><span className="text-foreground">:</span>span> <span className="text-yellow-300">&quot;Jima Dube&quot;</span>span><span className="text-foreground">,</span>span></div>div>
                                                                            <div className="pl-4"><span className="text-green-400">role</span>span><span className="text-foreground">:</span>span> <span className="text-yellow-300">&quot;Software Engineer&quot;</span>span><span className="text-foreground">,</span>span></div>div>
                                                                            <div className="pl-4"><span className="text-green-400">location</span>span><span className="text-foreground">:</span>span> <span className="text-yellow-300">&quot;Ethiopia 🇪🇹&quot;</span>span><span className="text-foreground">,</span>span></div>div>
                                                                            <div className="pl-4"><span className="text-green-400">skills</span>span><span className="text-foreground">: [</span>span><span className="text-yellow-300">&quot;AI/ML&quot;</span>span><span className="text-foreground">, </span>span><span className="text-yellow-300">&quot;Next.js&quot;</span>span><span className="text-foreground">, ...]</span>span></div>div>
                                                                            <div><span className="text-foreground">{"}"}</span>span></div>div>
                                                                            <div className="pt-2 flex items-center gap-1 text-muted-foreground">
                                                                                              <span className="text-purple-400">$</span>span>
                                                                                              <span className="text-cyan-400"> npm run </span>span>
                                                                                              <span className="text-foreground">build-future</span>span>
                                                                                              <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
                                                                            </div>div>
                                                            </div>div>
                                              </div>div>
                                  
                                              <div className="grid grid-cols-4 gap-3 mt-4">
                                                  {STATS.map((stat, i) => (
                              <motion.div
                                                    key={stat.label}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.6 + i * 0.1 }}
                                                    className="glass-card rounded-xl p-3 border border-border text-center"
                                                  >
                                                <div className="text-lg font-bold text-gradient">{stat.value}</div>div>
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
                            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                        <span className="text-xs mono tracking-widest uppercase">scroll</span>span>
                        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                  <ArrowDown size={16} className="hover:text-purple-400 transition-colors" />
                        </motion.div>motion.div>
                </motion.button>motion.button>
          </section>section>
        )
}</section>
