import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, User, Mail, MessageSquare, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
const Booking = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    date: ''
  });
  const services = ['Contenido para Redes Sociales', 'Planes Profesionales', 'Eventos Sociales', 'Bodas y Romance', 'Eventos Masivos', 'Corporativo', 'Odontología y Salud', 'Restaurantes y Gastronomía', 'Producción por Horas', 'Branding Visual', 'Postproducción', 'Otro'];
  const handleChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
  const handleSubmit = e => {
    e.preventDefault();
    const message = `Hola, me gustaría reservar una sesión:%0A%0ANombre: ${formData.name}%0AEmail: ${formData.email}%0AServicio: ${formData.service}%0AFecha preferida: ${formData.date}%0AMensaje: ${formData.message}`;
    window.open(`https://wa.me/50671032432?text=${message}`, '_blank');
    toast({
      title: "¡Solicitud enviada!",
      description: "Te redirigimos a WhatsApp para confirmar tu reserva."
    });
    setFormData({
      name: '',
      email: '',
      service: '',
      message: '',
      date: ''
    });
  };
  const inputStyles = "w-full pl-12 pr-4 py-4 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 text-white placeholder:text-gray-500 hover:border-cyan-500/30 hover:bg-black/30";
  return <section id="reservas" className="py-20 md:py-32 relative overflow-hidden bg-[#050508] min-h-screen -mt-24 pt-24">
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
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Comienza tu Proyecto</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            <div className="text-white drop-shadow-[0_0_15px_rgba(135,206,250,0.5)] mb-2">
              Reserva tu
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 drop-shadow-[0_0_15px_rgba(135,206,250,0.6)]">
              Sesión Creativa
            </div>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Completa el formulario y nos pondremos en contacto contigo para crear contenido que impulse tu marca al siguiente nivel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
          {/* Info Sidebar */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="lg:col-span-5 space-y-6">
            {/* Info Card 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-cyan-500/10 p-3 rounded-xl border border-cyan-500/20">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Respuesta Rápida</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Sabemos que el tiempo es oro. Te contactaremos en menos de 24 horas con una propuesta inicial.
                  </p>
                </div>
              </div>
            </div>

            {/* Info Card 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20">
                  <CheckCircle2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sin Compromiso</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Cotización gratuita y sin obligación. Analizamos tu proyecto y te ofrecemos la mejor solución.
                  </p>
                </div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                Disponibilidad
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-center items-center py-4">
                  <span className="text-cyan-400 font-semibold text-lg">Siempre disponible</span>
                </div>
                <p className="text-gray-400 text-xs text-center leading-relaxed">
                  Estamos disponibles para atenderte en cualquier momento. Contáctanos y te responderemos lo antes posible.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="lg:col-span-7">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
              {/* Decorative line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-300 group-focus-within:text-cyan-400 transition-colors ml-1">
                      Nombre Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputStyles} placeholder="Bway Prod" />
                    </div>
                  </div>
                  
                  <div className="group space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-300 group-focus-within:text-cyan-400 transition-colors ml-1">
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyles} placeholder="tu@email.com" />
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group space-y-2">
                    <label htmlFor="service" className="text-sm font-semibold text-gray-300 group-focus-within:text-cyan-400 transition-colors ml-1">
                      Tipo de Servicio
                    </label>
                    <div className="relative">
                      <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors z-10" />
                      <select id="service" name="service" value={formData.service} onChange={handleChange} required className={`${inputStyles} appearance-none cursor-pointer`}>
                        <option value="" className="bg-gray-900 text-gray-400">Selecciona un servicio</option>
                        {services.map(s => <option key={s} value={s} className="bg-gray-900 text-white">{s}</option>)}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group space-y-2">
                    <label htmlFor="date" className="text-sm font-semibold text-gray-300 group-focus-within:text-cyan-400 transition-colors ml-1">
                      Fecha Preferida
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required className={`${inputStyles} [color-scheme:dark]`} />
                    </div>
                  </div>
                </div>

                <div className="group space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-300 group-focus-within:text-cyan-400 transition-colors ml-1">
                    Cuéntanos sobre tu proyecto
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`${inputStyles} resize-none pt-4 h-32`} placeholder="Describe tu visión, objetivos y cualquier detalle que consideres importante..." />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" variant="pill" // Updated to pill variant to match style
                className="w-full text-lg font-bold">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Reservar Mi Sesión
                    </span>
                  </Button>
                </div>

                <p className="text-center text-xs text-gray-500 mt-4">
                  Al enviar este formulario, aceptas ser contactado por nuestro equipo vía WhatsApp para coordinar los detalles.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Booking;