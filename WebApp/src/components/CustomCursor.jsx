import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorVariant('button');
        setIsHovering(true);
      } else if (target.tagName === 'A' || target.closest('a')) {
        setCursorVariant('link');
        setIsHovering(true);
      } else if (target.tagName === 'IMG' || target.closest('img')) {
        setCursorVariant('image');
        setIsHovering(true);
      } else {
        setCursorVariant('default');
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant('default');
      setIsHovering(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  const cursorVariants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: 'rgba(203, 234, 106, 0.3)',
      border: '2px solid rgba(203, 234, 106, 0.8)',
      mixBlendMode: 'difference',
    },
    button: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(203, 234, 106, 0.1)',
      border: '2px solid rgba(203, 234, 106, 0.9)',
      mixBlendMode: 'difference',
    },
    link: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(207, 175, 106, 0.2)',
      border: '2px solid rgba(207, 175, 106, 0.8)',
      mixBlendMode: 'difference',
    },
    image: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '2px solid rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'difference',
    },
  };

  const cursorTextVariants = {
    default: { opacity: 0, scale: 0 },
    button: { opacity: 1, scale: 1 },
    link: { opacity: 1, scale: 1 },
    image: { opacity: 1, scale: 1 },
  };

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        animate={cursorVariants[cursorVariant]}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        {/* Cursor Trail */}
        <motion.div
          className="absolute inset-0 rounded-full bg-lime-accent/20"
          animate={{
            scale: isClicking ? [1, 0.8, 1] : [1, 1.2, 1],
            opacity: isClicking ? [0.8, 0.4, 0.8] : [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 0.3,
            repeat: isClicking ? 0 : Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Cursor Text */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] text-white text-sm font-medium"
        style={{
          x: mousePosition.x + 20,
          y: mousePosition.y - 10,
        }}
        variants={cursorTextVariants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        {cursorVariant === 'button' && 'Click'}
        {cursorVariant === 'link' && 'Link'}
        {cursorVariant === 'image' && 'View'}
      </motion.div>

      {/* Cursor Particles */}
      {isHovering && (
        <div className="fixed top-0 left-0 pointer-events-none z-[9998]">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-lime-accent rounded-full"
              style={{
                left: mousePosition.x + (Math.random() - 0.5) * 40,
                top: mousePosition.y + (Math.random() - 0.5) * 40,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20],
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CustomCursor;

