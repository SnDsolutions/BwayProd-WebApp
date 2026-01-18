import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Play, ExternalLink } from 'lucide-react';

const ImageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/eb9e4b1cbdf93bdcff74c6cb2660d687.jpg',
      title: 'Concierto en Vivo',
      category: 'Música',
      type: 'video'
    },
    {
      id: 2,
      src: 'https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/b2122122121212121212121212121212.mp4',
      title: 'Producción Corporativa',
      category: 'Empresas',
      type: 'video'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
      title: 'Fotografía de Producto',
      category: 'E-commerce',
      type: 'image'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop',
      title: 'Evento Corporativo',
      category: 'Eventos',
      type: 'image'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      title: 'Branding Visual',
      category: 'Marca',
      type: 'image'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      title: 'Cobertura Aérea',
      category: 'Drone',
      type: 'video'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-20 bg-grafito">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Nuestro</span>{' '}
            <span 
              className="bg-gradient-to-r from-lime-accent to-soft-gold bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(45deg, #CBEA6A, #CFAF6A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Portafolio
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Descubre algunos de nuestros trabajos más destacados. Cada proyecto cuenta una historia única.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-surface-highlight border border-dark-gray-border hover:border-lime-accent/50 transition-all duration-500"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {image.type === 'video' ? (
                  <video
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={image.src}
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-grafito via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Play Button for Videos */}
                {image.type === 'video' && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-lime-accent/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-lime-accent transition-colors duration-300">
                      <Play className="w-6 h-6 text-grafito ml-1" />
                    </div>
                  </motion.div>
                )}

                {/* View Button */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                >
                  <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-lime-accent/20 transition-colors duration-300">
                    <Eye className="w-4 h-4 text-white" />
                  </button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-lime-accent bg-lime-accent/10 px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {image.type === 'video' ? 'Video' : 'Imagen'}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-lime-accent transition-colors duration-300">
                  {image.title}
                </h3>

                {/* Animated underline */}
                <motion.div
                  className="w-0 h-0.5 bg-gradient-to-r from-lime-accent to-soft-gold"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Hover Effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-lime-accent/5 to-soft-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-lime-accent/20 to-soft-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-lime-accent to-soft-gold text-grafito font-semibold rounded-full overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-soft-gold to-lime-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center">
              Ver Todo el Portafolio
              <ExternalLink className="ml-2 w-4 h-4" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal for selected image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.type === 'video' ? (
                <video
                  className="w-full h-full object-cover"
                  src={selectedImage.src}
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              )}
              
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <span className="text-white text-xl">×</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageGallery;

