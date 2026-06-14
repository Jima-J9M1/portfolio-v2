"use client"
import React from "react"
import { motion } from "framer-motion"
import { FadeIn } from "../animations/FadeIn"

const HIGHLIGHTS = [
  { emoji: "🤖", title: "AI Systems", desc: "Building intelligent agents and RAG systems with LangChain, OpenAI and vector databases." },
  { emoji: "⚡", title: "Full Stack Dev", desc: "Expert in Next.js, React, TypeScript, Node.js and modern web technologies." },
  { emoji: "🐍", title: "Python & ML", desc: "Python developer focused on machine learning pipelines and AI-powered applications." },
  { emoji: "🌍", title: "Impact Driven", desc: "Based in Ethiopia, building solutions that create real value for users and businesses." },
]

const STATS = [
  { value: "103+", label: "GitHub Repos" },
  { value: "3.5K+", label: "Contributions" },
  { value: "4+", label: "Years Coding" },
  { value: "15+", label: "AI Projects" },
]

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <span className="font-mono text-xs text-purple-400 tracking-widest uppercase">About Me</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              <span className="text-gradient">Who I Am</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am <strong className="text-white">Jima Dube</strong>, a passionate Software Engineer from Ethiopia with expertise in building AI-powered applications and modern web solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently working at <strong className="text-purple-400">Shega Media and Technology</strong>, I specialize in creating intelligent systems that combine cutting-edge AI with beautiful, functional interfaces.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My focus is on agentic AI systems, RAG architectures, and full-stack development using Next.js, Python, and modern cloud technologies.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="#contact" className="px-6 py-2 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white text-sm font-semibold transition-all">
                  Get In Touch
                </a>
                <a href="https://github.com/jima-J9M1" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-xl glass-card border border-purple-500/20 hover:border-purple-500/50 text-white text-sm font-semibold transition-all">
                  GitHub Profile
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-6 text-center glow-primary">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((item, i) => (
            <FadeIn key={item.title} direction="up" delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 h-full hover:border-purple-500/30 transition-all border border-transparent">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
