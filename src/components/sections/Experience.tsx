"use client"

import React from "react"
import { motion } from "framer-motion"
import { Badge, Calendar, MapPin } from "lucide-react"
import { FadeIn } from "../animations/FadeIn"
import { Card } from "../ui/card"

interface Experience {
  id: number
  role: string
  company: string
  location: string
  period: string
  type: string
  description: string[]
  achievements: string[]
  technologies: string[]
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Shega",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2023 - Present",
    type: "Full Time",
    description: [
      "Developed digital financial services (DFS) that provided actionable financial data insights to over 10,000 users in the finance sector, showcasing data through various visual formats, including charts, graphs, tables, and downloadable PDFs",
      "Enhanced website performance by optimizing image loading, reducing response time from 3.0 seconds to 0.5 seconds using Next.js caching techniques and placeholders",
      "Leveraged Next.js, React.js, TypeScript, and Azure to deliver a 40% improvement in data processing speed, while adhering to Agile methodologies to complete 95% of sprints on time"
    ],
    achievements: [
      "Reduced response time from 3.0 seconds to 0.5 seconds",
      "Improved data processing speed by 40%",
      "Achieved 95% sprint completion rate"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "Azure"]
  },
  {
    id: 2,
    role: "Front End Developer",
    company: "Microsun Solution",
    location: "Ethiopia",
    period: "Sep 2023 - Feb 2024",
    type: "Part-Time",
    description: [
      "Led a team of 5 frontend developers to deliver interactive and high-impact projects",
      "Created a responsive website with interactive features using React.js, resulting in a 30% increase in user engagement"
    ],
    achievements: [
      "Increased user engagement by 30%",
      "Successfully delivered multiple high-impact projects"
    ],
    technologies: ["React.js", "Frontend Development", "Team Leadership"]
  },
  {
    id: 3,
    role: "Backend Developer",
    company: "African To Silicon Valley",
    location: "Ethiopia",
    period: "Jul 2023 - Feb 2024",
    type: "Full-Time",
    description: [
      "Designed a secure API using C# and the .NET Framework, minimizing security risks by 80% and enabling seamless, secure communication for students through a media chat app",
      "Adopted clean architecture principles by modularizing components into well-defined layers, reducing development time by 20%",
      "Ensured system reliability with 95% test coverage using xUnit, Moq, and FluentAssertions. Integrated JWT security, reducing unauthorized access by 80%"
    ],
    achievements: [
      "Minimized security risks by 80%",
      "Reduced development time by 20%",
      "Achieved 95% test coverage",
      "Reduced unauthorized access by 80%"
    ],
    technologies: ["C#", ".NET", "xUnit", "JWT", "Clean Architecture"]
  },
  {
    id: 4,
    role: "Technical Lead",
    company: "GDSC AASTU",
    location: "Ethiopia",
    period: "Dec 2022 - Jul 2023",
    type: "Full-time",
    description: [
      "Led a team of 10 mentors to guide and support over 50+ trainee members in technical development and skill enhancement",
      "Held weekly mentor meetings to plan, track progress, and address weaknesses, leading to a 25% improvement in member achievements over a 6-month period"
    ],
    achievements: [
      "Improved member achievements by 25% over 6 months",
      "Successfully managed and coordinated mentor team",
      "Established effective mentorship program"
    ],
    technologies: ["Leadership", "Mentoring", "Technical Training"]
  },
  {
    id: 5,
    role: "Full Stack Developer",
    company: "KurazTech",
    location: "Ethiopia",
    period: "Jun 2022 - Feb 2023",
    type: "Intern",
    description: [
      "Built a website utilizing React and Firebase over 3 months for companies to monitor their vehicle operations",
      "Implemented real-time vehicle tracking with Google GPS, achieving 98% accuracy and a 20% boost in operational efficiency"
    ],
    achievements: [
      "Achieved 98% tracking accuracy",
      "Improved operational efficiency by 20%",
      "Completed project within 3-month timeline"
    ],
    technologies: ["React", "Firebase", "Google Maps API", "GPS Tracking"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Work Experience
          </h2>
          <p className="mt-4 text-center text-muted-foreground md:text-lg">
            My professional journey and achievements
          </p>
        </FadeIn>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

          {/* Experience Cards */}
          {experiences.map((experience, index) => (
            <FadeIn 
              key={experience.id} 
              delay={0.2 * index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className={`mb-8 flex justify-center items-start gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}>
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + (0.2 * index) }}
                  className="hidden lg:block w-4 h-4 rounded-full bg-primary relative top-8 z-10"
                />

                {/* Experience Card */}
                <Card className="w-full lg:w-[calc(50%-2rem)] p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{experience.role}</h3>
                      <p className="text-primary font-medium">
                        {experience.company} 
                        <span className="text-sm text-muted-foreground ml-2">
                          ({experience.type})
                        </span>
                      </p>
                    </div>

                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {experience.description.map((item, i) => (
                        <p key={i} className="text-muted-foreground">
                          • {item}
                        </p>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <p className="font-medium">Key Achievements:</p>
                      {experience.achievements.map((achievement, i) => (
                        <p key={i} className="text-primary/80">
                          ✓ {achievement}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}