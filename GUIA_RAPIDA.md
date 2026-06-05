# 🚀 GUÍA RÁPIDA DE INICIO

## Paso 1: Ver la página en tu navegador

1. Abre la carpeta "Pagina Web" en tu explorador
2. Haz doble clic sobre `index.html`
3. Se abrirá en tu navegador predeterminado

**O alternativamente:**

En VS Code:
- Click derecho en `index.html`
- Selecciona "Open with Live Server"

## Paso 2: Personalización Rápida

### Cambiar el nombre del curso
En `index.html`, encuentra y reemplaza:
- Línea ~8: `<title>Curso de Accesorios con Resina...</title>`
- Línea ~14: `<h1>Aprende a Crear Accesorios con Resina...</h1>`

### Cambiar precios
En `config.js`:
```javascript
pricing: {
    originalPrice: 74.00,    // Aquí
    discountPercent: 50,     // Y aquí
}
```

### Cambiar nombre instructor
En `config.js`, línea ~59:
```javascript
instructor: {
    name: "Tu Nombre Aquí",
}
```

### Cambiar colores
En `config.js`, línea ~141:
```javascript
colors: {
    primary: "#667eea",      // Cambiar a tu color
    accent: "#f39c12",       // Cambiar a tu color
}
```

## Paso 3: Conectar con Hotmart

1. Ve a tu panel de Hotmart
2. Copia tu enlace de afiliado/producto
3. En `script.js`, busca `handlePurchaseClick()`
4. Reemplaza:
```javascript
function handlePurchaseClick() {
    window.location.href = 'https://go.hotmart.com/TU_CODIGO_AQUI';
}
```

## Paso 4: Agregadar tu Foto

1. Guarda tu foto en la carpeta "Pagina Web"
2. En `index.html`, busca la sección About (línea ~280)
3. Reemplaza:
```html
<div class="placeholder-image">Foto del Instructor</div>
```

Con:
```html
<img src="tu-foto.jpg" alt="Tu Nombre" class="instructor-photo">
```

## Paso 5: Hosting (Publica tu página)

### Opción A: Netlify (Recomendado - Gratis)

1. Ve a https://netlify.com
2. Crea cuenta (puedes usar GitHub)
3. Arrastra la carpeta "Pagina Web"
4. ¡Listo! Tu página estará en línea

### Opción B: Vercel (Gratis)

1. Ve a https://vercel.com
2. Importa tu repositorio de GitHub
3. Debes subir primero a GitHub

### Opción C: Tu propio servidor

1. Descarga un cliente FTP (FileZilla)
2. Conecta a tu servidor
3. Sube los archivos de "Pagina Web"

## 📋 Checklist de Verificación

- [ ] Cambié el título de la página
- [ ] Actualicé los precios
- [ ] Agregué mi nombre como instructor
- [ ] Cambié los colores principales
- [ ] Agregué mi foto
- [ ] Actualicé el enlace de Hotmart
- [ ] Cambié los testimonios con casos reales
- [ ] Personalicé la descripción del curso
- [ ] Revisé que todo se vea bien en móvil
- [ ] Probé todos los botones

## 🧪 Pruebas Finales

1. **Prueba en navegadores:**
   - Chrome ✅
   - Firefox ✅
   - Safari ✅
   - Edge ✅

2. **Prueba en dispositivos:**
   - Desktop
   - Tablet (iPad)
   - Mobile (iPhone/Android)

   Abre las herramientas del navegador: F12 → Toggle Device Toolbar

3. **Prueba de funcionalidad:**
   - [ ] Haz click en todos los botones
   - [ ] Verifica que los enlaces funcionen
   - [ ] Prueba el scroll suave
   - [ ] Abre la página en WiFi de otro lugar

## 🎨 Ejemplos de Personalización

### Cambiar toda la paleta de colores

En `styles.css`, reemplaza estas líneas:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Con:
```css
background: linear-gradient(135deg, #FF5733 0%, #C70039 100%);
```

### Cambiar fuente

En `styles.css`, línea 9:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

Cambiar a:
```css
font-family: 'Georgia', serif;
```

o

```css
font-family: 'Arial', sans-serif;
```

### Agregar video de YouTube

En `script.js`, actualiza la función `openVideoModal()`:
```javascript
function openVideoModal() {
    // Crear modal con video
    const modal = document.createElement('div');
    modal.innerHTML = `
        <iframe 
            width="100%" 
            height="600" 
            src="https://www.youtube.com/embed/TU_VIDEO_ID"
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
        </iframe>
    `;
    document.body.appendChild(modal);
}
```

## 📱 Optimización Móvil

La página ya es responsive, pero para mejor rendimiento:

1. **Comprime imágenes:**
   - Usa https://tinypng.com
   - O https://imageoptim.com

2. **Prueba velocidad:**
   - Usa https://pagespeed.web.dev
   - Busca "PageSpeed Insights"

3. **Mejora SEO:**
   - En `index.html`, actualiza:
     - `<title>`
     - `<meta name="description">`
     - Agrega más descripciones

## 🔐 Seguridad Básica

- Cambia las contraseñas de acceso
- No incluyas datos sensibles en el código
- Usa HTTPS cuando subas a producción
- Implementa una política de privacidad real

## 🐛 Troubleshooting Común

### "La página no se ve, solo texto"
- Verifica que `styles.css` esté en la misma carpeta
- Recarga la página (Ctrl+Shift+R o Cmd+Shift+R)

### "Los botones no funcionan"
- Verifica que `script.js` esté en la misma carpeta
- Abre la consola (F12) y busca errores

### "Las imágenes no se cargan"
- Verifica la ruta de la imagen
- Usa rutas relativas: `img/foto.jpg`
- Asegúrate que el archivo existe

### "Se ve raro en móvil"
- Abre F12 → Toggle Device Toolbar
- Prueba en diferentes tamaños de pantalla

## 📞 Soporte

Si necesitas ayuda:
1. Revisa el README.md
2. Consulta config.js para ver las opciones de configuración
3. Busca comentarios en el código HTML

## 🎉 ¡Listo!

Tu página está lista para:
- ✅ Capturar leads
- ✅ Vender cursos
- ✅ Crear confianza
- ✅ Aumentar conversiones

---

**Próximos pasos:**
1. Personaliza toda la información
2. Prueba en móvil
3. Sube a un hosting
4. Comparte tu enlace
5. Comienza a vender

¡Mucho éxito! 🚀
