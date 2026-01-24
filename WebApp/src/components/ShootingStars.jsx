import React, { useMemo, memo } from 'react';
import { motion } from 'framer-motion';

const ShootingStars = memo(() => {
  // Memoize star configurations to prevent recalculation on every render
  const starsConfig = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => ({
      id: i,
      duration: Math.random() * 3 + 2, // Slower: 2s to 5s duration
      delay: Math.random() * 8 + 3, // More sporadic: 3s to 11s delay
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      angle: -45,
    }));
  }, []); // Empty dependency array - calculate once on mount

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {starsConfig.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            top: `${star.startY}vh`,
            left: `${star.startX}vw`,
            width: '200px', // Longer trail
            height: '1px',
            background: 'linear-gradient(to left, rgba(255, 255, 255, 0.5), transparent)',
            transform: `rotate(${star.angle}deg)`,
            filter: 'blur(1px)', // Softer glow
            willChange: 'transform, opacity', // Optimize for animations
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
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
});

ShootingStars.displayName = 'ShootingStars';

export default ShootingStars;