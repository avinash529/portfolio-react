import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import { FaRocket, FaFileDownload, FaEnvelope, FaCode } from 'react-icons/fa';
import TypeWriter from './ui/TypeWriter';
import CosmicHeroCanvas from './3d/CosmicHeroCanvas';
import './Hero.css';

const Hero = () => {
  return (
    <section className="space-hero" id="hero">
      {/* ─── Top Inverted Black Hole Video Vortex ──────────── */}
      <div className="space-hero__video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="space-hero__blackhole-video"
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
        </video>
        <div className="space-hero__video-overlay" />
      </div>

      <div className="space-hero__container">
        <div className="space-hero__grid">
          {/* ─── Left Column: Content & Call to Actions ──────────── */}
          <div className="space-hero__content">
            {/* Sparkle Welcome Box Badge */}
            <motion.div
              className="space-hero__welcome-box"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <HiSparkles className="space-hero__welcome-icon" />
              <span className="space-hero__welcome-text">
                Fullstack PHP &amp; Backend Architect Portfolio
              </span>
            </motion.div>

            {/* Dynamic Headline */}
            <motion.h1
              className="space-hero__headline"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Providing{' '}
              <span className="space-hero__gradient-text">the best backend</span>{' '}
              &amp; system architecture experience.
            </motion.h1>

            {/* Subtitle with TypeWriter */}
            <motion.div
              className="space-hero__typewriter-box"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TypeWriter
                words={[
                  'Senior PHP Developer',
                  'CodeIgniter 4 / 3 Specialist',
                  'Backend Architect',
                  'Laravel & REST API Engineer',
                ]}
                speed={90}
              />
            </motion.div>

            {/* Bio Description */}
            <motion.p
              className="space-hero__bio"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hi, I'm <strong className="text-white">Avinash Raju</strong> — 4+ years
              architecting production-grade backend systems, enterprise ERPs, and
              high-throughput web platforms with PHP, CodeIgniter, Laravel, and MySQL.
              Based in Kochi, India.
            </motion.p>

            {/* Metric Badges */}
            <motion.div
              className="space-hero__metrics"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div className="space-hero__metric-pill">
                <span className="space-hero__metric-num">4+</span>
                <span className="space-hero__metric-lbl">Years Exp</span>
              </div>
              <div className="space-hero__metric-pill">
                <span className="space-hero__metric-num">4+</span>
                <span className="space-hero__metric-lbl">Live Production Apps</span>
              </div>
              <div className="space-hero__metric-pill">
                <span className="space-hero__metric-num">CI 3/4</span>
                <span className="space-hero__metric-lbl">Core Mastery</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="space-hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="space-hero__btn space-hero__btn--primary"
              >
                <FaRocket size={14} />
                <span>Explore Work</span>
              </Link>

              <a
                href="/cv/Avinash_Raju.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="space-hero__btn space-hero__btn--secondary"
              >
                <FaFileDownload size={14} />
                <span>View CV</span>
              </a>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="space-hero__btn space-hero__btn--outline"
              >
                <FaEnvelope size={14} />
                <span>Get In Touch</span>
              </Link>
            </motion.div>
          </div>

          {/* ─── Right Column: 3D Celestial Core Canvas ──────────── */}
          <motion.div
            className="space-hero__visual"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CosmicHeroCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
