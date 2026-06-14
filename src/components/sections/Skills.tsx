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
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 82 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    label: "Backend",
    emoji: "⚙️",
    color: "green",
    skills: [
      { name: "Python", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "FastAPI", level: 80 },
      { name: "REST APIs", level: 88 },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    label: "Cloud & Data",
    emoji: "☁️",
    color: "blue",
    skills: [
      { name: "Vercel", level: 88 },
      { name: "Supabase", level: 80 },
      { name: "Pinecone", level: 78 },
      { name: "GitHub", level: 92 },
      { name: "Docker", level: 72 },
      { name: "AWS", level: 68 },
    ],
  },
]

const COLOR_MAP: Record<string, string> = {
  purple: "bg-purple-500",
  cyan: "bg-cyan-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
}

export function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const active = SKILL_CATEGORIES[activeTab]

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-purple-400 tracking-widest uppercase">Technical Skills</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              <span className="text-gradient">What I Know</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {SKILL_CATEGORIES.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === i
                    ? "bg-purple-600/80 text-white border border-purple-500/50"
                    : "glass-card border border-transparent text-gray-400 hover:text-white"
                }`}
              >
                {cat.emoji} {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {active.skills.map((skill, i) => (
            <FadeIn key={skill.name} direction="up" delay={i * 0.05}>
              <div className="glass-card rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                  <span className="text-xs text-gray-400 font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${COLOR_MAP[active.color]}`}
                    style={{ width: skill.level + "%" }}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
