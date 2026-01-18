# 🎬 BWAY Productions - Sitio Web Oficial

Sitio web profesional de **BWAY Productions**, productora audiovisual líder en Costa Rica especializada en producción de eventos, videos musicales y contenido para redes sociales.

**🌐 URL de producción:** [https://bwayprod.com/](https://bwayprod.com/)

---

## 📋 Tabla de Contenidos

- [Sobre el Proyecto](#sobre-el-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Desarrollo](#instalación-y-desarrollo)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Sesiones de Video Realizadas](#sesiones-de-video-realizadas)
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

# Navegar al directorio
cd BwayProd-WebApp

# Instalar dependencias
npm install
```

### Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en: `http://localhost:3000`

### Vista Previa de Producción

Para probar la versión de producción localmente:

```bash
npm run build
npm run preview
```

---

## 📁 Estructura del Proyecto

```
BwayProd-WebApp/
├── public/                 # Archivos estáticos
│   ├── .htaccess          # Configuración de Apache
│   ├── robots.txt         # Configuración para buscadores
│   ├── sitemap.xml        # Mapa del sitio
│   └── vite.svg           # Assets estáticos
├── src/
│   ├── components/        # Componentes React
│   │   ├── PortfolioV2/   # Componentes del portafolio
│   │   ├── auth/          # Componentes de autenticación
│   │   ├── layouts/       # Layouts de página
│   │   └── ui/            # Componentes UI reutilizables
│   ├── pages/             # Páginas de la aplicación
│   ├── lib/               # Utilidades y helpers
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── dist/                  # Build de producción (generado)
├── tools/                 # Scripts de utilidad
├── plugins/               # Plugins personalizados de Vite
├── package.json           # Dependencias y scripts
├── vite.config.js         # Configuración de Vite
└── tailwind.config.js     # Configuración de Tailwind
```

---

## 🎥 Sesiones de Video Realizadas

### 📅 2025

#### Eventos
- **DJ EL FARI - DJ Set Live from Surf Abu Dhabi** (Noviembre 2025)
  - Duración: 38:38
  - Cliente: DJ El Fari
  - Descripción: Producción audiovisual del DJ set, capturando la energía y el ritmo de la música electrónica con edición sincronizada al beat.

- **MMA Costa Rica - Recap** (Noviembre 2025)
  - Duración: 01:04
  - Cliente: MMA Costa Rica
  - Descripción: Recap cinematográfico capturando la intensidad, técnica y pasión de los luchadores.

#### Contenido - Redes Sociales
- **Seprodental - Productos Odontológicos** (Noviembre 2025)
  - Duración: 00:59
  - Cliente: Seprodental
  - Descripción: Producción profesional destacando la innovación y calidad de productos odontológicos.

- **Víctor Ramírez | Físico Culturista** (Julio 2025)
  - Duración: 2:50
  - Cliente: Victor Ramirez
  - Descripción: Video que destaca la dedicación, disciplina y estética corporal del atleta.

### 📅 2024

#### Eventos
- **Recap Battle Warriors CR** (2024)
  - Duración: 2:19
  - Cliente: Battle Warriors CR
  - Descripción: Recap dinámico del evento, capturando la energía y la intensidad del combate con edición cinematográfica.

### 📅 2023

#### Eventos
- **Tapon en FlowFest - Live Performance** (Julio 2023)
  - Duración: 01:07
  - Cliente: FlowFest
  - Descripción: Producción audiovisual del show en vivo de Tapon, capturando los momentos más impactantes.

- **Competencia de DownHill** (Enero 2023)
  - Duración: 1:22
  - Cliente: Adventure Park Heredia
  - Descripción: Recap cinematográfico capturando la velocidad, adrenalina y destreza de los ciclistas.

### 📅 2022

#### Eventos
- **Ozuna - Live Performance** (Mayo 2022)
  - Duración: 0:31
  - Cliente: Ozuna
  - Descripción: Producción audiovisual del show en vivo, capturando la energía y el carisma del artista puertorriqueño.

- **Los Cafres - Live Performance** (Mayo 2022)
  - Duración: 0:33
  - Cliente: Los Cafres
  - Descripción: Producción audiovisual del show en vivo de la icónica banda argentina de reggae.

- **Café Tacvba | Video Musical** (Mayo 2022)
  - Duración: 0:34
  - Cliente: Café Tacvba
  - Descripción: Producción cinematográfica para la banda mexicana, fusionando narrativa visual con la esencia artística.

- **Contenido para Canal 6 - Noticias** (Junio 2022)
  - Duración: 0:55
  - Cliente: Canal 6
  - Descripción: Producción audiovisual profesional destacando calidad televisiva y contenido de alto nivel.

#### Videos Musicales
- **Haquil - Story | Video Musical** (Agosto 2022)
  - Duración: 02:10
  - Cliente: Haquil
  - Descripción: Producción cinematográfica para artista nacional, fusionando narrativa visual con la esencia artística del músico.

---

## 📊 Resumen por Categoría

### Eventos (9 sesiones)
- Battle Warriors CR (2024)
- Ozuna (2022)
- Los Cafres (2022)
- Café Tacvba (2022)
- Competencia de DownHill (2023)
- DJ EL FARI (2025)
- Tapon en FlowFest (2023)
- Canal 6 (2022)
- MMA Costa Rica (2025)

### Videos Musicales (2 sesiones)
- Haquil - Story (2022)
- Café Tacvba (2022)

### Contenido - Redes Sociales (2 sesiones)
- Víctor Ramírez (2025)
- Seprodental (2025)

**Total: 13 sesiones de video documentadas**

---

## 🚀 Despliegue a Producción

### Método Automatizado (Recomendado)

```bash
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
npm run build
```

Esto generará una carpeta `dist/` con todos los archivos optimizados.

#### Paso 2: Subir archivos a Hostinger

**Opción A: FTP/SFTP (FileZilla)**

1. Conecta a tu servidor de Hostinger usando tus credenciales FTP
2. Navega a la carpeta pública del dominio (normalmente `public_html`)
3. **IMPORTANTE:** Haz un backup de los archivos actuales
4. Sube **todo el contenido** de la carpeta `dist/` a la carpeta pública
5. Asegúrate de que el archivo `.htaccess` esté incluido

**Opción B: Panel de Hostinger (File Manager)**

1. Accede al panel de Hostinger
2. Abre el File Manager
3. Navega a la carpeta pública del dominio
4. Haz un backup de los archivos actuales
5. Sube todos los archivos de la carpeta `dist/`

### Archivos Importantes a Verificar

- ✅ `index.html` - Página principal
- ✅ `assets/` - CSS y JavaScript optimizados
- ✅ `.htaccess` - Configuración de Apache (debe estar en la raíz)
- ✅ `robots.txt` - Configuración para buscadores
- ✅ `sitemap.xml` - Mapa del sitio

### Verificación Post-Despliegue

Después de subir los archivos, verifica:

1. ✅ El sitio carga correctamente en https://bwayprod.com/
2. ✅ Todas las rutas funcionan (/, /servicios, /portafolio, etc.)
3. ✅ Los estilos y scripts se cargan correctamente
4. ✅ No hay errores en la consola del navegador
5. ✅ Los videos del portafolio se reproducen correctamente

---

## 📜 Scripts Disponibles

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

### Los videos no se reproducen

- Verifica que las URLs de los videos en S3 sean accesibles
- Revisa la consola del navegador para errores de CORS
- Asegúrate de que los videos estén en formato MP4 y sean accesibles públicamente

---

## ⚠️ Notas Importantes

- **Nunca subas la carpeta `node_modules/`** al servidor
- **Solo sube el contenido de `dist/`** después de ejecutar `npm run build`
- Siempre haz un **backup** antes de desplegar cambios
- El archivo `.htaccess` es necesario para que las rutas de React Router funcionen correctamente
- Los videos están alojados en AWS S3 y deben ser accesibles públicamente

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
