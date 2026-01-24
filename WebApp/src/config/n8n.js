/**
 * Configuración para la integración con n8n
 * 
 * Para conectar el chatbot a tu workflow de n8n:
 * 1. Crea un webhook en n8n
 * 2. Copia la URL del webhook
 * 3. Agrega la URL como variable de entorno o aquí directamente
 */

// URL del webhook de n8n
// Puedes obtenerla desde tu workflow de n8n: Webhook node → Copy URL
export const N8N_WEBHOOK_URL =
  import.meta.env.VITE_N8N_WEBHOOK_URL ||
  'https://smarty-n8n.ovvp1f.easypanel.host/webhook/cc0bdad8-fff5-4641-9d2c-4faf4c1f1e01';

// Configuración adicional
export const N8N_CONFIG = {
  timeout: 30000, // 30 segundos timeout
  retryAttempts: 2, // Intentos de reintento en caso de error
};
