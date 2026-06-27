import React from 'react';
import { motion } from 'framer-motion';

const InfiniteMarquee = ({
  children,
  speed = 20,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}) => {
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: speed,
          ease: 'linear',
        },
      },
    },
  };

  const containerStyle = {
    overflow: 'hidden',
    width: '100%',
  };

  const motionStyle = {
    display: 'flex',
    width: 'max-content',
  };

  const innerStyle = {
    display: 'flex',
    gap: '2rem',
    padding: '0 1rem',
    flexWrap: 'nowrap',
  };

  return (
    <div
      className={className}
      style={containerStyle}
    >
      <motion.div
        variants={marqueeVariants}
        animate="animate"
        style={motionStyle}
        {...(pauseOnHover && {
          whileHover: { animationPlayState: 'paused' },
        })}
        onHoverStart={(e) => {
          if (pauseOnHover) {
            e.target.style.animationPlayState = 'paused';
          }
        }}
        onHoverEnd={(e) => {
          if (pauseOnHover) {
            e.target.style.animationPlayState = 'running';
          }
        }}
      >
        <div style={innerStyle}>
          {children}
        </div>
        <div style={innerStyle} aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteMarquee;
