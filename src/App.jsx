import React from 'react';
import StarsCanvas from './components/3d/StarsCanvas';
import ScrollProgress from './components/ui/ScrollProgress';
import CursorGlow from './components/ui/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Encryption from './components/Encryption';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/ui/BackToTop';
import './App.css';

function App() {
  return (
    <div className="space-app">
      {/* 3D Interactive Starfield Background */}
      <StarsCanvas />

      {/* Progress & Glow Effects */}
      <ScrollProgress />
      <CursorGlow />

      {/* Navigation */}
      <Navbar />

      {/* Main Cosmic Sections */}
      <main className="space-main">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Projects />
        <Testimonials />
        <GitHubStats />
        <Contact />
      </main>

      {/* Multi-Column Space Footer */}
      <Footer />

      {/* Back to Top Rocket */}
      <BackToTop />
    </div>
  );
}

export default App;
