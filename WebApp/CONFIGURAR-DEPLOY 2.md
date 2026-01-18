# 🔧 Cómo Configurar el Despliegue Automatizado

## 📝 Paso 1: Obtener tus credenciales FTP de Hostinger

1. **Inicia sesión en Hostinger:**
   - Ve a: https://hpanel.hostinger.com/
   - Ingresa con tu cuenta

2. **Encuentra las credenciales FTP:**
   - Busca la sección **"FTP Accounts"** o **"Cuentas FTP"**
   - O ve a **"Files"** → **"FTP Accounts"**

3. **Anota la siguiente información:**
   - ✅ **Host/Servidor FTP** (ej: `ftp.tudominio.com` o una IP como `123.456.789.0`)
   - ✅ **Usuario FTP** (tu nombre de usuario)
   - ✅ **Contraseña FTP** (tu contraseña)
   - ✅ **Puerto** (normalmente `21` para FTP o `22` para SFTP)

---

## 📝 Paso 2: Editar el archivo .env.deploy

Abre el archivo `.env.deploy` en tu editor y reemplaza los valores de ejemplo con tus datos reales:

```env
# Servidor FTP/SFTP
DEPLOY_HOST=ftp.tudominio.com
# ⬆️ Reemplaza con tu servidor FTP de Hostinger

# Credenciales
DEPLOY_USER=tu-usuario-ftp
# ⬆️ Reemplaza con tu usuario FTP

DEPLOY_PASSWORD=tu-contraseña-ftp
# ⬆️ Reemplaza con tu contraseña FTP

# Puerto (21 para FTP, 22 para SFTP)
DEPLOY_PORT=21
# ⬆️ Normalmente 21 para FTP, 22 para SFTP

# Tipo de conexión (true para SFTP/FTPS, false para FTP)
DEPLOY_SECURE=false
# ⬆️ false para FTP normal, true para SFTP/FTPS

# Ruta en el servidor donde se subirán los archivos
DEPLOY_PATH=/public_html
# ⬆️ Normalmente /public_html, pero puede variar
```

---

## 📋 Ejemplo Real

Aquí tienes un ejemplo de cómo debería verse (con datos ficticios):

```env
DEPLOY_HOST=ftp.bwayprod.com
DEPLOY_USER=usuario123
DEPLOY_PASSWORD=MiContraseñaSegura123
DEPLOY_PORT=21
DEPLOY_SECURE=false
DEPLOY_PATH=/public_html
```

---

## 🔍 ¿Cómo saber la ruta correcta (DEPLOY_PATH)?

La ruta puede variar según tu plan de Hostinger:

- **Plan compartido:** `/public_html`
- **Plan VPS:** `/home/usuario/public_html` o `/var/www/html`
- **Dominio específico:** `/public_html/bwayprod.com` o similar

**Para encontrarla:**
1. Conéctate con FileZilla usando tus credenciales
2. Navega hasta donde están los archivos actuales de tu sitio
3. Esa es la ruta que debes usar en `DEPLOY_PATH`

---

## 🔒 Paso 3: Proteger el archivo

Después de configurarlo, protege el archivo con permisos restrictivos:

```bash
chmod 600 .env.deploy
```

Esto asegura que solo tú puedas leerlo.

---

## ✅ Paso 4: Probar la conexión

Antes de desplegar, puedes probar que las credenciales funcionan:

```bash
# Esto intentará conectarse y mostrará si hay errores
node deploy-node.js
```

Si hay errores de conexión, verifica:
- ✅ Las credenciales están correctas
- ✅ El puerto es correcto (21 para FTP, 22 para SFTP)
- ✅ `DEPLOY_SECURE` coincide con el tipo de conexión
- ✅ La ruta `DEPLOY_PATH` es correcta

---

## 🚀 Paso 5: Desplegar

Una vez configurado correctamente:

```bash
npm run deploy
```

---

## 🆘 Problemas Comunes

### Error: "Connection refused" o "Timeout"

**Solución:**
- Verifica que el `DEPLOY_HOST` sea correcto
- Prueba con FileZilla primero para confirmar que las credenciales funcionan
- Verifica que el puerto sea correcto

### Error: "Authentication failed"

**Solución:**
- Verifica que `DEPLOY_USER` y `DEPLOY_PASSWORD` sean correctos
- Asegúrate de no tener espacios extra al inicio o final
- Prueba las credenciales en FileZilla

### Error: "Cannot change directory"

**Solución:**
- Verifica que `DEPLOY_PATH` sea la ruta correcta
- Prueba con `/public_html` primero
- Si tienes múltiples dominios, puede ser `/public_html/bwayprod.com`

### Los archivos se suben pero el sitio no funciona

**Solución:**
- Verifica que el `.htaccess` se subió correctamente
- Verifica los permisos de archivos (644 para archivos, 755 para carpetas)
- Limpia la caché del navegador

---

## 💡 Tip: Probar con FileZilla primero

Antes de usar el script automatizado, te recomiendo:

1. Conectarte con FileZilla usando las mismas credenciales
2. Confirmar que puedes acceder al servidor
3. Verificar la ruta exacta donde están tus archivos
4. Luego usar esas mismas credenciales en `.env.deploy`

Esto te ayudará a identificar cualquier problema de configuración antes de automatizar.

---

## ✅ Checklist

- [ ] Obtuve mis credenciales FTP de Hostinger
- [ ] Edité `.env.deploy` con mis datos reales
- [ ] Configuré `DEPLOY_PATH` correctamente
- [ ] Protegí el archivo con `chmod 600 .env.deploy`
- [ ] Probé la conexión (opcional pero recomendado)
- [ ] Estoy listo para desplegar con `npm run deploy`

---

¿Listo? ¡Ahora puedes desplegar con un solo comando! 🚀

