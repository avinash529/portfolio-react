import React, { useRef, useState, useEffect, useCallback } from 'react';
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
  { value: '4+', label: 'Years Experience', numericTarget: 4, suffix: '+' },
  { value: '4+', label: 'Production Projects', numericTarget: 4, suffix: '+' },
  { value: 'CI 3/4', label: 'Core Framework', numericTarget: null, suffix: '' },
];

/**
 * Custom hook: animates a number from 0 to `target` over `duration` ms
 * once the element referenced by the returned ref scrolls into view.
 */
const useCountUp = (target, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (target === null || target === undefined) return;
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuad for a nice deceleration
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    const node = ref.current;
    if (!node || target === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animate, target]);

  return { ref, count };
};

const AnimatedStat = ({ stat, index }) => {
  const { ref, count } = useCountUp(stat.numericTarget);

  const displayValue =
    stat.numericTarget !== null ? `${count}${stat.suffix}` : stat.value;

  return (
    <motion.div
      ref={ref}
      className="about__stat"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1 }}
    >
      <span className="about__stat-value">{displayValue}</span>
      <span className="about__stat-label">{stat.label}</span>
    </motion.div>
  );
};

const timeline = [
  {
    period: 'Jan 2026 – Present',
    role: 'PHP Bootcamp Tutor',
    company: 'Avodha Edutech, Kochi',
    modifier: '--emerald',
  },
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

const educationTimeline = [
  {
    period: '2018 – 2021',
    role: 'Diploma in Computer Engineering',
    company: 'Govt Polytechnic College Muttom, Thodupuzha',
    modifier: '--purple',
  },
  {
    period: '2015 – 2017',
    role: 'Higher Secondary Education',
    company: 'Govt Higher Secondary School Amaravathy, Kumily',
    modifier: '--pink',
  },
  {
    period: '2014 – 2015',
    role: 'High School (SSLC)',
    company: 'Fathima Matha High School Mlamala, Vandiperiyar',
    modifier: '',
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

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
                I'm a PHP developer with 4+ years of hands-on experience
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
                <AnimatedStat key={i} stat={stat} index={i} />
              ))}
            </div>

            {/* Tab Switcher */}
            <div className="about__tabs">
              <button
                className={`about__tab ${activeTab === 'experience' ? 'about__tab--active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>
              <button
                className={`about__tab ${activeTab === 'education' ? 'about__tab--active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
            </div>

            {/* Timeline content */}
            <div className="about__timeline">
              {activeTab === 'experience' ? (
                timeline.map((item, i) => (
                  <motion.div
                    key={`exp-${i}`}
                    className={`about__timeline-item${item.modifier ? ` about__timeline-item${item.modifier}` : ''}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="about__timeline-period">{item.period}</div>
                    <div className="about__timeline-role">{item.role}</div>
                    <div className="about__timeline-company">{item.company}</div>
                  </motion.div>
                ))
              ) : (
                educationTimeline.map((item, i) => (
                  <motion.div
                    key={`edu-${i}`}
                    className={`about__timeline-item${item.modifier ? ` about__timeline-item${item.modifier}` : ''}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="about__timeline-period">{item.period}</div>
                    <div className="about__timeline-role">{item.role}</div>
                    <div className="about__timeline-company">{item.company}</div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
