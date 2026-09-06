import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaBriefcase, FaCode, FaRocket } from 'react-icons/fa';
import './Projects.css';

const workProjects = [
  {
    id: 'w1',
    title: 'Jobstars Administrative Dashboard',
    company: 'YUYI Technology',
    period: 'Nov 2024 – Feb 2025',
    category: 'work',
    description:
      'Engineered comprehensive Candidate Management and Automated Invoice System for JOBSTARS HR SOLUTIONS PVT. LTD — a premier recruitment consultancy specializing in pan-India and international placements. Streamlines candidate pipelines, profile management, and accounting invoicing.',
    tags: ['CodeIgniter 4', 'MySQL', 'Bootstrap 4', 'GitLab', 'Linux'],
    color: '#818cf8',
    gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.35), rgba(168, 85, 247, 0.2))',
    featured: true,
  },
  {
    id: 'w2',
    title: 'Will System',
    company: 'Megatrend KMS',
    period: 'Apr 2023 – Oct 2024',
    category: 'work',
    description:
      'Mission-critical legal platform focusing on succession planning workflows and asset distribution frameworks. Implemented high-concurrency database queries and secure transactional logging.',
    tags: ['PHP', 'CodeIgniter 4', 'MSSQL', 'Security'],
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.35), rgba(236, 72, 153, 0.2))',
  },
  {
    id: 'w3',
    title: 'FARELABS Food Testing Platform',
    company: 'Megatrend KMS',
    period: 'Oct 2022 – Aug 2023',
    category: 'work',
    description:
      'Certified laboratory testing portal for commercial food products. Provides comprehensive sample tracking, calibration reports, and regulatory compliance verification.',
    tags: ['PHP', 'CodeIgniter 3', 'MySQL', 'REST API'],
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.35), rgba(6, 182, 212, 0.2))',
  },
  {
    id: 'w4',
    title: 'ELMS – Spices Board of India',
    company: 'Megatrend KMS',
    period: 'Jun 2022 – Oct 2022',
    category: 'work',
    description:
      'Laboratory evaluation and sample testing software for the Spices Board of India, supporting government registered spice exporters across India.',
    tags: ['PHP', 'CodeIgniter 3', 'MySQL', 'Government'],
    color: '#f43f5e',
    gradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.35), rgba(168, 85, 247, 0.2))',
    featured: true,
  },
];

const personalProjects = [
  {
    id: 'p1',
    title: 'Quiz App on AWS EC2',
    category: 'personal',
    description:
      'Full-featured quiz examination platform with authenticated roles, timed question pools, score telemetry, and analytics dashboard. Live deployed on AWS EC2.',
    tags: ['Laravel', 'Blade', 'MySQL', 'AWS EC2'],
    github: 'https://github.com/avinash529/quiz-app',
    link: 'http://3.108.61.132/login',
    liveLabel: 'Live on AWS',
    color: '#38bdf8',
    gradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.35), rgba(99, 102, 241, 0.2))',
    featured: true,
  },
  {
    id: 'p2',
    title: 'Code360 Developer Hub',
    category: 'personal',
    description:
      'PHP-based open-source platform designed for developer utility tools, code snippet sharing, and lightweight backend utilities.',
    tags: ['PHP', 'Open Source', 'MIT License'],
    github: 'https://github.com/avinash529/code360',
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.35), rgba(244, 63, 94, 0.2))',
  },
  {
    id: 'p3',
    title: 'Lead Management CRM',
    category: 'personal',
    description:
      'PHP CRM pipeline system for managing customer inquiries, sales funnels, follow-up scheduling, and conversion analytics.',
    tags: ['PHP', 'CRM', 'MySQL'],
    github: 'https://github.com/avinash529/lead-management',
    color: '#f43f5e',
    gradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.35), rgba(168, 85, 247, 0.2))',
  },
  {
    id: 'p4',
    title: 'Spice Basket E-Commerce',
    category: 'personal',
    description:
      'Modern Laravel/Blade e-commerce storefront for organic spices — catalog browsing, shopping cart, customer checkout, and order management.',
    tags: ['Laravel', 'Blade', 'MySQL', 'E-Commerce'],
    github: 'https://github.com/avinash529/spice-basket',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.35), rgba(234, 88, 12, 0.2))',
  },
  {
    id: 'p5',
    title: 'Full-Stack Blog Engine',
    category: 'personal',
    description:
      'Complete blog publication platform with CRUD operations, rich text formatting, author authentication, and category taxonomy.',
    tags: ['Laravel', 'Blade', 'MySQL'],
    github: 'https://github.com/avinash529/blog-app',
    color: '#14b8a6',
    gradient: 'linear-gradient(135deg, rgba(20, 184, 166, 0.35), rgba(56, 189, 248, 0.2))',
  },
  {
    id: 'p6',
    title: 'NCC & NSS Cadet Portal',
    category: 'personal',
    description:
      'Comprehensive institutional portal for university administrations to manage cadet registries, camps, attendance, and duty certifications.',
    tags: ['Python', 'Django', 'SQLite'],
    github: 'https://github.com/avinash529',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.35), rgba(6, 182, 212, 0.2))',
  },
  {
    id: 'p7',
    title: 'Farm Management System',
    category: 'personal',
    description:
      'Agricultural resource planning system for crop scheduling, livestock tracking, supply inventory, and harvest forecasting.',
    tags: ['Python', 'Django', 'PostgreSQL'],
    github: 'https://github.com/avinash529',
    color: '#22c55e',
    gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.35), rgba(14, 165, 233, 0.2))',
  },
  {
    id: 'p8',
    title: 'Simple Pong Game',
    category: 'personal',
    description:
      'Classic arcade game built using vanilla JavaScript and HTML5 Canvas API with collision detection and physics simulation.',
    tags: ['JavaScript', 'Canvas API', 'HTML5'],
    github: 'https://github.com/avinash529/simple-pong-game',
    color: '#a1a1aa',
    gradient: 'linear-gradient(135deg, rgba(161, 161, 170, 0.35), rgba(112, 66, 248, 0.2))',
  },
];

