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
  iconType: "bot" | "brain" | "cpu" | "zap" | "layers" | "globe" | "code2"
  gradient: string
}

function ProjectIcon({ type, size = 24 }: { type: Project["iconType"]; size?: number }) {
  const props = { size }
  switch (type) {
    case "bot": return <Bot {...props} />
    case "brain": return <Brain {...props} />
    case "cpu": return <Cpu {...props} />
    case "zap": return <Zap {...props} />
    case "layers": return <Layers {...props} />
    case "globe": return <Globe {...props} />
    case "code2": return <Code2 {...props} />
    default: return <Code2 {...props} />
  }
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "RecastAI",
    description: "Turn any podcast or YouTube video into viral content — blog posts, tweets, and newsletters.",
    longDesc: "RecastAI leverages cutting-edge LLMs to automatically transcribe and repurpose long-form audio/video content into multiple formats for maximum reach.",
    tags: ["Next.js", "TypeScript", "OpenAI", "AI", "LLM"],
    github: "https://github.com/jima-J9M1/recast-ai",
    demo: "https://recast-ai-one.vercel.app",
    category: "ai",
    featured: true,
    iconType: "bot",
    gradient: "from-purple-600 to-violet-600",
  },
  {
    id: 2,
    title: "Autonomous AI Agent",
    description: "Multi-step AI agent framework that autonomously plans, reasons, and executes complex tasks.",
    longDesc: "A sophisticated agentic system built with LangChain that can break down complex goals into subtasks, use tools, and self-correct to achieve objectives.",
    tags: ["Python", "LangChain", "OpenAI", "Agents", "RAG"],
    github: "https://github.com/jima-J9M1",
    category: "ai",
    featured: true,
    iconType: "brain",
    gradient: "from-violet-600 to-purple-600",
  },
  {
    id: 3,
    title: "RAG Agentic System",
    description: "Advanced retrieval-augmented generation system for intelligent document Q&A.",
    longDesc: "Production-ready RAG pipeline with hybrid search, re-ranking, and multi-document reasoning using Pinecone vector database.",
    tags: ["Python", "RAG", "Pinecone", "LangChain", "FastAPI"],
    github: "https://github.com/jima-J9M1",
    category: "ai",
    featured: true,
    iconType: "cpu",
    gradient: "from-fuchsia-600 to-purple-600",
  },
  {
    id: 4,
    title: "AI Stock Analyzer",
    description: "Agentic stock analysis platform using AI to generate investment insights from market data.",
    longDesc: "An AI-powered financial analysis tool that processes real-time market data and generates actionable investment reports using LLMs.",
    tags: ["Python", "AI", "FinTech", "LangChain", "React"],
    github: "https://github.com/jima-J9M1",
    category: "ai",
    iconType: "zap",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 5,
    title: "AI Proposal Platform",
    description: "AI-powered proposal writing platform that generates professional business proposals.",
    longDesc: "A SaaS platform that uses AI to generate, customize, and manage professional business proposals, saving teams hours of work.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Stripe", "AI"],
    github: "https://github.com/jima-J9M1",
    category: "ai",
    iconType: "layers",
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    id: 6,
    title: "Digital Finance Platform",
    description: "Full-stack digital financial services platform for mobile money and transfers.",
    longDesc: "A comprehensive fintech application supporting mobile payments, money transfers, and financial management built for East African markets.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    github: "https://github.com/jima-J9M1",
    category: "fullstack",
    iconType: "globe",
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    id: 7,
    title: "Eduvi E-Learning",
    description: "Modern e-learning platform for online courses, live sessions, and progress tracking.",
    longDesc: "A feature-rich learning management system with course creation tools, video streaming, quizzes, and real-time student progress analytics.",
    tags: ["Next.js", "React", "Prisma", "TypeScript"],
    github: "https://github.com/jima-J9M1",
    category: "fullstack",
    iconType: "layers",
    gradient: "from-teal-600 to-cyan-600",
  },
  {
    id: 8,
    title: "Cinematic Website",
    description: "Award-inspired cinematic portfolio website with stunning visual effects and animations.",
    longDesc: "A visually stunning frontend showcase featuring WebGL effects, GSAP animations, and immersive scroll-based storytelling.",
    tags: ["Next.js", "Framer Motion", "GSAP", "Tailwind"],
    github: "https://github.com/jima-J9M1",
    category: "frontend",
    iconType: "globe",
    gradient: "from-yellow-600 to-orange-600",
  },
  {
    id: 9,
    title: "Restaurant Frontend",
    description: "Modern restaurant website with online ordering, menu management, and reservations.",
    longDesc: "A sleek restaurant website featuring an interactive menu, table reservation system, and seamless online ordering experience.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    demo: "https://restaurant-frontend-brown.vercel.app",
    github: "https://github.com/jima-J9M1",
    category: "frontend",
    iconType: "globe",
    gradient: "from-yellow-600 to-orange-600",
  },
]

const CATEGORIES = [
  { key: "all", label: "All Projects" },
  { key: "ai", label: "AI & ML" },
  { key: "frontend", label: "Frontend" },
  { key: "fullstack", label: "Full Stack" },
]

export default function Projects() {
  const [active, setActive] = useState("all")
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <FadeIn direction="up">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="font-mono text-xs text-purple-400 tracking-widest uppercase">Featured Work</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              <span className="text-white">Featured </span>
              <span className="text-gradient">Projects</span>
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                active === cat.key
                  ? "bg-purple-600/20 border border-purple-500/50 text-purple-300"
                  : "glass-card border border-transparent text-gray-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

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
                className="glass-card rounded-2xl overflow-hidden cursor-pointer hover:border-purple-500/30 border border-transparent transition-all group"
                onClick={() => setSelected(project)}
              >
                <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <div className="text-white/30">
                    <ProjectIcon type={project.iconType} size={64} />
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/10 text-xs text-white font-mono">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs rounded-full glass-card text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 glass-card rounded-lg hover:text-purple-400 transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 glass-card rounded-lg hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-card rounded-2xl max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-1.5 glass-card rounded-lg hover:text-purple-400 transition-colors"
            >
              <X size={16} />
            </button>
            <div className={`h-32 rounded-xl bg-gradient-to-br ${selected.gradient} flex items-center justify-center mb-4`}>
              <div className="text-white/30">
                <ProjectIcon type={selected.iconType} size={48} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{selected.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{selected.longDesc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selected.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-xs rounded-full glass-card text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {selected.github && (
                <a href={selected.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl text-sm hover:text-purple-400 transition-colors">
                  <Github size={16} />
                  GitHub
                </a>
              )}
              {selected.demo && (
                <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 glass-card rounded-xl text-sm hover:text-purple-400 transition-colors">
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
