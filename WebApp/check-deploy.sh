#!/bin/bash

# Script para verificar que el proyecto está listo para desplegar

echo "🔍 Verificando preparación para despliegue..."
echo ""

# Verificar que existe la carpeta dist
if [ ! -d "dist" ]; then
    echo "❌ La carpeta 'dist' no existe. Ejecuta 'npm run build' primero."
    exit 1
fi

echo "✅ Carpeta 'dist' encontrada"
echo ""

# Verificar archivos importantes
echo "📋 Verificando archivos importantes:"

files=("dist/index.html" "dist/.htaccess" "dist/robots.txt" "dist/sitemap.xml" "dist/assets")

for file in "${files[@]}"; do
    if [ -e "$file" ] || [ -d "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ $file - FALTA"
    fi
done

echo ""
echo "📊 Tamaño de la carpeta dist:"
du -sh dist/

echo ""
echo "📁 Contenido de dist/:"
ls -lh dist/ | head -10

echo ""
echo "✨ Verificación completada!"
echo ""
echo "📝 Próximos pasos:"
echo "1. Revisa que todos los archivos estén presentes"
echo "2. Sube el contenido de 'dist/' a tu servidor Hostinger"
echo "3. Verifica que el sitio funcione en https://bwayprod.com/"
echo ""
echo "💡 Lee DEPLOY.md para instrucciones detalladas"


