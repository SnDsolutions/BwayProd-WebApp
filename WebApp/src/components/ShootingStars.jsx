import React from 'react';
import { motion } from 'framer-motion';

const ShootingStars = () => {
  const stars = Array.from({ length: 7 });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((_, i) => {
        const duration = Math.random() * 3 + 2; // Slower: 2s to 5s duration
        const delay = Math.random() * 8 + 3; // More sporadic: 3s to 11s delay
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const angle = -45;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${startY}vh`,
              left: `${startX}vw`,
              width: '200px', // Longer trail
              height: '1px',
              background: 'linear-gradient(to left, rgba(255, 255, 255, 0.5), transparent)',
              transform: `rotate(${angle}deg)`,
              filter: 'blur(1px)', // Softer glow
            }}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              x: '-100vw',
              y: '100vh',
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          />
        );
      })}
    </div>
  );
};

export default ShootingStars;