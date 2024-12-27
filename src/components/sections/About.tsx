"use client"

import React from "react"
import Image from "next/image"
import { FadeIn } from "../animations/FadeIn"
import { Card } from "../ui/card"

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", 
  "Tailwind CSS", "PostgreSQL", "Python", "AWS"
]

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          {/* Image Column */}
          <FadeIn direction="right">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/0 rounded-3xl" />
              <Image
                src="/images/profile.jpg" // Add your image to public folder
                alt="Profile Image"
                fill
                className="object-cover rounded-3xl"
              />
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </FadeIn>

          {/* Content Column */}
          <div className="flex flex-col justify-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Hello! I'm [Jima Dube], a passionate full-stack developer with a 
                keen interest in building digital products that make a difference. 
                With 2 years of experience in web development, I've had the 
                privilege of working on diverse projects that have shaped my 
                expertise.
              </p>
            </FadeIn>

            

            {/* Technologies */}
            <FadeIn delay={0.4}>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">
                  Technologies I work with
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Card 
                      key={tech}
                      className="px-4 py-2 bg-background/40 backdrop-blur-sm"
                    >
                      {tech}
                    </Card>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.5}>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">
                    Years of Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6+</div>
                  <div className="text-sm text-muted-foreground">
                    Happy Clients
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}