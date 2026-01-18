#!/bin/bash

# Script para preparar el proyecto para despliegue en Hostinger

echo "🚀 Preparando proyecto para despliegue en Hostinger..."
echo ""

# Limpiar build anterior
echo "🧹 Limpiando build anterior..."
rm -rf dist
echo "✅ Limpieza completada"
echo ""

# Construir la aplicación
echo "📦 Construyendo aplicación para producción..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error al construir la aplicación. Revisa los errores arriba."
    exit 1
fi

echo ""
echo "✅ Build completado exitosamente"
echo ""

# Verificar archivos importantes
echo "🔍 Verificando archivos importantes..."
echo ""

missing_files=0

files=("dist/index.html" "dist/.htaccess" "dist/robots.txt" "dist/sitemap.xml")

for file in "${files[@]}"; do
    if [ -e "$file" ]; then
        echo "  ✅ $(basename $file)"
    else
        echo "  ❌ $(basename $file) - FALTA"
        missing_files=$((missing_files + 1))
    fi
done

if [ -d "dist/assets" ]; then
    echo "  ✅ assets/ (carpeta)"
else
    echo "  ❌ assets/ - FALTA"
    missing_files=$((missing_files + 1))
fi

echo ""

if [ $missing_files -gt 0 ]; then
    echo "⚠️  Advertencia: Faltan $missing_files archivo(s) importante(s)"
else
    echo "✅ Todos los archivos importantes están presentes"
fi

echo ""
echo "📊 Información del build:"
echo "   Tamaño total: $(du -sh dist/ | cut -f1)"
echo "   Archivos en dist/: $(find dist/ -type f | wc -l | tr -d ' ')"
echo ""

# Crear archivo de instrucciones
cat > dist/INSTRUCCIONES-DESPLIEGUE.txt << 'EOF'
═══════════════════════════════════════════════════════════════
  INSTRUCCIONES PARA SUBIR A HOSTINGER
═══════════════════════════════════════════════════════════════

ESTOS SON LOS ARCHIVOS QUE DEBES SUBIR A TU SERVIDOR:

1. Sube TODO el contenido de esta carpeta (dist/) a:
   - public_html/ (carpeta principal del dominio)
   - O la carpeta que Hostinger te haya indicado para tu dominio

2. ARCHIVOS IMPORTANTES que DEBEN estar en la raíz:
   ✅ index.html
   ✅ .htaccess (MUY IMPORTANTE - sin esto las rutas no funcionarán)
   ✅ robots.txt
   ✅ sitemap.xml
   ✅ assets/ (carpeta completa)

3. MÉTODO RECOMENDADO - FileZilla (FTP):
   
   a) Descarga FileZilla: https://filezilla-project.org/
   
   b) Conecta a tu servidor:
      - Host: ftp.tudominio.com (o la IP que te dio Hostinger)
      - Usuario: Tu usuario FTP
      - Contraseña: Tu contraseña FTP
      - Puerto: 21 (FTP) o 22 (SFTP)
   
   c) Navega a public_html/ (o la carpeta de tu dominio)
   
   d) HAZ UN BACKUP primero:
      - Descarga los archivos actuales a tu computadora
      - O renombra la carpeta a "backup_fecha"
   
   e) Sube TODOS los archivos de esta carpeta (dist/)
      - Arrastra y suelta desde FileZilla
      - Asegúrate de incluir el .htaccess
      - Incluye la carpeta assets/ completa

4. VERIFICACIÓN POST-DESPLIEGUE:
   
   ✅ Visita https://bwayprod.com/
   ✅ Prueba las rutas: /servicios, /portafolio, /planes, etc.
   ✅ Abre la consola del navegador (F12) y verifica que no haya errores
   ✅ Verifica que los estilos se carguen correctamente

5. PERMISOS DE ARCHIVOS (si es necesario):
   - Archivos: 644
   - Carpetas: 755

═══════════════════════════════════════════════════════════════
  ¿PROBLEMAS?
═══════════════════════════════════════════════════════════════

- Si las rutas dan 404: Verifica que .htaccess esté en la raíz
- Si los estilos no cargan: Verifica que assets/ se subió completo
- Si hay errores: Revisa la consola del navegador (F12)

═══════════════════════════════════════════════════════════════
EOF

echo "📝 Archivo de instrucciones creado en dist/INSTRUCCIONES-DESPLIEGUE.txt"
echo ""

# Crear lista de archivos
echo "📋 Generando lista de archivos..."
find dist/ -type f > dist/lista-archivos.txt
echo "✅ Lista guardada en dist/lista-archivos.txt"
echo ""

echo "═══════════════════════════════════════════════════════════════"
echo "  ✅ PROYECTO LISTO PARA DESPLEGAR"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "📁 Carpeta lista: dist/"
echo ""
echo "📝 Próximos pasos:"
echo "   1. Abre la carpeta 'dist/' en tu explorador de archivos"
echo "   2. Lee 'dist/INSTRUCCIONES-DESPLIEGUE.txt' para guía detallada"
echo "   3. Sube TODO el contenido de 'dist/' a tu servidor Hostinger"
echo ""
echo "💡 Tip: Usa FileZilla o el File Manager de Hostinger"
echo ""
echo "🌐 Después de subir, verifica: https://bwayprod.com/"
echo ""


