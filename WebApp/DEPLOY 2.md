# 🚀 Guía Rápida de Despliegue

## Proceso de Despliegue a https://bwayprod.com/

### 1️⃣ Construir la aplicación

```bash
npm run build
```

Esto creará la carpeta `dist/` con todos los archivos optimizados.

### 2️⃣ Verificar el build

Antes de subir, verifica que el build se haya creado correctamente:

```bash
ls -la dist/
```

Debes ver:
- ✅ `index.html`
- ✅ `assets/` (carpeta con CSS y JS)
- ✅ `.htaccess`
- ✅ `robots.txt`
- ✅ `sitemap.xml`

### 3️⃣ Subir a Hostinger

#### Método recomendado: FTP/SFTP

1. **Conecta a tu servidor FTP de Hostinger**
   - Host: (proporcionado por Hostinger)
   - Usuario: (tu usuario FTP)
   - Contraseña: (tu contraseña FTP)
   - Puerto: 21 (FTP) o 22 (SFTP)

2. **Navega a la carpeta pública**
   - Normalmente: `public_html` o `htdocs` o `www`

3. **Haz un backup** (IMPORTANTE)
   - Descarga los archivos actuales a una carpeta de backup
   - O renombra la carpeta actual a `backup_YYYYMMDD`

4. **Sube los archivos**
   - Sube **todo el contenido** de la carpeta `dist/`
   - Asegúrate de incluir:
     - Todos los archivos de la raíz (`index.html`, `.htaccess`, etc.)
     - La carpeta `assets/` completa

5. **Verifica permisos**
   - Archivos: 644
   - Carpetas: 755

### 4️⃣ Verificar el despliegue

1. Visita https://bwayprod.com/
2. Prueba todas las rutas:
   - `/` (página principal)
   - `/servicios`
   - `/portafolio`
   - `/planes`
   - `/reservas`
   - `/contacto`
3. Abre la consola del navegador (F12) y verifica que no haya errores
4. Verifica que los estilos se carguen correctamente

## ⚠️ Checklist Pre-Despliegue

- [ ] Ejecuté `npm run build` exitosamente
- [ ] Verifiqué que la carpeta `dist/` contiene todos los archivos
- [ ] Hice un backup de los archivos actuales en el servidor
- [ ] Tengo las credenciales FTP de Hostinger
- [ ] Verifiqué que el archivo `.htaccess` está en `dist/`

## 🔄 Proceso de Actualización Rápida

Para actualizar el sitio después de hacer cambios:

```bash
# 1. Construir
npm run build

# 2. Subir solo los archivos modificados o todo el contenido de dist/
```

## 🐛 Problemas Comunes

### Error 404 en rutas
- **Solución:** Verifica que el `.htaccess` esté en la raíz del servidor

### Estilos no se cargan
- **Solución:** Limpia la caché del navegador y verifica que la carpeta `assets/` se subió completa

### El sitio muestra contenido antiguo
- **Solución:** Limpia la caché del CDN de Hostinger (si aplica) y del navegador

## 📞 Soporte

Si tienes problemas con el despliegue:
1. Revisa los logs del servidor en el panel de Hostinger
2. Verifica que el módulo `mod_rewrite` esté habilitado en Apache
3. Contacta al soporte de Hostinger si es necesario

