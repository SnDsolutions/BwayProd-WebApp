# 🚀 Guía Completa: Subir a Hostinger

## Método 1: FileZilla (FTP) - RECOMENDADO

### Paso 1: Instalar FileZilla

1. Descarga FileZilla desde: https://filezilla-project.org/download.php?type=client
2. Instala la aplicación en tu computadora

### Paso 2: Obtener credenciales FTP de Hostinger

1. Inicia sesión en tu panel de Hostinger (hpanel.hostinger.com)
2. Ve a **FTP Accounts** o **Cuentas FTP**
3. Anota:
   - **Host/Servidor FTP**: (ej: ftp.tudominio.com o una IP)
   - **Usuario FTP**: (tu usuario)
   - **Contraseña FTP**: (tu contraseña)
   - **Puerto**: 21 (FTP) o 22 (SFTP - más seguro)

### Paso 3: Preparar el proyecto

Ejecuta en la terminal:

```bash
./prepare-deploy.sh
```

Esto creará la carpeta `dist/` lista para subir.

### Paso 4: Conectar con FileZilla

1. Abre FileZilla
2. En la parte superior, ingresa:
   - **Host**: Tu servidor FTP
   - **Usuario**: Tu usuario FTP
   - **Contraseña**: Tu contraseña FTP
   - **Puerto**: 21 (o 22 para SFTP)
3. Click en **Conexión rápida**

### Paso 5: Navegar a la carpeta pública

En el panel derecho (servidor remoto):
1. Navega a la carpeta de tu dominio
2. Normalmente es: `public_html` o `htdocs` o `www`
3. Si tienes múltiples dominios, busca la carpeta de `bwayprod.com`

### Paso 6: Hacer backup (IMPORTANTE)

**ANTES de subir nada:**
1. Selecciona todos los archivos actuales en el servidor
2. Click derecho → **Descargar** (guárdalos en una carpeta "backup" en tu PC)
3. O renombra la carpeta actual a `backup_20241228`

### Paso 7: Subir los archivos

En el panel izquierdo (tu computadora):
1. Navega a la carpeta `dist/` del proyecto
2. Selecciona **TODOS** los archivos y carpetas:
   - `index.html`
   - `.htaccess` ⚠️ (MUY IMPORTANTE)
   - `robots.txt`
   - `sitemap.xml`
   - `assets/` (carpeta completa)
   - `llms.txt` (si existe)

3. Arrastra y suelta todo al panel derecho (servidor)
4. Espera a que termine la transferencia

### Paso 8: Verificar permisos

1. Click derecho en cada archivo/carpeta en el servidor
2. **Permisos de archivo** → Verifica:
   - Archivos: `644`
   - Carpetas: `755`

---

## Método 2: File Manager de Hostinger

### Paso 1: Preparar el proyecto

```bash
./prepare-deploy.sh
```

### Paso 2: Acceder al File Manager

1. Inicia sesión en hpanel.hostinger.com
2. Ve a **File Manager** o **Administrador de archivos**
3. Navega a `public_html` (o la carpeta de tu dominio)

### Paso 3: Hacer backup

1. Selecciona todos los archivos actuales
2. Click en **Comprimir** → Crea un archivo ZIP
3. Descarga el ZIP como backup

### Paso 4: Subir archivos

1. Click en **Subir** o **Upload**
2. Selecciona todos los archivos de la carpeta `dist/`:
   - Selecciona múltiples archivos (mantén Ctrl/Cmd presionado)
   - O sube la carpeta completa
3. Espera a que termine la carga

### Paso 5: Verificar

1. Asegúrate de que `.htaccess` esté en la raíz
2. Verifica que la carpeta `assets/` esté completa

---

## Método 3: Terminal/SSH (Avanzado)

Si tienes acceso SSH:

```bash
# 1. Comprimir los archivos
cd dist/
tar -czf deploy.tar.gz *

# 2. Subir al servidor (reemplaza con tus datos)
scp deploy.tar.gz usuario@tuservidor.com:/home/usuario/public_html/

# 3. Conectarte por SSH
ssh usuario@tuservidor.com

# 4. Descomprimir en el servidor
cd public_html/
tar -xzf deploy.tar.gz
rm deploy.tar.gz
```

---

## ✅ Verificación Post-Despliegue

Después de subir, verifica:

1. **Página principal**: https://bwayprod.com/
   - ✅ Debe cargar sin errores
   - ✅ Los estilos deben verse correctamente

2. **Rutas de navegación**:
   - ✅ https://bwayprod.com/servicios
   - ✅ https://bwayprod.com/portafolio
   - ✅ https://bwayprod.com/planes
   - ✅ https://bwayprod.com/reservas
   - ✅ https://bwayprod.com/contacto

3. **Consola del navegador** (F12):
   - ✅ No debe haber errores en rojo
   - ✅ Los recursos (CSS, JS) deben cargar (status 200)

4. **Archivo .htaccess**:
   - ✅ Debe estar en la raíz del servidor
   - ✅ Sin esto, las rutas darán error 404

---

## 🐛 Solución de Problemas

### Error 404 en todas las rutas

**Problema**: El `.htaccess` no está o no funciona

**Solución**:
1. Verifica que `.htaccess` esté en la raíz de `public_html`
2. Verifica que el módulo `mod_rewrite` esté habilitado (contacta a Hostinger si no)
3. Verifica los permisos del archivo (644)

### Los estilos no se cargan

**Problema**: La carpeta `assets/` no se subió completa

**Solución**:
1. Verifica que la carpeta `assets/` esté en el servidor
2. Verifica que contenga los archivos CSS y JS
3. Limpia la caché del navegador (Ctrl+Shift+R)

### El sitio muestra contenido antiguo

**Problema**: Caché del navegador o CDN

**Solución**:
1. Limpia la caché del navegador
2. Si Hostinger usa CDN, purga la caché desde el panel
3. Prueba en modo incógnito

### Error de permisos

**Problema**: Los archivos no tienen los permisos correctos

**Solución**:
- Archivos: 644
- Carpetas: 755
- Puedes cambiarlos desde FileZilla o el File Manager

---

## 📋 Checklist Final

Antes de considerar el despliegue completo:

- [ ] Ejecuté `./prepare-deploy.sh` exitosamente
- [ ] Hice backup de los archivos actuales en el servidor
- [ ] Subí todos los archivos de `dist/` al servidor
- [ ] El archivo `.htaccess` está en la raíz del servidor
- [ ] La carpeta `assets/` está completa en el servidor
- [ ] Verifiqué que https://bwayprod.com/ carga correctamente
- [ ] Probé todas las rutas de navegación
- [ ] No hay errores en la consola del navegador
- [ ] Los estilos se cargan correctamente

---

## 🆘 ¿Necesitas ayuda?

Si tienes problemas:
1. Revisa los logs del servidor en el panel de Hostinger
2. Verifica la consola del navegador (F12) para errores específicos
3. Contacta al soporte de Hostinger si es un problema del servidor

