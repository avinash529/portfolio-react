import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaStar, FaLaptopCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './GitHubStats.css';

const FALLBACK = { public_repos: 20, followers: 5 };

const statsConfig = (data) => [
  {
    icon: FaCode,
    value: data.public_repos,
    label: 'Public Repositories',
    color: '#818cf8',
  },
  {
    icon: FaUsers,
    value: data.followers,
    label: 'GitHub Followers',
    color: '#38bdf8',
  },
  {
    icon: FaStar,
    value: '20+',
    label: 'Repository Stars',
    color: '#fbbf24',
  },
  {
    icon: FaLaptopCode,
    value: 'PHP',
    label: 'Top Language',
    color: '#a855f7',
  },
];

const GitHubStats = () => {
  const [data, setData] = useState(FALLBACK);

  useEffect(() => {
    fetch('https://api.github.com/users/avinash529')
      .then((res) => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then((json) => setData(json))
      .catch(() => setData(FALLBACK));
  }, []);

  const stats = statsConfig(data);

  return (
    <section className="space-github" id="github-stats">
      <div className="space-github__container">
        {/* Header */}
        <motion.div
          className="space-github__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-github__icon-banner">
            <FaGithub />
          </div>
          <h2 className="space-github__title">
            GitHub <span className="space-github__title-gradient">Telemetry</span>
          </h2>
          <p className="space-github__subtitle">
            Live developer metrics tracked via GitHub API from{' '}
            <span className="text-white font-medium">@avinash529</span>
          </p>
        </motion.div>

        {/* 4 Telemetry Cards */}
        <div className="space-github__grid">
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                className="space-github__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div
                  className="space-github__card-glow"
                  style={{ background: item.color }}
                />
                <div
                  className="space-github__card-icon"
                  style={{ color: item.color, borderColor: `${item.color}55` }}
                >
                  <Icon />
                </div>
                <span className="space-github__card-value">{item.value}</span>
                <span className="space-github__card-label">{item.label}</span>
              </motion.div>
            );
          })}
        </div>

        {/* CTA to view full profile */}
        <motion.div
          className="space-github__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="https://github.com/avinash529"
            target="_blank"
            rel="noopener noreferrer"
            className="space-github__btn"
          >
            <FaGithub size={16} />
            <span>Explore @avinash529 on GitHub</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
