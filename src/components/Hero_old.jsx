import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="hero container">
      <div className="hero-grid">
        <div className="hero-content">
          <h1>Hi, I’m Mrudul Jaykrishna Gawande <span className="wave">👋</span></h1>
          <p className="lead">Frontend Developer | BCA Student</p>
          <p className="tagline">Crafting clean and responsive web experiences.</p>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn ghost" href="#contact">Contact Me</a>
          </div>
        </div>

        <div className="hero-photo">
          <img src="/assets/profile.svg" alt="Mrudul Jaykrishna Gawande" />
        </div>
      </div>
    </section>
  )
}
