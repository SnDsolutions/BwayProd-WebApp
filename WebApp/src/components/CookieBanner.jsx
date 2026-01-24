import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Settings, Cookie, X, Check } from 'lucide-react';
import { useCookieStore, COOKIE_TYPES } from '@/stores/cookieStore';
import { cn } from '@/lib/utils';

const CookieBanner = () => {
  const {
    showBanner,
    consentGiven,
    cookiePreferences,
    acceptAll,
    rejectAll,
    savePreferences,
    togglePreference,
    init,
    showBannerAgain,
  } = useCookieStore();

  const [showSettings, setShowSettings] = useState(false);
  const [tempPreferences, setTempPreferences] = useState(cookiePreferences);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    setTempPreferences(cookiePreferences);
  }, [cookiePreferences]);

  const handleSavePreferences = () => {
    savePreferences(tempPreferences);
    setShowSettings(false);
  };

  const cookieTypesInfo = {
    [COOKIE_TYPES.NECESSARY]: {
      title: 'Cookies Necesarias',
      description: 'Estas cookies son esenciales para el funcionamiento del sitio web. No se pueden desactivar.',
      required: true,
    },
    [COOKIE_TYPES.ANALYTICS]: {
      title: 'Cookies Analíticas',
      description: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web recopilando información de forma anónima.',
      required: false,
    },
    [COOKIE_TYPES.MARKETING]: {
      title: 'Cookies de Marketing',
      description: 'Se utilizan para rastrear a los visitantes a través de sitios web con la intención de mostrar anuncios relevantes.',
      required: false,
    },
    [COOKIE_TYPES.FUNCTIONAL]: {
      title: 'Cookies Funcionales',
      description: 'Permiten que el sitio web recuerde las elecciones que haces y proporcionan características mejoradas y más personales.',
      required: false,
    },
  };

  if (!showBanner && consentGiven) {
    return (
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-grafito/90 backdrop-blur-md border border-white/20 text-white hover:bg-grafito hover:border-dark-accent/50 transition-all duration-300 shadow-lg"
        onClick={showBannerAgain}
        aria-label="Gestionar cookies"
      >
        <Cookie className="w-5 h-5" />
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="relative bg-grafito/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dark-accent via-purple-500 to-dark-accent rounded-t-2xl" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon and Content */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 rounded-full bg-dark-accent/20 border border-dark-accent/30">
                    <Cookie className="w-6 h-6 text-dark-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 font-montserrat">
                      Política de Cookies
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                      Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el contenido. 
                      Al hacer clic en "Aceptar todas", aceptas nuestro uso de cookies.{' '}
                      <button
                        onClick={() => setShowSettings(true)}
                        className="text-dark-accent hover:text-dark-accent/80 underline font-medium"
                      >
                        Más información
                      </button>
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowSettings(true)}
                    className="whitespace-nowrap"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Personalizar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={rejectAll}
                    className="whitespace-nowrap"
                  >
                    Rechazar
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={acceptAll}
                    className="whitespace-nowrap bg-dark-accent/20 hover:bg-dark-accent/30 border-dark-accent/50 text-white"
                  >
                    Aceptar todas
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-grafito border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white font-montserrat flex items-center gap-2">
              <Settings className="w-6 h-6 text-dark-accent" />
              Configuración de Cookies
            </DialogTitle>
            <DialogDescription className="text-white/70">
              Gestiona tus preferencias de cookies. Puedes activar o desactivar diferentes tipos de cookies según tus necesidades.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            {Object.entries(cookieTypesInfo).map(([type, info]) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "p-4 rounded-lg border transition-all duration-200",
                  tempPreferences[type]
                    ? "bg-dark-accent/10 border-dark-accent/30"
                    : "bg-white/5 border-white/10"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      {info.required && (
                        <span className="text-xs px-2 py-0.5 bg-dark-accent/20 text-dark-accent rounded-full border border-dark-accent/30">
                          Requerido
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {info.description}
                    </p>
                  </div>
                  <Checkbox
                    checked={tempPreferences[type]}
                    onCheckedChange={() => {
                      if (!info.required) {
                        setTempPreferences((prev) => ({
                          ...prev,
                          [type]: !prev[type],
                        }));
                      }
                    }}
                    disabled={info.required}
                    className={cn(
                      "mt-1",
                      info.required && "opacity-50 cursor-not-allowed"
                    )}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-white/10">
            <Button
              variant="outline"
              onClick={() => {
                setTempPreferences(cookiePreferences);
                setShowSettings(false);
              }}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              variant="default"
              onClick={handleSavePreferences}
              className="flex-1 bg-dark-accent/20 hover:bg-dark-accent/30 border-dark-accent/50 text-white"
            >
              <Check className="w-4 h-4 mr-2" />
              Guardar Preferencias
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </AnimatePresence>
  );
};

export default CookieBanner;
