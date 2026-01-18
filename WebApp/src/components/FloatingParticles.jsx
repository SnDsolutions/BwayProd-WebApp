import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const particles = Array.from({ length: 40 });

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {particles.map((_, i) => {
        const size = Math.random() * 6 + 2;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 15;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-lime-accent/30"
            style={{
              width: size,
              height: size,
              left: `${startX}vw`,
              top: `${startY}vh`,
            }}
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              y: [0, Math.random() * 120 - 60, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.8, 0.8, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingParticles;