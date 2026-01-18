# 🎬 BWAY Productions - Sitio Web Oficial

Sitio web profesional de **BWAY Productions**, productora audiovisual líder en Costa Rica especializada en producción de eventos, videos musicales y contenido para redes sociales.

**🌐 URL de producción:** [https://bwayprod.com/](https://bwayprod.com/)

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Ubicación del Proyecto](#ubicación-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Desarrollo](#instalación-y-desarrollo)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Despliegue a Producción](#despliegue-a-producción)
- [Scripts Disponibles](#scripts-disponibles)
- [Solución de Problemas](#solución-de-problemas)

---

## 🎯 Sobre el Proyecto

BWAY Productions es una productora audiovisual costarricense que se especializa en:

- **Producción de Eventos**: Conciertos, festivales, eventos deportivos y corporativos
- **Videos Musicales**: Producción cinematográfica para artistas nacionales e internacionales
- **Contenido para Redes Sociales**: Producción de contenido audiovisual para marcas y empresas
- **Fotografía Profesional**: Documentación visual de eventos y sesiones fotográficas

Este sitio web muestra el portafolio completo de trabajos realizados, servicios ofrecidos y permite a los clientes contactar y reservar servicios directamente.

---

## 📂 Ubicación del Proyecto

**⚠️ IMPORTANTE:** El código fuente de la aplicación web se encuentra en la carpeta [`WebApp/`](./WebApp/).

Para trabajar con el proyecto, navega a la carpeta `WebApp`:

```bash
cd WebApp
```

Para más detalles sobre la estructura del proyecto, consulta el [README de WebApp](./WebApp/README.md).

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18.2** - Biblioteca de JavaScript para interfaces de usuario
- **Vite 4.4** - Build tool y servidor de desarrollo ultrarrápido
- **React Router DOM 6.16** - Enrutamiento del lado del cliente
- **Framer Motion 10.16** - Animaciones fluidas y transiciones
- **Tailwind CSS 3.3** - Framework CSS utility-first
- **Three.js 0.158** - Gráficos 3D y animaciones WebGL
- **Zustand 5.0** - Gestión de estado ligera

### UI Components
- **Radix UI** - Componentes accesibles y sin estilos
- **Lucide React** - Iconos modernos y consistentes
- **Class Variance Authority** - Utilidades para variantes de componentes

### Herramientas de Desarrollo
- **ESLint** - Linter para JavaScript/React
- **PostCSS** - Procesador de CSS
- **Basic-FTP** - Cliente FTP para despliegue automatizado

---

## 🚀 Instalación y Desarrollo

### Requisitos Previos

- **Node.js** 18.x o superior
- **npm** 9.x o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/SnDsolutions/BwayProd-WebApp.git

# Navegar al directorio del proyecto
cd BwayProd-WebApp/WebApp

# Instalar dependencias
npm install
```

### Ejecutar en Desarrollo

```bash
# Desde la carpeta WebApp
cd WebApp
npm run dev
```

El sitio estará disponible en: `http://localhost:3000`

### Vista Previa de Producción

Para probar la versión de producción localmente:

```bash
cd WebApp
npm run build
npm run preview
```

---

## 📁 Estructura del Proyecto

```
BwayProd-WebApp/
├── WebApp/                   # ⭐ Aplicación web principal
│   ├── public/               # Archivos estáticos
│   ├── src/                  # Código fuente
│   │   ├── components/       # Componentes React
│   │   ├── pages/            # Páginas de la aplicación
│   │   └── lib/              # Utilidades
│   ├── dist/                 # Build de producción (generado)
│   ├── package.json          # Dependencias y scripts
│   └── README.md             # Documentación detallada
└── README.md                 # Este archivo
```

---

## 🚀 Despliegue a Producción

### Método Automatizado (Recomendado)

```bash
cd WebApp
npm run deploy
```

Este comando:
1. Ejecuta el build de producción
2. Prepara los archivos en `dist/`
3. Sube automáticamente vía FTP al servidor

**Nota:** Requiere configuración del archivo `.env.deploy` con credenciales FTP.

### Método Manual

#### Paso 1: Construir la aplicación

```bash
cd WebApp
npm run build
```

Esto generará una carpeta `dist/` con todos los archivos optimizados.

#### Paso 2: Subir archivos a Hostinger

1. Conecta a tu servidor de Hostinger usando tus credenciales FTP
2. Navega a la carpeta pública del dominio (normalmente `public_html`)
3. **IMPORTANTE:** Haz un backup de los archivos actuales
4. Sube **todo el contenido** de la carpeta `WebApp/dist/` a la carpeta pública
5. Asegúrate de que el archivo `.htaccess` esté incluido

---

## 📜 Scripts Disponibles

Todos los scripts deben ejecutarse desde la carpeta `WebApp`:

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo en `http://localhost:3000` |
| `npm run build` | Construye la aplicación para producción en `dist/` |
| `npm run preview` | Previsualiza la versión de producción localmente |
| `npm run clean` | Elimina la carpeta `dist/` |
| `npm run build:clean` | Limpia y construye la aplicación |
| `npm run deploy` | Build y despliegue automatizado vía FTP |
| `npm run deploy:ssh` | Build y despliegue vía SSH |

---

## 🐛 Solución de Problemas

### El sitio no carga después del despliegue

1. Verifica que todos los archivos se subieron correctamente
2. Asegúrate de que el `.htaccess` esté en la raíz del servidor
3. Verifica los permisos de archivos (644 para archivos, 755 para carpetas)

### Las rutas no funcionan (Error 404)

- Verifica que el archivo `.htaccess` esté presente y correcto
- Contacta al soporte de Hostinger si el módulo `mod_rewrite` no está habilitado

### Los estilos no se cargan

- Verifica que la carpeta `assets/` se subió completamente
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)

---

## ⚠️ Notas Importantes

- **El proyecto principal está en la carpeta `WebApp/`**
- **Nunca subas la carpeta `node_modules/`** al servidor
- **Solo sube el contenido de `WebApp/dist/`** después de ejecutar `npm run build`
- Siempre haz un **backup** antes de desplegar cambios
- El archivo `.htaccess` es necesario para que las rutas de React Router funcionen correctamente

---

## 📞 Contacto y Soporte

Para más información sobre BWAY Productions:

- **Sitio Web:** [https://bwayprod.com/](https://bwayprod.com/)
- **Repositorio:** [https://github.com/SnDsolutions/BwayProd-WebApp](https://github.com/SnDsolutions/BwayProd-WebApp)

---

## 📄 Licencia

Este proyecto es privado y propiedad de BWAY Productions.

---

**Desarrollado con ❤️ para BWAY Productions**
