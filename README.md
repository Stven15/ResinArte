# Landing Page - Curso de Accesorios con Resina
Sebas
Una página de ventas profesional y moderna para tu curso de accesorios con resina, similar a la plataforma Hotmart.

## 📁 Estructura

```
Pagina Web/
├── index.html      # Estructura HTML principal
├── styles.css      # Estilos y diseño responsive
├── script.js       # Funcionalidades interactivas
└── README.md       # Este archivo
```

## 🚀 Características

- ✅ Diseño completamente responsive (móvil, tablet, desktop)
- ✅ Secciones completas: Hero, Beneficios, Contenido, Precios, Bonificaciones
- ✅ Testimonios de estudiantes
- ✅ Preguntas frecuentes (FAQ)
- ✅ Garantía de reembolso
- ✅ Sección sobre el instructor
- ✅ Animaciones suaves y efectos hover
- ✅ Countdown timer (opcional)
- ✅ Botones de llamada a la acción (CTA)

## 🎨 Personalización

### 1. **Cambiar Contenido**

Edita el archivo `index.html` para:
- Cambiar títulos y descripciones
- Actualizar precios
- Reemplazar placeholder text con tu contenido
- Agregar tu nombre y foto en la sección "About"

### 2. **Cambiar Colores**

Los colores principales se definen en `styles.css`:

```css
/* Colores principales */
--primary: #667eea;      /* Púrpura/Azul */
--secondary: #764ba2;    /* Púrpura oscuro */
--accent: #f39c12;       /* Naranja */
--danger: #e74c3c;       /* Rojo */
--success: #27ae60;      /* Verde */
```

Para cambiar globalmentente, busca estos colores en `styles.css` y reemplázalos.

### 3. **Agregar tu Foto**

Reemplaza el `div` con class `placeholder-image` por:

```html
<img src="path/to/your/photo.jpg" alt="Foto del instructor" class="instructor-photo">
```

Agrega esto a `styles.css`:

```css
.instructor-photo {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
}
```

### 4. **Conectar con Hotmart**

Para redirigir a tu página de pago en Hotmart:

1. En `script.js`, busca la función `handlePurchaseClick()`
2. Reemplaza con tu enlace Hotmart:

```javascript
function handlePurchaseClick() {
    const hotmartLink = 'https://go.hotmart.com/TU_CODIGO_AQUI';
    window.location.href = hotmartLink;
}
```

3. Asegúrate de reemplazar todos los botones con la clase `.btn-primary` si quieres que todas dirijan a Hotmart.

## 📱 Usar en Diferentes Plataformas

### **Hostear con Netlify (Gratis)**

1. Crea una cuenta en https://netlify.com
2. Arrastra la carpeta "Pagina Web" a Netlify
3. Tu sitio estará en línea en minutos

### **Hostear con Vercel**

1. Crea una cuenta en https://vercel.com
2. Importa tu repositorio de Git
3. Vercel despliega automáticamente

### **Hostear con GithubPages (Gratis)**

1. Sube tu código a GitHub
2. Ve a Settings → Pages
3. Selecciona la rama main
4. Tu sitio estará en `https://tu-usuario.github.io/tu-repo`

### **En tu propio servidor**

Copia los archivos a tu servidor web y accede como cualquier sitio HTML normal.

## 🎯 Secciones de la Página

### **1. Hero (Portada)**
- Titular principal
- Subtítulo
- Dos botones CTA

### **2. Introduction**
- 4 tarjetas de beneficios
- Propuesta de valor

### **3. Course Content**
- 8 módulos del curso
- Descripción de lo que aprenderá

### **4. Pricing**
- Precio original
- Descuento (50%)
- Precio final
- Botón de compra

### **5. Bonuses**
- 6 bonificaciones gratis
- Iconos y valores

### **6. About**
- Información del instructor
- Historia personal
- Foto (placeholder)

### **7. Testimonials**
- 3 testimonios de estudiantes
- Calificación de estrellas

### **8. Guarantee**
- Garantía de 7 días
- Promesa de satisfacción

### **9. FAQ**
- 6 preguntas frecuentes
- Respuestas directas

### **10. Final CTA**
- Llamada final a la acción
- Botón de compra

### **11. Footer**
- Derechos de autor
- Enlaces de política/términos

## 🔧 Funcionalidades JavaScript

El archivo `script.js` incluye:

- **Smooth Scrolling**: Desplazamiento suave a secciones
- **Countdown Timer**: Cuenta regresiva de oferta (24 horas)
- **Button Handlers**: Gestión de clics en botones
- **Visibility Animations**: Animaciones al hacer scroll
- **FAQ Accordion**: Preguntas expandibles
- **Form Validation**: Validación de formularios
- **Event Tracking**: Seguimiento de eventos

## 📊 SEO Básico

Actualiza en `index.html`:

```html
<title>Tu Título Aquí - Curso de Resina</title>
<meta name="description" content="Descripción breve de tu curso">
<meta name="keywords" content="resina, accesorios, curso, emprende">
```

## 🚀 Mejoras Futuras

Puedes agregar:

1. **Video embed**: Agregar video de YouTube/Vimeo en la sección Hero
2. **Carrito de compras**: Para múltiples productos
3. **Email capture**: Formulario para capturar emails
4. **Pagos con Stripe**: Pago directo sin Hotmart
5. **Sistema de login**: Para acceso al curso
6. **Blog**: Para artículos de marketing
7. **Chat en vivo**: Para soporte al cliente

## 📝 Notas Importantes

- Esta es una **página de ventas estática** (solo HTML, CSS, JS)
- Para procesar pagos, debes usar Hotmart o un sistema de pagos como Stripe
- Los testimonios y precios son **placeholder** - reemplázalos con datos reales
- Asegúrate de tener los **derechos** de toda imagen/contenido que uses
- Incluye una **política de privacidad** válida

## ⚡ Performance Tips

- Comprime las imágenes (ImageOptim, TinyPNG)
- Minimiza CSS y JavaScript para producción
- Usa un CDN para servir archivos estáticos
- Implementa lazy loading para imágenes

## 🆘 Soporte

Para ediciones adicionales o cambios, puedes:

1. Editar directamente los archivos HTML/CSS/JS
2. Usar un editor como VS Code
3. Previsualizar guardando y abriendo en navegador

## 📄 Licencia

Libre para usar y modificar según tus necesidades.

---

¡Buena suerte con tu curso de resina! 🎨✨
