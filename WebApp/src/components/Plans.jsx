
import React, { useState } from 'react';
import { 
  Check, 
  Calendar as CalendarIcon, 
  Info, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Clock, 
  Camera, 
  Music, 
  Users, 
  Filter,
  Sparkles,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

// --- Data Definitions ---

const socialMediaPlans = [
  {
    id: 'social-1',
    name: 'Básico 1 – Contenido Esencial',
    price: '₡165,000',
    priceWithIVA: '₡186,450 (IVA 13%)',
    description: 'Perfecto para lanzar una marca o actualizar redes. Recomendado para primera producción profesional.',
    recommendedFor: 'Primera producción profesional para lanzar o actualizar tu marca',
    features: [
      '1 video vertical optimizado para redes (9:16)',
      'Sesión fotográfica (1 hora)',
      '10 fotos profesionales editadas',
      'Edición profesional',
    ],
    highlight: false,
    category: 'social'
  },
  {
    id: 'social-2',
    name: 'Básico 2 – Contenido Pro',
    price: '₡215,000',
    priceWithIVA: '₡242,950 (IVA 13%)',
    description: 'Mejor relación valor–resultado.',
    recommendedFor: 'Empresas que quieren más visualización en redes sociales',
    features: [
      '1 reel vertical',
      '1 video profesional horizontal',
      '20 fotos profesionales editadas',
      '2 horas de sesión',
      'Corrección de color avanzada',
      'Textos simples para redes (opcional)',
    ],
    highlight: false,
    category: 'social'
  },
];

const professionalPlans = [
  {
    id: 'prof-1',
    name: 'Plan Quincenal – Presencia Constante',
    price: '₡185,000',
    priceWithIVA: '₡209,050 (IVA 13%)',
    description: 'Ahorro frente a contratación individual.',
    recommendedFor: 'Empresas que buscan ahorro con presencia constante',
    features: [
      '1 video profesional',
      '1 reel vertical',
      '10 fotos editadas',
      'Corrección de color',
      'Calendario sugerido de publicación',
      'Entrega estimada: 5 días hábiles',
    ],
    highlight: false,
    category: 'professional'
  },
  {
    id: 'prof-2',
    name: 'Plan Mensual – Marca Activa',
    price: '₡290,000',
    priceWithIVA: '₡327,700 (IVA 13%)',
    description: 'Plan más solicitado. Ideal para crecimiento sostenido.',
    recommendedFor: 'Empresas que buscan presencia constante en redes sociales',
    features: [
      '2 videos profesionales horizontales',
      '2 reels verticales',
      '15 fotos editadas',
      'Edición avanzada',
      'Coherencia visual entre piezas del mes',
      'Optimización multiplataforma',
      'Entrega estimada: 5 días hábiles',
    ],
    highlight: false,
    category: 'professional'
  },
  {
    id: 'prof-3',
    name: 'Plan Ejecutivo Premium – Marca Líder',
    price: '₡385,000',
    priceWithIVA: '₡435,050 (IVA 13%)',
    description: 'Pensado para marcas que buscan liderar.',
    recommendedFor: 'Marcas que buscan liderar en su industria',
    features: [
      '4 videos profesionales',
      '4 reels verticales',
      '30 fotos editadas',
      'Uso de múltiples encuadres y movimientos (1 solo operador)',
      'Dron incluido si se requiere',
      'Dirección artística',
      'Prioridad en agenda',
      'Entrega estimada: 3 días hábiles',
    ],
    highlight: false,
    category: 'professional'
  },
];

const eventPlans = [
  {
    id: 'evt-1',
    name: 'Evento Bronce – Recuerdos Esenciales',
    price: '₡135,000',
    priceWithIVA: '₡152,550 (IVA 13%)',
    recommendedFor: 'Eventos que buscan recuerdos esenciales con presupuesto ajustado',
    features: [
      'Cobertura continua del evento',
      '30 fotos profesionales editadas',
      'Video recap (1 minuto)',
      'Edición profesional',
      'Entrega estimada: 5–7 días hábiles'
    ],
    highlight: false,
    category: 'events'
  },
  {
    id: 'evt-2',
    name: 'Evento Plata – Celebración Completa',
    price: '₡200,000',
    priceWithIVA: '₡226,000 (IVA 13%)',
    description: 'Equilibrio perfecto entre recuerdo y emoción.',
    recommendedFor: 'Eventos que buscan equilibrio entre calidad y precio',
    features: [
      'Cobertura continua',
      '50 fotos profesionales editadas',
      'Video recap cinematográfico (1–2 minutos)',
      'Corrección de color profesional',
      'Selección curada de mejores momentos',
      'Entrega estimada: 5–7 días hábiles'
    ],
    highlight: false,
    category: 'events'
  },
  {
    id: 'evt-3',
    name: 'Evento Oro – Experiencia Premium',
    price: '₡280,000',
    priceWithIVA: '₡316,400 (IVA 13%)',
    recommendedFor: 'Eventos que buscan una experiencia premium cinematográfica',
    features: [
      'Cobertura completa con enfoque cinematográfico',
      '80 fotos premium editadas',
      'Video cinematográfico (2–3 minutos)',
      'Reel vertical',
      'Narrativa visual del evento',
      'Entrega estimada: 5 días hábiles'
    ],
    highlight: false,
    category: 'events'
  },
];

const weddingPlans = [
  {
    id: 'wed-1',
    name: 'Boda Esencial – El Comienzo',
    price: '₡550,000',
    priceWithIVA: '₡621,500 (IVA 13%)',
    recommendedFor: 'Parejas que buscan capturar los momentos clave de su boda',
    features: [
      'Cobertura de momentos clave (ceremonia + detalles)',
      '150 fotos profesionales editadas',
      'Video highlight (3–4 minutos)',
      'Música licenciada',
      'Entrega estimada: 15 días hábiles'
    ],
    highlight: false,
    category: 'weddings'
  },
  {
    id: 'wed-2',
    name: 'Boda Cinematográfica – Nuestra Historia',
    price: '₡850,000',
    priceWithIVA: '₡960,500 (IVA 13%)',
    description: 'Opción más elegida por parejas.',
    recommendedFor: 'Parejas que buscan una narrativa emocional completa',
    features: [
      'Cobertura narrativa del día',
      '250 fotos profesionales editadas',
      'Video cinematográfico (5–7 minutos)',
      'Reel vertical',
      'Narrativa emocional guiada por música',
      'Corrección de color cinematográfica',
      'Entrega estimada: 12–15 días hábiles'
    ],
    highlight: false,
    category: 'weddings'
  },
  {
    id: 'wed-3',
    name: 'Boda Premium – Película de Vida',
    price: '₡1,250,000',
    priceWithIVA: '₡1,412,500 (IVA 13%)',
    recommendedFor: 'Parejas que buscan una película completa de su día especial',
    features: [
      'Cobertura completa con enfoque documental',
      '400 fotos premium editadas',
      'Película cinematográfica (10–12 minutos)',
      'Reel + teaser',
      'Tomas con dron incluidas',
      'Edición storytelling',
      'Entrega estimada: 10–12 días hábiles'
    ],
    highlight: false,
    category: 'weddings'
  },
];

const massiveEventPlans = [
  {
    id: 'mass-1',
    name: 'Masivo Esencial – Cobertura Documental',
    price: '₡350,000',
    priceWithIVA: '₡395,500 (IVA 13%)',
    recommendedFor: 'Eventos masivos que buscan cobertura documental básica',
    features: [
      'Cobertura general de ambiente y público',
      '60 fotos profesionales editadas',
      'Video recap (1–2 minutos)',
      'Corrección de color',
      'Entrega estimada: 7–10 días hábiles'
    ],
    highlight: false,
    category: 'massive'
  },
  {
    id: 'mass-2',
    name: 'Masivo Pro – Cobertura Cinematográfica',
    price: '₡550,000',
    priceWithIVA: '₡621,500 (IVA 13%)',
    description: 'Recomendado para marcas y producción profesional.',
    recommendedFor: 'Marcas y producción profesional que buscan impacto visual',
    features: [
      'Cobertura dinámica del evento',
      '120 fotos profesionales editadas',
      'Video cinematográfico (2–3 minutos)',
      'Reel vertical',
      'Planos de impacto para redes',
      'Corrección de color cinematográfica',
      'Entrega estimada: 7 días hábiles'
    ],
    highlight: false,
    category: 'massive'
  },
  {
    id: 'mass-3',
    name: 'Masivo Premium – Producción de Alto Nivel',
    price: '₡850,000',
    priceWithIVA: '₡960,500 (IVA 13%)',
    recommendedFor: 'Eventos masivos que requieren producción de alto nivel',
    features: [
      'Cobertura estratégica del evento',
      '200 fotos premium editadas',
      'Video cinematográfico (3–5 minutos)',
      '2 reels verticales',
      'Tomas con dron incluidas',
      'Material pensado para promoción post-evento',
      'Corrección de color premium',
      'Entrega estimada: 5–7 días hábiles'
    ],
    highlight: false,
    category: 'massive'
  },
];

const corporatePlans = [
  {
    id: 'corp-1',
    name: 'Corporativo Esencial – Imagen Institucional',
    price: '₡280,000',
    priceWithIVA: '₡316,400 (IVA 13%)',
    recommendedFor: 'Empresas que buscan establecer su imagen institucional',
    features: [
      'Video institucional profesional (1–2 min)',
      '20 fotos corporativas editadas',
      'Mensaje institucional claro y profesional',
    ],
    highlight: false,
    category: 'corporate'
  },
  {
    id: 'corp-2',
    name: 'Corporativo Pro – Autoridad de Marca',
    price: '₡420,000',
    priceWithIVA: '₡474,600 (IVA 13%)',
    recommendedFor: 'Empresas que buscan fortalecer su autoridad de marca',
    features: [
      'Video institucional cinematográfico (2–3 min)',
      '2 reels corporativos',
      '35 fotos corporativas premium',
      'Refuerzo visual de autoridad de marca',
    ],
    highlight: false,
    category: 'corporate'
  },
  {
    id: 'corp-3',
    name: 'Corporativo Premium – Presencia Ejecutiva',
    price: '₡650,000',
    priceWithIVA: '₡734,500 (IVA 13%)',
    recommendedFor: 'Empresas que buscan una presencia ejecutiva de alto nivel',
    features: [
      'Video institucional cinematográfico (3–4 min)',
      '4 reels ejecutivos',
      '60 fotos corporativas premium',
      'Tomas con dron (si aplica)',
      'Imagen alineada a valores empresariales',
    ],
    highlight: false,
    category: 'corporate'
  },
];

const dentalPlans = [
  {
    id: 'dental-1',
    name: 'Dental Básico – Presencia Profesional',
    price: '₡190,000',
    priceWithIVA: '₡214,700 (IVA 13%)',
    recommendedFor: 'Clínicas que buscan establecer su presencia profesional',
    features: [
      'Video institucional corto (30–45 s)',
      '15 fotos profesionales editadas',
      'Enfoque en confianza y cercanía',
    ],
    highlight: false,
    category: 'dental'
  },
  {
    id: 'dental-2',
    name: 'Dental Pro – Confianza y Autoridad',
    price: '₡285,000',
    priceWithIVA: '₡322,050 (IVA 13%)',
    recommendedFor: 'Clínicas que buscan generar confianza y autoridad',
    features: [
      'Video institucional (1–2 min)',
      '2 reels educativos',
      '25 fotos profesionales editadas',
      'Contenido educativo simple para pacientes',
    ],
    highlight: false,
    category: 'dental'
  },
  {
    id: 'dental-3',
    name: 'Dental Premium – Marca Clínica',
    price: '₡420,000',
    priceWithIVA: '₡474,600 (IVA 13%)',
    recommendedFor: 'Clínicas que buscan construir una marca clínica sólida',
    features: [
      'Video cinematográfico (2–3 min)',
      '4 reels estratégicos',
      '40 fotos premium editadas',
      'Construcción de marca clínica',
    ],
    highlight: false,
    category: 'dental'
  },
  {
    id: 'dental-4',
    name: 'Plan Dental Mensual',
    price: '₡320,000 / mes',
    priceWithIVA: '₡361,600 / mes (IVA 13%)',
    recommendedFor: 'Clínicas que buscan contenido constante y consistente',
    features: [
      '4 reels profesionales',
      '1 video largo (1–2 min)',
      '20 fotos editadas',
      'Consistencia visual mensual',
    ],
    highlight: false,
    category: 'dental'
  },
];

const foodPlans = [
  {
    id: 'food-1',
    name: 'Food Básico – Menú Atractivo',
    price: '₡180,000',
    priceWithIVA: '₡203,400 (IVA 13%)',
    recommendedFor: 'Restaurantes que buscan destacar su menú de forma atractiva',
    features: [
      '1 reel gastronómico',
      '15 fotos de platos editadas',
      'Estilo visual apetitoso y natural',
    ],
    highlight: false,
    category: 'food'
  },
  {
    id: 'food-2',
    name: 'Food Pro – Experiencia del Restaurante',
    price: '₡280,000',
    priceWithIVA: '₡316,400 (IVA 13%)',
    recommendedFor: 'Restaurantes que quieren destacar su experiencia única',
    features: [
      'Video profesional (1–2 min)',
      '2 reels gastronómicos',
      '25 fotos (platos + ambiente)',
      'Enfoque en experiencia del local',
    ],
    highlight: false,
    category: 'food'
  },
  {
    id: 'food-3',
    name: 'Food Premium – Marca Gastronómica',
    price: '₡420,000',
    priceWithIVA: '₡474,600 (IVA 13%)',
    recommendedFor: 'Restaurantes que buscan construir una marca gastronómica',
    features: [
      'Video cinematográfico (2–3 min)',
      '4 reels premium',
      '40 fotos premium editadas',
      'Narrativa de marca gastronómica',
    ],
    highlight: false,
    category: 'food'
  },
  {
    id: 'food-4',
    name: 'Plan Food Mensual',
    price: '₡350,000 / mes',
    priceWithIVA: '₡395,500 / mes (IVA 13%)',
    recommendedFor: 'Restaurantes que buscan contenido constante para redes sociales',
    features: [
      '4 reels gastronómicos',
      '1 video largo (1–2 min)',
      '20 fotos editadas',
      'Rotación estratégica de contenido',
    ],
    highlight: false,
    category: 'food'
  },
];

const musicVideoPlans = [
  {
    id: 'music-1',
    name: 'Video Musical Esencial – Performance Cinemático',
    price: '₡380,000',
    priceWithIVA: '₡429,400 (IVA 13%)',
    recommendedFor: 'Artistas que buscan un video de performance cinematográfico',
    features: [
      'Grabación en 1 locación',
      'Enfoque performance (artista/banda)',
      'Dirección visual alineada al género musical',
      'Grabación con equipo profesional',
      'Edición completa',
      'Corrección de color cinematográfica',
      'Entrega estimada: 7–10 días hábiles',
    ],
    highlight: false,
    category: 'music'
  },
  {
    id: 'music-2',
    name: 'Video Musical Pro – Narrativa Visual',
    price: '₡650,000',
    priceWithIVA: '₡734,500 (IVA 13%)',
    recommendedFor: 'Artistas que buscan una narrativa visual impactante',
    features: [
      'Concepto creativo definido en brief',
      'Hasta 2 locaciones',
      'Dirección artística',
      'Moodboard visual previo',
      'Edición cinematográfica avanzada',
      'Corrección de color premium',
      'Reel teaser para redes',
      'Entrega estimada: 10–12 días hábiles',
    ],
    highlight: false,
    category: 'music'
  },
];

const otherPlans = [
  {
    id: 'other-1',
    name: 'Producción Audiovisual por Horas',
    price: '₡95,000',
    priceWithIVA: '₡107,350 (IVA 13%)',
    recommendedFor: 'Proyectos que requieren flexibilidad en tiempo y alcance',
    features: [
      'Grabación de foto y/o video',
      'Dirección básica',
      'Uso de equipo profesional',
      'Entrega estimada: 5–8 fotos editadas por hora + clips base',
    ],
    highlight: false,
    category: 'other'
  },
  {
    id: 'other-2',
    name: 'Branding Audiovisual Estratégico',
    price: '₡320,000',
    priceWithIVA: '₡361,600 (IVA 13%)',
    recommendedFor: 'Marcas que necesitan definir su identidad visual',
    features: [
      'Definición de estilo visual',
      '1 video guía (1–2 min)',
      '25 fotos alineadas a la identidad',
      'Lineamientos visuales reutilizables',
    ],
    highlight: false,
    category: 'other'
  },
  {
    id: 'other-3',
    name: 'Edición Profesional de Contenido',
    price: 'Desde ₡190,000',
    priceWithIVA: 'Desde ₡214,700 (IVA 13%)',
    recommendedFor: 'Quienes tienen material grabado y necesitan edición profesional',
    features: [
      'Hasta 6 reels (9:16) o 3 videos (1–2 min)',
      'Corrección de color',
      'Optimización de formatos',
      'Entrega estimada: 3–5 días hábiles'
    ],
    highlight: false,
    category: 'other'
  },
  {
    id: 'other-4',
    name: 'Plan de Edición Mensual',
    price: '₡300,000 / mes',
    priceWithIVA: '₡339,000 / mes (IVA 13%)',
    recommendedFor: 'Creadores que necesitan edición constante de contenido',
    features: [
      'Hasta 8 reels editados',
      'Color grading uniforme',
      'Ajustes mensuales',
    ],
    highlight: false,
    category: 'other'
  },
];

const allPackages = [
  ...socialMediaPlans,
  ...professionalPlans,
  ...eventPlans,
  ...weddingPlans,
  ...massiveEventPlans,
  ...corporatePlans,
  ...dentalPlans,
  ...foodPlans,
  ...musicVideoPlans,
  ...otherPlans
];

const categories = [
  { id: 'all', label: 'Todos', icon: Filter },
  { id: 'social', label: 'Redes Sociales', icon: Camera },
  { id: 'professional', label: 'Profesional', icon: Star },
  { id: 'events', label: 'Eventos', icon: CalendarIcon },
  { id: 'weddings', label: 'Bodas', icon: Clock },
  { id: 'massive', label: 'Masivos', icon: Users },
  { id: 'corporate', label: 'Corporativo', icon: Users },
  { id: 'dental', label: 'Odontología', icon: Users },
  { id: 'food', label: 'Restaurantes', icon: Users },
  { id: 'music', label: 'Videos Musicales', icon: Music },
  { id: 'other', label: 'Otros', icon: Filter },
];

// --- Components ---

const FeatureItem = ({ text, highlight, index }) => (
  <motion.li 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
    whileHover={{ x: 4 }}
    className="flex items-start gap-3 group/item"
  >
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={cn(
        "mt-0.5 rounded-full p-1.5 flex-shrink-0 flex items-center justify-center border transition-all duration-300",
        highlight 
          ? "text-cyan-400 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-400/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]" 
          : "text-white/50 bg-white/5 border-white/10 group-hover/item:bg-white/10 group-hover/item:border-white/20"
      )}
    >
      <Check size={12} strokeWidth={2.5} />
    </motion.div>
    <span 
      className={cn(
        "text-sm leading-relaxed flex-1 transition-colors duration-300",
        highlight ? "text-white/90 font-medium" : "text-white/70 font-light group-hover/item:text-white/90"
      )}
    >
      {text}
    </span>
  </motion.li>
);

const PlanCard = ({ plan, index }) => {
  // Reemplazar guiones largos por separador más elegante
  const displayName = plan.name.replace(/ – /g, ' • ').replace(/—/g, ' • ');
  
  return (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ 
      duration: 0.3, 
      delay: index * 0.1,
      ease: "easeOut"
    }}
    whileHover={{ 
      y: -2,
      transition: { duration: 0.25 }
    }}
    className={cn(
      "relative flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300 group overflow-hidden h-full",
      plan.highlight
        ? "bg-gradient-to-br from-[#0B0B15] via-[#0a0a12] to-[#080810] border-purple-500/50 shadow-[0_0_80px_-25px_rgba(168,85,247,0.5)] z-10 ring-2 ring-purple-500/20"
        : "bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/10 hover:bg-gradient-to-br hover:from-[#0B0B15] hover:via-[#0a0a12] hover:to-[#080810] hover:border-purple-500/50 hover:shadow-[0_0_80px_-25px_rgba(168,85,247,0.5)] hover:z-10 hover:ring-2 hover:ring-purple-500/20"
    )}
    style={{ minHeight: '100%' }}
  >
    {/* Highlight Badge - Barra superior siempre visible si hay recommendedFor */}
    {plan.recommendedFor && (
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
    )}

    {/* Header - Estilizado y Uniforme */}
    <div className={cn(
      "mb-6 relative z-10 transition-all duration-300 pr-28 md:pr-32"
    )}>
      <h3 className={cn(
        "mb-0 transition-all duration-300 min-h-[56px] flex flex-col justify-center",
        plan.highlight 
          ? "drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]" 
          : "group-hover:drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]"
      )}>
        {(() => {
          const parts = displayName.split(' • ');
          // Formato uniforme: siempre mostrar en dos líneas para consistencia visual
          if (parts.length >= 3) {
            // Ejemplo: "Plan Quincenal • Presencia" en primera línea, "Constante" en segunda
            return (
              <div className="space-y-1">
                <div className="flex items-center leading-tight">
                  <span className="text-lg md:text-xl text-white font-bold tracking-tight">{parts[0]}</span>
                  <span className="mx-2 text-cyan-400/70 text-base">•</span>
                  <span className="text-base md:text-lg text-white/80 font-medium">{parts[1]}</span>
                </div>
                <div className="text-sm md:text-base text-white/60 font-normal">{parts[2]}</div>
              </div>
            );
          } else if (parts.length === 2) {
            // Ejemplo: "Básico 2" en primera línea, "Contenido Pro" en segunda
            return (
              <div className="space-y-1">
                <div className="text-lg md:text-xl text-white font-bold tracking-tight leading-tight">{parts[0]}</div>
                <div className="text-base md:text-lg text-white/80 font-medium">{parts[1]}</div>
              </div>
            );
          } else {
            // Si no hay separador, mostrar en dos líneas igual para mantener altura
            return (
              <div className="space-y-1">
                <div className="text-lg md:text-xl text-white font-bold tracking-tight leading-tight">{displayName}</div>
                <div className="text-base md:text-lg text-white/80 font-medium opacity-0 select-none">.</div>
              </div>
            );
          }
        })()}
      </h3>
      
      <div className="flex items-end gap-2 mb-2">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className={cn(
            "text-3xl md:text-4xl font-black transition-all duration-300",
            plan.highlight 
              ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]" 
              : "text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          )}
        >
          {plan.price}
        </motion.span>
      </div>
      <p className="text-xs text-white/50 font-light tracking-tight">{plan.priceWithIVA}</p>
    </div>

    {/* Description o Recomendación - Estilizada */}
    {(plan.description || plan.recommendedFor) && (
      <div className="mb-6 pb-6 relative">
        <div className="absolute left-0 top-0 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400/50 to-purple-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {plan.recommendedFor ? (
          <p className="text-sm text-white/70 leading-relaxed font-light pl-2">"{plan.recommendedFor}"</p>
        ) : (
          <p className="text-sm text-white/70 leading-relaxed font-light pl-2">"{plan.description}"</p>
        )}
      </div>
    )}

    {/* Features List */}
    <ul className="space-y-4 mb-8 flex-grow">
      {plan.features.map((feature, i) => (
        <FeatureItem key={i} text={feature} highlight={plan.highlight} index={i} />
      ))}
    </ul>

    {/* Action Button - Estilizado */}
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        className={cn(
          "w-full h-12 text-sm uppercase tracking-wider font-semibold transition-all duration-300 rounded-xl relative overflow-hidden group/btn",
          plan.highlight
            ? "bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white shadow-lg shadow-purple-500/40 border-0 hover:shadow-xl hover:shadow-purple-500/60"
            : "bg-gradient-to-r from-white/5 to-white/5 text-white border border-white/10 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:border-0 group-hover:shadow-lg group-hover:shadow-purple-500/40"
        )}
        onClick={() => window.open(`https://wa.me/50671032432?text=Hola,%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}`, '_blank')}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <span>Cotizar Ahora</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </span>
        {/* Efecto de brillo para todos los botones */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700",
          plan.highlight ? "" : "via-cyan-500/20"
        )} />
      </Button>
    </motion.div>

    {/* Background Gradient Orbs for Hover - Mejorados */}
    <div 
      className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full group-hover:scale-125 transition-all duration-700 pointer-events-none opacity-20" 
      style={{ 
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
        transform: 'translateZ(0)'
      }} 
    />
    <div 
      className="absolute -top-20 -left-20 w-40 h-40 rounded-full group-hover:scale-125 transition-all duration-700 pointer-events-none opacity-20" 
      style={{ 
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
        transform: 'translateZ(0)'
      }} 
    />
    {plan.highlight && (
      <>
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none opacity-10"
          style={{ 
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
            transform: 'translateZ(0)'
          }} 
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          className="absolute bottom-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-10"
          style={{ 
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, transparent 70%)',
            transform: 'translateZ(0)'
          }} 
        />
      </>
    )}
  </motion.div>
  );
};

const Plans = () => {
  const { toast } = useToast();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('social'); 
  
  // Calendar Logic
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // 0 is Sunday

  const prevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
    // Limpiar selección si la fecha seleccionada no corresponde al nuevo mes
    if (selectedDate && (selectedDate.getMonth() !== newDate.getMonth() || selectedDate.getFullYear() !== newDate.getFullYear())) {
      setSelectedDate(null);
    }
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
    // Limpiar selección si la fecha seleccionada no corresponde al nuevo mes
    if (selectedDate && (selectedDate.getMonth() !== newDate.getMonth() || selectedDate.getFullYear() !== newDate.getFullYear())) {
      setSelectedDate(null);
    }
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Resetear horas para comparar solo fechas
    
    // Validar que la fecha seleccionada sea igual o mayor que la fecha actual
    if (newDate < today) {
      toast({
        title: "Fecha no disponible",
        description: "Solo puedes seleccionar fechas de hoy en adelante.",
        duration: 3000,
      });
      return;
    }
    
    setSelectedDate(newDate);
  };

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedPackage) return;
    
    const formattedDate = selectedDate.toLocaleDateString('es-CR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    toast({
      title: "Solicitud Iniciada 🚀",
      description: `Redirigiendo a WhatsApp para confirmar ${selectedPackage.name}...`,
      duration: 3000,
    });

    setTimeout(() => {
        const message = `Hola BWAY! Me gustaría reservar el paquete "${selectedPackage.name}" (${selectedPackage.category}) para la fecha: ${formattedDate}. Precio estimado: ${selectedPackage.price}`;
        const whatsappUrl = `https://wa.me/50671032432?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  const filteredPackages = categoryFilter === 'all' 
    ? allPackages 
    : allPackages.filter(pkg => pkg.category === categoryFilter);

  const weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  return (
    <section id="planes" className="py-24 md:py-32 bg-[#050508] relative overflow-hidden -mt-24 pt-24">
      
      {/* Dynamic Background - Gradientes ultra suaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[10%] left-[5%] w-[800px] h-[800px] rounded-full" 
          style={{ 
            background: 'radial-gradient(circle at center, rgba(147, 51, 234, 0.08) 0%, rgba(147, 51, 234, 0.04) 40%, transparent 70%)',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            imageRendering: 'auto',
            WebkitFontSmoothing: 'antialiased'
          }} 
        />
        <div 
          className="absolute bottom-[10%] right-[5%] w-[900px] h-[900px] rounded-full" 
          style={{ 
            background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 70%)',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            imageRendering: 'auto',
            WebkitFontSmoothing: 'antialiased'
          }} 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section - Minimalista y Profesional */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">Planes Flexibles</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black font-montserrat mb-8 leading-[0.95]"
          >
            <div className="text-white drop-shadow-[0_0_15px_rgba(135,206,250,0.5)] mb-2">
              Elige el Nivel de tu
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 drop-shadow-[0_0_15px_rgba(135,206,250,0.6)]">
              Impacto Visual
            </div>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Producción audiovisual integral. Un único profesional para dirección, grabación y postproducción.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="social" className="w-full mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center mb-20 px-4"
          >
            <div className="w-full max-w-6xl">
              {/* Tabs estilizados y minimalistas */}
              <TabsList className="relative bg-transparent p-0 h-auto border-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-3 w-full">
                {['social', 'professional', 'events', 'weddings', 'massive', 'corporate', 'dental', 'food', 'music', 'other'].map((val) => (
                  <motion.div
                    key={val}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <TabsTrigger 
                      value={val} 
                      className="relative rounded-xl px-4 py-2.5 md:py-3 text-sm font-medium transition-all duration-300 ease-out data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:shadow-lg data-[state=active]:scale-105 data-[state=active]:border-cyan-400/50 hover:bg-white/10 hover:text-white hover:scale-105 hover:border-white/20 active:scale-[0.98] border border-white/10 bg-transparent text-white w-full text-center focus-visible:ring-0 focus-visible:ring-offset-0"
                    >
                      {val === 'social' && 'Redes Sociales'}
                      {val === 'professional' && 'Profesional'}
                      {val === 'events' && 'Eventos'}
                      {val === 'weddings' && 'Bodas'}
                      {val === 'massive' && 'Masivos'}
                      {val === 'corporate' && 'Corporativo'}
                      {val === 'dental' && 'Odontología'}
                      {val === 'food' && 'Restaurantes'}
                      {val === 'music' && 'Videos Musicales'}
                      {val === 'other' && 'Otros'}
                    </TabsTrigger>
                  </motion.div>
                ))}
              </TabsList>
            </div>
          </motion.div>

          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {['social', 'professional', 'events', 'weddings', 'massive', 'corporate', 'dental', 'food', 'music', 'other'].map((category) => (
                <TabsContent key={category} value={category} className="mt-0 outline-none">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto ${
                      (category === 'social' || category === 'massive') ? 'lg:justify-center lg:flex' : ''
                    }`}
                    style={{ minHeight: '600px' }}
                  >
                    {category === 'social' && socialMediaPlans.map((plan, i) => (
                      <div key={i} className="w-full max-w-md mx-auto"><PlanCard plan={plan} index={i} /></div>
                    ))}
                    {category === 'professional' && professionalPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'events' && eventPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'weddings' && weddingPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'massive' && massiveEventPlans.map((plan, i) => (
                      <div key={i} className="w-full max-w-md mx-auto"><PlanCard plan={plan} index={i} /></div>
                    ))}
                    {category === 'corporate' && corporatePlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'dental' && dentalPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'food' && foodPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'music' && musicVideoPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                    {category === 'other' && otherPlans.map((plan, i) => <PlanCard key={i} plan={plan} index={i} />)}
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </div>
        </Tabs>


        {/* Booking Section - Minimalista y Profesional */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative pt-24"
        >
            {/* Header Section con Título */}
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
              >
                <CalendarIcon className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-white/80">Agenda tu Fecha</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black font-montserrat mb-6 leading-[0.95]"
              >
                <div className="text-white drop-shadow-[0_0_15px_rgba(135,206,250,0.5)] mb-2">
                  Reserva tu
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 drop-shadow-[0_0_15px_rgba(135,206,250,0.6)]">
                  Sesión Perfecta
                </div>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed"
              >
                Selecciona la fecha y el paquete que mejor se adapte a tu proyecto.
              </motion.p>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-7xl mx-auto">
                
                {/* Calendar Widget - Minimalista */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  className="lg:col-span-5"
                >
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                              {monthNames[currentDate.getMonth()]} <span className="text-white/40 font-normal">{currentDate.getFullYear()}</span>
                            </h3>
                            <div className="flex gap-2">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                                    <Button variant="outline" size="icon" onClick={prevMonth} className="h-8 w-8 rounded-lg border-white/10 hover:bg-white/5 hover:border-white/20 bg-transparent">
                                        <ChevronLeft size={14} />
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                                    <Button variant="outline" size="icon" onClick={nextMonth} className="h-8 w-8 rounded-lg border-white/10 hover:bg-white/5 hover:border-white/20 bg-transparent">
                                        <ChevronRight size={14} />
                                    </Button>
                                </motion.div>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 mb-3 text-center">
                            {weekDays.map((day, i) => (
                                <div 
                                  key={i}
                                  className="text-[10px] font-medium text-white/40 uppercase tracking-wider"
                                >
                                  {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-7 gap-1.5 md:gap-2 flex-grow content-start">
                            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                                <div key={`empty-${i}`} className="aspect-square" />
                            ))}
                            {Array.from({ length: daysInMonth }).map((_, i) => {
                                const day = i + 1;
                                const dateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                                dateObj.setHours(0, 0, 0, 0); // Resetear horas para comparar solo fechas
                                const isSelected = selectedDate !== null && selectedDate.getTime() === dateObj.getTime();
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                const isPast = dateObj < today;
                                
                                return (
                                    <motion.button
                                        whileHover={!isPast ? { scale: 1.05 } : {}}
                                        whileTap={!isPast ? { scale: 0.95 } : {}}
                                        transition={{ duration: 0.2 }}
                                        key={day}
                                        onClick={() => handleDateClick(day)}
                                        disabled={isPast}
                                        className={cn(
                                            "aspect-square rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center relative",
                                            isSelected 
                                                ? "bg-white text-black font-semibold shadow-md" 
                                                : isPast
                                                ? "bg-white/5 text-white/20 border border-transparent cursor-not-allowed opacity-40"
                                                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/10 cursor-pointer"
                                        )}
                                    >
                                        {day}
                                    </motion.button>
                                );
                            })}
                        </div>
                        
                        <div className="mt-6 pt-6">
                           <div className="flex items-center gap-2.5 text-xs text-white/50 bg-white/5 p-3 rounded-lg border border-white/5">
                                <Info size={14} className="text-cyan-400/80 shrink-0" />
                                {selectedDate 
                                  ? (
                                    <span>
                                      Fecha seleccionada: <span className="text-white font-medium">{selectedDate.toLocaleDateString()}</span>
                                    </span>
                                  )
                                  : <span>Selecciona una fecha disponible</span>
                                }
                           </div>
                        </div>
                    </div>
                </motion.div>

                {/* Booking Form / Summary - Minimalista */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
                  className="lg:col-span-7 flex flex-col gap-6"
                >
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col h-[500px]">
                        <div className="p-4 bg-white/5 border-b border-white/5 flex gap-2 overflow-x-auto scrollbar-hide">
                            {categories.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                <motion.button
                                    key={cat.id}
                                    whileHover={{ y: -1 }}
                                    transition={{ duration: 0.25 }}
                                    onClick={() => setCategoryFilter(cat.id)}
                                    className={cn(
                                    "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border",
                                    categoryFilter === cat.id
                                        ? "bg-white text-black border-white shadow-sm"
                                        : "bg-transparent text-white/50 border-white/10 hover:border-white/20 hover:text-white/80 hover:bg-white/5"
                                    )}
                                >
                                    <Icon size={14} />
                                    {cat.label}
                                </motion.button>
                                );
                            })}
                        </div>
                        
                        <div className="flex-grow overflow-y-auto p-4 space-y-2 custom-scrollbar">
                           {filteredPackages.map((pkg, index) => {
                               const isSelected = selectedPackage?.id === pkg.id;
                               return (
                                   <motion.div 
                                      key={pkg.id}
                                      initial={{ opacity: 0, y: 6 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                                      whileHover={{ y: -1 }}
                                      onClick={() => handlePackageClick(pkg)}
                                      className={cn(
                                          "flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all border relative overflow-hidden group",
                                          isSelected
                                            ? "bg-white/5 border-white/20"
                                            : "bg-transparent border-white/5 hover:bg-white/5 hover:border-white/10"
                                      )}
                                   >
                                       <div 
                                           className={cn(
                                               "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors border",
                                               isSelected ? "bg-white text-black border-white" : "bg-white/5 text-white/40 border-white/10 group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20"
                                           )}
                                       >
                                           {pkg.category === 'social' && <Camera size={20} />}
                                           {pkg.category === 'professional' && <Star size={20} />}
                                           {pkg.category === 'events' && <CalendarIcon size={20} />}
                                           {pkg.category === 'weddings' && <Clock size={20} />}
                                           {pkg.category === 'massive' && <Users size={20} />}
                                           {pkg.category === 'corporate' && <Users size={20} />}
                                           {pkg.category === 'dental' && <Users size={20} />}
                                           {pkg.category === 'food' && <Users size={20} />}
                                           {pkg.category === 'music' && <Music size={20} />}
                                           {pkg.category === 'other' && <Filter size={20} />}
                                       </div>
                                       
                                       <div className="flex-grow min-w-0">
                                           <div className="flex items-center gap-2 mb-0.5">
                                               <h4 className={cn("font-semibold truncate text-sm", isSelected ? "text-white" : "text-white/90")}>{pkg.name}</h4>
                                               {pkg.highlight && <span className="text-[9px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-medium border border-purple-500/30">TOP</span>}
                                           </div>
                                           <p className="text-xs text-white/50">{pkg.price}</p>
                                       </div>

                                       <div 
                                           className={cn(
                                               "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all shrink-0",
                                               isSelected ? "border-white bg-white text-black" : "border-white/20 text-transparent"
                                           )}
                                       >
                                           <Check size={12} strokeWidth={3} />
                                       </div>
                                   </motion.div>
                               )
                           })}
                        </div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                        <div className="text-center md:text-left">
                            <p className="text-white/40 text-xs uppercase tracking-wider font-medium mb-2">Resumen de Reserva</p>
                            <div className="flex items-baseline gap-2 justify-center md:justify-start">
                                <span className="text-2xl md:text-3xl font-bold text-white">
                                    {selectedPackage ? selectedPackage.price : '---'}
                                </span>
                                <span className="text-sm text-white/50">
                                    {selectedDate ? `para el ${selectedDate.getDate()}/${selectedDate.getMonth()+1}` : '(Fecha pendiente)'}
                                </span>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Button 
                                size="lg"
                                className={cn(
                                    "min-w-[220px] h-12 text-sm font-semibold transition-all rounded-xl",
                                    (!selectedDate || !selectedPackage) 
                                        ? "bg-white/5 text-white/30 cursor-not-allowed border border-white/10" 
                                        : "bg-white text-black hover:bg-white/90 border-0 shadow-lg"
                                )}
                                disabled={!selectedDate || !selectedPackage}
                                onClick={handleBooking}
                            >
                                {selectedDate && selectedPackage ? (
                                    <span className="flex items-center gap-2">Confirmar por WhatsApp <Zap size={16} className="fill-current" /></span>
                                ) : (
                                    "Completa tu selección"
                                )}
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>

        {/* Mensaje Inspirador Cinematográfico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mt-20 mb-16 max-w-4xl mx-auto px-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-light text-white/70 leading-relaxed italic"
          >
            "Cada frame cuenta una historia.<br className="hidden md:block" />
            Cada segundo es una oportunidad de crear magia.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 not-italic font-medium">
              Tu visión, nuestra narrativa visual.
            </span>"
          </motion.p>
        </motion.div>


      </div>
    </section>
  );
};

export default Plans;
