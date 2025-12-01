import Image from "next/image"
import { motion } from "framer-motion"

export const HeroAbout = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8 lg:py-12 gap-8 lg:gap-12">
      
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col gap-8 items-start justify-center py-8 lg:py-12">
        
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-regular leading-tight uppercase"
            style={{fontFamily: 'Javanese Text'}}
          >
            Quién<br />Soy
          </h1>
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p 
          className="text-xs sm:text-sm md:text-base text-gray-400 max-w-lg leading-relaxed"
          style={{fontFamily: 'Open Sans'}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Soy una desarrolladora Frontend Junior y diseñadora web que vive entre colores de Figma, componentes reutilizables y un montón de ideas que me despiertan a cualquier hora. Me encanta crear interfaces que sean tan lindas como funcionales, y disfruto obsesionarme con cada detalle hasta que todo se vea y se sienta perfecto. Trabajo con la mezcla más caótica y efectiva que tengo: creatividad compulsiva, curiosidad infinita y una capacidad ridícula para solucionar problemas justo cuando ya estaba aceptando mi destino. Me gusta colaborar, preguntar, proponer y mejorar todo lo que puedo, porque realmente creo que la web puede ser más bonita, más clara y más humana. Si algo necesita diseño, interacción, estructura o un toque de magia frontalera… ahí aparezco yo, café frío en mano y mil ganas de construir algo que deje huella.
        </motion.p>

        {/* QUOTE */}
        <motion.p 
          className="text-xs sm:text-sm md:text-base text-gray-500 italic max-w-lg"
          style={{fontFamily: 'Open Sans'}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ``Transformando visiones en experiencias web memorables, una línea de código a la vez.``
        </motion.p>
      </div>

      {/* IMAGE CONTAINER */}
      <motion.div 
        className="flex-1 relative w-full lg:w-4/5 flex items-center justify-center"
        style={{ minHeight: '400px' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div 
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center p-4 lg:p-8"
        >
          <div 
            style={{ 
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 20px rgba(158, 158, 158, 0.5)',
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            <Image 
              src="https://res.cloudinary.com/dosbg5xdd/image/upload/v1764555379/WhatsApp_Image_2025-11-29_at_9.16.10_PM-modified_efk0bw.jpg"
              alt="Ignacia - About"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}