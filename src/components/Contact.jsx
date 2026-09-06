import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const contactCards = [
  {
    label: 'Direct Email',
    value: 'avinashraju815@gmail.com',
    href: 'mailto:avinashraju815@gmail.com',
    icon: FaEnvelope,
    color: '#f43f5e',
  },
  {
    label: 'Phone Call',
    value: '+91 70255 23228',
    href: 'tel:+917025523228',
    icon: FaPhoneAlt,
    color: '#10b981',
  },
  {
    label: 'LinkedIn Profile',
    value: 'avinash-raju',
    href: 'https://www.linkedin.com/in/avinash-raju-b8b154184/',
    icon: FaLinkedin,
    color: '#38bdf8',
  },
  {
    label: 'GitHub Repositories',
    value: 'avinash529',
    href: 'https://github.com/avinash529',
    icon: FaGithub,
    color: '#a855f7',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pre-fill mailto link with message
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:avinashraju815@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="space-contact" id="contact">
      <div className="space-contact__container">
        {/* Header */}
        <motion.div
          className="space-contact__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="space-contact__pill">Transmission Hub</span>
          <h2 className="space-contact__title">
            Let's <span className="space-contact__title-gradient">Connect</span>
          </h2>
          <p className="space-contact__subtitle">
            Available for full-time Senior PHP Developer positions, backend architecture
            consulting, and enterprise web solutions.
          </p>
        </motion.div>

        <div className="space-contact__layout">
          {/* Left: Contact Channels & Location */}
          <motion.div
            className="space-contact__channels"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-contact__beacon-card">
              <div className="space-contact__beacon-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="space-contact__beacon-title">Primary Station</h4>
                <p className="space-contact__beacon-text">Kochi, Kerala, India (Remote &amp; Relocation Open)</p>
              </div>
            </div>

            <div className="space-contact__cards-grid">
              {contactCards.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="space-contact__card"
                    whileHover={{ y: -4 }}
                  >
                    <div
                      className="space-contact__card-icon"
                      style={{ color: item.color, borderColor: `${item.color}55` }}
                    >
                      <Icon />
                    </div>
                    <div className="space-contact__card-info">
                      <span className="space-contact__card-label">{item.label}</span>
                      <span className="space-contact__card-val">{item.value}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Message Terminal Form */}
          <motion.div
            className="space-contact__form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="space-contact__form-title">Send Direct Dispatch</h3>
            <p className="space-contact__form-subtitle">
              Fill in your details to immediately generate an email transmission.
            </p>

            {submitted ? (
              <div className="space-contact__success">
                <FaCheckCircle className="space-contact__success-icon" />
                <h4>Dispatch Prepared!</h4>
                <p>Opening your default mail client to transmit...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-contact__form">
                <div className="space-contact__form-row">
                  <div className="space-contact__field">
                    <label>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-contact__field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-contact__field">
                  <label>Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="PHP Backend Developer Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-contact__field">
                  <label>Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your project, role, or collaboration idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="space-contact__submit-btn">
                  <FaPaperPlane size={14} />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
