# 🤖 Configuración de CI/CD Automático

Este proyecto está configurado para desplegarse automáticamente a producción cada vez que hagas un `push` a la rama `main` o `master`.

## 🎯 Cómo Funciona

1. **Haces cambios** en tu código
2. **Haces commit y push** a GitHub
3. **GitHub Actions detecta** el push automáticamente
4. **Construye la aplicación** en un servidor limpio
5. **Despliega automáticamente** a Hostinger vía FTP
6. **Los cambios aparecen** en https://bwayprod.com/ en 2-5 minutos

## ⚙️ Configuración Inicial (Solo una vez)

### Paso 1: Configurar Secrets en GitHub

1. Ve a tu repositorio en GitHub: `https://github.com/SnDsolutions/BwayProd-WebApp`
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, haz clic en **Secrets and variables** → **Actions**
4. Haz clic en **New repository secret**
5. Agrega los siguientes secrets uno por uno:

#### Secrets Requeridos:

| Secret Name | Descripción | Ejemplo |
|------------|-------------|---------|
| `DEPLOY_HOST` | Servidor FTP de Hostinger | `ftp.bwayprod.com` o `files.000webhostapp.com` |
| `DEPLOY_USER` | Usuario FTP | `u123456789` |
| `DEPLOY_PASSWORD` | Contraseña FTP | `tu-contraseña-segura` |
| `DEPLOY_PORT` | Puerto FTP (opcional) | `21` para FTP, `22` para SFTP |
| `DEPLOY_SECURE` | Usar conexión segura (opcional) | `false` para FTP, `true` para SFTP/FTPS |
| `DEPLOY_PATH` | Ruta en el servidor (opcional) | `/public_html` |

### Paso 2: Obtener Credenciales FTP de Hostinger

1. Inicia sesión en tu panel de Hostinger: https://hpanel.hostinger.com/
2. Ve a **FTP Accounts** o **Cuentas FTP**
3. Si no tienes una cuenta FTP, créala:
   - Usuario: elige un nombre
   - Contraseña: genera una contraseña segura
   - Directorio: `/public_html` (o la ruta donde está tu sitio)
4. Copia los datos:
   - **Host**: `ftp.tudominio.com` o similar
   - **Usuario**: el nombre que elegiste
   - **Contraseña**: la contraseña que generaste
   - **Puerto**: normalmente `21` para FTP

### Paso 3: Agregar Secrets a GitHub

Para cada secret:

1. **Nombre del secret**: `DEPLOY_HOST`
2. **Valor**: `ftp.bwayprod.com` (tu host FTP)
3. Haz clic en **Add secret**

Repite para todos los secrets necesarios.

## ✅ Verificar que Funciona

1. Haz un pequeño cambio en el código (por ejemplo, un comentario)
2. Haz commit y push:
   ```bash
   git add .
   git commit -m "Test: verificar CI/CD automático"
   git push origin main
   ```
3. Ve a la pestaña **Actions** en GitHub
4. Verás un workflow ejecutándose llamado "🚀 Deploy to Production"
5. Espera 2-5 minutos
6. Verifica que los cambios aparecieron en https://bwayprod.com/

## 📊 Monitorear Despliegues

- **Ver historial**: Ve a la pestaña **Actions** en GitHub
- **Ver logs**: Haz clic en cualquier workflow para ver los logs detallados
- **Ver estado**: Un ✅ verde significa éxito, ❌ rojo significa error

## 🔒 Seguridad

- ✅ Los secrets están encriptados y solo son accesibles durante la ejecución del workflow
- ✅ Los secrets NO aparecen en los logs (GitHub los oculta automáticamente)
- ✅ Solo las personas con acceso al repositorio pueden ver/editar los secrets

## 🚨 Solución de Problemas

### El despliegue falla con "Faltan variables de configuración"

- Verifica que agregaste todos los secrets requeridos en GitHub
- Asegúrate de que los nombres de los secrets sean exactamente: `DEPLOY_HOST`, `DEPLOY_USER`, `DEPLOY_PASSWORD`

### El despliegue falla con "Connection refused"

- Verifica que `DEPLOY_HOST` y `DEPLOY_PORT` sean correctos
- Verifica que `DEPLOY_SECURE` esté configurado correctamente (`false` para FTP, `true` para SFTP)

### El despliegue funciona pero no veo los cambios

- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)
- Verifica que `DEPLOY_PATH` apunte a la carpeta correcta en el servidor
- Espera unos minutos, a veces hay un pequeño delay

### Quiero desplegar manualmente sin hacer push

1. Ve a la pestaña **Actions** en GitHub
2. Selecciona el workflow "🚀 Deploy to Production"
3. Haz clic en **Run workflow**
4. Selecciona la rama y haz clic en **Run workflow**

## 📝 Notas Importantes

- ⚠️ **Solo se despliega desde `main` o `master`**: Los pushes a otras ramas no activan el despliegue
- ⚠️ **Solo se despliegan cambios en `WebApp/`**: Cambios fuera de esta carpeta no activan el despliegue
- ✅ **Puedes desactivar el despliegue automático**: Simplemente no hagas push a `main`, o edita el workflow para deshabilitarlo

## 🎉 ¡Listo!

Una vez configurado, cada vez que hagas `git push` a `main`, tu sitio se desplegará automáticamente. ¡No más comandos manuales!
