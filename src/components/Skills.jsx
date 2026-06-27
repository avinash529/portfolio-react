import React from 'react';
import { motion } from 'framer-motion';
import InfiniteMarquee from './ui/InfiniteMarquee';
import './Skills.css';

const skills = [
  {
    name: 'PHP',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  },
  {
    name: 'CodeIgniter 4',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg',
  },
  {
    name: 'CodeIgniter 3',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg',
  },
  {
    name: 'Laravel',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
  },
  {
    name: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  },
  {
    name: 'Django',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',
  },
  {
    name: 'MySQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
  },
  {
    name: 'MSSQL',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
  },
  {
    name: 'HTML',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'Bootstrap',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  },
  {
    name: 'SVN',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/subversion/subversion-original.svg',
  },
  {
    name: 'Linux',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <motion.h2
          className="skills__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technologies
        </motion.h2>

        <motion.p
          className="skills__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Core technologies I use for building backend-heavy web applications
          and modern interfaces.
        </motion.p>

        <motion.div
          className="skills__marquee-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Fade edges */}
          <div className="skills__fade skills__fade--left" />
          <div className="skills__fade skills__fade--right" />

          <InfiniteMarquee speed={25} direction="left" pauseOnHover={true}>
            {skills.map((skill, i) => (
              <div key={i} className="skills__pill">
                <img
                  className="skills__logo"
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  loading="lazy"
                />
                <span className="skills__name">{skill.name}</span>
              </div>
            ))}
          </InfiniteMarquee>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
