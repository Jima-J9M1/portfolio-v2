"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card"
import { FadeIn } from "../animations/FadeIn"
import { Card } from "../ui/card"

// Skill categories and data
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, description: "Building modern web applications with React and its ecosystem" },
      { name: "Next.js", level: 85, description: "Server-side rendering and static site generation" },
      { name: "TypeScript", level: 85, description: "Type-safe JavaScript development" },
      { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 80, description: "Server-side JavaScript runtime" },
      { name: "Python", level: 75, description: "Backend development and scripting" },
      { name: "PostgreSQL", level: 80, description: "Relational database management" },
      { name: "MongoDB", level: 75, description: "NoSQL database" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 85, description: "Version control and collaboration" },
      { name: "Github", level: 70, description: "Repository and deployment" },
      { name: "Azure", level: 50, description: "Cloud infrastructure and services" },
    //   { name: "CI/CD", level: 80, description: "Automated deployment pipelines" },
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-center text-muted-foreground md:text-lg">
            Technologies and tools I work with
          </p>
        </FadeIn>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <FadeIn key={category.title} delay={0.2 * categoryIndex}>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem 
                      key={skill.name} 
                      skill={skill} 
                      index={skillIndex}
                    />
                  ))}
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <FadeIn delay={0.6}>
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-center mb-8">
              Other Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Redux", "GraphQL", "Jest", "Webpack", "Firebase", "Figma", "Sass", "Vue.js"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Card className="px-4 py-2 hover:bg-primary/5 transition-colors">
                    {skill}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function SkillItem({ skill, index }: { skill: { name: string; level: number; description: string }; index: number }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
          <motion.div
            className="h-2 rounded-full bg-slate-200 dark:bg-slate-800"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index * 0.1) + 0.5 }}
            />
          </motion.div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{skill.name}</h4>
          <p className="text-sm text-muted-foreground">
            {skill.description}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}