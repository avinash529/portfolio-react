import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonialsData = [
  {
    quote:
      'Avinash designed our Jobstars Candidate & Invoice System with outstanding efficiency. The automated modules solved a major bottleneck for our placement operations. His technical planning and CodeIgniter skills are top-tier.',
    name: 'Sreedhar',
    role: 'CEO',
    company: 'YUYI Technology & Management Services Pvt Ltd',
    accentColor: '#818cf8',
    initials: 'S',
  },
  {
    quote:
      'Avinash proved to be highly professional and efficient in delivering key client platforms like FARELABS and ELMS for Spices Board. His dedication and understanding of commercial requirements enabled us to deliver projects on time.',
    name: 'Rajeev',
    role: 'Commercial Director',
    company: 'Megatrend KMS',
    accentColor: '#a855f7',
    initials: 'R',
  },
  {
    quote:
      'Avinash took full ownership of the complex Will succession system backend, structuring asset distribution workflows and MS SQL optimizations cleanly. He is highly reliable and collaborates exceptionally well with engineering and QA teams.',
    name: 'Sudeep',
    role: 'Technical Director',
    company: 'Megatrend KMS',
    accentColor: '#38bdf8',
    initials: 'S',
  },
  {
    quote:
      "An excellent bootcamp mentor. Avinash doesn't just teach code syntax; he coaches students on real-world development standards: MVC architecture, Git workflows, debugging, and mock interview prep. He has been instrumental in preparing our graduates for successful placements.",
    name: 'Jaisal',
    role: 'Chief Placement Officer',
    company: 'Avodha Edutech',
    accentColor: '#10b981',
    initials: 'J',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[index];

  return (
    <section className="space-testimonials" id="testimonials">
      <div className="space-testimonials__container">
        {/* Header */}
        <motion.div
          className="space-testimonials__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="space-testimonials__pill">Executive Endorsements</span>
          <h2 className="space-testimonials__title">
            What <span className="space-testimonials__title-gradient">Leaders Say</span>
          </h2>
          <p className="space-testimonials__subtitle">
            Feedback from CEOs, Directors, and Academic Officers I've collaborated
            with on mission-critical applications.
          </p>
        </motion.div>

        {/* Carousel Slider */}
        <div className="space-testimonials__slider">
          <button
            className="space-testimonials__nav-btn space-testimonials__nav-btn--prev"
            onClick={handlePrev}
            aria-label="Previous Endorsement"
          >
            <FaChevronLeft />
          </button>

          <div className="space-testimonials__card-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="space-testimonials__card"
                initial={{ opacity: 0, scale: 0.95, x: 25 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -25 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="space-testimonials__glow"
                  style={{
                    background: `radial-gradient(circle, ${current.accentColor}33 0%, transparent 70%)`,
                  }}
                />

                <div className="space-testimonials__card-top">
                  <div className="space-testimonials__quote-icon">
                    <FaQuoteLeft style={{ color: current.accentColor }} />
                  </div>
                  <div className="space-testimonials__stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#fbbf24" size={14} />
                    ))}
                  </div>
                </div>

                <blockquote className="space-testimonials__quote">
                  "{current.quote}"
                </blockquote>

                <div className="space-testimonials__author">
                  <div
                    className="space-testimonials__avatar"
                    style={{
                      borderColor: current.accentColor,
                      boxShadow: `0 0 15px ${current.accentColor}66`,
                    }}
                  >
                    {current.initials}
                  </div>
                  <div className="space-testimonials__author-info">
                    <h4 className="space-testimonials__name">{current.name}</h4>
                    <p className="space-testimonials__role">
                      <span className="space-testimonials__role-badge">
                        {current.role}
                      </span>{' '}
                      · {current.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="space-testimonials__nav-btn space-testimonials__nav-btn--next"
            onClick={handleNext}
            aria-label="Next Endorsement"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Indicators */}
        <div className="space-testimonials__dots">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              className={`space-testimonials__dot ${
                i === index ? 'space-testimonials__dot--active' : ''
              }`}
              onClick={() => setIndex(i)}
              aria-label={`Go to endorsement ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
