"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, Brain, Globe, Layers, Cpu, Bot, Code2, Zap, X } from "lucide-react"
import { FadeIn } from "../animations/FadeIn"

interface Project {
    id: number
    title: string
    description: string
    longDesc: string
    tags: string[]
    github?: string
    demo?: string
    category: "ai" | "frontend" | "fullstack" | "backend"
    featured?: boolean
    icon: React.ReactNode
    gradient: string
}

const PROJECTS: Project[] = [
  {
        id: 1,
        title: "RecastAI",
        description: "Turn any podcast or YouTube video into viral content — blog posts, Twitter threads, LinkedIn posts & newsletters powered by AI.",
        longDesc: "RecastAI leverages cutting-edge LLMs to automatically transcribe, analyze, and repurpose audio/video content into multiple social media formats. Built with Next.js, TypeScript, and OpenAI API with a clean, responsive UI.",
        tags: ["Next.js", "TypeScript", "OpenAI", "AI", "LLM"],
        github: "https://github.com/jima-J9M1/recast-ai",
        demo: "https://recast-ai-one.vercel.app",
        category: "ai",
        featured: true,
        icon: <Bot size={24} />,
        gradient: "from-purple-600 to-violet-600",
  },
  {
        id: 2,
        title: "Autonomous AI Agent Framework",
        description: "A production-ready framework for building autonomous AI agents that can plan, reason, use tools, and complete complex multi-step tasks.",
        longDesc: "Built with Python, LangChain, and OpenAI. This framework supports multi-agent collaboration, tool use, memory management, and dynamic task decomposition. Ideal for building AI workflows and automation pipelines.",
        tags: ["Python", "LangChain", "OpenAI", "Agents", "LLM"],
        github: "https://github.com/jima-J9M1/autonomous-ai-agent-framework",
        category: "ai",
        featured: true,
        icon: <Brain size={24} />,
        gradient: "from-indigo-600 to-purple-600",
  },
  {
        id: 3,
        title: "RAG Agentic System",
        description: "A Retrieval-Augmented Generation system with agentic capabilities — intelligently searches, retrieves, and synthesizes information.",
        longDesc: "Combines vector databases (Chroma/Pinecone) with LLM agents to build a powerful knowledge retrieval system. Features document ingestion, semantic search, and multi-turn conversational AI.",
        tags: ["Python", "RAG", "Vector DB", "LangChain", "FastAPI"],
        github: "https://github.com/jima-J9M1/rag-agentic-system",
        category: "ai",
        icon: <Cpu size={24} />,
        gradient: "from-cyan-600 to-blue-600",
  },
  {
        id: 4,
        title: "AGENTIC Stock Analyzer",
        description: "An AI-powered stock market analysis tool that uses autonomous agents to gather data, analyze trends, and generate investment insights.",
        longDesc: "Uses multiple AI agents to scrape financial data, analyze market trends, run technical analysis, and generate comprehensive stock reports with LLM-powered commentary.",
        tags: ["Python", "AI Agents", "Finance", "Data Analysis", "MIT License"],
        github: "https://github.com/jima-J9M1/AGENTIC-STOCK-ANALYZER",
        category: "ai",
        icon: <Zap size={24} />,
        gradient: "from-green-600 to-emerald-600",
  },
  {
        id: 5,
        title: "AI Proposal Writing Platform",
        description: "An intelligent platform that uses AI to help users write compelling project proposals and business documents with structured templates.",
        longDesc: "Full-stack application with a Next.js frontend and Python backend. Uses OpenAI to generate tailored proposal content based on user inputs, with real-time streaming responses.",
        tags: ["TypeScript", "Python", "OpenAI", "Next.js", "FastAPI"],
        demo: "https://ai-proposal-writing.vercel.app",
        github: "https://github.com/jima-J9M1/ai-proposal-backend",
        category: "ai",
        icon: <Bot size={24} />,
        gradient: "from-pink-600 to-rose-600",
  },
  {
        id: 6,
        title: "Digital Financial Services Platform",
        description: "A comprehensive DFS platform serving 10,000+ users in the finance sector with real-time data visualization and PDF exports.",
        longDesc: "Built at Shega Media and Technology. Features complex data visualization, PDF generation, Azure integration, and optimized performance that reduced page load from 3.0s to 0.5s.",
        tags: ["Next.js", "React", "TypeScript", "Azure", "Data Visualization"],
        category: "fullstack",
        featured: true,
        icon: <Layers size={24} />,
        gradient: "from-blue-600 to-cyan-600",
  },
  {
        id: 7,
        title: "Cinematic Website",
        description: "A visually stunning cinematic-style website with immersive animations, parallax effects, and film-inspired design language.",
        longDesc: "A showcase frontend project with rich animations, scroll-triggered effects, and a dark cinematic aesthetic. Built with TypeScript, Tailwind, and Framer Motion.",
        tags: ["TypeScript", "Next.js", "Framer Motion", "Tailwind", "UI/UX"],
        github: "https://github.com/jima-J9M1/cinematic-website",
        demo: "https://cinematic-website.vercel.app",
        category: "frontend",
        icon: <Globe size={24} />,
        gradient: "from-orange-600 to-red-600",
  },
  {
        id: 8,
        title: "Eduvi E-Learning Platform",
        description: "A full-featured e-learning platform with course management, video streaming, quizzes, and student progress tracking.",
        longDesc: "A comprehensive LMS built with TypeScript. Features course creation tools, video integration, quiz engine, progress tracking, and a clean modern UI. Has 4 forks on GitHub.",
        tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Education"],
        github: "https://github.com/jima-J9M1/Eduvi-E-learning",
        category: "fullstack",
        icon: <Code2 size={24} />,
        gradient: "from-violet-600 to-indigo-600",
  },
  {
        id: 9,
        title: "Restaurant Frontend",
        description: "A modern, responsive restaurant website with an interactive menu, online ordering flow, and beautiful food photography layouts.",
        longDesc: "A pixel-perfect restaurant frontend with smooth animations, mobile-first design, menu filtering, and an intuitive ordering experience. Deployed on Vercel.",
        tags: ["TypeScript", "Next.js", "Tailwind CSS", "UI/UX", "Responsive"],
        github: "https://github.com/jima-J9M1/restaurant-frontend",
        demo: "https://restaurant-frontend-brown.vercel.app",
        category: "frontend",
        icon: <Globe size={24} />,
        gradient: "from-yellow-600 to-orange-600",
  },
  ]

