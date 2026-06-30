import React, { useState, useEffect, useRef } from 'react';

const TypeWriter = ({ words = [], speed = 100 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentWord.length) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          }, speed);
        } else {
          // Word fully typed — pause, then start deleting
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          timeoutRef.current = setTimeout(() => {
            setDisplayText(currentWord.slice(0, displayText.length - 1));
          }, 60);
        } else {
          // Deletion complete — move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    handleTyping();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, currentWordIndex, words, speed]);

  return (
    <>
      <style>{`
        @keyframes typewriterBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typewriter-cursor {
          animation: typewriterBlink 0.7s step-end infinite;
          font-weight: 300;
        }
      `}</style>
      <span>
        {displayText}
        <span className="typewriter-cursor">|</span>
      </span>
    </>
  );
};

export default TypeWriter;
