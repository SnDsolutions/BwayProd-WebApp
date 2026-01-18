
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { LogIn, Mail, Lock } from 'lucide-react';

const LoginPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 ¡Función en desarrollo!",
      description: "El inicio de sesión aún no está implementado. ¡Pídelo en tu próximo prompt! 🚀",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050508] p-4 relative overflow-hidden -mt-24 pt-24">
      {/* Dynamic Background - Gradientes suaves sin blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-[10%] left-[5%] w-[800px] h-[800px] rounded-full opacity-08" 
          style={{ 
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0) 70%)',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }} 
        />
        <div 
          className="absolute bottom-[10%] right-[5%] w-[900px] h-[900px] rounded-full opacity-04" 
          style={{ 
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0) 70%)',
            transform: 'translateZ(0)',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }} 
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <Link to="/">
            <img 
              src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/eb54702e245d3090dadd93563340f94b.png" 
              alt="BWAY Productions Logo" 
              className="h-20 w-auto mx-auto drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            />
          </Link>
        </div>

        <div className="bg-[#050508]/80 border border-white/20 p-8 md:p-10 rounded-2xl shadow-2xl backdrop-blur-xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-white drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]">
            Bienvenido
          </h1>
          <p className="text-gray-400 text-center mb-8 text-sm">Inicia sesión para continuar</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/60" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 text-white placeholder:text-gray-500 hover:bg-white/10"
                placeholder="bwayprod@gmail.com"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400/60" />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 text-white placeholder:text-gray-500 hover:bg-white/10"
                placeholder="Contraseña"
              />
            </div>

            <div className="text-right">
              <a href="#" onClick={(e) => { e.preventDefault(); handleSubmit(e); }} className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <Button 
              type="submit" 
              variant="default" 
              size="lg" 
              className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white border-none shadow-lg shadow-purple-500/40 uppercase tracking-wider font-semibold"
            >
              <LogIn className="mr-2 h-5 w-5" />
              Iniciar Sesión
            </Button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-8">
            ¿No tienes una cuenta?{' '}
            <a href="#" onClick={(e) => { e.preventDefault(); handleSubmit(e); }} className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
              Regístrate
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
