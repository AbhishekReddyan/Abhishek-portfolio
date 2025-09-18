import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="flex justify-end p-6 space-x-8 font-medium text-gray-700">
        <a href="#home" className="hover:text-black">Home</a>
        <a href="#projects" className="hover:text-black">Projects</a>
        <a href="#contact" className="hover:text-black">Contact</a>
        <a href="/resume.docx" download className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow hover:scale-105 transition-transform">Download Resume</a>
      </nav>

      <section id="home" className="px-6 md:px-20 py-16">
        <Hero />
      </section>

      <section id="experience" className="px-6 md:px-20 py-16">
        <Experience />
      </section>

      <section id="projects" className="px-6 md:px-20 py-16">
        <Projects />
      </section>

      <section id="contact" className="px-6 md:px-20 py-16">
        <Contact />
      </section>


    </div>
  )
}