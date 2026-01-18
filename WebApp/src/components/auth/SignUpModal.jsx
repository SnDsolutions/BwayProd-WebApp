
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, Loader2 } from 'lucide-react';

const GoogleIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.88c0-2.474 1.283-4.414 4.646-4.414 1.61 0 3.143.238 3.143.238v3.458l-1.771.001c-1.385 0-1.815.86-1.815 1.74v1.257h3.905l-.624 3.667h-3.281v7.98h-4.2z" />
  </svg>
);

export function SignUpModal({ open, onOpenChange, defaultTab = 'signup' }) {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Reset tab when modal opens with a new default
  useEffect(() => {
    if (open) {
      setActiveTab(defaultTab);
    }
  }, [open, defaultTab]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (activeTab === 'signup') {
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Error",
          description: "Las contraseñas no coinciden.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }
      if (!formData.termsAccepted) {
        toast({
          title: "Error",
          description: "Debes aceptar la Política de Privacidad y los Términos de Servicio.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }
    }

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      onOpenChange(false);
      toast({
        title: activeTab === 'signup' ? "¡Cuenta creada!" : "¡Bienvenido de nuevo!",
        description: activeTab === 'signup' 
          ? "Por favor, verifica tu correo electrónico." 
          : "Has iniciado sesión correctamente.",
        duration: 5000,
        className: "bg-green-600 text-white border-none"
      });
      setFormData({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false
      });
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[450px] p-0 border-none bg-transparent shadow-none overflow-hidden">
        <DialogTitle className="sr-only">Authentication</DialogTitle>
        
        {/* Reflective Glass Card Container */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-[#050508]/80 backdrop-blur-xl shadow-2xl">
          
          {/* Dynamic Background - Gradientes suaves sin blur */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-08" 
              style={{ 
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0) 70%)',
                transform: 'translateZ(0)',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden'
              }} 
            />
            <div 
              className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full opacity-04" 
              style={{ 
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0) 70%)',
                transform: 'translateZ(0)',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden'
              }} 
            />
          </div>

          {/* Card Content */}
          <div className="relative z-20 flex flex-col h-full">
            
            {/* Header with Logo */}
            <div className="flex flex-col items-center pt-8 pb-4">
               <img 
                 src="https://horizons-cdn.hostinger.com/7374c107-f8ac-4061-8bc8-58e7fc5c4c31/b370402ce6ff35b060faa7aac79643d0.png" 
                 alt="BWAY Productions Logo" 
                 className="h-12 w-auto mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
               />
            </div>

            {/* Glassy Tabs */}
            <div className="px-8 pb-6">
              <div className="flex w-full bg-white/5 p-1 rounded-xl border border-white/20 backdrop-blur-md">
                <button
                  onClick={() => handleTabChange('login')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    activeTab === 'login' 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white shadow-[0_0_10px_rgba(34,211,238,0.2)] border border-cyan-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Iniciar Sesión
                </button>
                <button
                  onClick={() => handleTabChange('signup')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    activeTab === 'signup' 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white shadow-[0_0_10px_rgba(34,211,238,0.2)] border border-cyan-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  Crear Cuenta
                </button>
              </div>
            </div>

            <div className="px-8 pb-8">
              <div className="text-center mb-6">
                 <h2 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]">
                   {activeTab === 'login' ? 'Bienvenido de nuevo' : 'Únete a BWAY'}
                 </h2>
                 <p className="text-gray-400 text-xs font-light">
                   {activeTab === 'login' ? 'Ingresa tus credenciales para continuar' : 'Comienza tu viaje creativo hoy mismo'}
                 </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {activeTab === 'signup' && (
                  <div className="space-y-1.5">
                    <Label htmlFor="fullName" className="text-gray-300 font-medium text-xs ml-1">Nombre Completo</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Bway Prod"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50 rounded-lg h-10 transition-all duration-300 hover:bg-white/10"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
                
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-gray-300 font-medium text-xs ml-1">Correo Electrónico</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="bwayprod@gmail.com"
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50 rounded-lg h-10 transition-all duration-300 hover:bg-white/10"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="password" className="text-gray-300 font-medium text-xs ml-1">
                    {activeTab === 'signup' ? 'Contraseña (min. 8 chars)' : 'Contraseña'}
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50 rounded-lg h-10 pr-10 transition-all duration-300 hover:bg-white/10"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {activeTab === 'signup' && (
                  <div className="space-y-1.5">
                    <Label htmlFor="confirmPassword" className="text-gray-300 font-medium text-xs ml-1">Confirmar Contraseña</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-cyan-500/50 focus-visible:border-cyan-500/50 rounded-lg h-10 pr-10 transition-all duration-300 hover:bg-white/10"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        minLength={8}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'signup' && (
                  <div className="flex items-start space-x-2 pt-2 px-1">
                    <Checkbox 
                      id="terms" 
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: checked }))}
                      required
                      className="mt-0.5 border-white/30 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500 data-[state=checked]:text-white bg-white/5"
                    />
                    <Label htmlFor="terms" className="text-xs text-gray-400 leading-snug font-normal cursor-pointer">
                      Acepto la <span className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">Política de Privacidad</span> y los <span className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">Términos de Servicio</span>.
                    </Label>
                  </div>
                )}

                {activeTab === 'login' && (
                   <div className="flex justify-end px-1">
                     <a href="#" className="text-cyan-400 hover:underline text-xs font-medium hover:text-cyan-300 transition-colors" onClick={() => toast({ title: "🚧 Feature coming soon!" })}>
                       ¿Olvidaste tu contraseña?
                     </a>
                   </div>
                )}

                <Button 
                  type="submit" 
                  variant="default"
                  size="lg"
                  className="w-full mt-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white border-none shadow-lg shadow-purple-500/40 uppercase tracking-wider font-semibold"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {activeTab === 'login' ? "Iniciando Sesión..." : "Creando Cuenta..."}
                    </>
                  ) : (
                    activeTab === 'login' ? "Iniciar Sesión" : "Crear Cuenta"
                  )}
                </Button>
                
                {activeTab === 'login' && (
                  <div className="pt-4">
                    <div className="relative flex items-center justify-center mb-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/20"></div>
                      </div>
                      <div className="relative bg-[#050508]/80 backdrop-blur-md px-2 text-[10px] text-gray-400 uppercase font-medium rounded">
                        O continúa con
                      </div>
                    </div>
                    
                    <div className="flex justify-center gap-4">
                      <button 
                        type="button" 
                        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-cyan-500/50 hover:scale-105 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                        onClick={() => toast({ title: "🚧 Social login coming soon!" })}
                      >
                        <GoogleIcon />
                      </button>
                      <button 
                        type="button" 
                        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/20 hover:border-cyan-500/50 hover:scale-105 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                        onClick={() => toast({ title: "🚧 Social login coming soon!" })}
                      >
                        <FacebookIcon />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
