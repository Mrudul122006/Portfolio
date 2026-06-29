import React, { useEffect } from 'react'
import './styles/corporate.css'
import './styles/enhanced.css'
import { useStore } from './store/useStore'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import SkillsEnhanced from './components/SkillsEnhanced'
import Projects from './components/Projects'
import GrowthJourney from './components/GrowthJourney'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CommandPalette from './components/CommandPalette'
import ProjectModal from './components/ProjectModal'
import PersonalityRhythm from './components/PersonalityRhythm'

function App() {
  const { darkMode } = useStore()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.remove('dark-mode')
    }
  }, [darkMode])

  return (
    <div className="portfolio-root">
      <CommandPalette />
      <ProjectModal />
      <Header />
      <main>
        <Hero />
        <PersonalityRhythm />
  <About />
        <SkillsEnhanced />
        <Projects />
        <GrowthJourney />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
