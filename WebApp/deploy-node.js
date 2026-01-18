#!/usr/bin/env node

/**
 * Script automatizado para desplegar a Hostinger vía FTP/SFTP
 * Usa Node.js y la librería 'basic-ftp'
 * 
 * Instalación: npm install --save-dev basic-ftp
 * Uso: node deploy-node.js
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { Client } from 'basic-ftp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Colores para la consola
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

// Cargar configuración
function loadConfig() {
    // Intentar cargar desde .env.deploy
    let config = {};
    try {
        const envContent = readFileSync('.env.deploy', 'utf8');
        envContent.split('\n').forEach(line => {
            const trimmedLine = line.trim();
            if (trimmedLine && !trimmedLine.startsWith('#')) {
                const [key, ...valueParts] = trimmedLine.split('=');
                if (key && valueParts.length > 0) {
                    config[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
                }
            }
        });
    } catch (e) {
        // Archivo no existe, usar variables de entorno
    }

    // Usar variables de entorno si están disponibles
    const deployConfig = {
        host: process.env.DEPLOY_HOST || config.DEPLOY_HOST,
        user: process.env.DEPLOY_USER || config.DEPLOY_USER,
        password: process.env.DEPLOY_PASSWORD || config.DEPLOY_PASSWORD,
        port: parseInt(process.env.DEPLOY_PORT || config.DEPLOY_PORT || '21'),
        secure: process.env.DEPLOY_SECURE === 'true' || config.DEPLOY_SECURE === 'true',
        path: process.env.DEPLOY_PATH || config.DEPLOY_PATH || '/public_html',
    };

    // Validar configuración
    if (!deployConfig.host || !deployConfig.user || !deployConfig.password) {
        log('❌ Error: Faltan variables de configuración', 'red');
        console.log('');
        log('Crea un archivo .env.deploy con:', 'yellow');
        console.log('  DEPLOY_HOST=tu-servidor.com');
        console.log('  DEPLOY_USER=tu-usuario');
        console.log('  DEPLOY_PASSWORD=tu-contraseña');
        console.log('  DEPLOY_PORT=21  # 21 para FTP, 22 para SFTP');
        console.log('  DEPLOY_SECURE=false  # true para SFTP/FTPS');
        console.log('  DEPLOY_PATH=/public_html  # Ruta en el servidor');
        console.log('');
        log('O exporta las variables de entorno antes de ejecutar.', 'yellow');
        process.exit(1);
    }

    return deployConfig;
}

// Subir archivo
async function uploadFile(client, localPath, remotePath) {
    try {
        await client.uploadFrom(localPath, remotePath);
        return true;
    } catch (error) {
        log(`  ❌ Error subiendo ${localPath}: ${error.message}`, 'red');
        return false;
    }
}

// Subir directorio recursivamente
async function uploadDirectory(client, localDir, remoteDir, baseDir) {
    const items = readdirSync(localDir);
    let successCount = 0;
    let failCount = 0;

    for (const item of items) {
        const localPath = join(localDir, item);
        const relativePath = relative(baseDir, localPath);
        const remotePath = join(remoteDir, item).replace(/\\/g, '/');

        const stats = statSync(localPath);

        if (stats.isDirectory()) {
            // Crear directorio en el servidor
            try {
                await client.ensureDir(remotePath);
                log(`  📁 ${relativePath}/`, 'cyan');
            } catch (error) {
                log(`  ❌ Error creando directorio ${remotePath}: ${error.message}`, 'red');
                failCount++;
                continue;
            }

            // Subir contenido del directorio
            const result = await uploadDirectory(client, localPath, remotePath, baseDir);
            successCount += result.success;
            failCount += result.fail;
        } else {
            // Subir archivo
            log(`  📄 ${relativePath}`, 'blue');
            const success = await uploadFile(client, localPath, remotePath);
            if (success) {
                successCount++;
            } else {
                failCount++;
            }
        }
    }

    return { success: successCount, fail: failCount };
}

// Función principal
async function main() {
    log('🚀 Despliegue Automatizado a Hostinger', 'green');
    console.log('');

    // Verificar que existe dist/
    const distPath = join(__dirname, 'dist');
    try {
        statSync(distPath);
    } catch (e) {
        log('❌ La carpeta dist/ no existe.', 'red');
        log('Ejecuta ./prepare-deploy.sh primero.', 'yellow');
        process.exit(1);
    }

    // Cargar configuración
    const config = loadConfig();

    log('📋 Configuración:', 'cyan');
    console.log(`   Host: ${config.host}`);
    console.log(`   Usuario: ${config.user}`);
    console.log(`   Puerto: ${config.port}`);
    console.log(`   Seguro: ${config.secure ? 'Sí (SFTP/FTPS)' : 'No (FTP)'}`);
    console.log(`   Ruta: ${config.path}`);
    console.log('');

    // Conectar al servidor
    const client = new Client();
    client.ftp.verbose = false;

    try {
        log('🔌 Conectando al servidor...', 'cyan');
        await client.access({
            host: config.host,
            user: config.user,
            password: config.password,
            port: config.port,
            secure: config.secure,
        });
        log('✅ Conectado exitosamente', 'green');
        console.log('');

        // Navegar a la ruta de despliegue
        log(`📂 Navegando a ${config.path}...`, 'cyan');
        await client.cd(config.path);
        log('✅ En la ruta de despliegue', 'green');
        console.log('');

        // Subir archivos
        log('📤 Subiendo archivos...', 'cyan');
        console.log('');
        
        const result = await uploadDirectory(client, distPath, '.', distPath);

        console.log('');
        log('═══════════════════════════════════════════════════════════════', 'cyan');
        log(`✅ Despliegue completado!`, 'green');
        log(`   Archivos subidos: ${result.success}`, 'green');
        if (result.fail > 0) {
            log(`   Errores: ${result.fail}`, 'yellow');
        }
        log('═══════════════════════════════════════════════════════════════', 'cyan');
        console.log('');
        log('🌐 Verifica el sitio en: https://bwayprod.com/', 'cyan');

    } catch (error) {
        log(`❌ Error durante el despliegue: ${error.message}`, 'red');
        process.exit(1);
    } finally {
        client.close();
    }
}

// Ejecutar
main().catch(error => {
    log(`❌ Error fatal: ${error.message}`, 'red');
    process.exit(1);
});

