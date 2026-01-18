import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollAnimations = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

// Componente para animaciones de texto
export const TextReveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

// Componente para animaciones de cards
export const CardReveal = ({ children, className = '', delay = 0, stagger = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: 'easeOut',
        staggerChildren: stagger 
      }}
      whileHover={{ 
        scale: 1.02, 
        transition: { duration: 0.3 } 
      }}
    >
      {children}
    </motion.div>
  );
};

// Componente para animaciones de números
export const NumberCounter = ({ end, duration = 2, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: duration, ease: 'easeOut' }}
        onUpdate={(latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest.opacity * end);
          }
        }}
      />
    </motion.span>
  );
};

// Componente para animaciones de imágenes
export const ImageReveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 15 }}
      transition={{ duration: 1, delay: delay, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.05, 
        transition: { duration: 0.3 } 
      }}
    >
      {children}
    </motion.div>
  );
};

// Componente para animaciones de botones
export const ButtonReveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.6, delay: delay, ease: 'easeOut' }}
      whileHover={{ 
        scale: 1.05, 
        transition: { duration: 0.2 } 
      }}
      whileTap={{ 
        scale: 0.95, 
        transition: { duration: 0.1 } 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimations;

