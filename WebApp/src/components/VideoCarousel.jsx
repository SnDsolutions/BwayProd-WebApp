import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, Calendar, ExternalLink, Sparkles } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const videos = [
  {
    id: 1,
    title: "Recap Battle Warriors CR",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Recap+%40battlewarriorscr++2%EF%B8%8F%E2%83%A30%EF%B8%8F%E2%83%A32%EF%B8%8F%E2%83%A33%EF%B8%8F%E2%83%A3+%F0%9F%8E%A5%F0%9F%92%AA%F0%9F%8F%BF%F0%9F%9A%80.mp4",
    duration: "2:19",
    description: "Recap dinámico del evento Battle Warriors CR, capturando la energía y la intensidad del combate. Producción que documenta los momentos más impactantes del evento con edición cinematográfica.",
    date: "2024",
    client: "Battle Warriors CR"
  },
  {
    id: 2,
    title: "Ozuna - Live Performance",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Ozuna-.mp4",
    duration: "0:31",
    description: "Producción audiovisual del show en vivo de Ozuna, capturando la energía y el carisma del artista puertorriqueño. Video dinámico que documenta los momentos más impactantes de la presentación, con edición cinematográfica que refleja la conexión entre el artista y su audiencia, transmitiendo la intensidad y la magia del concierto en vivo.",
    date: "Mayo 2022",
    client: "Ozuna"
  },
  {
    id: 2,
    title: "Competencia de DownHill",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/AVENTURE+PARK/DH.mp4",
    duration: "1:22",
    description: "Recap cinematográfico de competencia de DownHill, capturando la velocidad, adrenalina y destreza de los ciclistas. Producción dinámica que documenta la intensidad del descenso con edición de ritmo acelerado y tomas impactantes.",
    date: "Enero 2023",
    client: "Adventure Park Heredia"
  },
  {
    id: 3,
    title: "Los Cafres - Live Performance",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Cafres.mp4",
    duration: "0:33",
    description: "Producción audiovisual del show en vivo de Los Cafres, capturando la energía y el carisma de la icónica banda argentina de reggae. Video dinámico que documenta los momentos más impactantes de la presentación, con edición cinematográfica que refleja la conexión entre los artistas y su audiencia, transmitiendo la intensidad y la magia del concierto en vivo.",
    date: "Mayo 2022",
    client: "Los Cafres"
  },
  {
    id: 4,
    title: "DJ EL FARI - DJ Set Live from Surf Abu Dhabi",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/DJFariEL+FARI+%E2%80%93+Afro+House+DJ+Set+Live+from+Surf+Abu+Dhabi+%7C+Latin+Vibes+%2B+Live+Sax+.mp4",
    duration: "38:38",
    description: "Producción audiovisual del DJ set de El Fari, capturando la energía y el ritmo de la música electrónica. Video dinámico que documenta la conexión entre el artista y la audiencia, con edición sincronizada al beat que transmite la intensidad de la experiencia musical en vivo.",
    date: "Noviembre 2025",
    client: "DJ El Fari"
  },
  {
    id: 5,
    title: "Haquil - Story | Video Musical",
    category: "Video Musical",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Haquil/Haquil-Story.mp4",
    duration: "02:10",
    description:"Producción audiovisual cinematográfica para Haquil, artista nacional. Video musical que fusiona narrativa visual con la esencia artística del músico, capturando la atmósfera y el mensaje de la canción. Edición de ritmo sincronizado que eleva la experiencia visual, destacando la calidad y el profesionalismo de la producción musical costarricense.",
    date: "Agosto 2022",
    client: "Haquil"
  },
  {
    id: 6,
    title: "Tapon en FlowFest - Live Performance",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/FLOWFEST/Recap-Tapon.mp4",
    duration: "01:07",
    description: "Producción audiovisual del show en vivo de Tapon en FlowFest, capturando la energía y el carisma del artista nacional. Video dinámico que documenta los momentos más impactantes de la presentación, con edición cinematográfica que refleja la conexión entre el artista y su audiencia.",
    date: "Julio 2023",
    client: "FlowFest"
  },
  {
    id: 7,
    title: "Contenido para Canal 6 - Noticias",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Repretel/Repretel+Recap..mp4",
    duration: "0:55",
    description: "Producción audiovisual profesional para Canal 6, destacando calidad televisiva y contenido de alto nivel. Video que refleja los estándares de excelencia del canal con edición precisa y narrativa visual efectiva.",
    date: "Junio 2022",
    client: "Canal 6"
  },
  {
    id: 8,
    title: "Víctor Ramírez | Físico Culturista",
    category: "Contenido - Redes Sociales",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/ROAD+to+Mr+Olimpia.mp4",
    duration: "2:50",
    description: "Producción audiovisual profesional para Víctor Ramírez, físico culturista. Video que destaca la dedicación, disciplina y estética corporal del atleta, capturando su transformación física con edición cinematográfica que resalta la excelencia y el profesionalismo del culturismo.",
    date: "Julio 2025",
    client: "Victor Ramirez"
  },
  {
    id: 9,
    title: "Café Tacvba | Video Musical",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Cafetacuva.mp4",
    duration: "0:34",
    description: "Producción audiovisual cinematográfica para Café Tacvba, banda mexicana de renombre internacional. Video musical que fusiona narrativa visual con la esencia artística de la banda, capturando la atmósfera única y el mensaje de la canción. Edición de ritmo sincronizado que eleva la experiencia visual, destacando la calidad y el profesionalismo de la producción musical latinoamericana.",
    date: "Mayo 2022",
    client: "Café Tacvba"
  },
  {
    id: 10,
    title: "MMA Costa Rica - Recap",
    category: "Eventos",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/MMA+-+Recap-.mp4 ",
    duration: "01:04",
    description: "Recap cinematográfico del evento MMA Costa Rica, capturando la intensidad, técnica y pasión de los luchadores. Producción dinámica que documenta los momentos más impactantes del combate con edición de ritmo acelerado y tomas que resaltan la destreza y el coraje de los atletas.",
    date: "Noviembre 2025",
    client: "MMA Costa Rica"
  },
  {
    id: 11,
    title: "Seprodental - Productos Odontológicos",
    category: "Contenido - Redes Sociales",
    image: "",
    videoUrl: "https://bwayprodcontent.s3.us-east-1.amazonaws.com/backup/Material+para+pagina/Recaps/Recap+1+-+Seprodental.mp4",
    duration: "00:59",
    description: "Producción audiovisual profesional para Seprodental, empresa líder en productos odontológicos. Video que destaca la innovación, calidad y excelencia de sus productos, capturando la precisión y el profesionalismo del sector dental con edición cinematográfica que resalta la confiabilidad y el compromiso con la salud bucal.",
    date: "Noviembre 2025",
    client: "Seprodental"
  }
];

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  const timerRef = useRef(null);
  const minVideoDuration = 6000; // 6 segundos en milisegundos

  const nextSlide = () => {
    // Limpiar timer al cambiar manualmente
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setActiveIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    // Limpiar timer al cambiar manualmente
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Auto-play carousel - cambia automáticamente cada 6 segundos
  useEffect(() => {
    // Limpiar timer anterior
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // Crear nuevo timer para cambiar después de 6 segundos
    timerRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % videos.length;
        return nextIndex;
      });
    }, minVideoDuration);

    // Limpiar el timeout cuando el componente se desmonte o cambien las dependencias
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [activeIndex, minVideoDuration]);

  const currentVideo = videos[activeIndex];

  return (
    <section className="py-32 md:py-40 bg-[#050508] relative overflow-hidden">
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

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-6xl">
        
        {/* Section Header - Más minimalista */}
        <motion.div 
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">Portfolio</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-montserrat tracking-tight leading-[0.95] mb-6">
            <div className="text-white drop-shadow-[0_0_15px_rgba(135,206,250,0.5)] mb-2">
              Galería en
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 drop-shadow-[0_0_15px_rgba(135,206,250,0.6)]">
              Movimiento
            </div>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Descubre nuestras producciones más destacadas. Cada video cuenta una historia única con calidad cinematográfica.
          </motion.p>
        </motion.div>

        {/* Carousel Container - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full"
        >
          {/* Premium Border Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
          
          <div 
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden group border border-white/10 shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                {/* Video */}
                <video
                  key={`video-${activeIndex}-${currentVideo.id}`}
                  ref={videoRef}
                  src={currentVideo.videoUrl}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  loading="lazy"
                  onLoadedData={(e) => {
                    e.target.play().catch(err => console.log('Error al reproducir:', err));
                  }}
                />
                
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                
                {/* Premium Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16 z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                    className="space-y-6 max-w-3xl"
                  >
                    {/* Category & Meta Badge */}
                    <div className="flex items-center gap-4 flex-wrap">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase rounded-full shadow-lg shadow-cyan-500/20"
                      >
                        {currentVideo.category}
                      </motion.span>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white/70 text-xs font-medium">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{currentVideo.duration}</span>
                      </div>
                    </div>
                    
                    {/* Title with Enhanced Typography */}
                    <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white font-montserrat tracking-tight leading-[1.05] drop-shadow-2xl">
                      {currentVideo.title}
                    </h3>

                    {/* Premium CTA Button */}
                    <div className="pt-4">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          onClick={() => {
                            setSelectedVideo(currentVideo);
                            setIsModalOpen(true);
                          }}
                          className="group/btn px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-500/30 text-white font-semibold backdrop-blur-md transition-all duration-300 rounded-full text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                        >
                          <span>Ver detalles</span>
                          <ExternalLink className="w-4 h-4 ml-2 opacity-70 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/80 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 shadow-xl"
              aria-label="Anterior"
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/80 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 shadow-xl"
              aria-label="Siguiente"
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>

            {/* Enhanced Progress Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
              {videos.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (timerRef.current) {
                      clearTimeout(timerRef.current);
                    }
                    setActiveIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeIndex 
                      ? 'w-10 bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-500/50' 
                      : 'w-2 bg-white/30 hover:bg-white/50 hover:w-3'
                  }`}
                  aria-label={`Ir a video ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Premium Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl bg-[#050508] border-white/10 p-0 overflow-hidden shadow-2xl">
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Video Section with Enhanced Styling */}
              <div className="relative bg-black">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 pointer-events-none" />
                <video
                  src={selectedVideo.videoUrl}
                  className="w-full h-auto"
                  controls
                  autoPlay
                  preload="metadata"
                />
              </div>
              
              {/* Enhanced Info Section */}
              <div className="p-8 md:p-12 space-y-8 bg-gradient-to-b from-[#050508] to-[#0a0a0f]">
                <div className="flex items-start justify-between gap-6 flex-wrap">
                  <div className="space-y-5 flex-1 min-w-0">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-montserrat tracking-tight leading-tight">
                      {selectedVideo.title}
                    </h3>
                    <div className="flex items-center gap-6 flex-wrap">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/60 text-sm">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>{selectedVideo.date}</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white/60 text-sm">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span>{selectedVideo.duration}</span>
                      </div>
                    </div>
                  </div>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase rounded-full whitespace-nowrap shadow-lg shadow-cyan-500/20"
                  >
                    {selectedVideo.category}
                  </motion.span>
                </div>
                
                <div className="pt-6 border-t border-white/10 space-y-6">
                  <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
                    {selectedVideo.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/60 text-sm">
                    <span className="font-semibold text-white/80">Cliente:</span>
                    <span className="text-cyan-300">{selectedVideo.client}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoCarousel;
