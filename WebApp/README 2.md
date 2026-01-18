# BWAY Productions - Sitio Web

Sitio web oficial de BWAY Productions, productora audiovisual en Costa Rica.

**URL de producción:** https://bwayprod.com/

## 🚀 Desarrollo Local

### Instalación

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

El sitio estará disponible en: `http://localhost:3000`

### Vista previa de producción

Para probar la versión de producción localmente:

```bash
npm run build
npm run preview
```

## 📦 Despliegue a Producción

### Paso 1: Construir la aplicación

```bash
npm run build
```

Esto generará una carpeta `dist/` con todos los archivos optimizados para producción.

### Paso 2: Subir archivos a Hostinger

Tienes dos opciones:

#### Opción A: FTP/SFTP (FileZilla, Cyberduck, etc.)

1. Conecta a tu servidor de Hostinger usando tus credenciales FTP
2. Navega a la carpeta pública del dominio (normalmente `public_html` o `htdocs`)
3. **IMPORTANTE:** Haz un backup de los archivos actuales antes de continuar
4. Sube **todo el contenido** de la carpeta `dist/` a la carpeta pública
5. Asegúrate de que el archivo `.htaccess` esté incluido (debe estar en `public/.htaccess` y se copiará automáticamente)

#### Opción B: Panel de Hostinger (File Manager)

1. Accede al panel de Hostinger
2. Abre el File Manager
3. Navega a la carpeta pública del dominio
4. Haz un backup de los archivos actuales
5. Sube todos los archivos de la carpeta `dist/` usando el gestor de archivos

### Archivos importantes a verificar

- ✅ `index.html` - Página principal
- ✅ `assets/` - CSS y JavaScript optimizados
- ✅ `.htaccess` - Configuración de Apache (debe estar en la raíz)
- ✅ `robots.txt` - Configuración para buscadores
- ✅ `sitemap.xml` - Mapa del sitio

### Verificación post-despliegue

Después de subir los archivos, verifica:

1. ✅ El sitio carga correctamente en https://bwayprod.com/
2. ✅ Todas las rutas funcionan (/, /servicios, /portafolio, etc.)
3. ✅ Los estilos y scripts se cargan correctamente
4. ✅ No hay errores en la consola del navegador

## 📁 Estructura del Proyecto

```
WebApp/
├── public/          # Archivos estáticos (se copian a dist/)
│   ├── .htaccess   # Configuración de Apache
│   ├── robots.txt
│   └── sitemap.xml
├── src/            # Código fuente
│   ├── components/ # Componentes React
│   ├── pages/      # Páginas de la aplicación
│   └── ...
├── dist/           # Archivos de producción (generados con npm run build)
└── package.json    # Dependencias y scripts
```

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción localmente

## ⚠️ Notas Importantes

- **Nunca subas la carpeta `node_modules/`** al servidor
- **Solo sube el contenido de `dist/`** después de ejecutar `npm run build`
- Siempre haz un **backup** antes de desplegar cambios
- El archivo `.htaccess` es necesario para que las rutas de React Router funcionen correctamente

## 🐛 Solución de Problemas

### El sitio no carga después del despliegue

1. Verifica que todos los archivos se subieron correctamente
2. Asegúrate de que el `.htaccess` esté en la raíz del servidor
3. Verifica los permisos de archivos (deben ser 644 para archivos y 755 para carpetas)

### Las rutas no funcionan (404)

- Verifica que el archivo `.htaccess` esté presente y correcto
- Contacta al soporte de Hostinger si el módulo `mod_rewrite` no está habilitado

### Los estilos no se cargan

- Verifica que la carpeta `assets/` se subió completamente
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)

