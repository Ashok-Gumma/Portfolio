import React, { useState, useEffect, useRef } from 'react';

// Minimal black & white GIF animation
import catCoderGif from '../assets/cat-coder.gif';

export const Preloader = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const completedRef = useRef(false);

  const handleFinish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    try {
      window.dispatchEvent(new CustomEvent('start-portfolio-audio'));
    } catch (e) {}
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleFinish();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Snappy, fast loader duration (~750ms) - "just like that"
    const timer = setTimeout(() => {
      handleFinish();
    }, 750);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className={`minimal-bw-loader ${isExiting ? 'loader-fade-out' : ''}`}
      onClick={handleFinish}
    >
      <div className="minimal-bw-container" onClick={(e) => e.stopPropagation()}>
        {/* Centered Minimal B&W GIF Animation */}
        <div className="minimal-gif-frame">
          <img
            src={catCoderGif}
            alt="Coding animation"
            className="minimal-bw-gif"
            loading="eager"
          />
        </div>

        {/* Minimal Typography in Clean Curly Font */}
        <div className="minimal-text-wrap">
          <h1 className="minimal-curly-name">Ashok Shankar Gumma</h1>
          <p className="minimal-curly-role">~ full-stack &amp; ai systems ~</p>
          <span className="minimal-curly-note">loading portfolio... ✨</span>
        </div>
      </div>
    </div>
  );
};