const allProjects = [
  ...workProjects.map((p) => ({ ...p, type: 'Work' })),
  ...personalProjects.map((p) => ({ ...p, type: 'Personal' })),
];

function SpaceProjectCard({ project, index }) {
  const isWork = project.category === 'work';

  return (
    <motion.div
      className={`space-project-card ${project.featured ? 'space-project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
    >
      {/* 3D Holographic Card Glow */}
      <div
        className="space-project-card__glow"
        style={{ background: project.gradient }}
      />

      {/* Top Banner / Meta Header */}
      <div className="space-project-card__header">
        <div className="space-project-card__badge-row">
          <span
            className="space-project-card__type-badge"
            style={{ borderColor: project.color, color: project.color }}
          >
            {isWork ? <FaBriefcase size={10} /> : <FaCode size={10} />}
            <span>{isWork ? 'Production' : 'Open Source'}</span>
          </span>

          {project.link && (
            <span className="space-project-card__live-badge">
              <span className="space-project-card__live-dot" />
              {project.liveLabel || 'Live'}
            </span>
          )}
        </div>

        {/* Action icons (GitHub & External link) */}
        <div className="space-project-card__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="space-project-card__action-icon"
              aria-label={`GitHub repo for ${project.title}`}
            >
              <FaGithub />
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="space-project-card__action-icon"
              aria-label={`Live site for ${project.title}`}
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>

      {/* Company / Period Meta */}
      {isWork && (
        <div className="space-project-card__meta">
          <span className="space-project-card__company">{project.company}</span>
          <span className="space-project-card__dot" />
          <span className="space-project-card__period">{project.period}</span>
        </div>
      )}

      {/* Project Title */}
      <h3 className="space-project-card__title">{project.title}</h3>

      {/* Project Description */}
      <p className="space-project-card__desc">{project.description}</p>

      {/* Technology Tags */}
      <div className="space-project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="space-project-card__tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer / CTA if live link exists */}
      {project.link && (
        <div className="space-project-card__footer">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="space-project-card__visit-btn"
          >
            <span>Visit Live App</span>
            <FaExternalLinkAlt size={11} />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const displayedProjects =
    filter === 'all'
      ? allProjects
      : filter === 'work'
      ? workProjects
      : personalProjects;

  return (
    <section className="space-projects" id="projects">
      <div className="space-projects__container">
        {/* Section Header */}
        <motion.div
          className="space-projects__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="space-projects__pill">Cosmic Portfolio</span>
          <h2 className="space-projects__title">
            Featured <span className="space-projects__title-gradient">Projects</span>
          </h2>
          <p className="space-projects__subtitle">
            Explore 12 production enterprise systems and open-source applications built
            with PHP, CodeIgniter, Laravel, Python, and cloud infrastructure.
          </p>

          {/* Filter Tabs */}
          <div className="space-projects__tabs">
            <button
              className={`space-projects__tab ${
                filter === 'all' ? 'space-projects__tab--active' : ''
              }`}
              onClick={() => setFilter('all')}
            >
              All Projects ({allProjects.length})
            </button>
            <button
              className={`space-projects__tab ${
                filter === 'work' ? 'space-projects__tab--active' : ''
              }`}
              onClick={() => setFilter('work')}
            >
              Enterprise Work ({workProjects.length})
            </button>
            <button
              className={`space-projects__tab ${
                filter === 'personal' ? 'space-projects__tab--active' : ''
              }`}
              onClick={() => setFilter('personal')}
            >
              Open Source ({personalProjects.length})
            </button>
          </div>
        </motion.div>

        {/* Projects 3D Cards Grid */}
        <motion.div className="space-projects__grid" layout>
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <SpaceProjectCard key={project.id || project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
