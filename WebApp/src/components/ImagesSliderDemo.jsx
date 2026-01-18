
import React from 'react';
import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function ImagesSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1686061594212-8904e38bc1f2",
    "https://images.unsplash.com/photo-1470074087292-145fb2e0de50",
    "https://images.unsplash.com/photo-1694676910468-f5241b387ec3",
  ];

  return (
    <ImagesSlider className="h-[40rem] md:h-[50rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center relative px-4 text-center max-w-5xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6">
          <Play className="w-3 h-3 text-cyan-400 fill-cyan-400" />
          <span className="text-xs font-medium text-cyan-300 uppercase tracking-widest">Producción Audiovisual Premium</span>
        </div>

        <motion.p 
          className="font-montserrat font-extrabold text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 leading-tight text-shadow-lg"
        >
          Capturamos tu visión <br /> con <span className="text-cyan-400">calidad cinematográfica</span>
        </motion.p>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
           Desde videos corporativos de alto impacto hasta fotografía comercial que define marcas. Nuestro equipo creativo transforma tus ideas en obras maestras visuales.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <Button 
            asChild 
            size="lg" 
            variant="default" 
          >
            <Link to="/contacto">
              Inicia tu Proyecto <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
          >
            <Link to="/portafolio">
              Ver Portafolio
            </Link>
          </Button>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
