import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaStar, FaLaptopCode, FaGithub } from 'react-icons/fa';
import './GitHubStats.css';

const FALLBACK = { public_repos: 20, followers: 5 };

const stats = (data) => [
  { icon: <FaCode />, value: data.public_repos, label: 'Public Repos' },
  { icon: <FaUsers />, value: data.followers, label: 'Followers' },
  { icon: <FaStar />, value: '20+', label: 'Total Stars' },
  { icon: <FaLaptopCode />, value: 'PHP', label: 'Top Language' },
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

  return (
    <section className="github-stats section" id="github-stats">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <FaGithub className="section__header-icon" />
        <h2 className="section__title">GitHub Activity</h2>
      </motion.div>

      <div className="github-stats__grid">
        {stats(data).map((stat, i) => (
          <motion.div
            className="github-stats__card card"
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="github-stats__icon">{stat.icon}</div>
            <span className="github-stats__value">{stat.value}</span>
            <span className="github-stats__label">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="github-stats__link-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href="https://github.com/avinash529"
          target="_blank"
          rel="noopener noreferrer"
          className="github-stats__link"
        >
          View Full Profile →
        </a>
      </motion.div>
    </section>
  );
};

export default GitHubStats;
