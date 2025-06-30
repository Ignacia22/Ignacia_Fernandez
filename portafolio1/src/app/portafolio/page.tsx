"use client"

import { Sites } from "@/data/sites";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

// Definimos los tipos necesarios
interface ActiveImagesType {
  [key: number]: number;
}

const PortafolioPage = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  
  // Inicializar el estado con todos los IDs de los sitios
  const [activeImages, setActiveImages] = useState<ActiveImagesType>({});
  
  // Inicializar el estado correctamente al cargar
  useEffect(() => {
    const initialState = Sites.reduce<ActiveImagesType>((acc, site) => {
      acc[site.id] = 0;
      return acc;
    }, {});
    setActiveImages(initialState);
  }, []);

  // Función con parámetros tipados
  const extractTechnologies = (desc: string): string[] => {
    const techKeywords = [
      "React", "Next.js", "TypeScript", "Tailwind CSS", "Auth0", "NextAuth", 
      "Leaflet", "Google Maps", "Stripe", "Socket.io", "Radix UI", "Axios", 
      "SweetAlert2", "Vite", "Express", "TypeORM", "PostgreSQL", "Moment", 
      "dotenv", "React Router", "Formik", "WordPress", "Elementor Pro",
      "Framer Motion", "EmailJS", "Angular", "RxJS", "zone.js"
    ];
    
    // Detectar tecnologías incluso con versiones
    const detectedTechs: string[] = [];
    
    for (const tech of techKeywords) {
      const regex = new RegExp(`${tech}\\s*(\\d+)?`, 'i');
      if (regex.test(desc)) {
        const match = desc.match(new RegExp(`${tech}\\s*(\\d+)`, 'i'));
        if (match && match[1]) {
          detectedTechs.push(`${tech} ${match[1]}`);
        } else {
          detectedTechs.push(tech);
        }
      }
    }
    
    return detectedTechs;
  };

  // Funciones mejoradas para manejar las imágenes
  const nextImage = (siteId: number, e?: React.MouseEvent): void => {
    // Prevenir propagación de eventos
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    // Encontrar el sitio por ID de manera segura
    const site = Sites.find(s => s.id === siteId);
    
    // Validar que el sitio exista
    if (!site) {
      console.error(`Site with ID ${siteId} not found`);
      return;
    }
    
    const images = site.carouselImages;
    
    // Validar que el sitio tenga imágenes
    if (!images || images.length <= 1) {
      console.error(`Site with ID ${siteId} has no images or only one image`);
      return;
    }
    
    // Usar || 0 como fallback en caso de que no esté definido
    const currentIndex = activeImages[siteId] || 0;
    const newIndex = currentIndex >= images.length - 1 ? 0 : currentIndex + 1;
    
    // Actualizar el estado de manera segura con una función
    setActiveImages(prevState => ({
      ...prevState,
      [siteId]: newIndex
    }));
  };

  const prevImage = (siteId: number, e?: React.MouseEvent): void => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    
    const site = Sites.find(s => s.id === siteId);
    if (!site) {
      console.error(`Site with ID ${siteId} not found`);
      return;
    }
    
    const images = site.carouselImages;
    if (!images || images.length <= 1) {
      console.error(`Site with ID ${siteId} has insufficient images`);
      return;
    }
    
    const currentIndex = activeImages[siteId] || 0;
    const newIndex = currentIndex <= 0 ? images.length - 1 : currentIndex - 1;
    
    setActiveImages(prevState => ({
      ...prevState,
      [siteId]: newIndex
    }));
  };
  
  // Función para obtener gradientes basados en el ID del sitio
  const getGradientStyle = (id: number): React.CSSProperties => {
    switch(id % 4) {
      case 0:
        return { background: 'linear-gradient(to right, rgb(233, 213, 255), rgb(167, 139, 250))' }; // Lavanda claro a morado medio
      case 1:
        return { background: 'linear-gradient(to right, rgb(139, 92, 246), rgb(91, 33, 182))' }; // Morado medio a morado oscuro
      case 2:
        return { background: 'linear-gradient(to right, rgb(196, 181, 253), rgb(139, 92, 246))' }; // Morado claro a morado medio
      case 3:
        return { background: 'linear-gradient(to right, rgb(91, 33, 182), rgb(139, 92, 246))' }; // Morado oscuro a morado medio
      default:
        return { background: 'linear-gradient(to right, rgb(196, 181, 253), rgb(139, 92, 246))' }; // Default
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center">
          <motion.div className="relative">
            <h1 className="text-6xl md:text-8xl text-center text-blue-950 font-bold relative z-10">
              Mis Trabajos
            </h1>
            <motion.div
              className="absolute -z-10 bg-gradient-to-r from-purple-200 to-violet-200 rounded-full opacity-70"
              style={{
                width: "120%",
                height: "120%",
                top: "-10%",
                left: "-10%",
              }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute -z-20 bg-gradient-to-r from-violet-200 to-purple-200 rounded-full opacity-50"
              style={{
                width: "150%",
                height: "150%",
                top: "-25%",
                left: "-25%",
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {/* Primer panel decorativo - también en tono morado */}
            <div 
              className="h-screen w-screen flex items-center justify-center"
              style={{ background: 'linear-gradient(to right, rgb(167, 139, 250), rgb(196, 181, 253))' }} // Morado medio a morado claro
            />
            
            {/* Aquí mapeamos los sitios con sus gradientes de morado */}
            {Sites.map((site) => {
              // Solo extraer tecnologías si site y site.desc existen
              const technologies = site && site.desc ? extractTechnologies(site.desc) : [];
              const techType = site.title && site.title.includes("WordPress") ? "🌐" : "💻";
              
              // Usar id como clave si existe, de lo contrario usar índice
              const siteKey = site.id || 0;
              
              // Asegurarse de que activeImages[siteKey] existe
              const activeIndex = activeImages[siteKey] !== undefined ? activeImages[siteKey] : 0;
              
              return (
                <div
                  style={getGradientStyle(site.id)}
                  className="h-screen w-screen flex items-center justify-center"
                  key={siteKey}
                >
                  <div className="flex flex-col md:flex-row gap-8 text-white max-w-7xl mx-auto px-6 py-8">
                    {/* Sección de imagen mejorada con efectos 3D */}
                    <div className="md:w-1/2 relative rounded-xl bg-black/10 backdrop-blur-sm p-2">
                      <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] perspective-1000 overflow-hidden rounded-lg">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeIndex}
                            className="relative w-full h-full rounded-xl overflow-hidden"
                            initial={{ opacity: 0, rotateY: -10, scale: 0.95 }}
                            animate={{ 
                              opacity: 1, 
                              rotateY: 0,
                              scale: 1,
                              transition: { duration: 0.5 }
                            }}
                            exit={{ 
                              opacity: 0, 
                              rotateY: 10,
                              scale: 0.95,
                              transition: { duration: 0.3 } 
                            }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Overlay con degradado para mejorar legibilidad */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                            
                            {/* Verificar que las imágenes y activeIndex son válidos */}
                            {site.carouselImages && site.carouselImages.length > 0 && (
                              <motion.img
                                src={site.carouselImages[activeIndex]}
                                alt={`${site.title} - Imagen ${activeIndex + 1}`}
                                className="object-cover w-full h-full transition-all duration-700"
                                layoutId={`image-${siteKey}-${activeIndex}`}
                              />
                            )}
                            
                            {/* Indicador del tipo de proyecto con fondo negro */}
                            <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold z-20 flex items-center gap-2 text-white shadow-lg">
                              <span aria-hidden="true">{techType}</span>
                              {site.title && site.title.split(" - ")[1] || (technologies.length > 0 ? technologies[0] : "Web")}
                            </div>
                            
                            {/* Número de imagen */}
                            <div className="absolute bottom-4 right-4 text-white/90 font-mono z-20 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md text-sm">
                              {activeIndex + 1}/{site.carouselImages ? site.carouselImages.length : 0}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                        
                        {/* Solo mostrar controles si hay más de una imagen */}
                        {site.carouselImages && site.carouselImages.length > 1 && (
                          <>
                            <button 
                              onClick={(e) => prevImage(site.id, e)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md p-3 rounded-full text-white z-20 hover:bg-black/60 transition-all shadow-lg hover:shadow-xl"
                              aria-label="Imagen anterior"
                            >
                              <span aria-hidden="true">←</span>
                            </button>
                            <button 
                              onClick={(e) => nextImage(site.id, e)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md p-3 rounded-full text-white z-20 hover:bg-black/60 transition-all shadow-lg hover:shadow-xl"
                              aria-label="Imagen siguiente"
                            >
                              <span aria-hidden="true">→</span>
                            </button>
                          </>
                        )}
                        
                        {/* Indicadores de imagen con mejor feedback visual */}
                        {site.carouselImages && site.carouselImages.length > 1 && (
                          <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
                            {site.carouselImages.map((_, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  setActiveImages({...activeImages, [site.id]: index})
                                }}
                                className={`h-1.5 rounded-full transition-all ${
                                  activeIndex === index 
                                    ? "bg-white w-8" 
                                    : "bg-white/40 w-4"
                                }`}
                                aria-label={`Ver imagen ${index + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Contenido de texto con animaciones escalonadas */}
                    <div className="md:w-1/2 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="bg-black/10 backdrop-blur-sm p-6 rounded-xl"
                      >
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                          {site.title}
                        </h1>
                        
                        {/* Tags de tecnología extraídos de la descripción */}
                        {technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {technologies.map((tech, index) => (
                              <motion.span 
                                key={index}
                                className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + (index * 0.1) }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        )}
                        
                        <p className="text-white/90 mb-8 text-base lg:text-lg leading-relaxed">
                          {site.desc}
                        </p>
                        
                        <motion.div 
                          className="flex gap-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.4 }}
                        >
                          <Link 
                            href={site.link}
                            className="group flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-lg font-medium transition-all hover:bg-opacity-90 hover:shadow-xl"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver demo
                            <span 
                              aria-hidden="true" 
                              className="transition-transform group-hover:translate-x-1"
                            >
                              ↗
                            </span>
                          </Link>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold">¿Tienes un proyecto?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="circlePath"
                d="M150 90 a 60,60 0 1,1 0 120 a 60,60 0 1,1 0 -120"
                stroke="#000000"
                strokeWidth="1"
                fill="none"
              />
            </defs>
            <text fill="#000000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and Web Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            CONTÁCTAME
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortafolioPage;