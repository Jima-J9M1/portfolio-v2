"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { FadeIn } from "../animations/FadeIn"

const SKILL_CATEGORIES = [
  {
        label: "AI & ML",
        emoji: "🤖",
        color: "purple",
        skills: [
          { name: "LLM Integration", level: 90 },
          { name: "RAG Systems", level: 85 },
          { name: "LangChain", level: 85 },
          { name: "Agentic AI", level: 88 },
          { name: "OpenAI API", level: 92 },
          { name: "Vector DBs", level: 80 },
              ],
  },
  {
        label: "Frontend",
        emoji: "🎨",
        color: "cyan",
        skills: [
          { name: "React", level: 95 },
          { name: "Next.js", level: 92 },
          { name: "TypeScript", level: 90 },
          { name: "Tailwind CSS", level: 93 },
          { name: "Framer Motion", level: 82 },
          { name: "Figma", level: 75 },
              ],
  },
  {
        label: "Backend",
        emoji: "⚙️",
        color: "violet",
        skills: [
          { name: "Python", level: 90 },
          { name: "Node.js", level: 85 },
          { name: "FastAPI", level: 82 },
          { name: "NestJS", level: 78 },
          { name: "Go", level: 65 },
          { name: "REST / GraphQL", level: 88 },
              ],
  },
  {
        label: "Data & Cloud",
        emoji: "☁️",
        color: "pink",
        skills: [
          { name: "PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "Redis", level: 75 },
          { name: "Azure", level: 78 },
          { name: "Docker", level: 80 },
          { name: "CI/CD", level: 82 },
              ],
  },
  ]

const COLOR_MAP: Record<string, { bar: string; badge: string; border: string }> = {
    purple: {
          bar: "bg-gradient-to-r from-purple-600 to-violet-500",
          badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
          border: "hover:border-purple-500/40",
    },
    cyan: {
          bar: "bg-gradient-to-r from-cyan-600 to-teal-500",
          badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
          border: "hover:border-cyan-500/40",
    },
    violet: {
          bar: "bg-gradient-to-r from-violet-600 to-indigo-500",
          badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
          border: "hover:border-violet-500/40",
    },
    pink: {
          bar: "bg-gradient-to-r from-pink-600 to-rose-500",
          badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",
          border: "hover:border-pink-500/40",
    },
}

const TOOLS = [
    "Git", "GitHub", "VS Code", "Cursor", "Vercel", "Supabase",
    "Firebase", "n8n", "Postman", "Linux", "Webpack", "Vite",
  ]

export function Skills() {
    const [activeTab, setActiveTab] = useState(0)

  return (
        <section id="skills" className="py-28 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
              </div>div>
        
              <div className="container mx-auto px-4 md:px-8">
                {/* Heading */}
                      <FadeIn>
                                <div className="flex flex-col items-center text-center mb-16">
                                            <span className="mono text-xs text-purple-400 tracking-widest uppercase mb-3">Technical Skills</span>span>
                                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
                                                          My <span className="text-gradient">Tech Stack</span>span>
                                            </h2>h2>
                                            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                                </div>div>
                      </FadeIn>FadeIn>
              
                {/* Tab navigation */}
                      <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {SKILL_CATEGORIES.map((cat, i) => (
                      <button
                                      key={cat.label}
                                      onClick={() => setActiveTab(i)}
                                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 border ${
                                                        activeTab === i
                                                          ? "bg-purple-600/20 border-purple-500/50 text-purple-300"
                                                          : "glass-card border-border text-muted-foreground hover:border-purple-500/30"
                                      }`}
                                    >
                                    <span>{cat.emoji}</span>span>
                                    <span>{cat.label}</span>span>
                      </button>button>
                    ))}
                      </div>div>
              
                {/* Skills panel */}
                      <div className="max-w-3xl mx-auto">
                        {SKILL_CATEGORIES.map((cat, catIdx) => {
                      const colors = COLOR_MAP[cat.color]
                                    return (
                                                    <motion.div
                                                                      key={cat.label}
                                                                      initial={{ opacity: 0, y: 20 }}
                                                                      animate={activeTab === catIdx ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                                                      transition={{ duration: 0.35 }}
                                                                      className={activeTab === catIdx ? "block" : "hidden"}
                                                                    >
                                                                    <div className={`glass-card rounded-2xl border border-border p-8 ${colors.border} transition-all duration-300`}>
                                                                                      <div className="grid sm:grid-cols-2 gap-6">
                                                                                        {cat.skills.map((skill, i) => (
                                                                                            <motion.div
                                                                                                                      key={skill.name}
                                                                                                                      initial={{ opacity: 0, x: -20 }}
                                                                                                                      animate={{ opacity: 1, x: 0 }}
                                                                                                                      transition={{ delay: i * 0.07 }}
                                                                                                                      className="space-y-2"
                                                                                                                    >
                                                                                                                    <div className="flex items-center justify-between">
                                                                                                                                              <span className="text-sm font-medium text-foreground">{skill.name}</span>span>
                                                                                                                                              <span className={`text-xs px-2 py-0.5 rounded-full border mono ${colors.badge}`}>
                                                                                                                                                {skill.level}%
                                                                                                                                                </span>span>
                                                                                                                      </div>div>
                                                                                                                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                                                                                                              <motion.div
                                                                                                                                                                            initial={{ width: 0 }}
                                                                                                                                                                            animate={{ width: `${skill.level}%` }}
                                                                                                                                                                            transition={{ duration: 0.8, delay: i * 0.07, ease: "easeOut" }}
                                                                                                                                                                            className={`h-full rounded-full ${colors.bar}`}
                                                                                                                                                                          />
                                                                                                                      </div>div>
                                                                                              </motion.div>motion.div>
                                                                                          ))}
                                                                                        </div>div>
                                                                    </div>div>
                                                    </motion.div>motion.div>
                                                  )
        })}
                      </div>div>
              
                {/* Tools section */}
                      <FadeIn>
                                <div className="mt-16 text-center">
                                            <p className="text-sm text-muted-foreground mono mb-6 tracking-wider">// Tools & Platforms I use daily</p>p>
                                            <div className="flex flex-wrap justify-center gap-3">
                                              {TOOLS.map((tool, i) => (
                          <motion.span
                                              key={tool}
                                              initial={{ opacity: 0, scale: 0.8 }}
                                              whileInView={{ opacity: 1, scale: 1 }}
                                              viewport={{ once: true }}
                                              transition={{ delay: i * 0.05 }}
                                              className="px-4 py-2 glass-card rounded-xl border border-border text-muted-foreground text-sm hover:text-foreground hover:border-purple-500/30 transition-all duration-300 cursor-default"
                                            >
                            {tool}
                          </motion.span>motion.span>
                        ))}
                                            </div>div>
                                </div>div>
                      </FadeIn>FadeIn>
              </div>div>
        </section>section>
      )
}</section>
