# ⚡ Inicio Rápido - Despliegue Automatizado

## 🎯 Despliegue en 3 Pasos

### 1️⃣ Instalar dependencia (solo la primera vez)

```bash
npm install --save-dev basic-ftp
```

### 2️⃣ Configurar credenciales (solo la primera vez)

```bash
cp env.deploy.example .env.deploy
```

Luego edita `.env.deploy` con tus datos de Hostinger:

```env
DEPLOY_HOST=ftp.tudominio.com
DEPLOY_USER=tu-usuario-ftp
DEPLOY_PASSWORD=tu-contraseña-ftp
DEPLOY_PORT=21
DEPLOY_SECURE=false
DEPLOY_PATH=/public_html
```

**¿Dónde obtener estos datos?**
- Ve a tu panel de Hostinger (hpanel.hostinger.com)
- Sección "FTP Accounts" o "Cuentas FTP"
- Copia el Host, Usuario y Contraseña

### 3️⃣ Desplegar

```bash
npm run deploy
```

¡Listo! 🎉 Tu sitio se subirá automáticamente a https://bwayprod.com/

---

## 📋 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run deploy` | Construye y despliega automáticamente |
| `./prepare-deploy.sh` | Solo construye (sin desplegar) |
| `node deploy-node.js` | Solo despliega (si ya construiste) |

---

## 🔒 Seguridad

El archivo `.env.deploy` contiene credenciales. Está protegido:
- ✅ En `.gitignore` (no se subirá a Git)
- ⚠️ Configura permisos: `chmod 600 .env.deploy`

---

## 🆘 ¿Problemas?

Lee la guía completa: `DEPLOY-AUTOMATICO.md`

---

## ✅ Checklist

- [ ] Instalé `basic-ftp`
- [ ] Creé y configuré `.env.deploy`
- [ ] Probé `npm run deploy`
- [ ] Verifiqué https://bwayprod.com/


