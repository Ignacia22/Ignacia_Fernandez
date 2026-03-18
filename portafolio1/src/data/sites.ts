export type Sites2 = {
  id: number;
  title: string;
  tagline: string;
  desc: string;
  img: string;
  link: string;
  carouselImages: string[];
  github: string;
  characteristics: string[];
  technologies: string[];
};

export const Sites: Sites2[] = [
  {
    id: 1,
    title: "Club deportivo",
    tagline: "Plataforma full-stack para reservas y pagos deportivos.",
    desc: `Muchos clubes deportivos tienen sistemas poco intuitivos para gestionar reservas, pagos y acceso a sus instalaciones. 

    Para resolverlo desarrollé una plataforma web que permite a los usuarios navegar por el club, reservar actividades, ubicar sedes en mapas interactivos y realizar pagos online de forma sencilla.

    El proyecto integra autenticación segura, comunicación en tiempo real y una experiencia moderna enfocada en velocidad y usabilidad. Fue uno de mis proyectos más complejos y me permitió combinar diseño de interfaz con funcionalidades avanzadas.`,
    img: "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1742855975/Captura_de_pantalla_2025-02-16_180433_zjwbdo.png",
    link: "https://club-active-center-omega.vercel.app",
    carouselImages: [
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1742855975/Captura_de_pantalla_2025-02-16_180433_zjwbdo.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1745440293/Captura_de_pantalla_2025-04-23_162935_xo311f.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1745440294/Captura_de_pantalla_2025-04-23_163041_lvz00c.png",
    ],
    github: "https://github.com/Ignacia22/ClubActiveCenter",
    characteristics: [
      "Autenticación segura de usuarios",
      "Sistema de reservas de actividades",
      "Mapas interactivos para ubicar sedes",
      "Pagos online integrados",
      "Comunicación en tiempo real",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Auth0",
      "NextAuth",
      "Leaflet",
      "Google Maps",
      "Stripe",
      "Socket.io",
      "Radix UI",
    ],
  },
  {
    id: 2,
    title: "Ecomm de Tecnologia",
    tagline: "E-commerce con catálogo dinámico y carrito interactivo.",
    desc: `E-commerce de productos tecnológicos diseñado para ofrecer una experiencia de compra rápida, clara y eficiente.

La interfaz fue pensada para facilitar la navegación entre productos, mostrar información relevante de forma ordenada y permitir agregar artículos al carrito de manera fluida.

Trabajé la estructura del frontend, el consumo de APIs y la lógica del carrito para lograr una aplicación estable, intuitiva y visualmente atractiva.`,
    img: "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1764263097/imagen_2025-11-27_140455018_j8ojyn.png",
    link: "https://e-commers-tecno.vercel.app",
    carouselImages: [
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1764263097/imagen_2025-11-27_140455018_j8ojyn.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1745440963/Captura_de_pantalla_2025-04-23_163952_vldxpy.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1745440963/Captura_de_pantalla_2025-04-23_164137_erinkf.png",
    ],
    github: "https://github.com/Ignacia22/E-commers-Tecno",
    characteristics: [
      "Catálogo dinámico de productos",
      "Carrito de compras interactivo",
      "Consumo de API para productos",
      "Sistema de alertas visuales",
      "Diseño responsive",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "SweetAlert2",
    ],
  },
  {
    id: 3,
    title: "WOO Hospital",
    tagline: "Gestión de turnos médicos con arquitectura full-stack.",
    desc: `Aplicación full-stack desarrollada para gestionar turnos médicos, pacientes y rutas internas dentro de un sistema de salud.

En el frontend diseñé una interfaz clara y fácil de usar, mientras que en el backend implementé toda la lógica con TypeScript y Express conectada a una base de datos PostgreSQL.

Este proyecto me permitió profundizar en arquitectura de aplicaciones, validaciones, seguridad y manejo de flujos complejos propios de sistemas reales.`,
    img: "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1743034896/Captura_de_pantalla_2025-03-26_191925_jdgiux.png",
    link: "https://hospital-front-livid.vercel.app",

    carouselImages: [
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1743034896/Captura_de_pantalla_2025-03-26_191925_jdgiux.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1747344376/Captura_de_pantalla_2025-05-15_172514_evhjuy.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1747344376/Captura_de_pantalla_2025-05-15_172545_sn1eyr.png",
    ],
    github: "https://github.com/Ignacia22/Hospital-front",
    characteristics: [
      "Gestión de pacientes",
      "Sistema de turnos médicos",
      "API backend con Express",
      "Base de datos PostgreSQL",
      "Validaciones y seguridad de datos",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "React Router",
      "Formik",
      "Axios",
      "SweetAlert2",
      "Express",
      "TypeORM",
      "PostgreSQL",
      "dotenv",
      "Moment.js",
    ],
  },
  {
    id: 4,
    title: "Errefe Producciones",
    tagline: "Sitio web para productora audiovisual.",
    desc: `Sitio web desarrollado para una productora audiovisual con el objetivo de presentar su trabajo de forma profesional y visualmente atractiva.

Trabajé en el diseño de la interfaz, la estructura del contenido y la implementación completa del sitio, asegurando una experiencia responsive y optimizada para distintos dispositivos.

Además configuré el hosting y la estructura del proyecto para que el cliente pudiera mantener el sitio de manera sencilla.`,
    img: "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1745438505/Captura_de_pantalla_2025-04-23_154408_raaysu.png",
    link: "https://www.errefe.cl",
    carouselImages: [
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1745438505/Captura_de_pantalla_2025-04-23_154408_raaysu.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1745440612/Captura_de_pantalla_2025-04-23_163456_z1m9wx.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1745440613/Captura_de_pantalla_2025-04-23_163611_xddftg.png",
    ],
    github: "",
    characteristics: [
      "Diseño visual enfocado en mostrar portafolio audiovisual",
      "Estructura clara para presentar proyectos y servicios",
      "Sitio completamente responsive para distintos dispositivos",
      "Optimización de imágenes para mejorar rendimiento",
      "Configuración completa de hosting y despliegue",
    ],
    technologies: [
      "WordPress",
      "Elementor Pro",
      "cPanel",
      "BlueHosting",
      "SSL",
      "Responsive Design",
    ],
  },
  {
    id: 5,
    title: "121Expreso",
    tagline: "Radio online con reproductor en vivo.",
    desc: `Sitio web para una radio de rock en vivo diseñado para transmitir energía desde el primer momento.

La interfaz combina animaciones, movimientos suaves y una estética oscura inspirada en el mundo musical, creando una experiencia inmersiva para los usuarios.

Incluye reproducción de radio en vivo, navegación entre secciones y un formulario de contacto funcional, logrando un sitio dinámico y con identidad propia.`,
    img: "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1745438505/Captura_de_pantalla_2025-04-23_154408_raaysu.png",
    link: "https://121expreso.com.ar",
    carouselImages: [
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1746658693/121expreso-imagenSitio_to4ctk.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1746662915/Captura_de_pantalla_2025-05-07_200750_qasb7z.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1746658817/Captura_de_pantalla_2025-05-07_185915_srs0hb.png",
    ],
    github: "https://github.com/Ignacia22/121expreso",
    characteristics: [
      "Reproductor de radio en vivo integrado",
      "Animaciones y transiciones suaves en la interfaz",
      "Diseño oscuro inspirado en estética rock",
      "Navegación clara entre secciones musicales",
      "Formulario de contacto funcional",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Framer Motion",
      "React Router",
      "EmailJS",
    ],
  },
  {
    id: 6,
    title: "LibroMart",
    tagline: "Catálogo de libros con filtros y búsqueda.",
    desc: `Catálogo web para explorar libros de forma rápida mediante filtros por categoría, autor o nombre.

La aplicación fue desarrollada con Angular e incluye navegación estructurada, formularios reactivos y un sistema de búsqueda eficiente para mejorar la experiencia del usuario.

Este proyecto fue parte de mi proceso de aprendizaje de Angular 19 y me permitió entender cómo estructurar aplicaciones más grandes utilizando componentes, servicios y rutas.`,
    img: "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1745438505/Captura_de_pantalla_2025-04-23_154408_raaysu.png",
    link: "https://libreria-angular.vercel.app/books",
    carouselImages: [
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1751307769/Captura_de_pantalla_2025-06-30_142109_hlidg3.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1751307768/Captura_de_pantalla_2025-06-30_142214_ywkcks.png",
      "https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1751307768/Captura_de_pantalla_2025-06-30_142140_hsybzl.png",
    ],
    github: "https://github.com/Ignacia22/libreria-angular",
    characteristics: [
      "Búsqueda de libros por nombre, autor o categoría",
      "Sistema de filtrado dinámico para explorar el catálogo",
      "Formularios reactivos con Angular",
      "Arquitectura modular con componentes y servicios",
      "Navegación estructurada mediante rutas",
    ],
    technologies: [
      "Angular 19",
      "TypeScript",
      "RxJS",
      "Angular Router",
      "Angular Forms",
      "Zone.js",
    ],
  },
];
