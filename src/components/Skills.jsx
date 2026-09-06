import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';
import './Skills.css';

const categories = ['All', 'Backend', 'Database', 'Frontend', 'DevOps & Tools'];

const skillsData = [
  // Backend
  {
    name: 'PHP',
    category: 'Backend',
    level: 'Core Expertise (4+ yrs)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    highlight: true,
  },
  {
    name: 'CodeIgniter 4',
    category: 'Backend',
    level: 'Advanced Architecture',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg',
    highlight: true,
  },
  {
    name: 'CodeIgniter 3',
    category: 'Backend',
    level: 'Enterprise Legacy & Migration',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg',
    highlight: true,
  },
  {
    name: 'Laravel',
    category: 'Backend',
    level: 'REST APIs & MVC',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    highlight: true,
  },
  {
    name: 'Python',
    category: 'Backend',
    level: 'Scripting & Automation',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    name: 'Django',
    category: 'Backend',
    level: 'Full Stack Apps',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  },
  // Database
  {
    name: 'MySQL',
    category: 'Database',
    level: 'Indexing & Complex Queries',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    highlight: true,
  },
  {
    name: 'MSSQL',
    category: 'Database',
    level: 'Stored Procedures & Optimization',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
  },
  // Frontend
  {
    name: 'JavaScript',
    category: 'Frontend',
    level: 'ES6+, Async, DOM',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    category: 'Frontend',
    level: 'Hooks, Component Architecture',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    level: 'Semantic Web',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    level: 'Responsive & Animations',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    level: 'Rapid Dashboard UI',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  },
  // DevOps & Tools
  {
    name: 'Linux',
    category: 'DevOps & Tools',
    level: 'Server Config & CLI',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
    highlight: true,
  },
  {
    name: 'Git',
    category: 'DevOps & Tools',
    level: 'Branching & Collaboration',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    category: 'DevOps & Tools',
    level: 'CI/CD & Open Source',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  },
  {
    name: 'GitLab & SVN',
    category: 'DevOps & Tools',
    level: 'Enterprise Version Control',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg',
  },
  {
    name: 'AWS EC2',
    category: 'DevOps & Tools',
    level: 'Cloud Deployment',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills =
    activeTab === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === activeTab);

  return (
    <section className="space-skills" id="skills">
      {/* Background Nebula Warp Video */}
      <div className="space-skills__video-bg">
        <video
          className="space-skills__video"
          preload="none"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
        <div className="space-skills__video-fade" />
      </div>

      <div className="space-skills__container">
        {/* Header Pill */}
        <motion.div
          className="space-skills__pill-wrapper"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-skills__welcome-box">
            <HiSparkles className="space-skills__welcome-icon" />
            <span className="space-skills__welcome-text">
              Think better with Modern Architecture
            </span>
          </div>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          className="space-skills__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Making apps with{' '}
          <span className="space-skills__title-gradient">modern technologies.</span>
        </motion.h2>

        <motion.p
          className="space-skills__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          High-performance tech stack engineered for enterprise stability,
          scalability, and zero downtime.
        </motion.p>

        {/* Category Filters */}
        <motion.div
          className="space-skills__tabs"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`space-skills__tab-btn ${
                activeTab === cat ? 'space-skills__tab-btn--active' : ''
              }`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* 3D Interactive Skills Grid */}
        <motion.div className="space-skills__grid" layout>
          <AnimatePresence>
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className={`space-skill-card ${
                  skill.highlight ? 'space-skill-card--highlight' : ''
                }`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                whileHover={{
                  y: -8,
                  rotateX: 8,
                  rotateY: -8,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="space-skill-card__glow" />
                <div className="space-skill-card__icon-wrap">
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="space-skill-card__logo"
                    loading="lazy"
                  />
                </div>
                <h3 className="space-skill-card__name">{skill.name}</h3>
                <span className="space-skill-card__level">{skill.level}</span>
                <div className="space-skill-card__badge">{skill.category}</div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
