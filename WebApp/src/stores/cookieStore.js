import { create } from 'zustand';
import { getCookie, setCookie, deleteCookie } from '@/utils/cookies';

const COOKIE_CONSENT_KEY = 'cookie-consent';

/**
 * Tipos de cookies disponibles
 */
export const COOKIE_TYPES = {
  NECESSARY: 'necessary',
  ANALYTICS: 'analytics',
  MARKETING: 'marketing',
  FUNCTIONAL: 'functional',
};

/**
 * Store para manejar el consentimiento de cookies
 */
export const useCookieStore = create((set, get) => {
  // Estado inicial - intentar cargar desde cookies
  const loadInitialState = () => {
    const consent = getCookie(COOKIE_CONSENT_KEY);
    if (consent) {
      try {
        const preferences = JSON.parse(consent);
        return {
          consentGiven: true,
          cookiePreferences: {
            [COOKIE_TYPES.NECESSARY]: true,
            [COOKIE_TYPES.ANALYTICS]: preferences[COOKIE_TYPES.ANALYTICS] || false,
            [COOKIE_TYPES.MARKETING]: preferences[COOKIE_TYPES.MARKETING] || false,
            [COOKIE_TYPES.FUNCTIONAL]: preferences[COOKIE_TYPES.FUNCTIONAL] || false,
          },
          showBanner: false,
        };
      } catch (e) {
        console.error('Error parsing cookie consent:', e);
      }
    }
    return {
      consentGiven: false,
      cookiePreferences: {
        [COOKIE_TYPES.NECESSARY]: true,
        [COOKIE_TYPES.ANALYTICS]: false,
        [COOKIE_TYPES.MARKETING]: false,
        [COOKIE_TYPES.FUNCTIONAL]: false,
      },
      showBanner: true,
    };
  };

  return {
    ...loadInitialState(),

    // Inicializar desde cookies (método para re-cargar)
    init: () => {
      const state = loadInitialState();
      set(state);
    },

      // Aceptar todas las cookies
      acceptAll: () => {
        const preferences = {
          [COOKIE_TYPES.NECESSARY]: true,
          [COOKIE_TYPES.ANALYTICS]: true,
          [COOKIE_TYPES.MARKETING]: true,
          [COOKIE_TYPES.FUNCTIONAL]: true,
        };
        setCookie(COOKIE_CONSENT_KEY, JSON.stringify(preferences), 365);
        set({
          consentGiven: true,
          cookiePreferences: preferences,
          showBanner: false,
        });
      },

      // Rechazar todas excepto las necesarias
      rejectAll: () => {
        const preferences = {
          [COOKIE_TYPES.NECESSARY]: true,
          [COOKIE_TYPES.ANALYTICS]: false,
          [COOKIE_TYPES.MARKETING]: false,
          [COOKIE_TYPES.FUNCTIONAL]: false,
        };
        setCookie(COOKIE_CONSENT_KEY, JSON.stringify(preferences), 365);
        set({
          consentGiven: true,
          cookiePreferences: preferences,
          showBanner: false,
        });
      },

      // Guardar preferencias personalizadas
      savePreferences: (preferences) => {
        const finalPreferences = {
          ...preferences,
          [COOKIE_TYPES.NECESSARY]: true, // Siempre necesario
        };
        setCookie(COOKIE_CONSENT_KEY, JSON.stringify(finalPreferences), 365);
        set({
          consentGiven: true,
          cookiePreferences: finalPreferences,
          showBanner: false,
        });
      },

      // Toggle de una preferencia específica
      togglePreference: (type) => {
        if (type === COOKIE_TYPES.NECESSARY) return; // No se puede desactivar
        
        const current = get().cookiePreferences;
        const updated = {
          ...current,
          [type]: !current[type],
        };
        get().savePreferences(updated);
      },

      // Mostrar el banner nuevamente
      showBannerAgain: () => {
        set({ showBanner: true });
      },

      // Verificar si un tipo de cookie está permitido
      isAllowed: (type) => {
        return get().cookiePreferences[type] === true;
      },
    };
});
