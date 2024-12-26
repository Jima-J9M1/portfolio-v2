"use client"

import React from "react"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { FadeIn } from "../animations/FadeIn"
import { Button } from "../ui/button"

const navigation = {
  main: [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/Jima-J9M1',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/jima-dube',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/JimaDube',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:your.jimadube100@example.com',
      icon: Mail,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="py-12 md:py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Jima Dube</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Building digital experiences with modern web technologies. 
                Always learning, always growing.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {navigation.main.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex gap-2">
                {navigation.social.map((item) => {
                  const Icon = item.icon
                  return (
                    <Button
                      key={item.name}
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t py-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jima Dube. All rights reserved.
          </div>
        </FadeIn>
      </div>
    </footer>
  )
}