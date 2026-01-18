
import React, { useRef } from 'react';
import { motion, useTime, useTransform } from 'framer-motion';

const ColorBends = () => {
  const time = useTime();
  
  // Transform time into rotation values for smooth continuous movement
  const rotate1 = useTransform(time, [0, 20000], [0, 360], { clamp: false });
  const rotate2 = useTransform(time, [0, 25000], [0, -360], { clamp: false });
  const rotate3 = useTransform(time, [0, 30000], [0, 360], { clamp: false });

  return (
    <div className="absolute top-0 left-0 w-full h-[85vh] min-h-[600px] z-0 overflow-hidden pointer-events-none select-none bg-grafito">
      
      {/* Base vibrant gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 opacity-60" />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden filter blur-[80px] opacity-80" style={{ willChange: 'transform', transform: 'translateZ(0)', imageRendering: 'auto' }}>
        
        {/* Orb 1: Cyan/Blue - Top Left */}
        <motion.div 
          style={{ rotate: rotate1 }}
          className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mix-blend-screen opacity-70 animate-blob"
        />

        {/* Orb 2: Purple/Pink - Bottom Right */}
        <motion.div 
          style={{ rotate: rotate2 }}
          className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-l from-fuchsia-500 via-pink-600 to-purple-600 mix-blend-screen opacity-60 animate-blob animation-delay-2000"
        />

        {/* Orb 3: Emerald/Teal - Center/Bottom */}
        <motion.div 
          style={{ rotate: rotate3 }}
          className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-t from-emerald-400 via-teal-500 to-cyan-500 mix-blend-screen opacity-50 animate-blob animation-delay-4000"
        />
        
        {/* Orb 4: Highlights - Floating */}
        <motion.div
            animate={{
                x: [0, 100, -100, 0],
                y: [0, -100, 100, 0],
                scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
            className="absolute top-[30%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-white via-cyan-300 to-transparent mix-blend-overlay opacity-40"
        />
      </div>

      {/* Aurora Borealis Effect Layer */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      
      {/* Mesh Gradient Overlay for complexity */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-grafito/20 to-grafito z-10" />
      
      {/* Top Gradient for navbar integration */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-grafito to-transparent z-20" />
      
      {/* Bottom fade out */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-grafito to-transparent z-20" />

    </div>
  );
};

export default ColorBends;
