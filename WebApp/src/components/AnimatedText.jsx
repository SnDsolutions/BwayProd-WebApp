import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedText = ({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  stagger = 0.05,
  type = 'words' // 'words', 'letters', 'lines'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsVisible(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  const splitText = () => {
    switch (type) {
      case 'letters':
        return text.split('').map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={isVisible ? { 
              opacity: 1, 
              y: 0, 
              rotateX: 0 
            } : { 
              opacity: 0, 
              y: 50, 
              rotateX: -90 
            }}
            transition={{
              duration: duration,
              delay: index * stagger,
              ease: 'easeOut'
            }}
            whileHover={{ 
              scale: 1.2, 
              color: '#CBEA6A',
              transition: { duration: 0.2 }
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ));
      
      case 'words':
        return text.split(' ').map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={isVisible ? { 
              opacity: 1, 
              y: 0, 
              scale: 1 
            } : { 
              opacity: 0, 
              y: 50, 
              scale: 0.8 
            }}
            transition={{
              duration: duration,
              delay: wordIndex * stagger,
              ease: 'easeOut'
            }}
            whileHover={{ 
              scale: 1.1, 
              color: '#CBEA6A',
              transition: { duration: 0.2 }
            }}
          >
            {word}
          </motion.span>
        ));
      
      case 'lines':
        return text.split('\n').map((line, lineIndex) => (
          <motion.div
            key={lineIndex}
            className="block"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { 
              opacity: 1, 
              x: 0 
            } : { 
              opacity: 0, 
              x: -50 
            }}
            transition={{
              duration: duration,
              delay: lineIndex * stagger,
              ease: 'easeOut'
            }}
            whileHover={{ 
              x: 10,
              color: '#CBEA6A',
              transition: { duration: 0.2 }
            }}
          >
            {line}
          </motion.div>
        ));
      
      default:
        return text;
    }
  };

  return (
    <div ref={ref} className={className}>
      {splitText()}
    </div>
  );
};

// Componente para texto con gradiente animado
export const GradientText = ({ 
  text, 
  className = '', 
  delay = 0,
  gradient = 'from-lime-accent to-soft-gold'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.span
        className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          backgroundSize: '200% 100%'
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

// Componente para texto con efecto de máquina de escribir
export const TypewriterText = ({ 
  text, 
  className = '', 
  speed = 100,
  delay = 0,
  onComplete = () => {}
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        onComplete();
      }
    }, currentIndex === 0 ? delay * 1000 : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, isInView, onComplete]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
    >
      <span className="text-white">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-lime-accent"
        >
          |
        </motion.span>
      </span>
    </motion.div>
  );
};

// Componente para texto con efecto de revelado
export const RevealText = ({ 
  text, 
  className = '', 
  direction = 'up',
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 50, opacity: 0 };
      case 'down': return { y: -50, opacity: 0 };
      case 'left': return { x: 50, opacity: 0 };
      case 'right': return { x: -50, opacity: 0 };
      default: return { y: 50, opacity: 0 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case 'up': return { y: 0, opacity: 1 };
      case 'down': return { y: 0, opacity: 1 };
      case 'left': return { x: 0, opacity: 1 };
      case 'right': return { x: 0, opacity: 1 };
      default: return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: 'easeOut'
      }}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;

