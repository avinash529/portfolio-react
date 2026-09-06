import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaBars, FaTimes } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import './Navbar.css';

const navLinks = [
  { name: 'About me', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Security', to: 'encryption' },
  { name: 'Projects', to: 'projects' },
  { name: 'GitHub', to: 'github-stats' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`space-navbar ${scrolled ? 'space-navbar--scrolled' : ''}`}>
      <div className="space-navbar__inner">
        {/* Brand / Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="space-navbar__brand"
          onClick={closeMenu}
        >
          <div className="space-navbar__logo-orb">
            <BsStars className="space-navbar__logo-icon" />
          </div>
          <span className="space-navbar__brand-name">
            Avinash <span className="space-navbar__brand-gradient">Raju</span>
          </span>
        </Link>

        {/* Central Space Nav Pill (Desktop) */}
        <nav className="space-navbar__pill-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="space-navbar__nav-item"
              activeClass="space-navbar__nav-item--active"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side: Social links + CV button + Mobile Toggle */}
        <div className="space-navbar__actions">
          <div className="space-navbar__socials">
            <a
              href="https://www.linkedin.com/in/avinash-raju-b8b154184/"
              target="_blank"
              rel="noopener noreferrer"
              className="space-navbar__social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/avinash529"
              target="_blank"
              rel="noopener noreferrer"
              className="space-navbar__social-icon"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:avinashraju815@gmail.com"
              className="space-navbar__social-icon"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <a
            href="/cv/Avinash_Raju.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="space-navbar__cv-btn"
          >
            <FaFileDownload size={12} />
            <span>CV</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            className="space-navbar__toggle"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="space-navbar__mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="space-navbar__mobile-list">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={closeMenu}
                  className="space-navbar__mobile-link"
                >
                  {link.name}
                </Link>
              ))}

              <div className="space-navbar__mobile-socials">
                <a
                  href="https://www.linkedin.com/in/avinash-raju-b8b154184/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-navbar__social-icon"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/avinash529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-navbar__social-icon"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="mailto:avinashraju815@gmail.com"
                  className="space-navbar__social-icon"
                >
                  <FaEnvelope size={20} />
                </a>
                <a
                  href="/cv/Avinash_Raju.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-navbar__cv-btn"
                >
                  <FaFileDownload size={12} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
