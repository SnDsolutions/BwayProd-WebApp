import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Check, Calendar as CalendarIcon, Info, ChevronLeft, ChevronRight, Star, Clock, Camera, Music, Users, Filter, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const Booking = () => {
  const { toast } = useToast();
  return <section id="reservas" className="py-8 md:py-12 relative overflow-hidden bg-[#050508] min-h-screen -mt-24 pt-24">
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
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Sección: Calendario y Selección de Paquetes */}
        <BookingCalendarSection toast={toast} />
      </div>
    </section>;
};

// Componente de Calendario y Selección de Paquetes
const BookingCalendarSection = ({ toast }) => {
  // Importar datos desde Plans (simplificado para esta sección)
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('social');

  // Datos simplificados de paquetes (solo los básicos para la sección de reserva)
  const packagesData = [
    { id: 'social-1', name: 'Básico 1 – Contenido Esencial', price: '₡165,000', category: 'social' },
    { id: 'social-2', name: 'Básico 2 – Contenido Pro', price: '₡215,000', category: 'social' },
    { id: 'prof-1', name: 'Plan Quincenal – Presencia Constante', price: '₡185,000', category: 'professional' },
    { id: 'prof-2', name: 'Plan Mensual – Marca Activa', price: '₡290,000', category: 'professional' },
    { id: 'evt-1', name: 'Evento Bronce – Recuerdos Esenciales', price: '₡135,000', category: 'events' },
    { id: 'evt-2', name: 'Evento Plata – Celebración Completa', price: '₡200,000', category: 'events' },
    { id: 'wed-1', name: 'Boda Esencial – El Comienzo', price: '₡550,000', category: 'weddings' },
    { id: 'wed-2', name: 'Boda Cinematográfica – Nuestra Historia', price: '₡850,000', category: 'weddings' },
    { id: 'mass-1', name: 'Masivo Esencial – Cobertura Documental', price: '₡350,000', category: 'massive' },
    { id: 'mass-2', name: 'Masivo Pro – Cobertura Cinematográfica', price: '₡550,000', category: 'massive' },
    { id: 'corp-1', name: 'Corporativo Esencial – Imagen Institucional', price: '₡280,000', category: 'corporate' },
    { id: 'corp-2', name: 'Corporativo Pro – Autoridad de Marca', price: '₡420,000', category: 'corporate' },
  ];

  const categories = [
    { id: 'all', label: 'Todos', icon: Filter },
    { id: 'social', label: 'Redes Sociales', icon: Camera },
    { id: 'professional', label: 'Profesional', icon: Star },
    { id: 'events', label: 'Eventos', icon: CalendarIcon },
    { id: 'weddings', label: 'Bodas', icon: Clock },
    { id: 'massive', label: 'Masivos', icon: Users },
    { id: 'corporate', label: 'Corporativo', icon: Users },
  ];

  // Calendar Logic
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);
    if (selectedDate && (selectedDate.getMonth() !== newDate.getMonth() || selectedDate.getFullYear() !== newDate.getFullYear())) {
      setSelectedDate(null);
    }
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);
    if (selectedDate && (selectedDate.getMonth() !== newDate.getMonth() || selectedDate.getFullYear() !== newDate.getFullYear())) {
      setSelectedDate(null);
    }
  };

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
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
      const message = `Hola BWAY! Me gustaría reservar el paquete "${selectedPackage.name}" para la fecha: ${formattedDate}. Precio estimado: ${selectedPackage.price}`;
      const whatsappUrl = `https://wa.me/50671032432?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  const filteredPackages = categoryFilter === 'all' 
    ? packagesData 
    : packagesData.filter(pkg => pkg.category === categoryFilter);

  const weekDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-8 md:mt-12 pt-6 md:pt-8"
    >
      {/* Header Section */}
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
        {/* Calendar Widget */}
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
                dateObj.setHours(0, 0, 0, 0);
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

        {/* Package Selection */}
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
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h4 className={cn("font-semibold truncate text-sm", isSelected ? "text-white" : "text-white/90")}>{pkg.name}</h4>
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
                );
              })}
            </div>
          </div>

          {/* Summary */}
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
  );
};

export default Booking;