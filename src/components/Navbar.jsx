import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMoon, HiSun, HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.css';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class on mount and toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            className="navbar__logo"
            to="hero"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            AR.
          </Link>
        </motion.div>

        {/* Desktop nav links */}
        <ul className="navbar__links">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
            >
              <Link
                className="navbar__link"
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Right side: theme toggle + hamburger */}
        <div className="navbar__right">
          <motion.button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </motion.button>

          <button
            className="navbar__hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="navbar__mobile-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    className="navbar__mobile-link"
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
