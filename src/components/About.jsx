import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEye, FiDownload } from 'react-icons/fi';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaBriefcase,
  FaGraduationCap,
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
    label: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/avinash-raju-b8b154184/',
    isLink: true,
    external: true,
  },
  {
    icon: <FaGithub />,
    label: 'GitHub (@avinash529)',
    href: 'https://github.com/avinash529',
    isLink: true,
    external: true,
  },
];

const stats = [
  { value: '4+', label: 'Years Experience', numericTarget: 4, suffix: '+' },
  { value: '4+', label: 'Production Systems', numericTarget: 4, suffix: '+' },
  { value: 'CI 3/4', label: 'Core Framework', numericTarget: null, suffix: '' },
];

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
      className="space-about__stat-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 + index * 0.1 }}
    >
      <span className="space-about__stat-value">{displayValue}</span>
      <span className="space-about__stat-label">{stat.label}</span>
    </motion.div>
  );
};

const experienceTimeline = [
  {
    period: 'Jan 2026 – Present',
    role: 'PHP Bootcamp Tutor',
    company: 'Avodha Edutech, Kochi',
    tag: 'Active Role',
    color: '#10b981',
  },
  {
    period: 'Nov 2024 – Aug 2025',
    role: 'PHP Developer',
    company: 'YUYI Technology',
    tag: 'Full-time',
    color: '#818cf8',
  },
  {
    period: 'Apr 2022 – Oct 2024',
    role: 'PHP Developer',
    company: 'Megatrend KMS',
    tag: 'Full-time',
    color: '#a855f7',
  },
  {
    period: '2022 · Internship',
    role: 'Full Stack Web Dev (Python/Django)',
    company: 'Synnefa Solutions',
    tag: 'Internship',
    color: '#ec4899',
  },
];

const educationTimeline = [
  {
    period: '2018 – 2021',
    role: 'Diploma in Computer Engineering',
    company: 'Govt Polytechnic College Muttom, Thodupuzha',
    tag: 'Diploma',
    color: '#a855f7',
  },
  {
    period: '2015 – 2017',
    role: 'Higher Secondary Education',
    company: 'Govt Higher Secondary School Amaravathy, Kumily',
    tag: 'Higher Secondary',
    color: '#38bdf8',
  },
  {
    period: '2014 – 2015',
    role: 'High School (SSLC)',
    company: 'Fathima Matha High School Mlamala, Vandiperiyar',
    tag: 'SSLC',
    color: '#6366f1',
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section className="space-about" id="about">
      <div className="space-about__container">
        {/* Section Heading */}
        <motion.div
          className="space-about__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="space-about__badge">Profile &amp; Journey</span>
          <h2 className="space-about__title">
            About <span className="space-about__title-gradient">Me</span>
          </h2>
          <p className="space-about__subtitle">
            Passionate software engineer bridging real-world business requirements
            with scalable, reliable backend architectures.
          </p>
        </motion.div>

        <div className="space-about__grid">
          {/* ─── Left Column: Avatar & Bio & Contact Links ─────── */}
          <motion.div
            className="space-about__left-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar with glowing space orbit ring */}
            <div className="space-about__avatar-wrapper">
              <div className="space-about__avatar-ring" />
              <img
                src="/images/avatar.png"
                alt="Avinash Raju"
                className="space-about__avatar"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="space-about__status-dot" title="Available for hire" />
            </div>

            <div className="space-about__bio">
              <p>
                I'm a PHP developer with <strong>4+ years of hands-on experience</strong>{' '}
                building production-grade web applications. My core strength lies in{' '}
                <span className="space-about__accent">CodeIgniter (CI 3 &amp; CI 4)</span>{' '}
                where I've architected backend systems handling enterprise business
                logic, invoices, candidate pipelines, and laboratory workflows at scale.
              </p>
              <p>
                I also specialize in <span className="space-about__accent">Laravel</span>,{' '}
                MySQL optimization, and modern frontend tools like React. I pride myself
                on crafting clean, secure, maintainable code that delivers real-world
                reliability.
              </p>
            </div>

            {/* CV Actions */}
            <div className="space-about__cv-actions">
              <a
                href="/cv/Avinash_Raju.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="space-about__cv-btn space-about__cv-btn--view"
              >
                <FiEye /> View CV
              </a>
              <a
                href="/cv/Avinash_Raju.pdf"
                download
                className="space-about__cv-btn space-about__cv-btn--download"
              >
                <FiDownload /> Download CV
              </a>
            </div>

            {/* Contact Details */}
            <ul className="space-about__contact-list">
              {contactLinks.map((item, i) => (
                <li key={i} className="space-about__contact-item">
                  <span className="space-about__contact-icon">{item.icon}</span>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className="space-about__contact-link"
                      {...(item.external && {
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      })}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="space-about__contact-text">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ─── Right Column: Stats & Timeline Tabs ──────────── */}
          <motion.div
            className="space-about__right-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Stats Row */}
            <div className="space-about__stats-row">
              {stats.map((stat, i) => (
                <AnimatedStat key={i} stat={stat} index={i} />
              ))}
            </div>

            {/* Timeline Tabs */}
            <div className="space-about__tabs">
              <button
                className={`space-about__tab ${
                  activeTab === 'experience' ? 'space-about__tab--active' : ''
                }`}
                onClick={() => setActiveTab('experience')}
              >
                <FaBriefcase size={14} />
                <span>Experience</span>
              </button>
              <button
                className={`space-about__tab ${
                  activeTab === 'education' ? 'space-about__tab--active' : ''
                }`}
                onClick={() => setActiveTab('education')}
              >
                <FaGraduationCap size={15} />
                <span>Education</span>
              </button>
            </div>

            {/* Timeline Content */}
            <div className="space-about__timeline">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-about__timeline-list"
                >
                  {(activeTab === 'experience'
                    ? experienceTimeline
                    : educationTimeline
                  ).map((item, i) => (
                    <div key={i} className="space-about__timeline-item">
                      <div
                        className="space-about__timeline-dot"
                        style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }}
                      />
                      <div className="space-about__timeline-content">
                        <div className="space-about__timeline-top">
                          <span className="space-about__timeline-period">
                            {item.period}
                          </span>
                          <span className="space-about__timeline-tag">
                            {item.tag}
                          </span>
                        </div>
                        <h4 className="space-about__timeline-role">{item.role}</h4>
                        <p className="space-about__timeline-company">
                          {item.company}
                        </p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
