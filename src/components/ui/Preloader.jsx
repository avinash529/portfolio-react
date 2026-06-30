import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after 1.8s
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = 'unset';
    }, 1800);

    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          <div className="preloader__content">
            {/* Morphing glow ring */}
            <motion.div
              className="preloader__ring"
              animate={{
                border: [
                  '2px solid rgba(99, 102, 241, 0.4)',
                  '2px solid rgba(168, 85, 247, 0.4)',
                  '2px solid rgba(236, 72, 153, 0.4)',
                  '2px solid rgba(99, 102, 241, 0.4)'
                ],
                borderRadius: ['42% 58% 70% 30% / 45% 45% 55% 55%', '70% 30% 52% 48% / 60% 40% 60% 40%', '42% 58% 70% 30% / 45% 45% 55% 55%'],
                rotate: 360
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            {/* Glowing Text Logo */}
            <motion.div 
              className="preloader__logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <span className="preloader__logo-text">AR.</span>
              <span className="preloader__logo-glow">AR.</span>
            </motion.div>

            {/* Linear loading progress */}
            <div className="preloader__progress">
              <motion.div 
                className="preloader__progress-bar"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
