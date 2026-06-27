import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Spotlight from './ui/Spotlight';
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
            transition={{ duration: 0.5 }}
          >
            <span className="hero__badge-dot">
              <span className="hero__badge-dot-ping" />
              <span className="hero__badge-dot-core" />
            </span>
            Open to PHP Developer opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Avinash Raju
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            PHP Developer
          </motion.p>

          {/* Description */}
          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            3+ years specializing in PHP &amp; CodeIgniter, building scalable
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
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hero__btn hero__btn--primary"
            >
              See My Work
            </Link>
            <a
              href="mailto:avinashraju815@gmail.com"
              className="hero__btn hero__btn--secondary"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </Spotlight>
    </section>
  );
};

export default Hero;
