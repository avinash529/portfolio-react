import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaDatabase, FaKey, FaServer } from 'react-icons/fa';
import './Encryption.css';

const securityFeatures = [
  {
    icon: FaDatabase,
    title: 'High-Concurrency Databases',
    desc: 'Optimized MySQL & MSSQL schemas, stored procedures, indexing, and transactional integrity under heavy production load.',
  },
  {
    icon: FaShieldAlt,
    title: 'Enterprise RBAC & Auth',
    desc: 'Robust Role-Based Access Control, bcrypt password hashing, CSRF defenses, and sanitized input pipelines.',
  },
  {
    icon: FaKey,
    title: 'Encrypted Data Streams',
    desc: 'End-to-end encryption for candidate PII, invoices, legal wills, and laboratory certifications.',
  },
  {
    icon: FaServer,
    title: 'Hardened Linux Deployments',
    desc: 'Nginx/Apache security configurations, SSL/TLS certificates, firewall rules, and AWS EC2 stability.',
  },
];

const Encryption = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <section className="space-encryption" id="encryption">
      {/* Background Cyber Stream Video */}
      <div className="space-encryption__video-wrapper">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="space-encryption__video"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
        <div className="space-encryption__video-mask" />
      </div>

      <div className="space-encryption__container">
        {/* Section Header */}
        <motion.div
          className="space-encryption__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="space-encryption__title">
            Performance <span className="space-encryption__gradient">&amp;</span> Security.
          </h2>
          <p className="space-encryption__subtitle">
            Mission-critical backend architectures engineered to protect sensitive
            enterprise data.
          </p>
        </motion.div>

        {/* Interactive 3D Lock Centerpiece */}
        <motion.div
          className="space-encryption__lock-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setIsUnlocked(true)}
          onMouseLeave={() => setIsUnlocked(false)}
          onClick={() => setIsUnlocked((prev) => !prev)}
        >
          <div className="space-encryption__lock-glow" />
          <div className="space-encryption__lock-assembly">
            <img
              src="/lock-top.png"
              alt="Security Lock Top"
              className={`space-encryption__lock-top ${
                isUnlocked ? 'space-encryption__lock-top--open' : ''
              }`}
            />
            <img
              src="/lock-main.png"
              alt="Security Lock Main"
              className="space-encryption__lock-body"
            />
          </div>

          <div className="space-encryption__badge">
            <span className="space-encryption__badge-dot" />
            <span>{isUnlocked ? 'Vault Unlocked' : 'End-to-End Encryption'}</span>
          </div>

          <p className="space-encryption__lock-hint">
            {isUnlocked
              ? 'Verified: Enterprise-grade data protection active'
              : 'Hover or tap to inspect system security state'}
          </p>
        </motion.div>

        {/* 4 Security Pillars Grid */}
        <div className="space-encryption__grid">
          {securityFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                className="space-encryption__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="space-encryption__card-icon">
                  <Icon />
                </div>
                <h3 className="space-encryption__card-title">{feat.title}</h3>
                <p className="space-encryption__card-desc">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Encryption;