const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "ai", label: "AI & ML" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Full Stack" },
  { key: "backend", label: "Backend" },
  ]

export default function Projects() {
    const [active, setActive] = useState("all")
    const [selected, setSelected] = useState<Project | null>(null)

  const filtered = active === "all" ? PROJECTS : PROJECTS.filter(p => p.category === active)

  return (
        <section id="projects" className="py-28 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
              </div>div>
        
              <div className="container mx-auto px-4 md:px-8">
                {/* Heading */}
                      <FadeIn>
                                <div className="flex flex-col items-center text-center mb-16">
                                            <span className="mono text-xs text-purple-400 tracking-widest uppercase mb-3">My Work</span>span>
                                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
                                                          Featured <span className="text-gradient">Projects</span>span>
                                            </h2>h2>
                                            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                                </div>div>
                      </FadeIn>FadeIn>
              
                {/* Filter tabs */}
                      <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {CATEGORIES.map(cat => (
                      <button
                                      key={cat.key}
                                      onClick={() => setActive(cat.key)}
                                      className={`px-5 py-2 rounded-xl text-sm font-medium border transition-all duration-300 ${
                                                        active === cat.key
                                                          ? "bg-purple-600/20 border-purple-500/50 text-purple-300"
                                                          : "glass-card border-border text-muted-foreground hover:border-purple-500/30"
                                      }`}
                                    >
                        {cat.label}
                      </button>button>
                    ))}
                      </div>div>
              
                {/* Projects grid */}
                      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <AnimatePresence>
                                  {filtered.map((project, i) => (
                        <motion.div
                                          key={project.id}
                                          layout
                                          initial={{ opacity: 0, y: 30 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          exit={{ opacity: 0, scale: 0.9 }}
                                          transition={{ delay: i * 0.07 }}
                                          onClick={() => setSelected(project)}
                                          className="group glass-card rounded-2xl border border-border hover:border-purple-500/30 p-6 cursor-pointer hover:-translate-y-1 transition-all duration-300"
                                        >
                          {/* Icon + featured badge */}
                                        <div className="flex items-start justify-between mb-4">
                                                          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white`}>
                                                            {project.icon}
                                                          </div>div>
                                          {project.featured && (
                                                              <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 mono">
                                                                                    Featured
                                                              </span>span>
                                                          )}
                                        </div>div>
                        
                          {/* Title & desc */}
                                        <h3 className="font-bold text-foreground mb-2 group-hover:text-purple-300 transition-colors">
                                          {project.title}
                                        </h3>h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                                          {project.description}
                                        </p>p>
                        
                          {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                          {project.tags.slice(0, 3).map(tag => (
                                                              <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-border mono">
                                                                {tag}
                                                              </span>span>
                                                            ))}
                                          {project.tags.length > 3 && (
                                                              <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-muted-foreground border border-border mono">
                                                                                    +{project.tags.length - 3}
                                                              </span>span>
                                                          )}
                                        </div>div>
                        
                          {/* Links */}
                                        <div className="flex items-center gap-3 mt-auto">
                                          {project.github && (
                                                              <a href={project.github} target="_blank" rel="noopener noreferrer"
                                                                                      onClick={e => e.stopPropagation()}
                                                                                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-purple-400 transition-colors">
                                                                                    <Github size={14} />
                                                                                    <span>Code</span>span>
                                                              </a>a>
                                                          )}
                                          {project.demo && (
                                                              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                                                                      onClick={e => e.stopPropagation()}
                                                                                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-cyan-400 transition-colors">
                                                                                    <ExternalLink size={14} />
                                                                                    <span>Live Demo</span>span>
                                                              </a>a>
                                                          )}
                                                          <span className="ml-auto text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                              View details →
                                                          </span>span>
                                        </div>div>
                        </motion.div>motion.div>
                      ))}
                                </AnimatePresence>AnimatePresence>
                      </motion.div>motion.div>
              </div>div>
        
          {/* Modal */}
              <AnimatePresence>
                {selected && (
                    <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  onClick={() => setSelected(null)}
                                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                                >
                                <motion.div
                                                initial={{ scale: 0.9, y: 40 }}
                                                animate={{ scale: 1, y: 0 }}
                                                exit={{ scale: 0.9, y: 40 }}
                                                onClick={e => e.stopPropagation()}
                                                className="glass-card rounded-2xl border border-border max-w-lg w-full p-8 relative"
                                              >
                                              <button
                                                                onClick={() => setSelected(null)}
                                                                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                                                              >
                                                              <X size={18} />
                                              </button>button>
                                
                                              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${selected.gradient} text-white mb-6`}>
                                                {selected.icon}
                                              </div>div>
                                
                                              <h3 className="text-xl font-bold text-foreground mb-3">{selected.title}</h3>h3>
                                              <p className="text-muted-foreground leading-relaxed mb-6">{selected.longDesc}</p>p>
                                
                                              <div className="flex flex-wrap gap-2 mb-6">
                                                {selected.tags.map(tag => (
                                                                  <span key={tag} className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 mono">
                                                                    {tag}
                                                                  </span>span>
                                                                ))}
                                              </div>div>
                                
                                              <div className="flex gap-4">
                                                {selected.github && (
                                                                  <a href={selected.github} target="_blank" rel="noopener noreferrer"
                                                                                        className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-border text-sm text-muted-foreground hover:text-purple-400 hover:border-purple-500/40 transition-all">
                                                                                      <Github size={16} />
                                                                                      View Code
                                                                  </a>a>
                                                              )}
                                                {selected.demo && (
                                                                  <a href={selected.demo} target="_blank" rel="noopener noreferrer"
                                                                                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-medium hover:from-purple-500 hover:to-violet-500 transition-all">
                                                                                      <ExternalLink size={16} />
                                                                                      Live Demo
                                                                  </a>a>
                                                              )}
                                              </div>div>
                                </motion.div>motion.div>
                    </motion.div>motion.div>
                  )}
              </AnimatePresence>AnimatePresence>
        </section>section>
      )
}</section>
