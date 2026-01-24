import { useCookieStore, COOKIE_TYPES } from '@/stores/cookieStore';

/**
 * Hook para verificar el consentimiento de cookies
 * Úsalo en componentes que necesiten verificar si pueden usar ciertos tipos de cookies
 * 
 * @example
 * const { isAllowed } = useCookieConsent();
 * 
 * useEffect(() => {
 *   if (isAllowed(COOKIE_TYPES.ANALYTICS)) {
 *     // Inicializar Google Analytics u otro servicio de analytics
 *   }
 * }, [isAllowed]);
 */
export const useCookieConsent = () => {
  const isAllowed = useCookieStore((state) => state.isAllowed);
  const cookiePreferences = useCookieStore((state) => state.cookiePreferences);
  const consentGiven = useCookieStore((state) => state.consentGiven);

  return {
    isAllowed,
    cookiePreferences,
    consentGiven,
    // Helpers específicos
    canUseAnalytics: () => isAllowed(COOKIE_TYPES.ANALYTICS),
    canUseMarketing: () => isAllowed(COOKIE_TYPES.MARKETING),
    canUseFunctional: () => isAllowed(COOKIE_TYPES.FUNCTIONAL),
  };
};
