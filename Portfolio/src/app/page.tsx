import Header from "@portfolio/components/layout/Header";
import { About } from "@portfolio/components/sections/About";
import { Contact } from "@portfolio/components/sections/contact";
import { Experience } from "@portfolio/components/sections/Experience";
import { Footer } from "@portfolio/components/sections/Footer";
import { Hero } from "@portfolio/components/sections/Hero";
import { Projects } from "@portfolio/components/sections/project";
import { Skills } from "@portfolio/components/sections/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
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