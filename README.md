# 🌟 Portfolio Personal - María Ignacia Fernández

Un portafolio web moderno y responsivo que muestra mis habilidades como desarrolladora Frontend Junior y diseñadora web. Construido con las últimas tecnologías web para ofrecer una experiencia de usuario excepcional.

## ✨ Características principales

- 🎨 **Diseño moderno**: Interfaz atractiva con animaciones fluidas
- 📱 **Completamente responsivo**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento optimizado**: Carga rápida y navegación suave
- 🌙 **Modo oscuro/claro**: Alternancia entre temas
- 📧 **Formulario de contacto**: Comunicación directa funcional
- 🚀 **Animaciones interactivas**: Efectos visuales con Framer Motion
- 🎯 **SEO optimizado**: Metadatos y estructura optimizada para buscadores

## 🚀 Tecnologías utilizadas

### Frontend
- **Next.js 14** - Framework de React con App Router
- **React.js** - Biblioteca para interfaces de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Framework de CSS para diseño moderno
- **Framer Motion** - Animaciones y transiciones fluidas
- **React Hook Form** - Gestión eficiente de formularios
- **Lucide React** - Iconos modernos y escalables

### Herramientas y servicios
- **Vercel** - Deploy y hosting
- **EmailJS** - Servicio de envío de emails
- **Google Analytics** - Análisis de tráfico web
- **Cloudinary** - Gestión y optimización de imágenes

## 🏗️ Instalación

### Requisitos previos
- Node.js (>= 18)
- npm, yarn, pnpm o bun
- Git

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Ignacia22/portfolio.git
cd portfolio
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env.local
```
Configura las variables necesarias:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
NEXT_PUBLIC_GA_ID=tu_google_analytics_id
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. **Abrir en el navegador**
Visita [http://localhost:3000](http://localhost:3000)

## 📁 Estructura del proyecto

```
portfolio/
├── app/                    # App Router de Next.js
│   ├── about/             # Página sobre mí
│   ├── portfolio/         # Página de proyectos
│   ├── contact/           # Página de contacto
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de interfaz
│   ├── sections/         # Secciones de las páginas
│   ├── forms/            # Componentes de formularios
│   └── animations/       # Componentes con animaciones
├── hooks/                # Hooks personalizados
├── lib/                  # Configuraciones de librerías
├── utils/                # Funciones utilitarias
├── types/                # Tipos de TypeScript
├── constants/            # Constantes de la aplicación
├── data/                 # Datos estáticos (proyectos, skills)
└── public/               # Archivos estáticos
    ├── images/           # Imágenes del proyecto
    ├── icons/            # Iconos personalizados
    └── documents/        # CV y documentos
```

## 🎯 Secciones del portafolio

### 🏠 Inicio
- Hero section con presentación personal
- Animaciones de bienvenida
- Enlaces rápidos a secciones principales
- Call-to-action para contacto

### 👩‍💻 Sobre mí
- Biografía profesional
- Timeline de estudios y experiencia
- Skills técnicos con animaciones
- Certificaciones y logros

### 💼 Proyectos
- Galería de proyectos destacados
- Filtros por tecnología
- Modales con detalles completos
- Enlaces a demos y repositorios

### 📧 Contacto
- Formulario de contacto funcional
- Información de contacto
- Enlaces a redes sociales
- Mapa de ubicación (opcional)

## 🎨 Personalización

### Colores y temas
Los colores principales se pueden personalizar en `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### Contenido
Los datos del portafolio se encuentran en la carpeta `data/`:
- `projects.ts` - Información de proyectos
- `skills.ts` - Habilidades técnicas
- `experience.ts` - Experiencia laboral y educación

## 🚀 Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linting del código
npm run type-check   # Verificación de tipos
npm run analyze      # Análisis del bundle
```

## 📊 Performance y SEO

### Optimizaciones implementadas
- ⚡ Lazy loading de imágenes
- 🔄 Code splitting automático
- 📦 Optimización de bundles
- 🖼️ Compresión de imágenes
- 🔍 Meta tags optimizados
- 📱 Responsive images

### Métricas objetivo
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95

## 🌐 Deploy

### Vercel (Automático)
1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno
3. Deploy automático con cada push a main

### Manual
```bash
npm run build
npm run start
```

## 📧 Formulario de contacto

El formulario utiliza EmailJS para enviar mensajes:
1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Crea un template de email
4. Añade las credenciales en `.env.local`

## 🔧 Mantenimiento

### Actualizar contenido
- Proyectos: Edita `data/projects.ts`
- Skills: Modifica `data/skills.ts`
- CV: Reemplaza archivo en `public/documents/`

### Añadir nuevos proyectos
```typescript
// data/projects.ts
export const projects = [
  {
    id: 'nuevo-proyecto',
    title: 'Nuevo Proyecto',
    description: 'Descripción del proyecto...',
    technologies: ['React', 'TypeScript'],
    liveUrl: 'https://proyecto.com',
    githubUrl: 'https://github.com/usuario/proyecto',
    image: '/images/proyecto.jpg'
  }
]
```

## 📧 Contacto

**María Ignacia Fernández** - Frontend Developer  
📧 Email: [mfernandezpolanco@gmail.com](mailto:mfernandezpolanco@gmail.com)  
🔗 LinkedIn: [www.linkedin.com/in/maria-ignacia-fernandez-p]  
🌐 Portfolio: [https://ignacia-fernandez.vercel.app]  
📱 GitHub: [@Ignacia22](https://github.com/Ignacia22)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

⭐ **¿Te gustó el portfolio? ¡Dale una estrella en GitHub!**
