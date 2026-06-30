import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

const testimonialsData = [
  {
    quote: "Avinash designed our Jobstars Candidate & Invoice System with outstanding efficiency. The automated modules solved a major bottleneck for our placement operations. His database design and CodeIgniter skills are top-tier.",
    name: "S. Raghavan",
    role: "Technical Lead",
    company: "YUYI Technology",
    color: "var(--color-accent)"
  },
  {
    quote: "Avinash took full ownership of the complex Will succession system backend, structuring asset distribution workflows and MS SQL optimizations cleanly. He is highly reliable and collaborates exceptionally well with QA teams.",
    name: "Elizabeth Kurian",
    role: "Project Manager",
    company: "Megatrend KMS",
    color: "var(--color-accent-purple)"
  },
  {
    quote: "An excellent bootcamp mentor. Avinash doesn't just teach code syntax; he coaches on real-world development standards: MVC architecture, Git workflows, debugging, and mock interview prep. The best tutor I've had.",
    name: "Rahul K. S.",
    role: "Junior PHP Developer",
    company: "Avodha Bootcamp Graduate",
    color: "var(--color-accent-emerald)"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <motion.div
          className="testimonials__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="testimonials__subtitle">Endorsements</span>
          <h2 className="testimonials__title">What People Say</h2>
        </motion.div>

        <div className="testimonials__slider-wrapper">
          <button className="testimonials__btn testimonials__btn--prev" onClick={handlePrev} aria-label="Previous testimonial">
            <FaChevronLeft />
          </button>

          <div className="testimonials__card-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="testimonials__card"
                style={{ '--card-accent': testimonialsData[index].color }}
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="testimonials__quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonials__quote-text">
                  {testimonialsData[index].quote}
                </p>
                <div className="testimonials__meta">
                  <div className="testimonials__avatar-placeholder">
                    {testimonialsData[index].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="testimonials__name">{testimonialsData[index].name}</h4>
                    <p className="testimonials__role">
                      {testimonialsData[index].role} · <span className="testimonials__company">{testimonialsData[index].company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="testimonials__btn testimonials__btn--next" onClick={handleNext} aria-label="Next testimonial">
            <FaChevronRight />
          </button>
        </div>

        {/* Bullet indicators */}
        <div className="testimonials__dots">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === index ? 'testimonials__dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
