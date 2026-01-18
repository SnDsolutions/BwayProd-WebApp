import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounters = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [counters, setCounters] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    awards: 0
  });

  const targetValues = {
    clients: 150,
    projects: 300,
    years: 5,
    awards: 25
  };

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 FPS
    const stepDuration = duration / steps;

    const animateCounter = (key, target) => {
      let current = 0;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    // Start all animations with slight delays
    Object.keys(targetValues).forEach((key, index) => {
      setTimeout(() => {
        animateCounter(key, targetValues[key]);
      }, index * 200);
    });
  }, [isInView]);

  const stats = [
    {
      number: counters.clients,
      label: 'Clientes Satisfechos',
      suffix: '+',
      description: 'Marcas que confían en nosotros'
    },
    {
      number: counters.projects,
      label: 'Proyectos Completados',
      suffix: '+',
      description: 'Producciones audiovisuales'
    },
    {
      number: counters.years,
      label: 'Años de Experiencia',
      suffix: '+',
      description: 'En la industria creativa'
    },
    {
      number: counters.awards,
      label: 'Reconocimientos',
      suffix: '+',
      description: 'Premios y certificaciones'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-grafito via-grafito-soft to-grafito">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Cada número cuenta una historia.</span>
            <br />
            <span 
              className="bg-gradient-to-r from-lime-accent to-soft-gold bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #CBEA6A, #CFAF6A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Y estamos aquí para ayudarte a darle sentido.
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            No solo diseñamos, impulsamos resultados. Nuestras estrategias creativas están construidas para hacer crecer tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: 'easeOut'
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative">
                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-lime-accent/10 to-soft-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                />
                
                {/* Main content */}
                <div className="relative bg-surface-highlight/50 backdrop-blur-sm border border-lime-accent/20 rounded-2xl p-8 group-hover:border-lime-accent/40 transition-all duration-300">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-lime-accent mb-2"
                    key={stat.number}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number.toLocaleString()}{stat.suffix}
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-text-secondary">
                    {stat.description}
                  </p>

                  {/* Animated underline */}
                  <motion.div
                    className="w-0 h-0.5 bg-gradient-to-r from-lime-accent to-soft-gold mx-auto mt-4"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '60%' } : { width: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional animated elements */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 text-lime-accent"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          >
            <div className="w-2 h-2 bg-lime-accent rounded-full" />
            <div className="w-2 h-2 bg-soft-gold rounded-full" />
            <div className="w-2 h-2 bg-lime-accent rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedCounters;

