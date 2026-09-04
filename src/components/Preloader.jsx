import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { playPaperTear, playFullPaperRip } from '../utils/soundEffects';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isCuttingDone, setIsCuttingDone] = useState(false);
  const tearCountRef = useRef(0);
  const completedRef = useRef(false);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 1200; // 1.2 seconds smooth cut

    const finishCut = () => {
      if (completedRef.current) return;
      completedRef.current = true;
      setProgress(100);
      playFullPaperRip();
      setIsCuttingDone(true);

      setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
    };

    let animFrame;
    const animate = (time) => {
      const elapsed = time - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);

      // Play intense granular paper tearing sound as the scissors cuts across
      const currentStep = Math.floor(pct / 8);
      if (currentStep > tearCountRef.current && pct < 96) {
        tearCountRef.current = currentStep;
        playPaperTear(0.14, 0.88);
      }

      if (pct < 100) {
        animFrame = requestAnimationFrame(animate);
      } else {
        finishCut();
      }
    };

    animFrame = requestAnimationFrame(animate);

    // Guaranteed fail-safe timer: will NEVER get stuck under any circumstances
    const fallbackTimer = setTimeout(() => {
      finishCut();
    }, 1400);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete]);

  return (
    <div className={`paper-loader-wrapper ${isCuttingDone ? 'cutting-complete' : ''}`}>
      {/* Top Half of Paper Sheet */}
      <motion.div
        className="paper-half paper-top-half graph-paper-bg"
        initial={{ y: 0, rotate: 0 }}
        animate={isCuttingDone ? { y: '-105%', rotate: -1.2, opacity: 0.95 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Bottom Half of Paper Sheet */}
      <motion.div
        className="paper-half paper-bottom-half graph-paper-bg"
        initial={{ y: 0, rotate: 0 }}
        animate={isCuttingDone ? { y: '105%', rotate: 1.2, opacity: 0.95 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Center Dashed Seam & Animated Cutting Scissors */}
      {!isCuttingDone && (
        <div className="paper-cut-seam-container">
          {/* Dashed Cutting Line */}
          <div className="cut-dashed-line">
            <div
              className="cut-opened-track"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Animated Scissors moving automatically across the dotted line */}
          <motion.div
            className="moving-scissors-wrap"
            style={{
              left: `${progress}%`,
            }}
          >
            <svg
              className="scissors-svg"
              width="68"
              height="68"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top Blade & Handle */}
              <motion.g
                className="scissor-top-blade"
                animate={{
                  rotate: [ -18, 4, -18 ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.18,
                  ease: "easeInOut"
                }}
                style={{ originX: '28px', originY: '32px' }}
              >
                <ellipse cx="14" cy="20" rx="9" ry="8" stroke="#141518" strokeWidth="3" fill="#FAF8F5" />
                <path d="M21 24 L28 32" stroke="#141518" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 32 L58 40 L30 34 Z" fill="#141518" stroke="#141518" strokeWidth="1.5" strokeLinejoin="round" />
              </motion.g>

              {/* Bottom Blade & Handle */}
              <motion.g
                className="scissor-bottom-blade"
                animate={{
                  rotate: [ 18, -4, 18 ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.18,
                  ease: "easeInOut"
                }}
                style={{ originX: '28px', originY: '32px' }}
              >
                <ellipse cx="14" cy="44" rx="9" ry="8" stroke="#141518" strokeWidth="3" fill="#FAF8F5" />
                <path d="M21 40 L28 32" stroke="#141518" strokeWidth="4" strokeLinecap="round" />
                <path d="M28 32 L58 24 L30 30 Z" fill="#141518" stroke="#141518" strokeWidth="1.5" strokeLinejoin="round" />
              </motion.g>

              {/* Pivot Screw Pin */}
              <circle cx="28" cy="32" r="3.5" fill="#FF3B1D" stroke="#141518" strokeWidth="1.5" />
            </svg>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Preloader;
