import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Clock, Calendar } from 'lucide-react';
import ResponsiveMedia from './ResponsiveMedia';

/**
 * PortfolioV2Modal - Modal/Lightbox con navegación anterior/siguiente
 */
const PortfolioV2Modal = ({ 
  item, 
  items, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev,
  isOpen 
}) => {
  const modalRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

  // Manejar tecla ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    // Trap focus dentro del modal
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements?.[0];
    const lastElement = focusableElements?.[focusableElements.length - 1];

    const handleTab = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTab);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleTab);
    };
  }, [isOpen, onClose]);

  // Navegación con teclas
  useEffect(() => {
    if (!isOpen) return;

    const handleArrowKeys = (e) => {
      if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };

    document.addEventListener('keydown', handleArrowKeys);
    return () => document.removeEventListener('keydown', handleArrowKeys);
  }, [isOpen, onNext, onPrev]);

  // Reproducir video automáticamente cuando se abre el modal o cambia el item
  useEffect(() => {
    if (isOpen && item && (item.videoUrl || item.type === 'video')) {
      // Pequeño delay para asegurar que el video esté renderizado
      const timer = setTimeout(() => {
        setShouldPlayVideo(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setShouldPlayVideo(false);
    }
  }, [isOpen, item]);

  // Guardar referencia del video
  const handleVideoRef = (videoElement) => {
    videoRef.current = videoElement;
    // Si el video ya está cargado, reproducirlo inmediatamente
    if (videoElement && shouldPlayVideo) {
      videoElement.play().catch(err => {
        console.log('Error al reproducir video en modal:', err);
      });
    }
  };

  if (!item || !isOpen) return null;

  const categoryLabel = 
    item.category === 'events' ? 'Eventos' : 
    item.category === 'video' ? 'Video Musical' : 
    item.category === 'social' ? 'Redes Sociales' :
    item.category === 'photography' ? 'Fotografía' : item.category;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pf2-modal-backdrop fixed inset-0 bg-black/95 backdrop-blur-md z-[9998]"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="pf2-modal fixed inset-4 md:inset-8 lg:inset-16 z-[9999] bg-[#050508] border border-white/10 rounded-lg overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="pf2-modal-title"
          >
            {/* Header con Close Button */}
            <div className="pf2-modal-header flex items-center justify-between p-4 md:p-6 border-b border-white/10">
              <h2 id="pf2-modal-title" className="text-xl md:text-2xl font-semibold text-white">
                {item.title}
              </h2>
              <button
                onClick={onClose}
                className="pf2-modal-close p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-sm transition-all duration-200"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Media Section */}
            <div className="pf2-modal-media flex-1 relative bg-black overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <ResponsiveMedia
                  videoUrl={item.videoUrl}
                  imageUrl={item.imageUrl}
                  objectFit="contain"
                  objectPosition="center"
                  placeholderRatio={item.aspectRatio}
                  shouldPlay={shouldPlayVideo}
                  onVideoRef={handleVideoRef}
                  showControls={true}
                  className="w-full h-full max-w-full max-h-full"
                />
              </div>

              {/* Navigation Arrows */}
              {items.length > 1 && (
                <>
                  <button
                    onClick={onPrev}
                    className="pf2-modal-nav pf2-modal-nav-prev absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:text-white transition-all duration-200 flex items-center justify-center z-10"
                    aria-label={item.videoUrl ? "Video anterior" : "Imagen anterior"}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={onNext}
                    className="pf2-modal-nav pf2-modal-nav-next absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm border border-white/20 text-white hover:text-white transition-all duration-200 flex items-center justify-center z-10"
                    aria-label={item.videoUrl ? "Video siguiente" : "Imagen siguiente"}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Info Section */}
            <div className="pf2-modal-info p-6 md:p-8 bg-[#050508] border-t border-white/10 overflow-y-auto max-h-[40vh]">
              <div className="max-w-4xl mx-auto space-y-6">
                {/* Category & Meta */}
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-normal tracking-[0.15em] uppercase rounded-sm">
                    {categoryLabel}
                  </span>
                  {item.duration && (
                    <div className="flex items-center gap-1.5 text-white/60 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                  )}
                  {item.date && (
                    <div className="flex items-center gap-1.5 text-white/60 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-white/70 text-base leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Client */}
                {item.client && (
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/50 text-sm">
                      <span className="text-white/70 font-medium">Cliente:</span> {item.client}
                    </p>
                  </div>
                )}

                {/* Counter */}
                {items.length > 1 && (
                  <div className="pt-4 border-t border-white/10 text-white/40 text-sm">
                    {currentIndex + 1} / {items.length}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PortfolioV2Modal;
