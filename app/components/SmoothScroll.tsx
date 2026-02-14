'use client';

import { ReactNode, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const { scrollYProgress } = useScroll();
  
  // Ultra-smooth spring physics (like adi.so)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      {/* Smooth scroll progress indicator (optional) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #00d9ff, #7b68ee)',
          transformOrigin: '0%',
          scaleX: smoothProgress,
          zIndex: 9999,
          opacity: 0.8
        }}
      />
      {children}
    </>
  );
}