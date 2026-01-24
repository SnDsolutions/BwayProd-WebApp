# 🔄 Flujo de Desarrollo - BWAY Productions

## 📋 Resumen del Flujo Completo

### 🎯 Flujo Automático (Después de Configurar CI/CD)

```
1. Desarrollas cambios localmente
   ↓
2. git add .
   ↓
3. git commit -m "Descripción de cambios"
   ↓
4. git push origin main
   ↓
5. ✅ GitHub Actions detecta el push
   ↓
6. ✅ Construye la aplicación automáticamente
   ↓
7. ✅ Despliega a Hostinger automáticamente
   ↓
8. ✅ Cambios en https://bwayprod.com/ (2-5 minutos)
```

### 🔧 Flujo Manual (Si prefieres control total)

```
1. Desarrollas cambios localmente
   ↓
2. git add .
   ↓
3. git commit -m "Descripción de cambios"
   ↓
4. git push origin main
   ↓
5. cd WebApp
   ↓
6. npm run deploy
   ↓
7. ✅ Cambios en https://bwayprod.com/
```

## 🚀 Comandos Rápidos

### Desarrollo Local

```bash
# Iniciar servidor de desarrollo
cd WebApp
npm run dev

# Ver en: http://localhost:3000
```

### Despliegue Manual

```bash
# Desde la raíz del proyecto
cd WebApp
npm run deploy

# O paso a paso:
npm run build        # Construir
npm run preview      # Previsualizar localmente
npm run deploy       # Desplegar
```

### Git Workflow

```bash
# Ver cambios
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción clara de los cambios"

# Subir a GitHub
git push origin main

# Si usas CI/CD automático, los cambios se desplegarán solos
# Si no, ejecuta: cd WebApp && npm run deploy
```

## 📊 Estados del Código

| Ubicación | Estado | Acción |
|-----------|--------|--------|
| **Local (tu computadora)** | Desarrollando | `npm run dev` |
| **GitHub (repositorio)** | Código guardado | `git push` |
| **Producción (bwayprod.com)** | Sitio en vivo | Automático o `npm run deploy` |

## ⚡ Comparación: Automático vs Manual

| Característica | Automático (CI/CD) | Manual |
|---------------|-------------------|--------|
| **Velocidad** | 2-5 minutos después del push | Inmediato (después de ejecutar) |
| **Conveniencia** | ✅ Solo hacer push | ⚠️ Debes ejecutar comando |
| **Historial** | ✅ Visible en GitHub Actions | ⚠️ Solo local |
| **Rollback** | ✅ Fácil desde GitHub | ⚠️ Manual |
| **Control** | ⚠️ Menos control inmediato | ✅ Control total |
| **Errores** | ✅ Notificaciones en GitHub | ⚠️ Solo en tu terminal |

## 🎯 Recomendación

**Usa CI/CD Automático** para:
- ✅ Despliegues frecuentes
- ✅ Trabajo en equipo
- ✅ Historial y trazabilidad
- ✅ Menos errores humanos

**Usa Despliegue Manual** para:
- ✅ Cambios críticos que necesitas verificar primero
- ✅ Despliegues de emergencia
- ✅ Cuando necesitas control total del momento

## 📝 Checklist Antes de Desplegar

- [ ] Probé los cambios localmente (`npm run dev`)
- [ ] Verifiqué que no hay errores en la consola
- [ ] Hice commit con un mensaje descriptivo
- [ ] Si es manual: tengo las credenciales FTP configuradas
- [ ] Si es automático: los secrets están configurados en GitHub

## 🆘 ¿Problemas?

### Los cambios no aparecen en producción

1. **Si usas CI/CD automático**:
   - Ve a la pestaña **Actions** en GitHub
   - Verifica que el workflow se completó exitosamente
   - Revisa los logs si hay errores

2. **Si usas despliegue manual**:
   - Verifica que `npm run deploy` se completó sin errores
   - Verifica las credenciales FTP en `.env.deploy`
   - Limpia la caché del navegador (Ctrl+Shift+R)

### Quiero revertir un cambio

```bash
# Ver historial de commits
git log

# Revertir a un commit anterior
git revert <commit-hash>
git push origin main

# O hacer un nuevo commit que deshaga los cambios
```

## 📚 Más Información

- **Configurar CI/CD**: Ver `.github/CICD-SETUP.md`
- **Despliegue Manual**: Ver `WebApp/DEPLOY-AUTOMATICO.md`
- **Estructura del Proyecto**: Ver `README.md`
