#!/bin/bash

# Script automatizado para desplegar a Hostinger vía FTP/SFTP usando rsync o scp
# Requiere acceso SSH al servidor

echo "🚀 Despliegue Automatizado a Hostinger"
echo ""

# Cargar configuración desde archivo .env o variables de entorno
if [ -f .env.deploy ]; then
    source .env.deploy
fi

# Verificar variables requeridas
if [ -z "$DEPLOY_HOST" ] || [ -z "$DEPLOY_USER" ] || [ -z "$DEPLOY_PATH" ]; then
    echo "❌ Error: Faltan variables de configuración"
    echo ""
    echo "Crea un archivo .env.deploy con:"
    echo "  DEPLOY_HOST=tu-servidor.com"
    echo "  DEPLOY_USER=tu-usuario"
    echo "  DEPLOY_PATH=/home/usuario/public_html"
    echo "  DEPLOY_PORT=22  # Opcional, default 22 para SFTP"
    echo ""
    echo "O exporta las variables de entorno antes de ejecutar este script."
    exit 1
fi

# Valores por defecto
DEPLOY_PORT=${DEPLOY_PORT:-22}

# Verificar que existe dist/
if [ ! -d "dist" ]; then
    echo "❌ La carpeta 'dist/' no existe."
    echo "Ejecuta './prepare-deploy.sh' primero."
    exit 1
fi

echo "📋 Configuración:"
echo "   Host: $DEPLOY_HOST"
echo "   Usuario: $DEPLOY_USER"
echo "   Ruta: $DEPLOY_PATH"
echo "   Puerto: $DEPLOY_PORT"
echo ""

# Confirmar antes de continuar
read -p "¿Continuar con el despliegue? (s/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "❌ Despliegue cancelado"
    exit 1
fi

echo ""
echo "📦 Preparando archivos..."

# Verificar si rsync está disponible
if command -v rsync &> /dev/null; then
    echo "✅ Usando rsync para transferir archivos..."
    echo ""
    
    rsync -avz --progress \
        -e "ssh -p $DEPLOY_PORT" \
        --exclude='.DS_Store' \
        --exclude='INSTRUCCIONES-DESPLIEGUE.txt' \
        --exclude='lista-archivos.txt' \
        dist/ "$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/"
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "✅ Despliegue completado exitosamente!"
        echo ""
        echo "🌐 Verifica el sitio en: https://bwayprod.com/"
    else
        echo ""
        echo "❌ Error durante el despliegue"
        exit 1
    fi
elif command -v scp &> /dev/null; then
    echo "✅ Usando scp para transferir archivos..."
    echo ""
    
    # Crear archivo temporal comprimido
    echo "📦 Comprimiendo archivos..."
    cd dist
    tar -czf ../deploy-temp.tar.gz *
    cd ..
    
    # Subir archivo
    echo "📤 Subiendo archivos..."
    scp -P $DEPLOY_PORT deploy-temp.tar.gz "$DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH/"
    
    if [ $? -eq 0 ]; then
        echo "📤 Descomprimiendo en el servidor..."
        ssh -p $DEPLOY_PORT "$DEPLOY_USER@$DEPLOY_HOST" "cd $DEPLOY_PATH && tar -xzf deploy-temp.tar.gz && rm deploy-temp.tar.gz"
        
        # Limpiar archivo temporal local
        rm deploy-temp.tar.gz
        
        echo ""
        echo "✅ Despliegue completado exitosamente!"
        echo ""
        echo "🌐 Verifica el sitio en: https://bwayprod.com/"
    else
        echo ""
        echo "❌ Error durante el despliegue"
        rm -f deploy-temp.tar.gz
        exit 1
    fi
else
    echo "❌ No se encontró rsync ni scp"
    echo "Instala uno de ellos o usa el script deploy-node.js"
    exit 1
fi


