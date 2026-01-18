import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, ArrowDown } from 'lucide-react';

// Define static title and subtitle
const staticTitle = "BWAY PROD";
const staticSubtitle = "Visión que impacta.";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      // Toggle the muted state
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source src="https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Secuencia+bombom.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-grafito/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-grafito via-grafito/40 to-transparent" />
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-dark-accent/10 via-transparent to-transparent" style={{ transform: 'skewX(-25deg) translateX(-50%)' }} /> {/* Changed lime-accent to dark-accent */}
        <div className="absolute top-0 right-0 w/2 h-full bg-gradient-to-l from-gold/10 via-transparent to-transparent" style={{ transform: 'skewX(25deg) translateX(50%)' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center justify-center h-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 font-montserrat tracking-tighter text-shadow-lg">
            {staticTitle}
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary mb-4 max-w-3xl mx-auto text-shadow font-light">
            {staticSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-2"
        >
          <Button 
            onClick={() => window.open('https://wa.me/50671032432', '_blank')} 
            variant="hero"
            size="lg"
            className="font-bold px-10"
          >
            Activa tu visión
          </Button>
        </motion.div>

        {/* Downward arrow icon */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.5,
          }}
          className="mt-8 text-white"
        >
          <ArrowDown size={32} />
        </motion.div>
      </div>

      {/* Audio Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={toggleAudio}
        className="absolute bottom-8 right-8 z-30 p-3 rounded-full bg-black/40 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-md border border-white/10 group"
        aria-label={isMuted ? "Activar sonido" : "Silenciar video"}
      >
        {isMuted ? (
          <VolumeX size={24} className="group-hover:scale-110 transition-transform" />
        ) : (
          <Volume2 size={24} className="group-hover:scale-110 transition-transform" />
        )}
      </motion.button>
    </section>
  );
};

export default Hero;