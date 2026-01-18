
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, HelpCircle, Zap, ShieldCheck } from 'lucide-react';
import { cn } from "@/lib/utils";

const faqs = [
  {
    icon: <Zap className="w-5 h-5 text-cyan-400" />,
    question: '¿Incluye música y licencias?',
    answer: 'Absolutamente. Todos nuestros paquetes incluyen una selección premium de música con licencias comerciales aptas para uso en redes sociales (Instagram, TikTok, YouTube). Nos encargamos de todo el aspecto legal para que tu contenido sea 100% seguro y profesional.'
  },
  {
    icon: <MessageCircle className="w-5 h-5 text-purple-400" />,
    question: '¿Cuál es el tiempo de entrega?',
    answer: 'Entendemos la velocidad del mundo digital. El tiempo estándar es de 5-7 días hábiles. Para clientes con necesidades urgentes, nuestro paquete Premium ofrece prioridad de 3 días, y contamos con un servicio exprés de 48h disponible por un costo adicional.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    question: '¿Puedo solicitar cambios?',
    answer: 'Tu satisfacción es nuestra prioridad. Cada proyecto incluye una ronda completa de ajustes sin costo adicional. Para rondas posteriores, aplicamos una tarifa estándar. Nuestra metodología de pre-producción suele garantizar que el primer corte esté alineado con tu visión.'
  },
  {
    icon: <HelpCircle className="w-5 h-5 text-amber-400" />,
    question: '¿Quién posee los derechos?',
    answer: 'Tú obtienes los derechos comerciales completos para distribuir el contenido en tus plataformas digitales y web. BWAY Productions conserva el derecho de autor moral y el permiso para exhibir la obra en nuestro portafolio como muestra de nuestro trabajo creativo.'
  }
];

const FaqItem = ({ item, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border transition-all duration-300",
        isOpen 
          ? "bg-white/5 border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.05)]" 
          : "bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
      )}
    >
      <button
        onClick={onClick}
        className="relative flex w-full items-center justify-between p-6 md:p-8 text-left outline-none"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <div className={cn(
            "flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-300",
            isOpen ? "bg-cyan-500/10 scale-110" : "bg-white/5 group-hover:bg-white/10"
          )}>
            {item.icon}
          </div>
          <span className={cn(
            "text-lg md:text-xl font-semibold transition-colors duration-300",
            isOpen ? "text-white" : "text-white/80 group-hover:text-white"
          )}>
            {item.question}
          </span>
        </div>
        
        <div className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ml-4 shrink-0",
          isOpen 
            ? "border-cyan-500/50 bg-cyan-500 text-white rotate-180" 
            : "border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white"
        )}>
           {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 pl-[4.5rem] md:pl-[5.5rem]">
              <p className="text-base md:text-lg text-white/60 font-light leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative Glow on Open */}
      {isOpen && (
        <motion.div 
          layoutId="activeGlow"
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#050508] relative overflow-hidden">
      {/* Dynamic Background - Gradientes suaves sin blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          
          {/* Header Section - Sticky on Desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/80">
                Soporte & Ayuda
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat text-white tracking-tight leading-none mb-6">
              Preguntas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Frecuentes
              </span>
            </h2>
            
            <p className="text-white/60 text-lg font-light leading-relaxed mb-8 max-w-md">
              Resolvemos tus dudas para que puedas enfocarte en lo importante: crear contenido increíble. ¿No encuentras lo que buscas?
            </p>

            <button 
              onClick={() => window.location.href = '/contacto'}
              className="group flex items-center gap-3 text-cyan-400 font-semibold tracking-wide hover:text-cyan-300 transition-colors"
            >
              <span className="border-b border-cyan-400/30 group-hover:border-cyan-300 transition-colors pb-0.5">
                Contáctanos directamente
              </span>
              <MessageCircle className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* FAQ Items List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                index={index}
                item={faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;
