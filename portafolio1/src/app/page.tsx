"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {

  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration: 1}}>
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
       <Image 
       src="https://res.cloudinary.com/dosbg5xdd/image/upload/v1741316660/anime_zflcrc.png" 
       alt="portada"
       fill 
       className="object-cover"
       />
    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center text-blue-950">
    {/* TITLE */}
       <h1 className="text-3xl md:text-5xl font-bold">Vive la experiencia digital. Diseña conmigo</h1>
       {/* DESC */}
       <p className="md:text-lg">
       Creo sitios web que combinan estética y funcionalidad para destacar tu marca en el mundo digital. Como diseñadora y desarrolladora frontend, te ofrezco soluciones personalizadas que no solo capturan la atención visual sino que también proporcionan una experiencia fluida al usuario. Hagamos realidad tu proyecto y llevemos juntos tu presencia web al siguiente nivel.
       </p>
       {/* BUTTONS */}
       <div className="w-full flex gap-4">
        <Link href="/portafolio">
          <button className="p-4 rounded-lg ring-1 ring-black bg-blue-950 text-white hover:bg-white hover:text-blue-950">
            Ve mis trabajos
          </button>
        </Link>

        <Link href="/contact">
        <button 
        className="p-4 rounded-lg ring-1 ring-blue-950 hover:bg-white"
        >Contactame</button>
        </Link>
       </div>
    </div>
    </div>
    </motion.div>
  );
}
