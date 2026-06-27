import React from 'react';
import { motion } from 'framer-motion';
import { FiEye, FiDownload } from 'react-icons/fi';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import './About.css';

const contactLinks = [
  {
    icon: <FaPhoneAlt />,
    label: '+91 70255 23228',
    href: 'tel:+917025523228',
    isLink: true,
  },
  {
    icon: <FaEnvelope />,
    label: 'avinashraju815@gmail.com',
    href: 'mailto:avinashraju815@gmail.com',
    isLink: true,
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Kochi, India',
    isLink: false,
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/avinashraju',
    isLink: true,
    external: true,
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    href: 'https://github.com/avinash529',
    isLink: true,
    external: true,
  },
];

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '4+', label: 'Production Projects' },
  { value: 'CI 3/4', label: 'Core Framework' },
];

const timeline = [
  {
    period: 'Nov 2024 – Aug 2025',
    role: 'PHP Developer',
    company: 'YUYI Technology',
    modifier: '', // indigo (default)
  },
  {
    period: 'Apr 2022 – Oct 2024',
    role: 'PHP Developer',
    company: 'Megatrend',
    modifier: '--purple',
  },
  {
    period: '2022 · Internship',
    role: 'Full Stack Web Dev (Python/Django)',
    company: 'Synnefa Solutions',
    modifier: '--pink',
  },
];

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <motion.h2
          className="about__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about__grid">
          {/* ─── Left Column ──────────────────────────── */}
          <motion.div
            className="about__left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about__bio">
              <p>
                I'm a PHP developer with 3+ years of hands-on experience
                building production-grade web applications. My core strength
                lies in{' '}
                <span className="about__bio-accent">CodeIgniter</span> — both
                CI 3 and CI 4 — where I've architected backend systems
                handling real business logic at scale.
              </p>
              <p>
                I'm also expanding into{' '}
                <span className="about__bio-accent">Laravel</span> and modern
                frontend frameworks like React. I enjoy turning complex
                requirements into clean, maintainable code and shipping
                features that actually make a difference.
              </p>
            </div>

            {/* CV Buttons */}
            <div className="about__cv-actions">
              <a
                href="/cv/Avinash_Raju.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about__cv-btn about__cv-btn--view"
              >
                <FiEye /> View CV
              </a>
              <a
                href="/cv/Avinash_Raju.pdf"
                download
                className="about__cv-btn about__cv-btn--download"
              >
                <FiDownload /> Download CV
              </a>
            </div>

            {/* Contact links */}
            <ul className="about__contact-list">
              {contactLinks.map((item, i) => (
                <li key={i} className="about__contact-item">
                  <span className="about__contact-icon">{item.icon}</span>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="about__contact-link"
                      {...(item.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="about__contact-text">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ─── Right Column ─────────────────────────── */}
          <motion.div
            className="about__right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Stats */}
            <div className="about__stats">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="about__stat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Experience timeline */}
            <h3 className="about__experience-title">Work Experience</h3>
            <div className="about__timeline">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className={`about__timeline-item${item.modifier ? ` about__timeline-item${item.modifier}` : ''}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="about__timeline-period">{item.period}</div>
                  <div className="about__timeline-role">{item.role}</div>
                  <div className="about__timeline-company">
                    {item.company}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
