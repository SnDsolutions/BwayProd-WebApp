# 🤖 Despliegue Automatizado a Hostinger

Ahora puedes desplegar tu sitio a Hostinger con un solo comando. Hay dos métodos disponibles:

## 🚀 Método 1: Node.js (FTP/SFTP) - RECOMENDADO

Este método funciona con FTP y SFTP, y no requiere acceso SSH.

### Paso 1: Instalar dependencia

```bash
npm install --save-dev basic-ftp
```

### Paso 2: Configurar credenciales

1. Copia el archivo de ejemplo:
   ```bash
   cp env.deploy.example .env.deploy
   ```

2. Edita `.env.deploy` con tus credenciales de Hostinger:
   ```env
   DEPLOY_HOST=ftp.tudominio.com
   DEPLOY_USER=tu-usuario-ftp
   DEPLOY_PASSWORD=tu-contraseña-ftp
   DEPLOY_PORT=21
   DEPLOY_SECURE=false
   DEPLOY_PATH=/public_html
   ```

   **Importante:** 
   - Para FTP normal: `DEPLOY_PORT=21` y `DEPLOY_SECURE=false`
   - Para SFTP: `DEPLOY_PORT=22` y `DEPLOY_SECURE=true`

### Paso 3: Desplegar

```bash
npm run deploy
```

O manualmente:
```bash
./prepare-deploy.sh
node deploy-node.js
```

¡Eso es todo! El script automáticamente:
- ✅ Construye la aplicación
- ✅ Verifica los archivos
- ✅ Se conecta al servidor
- ✅ Sube todos los archivos
- ✅ Muestra el progreso

---

## 🔐 Método 2: SSH (rsync/scp)

Este método requiere acceso SSH al servidor y es más rápido.

### Paso 1: Configurar credenciales

Crea el archivo `.env.deploy`:

```env
DEPLOY_HOST=tu-servidor.com
DEPLOY_USER=tu-usuario-ssh
DEPLOY_PATH=/home/usuario/public_html
DEPLOY_PORT=22
```

**Nota:** No incluyas la contraseña aquí. Usa autenticación por clave SSH.

### Paso 2: Configurar SSH sin contraseña (opcional pero recomendado)

```bash
# Generar clave SSH si no tienes una
ssh-keygen -t rsa -b 4096

# Copiar clave al servidor
ssh-copy-id usuario@tu-servidor.com
```

### Paso 3: Desplegar

```bash
npm run deploy:ssh
```

O manualmente:
```bash
./prepare-deploy.sh
./deploy-ftp.sh
```

---

## 📋 Comparación de Métodos

| Característica | Node.js (FTP) | SSH (rsync) |
|----------------|---------------|-------------|
| Requiere SSH | ❌ No | ✅ Sí |
| Velocidad | Media | Rápida |
| Facilidad | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Seguridad | FTP/SFTP | SSH |
| Recomendado para | Principiantes | Avanzados |

---

## 🔒 Seguridad

### Proteger el archivo .env.deploy

El archivo `.env.deploy` contiene credenciales sensibles. Asegúrate de:

1. **No subirlo a Git:**
   - Ya está en `.gitignore`
   - Verifica que no esté en el repositorio

2. **Permisos del archivo:**
   ```bash
   chmod 600 .env.deploy
   ```

3. **Usar variables de entorno (alternativa):**
   ```bash
   export DEPLOY_HOST=tu-servidor.com
   export DEPLOY_USER=tu-usuario
   export DEPLOY_PASSWORD=tu-contraseña
   npm run deploy
   ```

---

## 🎯 Uso Rápido

### Despliegue completo (build + deploy):

```bash
npm run deploy
```

### Solo construir (sin desplegar):

```bash
./prepare-deploy.sh
```

### Solo desplegar (si ya construiste):

```bash
node deploy-node.js
# o
./deploy-ftp.sh
```

---

## 🐛 Solución de Problemas

### Error: "Cannot find module 'basic-ftp'"

**Solución:**
```bash
npm install --save-dev basic-ftp
```

### Error: "Connection refused" o "Timeout"

**Posibles causas:**
- Puerto incorrecto (verifica 21 para FTP, 22 para SFTP)
- Firewall bloqueando la conexión
- Credenciales incorrectas

**Solución:**
- Verifica las credenciales en el panel de Hostinger
- Prueba con FileZilla primero para confirmar que funcionan
- Verifica que el puerto sea correcto

### Error: "Permission denied" (SSH)

**Solución:**
- Configura autenticación por clave SSH
- Verifica que el usuario tenga permisos en la ruta de destino

### Los archivos se suben pero el sitio no funciona

**Solución:**
- Verifica que el `.htaccess` se subió correctamente
- Verifica los permisos de archivos (644 para archivos, 755 para carpetas)
- Limpia la caché del navegador

---

## 📝 Ejemplo Completo

```bash
# 1. Instalar dependencia (solo la primera vez)
npm install --save-dev basic-ftp

# 2. Configurar credenciales (solo la primera vez)
cp .env.deploy.example .env.deploy
# Edita .env.deploy con tus datos

# 3. Desplegar (cada vez que quieras actualizar)
npm run deploy
```

---

## ✅ Checklist Pre-Despliegue

- [ ] Instalé `basic-ftp` (si uso método Node.js)
- [ ] Configuré `.env.deploy` con mis credenciales
- [ ] Verifiqué que las credenciales son correctas
- [ ] Probé la conexión con FileZilla (opcional pero recomendado)
- [ ] Hice un backup del sitio actual

---

## 🎉 ¡Listo!

Ahora puedes desplegar tu sitio con un solo comando:

```bash
npm run deploy
```

El proceso es completamente automatizado y te mostrará el progreso en tiempo real.

