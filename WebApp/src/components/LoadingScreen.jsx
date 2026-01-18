import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ isLoading, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress / 100);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#050508] flex items-center justify-center">
      {/* Main Content */}
      <div className="text-center">
        {/* Círculo de carga con logo */}
        <div className="mb-8 relative">
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            {/* Círculo de fondo */}
            <svg 
              className="w-40 h-40 md:w-48 md:h-48 transform -rotate-90 absolute inset-0" 
              viewBox="0 0 120 120"
            >
              {/* Círculo de fondo gris */}
              <circle
                cx="60"
                cy="60"
                r={radius}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="3"
                fill="none"
              />
              {/* Círculo de progreso animado */}
              <motion.circle
                cx="60"
                cy="60"
                r={radius}
                stroke="url(#loadingGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              {/* Gradiente para el círculo */}
              <defs>
                <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Logo centrado con animación de rotación suave */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "linear" 
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <img 
                src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/b370402ce6ff35b060faa7aac79643d0.png" 
                alt="BWAY Productions Logo" 
                className="h-20 md:h-24 w-auto drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              />
            </motion.div>
          </div>
        </div>

        {/* Loading Text */}
        <motion.h2 
          className="text-xl md:text-2xl font-bold text-white mb-4 font-montserrat"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Cargando experiencias visuales...
        </motion.h2>

        {/* Progress Percentage */}
        <motion.span 
          className="text-cyan-400 font-bold text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {Math.floor(progress)}%
        </motion.span>
      </div>
    </div>
  );
};

export default LoadingScreen;
