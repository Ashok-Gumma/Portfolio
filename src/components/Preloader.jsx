import React, { useState, useEffect, useRef, useCallback } from 'react';
import catCoderGif from '../assets/cat-coder.gif';

export const Preloader = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const handleFinish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    setIsExiting(true);
    setTimeout(() => {
      onCompleteRef.current?.();
    }, 300);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') handleFinish();
    };
    window.addEventListener('keydown', handleKeyDown);

    const timer = setTimeout(() => {
      handleFinish();
    }, prefersReducedMotion ? 150 : 750);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleFinish]);

  return (
    <div
      className={`minimal-bw-loader ${isExiting ? 'loader-fade-out' : ''}`}
      onClick={handleFinish}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="minimal-bw-container" onClick={(e) => e.stopPropagation()}>
        <div className="minimal-gif-frame">
          <img
            src={catCoderGif}
            alt="Coding animation"
            className="minimal-bw-gif"
            loading="eager"
          />
        </div>

        <div className="minimal-text-wrap">
          <p className="minimal-curly-name">Ashok Shankar Gumma</p>
          <p className="minimal-curly-role">~ full-stack &amp; ai systems ~</p>
          <span className="minimal-curly-note">loading portfolio... ✨</span>
        </div>
      </div>
    </div>
  );
};
