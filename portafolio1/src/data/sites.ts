export type Sites2 = {
    id: number;
    color: string;
    title: string;
    desc: string;
    img: string;
    link: string;
} 


export const Sites: Sites2[] = [
    {
        id: 1,
        color: "bg-gradient-to-r from-blue-300 to-violet-300",
        title: "Club deportivo - NextJS",
        desc: "Plataforma web para un club deportivo hecha con Next.js y TypeScript, que incluye autenticación con Auth0 y NextAuth, mapas interactivos con Leaflet y Google Maps, pagos con Stripe, comunicación en tiempo real con Socket.io y una interfaz moderna con Tailwind CSS y Radix UI.",
        img: "https://res.cloudinary.com/dosbg5xdd/image/upload/v1742855975/Captura_de_pantalla_2025-02-16_180433_zjwbdo.png",
        link: "https://club-active-center.vercel.app",
    },
    {
        id: 2,
        color: "bg-gradient-to-r from-red-300 to-blue-300",
        title: "Ecomm de Tecnologia - NextJS",
        desc: "Aplicación web desarrollada con Next.js y TypeScript, utilizando Tailwind CSS para una interfaz moderna y responsiva. Incorpora Axios para el consumo de APIs y SweetAlert2 para brindar una experiencia de usuario más interactiva mediante alertas personalizadas.",
        img: "https://res.cloudinary.com/dosbg5xdd/image/upload/v1742933302/imagen_2025-03-25_170817931_pzjhzr.png",
        link: "https://e-commers-tecno.vercel.app",
    },
    {
        id: 3,
        color: "bg-gradient-to-r from-violet-300 to-purple-300",
        title: "WOO Hospital - ReactJS(Vite)",
        desc: "Aplicación full stack desarrollada con React y Vite en el frontend, y Express con TypeScript en el backend. Incluye rutas dinámicas con React Router, formularios controlados con Formik, peticiones a APIs usando Axios y alertas interactivas con SweetAlert2. En el servidor, se utilizó Express junto a TypeORM para la gestión de base de datos PostgreSQL, con manejo de fechas usando Moment y configuración de entorno con dotenv.",
        img: "https://res.cloudinary.com/dosbg5xdd/image/upload/v1743034896/Captura_de_pantalla_2025-03-26_191925_jdgiux.png",
        link: "https://hospital-front-livid.vercel.app",
    },
    {
        id: 4,
        color: "bg-gradient-to-r from-violet-300 to-purple-300",
        title: "Errefe Producciones - Wordpress(Elementor Pro)",
        desc: "Sitio web creado con WordPress y personalizado con Elementor Pro, logrando un diseño visual atractivo y completamente responsive. El proyecto fue implementado en un entorno de hosting gestionado mediante cPanel y Blue Hosting, lo que permitió una configuración eficiente del dominio, seguridad SSL y gestión de archivos.",
        img: "https://res.cloudinary.com/dosbg5xdd/image/upload/v1745438505/Captura_de_pantalla_2025-04-23_154408_raaysu.png",
        link: "https://www.errefe.cl",
    }
] 