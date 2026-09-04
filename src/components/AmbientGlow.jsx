import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const AmbientGlow = () => {
  const [visible, setVisible] = useState(false);
  const springX = useSpring(-200, { damping: 30, stiffness: 250, mass: 0.2 });
  const springY = useSpring(-200, { damping: 30, stiffness: 250, mass: 0.2 });

  useEffect(() => {
    // Check if device supports fine hover (desktop/mouse)
    if (window.matchMedia('(pointer: fine)').matches) {
      const handleMouseMove = (e) => {
        springX.set(e.clientX);
        springY.set(e.clientY);
        if (!visible) setVisible(true);
      };

      const handleMouseLeave = () => setVisible(false);

      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [visible, springX, springY]);

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
