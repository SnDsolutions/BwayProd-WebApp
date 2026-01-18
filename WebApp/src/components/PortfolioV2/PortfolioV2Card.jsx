import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Calendar, Image as ImageIcon } from 'lucide-react';
import ResponsiveMedia from './ResponsiveMedia';

/**
 * PortfolioV2Card - Card individual con overlay y animaciones
 * Soporta videos e imágenes
 * Reproduce video en hover
 */
const PortfolioV2Card = ({ 
  item, 
  onClick,
  index,
  detectedRatio 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);
  const videoRef = useRef(null);
  const isVideo = item.type === 'video' || !!item.videoUrl;
  const isImage = item.type === 'image' || !!item.imageUrl;

  const handleRatioDetected = (ratio) => {
    if (detectedRatio) {
      detectedRatio(item.id, ratio);
    }
  };

  // Guardar referencia del video
  const handleVideoRef = (videoElement) => {
    videoRef.current = videoElement;
  };

  // Controlar reproducción en hover
  useEffect(() => {
    if (isVideo && videoRef.current) {
      if (isHovered) {
        setShouldPlayVideo(true);
      } else {
        setShouldPlayVideo(false);
      }
    }
  }, [isHovered, isVideo]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ scale: 1.02 }}
      className="pf2-card group relative overflow-hidden rounded-lg cursor-pointer bg-black/20 border border-white/5 hover:border-white/15 transition-all duration-300 w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(item)}
    >
      {/* Media Container */}
      <div className="pf2-card-media absolute inset-0 w-full h-full">
        <ResponsiveMedia
          videoUrl={item.videoUrl}
          imageUrl={item.imageUrl}
          objectFit="cover"
          objectPosition={item.objectPosition || 'center'}
          onRatioDetected={handleRatioDetected}
          placeholderRatio={item.aspectRatio || 16/9}
          shouldPlay={shouldPlayVideo}
          onVideoRef={handleVideoRef}
          className="w-full h-full"
        />
      </div>

      {/* Gradient Overlay */}
      <div 
        className={`
          pf2-card-overlay
          absolute
          inset-0
          bg-gradient-to-t
          from-black/80
          via-black/20
          to-transparent
          transition-opacity
          duration-300
          ${isHovered ? 'opacity-100' : 'opacity-60'}
        `}
      />

      {/* Content Overlay */}
      <div className="pf2-card-content absolute inset-0 p-6 flex flex-col justify-end z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ 
            y: isHovered ? 0 : 10, 
            opacity: isHovered ? 1 : 0.8 
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Category Badge */}
          <div className="mb-3">
            <span className="pf2-card-category px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-[10px] font-normal tracking-[0.15em] uppercase rounded-sm">
              {item.category === 'events' ? 'Eventos' : 
               item.category === 'video' ? 'Video Musical' : 
               item.category === 'social' ? 'Redes Sociales' :
               item.category === 'photography' ? 'Fotografía' : item.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="pf2-card-title text-xl md:text-2xl font-semibold text-white mb-3 leading-tight">
            {item.title}
          </h3>

          {/* Meta Info */}
          <div className="pf2-card-meta flex items-center gap-4 text-white/70 text-xs font-light">
            {item.duration && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{item.duration}</span>
              </div>
            )}
            {item.date && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="pf2-card-cta mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-sm font-medium rounded-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            Ver
          </motion.button>
        </motion.div>
      </div>

      {/* Play/View Icon */}
      {isVideo && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0.8, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="pf2-card-play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center z-20 pointer-events-none"
        >
          <Play className="w-6 h-6 text-white ml-1 fill-white" />
        </motion.div>
      )}
      {isImage && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0.8, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="pf2-card-view absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center z-20 pointer-events-none"
        >
          <ImageIcon className="w-6 h-6 text-white" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default PortfolioV2Card;
