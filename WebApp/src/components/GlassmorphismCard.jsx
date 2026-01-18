import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Play, ExternalLink, Sparkles } from 'lucide-react';

const GlassmorphismCard = ({ 
  title, 
  description, 
  image, 
  category, 
  type = 'image',
  className = '',
  delay = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Glassmorphism Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl"
        animate={{
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(203, 234, 106, 0.1), rgba(207, 175, 106, 0.05))'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-lime-accent/20 to-soft-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        animate={{
          scale: isHovered ? 1.1 : 0.8,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Category Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          <div className="w-2 h-2 bg-lime-accent rounded-full animate-pulse" />
          <span className="text-sm font-medium text-lime-accent bg-lime-accent/10 px-3 py-1 rounded-full">
            {category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-2xl font-bold text-white mb-4 group-hover:text-lime-accent transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-text-secondary mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          {description}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          <motion.button
            className="group/btn relative px-6 py-3 bg-lime-accent/20 backdrop-blur-sm border border-lime-accent/30 rounded-full text-lime-accent font-medium hover:bg-lime-accent hover:text-grafito transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-lime-accent to-soft-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center">
              {type === 'video' ? (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Ver Video
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Proyecto
                </>
              )}
            </span>
          </motion.button>

          <motion.button
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-lime-accent/20 hover:border-lime-accent/50 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-4 h-4 text-white" />
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-6 h-6 text-lime-accent" />
        </motion.div>
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-lime-accent/50 to-soft-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundClip: 'padding-box',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor'
        }}
      />
    </motion.div>
  );
};

// Componente para sección con múltiples cards glassmorphism
export const GlassmorphismSection = ({ title, subtitle, cards, className = '' }) => {
  return (
    <section className={`py-20 bg-gradient-to-br from-grafito via-grafito-soft to-grafito ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">{title}</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <GlassmorphismCard
              key={index}
              {...card}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlassmorphismCard;

