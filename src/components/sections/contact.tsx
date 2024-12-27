"use client"

import React from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageSquare, Send } from "lucide-react"
import { FadeIn } from "../animations/FadeIn"
import { Card } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

export function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add your form submission logic here
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-center text-muted-foreground md:text-lg">
            Have a project in mind? Let's work together!
          </p>
        </FadeIn>

        <div className="grid gap-8 mt-16 md:grid-cols-2">
          {/* Contact Information */}
          <FadeIn delay={0.2}>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Let's Connect
              </h3>
              
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  I'm currently open for freelance projects and full-time positions.
                  Feel free to reach out if you have any questions or just want to say hi!
                </p>

                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:jimadube100@example.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    jimadube100@example.com
                  </a>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a 
                      href="https://github.com/Jima-J9M1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a 
                      href="https://linkedin.com/in/jima-dube" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="jimadube100@example.com" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Project Inquiry" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message here..." 
                    rows={5} 
                    required 
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}