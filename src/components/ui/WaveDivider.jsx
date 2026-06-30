import React from 'react';
import './WaveDivider.css';

const WaveDivider = ({ type = 'wave1', height = 60, speed = 0 }) => {
  // We can render different types of premium dividers
  const renderDivider = () => {
    switch (type) {
      case 'wave1':
        return (
          <svg className="wave-divider__svg" viewBox="0 0 1440 74" fill="none" preserveAspectRatio="none">
            <path
              d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,74L1320,74C1200,74,960,74,720,74C480,74,240,74,120,74L0,74Z"
              className="wave-divider__fill"
            />
            <path
              d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32"
              className="wave-divider__stroke"
              strokeWidth="2"
            />
          </svg>
        );
      case 'wave2':
        return (
          <svg className="wave-divider__svg" viewBox="0 0 1440 74" fill="none" preserveAspectRatio="none">
            <path
              d="M0,50 C360,10 720,90 1080,20 C1260,0 1380,20 1440,30 L1440,74 L0,74 Z"
              className="wave-divider__fill"
            />
            <path
              d="M0,50 C360,10 720,90 1080,20 C1260,0 1380,20 1440,30"
              className="wave-divider__stroke"
              strokeWidth="2"
            />
          </svg>
        );
      case 'curve':
        return (
          <svg className="wave-divider__svg" viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none">
            <path
              d="M0,0 Q720,48 1440,0 L1440,48 L0,48 Z"
              className="wave-divider__fill"
            />
            <path
              d="M0,0 Q720,48 1440,0"
              className="wave-divider__stroke"
              strokeWidth="2"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`wave-divider wave-divider--${type}`} style={{ height: `${height}px` }}>
      {renderDivider()}
    </div>
  );
};

export default WaveDivider;
