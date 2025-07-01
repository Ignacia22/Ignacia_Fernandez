"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <motion.div 
      className="h-full" 
      initial={{y:"-200vh"}} 
      animate={{y:"0%"}} 
      transition={{duration: 1}}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER - Ajustado para trabajar con TransitionProvider */}
        <div className="h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-full lg:w-1/2 relative">
          <Image 
            src="https://res.cloudinary.com/dosbg5xdd/image/upload/v1741316660/anime_zflcrc.png" 
            alt="portada"
            fill 
            className="object-contain lg:object-cover"
            priority
          />
        </div>
        
        {/* TEXT CONTAINER - Optimizado para el espacio limitado */}
        <div className="flex-1 lg:h-full lg:w-1/2 flex flex-col gap-3 sm:gap-4 lg:gap-6 items-center justify-start lg:justify-center pt-2 lg:pt-0 text-blue-950">
          {/* TITLE - Tamaño reducido para ajustarse mejor */}
          <h1 className="text-xl sm:text-2xl sm:mt-10 md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center lg:text-left">
            Vive la experiencia digital. Diseña conmigo
          </h1>
          
          {/* DESC - Texto más compacto */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-center lg:text-left">
            Creo sitios web que combinan estética y funcionalidad para destacar tu marca en el mundo digital. Como diseñadora y desarrolladora frontend, te ofrezco soluciones personalizadas que no solo capturan la atención visual sino que también proporcionan una experiencia fluida al usuario. Hagamos realidad tu proyecto y llevemos juntos tu presencia web al siguiente nivel.
          </p>
          
          {/* BUTTONS - Con margen inferior para separar del borde */}
          <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto sm:mt-2 mb-6 sm:mb-8 lg:mb-0 lg:mt-4">
            <Link href="/portafolio" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto py-2 sm:py-3 px-3 sm:px-4 rounded-lg ring-1 ring-black bg-blue-950 text-white hover:bg-white hover:text-blue-950 transition-colors text-sm">
                Ve mis trabajos
              </button>
            </Link>

            <Link href="/contact" className="w-full sm:w-auto">
              <button 
                className="w-full sm:w-auto py-2 sm:py-3 px-3 sm:px-4 rounded-lg ring-1 ring-blue-950 hover:bg-white transition-colors text-sm"
              >
                Contáctame
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}