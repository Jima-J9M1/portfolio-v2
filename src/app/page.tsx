"use client"
import Waves from "@portfolio/components/animations/Background/Waves";
import Header from "@portfolio/components/layout/Header";
import { About } from "@portfolio/components/sections/About";
import { Contact } from "@portfolio/components/sections/contact";
import { Experience } from "@portfolio/components/sections/Experience";
import { Footer } from "@portfolio/components/sections/Footer";
import { Hero } from "@portfolio/components/sections/Hero";
import { Projects } from "@portfolio/components/sections/project";
import { Skills } from "@portfolio/components/sections/Skills";
import { useTheme } from "next-themes";

export default function Home() {
  // access theme value from context
  const { theme } = useTheme();
  console.log(theme);
  return (
    <main className="min-h-screen">
      <Waves
        lineColor= {theme === "dark" ? "white" : "black"}
        backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}