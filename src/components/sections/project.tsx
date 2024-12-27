"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"
import { Github, ExternalLink } from "lucide-react"
import { FadeIn } from "../animations/FadeIn"
import { Button } from "../ui/button"

// Updated Project data type
interface Project {
  id: number
  title: string
  company: string
  period: string
  description: string[]
  achievements: string[]
  image?: string
  tags: string[]
  github?: string
  demo?: string
}

// Updated projects data with your experience
const projects: Project[] = [
  {
    id: 1,
    title: "Digital Financial Services Platform",
    company: "Shega",
    period: "Dec 2023 - Present",
    description: [
      "Led the development of a comprehensive DFS platform serving 10,000+ users in the finance sector",
      "Implemented data visualization features including charts, graphs, and PDF exports",
      "Optimized performance using Next.js caching and modern web techniques"
    ],
    achievements: [
      "Reduced page load time from 3.0s to 0.5s",
      "Improved data processing speed by 40%",
      "Achieved 95% sprint completion rate"
    ],
    tags: ["Next.js", "React", "TypeScript", "Azure", "Data Visualization"],
    image: "/projects/dfs-image.jpg" // Add relevant image
  },
  {
    id: 2,
    title: "Interactive Web Platform",
    company: "Microsun Solution",
    period: "Sep 2023 - Feb 2024",
    description: [
      "Led a team of 5 frontend developers",
      "Developed responsive and interactive web features",
      "Implemented modern UI/UX practices"
    ],
    achievements: [
      "Increased user engagement by 30%",
      "Successfully delivered multiple high-impact projects",
      "Improved team collaboration and efficiency"
    ],
    tags: ["React.js", "Team Leadership", "UI/UX", "Frontend Development"],
    image: "/projects/learn-platform.jpg"
  },
  {
    id: 3,
    title: "Secure Media Chat Application",
    company: "African To Silicon Valley",
    period: "Jul 2023 - Feb 2024",
    description: [
      "Designed and implemented secure API architecture",
      "Implemented clean architecture principles",
      "Developed comprehensive testing strategy"
    ],
    achievements: [
      "Reduced security risks by 80%",
      "Achieved 95% test coverage",
      "Decreased development time by 20%"
    ],
    tags: ["C#", ".NET", "API Design", "Security", "Testing"],
    image: "/projects/social-media.webp"
  },
  {
    id: 4,
    title: "Vehicle Tracking System",
    company: "KurazTech",
    period: "Jun 2022 - Feb 2023",
    description: [
      "Developed full-stack vehicle monitoring system",
      "Implemented real-time GPS tracking",
      "Integrated Google Maps API"
    ],
    achievements: [
      "Achieved 98% tracking accuracy",
      "Improved operational efficiency by 20%",
      "Completed development within 3-month timeline"
    ],
    tags: ["React", "Firebase", "Google Maps API", "Real-time Tracking"],
    image: "/projects/vehicle-tracking.png"
  }
]

// Updated categories based on your skills
const categories = ["All", "Next.js", "React", "TypeScript", ".NET", "Azure", "Firebase"]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects = projects.filter(project => 
    activeFilter === "All" ? true : project.tags.includes(activeFilter)
  )

  return (
    <section id="projects" className="py-24 bg-slate-100 dark:bg-slate-900/30">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-center text-muted-foreground md:text-lg">
            A collection of my recent work and personal projects
          </p>
        </FadeIn>

        {/* Filter Buttons */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={0.1 * (index + 1)}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden border-2 border-transparent hover:border-primary/50 transition-all">
      {project.image && (
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>
      )}

      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{project.title}</CardTitle>
            <p className="text-sm text-primary font-medium mt-1">{project.company}</p>
          </div>
          <span className="text-sm text-muted-foreground">{project.period}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          {project.description.map((desc, index) => (
            <p key={index} className="text-sm text-muted-foreground">
              • {desc}
            </p>
          ))}
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Key Achievements:</p>
          {project.achievements.map((achievement, index) => (
            <p key={index} className="text-sm text-primary/80">
              ✓ {achievement}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        {project.github && (
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {project.demo && (
          <Button size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}