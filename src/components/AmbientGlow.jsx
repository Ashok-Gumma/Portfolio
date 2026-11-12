import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const AmbientGlow = () => {
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);
  const springX = useSpring(-200, { damping: 30, stiffness: 250, mass: 0.2 });
  const springY = useSpring(-200, { damping: 30, stiffness: 250, mass: 0.2 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !window.matchMedia('(pointer: fine)').matches) {
      return undefined;
    }

    const handleMouseMove = (e) => {
      springX.set(e.clientX);
      springY.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const handleMouseLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [springX, springY]);

  if (!visible) return null;

  return (
    <motion.div
      className="ambient-cursor-glow"
      style={{
        x: springX,
        y: springY,
      }}
      aria-hidden="true"
    />
  );
};

export default AmbientGlow;
