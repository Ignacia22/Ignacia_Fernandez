"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { Accordion } from "@/components/Accordion/Accordion";
import { ArrowDownIcon } from "@/components/Accordion/icons";

export default function HomePage() {


  return (
    <motion.div 
      className="min-h-screen bg-black text-white" 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{duration: 0.8}}
    >
      {/* HERO SECTION */}
      <div className="min-h-[calc(100vh-6rem)] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-8 lg:py-0 gap-8 lg:gap-12">
        
        {/* TEXT CONTAINER - Left side on desktop */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 items-start justify-center py-20 lg:py-[9rem] lg:pr-10">
          
          {/* TITLE - Javanese Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-normal leading-tight uppercase"
              style={{fontFamily: 'Javanese Text'}}
            >
              Hola,<br />
              <span className="text-white bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 uppercase">
                Soy Ignacia
              </span>
            </h1>
          </motion.div>

          {/* SUBTITLE - Open Sans */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed"
            style={{fontFamily: 'Open Sans'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ``Frontend Developer & Diseñadora Web``
          </motion.p>

          {/* DESCRIPTION - Open Sans */}
          <motion.p 
            className="text-xs sm:text-sm md:text-base font-light text-gray-300 max-w-lg leading-relaxed"
            style={{fontFamily: 'Open Sans', fontWeight: "lighter"}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Creo sitios web que mezclan estética, orden y una experiencia pensada de verdad para las personas. Como diseñadora y desarrolladora frontend, me enfoco en construir interfaces limpias, fluidas y con intención. Si tienes una idea dando vueltas y quieres convertirla en algo real, trabajemos juntos y llevemos tu presencia web al siguiente nivel.
          </motion.p>

          {/* Deatline - Open Sans */}
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-gray-300 font-extralight italic max-w-lg leading-relaxed"
            style={{fontFamily: 'Open Sans'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ``Diseño y desarrollo webs con cariño, café y un poquito de caos creativo``
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div 
            className="w-full flex flex-col sm:flex-row gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/proyectos" className="flex-1 sm:flex-none">
              <button 
                className="w-full px-6 py-3 sm:py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
                style={{fontFamily: 'Open Sans'}}
              >
                Ve mis trabajos
              </button>
            </Link>

            <Link href="/contact" className="flex-1 sm:flex-none">
              <button 
                className="w-full px-6 py-3 sm:py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                style={{fontFamily: 'Open Sans'}}
              >
                Contáctame
              </button>
            </Link>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.div 
            className="hidden lg:flex flex-col items-center gap-2 mt-auto pt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-xs text-gray-500" style={{fontFamily: 'Open Sans'}}>Scroll para explorar un poco</p>
            <ArrowDownIcon />
          </motion.div>


        </div>

        {/* IMAGE CONTAINER - Right side on desktop */}
        <motion.div 
          className="
            relative
            w-full 
            lg:w-4/5 
            flex 
            items-center 
            justify-center 
            top-4
    
            min-h-[400px]
            rounded-xl
            overflow-hidden

            brightness-110
            contrast-110
            shadow-[0_25px_60px_rgba(0,0,0,0.35)]
            opacity-95

            transition-all
            duration-500
            hover:opacity-100
            hover:brightness-125
            hover:contrast-125
            hover:-translate-y-1
          "
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src="https://res.cloudinary.com/dosbg5xdd/image/upload/q_70/f_auto/v1764436044/pexels-pixabay-208984_scftxt.jpg" 
           alt="Ignacia - Developer & Designer"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 80vw"
          />
        </motion.div>


      </div>

      {/* ACCORDION SECTION */}
      <div className="min-h-screen bg-black px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-16 lg:py-48 flex flex-col ">
        
        <Accordion/>
      </div>
    </motion.div>
  );
}