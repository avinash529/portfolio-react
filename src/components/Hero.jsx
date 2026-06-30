import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Spotlight from './ui/Spotlight';
import TypeWriter from './ui/TypeWriter';
import MagneticButton from './ui/MagneticButton';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Grid pattern */}
      <div className="hero__grid" />
      {/* Radial mask */}
      <div className="hero__mask" />

      <Spotlight spotlightColor="rgba(99, 102, 241, 0.08)">
        <div className="hero__content">
          {/* Status badge */}
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="hero__badge-dot">
              <span className="hero__badge-dot-ping" />
              <span className="hero__badge-dot-core" />
            </span>
            Open to PHP Developer opportunities
          </motion.div>

          {/* Name */}
          <h1 className="hero__name">
            {'Avinash Raju'.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ display: 'inline-block', marginRight: i === 0 ? '0.3em' : '0' }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.div
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TypeWriter words={['PHP Developer', 'Backend Engineer', 'CodeIgniter Expert', 'Problem Solver']} speed={100} />
          </motion.div>

          {/* Description */}
          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            4+ years specializing in PHP &amp; CodeIgniter, building scalable
            backend systems and modern full-stack applications. Based in Kochi,
            India.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MagneticButton strength={0.25}>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hero__btn hero__btn--primary"
              >
                See My Work
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <a
                href="mailto:avinashraju815@gmail.com"
                className="hero__btn hero__btn--secondary"
              >
                Contact Me
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </Spotlight>
    </section>
  );
};

export default Hero;
