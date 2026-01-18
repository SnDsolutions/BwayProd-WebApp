
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroParallax = ({
  products
}) => {
  // Split products into rows. 
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  
  const ref = useRef(null);
  
  // Vertical scroll parallax logic
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Base parallax transforms based on scroll
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 100]), springConfig);

  // Manual Drag Logic
  const dragX = useMotionValue(0);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div
        ref={ref}
        className="h-[350vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-grafito"
      >
        <Header />
        
        {/* Container that handles the 3D transforms */}
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className=""
        >
          {/* Drag Wrapper */}
          <motion.div 
            className="cursor-grab active:cursor-grabbing w-full"
            drag="x"
            dragConstraints={{ left: -2000, right: 2000 }}
            dragElastic={0.1}
            style={{ x: dragX }}
          >
            {/* Rows */}
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-24">
              {firstRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                  onClick={handleCardClick}
                />
              ))}
            </motion.div>
            
            <motion.div className="flex flex-row space-x-10 mb-24">
              {secondRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateXReverse}
                  key={product.title}
                  onClick={handleCardClick}
                />
              ))}
            </motion.div>
            
            <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
              {thirdRow.map((product) => (
                <ProductCard
                  product={product}
                  translate={translateX}
                  key={product.title}
                  onClick={handleCardClick}
                />
              ))}
            </motion.div>

          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ServiceModal product={selectedProduct} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-10 pointer-events-none">
      <div className="pointer-events-auto">
        <h1 className="text-4xl md:text-7xl font-bold font-montserrat text-white text-shadow-lg">
          Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Servicios</span>
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-300">
          Transformamos ideas en experiencias visuales inolvidables. Desliza o haz scroll para explorar nuestra gama de paquetes diseñados para cada necesidad.
        </p>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  onClick
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -15, 
      }}
      onClick={() => onClick(product)}
      key={product.title}
      className="group/product h-[22rem] w-[26rem] relative flex-shrink-0 cursor-pointer bg-black rounded-xl border border-white/10 overflow-hidden"
    >
      <div className="block group-hover/product:shadow-2xl h-full w-full">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl opacity-60 group-hover/product:opacity-40 transition-opacity duration-300"
          alt={product.title}
        />
      </div>
      
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover/product:opacity-100 transition-opacity duration-300"></div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6">
         <div className="transform translate-y-4 group-hover/product:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-2 py-1 rounded-full text-[10px] font-semibold bg-cyan-500/20 text-cyan-400 mb-2 border border-cyan-500/30">
              {product.category || "Servicio"}
            </span>
            
            <h2 className="text-white font-bold text-2xl font-montserrat drop-shadow-md mb-1 leading-tight">
              {product.title}
            </h2>
            
            {/* Price removed as requested */}
            
            <p className="text-gray-300 text-xs mt-1 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 line-clamp-2">
              {product.description}
            </p>
         </div>
      </div>
    </motion.div>
  );
};

const ServiceModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-grafito border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full md:w-1/2 h-64 md:h-auto relative min-h-[300px]">
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-grafito via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-grafito opacity-90"></div>
          
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-10">
             <span className="px-3 py-1 rounded-full text-sm font-bold bg-purple-600 text-white shadow-lg">
                {product.price}
             </span>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <span className="text-cyan-400 font-semibold tracking-wider text-sm mb-1 uppercase">
            {product.category}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-2">
            {product.title}
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6"></div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="space-y-3 mb-8 bg-black/20 p-6 rounded-xl border border-white/5">
            <h4 className="text-white font-semibold mb-2">¿Qué incluye?</h4>
            {product.details && product.details.map((detail, index) => (
              <div key={index} className="flex items-center text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-sm">{detail}</span>
              </div>
            ))}
            {!product.details && (
                <div className="text-gray-500 text-sm italic">Detalles disponibles bajo cotización.</div>
            )}
          </div>

          <div className="mt-auto pt-4 flex gap-4 flex-col sm:flex-row">
             <Button 
                onClick={() => window.location.href = product.link}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 flex-1"
              >
                Reservar Ahora
              </Button>
              <Button 
                variant="outline" 
                onClick={onClose}
                className="border-white/20 hover:bg-white/10 flex-1"
              >
                Cerrar
              </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
