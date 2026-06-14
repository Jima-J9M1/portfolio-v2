"use client"

import React from "react"
import { motion } from "framer-motion"
import { FadeIn } from "../animations/FadeIn"
import { Code2, Cpu, Globe, Heart, Coffee, Rocket, Brain, Layers } from "lucide-react"

const HIGHLIGHTS = [
  {
        icon: <Brain size={20} className="text-purple-400" />,
        title: "AI & Machine Learning",
        desc: "Building intelligent systems with LLMs, RAG pipelines, and agentic frameworks.",
        color: "purple",
  },
  {
        icon: <Globe size={20} className="text-cyan-400" />,
        title: "Full Stack Development",
        desc: "End-to-end web applications using Next.js, React, Node.js, and Python.",
        color: "cyan",
  },
  {
        icon: <Layers size={20} className="text-violet-400" />,
        title: "System Architecture",
        desc: "Designing scalable, fault-tolerant systems with modern cloud infrastructure.",
        color: "violet",
  },
  {
        icon: <Rocket size={20} className="text-pink-400" />,
        title: "Shipping Fast",
        desc: "Focused on delivering high-quality products with speed and precision.",
        color: "pink",
  },
  ]

const STATS = [
  { label: "Years of Experience", value: "4+", icon: <Code2 size={16} /> },
  { label: "Projects Completed", value: "50+", icon: <Rocket size={16} /> },
  { label: "Happy Clients", value: "15+", icon: <Heart size={16} /> },
  { label: "Cups of Coffee", value: "∞", icon: <Coffee size={16} /> },
  ]

export function About() {
    return (
          <section id="about" className="py-28 relative overflow-hidden">
            {/* background gradient */}
                <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                </div>div>
          
                <div className="container mx-auto px-4 md:px-8">
                  {/* Section heading */}
                        <FadeIn>
                                  <div className="flex flex-col items-center text-center mb-16">
                                              <span className="mono text-xs text-purple-400 tracking-widest uppercase mb-3">About Me</span>span>
                                              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
                                                            The <span className="text-gradient">Story</span>span> Behind the Code
                                              </h2>h2>
                                              <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                                  </div>div>
                        </FadeIn>FadeIn>
                
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                          {/* Left: Text content */}
                                  <FadeIn direction="left">
                                              <div className="space-y-6">
                                                            <div className="glass-card rounded-2xl border border-border p-8 space-y-5">
                                                                            <p className="text-muted-foreground text-lg leading-relaxed">
                                                                                              Hey! I'm <span className="text-foreground font-semibold">Jima Dube</span>span>, a Software Engineer based in
                                                                                              <span className="text-purple-400 font-medium"> Ethiopia 🇪🇹</span>span>. I'm passionate about problem solving,
                                                                                              building intelligent systems, and crafting beautiful digital experiences.
                                                                            </p>p>
                                                                            <p className="text-muted-foreground leading-relaxed">
                                                                                              I specialize in <span className="text-cyan-400 font-medium">AI-powered applications</span>span> and modern
                                                                                              web development. From building autonomous agent frameworks to shipping production-grade SaaS platforms,
                                                                                              I love working at the intersection of intelligence and great design.
                                                                            </p>p>
                                                                            <p className="text-muted-foreground leading-relaxed">
                                                                                              Currently working at <span className="text-purple-400 font-medium">Shega Media and Technology</span>span>,
                                                                                              building digital financial services used by 10,000+ users. I thrive in fast-paced environments where
                                                                                              innovation and quality go hand in hand.
                                                                            </p>p>
                                                                            <p className="text-muted-foreground leading-relaxed">
                                                                                              When I'm not coding, you'll find me exploring new AI research, contributing to open source, or enjoying
                                                                                              a <span className="text-yellow-400 font-medium">good cup of coffee ☕</span>span>.
                                                                            </p>p>
                                                            </div>div>
                                              
                                                {/* Stats */}
                                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                                              {STATS.map((stat, i) => (
                              <motion.div
                                                    key={stat.label}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="glass-card rounded-xl border border-border p-4 text-center group hover:border-purple-500/40 transition-all duration-300"
                                                  >
                                                  <div className="flex justify-center mb-2 text-muted-foreground group-hover:text-purple-400 transition-colors">
                                                    {stat.icon}
                                                  </div>div>
                                                  <div className="text-2xl font-black text-gradient">{stat.value}</div>div>
                                                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>div>
                              </motion.div>motion.div>
                            ))}
                                                            </div>div>
                                              </div>div>
                                  </FadeIn>FadeIn>
                        
                          {/* Right: Highlight cards */}
                                  <FadeIn direction="right">
                                              <div className="grid sm:grid-cols-2 gap-4">
                                                {HIGHLIGHTS.map((item, i) => (
                            <motion.div
                                                key={item.title}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.15 }}
                                                className="glass-card rounded-2xl border border-border p-6 group hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
                                              >
                                              <div className="mb-4 p-3 rounded-xl bg-white/5 w-fit">
                                                {item.icon}
                                              </div>div>
                                              <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>h3>
                                              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>p>
                            </motion.div>motion.div>
                          ))}
                                              
                                                {/* Code snippet card */}
                                                            <motion.div
                                                                              initial={{ opacity: 0, y: 30 }}
                                                                              whileInView={{ opacity: 1, y: 0 }}
                                                                              viewport={{ once: true }}
                                                                              transition={{ delay: 0.6 }}
                                                                              className="sm:col-span-2 glass-card rounded-2xl border border-border p-6 mono text-sm"
                                                                            >
                                                                            <div className="flex items-center gap-2 mb-4">
                                                                                              <div className="flex gap-1.5">
                                                                                                                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                                                                                                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                                                                                                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                                                                                </div>div>
                                                                                              <span className="text-xs text-muted-foreground">jima.config.ts</span>span>
                                                                            </div>div>
                                                                            <div className="space-y-1">
                                                                                              <div><span className="text-cyan-400">export const</span>span> <span className="text-purple-400">jimaConfig</span>span> <span className="text-foreground">= {"{"}</span>span></div>div>
                                                                                              <div className="pl-4"><span className="text-green-400">mindset</span>span><span className="text-foreground">:</span>span> <span className="text-yellow-300">"growth-first"</span>span><span className="text-foreground">,</span>span></div>div>
                                                                                              <div className="pl-4"><span className="text-green-400">approach</span>span><span className="text-foreground">:</span>span> <span className="text-yellow-300">"shipping > perfection"</span>span><span className="text-foreground">,</span>span></div>div>
                                                                                              <div className="pl-4"><span className="text-green-400">fuel</span>span><span className="text-foreground">:</span>span> <span className="text-yellow-300">"coffee + curiosity"</span>span><span className="text-foreground">,</span>span></div>div>
                                                                                              <div className="pl-4"><span className="text-green-400">openToWork</span>span><span className="text-foreground">:</span>span> <span className="text-cyan-400">true</span>span></div>div>
                                                                                              <div><span className="text-foreground">{"}"}</span>span></div>div>
                                                                            </div>div>
                                                            </motion.div>motion.div>
                                              </div>div>
                                  </FadeIn>FadeIn>
                        </div>div>
                </div>div>
          </section>section>
        )
}</section>
