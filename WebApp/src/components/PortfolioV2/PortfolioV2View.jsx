import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Video, Image as ImageIcon } from 'lucide-react';
import PortfolioV2Grid from './PortfolioV2Grid';
import PortfolioV2Modal from './PortfolioV2Modal';

/**
 * PortfolioV2View - Vista principal con tabs de Videos y Fotos
 * Soporta Videos y Fotos
 */
const PortfolioV2View = ({ videos = [], photos = [] }) => {
  const [activeTab, setActiveTab] = useState('videos'); // 'videos' o 'photos'
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [detectedRatios, setDetectedRatios] = useState({});

  // Items activos según el tab seleccionado
  const filteredItems = useMemo(() => {
    return activeTab === 'videos' ? videos : photos;
  }, [activeTab, videos, photos]);

  // Manejar detección de ratio
  const handleRatioDetected = useCallback((itemId, ratio) => {
    setDetectedRatios(prev => ({
      ...prev,
      [itemId]: ratio
    }));
  }, []);

  // Manejar click en item
  const handleItemClick = useCallback((item) => {
    const index = filteredItems.findIndex(i => i.id === item.id);
    setSelectedIndex(index);
    setSelectedItem(item);
  }, [filteredItems]);

  // Navegación en modal
  const handleNext = useCallback(() => {
    if (filteredItems.length === 0) return;
    const nextIndex = (selectedIndex + 1) % filteredItems.length;
    setSelectedIndex(nextIndex);
    setSelectedItem(filteredItems[nextIndex]);
  }, [filteredItems, selectedIndex]);

  const handlePrev = useCallback(() => {
    if (filteredItems.length === 0) return;
    const prevIndex = (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedIndex(prevIndex);
    setSelectedItem(filteredItems[prevIndex]);
  }, [filteredItems, selectedIndex]);

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  return (
    <div className="pf2-view min-h-screen bg-[#050508] relative overflow-hidden pb-24 -mt-24 pt-24">
      {/* Dynamic Background - Gradientes suaves sin blur */}
      <div className="pf2-view-bg absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full opacity-30" 
          style={{ 
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0) 70%)',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }} 
        />
        <div 
          className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] rounded-full opacity-30" 
          style={{ 
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0) 70%)',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }} 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-16 md:pt-24 relative z-10 max-w-7xl">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pf2-hero mb-16 md:mb-20"
        >
          <div className="max-w-3xl mb-12">
            <h1 className="pf2-hero-title text-5xl md:text-6xl lg:text-7xl font-black font-montserrat tracking-tight leading-[0.95] mb-6">
              <div className="text-white drop-shadow-[0_0_15px_rgba(135,206,250,0.5)]">
                Portafolio
              </div>
            </h1>
            <p className="pf2-hero-subtitle text-white/60 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
              Producciones audiovisuales que capturan momentos y cuentan historias con excelencia cinematográfica.
            </p>
          </div>

          {/* Tabs: Videos / Fotos */}
          <div className="pf2-tabs flex gap-2 mb-12">
            <button
              onClick={() => setActiveTab('videos')}
              className={`
                pf2-tab
                flex
                items-center
                gap-2
                px-6
                py-3
                text-sm
                font-medium
                transition-all
                duration-300
                rounded-full
                border
                ${
                  activeTab === 'videos'
                    ? 'bg-white/10 border-white/30 text-white backdrop-blur-sm'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white/90 hover:border-white/20 hover:bg-white/8'
                }
              `}
            >
              <Video className="w-4 h-4" />
              <span>Videos</span>
              {videos.length > 0 && (
                <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs">
                  {videos.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('photos')}
              className={`
                pf2-tab
                flex
                items-center
                gap-2
                px-6
                py-3
                text-sm
                font-medium
                transition-all
                duration-300
                rounded-full
                border
                ${
                  activeTab === 'photos'
                    ? 'bg-white/10 border-white/30 text-white backdrop-blur-sm'
                    : 'bg-white/5 border-white/10 text-white/60 hover:text-white/90 hover:border-white/20 hover:bg-white/8'
                }
              `}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Fotos</span>
              {photos.length > 0 && (
                <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs">
                  {photos.length}
                </span>
              )}
            </button>
          </div>
        </motion.div>

        {/* Grid */}
        {filteredItems.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PortfolioV2Grid
              items={filteredItems}
              onItemClick={handleItemClick}
              detectedRatios={detectedRatios}
              onRatioDetected={handleRatioDetected}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="pf2-empty text-center py-20"
          >
            <p className="text-white/40 text-lg font-light">
              {activeTab === 'videos' 
                ? 'No hay videos disponibles.'
                : 'No hay fotos disponibles.'}
            </p>
          </motion.div>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <PortfolioV2Modal
          item={selectedItem}
          items={filteredItems}
          currentIndex={selectedIndex}
          onClose={handleCloseModal}
          onNext={handleNext}
          onPrev={handlePrev}
          isOpen={!!selectedItem}
        />
      )}
    </div>
  );
};

export default PortfolioV2View;
