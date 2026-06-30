import React from 'react';
import Preloader from './components/ui/Preloader';
import ScrollProgress from './components/ui/ScrollProgress';
import AnimatedBackground from './components/ui/AnimatedBackground';
import CursorGlow from './components/ui/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import GitHubStats from './components/GitHubStats';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/ui/BackToTop';
import WaveDivider from './components/ui/WaveDivider';
import './App.css';

function App() {
  return (
    <div className="app">
      <Preloader />
      <ScrollProgress />
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <WaveDivider type="wave1" height={70} />
        <About />
        <WaveDivider type="wave2" height={75} />
        <Skills />
        <WaveDivider type="curve" height={60} />
        <GitHubStats />
        <WaveDivider type="wave1" height={70} />
        <Projects />
        <WaveDivider type="wave2" height={75} />
        <Testimonials />
        <WaveDivider type="curve" height={60} />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
