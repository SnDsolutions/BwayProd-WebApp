# 🔗 Configuración de Integración con n8n

## 📋 Resumen

El chatbot ahora está configurado para conectarse con tu workflow de n8n. Cuando un usuario envía un mensaje, se envía a tu webhook de n8n y la respuesta del agente se muestra en el chatbot.

## ⚙️ Configuración

### Paso 1: Obtener la URL del Webhook de n8n

1. Abre tu workflow de n8n
2. Agrega o localiza el nodo **Webhook**
3. Configura el webhook:
   - **HTTP Method**: `POST`
   - **Path**: Elige un path único (ej: `/bway-chatbot`)
   - **Response Mode**: `Last Node` o `Using 'Respond to Webhook' Node`
4. Copia la URL completa del webhook (ej: `https://tu-n8n.com/webhook/bway-chatbot`)

### Paso 2: Configurar la URL en el Proyecto

Tienes dos opciones:

#### Opción A: Variable de Entorno (Recomendado)

1. Crea un archivo `.env` en la carpeta `WebApp/`:
```bash
VITE_N8N_WEBHOOK_URL=https://tu-n8n.com/webhook/bway-chatbot
```

2. Reinicia el servidor de desarrollo:
```bash
npm run dev
```

#### Opción B: Configuración Directa

Edita el archivo `src/config/n8n.js` y reemplaza la URL:

```javascript
export const N8N_WEBHOOK_URL = 'https://tu-n8n.com/webhook/bway-chatbot';
```

### Paso 3: Formato de Datos que Envía el Chatbot

El chatbot envía un JSON con esta estructura:

```json
{
  "message": "Mensaje del usuario",
  "visitCount": 1,
  "timestamp": "2024-01-15T10:30:00.000Z",
  "context": {
    "page": "/reservas",
    "userAgent": "Mozilla/5.0..."
  }
}
```

### Paso 4: Formato de Respuesta Esperado de n8n

El chatbot espera que n8n devuelva la respuesta en uno de estos formatos:

**Opción 1: Objeto con campo `response`**
```json
{
  "response": "Respuesta del asistente"
}
```

**Opción 2: Objeto con campo `message`**
```json
{
  "message": "Respuesta del asistente"
}
```

**Opción 3: Objeto con campo `text`**
```json
{
  "text": "Respuesta del asistente"
}
```

**Opción 4: Objeto con campo `output`**
```json
{
  "output": "Respuesta del asistente"
}
```

**Opción 5: String directo**
```
"Respuesta del asistente"
```

## 🔧 Configuración del Workflow en n8n

### Estructura Recomendada:

```
Webhook → Edit Fields → OpenAI/Chat Model → Respond to Webhook
```

1. **Webhook Node**: Recibe el mensaje del chatbot
2. **Edit Fields Node**: Prepara los datos para el modelo
   - Extrae `message` del body
   - Agrega contexto adicional si es necesario
3. **OpenAI/Chat Model Node**: Procesa el mensaje con tu agente
   - Usa el System Message que ya tienes configurado
   - El prompt del usuario viene en `{{ $json.message }}`
4. **Respond to Webhook Node**: Devuelve la respuesta
   - Devuelve: `{ "response": "{{ $json.output }}" }`

### Ejemplo de Configuración del "Respond to Webhook" Node:

```json
{
  "response": "{{ $json.output }}"
}
```

O si tu modelo devuelve directamente el texto:

```json
{
  "response": "{{ $json.text }}"
}
```

## 🧪 Probar la Integración

1. Asegúrate de que tu workflow de n8n esté activo
2. Abre el chatbot en la página web
3. Envía un mensaje de prueba
4. Verifica en la consola del navegador (F12) si hay errores
5. Revisa los logs de n8n para ver si el webhook está recibiendo los datos

## 🐛 Solución de Problemas

### El chatbot no responde

1. **Verifica la URL del webhook**:
   - Abre la consola del navegador (F12)
   - Busca errores de red
   - Verifica que la URL sea correcta

2. **Verifica CORS**:
   - Si n8n está en un dominio diferente, asegúrate de configurar CORS
   - En n8n: Settings → CORS → Agrega tu dominio

3. **Verifica el formato de respuesta**:
   - Asegúrate de que n8n devuelva la respuesta en uno de los formatos esperados
   - Revisa los logs de n8n para ver qué está devolviendo

### El chatbot usa respuestas locales (fallback)

- Esto significa que la URL del webhook no está configurada o hay un error de conexión
- Verifica que `VITE_N8N_WEBHOOK_URL` esté configurada correctamente
- Revisa la consola del navegador para ver el error específico

### Timeout en las respuestas

- Por defecto hay un timeout de 30 segundos
- Si tu workflow de n8n tarda más, ajusta `N8N_CONFIG.timeout` en `src/config/n8n.js`

## 📝 Notas Importantes

- ⚠️ **No subas el archivo `.env` a Git**: Está en `.gitignore` por seguridad
- ✅ **El chatbot tiene fallback**: Si n8n no está disponible, usa respuestas locales
- 🔒 **Seguridad**: Considera agregar autenticación al webhook si es necesario
- 📊 **Monitoreo**: Revisa los logs de n8n para monitorear el uso del chatbot

## 🚀 Próximos Pasos

Una vez configurado, el chatbot:
- ✅ Enviará todos los mensajes a tu workflow de n8n
- ✅ Usará tu agente de OpenAI configurado en n8n
- ✅ Tendrá acceso a todas las herramientas (MCP Gmail, Calendar, etc.)
- ✅ Mantendrá el historial de conversación en Postgres (si lo tienes configurado)
