
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, List, Video, Edit3, Send, Settings, ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  { 
    icon: MessageSquare, 
    title: 'Briefing Inicial', 
    description: 'Definimos objetivos claros, audiencia meta y el mensaje central de tu proyecto en una sesión estratégica.' 
  },
  { 
    icon: List, 
    title: 'Preproducción', 
    description: 'Planificación meticulosa: guiones técnicos, búsqueda de locaciones y logística detallada para asegurar el éxito.' 
  },
  { 
    icon: Video, 
    title: 'Producción', 
    description: 'Ejecución cinematográfica con equipos de alta gama (Sony Cinema Line, Drones 4K) y dirección experta.' 
  },
  { 
    icon: Edit3, 
    title: 'Edición Avanzada', 
    description: 'Montaje narrativo, diseño sonoro inmersivo, color grading profesional y efectos visuales sutiles.' 
  },
  { 
    icon: Send, 
    title: 'Entrega + Ajustes', 
    description: 'Presentación del corte final para tu revisión, incluyendo una ronda de perfeccionamiento según tu feedback.' 
  },
  { 
    icon: Settings, 
    title: 'Optimización', 
    description: 'Adaptación de formatos para maximizar el impacto en cada plataforma digital específica.' 
  },
];

const WorkflowCard = ({ step, index, totalSteps }) => {
  const isEven = index % 2 === 0;
  const isLast = index === totalSteps - 1;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group"
    >
      {/* Connector Line (Desktop) - Mejorado */}
      {!isLast && (
        <motion.div 
          className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gradient-to-r from-white/10 to-transparent z-0 transform -translate-y-1/2"
          whileHover={{ 
            background: "linear-gradient(to right, rgba(34, 211, 238, 0.5), transparent)",
            width: "3rem"
          }}
          transition={{ duration: 0.5 }}
        />
      )}
      
      {/* Card Content - Cinematográfico */}
      <div className="relative z-10 h-full p-[1px] rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-cyan-500/30 hover:via-purple-500/30 hover:to-pink-500/20 transition-all duration-500 overflow-hidden">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500 blur-xl" />
        
        <div className="relative h-full bg-gradient-to-br from-[#0F0F10] to-[#0a0a0f] rounded-2xl p-6 md:p-8 flex flex-col items-start border border-white/10 group-hover:border-white/20 transition-all duration-500 backdrop-blur-sm">
          
          {/* Step Number Badge - Cinematográfico */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br from-black to-[#0a0a0f] border-2 border-white/10 flex items-center justify-center font-montserrat font-bold text-white/40 group-hover:text-cyan-300 group-hover:border-cyan-400/50 transition-all shadow-lg shadow-black/50 z-20"
          >
            <span className="text-sm">{index + 1}</span>
          </motion.div>

          {/* Icon Container - Mejorado */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="mb-6 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 group-hover:border-cyan-400/30 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-500" />
            <step.icon className="relative w-8 h-8 text-cyan-400/80 group-hover:text-cyan-300 transition-colors z-10" />
          </motion.div>

          {/* Text Content - Mejorado */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300 font-montserrat">
            {step.title}
          </h3>
          <p className="text-white/60 text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300">
            {step.description}
          </p>

          {/* Bottom highlight bar - Mejorado */}
          <div className="mt-auto pt-6 w-full">
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="h-full w-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-bl-2xl transition-all duration-500 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};

const Workflow = () => {
  return (
    <section id="proceso" className="relative py-24 md:py-32 bg-[#050508] overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section - Estilo Cinematográfico */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">Metodología BWAY</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black font-montserrat mb-8 leading-[0.95]"
          >
            <div className="text-white drop-shadow-[0_0_15px_rgba(135,206,250,0.5)] mb-2">
              Nuestro Proceso
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 drop-shadow-[0_0_15px_rgba(135,206,250,0.6)]">
              Creativo
            </div>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Transformamos el caos creativo en una producción estructurada. Cada paso está diseñado para garantizar calidad cinematográfica y resultados que superan expectativas.
          </motion.p>
        </div>

        {/* Steps Grid - Cinematográfico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <WorkflowCard 
              key={index} 
              step={step} 
              index={index} 
              totalSteps={steps.length} 
            />
          ))}
        </div>

        {/* Call to Action Mini-Section - Mejorado */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }}
            onClick={() => window.open('https://wa.me/50671032432?text=Hola,%20estoy%20interesado%20en%20elevar%20mi%20marca%20al%20siguiente%20nivel', '_blank')}
            className="inline-flex items-center gap-3 text-white/70 text-sm md:text-base bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            <span className="font-light">¿Listo para elevar tu marca al siguiente nivel?</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
