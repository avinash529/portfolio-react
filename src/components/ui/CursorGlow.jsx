import React, { useRef, useEffect, useState } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const glowRef = useRef(null);
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    // Only show on devices with a fine pointer (no touch devices)
    const mq = window.matchMedia('(pointer: fine)');
    setHasPointer(mq.matches);

    const handleChange = (e) => setHasPointer(e.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!hasPointer) return;

    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
        glowRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hasPointer]);

  if (!hasPointer) return null;

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{ opacity: 0 }}
    />
  );
};

export default CursorGlow;
